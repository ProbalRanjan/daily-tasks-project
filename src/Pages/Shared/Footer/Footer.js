import React from 'react';

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();

    return (
        <>
            <footer className="text-center text-white p-4" style={{ backgroundColor: "#0B204C" }}>
                Copyright © {year} All Rights Reserved | Developed by <a
                    href="https://www.linkedin.com/in/probalranjanpaul"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "#F26950", textDecoration: "none", fontWeight: "600" }}
                >Probal</a>
            </footer>
        </>
    );
};

export default Footer;