import Footer from './Footer/Footer';
import Header from './Header/Header'
import banner from './Images/banner.png'
function Explore() {
    return (
      <>
      <Header/>
      <div className='container'>
        <img src={banner} class="bannerr" alt="..."></img>
        <br/>
        <br/>
        <div >
            <h4 className='d-flex justify-content-center'>Intro To Tech-Fest</h4>
            <p>
            Techno International New Town, Kolkata is going to organize “Prabuddha”-Tech Fest on February 27th Feb to 1st Mar, 2025, Thursday, Friday and Saturday. We invite your active participation in this Tech Fest by exploring emerging technologies and solving real-world challenges. It aims to foster learning, networking, and collaboration, driving the future of technology forward providing a platform for tech enthusiasts. The primary goal of the Tech Fest is to encourage innovation, creativity and knowledge-sharing to empower future tech leaders and to showcase the advancements in AI, cybersecurity and other emerging technologies.
            </p>

            
        </div>
      </div>
      <br/>
      <Footer/>
      
      </>
    );
}

export default Explore;