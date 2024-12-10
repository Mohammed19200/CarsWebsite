import "./NotFound.css";
import error from "../../assets/not-found/404-not-found.png";
import { useNavigate } from "react-router-dom";
export default function NotFound() {
  let navigate = useNavigate();
  return (
    <div className="divError col-10">
      <img className="imgError" src={error} alt="" />
      <button
        onClick={() => {
          navigate("/home");
        }}
        className="btn btn-primary col-10 col-sm-6 col-md-6 col-lg-4"
      >
        Go To Home
      </button>
    </div>
  );
}
