export default {
  $$nut() {
    return {
      mount( node ) {
        node.innerText = 'Written with raw JavaScript'
      },

      unmount( node ) {
        node.innerText = ''
      },
    }
  }
}
