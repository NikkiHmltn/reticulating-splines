import { Helmet } from "react-helmet";
import {Link} from 'react-router-dom'

function DonatePage() {
  return (
    <div className="donatepage">
       <Helmet>
        <title>Reticulating Splines - Donate</title>
      </Helmet>
      <p>Donate Page</p>
      <a href="https://ko-fi.com/snikkidoodle" target="_blank" rel="noreferrer noopener">Donate a Ko-fi</a>
    </div>
  );
}

export default DonatePage;