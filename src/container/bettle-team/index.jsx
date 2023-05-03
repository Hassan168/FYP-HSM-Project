import React from "react";
import PropTypes from "prop-types";
import BettleTeamCard from "../../components/bettle-team-card";

const BattelTeamSection = ({ data }) => {
    return (
        <section className="bettel-team-section">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
                    {data?.items &&
                        data?.items.map((item) => (
                            <BettleTeamCard
                                key={item.id}
                                name={item.name}
                                logo={item.logo.src}
                                slug={item.slug}
                            />
                        ))}
                </div>
            </div>
        </section>
    );
};

BattelTeamSection.propTypes = {
    data: PropTypes.shape({
        items: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            })
        ),
    }),
};

export default BattelTeamSection;
