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

export interface Qiita {
  id?: string
  title?: string
  likes_count?: number
  tags?: {
    name?: string
  }[]
  url?: string
}

export interface Item {
  title?: string
  description?: string
  date?: string
  note?: {
    html?: string
  }
}

export interface Skill {
  name?: string
  percent?: number
}
