import Block from "../base/block.ts"

export default class Link extends Block {
    constructor(props) {
        super("a", props);
    }
    setProps = nextProps => {
        if (!nextProps) {
            return;
        }
        Object.assign(this.props, nextProps);
    }

    componentDidMount() {}
    render() {
        return `<a class="${this.props.class}" href="${this.props.href}">${this.props.text}</a>`;
    }
}