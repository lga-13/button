import Block from "../base/block.ts"

export default class Link extends Block {
    constructor(props) {
        super("a", props);
    }
    render() {
        return `<a class="${this.props.class}" href="${this.props.href}">${this.props.text}</a>`;
    }
}