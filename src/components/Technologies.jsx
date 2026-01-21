import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

const Technologies = () => {
    const techs = [
        { icon: 'fab fa-java', name: 'Java / Spring Boot' },
        { icon: 'fab fa-node-js', name: 'Node.js' },
        { icon: 'fab fa-react', name: 'React' },
        { icon: 'fas fa-network-wired', name: 'REST APIs' },
        { icon: 'fas fa-database', name: 'MySQL / PostgreSQL' },
        { icon: 'fas fa-stream', name: 'Redis / Kafka' },
        { icon: 'fab fa-docker', name: 'Docker / Cloud' },
        { icon: 'fab fa-aws', name: 'AWS' },
        { icon: 'fab fa-python', name: 'Python' },
    ];

    return (
        <section id="technologies" className="section-padding technologies-section">
            <div className="container">
                <h2>Technologies We Use</h2>

                <Swiper
                    modules={[Autoplay]}
                    loop={true}
                    centeredSlides={true}
                    grabCursor={true}
                    speed={1200} // smooth slide transition
                    autoplay={{
                        delay: 1000, // pause between slides
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false,
                    }}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    className="tech-swiper"
                >
                    {techs.map((tech, index) => (
                        <SwiperSlide key={index} className="tech-slide">
                            <div className="tech-item">
                                <i className={tech.icon}></i>
                                <span>{tech.name}</span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Technologies;

