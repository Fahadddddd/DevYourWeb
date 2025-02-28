import Footer from '../Footer/Footer';
import Header from '../Header/Header'
import banner from '../Images/banner.png'
import video from '../Images/event.mp4'
function About() {
    return (
      <>
      <Header/>
      <div className='container'>
        <img src={banner} class="bannerr" alt="..."></img>
        <br/>
        <br/>
        <div >
            <h4 className='d-flex justify-content-center'>Guidelines For Rules And Eligibility</h4>
            
            {/* <p>
            This tech fest is a platform, often an annual event, for students, faculty, and professionals to showcase their technical skills, innovative ideas, and knowledge in various fields like computer science, engineering, and technology, with the purpose of promoting innovation and fostering a spirit of learning and collaboration.
            </p> */}

            <br/>
            
            <p>
            Register within the deadline using the provided link.<br/>
All undergraduate students are eligible to participate in different competition.<br/>
No participants are allowed to take part in two parallel competitions.<br/>
Keep a copy of your registration confirmation and ID card in time of physical verification on the day of events.<br/>
Carry a laptop, charger, USB drives, and necessary equipment.<br/>
Arrive at the venue on time and follow the schedule.<br/>
Follow ethical practices—no plagiarism or rule violations.<br/>
Cooperate with event coordinators and adhere to instructions.<br/>
Maintain professional behaviour with judges, organizers, and other participants.<br/>
Stick to the given time limits for the events.<br/>
Follow all safety protocols, especially in hardware-related events.<br/>
Respect the venue rules and avoid damaging property.<br/>
Avoid disruptive behaviour or misconduct during the fest.<br/>
provide us the mandatory feedback to improve future tech fests.<br/>
Registration fee for each event is INR 100 (except creative canvas and science day celebration).<br/>
            </p>



        </div>
        <br/>
        <div>
        <h4 className='d-flex justify-content-center'>Events , competitions & Workshops </h4>

        <br/>

        <table class="table">
  <thead>
    <tr>
      <th scope="col">S.no</th>
      <th scope="col">Event-Name</th>
      <th scope="col">Event-Descriptions</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Coding Competition</td>
      <td>Join us for an exciting offline coding competition where programmers will "cook" their solutions to solve problems and showcase their skills. Whether you're a beginner or an expert, this is your chance to compete and win exciting prizes. Participants must solve 2-3 problems with hidden test cases within 3 hours, and only individual participation is allowed.</td>
      
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Prabuddha Campus Solution Challenge</td>
      <td>Are you a student developer passionate about making changes? Participate in the Prabuddha Campus Solution Challenge and address real-campus challenges. This is your chance to innovate and develop impactful solutions that enhance your campus life. Let's collaborate to build a equitable and inclusive future for everyone!</td>
      
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Scrap-2-Design</td>
      <td>Get ready to unleash your creativity at Scrap-2-Design, a key event of the Tech Fest. Developing something new from the scrap is all about innovation, sustainability, and creativity i.e. transforming the discarded or unused materials to form something valuable and useful commodities, whether it's a product, technology, or even an idea.</td>
      
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Logo making Competition</td>
      <td>We are excited to announce a logo design competition! Create a unique logo that captures the essence of a specific theme will be provided later in a modern, creative style. Your design should reflect values related to the theme. Submit your entries to mark your participation. Show us your artistic vision!</td>
      
    </tr>
  </tbody>
</table>

        </div>

        <div>
        <h4 className='d-flex justify-content-center'>Event Schedule</h4>
        <br/>

        <table class="table">
  <thead>
    <tr>
      <th scope="col">S.no</th>
      <th scope="col">Event-Name</th>
      <th scope="col">Duration</th>
      <th scope="col">Venue</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Coding Competition</td>
      <td>11:00-2:00</td>
      <td>Computer Lab-1/2/3 Floor 2</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Prabuddha Campus Solution Challenge</td>
      <td>11:00-6:00</td>
      <td>Computer Lab-4/5/6 Floor 3</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Scrap-2-Design</td>
      <td>11:00-6:00</td>
      <td>Students common Room - 1/2</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Logo making Competition</td>
      <td>10:00-1:00</td>
      <td>EE Lab - 1/2/3 Ground Floor</td>
    </tr>
  </tbody>
</table>
        
        
        </div>
      </div>
      <br/>
      <Footer/>
      
      </>
    );
}

export default About;