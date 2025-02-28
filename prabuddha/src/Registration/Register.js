import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Register() {

        
    // const reqBody = {
    //     namee,
    //     email,
    //     cllgname,
    //     phnum,
    //     year,




    // }





    return (
        <>
            <Header/>

        <div className='container formmm'>
            <form class="row g-3">
  <div class="col-md-4">
    <label class="form-label">Name</label>
    <input type="text"  class="form-control" required/>
  </div>
  
  <div class="col-md-4">
    <label class="form-label">Email</label>
    <div class="input-group">
      <span class="input-group-text" id="inputGroupPrepend2">@</span>
      <input type="text"    aria-describedby="inputGroupPrepend2" required/>
    </div>
  </div>
  <div class="col-md-4">
    <label class="form-label">Collage Name</label>
    <input type="text"  class="form-control" required/>
  </div>

  <div class="col-md-6">
    <label  class="form-label">Phone Number</label>
    <input type="text"  class="form-control"  required/>
  </div>
  <div class="col-md-3">
    <label  class="form-label">Year Of Study</label>
    <select   class="form-select"  required>
      <option selected disabled value="">Choose...</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
    </select>
  </div>
  {/* <div class="col-md-3">
    <label for="validationDefault05" class="form-label">Zip</label>
    <input type="text" class="form-control" id="validationDefault05" required/>
  </div> */}

<div class="col-md-3">
    <label class="form-label">Event You Want To Participate</label>
    <select  class="form-select" required>
      <option selected disabled value="">Choose...</option>
      <option>Coding Competition</option>
      <option>Prabuddha Campus Solution Challenge</option>
      <option>Scrap-2-Design</option>
      <option>Logo making Competition</option>
    </select>
  </div>

  <div class="mb-3">
  <label class="form-label">Student ID</label>
    <input type="file" class="form-control" aria-label="file example" required/>
    {/* <div class="invalid-feedback">Example invalid form file feedback</div> */}
  </div>
  
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>
</div>
            <Footer/>
        </>
    )
};

export default Register;