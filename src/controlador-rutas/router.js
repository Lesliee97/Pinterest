import { components } from '../vistas/index.js';
import { viewPictures } from '../controlador-rutas/funciones.js'




export const changeTmp = (hash) => {
    const sectionMain = document.getElementById('container');
    sectionMain.innerHTML = '';
    switch (hash) {
        case '': 
        sectionMain.appendChild(components.login());
        break;
        case '#/home': 
        sectionMain.appendChild(components.home());
        break;
        case '#/cocinero': 
        sectionMain.appendChild(components.cocinero());
        viewPictures()
        break;
        default:
        sectionMain.appendChild(components.different());
        break;
    }
};