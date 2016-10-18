/**
* Copyright 2012-2016, Plotly, Inc.
* All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/

'use strict';

var Plotly = require('../../plotly');
var Plots = require('../../plots/plots');
var Lib = require('../../lib');

module.exports = {
    moduleType: 'component',
    name: 'breakpoints',
    layoutAttributes: require('./attributes'),
    supplyLayoutDefaults: require('./defaults'),
    apply: apply
};

function apply(gd) {
    var fullLayout = gd._fullLayout,
        graphSize = fullLayout._size,
        breakPoints = fullLayout.breakpoints;

    for(var i = 0; i < breakPoints.length; i++) {
        var breakPoint = breakPoints[i];

        if(isWithinBreakPoint(breakPoint, graphSize)) {
            var frame = breakPoint.frame,
                frameName;

            if(Lib.isPlainObject(frame)) {
                frameName = '**breakpoint-' + i;
                frame.name = frameName;
                Plotly.addFrames(gd, [frame]);
            }
            else if(typeof frame === 'string') {
                frameName = frame;
            }
            else continue;

            var computedFrames = Plots.computeFrame(gd, frameName);

            // then what to do next ???
        }

    }
}

function isWithinBreakPoint(breakPoint, graphSize) {
    var range = breakPoint.range,
        isFraction = breakPoint.rangemode === 'fraction',
        mesure;

    switch(breakPoint.type) {
        case 'aspectratio':
            mesure = graphSize.h / graphSize.w;
            break;
        case 'width':
            mesure = graphSize.w;
            if(isFraction) mesure /= window.innerWidth;
            break;
        case 'height':
            mesure = graphSize.h;
            if(isFraction) mesure /= window.innerHeight;
            break;
    }

    return (mesure >= range[0]) && (mesure <= range[1]);
}
