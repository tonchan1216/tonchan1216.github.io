import React from "react"
import { render, fireEvent } from "@testing-library/react"
import { useMetrics } from "../useMetrics"

const TestComponent = (props) => {
  // テスト用Reactコンポーネント作成
  const [metrics, changeMetrics] = useMetrics()
  return (
    <div>
      <p title="metrics">{metrics}</p>
      <button
        title="changeValue"
        onClick={() => changeMetrics(props.values)}
      ></button>
    </div>
  )
}

describe("useMetricsのユニットテスト", () => {
  it("CLS", () => {
    const webvitals = { name: "CLS", delta: 1, value: 1, id: "test" }
    const { getByTitle } = render(<TestComponent values={webvitals} />) // 仮想DOMにレンダリング

    const metrics = getByTitle("metrics") // HTML要素を取得

    expect(metrics.textContent).toEqual("-1")

    fireEvent.click(getByTitle("changeValue")) // クリックイベントを発火
    expect(metrics.textContent).toEqual("1")
  })
  it("FID", () => {
    const webvitals = { name: "FID", delta: 1, value: 1, id: "test" }
    const { getByTitle } = render(<TestComponent values={webvitals} />) // 仮想DOMにレンダリング

    const metrics = getByTitle("metrics") // HTML要素を取得

    expect(metrics.textContent).toEqual("-1")

    fireEvent.click(getByTitle("changeValue")) // クリックイベントを発火
    expect(metrics.textContent).toEqual("1")
  })
  it("LCP", () => {
    const webvitals = { name: "LCP", delta: 1, value: 1, id: "test" }
    const { getByTitle } = render(<TestComponent values={webvitals} />) // 仮想DOMにレンダリング

    const metrics = getByTitle("metrics") // HTML要素を取得

    expect(metrics.textContent).toEqual("-1")

    fireEvent.click(getByTitle("changeValue")) // クリックイベントを発火
    expect(metrics.textContent).toEqual("1")
  })
  it("gtag mock", () => {
    window.gtag = jest.fn()
    const webvitals = { name: "gtag", delta: 1, value: 1, id: "test" }

    const { getByTitle } = render(<TestComponent values={webvitals} />) // 仮想DOMにレンダリング

    fireEvent.click(getByTitle("changeValue")) // クリックイベントを発火
    expect(window.gtag).toBeCalled()
  })
})
