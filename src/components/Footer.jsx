import React from "react";
import PropTypes from "prop-types";

const Footer = ({ footer }) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 text-center pt-3  text-white" style={{ background: "#414141" }}>
                    <p>Copyright &copy;{footer.text} </p>
                </div>
            </div>
        </div>
    );
}

Footer.propTypes = {
    footer: PropTypes.object.isRequired,
};

export default Footer;