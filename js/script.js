// Carousel
const carousel = document.querySelector('.main-carousel')
const photos = [
    './img/gallerie/1.jpg',
    './img/gallerie/2.jpg',
    './img/gallerie/3.jpg',
    './img/gallerie/4.jpg',
    './img/gallerie/5.jpg',
    './img/gallerie/6.jpg',
    './img/gallerie/7.jpg',
    './img/gallerie/8.jpg',
    './img/gallerie/9.jpg',
    './img/gallerie/10.jpg',
    './img/gallerie/11.jpg',
    './img/gallerie/12.jpg',
    './img/gallerie/13.jpg',
    './img/gallerie/14.jpg',
    './img/gallerie/15.jpg',
    './img/gallerie/16.jpg',
    './img/gallerie/17.jpg',
    './img/gallerie/18.jpg',
    './img/gallerie/19.jpg',
    './img/gallerie/20.jpg',
    './img/gallerie/21.jpg',
    './img/gallerie/22.jpg',
    './img/gallerie/23.jpg',
    './img/gallerie/24.jpg',
    './img/gallerie/25.jpg',
    './img/gallerie/26.jpg',
    './img/gallerie/27.jpg',
    './img/gallerie/28.jpg',
]

photos.forEach(photo => {
    const carouselCellImg = carousel.appendChild(document.createElement('img'))
    carouselCellImg.src = photo
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
                "<strong> Jean de Karadec </strong> est un mercenaire et ancien chevalier d'ébène. Il est le fils unique d'Ewen et de Guenièvre de Karadec."
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
