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
        <div className='about-landing'>
            <h1 className='mainheader'>Hello!</h1>
            <div className='mainintro'>
                <div className='aboutintro'>
                    <p className='aboutp'>My name is Kateřina Schmidtová, but I prefer to be called Kate/Katie and I am 20 years old. I'm from Czech Republic, yes the famous cheap (but delicious, as I heard) beer country. I come from a big family so I am very social and communicative. I am always ready to meet someone new and explore the new opportunities held upon us together with them.</p>
                    <p className='aboutp'>Aaand... this is my portfolio. It should cover at least a few of my hobbies, so if you are interested, scroll down. And if you want to know more about me, my life and maybe some less relevant passions, you can just click the button bellow.</p>
                    <div>
                        <Link to="/about">
                            <button type='button' className='button' id='button-home'>Read more</button>
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