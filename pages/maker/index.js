import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { parseCookies } from '../../lib/parseCookies'
import { Navbar, SideBar, WelcomeBar } from '../../components/elements/bar'
import { ProductGrid } from '../../components/widgets/product'
import ProductGridList from '../../components/elements/list/ProductGridList'
import { AddProduct } from '../../components/elements/product'
import AddArticle from '../../components/elements/article/AddArticle'

const UserPage = props => {

  console.log(props.cookies)
  console.log(props.data)

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [clikced, setClicked] = useState(0)

  useEffect(() => {
    console.log('useEffect runs');
    setIsLoading(true);
    axios.defaults.withCredentials = true
    if (props.cookies.utoken != null) {
      axios.get(process.env.domain + '/api/products/')
        .then(res => {
          console.log(res.data)
          setData(JSON.stringify(res.data));
          setIsLoading(false);
        })
    } else {
      window.location = '/maker/auth'
    }
  }, []);

  let content = <p>Loading characters...</p>;

  if (!isLoading && data && data.length > 0) {
    console.log(data)
    const productsList = JSON.parse(data).map(function (product) {
      return <ProductGrid className="h-auto w-auto m-2" key={product.id} data={product} owner="ilyass" />
    })

    const sideBarData = [{ id: 0, value: 'Products' }, { id: 1, value: 'Add Product' }, { id: 2, value: 'Add Article' }]
    let comp1 = (<ProductGridList className="p-2" data={productsList} />)
    let comp2 = (<AddProduct cookies={props.cookies} />)
    let comp3 = (<AddArticle cookies={props.cookies} />)
    const componentsList = [
      comp1,
      comp2,
      comp3
    ]

    content = (
      <div className="w-full">
        <Navbar cookies={props.cookies} className="w-full" />
        <WelcomeBar className="h-auto w-full pt-10" />
        <div className="w-full flex pt-10">
          <div className="w-64 h-full">
            <SideBar className="w-full h-full" clicked={clikced} data={sideBarData} onClick={(x) => setClicked(x)} />
          </div>
          <div className="w-full h-full">
            {componentsList[clikced]}
          </div>
        </div>
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