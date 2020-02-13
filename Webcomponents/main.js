class AppText extends HTMLElement {

    constructor() {
        //super() appelle le constructeur de la classe parente (HTMLELEMENT)
        super();
        this.inputText = null;
        this.displayer = null;
    }

    connectedCallback() {
        this.innerHTML = `
        <style></style>
        <div class="app-text">
            <input type="text" id="app-input-text">
            <span id="app-text-displayer"></span>
        </div>
        `;
    }
};

window.customElements.define('app-text', AppText); // Mise en relation de la balise HTML et de la classe Javascript