import Avatar from '../img/16993052449711.jpeg'
import SocialNetwork from './SocialNetwork'

import '../styles/components/sidebar.sass'
import InformationContainer from './InformationContainer'

const Sidebar = () => {
  return (
    <aside id="sidebar">
        <img src={Avatar} alt="João Paulo Da Silva Monteiro" />
        <p className="title">Desenvolvedor Web</p>
        <SocialNetwork />
        <InformationContainer />
        <a href="" className="btn">Download curriculo</a>
    </aside>
  )
}

export default Sidebar