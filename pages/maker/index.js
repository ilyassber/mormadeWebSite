import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { parseCookies } from '../../lib/parseCookies'
import { Navbar } from '../../components/elements'
import { ProductGrid } from '../../components/widgets/product'
import ProductGridList from '../../components/elements/list/ProductGridList'
import { AddProduct } from '../../components/elements/product'

const UserPage = props => {

  console.log(props.cookies)
  console.log(props.data)

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log('useEffect runs');
    setIsLoading(true);
    axios.defaults.withCredentials = true
    if (props.cookies.utoken != null) {
      axios.get('http://localhost:8000/products/')
      .then(res => {
        console.log(res.data)
        setData(JSON.stringify(res.data));
        setIsLoading(false);
      })
    } else {
      window.location = '/'
    }
  }, []);

  let content = <p>Loading characters...</p>;

  if (!isLoading && data && data.length > 0) {
    console.log(data)
    const productsList = JSON.parse(data).map(function(product){
      return <ProductGrid className="h-auto w-auto m-2" key={product.id} data={product} owner="ilyass" />
    })

    content = (
      <div className="w-full">
        <Navbar cookies={props.cookies} className="w-full" />
        <ProductGridList className="p-2 pt-10" data={productsList}/>
        <AddProduct cookies={props.cookies}/>
      </div>
    );
  } else if (!isLoading && (!data || data.length === 0)) {
    content = <p>Could not fetch any data.</p>;
  }
  return content;
};

UserPage.getInitialProps = ({ req }) => {
  const cookies = parseCookies(req);

  return {
    cookies: cookies,
    data: req.data
  };
};

export default UserPage;