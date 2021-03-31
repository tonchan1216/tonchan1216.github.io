import React from "react"
import renderer from "react-test-renderer"

import SEO from "../../src/components/seo"

describe("SEO", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<SEO siteTitle="Default Starter" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
