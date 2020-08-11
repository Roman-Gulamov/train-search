import { createBrowserHistory } from "history";

export const submitForm = (values) => {
    let date = new Date(Date.now() + 86400e3);
    document.cookie = `login = ${values.login}; expires= ${date}`; 
    document.cookie = `password = ${values.password}; expires= ${date}`;
    setTimeout(() => {
        const history = createBrowserHistory();
        history.push('/search');
        history.go(0);
    }, 500);
}