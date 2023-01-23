function funcionalitys() {
  const funcionality = document.querySelector("#app")!;

  var intro = document.querySelector("body")!;

  intro.className = "classPages";

  funcionality.innerHTML += `
    <div class="firstSectionFuncionality">
        <h3>Navega a donde queres!</h3>
        <p>Rental Kites es una aplicacion para bajar a tu telefono movil, alquilar el equipo que quieras y a navegar!</p>
        <img src="/public/images/mockup-avion.png" alt="mockup-index">    
    </div>

    <div class="container_all">
        <div class="cover">
            <div class="bg_color">
            </div>
            <div class="wave w1">
            </div>
            <div class="wave w2">
            </div>
        </div>
    </div>
    <div class="secondSectionFuncionality">
        <h4>Descubre la app</h4>
        <div class="containerSection">
            <div class="containerDiv">
            <div>
                <div>
                    <p class="numberFuncionality">1</p>
                    <img src="/public/images/vectors/download.svg"></img>
                    <p>Descarga nuestra app Playstore o App store</p>
                </div>
                <div>
                    <p class="numberFuncionality">2</p>
                    <img  src="/public/images/vectors/user-add.svg"></img>
                    <p>Crea tu cuenta</p>
                </div>
                <div>
                    <p class="numberFuncionality">3</p>
                    <img src="/public/images/vectors/search.svg"></img>
                    <p>Busca el lugar donde quieres navegar y los equipos que necesitas</p>
                </div>
                <div>
                    <p class="numberFuncionality">4</p>
                    <img src="/public/images/vectors/calendar.svg"></img>
                    <p>Selecciona las fechas que vas a necesitar el equipo</p>
                </div>
                <div>
                    <p class="numberFuncionality">5</p>
                    <img  src="/public/images/vectors/cart-demostration.svg"></img>
                    <p>Selecciona los equipos que estan cargados a nuestra base de datos</p>
                </div>
                <div>
                    <p class="numberFuncionality">6</p>
                    <img  src="/public/images/vectors/handcard-img.svg"></img>
                    <p>Reserva ingresando tu tarjeta de credito</p>
                </div>
            </div>
            <div class="containerImg">
                <img class="video" src="/public/images/VideoPrototipo.mp4">
            </div>
            </div>
        </div>
    </div> 
    <h4 class="textFuncionalitysDownload">Descargalá!</h4>   
    <div class="img-download-app">
    <a>
        <img src="/public/images/google-play-download.png">
    </a>
    <a>
        <img src="/public/images/apple-store-download.png">
    </a>
   
</div>
<p class="textFuncionalitysDownload">El proceso de descarga es muy facil: elige el tipo de descarga en tu movil android o ios</p>
<p class="textFuncionalitysDownload text-margin-top-bottom"> Despues tienes que registrarte y podrás acceder a publicar o alquilar el equipo que quieras mediante nuestro buscador</p>
    <div class="margend">
   
        <div>
            <img class="imgWidthMargend" src="/public/images/MockupRegistrologin.pdf">
        </div>
    </div>
    <h4 class="textFuncionalitysDownload text-margin-top-bottom">Explora la aplicación</h4>
    <div class="all-screens">
    <img src="/public/images/Mockuppantallasrentalkites.png"></img>
    </div>
   
`;
}
export default funcionalitys;
