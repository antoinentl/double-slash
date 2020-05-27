import {graphql, useStaticQuery} from 'gatsby';

/**
 * for authors list
 */
export const useAuthorsList = () =>
  useStaticQuery(graphql`
    query Authors {
      authors: allDataYaml(filter: {fields: {type: {eq: "authors"}}}) {
        edges {
          node {
            twitter
            website
            name
            id
          }
        }
      }
      mainAuthors: allDataYaml(
        filter: {
          fields: {type: {eq: "authors"}}
          name: {regex: "/(Alex|Patrick)/"}
        }
      ) {
        edges {
          node {
            twitter
            website
            name
            id
            image {
              publicURL
              childImageSharp {
                fluid(maxWidth: 120) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `);