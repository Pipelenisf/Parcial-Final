import '../components/export'
import {default as formAttributes} from '../components/form/form'
import { buttonAttributes } from '../components/button/button';

export default class Dashboard extends HTMLElement {


    constructor(){
        super();
        this.attachShadow({mode:'open'})
    }

    connectedCallback(){
        this.render();
    }


    render(){
        if(this.shadowRoot)
        this.shadowRoot.innerHTML = ``

        const formFigure = this.ownerDocument.createElement("app-form")
        formFigure.setAttribute(buttonAttributes.buttontext, "Publicar")

        this.shadowRoot?.appendChild(formFigure) 
    }   
}

customElements.define("app-dashboard", Dashboard)