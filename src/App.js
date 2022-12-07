import React from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import Comments from "./components/comments/Comments";
import Layout from "./components/layout/Layout";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import NotFound from "./pages/NotFound";
import QuoteDetail from "./pages/QuoteDetail";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/quotes" />} />
        <Route path="/quotes" element={<AllQuotes />} />
        <Route path="/new-quote" element={<NewQuote />} />
        <Route path="/quotes/:qouteId" element={<QuoteDetail />}>
          <Route
            path="/quotes/:qouteId"
            element={
              <div className="centered">
                <Link to="comments">Load Comments</Link>{" "}
              </div>
            }
          />

          <Route path="comments" element={<Comments/>}></Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default App;
