import ProductsPageHeader from '../products/ProductsPageHeader'
import AllProducts from '../products/AllProducts'
import Footer from "../home/Footer"
import { useParams } from 'react-router-dom'

export default function ProductsHome() {
    const { categoryName } = useParams();

    return (
        <div className=''>
            <ProductsPageHeader categoryName={categoryName} />
            <AllProducts />
            <div className='top-88 relative h-0'>
                <Footer />
            </div>
        </div>
    )
}