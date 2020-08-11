import { createBrowserHistory } from "history";

export const submitForm = (values) => {
    const history = createBrowserHistory();
    const date = new Date(Date.now() + 86400e3);
    document.cookie = `login = ${values.login}; expires= ${date}`; 
    document.cookie = `password = ${values.password}; expires= ${date}`;
    
    history.push('/train-search/#/search');
    history.go(0);
    window.location.reload(); // for mobile phone
}