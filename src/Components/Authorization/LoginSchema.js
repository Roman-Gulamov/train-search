import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
    login: Yup.string()
        .email("Неверный формат почты")
        .required("Пожалуйста, укажите вашу почту"),
    password: Yup.string()
        .matches(/^[^А-Яа-яЁё]+$/, "Не используйте кириллицу")
        .min(8, "В пароле должно быть не менее 8 симоволов")
        .required("Пожалуйста, введите пароль")
});
