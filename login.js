document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    

    console.log('Login attempt:', username, password);
});

document.getElementById('adminLogin').addEventListener('click', function(e) {
    e.preventDefault();

    console.log('Admin login clicked');
});

document.getElementById('forgotPassword').addEventListener('click', function(e) {
    e.preventDefault();

    console.log('Forgot password clicked');
});

document.getElementById('newAccount').addEventListener('click', function(e) {
    e.preventDefault();

    console.log('New account clicked');
});