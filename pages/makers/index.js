import React, { useState, useEffect } from 'react'
import { parseCookies } from '../../lib/parseCookies'
import { Navbar, WelcomeBar } from '../../components/elements/bar'
import ArticleList from '../../components/elements/list/ArticleList'
import { postRequest } from '../../services/api/post/postRequest'
import ArticleBanner from '../../components/widgets/article/ArticleBanner'
import querystring from 'querystring'
import WaitList from '../../components/elements/discuss/WaitList'

const Makers = props => {

    let content = (
        <div className="w-screen flex flex-col items-center">
            <Navbar cookies={props.cookies} className="w-full" />
            <WelcomeBar className="w-screen pt-12" />
            <div className="w-full h-auto flex flew-wrap flex-col items-center pt-10">
                <div className="w-full h-full max-w-screen-sm flex flex-wrap flex-col items-center content-center">
                    <WaitList className="w-full px-2" csrf={props.cookies['csrftoken']} />
                </div>
            </div>
        </div>
    )

    return content;
};

Makers.getInitialProps = ({ req }) => {
    const cookies = parseCookies(req);

    return {
        cookies: cookies,
    };
};

export default Makers;