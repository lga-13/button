import "./registration-form.css";
import Block from "../../components/base/block.ts";
import FormTitle from "../../components/title/form-title.ts";
import Label from "../../components/label/label.ts";
import Input from "../../components/input/input.ts";
import Link from "../../components/links/link.ts";
import Button from "../../components/buttons/button.ts";

export default class registrationForm extends Block {
    constructor(props) {
        super('registration-form', props);
        this.registrationFields = this.props.registrationFields.map(field => {
            return {
                'label': new Label({
                    'class': 'registration-form__label',
                    'for': field.name,
                    'text': field.nameru
                }),
                'input': new Input({
                    'class': 'registration-form__input',
                    'type': 'text',
                    'id': field.name,
                    'name': field.nameru,
                    'placeholder': ''
                })
            };
        });
    }

    render() {
        const title = new FormTitle({
            class: 'registration-form__title',
            text: 'Регистрация'
        });
        const registrationButton  = new Button({
            class: 'registration-form__button',
            type: 'submit',
            text: 'Зарегистрироваться'
        });
        const link = new Link({
            class: 'registration-form__login',
            href: "#",
            text: 'Войти'
        });

        const registrationFieldsHtml = this.registrationFields.map(field =>
            `${field.label.render()}
         ${field.input.render()}`
        ).join('');

        return `
        <form class=registration-form>
        ${title.render()}
        ${registrationFieldsHtml}
        ${registrationButton.render()}
        ${link.render()}
        </form>
    `;
    }
}



