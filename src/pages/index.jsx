import Metatags from '../components/Metatags'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import React, {useEffect, useRef} from "react";

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const root = useRef();
  const upText = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".your", {
        y: "10vh",
        scrollTrigger: {
          trigger: ".header",
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        }
      })
      gsap.to(".webpage", {
        y: "10vh",
        scrollTrigger: {
          trigger: ".header",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        }
      })
      gsap.to(".is", {
        y: "10vh",
        scrollTrigger: {
          trigger: ".header",
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        }
      })
      gsap.to(".boring", {
        y: "10vh",
        scrollTrigger: {
          trigger: ".header",
          start: "top top",
          end: "bottom top",
          scrub: 2,
        }
      })
      gsap.to(".subtitle", {
        y: "10vh",
        scrollTrigger: {
          trigger: ".header",
          start: "top top",
          end: "bottom top",
          scrub: 2.5,
        }
      })
      gsap.to(".scroll", {
        y: "20vh",
        scrollTrigger: {
          trigger: ".header",
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      })
      gsap.to(upText.current.children, {
        y: "-10em",
        scrollTrigger: {
          trigger: ".header",
          start: "top top",
          end: "bottom top",
          scrub: 0.2,
        }
      })
      gsap.to(".link1", {
        scale: 1, opacity: 1,
        duration: 0.2,
        scrollTrigger: {
          trigger: ".link1",
          start: "top bottom",
        }
      })
      gsap.to(".link2", {
        scale: 1, opacity: 1,
        duration: 0.2,
        scrollTrigger: {
          trigger: ".link2",
          start: "top bottom-=100",
        }
      })
      gsap.to(".link3", {
        scale: 1, opacity: 1,
        duration: 0.2,
        scrollTrigger: {
          trigger: ".link3",
          start: "top bottom",
        }
      })
      gsap.to(".link4", {
        scale: 1, opacity: 1,
        duration: 0.2,
        scrollTrigger: {
          trigger: ".link4",
          start: "top bottom-=100",
        }
      })
      if (window.innerWidth > 1000) {
        gsap.to(".more11", {
          x: "-50%",
          scrollTrigger: {
            trigger: ".more1",
            start: "top bottom",
            end: "bottom bottom-=100",
            scrub: 0.5,
          }
        })
        gsap.to(".more12", {
          x: "50%",
          scrollTrigger: {
            trigger: ".more1",
            start: "top bottom",
            end: "bottom bottom-=100",
            scrub: 0.5,
          }
        })
        gsap.to(".more21", {
          x: "-50%",
          scrollTrigger: {
            trigger: ".more2",
            start: "top bottom",
            end: "bottom bottom-=100",
            scrub: 0.5,
          }

        })
        gsap.to(".more22", {
          x: "50%",
          scrollTrigger: {
            trigger: ".more2",
            start: "top bottom",
            end: "bottom bottom-=100",
            scrub: 0.5,
          }
        })
        gsap.to(".more31", {
          x: "-50%",
          scrollTrigger: {
            trigger: ".more3",
            start: "top bottom",
            end: "bottom bottom-=100",
            scrub: 0.5,
          }
        })
        gsap.to(".more32", {
          x: "50%",
          scrollTrigger: {
            trigger: ".more3",
            start: "top bottom",
            end: "bottom bottom-=100",
            scrub: 0.5,
          }
        })
        gsap.to(".more41", {
          x: "-50%",
          scrollTrigger: {
            trigger: ".more4",
            start: "top bottom",
            end: "bottom bottom-=100",
            scrub: 0.5,
          }

        })
        gsap.to(".more42", {
          x: "50%",
          scrollTrigger: {
            trigger: ".more4",
            start: "top bottom",
            end: "bottom bottom-=100",
            scrub: 0.5,
          }
        })
        gsap.to(".more51", {
          x: "-50%",
          scrollTrigger: {
            trigger: ".more5",
            start: "top bottom",
            end: "bottom bottom-=100",
            scrub: 0.5,
          }
        })
        gsap.to(".more52", {
          x: "50%",
          scrollTrigger: {
            trigger: ".more5",
            start: "top bottom",
            end: "bottom bottom-=100",
            scrub: 0.5,
          }
        })
        gsap.to(".more61", {
          x: "-50%",
          scrollTrigger: {
            trigger: ".more6",
            start: "top bottom",
            end: "bottom bottom-=100",
            scrub: 0.5,
          }

        })
        gsap.to(".more62", {
          x: "50%",
          scrollTrigger: {
            trigger: ".more6",
            start: "top bottom",
            end: "bottom bottom-=100",
            scrub: 0.5,
          }
        })
        gsap.to(".more71", {
          x: "-50%",
          scrollTrigger: {
            trigger: ".more7",
            start: "top bottom",
            end: "bottom bottom-=100",
            scrub: 0.5,
          }
        })
        gsap.to(".more72", {
          x: "50%",
          scrollTrigger: {
            trigger: ".more7",
            start: "top bottom",
            end: "bottom bottom-=100",
            scrub: 0.5,
          }
        })
        gsap.to(".more81", {
          x: "-50%",
          scrollTrigger: {
            trigger: ".more8",
            start: "top bottom",
            end: "bottom bottom-=100",
            scrub: 0.5,
          }

        })
        gsap.to(".more82", {
          x: "50%",
          scrollTrigger: {
            trigger: ".more8",
            start: "top bottom",
            end: "bottom bottom-=100",
            scrub: 0.5,
          }
        })
      } else {
        if (localStorage.getItem('alertShown')) {} else {
          alert("Thanks for visiting. Use a larger screen or computer for a better experience.")
          localStorage.setItem('alertShown', true)
        }
      }
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={root}>
      <Metatags/>
      <header id={styles.header} className="header">
        <h1>
          <span id={styles.heroTxt}>
            <div><span className="your">Madison</span> <span className="webpage">West</span></div>
            <div><span className="is">Science</span><span className="boring">Olympiad</span></div>
          </span>
          <span id={styles.bgTxt}>Madison West<br/>Science Olympiad</span>
        </h1>
        <h2 className="subtitle">Located in Madison, Wisconsin</h2>
        <div id={styles.scrollPrompt} className="scroll">
          <div className={styles.scrollAnim}/>
          <h2>Scroll</h2>
        </div>
        <span id={styles.upText} ref={upText} aria-hidden="true">
          {Array(30).fill(true).map((_, i) => <span key={i}>[W]</span>)}
        </span>
      </header>
      <main id={styles.main} className={"hidden"}>
        <section id={styles.gridSection}>
          <div id={styles.grid}>
            <Link href="/blog">
              <article className="link2">
                <div className={styles.outer}>
                  <h2>blog/news</h2>
                  <Image src="/west-scioly-mockup/media/arrow.svg" className={styles.arrow} alt="Arrow right" width={50} height={50}/>
                </div>
                <div className={styles.inner}>
                  <Image src="/west-scioly-mockup/media/idea.svg" alt="Lightbulb idea icon" width={500} height={500}/>
                  <div>
                    <h3>         MWSO updates                      </h3>
                    <h3>          blog/news                </h3>
                  </div>
                </div>
              </article>
            </Link>
            <Link href="/photo-gallery">
              <article className="link1">
                <div className={styles.outer}>
                  <h2>photo gallery</h2>
                  <Image src="/west-scioly-mockup/media/arrow.svg" className={styles.arrow} alt="Arrow right" width={50} height={50}/>
                </div>
                <div className={styles.inner}>
                  <Image src="/west-scioly-mockup/media/tools.svg" alt="Tools icon" width={500} height={500}/>
                  <div>
                    <h3>             see stuff           </h3>
                    <h3>          also kevin          </h3>
                  </div>
                </div>
              </article>
            </Link>


            <Link href="/sponsors">
              <article className="link3">
                <div className={styles.outer} >
                  <h2>give us money</h2>
                  <Image src="/west-scioly-mockup/media/arrow.svg" className={styles.arrow} alt="Arrow right" width={50} height={50}/>
                </div>
                <div className={styles.inner}>
                  <Image src="/west-scioly-mockup/media/people.svg" alt="People icon" width={500} height={500}/>
                  <div>
                    <h3>   we&#39;re broke         </h3>
                    <h3>         give $$$            </h3>

                  </div>
                </div>
              </article>
            </Link>

          </div>
        </section>

        <section id={styles.moreInfo}>
          <article className="more1">
            <h2 className="more11">What is <strong> Science Olympiad? </strong></h2>
            <p className="more12">Science Olympiad is a prestigious academic competition that embraces the marvels of science, technology, engineering, and mathematics (STEM). Students of all levels come together to tackle hands-on challenges across various scientific fields. From engineering feats to captivating experiments, the event promotes teamwork, critical thinking, and practical application of classroom learning. Beyond the competition, Science Olympiad nurtures curiosity, deepens understanding, and cultivates essential skills for future success in the realms of science and innovation.</p>
          </article>
          <article className="more2">
            <h2 className="more21">Who are <strong> West High School? </strong></h2>



            <p className="more22">Madison West High School is a public school located in Madison, Wisconsin. West is a founding member of Science Olympiad, established in 1985, and has had a program every year since. With such a rich history comes many alumni, whom we keep involved in the program to share their expertise. </p>



          </article>
          <article className="more3">
            <h2 className="more31"><strong>Diverse</strong> Expertise</h2>
            <p className="more32">Madison West Science Olympiad has always had, and will always have, zero barrier of access to the program. Any interested student is allowed and encouraged to participate, regardless of their gender, race, sexual orientation, or any other part of their identity. In addition, we work to maintain zero financial barriers to access as well, through fundraising and scholarships for tournaments. </p>
          </article>
          <article className="more4">
            <h2 className="more41">Legacy of Success</h2>
            <p className="more42"> MWSO is one of the nation&#39;s premier Science Olympiad teams, and has been since the program&#39;s inception. Our achievements include: <br />
            - Champions of every regional tournament we have competed in (2004-2020, 2023) <br />
            - 19 Wisconsin State championships (1987, 1989, 1992, 1993, 2001-2007, 2010, 2012, 2013, 2018, 2019) <br />
            - 24 National Tournament appearances (1985-1993, 2001-2007, 2010, 2012, 2013, 2018, 2019) <br />
            - 2nd place, 1989 National Tournament <br />
            - 3rd place, 1990 National Tournament <br />
            - 9th place, 1991 National Tournament <br />
            </p>
          </article>
          <article className="more5">
            <h2 className="more51"><strong>Exceeding</strong> Expectations, <strong>Every</strong> Time</h2>
            <p className="more52">MWSO provides avenues for students to exceed the farthest reaches of their potential. Our alumni have created differences in the world as research scientists, Smithsonian curators, educators, diplomats, and experts in many more careers. These alumni regularly return to be involved in the Science Olympiad program.</p>
          </article>
          <article className="more6">
            <h2 className="more21"><strong>Badger Invitational</strong></h2>
            <p className="more22">Each February, MWSO, working with Hamilton Science Olympiad, hosts an invitational tournament known as Badger Invitational. If you would like more information on this tournament, please contact</p>
          </article>
          <article className="more7">
            <h2 className="more71">Our Sponsors</h2>
            <p className="more72"> Kevin Bao</p>
          </article>
          <article className="more8">
            <h2 className="more81">How to Contribute</h2>
            <p className="more82">If you would like to support West&#39;s efforts to progress youth in STEM fields, you can donate to the program here: </p>
          </article>

        </section>
      </main>
    </div>
  )
}
