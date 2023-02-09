const toggle = document.querySelector('#checkbox')
const priceYear = document.querySelectorAll('.cardprice__price__y')
const priceMonth = document.querySelectorAll('.cardprice__price__m')

const changeClass = (element, oldClass, newClass) => {
    element.forEach((e, i) => {
        e.classList.remove(oldClass)
        e.classList.add(newClass)
    })
}

toggle.addEventListener('change', () => {
    if(toggle.checked) {
        changeClass(priceMonth, 'showPrice', 'hiddenPrice')
        changeClass(priceYear, 'hiddenPrice', 'showPrice')
    } else {
        changeClass(priceMonth, 'hiddenPrice', 'showPrice')
        changeClass(priceYear, 'showPrice', 'hiddenPrice')

    }
})