import { createBrowserHistory } from "history";

export const exitClick = (event) => {
    event.preventDefault();

    const history = createBrowserHistory();
    const oldDate = 'Thu, 01 Jan 1970 00:00:00 GMT';
    
    document.cookie = `login = ; path=/train-search; expires=${oldDate}`;
    document.cookie = `password = ; path=/train-search; expires= ${oldDate}`;
    localStorage.clear();
    
    history.push('/train-search/#/authorization');
    history.go(0);
    window.location.reload(); // for mobile phone
}