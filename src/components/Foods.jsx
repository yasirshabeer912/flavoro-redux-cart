import React from "react";
import FoodCard from "./FoodCard";
import { useSelector } from "react-redux";

const Foods = ({ selectedCategory }) => {
  const { products } = useSelector((state) => state.CartReducer);
  const { search } = useSelector((state) => state.SearchReducer);

  // Conditionally filter products based on the selected category and search term
  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <div className="my-5">
        <div className="row">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <FoodCard key={product.id} product={product} />
            ))
          ) : (
            <div className="h2 text-center"><span className="text-danger ">Sorry!🙁</span> <br /> No Product Available for this search: <span style={{color:'#23C45F',fontWeight:'bolder'}}>{search}</span></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Foods;
