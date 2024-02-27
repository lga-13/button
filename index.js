class Button extends Block {
    constructor(props) {
        super("button", props);
    }

    setProps = nextProps => {
        if (!nextProps) {
            return;
        }
        Object.assign(this.props, nextProps); // Now update the props
    }
    componentDidMount() {}


    render() {
        return `<button class="${this.props.class}" type="${this.props.type}">${this.props.text}</button>`;
    }
}

function render(query, block) {
    const root = document.querySelector(query);
    root.appendChild(block.getContent())
    block.dispatchComponentDidMount();
    return root;
}

const button = new Button({
    class: 'login-form__button',
    type: 'submit',
    text: 'Авторизоваться'
});

// app — это class дива в корне DOM
render(".app", button);
// Через секунду контент изменится сам, достаточно обновить пропсы
