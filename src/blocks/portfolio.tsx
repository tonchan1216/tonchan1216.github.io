import React from "react"
import styled from "styled-components"

import { useStaticQuery, graphql } from "gatsby"
import { QiitaQuery } from "../graphql"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons"

interface Qiita {
  id?: string
  title?: string
  likes_count?: number
  tags?: {
    name?: string
  }[]
  url?: string
}

const Folio = (props: { data: Qiita }) => (
  <Item className="column">
    <a href={props.data.url} target="_blank" rel="noreferrer">
      {/* <div> */}
      <span>{props.data.title}</span>
      <p>
        {props.data.tags.map((tag) => (
          <Tag key={tag.name}>{tag.name}</Tag>
        ))}
      </p>
      <span>
        <FontAwesomeIcon icon={faThumbsUp} /> {props.data.likes_count}
      </span>
      {/* </div> */}
    </a>
  </Item>
)

const Portfolio: React.FC = () => {
  const qiita: QiitaQuery = useStaticQuery(
    graphql`
      query Qiita {
        allQiitaPost(
          filter: { likes_count: { gt: 0 } }
          sort: { fields: likes_count, order: DESC }
          limit: 8
        ) {
          nodes {
            id
            title
            likes_count
            tags {
              name
            }
            url
          }
        }
      }
    `,
  )
  return (
    <Section id="portfolio" className="target-section">
      <div className="row">
        <div className="column large-12">
          <h3>A Few Of My Latest Publication</h3>
        </div>
      </div>
      <div className="row collapse block-large-1-4 block-medium-1-3 block-tab-1-2 block-500-stack">
        {qiita.allQiitaPost.nodes.map((data: Qiita) => (
          <Folio key={data.id} data={data} />
        ))}
      </div>
    </Section>
  )
}

const Section = styled.section`
  background-color: var(--color-gray-1);
  padding-top: calc(6 * var(--space));
  padding-bottom: var(--vspace-5);

  h3 {
    margin-top: 0;
  }

  & > div:first-child {
    text-align: center;
  }

  & > div:nth-child(2) {
    max-width: 1180px;
    margin-top: var(--vspace-2_5);
  }
`

const Tag = styled.span`
  font-size: 70%;
  margin: 1%;
  background-color: grey;
  color: white;
  border-radius: 10%;
  padding: 2px;
  line-height: 150%;
`

const Item = styled.div`
  border-radius: 10%;
  background-color: white;
  box-shadow: 0 1px 2.5px 0 rgba(0, 0, 0, 0.5);

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    height: 100%;
    text-align: center;
    padding: 5% 2%;

    & > span:nth-of-type(2) {
      // position: absolute;
      // bottom: 5%;
    }
  }

  a::before {
    z-index: 1;
    content: "";
    display: block;
    background-color: rgba(0, 0, 0, 0.8);
    opacity: 0;
    visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    -webkit-transition: all, 0.5s;
    transition: all, 0.5s;
    border-radius: 10%;
  }

  a::after {
    z-index: 1;
    content: "...";
    font-family: var(--font-2);
    font-weight: 300;
    font-size: 3rem;
    color: white;
    display: block;
    height: 32px;
    width: 32px;
    line-height: 32px;
    margin-left: -16px;
    margin-top: -16px;
    text-align: center;
    opacity: 0;
    visibility: hidden;
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    -webkit-transition: all, 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
    transition: all, 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
    position: absolute;
    left: 50%;
    top: 50%;
  }

  &:hover a::before {
    opacity: 1;
    visibility: visible;
  }

  &:hover a::after {
    opacity: 1;
    visibility: visible;
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  p {
    margin-bottom: var(--vspace-0_25);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`

export default Portfolio
