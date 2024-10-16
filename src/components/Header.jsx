import profilePicture from '../assets/profile-picture.png'
import '../styles/Header.css'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

function Header() {
  return (
    <header>
        <div className="header-jumbotron">
            <img src={profilePicture}/>
            <h3>Zain Darma</h3>
            <p>Junior Website Developer - Quality Assurance</p>
            <div className='socialMedia'>
                <a href=''><FaInstagram /></a>
                <a href=''><FaLinkedin /></a>
                <a href=''><FaFacebookSquare /></a>
                <a href=''><FaTiktok /></a>
            </div>
        </div>
    </header>
  )
}

export default Header