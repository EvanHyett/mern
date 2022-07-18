const express = require("express");
const app = express();
const port = 8000;
const {faker} = require("@faker-js/faker");

app.use(express.json());
app.use(express.urlencoded({extended: true}) );

class User{
    constructor(){
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
        this.number = faker.phone.number();
        this._id = faker.database.mongodbObjectId();
    }
}

class Company{
    constructor(){
        this.name = faker.company.companyName();
        this._id = faker.database.mongodbObjectId();
        this.address = {
            street: faker.address.street(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}

app.get("/api/users/new", (req, res) => {
    let newUser = new User();
    res.json({
        results: newUser
    })
})

app.get("/api/companies/new", (req, res) => {
    let newCompany = new Company();
    res.json({
        results: newCompany
    })
})

app.get("/api/user/company", (req, res) => {
    let newUser = new User(), newCompany = new Company();
    res.json({
        results: [{user: newUser}, {company: newCompany}]
    })
})


app.listen( port, () => console.log(`Listening on port: ${port}`) );