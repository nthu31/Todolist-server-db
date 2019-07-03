# Define from what image we want to build our own image from.
FROM node:10.15.3

# Create the working directory that holds the application code inside our image.
RUN mkdir /app
WORKDIR /app

# Install app dependencies inside our image.
COPY package.json /app
RUN npm install

# Bundle app source
COPY . /app

# Bind app to the specified port to be mapped by the Docker daemon.
EXPOSE 8080

# Set up env variables in Docker
ENV NODE_ENV production
ENV RDS_HOSTNAME mydb.cjwecs7ktrgk.ap-northeast-1.rds.amazonaws.com
ENV RDS_PORT 5432
ENV RDS_USERNAME potatodb
ENV RDS_PASSWORD asd12125
ENV RDS_DB_NAME playdb

# Define the command to run app.
CMD ["npm", "start"]
