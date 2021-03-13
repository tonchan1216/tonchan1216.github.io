import React from "react"
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
  <div className="column folio-item">
    <a
      href={props.data.url}
      className="folio-item__thumb"
      target="_blank"
      rel="noreferrer"
    >
      <div>
        <span>
          <FontAwesomeIcon icon={faThumbsUp} />
          {props.data.likes_count}
        </span>
        <p className="folio-tag">
          {props.data.tags.map((tag) => (
            <span key={tag.name}>{tag.name}</span>
          ))}
        </p>
      </div>
      <div>{props.data.title}</div>
    </a>
  </div>
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
    <section id="portfolio" className="s-portfolio target-section">
      <div className="row s-portfolio__header">
        <div className="column large-12">
          <h3>A Few Of My Latest Publication</h3>
        </div>
      </div>
      <div className="row collapse block-large-1-4 block-medium-1-3 block-tab-1-2 block-500-stack folio-list">
        {qiita.allQiitaPost.nodes.map((data: Qiita) => (
          <Folio key={data.id} data={data} />
        ))}
      </div>
    </section>
  )
}

export default Portfolio
