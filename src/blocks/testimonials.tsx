import React, { useEffect } from "react"
import styled from "styled-components"
import { getCLS, getFID, getLCP } from "web-vitals"
import GaugeChart from "react-gauge-chart"

import { BackgroundBase } from "../libs/styleHelpers"
import { getStatus, getPercentage, getLength } from "../libs/commonHelpers"
import { useMetrics } from "../libs/useMetrics"

const MetricsBock: React.FC<{
  description: string
  title: string
  type: string
  value: number
}> = ({ type, value, title, description }) => {
  const status = getStatus(type, value)
  const percentage = status == "loading" ? 0 : getPercentage(type, value)

  const MetricsStyle = {
    fontSize: "180%",
    FontWeight: "bold",
  }

  const chartStyle = {
    // height: 200,
    width: "200px",
    margin: "0 auto",
  }

  return (
    <Card className="column">
      <Description>({description})</Description>
      <SandFor>{type}</SandFor>
      <Title>{title}</Title>

      <GaugeChart
        id={"gauge-chart-" + type}
        style={chartStyle}
        percent={percentage}
        arcsLength={getLength(type)}
        colors={["#5BE12C", "#F5CD19", "#EA4228"]}
        hideText={true}
      />

      <p style={MetricsStyle} className={status}>
        {status === "loading" ? "-" : value}
        {type === "CLS" ? "" : "ms"}
      </p>
    </Card>
  )
}

const Testimonials: React.FC<{ url: string }> = ({ url }) => {
  const [cls, setCls] = useMetrics()
  const [fid, setFid] = useMetrics()
  const [lcp, setLcp] = useMetrics()

  useEffect(() => {
    getCLS(setCls)
    getFID(setFid)
    getLCP(setLcp)
  }, [])

  return (
    <Section id="testimonials" className="target-section">
      <BackGround url={url} />

      <div className="row">
        <div className="column large-12">
          <h3>How Performance My Web achieve</h3>
        </div>
      </div>

      <div className="row">
        <MetricsBock
          description="Loading"
          type="LCP"
          title="Large Contentful Paint"
          value={lcp}
        />

        <MetricsBock
          description="Interactivy"
          type="FID"
          title="First Input Delay"
          value={fid}
        />

        <MetricsBock
          description="Visual Stability"
          type="CLS"
          title="Cumulative Layout Shift"
          value={cls}
        />
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
  margin: 1%;
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
