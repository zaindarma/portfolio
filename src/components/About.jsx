import '../styles/About.css'
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";


function About() {
  return (
    <section id="about">
        <div className='wrapper'>
            <h3>About</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eaque officia soluta iste assumenda, inventore voluptate adipisci maxime ea laudantium perferendis provident quam optio corrupti in delectus aspernatur temporibus impedit.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque dolores eligendi quam adipisci accusamus praesentium omnis nobis corrupti magnam ad quibusdam porro, fugit quas, modi aspernatur? Quia itaque nihil debitis!</p>
            <h4>Programming Languange & Tools</h4>
            <div className='skills'>
                <FaHtml5 />
                <FaReact />
                <FaPhp />
                <FaJs />
                <FaCss3Alt />
                <FaLaravel />
            </div>
        </div>
    </section>
  )
}

export default About    