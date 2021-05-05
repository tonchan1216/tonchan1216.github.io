import React, { useState } from "react"
import { Link } from "react-scroll"

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

const Header: React.FC = () => {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(!open)
  const menu = [
    { anchor: "hero", title: "Home" },
    { anchor: "about", title: "About" },
    { anchor: "testimonials", title: "Benchmark" },
    { anchor: "resume", title: "Resume" },
    { anchor: "portfolio", title: "Publication" },
  ]

  return (
    <header className={"s-header" + (open ? " menu-is-open" : "")}>
      <div className="row s-header__nav-wrap">
        <nav className="s-header__nav">
          <ul>
            {menu.map((data) => (
              <Menu key={data.anchor} callback={toggle} anchor={data.anchor}>
                {data.title}
              </Menu>
            ))}
          </ul>
        </nav>
      </div>

      <a
        className={"s-header__menu-toggle" + (open ? " is-clicked" : "")}
        href="#0"
        title="Menu"
        onClick={toggle}
      >
        <span className="s-header__menu-icon"></span>
      </a>
    </header>
  )
}

export default Header
