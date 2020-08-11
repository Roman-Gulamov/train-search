import { createBrowserHistory } from "history";

export const exitClick = () => {
    const oldDate = 'Thu, 01 Jan 1970 00:00:00 GMT';
    const history = createBrowserHistory();

    document.cookie = `login = ; path=/; expires=${oldDate}`;
    document.cookie = `password = ; path=/; expires= ${oldDate}`;
    localStorage.clear();
    
    history.push('/authorization');
    history.go(0);
}