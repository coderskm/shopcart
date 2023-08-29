import { useParams } from "react-router-dom"

const SingleProduct = () => {
    const {productId } = useParams()
  return (
      <div>SingleProduct - {productId }</div>
  )
}

export default SingleProduct