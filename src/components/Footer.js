import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterStyle>
      <p>Copyright &copy; Movie DataBase 2018</p>
    </FooterStyle>
  );
};

export default Footer;

const FooterStyle = styled.div`
  background: #222;
  height: 60px;
  padding: 10px;
  color: #fff;
`;
