import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '@app/pages/cart/cart.actions';
import { getPriceWithSale } from '@app/shared/functions/cart';
import { RootState } from '@app/stores/reducer';
import { Product } from '@app/shared/constant/entity/\bproduct';
import { Category } from '@app/shared/constant/entity/category';
import { pricePipe } from '@app/shared/helpers/pipes/price-pipe';

interface Props {
  product: Product
}

const initialCategory = {
  id: '',
  key: '',
  name: ''
}

export default function ProductMiniature(props: Props) {
  const { product } = props;
  const categories = useSelector((state: RootState) => state.categories.list);
  const dispatch = useDispatch();

  let carts = useSelector((state: RootState) => state.carts.cartList);

  // handle rating
  let rating = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= parseInt(product.stars)) {
      rating.push(<span key={i} className="fa fa-star checked"></span>)
    } else {
      rating.push(<span key={i} className="fa fa-star"></span>)
    }
  }

  // handle price
  let priceWithSale = getPriceWithSale(product.price, product.sales);
  let fullPrice = product.price;
  let category = (categories && categories.length) ? categories.find((item: Category) =>item.key === product.type) : {...initialCategory};

  const handleAddCart = () => {
    dispatch(addCart(product));
  };

  return(
    <div className="product-miniature">
      <div className="product-inner">
        <div className="product-img">
          <img src={product.cover} alt={product.name}/>
        </div>
        <div className="product-action">
          <button className="btn btn-primary" onClick={handleAddCart}>ADD TO CART</button>
        </div>
      </div>
      <div className="product-text-wrapper">
        <p>{category.name}</p>
        <p className="product-name">{product.name}</p>
        <div className="product-rate">
          {rating}
        </div>
        { priceWithSale ? (
          <p className="product-price">
            <span className="txt-remove">{pricePipe(fullPrice)}</span>
            <span className="txt-highlight">{pricePipe(priceWithSale)}</span>
          </p>
          ) :
          (
            <p className="product-price">
              <span>{pricePipe(fullPrice)}</span>
          </p>
          )
        }
      </div>
    </div>
  )
}
