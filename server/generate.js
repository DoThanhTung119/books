module.exports = function(){
    var Faker = require('Faker');
    var  _ = require("lodash");
    return {
        list: _.times(100, function(n) {
            return {
                id: n,
                name: Faker.Name.findName(),
                price: Faker.random.number(),
                date_price: Faker.Date.past()
            }
    }),
        user: _.times(100, function(n){
            return {
                id: n,
                address: Faker.Address.streetAddress(),
                phone_number: Faker.PhoneNumber.phoneNumber(),
                company: Faker.Company.companyName(),
                card: Faker.Helpers.createCard(),
            }
        })
    }
}