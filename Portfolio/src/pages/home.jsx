import { motion } from "framer-motion"
import Header from "./header"
import Typewriter from "./typeWriter"
export default function Home(){
    return <>
        <Header/>
           <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center" }}
    >
      <section className="container" id="home">
        <div className="row" >
        <div className="col-md-7 mr-3" id="textHome ">
                <div className=" d-flex flex-column mb-5 ">
                    <h2 >I´m Salma Tariq</h2>
                <h2>And I´m {<Typewriter/>}</h2>
                <p>
                 I'm passionate about building innovative solutions at the intersection of web . I thrive on the challenge of creating seamless and powerful applications, from front-end user interfaces to back-end systems that interact with physical hardware.
                </p>
                <div className="d-flex mb-5" id="icons">
                    <div className="mx-2">
                        <a href="mailto:salma.tariq.dev@gmail.com">
                            <svg width="25" height="25" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11A2.5 2.5 0 0 1 19.5 20h-15A2.5 2.5 0 0 1 2 17.5v-11zM4.5 6 12 11l7.5-5H4.5z"/>
                            </svg>
                        </a>
                    </div>
                    <div  className="mx-2">
                        <a href="tel:+212 601958661">
                        <svg width="25" height="25" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M6.6 10.2a15.05 15.05 0 0 0 7.2 7.2l1.8-1.8a1 1 0 0 1 1.05-.24c1.16.46 2.42.71 3.75.71a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C8.06 21 3 15.94 3 9a1 1 0 0 1 1-1h2.5a1 1 0 0 1 1 1c0 1.33.25 2.59.71 3.75.12.28.04.6-.24 1.05L6.6 10.2z"/>
                        </svg>
                        </a>
                    </div>
                    <div  className="mx-2">
                        <a href="https://www.linkedin.com/in/salma-tariq-dev" target="_blank">
                        <svg width="25" height="25" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M4.98 3.5A2.5 2.5 0 1 1 4.98 8.5 2.5 2.5 0 0 1 4.98 3.5zM3 9h4v12H3zM9 9h3.8v1.6h.1c.5-.9 1.7-1.8 3.5-1.8 3.7 0 4.4 2.4 4.4 5.5V21H18v-5.1c0-1.2 0-2.8-1.7-2.8-1.7 0-2 1.4-2 2.7V21H9z"/>
                        </svg>
                        </a>
                    </div>
                    <div  className="mx-2">
                        <a href="https://github.com/salma-tariq-m" target="_blank">
                        <svg width="25" height="25" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.1.82-.26.82-.58v-2.2c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.74.08-.74 1.2.08 1.83 1.24 1.83 1.24 1.08 1.84 2.83 1.31 3.52 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5z"/>
                        </svg>
                        </a>
                    </div>
                </div>
                <div id="buttonDow">
                  <a id="download" href="./" download="Mon cv " >Download Mon Cv</a>
                </div>
                </div>
        </div>
        <div className="col-md-4  containerImg">
          <img src="/imgs/myImg.jpeg" alt="my profile " />
        </div>
        </div>
    </section>
    </motion.div>
    </>
}