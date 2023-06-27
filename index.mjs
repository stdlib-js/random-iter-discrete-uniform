// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.0.14-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-copy@esm/index.mjs";import{isPrimitive as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import{isPrimitive as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max@v0.0.8-esm/index.mjs";import{factory as u}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function j(f,g,c){var b,v,x,y,w;if(!o(f))throw new TypeError(a("0Pg7w",f));if(!o(g))throw new TypeError(a("0Pg7x",g));if(f>g)throw new RangeError(a("invalid argument. Minimum support must be less than or equal to maximum support. Value: `[%d,%d]`.",f,g));if(arguments.length>2){if(!d(c))throw new TypeError(a("0Pg2h",c));if(b=i(c,1),l(b,"iter")){if(!m(b.iter))throw new TypeError(a("0Pg35","iter",b.iter))}else b.iter=p;x=u(f,g,b),void 0===b.prng&&!1!==b.copy&&(b.state=x.state)}else x=u(f,g),b={iter:p,state:x.state};return w=0,e(v={},"next",P),e(v,"return",L),b&&b.prng?(e(v,"seed",null),e(v,"seedLength",null),s(v,"state",n(null),r),e(v,"stateLength",null),e(v,"byteLength",null)):(t(v,"seed",G),t(v,"seedLength",N),s(v,"state",q,M),t(v,"stateLength",E),t(v,"byteLength",T)),e(v,"PRNG",x.PRNG),h&&e(v,h,R),v;function P(){return w+=1,y||w>b.iter?{done:!0}:{value:x(),done:!1}}function L(e){return y=!0,arguments.length?{value:e,done:!0}:{done:!0}}function R(){return j(f,g,b)}function G(){return x.PRNG.seed}function N(){return x.PRNG.seedLength}function E(){return x.PRNG.stateLength}function T(){return x.PRNG.byteLength}function q(){return x.PRNG.state}function M(e){x.PRNG.state=e}}export{j as default};
//# sourceMappingURL=index.mjs.map
