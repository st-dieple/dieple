const RESOURCES = {
  auth: 'auth',
  categories: 'getCategories',
  products: 'getProducts'
}

export const ENDPOINT = {
  auth: {
    index: `/${RESOURCES.auth}`,
    login: `/${RESOURCES.auth}/login`
  },
  categories: {
    index: `/${RESOURCES.categories}`
  },
  products: {
    index: `/${RESOURCES.products}`
  }
}
