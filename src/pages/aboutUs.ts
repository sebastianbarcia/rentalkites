export default function aboutUs(){

    const aboutUs = document.querySelector("#app")!
    
    var intro = document.querySelector('body')!;
    
    intro.className = 'classPages';

aboutUs.innerHTML = `
    <div class="aboutUs">
        <h4>Somos un equipo de trabajo que tenia un problema</h4>
    
    <div class="ask marginPageAboutUs">
        <img src="./public/images/vectors/ask.svg">
        <div>
        <h3>Problema</h3>
        <ul>
            <p>Los Kitesurfistas que quieren irse de viaje a otros sitios a practicarlo tienen los siguientes 5 problemas:</p>
            <li>
                <p class="numberFile">1</p> <p> Las aerolíneas cobran el equipo como equipaje facturable, lo cual es muy caro. (Aproximadamente USD 100 por tramo).</p>
            </li>
            <li> <p class="numberFile">2</p> <p>Son muchos elementos y accesorios que son imprescindibles a la hora de la práctica del kitesurf,
            y por uno solo que se les haya olvidado en el punto de origen es muy posible que no
            puedan practicarlo.</p></li> 
            <li> <p class="numberFile">3</p> <p>Ocupa mucho lugar en viajes en auto.
            La tabla mide 1,35 mts como mínimo, y los demás equipamientos (vela, barra de dirección, tabla y salvavidas esencialmente) ocupan mucho lugar, más si viajamos con familia, mascota y otros
            equipajes. También hay que contar las dimensiones del vehículo.</p></li>
            <li> <p class="numberFile">4</p> <p>Hay muy pocos lugares que alquilan equipos y además son muy caros (Es muy raro ver lugares de alquiler de equipos). </p> </li>
            <li><p class="numberFile">5</p> <p> El último problema es que si llevan todos estos equipos y no pueden practicar el deporte porque las condiciones no se dan
            (viento y estado del tiempo), habrán llevado todos los equipos para
            no usarlo habiendo pagado un dinero para transportarlo o si van en auto viajando incómodos.</p></li>
        </ul>
        </div>
    </div>

    <div class="target marginPageAboutUs">
       
        <img src="./public/images/vectors/target.svg">  
        <div>
        <h3>Objetivo</h3>
        <p>Facilitar la practica del kitesurf a traves del alquiler de equipo a buen precio y en buenas condiciones en cualquier parte del mundo sin complicaciones</p>
    </div>  
    </div>

    <div class="solution marginPageAboutUs">
        <img src="./public/images/vectors/isologotipo.svg">
        <div>
            <h3>Solución</h3>
            <p>Rental Kite es una app sencilla e intuitiva que le permite a los amantes del Kitesurf alquilar equipos en cualquier parte del mundo a precios accesibles y sin complicaciones</p>
        </div>
    </div>
    <div class="missionValue">
        <div>
            <img src="./public/images/achievement.png">
            <h3>Misión</h3>
            <p>Estamos convencidos de todos los kiters del mundo puedan practicar su deporte favorito donde quieran, sin problemas!</p>
        </div>
        <div>
            <img src="./public/images/diamond.png">
            <h3>Valor</h3>
            <p>Tambien buscamos que sea una herramienta de ayuda a quienes deseen ganar un dinero extra alquilando sus equipos a otros kiters</p>
        </div>
    </div>
    
    <div class="containerImages">
        <div class="containerImage">
            <div class="childImage">
                <h4>Nuestro lugar de trabajo</h4>
            </div>
        </div>
        <div class="containerImage">
        <div class="childImageTwo">
            <h4>Nuestro equipo</h4>
        </div>
    </div>
    </div>
`
}