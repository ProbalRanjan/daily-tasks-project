import React from 'react';

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();

    return (
        <>
            <footer className="text-center text-white p-4" style={{ backgroundColor: "#5A55CA" }}>
                Copyright © {year} All Rights Reserved | Developed by <a
                    href="https://www.linkedin.com/in/probalranjanpaul"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "#ffffff", textDecoration: "none", fontWeight: "600" }}
                >Probal</a>
            </footer>
        </>
    );
};

export default Footer;