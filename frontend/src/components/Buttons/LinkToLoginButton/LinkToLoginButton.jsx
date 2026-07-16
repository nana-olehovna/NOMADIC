import { useNavigate } from "react-router-dom";

import Button from "../Button";
import "./LinkToLoginButton.scss";

export default function LinkToLoginButton() {
  let navigate = useNavigate()
  return (
    <Button 
      type="button"
      className="mini"
      onClick={() =>  navigate("/login")}
    > Login
    </Button>
  )
}