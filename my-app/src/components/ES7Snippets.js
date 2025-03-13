// rfce tab 
// -- this automatically takes care of importing React, creating the function,
// and exporting it at the bottom too.
// It also highlights the name of the function so it’s super easy for you to just type whatever
// name you want right away. eg.. 

// import React from 'react'

// function ES7Snippets() {
//   return (
//     <div>ES7Snippets</div>
//   )
// }

// export default ES7Snippets


// rafce 
// -- which will create and export a class component. It uses the other
// form of importing Component in curly braces that we briefly mentioned in earlier videos,
// where it imports Component directly and then extends that, but either way is fine.
// eg..

// import React from 'react'

// const ES7Snippets = () => {
//   return (
//     <div>ES7Snippets</div>
//   )
// }

// export default ES7Snippets



// rce --
// will create and export a class component. It uses the other
// form of importing Component in curly braces that we briefly mentioned in earlier videos,
// where it imports Component directly and then extends that, but either way is fine.
// Usually I just end up using this method since this is how the snippet creates
// it.
// eg...

// import React, { Component } from 'react'

// export class ES7Snippets extends Component {
//   render() {
//     return (
//       <div>ES7Snippets</div>
//     )
//   }
// }

// export default ES7Snippets



// rconst --
// a snippet for creating the constructor, 
// That one is quite
// handy since it automatically drops the cursor into the this.state object which makes it quick
// and easy to add state to your class components and start adding properties to the state.


// clg -- 
// to log something to the console,

// eg...
// console.log(first)



// clo --
// if you want to log an object along with its name as a string.

// eg.. 
// console.log('first', first)