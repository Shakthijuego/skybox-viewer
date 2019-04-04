import * as Viewer from './viewer'
import ReactDom from 'react-dom'
import React from 'react'

import App from './ui.jsx'

ReactDom.render(React.createElement(App, null),document.body);

Viewer.init();
Viewer.animate();