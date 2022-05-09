import React from "react";
import { TiWarning } from "react-icons/ti";
import { Link } from "react-router-dom";
import CustomBtn from "../../components/BtnComponent";
import MarketCard from "../../components/MarketCard";
import {
  HomeOut,
  CardContainer,
  MarketTopPart,
  HideTitle,
  HideSub,
  TopItem,
} from "./markets.style";

export default function MarketsContainer() {
  const cardData = [
    ["00K", "Total Supply", "00k"],
    ["00K", "Total Borrow", "00k"],
    ["00K", "Utilization", "00k"],
    ["00K", "Supply APR", "00k"],
    ["00K", "Borrow APR", "00k"],
    ["00K", "Farming APR", "00k"],
  ];
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
        {[...Array(6)].map((e, index) => (
          <MarketCard key={index} data={cardData} />
        ))}
      </CardContainer>
    </HomeOut>
  );
}
