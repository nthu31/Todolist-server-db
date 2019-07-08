try {
    //switch (process.env.NODE_ENV) {
    switch ('production') {
        case 'development':
            process.env.DB_URL = `postgres://${process.env.PG_USERNAME}:${process.env.PG_PASSWORD}@${process.env.PG_HOSTNAME}:${process.env.PG_PORT}/${process.env.PG_DB_NAME}`;
            console.log("In developing");
            break;
        default:
            process.env.DB_URL = `postgres://${process.env.RDS_USERNAME}:${process.env.RDS_PASSWORD}@${process.env.RDS_HOSTNAME}:${process.env.RDS_PORT}/${process.env.RDS_DB_NAME}`;
            //process.env.DB_URL = `postgres://potatodb:asd12125@mydb.cjwecs7ktrgk.ap-northeast-1.rds.amazonaws.com:5432/playdb`;
            break;
    }
} catch (err) {
    console.log(err, '\n\nError configuring the project. Have you set the environment veriables?');
}
