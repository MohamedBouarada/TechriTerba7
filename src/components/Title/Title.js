import React from 'react';
import styles from './title.module.css';
import { Typewriter } from 'react-simple-typewriter'

export const Title=({title})=>{
    return(
      <div className={styles.title}>

          <Typewriter
              words={[title]}
              loop={0}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
          />
      </div>
    );
}