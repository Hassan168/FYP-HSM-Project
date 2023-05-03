import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const Logo = () => {
    return (
        <Link to="/" className="block">
            {/* <StaticImage src="../../data/images/logo.webp" alt="Bonx" /> */}
            <h3>HSM Esports</h3>
        </Link>
    );
};
export default Logo;
