import React from 'react'
import { Container, Card, Button, Row, Col } from 'react-bootstrap'
import MyHead from '../../components/MyHead'
import Navbar from '../../components/Navbar'
import styles from '../../styles/dashboard.module.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ReactStars from "react-rating-stars-component";
import Link from 'next/dist/client/link';
export const getServerSideProps = async () => {
        const res = await fetch("http://52.88.23.115:4000/api/user/dashboard?user_id=61968d32bdf5460035a89d11")
        const data = await res.json();
        return {
            props: { lists: data }
        }    
}

const index = ({ lists }) => {
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
            <section className={`${styles.sliderSection} p-3`}>
                <Container>
                    <h5 className="text-light">Recent Renters</h5>
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
                                        <h5 className={styles.profileCard__name}>{item.name}</h5>
                                        <span className={styles.profileCard__userType}>{item.user_type}</span>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            edit={false}
                                            value={item.userRating}
                                            isHalf={true}
                                            emptyIcon={<i className="far fa-star"></i>}
                                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                                            fullIcon={<i className="fa fa-star"></i>}
                                            activeColor="#ffd700"
                                        />
                                        <Link href={`/users/${item._id}`}><a className="btn btn-primary mb-4">View Profile</a></Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </Container>
            </section>

        </>
    )
}
export default index
