//  import { containerPrincipal } from '../vistas/home.js'
export const templateHome = (url, user,id) =>{
    const containerImgs= document.createElement('div');
    containerImgs.className = 'containerImgs';
    containerImgs.id = id;
    // data.forEach(element => {
    const templateInfo = `
   
    <img class="imagen"src="${url}">
    `;
    containerImgs.innerHTML += templateInfo;
    
    return containerImgs;
    // });
}
//Mansory layout







// window.onscroll = function (){
//   // Obtenemos la posicion del scroll en pantall
//   var scroll = document.documentElement.scrollTop || document.body.scrollTop;

//   // Realizamos alguna accion cuando el scroll este entre la posicion 300 y 400
//   if(scroll > 500 && scroll < 600){
//       console.log("Pasaste la posicion 300 del scroll");
//   }
// }
// const lazyLoad = url =>{
//     const io = new IntersectionObserver((entries,observer) =>{
//         entries.forEach(entry =>{
//             console.log('hola')
//             if (entry.isIntersecting){
//                 const img = entry.target;
//                 img.classList.add('fade');
//             observer.disconnect();
//             }
//         })
//     })
//     io.observe(target)
// }
// targets.forEach(lazyLoad)
