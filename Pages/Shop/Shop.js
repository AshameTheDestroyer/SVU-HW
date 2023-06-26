import GENRES from "../../Data/Genres.js";
import { CreateElement } from "../../main.global.js";
import ToggleButton from "../../Components/ToggleButton/ToggleButton.js";

const FORM = document.querySelector("form");

SetUpShop();

function SetUpShop() {
    const SORTED_TOGGLE_ELEMENT = new ToggleButton(
        "Sorted",
        undefined,
        "sorted-toggle-button",
        e => e.preventDefault(),
    );

    FORM.prepend(SORTED_TOGGLE_ELEMENT);

    SetUpGenreOptions();
}

function SetUpGenreOptions() {
    const SELECT_ELEMENT = FORM.querySelector("select");

    GENRES.forEach(genre => {
        const OPTION = CreateElement("option", SELECT_ELEMENT);
        OPTION.textContent = OPTION.value = genre;
    });
}