# COMIPY NEST

## NECESSARY INFO

default url
localhost://localhost:3000

swagger ui
localhost://localhost:3000/api/docs

## Run app in development mode
```[bash]
# SET UP ENVIRONMENT VARIABLES
cp .env.example .env
# CUSTOM THE DATA
nano .env

# MAKE SURE YOU HAVE DOCKER AND DOCKER COMPOSE, THEN:
docker compose up -d

# CHECK IN MYSQL IF IT EXIST ANY RELATED TO YOUR DATABASE
docker compose exec -it mysql sh
mysql -u user -p
SHOW DATABASES;
use [YOUR DATABASE];
SHOW TABLES;

# IF THERE IS NO TABLES, EXECUTE:
docker compose exec -T mysql \
mysql -u[YOUR USER] -p[YOUR PASSWORD] [YOUR DATABASE] < database.sql

# EXIT MYSQL AND SH OF DOCKER CONTAINER

# WITH THE DATABASE, YOU CAN START THE BACKEND
npm i
npm run start:dev
```
