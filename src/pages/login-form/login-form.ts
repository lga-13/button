import Button from "../../components/button/button.ts";
import render from "../../utils/render.ts"
import "./login-form.css"
import Block from "../../components/base/block.ts";
import Input from "../../components/input/input.ts";



export default class loginForm extends Block {
    constructor(props) {
        super('form', props);
    }

    render() {
        const emailInput = new Input({
            class: "login-form__input",
            type: 'text',
            placeholder: 'Email',
        });
        const second_button = new Button({
            class: 'login-form__button',
            type: 'submit',
            text: 'Зарегистрироваться'
        })
        render("#app", emailInput)
        render("#app", second_button)
    }
}

