
exports.up = function(knex) {
    return knex.schema.createTable('cars', table => {
        table.increments();
        table.string('VIN').unique().notNullable();
        table.string('make').notNullable();
        table.string('model').notNullable();
        table.integer('mileage').notNullable();
        table.string('transmissionType');
        table.string('titleStatus');
  
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExisits(cars)
  };
  
  
  //The client for this API is a car dealer who has provided the following specs:
  
  //The critical information for each car is the VIN, make, model, and mileage.
  //They also track transmission type and status of the title (clean, salvage, etc.), but this information is not always immediately known.