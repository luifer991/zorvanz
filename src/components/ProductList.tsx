import { Link } from 'react-router-dom'
import { Fragrance } from '../types/interfaces'

interface FragranceList {
    fragrance: Fragrance
}

export default function ProductList({fragrance}: FragranceList) {
    return (
        <main>
            <Link className='link'
                to={`/product-catalog/${fragrance.id}`}
                key={fragrance.id}>
                <article>
                    <img src={fragrance.imageUrl} alt={fragrance.name} />
                    <h3>{fragrance.name}</h3>
                    <p>Descripcion: {fragrance.description}</p>
                    <p>Categoría: {fragrance.category.categoryName}</p>
                    <p>Precio: ${fragrance.price}</p>
                </article>
            </Link>
        </main>
    )
}
