import React, { useState, useEffect } from "react"
import styled from "styled-components"

import { getCLS, getFID, getLCP } from "web-vitals"

interface WebVital {
  name: string
  value: number
  delta: number
  id: string
}

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

const Metrics = styled.p`
  font-size: 180%;
  font-weight: bold;
`

const Testimonials: React.FC = () => {
  useEffect(() => {
    if (typeof window !== `undefined`) {
      getCLS(changeValue)
      getFID(changeValue)
      getLCP(changeValue)
    }
  })

  const [cls, setCls] = useState(0)
  const [fid, setFid] = useState(0)
  const [lcp, setLcp] = useState(0)

  const changeValue = (data: WebVital) => {
    if (data.name == "CLS" && cls == 0) {
      setCls(Math.round(data.value))
    } else if (data.name == "FID" && fid == 0) {
      setFid(Math.round(data.value))
    } else if (data.name == "LCP" && lcp == 0) {
      setLcp(Math.round(data.value))
    }
  }

  const getStatus = (metrics: string, value: number) => {
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
    <section id="testimonials" className="s-testimonials target-section">
      <div className="s-testimonials__bg"></div>

      <div className="row s-testimonials__header">
        <div className="column large-12">
          <h3>How Performance My Web achieve</h3>
        </div>
      </div>

      <div className="row s-testimonials__content">
        <Card className="column">
          <Description>(Loading)</Description>
          <SandFor>LCP</SandFor>
          <Title>Large Contentful Paint</Title>
          <Metrics className={getStatus("lcp", lcp)}>{lcp}ms</Metrics>
        </Card>
        <Card className="column">
          <Description>(Interactivy)</Description>
          <SandFor>FID</SandFor>
          <Title>First Input Delay</Title>
          <Metrics className={getStatus("fid", fid)}>{fid}ms</Metrics>
        </Card>
        <Card className="column">
          <Description>(Visual Stability)</Description>
          <SandFor>CLS</SandFor>
          <Title>Cumulative Layout Shift</Title>
          <Metrics className={getStatus("cls", cls)}>{cls}</Metrics>
        </Card>
      </div>
    </section>
  )
}

export default Testimonials
