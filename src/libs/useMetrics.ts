import { useState } from "react"
import { WebVital, Window } from "../libs/typeHelpers"
declare let window: Window

export const useMetrics = (): readonly [number, (arg0: WebVital) => void] => {
  const [metrics, setMetrics] = useState(-1)
  const changeMetrics = ({ name, delta, value, id }: WebVital) => {
    console.log(name)
    if (name == "CLS") {
      setMetrics((prev) => (prev ? Math.round(value * 10) / 10 : prev))
    } else {
      setMetrics((prev) => (prev ? Math.round(value) : prev))
    }

    if (typeof window.gtag !== "undefined") {
      window.gtag("event", name, {
        event_category: "web-vitals",
        event_label: id,
        value: Math.round(delta), // Use `delta` so the value can be summed.
        metric_id: id, // Needed to aggregate events.
        metric_value: value, // Optional.
        metric_delta: delta, // Optional.
      })
    }
  }

  return [metrics, changeMetrics] as const
}
