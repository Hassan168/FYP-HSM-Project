import React from "react";
import PropTypes from "prop-types";
import SEO from "@components/seo";
import Layout from "@layout";
import PageBreadcrumb from "../components/pagebreadcrumb";
import { graphql } from "gatsby";
import { normalizedData } from "@utils/functions";
import BattelTeamSection from "../container/bettle-team";

const BettleTeamPage = ({ data, location, pageContext }) => {
    const globalContent = normalizedData(data?.allGeneral?.nodes || []);
    return (
        <Layout
            data={{
                ...globalContent["menu"],
                ...globalContent["footer"],
            }}
        >
            <SEO title="Match Page" pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                title="All Bettle Team"
            />
            <BattelTeamSection
                data={{
                    items: data.allTeam.nodes,
                }}
            />
        </Layout>
    );
};

BettleTeamPage.propTypes = {
    location: PropTypes.object,
    pageContext: PropTypes.object,
    data: PropTypes.shape({
        allGeneral: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        page: PropTypes.shape({
            content: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        allTeam: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
    }),
};

export const query = graphql`
    query BettleTeamPageQuery {
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
        page(title: { eq: "matchPage" }, pageType: { eq: innerpage }) {
            content {
                ...PageContentAll
            }
        }
        allTeam {
            nodes {
                ...Teams
            }
        }
    }
`;

export default BettleTeamPage;
