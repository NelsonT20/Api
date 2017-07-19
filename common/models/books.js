'use strict';

module.exports = function (Books) {
    const fun = Books;
    const pro = [{}];
    Books.remoteMethod('nombre', {
        accepts: { arg: 'name', type: 'string' },
        returns: { arg: 'name', type: 'Object' },
        http: { path: '/name', type: 'string', verb: 'get' }
    });

    Books.remoteMethod('mapeo', {
        returns: { arg: 'generos', type: 'Object' },
        http: { path: '/mapeo', type: 'string', verb: 'get' },
        description: "busqueda general que solo muestra los generos"
    });
    //method remote searching by name using arrow function
    Books.nombre = ((name, cb) => {
        Books.findOne({ where: { name: name } }, ((err, book) => {
            cb(null, book);
        }));
    });
    //method remote using mapping 
    Books.mapeo = ((cb) => {
        Books.find({}, ((err, gen) => {
            let gens = gen.map((data) => {
                return data.generos
            });
            cb(null, gens);
        }));

    })



    //method remote


};
