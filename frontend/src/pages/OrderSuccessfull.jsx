import { Button, Spinner, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Payment/Payment.module.css";
const OrderSuccessfull = () => {
  const navigate = useNavigate();
  const [isButLoading, setIsButLoading] = useState(false);

  const handlePay = () => {
    setIsButLoading(true);
    setTimeout(() => {
      setIsButLoading(false);

      navigate("/");
    }, 2000);
  };
  return (
    <div style={{ backgroundColor: "white" }}>
      <VStack
        margin="auto"
        style={{
          border: "0px solid gray",
          width: "35%",
          margin: " 20px auto",
          paddingBottom: "40px",
          borderRadius: "15px",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        }}
      >
        <div>
          <img
            src="https://www.pinkwigscloset.com/images/success-tick.gif"
            alt="img"
          />
        </div>

        <Link to='/'>
        <button
          className={styles.bookbtn3}
          onClick={handlePay}
          fontSize="larger"
            padding={"50px"}
           
        >
          {!isButLoading && `Enjoy Your order!`}
          {isButLoading && (
            <Spinner
              thickness="4px"
              speed="0.55s"
              emptyColor="gray.200"
              color="#17274a"
              size="lg"
            />
          )}
        </button>
        </Link>      
      </VStack>
    </div>
  );
};

export default OrderSuccessfull;
