const createHomePage = () => {
    const contentEl = document.querySelector('#content');
    const homeEl = document.createElement('div');
    homeEl.classList.add('pageContent'); // to support clearContent

    // Create and append img
    const image = document.createElement('img');
    image.src = 'https://t4.ftcdn.net/jpg/02/75/70/03/360_F_275700347_09reCCwb7JBxTKiYQXsyri4riMKaHbj8.jpg';
    image.height = '200';
    homeEl.appendChild(image);

    // Create and append headline
    const headline = document.createElement('h1');
    headline.textContent = 'Welcome';
    homeEl.appendChild(headline);

    // Create and append text
    const text = document.createElement('p');
    text.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    homeEl.appendChild(text);

    // Append home to content
    contentEl.appendChild(homeEl);
}

export default createHomePage;