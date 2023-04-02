import axios from "axios";
import React, { useState, useEffect } from "react";
import { getWishlist } from "../../redux/Wishlist/actions";
import WishlistCard from "./WishlistCard";
import { Box, Grid } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
  
  const dispatch = useDispatch();
  const wishlist = useSelector((store) => store.WishlistReducer.wishlist);
  console.log(wishlist)
  const navigate = useNavigate();

  useEffect(() => {
   dispatch(getWishlist()) 
  }, []);


  // const fetchWishlist = () => {
  //   fetch("https://talented-teal-hosiery.cyclic.app/wishlist")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setData(res.data);
  //       dispatch(getWishlist(res));
  //     })
  //     .catch((err) => console.log(err));
  // };

  return (
    <div>
      <p>
        <h1
          style={{
            textAlign: "center",
            color: "#ED7745",
            fontWeight: "bold",
            fontSize: "30px",
          }}
        >
          My Wishlist
        </h1>
      </p>

      {wishlist?.length > 0 ? (
        <div>
          <Grid templateColumns={"repeat(3, 1fr)"} w="70%" m="auto">
            {wishlist?.map((item) => {
              return (
                <div>
                  <WishlistCard key={item._id} id={item._id} {...item} />
                </div>
              );
            })}
          </Grid>
        </div>
      ) : (
        <p
          style={{ textAlign: "center", fontSize: "20px", fontWeight: "bold" }}
        >
          Your wishlist is empty.
        </p>
      )}
    </div>
  );
};

export default Wishlist;
