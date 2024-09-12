
const btn = document.getElementById('btn');
const secret = document.getElementById('secret');

btn.addEventListener('mouseover', () => {
    secret.classList.add('active');
});

btn.addEventListener('mouseout', () => {
    secret.classList.remove('active');
});