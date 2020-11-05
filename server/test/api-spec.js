const request = require('supertest');
const server = require('../server');


describe('API endpoints', () => {
    let api
    let testCat = {
        "name": "Bob",
        "age": 6
    };

    before(() => {
        api = server.listen(5000, () => console.log(`\nStarting test server on port 5000\n`))
    });

    after(done => {
        console.log('\nGracefully stopping test server')
        api.close(done)
    });

    it('responds to /', done => {
        request(api)
            .get('/')
            .expect(200, done);
    });

    it('responds to get /cats', done => {
        request(api)
            .get('/cats')
            .expect(200, done);
    });

    it('responds to post /cats', done => {
        request(api)
            .post('/cats')
            .send(testCat)
            .expect({id: 4, ...testCat})
            .expect(201, done)
    });

    it('404 everything else', done => {
        request(server)
            .get('/bob')
            .expect(404, done);
    });
});