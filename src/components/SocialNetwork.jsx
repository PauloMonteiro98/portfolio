import { FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa'
import '../styles/components/socialnetwork.sass'

const socialNetworks = [
    { name: 'linkedin', link: 'https://www.linkedin.com/in/jo%C3%A3o-paulo-monteiro-8013a11b8/', icon: <FaLinkedinIn /> },
    { name: 'github', link: 'https://github.com/PauloMonteiro98', icon: <FaGithub /> },
    { name: 'whatsapp', link: 'https://wa.me/5584988357669', icon: <FaWhatsapp /> },
];

const SocialNetwork = () => {
  return <section id="social-network">
    {socialNetworks.map((network) => (
        <a href={network.link} className='social-btn' id={network.name} key={network.name} target="_blank">
            {network.icon}
        </a>
    ))}
  </section>
}

export default SocialNetwork