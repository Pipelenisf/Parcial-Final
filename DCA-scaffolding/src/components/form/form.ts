import { buttonAttributes } from "../button/button";

export enum formAttributes {
    "input" = "input",
    "buttontext" = "buttontext"
}

export default class AppForm extends HTMLElement {
    
    input?: string
    buttontext?: string

    static get observedAttributes(){

        const formAtt: Record<formAttributes,null> = {
            input: null,
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

    attributeChangedCallback(propName: formAttributes, _:unknown, newValue:string){
        switch (propName) {
            default:
                this[propName] = newValue;
                break;
        }
    }

    render(){
        if(this.shadowRoot)
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../src/components/form/form.css">
        `

        const formSection = this.ownerDocument.createElement("section")

            const form = this.ownerDocument.createElement("div")
            form.setAttribute("class", "form")

                const inputRecipeTitle = this.ownerDocument.createElement("input")
                inputRecipeTitle.setAttribute("class", "title")
                inputRecipeTitle.setAttribute("placeholder", "Inserte el título de la receta")
                form.appendChild(inputRecipeTitle)

                const inputRecipeDetl = this.ownerDocument.createElement("input")
                inputRecipeDetl.setAttribute("class", "description")
                inputRecipeDetl.setAttribute("placeholder", "Inserte la receta")
                form.appendChild(inputRecipeDetl)

                const inputRecipeIgr = this.ownerDocument.createElement("input")
                inputRecipeIgr.setAttribute("class", "ingredients")
                inputRecipeIgr.setAttribute("placeholder", "Inserte los ingredientes")
                form.appendChild(inputRecipeIgr)

            formSection.appendChild(form)

            const button = this.ownerDocument.createElement("app-button")
            formSection.appendChild(button);

        this.shadowRoot?.appendChild(formSection)
    }   
}

customElements.define("app-form", AppForm)