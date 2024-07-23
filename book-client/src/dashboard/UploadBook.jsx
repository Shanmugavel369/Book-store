import React, { useState } from "react";
import { Button, Label, TextInput, Select } from "flowbite-react";

const UploadBook = () => {
  const bookCategory = [
    "select-category",
    "Fiction",
    "Non-Fiction",
    "Mistery",
    "Programming",
    "History",
    "Biography",
    "Self-Help",
    "Thriller",
    "Romance",
    "Fantasy",
    "Horror",
    "Bibilography",
    "Autobiography",
    "Memoir",
    "Business",
    "Children",
    "DarkRomance",
    "Travel",
    "Religion",
    "Art and Design",
  ];
  
  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategory[0]);

  const handleChangeSelectedValue = (event) => {
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  };

  const handleBookSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const author = form.author.value;
    const imageURL = form.imageURL.value;
    const category = form.category.value;
    const bookpdf = form.bookpdf.value;
    const year = form.year.value;
    const pages = form.pages.value;
    
    const bookObj = {
      title,
      author,
      imageURL,
      category,
      bookpdf,
      year,
      pages
    };
    console.log(bookObj);
    //send data to db
    fetch("http://localhost:5001/upload-book",{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(bookObj)
    }).then(res=>res.json()).then(data=>{
      alert("Book uploaded sucessfully!")
    })
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Upload a Book</h2>
      <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        <div className="flex gap-8 ">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="title" value="Book Title" />
            </div>
            <TextInput
              name="title"
              id="title"
              type="text"
              placeholder="Book Name"
              required
            />
          </div>

          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="author" value="Author Name" />
            </div>
            <TextInput
              name="author"
              id="author"
              type="text"
              placeholder="Author Name"
              required
            />
          </div>
        </div>

        <div className="flex gap-8 ">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image URL" />
            </div>
            <TextInput
              name="imageURL"
              id="imageURL"
              type="text"
              placeholder="Book Image URL"
              required
            />
          </div>

          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <Select
              id="inputState"
              name="category"
              className="w-full rounded"
              value={selectedBookCategory}
              onChange={handleChangeSelectedValue}
            >
              {bookCategory.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </div>
        </div>

        <div className="flex gap-8 ">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="year" value="Year" />
            </div>
            <TextInput
              name="year"
              id="year"
              type="number"
              placeholder="Year"
              required
            />
          </div>

          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="pages" value="Number of Pages" />
            </div>
            <TextInput
              name="pages"
              id="pages"
              type="number"
              placeholder="Number of Pages"
              required
            />
          </div>
        </div>

        <div className="w-full">
          <div className="mb-2 block">
            <Label htmlFor="bookpdf" value="Book PDF" />
          </div>
          <TextInput
            id="bookpdf"
            name="bookpdf"
            placeholder="Book PDF URL"
            required
            type="text"
            className="w-full"
          />
        </div>

        <Button type="submit" className="mt-5 bg-blueGreen text-white">
          Upload book
        </Button>
      </form>
    </div>
  );
};

export default UploadBook;
