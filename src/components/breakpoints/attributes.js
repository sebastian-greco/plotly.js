/**
* Copyright 2012-2016, Plotly, Inc.
* All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/

'use strict';


module.exports = {
    type: {
        valType: 'enumerated',
        values: ['aspectratio', 'width', 'height'],
        role: 'info',
        description: ''
    },

    rangemode: {
        valType: 'enumerated',
        values: ['pixels', 'fraction'],
        role: 'info',
        description: ''
    },

    // or maybe 'bounds' would be more adequate ...
    range: {
        valType: 'info_array',
        role: 'info',
        items: [
            { valType: 'number', min: 0 },
            { valType: 'number', min: 0 }
        ],
        description: ''
    },

    frame: {
        valType: 'any',
        description: ''
    }

    // some option about how apply is called
    // e.g
    // 'onload' (on first plot call only)
    // 'onresize'(on all resize calls)
};
