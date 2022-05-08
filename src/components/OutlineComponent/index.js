import React from "react";
import Button from "@material-ui/core/Button";
import { CusBtn } from "./btn.style";

export default function BtnContainer({
  width = "200px",
  height = "48px",
  text,
  clickFunc,
  disabled = false,
}) {
  return (
    <CusBtn width={width} height={height}>
      <Button
        variant="outlined"
        onClick={() => clickFunc()}
        disabled={disabled}
      >
        {text}
      </Button>
    </CusBtn>
  );
}
