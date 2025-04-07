// @ts-nocheck
import { useState, useEffect } from "react";
import React from "react";

const getdata = async () => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch("https://randomuser.me/api/", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
};

const Fetchexample = () => {
  return (
    <div>
      <button onClick={getdata}>😃</button>
    </div>
  );
};

export default Fetchexample;
