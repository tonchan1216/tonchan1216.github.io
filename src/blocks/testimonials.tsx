import React, { useState } from "react"
import { getCLS, getFID, getLCP } from "web-vitals"

interface WebVital {
  name: string
  value: number
  delta: number
  id: string
  entries: any
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
        <div className="column">LCP:{lcp}</div>
        <div className="column">FID:{fid}</div>
        <div className="column">CLS:{cls}</div>
      </div>
    </section>
  )
}

export default Testimonials
