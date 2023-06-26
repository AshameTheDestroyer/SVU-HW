import { ConvertToHTMLElement } from "../../main.global.js";

const
    ANCHOR_TITLES = [
        "Home",
        "Shop",
        "Cart",
        "Checkout",
        "Book Preview",
    ],
    NAVIGATION_BAR_HTML_CONTENT = `
        <nav id="navigation-bar">
        ${ANCHOR_TITLES.reduce((previous, current) =>
        previous + `<a href="../../Pages/${current}/${current}.html">${current}</a>\n`, "")}
        </nav>
    `,
    HEADER_ELEMENT = ConvertToHTMLElement(`
        <header>
            <figure id="logo">
                <h1>SVU HW</h1>
            </figure>

            <div id="navigation-bar-wrapper">
                ${NAVIGATION_BAR_HTML_CONTENT}
            </div>

            <div id="profile-displayer">
                <button id="profile-button">
                    <a href="../../Pages/Profile/Profile.html"></a>
                    <img src="../../Images/Griny4v.png" alt="profile_picture" />
                </button>
                <h3>Hashem Wannous<h3>
            </div>
            
            <button id="navigation-bar-button">
            ${new Array(3).fill(null)
            .reduce((previous, _, i, array) =>
                previous + `<div style="--index: ${array.length - i};"></div>`, "")}
            </button>
        </header>
    `);

SetUpHeader();

function SetUpHeader() {
    document.body.prepend(HEADER_ELEMENT);

    SetUpNavigationBarButton();
}

function SetUpNavigationBarButton() {
    const
        NAVIGATION_BAR_BUTTON = document.querySelector("#navigation-bar-button"),
        HEADER_ELEMENT = document.querySelector("header");

    NAVIGATION_BAR_BUTTON.addEventListener("click", _ =>
        HEADER_ELEMENT.classList.toggle("navigation-bar-active"));
}