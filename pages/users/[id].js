import React, { useEffect, useState } from 'react'
import MyHead from '../../components/MyHead'
import { useRouter } from 'next/dist/client/router'
import styles from '../../styles/profile.module.css'
import { Container, Card, Button, Row, Col, Tab, Tabs } from 'react-bootstrap'

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
const UserID = ({ user }) => {
    const [key, setKey] = useState('general-info');

    return (
        <>
            <MyHead
                title={user.name}
            />
            <div className={`navHeight`}></div>
            <section className={`${styles.profileSection}`}>
                <Container>
                    <div className={`${styles.profileBox}`}>
                        <div className={`${styles.profileBox__imageBox}`}>
                            <img src={user.picture_url || '/images/dummy.png'} className={`${styles.profileBox__image}`}></img>
                        </div>
                        <div className={`${styles.profileBox__basicInfo}`}>
                            <h3 className={`${styles.profileBox__name}`}>{user.name}</h3>
                            <span className={`${styles.profileBox__userType} ${styles['profileBox__userType_' + user.user_type]}`}>{user.user_type}</span>
                        </div>
                    </div>

                    <div className={`${styles.basicInfoBox}`}>
                        <div className={`${styles.basicInfoBox__rating}`}>
                            <span className={`${styles.basicInfoBox__number}`}>{user.userRating}</span>
                            <span className={`${styles.basicInfoBox__text}`}>Rating</span>
                        </div>
                        <div className={`${styles.basicInfoBox__rating}`}>
                            <span className={`${styles.basicInfoBox__number}`}>200</span>
                            <span className={`${styles.basicInfoBox__text}`}>Total Bookings</span>
                        </div>
                    </div>
                    <div className={`breaker`}></div>
                    {user.user_type == 'musician' ? (
                        <Tabs
                            id="controlled-tab-example"
                            activeKey={key}
                            onSelect={(k) => {
                                if (k == 'profiles') {
                                    window.location.href = "https://youtube.com";
                                } else {
                                    setKey(k)
                                }
                            }
                            }
                            className="mb-3"
                        >
                            <Tab eventKey="general-info" title="General Info">
                                <div className={`${styles.profileDetail}`}>
                                    <h3 className={`${styles.profileDetail__alias}`}>{user.alias}</h3>
                                    <p>{user.bio}</p>
                                    <div className={`${styles.profileDetail__textField}`}>
                                        <span className={`${styles.profileDetail__title}`}>Band Name</span>
                                        <span className={`${styles.profileDetail__description}`}>Coldplay</span>
                                    </div>
                                    <div className={`${styles.profileDetail__textField}`}>
                                        <span className={`${styles.profileDetail__title}`}>Genre</span>
                                        <div className={`${styles.profileDetail__chips}`}>
                                            {user.musicianGenres.map(item => (
                                                <span key={item._id} className={`${styles.profileDetail__chipsDetail}`}>{item.name}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className={`${styles.profileDetail__textField}`}>
                                        <span className={`${styles.profileDetail__title}`}>Instruments</span>
                                        <div className={`${styles.profileDetail__chips}`}>
                                            {user.musicianInstruments.map(item => (
                                                <span key={item._id} className={`${styles.profileDetail__chipsDetail}`}>{item.name}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="calendar" title="Calendar">
                                <p>Redirecting To Calendar...</p>
                            </Tab>
                            <Tab eventKey="media" title="Media">
                                <p>Redirecting To Media...</p>

                            </Tab>
                            <Tab eventKey="reviews" title="Reviews">
                                <p>Redirecting To Reviews...</p>
                            </Tab>

                        </Tabs>
                    ) : (
                        <Tabs
                            id="controlled-tab-example"
                            activeKey={key}
                            className="mb-3"
                        >
                            <Tab eventKey="general-info" title="General Info">
                                <div className={`${styles.profileDetail}`}>
                                    <p>{user.bio}</p>
                                    <div className={`${styles.profileDetail__textField}`}>
                                        <span className={`${styles.profileDetail__title}`}>Location</span>
                                        <span className={`${styles.profileDetail__description}`}>{user.location}</span>
                                    </div>
                                </div>
                            </Tab>
                        </Tabs>
                    )}


                </Container>
            </section>
        </>
    )
}

export default UserID
