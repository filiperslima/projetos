import { GalleryComponent } from "../../components/GalleryComponent";
import { section } from "./styles";
import ToDo from '../../assets/ToDo copiar.png'
import PetShop from '../../assets/PetShop.png'
import { Fragment } from "react/jsx-runtime";
import { SectionTitleComponent } from "../../components/SectionTitleComponent";

export const GalleryData = [{
    id: 1,
    name: 'To-Do App',
    description: 'Apresentando TarefaFácil, seu companheiro definitivo de produtividade! Organize suas tarefas, defina prazos e prioridades de forma intuitiva. Com recursos personalizáveis e listas adaptáveis, mantenha-se no controle de seus compromissos em qualquer lugar, a qualquer momento.',
    usedTools: ['HTML', 'CSS', 'Javascript', 'Bootstrap'],
    image: ToDo,
    isCompleted: false,
    link: undefined
},
{
    id: 2,
    name: 'PetShop e-commerce App',
    description: 'Apresentando PetLover, um e-commerce completo com tudo aquilo que você precisa para seu melhor amigo. PetLover é mais que um e-commerce: é seu parceiro para cuidar do seu melhor amigo.',
    usedTools: ['React', 'Bootstrap', 'Javascript', 'Bootstrap'],
    image: PetShop,
    isCompleted: false,
    link: undefined

},
{
    id: 3,
    name: null,
    description: null,
    usedTools: [],
    image: null,
    isCompleted: false,
    link: undefined
},
{
    id: 4,
    name: null,
    description: null,
    usedTools: [],
    image: null,
    isCompleted: false,
    link: undefined
},
{
    id: 5,
    name: null,
    description: null,
    usedTools: [],
    image: null,
    isCompleted: false,
    link: undefined
},
{
    id: 6,
    name: null,
    description: null,
    usedTools: [],
    image: null,
    isCompleted: false,
    link: undefined
},


]


export function Projects() {
    return (

        <section>
            <SectionTitleComponent section="Projetos" />

            <div className="projects">

                <GalleryComponent GalleryData={GalleryData} />
            </div>
        </section>


    )

}