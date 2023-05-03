import React from "react";
import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import PageBreadcrumb from "@components/pagebreadcrumb";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { normalizedData } from "@utils/functions";
const TeamsDetails = ({ data, location, pageContext }) => {
    const globalContent = normalizedData(data?.allGeneral?.nodes || []);
    return (
        <Layout
            data={{
                ...globalContent["menu"],
                ...globalContent["footer"],
            }}
        >
            <SEO title="Teams Details" pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                title={data?.team?.name}
            />
            <div className="teams-details-content-wrapper">
                <div className="container">
                    <div className="grid grid-cols-1">
                        <div className="team-mid-details-area flex flex-col md:flex-row align-center">
                            <div className="team-top-area mt-5 min-w-sm mx-auto text-center">
                                <GatsbyImage
                                    image={getImage(data?.team?.logo.src)}
                                    alt={data?.team?.logo.alt}
                                />
                                <h2 className="mt-5 font-metal text-shadow">
                                    {data?.team?.name}
                                </h2>

                                <div className="team-socials-area mt-8">
                                    <span className="ml-3 font-bold">
                                        Follow:
                                    </span>
                                    {data?.team?.socials?.map((item) => (
                                        <a
                                            href={item.link}
                                            key={item.id}
                                            className="ml-2"
                                        >
                                            <i className={item.icon}></i>
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <div className="about-the-team-area mt-5 md:ml-15">
                                <h3 className="text-primary uppercase font-bold">
                                    About Team
                                </h3>
                                <div className="about-description mt-5 max-w-3xl">
                                    <p className="leading-7">
                                        {data?.team?.description}
                                    </p>
                                </div>
                                <div className="play-game-history mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 p-5 rounded-md bg-secondary-70">
                                    <div className="text-center bg-secondary-80 p-4 rounded-md">
                                        <h4 className="block font-semibold">
                                            {data?.team?.playsGame}
                                        </h4>
                                        <h5 className="mt-2">Game Play</h5>
                                    </div>
                                    <div className="text-center bg-secondary-80 p-5 rounded-md">
                                        <h4 className="block font-semibold">
                                            {data?.team?.wins}
                                        </h4>
                                        <h5 className="mt-2">Game Wins</h5>
                                    </div>
                                    <div className="text-center bg-secondary-80 p-5 rounded-md">
                                        <h4 className="block font-semibold">
                                            {data?.team?.loses}
                                        </h4>
                                        <h5 className="mt-2">Game Loses</h5>
                                    </div>
                                    <div className="text-center bg-secondary-80 p-5 rounded-md">
                                        <h4 className="block font-semibold">
                                            {data?.team?.draws}
                                        </h4>
                                        <h5 className="mt-2">Game Draws</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="team-players-ara pt-15">
                            <h3 className="text-primary uppercase font-bold">
                                TEAM PLAYERS
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                                {data?.team?.teamPlayer &&
                                    data?.team?.teamPlayer?.map(
                                        (teamplayer) => (
                                            <div
                                                className="players-list text-center mt-5"
                                                key={teamplayer.id}
                                            >
                                                <GatsbyImage
                                                    className="w-full rounded-md"
                                                    image={getImage(
                                                        teamplayer.images[0].src
                                                    )}
                                                    alt={
                                                        teamplayer.images[0].alt
                                                    }
                                                />
                                                <h4 className="font-semibold mt-2">
                                                    {teamplayer.name}
                                                </h4>
                                            </div>
                                        )
                                    )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

TeamsDetails.propTypes = {
    location: PropTypes.object,
    pageContext: PropTypes.object,
    data: PropTypes.shape({
        allGeneral: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        team: PropTypes.shape({
            images: PropTypes.arrayOf(
                PropTypes.shape({
                    src: PropTypes.oneOfType([
                        PropTypes.string,
                        PropTypes.shape({}),
                    ]).isRequired,
                    alt: PropTypes.string,
                })
            ),
            logo: PropTypes.object,
            id: PropTypes.string,
            title: PropTypes.string,
            name: PropTypes.string,
            socials: PropTypes.array,
            description: PropTypes.string,
            draws: PropTypes.string,
            loses: PropTypes.string,
            playsGame: PropTypes.string,
            wins: PropTypes.string,
            teamPlayer: PropTypes.arrayOf(
                PropTypes.shape({ content: PropTypes.string })
            ),
            items: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.oneOfType([
                        PropTypes.string,
                        PropTypes.number,
                    ]),
                })
            ),
        }),
    }),
};

export const postQuery = graphql`
    query teamsDetailsBySlug($slug: String!) {
        allGeneral {
            nodes {
                section
                id
                menu {
                    ...Menu
                }
                footer {
                    ...Footer
                }
            }
        }
        team(slug: { eq: $slug }) {
            name
            logo {
                alt
                src {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
            description
            draws
            loses
            playsGame
            wins
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
    }
`;
export default TeamsDetails;
