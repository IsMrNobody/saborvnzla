import { productos } from "../plugins/sweetApi"

export const state = () => ({
    products: [],
    filterProducts: [],
    categories: [],
    filterByCat: []
})

export const mutations = {
  setProducts( state, data ) {
    state.products = data
  },
  setByCat( state, data ) {
    state.filterProducts = data
    state.filterByCat = data
  },
  filterCat( state, id ) {
    state.filterByCat = state.filterProducts.filter(pro => pro.category === id)
  },
  setCateg( state, data ) {
    state.categories = data
  }
}

export const actions = {
  async setProducts({ commit, dispatch }) {
    const data = await productos()
    commit('setProducts', data)
    dispatch('setCategories')
  },
  setCategories({ state, commit  }) {
    const products = state.products

    const categories = []

    products.forEach(cat => {
      const category = cat.category
      categories.push(category)
    })
    
    const cate = new Set(categories)
    commit('setCateg', cate)
    const mapFilter = cate.map(cat => {
      const filter = products.filter(pro => pro.category === cat)
      return {filter, category: cat}
    })
    commit('setByCat', mapFilter)
  }
}
