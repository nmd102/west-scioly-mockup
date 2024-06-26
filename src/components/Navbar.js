'use client'
import Link from 'next/link'

import {gsap} from "gsap/dist/gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import React, {useEffect, useRef} from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
    const nav = useRef();
    useEffect(() => {
        gsap.to(nav.current, {
            y: "8vh", scrollTrigger: {
                trigger: nav.current, scrub: true, start: "top top", end: "bottom+=100 top",
            }
        })
    }, []);
    return (<nav ref={nav}>
            <Link href="/" className="logo">
                <h2>[West<span className="oring"> Sci O</span><span className="close">]</span></h2>
            </Link>
            <div className="navLinks">
                <Link href={"/blog"}>
                    <span>blog/news</span>
                </Link>
                <Link href={"/photo-gallery"}>
                    <span>photo gallery</span>
                </Link>

                <Link href={"/sponsors"}>
                    <span>sponsor us</span>
                </Link>
                <Link href={"/about"}>
                    <span>about us</span>
                </Link>

            </div>
        </nav>)
}