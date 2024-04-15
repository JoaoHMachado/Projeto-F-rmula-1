import { useState } from 'react';
import Alpine from '../F1_Alpine.png';
import AstonMartin from '../F1_AstonMartin.png';
import Ferrari from '../F1_Ferrari.png';
import Haas from '../F1_Haas.png';
import McLaren from '../F1_Mclaren.png';
import Mercedes from '../F1_Mercedes.png';
import RedBull from '../F1_RedBull.png';
import Stake from '../F1_Stake.png';
import VisaRB from '../F1_VisaRB.png';
import Williams from '../F1_Williams.png';
import styles from './Images.module.css'



function Images(){


    const [pagina, setPagina] = useState()

    return (
        <div className={styles.imgContainerGeral}>
            <div className={styles.imgContainerDireita}>
                <div>
                    <img src={Alpine} className={styles.imgContainer} alt="logo" />
                </div>
                <div>
                    <img src={AstonMartin} className={styles.imgContainer} alt="logo" />
                </div>
                <div>
                    <img src={Mercedes} className={styles.imgContainer} alt="logo" />
                </div>
                <div>
                    <img src={RedBull} className={styles.imgContainer} alt="logo" />
                </div>
                <div>
                    <img src={Williams} className={styles.imgContainer} alt="logo" />
                </div>
            </div>
            <div className={styles.imgContainerEsquerda}> 
                <div>
                    <img src={Ferrari} className={styles.imgContainer} alt="logo" />
                </div>
                <div>
                    <img src={Haas} className={styles.imgContainer} alt="logo" />
                </div>
                <div>
                    <img src={McLaren} className={styles.imgContainer} alt="logo" />
                </div>
                <div>
                    <img src={Stake} className={styles.imgContainer} alt="logo" />
                </div>
                <div>
                    <img src={VisaRB} className={styles.imgContainer} alt="logo" />
                </div>
            </div>
        </div>

    );
}
export default Images;