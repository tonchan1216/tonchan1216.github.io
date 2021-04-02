import React from "react"
import renderer from "react-test-renderer"
import { cleanup, fireEvent, render } from "@testing-library/react"

import Header from "../header"

describe("Header", () => {
  afterEach(() => {
    afterEach(cleanup)
  })
  it("renders correctly", () => {
    const tree = renderer.create(<Header />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it("Toggle ClassName with click action", () => {
    const { container } = render(<Header title="Default Starter" />)
    const menu = container.querySelector(".s-header__menu-toggle")
    expect(menu).toBeTruthy()

    // un open toggle menu
    expect(container.querySelector(".menu-is-open")).toBeNull()
    expect(container.querySelector(".is-clicked")).toBeNull()

    // open toggle menu
    fireEvent.click(menu)
    expect(container.querySelector(".menu-is-open")).toBeTruthy()
    expect(container.querySelector(".is-clicked")).toBeTruthy()
  })
})
