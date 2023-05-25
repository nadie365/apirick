const rick = async() => {
    try{
    const response =  await fetch('https://rickandmortyapi.com/api/characters')
    const info = await response.json();
    console.log(info);
    console.log(info.characters);
    console.log(info.episodes);
}catch(error){
    console.log(error);
}
}  

rick()



// const rick = async () => {
//     try {
//       const response = await fetch('https://rickandmortyapi.com/api/character');
//       const data = await response.json();
//       console.log(data.results);
//     } catch (error) {
//       console.log(error);
//     }
//   }
  
//   rick();
