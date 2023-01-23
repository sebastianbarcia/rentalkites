export default function experiencies(){

const funcionality = document.querySelector("#app")!

var intro = document.querySelector('body')!;

intro.className = 'classPages';


funcionality.innerHTML += 
`
<div class="titleExp">
    <h4>Experiencias de quienes usan la app</h4>
    <div id="experienciesTable">
    </div>
</div>
`

usersExp()
}


const usersExp = async () => {
   
    try {
        let response = await fetch("/public/records/usersExperiences.json");
        const users = await response.json();

        const usersExperiences = document.querySelector('#experienciesTable')!;
            
        users.map((item: { img: string; usuario: string; title: string; origen: string; viaje: string; equipo: string; id:number }) => 

        usersExperiences.innerHTML += `
        <div class="experiencesStyles" key="${item.id}">
            <div>
                <img src =${item.img}>
                <p class="titleText">"${item.title}"</p>
                <p>${item.usuario}</p>
                <p>${item.origen}</p>
                <p>${item.viaje}</p>
                <p>${item.equipo}</p>
            </div> 
        </div> 
        `     
        )
    }
    catch (error) {
        console.log(error);
    }
}