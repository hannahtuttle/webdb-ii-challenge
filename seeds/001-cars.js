
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: '1908098YHQ', make: 'nissan', model: 'versa', mileage: 132300, transmissionType: 'V6', titleStatus: 'owner'},
        {VIN: '2222222BBBB', make: 'chevy', model: 'taho', mileage: 232300, transmissionType: 'V8', titleStatus: null},
        {VIN: '1234ABCD5678', make: 'saturn', model: 'aura', mileage: 80300, transmissionType: null, titleStatus: null},
      ]);
    });
};

// table.string('VIN').unique().notNullable();
// table.string('make').notNullable();
// table.string('model').notNullable();
// table.integer('mileage').notNullable();
// table.string('transmissionType');
// table.string('titleStatus');
