import React from "react";
import QuoteList from "../components/quotes/QuoteList";
import QuoteDetall from "./QuoteDetail";

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
const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
