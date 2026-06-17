"use client";
import React from 'react'
import './LandingPage.css'
import { Col, Container, Row } from 'react-bootstrap'
import Image from "next/image";
import Link from 'next/link';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { FaClock, FaPhoneAlt } from 'react-icons/fa';
import { MdAttachEmail } from 'react-icons/md';
import CaseStudies from '@/app/Components/CaseStudies/CaseStudies';
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Accordion from 'react-bootstrap/Accordion';
import TubeCursor from '@/app/Components/TubeCursor/TubeCursor';

function LandingPage() {

  const practiceAreas = [
    {
      title: 'Personal Injury',
      description: 'Representing victims in accident claims, negligence cases, compensation disputes, and injury-related litigation.',
      icon: '/Images/prct1.png',
      alt: 'Personal Injury',
    },
    {
      title: 'Criminal Defense',
      description: 'Defending clients against criminal charges, investigations, court proceedings, and legal advocacy.  ',
      icon: '/Images/prct2.png',
      alt: 'Criminal Defense',
    },
    {
      title: 'Family Law',
      description: 'Handling divorce matters, child custody disputes, alimony arrangements, and confidential family settlements.',
      icon: '/Images/prct3.png',
      alt: 'Family Law',
    },
    {
      title: 'Employment Law',
      description: 'Advising on workplace disputes, contract negotiations, wrongful termination, and labor compliance issues.',
      icon: '/Images/prct4.png',
      alt: 'Employment Law',
    },
    {
      title: 'Real Estate Law',
      description: 'Managing property transactions, lease agreements, land disputes, and real estate legal documentation.',
      icon: '/Images/prct5.png',
      alt: 'Real Estate Law',
    },
    {
      title: 'Corporate Law',
      description: 'Supporting business formation, shareholder agreements, mergers, acquisitions, and regulatory compliance.',
      icon: '/Images/prct6.png',
      alt: 'Corporate Law',
    },
  ];
  const { ref, inView } = useInView({
    triggerOnce: true, // run only once
    threshold: 0.3,    // start when 30% visible
  });

  const faqData = [
  {
    key: "legal",
    title: "Legal Services",
    items: [
      {
        question: "What legal services do you provide?",
        answer:
          "We handle civil litigation, corporate advisory, contract drafting, dispute resolution, and regulatory compliance services.",
      },
      {
        question: "How do I schedule a consultation?",
        answer:
          "You can book a consultation online or contact our office directly to arrange a meeting with one of our lawyers.",
      },
      {
        question: "Do you represent individual and business clients?",
        answer:
          "Yes, we represent individuals, startups, and corporations across a wide range of legal matters and industries.",
      },
      {
        question: "Can I change or reschedule my appointment?",
        answer:
          "Absolutely. Our lawyers prepare, review, and negotiate contracts to protect your legal and commercial interests.",
      },
      {
        question: "How long does a legal case usually take?",
        answer:
          "Case timelines depend on complexity, jurisdiction, and court schedules. We provide realistic expectations during consultation.",
      },
    ],
  },
  {
    key: "support",
    title: "Consultation & Support",
    items: [
      {
        question: "How can I contact my assigned lawyer?",
        answer:
          "You may communicate via email, phone, scheduled meetings, or our secure client communication platform.",
      },
      {
        question: "Do you provide ongoing legal updates?",
        answer:
          "Yes, clients receive regular progress updates, legal insights, and strategic recommendations throughout the case.",
      },
      {
        question: "What happens if urgent legal assistance is needed?",
        answer:
          "Our legal support team responds promptly to urgent matters and coordinates immediate lawyer assistance when required.",
      },
      {
        question: "Can I change or reschedule my appointment?",
        answer:
          "Yes, appointments may be rescheduled with prior notice, subject to lawyer availability and case priority.",
      },
      {
        question: "Do you offer remote consultations?",
        answer:
          "We provide secure video and phone consultations for clients who prefer flexible and remote legal assistance.",
      },
    ],
  },
  {
    key: "billing",
    title: "Billing & Documentation",
    items: [
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept bank transfers, credit cards, and corporate billing arrangements for approved clients.",
      },
      {
        question: "Will I receive a legal service invoice?",
        answer:
          "Yes, every engagement includes a transparent invoice detailing legal fees, taxes, and service scope.",
      },
      {
        question: "How are legal fees calculated?",
        answer:
          "Fees may be hourly, fixed, or success-based depending on case type and complexity, discussed upfront.",
      },
      {
        question: "Can I request a detailed cost breakdown?",
        answer:
          "Yes, we provide a clear breakdown of professional fees, administrative costs, and applicable taxes.",
      },
      {
        question: "Do you offer retainer or corporate packages?",
        answer:
          "We offer customized retainer packages for businesses requiring ongoing legal advisory support.",
      },
    ],
  },
];

  return (
    <>
{/* <TubeCursor/> */}

        <section className='HeroLandingSec'>
            <Container fluid className='container-xl'>
                <div className="HeroLandingData">
                    <div className="HeroHeading">
                        <span>Welcome to RCIC-IRB</span>
                        <h2>Transforming Equity With <br /> Precision And Gentle</h2>
                    </div>
                    <div className="HeroHeadingParaDiv">
                        <p>We provide trusted legal representation with a strategic approach, delivering clear guidance, strong advocacy, and reliable solutions for individuals and businesses seeking justice, protection, and long-term legal confidence.</p>
                        <div className="HeroClientData">
                            <div className="ClntItems">
                                <h4>2300+</h4>
                                <p>Satisfied Clients</p>
                            </div>
                            <Image src="/Images/client-1.png" alt="client-1" width={250} height={250}priority />
                        </div>
                    </div>
                    <div className="HeroCaseData">
                        <h5>Contract Case Handling</h5>
                        <h5>Strategic Legal Advisory</h5>
                        <h5>Tailored Legal Solutions</h5>
                        <h5>Court-Prepared Documentation</h5>
                    </div>
                </div>
            </Container>
        </section>

        <section className='LegalSection'>
            <Container fluid className='container-xl'>
                <Row>
                    <Col md={4}>
                        <Link href="#">
                            <div className="LegalItemsDiv">
                                <div className="LegalItems">
                                    <Image src="/Images/balance.png" alt="balance" width={80} height={80}priority />
                                    <h3>Experienced Legal Team  </h3>
                                </div>
                                <p>Our attorneys bring extensive courtroom experience and deep legal expertise to deliver strategic representation and protect your best interests.</p>
                                <Link className='btn' href="">Meet Our Attorneys</Link>
                            </div>
                        </Link>
                    </Col>
                    <Col md={4}>
                        <Link href="#">
                            <div className="LegalItemsDiv">
                                <div className="LegalItems">
                                    <Image src="/Images/handshake.png" alt="handshake" width={80} height={80}priority />
                                    <h3>Client-Focused Approach</h3>
                                </div>
                                <p>We provide personalized legal strategies, clear communication, and dedicated support tailored to every client’s unique situation.</p>
                                <Link className='btn' href="">Our Legal Services</Link>
                            </div>
                        </Link>
                    </Col>
                    <Col md={4}>
                        <Link href="#">
                            <div className="LegalItemsDiv">
                                <div className="LegalItems">
                                    <Image src="/Images/achieve.png" alt="achieve" width={80} height={80}priority />
                                    <h3>Proven Track Record </h3>
                                </div>
                                <p>With a strong history of successful case outcomes, we deliver results-driven legal solutions built on integrity and professionalism.</p>
                                <Link className='btn' href="">View Case Results</Link>
                            </div>
                        </Link>
                    </Col>
                </Row>
            </Container>                            
        </section>

        <section className='AboutFirmSec'>
            <Container fluid className='container-xl'>
            <div className="AbutFirmData">

                <div className="FirmDataDiv">
                    <div className="LeftFirmItem">
                        <div className="AbtFirmImage">
                            <Image src="/Images/abtfirm.webp" alt="abtfirm" width={500} height={410}priority />
                        </div>
                        <div className="Firmtexted">
                            <h2>90+ <br /> <span>Successful Cases</span></h2>
                            <p>Delivering consistent results through strategic advocacy, disciplined execution, and client-focused legal excellence.</p>
                        </div>
                    </div>
                    <div className="RytFirmItem">
                        <div className="FirmTexed">
                            <span>About Our Firm</span>
                            <h2>Our Legal Team Delivering <br /> Trusted Client Protection</h2>
                        </div>
                        <div className="FirmsTabsDiv">
                            <Tabs defaultActiveKey="mission" id="uncontrolled-tab-example" className="FirmTabs">
                                <Tab eventKey="mission" title="Our Mission" className='TabPara'>
                                    Our legal professionals are dedicated to delivering reliable counsel, ethical representation, and strategic solutions tailored to every client’s unique legal needs. We combine deep industry experience, continuous learning, and collaborative teamwork to secure strong outcomes and lasting client confidence.
                                </Tab>
                                <Tab eventKey="vission" title="Our Vission" className='TabPara'>
                                    Our vision is to become a trusted legal partner recognized for integrity, responsiveness, and measurable results across diverse practice areas. We continuously refine our methods, adopt modern legal technologies, and strengthen our expertise to provide dependable guidance in an evolving legal landscape.
                                </Tab>
                                <Tab eventKey="values" title="Our Values" className='TabPara'>
                                    We uphold transparency, accountability, and professionalism in every engagement, ensuring clients receive honest advice and consistent communication. Our commitment to excellence, respect, and responsibility guides each decision and strengthens long-term relationships built on trust.
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>

                <div className="FirmLocateDiv">
                    <Link href="">
                        <FaPhoneAlt size={48} />
                        <div className="loctitem">
                            <h6>Need Our Services?</h6>
                            <p>Call: +929 333 9296</p>
                        </div>
                    </Link>
                    <Link href="">
                        <FaClock size={48} />
                        <div className="loctitem">
                            <h6>Opening Hours</h6>
                            <p>Mon to Sat 08:00 - 20:0</p>
                        </div>
                    </Link>
                    <Link href="">
                        <MdAttachEmail size={48} />
                        <div className="loctitem">
                            <h6>Email Us</h6>
                            <p>contact@regalis.com</p>
                        </div>
                    </Link>
                </div>

            </div>
            </Container>                            
        </section>

        <section className='PracticeSec'>
            <Container fluid className='container-xl'>
            <div className="PracticeData">
                <div className="PracticeLeftItems">
                    <div className="PrctHead">
                        <span>Practice Area</span>
                        <h2>Experienced <br /> Lawyers Protecting <br /> Your Rights</h2>
                    </div>
                    <div className="f">
                        <Link href="">All practice area</Link>
                    </div>
                </div>
                <div className="PracticeRytItems">
                    {practiceAreas.map((area) => (
                        <div className="PractItems" key={area.title}>
                            <span>
                                <Image src={area.icon} alt={area.alt} width={60} height={60} priority />
                            </span>
                            <div className="PrctTexted">
                                <h4>{area.title}</h4>
                                <p>{area.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                

            </div>
            </Container>                            
        </section>

        <CaseStudies/>

        <section className="CounterSec" ref={ref}>
            <Container fluid className="container-xl">
                <div className="CounterData">

                <div className="CounterItems">
                    <h2>
                    {inView && <CountUp end={2000} duration={3} />}+
                    </h2>
                    <p>Client Consultations</p>
                </div>

                <div className="CounterItems">
                    <h2>
                    {inView && <CountUp end={90} duration={3} />}%
                    </h2>
                    <p>Satisfied Clients</p>
                </div>

                <div className="CounterItems">
                    <h2>
                    {inView && <CountUp end={150} duration={3} />}m
                    </h2>
                    <p>Recovered cost for clients</p>
                </div>

                <div className="CounterItems">
                    <h2>
                    {inView && <CountUp end={25} duration={3} />}+
                    </h2>
                    <p>Professional Attorneys</p>
                </div>

                </div>
            </Container>
        </section>

        <section className='WorkProcessSec'>
            <Container fluid className='container-xl'>
                <div className="ProcessData">
                    <div className="leftProcess">
                        <Image src="/Images/wrkprocess.webp" alt="wrkprocess" width={642} height={600}priority />
                    </div>
                    <div className="RightProcess">
                        <div className="prossshead">
                            <span>Work Process</span>
                            <h2>Proven Approach to <br /> Legal Success</h2>
                        </div>
                        <div className="ProcessCaseItems">
                            <div className="CaseItems">
                                <span>1</span>
                                <div className="CaseTexed">
                                    <h4>Case Evaluation</h4>
                                    <p>We carefully review your situation, assess the legal facts, and provide clear guidance on your options and the best strategy moving forward.</p>
                                </div>
                            </div>
                            <div className="CaseItems">
                                <span>2</span>
                                <div className="CaseTexed">
                                    <h4>Strategy Development</h4>
                                    <p>Our team gathers evidence, prepares documentation, and builds a strong legal strategy designed to protect your rights and strengthen your position.</p>
                                </div>
                            </div>
                            <div className="CaseItems">
                                <span>3</span>
                                <div className="CaseTexed">
                                    <h4>Case Resolution</h4>
                                    <p>We represent you in negotiations or court proceedings, advocating aggressively to secure the best possible outcome for your case.</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </Container>
        </section>

        <section className='FaQSec'>
            <Container>
                <div className="faq-wrapper">

                    <div className="faq-heading">
                        <span>FAQ</span>
                        <h2>
                        Frequently Asked <br />
                        Legal Questions
                        </h2>
                    </div>

                    <div className="faq-content">
                        <Tabs
                        // defaultActiveKey={faqData[0].key}
                        id="faq-tabs"
                        className="faq-contentTabs"
                        >
                        {faqData.map((tab) => (
                            <Tab
                            eventKey={tab.key}
                            title={tab.title}
                            key={tab.key}
                            >
                            <Accordion  className='FAQACCORDION'>
                            {/* <Accordion defaultActiveKey="0" className='FAQACCORDION'> */}
                                {tab.items.map((item, index) => (
                                <Accordion.Item
                                    eventKey={index.toString()}
                                    key={index}
                                >
                                    <Accordion.Header>
                                    {item.question}
                                    </Accordion.Header>

                                    <Accordion.Body>
                                    {item.answer}
                                    </Accordion.Body>
                                </Accordion.Item>
                                ))}
                            </Accordion>
                            </Tab>
                        ))}
                        </Tabs>
                    </div>

                </div>
            </Container>
        </section>

        

    
      
    </>
  )
}

export default LandingPage
