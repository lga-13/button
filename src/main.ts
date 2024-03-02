import render from "./utils/render.ts";
import loginForm from "./pages/login-form/login-form.ts";
import registrationForm from "./pages/registration-form/registration-form.ts";
import Error404 from "./pages/error404/error404.ts";
import Error500 from "./pages/error500/error500.ts";
import settingsPage from "./pages/settings-page/settings-page.ts";
import Chats from "./pages/chats/chats.ts";
import chat1 from "./public/static/img/chat1.svg";
import chat2 from "./public/static/img/chat2.svg";
import chat3 from "./public/static/img/chat3.svg";
import chat4 from "./public/static/img/chat4.svg";
import chat5 from "./public/static/img/chat5.svg";
import chat6 from "./public/static/img/chat6.svg";
import chat7 from "./public/static/img/chat7.svg";
import chat8 from "./public/static/img/chat8.svg";
import chat0 from "./public/static/img/chat0.svg";
import FormTitle from "./components/title/form-title.ts";
import Link from "./components/links/link.ts";
import Button from "./components/buttons/button.ts";
import Label from "./components/label/label.ts";
import Input from "./components/input/input.ts";


const login = new loginForm(
    {
        title: new FormTitle({
                class: 'login-form__title',
                text: 'Войти',
                settings: {withInternalID: true},
            }
        ),
        forgotPasswordLink: new Link(
            {
                class: 'login-form__forgot-password',
                type: 'text',
                text: 'Забыли пароль?',
                settings: {withInternalID: true},
            }
        ),
        authorizeButton: new Button({
                class: 'login-form__button',
                type: 'submit',
                text: 'Авторизоваться',
                events: {
                    click: event => {
                        console.log("Клик на кнопку инпута обнаружен");
                        console.log(event);
                    }
                },
                settings: {withInternalID: true},
            }
        ),
        link: new Link({
                class: 'login-form__registration',
                href: "#",
                text: 'Еще не зарегистрированы?',
                settings: {withInternalID: true},
        }),
        loginInput: new Input( {
                class: 'login-form__input',
                type: 'text',
                id: "login",
                name: "Логин",
                placeholder: '',
                settings: {withInternalID: true}
        }),
        loginLabel: new Label({
                class: 'login-form__label',
                for: "login",
                text: "Логин",
                settings: {withInternalID: true}
        }),
        passwordInput: new Input( {
            class: 'login-form__input',
            type: 'text',
            id: "password",
            name: "Пароль",
            placeholder: '',
            settings: {withInternalID: true}
        }),
        passwordLabel: new Label({
            class: 'login-form__label',
            for: "password",
            text: "Пароль",
            settings: {withInternalID: true}
        }),
        settings: {withInternalID: true},});

render("#app", login)


const registration = new registrationForm({
    registrationFields: [
        {
            name: "email",
            nameru: "Почта",
        },
        {
            name: "login",
            nameru: "Логин",
        },
        {
            name: "first-name",
            nameru: "Имя",
        },
        {
            name: "second-name",
            nameru: "Фамилия",
        },
        {
            name: "phone",
            nameru: "Телефон",
        },
        {
            name: "password",
            nameru: "Пароль",
        },
        {
            name: "repeat password",
            nameru: "Повторите пароль",
        }
    ]
});

render("#app", registration)

const error404 = new Error404( {})

render("#app", error404)

const error500  = new Error500( {})

render("#app", error500)

const chats = new Chats( {
    chatData: [
        {
            img: chat1,
            time: "11:05",
            sender: "Мама",
            yourMessage: "Вы:",
            content: " Стикер",
        },
        {
            img: chat2,
            time: "12:25",
            sender: "Папа",
            content: "Изображение",
            count: "2"
        },
        {
            img: chat3,
            time: "16:09",
            sender: "Леха",
            content: "Можно или сегодня или завтра",
            count: "4"
        },
        {
            img: chat4,
            time: "21:49",
            sender: "Людмила",
            content: " Томат (Solánum lycopérsicum) — однолетнее или многолет..."
        },
        {
            img: chat5,
            time: "Ср",
            sender: "Брат",
            yourMessage: "Вы:",
            content: " Круто!"
        },
        {
            img: chat6,
            time: "Ср",
            sender: "Андрей",
            content: " не ниже +5 и не выше +43"
        },
        {
            img: chat7,
            time: "Пт",
            sender: "Вода ОФис",
            content: "Акции на питьевую воду 19 литров для всех клиентов ...",
            count: "2"
        },
        {
            img: chat0,
            time: "Сб",
            sender: "Алена",
            content: "Друзья, у меня для вас особенный выпуск новостей!...",
            count: "2"
        },
        {
            img: chat8,
            time: "12 июня 2022",
            sender: "Павел",
            content: "Королевский питон (Python reg..."
        },
    ]
});

render("#app", chats)

const settingspage = new settingsPage({
    settingsPageFields: [
        {
            name: "login",
            nameru: "Логин",
            value: "",
        },
        {
            name: "first-name",
            nameru: "Имя",
            value: "",
        },
        {
            name: "second-name",
            nameru: "Фамилия",
            value: "",
        },
        {
            name: "email",
            nameru: "Почта",
            value: "",
        },
        {
            name: "phone",
            nameru: "Телефон",
            value: "",
        }
    ]
});

render("#app", settingspage)

switch (window.location.hash) {
    case '#login':
        render("#app", login);
        break;
    case '#registration':
        render("#app", registration);
        break;
    case '#error404':
        render("#app", error404);
        break;
    case '#error500':
        render("#app", error500);
        break;
    case '#settingspage':
        render("#app", settingspage);
        break;
    case '#chats':
        render("#app", chats);
        break;
}