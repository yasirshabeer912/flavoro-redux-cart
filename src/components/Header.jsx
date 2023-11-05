import React from "react";
import { BsCartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { DECREMENENT,INCREMENT,DELETE } from "../redux/actions/CartAction";
import {AiFillDelete} from 'react-icons/ai'
import { SEARCH_ITEM } from "../redux/actions/SearchAction";
const Header = () => {
    const dispatch = useDispatch()
  const cartData = useSelector((state) => state.CartReducer.carts);
  const totalPrice = cartData.reduce((total, item) => total + item.price * item.quantity, 0);
  return (
    <div>
      <div className=" p-3 d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div className="left">
          <h3 className="h3 fw-bold  text-secondary">
            {new Date().toUTCString().slice(0, 16)}
          </h3>
          <div className="logo h2 fw-bold">Falvoro <span style={{color:'#23C45F'}}> Foods</span></div>
        </div>
        <div className="right d-flex gap-3 align-items-center justify-content-center">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control shadow-none py-2"
              placeholder="Search Food Here"
              aria-describedby="basic-addon2"
              onChange={(e)=> dispatch(SEARCH_ITEM(e.target.value))}
            />
          </div>
          <div
            className="cartIcon d-flex"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            <BsCartFill className="icon" />
            <span>{cartData.length}</span>
          </div>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <div className="offcanvas-header">
              <h5
                className="offcanvas-title h5 fw-bold text-uppercase"
                id="offcanvasRightLabel"
              >
                My Cart
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              {cartData.length ? (
                cartData.map((item, index) => ( 
                  <div
                    key={index}
                    className="CartItem d-flex gap-3 justify-content-between p-3 border rounded align-items-center mb-3"
                  >
                    <div className="itemName h6">{item.name}</div>
                    <div
                      className="Itemqty d-flex align-items-center justify-content-between w-50 text-center"
                      style={{ cursor: "pointer" }}
                    >
                      <span
                        className="h-100 w-25 fs-3 mb-1"
                        onClick={() => dispatch(INCREMENT(item.id))}
                      >
                        +
                      </span>
                      <input
                        type="text"
                        className="w-75 mx-2 text-center"
                        value={item.quantity}
                        readOnly
                      />
                      <span
                        className="h-100 w-25 fs-3 mb-1"
                        onClick={() => dispatch(DECREMENENT(item.id))}
                      >
                        -
                      </span>
                    </div>
                    <div className="ItemPrice fw-bold h5">${item.price}</div>
                    <div
                      className="btn btn-danger"
                      onClick={() => dispatch(DELETE(item.id))} // Pass the item's id
                    >
                      <AiFillDelete/>
                    </div>
                  </div>
                 )) 
              ) : (
                <h5 className="text-danger">Your Cart is Empty!!! 😉</h5>
               )}
            </div>
            <div className="offcanvas-footer mx-4">
              <div className="card w-100 p-3 border  ">
                <div className="hey d-flex justify-content-between">
                  <h5>Total</h5>
                  <h5>${totalPrice}</h5>
                </div>
              </div>

              <div className="btn btn-success w-100 mt-3 p-3 fw-bold text-uppercase">
                Proceed To Checkout
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
