document.querySelector('.sample-form input[type=submit]')
    .addEventListener('click', sendForm);
    
    
function sendForm(e) {
    const form = document.querySelector('.sample-form');
    if (form.checkValidity()) { 
        e.preventDefault();
        fetch('form', {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                name: document.querySelector('.sample-form input[name=name]').value,
                email: document.querySelector('.sample-form input[name=email]').value,
            })
        });
    }
}
