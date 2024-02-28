import Block from "../base/block.ts"

export default class Img extends Block {
    constructor(props) {
        super("img", props);
    }

    render() {
        return `<img class="${this.props.class}" src="${this.props.src}" alt="${this.props.alt}">`;
    }
}