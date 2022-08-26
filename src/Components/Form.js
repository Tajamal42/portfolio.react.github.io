import "./FormStyles.css";
import React from 'react'

function Form() {
  return (
    <div className="form">
        <Form>
            <label>First Name</label>
            <input type="text" />
            <label>Email</label>
            <input type="email" />
            <label>Subject</label>
            <input type="text" />
            <label>Message</label>
            <textarea rows="6" placeholder="Type your message here"></textarea>
            <button className="btn">Submit</button>
        </Form>
    </div>
  )
}

export default Form