async function getHero() {
    try {
        const response = await fetch("http://localhost:4567/");

        let hero = await response.json();

        renderBatman(hero)

    } catch(error) {
        console.error(error)
    }

}

function renderBatman(event) {
    
 console.log(event)

 document.querySelector(".content").innerHTML = `
    
 <img src="${event.image.url}" alt="batman">

 <div class="content-batman">
     <div class="content-aparence box">
         <h2>Appearance:</h2>
         <p>Gender: ${event.appearance.gender}</p>
         <p>Race: ${event.appearance.race}</p>
     </div>

     <div class="powerstats box">
         <h2>Powerstats:</h2>
         <p>Inteligence: ${event.powerstats.intelligence}</p>
         <p>Strength: ${event.powerstats.strength}</p>
         <p>Speed: ${event.powerstats.speed}</p>
     </div>

     <div class="work box">
         <h2>Work:</h2>
         <p>Occupation: ${event.work.occupation}</p>
         <p>Base: ${event.work.base}</p>
     </div>
 </div>

 `

}

getHero();