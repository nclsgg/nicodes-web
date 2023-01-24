import { Container } from "./styles";
import DesignerIcon from "@styles/assets/designer_computer_icon.svg";

export default function AboutMe() {
    return (
        <Container>
            <div className="about-me">
                <DesignerIcon className="about-me__icon"/>
                <section className="about-me__information">
                    <section className="about-me__information--item">
                        <h1 className="about-me__information--item-title">Desenvolvimento</h1>
                        <p className="about-me__information--item-text">
                        Sou um desenvolvedor Full Stack com foco em Front End, utilizando principalmente a linguagem Typescript. Para meus projetos, utilizo o framework ReactJS juntamente com NextJS. Sempre fui apaixonado por tecnologia e isso faz com que eu me divirta fazendo o que eu amo.
                        </p>
                    </section>

                    <section className="about-me__information--item">
                        <h1 className="about-me__information--item-title">Design</h1>
                        <p className="about-me__information--item-text">
                        Uma das minhas principais qualidades enquanto desenvolvedor Front End é a fidelidade entre o Design pedido pelo cliente e o produto final. O design me chama muita atenção e eu me orgulho dos resultados que entrego.
                        </p>
                    </section>
                </section>
            </div>
        </Container>
    )
}