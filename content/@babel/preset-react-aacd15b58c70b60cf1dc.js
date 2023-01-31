"use strict";(self.webpackChunk_freecodecamp_client=self.webpackChunk_freecodecamp_client||[]).push([[9703],{81173:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(96211).declare)((function(e){return e.assertVersion(7),{name:"syntax-jsx",manipulateOptions:function(e,t){var r=t.plugins;r.some((function(e){return"typescript"===(Array.isArray(e)?e[0]:e)}))||r.push("jsx")}}}));t.default=n},71428:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(96211),a=r(85027),i=r(85506),s=(0,n.declare)((function(e){function t(e,t){for(var r=t.arguments[0].properties,n=!0,a=0;a<r.length;a++){var s=r[a];if(!i.types.isSpreadElement(s)){var o=i.types.toComputedKey(s);if(i.types.isStringLiteral(o,{value:"displayName"})){n=!1;break}}}n&&r.unshift(i.types.objectProperty(i.types.identifier("displayName"),i.types.stringLiteral(e)))}e.assertVersion(7);var r=i.types.buildMatchMemberExpression("React.createClass");function n(e){if(!e||!i.types.isCallExpression(e))return!1;if(!r(e.callee)&&(t=e.callee,!i.types.isIdentifier(t,{name:"createReactClass"})))return!1;var t,n=e.arguments;if(1!==n.length)return!1;var a=n[0];return!!i.types.isObjectExpression(a)}return{name:"transform-react-display-name",visitor:{ExportDefaultDeclaration:function(e,r){var i=e.node;if(n(i.declaration)){var s=r.filename||"unknown",o=a.basename(s,a.extname(s));"index"===o&&(o=a.basename(a.dirname(s))),t(o,i.declaration)}},CallExpression:function(e){var r,a=e.node;n(a)&&(e.find((function(e){if(e.isAssignmentExpression())r=e.node.left;else if(e.isObjectProperty())r=e.node.key;else if(e.isVariableDeclarator())r=e.node.id;else if(e.isStatement())return!0;if(r)return!0})),r&&(i.types.isMemberExpression(r)&&(r=r.property),i.types.isIdentifier(r)&&t(r.name,a)))}}}}));t.default=s},4404:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.default}});var n=r(22131)},70066:function(e,t,r){var n=r(9833);function a(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,o=!0,u=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return o=e.done,e},e:function(e){u=!0,s=e},f:function(){try{o||null==r.return||r.return()}finally{if(u)throw s}}}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.name,r=e.development;return(0,o.declare)((function(e,i){var o=i.pure,E=i.throwIfNamespace,S=void 0===E||E,w=i.filter,I=i.runtime,_=void 0===I?r?"automatic":"classic":I,N=i.importSource,C=void 0===N?p:N,P=i.pragma,F=void 0===P?f:P,k=i.pragmaFrag,A=void 0===k?d:k,O=i.useSpread,J=void 0!==O&&O,X=i.useBuiltIns,L=void 0!==X&&X;if("classic"===_){if("boolean"!=typeof J)throw new Error("transform-react-jsx currently only accepts a boolean option for useSpread (defaults to false)");if("boolean"!=typeof L)throw new Error("transform-react-jsx currently only accepts a boolean option for useBuiltIns (defaults to false)");if(J&&L)throw new Error("transform-react-jsx currently only accepts useBuiltIns or useSpread but not both")}var M={JSXOpeningElement:function(e,t){var r=[];(function(e){do{var t=e.path;if(t.isFunctionParent()&&!t.isArrowFunctionExpression())return!t.isMethod()||("constructor"!==t.node.kind||!R(t.parentPath.parentPath));if(t.isTSModuleBlock())return!1}while(e=e.parent);return!0})(e.scope)&&r.push(u.types.jsxAttribute(u.types.jsxIdentifier("__self"),u.types.jsxExpressionContainer(u.types.thisExpression()))),r.push(u.types.jsxAttribute(u.types.jsxIdentifier("__source"),u.types.jsxExpressionContainer(function(e,t){var r=e.node.loc;if(!r)return e.scope.buildUndefinedNode();if(!t.fileNameIdentifier){var n=t.filename,a=void 0===n?"":n,i=e.scope.generateUidIdentifier("_jsxFileName"),s=e.hub.getScope();s&&s.push({id:i,init:u.types.stringLiteral(a)}),t.fileNameIdentifier=i}return function(e,t,r){var n=null!=t?u.types.numericLiteral(t):u.types.nullLiteral(),a=null!=r?u.types.numericLiteral(r+1):u.types.nullLiteral(),i=u.types.objectProperty(u.types.identifier("fileName"),e),s=u.types.objectProperty(u.types.identifier("lineNumber"),n),o=u.types.objectProperty(u.types.identifier("columnNumber"),a);return u.types.objectExpression([i,s,o])}(u.types.cloneNode(t.fileNameIdentifier),r.start.line,r.start.column)}(e,t)))),e.pushContainer("attributes",r)}};return{name:t,inherits:s.default,visitor:{JSXNamespacedName:function(e){if(S)throw e.buildCodeFrameError("Namespace tags are not supported by default. React's JSX doesn't support namespace tags. You can set `throwIfNamespace: false` to bypass this warning.")},JSXSpreadChild:function(e){throw e.buildCodeFrameError("Spread children are not supported in React.")},Program:{enter:function(e,t){var n=t.file,s=_,o=C,c=F,d=A,j=!!i.importSource,E=!!i.pragma,S=!!i.pragmaFrag;if(n.ast.comments){var w,I=a(n.ast.comments);try{for(I.s();!(w=I.n()).done;){var N=w.value,P=m.exec(N.value);P&&(o=P[1],j=!0);var k=y.exec(N.value);k&&(s=k[1]);var O=v.exec(N.value);O&&(c=O[1],E=!0);var J=h.exec(N.value);J&&(d=J[1],S=!0)}}catch(B){I.e(B)}finally{I.f()}}if(g(t,"runtime",s),"classic"===s){if(j)throw e.buildCodeFrameError("importSource cannot be set when runtime is classic.");var X=x(c),L=x(d);g(t,"id/createElement",(function(){return u.types.cloneNode(X)})),g(t,"id/fragment",(function(){return u.types.cloneNode(L)})),g(t,"defaultPure",c===f)}else{if("automatic"!==s)throw e.buildCodeFrameError('Runtime must be either "classic" or "automatic".');if(E||S)throw e.buildCodeFrameError("pragma and pragmaFrag cannot be set when runtime is automatic.");var R=function(n,a){return g(t,n,function(e,t,n,a){return function(){var i=function(e,t){switch(t){case"Fragment":return"".concat(e,"/").concat(r?"jsx-dev-runtime":"jsx-runtime");case"jsxDEV":return"".concat(e,"/jsx-dev-runtime");case"jsx":case"jsxs":return"".concat(e,"/jsx-runtime");case"createElement":return e}}(a,n);if((0,l.isModule)(t)){var s=b(e,"imports/".concat(n));return s?u.types.cloneNode(s):(s=(0,l.addNamed)(t,n,i,{importedInterop:"uncompiled",importPosition:"after"}),g(e,"imports/".concat(n),s),s)}var o=b(e,"requires/".concat(i));return o?o=u.types.cloneNode(o):(o=(0,l.addNamespace)(t,i,{importedInterop:"uncompiled"}),g(e,"requires/".concat(i),o)),u.types.memberExpression(o,u.types.identifier(n))}}(t,e,a,o))};R("id/jsx",r?"jsxDEV":"jsx"),R("id/jsxs",r?"jsxDEV":"jsxs"),R("id/createElement","createElement"),R("id/fragment","Fragment"),g(t,"defaultPure",o===p)}r&&e.traverse(M,t)}},JSXElement:{exit:function(e,t){var i;i="classic"===b(t,"runtime")||function(e){for(var t=e.get("openingElement").node.attributes,r=!1,n=0;n<t.length;n++){var a=t[n];if(r&&u.types.isJSXAttribute(a)&&"key"===a.name.name)return!0;u.types.isJSXSpreadAttribute(a)&&(r=!0)}return!1}(e)?function(e,t){var r=e.get("openingElement");return B(t,"createElement",[T(r),q(t,e,r.get("attributes"))].concat(n(u.types.react.buildChildren(e.node))))}(e,t):function(e,t){var n,i=e.get("openingElement"),s=[T(i)],o=[],l=Object.create(null),c=a(i.get("attributes"));try{for(c.s();!(n=c.n()).done;){var p=n.value;if(p.isJSXAttribute()&&u.types.isJSXIdentifier(p.node.name)){var f=p.node.name.name;switch(f){case"__source":case"__self":if(l[f])throw j(e,f);case"key":var d=U(p.node.value);if(null===d)throw p.buildCodeFrameError('Please provide an explicit key value. Using "key" as a shorthand for "key={true}" is not allowed.');l[f]=d;break;default:o.push(p)}}else o.push(p)}}catch(g){c.e(g)}finally{c.f()}var m,y,v,h,b=u.types.react.buildChildren(e.node);m=o.length||b.length?function(e,t){var r=e.reduce(D,[]);(null==t?void 0:t.length)>0&&r.push($(t));return u.types.objectExpression(r)}(o,b):u.types.objectExpression([]);s.push(m),r?s.push(null!=(y=l.key)?y:e.scope.buildUndefinedNode(),u.types.booleanLiteral(b.length>1),null!=(v=l.__source)?v:e.scope.buildUndefinedNode(),null!=(h=l.__self)?h:e.scope.buildUndefinedNode()):void 0!==l.key&&s.push(l.key);return B(t,b.length>1?"jsxs":"jsx",s)}(e,t),e.replaceWith(u.types.inherits(i,e.node))}},JSXFragment:{exit:function(e,t){var a;a="classic"===b(t,"runtime")?function(e,t){if(w&&!w(e.node,t))return;return B(t,"createElement",[b(t,"id/fragment")(),u.types.nullLiteral()].concat(n(u.types.react.buildChildren(e.node))))}(e,t):function(e,t){var n=[b(t,"id/fragment")()],a=u.types.react.buildChildren(e.node);n.push(u.types.objectExpression(a.length>0?[$(a)]:[])),r&&n.push(e.scope.buildUndefinedNode(),u.types.booleanLiteral(a.length>1));return B(t,a.length>1?"jsxs":"jsx",n)}(e,t),e.replaceWith(u.types.inherits(a,e.node))}},JSXAttribute:function(e){u.types.isJSXElement(e.node.value)&&(e.node.value=u.types.jsxExpressionContainer(e.node.value))}}};function R(e){return null!==e.node.superClass}function B(e,t,r){var n=u.types.callExpression(b(e,"id/".concat(t))(),r);return(null!=o?o:b(e,"defaultPure"))&&(0,c.default)(n),n}function V(e,t){if(u.types.isJSXIdentifier(e)){if("this"===e.name&&u.types.isReferenced(e,t))return u.types.thisExpression();if(!u.types.isValidIdentifier(e.name,!1))return u.types.stringLiteral(e.name);e.type="Identifier"}else{if(u.types.isJSXMemberExpression(e))return u.types.memberExpression(V(e.object,e),V(e.property,e));if(u.types.isJSXNamespacedName(e))return u.types.stringLiteral("".concat(e.namespace.name,":").concat(e.name.name))}return e}function U(e){return u.types.isJSXExpressionContainer(e)?e.expression:e}function D(e,t){if(u.types.isJSXSpreadAttribute(t.node)){var r=t.node.argument;return u.types.isObjectExpression(r)?e.push.apply(e,n(r.properties)):e.push(u.types.spreadElement(r)),e}var a,i=U("key"!==t.node.name.name?t.node.value||u.types.booleanLiteral(!0):t.node.value);if("key"===t.node.name.name&&null===i)throw t.buildCodeFrameError('Please provide an explicit key value. Using "key" as a shorthand for "key={true}" is not allowed.');u.types.isStringLiteral(i)&&!u.types.isJSXExpressionContainer(t.node.value)&&(i.value=i.value.replace(/\n\s+/g," "),null==(a=i.extra)||delete a.raw);return u.types.isJSXNamespacedName(t.node.name)?t.node.name=u.types.stringLiteral(t.node.name.namespace.name+":"+t.node.name.name.name):u.types.isValidIdentifier(t.node.name.name,!1)?t.node.name.type="Identifier":t.node.name=u.types.stringLiteral(t.node.name.name),e.push(u.types.inherits(u.types.objectProperty(t.node.name,i),t.node)),e}function $(e){var t;if(1===e.length)t=e[0];else{if(!(e.length>1))return;t=u.types.arrayExpression(e)}return u.types.objectProperty(u.types.identifier("children"),t)}function T(e){var t,r=V(e.node.name,e.node);return u.types.isIdentifier(r)?t=r.name:u.types.isStringLiteral(r)&&(t=r.value),u.types.react.isCompatTag(t)?u.types.stringLiteral(t):r}function q(e,t,r){var n=b(e,"runtime");if("automatic"!==n){var i=[],s=r.reduce(D,[]);if(J)s.length&&i.push(u.types.objectExpression(s));else{var o=0;s.forEach((function(e,t){u.types.isSpreadElement(e)&&(t>o&&i.push(u.types.objectExpression(s.slice(o,t))),i.push(e.argument),o=t+1)})),s.length>o&&i.push(u.types.objectExpression(s.slice(o)))}if(!i.length)return u.types.nullLiteral();if(1===i.length)return i[0];u.types.isObjectExpression(i[0])||i.unshift(u.types.objectExpression([]));var l=L?u.types.memberExpression(u.types.identifier("Object"),u.types.identifier("assign")):e.addHelper("extends");return u.types.callExpression(l,i)}var c,p=[],f=Object.create(null),d=a(r);try{for(d.s();!(c=d.n()).done;){var m=c.value,y=u.types.isJSXAttribute(m)&&u.types.isJSXIdentifier(m.name)&&m.name.name;if("automatic"===n&&("__source"===y||"__self"===y)){if(f[y])throw j(t,y);f[y]=!0}D(p,m)}}catch(v){d.e(v)}finally{d.f()}return 1===p.length&&u.types.isSpreadElement(p[0])?p[0].argument:p.length>0?u.types.objectExpression(p):u.types.nullLiteral()}}))};var s=r(81173),o=r(96211),u=r(85506),l=r(75706),c=r(90257),p="react",f="React.createElement",d="React.Fragment",m=/^\s*\*?\s*@jsxImportSource\s+([^\s]+)\s*$/m,y=/^\s*\*?\s*@jsxRuntime\s+([^\s]+)\s*$/m,v=/^\s*\*?\s*@jsx\s+([^\s]+)\s*$/m,h=/^\s*\*?\s*@jsxFrag\s+([^\s]+)\s*$/m,b=function(e,t){return e.get("@babel/plugin-react-jsx/".concat(t))},g=function(e,t,r){return e.set("@babel/plugin-react-jsx/".concat(t),r)};function x(e){return e.split(".").map((function(e){return u.types.identifier(e)})).reduce((function(e,t){return u.types.memberExpression(e,t)}))}function j(e,t){var r="transform-react-jsx-".concat(t.slice(2));return e.buildCodeFrameError("Duplicate ".concat(t," prop found. You are most likely using the deprecated ").concat(r," Babel plugin. Both __source and __self are automatically set when using the automatic runtime. Please remove transform-react-jsx-source and transform-react-jsx-self from your Babel config."))}},22131:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(70066).default)({name:"transform-react-jsx/development",development:!0});t.default=n},53580:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(70066).default)({name:"transform-react-jsx",development:!1});t.default=n},86963:function(e,t,r){var n=r(40131);function a(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,o=!0,u=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return o=e.done,e},e:function(e){u=!0,s=e},f:function(){try{o||null==r.return||r.return()}finally{if(u)throw s}}}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=r(96211),o=r(90257),u=r(85506),l=[["react",new Set(["cloneElement","createContext","createElement","createFactory","createRef","forwardRef","isValidElement","memo","lazy"])],["react-dom",new Set(["createPortal"])]],c=(0,s.declare)((function(e){return e.assertVersion(7),{name:"transform-react-pure-annotations",visitor:{CallExpression:function(e){(function(e){var t=e.get("callee");if(!t.isMemberExpression()){for(var r=0,i=l;r<i.length;r++){var s,o=n(i[r],2),c=o[0],p=a(o[1]);try{for(p.s();!(s=p.n()).done;){var f=s.value;if(t.referencesImport(c,f))return!0}}catch(j){p.e(j)}finally{p.f()}}return!1}var d=t.get("object"),m=t.node;if(!m.computed&&u.types.isIdentifier(m.property))for(var y=m.property.name,v=0,h=l;v<h.length;v++){var b=n(h[v],2),g=b[0],x=b[1];if(d.referencesImport(g,"default")||d.referencesImport(g,"*"))return x.has(y)}return!1})(e)&&(0,o.default)(e)}}}}));t.default=c},97768:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(96211),a=r(53580),i=r(4404),s=r(71428),o=r(86963),u=r(53447);function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var c=l(a),p=l(i),f=l(s),d=l(o);new u.OptionValidator("@babel/preset-react");var m=n.declarePreset((function(e,t){e.assertVersion(7);var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.pragma,r=e.pragmaFrag,n=e.pure,a=e.throwIfNamespace,i=void 0===a||a,s=e.runtime,o=void 0===s?"classic":s,u=e.importSource,l=e.useBuiltIns,c=e.useSpread;return"classic"===o&&(t=t||"React.createElement",r=r||"React.Fragment"),{development:!!e.development,importSource:u,pragma:t,pragmaFrag:r,pure:n,runtime:o,throwIfNamespace:i,useBuiltIns:l,useSpread:c}}(t),n=r.development,a=r.importSource,i=r.pragma,s=r.pragmaFrag,o=r.pure,u=r.runtime,l=r.throwIfNamespace;return{plugins:[[n?p.default:c.default,{importSource:a,pragma:i,pragmaFrag:s,runtime:u,throwIfNamespace:l,pure:o,useBuiltIns:!!t.useBuiltIns,useSpread:t.useSpread}],f.default,!1!==o&&d.default].filter(Boolean)}}));t.default=m}}]);
//# sourceMappingURL=preset-react-aacd15b58c70b60cf1dc.js.map