import React from "react";
import AboutMe from "./Components/AboutMe";
import PortfolioContents from "./Components/PortfolioContents";
function MyPortfolio() {
  return (
    <>
      <div className="main">
        <AboutMe />
        <div className="portfolio_content">
          <PortfolioContents />
        </div>
      </div>
    </>
  );
}

export default MyPortfolio;
