import React from "react";
import { motion } from "framer-motion";
import { AiFillIeCircle, AiFillAndroid, AiFillWindows } from "react-icons/ai";

const Services = () => {
  const animation = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      opacity: 0,
      x: "-100%",
    },
    twoAndThree: {
        opacity: 0,
        y: "-100%",
      },
    
      four: {
        opacity: 0,
        x: "100%",
      },
  };
  return (
    <div id="services">
      <h2>Services</h2>
      <section>
        <motion.div className="servicesBox1" 
        whileInView={animation.whileInView}
        initial={animation.one}
       
        >
          <h3>2+</h3>
          <p>years experiance</p>
        </motion.div>
        <motion.div
         className="servicesBox2"
        whileInView={animation.whileInView}
            initial={animation.twoAndThree}
        >
            
          <AiFillIeCircle />
          <span>Web Developer</span>
        </motion.div>
        <motion.div className="servicesBox3" 
        whileInView={animation.whileInView}
            initial={animation.twoAndThree}
            transition={{
                delay:0.2
            }}
        >
          <AiFillAndroid />
          <span>App Development</span>
        </motion.div>
        <motion.div className="servicesBox4" 
        whileInView={animation.whileInView}
            initial={animation.four}
        >
          <AiFillWindows />
          <span>Desktop Developer</span>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
