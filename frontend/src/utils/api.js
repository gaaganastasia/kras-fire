class Api {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  }

  getProducts() {
    return fetch(`${this._url}/products`, {
      method: "GET",
      headers: {
        ...this._headers,
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        return err;
      });
  }

  postProduct(product) {
    return fetch(`${this._url}/products`, {
      method: "POST",
      headers: {
        ...this._headers,
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({
        name: String(product.name),
        category: String(product.category),
        description: String(product.description),
        price: String(product.price),
        video: String(product.video),
        mainImage: String(product.mainImage),
        discount: String(product.discount),
      }),
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        return err;
      });
  }

  deleteProduct(id) {
    return fetch(`${this._url}/products/${id}`, {
      method: "DELETE",
      headers: {
        ...this._headers,
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        return err;
      });
  }

  editProductInfo(id, name, description, price, discount) {
    return fetch(`${this._url}/products/${id},`, {
      method: "PATCH",
      headers: {
        ...this._headers,
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({
        name: name,
        description: description,
        price: price,
        discount: discount,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        return err;
      });
  }

  /////////////////

  getPhotos() {
    return fetch(`${this._url}/photos`, {
      method: "GET",
      headers: {
        ...this._headers,
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        return err;
      });
  }

  postPhoto(productId, link) {
    return fetch(`${this._url}/photos`, {
      method: "POST",
      headers: {
        ...this._headers,
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({
        link: String(link),
        productId: String(productId),
      }),
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        return err;
      });
  }

  deletePhoto(id) {
    return fetch(`${this._url}/photos/${id}`, {
      method: "DELETE",
      headers: {
        ...this._headers,
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        return err;
      });
  }

  /////////////////

  authorize(password) {
    return fetch(`${this._url}/signin`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        password: String(password),
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.token) {
          localStorage.setItem("jwt", data.token);
          return data;
        }
      })
      .catch((err) => {
        return err;
      });
  }

  // checkToken(jwt) {
  //   return fetch(`${this._url}/signin`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${jwt}`,
  //     },
  //   })
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       return data;
  //     })
  //     .catch((err) => {
  //       return err;
  //     });
  // }
}

const api = new Api({
  url: "http://localhost:3001/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default api;
