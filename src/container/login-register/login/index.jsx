import React from "react";
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";
import SectionTitle from "../../../components/title";
import LoginForm from "../../../components/forms/login-form";

const Login = ({ data }) => {
    return (
        <section className="login-section">
            <div className="container">
                <div className="grid gap-10 md:gap-16 lg:gap-24 grid-cols-1 md:grid-cols-2 items-center">
                    <div className="image">
                        <StaticImage
                            className="align-middle ml-3"
                            src="../../../data/images/others/login-thumb.png"
                            alt=""
                        />
                    </div>
                    <div className="form-warp">
                        {data?.section_title && (
                            <SectionTitle
                                heading={data?.section_title.heading}
                                {...data.section_title}
                            />
                        )}
                        <LoginForm />
                    </div>
                </div>
            </div>
        </section>
    );
};
Login.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape({
            heading: PropTypes.string,
        }),
    }),
};
export default Login;
