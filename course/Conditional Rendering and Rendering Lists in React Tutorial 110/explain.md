# 🛠️ React App Component with Custom Todo Prop

This document explains the implementation of a `Todo` component in React using `useState` and prop destructuring for better code readability.

---

## 📦 File: `App.jsx`

```jsx
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [showBtn, setshowBtn] = useState(false);

  const [todo, settodo] = useState([
    {
      title: "Hey I am title 1",
      desc: "Hey I am description 1"
    },
    {
     
