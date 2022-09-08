import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Links from "../Links/Links";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomerOrders } from "../../../store/cabinet/actions";

const History = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("hi");
    dispatch(fetchCustomerOrders());
  }, []);

  return (
    <div className="profile">
      <Links />
      <div className="empty-block">No purchases were found</div>
    </div>
  );
};
export default History;
