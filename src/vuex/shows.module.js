import appService from '../app.service.js';

const state = {
  id: '',
  shows: []
}

const getters = {
  shows : state => state.shows
}

const actions = {
  updatedCategory(context, categoryId) {
    appService.getShows(categoryId)
      .then(data => {
        context.commit('updatedCategory', {
          categoryId,
          shows: data
        })
      })
      .catch(err => console.error)
  }
}

const mutations = {
  updatedCategory (state, category) {
    state.id = category.categoryId
    state.shows = category.shows
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
