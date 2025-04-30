import './assets/css/about.css';
import woman from './assets/images/woman.jpg';
import Footer from './footer';

function Home() {
  return (

    <>
    <section className="containerAllAbout">

      <div>

      <img src={woman} alt="ParkerArt" className="woman" />

      </div>

      <div className='containerTextAbout'>

      <h1 className='titleAbout'>About</h1>
    <p className='pAbout'>  B.A. Parker is a writer and audio producer from Baltimore. Currently in Brooklyn, NY. <br /> <br />

Her work can currently be heard on NPR as co-host of Code Switch. <br /> <br />

In a previous life, Parker was a film professor at Morgan State University and Stevenson University, where she forced 19-year-olds to watch Point Break and Face/Off. <br /> <br />

She found her way to a production fellowship with the radio show This American Life, which she still can’t believe happened. Since then, she’s been co-host and lead producer of The Cut with New York Magazine, as well as, produced for NPR’s Invisibilia, Gimlet’s Heavyweight, and WNYC’s Nancy. In 2019, she was selected for the Third Coast Radio Residency at Ragdale. <br /> <br />

She is taking any and all couch recommendations.

</p>

      </div>

    </section>

<Footer></Footer>
</>
  );
}

export default Home;   