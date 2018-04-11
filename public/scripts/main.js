"use strict";

var witchShop = {};

witchShop.products = {

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
    }
};

var cartTag = document.querySelector(".cart");
var cartModal = document.querySelector("#shopping-cart");
var close = document.querySelector(".close");
var buyBtns = document.querySelectorAll(".add-to-cart");
var cartItems = document.querySelector(".shopping-cart-items");
var costList = document.querySelector(".cost");
var total = document.querySelector(".total");
var addedItem = document.getElementsByName("add");
var itemID = void 0;
var itemPrice = void 0;

// function totalCost() {
//     console.log(itemPrice);
// }


witchShop.events = function () {
    cartTag.onclick = function () {
        showCart();
    };
    close.onclick = function () {
        closeModal();
    };
    buyBtns.forEach(function (buyBtn) {
        return buyBtn.addEventListener('click', handleUpdate);
    });
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
        var listItem = document.createElement("LI");
        var listText = document.createTextNode(witchShop.products[itemID].description);
        listItem.appendChild(listText);
        cartItems.appendChild(listItem);
        var listItemPrice = document.createElement("LI");
        var listPriceText = document.createTextNode(itemPrice);
        listItemPrice.appendChild(listPriceText);
        costList.appendChild(listItemPrice);
        totalCost(itemPrice);
    };
};

witchShop.init = function () {
    witchShop.events();
};

witchShop.init();