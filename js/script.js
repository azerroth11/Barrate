// Carousel
const carousel = document.querySelector('.main-carousel')
const photos = [
    './img/gallerie/1.webp',
    './img/gallerie/2.webp',
    './img/gallerie/3.webp',
    './img/gallerie/5.webp',
    './img/gallerie/6.webp',
    './img/gallerie/7.webp',
    './img/gallerie/4.webp',
    './img/gallerie/8.webp',
    './img/gallerie/9.webp',
    './img/gallerie/11.webp',
    './img/gallerie/10.webp',
    './img/gallerie/12.webp',
    './img/gallerie/13.webp',
    './img/gallerie/14.webp',
    './img/gallerie/15.webp',
    './img/gallerie/16.webp',
    './img/gallerie/17.webp',
    './img/gallerie/18.webp',
    './img/gallerie/19.webp',
    './img/gallerie/20.webp',
    './img/gallerie/21.webp',
    './img/gallerie/22.webp',
    './img/gallerie/23.webp',
    './img/gallerie/24.webp',
    './img/gallerie/25.webp',
    './img/gallerie/26.webp',
    './img/gallerie/27.webp',
    './img/gallerie/28.webp',
]

photos.forEach(photo => {
    const carouselCellImg = carousel.appendChild(document.createElement('img'))
    carouselCellImg.setAttribute('data-flickity-lazyload', photo)
})

// Characters
const portraitsArray = document.querySelectorAll('.charPortrait')
const charName = document.querySelector('.charName')
const charDesc = document.querySelector('.charDesc')

Array.from(portraitsArray).forEach(e => {
    e.addEventListener('mouseover', () => {
        charName.innerText = e.id
        if (e.id == 'Karadec') {
            charDesc.innerHTML =
                "<strong> Jean de Karadec </strong> est un mercenaire et ancien chevalier d'ébène. Il est le fils unique d'Ewen et de Guenièvre de Karadec. Il aime la bière, les jeux et le danger."
        } else if (e.id == 'Baldric') {
            charDesc.innerHTML =
                "<strong>Baldric Biniou de Montroi</strong> est un chevalier hors-pair. C'est le bras droit de Paulin. Il est fils de Godefroy et Elisabeth Biniou de Montroi ainsi que le frère d'Ida et de Morvan."
        } else if (e.id == 'Gaucelin') {
            charDesc.innerHTML =
                "<strong>Gaucelin</strong> qu'on appelle souvent Loudier est le fils d'un père inconnu et de Gwendoline la Barjotte. Il est le père de 12 enfants et le mari d'Emelotte, aussi surnommée Lolotte."
        } else {
            charDesc.innerHTML =
                "<strong>Sir Paulin</strong> dit le Fourbe, est un habile homme d'affaires. Il est fils de Gislebert et d'Adélaide de Boleor, mari de Dame Béatrice et père d'Aliénor."
        }
    })
    e.addEventListener('mouseout', () => {
        charName.innerText = 'Choisissez un personnage'
        charDesc.innerText = ''
    })
})
