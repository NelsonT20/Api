module.exports = function (Numbers) {

    Numbers.remoteMethod('map', {
        accepts: { arg: 'number', type: 'string' },
        returns: { arg: 'numbers', type: 'Object' },
        http: { path: '/map', type: 'string', verb: 'get' }
    });

    Numbers.remoteMethod('filter', {
        accepts: { arg: 'number', type: 'string' },
        returns: { arg: 'numbers', type: 'Object' },
        http: { path: '/filter', type: 'string', verb: 'get' },
        description: "showing the results of the filter"
    });


    //method remote using map 
    Numbers.map = ((number, cb) => {
        Numbers.find({ numeros: number }, ((err, sum) => {
            let obj = sum.map((nu) => {
                return nu.numeros;
            });
            let result = obj.map((num) => {
                return num * 2;
            })
            cb(null, result);

        }));
    });

    //method remote using filter
    Numbers.filter = ((number, cb) => {
        Numbers.find({ numeros: number }, ((err, fil) => {

            let data = fil.map((n) => {
                return n.numeros;
            });
            let result = data.filter((nu) => {
                if (nu > 2) return nu;


            })
            cb(null, result);
        }))

    })




};
