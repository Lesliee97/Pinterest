import { components } from '../vistas/index.js';
// import { window } from '../vistas/home.js'
 import {getData} from '../vistas/home.js'


export const changeTmp = (hash) => {
    const sectionMain = document.getElementById('container');
    sectionMain.innerHTML = '';
    switch (hash) {
        case '': 
        sectionMain.appendChild(components.login());
        break;
        case '#/home': 
        sectionMain.appendChild(components.home());
        getData();
        break;
        case '#/cocinero': 
        sectionMain.appendChild(components.cocinero());
        // getData()
        break;
        default:
        sectionMain.appendChild(components.different());
        break;
    }
};