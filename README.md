# Todolist_server_db
URL: http://todolist-server-db-dev.ap-northeast-1.elasticbeanstalk.com
Todo-list web application server side with postgresql DataBase

## Develop Tool
* HTML/CSS/ES6
* React/Redux
* Node.js Express
* RESTful API

## Usage
1. Make sure node.js has been installed
2. Make sure PostgreSQL has beeb installed (default listen to port 5432)
3. Run "npm install" to fetch all packages needed
4. Create a "env.sh" file and set up your own environment variables for connecting to the database
* For example:
```
//in "env.sh"
echo 'Setting up environment variables...'
export NODE_ENV=development
export PG_HOSTNAME=localhost
export PG_PORT=5432
export PG_USERNAME=<your own user name>
export PG_PASSWORD=<your own user password>
export PG_DB_NAME=<your own postgresql database name>
echo 'Done'
```
5. Run "source env.sh" to set the variable to environment
6. Run "npm run schema" to initialize the database
7. Run "npm run watch" to launch your server side code
8. Done, your backend code is running on port 7070...

## Platform
* AWS Elastic Beanstalk + RDS

## DataBase(AWS RDS)
* PostgreSQL
