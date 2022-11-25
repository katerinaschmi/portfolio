import Footer from "../components/Footer";
import { Link } from 'react-router-dom';

export default function Errorpage() {
    return (
        <section>
        <div className="errorpage">
            <h1 className="errorheading">Ooops sorry!</h1>
            <p className="errorpar">This page is currently under construction. Please try again later</p>
            <Link to="/home">
                <button type='button' className='errorbutton' >Homepage</button>
            </Link>
        </div>
        <Footer/>
        </section>
    )
}