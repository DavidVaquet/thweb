
var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
    
});

document.getElementById('menu-toggle').addEventListener('click', function() {
    const navbar = document.getElementById('navbar-sticky');
    navbar.classList.toggle('hidden');
  });

window.addEventListener('load', () => {
    const address = '0xEe6925Ac62Ca18242b2fE836929107c7d6ec9983';
    const copyAddressButton = document.getElementById('copy-btn');
    const toast = document.getElementById('toast');
    
    copyAddressButton.addEventListener('click', () => {
        navigator.clipboard.writeText(address)
            .then(() => {
                // Mostrar el toast
                toast.classList.remove('hidden');
                toast.classList.add('show');
                
                // Cambiar el botón a un check (✔)
                copyAddressButton.classList.add('success');
                copyAddressButton.textContent = '';  // Borrar texto anterior
                copyAddressButton.innerHTML = '✔'; // Mostrar el check

                // Desaparecer el toast después de 3 segundos
                setTimeout(() => {
                    toast.classList.remove('show');
                    toast.classList.add('hidden');
                }, 3000);

                // Volver el botón a su estado original después de 2 segundos
                setTimeout(() => {
                    copyAddressButton.classList.remove('success');
                    copyAddressButton.innerHTML = 'Copiar'; // Restaura el texto original
                }, 2000);
            })
            .catch(err => {
                console.error('Error al copiar la dirección: ', err);
            });
    });



    
});