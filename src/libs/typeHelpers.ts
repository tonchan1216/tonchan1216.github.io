export interface Content {
  id?: string
  key?: string
  rich?: {
    html?: string
  }
}

export interface WebVital {
  name: string
  value: number
  delta: number
  id: string
}

export interface Window {
  // eventのため
  gtag(
    type: "event",
    eventAction: string,
    fieldObject: {
      event_category: string
      event_label: string
      value: number
      metric_id?: string
      metric_value?: number
      metric_delta?: number
    },
  ): void
}
