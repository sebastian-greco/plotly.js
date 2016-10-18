/**
* Copyright 2012-2016, Plotly, Inc.
* All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/

'use strict';

var Lib = require('../../lib');
var attributes = require('./attributes');

var name = 'breakpoints';

module.exports = function breakPointsDefaults(layoutIn, layoutOut) {
    var contIn = Array.isArray(layoutIn[name]) ? layoutIn[name] : [],
        contOut = layoutOut[name] = [];

    for(var i = 0; i < contIn.length; i++) {
        var itemIn = contIn[i] || {},
            itemOut = {};

        itemDefaults(itemIn, itemOut);

        contOut.push(itemOut);
    }
};

function itemDefaults(itemIn, itemOut) {

    function coerce(attr, dflt) {
        return Lib.coerce(itemIn, itemOut, attributes, attr, dflt);
    }

    var type = coerce('type');

    if(type === 'width' || type === 'height') {
        coerce('rangemode');
    }

    coerce('range');
    coerce('frame');
}
