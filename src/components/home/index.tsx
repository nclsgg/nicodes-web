import { Container } from "./styles";
import DevIcon  from "@styles/assets/developer_computer_icon.svg";

export default function HomeComponent() {
    return (
        <Container>
            <div className="informations">
                <section className="informations__content">
                    <section className="informations__title">
                        <div className="title-container">
                            <span className="informations__title--name">Nicolas Gomes Guadagno</span>
                            <h1 className="informations__title--role-desktop">Front End <br/>Developer.</h1>
                            <h1 className="informations__title--role-mobile">Front End Developer.</h1>
                        </div>
                        <DevIcon className="informations__title--icon-desktop"/>
                    </section>
                    <section className="informations__description">
                        <p className="informations__description--text">
                        Domínio pleno em tecnologias como ReactJS, NextJS e NodeJS. Aperfeiçoando habilidades em Python
                        </p>

                        <p className="informations__description--text">
                        Experiência em desenvolvimento de websites desktop e mobile, utilizando as melhores práticas de desenvolvimento de software.
                        </p>
                    </section>
                    <DevIcon className="informations__title--icon-mobile"/>
                </section>
                
            </div>
        </Container>
    )
}