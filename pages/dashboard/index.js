import React from 'react'
import { Container, Card, Button, Row, Col } from 'react-bootstrap'
import MyHead from '../../components/MyHead'
import styles from '../../styles/dashboard.module.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ReactStars from "react-rating-stars-component";
import Link from 'next/dist/client/link';


export const getServerSideProps = async () => {
    const res = await fetch(`${process.env.apiUrl}/user/dashboard`)
    const data = await res.json();
    return {
        props: { lists: data }
    }
}

const Index = ({ lists }) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 3, // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 500, min: 0 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <>
            <MyHead title={'Dashboard'} />
            <section className={`${styles.sliderSection} p-3 mt-5`}>
                {/* recent users */}
                <Container className={'mt-4'}>
                    <h4 className={`${styles.sliderSection__heading} mb-1`}>Recent Renters</h4>
                    <Carousel swipeable={true}
                        draggable={true}
                        infinite={true}
                        arrows={false}
                        itemClass="carousel-item-padding-40-px"
                        autoPlay={true}
                        autoPlaySpeed={5000}
                        minimumTouchDrag={20}
                        responsive={responsive}
                        className="mt-3"
                    >
                        {lists.recentUsers.map(item => (
                            <div key={item._id} className={styles.profileSection}>
                                <div className={styles.profileCard}>
                                    <div className={styles.profileCard__imageBox}>
                                        <img className={styles.profileCard__image} src={item.picture_url || 'https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png'}></img>
                                    </div>
                                    <div className={styles.profileCard__info}>
                                        <p className={styles.profileCard__name}>{item.name}</p>
                                        <span className={`${styles.profileCard__userType} ${styles['profileCard__userType_'+item.user_type]}`}>{item.user_type}</span>
                                        <ReactStars
                                            count={5}
                                            size={17}
                                            edit={false}
                                            value={item.userRating}
                                            isHalf={true}
                                            emptyIcon={<i className="far fa-star"></i>}
                                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                                            fullIcon={<i className="fa fa-star"></i>}
                                            activeColor="#ffd700"
                                        />
                                        <Link href={`/users/${item._id}`}><a className={`${styles.profileCard__button} mt-2`}>View Profile</a></Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </Container>
            
            </section>
            <div className={`${styles.breaker}`}></div>
            <section className={`${styles.sliderSection} p-3`}>
                    {/* popular users */}
                    <Container>
                    <h4 className={`${styles.sliderSection__heading} mb-1`}>Popular Renters</h4>
                    <Carousel 
                        swipeable={true}
                        draggable={true}
                        infinite={true}
                        arrows={false}
                        itemClass="carousel-item-padding-40-px"
                        autoPlay={true}
                        autoPlaySpeed={4000}
                        minimumTouchDrag={20}
                        responsive={responsive}
                        className="mt-3"
                    >
                        {lists.popularUsers.map(item => (
                            <div key={item._id} className={styles.profileSection}>
                                <div className={styles.profileCard}>
                                    <div className={styles.profileCard__imageBox}>
                                        <img className={styles.profileCard__image} src={item.picture_url || '/images/dummy.png'}></img>
                                    </div>
                                    <div className={styles.profileCard__info}>
                                        <p className={styles.profileCard__name}>{item.name}</p>
                                        <span className={`${styles.profileCard__userType} ${styles['profileCard__userType_'+item.user_type]}`}>{item.user_type}</span>
                                        <ReactStars
                                            count={5}
                                            size={17}
                                            edit={false}
                                            value={item.userRating}
                                            isHalf={true}
                                            emptyIcon={<i className="far fa-star"></i>}
                                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                                            fullIcon={<i className="fa fa-star"></i>}
                                            activeColor="#ffd700"
                                        />
                                        <Link href={`/users/${item._id}`}><a className={`${styles.profileCard__button} mt-2 mb-4`}>View Profile</a></Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </Container>
            </section>
            <div className={`${styles.breaker}`}></div>
        </>
    )
}
export default Index
