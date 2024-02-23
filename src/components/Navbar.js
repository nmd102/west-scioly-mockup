import Link from 'next/link'

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import React, { useLayoutEffect, useRef } from "react";

export default function Navbar() {
    const nav = useRef();
    useLayoutEffect(() => {
        gsap.to(nav.current, {
            y: "8vh",
            scrollTrigger: { //error here
                trigger: nav.current,
                scrub: true,
                start: "top top",
                end: "bottom+=100 top",
            }
        })
    }, []);
    return (
        <nav ref={nav}>
            <a href="https://df8c5c15-c17c-47fc-b674-5801a2659db1-00-2c6nzukpa16ep.hacker.replit.dev" className="logo">
                <h2>[West<span className="oring"> Sci O</span><span className="close">]</span></h2>
            </a>
            <div className="navLinks">
                <Link href="blog">
                    <span>blog/news</span>
                </Link>
                <Link href="photo-gallery">
                    <span>photo gallery</span>
                </Link>

                <Link href="sponsors">
                    <span>sponsor us</span>
                </Link>

            </div>
        </nav>
    )
}