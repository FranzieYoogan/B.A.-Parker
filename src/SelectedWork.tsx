import Footer from "./footer";
import './assets/css/selectedWork.css'
import codeSwitch from './assets/images/selectedWork/codeSwitch.jpeg'
import bbcBlack from './assets/images/selectedWork/bbcBlack.jpeg'

function selectedWork() {

    return (
        
        <>

            <section className="containerSelectedWork1">


                <div>
                    
                    <div className="imgSelectedWork">

                    <img src={codeSwitch} className="" alt="codeSwitch" />

                    </div>

                    <div>

                    
                    <p className="codeSwitchText">

                    100 years of immigration policies working to keep out immigrants <span className="dateCodeSwitch"> (Jun 5, 2024)</span> <br /> <br />

The long, storied history of solidarity between Black and Irish activists <span className="dateCodeSwitch"> (Apr 10, 2024)</span> <br /> <br />

Where are the Black punks now? <span className="dateCodeSwitch"> (Nov 1, 2023)</span> <br /> <br />

Student activists are pushing back against big polluters — and winning <span className="dateCodeSwitch"> (Oct 4, 2023)</span> <br /> <br />

Going back to the plantation where my ancestors were enslaved Pt. 2 <span className="dateCodeSwitch"> (Jun 28, 2023)</span> <br /> <br />

How do descendants of slavery honor their ancestors' legacy? Pt. 1 <span className="dateCodeSwitch"> (Jun 21, 2023)</span>

                    </p>
                    </div>

                </div>

                <div>

                    <div className="imgSelectedWork"> <img src={bbcBlack} className="imgBbcBlack" alt="" /> </div>
                    
                    <div>

        <p className="pBbcBlack"><span className="spanBbcBlack"> Sport, racism and protests are about to change the lives of “the Black 14” American football players at the University of Wyoming in 1969.</span> <br /> <br />

Ep. 1 <br /> <br />

Ep. 2 <br /> <br />

Ep. 3 <br /> <br />

Ep. 4</p> <br /> <br />

                    </div>

                </div>





                <div>


                </div>



            </section>

        <Footer></Footer>
        </>

    );

}

export default selectedWork;