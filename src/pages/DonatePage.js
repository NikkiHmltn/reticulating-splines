import { Helmet } from "react-helmet";
import '../styles/DonatePage.css'
function DonatePage() {
  return (
    <div className="donatepage">
       <Helmet>
        <title>Reticulating Splines - Donate</title>
      </Helmet>
      <div className="dintro-container">
          <h4>Thanks for Visiting!</h4>
      </div>
      <div>
        <div className="intro-text">
          <p>Cat ipsum dolor sit amet, kitty scratches couch bad kitty yet thinking about you i'm joking it's food always food. Scratch me there, elevator butt nyan nyan goes the cat, scraaaaape scraaaape goes the walls when the cat murders them with its claws, scratch leg; meow for can opener to feed me but knock over christmas tree purr while eating. </p>
        </div>
      </div>

      <div>
        <iframe id='kofiframe' src='https://ko-fi.com/snikkidoodle/?hidefeed=true&widget=true&embed=true&preview=true' style={{border:"none", width: "100%", padding: "4px", background:"#f9f9f9"}} height="715" title='snikkidoodle'></iframe>
      </div>
    </div>
  );
}

export default DonatePage;