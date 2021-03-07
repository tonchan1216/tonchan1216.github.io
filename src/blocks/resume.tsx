import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ResumeQuery } from "../graphql"

interface Item {
  title?: string
  description?: string
  date?: string
  note?: {
    html?: string
  }
}

interface Skill {
  name?: string
  percent?: number
}

const SkillBar = (props: Skill): JSX.Element => (
  <li>
    <div className={"progress percent" + props.percent}></div>
    <strong>{props.name}</strong>
  </li>
)

const ResumeBlock = (props: { data: Item }) => (
  <div className="resume-block">
    <div className="resume-block__header">
      <h4 className="h3">{props.data.title}</h4>
      <p className="resume-block__header-meta">
        <span>{props.data.description}</span>
        <span className="resume-block__header-date">{props.data.date}</span>
      </p>
    </div>
    <div dangerouslySetInnerHTML={{ __html: props.data.note.html }} />
  </div>
)

const Resume: React.FC = () => {
  const { skills, careers, educations }: ResumeQuery = useStaticQuery(
    graphql`
      fragment Item on GraphCMS_Resume {
        title
        description
        date
        note {
          html
        }
      }

      query resume {
        skills: allGraphCmsSkill(sort: { fields: percent, order: DESC }) {
          nodes {
            name
            percent
          }
        }
        careers: allGraphCmsResume(filter: { category: { eq: career } }) {
          nodes {
            ...Item
          }
        }
        educations: allGraphCmsResume(filter: { category: { eq: education } }) {
          nodes {
            ...Item
          }
        }
      }
    `,
  )

  return (
    <section id="resume" className="s-resume target-section">
      <div className="row s-resume__section">
        <div className="column large-3 tab-12">
          <h3 className="section-header-allcaps">Career</h3>
        </div>
        <div className="column large-9 tab-12">
          {careers.nodes.map((item: Item) => (
            <ResumeBlock key={item.title} data={item} />
          ))}
        </div>
      </div>

      <div className="row s-resume__section">
        <div className="column large-3 tab-12">
          <h3 className="section-header-allcaps">Education</h3>
        </div>
        <div className="column large-9 tab-12">
          {educations.nodes.map((item: Item) => (
            <ResumeBlock key={item.title} data={item} />
          ))}
        </div>
      </div>

      <div className="row s-resume__section">
        <div className="column large-3 tab-12">
          <h3 className="section-header-allcaps">Skills</h3>
        </div>
        <div className="column large-9 tab-12">
          <div className="resume-block">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Inventore vero quidem nobis maxime dolorem aliquam quisquam eum
              ipsum amet. Vitae aut atque fuga dolorem. Vel voluptatibus fugiat
              nam. Impedit aperiam nesciunt facilis! Porro architecto dicta
              inventore tempora ratione quia odio.
            </p>

            <ul className="skill-bars-fat">
              {skills.nodes.map((skill: Skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  percent={skill.percent}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
