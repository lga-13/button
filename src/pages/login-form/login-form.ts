import Button from "../../components/button/button.ts";
import "./login-form.css"
import Block from "../../components/base/block.ts";
import Input from "../../components/input/input.ts";
import Label from "../../components/label/label.ts";
import Title from "../../components/title/title.ts";
import Link from "../../components/tooltips/login-form__forgot-password.ts";
import render from "../../utils/render.ts";



export default class loginForm extends Block {
    constructor(props) {
        super('form', props);
        this.loginFields = this.props.loginFields.map(field => {
            return {
                'label': new Label({
                    'class': 'login-form__label',
                    'for': field.name,
                    'text': field.nameru
                }),
                'input': new Input({
                    'class': 'login-form__input',
                    'type': 'text',
                    'id': field.name,
                    'name': field.nameru,
                    'placeholder': ''
                })
            };
        });
    }

    setProps = nextProps => {
        if (!nextProps) {
            return;
        }
        Object.assign(this.props, nextProps);
    }

    componentDidMount() {}


    render() {
        const title = new Title({
            class: 'login-form__title',
            text: 'Войти'
        })
        const forgotPasswordLink = new Link({
            class: 'login-form__forgot-password',
            type: 'text',
            text: 'Забыли пароль?'
        })
        const authorizeButton  = new Button({
            class: 'login-form__button',
            type: 'submit',
            text: 'Авторизоваться'
        })

        this.element.appendChild(title.getContent());
        console.log(this.element)
        this.loginFields.forEach(field => {
            this.element.appendChild(field.label.getContent());
            this.element.appendChild(field.input.getContent());
        });
        this.element.appendChild(forgotPasswordLink.element);
        this.element.appendChild(authorizeButton.element)
        return this.element

    }
}



