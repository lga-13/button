import Block from "../base/block.ts";
import Handlebars from "handlebars";

export default class FormTitle extends Block {
    constructor(props) {
        super("h2", props);
    }

    render() {
        return `<h2 class=class="${this.props.class}">${this.props.text}</h2>`;
    }
}