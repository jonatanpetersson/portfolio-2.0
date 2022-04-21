const projects = [
  {
    route: 'portfolio-v2',
    title: 'Portfolio v2',
    github: 'https://github.com/jonatanpetersson/portfolio-2.0',
    live: 'https://jonatanpetersson.com',
    techs: ['html', 'css', 'js', 'weld'],
    text: `Personal portfolio, the one you're looking at right now. Very basic obviously, but I like that. However, my project 'Weld' grew out of an idea of how to make this page, which in turn made me actualy use it to build it.`
  },
  {
    route: 'weld',
    title: 'Weld',
    github: 'https://github.com/jonatanpetersson/jp-weld',
    live: 'https://www.npmjs.com/package/jp-weld',
    techs: ['html', 'css', 'ts', 'js'],
    text: `Basically this started with me wanting to make my portfolio vanilla but with a component architecture, and didn't want to rely on any bloated framework for it, so I made my own. Weld is a component framework + compiling tool for deployment. Try it out!`
  },
  {
    route: 'metanet',
    title: 'Metanet',
    github: 'https://github.com/jonatanpetersson/metanet',
    live: 'https://metanet-rjms.herokuapp.com',
    techs: ['html', 'css', 'js', 'react', 'graphql', 'express', 'nosql'],
    text: `A marketplace for metaverse properties. It was created as the final project of the </salt> bootcamp of fall -21. This MVP currently supports parcels from the cryptovoxels metaverse.`
  },
  {
    route: 'wolfie',
    title: 'Wolfie',
    github: 'https://github.com/jonatanpetersson/wolfie',
    live: 'https://jp-wolfie.herokuapp.com/',
    techs: ['html', 'css', 'js', 'react', 'express'],
    text: `Project made in one day during the </salt> bootcamp of fall -21. It's using wolfram alphas search engine combined with the wikipedia api, providing a sort of blend between a search engine and a chat bot. NOTE: Limited amount of requests so don't go crazy, please.`
  },
];

let projectsMap = {}; 
projects.forEach(project => projectsMap[project.route] = project);

const workSidebar = document.querySelector('.sidebar');
let workTitle = document.querySelector('.work-content .title-text');
let workGithubLink = document.querySelector('.work-content .github');
let workLiveLink = document.querySelector('.work-content .live');
let workTechStack = document.querySelector('.work-content .techstack');
let workText = document.querySelector('.work-content .text');

projects.forEach(project => {
  const link = document.createElement('a');
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
      let techEl = document.createElement('span');
      techEl.textContent = tech;
      techEl.classList.add('tech', tech);
      workTechStack.append(techEl);
    });
  });
  workSidebar.append(link);
})

let previousActiveLink = document.querySelector('div.sidebar > a');
previousActiveLink.click();
