/* eslint-disable react/no-unescaped-entities */
import React from "react"
import { Link } from "react-scroll"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import styled from "styled-components"

import { Content } from "../typeHelpers"

const svgStyle = {
  fill: "rgba(0, 0, 0, 1)",
  //   transform:,
  //   -ms-filter:
}

const BackgroundImage = styled.div<{ url: string }>`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  &::before {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.5;
  }

  &::after {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(360deg, black 15%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.4;
  }
`

type Props = {
  name: string
  url: string
  contents: Content[]
}

const Hero: React.FC<Props> = ({ name, url, contents }) => {
  return (
    <section id="hero" className="s-hero target-section">
      <BackgroundImage
        className="rellax"
        data-rellax-speed="-7"
        url={url}
      ></BackgroundImage>

      <div className="row s-hero__content">
        <div className="column">
          <div className="s-hero__content-about">
            <h1>I'm {name}.</h1>

            <h3 dangerouslySetInnerHTML={{ __html: contents[0].rich.html }} />

            <div className="s-hero__content-social">
              <a href="https://github.com/tonchan1216">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="#0">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="s-hero__scroll">
        <Link
          to="about"
          spy={true}
          smooth={true}
          className="s-hero__scroll-link smoothscroll"
        >
          <span className="scroll-arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style={svgStyle}
            >
              <path d="M18.707 12.707L17.293 11.293 13 15.586 13 6 11 6 11 15.586 6.707 11.293 5.293 12.707 12 19.414z"></path>
            </svg>
          </span>
          <span className="scroll-text">Scroll Down</span>
        </Link>
      </div>
    </section>
  )
}

export default Hero
