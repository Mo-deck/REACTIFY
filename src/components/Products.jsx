import Product from "./Product";

const products = [
    {
        id:1,
        name: "Pizza",
        urlImage: "https://images.unsplash.com/photo-1576458088443-04a19bb13da6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBpenphfGVufDB8fDB8fHww",
        price: 0.01
    },
    {
        id:2,
        name: "vegan salad bowl",
        urlImage: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVnYW4lMjBzYWxhZCUyMGJvd2x8ZW58MHx8MHx8fDA%3D",
        price: 0.02
    },
    {
        id:3,
        name: "Pasto Pasta",
        urlImage: "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBhc3RvJTIwcGFzdGF8ZW58MHx8MHx8fDA%3D" ,
        price: 0.03
    },
    {
        id:4,
        name: "udon salad",
        urlImage: "https://plus.unsplash.com/premium_photo-1664392068994-9277c9ed4837?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dWRvbiUyMHNhbGFkfGVufDB8fDB8fHww" ,
        price: 0.04
    },
    {
        id:5,
        name: "premium food",
        urlImage: "https://plus.unsplash.com/premium_photo-1683707120585-54decb90edd7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByZW1pdW0lMjBmb29kfGVufDB8fDB8fHww" ,
        price: 0.05
    },
    {
        id:6,
        name: "cool drink",
        urlImage: "https://images.pexels.com/photos/1148215/pexels-photo-1148215.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 0.06
    }
]

const Products = () => {
    return (
          <div className="grid">
          {
             products.map((product) => (
                <Product key={product.id} product={product} />
        ))
           }
          </div>
    );
}

export default Products;
