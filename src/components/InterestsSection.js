import web from '../img/web.png';
import graphicdesign from '../img/graphicdesign.png';
import content from '../img/content.png';
import video from '../img/video.png';
import some from '../img/some.png';

export default function InterestsSection () {
    return (
        <div className='interests'>
            <h1 className='mainheader'>My areas of interest</h1>
            <div className='thebubbles'>
                <div>
                    <img src={web} alt='webbubble' className='bubbleicon'/>
                </div>
                <div>
                    <img src={graphicdesign} alt='gdbubble' className='bubbleicon'/>
                </div>
                <div>
                    <img src={content} alt='contentbubble' className='bubbleicon'/>
                </div>
            </div>
            <div className='thebubbles'>
                <div>
                    <img src={video} alt='videobubble' className='bubbleicon'/>
                </div>
                <div>
                    <img src={some} alt='somebubble' className='bubbleicon'/>
                </div>
            </div>
        </div>
    )
}