import React from "react";
import { Outlet, useParams } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
const DUMMY_QUOTES = [
  {
    id: "e1",
    author: "Madina",
    text: " React is ",
  },
  {
    id: "e1",
    author: "Madinaaaaaaaa!!!!!!!!!!!!!!!!!!!!!!",
    text: " React is ",
  },
];

const QuoteDetall = () => {
  const { qouteId } = useParams();
  const currentQuote = DUMMY_QUOTES.find((quote) => quote.id === qouteId);

  return (
    <>
      <HighlightedQuote text={currentQuote.text} author={currentQuote.author} />
      <Outlet />
    </>
  );
};

export default QuoteDetall;
