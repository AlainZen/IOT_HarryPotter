const signUp = async () => {
    let email = document.querySelector('input[name="email"]').value;
    let pseudo = document.querySelector('input[name="pseudo"]').value;
    let password = document.querySelector('input[name="password"]').value;

    let response = await fetch('http://localhost:3000/auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, pseudo, password }),
    }),
        data = await response.json();
    console.log(data);
    if (response.status === 200) {
        window.location.href = 'homepage.html';
    }
}