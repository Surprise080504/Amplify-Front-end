import React from "react";
import Button from "@material-ui/core/Button";
import { CusBtn } from "./hovercard.style";
import { Link } from "react-router-dom";

export default function HoverCardContainer({
  text,
  clickFunc,
  body,
  disabled = false,
  width = "350px",
}) {
  return (
    <Link to="/borrow">
      <CusBtn width={width}>
        <Button variant="text" disabled={disabled}>
          {body}
        </Button>
      </CusBtn>
    </Link>
  );
}
