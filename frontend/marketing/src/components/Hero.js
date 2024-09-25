import '../styles/Hero.css';
import background from '../assets/hero-background-gif.gif';

function Hero() {

  return (
    <div className='hero-container'>
        <div className='text-container'>
            <div className='text-center'>
                In-house LLMs 
                <div className='text-blue'>Perfection Made Easy.</div>
            </div>
            <div className='text-sub'>
                <p className='first-sentence'>Source control your LLM workflows with our no-code platform.</p>
                Evaluate and improve small-scale LLMs with personalized, automatic prompting.
            </div>

        </div>
        <div className='info-link-container'>
                Check out what we're building
            </div>
    </div>
);
}

export default Hero;
