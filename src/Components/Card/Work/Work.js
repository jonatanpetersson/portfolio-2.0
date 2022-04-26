const projects = [
  {
    route: 'portfolio',
    title: 'Portfolio',
    github: 'https://github.com/jonatanpetersson/portfolio-2.0',
    live: 'https://jonatanpetersson.com',
    techs: ['html', 'css', 'js', 'node', 'weld'],
    text: `Personal portfolio, the one you're at right now. Vanilla and minimalist the way I like it, however it's mostly an experiment project using my own component framework Weld to build it.`
  },
  {
    route: 'weld',
    title: 'Weld',
    github: 'https://github.com/jonatanpetersson/jp-weld',
    live: 'https://www.npmjs.com/package/jp-weld',
    techs: ['ts', 'js', 'node'],
    text: `Weld is a component framework and compiling tool for CD of js web apps. Having worked with React and Angular for a while, I wanted to give a shot at making my own frontend framework. Try it out and let me know what you think!`
  },
  {
    route: 'metanet',
    title: 'Metanet',
    github: 'https://github.com/jonatanpetersson/metanet',
    live: 'https://metanet-rjms.herokuapp.com',
    techs: ['html', 'sass', 'js', 'node', 'react', 'express', 'jwt', 'graphql', 'mongodb'],
    text: `MVP of a marketplace for metaverse properties, the final project of the </salt> bootcamp of fall -21. I mainly worked on data modelling and setting up the backend (MongoDB database, GraphQL API, JWT auth server) and building a messaging feature for users in the frontend.`
  },
  {
    route: 'wolfie',
    title: 'Wolfie',
    github: 'https://github.com/jonatanpetersson/wolfie',
    live: 'https://jp-wolfie.herokuapp.com/',
    techs: ['html', 'sass', 'js', 'node', 'react', 'express'],
    text: `Wolfie is a combination of a chat bot and a search engine, providing short but expandable to most questions aggregating data using the Wolfram Alpha's NLU System and Wikipedias API. Project made in a single day during the </salt> bootcamp of fall -21.`
  },
];

const select = el => document.querySelector(el);
const create = el => document.createElement(el);

const projectsMap = {}; 
projects.forEach(project => projectsMap[project.route] = project);

const workSidebar = select('.sidebar');
const workTitle = select('.work-content .title-text');
const workGithubLink = select('.work-content .github');
const workLiveLink = select('.work-content .live');
const workTechStack = select('.work-content .techstack');
const workText = select('.work-content .text');
let previousActiveLink;

projects.forEach(project => {
  const link = create('a');
  link.setAttribute('data-route', project.route);
  link.setAttribute('href', `/${project.route}`);
  link.textContent = project.title;
  link.addEventListener('click', (ev) => {
    ev.preventDefault();
    
    previousActiveLink.classList.remove('work-active-link');
    previousActiveLink = ev.currentTarget;
    ev.currentTarget.classList.add('work-active-link');
    
    const route = ev.currentTarget.dataset.route;

    workTitle.textContent = projectsMap[route].title;
    workGithubLink.setAttribute('href', projectsMap[route].github);
    workLiveLink.setAttribute('href', projectsMap[route].live);
    workText.textContent = projectsMap[route].text;
    workTechStack.innerHTML = '';

    projectsMap[route].techs.forEach(tech => {
      let techEl = create('span');
      techEl.textContent = tech;
      techEl.classList.add('tech', tech);
      workTechStack.append(techEl);
    });
  });
  workSidebar.append(link);
})

previousActiveLink = select('aside.sidebar > a');
previousActiveLink.click();
