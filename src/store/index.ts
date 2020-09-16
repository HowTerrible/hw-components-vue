import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pluginsRefs: {},
    componentGlobalData: new Map()
  },
  mutations: {
    add_pluginsrefs(state, { key, item }) {
      state.pluginsRefs[key] = item
    },
    addComponentGlobalData(state, { key, value }) {
      state.componentGlobalData.set(key, value);
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    get_pluginsref: (state) => (id) => state.pluginsRefs[id],
    get_pluginsrefs: (state) => () => state.pluginsRefs,
    get_globalData: (state) => (key) => state.componentGlobalData.get(key),
    get_globalData_keys: (state) => () => state.componentGlobalData.keys()
  }
})
