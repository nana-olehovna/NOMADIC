import { useNavigate } from "react-router-dom";

import Button from "../Button";

export default function LinkToLoginButton() {
  let navigate = useNavigate()
  return (
    <Button 
      type="button"
      variant="mini"
      onClick={() =>  navigate("/login")}
    > Login
    </Button>
  )
}