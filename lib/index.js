var style = require('./style');

module.exports = styleWidget;

function styleWidget(selectors, widget, iframe) {
  var styles = style(widget, selectors);
  iframe = iframe || widget.querySelector('iframe') || widget;
  iframe.contentWindow.postMessage({
    furkot: true,
    styles: styles
  }, '*');
}
