import Block from "../base/block.ts"

export default class ErrorTitle extends Block {
    constructor(props) {
        super("h1", props);
    }

    render() {
        return `<h1 class="${this.props.class}">${this.props.text}</h1>`;
    }
}