import ImageShow from "./ImageShow"
import './ImageList.css'

const ImageList = ({images}) => {
    const renderImage = images.map((image) => {
        return <ImageShow key = {image.id} image = {image} />
    
})
return (
    <div className="image-list">
        {renderImage}
    </div>
)
}
export default ImageList