import React, { useState, useEffect } from 'react'
import { parseCookies } from '../../lib/parseCookies'
import { Navbar, WelcomeBar } from '../../components/elements/bar'
import ArticleList from '../../components/elements/list/ArticleList'
import { postRequest } from '../../services/api/post/postRequest'
import ArticleBanner from '../../components/widgets/article/ArticleBanner'
import querystring from 'querystring'
import { getRequest } from '../../services/api/get/getRequest'
import Layout from '../../components/layout'

const Stories = props => {

    console.log(props.cookies)
    console.log(props.data)

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        console.log('useEffect runs');
        setIsLoading(true);
        postRequest(querystring.stringify({
            operation: "all"
        }), props.cookies['csrftoken'], process.env.domain + '/api/articles/')
            .then(res => {
                console.log(res)
                setData(JSON.stringify(res))
                setIsLoading(false)
            })
    }, []);

    let body = null;

    if (!isLoading) {

        const articlesList = (data) ? JSON.parse(data).map(function (article) {
            return <ArticleBanner className="h-auto w-full max-w-screen-md m-4" key={article.id} data={article} />
        }) : null

        let articles = (<ArticleList className="w-full p-2" data={articlesList} />)

        body = (
            <div className="w-full flex flex-col items-center">
                {articles}
            </div>
        );
    } else if (!isLoading && (!data || data.length === 0)) {
        body = null;
    }

    let content = (
        <Layout tags={props.tags}>
            {body}
        </Layout>
    )

    return content;
};

Stories.getInitialProps = async ({ req }) => {
    const cookies = parseCookies(req);

    const tags = await getRequest(process.env.domain + '/api/categories/').then((res) => {
        return (res)
    })

    return {
        cookies: cookies,
        tags: tags
    };
};

export default Stories;