// const nested = [1, [2, [3, 4]]];
// const flat = nested.flat(2);
// console.log(nested);
// console.log(flat);

useEffect(() => {
  const timer = setTimeout(() => console.log("tick"), 444000);
  return () => clearInterval(timer);
}, [count]);
