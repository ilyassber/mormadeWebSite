import React, { useState, useEffect } from 'react'
import { parseCookies } from '../../lib/parseCookies'
import { getRequest } from '../../services/api/get/getRequest'
import WaitList from '../../components/elements/discuss/WaitList'
import Layout from '../../components/layout'

const Regions = props => {

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

Regions.getInitialProps = async ({ req }) => {
    const cookies = parseCookies(req);

    const tags = await getRequest(process.env.domain + '/api/categories/').then((res) => {
        return (res)
    })

    return {
        cookies: cookies,
        tags: tags
    }
};

export default Regions