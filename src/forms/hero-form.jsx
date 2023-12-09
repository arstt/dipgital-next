import React from "react";
import EmailIcon from "../svg/email";

const HeroForm = () => {
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="p-relative">
          <input type="text" placeholder="Ask Transformation to Digital" />
         <EmailIcon />
        </div>
        <button className="tp-btn tp-btn-hover alt-color-black">
          <span>Ask It.</span>
          <b></b>
        </button>
      </form>
    </>
  );
};

export default HeroForm;
