const createMenuPage = () => {
    const contentEl = document.querySelector('#content');
    const menuEl = document.createElement('div');
    menuEl.classList.add('pageContent'); // to support clearContent

    // Create and append img
    const image = document.createElement('img');
    image.src = 'https://static.wixstatic.com/media/672d4d_500f572e652844468e34eebdaea7f47c~mv2.png/v1/fill/w_560,h_260,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/246-2463623_cafe-menu-logo-png.png';
    image.height = '200';
    menuEl.appendChild(image);


    // Create and append menulist
    const menuList = document.createElement('div');
    const meals = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
    meals.forEach((meal) => {
        const mealEl = document.createElement('li');
        mealEl.textContent = meal;
        menuList.appendChild(mealEl);
    })
    menuEl.appendChild(menuList);

    // Append menu to content
    contentEl.appendChild(menuEl);
}

export default createMenuPage;