import Block from "../base/block.ts"

export default class FormTitle extends Block {
    constructor(props) {
        super("h2", props);
    }

    render() {
        return `<h2 class="${this.props.class}">${this.props.text}</h2>`;
    }
}