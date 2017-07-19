'use strict';

module.exports = function (Numbers) {

    Numbers.remoteMethod('map', {
        accepts: { arg: 'numero', type: 'string' },
        returns: { arg: 'numeros', type: 'Object' },
        http: { path: '/map', type: 'string', verb: 'get' }
    });

    Numbers.remoteMethod('filtro', {
        accepts: { arg: 'numero', type: 'string' },
        returns: { arg: 'numeros', type: 'Object' },
        http: { path: '/filtro', type: 'string', verb: 'get' },
        description: "mostrando la condicion del filtro"
    });


    //method remote using map 
    Numbers.map = ((number, cb) => {
        Numbers.find({ numeros: number }, ((err, sum) => {
            let suma = sum.map((nu) => {
                return nu.numeros;
            });
            let sumados = suma.map((num) => {
                return num * 2;
            })
            cb(null, sumados);

        }));
    });

//method remote using filter
    Numbers.filtro = ((number, cb) => {
        Numbers.find({ numeros: number }, ((err, fil) => {

            let data = fil.map((n)=>{
                return n.numeros;
            });
            let filtro = data.filter((nu) => {
                if(nu > 2) return nu;
                 

            })
            cb(null,filtro);
        }))

    })




};
