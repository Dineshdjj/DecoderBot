import { todayDeal } from "./todayDeal.js";

const slideBtnLeft = document.getElementById("slide-btn-left");
const slideBtnRight = document.getElementById("slide-btn-right");
const imgItem = document.querySelectorAll(".image-item");
const todayDealProductListEl = document.querySelector(".today_deals_product_list");
const today_deal_btn_prevEl = document.getElementById("today_deal_btn_prev");
const today_deal_btn_nextEl = document.getElementById("today_deal_btn_next");
const today_deals_product_itemEl = document.querySelectorAll(".today_deals_product_item");
const sidebarNavigationEl = document.getElementById("sidebar-container-navigation-id");
const sidebarOpenNavigationEl = document.getElementById("open-nav-sidebar");
const sidebarCloseNavigationEl = document.getElementById("sidebar-navigation-close");

let startSlider = 0;
let endSlider = (imgItem.length - 1) * 100;
let startProduct = 0;

slideBtnLeft.addEventListener("click", handleLeftBtn);
slideBtnRight.addEventListener("click", handleRightBtn);
sidebarOpenNavigationEl.addEventListener("click", toggleSidebarNavigation);
sidebarCloseNavigationEl.addEventListener("click", toggleSidebarNavigation);
today_deal_btn_prevEl.addEventListener("click", handlePrevProduct);
today_deal_btn_nextEl.addEventListener("click", handleNextProduct);

renderTodayDealProducts();
setInterval(renderSlideAuto, 2000);

function handleLeftBtn() {
    startSlider = (startSlider <= 0) ? startSlider + 100 : -(imgItem.length - 1) * 100;
    moveSlider();
}

function handleRightBtn() {
    startSlider = (startSlider > -(imgItem.length - 1) * 100) ? startSlider - 100 : 0;
    moveSlider();
}

function moveSlider() {
    imgItem.forEach(element => {
        element.style.transform = `translateX(${startSlider}%)`;
    });
}

function renderSlideAuto() {
    startSlider = (startSlider >= -endSlider + 100) ? startSlider - 100 : 0;
    moveSlider();
}

function toggleSidebarNavigation() {
    sidebarNavigationEl.classList.toggle("slidebar-show");
}

function renderTodayDealProducts() {
    let todayDealProductHTML = "";
    todayDeal.forEach(deal => {
        todayDealProductHTML += `
            <div class="today_deals_product_item">
                <div class="todayDeals_product_image">
                    <img src="${deal.img}" />
                </div>
                <div class="discount_Contaienr">
                    <a href="#">Up to ${deal.discount}% off</a>
                    <a href="#">${deal.DealOfDay}</a>
                </div>
                <p>${deal.desc}</p>
            </div>
        `;
    });
    todayDealProductListEl.innerHTML = todayDealProductHTML;
}

function handlePrevProduct() {
    startProduct = (startProduct < 0) ? startProduct + 500 : startProduct;
    moveProductSlider();
}

function handleNextProduct() {
    startProduct = (startProduct > -1500) ? startProduct - 500 : startProduct;
    moveProductSlider();
}

function moveProductSlider() {
    today_deals_product_itemEl.forEach(item => {
        item.style.transform = `translateX(${startProduct}%)`;
    });
}
