import React, { useEffect } from 'react'
import '../styles/landing.css'
import {PiStudent} from 'react-icons/pi'
import {FaHandHoldingWater} from 'react-icons/fa'
import {MdHealthAndSafety} from 'react-icons/md'
import {useNavigate} from 'react-router-dom'


const Landing = () => {

  const navigate = useNavigate();

  useEffect(()=>{
    if (localStorage.getItem("usertype") === 'freelancer'){
      navigate("/freelancer")
    } else if (localStorage.getItem("usertype") === 'client'){
      navigate("/client")
    } else if (localStorage.getItem("usertype") === 'admin'){
      navigate("/admin")
    }
  })

  const scrollToAboutUs = () => {
    document.getElementById("about-us").scrollIntoView({
      behavior: "smooth",
    });
  };


  return (
    <div className="landing-page">

        <div className="landing-hero">

            <div className='landing-nav'>
              <h3> </h3>
              <button onClick={()=> navigate('/authenticate')} >Sign In</button>
            </div>

            <img src={""} />

            <div className="landing-hero-text">
                <h1>DRIBBLE</h1>
                <br />
                <h3>Empower Your Path, Shape Your Success: A Thriving Freelance Ecosystem</h3>
                <br/>
                {/* <p>Connect with Clients and unleash your Creativity on our Freelancing Platform</p>
                <br /> */}
                <button onClick={()=> navigate('/authenticate')} id='one-button'>START OFF</button>
                <br />
                
                <button className="scroll-down" onClick={scrollToAboutUs}>﹀</button>
                
                <section className="about-us" id="about-us">
                  {/* <center>
                  <h3>About Us</h3>
                  <p>Welcome to DRIBBLE, the ultimate platform where talent and opportunity come together! DRIBBLE connects clients with skilled freelancers, creating a thriving community for seamless project collaboration. Clients can post their project needs, while freelancers from various fields bid to bring their expertise to the table. With an efficient process that promotes quality and timely completion, DRIBBLE is dedicated to helping both clients and freelancers reach their full potential through successful partnerships.</p>
                  </center>
                  <br /> */}
                  <h2>Who We Are</h2>
                  <br />
                  <p> We’re a team of skilled freelance professionals with a shared passion for excellence. Our collective expertise spans multiple areas, including graphic design, web development, content creation, digital marketing, SEO, video production, and project management. Together, we offer a broad range of services to help bring your ideas to life.</p>
                  <br />
                  <h2>What We Do</h2>
                  <br />
                  <p>We specialize in delivering customized, high-quality solutions for businesses and individuals. Each project we undertake is handled with care, precision, and dedication to meet your unique needs. From developing creative brand identities to building engaging websites and crafting compelling content, we focus on providing results that align with your vision and goals.</p>
                  <br />
                  <h2>Our Values</h2>
                  <br />
                  <p> Our work is guided by a commitment to creativity, open communication, and integrity. We believe in building strong, trusting partnerships with our clients, ensuring every project is completed on time, on budget, and beyond expectations.</p>
                  <br />
                  <h2>Why Choose Us</h2>
                  <br />
                  <p> With our diverse skills and client-centered approach, we’re dedicated to making your project a success. Whether you need a fresh brand look, a digital presence, or strategic marketing support, we’re here to support you every step of the way. Let’s work together to create something amazing!</p>
                </section>

            </div>

        </div>

    </div>
  )
}

export default Landing