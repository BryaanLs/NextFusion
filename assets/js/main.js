// function animateScroll() {
//     const dataAnime = document.querySelectorAll('[data-anime]');
//     const windowTop = window.innerHeight * 0.5;

//     dataAnime.forEach((e) => {
//         if (e.getBoundingClientRect().top - windowTop < 120) {
//             e.classList.add('animate')
//         } else {
//             e.classList.remove('animate')
//         }
//     })
// }

// window.addEventListener('scroll', () => {
//     animateScroll()
// })


const seeMore = document.querySelectorAll('.seeMore');
const sanfonaContent = document.querySelectorAll('.sanfona-content');
const sanfona = document.querySelectorAll('.sanfona-card');

seeMore.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        sanfonaContent[index].classList.toggle('active');
        btn.classList.toggle('rotateBtn');
        sanfona[index].classList.toggle('active2');
    })
})
