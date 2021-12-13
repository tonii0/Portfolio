window.addEventListener('load', loader);

function loader(){

    const TLLOAD = gsap.timeline();

    TLLOAD
    .to('.bloc-txt', {height: 'auto', duration: 0.6, delay: 0.4, ease: 'power2.out'},)
    .to('.bloc-txt h2', {y: 0, ease: 'power2.out'}, '-=0.6')
    .to('.loader_circle', {x:0, duration: 0.6, ease: 'power2.out'}, '-=0.4')

    .to('.load-container', {opacity: 0, duration: 0.8, delay: 0.7})
    .add(() => {
        document.querySelector('.load-container').style.display = "none";
    })
    .to('.home-page',2,{
        backgroundColor: '#fff'
    })
    .to('.name',1.8,{
        backgroundColor: '#ffe8d6'
    }, '-=2')
}

const nav = document.querySelector('header')

window.addEventListener('scroll', () => {

    if(window.scrollY > 930) {
        nav.classList.add('anim-nav');
    } else {
        nav.classList.remove('anim-nav');
    }
})