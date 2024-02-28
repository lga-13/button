import Block from "../base/block.ts"

export default class Input extends Block {
    constructor(props) {
        super("input", props);
    }

    render() {
        return `<input class="${this.props.class}" type="${this.props.type}" placeholder="${this.props.placeholder}"/>`;
    }
}