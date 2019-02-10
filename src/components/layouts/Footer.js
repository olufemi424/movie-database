import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterStyle>
      <p>
        Copyright &copy; Movie DataBase 2018 by{" "}
        <span>
          <a className="light" href="http//olufemiaf.com">
            olufemiaf {`🤓`}
          </a>
        </span>
      </p>
    </FooterStyle>
  );
};

export default Footer;

const FooterStyle = styled.div`
  text-align: center;
  background: #000;
  height: 60px;
  padding: 10px;
  color: #777;
  font-weight: 200;
  p {
    font-size: 14px;
  }
  .light {
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
  }
`;
