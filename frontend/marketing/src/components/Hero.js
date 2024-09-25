import '../styles/Hero.css';
import background from '../assets/hero-background-gif.gif';

function Hero() {

  return (
    <div className='hero-container'>
        <div className='text-container'>
            <div className='text-center'>
                In-House LLMs 
                <div className='text-blue'>Perfection Made Easy.</div>
            </div>
            <div className='text-sub'>
                <p className='first-sentence'>Source control your LLM workflows with our no-code platform.</p>
                Evaluate and improve small-scale LLMs with personalized, automatic prompting.
            </div>

        </div>
        <button className='info-link-container'>
                See what's building
            </button>
    </div>
);
}

export default Hero;
