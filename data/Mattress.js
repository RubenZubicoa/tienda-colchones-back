/**
 * Generate Mattresses data
 */

const Mattress = require('../models/Mattress');
const faker = require('faker');

const createMattressData = async () => {
    const data = await Mattress.countDocuments();
    if(data > 0) return;
    
    console.log('Creating mattress data')
    for(let i = 0; i < 100; i++){
        await Mattress.create({
            title: 'Colchon ' + ( i + 1),
            image:'https://medias.conforama.pt/akeneoCloud/96736802300d99bdaa48ca9d077230b8f45a36dc_Colchon_muelles_Multielastic_FLEX_VITALITY_MULTI.jpg',
            description: faker.lorem.paragraph(),
            price: faker.commerce.price()
        })
    }
}

module.exports = createMattressData;