import Block from "../base/block.ts"

export default class ButtonWithImage extends Block {
    constructor(props) {
        super("button", props);
    }

    render() {
        return `
            <button class="${this.props.class}" type="${this.props.type}">
              <a href="${this.props.href}">
                <img src="${this.props.src}" alt="${this.props.alt}">
              </a>
            </button>
    `;
    }
}