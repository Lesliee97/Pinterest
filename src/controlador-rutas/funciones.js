export const viewPictures = () =>{
    fetch('https://api.unsplash.com/photos/?client_id=376cd19cc454ddbb8cb9a593f03181cc4fdc0d7b9c1f7b6c51209d261f79901a')
  .then( res => res.json() )
  .then( data => console.log( data ) )
  .catch( e => console.log( 'Something went wrong' ) );
  
}