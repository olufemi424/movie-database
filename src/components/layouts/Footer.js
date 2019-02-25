import React from "react";

const Footer = () => {
  return (
    <footer>
      <p>
        Copyright &copy; Movie DataBase {new Date().getFullYear()} by{" "}
        <span>
          <a
            className="light"
            href="http://olufemiaf.com"
            rel="noopener noreferrer"
          >
            olufemiaf {`🤓`}
          </a>
        </span>
      </p>
    </footer>
  );
};

export default Footer;
