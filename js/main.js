
const projects = [
{
    idProject: 1,
    imgproject: 'chatbots.png',
    titleProject: 'Chat Bidireccional',
    description: 'Este es un proyecto trabajado con una herramienta llamada socket.io',
    linkProject: 'https://',
},

{
    idProject: 2,
    imgproject:'ecommerce.png', 
    titleproject: 'E-commerce project',
    description: 'Este proyecto simula la creacion de un carrito de compras',
    linkProject: 'https://'
},

{
    idProject: 3,
    imgproject:'imagen E-mail.png', 
    titleproject: 'Formulario contactos E-mail',
    description: 'En este proyecto se practica un formulario apoyados de una libreria externa',
    linkProject: 'https://'
},

{
    idProject: 1,
    imgproject:'pokemon.jpeg', 
    titleProject:'Pokemon',
    description: 'En este proyecto vemos correr la api rest de pokemon',
    linkProject: 'https://'
}
];

const technologies = [
{
    namelenguage: 'html',
    progressporcentaje: 90,
    img:'logo html.png',
},

{
    namelenguage: 'css',
    progressporcentaje: 90,
    img:'css-logo.png',
},

{
    namelenguage: 'nodejs',
    progressporcentaje: 60,
    img:'logo node js.png',
},

{
    namelenguage: 'Javascript',
    progressporcentaje: 60,
    img:'logo js.png',
},
]

//Projects
function Createcardsprojects(project) {
    // const containerCards = document.createElement('div');
    // containerCards.classList.add('container-cards');

    const cardproject = document.createElement('div');
    cardproject.classList.add('card-projects');

    const containerimgcard = document.createElement('div');
    containerimgcard.classList.add('container-img-card');

    const imgcard = document.createElement('img');
    imgcard.src = projects.imgproject;
    imgcard.alt = projects.titleProject;

    const containerDescriptions = document.createElement('div');
    containerDescriptions.classList.add('container-description-card');

    const titlecard = document.createElement('h3');
    titlecard.textContent = projects.titleProject;

    const descriptioncard = document.createElement('p');
    descriptioncard.textContent = projects.description;

    const gotoproject = document.createElement('a');
    gotoproject.href = projects.linkProject;

    goToProject.setAttribute('target', '_blank');
    gotoproject.textContent = 'ir a projectos';

    cardproject.appendChild(containerimgcard);
    cardproject.appendChild(containerDescriptions);

    containerimgcard.appendChild(imgcard);
    containerDescriptions.appendChild(titlecard);
    containerDescriptions.appendChild(descriptioncard);
    containerDescriptions.appendChild(goToProject);

    document.querySelector('.container-cards').appendChild(cardproject);
}

loadsectionProjects()
function loadsectionProjects () {
    projects.forEach(project => Createcardsprojects(project));
}


//tecnologias
function createcardstechnologies(technologies) {
    const cardstechnologies = document.createElement('nav');
    cardstechnologies.classList.add('nav-content');

    const img = document.createElement('img');
    img.src = technologies.img;

    const progress = document.createElement('progress');
    progress.value = technologies.progressporcentaje;
    progress.max = 100;

    const span = document.createElement('span');
    span.textContent = technologies.namelenguage;

    cardstechnologies.appendChild(img);
    cardstechnologies.appendChild(progress);
    cardstechnologies.appendChild(span);

    document.querySelector('.container-technologies').appendChild(cardstechnologies);
}

    loadsectiontechnologies()
    function loadsectiontechnologies() {
        technologies.forEach(technologies => createcardstechnologies(technologies));
    }







