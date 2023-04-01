import React from "react"

React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
})

export default React.createContext()
//createContext lets you create a context that components can provide or read.
