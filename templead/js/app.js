(function () {

    let DB;

    document.addEventListener('DOMContentLoaded', () => {
        crearDB();
    });

    //Crea la base de datos de IndexDB
    function crearDB() {
        const crearDB = window.indexedDB.open('crm', 1);

        //Si hay un error
        crearDB.onerror = function () {
            console.log('Hubo un error');
        };

        //Si se creo bien
        crearDB.onsuccess = function () {
            console.log('Base de datos Creada');
            DB = crearDB.result;
        };

        crearDB.onupgradeneeded = function(e) {
            const db = e.target.result;

            const objectStore = db.createObjectStore('crm', { keyPath: 'id', autoIncrement: true });

            objectStore.createIndex('nombre', 'nombre', { unique: false });
            objectStore.createIndex('email', 'email', { unique: true });
            objectStore.createIndex('telefono', 'telefono', { unique: false });
            objectStore.createIndex('empresa', 'empresa', { unique: false });
            objectStore.createIndex('id', 'id', { unique: true });

            console.log('DB Lista y Creada');
        }


    }

})();
