import React from "react"
import renderer from "react-test-renderer"
import { useStaticQuery } from "gatsby"

import SEO from "../seo"

jest.mock("gatsby", () => ({
  graphql: jest.fn(),
  useStaticQuery: jest.fn().mockReturnValue({
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
  afterEach(() => {
    useStaticQuery.mockClear()
  })
  it("renders correctly", () => {
    const links = ["http://test1.co.jp", "http://test2.co.jp"]
    const tree = renderer
      .create(<SEO title="Default Starter" links={links} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it("renders correctly without links", () => {
    const tree = renderer.create(<SEO title="Default Starter" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
