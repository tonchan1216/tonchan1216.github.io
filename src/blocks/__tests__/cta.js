import React from "react"
import renderer from "react-test-renderer"

import Cta from "../cta"

describe("Cta", () => {
  const contents = [
    {
      rich: {
        html: "html",
      },
    },
  ]

  it("renders correctly", () => {
    const tree = renderer.create(<Cta contents={contents} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
