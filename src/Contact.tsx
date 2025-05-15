import './assets/css/contact.css';
import Footer from './footer';

function Contact() {
  return (
    <>
      <section className='containerAllContact'>
        <div className='formWrapper'>

          <div className='contactTitle'>Contact</div>
          <div className='howItGoing'>How's it going?</div>

          <form>
            {/* Name Section */}
            <div className='containerName'>
              <div className='firstNameContainer'>
                <h1 className='titleForm'>Name <span>(required)</span></h1>
                <label htmlFor="firstName" className='labelName'>First Name</label>
                <input type="text" className='inputName' id='firstName' name='firstName' />
              </div>

              <div className='firstNameContainer'>
                <h1 className='titleForm'>&nbsp;</h1> {/* placeholder for alignment */}
                <label htmlFor="lastName" className='labelName'>Last Name</label>
                <input type="text" className='inputName' id='lastName' name='lastName' />
              </div>
            </div>

            {/* Email */}
            <section className='containerEmail'>
              <label className='titleForm labelEmail' htmlFor='email'>Email <span>(required)</span></label>
              <input className='inputEmail' id='email' name='email' type="email" />
            </section>

            {/* Subject */}
            <section className='containerEmail'>
              <label className='titleForm labelEmail' htmlFor='subject'>Subject <span>(required)</span></label>
              <input className='inputEmail' id='subject' name='subject' type="text" />
            </section>

            {/* Message */}
            <section className='containerEmail'>
              <label className='titleForm labelEmail' htmlFor='message'>Message <span>(required)</span></label>
              <textarea className='inputEmail' name="message" id="message"></textarea>
            </section>

            {/* Submit Button */}
            <div className='containerButton'>
              <button className='buttonSubmit' type='submit'>SUBMIT</button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;
