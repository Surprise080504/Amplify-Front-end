import React from "react";
import Button from "@material-ui/core/Button";
import { CusBtn } from "./btn.style";

export default function BtnContainer({ text, clickFunc, disabled = false }) {
  return (
    <CusBtn>
      <Button
        variant="contained"
        color="primary"
        onClick={() => clickFunc()}
        disabled={disabled}
      >
        {text}
      </Button>
    </CusBtn>
  );
}
