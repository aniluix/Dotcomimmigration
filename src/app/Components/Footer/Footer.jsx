"use client";
import React from 'react'
import "./Footer.css"
import Link from 'next/link'
import { Container } from 'react-bootstrap'
import { FaCheck, FaFacebook, FaInstagram, FaLinkedin, FaRegClock, FaYoutube } from 'react-icons/fa'
import { FaLocationDot, FaXTwitter } from 'react-icons/fa6'
import Image from 'next/image';
import { MdEmail } from 'react-icons/md';

function Footer() {
  return (
    <>
    <footer className='FooterSection'>
        <Container>
            <div className="FooterData">

              <div className="FooterTopDiv">
                <div className="FtLeftItem">
                  <Image src="/Images/headerlogo.png" alt="headerlogo" width={250} height={250}priority />
                  {/* <Image src="/Images/footerlogo.png" alt="logo" width={190} height={39}priority /> */}
                  <p>We provide trusted legal representation with a strategic approach, delivering clear guidance, strong advocacy, and reliable solutions for individuals and businesses seeking justice, protection, and long-term legal confidence.</p>
                  <div className="FtSocialDiv">
                    <Link href="#"><FaFacebook size={18} /></Link>
                    <Link href="#"><FaXTwitter size={18} /></Link>
                    <Link href="#"><FaYoutube size={18} /></Link>
                    <Link href="#"><FaLinkedin size={18} /></Link>
                    <Link href="#"><FaInstagram size={18} /></Link>
                  </div>
                </div>
                <div className="FtMidItem">
                  <div className="FtItems">
                    <h4>Company</h4>
                    <ul>
                      <li><Link href="#">Home</Link></li>
                      <li><Link href="#">Practice Area</Link></li>
                      <li><Link href="#">Case Studies</Link></li>
                      <li><Link href="#">About</Link></li>
                      <li><Link href="#">Blog</Link></li>
                      <li><Link href="#">Contact</Link></li>
                    </ul>
                  </div>
                  <div className="FtItems">
                    <h4>Our Service</h4>
                    <ul>
                      <li><Link href="#"><FaCheck size={14} /> Personal Injury</Link></li>
                      <li><Link href="#"><FaCheck size={14} /> Criminal Defense</Link></li>
                      <li><Link href="#"><FaCheck size={14} /> Family Law</Link></li>
                      <li><Link href="#"><FaCheck size={14} /> Employment Law</Link></li>
                      <li><Link href="#"><FaCheck size={14} /> Real Estate Law</Link></li>
                      <li><Link href="#"><FaCheck size={14} /> Corporate Law</Link></li>
                      <li><Link href="#"><FaCheck size={14} /> Civil Litigation</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="FtRytItem">
                  <div className="CntItem">
                    <h6><FaRegClock size={18} /> We're Open</h6>
                    <p>Monday – Sunday 06.00 – 23.00</p>
                  </div>
                  <div className="CntItem">
                    <h6><FaLocationDot size={18} /> Office Location</h6>
                    <p>ptj sjs Canada </p>
                    <p><Link href="tell:+91-65848752">+91-65848752</Link></p>
                  </div>
                  <div className="CntItem">
                    <h6><MdEmail size={18} /> Send a Message</h6>
                    <p><Link href="mailto:contact@calmind.com">contact@calmind.com</Link></p>
                  </div>
                </div>
              </div>

              <div className="FooterBottomDiv">
                <p>Copyright – Regalis by Reacthemes</p>
                <div className="PolicyDiv">
                  <Link href="#">Terms & Conditions</Link>
                  <Link href="#">Privacy Policy</Link>
                </div>
              </div>

            </div>
        </Container>
    </footer>
      
    </>
  )
}

export default Footer
