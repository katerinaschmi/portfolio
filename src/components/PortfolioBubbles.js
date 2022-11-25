import projectsbubble from '../img/projectsbubble.png';
import artbubble from '../img/artbubble.png';
import videosbubble from '../img/videosbubble.png';
import designbubble from '../img/designbubble.png';
import somebubble from '../img/somebubble.png';
import programmingbubble from '../img/programmingbubble.png';

export default function PortfolioBubbles() {
    return (
        <div className="portfoliobubbles">
        <div className="portfoliobubbles-sections">
            <div className='bubblelink'>
                <a href='/error'>
                    <img src={projectsbubble} alt='projects' className='bubble'/>
                    <div className='bubblesoverlay'>
                        <p className='overlaytext'>Projects & Clients</p>
                    </div>
                </a>
            </div>
            <div className='bubblelink'>
                <a href='/error'>
                    <img src={artbubble} alt='projects' className='bubble'/>
                    <div className='bubblesoverlay'>
                        <p className='overlaytext'>Art</p>
                    </div>
                </a>
            </div>
            <div className='bubblelink'>
                <a href='/error'>
                    <img src={videosbubble} alt='projects' className='bubble'/>
                    <div className='bubblesoverlay'>
                        <p className='overlaytext'>Video Production & Edit</p>
                    </div>
                </a>
            </div>            
        </div>
        <div className="portfoliobubbles-sections">
            <div className='bubblelink'>
                <a href='/error'>
                    <img src={designbubble} alt='projects' className='bubble'/>
                    <div className='bubblesoverlay'>
                        <p className='overlaytext'>Graphic Design</p>
                    </div>
                </a>
            </div>
            <div className='bubblelink'>
                <a href='/error'>
                    <img src={somebubble} alt='projects' className='bubble'/>
                    <div className='bubblesoverlay'>
                        <p className='overlaytext'>Social Media</p>
                    </div>
                </a>
            </div>
            <div className='bubblelink'>
                <a href='/error'>
                    <img src={programmingbubble} alt='projects' className='bubble'/>
                    <div className='bubblesoverlay'>
                        <p className='overlaytext'>Programming</p>
                    </div>
                </a>
            </div>
        </div>
        </div>
    )
}