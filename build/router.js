import nonStyleApp from "./functions.js";
import experiencies from "./pages/experiences.js";
import aboutUs from "./pages/aboutUs.js";
//import  moverBoton from "./exit.js";
import funcionalitys from "./pages/funcionality.js";
//Lista de rutas
const routes = [
    { path: '', action: 'agregar' },
    { path: 'checkout', action: 'listar' },
    { path: 'funcionalidad', action: 'funcionalidad' },
    { path: 'experiencias', action: 'experiencias' },
    { path: 'acercadenosotros', action: 'acercadenosotros' }
];
const parseLocation = () => location.hash.slice(2).toLowerCase() || '/';
const findActionByPath = (path) => routes.find(r => r.path == path || undefined);
const router = () => {
    const path = parseLocation();
    const route = findActionByPath(path);
    if (route) {
        switch (route.action) {
            case 'funcionalidad':
                nonStyleApp();
                funcionalitys();
                break;
            case 'experiencias':
                nonStyleApp();
                experiencies();
                break;
            case 'acercadenosotros':
                nonStyleApp();
                aboutUs();
                break;
            default:
                break;
        }
    }
};
window.addEventListener('load', function () {
    router();
});
window.addEventListener('hashchange', function () {
    router();
});
