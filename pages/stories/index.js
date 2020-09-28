import React, { useState, useEffect } from 'react'
import { parseCookies } from '../../lib/parseCookies'
import { Navbar, WelcomeBar } from '../../components/elements/bar'
import ArticleList from '../../components/elements/list/ArticleList'
import { postRequest } from '../../services/api/post/postRequest'
import ArticleBanner from '../../components/widgets/article/ArticleBanner'
import querystring from 'querystring'

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
        }), props.cookies['csrftoken'],process.env.domain + '/api/articles/')
            .then(res => {
                console.log(res)
                setData(JSON.stringify(res))
                setIsLoading(false)
            })
    }, []);

    let content = null;

    if (!isLoading) {

        const articlesList = (data) ? JSON.parse(data).map(function (article) {
            return <ArticleBanner className="h-auto w-full max-w-screen-md m-4" key={article.id} data={article} />
        }) : null

        let articles = (<ArticleList className="w-full p-2" data={articlesList} />)

        content = (
            <div className="w-screen flex flex-col items-center">
                <Navbar cookies={props.cookies} className="w-full" />
                <WelcomeBar className="w-screen pt-12" />
                <div className="w-full h-auto flex pt-10">
                    <div className="w-full h-auto flex flex-col items-center">
                        {articles}
                    </div>
                </div>
            </div>
        );
    } else if (!isLoading && (!data || data.length === 0)) {
        content = null;
    }
    return content;
};

Stories.getInitialProps = ({ req }) => {
    const cookies = parseCookies(req);

    return {
        cookies: cookies,
    };
};

export default Stories;