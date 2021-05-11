import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './Footer.css'
const FooterPage = () => {
  return (

    <div class="footer">
    <p>&copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> Kalki </a></p>
    </div>
  );
}

export default FooterPage;
