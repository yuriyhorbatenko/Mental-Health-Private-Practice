import React from "react";
import "./Footer.css";
import github from "../../img/github.png";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="copyright">Copyright&copy;</div>
        <a target="_blank" href="https://github.com/yuriyhorbatenko/Project_-3">
          <img src={github} className="github" />
        </a>
        <div className="year2020">2020</div>
      </div>
    </>
  );
}

export default Footer;
