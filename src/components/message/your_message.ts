import Block from "../base/block.ts"

export default class YourMessage extends Block {
    constructor(props) {
        super("yourMessage", props);
    }

    render() {
        return `<span class="${this.props.class}">${this.props.text}</span>`;
    }
}