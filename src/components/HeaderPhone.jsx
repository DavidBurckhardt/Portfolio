import {useState,useEffect} from 'react'
import { animate, motion } from 'framer-motion';
import styles from '../styles/HeaderPhone.css';

export default function Nav() {
    const [scroll, setScroll] = useState(false);
    const [toggle, setToggle] = useState(false)
    const menuVariants = {
        hidden: {
            scale: 0
        },
        visible: {
            scale: 50,
            transition: {
                type: "tween",
                duration: 0.5,
            }
        }
    }
    const navLinkVariants = {
        hidden: {
            display: "none",
            opacity: 0
        },
        visible: {
            opacity: 1,
            y: -30,
            transition: {
                delay: 0.7
            }
        }
    }
    const { t } = useTranslation("nav")

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 20)
        })
    },[])
    return (
      <motion.div
          initial={{ y: -25 }}
          animate={{ y: -5 }}
          transition={{duration: 0.5}}
          className={scroll ? styles.header + " "+ styles.active : styles.header}>
          <div className={styles.navContainer}>
              <div className={styles.logo}>
                    <Image src="/logo.png" width={50} height={50} alt="logo"/>
              </div>
              
              <ul className={styles.navLinks}>
                  {navLinks.map((navlink,index) => {
                      return <li key={index}><a href={`#${navlink}`}>                                  
                        {t(`${navlink}`)}
                      </a></li>
                  })}
              </ul>

              <div className={styles.menu}>
                  <HiMenuAlt4 onClick={() => {setToggle(true)}}/>
              </div>
              <motion.div className={styles.closeMenu}
                    variants={menuVariants}
                    initial="hidden"
                    animate= {toggle ? "visible": "hidden"}
                >
              </motion.div>
              
              <motion.div
                  variants={navLinkVariants}
                  animate={toggle ? "visible" : "hidden"}
                  className={styles.menuX}>

                  <HiX onClick={() => setToggle(false)}/>
                  {navLinks.map((navlink,index) => {
                      return <li key={index}>
                                <a href={`#${navlink}`} onClick={() => setToggle(false)}>
                                {t(`${navlink}`)}                                    
                                </a>
                            </li>
                  })}
              </motion.div>
          </div>
    </motion.div>
  )
}
