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
            <h4 className='d-flex justify-content-center'>Overview & Purpose of Tech-Fest</h4>
            
            <p>
            This tech fest is a platform, often an annual event, for students, faculty, and professionals to showcase their technical skills, innovative ideas, and knowledge in various fields like computer science, engineering, and technology, with the purpose of promoting innovation and fostering a spirit of learning and collaboration.
            </p>

            <h5>
            Purpose:
            </h5>
            <br/>
            <p>Promote Innovation: Tech fests aim to encourage students to think creatively and develop innovative solutions to real-world problems</p>
            
            <p>Showcase Skills: They provide a platform for students to demonstrate their technical abilities and talents, both in technical and non-technical ways.</p>
        
            <p>Facilitate Learning: Events like workshops, competitions, and exhibitions allow participants to learn new technologies, skills, and gain insights into the latest advancements in the field.</p>
        
            <p>Networking: Tech fests serve as valuable networking opportunities for students, faculty, and industry professionals to connect and collaborate.</p>

            <p>Develop Teamwork and Leadership: Many events encourage teamwork and leadership skills, as participants often work in groups to solve challenges or develop projects. </p>
        
            <p>Inspire Future Engineers: By showcasing cutting-edge technologies and innovative projects, tech fests can inspire and motivate aspiring engineers and researchers.</p>
        </div>
        <br/>
        <div>
        <h4 className='d-flex justify-content-center'>The Organizing Committee</h4>

        <br/>

        <table class="table">
  <thead>
    <tr>
      <th scope="col">S.no</th>
      <th scope="col">Name</th>
      <th scope="col">Event-Handling</th>
      <th scope="col">Contact</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Biswadeep Banarjee</td>
      <td>Robotics</td>
      <td>9839289982</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Abhik Ghosh</td>
      <td>Solution Challange</td>
      <td>9839289982</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Ritodip</td>
      <td>Web Development</td>
      <td>9839289982</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Satyabrata Maity</td>
      <td>AI</td>
      <td>9839289982</td>
    </tr>
  </tbody>
</table>

        </div>

        <div>
        <h4 className='d-flex justify-content-center'>Past Events</h4>
        <br/>

        <h5>History Of Tech-Fest</h5>

        <p>Techfest has had multiple iterations, including a science and technology festival at TINT, a Model United Nations competition, and a family-friendly event at the Computer History Museum</p>

        <div className='d-flex justify-content-center'>
        <video src={video} width="320" height="240" controls></video>
        </div>
        
        
        </div>
      </div>
      <br/>
      <Footer/>
      
      </>
    );
}

export default About;