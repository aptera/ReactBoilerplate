// https://github.com/Marak/faker.js

module.exports = function(){
    var faker = require('faker');
    var _ = require('lodash');

    return { 
        articles: _.times(100, function(n){
            return {
                id: n,
                title: faker.random.words(5),
                date: faker.date.past(),
                authorId: faker.random.number({ min: 0, max: 99 }),
                body: faker.lorem.words(100)
            };
        }),
        authors: _.times(100, function(n){
            return {
                id: n,
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                avatar: faker.image.cats(300, 300, true),
                website: faker.internet.url()
            };
        })
    };
};