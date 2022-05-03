import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({
    key: 'animaTracker',
    // paths: [...]
    // ...
    storage: window.localStrage,
  })(store)
}
