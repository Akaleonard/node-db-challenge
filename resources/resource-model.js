const db = require("../data/db-config");

function getById(id) {
    return db('resources')
    .where({id})
    .first()
}

function add(resource) {
    return db('resource')
    .insert(resource)
    .then(ids => {
        return getById(ids[0])
    })
}

function get() {
    return db('resources');
}

module.exports = {
    getById,
    add,
    get
}