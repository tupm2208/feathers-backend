const axios = require('axios');

/* eslint-disable no-unused-vars */
exports.Products = class Products {
  constructor (options) {
    this.options = options || {};
  }

  async find (params) {
    return [];
  }

  async get (id, params) {
    let data = {}
    await axios.get(`https://shop.adidas.jp/f/v1/pub/product/detail/${id}`) .then(function (response) {
        // handle success
        data = response.data
        data.status = true
      }).catch(function (error) {
        // handle error
        // console.log(error);
        data.status = false
        data.message = 'product not found!'
      });
      console.log('data: ', data)
    return data
  }

  async create (data, params) {
    if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current, params)));
    }

    return data;
  }

  async update (id, data, params) {
    return data;
  }

  async patch (id, data, params) {
    return data;
  }

  async remove (id, params) {
    return { id };
  }
}
