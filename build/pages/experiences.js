var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export default function experiencies() {
    const funcionality = document.querySelector("#app");
    var intro = document.querySelector('body');
    intro.className = 'classPages';
    funcionality.innerHTML +=
        `
<div class="titleExp">
    <h4>Experiencias de quienes usan la app</h4>
    <div id="experienciesTable">
    </div>
</div>
`;
    usersExp();
}
const usersExp = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let response = yield fetch("/public/records/usersExperiences.json");
        const users = yield response.json();
        const usersExperiences = document.querySelector('#experienciesTable');
        users.map((item) => usersExperiences.innerHTML += `
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
        `);
    }
    catch (error) {
        console.log(error);
    }
});
