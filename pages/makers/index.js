import React, { useState, useEffect } from 'react'
import { parseCookies } from '../../lib/parseCookies'
import { Navbar, WelcomeBar } from '../../components/elements/bar'
import ArticleList from '../../components/elements/list/ArticleList'
import { postRequest } from '../../services/api/post/postRequest'
import { getRequest } from '../../services/api/get/getRequest'
import ArticleBanner from '../../components/widgets/article/ArticleBanner'
import querystring from 'querystring'
import WaitList from '../../components/elements/discuss/WaitList'
import Layout from '../../components/layout'

const Makers = props => {

    let content = (
        <Layout tags={props.tags}>
            <div className="w-full flex flex-col items-center">
                <div className="w-full h-full max-w-screen-sm flex flex-wrap flex-col items-center content-center my-10">
                    <WaitList className="w-full px-2" csrf={props.cookies['csrftoken']} />
                </div>
            </div>
        </Layout>
    )

    return content;
};

Makers.getInitialProps = async ({ req }) => {
    const cookies = parseCookies(req);

    const tags = await getRequest(process.env.domain + '/api/categories/').then((res) => {
        return (res)
    })

    return {
        cookies: cookies,
        tags: tags
    }
};

export default Makers;