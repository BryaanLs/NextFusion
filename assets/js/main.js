function animateScroll() {
    const dataAnime = document.querySelectorAll('[data-anime]');
    const windowTop = window.innerHeight * 0.5;

    dataAnime.forEach((e) => {
        if (e.getBoundingClientRect().top - windowTop < 120) {
            e.classList.add('animate')
        } else {
            e.classList.remove('animate')
        }
    })
}

window.addEventListener('scroll', () => {
    animateScroll()
})


const seeMore = document.querySelectorAll('.seeMore');
const sanfonaContent = document.querySelectorAll('.sanfona-content');
const sanfona = document.querySelectorAll('.sanfona-card');

seeMore.forEach((btn, index) => {
    let count = 0;
    btn.addEventListener('click', () => {
        if (count % 2 === 0) {
            sanfonaContent[index].classList.add('active');
            btn.classList.add('rotateBtn');
            sanfona[index].classList.add('active2');
        } else {
            sanfonaContent[index].classList.remove('active');
            btn.classList.remove('rotateBtn');
            sanfona[index].classList.remove('active2');
        }


        // sanfonaContent[index].classList.toggle('active');
        // btn.classList.toggle('rotateBtn');
        // sanfona[index].classList.toggle('active2');
        count += 1;
    })
})
