import Block from "../base/block.ts"

export default class Input extends Block {
    constructor(props) {
        super("input", props);
    }

    setProps = nextProps => {
        if (!nextProps) {
            return;
        }
        Object.assign(this.props, nextProps); // Now update the props
    }

    render() {
        return `<input class="${this.props.class}" type="${this.props.type}" placeholder="${this.props.placeholder}"/>`;
    }
}