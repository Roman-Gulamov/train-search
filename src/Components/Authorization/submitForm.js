import { createBrowserHistory } from "history";
import Axios from "axios";

export const submitForm = (values) => {
    const axios = Axios.create();
    axios.post("https://emphasoft-test-assignment.herokuapp.com/api-token-auth/", {...values}, {
        header: {
            "Access-Control-Allow-Origin": "*"
        }
    })
    .then((response) => {
        localStorage.setItem("token", response.data.token);
    }).then(() => {
        const history = createBrowserHistory();
        const date = new Date(Date.now() + 86400e3);

        document.cookie = `username = ${values.username}; expires= ${date}`; 
        document.cookie = `password = ${values.password}; expires= ${date}`;

        history.push('/train-search/#/search');
        history.go(0);
        window.location.reload(); // for mobile phone
    })
}