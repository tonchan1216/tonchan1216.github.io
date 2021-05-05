import React from "react"
import renderer from "react-test-renderer"

import Portfolio from "../portfolio"

jest.mock("gatsby", () => ({
  graphql: jest.fn(),
  useStaticQuery: jest.fn().mockReturnValue({
    allQiitaPost: {
      nodes: [
        {
          id: "id",
          title: "titile",
          likes_count: "1",
          tags: [
            {
              name: "name",
            },
          ],
          url: "url",
        },
      ],
    },
  }),
}))

describe("Portfolio", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Portfolio />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
