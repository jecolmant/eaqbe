import React from 'react';
import styles from './MyCustomTip.module.css'; // Fichier CSS pour les styles

function MyCustomTip({ children }) {
  return (
    <div className={styles.myTip}>
      <div className={styles.myTipTitle}></div> {/* Titre */}
      <div className={styles.myTipContent}>{children}</div> {/* Contenu */}
    </div>
  );
}

export default MyCustomTip;


