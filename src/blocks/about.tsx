import React from "react"
import styled from "styled-components"

import { Content } from "../libs/typeHelpers"

type Props = {
  avatarUrl: string
  contents: Content[]
}

const About: React.FC<Props> = ({ avatarUrl, contents }) => {
  return (
    <Section id="about" className="target-section">
      <div className="row">
        <AboutHeader className="column large-3 tab-12">
          <Avatar src={avatarUrl} alt="avatar" width="100px" height="100px" />
        </AboutHeader>
        <div className="column large-9 tab-12">
          <h3>About Me</h3>
          <div dangerouslySetInnerHTML={{ __html: contents[0].rich.html }} />
        </div>
      </div>
    </Section>
  )
}

const Section = styled.section`
  --color-border: var(--color-gray-16);
  background-color: var(--color-gray-17);
  padding-top: calc(6 * var(--space));
  padding-bottom: var(--vspace-4);
  color: rgba(255, 255, 255, 0.4);

  h3 {
    margin-top: 0;
    color: white;
  }

  @media screen and (max-width: 800px) {
    padding-top: var(--vspace-5);
  }
`

const Avatar = styled.img`
  border: 1.2rem solid rgba(255, 255, 255, 0.02);
  border-radius: 50%;
`

const AboutHeader = styled.div`
  text-align: center;
`

export default About
