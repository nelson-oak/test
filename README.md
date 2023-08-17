# Project's Name

Project's description

## Reason to do

Why am I developing to do this project?

## Credits

If I have used some data of another person, I need to reference here

* Name of person or website: <http://localhost/url-to-that-person-or-website>

## Database definitions

![Database Schema](assets/dbschema.png?raw=true "Database Schema")

Notes:

1. Some point that needs an explanation

## Use Cases

* [ ] Describe all use cases of the application
* [x] This use case is checked because it's implemented already

## Technologies Definitions

In this project I've used:

1. Node.js
2. Typescript
3. NestJS

## Download and Start Project

To run the project locally, just do this:

### Cloning the project update dependencies

* Clone the project:

  ```bash
  git clone https://github.com/nelson-oak/tp-nestjs-mvc.git
  ```

* Download dependencies:

  ```bash
  yarn
  ```

### Running containers

* Create and start the containers:

  ```bash
  docker-compose up -d
  ```

* Stop containers:

  ```bash
  docker-compose stop
  ```

* Start containers:

  ```bash
  docker-compose start
  ```

* Restart containers:

  ```bash
  docker-compose restart
  ```

* Remove containers:

  ```bash
  docker-compose down
  ```

### Run the project

* Run locally:

  ```bash
  yarn start
  ```
  
* Run locally in watch mode:

  ```bash
  yarn start:dev
  ```

* Run tests:

  ```bash
  yarn test
  ```

* Run tests in watch mode:

  ```bash
  yarn test:watch
  ```

* Run migrations:

  ```bash
  yarn prisma:migrate
  ```

* Run prisma studio:

  ```bash
  yarn prisma:studio
  ```

### With docker compose

### Notes

* Container's names:
  * nestjs_mvc_template_postgres and nestjs_mvc_template_redis;
* Configurations to do before to start:
  * Create an file named *.env* with all *.env.example* content, and fill it all variables with real values;
  
  * In docker-compose.yml, it has database's connection data. If you prefer to use another database's connection data, you need to change in that file too.

## Online Project URL

This project is going to have a Swagger documentation when I finish the development. Then, I'll put that URL here soon. Local doc available in <http://localhost:4000/api-docs/> when the application started
