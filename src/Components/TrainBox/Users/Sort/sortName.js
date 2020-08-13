import { sortRef } from './ref';

export const sortName = (event) => {
    let sort = sortRef.current;
    let inputValue = event.target.value;
    let iterableUsers = [...sort.children];
    if (inputValue !== '') {
        iterableUsers.forEach((child) => {
            const search = child.innerText.search(RegExp(inputValue, "gi"));
            return search === -1 ? child.classList.add('d-none') : child.classList.remove('d-none');;
        });
    }
    else {
        iterableUsers.forEach((child) => {
            child.classList.remove('d-none');
        });
    }
}