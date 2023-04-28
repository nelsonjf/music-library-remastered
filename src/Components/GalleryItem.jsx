import { useState } from "react"

function GalleryItem() {
    const [viewDetails, setViewDetails] = useState(false)
    
    return (
        <div onClick={() => setViewDetails(!viewDetails)} style={{display: 'inline-block'}}>
            <p>Gallery Item</p>
        </div>
    )
}

export default GalleryItem