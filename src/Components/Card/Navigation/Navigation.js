const homeLink = document.querySelector('.home-link');
const homeTab = document.querySelector('.home-tab');
const workLink = document.querySelector('.work-link');
const workTab = document.querySelector('.work-tab');
const aboutLink = document.querySelector('.about-link');
const aboutTab = document.querySelector('.about-tab');
const contactLink = document.querySelector('.contact-link');
const contactTab = document.querySelector('.contact-tab');
const router = {
  home: {
    link: homeLink,
    tab: homeTab,
  },
  work: {
    link: workLink,
    tab: workTab,
  },
  about: {
    link: aboutLink,
    tab: aboutTab,
  },
  contact: {
    link: contactLink,
    tab: contactTab
  }
}

Object.keys(router).forEach(route => {
  router[route].link.addEventListener('click', (ev) => {
    ev.preventDefault();
    const route = ev.currentTarget.dataset.route;
    router[activeTab].tab.classList.add('hide-tab');
    router[activeTab].link.classList.remove('active-link');
    router[route].tab.classList.remove('hide-tab');
    router[route].link.classList.add('active-link');
    activeTab = route;
  })
})

let activeTab = 'home';
router.home.link.classList.add('active-link');
router.home.tab.classList.remove('hide-tab');