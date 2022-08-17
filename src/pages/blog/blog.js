/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./ContactComponent.css";

function Blog(props) {
  const theme = props.theme;

  return (
    <div className="contact-main">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="basic-contact">Coming Soon</div>
      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}

export default Blog;
