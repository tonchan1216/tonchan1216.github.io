/* eslint-disable react/no-unescaped-entities */
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ResumeQuery } from "../graphql"
import styled from "styled-components"

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

const Progress = styled.div<{ rate: number }>`
  background: var(--color-gray-3);
  position: relative;
  height: 100%;
  border-radius: 3px;
  overflow: hidden;
  position: relative;

  &::before {
    content: "";
    display: block;
    height: 100%;
    background-color: var(--color-gray-18);
    width: ${(props) => props.rate}%;
  }
`

const SkillList = styled.li`
  height: 5.2rem;
  background: transparent;
  margin-bottom: 5.2rem;
  padding: 0;
  position: relative;

  strong {
    font-family: var(--font-1);
    font-weight: 600;
    color: var(--color-text-dark);
    text-transform: uppercase;
    letter-spacing: 0.2em;
    font-size: calc(var(--text-size) * 0.7778);
    line-height: 2rem;
    position: absolute;
    top: -3.2rem;
    left: 0;
  }
`

const SkillFat = styled.ul`
  list-style: none;
  margin: var(--vspace-2) 0 var(--vspace-1);
`

const ResumeHeader = styled.div`
  h3 {
    line-height: 1.08;
    margin-top: 0;
    margin-bottom: var(--vspace-0_25);
  }

  p {
    font-family: var(--font-2);
    font-size: calc(var(--text-size) * 1.1111);
    font-style: italic;
    margin-top: -0.4rem;
    margin-bottom: var(--vspace-0_75);

    span:first-child {
      margin-right: 0.6rem;
    }

    span:nth-child(2) {
      display: inline-block;
      font-family: var(--font-1);
      font-size: calc(var(--text-size) * 0.8889);
      font-size: var(--text-sm);
      font-style: normal;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--color-text-light);

      &::before {
        content: "\\2022";
        color: var(--color-text);
        margin-right: 0.2rem;
      }
    }
  }
`

const SkillBar = (props: Skill): JSX.Element => (
  <SkillList>
    <Progress rate={props.percent} />
    <strong>{props.name}</strong>
  </SkillList>
)

const ResumeBlock = (props: { data: Item }) => (
  <div className="resume-block">
    <ResumeHeader>
      <h3>{props.data.title}</h3>
      <p>
        <span>{props.data.description}</span>
        <span>{props.data.date}</span>
      </p>
    </ResumeHeader>
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
            <p>These are my skill set, But I'll update more and more...</p>

            <SkillFat>
              {skills.nodes.map((skill: Skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  percent={skill.percent}
                />
              ))}
            </SkillFat>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
