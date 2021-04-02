import React from "react"
import renderer from "react-test-renderer"
import { useStaticQuery, graphql } from "gatsby"

import SEO from "../seo"

jest.mock("gatsby", () => ({
  graphql: jest.fn(),
  useStaticQuery: jest.fn().mockReturnValueOnce({
    site: {
      siteMetadata: {
        title: "title",
        description: "description",
        author: "author",
        lang: "lang",
      },
    },
  }),
}))

describe("SEO", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<SEO title="Default Starter" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
