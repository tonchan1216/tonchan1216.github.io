import React from "react"
import renderer from "react-test-renderer"

import Resume from "../resume"

jest.mock("gatsby", () => ({
  graphql: jest.fn(),
  useStaticQuery: jest.fn().mockReturnValue({
    skills: {
      nodes: [
        {
          name: "name",
          percent: "10",
        },
      ],
    },
    careers: {
      nodes: [
        {
          title: "name",
          description: "description",
          date: "date",
          note: {
            html: "html",
          },
        },
      ],
    },
    educations: {
      nodes: [
        {
          title: "name",
          description: "description",
          date: "date",
          note: {
            html: "html",
          },
        },
      ],
    },
  }),
}))

describe("Resume", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Resume />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
