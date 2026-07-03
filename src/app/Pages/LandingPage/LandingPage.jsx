"use client";
import React from "react";
import "./LandingPage.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { FaGlobe, FaPhoneAlt } from "react-icons/fa";
import {  MdEmail } from "react-icons/md";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FaLocationDot } from "react-icons/fa6";

function LandingPage() {

  const { ref, inView } = useInView({
    triggerOnce: true, // run only once
    threshold: 0.3, // start when 30% visible
  });

  return (
    <>

      <section className="HeroSection">
        <Container fluid className="container-xl">
          <div className="hero-inner">
            <div className="hero-content">
              <div className="HeroHead">
                <div className="hero-eyebrow">
                  <div className="eyebrow-line"></div>
                  <span className="eyebrow-text">
                    RCIC-IRB Certified · Since 2017
                  </span>
                </div>
                <h1> <small>Your</small> <span>Canadian Dream</span> Starts Here</h1>
              </div>
              <p className="hero-sub">
                Expert Canadian immigration consulting backed by a <span>Regulated
                Canadian Immigration Consultant (RCIC-IRB)</span> with over 8 years of
                successful cases across Express Entry, PR, Work Permits, Study
                Visas, and Family Sponsorships.
              </p>
              <div className="hero-buttons">
                <Link href="#contact" className="btn-primary">
                  Book Free Consultation
                </Link>
                <Link href="#services" className="btn-outline">
                  Our Services
                </Link>
              </div>
            </div>
            <div className="hero-image-wrap">
              <Image src="/Images/HeroImg.png" alt="client-1" width={900} height={900} priority />
              <div className="hero-badge">
                <div className="badge-icon">🍁</div>
                <div className="badge-text">
                  <p>Canada Licence</p>
                  <strong>R518464 · Active</strong>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="ServicesSec" id="services">
        <Container fluid className="container-xl">
          <div className="services-inner">
            <div className="section-header">
              <span>What We Do</span>
              <h2>Immigration Services</h2>
            </div>
            <div className="services-grid">

              <div className="service-card">
                <div className="service-icon">🚀</div>
                <h3 className="service-title">Express Entry</h3>
                <p className="service-desc">
                  Federal Skilled Worker, Canadian Experience Class, and Federal
                  Skilled Trades programs. We maximize your CRS score and guide
                  you every step to permanent residency.
                </p>
              </div>

              <div className="service-card">
                <div className="service-icon">💼</div>
                <h3 className="service-title">Work Permits</h3>
                <p className="service-desc">
                  LMIA-based and LMIA-exempt work permits, intra-company
                  transfers, and post-graduation work permits (PGWP) for
                  international graduates.
                </p>
              </div>

              <div className="service-card">
                <div className="service-icon">🎓</div>
                <h3 className="service-title">Study Permits</h3>
                <p className="service-desc">
                  Study permit applications for DLIs across Canada, SDS stream
                  eligibility assessment, and renewals to keep your status valid
                  throughout your education.
                </p>
              </div>

              <div className="service-card">
                <div className="service-icon">👨‍👩‍👧</div>
                <h3 className="service-title">Family Sponsorship</h3>
                <p className="service-desc">
                  Spouse, common-law partner, dependent children, parents and
                  grandparents sponsorship applications with comprehensive
                  documentation support.
                </p>
              </div>

              <div className="service-card">
                <div className="service-icon">🌏</div>
                <h3 className="service-title">Provincial Nominee Program</h3>
                <p className="service-desc">
                  PNP streams across Ontario, British Columbia, Alberta, and more.
                  We identify the best provincial pathway for your profile and
                  occupation.
                </p>
              </div>

              <div className="service-card">
                <div className="service-icon">⚖️</div>
                <h3 className="service-title">IRB Representation</h3>
                <p className="service-desc">
                  As an RCIC-IRB, Angad Sachdeva is authorized to represent
                  clients before the Immigration and Refugee Board — refugee
                  claims, appeals, and admissibility hearings.
                </p>
              </div>

            </div>
          </div>
        </Container>
      </section>

      <section className="WhyUsSec" id="why-us">
        <Container fluid className="container-xl">
          <div className="why-inner">
            <div className="section-header">
              <span>Why Choose Us</span>
              <h2 className="section-title">
                Immigration Done Right — Every Time
              </h2>
            </div>
            <div className="why-grid">
              <div className="why-item">
                <div className="why-num">01</div>
                <div className="why-content">
                  <h3>Fully Licensed & Regulated</h3>
                  <p>
                    We are regulated by CICC, Canada's official governing body
                    for immigration consultants. Your case is in legally
                    authorized, accountable hands.
                  </p>
                </div>
              </div>
              <div className="why-item">
                <div className="why-num">02</div>
                <div className="why-content">
                  <h3>India-Canada Bridge</h3>
                  <p>
                    Dual-licensed in both Canada and India, we understand your
                    journey from both sides — making us uniquely equipped to
                    serve Indian applicants.
                  </p>
                </div>
              </div>
              <div className="why-item">
                <div className="why-num">03</div>
                <div className="why-content">
                  <h3>IRB Authorized</h3>
                  <p>
                    Our Class L3 RCIC-IRB designation allows us to represent
                    clients at the Immigration and Refugee Board — a rare and
                    important distinction.
                  </p>
                </div>
              </div>
              <div className="why-item">
                <div className="why-num">04</div>
                <div className="why-content">
                  <h3>Personalized Strategy</h3>
                  <p>
                    Every file gets a customized pathway. We don't use templates
                    — we build your application around your individual profile,
                    strengths, and goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="LegalSection">
        <Container fluid className="container-xl">
          <Row>
            <Col md={4}>
              <div className="LegalItemsDiv">
                <div className="LegalItems">
                  <Image
                    src="/Images/balance.png"
                    alt="balance"
                    width={80}
                    height={80}
                    priority
                  />
                  <h3>Experienced Legal Team </h3>
                </div>
                <p>
                  Our attorneys bring extensive courtroom experience and deep
                  legal expertise to deliver strategic representation and
                  protect your best interests.
                </p>
                <Link className="btn" href="#">
                  Meet Our Attorneys
                </Link>
              </div>
            </Col>
            <Col md={4}>
              <div className="LegalItemsDiv">
                <div className="LegalItems">
                  <Image
                    src="/Images/handshake.png"
                    alt="handshake"
                    width={80}
                    height={80}
                    priority
                  />
                  <h3>Client-Focused Approach</h3>
                </div>
                <p>
                  We provide personalized legal strategies, clear
                  communication, and dedicated support tailored to every
                  client’s unique situation.
                </p>
                <Link className="btn" href="#">
                  Our Legal Services
                </Link>
              </div>
            </Col>
            <Col md={4}>
              <div className="LegalItemsDiv">
                <div className="LegalItems">
                  <Image
                    src="/Images/achieve.png"
                    alt="achieve"
                    width={80}
                    height={80}
                    priority
                  />
                  <h3>Proven Track Record </h3>
                </div>
                <p>
                  With a strong history of successful case outcomes, we
                  deliver results-driven legal solutions built on integrity
                  and professionalism.
                </p>
                <Link className="btn" href="#">
                  View Case Results
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="CounterSec" ref={ref}>
        <Container fluid className="container-xl">
          <div className="CounterData">
            <div className="CounterItems">
              <h2>{inView && <CountUp end={2000} duration={3} />}+</h2>
              <p>Client Consultations</p>
            </div>

            <div className="CounterItems">
              <h2>{inView && <CountUp end={90} duration={3} />}%</h2>
              <p>Satisfied Clients</p>
            </div>

            <div className="CounterItems">
              <h2>{inView && <CountUp end={150} duration={3} />}m</h2>
              <p>Recovered cost for clients</p>
            </div>

            <div className="CounterItems">
              <h2>{inView && <CountUp end={25} duration={3} />}+</h2>
              <p>Professional Attorneys</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="WorkProcessSec">
        <Container fluid className="container-xl">
          <div className="ProcessData">
            <div className="leftProcess">
              <Image
                src="/Images/wrkprocess.webp"
                alt="wrkprocess"
                width={642}
                height={600}
                priority
              />
            </div>
            <div className="RightProcess">
              <div className="prossshead">
                <span>Work Process</span>
                <h2>
                  Proven Approach to <br /> Legal Success
                </h2>
              </div>
              <div className="ProcessCaseItems">
                <div className="CaseItems">
                  <span>1</span>
                  <div className="CaseTexed">
                    <h4>Case Evaluation</h4>
                    <p>
                      We carefully review your situation, assess the legal
                      facts, and provide clear guidance on your options and the
                      best strategy moving forward.
                    </p>
                  </div>
                </div>
                <div className="CaseItems">
                  <span>2</span>
                  <div className="CaseTexed">
                    <h4>Strategy Development</h4>
                    <p>
                      Our team gathers evidence, prepares documentation, and
                      builds a strong legal strategy designed to protect your
                      rights and strengthen your position.
                    </p>
                  </div>
                </div>
                <div className="CaseItems">
                  <span>3</span>
                  <div className="CaseTexed">
                    <h4>Case Resolution</h4>
                    <p>
                      We represent you in negotiations or court proceedings,
                      advocating aggressively to secure the best possible
                      outcome for your case.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="CompanyLogoSec">
        <Container fluid className="container-xl">
          <div className="CompanyLogoData">
            <Image src="/Images/headerlogo.png" alt="headerlogo" width={1200} height={600} priority />
          </div>
        </Container> 
      </section>

      <section className="ContactSec" id="contact">
        <Container fluid className="container-xl">
          <div className="ContactData">
            <div className="Contact-Texed">
              <div className="ContactHead">
                <span>Get in Touch</span>
                <h2>
                  Start Your Immigration <br /> Journey Today
                </h2>
                <p>
                  Book a free consultation and let us assess your eligibility.
                  We'll explain your options clearly and build a roadmap for
                  your Canadian future.
                </p>
              </div>
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaLocationDot />
                  </div>
                  <div className="cont-text">
                    <h6>Office</h6>
                    <p>Kingston, Ontario, Canada</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <FaPhoneAlt />
                  </div>
                  <div className="cont-text">
                    <h6>Phone</h6>
                    <Link href="tel:(647) 518-5500">(647) 518-5500</Link>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <MdEmail />
                  </div>
                  <div className="cont-text">
                    <h6>Email</h6>
                    <Link href="mailto:info@dotcomimmigration.com">
                      info@dotcomimmigration.com
                    </Link>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <FaGlobe />
                  </div>
                  <div className="cont-text">
                    <h6>Licences</h6>
                    <p>Canada: R518464</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="Contact-Form">
              <h3>Free Consultation Request</h3>
              <Form>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="text" placeholder="" />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="text" placeholder="" />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="tel" placeholder="" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Service Interested In</Form.Label>
                  <Form.Select>
                    <option>Select a service...</option>
                    <option>Express Entry / Permanent Residency</option>
                    <option>Work Permit</option>
                    <option>Study Permit</option>
                    <option>Family Sponsorship</option>
                    <option>Provincial Nominee Program</option>
                    <option>IRB Representation</option>
                    <option>Other / Not Sure</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Tell Us About Your Case</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Brief description of your immigration goals..."
                  />
                </Form.Group>

                <Button variant="dark" size="lg" className="w-100">
                  Request Free Consultation →
                </Button>
              </Form>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default LandingPage;
