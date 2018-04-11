const witchShop = {};

witchShop.products= {

        bravery: {
            price: 23,
            description: "liquid courage"
        },
        love: {
            price: 37,
            description: "love potion no.8"
        },
        fortune: {
            price: 25,
            description: "liquid luck"
        },
        money: {
            price: 18,
            description: "potion of good fortune"
        },

        luck: {
            price: 17,
            description: "charm of good luck"
        },
        allure: {
            price: 22,
            description: "charm of allure"
        },
        duplicity: {
            price: 31,
            description: "charm of duplicity"
        },
        protection: {
            price: 26,
            description: "charm of protection"
        },

        minor: {
            price: 56,
            description: "minor inconvenience"
        },
        major: {
            price: 88,
            description: "major inconvenience"
        },
        sleep: {
            price: 45,
            description: "sleeping draught"
        },
        confusion: {
            price: 38,
            description: "curse of confusion"
        },
}

const cartTag = document.querySelector(".cart");
const cartModal = document.querySelector("#shopping-cart");
const close = document.querySelector(".close");
const buyBtns = document.querySelectorAll(".add-to-cart");
const cartItems = document.querySelector(".shopping-cart-items");
const costList = document.querySelector(".cost");
const total = document.querySelector(".total");
const addedItem = document.getElementsByName("add");
let itemID;
let itemPrice;


// function totalCost() {
//     console.log(itemPrice);
// }



witchShop.events = function () {
    cartTag.onclick = function () { showCart() };
    close.onclick = function () { closeModal() };
    buyBtns.forEach(buyBtn => buyBtn.addEventListener('click', handleUpdate));
    function showCart() {
        cartModal.style.display = "block";
    };

    function closeModal() {
        cartModal.style.display = "none";
    };
    function handleUpdate() {
        itemID = this.id;
        itemPrice = witchShop.products[itemID].price;
        addToCart(itemID, itemPrice);
    }
    function addToCart() {
        const listItem = document.createElement("LI");
        const listText = document.createTextNode(witchShop.products[itemID].description);
        listItem.appendChild(listText);
        cartItems.appendChild(listItem);
        const listItemPrice = document.createElement("LI");
        const listPriceText = document.createTextNode(itemPrice);
        listItemPrice.appendChild(listPriceText);
        costList.appendChild(listItemPrice);
        totalCost(itemPrice);
    };
};

witchShop.init = function () {
    witchShop.events();
};

witchShop.init();
