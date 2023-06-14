export function checkout(equipment: {
  id: number;
  pais: string;
  ciudad: string;
  anio: number;
  img: string;
  marca: string;
  modelo: string;
}) {
  const containerHomes = document.querySelector("#app")!;

  containerHomes.innerHTML = `
    <div class="checkoutPage">
        <div class="checkoutStyle">
            <div>
                <h4 class="equipmentTitle">Equipo elegido</h4>
                <div class="containerEquipment">
                    <div>
                        <p>Equipo: ${`${equipment.marca} ${equipment.modelo}`} </p>
                        <p>Año: ${equipment.anio}</p>
                        <p>Pais: ${equipment.pais}</p>
                        <p>Ciudad: ${equipment.ciudad}</p>
                    </div>
                    <img src = "../public/images/equipments/${equipment.img}" alt="equipments_images">
                </div>
            </div>
            <div class="divContainer">
                <h4>Introduce tus datos</h4>
                <div class="groupInputCheckout">
                    <input type="text" name="name" id="userName" placeholder="Nombre y apellido">
                    <input type="email" name="mail" id="userMail" placeholder="Correo electronico">    
                </div>
                <div class="divButton">
                  <button id="btnRent">Alquilar</button>
                </div>
              </div>
          </div>
        <div>
    `;


  let btnRenting = document.querySelector("#btnRent")!;

  btnRenting.addEventListener("click", clickBtnRenting);

  function clickBtnRenting(): void {
    let userName: string | undefined =
      document.querySelector<HTMLInputElement>("#userName")?.value;
    let userMail: string | undefined =
      document.querySelector<HTMLInputElement>("#userMail")?.value;

    let min: number = 1;
    let max: number = 20000;

    let orderX: number = Math.floor(Math.random() * (max - min + 1) + min);
    
   
        
    alert(
      `Haz elegido ${`${equipment.marca} ${equipment.modelo}`} situado en ${equipment.ciudad} ${equipment.pais}.  ${userName} tu numero de referencia es el ${orderX}, te llegara un correo de confirmación de tu pedido a ${userMail}`
    );
    //Redirige a pagina principal. modificar en caso de hacer deploy
    location.href = "http://127.0.0.1:5500/public/index.html"
  }
}
