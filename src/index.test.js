const chai= require('chai');
const expect =chai.expect;
const chaiAsPromised=require('chai-as-promised')
chai.use(chaiAsPromised);
const sinon = require('sinon');
const sinonChai =require('sinon-chai');
chai.use(sinonChai);
const rewire = require('rewire');
const request =require('supertest');
const User=require('../src/models/user')
// const user=require('./models/user')
var app= rewire('./index');

var sandbox=sinon.sandbox.create();

describe('app',()=>{
    afterEach(()=>{
        app=rewire('./index');
        sandbox.restore();
    })

    context('GET /',()=>{
        it('should get /',(done)=>{
            request(User).get('/')
            .expect(200)
            .end((err,res)=>{
                expect(res.body).to.have.property('name').to.equal('....');
                done(err);
            })
        })
    })
})