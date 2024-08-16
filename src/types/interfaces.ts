export interface Fragrance {
    id: number
    name: string
    imageUrl: string
    price: string
    description: string
    stock: number
    popularity: number
    category: Category
}

export interface Category {
    categoryId: number
    categoryName: string
}

export interface ApiResponse {
    content: Fragrance[]
}

export interface UseFragrancesState {
    fragrances: Fragrance[]
    loading: boolean
    error: string | null
}
