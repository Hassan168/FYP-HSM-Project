import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const BettleTeamCard = ({ name, logo, slug }) => {
    return (
        <Link
            to={`/bettle-teams/${slug}`}
            className="bettle-team-card text-center py-14 px-8 rounded-20 border-2 border-solid border-secondary-90 bg-secondary-100"
        >
            <GatsbyImage image={getImage(logo)} alt={name} />
            <h3 className=" font-semibold mt-10">{name}</h3>
        </Link>
    );
};

BettleTeamCard.propTypes = {
    name: PropTypes.string,
    slug: PropTypes.string,
    logo: PropTypes.object,
};

export default BettleTeamCard;
