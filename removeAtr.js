/*******************************************************************************

    uBlock Origin - a browser extension to block requests.
    Copyright (C) 2019-present Raymond Hill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/gorhill/uBlock

    The scriptlets below are meant to be injected only into a
    web page context.
*/

// The lines below are skipped by the resource parser. Purpose is clean
// jshinting.
(function() {
// >>>> start of private namespace
'use strict';




/// remove-attr.js
/// alias ra.js
(function() {
    const token = '{{1}}';
    if ( token === '' || token === '{{1}}' ) { return; }
    const tokens = token.split(/\s*\|\s*/);
    let selector = '{{2}}';
    if ( selector === '' || selector === '{{2}}' ) {
        selector = `[${tokens.join('],[')}]`;
    }
    const rmattr = function(ev) {
        if ( ev ) {
            window.removeEventListener(ev.type, rmattr, true);
        }
        try {
            const nodes = document.querySelectorAll(selector);
            for ( const node of nodes ) {
                for ( const attr of tokens ) {
                    node.removeAttribute(attr);
                }
            }
        } catch(ex) {
        }
    };
    if ( document.readyState === 'loading' ) {
        window.addEventListener('DOMContentLoaded', rmattr, true);
    } else {
        rmattr();
    }
})();




// These lines below are skipped by the resource parser.
// <<<< end of private namespace
})();
