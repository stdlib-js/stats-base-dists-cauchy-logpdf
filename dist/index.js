"use strict";var o=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=o(function(h,q){
var u=require('@stdlib/math-base-assert-is-nan/dist'),f=require('@stdlib/math-base-special-log1p/dist'),p=require('@stdlib/math-base-special-pow/dist'),N=require('@stdlib/math-base-special-ln/dist'),l=require('@stdlib/constants-float64-ln-pi/dist');function y(e,r,i){return u(e)||u(i)||u(r)||i<=0?NaN:-(l+N(i)+f(p((e-r)/i,2)))}q.exports=y
});var s=o(function(j,a){
var d=require('@stdlib/utils-constant-function/dist'),t=require('@stdlib/math-base-assert-is-nan/dist'),w=require('@stdlib/math-base-special-log1p/dist'),I=require('@stdlib/math-base-special-pow/dist'),L=require('@stdlib/math-base-special-ln/dist'),P=require('@stdlib/constants-float64-ln-pi/dist');function F(e,r){if(t(r)||t(e)||r<=0)return d(NaN);return i;function i(n){return t(n)?NaN:-(P+L(r)+w(I((n-e)/r,2)))}}a.exports=F
});var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=v(),R=s();O(c,"factory",R);module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
