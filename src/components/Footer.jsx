import React from "react";
import {
  AiFillGithub, 
  AiOutlineArrowUp,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
import vg from "../assets/IMG_20231110_002032.jpg";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={vg} alt="Graphic" />
        <h2>Aditya Ranjan</h2>
        <p>Motivation is temporary, but discipline last forever</p>
      </div>
      <aside>
        <h2>Social Media</h2>
        <article>
          <a href="https://github.com/addyrj" target={"blank"}>
            <AiFillGithub  />
          </a>

          <a href="https://www.linkedin.com/in/aditya-ranjan-india/" target={"blank"}>
            <AiFillLinkedin />
          </a>

          <a href="https://twitter.com/adityarjn" target={"blank"}>
            <AiFillTwitterSquare />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
