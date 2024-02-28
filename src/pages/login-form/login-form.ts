import "./login-form.css"
import Block from "../../components/base/block.ts";
import Title from "../../components/title/title.ts";
import Label from "../../components/label/label.ts";
import Input from "../../components/input/input.ts";
import Link from "../../components/tooltips/login-form__forgot-password.ts";
import Button from "../../components/button/button.ts";



export default class loginForm extends Block {
    constructor(props) {
        super('login-form', props);
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

    render() {
        const title = new Title({
            class: 'login-form__title',
            text: 'Войти'
        });
        const forgotPasswordLink = new Link({
            class: 'login-form__forgot-password',
            type: 'text',
            text: 'Забыли пароль?'
        });
        const authorizeButton  = new Button({
            class: 'login-form__button',
            type: 'submit',
            text: 'Авторизоваться'
        });
        const registrationLink = new Link({
            class: 'login-form__registration',
            type: 'text',
            text: 'Еще не зарегистрированы?'
        });

        const loginFieldsHtml = this.loginFields.map(field =>
            `${field.label.render()}
         ${field.input.render()}`
        ).join('');

        return `
        <form class=login-form>
        ${title.render()}
        ${loginFieldsHtml}
        ${forgotPasswordLink.render()}
        ${authorizeButton.render()}
        ${registrationLink.render()}
        </form>
    `;
    }
}



