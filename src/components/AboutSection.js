import mephoto from '../img/me.jpg';
import creative from '../img/creative.png';
import communicative from '../img/communicative.png';
import ambitious from '../img/ambitious.png';
import organized from '../img/organized.png';
import helpful from '../img/helpful.png';
import learning from '../img/learning.png';
import { Link } from 'react-router-dom';

export default function AboutSection () {
    return (
        <div className='about-landing' id='aboutsection'>
            <h1 className='mainheader'>Hello!</h1>
            <div className='mainintro'>
                <div className='aboutintro'>
                    <p className='aboutp'>My name is Kateřina Schmidtová, but I prefer to be called Kate/Katie. I am 20 years old from Czech Republic, yes, the famous cheap (but delicious, as I heard) beer country.</p>
                    <p className='aboutp'>This is my portfolio where you can have a look into my skills, experience, and hobbies, so SCROLL DOWN if you are interested in seeing more.</p>
                    <p className='aboutp'>And if you want to get to know me better, find out about my life and maybe some other passions I have, you can just click the "Read more" button. :)</p>
                    <p className='aboutp'>For more professional approach, you can also chek out my CV.</p>
                    <div>
                        <Link to="/error">
                            <button type='button' className='button' id='button-home'>Read more</button>
                        </Link>
                        <Link to="/error">
                            <button type='button' className='button' id='button-home'>My CV</button>
                        </Link>
                    </div>
                </div>
                <div className='aboutpic'>
                    <img src={mephoto} alt="me" className='mepic'/>
                </div>
            </div>
            <div className='iconcontainer'>
                <div className='oneadj'>
                    <img src={creative} alt="creative" className='abouticon'/><p className='icondesc'>Creative</p>
                </div>
                <div className='oneadj'>
                    <img src={communicative} alt="communicative" className='abouticon'/><p className='icondesc'>Communicative</p>
                </div>
                <div className='oneadj'>
                    <img src={ambitious} alt="ambitious" className='abouticon'/><p className='icondesc'>Ambitious</p>
                </div>
                <div className='oneadj'>
                    <img src={organized} alt="organized" className='abouticon'/><p className='icondesc'>Organized</p>
                </div>
                <div className='oneadj'>
                    <img src={helpful} alt="helpful" className='abouticon'/><p className='icondesc'>Helpful</p>
                </div>
                <div className='oneadj'>
                    <img src={learning} alt="learning" className='abouticon'/><p className='icondesc'>Eager & <br/>quick to <br/>learn</p>
                </div>
            </div>
        </div>
    )
}