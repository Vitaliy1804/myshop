import React from 'react';

const Categories = () => {
    const data = [
        {
            categoryImg: "./images/category/cat1.png",
            categoryName: "Fashion",
        },
        {
            categoryImg: "./images/category/cat2.png",
            categoryName: "Electronic",
          },
          {
            categoryImg: "./images/category/cat3.png",
            categoryName: "Cars",
          },
          {
            categoryImg: "./images/category/cat4.png",
            categoryName: "Home & Garden",
          },
          {
            categoryImg: "./images/category/cat5.png",
            categoryName: "Gifts",
          },
          {
            categoryImg: "./images/category/cat6.png",
            categoryName: "Music",
          },
          { categoryImg: "./images/category/cat7.png",
            categoryName: "Health & Beauty",
          },
          {
            categoryImg: "./images/category/cat8.png",
            categoryName: "Pets",
          },
          {
            categoryImg: "./images/category/cat9.png",
            categoryName: "Baby Toys",
          },
          {
            categoryImg: "./images/category/cat10.png",
            categoryName: "Groceries",
          },
          {
            categoryImg: "./images/category/cat11.png",
            categoryName: "Books",
          },
    ]
    return (
        <>
       <div className="category">
        {
            data.map((value, index) => {
               return (
                <div className="box f_flex" key={index}>
                    <img src={value.categoryImg} alt="" />
                    <span>{value.categoryName}</span>
                </div>
               ) 
            })
        }
       </div>
        </>
    )
}

export default Categories;