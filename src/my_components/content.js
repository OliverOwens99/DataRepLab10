function Content() {
  return (
    <div>
      {/* content component that displays hello world and the current time  */}
      <h1>Hello World !</h1>
      <h2>{new Date().toLocaleTimeString()}</h2>
    </div>
  );
}

export default Content;