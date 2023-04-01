import { Button, Divider, useToast } from "@chakra-ui/react";

import styles from "./Address.module.css";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
import {
  deletedataAdd,
  getRequestAddress,
} from "../../redux/ShippingReducer/action";

const ShippingDetailsCard = ({
  _id,
  address1,
  firstname,
  lastname,
  city,
  phone,
  zipcode,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isButLoading, setIsButLoading] = useState(false);
  const toast = useToast();
  const handleDelete = (_id) => {
    // console.log(id)
    setIsButLoading(true);
    setTimeout(() => {
      setIsButLoading(false);
      dispatch(deletedataAdd(_id)).then(() => dispatch(getRequestAddress()));
      toast({
        title: "Address Removed",
        description: "",
        status: "info",
        variant: "left-accent",
        duration: 2500,
        isClosable: true,
        position: "top",
      });
    }, 2000);
  };

  useEffect(() => {
    dispatch(getRequestAddress());
  }, []);

  return (
    <div id={styles.card}>
      <div>
        <h1>
          {firstname} {lastname}
        </h1>
        <p>{address1}</p>
        <p>{city}</p>
        <p>{phone}</p>
        <p>{zipcode}</p>
        <input type="checkbox" />
        <div>
          <button
            onClick={() => handleDelete(_id)}
            style={{
              width: "100px",
              padding: "5px 8px",
              backgroundColor: "#ED7745",
              borderRadius: "8px",
              marginTop: "10px",
              color: "white",
            }}
          >
            Remove
          </button>
        </div>
        <hr style={{ border: "1px solid #CFD8DC;", marginTop: "15px" }} />
      </div>
    </div>
  );
};

export default ShippingDetailsCard;
