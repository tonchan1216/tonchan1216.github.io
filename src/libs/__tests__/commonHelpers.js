import { getStatus } from "../commonHelpers"

describe("getStatus", () => {
  it("loading", () => {
    expect(getStatus("lcp", -1)).toEqual("loading")
    expect(getStatus("fid", -1)).toEqual("loading")
    expect(getStatus("cls", -1)).toEqual("loading")
  })
  it("error", () => {
    expect(getStatus("lcp", 4001)).toEqual("error")
    expect(getStatus("fid", 500)).toEqual("error")
    expect(getStatus("cls", 1)).toEqual("error")
  })
  it("notice", () => {
    expect(getStatus("lcp", 2501)).toEqual("notice")
    expect(getStatus("fid", 101)).toEqual("notice")
    expect(getStatus("cls", 0.2)).toEqual("notice")
  })
  it("success", () => {
    expect(getStatus("lcp", 2500)).toEqual("success")
    expect(getStatus("fid", 100)).toEqual("success")
    expect(getStatus("cls", 0.1)).toEqual("success")
  })
  it("default success", () => {
    expect(getStatus("test", 2500)).toEqual("success")
  })
})
