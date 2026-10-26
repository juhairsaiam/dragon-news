import React, { use } from "react";
import { NavLink } from "react-router";
const categoriesPromise = fetch("/demo-data/categories.json").then((res) =>
  res.json(),
);
const Categories = () => {
  const categories = use(categoriesPromise);
  console.log(categories);
  return (
    <div className="grid grid-cols-1 gap-2 font-bold ">
      <h2>All Categories {categories.length}</h2>
      {categories.map((category) => (
        <NavLink
          className={" text-gray-500 hover:bg-base-300 p-2"}
          key={category.id}
          to={`/category/${category.id}`}
        >
          {category.name}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
