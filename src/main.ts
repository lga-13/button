import render from "./utils/render.ts";
import loginForm from "./pages/login-form/login-form.ts";
import registrationForm from "./pages/registration-form/registration-form.ts";
import Error404 from "./pages/error404/error404.ts";

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

switch (window.location.hash) {
    case '#login':
        render("#app", login);
        break;
    case '#registration':
        render("#app", registration);
        break;
    case '#error404':
        render("#app", registration);
        break;
}