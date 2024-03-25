import { DiHtml5, DiCss3, DiJsBadge, DiNodejsSmall, DiMysql, DiReact} from 'react-icons/di'

import '../styles/components/technologiescontainer.sass'

const technologies = [
    { id: 'html', name: 'HTML5', description: 'HTML é uma linguagem de marcação utilizada na construção de páginas na Web.' ,icon: <DiHtml5 /> },
    { id: 'css', name: 'CSS3', description: 'CSS3 é a terceira mais nova versão das famosas Cascading Style Sheets, pela qual se define estilos para um projeto web.',icon: <DiCss3 /> },
    { id: 'js', name: 'JavaScript', description: 'JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.',icon: <DiJsBadge /> },
    { id: 'node', name: 'Node.js', description: 'Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web.',icon: <DiNodejsSmall /> },
    { id: 'mysql', name: 'MySQL', description: 'O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface.',icon: <DiMysql /> },
    { id: 'react', name: 'React.js', description: 'O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.',icon: <DiReact /> },
];

const TechnologiesContainer = () => {
  return <section className="technologies-container">
    <h2>Tecnologias</h2>
    <div className="technologies-grid">
        {technologies.map((tech) => (
            <div className="technology-card" id={tech.id} key={tech.id}>
                {tech.icon}
                <div className="technology-info">
                    <h3>{tech.name}</h3>
                    <p>{tech.description}</p>
                </div>
            </div>
        ) )}
    </div>
  </section>
}

export default TechnologiesContainer