module.exports = function (Books) {
    const fun = Books;
    const pro = [{}];
    Books.remoteMethod('Name', {
        accepts: { arg: 'name', type: 'string' },
        returns: { arg: 'name', type: 'Object' },
        http: { path: '/SearchByName', type: 'string', verb: 'get' }
    });

    Books.remoteMethod('mapping', {
        returns: { arg: 'generos', type: 'Object' },
        http: { path: '/mapping', type: 'string', verb: 'get' },
        description: "this is a general searching that only show the genres"
    });
    //method remote searching by name using arrow function
    Books.Name = ((name, cb) => {
        Books.findOne({ where: { name: name } }, ((err, book) => {
            cb(null, book);
        }));
    });
    //method remote using mapping 
    Books.mapping = ((cb) => {
        Books.find({}, ((err, gen) => {
            let gens = gen.map((data) => {
                return data.generos
            });
            cb(null, gens);
        }));

    })



    //method remote


};
