import { templateHome } from '../controlador-rutas/funciones.js'
export default () => {
  const dashboard = `
  <header  class="header"> <!--cabecera-->
  <div class="wrapper">
   
        <div class="logo-navegation text-uppercase logo-content">
        <img src="../src/img/pinterest.svg" alt="logo" class="logo" width="70" height="70">
        </div>
      
       <form class="inputWithIcon">
       <i class="fa fa-search fa-lg"></i>
          <input id="buscar" class="form-input" type="search" placeholder="Buscar">
         
        </form>
         <div class="navbar">
          <nav class="navegation  text-uppercase">
           <div class="divInicio" current> <a href="">Inicio</a></div>
          <div class="divHover"><a href="">Siguiendo</a></div>
          <div class="divUsuario"><img class="picture"src="../src/img/twice.png"><a href="">Nayeon</a></div>
          <div class="divIcons">
          <div class="line"></div>
          <div class="divHover"><a href=""><img class="icons" src="/src/img/chat.svg" alt="commentIcon"></a></div>
          <div class="divHover"><a href=""><img class="icons" src="/src/img/bell.svg" alt="bellIcon"></a></div>
          <div class="divHover"><a href=""><img class="icons" src="/src/img/more.svg" alt="moreIcon"></a></div>
          </div>
          </nav>
          <div>
        </div>
</header>
<body>
<section>
    
    <div class="grid" id="dashboardPrincipal"></div>
</section>
</body>`;

  const divElement = document.createElement('section');
  divElement.className = "body";
  divElement.innerHTML = dashboard;

  //  const btn = divElement.querySelector('.ok');
  //  btn.addEventListener('click', () => {
    // const getData = () => {
  return divElement;

};
export const getData = () => {
const containerPrincipal = document.getElementById('dashboardPrincipal');
    containerPrincipal.innerHTML = '';
    // const apiKey = '284b8b9621a1a9d3a6f8c97ba701e188cb73c4c63da3af950a726c3010dec1c9';
    
    const urlApi = 'https://api.unsplash.com/search/photos?query=quotes&per_page=20&page=1&client_id=284b8b9621a1a9d3a6f8c97ba701e188cb73c4c63da3af950a726c3010dec1c9';
    fetch(urlApi)
      .then(res => res.json())
      .then(data => 
        // console.log(data)
        data.results.forEach(element => {
          const url = element.urls.regular;
          const user = element.user.name;
          const id= element.id;
          console.log(id)
          containerPrincipal.appendChild(templateHome(url, user,id))
         
        })
        )
      .catch(e => console.log(e));
}

window.onscroll = () => {
  let page = 2;
  if((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight){
    // console.log('hola')
     const containerPrincipal = document.getElementById('dashboardPrincipal');
     const urlApi = `https://api.unsplash.com/search/photos?query=quotes&per_page=20&page=${page}&client_id=284b8b9621a1a9d3a6f8c97ba701e188cb73c4c63da3af950a726c3010dec1c9`;
 
    console.log(page)
   
    fetch(urlApi)
      .then(res => res.json())
      .then(data => 
        
      data.results.forEach(element => {
        const url = element.urls.regular;
        const user = element.user.name; 

        containerPrincipal.appendChild(templateHome(url, user))
       
     page ++
     console.log(page)

      }))
    .catch(e => console.log(e));
      
  }
}
// const containerPrincipal = document.getElementById('dashboardPrincipal');
// const mansoryLayout = (container,item,columns) =>{
//   container.classList.add('mansory layout', `columns-${i}`)
// }

// mansoryLayout(document.getElementById('dashboardPrincipal'), null, 5)
// window.onscroll = function (){
//   // Obtenemos la posicion del scroll en pantall
//   const scroll = document.documentElement.scrollTop || document.body.scrollTop;

//   // Realizamos alguna accion cuando el scroll este entre la posicion 300 y 400
//   if(scroll > 500 && scroll < 600){
//     page ++
//     templateHome(url, user)
//   }
// }



// (data.forEach(element => {
//   const urls = element.urls.regular;
//   console.log(urls)
// }) )
// (data.forEach(element => {
//   const urls = element.urls.regular;
//   console.log(urls)
// }) )

// fetch('https://api.unsplash.com/photos/?client_id=421aa3885f2803277439c30690e4c7e71e5d5746ca76fc65b8079f207d427dd6')
// .then( res => res.json() )
// .then( data =>data.forEach(element => {
//      containerPrincipal.innerHTML += `<img src="${element.urls.regular}">`
//      console.log(template)
//     }) 
// )
// .catch( e => console.log( e ) );