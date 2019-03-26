module.exports = function(){
    var Faker = require('Faker');
    var  _ = require("lodash");
    return {
        user: _.times(100, function(n) {
            return {
                id: n,
                user_name: Faker.Name.findName(),
                card: Faker.Helpers.userCard(),
            }
        }),
        books: _.times(100, function(n){
            return {
                id: n,
                book_name: Faker.Name.findName(),
                phone_number: Faker.PhoneNumber.phoneNumber(),
                price_date: Faker.Date.past(),
                publication_date: Faker.Date.past(),
            }
        })
    }
}
