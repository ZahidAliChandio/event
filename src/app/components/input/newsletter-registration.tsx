'use client';

import { useRef } from 'react';
import axios from "axios"

import classes from './newsletter-registration.module.css';

function NewsletterRegistration() {
  const emailInputRef = useRef<HTMLInputElement>(null);
  
  async function registrationHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const enteredEmail = emailInputRef?.current?.value;

    try {
      
      const response = await axios.post("/api/newsletter", { email: enteredEmail })
      if(response.status === 200) {
        emailInputRef.current!.value = ""
      }

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type='email'
            id='email'
            placeholder='Your email'
            aria-label='Your email'
            ref={emailInputRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
