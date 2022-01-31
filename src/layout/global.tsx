import "styles/global.scss";
import { useEffect, useState } from "react";
import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { Main } from "components/main";
import { Header } from "components/header";
import { Footer } from "components/footer";
import { ThemeContext, PortfolioContext } from "contexts/theme";
import MenuIcon from "img/menu.svg";
import logo from "img/logo.png";
import favicon from "assets/img/favicon.ico";
import { TransitionGroup, Transition as ReactTransition } from "react-transition-group";
const timeout = 700;
const TemplateWrapper = ({ children, location }: any) => {
  const [theme, setTheme] = useState("");
  const [portfolioOptions, setPortfolioOptions]: [PortfolioOptions, SetPortfolioOptions] = useState(
    { isPortfolio: false, portfolioButtonShow: false }
  );
  const helmet_meta_otions = [
    { name: `description`, content: `programming & tech blog` },
    { name: `generator`, content: `gatsby` },
    { name: `author`, content: `HyeokjaeLee` },
    {
      name: `google-site-verification`,
      content: "6KHb8V0fAsVjI-k0fZfovmdLDrfikkgwpVMCsfSmvrw",
    },
  ];

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <PortfolioContext.Provider value={{ portfolioOptions, setPortfolioOptions }}>
        <Helmet title="Nagle`s Blog" meta={helmet_meta_otions} bodyAttributes={{ class: theme }}>
          <link rel="icon" href={favicon} />
        </Helmet>
        <Header location={location} />
        <TransitionGroup className="main-wrap">
          <ReactTransition
            key={location.pathname}
            timeout={{
              enter: timeout,
              exit: timeout,
            }}
          >
            {(status) => <main className={status}>{children}</main>}
          </ReactTransition>
        </TransitionGroup>
        <Footer />
        {portfolioOptions.portfolioButtonShow ? (
          <div id="portfolio-link">
            <Link to="/about?portfolio">Portfolio로 돌아가기</Link>
          </div>
        ) : (
          <></>
        )}
      </PortfolioContext.Provider>
    </ThemeContext.Provider>
  );
};

export default TemplateWrapper;
