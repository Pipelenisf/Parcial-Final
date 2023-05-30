export enum buttonAttributes {
    "buttontext" = "buttontext"
}

export default class AppButton extends HTMLElement {
    
    buttontext?: string

    static get observedAttributes(){

        const formAtt: Record<buttonAttributes,null> = {
            buttontext: null,
        };
        return Object.keys(formAtt);
    }

    constructor(){
        super();
        this.attachShadow({mode:'open'})
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(propName: buttonAttributes, _:unknown, newValue:string){
        switch (propName) {
            default:
                this[propName] = newValue;
                break;
        }
    }

    render(){
        if(this.shadowRoot)
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../src/components/button/button.css">
        <button>${this.buttontext || "Publicar"}</button>
        `
    }
}

customElements.define("app-button", AppButton)