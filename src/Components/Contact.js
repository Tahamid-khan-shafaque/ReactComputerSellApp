import React from 'react'

const Contact = () => {
  return (
    <div>
        <h1 className="text-center text-info">Contact us</h1>
        <div className="container">
        <div class="mb-3">
  <label  class="form-label">Name</label>
  <input type="email" class="form-control" placeholder="Enter your name"/>
</div>


<div class="mb-3">
  <label  class="form-label">Email address</label>
  <input type="email" class="form-control" placeholder="Enter your email address"/>
</div>


<div class="mb-3">
  <label  class="form-label">Mobile number</label>
  <input type="email" class="form-control" placeholder="Enter your mobile number"/>
</div>

<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<button className="btn btn-primary mb-3">Submit Feedback</button>
        </div>
    </div>
  )
}

export default Contact