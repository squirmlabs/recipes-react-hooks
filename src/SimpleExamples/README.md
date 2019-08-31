# Hooks

## Rules

- Only call hooks at the top level.
- React hook useState cannot ve called inside a callback.
- React hooks must be called in a React function component or a custom React Hook function.
- useState hook's updater does not do a shallow merge like setState does in the class component. It will wipe out prevState.
- Introduce a new updater method that does the merge for us. We'll call it mergeState, accept a partialState, merge it with the previous state, and return that.
- In general, the React team recommends you to split state into multiple state variables depending on which values tend to change together. It's up to you on how you split apart your state.

