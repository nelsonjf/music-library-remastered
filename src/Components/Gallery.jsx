import GalleryItem from "./GalleryItem"
import { DataContext } from "../Context/DataContext"
import { useContext } from "react"

function Gallery() {
    const data = useContext(DataContext)

    const songList = data.map((element, index) => {
        return (
            <GalleryItem item={element} key={index} />
        )
    })

    return (
        <div>
            {songList}
        </div>
    )
}

export default Gallery