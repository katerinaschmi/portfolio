import instagram from '../img/instagram.png';
import facebook from '../img/facebook.png';
import linkedin from '../img/linkedin.png';
import github from '../img/github.png';
import scrollupbutton from '../img/scrollupbutton.png';

export default function ContactSection() {
    return (
        <section className='contactsection'>
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
                <form action="https://formsubmit.co/26c2816adcfb8223d61643eae569773f" method="POST" className='form'>
                    <input type="hidden" name="_subject" value="PORTFOLIO" required/>
                    <input type="hidden" name="_next" value="https://portfolio.kschmi.dk/thankyou"/>
                    <input type="hidden" name="_captcha" value="false" required/>

                    <label className='formlabel'>Name</label>
                    <input placeholder='Your name' className='textinput' type="text" name="name" required />

                    <label className='formlabel'>Email</label>
                    <input placeholder='Your email' className='textinput' type="email" name="email" required />

                    <label className='formlabel'>Message</label>
                    <textarea placeholder='Write your message...' className='messageinput' name='message'/>

                    <button type="submit" className='submitbtn'>Send</button>
                </form>

            </div>
            
        </div>
        <a href="#navbar"><img src={scrollupbutton} alt='scrollbutton' className='scrollupbutton'/></a>
        </section>
    )
}