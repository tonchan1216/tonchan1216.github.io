import React from "react"
import { Content } from "../libs/typeHelpers"

type Props = {
  contents: Content[]
}

const Cta: React.FC<Props> = ({ contents }) => (
  <section className="s-cta">
    <div className="row">
      <div className="column">
        <h3 className="h2 section-desc">
          Need to improve <span>PERFORMANCE</span>?
        </h3>
      </div>
    </div>

    <div className="row cta-content">
      <div
        className="column"
        dangerouslySetInnerHTML={{ __html: contents[0].rich.html }}
      />
    </div>
  </section>
)

export default Cta
