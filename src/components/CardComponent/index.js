import React from "react";
import Button from "@material-ui/core/Button";
import CustomBtn from "../BtnComponent";
import { CusBtn, Btns } from "./hovercard.style";
import { Link } from "react-router-dom";

export default function HoverCardContainer({
  name,
  body,
  disabled = false,
  width = "350px",
}) {
  return (
    // <Link to="/borrow">
    <CusBtn width={width}>
      <Link to={`${name}/borrow`}>
        <Button variant="text" disabled={disabled}>
          {body}
        </Button>
      </Link>
      <Btns>
        <Link to={`${name}/borrow`}>
          <CustomBtn
            text="BORROW"
            width={130}
            clickFunc={() => console.log("first")}
          />
        </Link>
        <Link to={`${name}/lend`}>
          <CustomBtn
            text="LEND"
            width={130}
            clickFunc={() => console.log("first")}
          />
        </Link>
      </Btns>
    </CusBtn>
    // </Link>
  );
}
