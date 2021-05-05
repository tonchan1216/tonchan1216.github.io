import React from "react"
import renderer from "react-test-renderer"

import Contact from "../contact"

describe("Contact", () => {
  it("renders correctly", () => {
    const contents = [
      {
        rich: {
          html: "html",
        },
      },
    ]

    const tree = renderer.create(<Contact contents={contents} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
