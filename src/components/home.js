import React, { useState } from "react";
import Card from "./card";
import products from "../data";
import "../styles/home.css";
import Navbar from "./navbar";
const Home = () => {
  return (
    <section>
      <Navbar />
      {products.map((item) => {
        return <Card key={item.id} item={item} />;
      })}
    </section>
  );
};
export default Home;
