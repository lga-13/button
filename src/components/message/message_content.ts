import Block from "../base/block.ts"

export default class ContentMessage extends Block {
    constructor(props) {
        super("contentMessage", props);
    }

    render() {
        return `<span class="${this.props.class}">${this.props.text}</span>`;
    }
}
