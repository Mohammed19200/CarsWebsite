import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import car from "../../assets/card/car1.png";
import "./Data.css";
import { IoIosStar } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function Data() {
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

  return (
    <div style={{ padding: "2rem 0rem" }}>
      <h5 style={{ padding: "0.5rem 2rem", color: "#959595" }}>
        {" "}
        <span
          style={{ textDecoration: "underline", color: "black" }}
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
        {dataItem.map((item, index) => {
          return (
            <div
              key={index}
              className="bigDivCard col-10 col-sm-5 col-md-3 col-lg-3 col-xl-2 "
            >
              <Card className="row">
                <Card.Img className="w-75 m-auto" variant="top" src={car} />
                <Card.Body className="CardBodyDiv col-12">
                  <Card.Title className="col-11 h5">
                    {item.car_model}
                  </Card.Title>
                  <Card.Text className="col-11">
                    <IoIosStar style={{ color: "gold" }} /> 4.8{" "}
                    <span style={{ color: "#808080" }}>(2.436 reviews)</span>
                  </Card.Text>
                  <Card.Text
                    style={{ color: "#959595", fontSize: "0.8rem" }}
                    className="col-6 col-sm-6"
                  >
                    {item.car}
                  </Card.Text>
                  <Card.Text
                    style={{ color: "#959595", fontSize: "0.8rem" }}
                    className="col-6 col-sm-6"
                  >
                    {item.price}
                  </Card.Text>
                  <Card.Text
                    style={{ color: "#959595", fontSize: "0.8rem" }}
                    className="col-6 col-sm-6"
                  >
                    {item.car_model_year}
                  </Card.Text>
                  <Card.Text
                    style={{ color: "#959595", fontSize: "0.8rem" }}
                    className="col-6 col-sm-6"
                  >
                    {item.car_color}
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
          );
        })}
      </div>
    </div>
  );
}
