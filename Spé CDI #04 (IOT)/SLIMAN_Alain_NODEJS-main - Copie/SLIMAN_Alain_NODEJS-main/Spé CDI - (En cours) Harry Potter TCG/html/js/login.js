const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

const logIn = async () => {
    let email = document.querySelector('input[name="emailL"]').value;
    let password = document.querySelector('input[name="passwordL"]').value;
    
    let response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
            email: email,
            password: password,
        }),
    })
    let data = await response.json();
    localStorage.setItem('token', data);
    window.location.href = 'homepage.html';
    }