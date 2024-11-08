document.addEventListener('DOMContentLoaded', function() {
    const adminLoginForm = document.getElementById('adminLoginForm');
    
    adminLoginForm.addEventListener('submit', function(e) {
        e.preventDefault(); 
        

        const username = document.getElementById('adminUsername').value;
        const password = document.getElementById('adminPassword').value;
        

        const adminCredentials = {
            username: 'admin',
            password: 'admin123'
        };
        

        if (username === adminCredentials.username && password === adminCredentials.password) {

            alert('Login de administrador bem-sucedido!');
            

            localStorage.setItem('adminLoggedIn', 'true');
            

            window.location.href = 'cadastro.html';
        } else {

            alert('Credenciais inválidas. Por favor, tente novamente.');

            document.getElementById('adminUsername').value = '';
            document.getElementById('adminPassword').value = '';
        }
    });


    function adminLogout() {
        localStorage.removeItem('adminLoggedIn');
        window.location.href = 'login.html';
    }


    function checkAdminAuth() {
        const isAdminLoggedIn = localStorage.getItem('adminLoggedIn');
        if (!isAdminLoggedIn && window.location.pathname.includes('cadastro.html')) {
            window.location.href = 'admin.html';
        }
    }

    checkAdminAuth();
});