import { checkout } from "./pages/checkout.js";
import Equipments from "./types.js";
import { toastInfo } from "./functions.js";

if (typeof document !== "undefined") {
  
  const obtenerDatos = async () => {
    try {
      let response = await fetch("../public/records/equipos.json");
      let equipos = await response.json();

      let buttonSearch = document.getElementById("onClickSearch")!;
      buttonSearch.addEventListener("click", clickSearch);


      function clickSearch() {
        let containerResults = document.querySelector("#results");
        
        
        if(containerResults){
          containerResults.innerHTML = ""; 
        }

        //Equipment choice*
        const kiteEquipment: boolean | undefined =
          document.querySelector<HTMLInputElement>("#kite")?.checked;
        const kiteChecked =
          document.querySelector<HTMLInputElement>("#kite")?.value;
        const boardEquipment: boolean | undefined =
          document.querySelector<HTMLInputElement>("#board")?.checked;
        const boardChecked =
          document.querySelector<HTMLInputElement>("#board")?.value;
        const allEquipment: boolean | undefined =
          document.querySelector<HTMLInputElement>("#all")?.checked;
        const allChecked =
          document.querySelector<HTMLInputElement>("#all")?.value;
        const kbEquipment: boolean | undefined =
          document.querySelector<HTMLInputElement>("#kite_board")?.checked;
        const kbChecked =
          document.querySelector<HTMLInputElement>("#kite_board")?.value;

        for (let i = 0; i < equipos.length; i++) {

          //Input text
          const inputPlaces =
            document.querySelector<HTMLInputElement>("#searchInput");
          const inputValue = inputPlaces != null ? inputPlaces.value : "";

          const foundedEquipmentCountry: string = equipos[i].pais;
          const foundedEquipmentCity: string = equipos[i].ciudad;

          //Dates
          const dateIn = document.querySelector<HTMLInputElement>("#dateIn");
          const dateValueIn = dateIn != null ? dateIn.valueAsNumber : "";

          const dateOutside =
            document.querySelector<HTMLInputElement>("#dateOutside");
          const dateValueOutside =
            dateOutside != null ? dateOutside.valueAsNumber : "";

          if (
            foundedEquipmentCountry.toUpperCase() ===
              inputValue.toUpperCase() ||
            foundedEquipmentCity.toUpperCase() === inputValue.toUpperCase()
          ) {
            if (
              dateValueIn > equipos[i].desde &&
              dateValueOutside < equipos[i].hasta
            ) {
              if (dateValueIn < dateValueOutside) {
                switch (equipos[i].tipo) {
                  case kiteChecked:
                    if (kiteEquipment === true) {
                      introduccionDatos(equipos[i]);
                    }
                    break;
                  case boardChecked:
                    if (boardEquipment === true) {
                      introduccionDatos(equipos[i]);
                    }
                    break;
                  case allChecked:
                    if (allEquipment === true) {
                      introduccionDatos(equipos[i]);
                    }
                    break;
                  case kbChecked:
                    if (kbEquipment === true) {
                      introduccionDatos(equipos[i]);
                    }
                    break;

                  default:
                    break;
                }

                if (
                  kiteEquipment === false &&
                  boardEquipment === false &&
                  allEquipment === false &&
                  kbEquipment === false
                ) {
                  console.log("Por favor elije un equipo");
                    
                }
              }
            }  
          }
        }
        let resultados = document.querySelectorAll(".results-all")
        if(resultados.length >= 1){
          toastInfo();
        }
      }
      
    } catch (error) {
      console.log(error);
    }
  };

function introduccionDatos(equipment: any){

  let equipmentsArrayResults = [];
  equipmentsArrayResults.push(equipment);
 
  let contenedor = document.querySelector("#results");

  for (const equipamientos of equipmentsArrayResults) {
   
    let card = document.createElement("div");
   
    let equipmentsRental:Equipments ={
      id: equipamientos.id,
      pais: equipamientos.pais,
      ciudad: equipamientos.ciudad,
      anio: equipamientos.anio,
      img : equipamientos.imagen
    }
   
    card.innerHTML = `
    <button class="equipments_results" data-id=${equipmentsRental.id} role="link">
      <div class="results-all">
        <p>${equipmentsRental.pais}</p>
        <p>${equipmentsRental.ciudad}</p>
        <p>${equipmentsRental.anio}</p>
      </div>
      <img src = "../public/images/equipments/${equipmentsRental.img}" class="equipments_img" alt="equipments_images">
    </button>
    `
    if(contenedor){
      contenedor.appendChild(card); 
      }       
  }

pressButtons(equipment);
}

function pressButtons(equipment: any){
  const botones = document.querySelectorAll('.equipments_results');

  var intro = document.querySelector("#results")!;

  intro.className = "resultSearch";

  botones.forEach((boton) => {
    boton.addEventListener('click', function():void{ 
      clickSelection(boton , equipment);
      
    });
  });
}

function clickSelection(boton:any , _equipments: any){
  let dataID = boton.getAttribute('data-id');
  const convertNumberId:number = parseInt(dataID)

  location.hash = "/checkout";

  let equipmentChoose = [];
  equipmentChoose.push(_equipments)

  equipmentChoose.forEach((element: any) => {
     
    if(convertNumberId === element.id){

        let equipmentSelecter:Equipments ={
                id: element.id,
                pais: element.pais,
                ciudad: element.ciudad,
                anio: element.anio,
                img : element.imagen
              }

       checkout(equipmentSelecter)

       }
    });
}  

  obtenerDatos();
}


  

