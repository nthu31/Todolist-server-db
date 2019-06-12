if(!global.db) {
    const pgp = require('pg-promise')();
    db = pgp(process.env.DB_URL);
}

function checkTodo(category, id) {
    const sql = `UPDATE posts SET $1:name = $2 WHERE $3:name = $4 AND $5:name = $6
                RETURNING *`;
    return db.one(sql, ['Done', true, 'Category', category, 'Id', id]);
}

function checkImportant(category, id) {
    const sql = `UPDATE posts SET $1:name = NOT $1:name WHERE $2:name = $3 AND $4:name = $5 RETURNING *`;
    return db.one(sql, ['Important', 'Category', category, 'Id', id]);
}

function deleteTodo(category, id) {
    const sql = `DELETE FROM posts WHERE $1:name = $2 AND $3:name = $4`;
    return db.none(sql, ['Category', category, 'Id', id]);
}

function deleteCategory(category) {
    const sql_1 = `DELETE FROM categories WHERE name = $1`;
    const sql_2 = `DELETE FROM posts WHERE $1:name = $2`;
    db.none(sql_1, [category]);
    return db.none(sql_2, ['Category', category]);
}

module.exports = {
    checkTodo,
    checkImportant,
    deleteTodo,
    deleteCategory
};
