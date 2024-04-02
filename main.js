const menuemail = document.querySelector('.navbar-email');
const desktopmenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('.menu');
const mobilemenu = document.querySelector('.mobile-menu');


const menuCarrito = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');

const cards = document.querySelector('.cards-container');

menuemail.addEventListener('click',toggleDesktopMenu)
menuHamIcon.addEventListener('click',togglemobileMenu)
menuCarrito.addEventListener('click',toggleCarritoaside)
function toggleDesktopMenu(){
    desktopmenu.classList.toggle('inactive');
}

function togglemobileMenu(){
    mobilemenu.classList.toggle('inactive');
}

function toggleCarritoaside(){
    shoppingCartContainer.classList.toggle('inactive');
}

const productList =[];
productList.push({
    name: 'Tablet',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Tom',
    price: 120000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Mio',
    price: 110000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

for( product of productList ){
    const productCard = document.createElement('div')
    productCard.classList.add('product-card')
    const Productimg = document.createElement('img')
    Productimg.setAttribute('src',product.image)
    const productInfo = document.createElement('div')
    productInfo.classList.add('product-info')

    const productInfodiv = document.createElement('div')
    const productPrice = document.createElement('p')
    const productName = document.createElement('p')
    productPrice.innerText = product.price
    productName.innerText = product.name

    const productInfoFigure = document.createElement('figure')
    const productImgCart = document.createElement('img')
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')

    productInfoFigure.appendChild(productImgCart)
    productInfodiv.appendChild(productName)
    productInfodiv.appendChild(productPrice)
    productInfo.appendChild(productInfodiv)
    productInfo.appendChild(productInfoFigure)
    productCard.appendChild(Productimg)
    productCard.appendChild(productInfo)
    

    cards.appendChild(productCard)

}