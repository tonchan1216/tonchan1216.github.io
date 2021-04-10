import React from "react"
import renderer from "react-test-renderer"

import Hero from "../hero"

describe("Hero", () => {
  it("renders correctly", () => {
    const contents = [
      {
        rich: {
          html: "html",
        },
      },
    ]

    const tree = renderer
      .create(<Hero name="test" url="http://test.com" contents={contents} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
