const App = {
  view: () =>
    m(
      "main",
      m("img", { src: require("../assets/logo.png") }),
      m("h1", "Hello Mithril ")
    )
};

export default App;
