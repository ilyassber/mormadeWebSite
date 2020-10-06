import React, { useEffect, useState } from 'react'
import { parseCookies } from '../../lib/parseCookies'
import { useRouter } from "next/router";
import ArticleDisplayer from '../../components/elements/article/ArticleDisplayer'
import querystring from 'querystring'
import { postRequest } from '../../services/api/post/postRequest'
import { getRequest } from '../../services/api/get/getRequest'
import { strict } from 'assert';

const Story = props => {

    let content = (
        <div className="w-full h-screen bg-xw-100" >
            <ArticleDisplayer story={props.story} />
        </div>
    );

    return content;
}

export async function getStaticPaths() {

    const stories = await getRequest(process.env.domain + '/api/articles/')
        .then(res => {
            return (res)
        })

    const paths = stories.map((story) => `/stories/${story.url}`)

    console.log(paths)

    return { paths, fallback: false }
}

export async function getStaticProps(context) {

    console.log(context)

    let current = context.params.story
    let id = current.split('-')[0]

    const story = await getRequest(process.env.domain + '/api/articles/' + id)
        .then(res => {
            console.log(res)
            return (res)
        })
        .catch(err => {
            return null
        })

    return {
        props: {
            story: story
        }
    }
}

export default Story