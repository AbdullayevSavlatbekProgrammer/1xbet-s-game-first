window.addEventListener('DOMContentLoaded', () => {

    const loader = document.querySelector('.text-dark');
    const btn = document.querySelector('.btn');
    setTimeout(() => {
        loader.style.opacity = '0'

        setTimeout(() => {
            loader.style.display = 'none'

        }, 500)
    }, 1000)

});