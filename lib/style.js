var dataset = require('dataset');

module.exports = style;

function style(widget, selectors) {
  var st;
  if (widget) {
    st = selectors.reduce(getData, {
      value: {},
      ds: dataset(widget) 
    });
    st.value.theme = st.ds.get('theme');
    st.value.mapStyles = getMapStyles(st.ds.get('mapStyles'));
    if (st.isSet || st.value.theme || st.value.mapStyles) {
      return st.value;
    }
  }
}

function getData(result, prop) {
  var val = result.ds.get(prop);
  if (val !== undefined) {
    result.isSet = true;
    result.value[prop] = getStyles(val);
  }
  return result;
}

function getStyles(selector) {
  var node;
  if (selector.indexOf(';') > 0) {
    // style definition in place of selector
    return selector;
  }
  node = document.querySelector(selector);
  if (node && window.getComputedStyle) {
    return copyStyles(window.getComputedStyle(node, null));
  }
}

var properties = [
  'background-attachment', 'background-clip', 'background-color', 'background-image', 'background-origin',
  'background-position', 'background-repeat', 'background-size',
  'border-bottom-color', 'border-bottom-left-radius', 'border-bottom-right-radius', 'border-bottom-style',
  'border-bottom-width', 'border-collapse', 'border-image-outset', 'border-image-repeat', 'border-image-slice',
  'border-image-source', 'border-image-width', 'border-left-color', 'border-left-style', 'border-left-width',
  'border-right-color', 'border-right-style', 'border-right-width', 'border-top-color', 'border-top-left-radius',
  'border-top-right-radius', 'border-top-style', 'border-top-width',
  'box-shadow', 'color',
  'font-family', 'font-kerning', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style',
  'font-synthesis', 'font-weight',
  'letter-spacing',
  'text-align', 'text-decoration', 'text-indent', 'text-rendering', 'text-shadow', 'text-overflow', 'text-transform',
  'transform-origin-x', 'transform-origin-y', 'transform-origin-z', 'transform-style',
  'transition-delay', 'transition-duration', 'transition-property', 'transition-timing-function',
  '-webkit-transform-origin-x', '-webkit-transform-origin-y', '-webkit-transform-origin-z', '-webkit-transform-style',
  '-webkit-transition-delay', '-webkit-transition-duration', '-webkit-transition-property',
  '-webkit-transition-timing-function' ];

function copyStyles(compSt) {
  if (compSt) {
    return properties.map(function (prop) {
      return prop + ': '  + compSt.getPropertyValue(prop) + ';';
    }).join(' ');
  }
}

function getMapStyles(selector) {
  var value;
  if (selector) {
    value = document.querySelector(selector);
    if (value) {
      value = value.innerHTML;
      if (value) {
        value = value.trim();
        if (value) {
          return JSON.parse(value);
        }
      }
    }
  }
}
