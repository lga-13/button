import loginForm from "./pages/login-form/login-form.ts";
import render from "./utils/render.ts";



const form = new loginForm({
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
console.log("ААААААААААААААААААААААААААААА", form)
render("#app", form)