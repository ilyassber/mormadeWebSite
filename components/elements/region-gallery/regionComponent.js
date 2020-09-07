import styles from './styles/regionComponent.module.css'

function RegionComponent ({regionName, galleryPHotos, discription, productList}) {
    return (
        <div className={ styles.container }>
            <div className={ styles.title_container }>
                <h1 className={ styles.title }>CITY</h1>
            </div>
            <div className={ styles.gallery_container } >
                <img className={ styles.image } src={galleryPHotos} alt="cover test image"/>
            <div className={ styles.discription_container }></div>
            </div>
        </div>
    )
}

export default RegionComponent 