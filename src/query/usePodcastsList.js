import {graphql, useStaticQuery} from 'gatsby';

/**
 * for podcasts list
 */
export const usePodcastsList = () =>
  useStaticQuery(graphql`
    query PodcastList {
      podcastEpisodes: allMdx(
        filter: {
          frontmatter: {active: {eq: true}}
          fileAbsolutePath: {regex: "/podcasts/"}
        }
        sort: {fields: frontmatter___publicationDate, order: DESC}
      ) {
        edges {
          node {
            id
            excerpt(pruneLength: 300)
            fields {
              slug
            }
            frontmatter {
              title
              subtitle
              duration
              url
              season
              episodeNumber
              publicationDate
            }
          }
        }
      }
    }
  `);
