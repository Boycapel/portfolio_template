// Import Assets
import profile from '../assets/profile.jpg';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="John Doe" />

            <div className='header__content'>
                <h1>Hi, I'm Mark Anthony Sanchez</h1>
                <p>Blockchain Developer</p>
                <a href="mailto:marka.sanchez@outlook.com" target="_blank" className="button">Get In Touch</a>    
            </div>
        </section>
    );
}

export default Header;