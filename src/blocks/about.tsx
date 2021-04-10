import React from "react"
import { Content } from "../libs/typeHelpers"
import styled from "styled-components"

type Props = {
  avatarUrl: string
  contents: Content[]
}

const About: React.FC<Props> = ({ avatarUrl, contents }) => {
  return (
    <section id="about" className="s-about target-section">
      <div className="row">
        <AboutHeader className="column large-3 tab-12">
          <img className="s-about__pic" src={avatarUrl} alt="avatar" />
        </AboutHeader>
        <div className="column large-9 tab-12 s-about__content">
          <h3>About Me</h3>
          <div dangerouslySetInnerHTML={{ __html: contents[0].rich.html }} />
        </div>
      </div>
    </section>
  )
}

const AboutHeader = styled.div`
  text-align: center;
`

export default About
