import Block from "../base/block.ts"

export default class Title extends Block {
    constructor(props) {
        super("h2", props);
    }
    setProps = nextProps => {
        if (!nextProps) {
            return;
        }
        Object.assign(this.props, nextProps);
    }

    componentDidMount() {}
    render() {
        return `<h2 class="${this.props.class}">${this.props.text}</h2>`;
    }
}