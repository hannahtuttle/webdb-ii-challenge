// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true, //used for sqlite
    connection:{ //an object or a string
    filename: './data/cars.db3' //from the root folder
    },
  },

 

};
