if(!global.db) {
    const pgp = require('pg-promise')();
    db = pgp(process.env.DB_URL);
}

function list(category = 'All') {
    if(category == 'All') {
        const sql = `SELECT * FROM posts`;
        return db.many(sql);
    }else {
        const sql = `SELECT * FROM posts WHERE $1:name=$2`;
        return db.many(sql, ['Category', category]);
    }
}

function getKeys() {
    const sql = `SELECT * FROM categories`;
    return db.many(sql);
}

function createCategory(name) {
    const sql = `INSERT INTO categories VALUES ($<name>) RETURNING *`;
    return db.one(sql, {name});
}

function addTodo(category, title, description = '', deadline = '', remark = '', important = false) {
    const params = {
        Category:         category,
        Title:            title,
        Description:      description,
        Deadline:         deadline,
        Remark:           remark,
        CreateDate:       new Date(),
        Important:        important,
        Done:             false
    };
    const sql = `INSERT INTO posts ($<this:name>) VALUES (
        $<Category>,$<Title>,$<Description>,$<Deadline>,
        $<Remark>,$<CreateDate>,$<Important>,$<Done>
    ) RETURNING *`;
    return db.one(sql, params);
}

module.exports = {
    list,
    getKeys,
    createCategory,
    addTodo
};
