import React from "react";

import { Servicios } from "../components/Servicios";
import { Titles } from "../components/Titles";
import { ContactUs } from "../components/ContactUs";
export const Home = () => {
  return (
    <>
      <Titles></Titles>
      <Servicios></Servicios>
      <ContactUs></ContactUs>
    </>
  );
};
