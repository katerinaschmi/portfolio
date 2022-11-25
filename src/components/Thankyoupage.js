import Footer from "../components/Footer";
import { Link } from 'react-router-dom';

export default function Errorpage() {
    return (
        <section>
        <div className="errorpage">
            <h1 className="errorheading">Thank you!</h1>
            <p className="errorpar">Your message was sent. You can now return to the homepage.</p>
            <Link to="/home">
                <button type='button' className='errorbutton' >Homepage</button>
            </Link>
        </div>
        <Footer/>
        </section>
    )
}