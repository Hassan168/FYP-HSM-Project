import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Button from "../../../components/shared/button";
import { Link } from "gatsby";

const RegisterForm = () => {
    return (
        <form className="form-login mt-10" action="#">
            <div className="single-fild">
                <input
                    className="px-6 h-14 mb-6 border-secondary-90 bg-secondary-100 hover:border-primary transition-all border-2 border-solid block rounded-md w-full focus:outline-none"
                    type="text"
                    placeholder="Name"
                />
            </div>
            <div className="single-fild">
                <input
                    className="px-6 h-14 mb-6 border-secondary-90 bg-secondary-100 hover:border-primary transition-all border-2 border-solid block rounded-md w-full focus:outline-none"
                    type="email"
                    placeholder="E-mail"
                />
            </div>
            <div className="single-fild">
                <input
                    className="px-6 h-14 mb-6 border-secondary-90 bg-secondary-100 hover:border-primary transition-all border-2 border-solid block rounded-md w-full focus:outline-none"
                    type="password"
                    placeholder="password"
                />
            </div>
            <div className="single-fild">
                <input
                    className="px-6 h-14 mb-6 border-secondary-90 bg-secondary-100 hover:border-primary transition-all border-2 border-solid block rounded-md w-full focus:outline-none"
                    type="password"
                    placeholder="Retype Password"
                />
            </div>
            <div className="button text-center">
                <Button className="text-white">
                    Login
                    <StaticImage
                        className="align-middle ml-3 transition-all group-hover:ml-5"
                        src="../../../data/images/icons/arrrow-icon.webp"
                        alt=""
                    />
                </Button>
            </div>
            <div className="account-text mt-5 text-center">
                <p>
                    Already have account, {""}
                    <Link to="/login" className="font-semibold text-yellow-400">
                        Login here
                    </Link>
                </p>
            </div>
        </form>
    );
};

export default RegisterForm;
