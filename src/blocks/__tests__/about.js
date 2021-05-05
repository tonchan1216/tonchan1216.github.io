import React from "react"
import renderer from "react-test-renderer"

import About from "../about"

describe("About", () => {
  it("renders correctly", () => {
    const contents = [
      {
        rich: {
          html: "html",
        },
      },
    ]
    const tree = renderer
      .create(<About avatarUrl="http://test.com" contents={contents} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
