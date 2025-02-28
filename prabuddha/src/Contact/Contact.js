import Footer from '../Footer/Footer';
import Header from '../Header/Header'
import banner from '../Images/banner.png'
function Contact() {
    return (
      <>
      <Header/>
      <div className='container'>
        <img src={banner} class="bannerr" alt="..."></img>
        <br/>
        <br/>
        <div >
            <h4 className='d-flex justify-content-center'>Query And FAQ</h4>
            
            <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Enter Your Query</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>

<br/>

        <p>Q: How do I register for the workshops and competitions? Are there any registration fees?</p>
            
            <p>A: Registration for workshops and competitions can be done online through [Link to registration website/platform]. Detailed instructions are available on the website. Some workshops/competitions may have registration fees, which will be clearly indicated on the registration page. Please check the individual event descriptions for fee information and deadlines.</p>
        
            <p>Q: What are the eligibility criteria for participating in the hackathon/project exhibition? Do I need to bring my own equipment?</p>
            
            <p>A: Eligibility criteria vary depending on the specific event. Typically, students from [Target audience, e.g., universities, colleges, high schools] are eligible. Specific requirements, such as team size and project scope, are detailed on the event website. For the hackathon/project exhibition, participants are generally expected to bring their own laptops, development tools, and any necessary hardware. However, we will provide basic infrastructure like power supply and Wi-Fi. Check the event rules for any specific provisions.</p>
        
            <h4 className='d-flex justify-content-center'>Contact Details</h4>

            <p>Ms. Samragni Biswas: 8370813555 <br/>
            Ms. Rakhi Dalapati: 9073722426</p>

        </div>
      </div>
      <br/>
      <Footer/>
      
      </>
    );
}

export default Contact;