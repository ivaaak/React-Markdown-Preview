const Header = () => /*#__PURE__*/
React.createElement("header", { className: "titleContainer" }, /*#__PURE__*/
React.createElement("h1", { className: "titleLeft" }, "Raw Markdown:"),  /*#__PURE__*/
React.createElement("h1", { className: "titleRight" }, "Preview:"));  /*#__PURE__*/


class Markdown extends React.Component {
  constructor() {
    super();
    this.state = {
      converter: new showdown.Converter(),
      value: `Hello, World!\n===\n---\n# **Welcome to Markdown** \nMarkdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents. \n## How to use this? \n1. Write markdown in the markdown editor window 2. See the rendered markdown in the preview window \n### Features \n- Create headings, paragraphs, links, blockquotes, inline-code, code blocks, and lists \n- Name and save the document to access` };
      //this is the default text in the input field
  }

  createMarkup() {
    return { __html: this.state.converter.makeHtml(this.state.value) };
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  render() {
    return /*#__PURE__*/React.createElement("div", { className: "row" }, /*#__PURE__*/
    React.createElement("div", { className: "col-sm-6" }, /*#__PURE__*/
    React.createElement("textarea", {
      type: "text",
      defaultValue: this.state.value,
      onChange: this.handleChange.bind(this),
      id: "markdown",
      className: "col-xs-10 col-xs-offset-1 full-height" })), /*#__PURE__*/

    React.createElement("div", { className: "col-sm-6" }, /*#__PURE__*/
    React.createElement("div", { id: "htmlArea",
      className: "col-xs-10 col-xs-offset-1 full-height" }, /*#__PURE__*/
    React.createElement("div", { dangerouslySetInnerHTML: this.createMarkup() }))));
  }}
  

const App = () => /*#__PURE__*/
React.createElement("div", { className: "container-fluid" }, /*#__PURE__*/
React.createElement(Header, null), /*#__PURE__*/
React.createElement(Markdown, null)); /*#__PURE__*/
document.write('<div id="app"></div>');
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));