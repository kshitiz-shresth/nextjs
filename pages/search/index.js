import React, { useState } from 'react'
import { Container, Card, Button, Row, Col } from 'react-bootstrap'
import MyHead from '../../components/MyHead'
import Navbar from '../../components/Navbar'
import styles from '../../styles/search.module.css'
import ReactStars from "react-rating-stars-component";
import Link from 'next/dist/client/link';
import { style } from '@mui/system'


export const getServerSideProps = async () => {
    const res = await fetch(`${process.env.apiUrl}/user/dashboard`)
    const data = await res.json();
    return {
        props: { lists: data }
    }
}

const index = ({ lists }) => {
    let [state, setState] = useState({
        name: "",
        searchResults: []
    });
    const sendToParent = (name) => setState({ name: name })
    let searchResults;
    const changeName = (event) => {
        if (state.typingTimeout) {
            clearTimeout(state.typingTimeout);
        }

        setState({
            name: event.target.value,
            searchResults: lists.recentUsers.filter(list => list.name.toLowerCase().includes(event.target.value.toLowerCase()) && event.target.value)
        });
    }
    return (
        <>
            <MyHead title={'Search'} />
            <div className={`navHeight`}></div>
            <section className={`${styles.searchSection}`}>
                <div className={`container`}>
                    <div className={styles.searchBox}>
                        <input type="text" className={styles.searchBox__inputField} placeholder="Search" onChange={changeName}></input>
                    </div>
                </div>
            </section>

            <section className={`${styles.resultSection}`}>
                <div className={`container`}>
                    {
                        state.searchResults.length > 0 ?
                            (<>
                            <span className={`${styles.topText}`}>{`${state.searchResults.length} Results Found`}</span>
                            <ul className={`${styles.results}`}>
                                {state.searchResults.map((list) => (
                                    <>
                                        <Link href={`/users/${list._id}`} passHref>
                                            <li className={`${styles.results__list}`}>
                                                <span className={`${styles.imageBox}`}>
                                                    <img src={list.picture_url  || '/images/dummy.png'} className={`${styles.imageBox__image}`} />
                                                </span>
                                                <div className={`${styles.userDescription}`}>
                                                    <h3 className={`${styles.userDescription__name}`}>{list.name}</h3>
                                                    <ReactStars
                                                        count={5}
                                                        size={17}
                                                        edit={false}
                                                        value={list.userRating}
                                                        isHalf={true}
                                                        emptyIcon={<i className="far fa-star"></i>}
                                                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                                                        fullIcon={<i className="fa fa-star"></i>}
                                                        activeColor="#ffd700"
                                                    />
                                                    <p className={`${styles.userDescription__userType}`}>{list.user_type}</p>
                                                </div>
                                            </li>
                                        </Link>
                                    </>
                                ))}
                            </ul>
                            </>) : (
                                <span  className={`${styles.topText}`}>No Results Found</span>
                            )
                    }

                </div>
            </section>
        </>
    )
}
export default index
