import React from "react";
import { TiWarning } from "react-icons/ti";
import { Link } from "react-router-dom";
import CustomBtn from "../../components/BtnComponent";
import MarketCard from "../../components/MarketCard";
import { cardData } from "../../data";
import {
  HomeOut,
  CardContainer,
  MarketTopPart,
  HideTitle,
  HideSub,
  TopItem,
} from "./markets.style";

export default function MarketsContainer() {
  return (
    <HomeOut>
      <Link to="/">
        <HideTitle>AMPLIFY</HideTitle>
      </Link>
      <HideSub>Markets</HideSub>
      <MarketTopPart>
        <TopItem>
          <span>$00000.000</span>
          <br />
          Total
          <br />
          Value Locked
        </TopItem>
        <TopItem>
          <span>$00000.000</span>
          <br />
          Total
          <br />
          Supplied
        </TopItem>
        <TopItem>
          <span>$00000.000</span>
          <br />
          Total
          <br />
          Borrowed
        </TopItem>
        <TopItem>
          <span>$00000.000</span>
          <br />
          AMPL
          <br />
          Price
        </TopItem>
      </MarketTopPart>
      <CardContainer>
        {cardData.map((e, index) => (
          <MarketCard key={index} data={e.marketData} name={e.marketName} />
        ))}
      </CardContainer>
    </HomeOut>
  );
}
