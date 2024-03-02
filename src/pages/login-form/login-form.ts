import "./login-form.css";
import Block from "../../components/base/block.ts";
import Label from "../../components/label/label.ts";
import Input from "../../components/input/input.ts";
import Handlebars from 'handlebars';

export default class LoginForm extends Block {
    constructor(props) {
        super("loginForm", props);
    }

    componentDidMount() {}

    componentDidUpdate(oldProps, newProps) {
        if (oldProps !== newProps) {
            this._render(); // перевыводит компонент, чтобы отразить обновления
        }

        return true;
    }

    render() {
        const source = `<form class="login-form">
                    {{title}}
                    {{loginInput}}
                    {{loginLabel}}
                    {{passwordInput}}
                    {{passwordLabel}}
                    {{forgotPasswordLink}}
                    {{authorizeButton}}
                    {{link}}
                </form>`;
        // const source = `<form class="login-form">
        //             {{title}}
        //         </form>`;
        const loginFormTemplate = Handlebars.compile(source);
        const context = {
            title: this.props.title,
            loginInput: this.props.loginInput,
            loginLabel: this.props.loginLabel,
            passwordInput: this.props.passwordInput,
            passwordLabel: this.props.passwordLabel,
            forgotPasswordLink: this.props.forgotPasswordLink,
            authorizeButton: this.props.authorizeButton,
            link: this.props.link
        };
        console.log("При компиляции обкакались")
        return this.compile(source, context);
    }
}



