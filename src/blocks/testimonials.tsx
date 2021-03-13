import React, { useState } from "react"
import { getCLS, getFID, getLCP } from "web-vitals"

interface WebVital {
  name: string
  value: number
  delta: number
  id: string
}

const Testimonials: React.FC = () => {
  const [cls, setCls] = useState(0)
  const [fid, setFid] = useState(0)
  const [lcp, setLcp] = useState(0)

  const changeValue = (data: WebVital) => {
    if (data.name == "CLS") {
      setCls(data.value)
    } else if (data.name == "FID") {
      setFid(data.value)
    } else if (data.name == "LCP") {
      setLcp(data.value)
    } else {
      console.log(data)
    }
  }

  getCLS(changeValue)
  getFID(changeValue)
  getLCP(changeValue)

  return (
    <section id="testimonials" className="s-testimonials target-section">
      <div className="s-testimonials__bg"></div>

      <div className="row s-testimonials__header">
        <div className="column large-12">
          <h3>Here How Performance My Web achieve</h3>
        </div>
      </div>

      <div className="row s-testimonials__content">
        <div className="column">
          <p>(Loading)</p>
          <p>LCP</p>
          <p>Large Contentful Paint</p>
          <p>{lcp}</p>
        </div>
        <div className="column">
          <p>(Interactivy)</p>
          <p>FID</p>
          <p>First Input Delay</p>
          <p>{fid}</p>
        </div>
        <div className="column">
          <p>(Visual Stability)</p>
          <p>CLS</p>
          <p>Cumulative Layout Shift</p>
          <p>{cls}</p>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
