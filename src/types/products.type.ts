export interface IProduct{
    id: number
    title: string
    description: string
    category: string
    price: number
    discountPercentage: number
    rating: number
    stock: number
    tags: Array<string>
    brand: string
    sku: string
    weight: number
    dimensions: Array<string>
    images: string
}