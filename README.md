# API Frameworks
Notes and repo for the API Frameworks lecture

## Why use a framework?
There are various web frameworks we can use to structure our server-side code. Express is a very popular one that has actually been the starting point for a host of [other frameworks](https://expressjs.com/en/resources/frameworks.html) too!
### Pros
A lot of the things we had to do manually when making an API purely with the node http module can be abstracted away by a framework which is designed to do specific things. This might make your development process quicker and more consistent.
### Cons
You will be dependent on an external package which itself might have a myriad of other dependencies. When choosing any package, consider if it is actively maintained. Also consider the actual size of your app. If you add dependencies that you don't really need, you might end up with a bigger bundle size than required to do the job. Note how many packages pride themselves on being 'lightweight'! It's a trade off of various different considerations.

***

## Node Packages
In order to keep all our dependencies in with our app (for ease of sharing, deploying elsewhere etc), we can make our own package. If you have `node` installed then you almost certainly have `npm` installed too. `npm` stands for node package manager and we use it to create and manage our own packages as well as install and manage external packages.

- Let's make an folder for our new app and cd into it: \
`mkdir myApp && cd myApp`
- Now we are in our project folder we can use npm to initialise our own new package. \
`npm init` - this will take you through some setup questions. If you are happy to take the default answers to each, add the `-y` flag (`npm init -y`)
- That will have created us a `package.json` file. For now we will leave it as is.

***

## Express
Let's make a new API using [Express](https://expressjs.com/)
### Installation
- We will install Express using npm: \
`npm install express --save` - the `--save` flag says 'please add this to the list of dependencies that my app requires in order to run.'
- Now we will see that a `node_modules` folder has also been created. When we share our app, we only want to share the list of dependencies, not the actual dependencies! So let's tell `git` to ignore that folder.
    - `touch .gitignore` - create a .gitignore file
    - `node_modules` - add this in your new .gitignore

### Creating a server
Let's create a new file called `server.js` \
The first thing we will need is to require Express
```js
// in server.js
const express = require('express');
```

Next we create our server... are you ready?
```js
const server = express();
```
Yep, that was it. Commonly this is actually stored in a variable called `app` but let's keep it as `server` just for consistency.

We do still need to define the location our server will be available. We'll accept the default host of 'localhost' but let's define our port:
```js
const port = 3000;
```
The port can be any unused port but 3000 is the 'classic' Express port.

Finally let's tell the server to listen out for requests:
```js
server.listen(port, () => console.log(`Express departing now from http://localhost:${port}`!))
```

### Starting your server
Okay, let's get it running! 
We could start our server by running the file by running `node server.js` in the terminal.

Since we have a node package setup anyway, let's make use of the npm scripts. Have a look in your package.json for the "scripts" key. There may well be one or two already in there. Whenever we call `npm run <script-name>` from the terminal, it will actually run whatever code we put in the value of the corresponding script name key of that "scripts" object. If it wouldn't work being called straight from the terminal, it's not going to work here either! You can have multiple scripts. You can name a script anything you like but there are some standard ones which npm will be able to run with just `npm <script-name>`. One of those is the "start" script.
```js
"scripts": {
    "start": "node server.js",
    "show-my-stuff": "ls"
},
```
Try this extremely silly "showMyStuff" script with `npm run show-my-stuff"`. If you want to be a bit extra, how about adding `"start-dev": "open ../client/index.html & node server.js"`
Now our script is set up let's run it with `npm start`.

When you get feedback that your server is running, visit your location (in this example it's `http://localhost:3000`) in a browser and you should see something! Admittedly it's not much and is in fact an indication that we've got more work to do, but Express has handled it elegantly regardless. We didn't tell it what to do when any request was made and yet it served a basic html document. If you don't believe me, go to your terminal and run `curl http://localhost:3000`.

### CORS config
To handle our CORS (cross-origin resource sharing), we can use a piece of ***middleware*** imaginatively named '[cors](https://expressjs.com/en/resources/middleware/cors.html)'.
`npm install cors --save`
```js
// in server.js
const const = require('cors');
// (after server has been declared)
server.use(cors());
```
This will enable access for all routes from any origin, check [the docs](https://expressjs.com/en/resources/middleware/cors.html) for all the config options!

***

### Adding routes
#### GET
Let's make our first route. It will respond to a `GET` request made to `/cats` by sending some data we have on cats:
```js
const cats = ["Zelda", "Tigerlily", "Rumble"];

server.get('/cats', (req, res) => res.send(JSON.stringify(cats)));
```
Restart your server and visit or curl `http://localhost:3000` - you should get some cats!
Here's a snippet to quickly paste if you want to test it with `fetch` in the browser console or your own client-side code base.
```js
fetch('http://localhost:3000/cats').then(r => r.json()).then(console.log)
```

#### POST
Making a `POST` request is as easy as:
```js
server.post('/cats', (req, res) => res.send({message: 'POST /cats was called'}))
```
```js
// You can test it with this snippet in browser console
fetch('http://localhost:3000/cats', {method: 'POST'}).then(r => r.json()).then(console.log)
```
When we make a `POST` request we usually do send a body as well though. Do you remember the faff it was to extract the body from a request using the `http` module by itself? I certainly do! \
Let's bring in another piece of middleware to handle the parsing of a request body: [bodyParser](http://expressjs.com/en/resources/middleware/body-parser.html)
`npm install body-parser`
```js
// in server.js
const bodyParser = require('body-parser');
// after server has been declared
server.use(bodyParser.text());
```
I've used the .text bodyParser as we've got in the habit now of stringifying our data before we send it. There are plenty of alternative options though and I recommend a look through the [docs](https://github.com/expressjs/body-parser).

That's it! Now you will have access to `req.body` in your routes.
```js
server.post('/cats', (req, res) => {
    const newCat = JSON.parse(req.body);
    cats.push(newCat.name);
    res.send({message: `${newCat.name} successfully added to our collection.`})
})
```
```js
// You can test it with this snippet in browser console
const newCat = JSON.stringify({ name: "Flora"})
fetch('http://localhost:3000/cats', {method: 'POST', body: newCat}).then(r => r.json()).then(console.log)
```

Check `http://localhost:3000/cats` and see that "Flora" has been added!

#### Other HTTP Verbs
You can find the syntax for responding to other HTTP verbs using Express, [here in the docs](http://expressjs.com/en/5x/api.html#routing-methods).

***

### Particularly useful Express docs
- [Routing Syntax for all HTTP verbs](http://expressjs.com/en/5x/api.html#routing-methods)
- [Query Parameters](http://expressjs.com/en/5x/api.html#req.query) (handling `?name=Beth&location=London`)
- [Route Parameters](http://expressjs.com/en/5x/api.html#req.params) (handling `/user/:username`)

***

## Two Relevant Topics

### CRUD
[CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) stand for Create, Read, Update, Delete. \
When working with a resource of some kind (this demo has used `cats` as a resource), we are often aiming to be able to work with it in all of these ways. In the context of cats:
**C**reate: add a new cat
**R**ead: get info about a cat
**U**pdate: update the info about a specific cat
**D**elete: delete that cat from our collection

More on this when we learn about databases but keep it in mind, when a user hits your API, is it to do one of these things?

### REST
[REST] stands for Representational State Transfer (protocol). This is merely a generally accepted convention that makes reading (and creating) different paths easier to understand. \
If I want to get all the cats, I expect to visit `www.animals.com/cats`, not `www.animals.com/all-the-cats` \
If I am constructing a post request to add a cat, I expect to be posting to `www.animals.com/cats`, `www.animals.com/add-this-cat` \

There are 7 'official' [RESTful routes](https://gist.github.com/alexpchin/09939db6f81d654af06b) and we will cover them in more detail in due course.


***
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

***

# Exercise
Working in pairs:
1. Clone the node http server that you created yesterday. Keep the client the same.
    - Setup an npm package for your server-side code and create a "dev" script
    - Change the backend to fulfil the same role, but using Express.

2. Start work on your own API! You can choose what you use to create it and what it does.
    - Consider [RESTful routing](https://gist.github.com/alexpchin/09939db6f81d654af06b)
    - As a stretch goal, try and implement all four parts of [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) functionality (Create, Read, Update, Delete)
    - Prepare a short demonstration of your API's functionality (perhaps this will mean writing some front-end code, perhaps not) to share with the group.

***