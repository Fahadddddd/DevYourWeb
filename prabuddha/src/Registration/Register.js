// import React from 'react';
// import Header from '../Header/Header';
// import Footer from '../Footer/Footer';

// function Register() {

        
//     // const reqBody = {
//     //     namee,
//     //     email,
//     //     cllgname,
//     //     phnum,
//     //     year,




//     // }

    





//     return (
//         <>
//             <Header/>

//         <div className='container formmm'>
//             <form class="row g-3">
//   <div class="col-md-4">
//     <label class="form-label">Name</label>
//     <input type="text"  class="form-control" required/>
//   </div>
  
//   <div class="col-md-4">
//     <label class="form-label">Email</label>
//     <div class="input-group">
//       <span class="input-group-text" id="inputGroupPrepend2">@</span>
//       <input type="text"    aria-describedby="inputGroupPrepend2" required/>
//     </div>
//   </div>
//   <div class="col-md-4">
//     <label class="form-label">Collage Name</label>
//     <input type="text"  class="form-control" required/>
//   </div>

//   <div class="col-md-6">
//     <label  class="form-label">Phone Number</label>
//     <input type="text"  class="form-control"  required/>
//   </div>
//   <div class="col-md-3">
//     <label  class="form-label">Year Of Study</label>
//     <select   class="form-select"  required>
//       <option selected disabled value="">Choose...</option>
//       <option>1</option>
//       <option>2</option>
//       <option>3</option>
//       <option>4</option>
//     </select>
//   </div>
//   {/* <div class="col-md-3">
//     <label for="validationDefault05" class="form-label">Zip</label>
//     <input type="text" class="form-control" id="validationDefault05" required/>
//   </div> */}

// <div class="col-md-3">
//     <label class="form-label">Event You Want To Participate</label>
//     <select  class="form-select" required>
//       <option selected disabled value="">Choose...</option>
//       <option>Coding Competition</option>
//       <option>Prabuddha Campus Solution Challenge</option>
//       <option>Scrap-2-Design</option>
//       <option>Logo making Competition</option>
//     </select>
//   </div>

//   <div class="mb-3">
//   <label class="form-label">Student ID</label>
//     <input type="file" class="form-control" aria-label="file example" required/>
//     {/* <div class="invalid-feedback">Example invalid form file feedback</div> */}
//   </div>
  
//   <div class="col-12">
//     <button class="btn btn-primary" type="submit">Submit form</button>
//   </div>
// </form>
// </div>
//             <Footer/>
//         </>
//     )
// };

// export default Register;



import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [collegeName, setCollegeName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [yearOfStudy, setYearOfStudy] = useState('');
  const [eventParticipation, setEventParticipation] = useState('');
  const [studentId, setStudentId] = useState(null); //store file here.

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('collegeName', collegeName);
    formData.append('phoneNumber', phoneNumber);
    formData.append('yearOfStudy', yearOfStudy);
    formData.append('eventParticipation', eventParticipation);
    formData.append('studentId', studentId);

    try {
      const response = await fetch('/api/register', { // Your API endpoint
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('User registered successfully');
        // Optionally, reset the form or show a success message
      } else {
        console.error('Failed to register user');
        // Handle error cases
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <Header />
      <div className="container formmm">
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-4">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Email</label>
            <div className="input-group">
              <span className="input-group-text" id="inputGroupPrepend2">
                @
              </span>
              <input
                type="email"
                className="form-control"
                aria-describedby="inputGroupPrepend2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="col-md-4">
            <label className="form-label">College Name</label>
            <input
              type="text"
              className="form-control"
              value={collegeName}
              onChange={(e) => setCollegeName(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Phone Number</label>
            <input
              type="text"
              className="form-control"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div className="col-md-3">
            <label className="form-label">Year Of Study</label>
            <select
              className="form-select"
              value={yearOfStudy}
              onChange={(e) => setYearOfStudy(e.target.value)}
              required
            >
              <option value="">Choose...</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div className="col-md-3">
            <label className="form-label">Event You Want To Participate</label>
            <select
              className="form-select"
              value={eventParticipation}
              onChange={(e) => setEventParticipation(e.target.value)}
              required
            >
              <option value="">Choose...</option>
              <option value="Coding Competition">Coding Competition</option>
              <option value="Prabuddha Campus Solution Challenge">
                Prabuddha Campus Solution Challenge
              </option>
              <option value="Scrap-2-Design">Scrap-2-Design</option>
              <option value="Logo making Competition">
                Logo making Competition
              </option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Student ID</label>
            <input
              type="file"
              className="form-control"
              aria-label="file example"
              onChange={(e) => setStudentId(e.target.files[0])}
              required
            />
          </div>
          <div className="col-12">
            <button className="btn btn-primary" type="submit">
              Submit form
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Register;