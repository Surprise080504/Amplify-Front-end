import React from "react";
import HoverCard from "../CardComponent";
import CustomBtn from "../BtnComponent";
import OutlineBtn from "../OutlineComponent";
import {
  CardOut,
  Cardlogo,
  CardTitle,
  CardValue,
  CardItems,
  CardItem,
  TwoCardImg,
  Dollar,
  SupplyText,
  StatText,
  ArrowImg,
  ArrowPart,
  ArrowValue,
} from "./markcard.style";

export default function CardContainer({ data, name }) {
  const content = (
    <>
      <Cardlogo src="img/cardlogo.png" alt="" draggable={false} />
      <CardTitle>{name}</CardTitle>
      <CardValue>XXX\XXX</CardValue>
      <TwoCardImg src="img/twocard.png" alt="" draggable={false} />
      <CardItems>
        {data.map((e, index) => (
          <CardItem key={index}>
            <Dollar>$ {e.lValue}</Dollar>
            <SupplyText>{e.label}</SupplyText>
            <Dollar>$ {e.rValue}</Dollar>
          </CardItem>
        ))}
      </CardItems>
      <StatText>Leverage Stat</StatText>
      <ArrowPart>
        <ArrowValue direct="left">
          <span>5X</span>
          <br />
          000%
        </ArrowValue>
        <ArrowImg src="img/cardarrow.png" alt="" draggable={false} />
        <ArrowValue direct="right">
          <span>5X</span>
          <br />
          000%
        </ArrowValue>
      </ArrowPart>
    </>
  );
  return <HoverCard body={content} data={data} name={name} />;
}
