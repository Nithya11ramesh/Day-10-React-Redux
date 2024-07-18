import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

function ProductCard() {
  // fetching data from redux store
  const items = useSelector((state) => state.allCart.items);

  const dispatch = useDispatch();

  return (
    <div className="container-fluid md-4">
      <div className="row">
        {items.map((item) => (
          <div
            key={item.id}
            className="card my-3 mx-3 p-2"
            style={{ width: "18rem" }}
          >
            <img src={item.img} className="card-img-top" alt={item.title} />
            <div className="card-body">
              <h5 className="card-title">Name:{item.title}</h5>
              <br/>
              <p className="card-text"><span> Price</span>: ${item.price}</p>
              <p className="text-muted">Description:{item.description}</p>
              <button
                className="btn btn-primary"
                onClick={() => dispatch(addToCart(item))}
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCard;