import projects from '../img/projects.png';
import art from '../img/art.png';
import videoprod from '../img/videoprod.png';
import design from '../img/design.png';
import socialmedia from '../img/socialmedia.png';
import programming from '../img/programming.png';

export default function PortfolioSection() {
    return (
        <div className='portfoliosec'>
            <h1 className='mainheader'>Portfolio</h1>
            <div className="portfolio-sections1">
                <div className='projects-link'>
                    <a href='/projects'>
                        <img src={projects} alt='projects' className='projetcs-icon'/>
                        <div className='sectionsoverlay'>
                            <div className='overlaytext'>Projects & Clients</div>
                        </div>
                    </a>
                </div>
                <div className='art-link'>
                    <a href='/error'>
                    <img src={art} alt='art' className='art-icon'/>
                        <div className='sectionsoverlay'>
                            <div className='overlaytext'>Art</div>
                        </div>
                    </a>
                </div>
                <div className='video-link'>
                    <a href='/error'>
                        <img src={videoprod} alt='videos' className='videoprod-icon'/>
                        <div className='sectionsoverlay'>
                            <div className='overlaytext'>Video Production & Edit</div>
                        </div>
                    </a>
                </div>
            </div>
            <div className="portfolio-sections2">
                <div className='design-link'>
                    <a href='/error'>
                        <img src={design} alt='design' className='design-icon'/>
                        <div className='sectionsoverlay'>
                            <div className='overlaytext'>Graphic Design</div>
                        </div>
                    </a>
                </div>
                <div className='some-link'>
                    <a href='/error'>
                        <img src={socialmedia} alt='some' className='some-icon'/>
                        <div className='sectionsoverlay'>
                            <div className='overlaytext'>Social Media</div>
                        </div>
                    </a>
                </div>
                <div className='programming-link'>
                    <a href='/error'>
                        <img src={programming} alt='programming' className='programming-icon'/>
                        <div className='sectionsoverlay'>
                            <div className='overlaytext'>Programming</div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}