import axios from "axios";
import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getWishlist } from "../../redux/Wishlist/actions";
import WishlistCard from "./WishlistCard";
import { Box, Grid } from "@chakra-ui/react";

const Wishlist = () => {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://talented-teal-hosiery.cyclic.app/product`)
      .then((res) => console.log(res.data.msg));
    
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
        <span>My Wishlist</span> {data} items
      </p>
      <div>
        {/* {data.map((item) => (
          <div key={item.id}>
            <WishlistCard {...item} />
          </div>
        ))} */}
        <Box>
          {/* <Grid templateColumns={"repeat(4, 1fr)"} gap={7} w="95%" m="auto">
            {data.map((ele) => (
              <WishlistCard key={ele._id} {...ele} />
            ))}
          </Grid> */}
        </Box>
      </div>
    </div>
  );
};

export default Wishlist;
