import Block from "../base/block.ts"

export default class Count extends Block {
    constructor(props) {
        super("count", props);
    }

    render() {
        return `<span class="${this.props.class}">${this.props.text}</span>`;
    }
}