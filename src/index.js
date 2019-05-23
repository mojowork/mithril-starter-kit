import m from 'mithril';

var count = 0 // added a variable

var Hello = {
  view: function () {
    return m("main", [
      m("h1", { class: "title" }, "My first app"),
      // changed the next line
      m("button", { onclick: function () { count++ } }, count + " clicks"),
    ])
  }
}
var root = document.querySelector('#app');

m.mount(root, Hello);