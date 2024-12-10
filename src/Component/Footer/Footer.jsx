import React from "react";
import "./Footer.css";
import facebookIcon from "../../assets/footer/facebook.png";
import instegramIcon from "../../assets/footer/instagram.png";
import youtubeIcon from "../../assets/footer/youtube.png";
import footerLogo from "../../assets/footer/logo-footer.png";
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { FaRegMessage } from "react-icons/fa6";
export default function Footer() {
  return (
    <div>
      <div className="col-12">
        <footer
          className="py-5 col-12"
          style={{ backgroundColor: "#051C34", color: "white" }}
        >
          <div className="col-12 divFooterPosition">
            <div className="col-11 col-sm-3 col-md-2 Section1Footer">
              <img src={footerLogo} alt="" />
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 text-body-secondary linksFooterColor"
                  >
                    <IoLocationOutline /> 25566 Hc 1, Glenallen,Alaska, 99588,
                    USA
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 text-body-secondary linksFooterColor"
                  >
                    <IoCallOutline /> +603 4784 273 12
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 text-body-secondary linksFooterColor"
                  >
                    <FaRegMessage /> entcars@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-5 col-sm-4 col-md-2">
              <h5>Our Products</h5>

              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 text-body-secondary linksFooterColor"
                  >
                    Career
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 text-body-secondary linksFooterColor"
                  >
                    Packages
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 text-body-secondary linksFooterColor"
                  >
                    Features
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 text-body-secondary linksFooterColor"
                  >
                    Priceline
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-5 col-sm-4 col-md-2">
              <h5>Resources</h5>

              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 text-body-secondary linksFooterColor"
                  >
                    Download
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 text-body-secondary linksFooterColor"
                  >
                    Help Centre
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 text-body-secondary linksFooterColor"
                  >
                    Guides
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 text-body-secondary linksFooterColor"
                  >
                    Partner Network
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 text-body-secondary linksFooterColor"
                  >
                    Cruises
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 text-body-secondary linksFooterColor"
                  >
                    Developer
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-5 col-sm-4 col-md-2">
              <h5>About Rentcars</h5>

              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 text-body-secondary linksFooterColor"
                  >
                    Why choose us
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 text-body-secondary linksFooterColor"
                  >
                    Our Story
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 text-body-secondary linksFooterColor"
                  >
                    Investor Relations
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 text-body-secondary linksFooterColor"
                  >
                    Press Center
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 text-body-secondary linksFooterColor"
                  >
                    Advertise
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-5 col-sm-4 col-md-1">
              <h5>Follow Us</h5>
              <ul className="nav d-flex" style={{ gap: "1rem" }}>
                <img src={facebookIcon} alt="" />
                <img src={instegramIcon} alt="" />
                <img src={youtubeIcon} alt="" />
              </ul>
            </div>
          </div>

          <div
            className="py-4 my-4 border-top"
            style={{ padding: "0rem 1rem" }}
          >
            <p>Copyright 2023 ・ Rentcars, All Rights Reserved</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
