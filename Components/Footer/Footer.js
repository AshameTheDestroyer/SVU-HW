import CREDITS from "../../Data/Credits.js";
import { ConvertToHTMLElement } from "../../main.global.js";

const FOOTER_ELEMENT = ConvertToHTMLElement(`
    <footer>
        <p>Credits:</p>
        <marquee id="credits-displayer">
            ${CREDITS.map(credit => credit.ID).join(" ")}
        </marquee>
    </footer>
`);

SetUpFooter();

function SetUpFooter() {
    document.body.append(FOOTER_ELEMENT);
}