import "./Contact.scss";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import SendBtn from "../../components/Buttons/SendBtn";
import Starvideo from "../../components/Starvideo";
import { useState, useEffect } from "react";

export default function Contact() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      const formattedHours = (hours % 12 || 12).toString().padStart(2, "0");
      const formattedMinutes = minutes.toString().padStart(2, "0");
      setTime(`${formattedHours}:${formattedMinutes} ${ampm}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section id="contact">
      <div id="contacttop">
        <MDBRow>
          <MDBCol md="6" className="contacttop-col1">
            <h2>
              Let&apos;s
              <br /> create
              <br /> Experiences!
            </h2>
            <h4>Let&apos;s talk.</h4>
            <div>
              <label htmlFor="contact-name" style={{ padding: "0 10px 0 0" }}>
                <h5 style={{ fontWeight: "900", padding: "0 10px 0 0" }}>
                  Hi! I am
                </h5>
              </label>
              <input type="text" placeholder="eg. Andy" id="contact-name" />
            </div>
            <div>
              <label
                htmlFor="contact-reactmeat"
                style={{ padding: "0 10px 0 0" }}
              >
                <h5 style={{ fontWeight: "900", padding: "0 10px 0 0" }}>
                  Reach me at
                </h5>
              </label>
              <input
                type="text"
                placeholder="eg. hello@gmail.com"
                id="contact-reactmeat"
              />
            </div>
            <div>
              <label
                htmlFor="contact-country"
                style={{ padding: "0 10px 0 0" }}
              >
                <h5 style={{ fontWeight: "900", padding: "0 10px 0 0" }}>
                  Country
                </h5>
              </label>
              <input type="text" placeholder="eg. India" id="contact-country" />
            </div>
            <div>
              <label htmlFor="contact-mobile" style={{ padding: "0 10px 0 0" }}>
                <h5 style={{ fontWeight: "900", padding: "0 10px 0 0" }}>
                  Mobile No.
                </h5>
              </label>
              <input
                type="number"
                placeholder="eg. +91 999999999"
                id="contact-mobile"
              />
            </div>
            <div>
              <label
                htmlFor="contact-company"
                style={{ padding: "0 10px 0 0" }}
              >
                <h5 style={{ fontWeight: "900", padding: "0 10px 0 0" }}>
                  Company Name
                </h5>
              </label>
              <input
                type="text"
                placeholder="eg. Vista comm"
                id="contact-company"
              />
            </div>
            <div>
              <label htmlFor="contact-comment" />
              <textarea id="contact-comment" />
            </div>
            <div style={{ padding: "20px 0 0 0" }}>
              <SendBtn />
            </div>
          </MDBCol>
          <MDBCol md="6" className="contacttop-col2">
            <div className="starvideo">
              <Starvideo />
            </div>
            <a
              href="mailto:youremail@example.com"
              style={{
                textDecoration: "underline 1px solid blue",
              }}
            >
              <h5
                style={{
                  color: "blue",
                }}
              >
                youremail@example.com
              </h5>
            </a>
            <a
              href="tel:+1234567890"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <h5 style={{ color: "grey", fontWeight: "700" }}>
                <b>IND: </b>
              </h5>
              <h5 style={{ color: "black" }}>+91 99999999999</h5>
            </a>
          </MDBCol>
        </MDBRow>
      </div>
      <div
        className="contact-location"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <MDBRow>
          <MDBCol
            md="6"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              borderRight: "2px black solid",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "5vw",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h2>India</h2>
                <h5>{time}</h5>
              </div>
              <img
                src="./Assets/Images/Home/building.png"
                alt=""
                style={{ width: "125px", objectFit: "contain" }}
              />
            </div>
            <h6>
              Office No.202, 2nd Floor, Techno Park, Eksar, Link Road,Borivali
              (W), Mumbai: 400 092.
            </h6>
            <h6>
              44, 2nd floor, 2nd Main Road,3rd Cross Guru Raghavendra Nagar, JP
              Nagar 7th Phase Bangalore, Karnataka 560078
            </h6>
          </MDBCol>
          <MDBCol
            md="6"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              padding: "0 0 0 20px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "5vw",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h2>India</h2>
                <h5>{time}</h5>
              </div>
              <img
                src="./Assets/Images/Home/building.png"
                alt=""
                style={{ width: "125px", objectFit: "contain" }}
              />
            </div>
            <h6>
              Office No.202, 2nd Floor, Techno Park, Eksar, Link Road,Borivali
              (W), Mumbai: 400 092.
            </h6>
            <h6>
              44, 2nd floor, 2nd Main Road,3rd Cross Guru Raghavendra Nagar, JP
              Nagar 7th Phase Bangalore, Karnataka 560078
            </h6>
          </MDBCol>
        </MDBRow>
      </div>
    </section>
  );
}
