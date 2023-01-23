
export default function nonStyleApp(){
    const nada = document.querySelector("#app")!
    nada.innerHTML ="";
}

export function toastInfo(){
    const toast = document.getElementById("toasts");

const messages:string = 
  `Haz encontrado un producto`;

const types:string = "info" ;

function createToast(message = null , type = null) {
    
  const notif = document.createElement("div");
  const notifIcon = document.createElement("span");
  
  notif.classList.add("toast");
  notif.classList.add(types);

 notif.innerText = messages;

  toast?.appendChild(notif);
  notif.append(notifIcon);

  setTimeout(() => {
    notif.remove();
  }, 3000);
}
createToast()
}

const toggleButton = document.getElementById('button-menu')!
const navWrapper = document.getElementById('nav')!

toggleButton.addEventListener('click',() => {
  toggleButton.classList.toggle('close')
  navWrapper.classList.toggle('show')
})

 navWrapper.addEventListener('click',e => {
   if((<HTMLTextAreaElement>e.target).id === 'nav'){
     navWrapper.classList.remove('show')
     toggleButton.classList.remove('close')
   }
 })
