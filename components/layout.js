import NavBar from './elements/nav-bar/navbar'

// fake data 
const categories = [
    {
        tag: "clothes",
        sous_tags: ["shoes", "t-shirts", "jeans", "socks"],
        tag_image: "images/tags/clothes/clothes-1.jpg"
    },
    {
        tag: "jewlery",
        sous_tags: ["neckchains", "rings", "bracelets", "earrings", "watches"],
        tag_image: "images/tags/jewlery/jewlery-1.jpg"
    },
    {
        tag: "furniture",
        sous_tags: ["tables", "beds", "chair", "sofa", "wardrobes"],
        tag_image: "images/tags/furniture/furniture-1.jpg"
    },
    {
        tag: "gifts",
        sous_tags: ["parfum", "braclet", "socks", "backpack", "necklace", "wallet"],
        tag_image: "images/tags/gifts/gifts-1.jpg"
    },
    {
        tag: "jewlery",
        sous_tags: ["neckchains", "rings", "bracelets", "earrings", "watches"],
        tag_image: "images/tags/jewlery/jewlery-1.jpg"
    },
    {
        tag: "furniture",
        sous_tags: ["tables", "beds", "chair", "sofa", "wardrobes"],
        tag_image: "images/tags/furniture/furniture-1.jpg"
    },
    {
        tag: "gifts",
        sous_tags: ["parfum", "braclet", "socks", "backpack", "necklace", "wallet"],
        tag_image: "images/tags/gifts/gifts-1.jpg"
    },
    {
        tag: "jewlery",
        sous_tags: ["neckchains", "rings", "bracelets", "earrings", "watches"],
        tag_image: "images/tags/jewlery/jewlery-1.jpg"
    },
    {
        tag: "furniture",
        sous_tags: ["tables", "beds", "chair", "sofa", "wardrobes"],
        tag_image: "images/tags/furniture/furniture-1.jpg"
    },
    {
        tag: "gifts",
        sous_tags: ["parfum", "braclet", "socks", "backpack", "necklace", "wallet"],
        tag_image: "images/tags/gifts/gifts-1.jpg"
    }
]

const links = [
    {
        page: 'MAKERS',
        path: '/makers'
    },
    {
        page: 'REGIONS',
        path: '/regions'

    },
    {
        page: 'STORIES',
        path: '/stories'
    }
]


function Layout({ children }) {
    return (
        <div>
            <NavBar logo="/logo.png" categories={categories} max_shown={8} links={links} home="/" />
            {children}
        </div>
    )
}

export default Layout