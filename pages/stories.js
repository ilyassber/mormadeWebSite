import Layout from '../components/layout'
import NavBar from './../components/navbar'

import Link from 'next/link'


function Stories(){
    return (
        <Layout>
            <div className="w-full h-40"></div>
            <div className="flex justify-center items-center w-full ">
               <h1>stories</h1>
           </div>
        </Layout>
    )
}

export default Stories