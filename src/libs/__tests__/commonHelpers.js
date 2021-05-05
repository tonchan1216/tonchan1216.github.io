import { getStatus } from "../commonHelpers"

describe("getStatus", () => {
  it("loading", () => {
    expect(getStatus("LCP", -1)).toEqual("loading")
    expect(getStatus("FID", -1)).toEqual("loading")
    expect(getStatus("CLS", -1)).toEqual("loading")
  })
  it("error", () => {
    expect(getStatus("LCP", 4001)).toEqual("error")
    expect(getStatus("FID", 500)).toEqual("error")
    expect(getStatus("CLS", 1)).toEqual("error")
  })
  it("notice", () => {
    expect(getStatus("LCP", 2501)).toEqual("notice")
    expect(getStatus("FID", 101)).toEqual("notice")
    expect(getStatus("CLS", 0.2)).toEqual("notice")
  })
  it("success", () => {
    expect(getStatus("LCP", 2500)).toEqual("success")
    expect(getStatus("FID", 100)).toEqual("success")
    expect(getStatus("CLS", 0.1)).toEqual("success")
  })
  it("default success", () => {
    expect(getStatus("test", 2500)).toEqual("success")
  })
})
