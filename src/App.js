import React, { useState , useEffect} from "react";
import Home from './screens/Home';
import Slider from "./Slider";
import styles from "./index.module.css";
function App() {
  return <main>
        <section className={styles.container}>
            <Home />
        </section>
    </main>
}

export default App;
