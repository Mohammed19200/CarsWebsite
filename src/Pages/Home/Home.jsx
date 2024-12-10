import "./Home.css";
import imgBigCar from "../../assets/landing-page/bigCar.png";
import brand1 from "../../assets/landing-page/jaguar.png";
import brand2 from "../../assets/landing-page/nissan.png";
import brand3 from "../../assets/landing-page/volvo.png";
import brand4 from "../../assets/landing-page/audi.png";
import Audi from "../../assets/landing-page/sec-5/Audi 1.png";
import boy from "../../assets/landing-page/sec-6/Rectangle 8 (1).png";
import girl from "../../assets/landing-page/sec-6/girl.png";
import applicationImage from "../../assets/landing-page/sec-7/iPhone-14.png";
import android from "../../assets/landing-page/andriod.png";
import ios from "../../assets/landing-page/ios.png";
import { FaLocationDot } from "react-icons/fa6";
import { MdEditLocation } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { IoCarSport } from "react-icons/io5";
import { FaWallet } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { BsCalendar2DayFill } from "react-icons/bs";
import { IoLogoWechat } from "react-icons/io5";
import { FaLongArrowAltRight } from "react-icons/fa";
import car from "../../assets/card/car1.png";
import car2 from "../../assets/landing-page/car2.png";
import car3 from "../../assets/landing-page/car3.png";
import car4 from "../../assets/landing-page/car4.png";
import { LuAirVent } from "react-icons/lu";
import { MdOutlineAutoAwesomeMosaic } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { LuDoorOpen } from "react-icons/lu";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { IoIosStar } from "react-icons/io";
import { useNavigate } from "react-router-dom";
export default function Home() {
  let navigate = useNavigate();
  return (
    <div>
      <div className="col-12 bigDivLandingPage">
        <div className="col-11 col-sm-10 col-lg-5 descriptionBigDivLandingPage">
          <h1 className="h1descriptionBigDivLandingPage h6">
            Find, book and rent a car{" "}
            <span className="spanh1descriptionBigDivLandingPage">Easily</span>
          </h1>
          <p className="pdescriptionBigDivLandingPage">
            Get a car wherever and whenever you need it with your IOS and
            Android device.
          </p>
        </div>
        <div className="col-10 col-lg-5 imgBigDivLandingPage">
          <img
            className="imgimgBigDivLandingPage"
            src={imgBigCar}
            alt=""
          />
        </div>
      </div>

      <div>
        <div className="col-12 col-md-10 bigDivInputsstyle">
          <button className="buttonLocationInput">
            <FaLocationDot />
          </button>
          <div className="col-8 col-md-10">
            <input
              className="form-control col-12"
              type="text"
              placeholder="Search By Name"
            />
          </div>
          <button className="btn btn-primary col-md-2 col-lg-1">Search</button>
        </div>

        <div className="col-12 divApiAll">
          <button className="button1DivApiAll">POPULAR RENTAL DEALS</button>
          <h1 className="h1DivApiAll">Most popular cars rental deals</h1>

          <div className="col-12 bigDivCard">
            <div className="bigDivCard col-10 col-sm-5 col-md-4 col-lg-3 col-xl-2 ">
              <Card className="row">
                <Card.Img className="w-75 m-auto" variant="top" src={car3} />
                <Card.Body className="CardBodyDiv col-12">
                  <Card.Title className="col-11 h5">
                    Jaguar XE L P250
                  </Card.Title>
                  <Card.Text className="col-11">
                    <IoIosStar style={{ color: "gold" }} /> 4.8{" "}
                    <span style={{ color: "#808080" }}>(2.436 reviews)</span>
                  </Card.Text>
                  <Card.Text
                    className="col-6 col-sm-6 "
                    style={{ color: "#959595", fontSize: "0.8rem" }}
                  >
                    <IoPersonOutline /> 2 Passagers
                  </Card.Text>
                  <Card.Text
                    className="col-6 col-sm-6"
                    style={{ color: "#959595", fontSize: "0.8rem" }}
                  >
                    <MdOutlineAutoAwesomeMosaic /> Auto
                  </Card.Text>
                  <Card.Text
                    className="col-6 col-sm-6"
                    style={{ color: "#959595", fontSize: "0.8rem" }}
                  >
                    <LuAirVent /> Air Conditioning
                  </Card.Text>
                  <Card.Text
                    className="col-6 col-sm-6"
                    style={{ color: "#959595", fontSize: "0.8rem" }}
                  >
                    <LuDoorOpen /> 2 Doors
                  </Card.Text>
                  <Card.Text className="col-12">
                    <span style={{ color: "#595959" }}>Price :</span>{" "}
                    <span style={{ color: "#292929" }}>$1,800</span>{" "}
                    <span style={{ color: "#9C9C9C" }}>/day</span>
                  </Card.Text>
                  <Button
                    onClick={() => {
                      navigate("/product");
                    }}
                    className="col-9 col-md-8 col-lg-7 col-xl-8"
                    variant="primary"
                  >
                    Rent Now
                  </Button>
                </Card.Body>
              </Card>
            </div>

            <div className="bigDivCard col-10 col-sm-5 col-md-4 col-lg-3 col-xl-2 ">
              <Card className="row">
                <Card.Img className="w-75 m-auto" variant="top" src={car2} />
                <Card.Body className="CardBodyDiv col-12">
                  <Card.Title className="col-11 h5">Audi R8</Card.Title>
                  <Card.Text className="col-11">
                    <IoIosStar style={{ color: "gold" }} /> 4.6{" "}
                    <span style={{ color: "#808080" }}>(1.936 reviews)</span>
                  </Card.Text>
                  <Card.Text
                    className="col-6 col-sm-6 "
                    style={{ color: "#959595", fontSize: "0.8rem" }}
                  >
                    <IoPersonOutline /> 2 Passagers
                  </Card.Text>
                  <Card.Text
                    className="col-6 col-sm-6"
                    style={{ color: "#959595", fontSize: "0.8rem" }}
                  >
                    <MdOutlineAutoAwesomeMosaic /> Auto
                  </Card.Text>
                  <Card.Text
                    className="col-6 col-sm-6"
                    style={{ color: "#959595", fontSize: "0.8rem" }}
                  >
                    <LuAirVent /> Air Conditioning
                  </Card.Text>
                  <Card.Text
                    className="col-6 col-sm-6"
                    style={{ color: "#959595", fontSize: "0.8rem" }}
                  >
                    <LuDoorOpen /> 2 Doors
                  </Card.Text>
                  <Card.Text className="col-12">
                    <span style={{ color: "#595959" }}>Price :</span>{" "}
                    <span style={{ color: "#292929" }}>$2,100</span>{" "}
                    <span style={{ color: "#9C9C9C" }}>/day</span>
                  </Card.Text>
                  <Button
                    onClick={() => {
                      navigate("/product");
                    }}
                    className="col-9 col-md-8 col-lg-7 col-xl-8"
                    variant="primary"
                  >
                    Rent Now
                  </Button>
                </Card.Body>
              </Card>
            </div>

            <div className="bigDivCard col-10 col-sm-5 col-md-4 col-lg-3 col-xl-2 ">
              <Card className="row">
                <Card.Img className="w-75 m-auto" variant="top" src={car} />
                <Card.Body className="CardBodyDiv col-12">
                  <Card.Title className="col-11 h5">BMW M3</Card.Title>
                  <Card.Text className="col-11">
                    <IoIosStar style={{ color: "gold" }} /> 4.5{" "}
                    <span style={{ color: "#808080" }}>(2.036 reviews)</span>
                  </Card.Text>
                  <Card.Text
                    className="col-6 col-sm-6 "
                    style={{ color: "#959595", fontSize: "0.8rem" }}
                  >
                    <IoPersonOutline /> 2 Passagers
                  </Card.Text>
                  <Card.Text
                    className="col-6 col-sm-6"
                    style={{ color: "#959595", fontSize: "0.8rem" }}
                  >
                    <MdOutlineAutoAwesomeMosaic /> Auto
                  </Card.Text>
                  <Card.Text
                    className="col-6 col-sm-6"
                    style={{ color: "#959595", fontSize: "0.8rem" }}
                  >
                    <LuAirVent /> Air Conditioning
                  </Card.Text>
                  <Card.Text
                    className="col-6 col-sm-6"
                    style={{ color: "#959595", fontSize: "0.8rem" }}
                  >
                    <LuDoorOpen /> 2 Doors
                  </Card.Text>
                  <Card.Text className="col-12">
                    <span style={{ color: "#595959" }}>Price :</span>{" "}
                    <span style={{ color: "#292929" }}>$1,600</span>{" "}
                    <span style={{ color: "#9C9C9C" }}>/day</span>
                  </Card.Text>
                  <Button
                    onClick={() => {
                      navigate("/product");
                    }}
                    className="col-9 col-md-8 col-lg-7 col-xl-8"
                    variant="primary"
                  >
                    Rent Now
                  </Button>
                </Card.Body>
              </Card>
            </div>

            <div className="bigDivCard col-10 col-sm-5 col-md-4 col-lg-3 col-xl-2 ">
              <Card className="row">
                <Card.Img className="w-75 m-auto" variant="top" src={car4} />
                <Card.Body className="CardBodyDiv col-12">
                  <Card.Title className="col-11 h5">
                    Lamborghini Huracan
                  </Card.Title>
                  <Card.Text className="col-11">
                    <IoIosStar style={{ color: "gold" }} /> 4.3{" "}
                    <span style={{ color: "#808080" }}>(2.236 reviews)</span>
                  </Card.Text>
                  <Card.Text
                    className="col-6 col-sm-6 "
                    style={{ color: "#959595", fontSize: "0.8rem" }}
                  >
                    <IoPersonOutline /> 2 Passagers
                  </Card.Text>
                  <Card.Text
                    className="col-6 col-sm-6"
                    style={{ color: "#959595", fontSize: "0.8rem" }}
                  >
                    <MdOutlineAutoAwesomeMosaic /> Auto
                  </Card.Text>
                  <Card.Text
                    className="col-6 col-sm-6"
                    style={{ color: "#959595", fontSize: "0.8rem" }}
                  >
                    <LuAirVent /> Air Conditioning
                  </Card.Text>
                  <Card.Text
                    className="col-6 col-sm-6"
                    style={{ color: "#959595", fontSize: "0.8rem" }}
                  >
                    <LuDoorOpen /> 2 Doors
                  </Card.Text>
                  <Card.Text className="col-12">
                    <span style={{ color: "#595959" }}>Price :</span>{" "}
                    <span style={{ color: "#292929" }}>$2,300</span>{" "}
                    <span style={{ color: "#9C9C9C" }}>/day</span>
                  </Card.Text>
                  <Button
                    onClick={() => {
                      navigate("/product");
                    }}
                    className="col-9 col-md-8 col-lg-7 col-xl-8"
                    variant="primary"
                  >
                    Rent Now
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>

          <button
            onClick={() => {
              navigate("/data");
            }}
            className="button2DivApiAll btn btn-outline-secondary"
          >
            Show all vehicles <FaLongArrowAltRight />
          </button>
        </div>
      </div>

      <div className="bigestDivIcons">
        <button className="button1DivApiAll">HOW IT WORK</button>
        <h1 className="h1DivApiAll">Rent with following 3 working steps</h1>
        <div className="col-12 divHowToWorkIconsStyle">
          <div className="col-10 col-sm-5 col-md-3 everyDivDivHowToWorkIconsStyle">
            <div className="divIconEveryDivDivHowToWorkIconsStyle col-8 col-sm-5 col-md-8 col-lg-6">
              <MdEditLocation />
            </div>
            <h1 className="h5">Choose location</h1>
            <p className="peveryDivDivHowToWorkIconsStyle col-8 col-sm-9 col-md-9 col-lg-7 col-xl-6 text-center">
              Choose your and find your best car
            </p>
          </div>
          <div className="col-10 col-sm-5 col-md-3 everyDivDivHowToWorkIconsStyle">
            <div className="divIconEveryDivDivHowToWorkIconsStyle col-8 col-sm-5 col-md-8 col-lg-6">
              <SlCalender />
            </div>
            <h1 className="h5">Pick-up date</h1>
            <p className="peveryDivDivHowToWorkIconsStyle col-8 col-sm-9 col-md-12 col-lg-8 text-center">
              Select your pick up date and time to book your car
            </p>
          </div>
          <div className="col-10 col-sm-5 col-md-3 everyDivDivHowToWorkIconsStyle">
            <div className="divIconEveryDivDivHowToWorkIconsStyle col-8 col-sm-5 col-md-8 col-lg-6">
              <IoCarSport />
            </div>
            <h1 className="h5">Book your car</h1>
            <p className="peveryDivDivHowToWorkIconsStyle col-8 col-sm-9 col-md-12 col-lg-8 text-center">
              Book your car and we will deliver it directly to you
            </p>
          </div>
        </div>
      </div>

      <div className="bigestDivBrands col-10">
        <div className="col-5 col-sm-3 col-md-2 col-lg-2 divImgBrand">
          <img
            className="col-8 col-sm-8 col-md-8 col-lg-6"
            src={brand1}
            alt="Brand1"
          />
        </div>
        <div className="col-5 col-sm-3 col-md-2 col-lg-2 divImgBrand">
          <img
            className="col-8 col-sm-8 col-md-8 col-lg-6"
            src={brand2}
            alt="Brand2"
          />
        </div>
        <div className="col-5 col-sm-3 col-md-2 col-lg-2 divImgBrand">
          <img
            className="col-8 col-sm-8 col-md-8 col-lg-6"
            src={brand3}
            alt="Brand3"
          />
        </div>
        <div className="col-5 col-sm-3 col-md-2 col-lg-2 divImgBrand">
          <img
            className="col-8 col-sm-8 col-md-8 col-lg-6"
            src={brand4}
            alt="Brand4"
          />
        </div>
      </div>

      <div className="col-12 bigestDivSec5">
        <div className="col-10 col-md-9 col-lg-5 col-xl-6 div1ImgBigestDivSec5">
          <img className="w-100" src={Audi} alt="Audi Car" />
        </div>

        <div className="col-10 col-md-10 col-lg-6 div2BigestDivSec5">
          <button className="button1DivApiAll">WHY CHOOSE US</button>
          <h1 className="h4">
            We offer the best experience with our rental deals
          </h1>

          <div className="bigDivBenefitdiv2BigestDivSec5">
            <div className="divDescriptionbigDivBenefitdiv2BigestDivSec5">
              <div className="divIconsdivDescriptionbigDivBenefitdiv2BigestDivSec5">
                <FaWallet />
              </div>
              <div className="divTextdivDescriptionbigDivBenefitdiv2BigestDivSec5">
                <h2 className="h6">Best price guaranteed</h2>
                <p style={{ fontSize: "0.9rem" }}>
                  Find a lower price? We’ll refund you 100% of the difference.
                </p>
              </div>
            </div>

            <div className="divDescriptionbigDivBenefitdiv2BigestDivSec5">
              <div className="divIconsdivDescriptionbigDivBenefitdiv2BigestDivSec5">
                <IoPersonSharp />
              </div>
              <div className="divTextdivDescriptionbigDivBenefitdiv2BigestDivSec5">
                <h2 className="h6">24 hour car delivery</h2>
                <p style={{ fontSize: "0.9rem" }}>
                  Book your car anytime and we will deliver it directly to you.
                </p>
              </div>
            </div>

            <div className="divDescriptionbigDivBenefitdiv2BigestDivSec5">
              <div className="divIconsdivDescriptionbigDivBenefitdiv2BigestDivSec5">
                <BsCalendar2DayFill />
              </div>
              <div className="divTextdivDescriptionbigDivBenefitdiv2BigestDivSec5">
                <h2 className="h6">Best price guaranteed</h2>
                <p style={{ fontSize: "0.9rem" }}>
                  Find a lower price? We’ll refund you 100% of the difference.
                </p>
              </div>
            </div>

            <div className="divDescriptionbigDivBenefitdiv2BigestDivSec5">
              <div className="divIconsdivDescriptionbigDivBenefitdiv2BigestDivSec5">
                <IoLogoWechat />
              </div>
              <div className="divTextdivDescriptionbigDivBenefitdiv2BigestDivSec5">
                <h2 className="h6">24/7 technical support</h2>
                <p style={{ fontSize: "0.9rem" }}>
                  Have a question? Contact Rentcars support any time when you
                  have problem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 bigDivUserReview">
        <div className="col-12 bigDivUserReviewdivTitle">
          <button className="button1DivApiAll">TEST IMONIALS</button>
          <h1 className="h1DivApiAll">Most popular cars rental deals</h1>
        </div>
        <div className="col-10 col-md-10 col-lg-5 divbigDivUserReview">
          <div className="col-12 col-md-5 col-lg-6 col-xl-">
            <img className="w-100" src={boy} alt="boy" />
          </div>
          <div className="col-12 col-md-5 col-lg-5 col-xl- divDescriptiondiv1bigDivUserReview">
            <h1>5.5 stars</h1>
            <h6>* * * * *</h6>
            <p>
              “I feel very secure when using caretall's services. Your customer
              care team is very enthusiastic and the driver is always on time.”
            </p>
            <h5>Charlie Johnson</h5>
            <h6>Last updated 3 mins ago</h6>
          </div>
        </div>

        <div className="col-10 col-md-10 col-lg-5 divbigDivUserReview">
          <div className="col-12 col-md-5 col-lg-5 col-xl-">
            <img className="w-100" src={girl} alt="girl" />
          </div>
          <div className="col-12 col-md-5 col-lg-5 col-xl- divDescriptiondiv1bigDivUserReview">
            <h1>5.5 stars</h1>
            <h6>* * * * *</h6>
            <p>
              “I feel very secure when using caretall's services. Your customer
              care team is very enthusiastic and the driver is always on time.”
            </p>
            <h5>Charlie Johnson</h5>
            <h6>Last updated 3 mins ago</h6>
          </div>
        </div>
      </div>

      <div className="bigestDivSec7">
        <div className="col-10 col-sm-10 col-md-5 col-lg-5 div1BigestDivSec7">
          <h1 className="col-12 h2">
            Download Rentcars App for{" "}
            <span className="spandiv1BigestDivSec7">FREE</span>
          </h1>
          <p className="pdiv1BigestDivSec7 col-12">
            For faster, easier booking and exclusive deals.
          </p>
          <div className="divDownloadDiv1BigestDivSec7 col-12 col-sm-10">
            <img src={android} alt="" />
            <img src={ios} alt="" />
          </div>
          <div className="divInputsdiv1BigestDivSec7 col-12">
            <input
              className="inputStyledivInputsdiv1BigestDivSec7 col-12 col-sm-12 col-md-12 col-lg-7"
              type="text"
              placeholder="Name"
            />
            <input
              className="inputStyledivInputsdiv1BigestDivSec7 col-12 col-sm-12 col-md-12 col-lg-7"
              type="number"
              placeholder="Phone Number"
            />
            <input
              className="inputStyledivInputsdiv1BigestDivSec7 col-12 col-sm-12 col-md-12 col-lg-7"
              type="email"
              placeholder="Email"
            />
            <button className="btn btn-primary col-8 col-sm-6 col-lg-3">
              Send
            </button>
          </div>
        </div>

        <div className="col-8 col-sm-6 col-md-4 col-lg-3">
          <img
            className="w-100"
            src={applicationImage}
            alt="Application Image"
          />
        </div>
      </div>
    </div>
  );
}
