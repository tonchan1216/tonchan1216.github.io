import React from "react"
import { Content } from "../typeHelpers"

type Props = {
  avatarUrl: string
  contents: Content[]
}

const About: React.FC<Props> = ({ avatarUrl, contents }) => {
  return (
    <section id="about" className="s-about target-section">
      <div className="row">
        <div className="column large-3 tab-12">
          <img className="s-about__pic" src={avatarUrl} alt="" />
        </div>
        <div className="column large-9 tab-12 s-about__content">
          <h3>About Me</h3>
          <p dangerouslySetInnerHTML={{ __html: contents[0].rich.html }} />
        </div>
      </div>
    </section>
  )
}

export default About
