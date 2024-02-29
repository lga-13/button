import Block from "../base/block.ts"

export default class Time extends Block {
    constructor(props) {
        super("time", props);
    }

    render() {
        return `<span class="${this.props.class}">${this.props.text}</span>`;
    }
}