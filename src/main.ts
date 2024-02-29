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

const login = new loginForm({
    loginFields: [
        {
            name: "login",
            nameru: "Логин",
        },
        {
            name: "password",
            nameru: "Пароль",
        }
    ]
});

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