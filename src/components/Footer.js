import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './Footer.css'
const FooterPage = () => {
  return (

    <div class="footer">
    <p>&copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> Kalki </a></p>
    </div>
    // <MDBFooter color="light-yellow" className="font-small pt-4 mt-4 ">
    //   <div className="footer-copyright text-center py-3">
    //     <MDBContainer fluid color="pink">
    //       &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> Kalki </a>
    //     </MDBContainer>
    //   </div>
    // </MDBFooter>
  );
}

export default FooterPage;