import styles from './styling/regions.module.css'
import Layout from '../components/layout'
import RegionComponent from '../components/elements/region-gallery/regionComponent'
import SideMenu from '../components/elements/side-menu/sideMenu'
import Link from 'next/link'


function Regions() {
    return (
        <Layout>
            <div className="w-full h-40"></div>
            <h1>regions</h1>
            <div className={styles.page_container}>
                <div className={styles.left_menu_container}>
                    <SideMenu />
                </div>
                <div className={styles.cities_container}>
                    <RegionComponent galleryPHotos="/images/region-1.jpg" />
                    <RegionComponent galleryPHotos="/images/region-2.jpg" />
                    <RegionComponent galleryPHotos="/images/region-3.jpg" />
                    <RegionComponent galleryPHotos="/images/region-1.jpg" />
                    <RegionComponent galleryPHotos="/images/region-1.jpg" />
                </div>


            </div>
        </Layout>
    )
}

export default Regions