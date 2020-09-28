import React from 'react'
import { ImgFreeDisp } from '../../graphics/images'
import { TextDisp } from '../../graphics/textFields'

const ArticleDisplayer = props => {

    let data = JSON.parse(props.story)

    let content = (
        <div className={props.className}>
            <div className="h-auto w-full flex flex-col items-center bg-white">
                <div className="relative md:w-3/4 lg:w-3/5 h-auto min-h-24 flex flex-col items-center mx-6 mb-6">
                    {(data.cover != null)
                        ? (<ImgFreeDisp className="w-full h-auto" src={data.cover.path} />)
                        : null}
                    <div className="h-auto w-auto max-w-screen flex flex-col items-center bg-white mt-6">
                        <h1 className="font-roboto font-bold text-3xl text-center leading-snug mt-6 mx-6">
                            {data.title}
                        </h1>
                        <h3 className="font-roboto font-medium text-base text-center mx-6 mb-6 mt-4">
                            {data.description}
                        </h3>
                    </div>
                </div>
                <div className="h-auto md:w-3/4 lg:w-3/5 flex flex-col items-center mx-6">
                    {
                        data.text.map((content, index) => {
                            if (content.type == 'image') {
                                return (<ImgFreeDisp key={index} className="w-full h-auto mt-4 mb-8" src={content.image.path} />)
                            } else if (content.type == 'text') {
                                return (<TextDisp key={index} className="w-full lg:w-3/4 h-auto mb-4" align="left" text={content.text} />)
                            }
                            return null
                        })
                    }
                </div>

            </div>
        </div>
    )

    return content
}

export default ArticleDisplayer