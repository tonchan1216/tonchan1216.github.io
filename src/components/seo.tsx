import React from "react"
import { Helmet, HelmetProvider } from "react-helmet-async"
import { useStaticQuery, graphql } from "gatsby"
import { SiteMetaQuery } from "../graphql"

type MetaProps = JSX.IntrinsicElements["meta"]

interface SEOProps {
  title: string
  links: { url: string; as: string }[]
}

const SEO = ({ title, links }: SEOProps): JSX.Element => {
  const { site }: SiteMetaQuery = useStaticQuery(
    graphql`
      query SiteMeta {
        site {
          siteMetadata {
            title
            description
            author
            lang
          }
        }
      }
    `,
  )

  const siteMetadata = site!.siteMetadata!
  const metaDescription = siteMetadata.description!

  const constantMeta: MetaProps[] = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: siteMetadata.author!,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
  ]

  return (
    <HelmetProvider>
      <Helmet>
        <meta httpEquiv="content-language" content={siteMetadata.lang} />
        <title>
          {title} | {siteMetadata.title}
        </title>
        {constantMeta.map((data, index) => (
          <meta key={index} name={data.name} content={data.content} />
        ))}
        {links.map((data, index) => (
          <link key={index} rel="preload" href={data.url} as={data.as} />
        ))}
      </Helmet>
    </HelmetProvider>
  )
}

export default SEO
