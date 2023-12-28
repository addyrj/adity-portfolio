import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import me from "../assets/logo1.png";
import { BsChevronDown, BsArrowUpRight } from "react-icons/bs";


function Home({ratio}) {
  const clientCount = useRef(null);
  const projectCount = useRef(null);

  const animationClientsCount = () => {
    animate(0, 10, {
      duration: 1,
      onUpdate: (v) => (clientCount.current.textContent = v.toFixed(1)),
    });
  };
  const animationProjectsCount = () => {
    animate(0, 20, {
      duration: 1,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed(1)),
    });
  };

  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };

  return (
    <div id="home">
      {/* Home */}
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I am <br /> Aditya Ranjan
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A Developer", "A Designer", "A Creator"],
              autoStart: true,
              loop: true,
              cursor: " ",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="mailto:addyrj20@gmail.com">Hire Me</a>
            <a href="#work">For Projects</a>
          </div>
          <article>
            <p>
              +
              {
                ratio < 2 && (
              <motion.span
                whileInView={animationProjectsCount}
                ref={clientCount}
              ></motion.span>
              )
            }
             
            </p>
            <span>Clients Worldwide</span>
          </article>
          <aside>
            <article>
              <p>
                +
                {
                ratio < 2 && (
                  <motion.span
                  whileInView={animationClientsCount}
                  ref={projectCount}
                ></motion.span>
                )
              }
              
              </p>
              <span>Projects DONE</span>
            </article>

            <article data-special>
              <p>
                <span>Contact</span>
              </p>
              <span>addyrj20@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={me} alt="Addy" />
      </section>
      <BsChevronDown />
    </div>
  );
}

export default Home;
