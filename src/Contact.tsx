import './assets/css/contact.css'
function Contact() {

    return(

        <>
        
        <section className='containerAllContact'>


        <div>

        
        <div className='contactTitle'>Contact</div>

        <div className='howItGoing'>How's it going?</div>

        <div className='containerName'>
        
        <div>

        <div><h1 className='titleForm'>Name <span>(required)</span></h1></div>
        
            <div>

            
        <div>

        <label htmlFor="firstName" className='labelName'>First Name</label>
    
        </div>

        <div> <input type="text" className='inputName' id='firstName' name='firstName' /></div>

        </div>

        </div>


        <div className='containerLastName'>


        <div>

            <label htmlFor="lastName" className='labelName'>Last Name</label>
            
        </div>

            <div>

            <input type="text" id='lastName' name='lastName' className='inputName' />

            </div>
        

        </div>
        

        </div>

        
        
        <section className='containerEmail'>


        <div>

        <div><label className='titleForm labelEmail' htmlFor='email'>Email <span>(required)</span></label></div>

        </div>

        <div><input className='inputEmail' id='email' name='email' type="email" /></div>

        </section>




         <section className='containerEmail'>


        <div>

        <div><label className='titleForm labelEmail' htmlFor='subject'>Subject <span>(required)</span></label></div>

        </div>

        <div><input className='inputEmail' id='subject' name='subject' type="text" /></div>

        </section>



         <section className='containerEmail'>


        <div>

        <div><label className='titleForm labelEmail' htmlFor='message'>Message <span>(required)</span></label></div>

        </div>

        <div><textarea className='inputEmail' name="message" id="message"></textarea></div>

        </section>

        
        <div className='containerButton'>

        <div><button className='buttonSubmit' type='submit'>SUBMIT</button></div>

        </div>


        </div>

        </section>

        </>

    )

}

export default Contact