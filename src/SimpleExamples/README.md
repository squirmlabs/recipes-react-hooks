# Notes 

- useState hook's updater does not do a shallow merge like setState does in the class component.
- introduce a new updater method that does the merge for us. We'll call it mergeState, accept a partialState, merge it with the previous state, and return that.
- In general, the React team recommends you to split state into multiple state variables depending on which values tend to change together. It's up to you on how you split apart your state.

