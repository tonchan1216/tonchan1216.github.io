import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { Link } from "react-scroll"

const Footer: React.FC = () => (
  <footer className="s-footer">
    <div className="row">
      <div className="column large-4 medium-6 w-1000-stack s-footer__social-block">
        <ul className="s-footer__social">
          <li>
            <a href="https://github.com/tonchan1216">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a href="https://jp.linkedin.com/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
        </ul>
      </div>

      <div className="column large-7 medium-6 w-1000-stack ss-copyright">
        <span>© Copyright 2021</span>
      </div>
    </div>

    <div className="ss-go-top">
      <Link activeClass="active" to="hero" spy={true} smooth={true}>
        <FontAwesomeIcon icon={faArrowUp} />
      </Link>
    </div>
  </footer>
)

export default Footer
