"use client";
import React, {useRef} from 'react'
import { Container } from 'react-bootstrap'
import "./CaseStudies.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function CaseStudies() {
  const swiperRef = useRef(null);
  const cases = [
  {
    id: 1,
    title: " Greenfield Plaza – Commercial Property Acquisition ",
    para: " Real Estate Law ",
    image:
      "/Images/slider1.webp",
  },
  {
    id: 2,
    title: "FusionTech – Corporate Structuring & Investment Deal",
    para: "Corporate Law",
    image:
      "/Images/slider2.webp",
  },
  {
    id: 3,
    title: " Harper vs. Exo Builders – Construction Contract Dispute ",
    para: "Civil Litigation",
    image:
      "/Images/slider3.webp",
  },
  {
    id: 4,
    title: " Global Talent Visa Approval for Senior Engineer",
    para: " Immigration Law",
    image:
      "/Images/slider4.webp",
  },
  {
    id: 5,
    title: " Smith Family Estate Multi-Generational Asset Protection",
    para: "Estate Planning",
    image:
      "/Images/slider5.webp",
  },
  {
    id: 6,
    title: "Johnson vs. Metro Transit Pedestrian Injury Settlement",
    para: "Personal Injury",
    image:
      "/Images/slider6.webp",
  },
  {
    id: 7,
    title: " State vs. Ramirez – Successful Criminal Defense Strategy",
    para: "Criminal Defense ",
    image:
      "/Images/slider7.webp",
  },
  {
    id: 8,
    title: "Williams Divorce Settlement – High Asset Family Dispute",
    para: "Family Law",
    image:
      "/Images/slider8.webp",
  },
  {
    id: 9,
    title: " Anderson vs. TechCorp – Workplace Discrimination Claim",
    para: "Emplolyement law",
    image:
      "/Images/slider9.webp",
  },
  
];
  return (
    <>

        <section className='CaseStudiesSec'>
            <Container fluid className='container-xl'>
                <div className="CaseStudyData">
                    <div className="leftcase">
                        <span>Case Studies</span>
                        <h2>Proven Legal <br /> Success Case <br /> Studies</h2>
                    </div>
                    <div className="StudyPara">
                        <p>Legal expertise demonstrated through real cases, strategic strategy, and dedicated representation helping clients overcome complex legal challenges.</p>
                    </div>
                </div>
            </Container>
            <div className="case-slider-section">
                <Swiper
                modules={[Autoplay]}
                spaceBetween={30}
                loop={true}
                speed={3000}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                onSwiper={(swiper) => {
                  const el = swiper.el;

                  const safeStop = () => {
                    if (swiper.autoplay && typeof swiper.autoplay.stop === "function") {
                      swiper.autoplay.stop();
                    }
                  };

                  const safeStart = () => {
                    if (swiper.autoplay && typeof swiper.autoplay.start === "function") {
                      swiper.autoplay.start();
                    }
                  };

                  el.addEventListener("mouseenter", safeStop);
                  el.addEventListener("mouseleave", safeStart);
                }}
                breakpoints={{
                    0: {
                    slidesPerView: 1,
                    },
                    576: {
                    slidesPerView: 1.2,
                    },
                    768: {
                    slidesPerView: 2,
                    },
                    1200: {
                    slidesPerView: 2.7,
                    },
                }}
                >
                {cases.map((item) => (
                    <SwiperSlide key={item.id}>
                    <div className="case-card">
                        <img src={item.image} alt={item.title} />
                        <div className="overlay"></div>
                        <div className="content">
                          <h4>{item.title}</h4>
                          <p>{item.para}</p>
                        </div>
                    </div>
                    </SwiperSlide>
                ))}
                </Swiper>
            </div>
        </section>
      
    </>
  )
}

export default CaseStudies
