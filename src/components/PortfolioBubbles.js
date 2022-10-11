import projects from '../img/projects.png';
import art from '../img/art.png';
import videoprod from '../img/videoprod.png';
import design from '../img/design.png';
import socialmedia from '../img/socialmedia.png';
import programming from '../img/programming.png';

export default function PortfolioBubbles() {
    return (
        <div className="portfoliobubbles">
        <div className="portfoliobubbles-sections">
            <div className='bubblelink'>
                <div className='bubblelink-projects'>
                    <a href='/projects'>
                        <img src={projects} alt='projects' className='bubblesicon-projects'/>
                        <div className='bubblesoverlay'>
                            <div className='overlaytext'>Projects</div>
                        </div>
                    </a>
                </div>
            </div>
            <div className='bubblelink'>
                <div className='bubblelink-projects'>
                    <a href='/art'>
                        <img src={art} alt='art' className='bubblesicon-art'/>
                        <div className='bubblesoverlay1'>
                            <div className='overlaytext'>Art</div>
                        </div>
                    </a>
                </div>
            </div>
            <div className='bubblelink'>
                <div className='bubblelink-projects'>
                    <a href='/videoproduction'>
                        <img src={videoprod} alt='videos' className='bubblesicon-videos'/>
                        <div className='bubblesoverlay2'>
                            <div className='overlaytext'>Video Production & Edit</div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div className="portfoliobubbles-sections">
            <div className='bubblelink'>
                <div className='bubblelink-projects'>
                    <a href='/graphicdesign'>
                        <img src={design} alt='design' className='bubblesicon-design'/>
                        <div className='bubblesoverlay'>
                            <div className='overlaytext'>Graphic Design</div>
                        </div>
                    </a>
                </div>
            </div>
            <div className='bubblelink'>
                <div className='bubblelink-projects'>
                    <a href='/socialmedia'>
                        <img src={socialmedia} alt='some' className='bubblesicon-some'/>
                        <div className='bubblesoverlay'>
                            <div className='overlaytext'>Social Media</div>
                        </div>
                    </a>
                </div>
            </div>
            <div className='bubblelink'>
                <div className='bubblelink-projects'>
                    <a href='/programming'>
                        <img src={programming} alt='programming' className='bubblesicon-programming'/>
                        <div className='bubblesoverlay'>
                            <div className='overlaytext'>Programming</div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        </div>
    )
}