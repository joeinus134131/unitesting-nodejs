const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');

chai.use(chaiHttp);
chai.should();

describe("Todos", () => {
  describe("GET /", () => {
    it("should get all todos", (done) => {
      chai.request(app)
        .get('/todos')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
    it("should get a single todo", (done) => {
      const id = 1;
      chai.request(app)
        .get(`/todos/${id}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });

    it("should not get a single todo", (done) => {
      const id = 10;
      chai.request(app)
        .get(`/todos/${id}`)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });
});