import React from "react";
// import {Container} from 'react-bootstrap';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

export function FooterPage () {
  return (
//     <Container fluid style={{backgroundColor: '#212529', color: '#fff',marginTop:'10px'}}>
//       <Container style={{display: 'flex', justifyContent: 'center', padding: '10px'}}>
//         <p>TourAgency</p>
//       </Container>
//     </Container>

    <MDBFooter className="font-small pt-4 mt-4" style={{backgroundColor: '#343a40', color: 'white'}}>
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">TourAgency</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </MDBCol>
          <MDBCol md="4" style = {{marginLeft: '11rem'}}>
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="/home">Home</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Tours</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Personal account</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://vk.com/exquisitemoon">MoonPresense</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}