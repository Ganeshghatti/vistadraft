import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import "./Customers.scss";

export default function Customers() {
  return (
    <>
      <h4 style={{ color: "black", fontWeight: "600", textAlign: "center" }}>
        <b>What Clients say</b>
      </h4>
      <Carousel
        showThumbs={true}
        showArrows={true}
        infiniteLoop={true}
        // autoPlay={true}
        stopOnHover={true}
      >
        <div>
          <MDBRow style={{ width: "70vw", padding: "10px 0" }}>
            <MDBCol
              md="2"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "5px",
                justifyContent: "center",
              }}
            >
              <img
                src="./Assets/Images/Home/amit-singh_2hbwldUnU.jpg"
                alt=""
                style={{ borderRadius: "50%", width: "75px" }}
              />
              <h4
                style={{
                  color: "black",
                  fontWeight: "800",
                }}
              >
                <b>Amit Singh</b>
              </h4>

              <h6>C.E.O. - FVG</h6>
            </MDBCol>
            <MDBCol
              md="10"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              <div style={{ display: "flex", flexDirection: "row" }}>
                <FontAwesomeIcon icon={faQuoteLeft} size="2x" color="#C6C6F7" />
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <img
                    src="./star1.png"
                    alt="dfgrg"
                    style={{ objectFit: "contain", width: "30px" }}
                  />
                  <img
                    src="./star1.png"
                    alt="gfdgg"
                    style={{ objectFit: "contain", width: "30px" }}
                  />
                  <img
                    src="./star1.png"
                    alt="gdg"
                    style={{ objectFit: "contain", width: "30px" }}
                  />
                  <img
                    src="./star1.png"
                    alt="gdgg"
                    style={{ objectFit: "contain", width: "30px" }}
                  />
                  <img
                    src="./star1.png"
                    alt="gdgg"
                    style={{ objectFit: "contain", width: "30px" }}
                  />
                </div>
              </div>
              <h5
                style={{
                  color: "black",
                  textAlign: "left",
                  padding: window.innerWidth > 770 ? "0 0 0 4vw" : "0 7vw",
                }}
              >
                I think the most impressive thing is their value proposition.
                The entire team is quite talented and are able to bring a very
                level of UX and UI design to the project at very fair pricing.
              </h5>
            </MDBCol>
          </MDBRow>
        </div>
      </Carousel>
    </>
  );
}
