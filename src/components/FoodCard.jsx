import React from "react";
import { ADD, DELETE } from "../redux/actions/CartAction";
import { useDispatch, useSelector } from "react-redux";
import { AiFillStar } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
const FoodCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.CartReducer.carts);

  // Check if the product is already in the cart
  const isProductInCart = cartData.some((item) => item.id === product.id);

  const handleAddCart = (e) => {
    // If the product is not already in the cart, add it
    if (!isProductInCart) {
      dispatch(ADD(e));
      toast.success("Product Added to Cart Successfully!");
    } else {
      toast.error("Product is Already In the Cart");
    }
  };

  const handleDeleteCart = (e) => {
    dispatch(DELETE(e.id));
    toast.error("Product Removed From Cart");
  };
  return (
    <div className="col-md-3 mb-4">
      <div className="card border-0 p-4">
        <div className="itemImage">
          <img className="rounded" src={product.image} alt={product.name} />
        </div>
        <div className="itemDetail d-flex justify-content-between py-3 align-items-center">
          <div className="name h6 fw-bold">{product.name}</div>
          <div className="price ">${product.price}</div>
        </div>
        <div className="description text-secondary">Category : {product.category}</div>
        <div className="itemCart d-flex justify-content-between pt-3 align-items-center">
          <div className="rating d-flex align-items-center">
            <AiFillStar className="text-warning " />
            {product.ratings}
          </div>
          {!isProductInCart ? (
            <div
              onClick={() => handleAddCart(product)}
              className={`cartBtn cardIcon`}
            >
              Add To Cart
            </div>
          ) : (
            <div
              onClick={() => handleDeleteCart(product)}
              className={`cartBtn cardIcon bg-danger`}
            >
              Remove From Cart
            </div>
          )}
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default FoodCard;
