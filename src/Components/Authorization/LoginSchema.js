import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
    username: Yup.string()
        .min(3, "В логине должно быть не менее 3 симоволов")
        .max(30, "Слишком длинный логин")
        .required("Пожалуйста, введите логин"),
    password: Yup.string()
        .matches(/^[^А-Яа-яЁё]+$/, "Не используйте кириллицу")
        .min(8, "В пароле должно быть не менее 8 симоволов")
        .required("Пожалуйста, введите пароль")
});