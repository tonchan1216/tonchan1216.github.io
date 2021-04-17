import React from "react"
import styled from "styled-components"

import { Content } from "../libs/typeHelpers"

type Props = {
  contents: Content[]
}

const Cta: React.FC<Props> = ({ contents }) => (
  <Section className="s-cta">
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
  </Section>
)

const Section = styled.section`
  background-color: var(--color-gray-1);
  padding-top: var(--vspace-2_5);
  padding-bottom: var(--vspace-3_5);
  font-weight: 400;
  font-size: var(--text-lg);
  line-height: var(--vspace-1_25);
  text-align: center;
  position: relative;

  .section-desc {
    margin-top: 0;
  }

  .cta-content {
    max-width: 800px;
  }

  &::before {
    content: "";
    display: block;
    height: 1px;
    width: 20vw;
    min-width: 150px;
    background-color: var(--color-gray-3);
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    position: absolute;
    top: 0;
    left: 50%;
  }

  @media screen and (max-width: 800px) {
    font-size: var(--text-md);
    line-height: var(--vspace-1);

    .cta-content {
      max-width: 600px;
    }
  }

  @media screen and (max-width: 600px) {
    .section-desc {
      font-size: var(--text-xl);
      line-height: var(--vspace-1_25);
    }
  }

  @media screen and (max-width: 400px) {
    padding-top: var(--vspace-3);
    padding-bottom: var(--vspace-3);
    font-size: var(--text-size);

    .section-desc {
      font-size: var(--text-lg);
      line-height: var(--vspace-1);
    }
  }
`

export default Cta
