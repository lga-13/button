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
        return `<div>${this.props.text}</div>`
    }
}

function render(query, block) {
    const root = document.querySelector(query);
    root.appendChild(block.getContent())
    block.dispatchComponentDidMount();
    return root;
}

const button = new Button({
    text: 'Click me',
});

// app — это class дива в корне DOM
render(".app", button);
// Через секунду контент изменится сам, достаточно обновить пропсы
setTimeout(() => {
    button.setProps({
        text: 'Click me, please',
    });
}, 1000);