# BYOBackend

#### This Project Utilizes:
* Node.js
* Express
* Knex
* Postgres


### Story Board:
https://github.com/EmilyLalonde/BYOBackend/projects/1

### 'get' Endpoints
| Url | Verb  | Options  | Sample Response  |
|---|---|---|---|
| `/api/v1/directors` | GET | Not needed | An array of directors: `[{"id": 1, "name": "David Lynch", "country": "USA", "age": 73}]` |
| `/api/v1/directors/:id` | GET | Not needed | Specific director: `[{"id": 1, "name": "David Lynch", "country": "USA", "age": 73}]` |
| `/api/v1/movies` | GET | Not needed | An array of movies: `[{"id": 1, "name": "Eraserhead", "releaseDate": 1997, "director": "David Lynch"}]` |
| `/api/v1/movies` | GET | Not needed | Specific movie: `[{"id": 1, "name": "Eraserhead", "releaseDate": 1997, "director": "David Lynch"}]` |

### 'post' Endpoints
| Url | Verb  | Options  | Sample Response  |
|---|---|---|---|
| `/api/v1/directors` | POST | {"name": `string`, "country": `string`, "age": `integer`} | The id of the created director: `{"id": 101}` |
| `/api/v1/movies` | POST | {"name": `string`, "releaseDate": `integer`, "director": `string`} | The id of the created movie: `{"id": 202}` |

### 'delete' Endpoint
| Url | Verb  | Options  | Sample Response  |
|---|---|---|---|
| `/api/v1/directors/:id` | DELETE | Not needed | A deleted director: `Director has been deleted` |
