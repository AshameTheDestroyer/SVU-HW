import ToggleButton from "../../Components/ToggleButton/ToggleButton.js";

const OPTION_SECTION = document.querySelector("#option-section");

SetUpCheckout();

function SetUpCheckout() {
    const GIFT_WRAP_TOGGLE_BUTTON = ToggleButton(
        "Gift wrap these items",
        undefined,
        "gift-wrap-toggle-button"
    );

    OPTION_SECTION.append(GIFT_WRAP_TOGGLE_BUTTON);
}