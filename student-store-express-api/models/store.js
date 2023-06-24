const { storage } = require ("../data/storage") //imports storage object


class store {
    static async getProducts(){
        //accesses the 'products' property and its value
        return storage.get("products").value();
    }
}

module.exports = store;