# Hooks

## Rules

### Only Call Hooks at the Top Level

Don’t call Hooks inside loops, conditions, or nested functions. Instead, always use Hooks at the top level of your React function. By following this rule, you ensure that Hooks are called in the same order each time a component renders. That’s what allows React to correctly preserve the state of Hooks between multiple useState and useEffect calls. (If you’re curious, we’ll explain this in depth below.)

### Only Call Hooks from React Functions

Don’t call Hooks from regular JavaScript functions. Instead, you can:

✅ Call Hooks from React function components.
✅ Call Hooks from custom Hooks.

By following this rule, you ensure that all stateful logic in a component is clearly visible from its source code.

- React relies on the order in which Hooks are called.
- If we want to run an effect conditionally, we can put that condition inside our Hook.

```js
useEffect(function persistForm() {
    // 👍 We're not breaking the first rule anymore
    if (name !== '') {
      localStorage.setItem('formData', name);
    }
  });
```

- As long as the order of the Hook calls is the same between renders, React can associate some local state with each of them.
- Only call hooks at the top level.
- React hook useState cannot ve called inside a callback.
- React hooks must be called in a React function component or a custom React Hook function.
- useState hook's updater does not do a shallow merge like setState does in the class component. It will wipe out prevState.
- Introduce a new updater method that does the merge for us. We'll call it mergeState, accept a partialState, merge it with the previous state, and return that.
- In general, the React team recommends you to split state into multiple state variables depending on which values tend to change together. It's up to you on how you split apart your state.

## Custom hooks

Custom hooks are basically just a special function that starts with `use` and this special type of function can use React hooks without error. 

## UseEffect Hook

```js
useEffect(effect: React.EffectCallback, inputs?: ReadonlyArray<any>): void
```

If the second argument to useEffect is provided, effect will only activate if the values in the list change. If provided the useEffect will only run, after renders, where those inputs have changed. Accepts a function that contains imperative, possibly effectful code.

The other option is to provide an array, which will cause the effect to only run on `mount` and `unmount`.

## UseState

Can also take a function that will be invoked once to get its initial value.


## UseRef

Refs can actually be used in another way. They weren't only made for dom elements. You can actually use refs to simulate instance variables like you would use in a class. 
