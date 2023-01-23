function homeContainer(){

    const containerHome = document.querySelector("#app")!
    containerHome.innerHTML = `
    <div class="boxContainer">
        <div class="boxFinder">
            <div>
                <input class="searchInput" id="searchInput" type="text" placeholder="Buscar" value="">
            </div>
            <div class="dateInput">
                <input type="date" name="dateIn" id="dateIn"  value="2022-10-29"
                min="2022-10-29" max="2025-12-30">
                <input type="date" name="dateOutside" id="dateOutside" value="2022-10-30"
                min="2022-10-30" max="2025-12-31">
            </div>
            <form class="checkBoxesEquip" name="f1" id="formElement">
                <div>
                    <input type="checkbox" id="kite" value="Kite">
                    <p>Kite</p>
                </div>
                <div>
                    <input type="checkbox" id="board" value="Board">
                    <p>Board</p>
                </div>
                <div>
                    <input type="checkbox" id="all" value="All">
                    <p>All</p>
                </div>
                <div>
                    <input type="checkbox" id="kite_board" value="Kiteboard">
                    <p>Kite + board</p>
                </div>
            </form>
            <div id="toasts"></div>
            <div class="btnSearch">
                <button id="onClickSearch">Buscar</button>
            </div>
            
        </div>
    </div>
    <div id="results">

    </div> `
}

homeContainer()


export default homeContainer



