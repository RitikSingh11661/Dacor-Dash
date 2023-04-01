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
        <span>My Wishlist</span>
      </p>
      <div>
        {/* {data.map((item) => (
          <div key={item.id}>
            <WishlistCard {...item} />
          </div>
        ))} */}
        {/* <Box>
          <Grid templateColumns={"repeat(4, 1fr)"} gap={7} w="95%" m="auto">
            {data.map((ele) => (
              <WishlistCard key={ele._id} {...ele} />
            ))}
          </Grid>
        </Box> */}

        {wishlist?.map((item) => {
          return (
            <div>
              <WishlistCard key={item._id} {...item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Wishlist;
