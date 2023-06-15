var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { checkout } from "./pages/checkout.js";
import { toastInfo } from "./functions.js";
if (typeof document !== "undefined") {
    const obtenerDatos = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let response = yield fetch("./public/records/equipos.json");
            let equipos = yield response.json();
            let buttonSearch = document.getElementById("onClickSearch");
            buttonSearch.addEventListener("click", clickSearch);
            function clickSearch() {
                var _a, _b, _c, _d, _e, _f, _g, _h;
                let containerResults = document.querySelector("#results");
                if (containerResults) {
                    containerResults.innerHTML = "";
                }
                //Equipment choice*
                const kiteEquipment = (_a = document.querySelector("#kite")) === null || _a === void 0 ? void 0 : _a.checked;
                const kiteChecked = (_b = document.querySelector("#kite")) === null || _b === void 0 ? void 0 : _b.value;
                const boardEquipment = (_c = document.querySelector("#board")) === null || _c === void 0 ? void 0 : _c.checked;
                const boardChecked = (_d = document.querySelector("#board")) === null || _d === void 0 ? void 0 : _d.value;
                const allEquipment = (_e = document.querySelector("#all")) === null || _e === void 0 ? void 0 : _e.checked;
                const allChecked = (_f = document.querySelector("#all")) === null || _f === void 0 ? void 0 : _f.value;
                const kbEquipment = (_g = document.querySelector("#kite_board")) === null || _g === void 0 ? void 0 : _g.checked;
                const kbChecked = (_h = document.querySelector("#kite_board")) === null || _h === void 0 ? void 0 : _h.value;
                for (let i = 0; i < equipos.length; i++) {
                    //Input text
                    const inputPlaces = document.querySelector("#searchInput");
                    const inputValue = inputPlaces != null ? inputPlaces.value : "";
                    const foundedEquipmentCountry = equipos[i].pais;
                    const foundedEquipmentCity = equipos[i].ciudad;
                    //Dates
                    const dateIn = document.querySelector("#dateIn");
                    const dateValueIn = dateIn != null ? dateIn.valueAsNumber : "";
                    const dateOutside = document.querySelector("#dateOutside");
                    const dateValueOutside = dateOutside != null ? dateOutside.valueAsNumber : "";
                    if (foundedEquipmentCountry.toUpperCase() ===
                        inputValue.toUpperCase() ||
                        foundedEquipmentCity.toUpperCase() === inputValue.toUpperCase()) {
                        if (dateValueIn > equipos[i].desde &&
                            dateValueOutside < equipos[i].hasta) {
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
                                if (kiteEquipment === false &&
                                    boardEquipment === false &&
                                    allEquipment === false &&
                                    kbEquipment === false) {
                                    console.log("Por favor elije un equipo");
                                }
                            }
                        }
                    }
                }
                let resultados = document.querySelectorAll(".results-all");
                if (resultados.length >= 1) {
                    toastInfo();
                }
            }
        }
        catch (error) {
            console.log(error);
        }
    });
    function introduccionDatos(equipment) {
        let equipmentsArrayResults = [];
        equipmentsArrayResults.push(equipment);
        let contenedor = document.querySelector("#results");
        for (const equipamientos of equipmentsArrayResults) {
            let card = document.createElement("div");
            let equipmentsRental = {
                id: equipamientos.id,
                pais: equipamientos.pais,
                ciudad: equipamientos.ciudad,
                anio: equipamientos.anio,
                img: equipamientos.imagen,
                marca: equipamientos.marca,
                modelo: equipamientos.modelo,
            };
            card.innerHTML = `
    <button class="equipments_results" data-id=${equipmentsRental.id} role="link">
      <div class="results-all">
        <p>${equipmentsRental.pais}</p>
        <p>${equipmentsRental.ciudad}</p>
        <p>${equipmentsRental.anio}</p>
      </div>
      <img src = "./public/images/equipments/${equipmentsRental.img}" class="equipments_img" alt="equipments_images">
    </button>
    `;
            if (contenedor) {
                contenedor.appendChild(card);
            }
        }
        pressButtons(equipment);
    }
    function pressButtons(equipment) {
        const botones = document.querySelectorAll('.equipments_results');
        var intro = document.querySelector("#results");
        intro.className = "resultSearch";
        botones.forEach((boton) => {
            boton.addEventListener('click', function () {
                clickSelection(boton, equipment);
            });
        });
    }
    function clickSelection(boton, _equipments) {
        let dataID = boton.getAttribute('data-id');
        const convertNumberId = parseInt(dataID);
        location.hash = "/checkout";
        let equipmentChoose = [];
        equipmentChoose.push(_equipments);
        equipmentChoose.forEach((element) => {
            if (convertNumberId === element.id) {
                let equipmentSelecter = {
                    id: element.id,
                    pais: element.pais,
                    ciudad: element.ciudad,
                    anio: element.anio,
                    img: element.imagen,
                    marca: element.marca,
                    modelo: element.modelo,
                };
                checkout(equipmentSelecter);
            }
        });
    }
    obtenerDatos();
}
