import { graphql } from "gatsby";

export const query = graphql`
    fragment Teams on Team {
        id
        name
        logo {
            alt
            src {
                childImageSharp {
                    gatsbyImageData
                }
            }
        }
        slug
        teamPlayer {
            id
            name
            images {
                alt
                src {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
        }
        socials {
            id
            title
            link
            icon
        }
    }
`;
