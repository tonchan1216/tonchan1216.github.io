import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Loader from "react-loader-spinner"
import { BackgroundBase } from "../typeHelpers"

import { getCLS, getFID, getLCP } from "web-vitals"

interface WebVital {
  name: string
  value: number
  delta: number
  id: string
}

interface Window {
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

declare let window: Window

const Metrics: React.FC<{ children: React.ReactNode; status: string }> = ({
  children,
  status,
}) => {
  const MetricsStyle = {
    fontSize: "180%",
    FontWeight: "bold",
  }

  if (status == "loading") {
    return <Loader type="TailSpin" color="#00BFFF" />
  } else {
    return (
      <p style={MetricsStyle} className={status}>
        {children}
      </p>
    )
  }
}

const Testimonials: React.FC<{ url: string }> = ({ url }) => {
  useEffect(() => {
    if (typeof window !== `undefined`) {
      getCLS(changeValue)
      getFID(changeValue)
      getLCP(changeValue)
    }
  })

  const [cls, setCls] = useState(-1)
  const [fid, setFid] = useState(-1)
  const [lcp, setLcp] = useState(-1)

  const changeValue = ({ name, delta, value, id }: WebVital) => {
    if (name == "CLS" && cls == -1) {
      setCls(Math.round(value * 10) / 10)
    } else if (name == "FID" && fid == -1) {
      setFid(Math.round(value))
    } else if (name == "LCP" && lcp == -1) {
      setLcp(Math.round(value))
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

  const getStatus = (metrics: string, value: number) => {
    if (value == -1) {
      return "loading"
    }

    switch (metrics) {
      case "lcp":
        if (value > 4000) {
          return "error"
        } else if (value > 2500) {
          return "notice"
        } else {
          return "success"
        }
      case "fid":
        if (value > 300) {
          return "error"
        } else if (value > 100) {
          return "notice"
        } else {
          return "success"
        }
      case "cls":
        if (value > 0.25) {
          return "error"
        } else if (value > 0.1) {
          return "notice"
        } else {
          return "success"
        }
      default:
        return "success"
    }
  }

  return (
    <Section id="testimonials" className="target-section">
      <BackGround url={url} />

      <div className="row">
        <div className="column large-12">
          <h3>How Performance My Web achieve</h3>
        </div>
      </div>

      <div className="row">
        <Card className="column">
          <Description>(Loading)</Description>
          <SandFor>LCP</SandFor>
          <Title>Large Contentful Paint</Title>
          <Metrics status={getStatus("lcp", lcp)}>{lcp}ms</Metrics>
        </Card>
        <Card className="column">
          <Description>(Interactivy)</Description>
          <SandFor>FID</SandFor>
          <Title>First Input Delay</Title>
          <Metrics status={getStatus("fid", fid)}>{fid}ms</Metrics>
        </Card>
        <Card className="column">
          <Description>(Visual Stability)</Description>
          <SandFor>CLS</SandFor>
          <Title>Cumulative Layout Shift</Title>
          <Metrics status={getStatus("cls", cls)}>{cls}</Metrics>
        </Card>
      </div>
    </Section>
  )
}

const Section = styled.section`
  padding-top: var(--vspace-5);
  padding-bottom: var(--vspace-3_5);
  color: rgba(255, 255, 255, 0.8);
  background-color: var(--color-gray-19);
  overflow: hidden;
  position: relative;

  h3 {
    margin-top: 0;
    color: white;
  }

  div.row {
    position: relative;
  }

  & > div:nth-child(2) {
    text-align: center;
    margin-bottom: var(--vspace-2);
  }

  & > div:nth-child(2) > .column:first-child {
    min-height: 0;
    min-width: 0;
  }
`
const BackGround = styled(BackgroundBase)`
  &::before {
    background-color: var(--color-gray-19);
    opacity: 0.8;
  }
`

const Card = styled.div`
  background-color: #ffffff;
  margin: 0 1%;
  p {
    text-align: center;
  }
  .success {
    color: var(--color-success);
  }
  .notice {
    color: var(--color-notice);
  }
  .error {
    color: var(--color-error);
  }

  div {
    text-align: center;
  }
`

const Description = styled.p`
  font-size: 80%;
  color: var(--color-gray-3);
  font-style: italic;
`

const SandFor = styled.p`
  font-size: 200%;
  color: var(--color-btn-primary);
  font-weight: bold;
`

const Title = styled.p`
  color: var(--color-gray-6);
  font-family: var(--font-2);
`

export default Testimonials
