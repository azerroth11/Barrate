// Carousel
const carousel = document.querySelector('.carousel')
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
const left = document.querySelector('.left')
const active = document.querySelector('.active')
const right = document.querySelector('.right')
const leftBtn = document.querySelector('.fa-arrow-circle-left')
const rightBtn = document.querySelector('.fa-arrow-circle-right')
const leftImg = left.appendChild(document.createElement('img'))
const activeImg = active.appendChild(document.createElement('img'))
const rightImg = right.appendChild(document.createElement('img'))

leftImg.src = photos[0]
activeImg.src = photos[1]
rightImg.src = photos[2]

leftBtn.addEventListener('click', () => {
    leftImg.src = photos[photos.indexOf(leftImg.attributes[0].nodeValue) - 1]
    activeImg.src =
        photos[photos.indexOf(activeImg.attributes[0].nodeValue) - 1]
    rightImg.src = photos[photos.indexOf(rightImg.attributes[0].nodeValue) - 1]
    if (leftImg.attributes[0].nodeValue == 'undefined') {
        leftImg.src = photos[photos.length - 1]
    } else if (activeImg.attributes[0].nodeValue == 'undefined') {
        activeImg.src = photos[photos.length - 1]
    } else if (rightImg.attributes[0].nodeValue == 'undefined') {
        rightImg.src = photos[photos.length - 1]
    }
})

rightBtn.addEventListener('click', () => {
    leftImg.src = photos[photos.indexOf(leftImg.attributes[0].nodeValue) + 1]
    activeImg.src =
        photos[photos.indexOf(activeImg.attributes[0].nodeValue) + 1]
    rightImg.src = photos[photos.indexOf(rightImg.attributes[0].nodeValue) + 1]
    if (leftImg.attributes[0].nodeValue == 'undefined') {
        leftImg.src = photos[0]
    } else if (activeImg.attributes[0].nodeValue == 'undefined') {
        activeImg.src = photos[0]
    } else if (rightImg.attributes[0].nodeValue == 'undefined') {
        rightImg.src = photos[0]
    }
})

// Characters
const portraitsArray = document.querySelectorAll('.charPortrait')
const charName = document.querySelector('.charName')
const charDesc = document.querySelector('.charDesc')

Array.from(portraitsArray).forEach(e => {
    e.addEventListener('mouseover', () => {
        charName.innerText = e.id
        if (e.id == 'Karadec') {
            charDesc.innerText =
                "Karadec est un mercenaire et ancien chevalier d'ébène..."
        } else if (e.id == 'Baldric') {
            charDesc.innerText = "À l'âge de 7 ans... "
        } else if (e.id == 'Gaucelin') {
            charDesc.innerText =
                "Gaucelin qu'on appelle souvent Loudier est un..."
        } else {
            charDesc.innerText =
                "Paulin est un habile homme d'affaires qui ruse et..."
        }
    })
    e.addEventListener('mouseout', () => {
        charName.innerText = 'Choisissez un personnage'
        charDesc.innerText = ''
    })
})
