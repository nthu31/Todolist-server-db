require('../../config.js');
const pgp = require('pg-promise')();
const db = pgp(process.env.DB_URL);

const schemaSql = `
    -- Drop (drop if exist)
    DROP TABLE IF EXISTS posts;
    DROP TABLE IF EXISTS categories;

    -- Create
    CREATE TABLE posts(
        "Category"          varchar(20) NOT NULL,
        "Id"                serial PRIMARY KEY NOT NULL,
        "Title"             varchar(80) NOT NULL,
        "Description"       text,
        "Deadline"          date,
        "Remark"            text,
        "CreateDate"        text,
        "Important"         BOOLEAN NOT NULL,
        "Done"              BOOLEAN NOT NULL
    );

    CREATE TABLE categories(
        name                varchar(20) NOT NULL
    );
`;

db.none(schemaSql).then(() => {
    console.log('Schema created');
    pgp.end();
}).catch(err => {
    console.log('Errer creating schema');
});
