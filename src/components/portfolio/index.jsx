import React from "react";
import "./portfolio.css";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import { content } from "./content";

const Portfolio = () => {
  return (
    <div id="portfolio" className="container-fluid">
      <h1
        style={{
          textAlign: "center",
          fontWeight: "900",
          textTransform: "uppercase",
          color: "#4ab",
          margin: "4rem 0",
        }}
      >
        Portfolio
      </h1>
      <section className="grid row">
        {content.map((item, key) => (
          <div
            key={key}
            className="col-lg-6 col-md-12 col-sm-12 col-12 d-flex justify-content-center"
          >
            <figure className="effect">
              <img src={item.img} alt={item.title} />
              <figcaption>
                <h2>
                  {item.title}&nbsp;&nbsp;<span>{item.subtitle}</span>
                </h2>
                <p className="icon-links">
                  <LinkedinShareButton
                    className="share-btn"
                    url={
                      "https://www.linkedin.com/in/hovsep-stepanian-752554219/"
                    }
                    quote={
                      "This is the text which you want to show when people share your portfolio!"
                    }
                    hashtag="#FrontedDeveloper"
                  >
                    <span className="icon-linkedin"></span>
                  </LinkedinShareButton>
                  {/* <RedditShareButton
                    className="share-btn"
                    url={"https://reactjs.org"}
                    quote={
                      "This is the text which you want to show when people share your portfolio!"
                    }
                    hashtag="#FrontedDeveloper"
                  >
                    <span className="icon-reddit"></span>
                  </RedditShareButton> */}
                  <TwitterShareButton
                    className="share-btn"
                    url={"https://twitter.com/hovsepantranig"}
                    quote={
                      "This is the text which you want to show when people share your portfolio!"
                    }
                    hashtag="#FrontedDeveloper"
                  >
                    <span className="icon-twitter"></span>
                  </TwitterShareButton>
                  <FacebookShareButton
                    className="share-btn"
                    url={"https://www.facebook.com/hovsep.antranik"}
                    quote={
                      "This is the text which you want to show when people share your portfolio!"
                    }
                    hashtag="#FrontedDeveloper"
                  >
                    <span className="icon-facebook"></span>
                  </FacebookShareButton>
                </p>
                <p
                  className="description"
                  style={{ float: "left", padding: "0.5rem 1rem" }}
                >
                  <span>
                    DEMO:
                    <a href="#" className="demo-links">
                      {item.demo}
                    </a>
                  </span>
                </p>
              </figcaption>
            </figure>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Portfolio;
