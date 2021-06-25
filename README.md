### Study Notes
| [JavaScript API Frameworks](https://github.com/getfutureproof/fp_guides_wiki/wiki/JavaScript-API-Frameworks) | [Testing API Endpoints with Supertest](https://github.com/getfutureproof/fp_guides_wiki/wiki/API-Endpoint-Testing-with-Supertest) |

### Demo repo
To run the demo repo code:
1. Fork and clone this repo
2. `cd fp_study_notes_api_frameworks`
3. Install dependencies
    - `cd server`
    - `npm install`
4. Start your server
    - make sure you are inside the server folder
    - `npm start`
5. Open your client
    - `cd ../client`
    - `open index.html` (or server of your choice eg. node's `http-server` or python's `python -m http.server`)
  
To run the server tests:
   - make sure you are inside the server folder
   - `npm run dev`
   - you can use `npm run coverage` to check the test coverage

To run the client tests:
   - make sure you are inside the client folder
   - `npm install` (you only need to do this before your first client test run)
   - `npm test`
   - you can use `npm run coverage` to check the test coverage


# Exercises
Working in pairs:
1. Start work on your own API!
   - You can choose what your API does
   - You can choose what you use to create it eg. http module/express/alternative framework.
   - Write some tests using [jest](https://jestjs.io/docs/en/getting-started) and [supertest](https://www.npmjs.com/package/supertest) and check your coverage with [jest](https://jestjs.io/docs/en/cli#--coverageboolean), aiming for minimum 60-80% coverage.
    - Consider [RESTful routing](https://gist.github.com/alexpchin/09939db6f81d654af06b)
    - As a stretch goal, try and implement all four parts of [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) functionality (Create, Read, Update, Delete)


2. Use our [Presentation Tips](https://gist.github.com/getfutureproof-admin/8858ae4a2e9ef624422b0ed502d9332d) to help prepare a 5 minute presentation of your new API including:
    - technologies / libraries used
    - challenges and solutions
    - a live demonstration of your API's functionality: you could demonstrate using `curl`, [Postman](https://www.postman.com/), a custom client or a combination!
  - There will be open Q&A after each presentation
  
