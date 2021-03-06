import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import StyledHero from "../components/StyledHero"
import Banner from "../components/Banner/Banner"
import BlogContent from "../components/BlogContent/BlogContent"
import SEO from "../components/SEO"

const BlogTemplate = ({ data }) => {
  const { title, image } = data.blog
  return (
    <Layout>
      <SEO title={title} description="Blog page" />
      <StyledHero opacity="true" img={image.fluid}>
        <Banner className="banner" title={title}></Banner>
      </StyledHero>
      <BlogContent {...data.blog} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    blog: contentfulPost(slug: { eq: $slug }) {
      published(formatString: "D MMMM Y")
      title
      intro
      text {
        json
      }
      slug
      id: contentful_id
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

export default BlogTemplate
