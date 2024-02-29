import Block from "../base/block.ts"

export default class Input extends Block {
    constructor(props) {
        super("button", props);
    }

    render() {
        return `<button class="${this.props.class}" type="${this.props.type}"> ${this.props.text}</button>`;
    }
}