// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,t=Object.prototype,e=t.toString,o=t.__defineGetter__,i=t.__defineSetter__,u=t.__lookupGetter__,f=t.__lookupSetter__,a=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,a){var c,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((l="value"in a)&&(u.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=a.value,r.__proto__=c):r[n]=a.value),y="get"in a,p="set"in a,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(r,n,a.get),p&&i&&i.call(r,n,a.set),r};function c(r,n,t){a(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function l(r){return r!=r}var y,p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),v=Object.prototype.toString,s=Object.prototype.hasOwnProperty,b="function"==typeof Symbol?Symbol.toStringTag:"",d=p&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,i;if(null==r)return v.call(r);t=r[b],i=b,n=null!=(o=r)&&s.call(o,i);try{r[b]=void 0}catch(n){return v.call(r)}return e=v.call(r),n?r[b]=t:delete r[b],e}:function(r){return v.call(r)},w="function"==typeof Uint32Array,A="function"==typeof Uint32Array?Uint32Array:null,_="function"==typeof Uint32Array?Uint32Array:void 0;y=function(){var r,n,t;if("function"!=typeof A)return!1;try{n=new A(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(w&&t instanceof Uint32Array||"[object Uint32Array]"===d(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?_:function(){throw new Error("not implemented")};var m,g=y,h="function"==typeof Float64Array,N="function"==typeof Float64Array?Float64Array:null,U="function"==typeof Float64Array?Float64Array:void 0;m=function(){var r,n,t;if("function"!=typeof N)return!1;try{n=new N([1,3.14,-3.14,NaN]),t=n,r=(h&&t instanceof Float64Array||"[object Float64Array]"===d(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?U:function(){throw new Error("not implemented")};var j,I=m,O="function"==typeof Uint8Array,S="function"==typeof Uint8Array?Uint8Array:null,E="function"==typeof Uint8Array?Uint8Array:void 0;j=function(){var r,n,t;if("function"!=typeof S)return!1;try{n=new S(n=[1,3.14,-3.14,256,257]),t=n,r=(O&&t instanceof Uint8Array||"[object Uint8Array]"===d(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?E:function(){throw new Error("not implemented")};var F,T=j,H="function"==typeof Uint16Array,G="function"==typeof Uint16Array?Uint16Array:null,P="function"==typeof Uint16Array?Uint16Array:void 0;F=function(){var r,n,t;if("function"!=typeof G)return!1;try{n=new G(n=[1,3.14,-3.14,65536,65537]),t=n,r=(H&&t instanceof Uint16Array||"[object Uint16Array]"===d(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?P:function(){throw new Error("not implemented")};var x,L={uint16:F,uint8:T};(x=new L.uint16(1))[0]=4660;var V=52===new L.uint8(x.buffer)[0],W=!0===V?1:0,M=new I(1),k=new g(M.buffer);function Y(r){return M[0]=r,k[W]}var q=!0===V?1:0,C=new I(1),z=new g(C.buffer);function B(r,n){return C[0]=r,z[q]=n>>>0,C[0]}var D=Number.POSITIVE_INFINITY,J=Number.NEGATIVE_INFINITY,K=1023,Q=.6931471803691238,R=1.9082149292705877e-10;function X(r){var n,t,e,o,i,u,f,a,c,y;if(r<-1||l(r))return NaN;if(-1===r)return J;if(r===D)return r;if(0===r)return r;if(y=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(y=0,o=r,t=1)}return 0!==y&&(e<9007199254740992?(i=(y=((t=Y(c=1+r))>>20)-K)>0?1-(c-r):r-(c-1),i/=c):(y=((t=Y(c=r))>>20)-K,i=0),(t&=1048575)<434334?c=B(c,1072693248|t):(y+=1,c=B(c,1071644672|t),t=1048576-t>>2),o=c-1),n=.5*o*o,0===t?0===o?y*Q+(i+=y*R):y*Q-((a=n*(1-.6666666666666666*o))-(y*R+i)-o):(a=(f=(u=o/(2+o))*u)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(f),0===y?o-(n-u*(n+a)):y*Q-(n-(u*(n+a)+(y*R+i))-o))}var Z=Math.floor;function $(r){return Z(r)===r}function rr(r){return $(r/2)}function nr(r){return rr(r>0?r-1:r+1)}function tr(r){return r===D||r===J}var er,or,ir=Math.sqrt;function ur(r){return Math.abs(r)}!0===V?(er=1,or=0):(er=0,or=1);var fr={HIGH:er,LOW:or},ar=new I(1),cr=new g(ar.buffer),lr=fr.HIGH,yr=fr.LOW;function pr(r,n,t,e){return ar[0]=r,n[e]=cr[lr],n[e+t]=cr[yr],n}function vr(r){return pr(r,[0,0],1,0)}c(vr,"assign",pr);var sr=!0===V?0:1,br=new I(1),dr=new g(br.buffer);function wr(r,n){return br[0]=r,dr[sr]=n>>>0,br[0]}function Ar(r){return 0|r}var _r,mr,gr=2147483647;!0===V?(_r=1,mr=0):(_r=0,mr=1);var hr={HIGH:_r,LOW:mr},Nr=new I(1),Ur=new g(Nr.buffer),jr=hr.HIGH,Ir=hr.LOW;function Or(r,n){return Ur[jr]=r,Ur[Ir]=n,Nr[0]}var Sr=[0,0];function Er(r,n){var t,e;return vr.assign(r,Sr,1,0),t=Sr[0],t&=gr,e=Y(n),Or(t|=e&=2147483648,Sr[1])}var Fr=1048576,Tr=[1,1.5],Hr=[0,.5849624872207642],Gr=[0,1.350039202129749e-8];function Pr(r,n,t,e){return l(r)||tr(r)?(n[e]=r,n[e+t]=0,n):0!==r&&ur(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}c((function(r){return Pr(r,[0,0],1,0)}),"assign",Pr);var xr=[0,0],Lr=[0,0];function Vr(r,n){var t,e;return 0===n||0===r||l(r)||tr(r)?r:(Pr(r,xr,1,0),n+=xr[1],n+=function(r){var n=Y(r);return(n=(2146435072&n)>>>20)-K|0}(r=xr[0]),n<-1074?Er(0,r):n>1023?r<0?J:D:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,vr.assign(r,Lr,1,0),t=Lr[0],t&=2148532223,e*Or(t|=n+K<<20,Lr[1])))}var Wr=1048575,Mr=1048576,kr=1083179008,Yr=1e300,qr=1e-300,Cr=[0,0],zr=[0,0];function Br(r,n){var t,e,o,i,u,f,a,c,y,p,v,s,b,d;if(l(r)||l(n))return NaN;if(vr.assign(n,Cr,1,0),u=Cr[0],0===Cr[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return ir(r);if(-.5===n)return 1/ir(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(tr(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:ur(r)<1==(n===D)?0:D}(r,n)}if(vr.assign(r,Cr,1,0),i=Cr[0],0===Cr[1]){if(0===i)return function(r,n){return n===J?D:n===D?0:n>0?nr(n)?r:0:nr(n)?Er(D,r):D}(r,n);if(1===r)return 1;if(-1===r&&nr(n))return-1;if(tr(r))return r===J?Br(-0,-n):n<0?0:D}if(r<0&&!1===$(n))return(r-r)/(r-r);if(o=ur(r),t=i&gr|0,e=u&gr|0,a=u>>>31|0,f=(f=i>>>31|0)&&nr(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(Y(r)&gr)<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?f*Yr*Yr:f*qr*qr;if(t>1072693248)return 0===a?f*Yr*Yr:f*qr*qr;v=function(r,n){var t,e,o,i,u,f;return t=(u=1.9259629911266175e-8*(o=n-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=wr(e=(i=1.4426950216293335*o)+u,0))-i),r[0]=e,r[1]=t,r}(zr,o)}else v=function(r,n,t){var e,o,i,u,f,a,c,l,y,p,v,s,b,d,w,A,_,m,g,h,N;return m=0,t<Fr&&(m-=53,t=Y(n*=9007199254740992)),m+=(t>>20)-K|0,t=1072693248|(g=1048575&t|0),g<=235662?h=0:g<767610?h=1:(h=0,m+=1,t-=Fr),u=wr(o=(A=(n=B(n,t))-(c=Tr[h]))*(_=1/(n+c)),0),e=524288+(t>>1|536870912),a=B(0,e+=h<<18),w=(i=o*o)*i*(0===(N=i)?.5999999999999946:.5999999999999946+N*(.4285714285785502+N*(.33333332981837743+N*(.272728123808534+N*(.23066074577556175+.20697501780033842*N))))),a=wr(a=3+(i=u*u)+(w+=(f=_*(A-u*a-u*(n-(a-c))))*(u+o)),0),b=(v=-7.028461650952758e-9*(y=wr(y=(A=u*a)+(_=f*a+(w-(a-3-i))*o),0))+.9617966939259756*(_-(y-A))+Gr[h])-((s=wr(s=(p=.9617967009544373*y)+v+(l=Hr[h])+(d=m),0))-d-l-p),r[0]=s,r[1]=b,r}(zr,o,t);if(s=(p=(n-(c=wr(n,0)))*v[0]+n*v[1])+(y=c*v[0]),vr.assign(s,Cr,1,0),b=Ar(Cr[0]),d=Ar(Cr[1]),b>=kr){if(0!=(b-kr|d))return f*Yr*Yr;if(p+8008566259537294e-32>s-y)return f*Yr*Yr}else if((b&gr)>=1083231232){if(0!=(b-3230714880|d))return f*qr*qr;if(p<=s-y)return f*qr*qr}return s=function(r,n,t){var e,o,i,u,f,a,c,l,y,p;return y=((l=r&gr|0)>>20)-K|0,c=0,l>1071644672&&(o=B(0,((c=r+(Mr>>y+1)>>>0)&~(Wr>>(y=((c&gr)>>20)-K|0)))>>>0),c=(c&Wr|Mr)>>20-y>>>0,r<0&&(c=-c),n-=o),r=Ar(r=Y(a=1-((a=(i=.6931471824645996*(o=wr(o=t+n,0)))+(u=.6931471805599453*(t-(o-n))+-1.904654299957768e-9*o))*(e=a-(o=a*a)*(0===(p=o)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=u-(a-i))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?Vr(a,c):B(a,r)}(b,y,p),f*s}var Dr=.6931471803691238,Jr=1.9082149292705877e-10,Kr=1048575;function Qr(r){var n,t,e,o,i,u,f,a,c,y,p,v;return 0===r?J:l(r)||r<0?NaN:(i=0,(t=Y(r))<1048576&&(i-=54,t=Y(r*=0x40000000000000)),t>=2146435072?r+r:(i+=(t>>20)-K|0,i+=(a=614244+(t&=Kr)&1048576|0)>>20|0,f=(r=B(r,t|1072693248^a))-1,(Kr&2+t)<3?0===f?0===i?0:i*Dr+i*Jr:(u=f*f*(.5-.3333333333333333*f),0===i?f-u:i*Dr-(u-i*Jr-f)):(a=t-398458|0,c=440401-t|0,o=(p=(v=(y=f/(2+f))*y)*v)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=v*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),u=e+o,(a|=c)>0?(n=.5*f*f,0===i?f-(n-y*(n+u)):i*Dr-(n-(y*(n+u)+i*Jr)-f)):0===i?f-y*(f-u):i*Dr-(y*(f-u)-i*Jr-f))))}var Rr=1.1447298858494002;function Xr(r,n,t){return l(r)||l(t)||l(n)||t<=0?NaN:-(Rr+Qr(t)+X(Br((r-n)/t,2)))}return c(Xr,"factory",(function(r,n){return l(n)||l(r)||n<=0?(t=NaN,function(){return t}):function(t){return l(t)?NaN:-(Rr+Qr(n)+X(Br((t-r)/n,2)))};var t})),Xr},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).logpdf=n();
//# sourceMappingURL=index.js.map
