import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import car from "../../assets/card/car1.png";
import car2 from "../../assets/card/car2.png";
import car3 from "../../assets/card/car3.png";
import { IoIosColorFill } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { IoLogoModelS } from "react-icons/io";
import { MdOutlineAutoAwesomeMosaic } from "react-icons/md";
import "./Data.css";
import { IoIosStar } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function Cars() {
  const [dataItem, setdataItem] = useState([]);
  let navigate = useNavigate();

  async function allData() {
    return await axios
      .get("https://myfakeapi.com/api/cars")
      .then((data) => {
        setdataItem(data?.data?.cars);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    allData();
  }, []);

  let dataSliceDynamic = dataItem.slice(0, 30);
  let carsImage = [
    car,
    car2,
    car3,
    car,
    car2,
    car3,
    car,
    car2,
    car3,
    car,
    car,
    car2,
    car3,
    car,
    car2,
    car3,
    car,
    car2,
    car3,
    car,
    car,
    car2,
    car3,
    car,
    car2,
    car3,
    car,
    car2,
    car3,
    car,
  ];

  return (
    <div style={{ padding: "2rem 0rem" }}>
      <h5 style={{ padding: "0.5rem 2rem", color: "#959595" }}>
        {" "}
        <span
          style={{
            textDecoration: "underline",
            color: "black",
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/home");
          }}
        >
          Home
        </span>{" "}
        / Cars
      </h5>
      <div className="col-12 bigDivUserReviewdivTitle">
        <button className="button1DivApiAll">POPULAR RENTAL DEALS</button>
        <h1 className="h1DivApiAll">Most popular cars rental deals</h1>
      </div>

      <div className="col-12 bigDivCard">
        {dataSliceDynamic.map((item, index) => {
          return (
            <div
              key={index}
              className="bigDivCard col-9 col-sm-5 col-md-3 col-lg-3 col-xl-2 "
            >
              <Card className="row">
                <Card.Img
                  height={110}
                  className="w-75 m-auto"
                  variant="top"
                  src={carsImage[index]}
                />
                <Card.Body className="CardBodyDiv col-12">
                  <Card.Title className="col-11 h5">
                    {item.car_model}
                  </Card.Title>

                  <Card.Text className="col-11">
                    <IoIosStar style={{ color: "gold" }} /> 4.8{" "}
                    <span style={{ color: "#808080" }}>(2.436 reviews)</span>
                  </Card.Text>

                  <Card.Text
                    style={{ color: "#959595", fontSize: "1rem" }}
                    className="col-6 col-sm-6 CarModelFont"
                  >
                    <IoLogoModelS />{" "}
                    {item.car.split(" ").splice(0, 1).join(" ")}
                  </Card.Text>

                  <Card.Text
                    style={{ color: "#959595", fontSize: "1rem" }}
                    className="col-6 col-sm-6 CarAuto"
                  >
                    <MdOutlineAutoAwesomeMosaic /> Auto
                  </Card.Text>

                  <div
                    style={{ borderBottom: "1px solid" }}
                    className="col-12 d-flex"
                  >
                    <Card.Text
                      style={{ color: "#959595", fontSize: "1rem" }}
                      className="col-6 col-sm-6 CarYearFont"
                    >
                      <FaCalendarAlt /> {item.car_model_year}
                    </Card.Text>
                    <Card.Text
                      style={{ color: "#959595", fontSize: "1rem" }}
                      className="col-6 col-sm-6 CarColorFont"
                    >
                      <IoIosColorFill /> {item.car_color}
                    </Card.Text>
                  </div>

                  <Card.Text
                    style={{
                      color: "#959595",
                      fontSize: "1rem",
                      paddingTop: "1rem",
                      margin: "0",
                    }}
                    className="col-12 d-flex justify-content-center CarPriceFont"
                  >
                    <p className="col-5">Price</p>
                    <p className="col-6">
                      <span className="fw-bold" style={{ color: "#292929" }}>
                        {item.price}
                      </span>{" "}
                      / day
                    </p>
                  </Card.Text>

                  <Button
                    onClick={() => {
                      navigate("/car-details");
                    }}
                    className="col-9 col-md-8 col-lg-7 col-xl-8"
                    variant="primary"
                  >
                    Rent Now
                  </Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
