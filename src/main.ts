import render from "./utils/render.ts";
import loginForm from "./pages/login-form/login-form.ts";
import registrationForm from "./pages/registration-form/registration-form.ts";
import Error404 from "./pages/error404/error404.ts";
import Error500 from "./pages/error500/error500.ts";
import settingsPage from "./pages/settings-page/settings-page.ts";

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
}