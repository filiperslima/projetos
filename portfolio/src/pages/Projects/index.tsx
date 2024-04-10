import { GalleryComponent } from "../../components/GalleryComponent";
import { ProjectsContainer } from "./styles";
import ToDo from '../../assets/ToDo.png'
import PetShop from '../../assets/PetShop.png'


const GalleryData = [{
    id: 1,
    name: 'To-Do App',
    description: 'Apresentando TarefaFácil, seu companheiro definitivo de produtividade! Organize suas tarefas, defina prazos e prioridades de forma intuitiva. Com recursos personalizáveis e listas adaptáveis, mantenha-se no controle de seus compromissos em qualquer lugar, a qualquer momento.',
    usedTools: ['HTML', 'CSS', 'Javascript', 'Bootstrap'],
    image: ToDo,
},
{
    id: 2,
    name: 'PetShop e-commerce App',
    description: 'Apresentando PetLover, um e-commerce completo com tudo aquilo que você precisa para seu melhor amigo. PetLover é mais que um e-commerce: é seu parceiro para cuidar do seu melhor amigo. Oferecemos uma ampla gama de produtos e serviços, garantindo que seu pet tenha tudo que precisa para uma vida feliz e saudável.',
    usedTools: ['React', 'Bootstrap', 'Javascript', 'Bootstrap'],
    image: PetShop,
},
{
    id: 3,
    name: 'TechGadget App',
    description: 'Apresentando TechGadget, sua loja online especializada em tecnologia de ponta e gadgets inovadores para atender todas as suas necessidades digitais. Explore nossa vasta seleção de dispositivos eletrônicos, desde smartphones e laptops até acessórios inteligentes, garantindo uma experiência de compra excepcional e tecnologicamente avançada.    ',
    usedTools: ['React', 'Bootstrap', 'Javascript', 'Bootstrap'],
    image: ToDo,
}
,
{
    id: 4,
    name: 'HealthCarePlus App',
    description: 'Descubra HealthCarePlus, seu destino completo para serviços de saúde e bem-estar, oferecendo uma variedade de recursos e especialistas para cuidar de você e de sua família. Desde consultas médicas online até programas de fitness personalizados, estamos comprometidos em promover sua saúde e qualidade de vida.',
    usedTools: ['React', 'Bootstrap', 'Javascript', 'Bootstrap'],
    image: PetShop,
},
{
    id: 5,
    name: 'HealthCarePlus App',
    description: 'Descubra HealthCarePlus, seu destino completo para serviços de saúde e bem-estar, oferecendo uma variedade de recursos e especialistas para cuidar de você e de sua família. Desde consultas médicas online até programas de fitness personalizados, estamos comprometidos em promover sua saúde e qualidade de vida.',
    usedTools: ['React', 'Bootstrap', 'Javascript', 'Bootstrap'],
    image: PetShop,
},
{
    id: 6,
    name: 'HealthCarePlus App',
    description: 'Descubra HealthCarePlus, seu destino completo para serviços de saúde e bem-estar, oferecendo uma variedade de recursos e especialistas para cuidar de você e de sua família. Desde consultas médicas online até programas de fitness personalizados, estamos comprometidos em promover sua saúde e qualidade de vida.',
    usedTools: ['React', 'Bootstrap', 'Javascript', 'Bootstrap'],
    image: PetShop,
},
{
    id: 7,
    name: 'HealthCarePlus App',
    description: 'Descubra HealthCarePlus, seu destino completo para serviços de saúde e bem-estar, oferecendo uma variedade de recursos e especialistas para cuidar de você e de sua família. Desde consultas médicas online até programas de fitness personalizados, estamos comprometidos em promover sua saúde e qualidade de vida.',
    usedTools: ['React', 'Bootstrap', 'Javascript', 'Bootstrap'],
    image: PetShop,
}


]

export function Projects() {
    return (
        <ProjectsContainer>
            <GalleryComponent GalleryData={GalleryData}></GalleryComponent>

        </ProjectsContainer>
    )

}