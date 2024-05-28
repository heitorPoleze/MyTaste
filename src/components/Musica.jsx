import React from 'react'
import styles from './Musica.module.css'
import Heitorwave from '../img/sítio.jpeg'
import Infelizmente from '../img/infelizmente.webp'
import NoInfinitoDessesBracos from '../img/no infinito desses braços.webp'
import aaaa from '../img/aaaa.webp'
import Primavera from '../img/primavera.webp'
import HistoriasFrustradas from '../img/historias frustradas.webp'
import WhatAmISupposedToDo from '../img/what am i supposed.webp'
import MilMundosAzuis from '../img/mil mundos azuis.webp'
import EQuente from '../img/e quente.webp'
import Moicano from '../img/moicano.webp'

//olhar linha 17, 27, 57, 69, 75, 81
function Musica(){
    return(
        <>
        <div className={styles.wrap}>
            <div className={styles.sidebar.esquerda}>
                <h1>alguma coisa</h1>
                </div>

            <div className={styles.content}>
              <div className={styles.topBlock}>
                <h1>Músicas</h1>
                </div>

              <div className={styles.squareContainer}>
                <div className={styles.square} id={styles.heitorwave}> 
                <a href="https://open.spotify.com/playlist/4qxUhMra6HyHcKGsr7VhsE?si=e04c78f06d10477f"
                target="_blank">
                    <img src={Heitorwave} alt="HeitorWave"/>
                </a>
                </div>

                <div className={styles.square}>
                    <a href="https://open.spotify.com/playlist/56tdL8k2scAO6tNMrK9J87?si=7052ed5ce3e648d3">
                        <img src={Infelizmente} alt="Infelizmente"/>
                        </a>
                        </div>

                <div className={styles.square}>
                    <a href="https://open.spotify.com/playlist/0p3Oh7p0zPTA2TaT9Lhr6F?si=aa339b0580f8437e">
                        <img src={NoInfinitoDessesBracos} alt="No Infinito Desses Braços"/>
                            </a>
                            </div>

                <div className={styles.square}>
                    <a href="https://open.spotify.com/playlist/5mb05lrrw6NJKBP9WJdKfC?si=b0ec4825cf514ae0">
                        <img src={aaaa} alt="aaaa"/>
                            </a>
                            </div>

                <div className={styles.square}>
                    <a href="https://open.spotify.com/playlist/3G2xIlHC7ln475Q79s2oV7?si=c10e42b6c3cb4f4f">
                        <img src={Primavera} alt="Primavera"/>
                            </a>
                            </div>

                <div className={styles.square}id={styles.HistoriasFrustradas}>
                    <a href="https://open.spotify.com/playlist/0BfDQ8LJHJZOAlxkN4rahp?si=dd5f1c1e051443b0">
                        <img src={HistoriasFrustradas} alt="Histórias Frustradas"/>
                        </a>
                        </div>

                <div className={styles.square}>
                    <a href="https://open.spotify.com/playlist/69MiXT4w9DPjrTAqkvHgZw?si=ae138e7c623f46a4">
                        <img src={WhatAmISupposedToDo} alt="What Am I Supposed to Do"/>
                            </a>
                            </div>

                <div className={styles.square} id={styles.MilMundosAzuis}>
                    <a href="https://open.spotify.com/playlist/5WmF4DmHm2wSUfCN2jxEXV?si=9d893b7dbffa45e4">
                        <img src={MilMundosAzuis} alt="Mil Mundos Azuis"/>
                            </a>
                            </div>

                <div className={styles.square} id={styles.EQuente}>
                    <a href="https://open.spotify.com/playlist/2kRMsbqt5ODx7YGm2vHmNc?si=5c20491b5df849c8">
                        <img src={EQuente} alt="É Quente"/>
                            </a>
                            </div>

                <div className={styles.square} id={styles.Moicano}>
                    <a href="https://open.spotify.com/playlist/6E4OSQ4KrnIncuyTPx0KLg?si=3ed534a7963346d3">
                        <img src={Moicano} alt=""/>
                        </a>
                        </div>
                <div className={styles.square}></div>
                <div className={styles.square}></div>
                <div className={styles.square}></div>
                <div className={styles.square}></div>
              </div>
            </div>
        </div>

        </>
    )
}
export default Musica