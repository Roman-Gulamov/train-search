import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
    username: Yup.string()
        .matches(/test_super/, "Неверный логин")
        .max(10, "Слишком длинный логин")
        .required("Пожалуйста, введите логин"),
    password: Yup.string()
        .min(8, "В пароле должно быть не менее 8 симоволов")
        .matches(/Nf<U4f<rDbtDxAPn/, "Неправильный пароль")
        .max(16, "Слишком длинный пароль")
        .required("Пожалуйста, введите пароль")
});
