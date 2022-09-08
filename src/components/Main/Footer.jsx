import '../../styles/Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faYoutube,faInstagram, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"


export default function Footer(){
    
    return(
    <footer id="footer">
        <div id = "footer-text">
        <h2>Contact me</h2>
        <h2>Email: Masonmadaras@gmail.com || M.madaras@protonmail.com</h2>
        <h3>Connect@</h3>
            <a className="LinkedIn" href ="https://www.linkedin.com/in/mason-madaras-351b47116/">
            <FontAwesomeIcon icon={faLinkedin} size="3x"/>
            </a>
            
            <a className="github" href ="https://github.com/M-Madaras">
            <FontAwesomeIcon icon={faGithub} size="3x"/>
            </a>

        </div>
    </footer>
    )
}

