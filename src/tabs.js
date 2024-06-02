import createHomePage from "./homePage";
import createMenuPage from "./menuPage";
import createContactPage from "./contact";

function createTabs() {
    const contentEl = document.querySelector('#content');

    // Create and append navbar
    const navbar = document.createElement('div');
    navbar.setAttribute('id', 'navbar'); // to support styling

    // Create and append tabs to navbar
    const homeTab = document.createElement('button');
    homeTab.textContent = 'Home';
    const menuTab = document.createElement('button');
    menuTab.textContent = 'Menu';
    const contactTab = document.createElement('button');
    contactTab.textContent = 'Contact';

    const tabs = [homeTab, menuTab, contactTab];
    const handlers = [createHomePage, createMenuPage, createContactPage];
    tabs.forEach((tab, index) => {
        navbar.appendChild(tab);
        tab.addEventListener('click', () => {
            clearContent();
            handlers[index]();
        })
        tab.setAttribute('id', 'tab-btn');
    })

    contentEl.appendChild(navbar);
}

function clearContent() {
    const contentEl = document.querySelector('#content');

    const pageContent = document.querySelector('.pageContent');
    if(pageContent) {
        contentEl.removeChild(pageContent);
    }
}

export default createTabs;