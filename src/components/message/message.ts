import Block from "../base/block.ts"

export default class ErrorMessage extends Block {
    constructor(props) {
        super("p", props);
    }

    render() {
        return `<p class="${this.props.class}">${this.props.text}</p>`;
    }
}