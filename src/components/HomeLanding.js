import scrollbutton from '../img/scrollbutton.png';

export default function HomeLanding() {
    return (
        <div className="hp-landing">
            <h2 className="welcomeheader2">Just call me</h2>
            <h1 className="welcomeheader1">Katie</h1>
            <a href="#aboutsection"><img src={scrollbutton} alt='scrollbutton' className='scrollbutton'/></a>
        </div>
    )
}