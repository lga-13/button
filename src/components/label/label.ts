import Block from "../base/block.ts"

export default class Label extends Block {
    constructor(props) {
        super("label", props);
    }

    render() {
        return `<label class="${this.props.class}">${this.props.text}</label>`;
    }
}