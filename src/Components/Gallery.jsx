import GalleryItem from "./GalleryItem"

function Gallery(props) {
    const songList = props.data.map((element, index) => {
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