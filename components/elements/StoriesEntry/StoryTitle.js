import {CentredStoryEntry, LeftStoryEntry, RightStoryEntry} from '/StoriesEntryRes'

export default function StoryTitle({displayType, sizeType, image, title, description, link}) {
    
    const displaytypes = {
        1 : {// left

            },
        2 : "", // right
        3 : "", // center
    }

    const sizeTypes = {
        1 : {  // small                
            width : "w-11/12 max-w-6xl",
            imageHeight : "h-132",
            descriptionHeight="h-64"
        },
        2 : {  // small                
            width : "w-11/12 max-w-6xl",
            imageHeight : "h-132",
            descriptionHeight="h-64"
        },
        3 : {  // small                
            width : "w-11/12 max-w-6xl",
            imageHeight : "h-132",
            descriptionHeight="h-64"
        },        
    }
    return (
        <CentredStoryEntry
                image={image}
                title={title}
                description={description}
                link={link}                
                width={sizeTypes[sizeType].width}
                imageHeight="h-132"
                descriptionHeight="h-64"
                style={`flex justify-center items-center w-full ${componentMargin}`}/>
    )
}