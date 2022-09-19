import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import logo from "./logo1.jpeg";

const Footer1 = () => {
  return (
    <footer className="page-footer bg-secondary">
      <div className="container text-center text-md-left mt-5">
        <div className="row">
          <div className="col-md-3 mx-auto mb-4">
            <br />
            <h2>BookMyBus</h2>
            <img src={logo} alt="" style={{ width: "50%" }} />
          </div>

          <div className="col-md-3 mx-auto mb-4">
            <br />
            <h6 className="text-uppercase font-weight-bold">Useful Links</h6>
            <hr
              className="bg-dark mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "110px", height: "3px" }}
            />
            <ul className="list-unstyled">
              <li className="my-2">Home</li>
              <li className="my-2">About Us</li>
              <li className="my-2">Contact us</li>
              <li className="my-2">Sign In</li>
            </ul>
          </div>

          <div className="col-md-3 mx-auto mb-4">
            <br />
            <h6 className="text-uppercase font-weight-bold">Social Media</h6>
            <hr
              className="bg-dark mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "110px", height: "3px" }}
            />
            <ul className="list-unstyled">
              <li className="my-2">
                <a
                  href="https://www.youtube.com/c/jamesqquick"
                  className="youtube social m-2"
                  style={{ color: "#eb3223" }}
                >
                  <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
              </li>
              <li className="my-2">
                <a
                  href="https://www.facebook.com/learnbuildteach/"
                  className="facebook social m-2"
                  style={{ color: "#4968ad" }}
                >
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
              </li>
              <li className="my-2">
                <a
                  href="https://www.twitter.com/jamesqquick"
                  className="twitter social m-2"
                  style={{ color: "#49a1eb" }}
                >
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
              </li>
              <li className="my-2">
                <a
                  href="https://www.instagram.com/learnbuildteach"
                  className="instagram social m-2"
                  style={{ color: "black" }}
                >
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
