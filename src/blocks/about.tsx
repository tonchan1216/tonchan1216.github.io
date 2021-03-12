import React from "react"

type Props = {
  avatarUrl: string
}

const About: React.FC<Props> = ({ avatarUrl }) => {
  return (
    <section id="about" className="s-about target-section">
      <div className="row">
        <div className="column large-3 tab-12">
          <img className="s-about__pic" src={avatarUrl} alt="" />
        </div>
        <div className="column large-9 tab-12 s-about__content">
          <h3>About Me</h3>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
