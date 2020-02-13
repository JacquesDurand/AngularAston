class AppText extends HTMLElement {

    constructor() {
        //super() appelle le constructeur de la classe parente (HTMLELEMENT)
        super();
        this.shadow = this.attachShadow({
            mode: 'open'
        })
        this.inputText = null;
        this.displayer = null;
    }

    connectedCallback() {
        this.shadow.innerHTML = `
        <style>
            h1 {
                color: royalblue;
            }
            input[type="text"]{
                border ; 1px solid #333;
                border-radius : 4px;
                padding : 4px;
            }
            .app-text {
                margin-bottom : 10px;
            }
        </style>
        <div class="app-text">
            <input type="text" id="app-input-text">
            <span id="app-text-displayer"></span>
        </div>
        `;
        this.inputText = this.shadow.querySelector('#app-input-text');
        this.displayer = this.shadow.querySelector('#app-text-displayer');

        this.inputText.addEventListener('keyup', event => {
            this.displayer.textContent = event.target.value;
        })
    }
};

// Mise en relation de la balise HTML et de la classe Javascript
window.customElements.define('app-text', AppText); 