export const urls= {
  products: {
    list: "/products",
    ascending: "/products?sortBy=title&order=asc",
    descending: "/products?sortBy=title&order=desc"
  },
  users: {
    list: "/users",
    byId: (id: number) => `/users/${id}`
  }
}