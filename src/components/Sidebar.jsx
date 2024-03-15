import Avatar from '../img/16993052449711.jpeg'

import '../styles/components/sidebar.sass'

const Sidebar = () => {
  return (
    <aside id="sidebar">
        <img src={Avatar} alt="João Paulo Da Silva Monteiro" />
        <p className="title">Desenvolvedor Web</p>
        <p>redes sociais</p>
        <p>informações de contato</p>
        <a href="" className="btn">Download curriculo</a>
    </aside>
  )
}

export default Sidebar