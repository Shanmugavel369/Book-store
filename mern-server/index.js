const express = require('express');
const app = express();
const port = process.env.PORT || 5001;
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

// Middleware
app.use(cors());
app.use(express.json());

// Default route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// MongoDB configuration
const uri = "mongodb+srv://bookstore:GxZtVDw2VW9hetg@cluster0.uzdlniw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
  useUnifiedTopology: true,
});

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();

    const booksCollections = client.db("BookInventory").collection("books");

    // POST method to insert a sample book to the database
    app.post("/upload-book", async (req, res) => {
      try {
        const data = req.body;
        const result = await booksCollections.insertOne(data);
        res.send(result);
      } catch (error) {
        res.status(500).send({ error: 'Failed to upload book' });
      }
    });

    // GET method to get all books
    app.get("/all-books", async (req, res) => {
      try {
        const books = await booksCollections.find().toArray();
        res.send(books);
      } catch (error) {
        res.status(500).send({ error: 'Failed to fetch books' });
      }
    });

    // to get single  book 
    app.get ("/book/:id", async (req, res) => {
      const id =req.params.id;
      const filter ={_id:new ObjectId(id)};
      const result =await booksCollections.findOne(filter);
      res.send(result);
    })

    // PATCH method to update book data
    app.patch("/book/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const updateBookData = req.body;
        const filter = { _id: new ObjectId(id) };
        const options = { upsert: false };

        const updateDoc = {
          $set: {
            ...updateBookData
          }
        };
        const result = await booksCollections.updateOne(filter, updateDoc, options);
        res.send(result);
      } catch (error) {
        res.status(500).send({ error: 'Failed to update book' });
      }
    });

    //delete a book 

    app.delete("/book/:id", async (req, res) =>{
      const id=req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result =await booksCollections.deleteOne(filter);
      res.send(result);
    })

    //find book by category


    app.get("/all-books",async(res,req)=>{
      let query ={};
      if(req.query?.category){
        query={category:req.query.category}
      }
      const result =await booksCollections.find(query).toArray();
      res.send(result);
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (err) {
    console.error(err);
  }
}

run().catch(console.dir);

app.listen(port, () => {
  console.log(`Your BookStore is running on port ${port}`);
});

// Handle process termination gracefully
process.on('SIGINT', async () => {
  console.log('SIGINT signal received: closing MongoDB client');
  await client.close();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log('SIGTERM signal received: closing MongoDB client');
  await client.close();
  process.exit(0);
});
