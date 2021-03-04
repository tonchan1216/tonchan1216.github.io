import React from "react"
// import styled from "styled-components"
import { Link } from "react-scroll"

interface Props {
  menu: { anchor: string; title: string }[]
}

interface State {
  isOpen: boolean
}

const Menu = (props: {
  children: string
  callback: () => void
  anchor: string
}) => (
  <li>
    <Link
      activeClass="active"
      to={props.anchor}
      spy={true}
      smooth={true}
      onClick={props.callback}
    >
      {props.children}
    </Link>
  </li>
)
class Header extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      isOpen: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(): void {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render(): JSX.Element {
    return (
      <header
        className={"s-header" + (this.state.isOpen ? " menu-is-open" : "")}
      >
        <div className="row s-header__nav-wrap">
          <nav className="s-header__nav">
            <ul>
              <Menu callback={this.handleClick} anchor="hero">
                Home
              </Menu>
              <Menu callback={this.handleClick} anchor="about">
                About
              </Menu>
              <Menu callback={this.handleClick} anchor="resume">
                Resume
              </Menu>
              <Menu callback={this.handleClick} anchor="portfolio">
                Works
              </Menu>
              <Menu callback={this.handleClick} anchor="testimonials">
                Testimonials
              </Menu>
            </ul>
          </nav>
        </div>

        <a
          className={
            "s-header__menu-toggle" + (this.state.isOpen ? " is-clicked" : "")
          }
          href="#0"
          title="Menu"
          onClick={this.handleClick}
        >
          <span className="s-header__menu-icon"></span>
        </a>
      </header>
    )
  }
}

export default Header
