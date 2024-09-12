import React, { useEffect, useRef, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseCount,
  increaseCount,
} from "../store/slices/cartSlice";
import { addToFav, removeFromFev } from "../store/slices/favSlice";
import { MAIN_LINKS } from "./MainRoutes";

function ProductCard({ product }) {
  let cart = useSelector((state) => state.cart);
  let fav = useSelector((state) => state.fav);
  let [cartEl, setCartEl] = useState(fav.find((el) => el.id === product.id));
  let dispatch = useDispatch();
  let card = useRef();
  let [showDetails, setShowDetails] = useState(false);
  let discount = ((product.price * product.discountPercentage) / 100).toFixed(
    2
  );
  useEffect(() => {
    // document.addEventListener("mouseleave")
    card.current.addEventListener("mouseenter", (e) => {
      e.target.classList.add("md:scale-105");
      setShowDetails(true);
    });
    card.current.addEventListener("mouseleave", (e) => {
      e.target.classList.remove("md:scale-105");
      setShowDetails(false);
    });
  }, []);
  return (
    <div
      className="  bg-white shadow-md  rounded-md overflow-hidden relative transition-all "
      ref={card}
    >


      <div className="bg-SkyBlue bg-opacity-30"  >
        <div className="flex gap-10 center justify-start p-5 h-[60px]">
          {cart?.find((el) => el.id === product.id) === undefined ? (
            <span
              className="z-[2] md:text-lg card-icon relative md:w-5 md:h-5 w-4 h-4 center"
              onClick={() => dispatch(addToCart({ ...product, orderCount: 1 }))}
            >
              <FiShoppingCart />
            </span>
          ) : (
            <p className="flex gap-2 items-center">
              <span
                className="icon-tem"
                onClick={() => dispatch(increaseCount(product.id))}
              >
                +
              </span>{" "}
              <span className="icon-tem w-8 h-8  bg-pink border text-white font-bold ">
                {cart?.find((el) => el.id === product.id).orderCount}
              </span>{" "}
              <span
                className="icon-tem"
                onClick={() => dispatch(decreaseCount(product.id))}
              >
                -
              </span>{" "}
            </p>
          )}
          {fav.find((el) => el.id === product.id) === undefined ?
          (
            <span
              className="z-[2] md:w-5 md:h-5 w-4 h-4 rounded-full center md:text-lg card-icon relative"
              onClick={() => dispatch(addToFav(product))}
            >
              <FaRegHeart />
            </span>
          )
          :(
            <span
              className="z-[2] md:w-5 md:h-5 w-4 h-4 rounded-full center md:text-lg card-icon relative  text-pink "
              onClick={() => dispatch(removeFromFev(product.id))}
            >
              <FaHeart />
            </span>
          ) }
        </div>
      </div>



         <Link to={`${MAIN_LINKS.products}/${product.id}`} className="" >


        <div className="h-[200px] md:h-[250px] center bg-SkyBlue bg-opacity-30 ">
          <img src={product.images[0]} className="h-full object-cover" />
        </div>

      <div className="text-center py-3 px-3">
        <h4 className="text-pink truncate font-bold  text-lg">
          {product.title}
        </h4>
        <p className="text-text truncate py-2">Code: {product.sku}</p>
        <p className="text-sm">
          <span className="text-text truncate ">
            ${(product.price - discount).toFixed(2)}
          </span>{" "}
          <span className="text-pink line-through">${product.price}</span>
        </p>
      </div>


        </Link>

      {showDetails && (
        <React.Fragment>
          <Link
            to={`/products/${product.id}`}
            className="btn bg-green-600 text-white absolute z-20 top-[250px] left-[50%] -translate-x-1/2 font-bold"
          >
            {" "}
            Show Details{" "}
          </Link>
        </React.Fragment>
      )}
    </div>
  );
}

export default ProductCard;
