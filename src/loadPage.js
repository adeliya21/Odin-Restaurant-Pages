import createHomePage from './homePage.js';
import createTabs from './tabs.js'

function initLoad() {
    createTabs();
    createHomePage();
}

export default initLoad;