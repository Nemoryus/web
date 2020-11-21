import React from 'react';
import { useState } from "react"; 
import emailjs from 'emailjs-com';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

export default function ContactFormular({toggleOpen}) {
  const [email, setEmail] = useState({
      name: null,
      email: null,
      subject: null,
      message: null
  });
  
  const handleChange = event => {
    setEmail({ ...email, [event.target.name]: event.target.value })
  }
  
  function sendEmail(e) {
    e.preventDefault();
    console.log('a')
    // emailjs.sendForm('gmail', 'template_goie01r', e.target, 'user_EC3qXeegOGqiOgugG9hhy')
    //   .then((result) => {
    //     setMessage(<p><Text tid="contactTrueMessage" /></p>);
    //   }, (error) => {
    //   });
  }

  return (
    <ClickAwayListener onClickAway={toggleOpen}>
      <form className='contact-form t-left'>
        <TextField
          className="push-btm"
          required
          fullWidth
          label="Your name"
          name="name"
          autoFocus
          value={email.name || ""}
          onChange={handleChange}
        />
        <TextField
          className="push-btm"
          required
          fullWidth 
          label="Your email"
          name="email"
          value={email.email || ""}
          onChange={handleChange}
        />
        <TextField
          className="push-btm"
          required
          fullWidth 
          label="Subject"
          name="subject"
          value={email.subject || ""}
          onChange={handleChange}
        />
        <TextField 
          className="push-btm"
          rows={4} 
          multiline 
          required
          fullWidth 
          label="Message"
          name="message"
          value={email.message || ""}
          onChange={handleChange}
        />
        <Button className='btn btn-2 contact-form-btn' onClick={sendEmail}>send</Button>
      </form>
    </ClickAwayListener>
  );
}