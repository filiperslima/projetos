import { ProfileCardComponent } from "../../components/ProfileCardComponent";
import { AboutMeContainer, Description, DescriptionContent, DescriptionContainer, Title, Skill } from "./styles";
import { IoLogoReact, IoLogoCss3, IoLogoJavascript, IoLogoHtml5, } from "react-icons/io5";
import { SiBootstrap, SiSpringboot, SiMysql, SiGit } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { SectionTitleComponent } from "../../components/SectionTitleComponent";



export function AboutMe() {
    return (
        <>
            <AboutMeContainer className="about-me">
                <DescriptionContainer>
                    <DescriptionContent variant='profile'>
                    <SectionTitleComponent section="Sobre mim"/>
                        <Description>
                            {`Técnico em Desenvolvimento de Sistemas, pós-graduado em Segurança da Informação \n
                    e certificado como Professional Developer pela Digital House. \n
                    Meu foco está no Desenvolvimento de Sites e Aplicativos Web, com especialização no Front-end, \n
                    mas possuo habilidades sólidas em back-end e determinação para aprimorá-las e alcançar o status de profissional fullstack.`}
                        </Description>
                    </DescriptionContent>

                    <DescriptionContent variant="skills">
                    <SectionTitleComponent section="Habilidades"/>
                        <div className="skillsContainer">
                            <Skill>
                                <IoLogoHtml5 />
                                HTML
                            </Skill>
                            <Skill>
                                <IoLogoCss3 />
                                CSS
                            </Skill>
                            <Skill>
                                <DiJavascript />
                                Javascript
                            </Skill>
                            <Skill>
                                <IoLogoReact />
                                React
                            </Skill>
                            <Skill>
                                <SiBootstrap />
                                Bootstrap
                            </Skill>
                            <Skill>
                                <SiSpringboot />
                                Spring
                            </Skill>

                            <Skill>
                                <SiMysql />
                                MySql
                            </Skill>
                            <Skill>
                                <SiGit />
                                Git
                            </Skill>
                        </div>
                    </DescriptionContent>

                </DescriptionContainer>
                <ProfileCardComponent />
            </AboutMeContainer>
        </>
    );
}
