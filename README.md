### Study Notes
API Frameworks

### Demo repo
To run the demo repo code:
1. Fork and clone this repo
2. `cd fp_study_notes_api_frameworks`
3. Install dependencies
    - `cd server`
    - `npm install`
3. Start your server
    - (make sure you are inside the server folder)
    - `npm start` (or use `npm start-dev` to start server and open client in one go)
4. Open your client
    - `cd ../client`
    - `open index.html`

# Exercises
Working in pairs:
1. Clone the node http server that you created yesterday. Keep the client the same.
    - Setup an npm package for your server-side code and create a "start" script
    - Change the backend to fulfil the same role, but using Express.

2. Start work on your own API! You can choose what you use to create it and what it does.
    - Consider [RESTful routing](https://gist.github.com/alexpchin/09939db6f81d654af06b)
    - As a stretch goal, try and implement all four parts of [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) functionality (Create, Read, Update, Delete)

3. Prepare a client demonstration of your new API
    - Focus on demonstrating your API's functionality
    - You could demonstrate using `curl`, [Postman](https://www.postman.com/), a custom client or a combination!
