const toggler = document.querySelectorAll('.plus');
// console.log(toggler);
toggler.forEach((plus) => {
    plus.addEventListener('click', () => {
        plus.classList.toggle('rotate');
        plus.parentElement.nextElementSibling.classList.toggle("hidden");
        // plus.parentElement.nextElementSibling.classList.toggle("show");
})
});
