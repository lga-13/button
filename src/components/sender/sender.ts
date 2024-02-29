import Block from "../base/block.ts"

export default class Sender extends Block {
    constructor(props) {
        super("sender", props);
    }

    render() {
        return `<span class="${this.props.class}">${this.props.text}</span>`;
    }
}