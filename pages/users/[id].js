import React from 'react'
import MyHead from '../../components/MyHead'
import { useRouter } from 'next/dist/client/router'
import styles from '../../styles/dashboard.module.css'
// export const getStaticPaths = async () => {
//     // Call an external API endpoint to get posts
//     const res = await fetch('http://52.88.23.115:4000/api/user/dashboard')
//     const posts = await res.json()

//     // Get the paths we want to pre-render based on posts
//     const paths = posts.recentUsers.map((post) => ({
//         params: { id: post._id },
//     }))

//     // We'll pre-render only these paths at build time.
//     // { fallback: false } means other routes should 404.
//     return { paths, fallback: false }
// }
// This also gets called at build time
export async function getServerSideProps({ params }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await fetch(`http://52.88.23.115:4000/api/user/${params.id}`)
    const user = (await res.json()).data

    // Pass post data to the page via props
    return { props: { user } }
}
const userID = ({ user }) => {

    return (
        <>
            <MyHead
                title={user.name}
            />
            <section className={`${styles.sliderSection} p-3`}>

            </section>
            <p>{JSON.stringify(user)}</p>
        </>
    )
}

export default userID
