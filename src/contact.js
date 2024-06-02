const createContactPage = () => {
    const contentEl = document.querySelector('#content');
    const contactEl = document.createElement('div');
    contactEl.classList.add('pageContent'); // to support clearContent

    // Create and append img el
    const image = document.createElement('img');
    image.src = 'https://www.nicepng.com/png/detail/243-2431134_search-for-contact-us-logo-png.png';
    image.height = '200';
    image.width = '400';
    contactEl.appendChild(image);


    // Create and append form
    const form = document.createElement('form');

    //name
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.placeholder = 'Name';
    //phone
    const phoneInput = document.createElement('input');
    phoneInput.type = 'text';
    phoneInput.placeholder = '+1 (XXX) XXX XXXX';
    //email
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.placeholder = 'example@email.com';
    //message
    const messageInput = document.createElement('textarea');
    messageInput.placeholder = 'Leave your Message here...';
    messageInput.rows = '10';
    messageInput.setAttribute('id', 'message-input'); // to support styling
    //submit
    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.setAttribute('id', 'submit-btn'); // to support styling

    const inputs = [nameInput, phoneInput, emailInput, messageInput, submitButton];
    inputs.forEach((input) => {
        form.appendChild(input);
    })
    contactEl.appendChild(form);

    // Append contact to content
    contentEl.appendChild(contactEl);
}

export default createContactPage;