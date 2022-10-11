import instagram from '../img/instagram.png';
import facebook from '../img/facebook.png';
import linkedin from '../img/linkedin.png';
import github from '../img/github.png';

export default function ContactSection() {
    return (
        <div className="contactsec">
            <div>
                <h1 className="mainheader">Contact me!</h1>
                <p className="contactp">If my skills and portfolio caught your eye and you are interested in further collaboration, don't hesitate to contact me, I enjoy even small talks. <br/><br/>You can also check out my social media :)</p>
                <div className='someicons'>
                    <a href='https://www.instagram.com/karunokami/'><img src={instagram} alt='instagram' className='someicon'></img></a>
                    <a href='https://www.facebook.com/kacka.schmidtova.1'><img src={facebook} alt='facebook' className='someicon'></img></a>
                    <a href='https://www.linkedin.com/in/kate%C5%99ina-schmidtov%C3%A1-430279220/'><img src={linkedin} alt='linkedin' className='someicon'></img></a>
                    <a href='https://github.com/katerinaschmi'><img src={github} alt='github' className='someicon'></img></a>
                </div>
                <p><a href="tel:+4552797168" className='phonelink'>Phone: +45 52 79 71 68</a></p>
            </div>
            <div className='theform'>
                <form className='form'>
                    <label className='formlabel'>Name</label>
                    <input type='text' name='name' placeholder='Your name' className='textinput'/>

                    <label className='formlabel'>Email</label>
                    <input type='text' name='email' placeholder='Your email' className='textinput'/>

                    <label className='formlabel'>Subject</label>
                    <input type='text' name='subject' placeholder='The subject' className='textinput'/>

                    <label className='formlabel'>Message</label>
                    <textarea name='message' placeholder='Write your message...' className='messageinput'/>

                    <input type='submit' value='Send' className='submitbtn'/>
                </form>
            </div>
        </div>
    )
}