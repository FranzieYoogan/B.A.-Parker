import { useState } from 'react';
import './assets/css/contact.css';
import Footer from './footer';
import axios from 'axios';

function Contact() {

  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [success, setSuccess] = useState<string>('');

  const url = 'http://localhost:3000/createContact'

  const contactData = {

    firstName: firstName,
    lastName: lastName,
    email: email,
    subject: subject,
    message: message

  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    try {
    await axios.post(url, contactData);
    setFirstName('');
    setLastName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setSuccess('Your message was sent successfuly.');

    setTimeout(() => {

      window.location.reload();

    }, 2000);

  } catch (err) {

    console.log(err)

  }

}


  return (
    <>
      <section className='containerAllContact'>
        <div className='formWrapper'>

          <div className='contactTitle'>Contact</div>
          <div className='howItGoing'>How's it going?</div>

          <form onSubmit={handleSubmit}>
            {/* Name Section */}
            <div className='containerName'>
              <div className='firstNameContainer'>
                <h1 className='titleForm'>Name <span>(required)</span></h1>
                <label htmlFor="firstName" className='labelName'>First Name</label>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className='inputName' id='firstName' name='firstName' />
              </div>

              <div className='firstNameContainer'>
                <h1 className='titleForm'>&nbsp;</h1> {/* placeholder for alignment */}
                <label htmlFor="lastName" className='labelName'>Last Name</label>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className='inputName' id='lastName' name='lastName' />
              </div>
            </div>

            {/* Email */}
            <section className='containerEmail'>
              <label className='titleForm labelEmail' htmlFor='email'>Email <span>(required)</span></label>
              <input className='inputEmail' value={email} onChange={(e) => setEmail(e.target.value)} id='email' name='email' type="email" />
            </section>

            {/* Subject */}
            <section className='containerEmail'>
              <label className='titleForm labelEmail' htmlFor='subject'>Subject <span>(required)</span></label>
              <input className='inputEmail' value={subject} onChange={(e) => setSubject(e.target.value)} id='subject' name='subject' type="text" />
            </section>

            {/* Message */}
            <section className='containerEmail'>
              <label className='titleForm labelEmail' htmlFor='message'>Message <span>(required)</span></label>
              <textarea className='inputEmail' value={message} onChange={(e) => setMessage(e.target.value)} name="message" id="message"></textarea>
            </section>

            {/* Submit Button */}
            <div className='containerButton'>
              <button className='buttonSubmit' type='submit'>SUBMIT</button>

                   {/* Success Message */}
                   {success !== '' &&
                 <div className="containerAlert p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                      <span className="font-medium">Congratulations !!</span> {success}

                </div>

                }
                
            </div>
          </form>
        </div>

       

      </section>

      <Footer />
    </>
  );
}

export default Contact;
