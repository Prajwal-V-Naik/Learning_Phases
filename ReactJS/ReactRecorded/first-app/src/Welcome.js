import React from "react";

const Welcome = (your) => (<h1>Hello, {your.name}</h1>)
// Like button we can also declare COMPONENTS got by doc but I don' it's old version or latest
// This function is a valid React component because it accepts a single “props(here your)” (which stands for properties) object argument with data and returns a React element. We call such components “function components” because they are literally JavaScript functions.
export default Welcome;