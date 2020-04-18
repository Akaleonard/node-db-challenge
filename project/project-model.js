const db = require('../data/db-config');

function add(project) {
    return db("projects")
    .insert(project)
    .then(ids => {
        return getById(ids[0]);
    });
}

function getById(id) {
    return db("projects")
    .where({id})
    .first();
}

function get() {
    return db("projects")
}

module.exports = {
    getById,
    get,
    add
};