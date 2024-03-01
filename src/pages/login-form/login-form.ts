import "./login-form.css";
import Block from "../../components/base/block.ts";
import FormTitle from "../../components/title/form-title.ts";
import Label from "../../components/label/label.ts";
import Input from "../../components/input/input.ts";
import Link from "../../components/links/link.ts";
import Button from "../../components/buttons/button.ts";
import Handlebars from 'handlebars';

interface IFormElement extends HTMLInputElement {
    value: string;
    name: string;
}

export default class LoginForm extends Block {
    constructor(props) {
        super("loginForm", props);

        this.loginFields = props.loginFields.map(field => ({
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
        }));
    }

    componentDidMount() {
        console.log("LoginForm: Компонент был смонтирован.")
        return new Promise(resolve => setTimeout(resolve, 10000000));
    }

    componentDidUpdate(oldProps, newProps) {
        if (oldProps.loginFields !== newProps.loginFields) {
            this.loginFields = newProps.loginFields.map(field => ({
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
            }));

            this._render(); // перевыводит компонент, чтобы отразить обновления
        }

        return true;
    }

    render() {
        console.log("LoginForm: Вызван рендер")
        const { __id } = this.props;

        const source = `<form class="login-form">
                    {{title}}
                    {{#each loginFieldsHtml}}
                        {{{this}}}
                    {{/each}}
                    {{forgotPasswordLink}}
                    {{authorizeButton}}
                    {{link}}
                </form>`;
        console.log(typeof source);
        const loginFormTemplate = Handlebars.compile(source);
        console.log("id формы=", __id);
        const title = new FormTitle({
            class: 'login-form__title',
            text: 'Войти'
        });
        const forgotPasswordLink = new Link({
            class: 'login-form__forgot-password',
            type: 'text',
            text: 'Забыли пароль?'
        });
        const authorizeButton = new Button({
            class: 'login-form__button',
            type: 'submit',
            text: 'Авторизоваться',
            events: {
                click: event => {
                    console.log("Клик на кнопку инпута обнаружен");
                    console.log(event);
                }
            }
        });
        const link = new Link({
            class: 'login-form__registration',
            href: "#",
            text: 'Еще не зарегистрированы?'
        });

        const context = {
            title: title.render(),
            loginFieldsHtml: this.loginFields.map(field => `${field.label.render()} ${field.input.render()}`).join(''),
            forgotPasswordLink: forgotPasswordLink.render(),
            authorizeButton: authorizeButton.render(),
            link: link.render()
        };

        return this.compile(loginFormTemplate(context), context);
    }
}



