/* eslint-disable react/no-unescaped-entities */
import React from "react"
import styled from "styled-components"

import { Content } from "../libs/typeHelpers"

type Props = {
  contents: Content[]
}

const Contact: React.FC<Props> = ({ contents }) => (
  <section id="contact" className="s-contact target-section">
    <div className="row s-contact__header">
      <div className="column large-12">
        <h3 className="section-header-allcaps">Say Hello</h3>
      </div>
    </div>

    <div className="row s-contact__content">
      <div className="column large-7 medium-12">
        <h4
          className="huge-text"
          dangerouslySetInnerHTML={{ __html: contents[0].rich.html }}
        />
      </div>

      <div className="column large-4 medium-12">
        <div className="row contact-infos">
          <div className="column large-12">
            <Button
              href="https://coconala.com/services/1593368?ref=profile_top_service"
              className="mailtoui btn btn--primary h-full-width"
            >
              Let's Talk
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const Button = styled.a`
  margin-top: var(--vspace-0_75);
`

export default Contact
