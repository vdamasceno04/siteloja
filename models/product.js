/*provavelmente puxar o id de cada um
dos produtos de uma tabela e enviá-lo na construtora
das instancias dos produtos seja o melhor jeito
de instanciar tudo*/

const Model = require('./model.js')

class Product extends Model{ 
    constructor() {
        super()

        // string
        this.brand = null
        this.model = null
        this.description = null
        this.imgPath = null
        this.material = null
        this.size = null

        // int
        this.price = -1
        this.warranty = -1
        this.stock = -1
    }

    // setters
    setBrand(brand){this.brand = brand}
    setModel(model){this.model = model}
    setDescription(description){this.description = description}
    setImgPath(imgPath){this.imgPath = imgPath}
    setMaterial(material){this.material = material}
    setSize(size){this.size = size}
    setPrice(price){this.price = price}
    setWarranty(warranty){this.warranty = warranty}
    setStock(stock){this.stock = stock}

    // getters
    getBrand(){return this.brand}
    getModel(){return this.model}
    getDescription(){return this.description}
    getImgPath(){return this.imgPath}
    getMaterial(){return this.material}
    getSize(){return this.size}
    getPrice(){return this.price}
    getWarranty(){return this.warranty}
    getStock(){return this.stock}

    const loadProduct = async()=>{// load common info from database
        const db = require('../db/db.js')
        const [info] = await db.getRow(table:'products',key:'id',keyVal:this.id)
        this.brand = info[0]['brand']
        this.model = info[0]['model']
        this.description = info[0]['stock']
        this.imgPath = info[0]['image_path']
        this.material = info[0]['material']
        this.size = info[0]['size']
        this.price = info[0]['price']
        this.warranty = info[0]['warranty']
        this.stock = info[0]['stock']
    }

    const saveProduct = async(category)=>{// save common info into database
        this.generateId('product')
        const db = require('../db/db.js')
        await db.insertRows({
            table:'products',
            info:{
                'id':this.id,
                'category':category
                'brand':this.brand,
                'model':this.model,
                'description':this.description,
                'image_path':this.imgPath,
                'material':this.material,
                'size':this.size,
                'price':this.price,
                'warranty':this.warranty,
                'stock':this.stock
            }
        })
    }
}

module.exports = Product