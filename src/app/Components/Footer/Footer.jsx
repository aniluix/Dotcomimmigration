"use client";
import React from 'react'
import "./Footer.css"
import Link from 'next/link'
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <>

    <footer className="FooterSection">
      <Container fluid className="container-xl">
        <div className="FooterData">

          <div className="footer-inner">
            <div className="footer-logo">
              <h4>Dot.Com Immigration</h4>
            </div>
            <div className="footer-links">
              <Link href="#about">About</Link>
              <Link href="#services">Services</Link>
              <Link href="#why-us">Why Us</Link>
              <Link href="#contact">Contact</Link>
            </div>
          </div>
          <p className="footer-copy">© 2026 Dot.Com Immigration · Angad Sachdeva RCIC-IRB · Canada Licence R518464 · India Licence MA/MC2/39 · Kingston, Ontario · info@dotcomimmigration.com · (647) 518-5500<br/>
          <span >Regulated by the College of Immigration and Citizenship Consultants (CICC). This website is for informational purposes only and does not constitute legal advice.</span></p>
          <div className="Copyright">
            <p>Designed By - <Link target='_blank' href="https://anilkuix.lovable.app">Anil Kumar </Link></p>
          </div>
        </div>
      </Container>
    </footer>
      
    </>
  )
}

export default Footer
