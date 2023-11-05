import React,{useState} from "react";
import { useSelector } from "react-redux";
import Foods from "./Foods";
const FoodMenu = () => {
  const { products } = useSelector((state) => state.CartReducer);
//   console.log(search);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const selectCategory = (category) => {
    setSelectedCategory(category);
  };
  return (
    <div>
      <div className=" mt-5">
        <div className="h5 display-6 my-3 fw-bold">Find The Best <span style={{color:'#23C45F'}}>Food</span></div>
        <div className="categories d-flex gap-3 flex-wrap">
          <div
            className={`category fw-bold ${
              selectedCategory === "All" ? "active" : ""
            }`}
            onClick={()=>setSelectedCategory('All')}
          >
            All
          </div>

          {products.slice(0, 6).map((category) => (
            <div key={category.id}
            className={`category fw-bold ${selectedCategory === category.category ? 'active' : ''}`}
             onClick={() => selectCategory(category.category)}
             >
              {category.category}
            </div>
          ))}
        </div>
      </div>
      <Foods selectedCategory={selectedCategory} />
    </div>
  );
};

export default FoodMenu;
