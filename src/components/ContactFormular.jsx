import React from 'react';
import { useState, useRef } from "react"; 
import emailjs from 'emailjs-com';
import TextField from '@material-ui/core/TextField';
import { withStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import { Text } from '../containers/Language';

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#FF0000"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#FF0000"
    }
  }
})(TextField);


export default function ContactFormular() {
  let textInputName = useRef(null);
  let textInputEmail = useRef(null);
  let textInputSubject = useRef(null);
  let textInputMessage = useRef(null);
  let [message, setMessage] = React.useState(false);

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('gmail', 'template_goie01r', e.target, 'user_EC3qXeegOGqiOgugG9hhy')
      .then((result) => {
        // text = <p><Text tid="contactTrueMessage" /></p>;
        // console.log(text);
        setMessage(<p><Text tid="contactTrueMessage" /></p>);
      }, (error) => {
        // text = <p><Text tid="contactFalseMessage" /></p>;
        // console.log(text);
      });
  }

  return (
    <div>
      <form className='contact-form' noValidate autoComplete="off" onSubmit={sendEmail}>
        <CssTextField
          className="contact-form-name"
          id="custom-css-standard-input"
          label="Name"
          type="text"
          name="user_name"
          inputProps={{ style: { fontFamily: 'nunito', color: 'white' } }}
          inputRef={textInputName}
        />
        <CssTextField
          className="contact-form-email"
          id="custom-css-standard-input"
          label="Eamil"
          type="email"
          name="user_email"
          inputProps={{ style: { fontFamily: 'nunito', color: 'white' } }}
          inputRef={textInputEmail}
        />
        <CssTextField
          className="contact-form-subject"
          id="custom-css-standard-input"
          label="Subject"
          type="subject"
          name="user_subject"
          inputProps={{ style: { fontFamily: 'nunito', color: 'white' } }}
          inputRef={textInputSubject}
        />
        <CssTextField
          className="contact-form-message"
          id="standard-multiline-static"
          label="Message"
          name="message"
          inputProps={{ style: { fontFamily: 'nunito', color: 'white' } }}
          inputRef={textInputMessage  }
          multiline
          rows={4}
        />
        <div className="contact-message">
          {message}
        </div>
        <input className='contact-button' type="submit" value="Send" onClick={() => {
          setTimeout(() => {
            textInputName.current.value = "";
            textInputEmail.current.value = "";
            textInputSubject.current.value = "";
            textInputMessage.current.value = "";
          }, 100);
        }}/>
      </form>
    </div>
  );
}