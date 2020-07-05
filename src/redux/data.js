var faker = require('faker');

let numberOfTags = 5;
let numberOfProducts = 10;
let numberOfExtraImages = 3;
class product{
    constructor(id, title, subHeading, tags, description, availability,pricePerWeight,itemCode, mainImg, extraImg){
        this.id = id
        this.title = title
        this.subHeading = subHeading
        this.tags = tags
        this.description = description
        this.availability = availability
        this.price = pricePerWeight
        this.itemCode = itemCode
        this.image = mainImg
        this.extraImages = extraImg
    }
}
const createExtraImages=()=>{
    let extraImg = [];
    for(let i=0; i< numberOfExtraImages; i++){
        extraImg.push(faker.image.food(200,200))
    }
    return extraImg;
}
const createTags=()=>{
    let tags = [];
    for (let index = 0; index < numberOfTags; index++) {
        tags.push( faker.commerce.productAdjective() )
    }
    return tags
}

export const createFakeData=()=>{
    let data = [];
    for (let index = 0; index < numberOfProducts; index++) {
      data.push(
          new product( 
            faker.random.number(),
            faker.commerce.productName(),
            faker.company.bsBuzz(),
            createTags(),
            faker.lorem.sentences(),
            faker.random.boolean(),
            faker.random.number(23),
            faker.finance.iban(),
            faker.image.nature(300,300),
            createExtraImages()
            ) 
        )
    }
    return data
}




