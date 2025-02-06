<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

# Humble Superhero API

Welcome to the **Humble Superhero API** project! This API lets you manage a list of superheroes by adding their names, superpowers, and humility scores. The superheroes are ordered by their humility score in descending order to highlight the humblest of the heroes.

## Objective

The goal of this API is to create a backend that allows users to:
1. Add a new superhero with their name, superpower, and humility score.
2. Fetch a sorted list of superheroes based on their humility score.

## Tech Stack

- **Backend**: Built using **NestJS** version 10
- **frontend**: ReactJS
- **Database**: Simple in-memory storage (an array) for superhero data
- **API**: Two main endpoints to handle superhero data:
  - `POST /superheroes`: Adds a new superhero.
  - `GET /superheroes`: Fetches the superheroes sorted by humility score.
  Example : 'http://localhost:3000/superheroes' for POST/GET

## Endpoints

### POST /superheroes
**Description**: Adds a new superhero to the list.

**Request Body**:
```json
{
  "name": "Superman",
  "superpower": "Flight",
  "humilityScore": 10
}
```

### GET /superheroes
**Description**: To get superhero list.

**Response**:
```json
[
    {
        "name": "Superman",
        "superpower": "Flight",
        "humilityScore": 10
    },
    {
        "name": "Hero2",
        "superpower": "Flying",
        "humilityScore": 8
    },
    {
        "name": "Hero3",
        "superpower": "Speed",
        "humilityScore": 1
    }
]
```
### For Testing

```bash
$ npm run test
```
## If I had more time...

If I had more time, I would explore the following improvements:

1. **Persistent Database**: Replace the in-memory storage with a database (e.g., **MongoDB** or **PostgreSQL**) to persist superhero data across server restarts.

2. **Authentication and Authorization**: Implement a simple authentication system (e.g., **JWT** or **OAuth**) to ensure that only authorized users can manage superheroes.

3. **Frontend**: Build a **React frontend** to allow users to:
    - Add more frontend validation for all fields.
   - Display success/error messages.
   - 
4. **Advanced Validation**: Add validation for:
   - Unique superhero names.
   - Non-empty superpower strings.

5. **Unit and Integration Testing**: Write more comprehensive tests, covering:
   - Edge cases and integration tests.
   - Performance testing for large datasets.

6. **Error Handling and Logging**: Enhance error handling and implement logging using tools like **Winston** or **Pino** to track issues in production.

7. **Deployment**: Deploy the API to a cloud platform (e.g., **Heroku** or **AWS**) for public access.

8. **API Rate Limiting and Caching**: Implement **rate limiting** and **caching** (e.g., **Redis**) to improve performance and prevent abuse.


[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
