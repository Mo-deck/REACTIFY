import Product from "./Product";

const products = [
    {
        id:1,
        urlImage: "https://img.freepik.com/free-photo/woman-choosing-orange-striped-dress_329181-9208.jpg?semt=ais_hybrid",
        price: 98.99
    },
    {
        id:2,
        urlImage: "https://img.freepik.com/free-photo/dress-ballet-shoes_155003-641.jpg?semt=ais_hybrid",
        price: 65.75
    },
    {
        id:3,
        urlImage: "https://img.freepik.com/free-photo/graphic-woman-dress-trendy-design-white-background_460848-13623.jpg?semt=ais_hybrid" ,
        price: 45.5
    },
    {
        id:4,
        urlImage: "https://img.freepik.com/free-photo/fashion-woman-with-clothes_1203-8302.jpg?semt=ais_hybrid" ,
        price: 87.90
    },
    {
        id:5,
        urlImage: "https://img.freepik.com/premium-photo/pattern_714485-1841.jpg?uid=R132417330&ga=GA1.1.2049926210.1733205502&semt=ais_hybrid" ,
        price: 34.56
    },
    {
        id:6,
        urlImage: "https://img.freepik.com/premium-photo/beautiful-elegant-evening-women-s-dress-white-background_236836-21154.jpg?uid=R132417330&ga=GA1.1.2049926210.1733205502&semt=ais_hybrid",
        price: 60.12
    },
    
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
