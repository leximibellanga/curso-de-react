import {
    FaFacebook,
    FaInstagram,
    FaLinkedin
} from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className="position-fixed bottom-0 w-100 p-3 d-flex align-items-center justify-content-center gap-3 bg-black text-light">
                <a href="https://facebook.com/leximibellanga" target="_blank">
                    <FaFacebook style={{ fontSize: '1.3em' }} />
                </a>
                <FaInstagram style={{ fontSize: '1.3em' }} />
                <FaLinkedin style={{ fontSize: '1.3em' }} />
            </footer>
        </>
    );
};

export default Footer;