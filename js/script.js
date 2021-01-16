/**
 * NodeList.prototype.forEach() polyfill
 * https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach#Polyfill
 */
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

//Filter for Mobile

let menu_icon_wrapper = document.querySelector(".menu-icon-wrapper");
let menu_icon = document.querySelector(".menu-icon");
let sidebar = document.querySelector(".sidebar");

menu_icon_wrapper.addEventListener("click", function () {
    menu_icon.classList.toggle("menu-icon-active");
    sidebar.classList.toggle("sidebar--mobile-active");
});

// Show Cards
const btnShowMoreCards = document.querySelector(".btn-more");
const hiddenCards = document.querySelectorAll(".card-link--hidden");
btnShowMoreCards.addEventListener("click", function () {
    hiddenCards.forEach(function (card) {
        card.classList.remove("card-link--hidden");
    });
});

// Show/Hide widgets

const widgets = document.querySelectorAll(".widget");

widgets.forEach(function (widget) {
    widget.addEventListener("click", function (e) {
        if (e.target.classList.contains("widget__title")) {
            e.target.classList.toggle("widget__title--active");
            e.target.nextElementSibling.classList.toggle(
                "widget__body--hidden"
            );
        }
    });
});

// Location
const checkBoxAny = document.querySelector("#location-05");
const topAllLocationCheckBoxes = document.querySelectorAll(
    "[data-location-param]"
);

checkBoxAny.addEventListener("change", function () {
    if (checkBoxAny.checked) {
        topAllLocationCheckBoxes.forEach(function (item) {
            item.checked = false;
        });
    }
});

topAllLocationCheckBoxes.forEach(function (item) {
    item.addEventListener("change", function () {
        if (checkBoxAny.checked) {
            checkBoxAny.checked = false;
        }
    });
});

// Show 3 chekcboxes

const showMoreOptions = document.querySelector(".widget__btn-show-hidden");
const hiddenCheckBoxes = document.querySelectorAll(".checkbox--hidden");

showMoreOptions.addEventListener("click", function (e) {
    e.preventDefault();
    if (showMoreOptions.dataset.options == "hidden") {
        hiddenCheckBoxes.forEach(function (item) {
            item.style.display = "block";
        });
        showMoreOptions.innerText = "Скрыть дополнительные опции";
        showMoreOptions.dataset.options = "visible";
    } else if ((showMoreOptions.dataset.options = "visible")) {
        hiddenCheckBoxes.forEach(function (item) {
            item.style.display = "none";
        });
        showMoreOptions.innerText = "Показать еще";
        showMoreOptions.dataset.options = "hidden";
    }
});
