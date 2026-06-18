import "./ContactBar.css";

const ContactBar = () => {
    return (
        <div className="contact-bar-horizontal">
            <a href="https://github.com/aditya-chakma" target="_blank" rel="noopener noreferrer" className="contact-pill">
                <img src="/assets/icons/github.png" alt="Github" /> Github
            </a>

            <a href="https://www.linkedin.com/in/aditya-chakma/" target="_blank" rel="noopener noreferrer" className="contact-pill">
                <img src="/assets/icons/linked-in.png" alt="Linked In" /> LinkedIn
            </a>

            <a href="https://www.kaggle.com/adityachakma" target="_blank" rel="noopener noreferrer" className="contact-pill">
                <img src="/assets/icons/kaggle.png" alt="Kaggle" /> Kaggle
            </a>

            <a href="/Aditya_Chakma_Resume.pdf" target="_blank" rel="noopener noreferrer" className="contact-pill resume-pill">
                <img src="/assets/icons/cv.png" alt="CV or Resume" /> Resume
            </a>

            <a href="/Aditya_Chakma_IELTS.pdf" target="_blank" rel="noopener noreferrer" className="contact-pill ielts-pill">
                <img src="/assets/icons/toefl.png" alt="IELTS score" /> IELTS (8.0)
            </a>
        </div>
    );
};

export default ContactBar;
