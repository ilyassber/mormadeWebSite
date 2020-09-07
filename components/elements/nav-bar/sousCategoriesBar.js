import React, { useState } from 'react'
import styles from './styles/sousCategoriesBar.module.css'
import { display } from 'react-icons-kit/icomoon'



function SousCategoriesBar({ show, hide, hovredCategorie }) {

    return (
        <div className={hovredCategorie.hovered ? styles.sous_categories_bar : styles.hide}
            onMouseEnter={show}
            onMouseLeave={hide}
        >
            <div className={styles.sous_categories_container}>
                <div className={styles.left_container}>
                    <ul className={styles.sous_tags_container}>
                        {hovredCategorie.categorie && hovredCategorie.categorie.sous_tags.map((sous_tag, index) =>
                            <li className={[styles.sous_tag, "hover:text-gray-500"].join(' ')} key={index}>{sous_tag}</li>
                        )}
                    </ul>
                </div>
                {/* <div className={styles.line_separator}> </div> */}
                <div className={styles.middle_container}>
                    <div className={styles.title_container}>
                        <h1>HIGH LIGHT</h1>
                    </div>
                    <div className={styles.tag_image_container}>
                        {hovredCategorie.categorie && <img className={styles.tag_image} src={hovredCategorie.categorie.tag_image} alt={hovredCategorie.categorie.tag} />}
                    </div>
                </div>
                {/* <div className={styles.line_separator}> </div> */}
                {/* <div className={styles.right_container}></div> */}

            </div>
        </div>
    )
}

export default SousCategoriesBar