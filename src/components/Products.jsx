import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProducts } from "../Redux/Products/Action";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const data = useSelector((state) => state?.products);
  console.log(data);

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Electronics
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {data?.products?.map((product, index) => {
              return (
                <div key={product._id} className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      src={`http://localhost:8006/uploads/products/${product.thumbnail}`}
                      alt={`Product ${index}`}
                      className="h-auto w-auto object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <Link to={`/SingleProducts/${product?._id}`}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {product.Name}
                        </Link>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {product.description}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      {product.price}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;

//   <Card sx={{ maxWidth: 345 }} key={product._id}>
//   <CardMedia
//     sx={{ height: 140 }}
//     image={`http://localhost:8006/uploads/products/${product.thumbnail}`}
//     title="Product Image"
//     alt={`Product ${index}`}
//   />
//   {/* <img src={`https://tse2.mm.bing.net/th?id=OIP.avb9nDfw3kq7NOoP0grM4wHaEK&pid=Api&P=0&h=180`} /> */}
//   <CardContent>
//     <Typography gutterBottom variant="h5" component="div">
//       {product.Name}
//     </Typography>
//     <Typography variant="body2" color="text.secondary">
//       {product.description}
//     </Typography>
//   </CardContent>
//   <CardActions>
//     <Button size="small">Share</Button>
//     <Button size="small">Learn More</Button>
//   </CardActions>
// </Card>
