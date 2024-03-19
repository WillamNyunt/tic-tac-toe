Core concepts learnt from this tutorial:

- When editing state from old state, make sure you add it in a function e.g:
   const [isActive, setIsActive] = useState(false)

    setIsActive(active => !active)  // this schedules the reverse of active in the state update
- Objects and Arrays are reference types. When cloning them use the spread operator to assign a new version of these types to prevent mutating the origional value.
- Try to derive from a state rather than adding unnessesary states.