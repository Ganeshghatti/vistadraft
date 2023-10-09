import { MDBFooter } from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import {  MDBContainer } from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <section id="footer">
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted"
        style={{ width: "100vw" }}
      >
        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol
                md="2.4"
                lg="4"
                xl="3"
                className="mx-auto mb-4 footer-sec1"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <h6
                  className="text-uppercase fw-bold mb-4"
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  <b>Vista communication</b>
                </h6>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "10px",
                  }}
                >
                  <i
                    className="fa-brands fa-facebook"
                    style={{ color: "black" }}
                  ></i>
                  <i
                    className="fa-brands fa-linkedin"
                    style={{ color: "black" }}
                  ></i>
                  <i
                    className="fa-brands fa-instagram"
                    style={{ color: "black" }}
                  ></i>
                  <i
                    className="fa-brands fa-dribbble"
                    style={{ color: "black" }}
                  ></i>
                  <i
                    className="fa-brands fa-twitter"
                    style={{ color: "black" }}
                  ></i>
                </div>
                <h6
                  style={{ color: "black", paddingTop: "10px" }}
                  className="footer-vistacom"
                >
                  ©Vistacomm
                </h6>
                <h6 className="footer-rights">All rights reserved 2023</h6>
              </MDBCol>

              <MDBCol md="2.4" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="fw-bold mb-4">
                  <b>Services</b>
                </h6>
                <p>
                  <a
                    href="#"
                    className="footer-links"
                    style={{ color: "black" }}
                  >
                    Design
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    className="footer-links"
                    style={{ color: "black" }}
                  >
                    Technology
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    className="footer-links"
                    style={{ color: "black" }}
                  >
                    Neuromarketing
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="2.4" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="fw-bold mb-4">About</h6>
                <p>
                  <a
                    href="#"
                    className="footer-links"
                    style={{ color: "black" }}
                  >
                    About Us
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    className="footer-links"
                    style={{ color: "black" }}
                  >
                    Team
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    className="footer-links"
                    style={{ color: "black" }}
                  >
                    Career
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="2.4" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="fw-bold mb-4">Quick links</h6>
                <p>
                  <a
                    href="#"
                    className="footer-links"
                    style={{ color: "black" }}
                  >
                    Work
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    className="footer-links"
                    style={{ color: "black" }}
                  >
                    Client
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    className="footer-links"
                    style={{ color: "black" }}
                  >
                    Reach us
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="2.4" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="fw-bold mb-4">Quick links</h6>
                <p>
                  <a
                    href="#"
                    className="footer-links"
                    style={{ color: "black" }}
                  >
                    Privacy Policy
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    className="footer-links"
                    style={{ color: "black" }}
                  >
                    Terms of use
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    className="footer-links"
                    style={{ color: "black" }}
                  >
                    Site Map
                  </a>
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      </MDBFooter>
    </section>
  );
}
