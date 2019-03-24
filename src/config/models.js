
import database from './database'

database.models.forEach((model) => {
    module.exports[model] = database.connection().import('../models/' + model);
});