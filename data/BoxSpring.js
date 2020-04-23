/**
 * Generate spring boxes data
 */

const BoxSpring = require('../models/BoxSpring');
const faker = require('faker');

const createBoxSpringData = async () => {
    const data = await BoxSpring.countDocuments();
    if(data > 0) return;
    
    console.log('Creating box spring data')
    for(let i = 0; i < 100; i++){
        await BoxSpring.create({
            title:'Somier' + (i + 1),
            image:'https://medias.conforama.pt/akeneoCloud/52038dc6a18c61b74d7e69c94bda62532ad1e785_48184_G1.jpg',
            description: faker.lorem.paragraph(),
            price: faker.commerce.price()
        })
    }
}

module.exports = createBoxSpringData;