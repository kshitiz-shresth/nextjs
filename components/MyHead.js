import React from 'react'
import Head from 'next/head'
const MyHead = (children) => {
    return (
        <>
            <Head>
                <title>{children.title}</title>
            </Head>
        </>
    )
}
export default MyHead;