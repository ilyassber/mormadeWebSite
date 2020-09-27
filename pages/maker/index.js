import React, { useState, useEffect } from 'react'
import { parseCookies } from '../../lib/parseCookies'
import { Navbar, SideBar, WelcomeBar } from '../../components/elements/bar'
import { ProductGrid } from '../../components/widgets/product'
import ProductGridList from '../../components/elements/list/ProductGridList'
import { AddProduct } from '../../components/elements/product'
import AddArticle from '../../components/elements/article/AddArticle'
import ArticleList from '../../components/elements/list/ArticleList'
import { getRequest } from '../../services/api/get/getRequest'
import { postRequest } from '../../services/api/post/postRequest'
import ArticleBanner from '../../components/widgets/article/ArticleBanner'
import querystring from 'querystring'

const UserPage = props => {

  console.log(props.cookies)
  console.log(props.data)

  const [data, setData] = useState({ products: null, articles: null });
  const [isLoading, setIsLoading] = useState(false);
  const [clikced, setClicked] = useState(0)

  useEffect(() => {
    console.log('useEffect runs');
    setIsLoading(true);
    if (props.cookies.utoken != null) {
      getRequest(process.env.domain + '/api/products/')
        .then(res => {
          console.log(res)
          let products = res
          //setData({...data , products: JSON.stringify(res)});
          //setIsLoading(false);
          postRequest(querystring.stringify({
            operation: "all"
          }), props.cookies['csrftoken'], process.env.domain + '/api/articles/')
            .then(res => {
              console.log(res)
              setData({ products: JSON.stringify(products), articles: JSON.stringify(res) });
              setIsLoading(false);
            })
        })
    } else {
      window.location = '/maker/auth'
    }
  }, []);

  let content = <p>Loading characters...</p>;

  if (!isLoading) {
    console.log(data)
    const productsList = (data.products) ? JSON.parse(data.products).map(function (product) {
      return <ProductGrid className="h-auto w-auto m-2" key={product.id} data={product} owner="ilyass" />
    }) : null

    const articlesList = (data.articles) ? JSON.parse(data.articles).map(function (article) {
      localStorage.setItem(article.url, JSON.stringify(article))
      return <ArticleBanner className="h-auto w-auto m-4" key={article.id} data={article} />
    }) : null

    const sideBarData = [{ id: 0, value: 'Products' }, { id: 1, value: 'Stories' }, { id: 2, value: 'Add Product' }, { id: 3, value: 'Add Story' }]
    let comp1 = (<ProductGridList className="p-2" data={productsList} />)
    let comp2 = (<ArticleList className="p-2" data={articlesList} />)
    let comp3 = (<AddProduct className="p-2" cookies={props.cookies} />)
    let comp4 = (<AddArticle className="p-2" cookies={props.cookies} />)
    const componentsList = [
      comp1,
      comp2,
      comp3,
      comp4
    ]

    content = (
      <div className="w-full">
        <Navbar cookies={props.cookies} className="w-full" />
        <WelcomeBar className="pt-12" />
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