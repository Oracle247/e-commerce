const lightboxImg = document.querySelector('.lightbox__img');
const lightboxPrev = document.querySelector('.lightbox-prev');
const lightboxNext = document.querySelector('.lightbox-next');
const productBtn = document.querySelector('.product__btn')
const productNumberAdd = document.querySelector('.product__number-add');
const productNumberSub = document.querySelector('.product__number-subtract');
const productNumberVal = document.querySelector('.product__number__value');
const headerCart = document.querySelector('.header__cart');
const cart = document.querySelector('.cart');
const headerCartNumber = document.querySelector('.header__cart__number');

var index = 0;
var productNumber = 0;

const products = [
    {
        name: 'Fall Limited Edition Sneakers',
        desc: `These low-profile sneakers are your perfect casual wear companion. Featuring a 
        durable rubber outer sole, they’ll withstand everything the weather can offer.`,
        oldPrice: 250,
        newPrice: 125,
        src: './images/image-product-1.jpg'
    },
    {
        name: 'Fall Limited Edition Sneakers',
        desc: `These low-profile sneakers are your perfect casual wear companion. Featuring a 
        durable rubber outer sole, they’ll withstand everything the weather can offer.`,
        oldPrice: 250,
        newPrice: 125,
        src: './images/image-product-2.jpg' 
    },
    {
        name: 'Fall Limited Edition Sneakers',
        desc: `These low-profile sneakers are your perfect casual wear companion. Featuring a 
        durable rubber outer sole, they’ll withstand everything the weather can offer.`,
        oldPrice: 250,
        newPrice: 125,
        src: './images/image-product-3.jpg'
    },
    {
        name: 'Fall Limited Edition Sneakers',
        desc: `These low-profile sneakers are your perfect casual wear companion. Featuring a 
        durable rubber outer sole, they’ll withstand everything the weather can offer.`,
        oldPrice: 250,
        newPrice: 125,
        src: './images/image-product-4.jpg'
    },
]

const cartProducts = [];


console.log("hi");
render(productNumberVal, productNumber);

lightboxPrev.addEventListener('click', () => {
    if(index == 0) return;
    index = index - 1;
    console.log(index);
    var str = `<img src=${products[index].src} alt="">`;
    render(lightboxImg, str);
})
;
lightboxNext.addEventListener('click', () => {
    if(index == 3) return;
    index = index + 1;
    console.log(index);
    var str = `<img src=${products[index].src} alt="">`;
    render(lightboxImg, str);
});

productNumberAdd.addEventListener('click', () => {
    productNumber = productNumber + 1;
    render(productNumberVal, productNumber);
});

productNumberSub.addEventListener('click', () => {
    if(productNumber > 0) {
        productNumber = productNumber - 1;
        render(productNumberVal, productNumber);
    }
});

productBtn.addEventListener('click', () => {
    render(headerCartNumber, productNumber);
    var temp = products[index].newPrice;
    products[index].newPrice = products[index].newPrice * productNumber;
    addToCart(products[index]);
    products[index].newPrice;
});         

headerCart.addEventListener('click', () => {
    cart.classList.toggle('hidden');
});

function addToCart(product) {
    cartProducts.push(product);
    console.log(cartProducts);
}

function removeFromCart(product) {
    cartProducts.splice(cartProducts.indexOf(product), 1); 
}

function render(node, templateString) {
    // console.log('in render' + productNumber);    
    node.innerHTML = templateString;
}

