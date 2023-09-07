const misProductos = [
    { id: 1, nombre: "Camiseta", precio: 5000, stock: 100,  img: "../img/kobeBryant.jpg", idCat: "1" },
    { id: 2, nombre: "Camiseta", precio: 5000, stock: 100, img: "../img/michaelJordan.jpg", idCat: "1" },
    { id: 3, nombre: "Camiseta", precio: 5000, stock: 100, img: "../img/StephCurry.jpeg", idCat: "1" },
    { id: 4, nombre: "Camiseta", precio: 5000, stock: 100, img: "../img/vinceCarter.jpg", idCat: "1" },
    { id: 5, nombre: "Pantalon", precio: 4000, stock: 100, img: "../img/pantalonChicago.jpg", idCat: "2" },
    { id: 6, nombre: "Pantalon", precio: 4000, stock: 100, img: "../img/pantalonKnicks.jpg", idCat: "2" },
    { id: 7, nombre: "Pantalon", precio: 4000, stock: 100, img: "../img/pantalonMagic.jpg", idCat: "2" },
    { id: 8, nombre: "Pantalon", precio: 4000, stock: 100, img: "../img/pantalonMiami.jpg", idCat: "2" },
    { id: 9, nombre: "Conjunto", precio: 8000, stock: 100, img: "../img/conjuntoChicago.jpg", idCat: "3" },
    { id: 10, nombre: "Conjunto", precio: 8000, stock: 100, img: "../img/conjuntoGolden.jpg", idCat: "3" },
    { id: 11, nombre: "Conjunto", precio: 8000, stock: 100, img: "../img/conjuntoLakers.jpg", idCat: "3" },
    { id: 12, nombre: "Conjunto", precio: 8000, stock: 100, img: "../img/conjuntoPhila.jpg", idCat: "3" },
  
  ];
  
  export const getProductos = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(misProductos);
      }, 100);
    });
  };
  
  
  export const getUnProducto = (id) => {
    return new Promise(resolve => {
      setTimeout( () => {
        const producto = misProductos.find(prod=> prod.id === id);
        resolve(producto)
      }, 100)
    })
  }
  
  export const getProductosPorCategoria = (idCategoria) => {
    return new Promise ( resolve => {
        setTimeout( () => {
            const productosCategoria = misProductos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100 )
    })
  }