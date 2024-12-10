import "./SingleProduct.css";
import car from "../../assets/landing-page/sec-5/Audi 1.png";
import { LuAirVent } from "react-icons/lu";
import { MdOutlineAutoAwesomeMosaic } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { LuDoorOpen } from "react-icons/lu";

export default function SingleProduct() {
  return (
    <div className="col-12 bigDivSingleProduct">
      <div className="col-11 col-md-10 col-lg-5 divImgSingleProduct">
        <img className="w-100" src={car} alt="" />
      </div>

      <div className="col-11 col-md-9 col-lg-5 secondDivSingleProduct">
        <button className="button1DivApiAll">WHY CHOOSE US</button>
        <h1 className="h1DivApiAll h1secondDivSingleProduct">
          We offer the best experience with our rental deals
        </h1>
        <div>
          <h6 style={{ color: "#959595" }}>
            <IoPersonOutline /> 2 Passagers
          </h6>
          <h6 style={{ color: "#959595" }}>
            <MdOutlineAutoAwesomeMosaic /> Auto
          </h6>
          <h6 style={{ color: "#959595" }}>
            <LuAirVent /> Air Conditioning
          </h6>
          <h6 style={{ color: "#959595" }}>
            <LuDoorOpen /> 2 Doors
          </h6>
        </div>
      </div>
    </div>
  );
}
