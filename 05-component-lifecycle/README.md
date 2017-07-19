# React Component Lifecycle

Each component has several “lifecycle methods” that you can use to run code at particular times in the process. Methods prefixed with ```will``` are called right before something happens, and methods prefixed with ```did``` are called right after something happens.

1. Mounting
- constructor()
- componentWillMount()
- render()
- componentDidMount()
2. Updating
- componentWillReceiveProps()
- shouldComponentUpdate()
- componentWillUpdate()
- render()
- componentDidUpdate()
3. Unmounting
- componentWillUnmount()