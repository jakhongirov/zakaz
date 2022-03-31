import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import Content from "../../Localization/Content";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Header from "../header/header";
import Footer from "../footer/footer";

const layout = ({ children }) => {
  
  return (
    <>
      <header className="header" id="header">
        <Header/>
      </header>
      <main>{children}</main>
      <footer className="footer">
        <Footer/>
      </footer>
    </>
  );
};

export default layout;
