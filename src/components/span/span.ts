import Block from "../base/block.ts"

export default class Span extends Block {
    constructor(props) {
        super("span", props);
    }

    render() {
        return `<span class="${this.props.class}">${this.props.text}</span>`;
    }
}