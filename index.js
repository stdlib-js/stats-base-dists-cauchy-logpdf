// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(r){"use strict";var n="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,f=e.__lookupGetter__,a=e.__lookupSetter__,c=function(){try{return n({},"x",{}),!0}catch(r){return!1}}()?t:function(r,n,t){var c,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(f.call(r,n)||a.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),y="get"in t,p="set"in t,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,n,t.get),p&&i&&i.call(r,n,t.set),r};function l(r,n,t){c(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function y(r){return r!=r}var p,v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),b=Object.prototype.toString,d=Object.prototype.hasOwnProperty,s="function"==typeof Symbol?Symbol.toStringTag:"",w=v&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,u;if(null==r)return b.call(r);t=r[s],u=s,n=null!=(o=r)&&d.call(o,u);try{r[s]=void 0}catch(n){return b.call(r)}return e=b.call(r),n?r[s]=t:delete r[s],e}:function(r){return b.call(r)},_="function"==typeof Uint32Array,A="function"==typeof Uint32Array?Uint32Array:null,m="function"==typeof Uint32Array?Uint32Array:void 0;p=function(){var r,n,t;if("function"!=typeof A)return!1;try{n=new A(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(_&&t instanceof Uint32Array||"[object Uint32Array]"===w(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?m:function(){throw new Error("not implemented")};var h,N=p,U="function"==typeof Float64Array,g="function"==typeof Float64Array?Float64Array:null,j="function"==typeof Float64Array?Float64Array:void 0;h=function(){var r,n,t;if("function"!=typeof g)return!1;try{n=new g([1,3.14,-3.14,NaN]),t=n,r=(U&&t instanceof Float64Array||"[object Float64Array]"===w(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?j:function(){throw new Error("not implemented")};var I,O=h,S="function"==typeof Uint8Array,E="function"==typeof Uint8Array?Uint8Array:null,F="function"==typeof Uint8Array?Uint8Array:void 0;I=function(){var r,n,t;if("function"!=typeof E)return!1;try{n=new E(n=[1,3.14,-3.14,256,257]),t=n,r=(S&&t instanceof Uint8Array||"[object Uint8Array]"===w(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?F:function(){throw new Error("not implemented")};var T,H=I,G="function"==typeof Uint16Array,P="function"==typeof Uint16Array?Uint16Array:null,x="function"==typeof Uint16Array?Uint16Array:void 0;T=function(){var r,n,t;if("function"!=typeof P)return!1;try{n=new P(n=[1,3.14,-3.14,65536,65537]),t=n,r=(G&&t instanceof Uint16Array||"[object Uint16Array]"===w(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?x:function(){throw new Error("not implemented")};var L,M={uint16:T,uint8:H};(L=new M.uint16(1))[0]=4660;var V=52===new M.uint8(L.buffer)[0],W=!0===V?1:0,k=new O(1),Y=new N(k.buffer);function q(r){return k[0]=r,Y[W]}var C=!0===V?1:0,z=new O(1),B=new N(z.buffer);function D(r,n){return z[0]=r,B[C]=n>>>0,z[0]}var J=Number.POSITIVE_INFINITY,K=Number.NEGATIVE_INFINITY,Q=1023,R=.6931471803691238,X=1.9082149292705877e-10;function Z(r){var n,t,e,o,u,i,f,a,c,l;if(r<-1||y(r))return NaN;if(-1===r)return K;if(r===J)return r;if(0===r)return r;if(l=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(l=0,o=r,t=1)}return 0!==l&&(e<9007199254740992?(u=(l=((t=q(c=1+r))>>20)-Q)>0?1-(c-r):r-(c-1),u/=c):(l=((t=q(c=r))>>20)-Q,u=0),(t&=1048575)<434334?c=D(c,1072693248|t):(l+=1,c=D(c,1071644672|t),t=1048576-t>>2),o=c-1),n=.5*o*o,0===t?0===o?l*R+(u+=l*X):l*R-((a=n*(1-.6666666666666666*o))-(l*X+u)-o):(a=(f=(i=o/(2+o))*i)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(f),0===l?o-(n-i*(n+a)):l*R-(n-(i*(n+a)+(l*X+u))-o))}var $=Math.floor;function rr(r){return $(r)===r}function nr(r){return rr(r/2)}function tr(r){return nr(r>0?r-1:r+1)}function er(r){return r===J||r===K}var or,ur,ir=Math.sqrt;function fr(r){return Math.abs(r)}!0===V?(or=1,ur=0):(or=0,ur=1);var ar={HIGH:or,LOW:ur},cr=new O(1),lr=new N(cr.buffer),yr=ar.HIGH,pr=ar.LOW;function vr(r,n){return cr[0]=n,r[0]=lr[yr],r[1]=lr[pr],r}function br(r,n){return 1===arguments.length?vr([0,0],r):vr(r,n)}var dr,sr,wr=!0===V?0:1,_r=new O(1),Ar=new N(_r.buffer);function mr(r,n){return _r[0]=r,Ar[wr]=n>>>0,_r[0]}function hr(r){return 0|r}!0===V?(dr=1,sr=0):(dr=0,sr=1);var Nr={HIGH:dr,LOW:sr},Ur=new O(1),gr=new N(Ur.buffer),jr=Nr.HIGH,Ir=Nr.LOW;function Or(r,n){return gr[jr]=r,gr[Ir]=n,Ur[0]}var Sr=[0,0];function Er(r,n){var t,e;return br(Sr,r),t=Sr[0],t&=2147483647,e=q(n),Or(t|=e&=2147483648,Sr[1])}var Fr=1048576,Tr=[1,1.5],Hr=[0,.5849624872207642],Gr=[0,1.350039202129749e-8];function Pr(r,n,t,e){return y(r)||er(r)?(n[e]=r,n[e+t]=0,n):0!==r&&fr(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}l((function(r){return Pr(r,[0,0],1,0)}),"assign",Pr);var xr=[0,0],Lr=[0,0];function Mr(r,n){var t,e;return 0===n||0===r||y(r)||er(r)?r:(Pr(r,xr,1,0),n+=xr[1],n+=function(r){var n=q(r);return(n=(2146435072&n)>>>20)-Q|0}(r=xr[0]),n<-1074?Er(0,r):n>1023?r<0?K:J:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,br(Lr,r),t=Lr[0],t&=2148532223,e*Or(t|=n+Q<<20,Lr[1])))}var Vr=2147483647,Wr=1048575,kr=1048576,Yr=2147483647,qr=1083179008,Cr=1e300,zr=1e-300,Br=[0,0],Dr=[0,0];function Jr(r,n){var t,e,o,u,i,f,a,c,l,p,v,b,d,s;if(y(r)||y(n))return NaN;if(br(Br,n),i=Br[0],0===Br[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return ir(r);if(-.5===n)return 1/ir(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(er(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:fr(r)<1==(n===J)?0:J}(r,n)}if(br(Br,r),u=Br[0],0===Br[1]){if(0===u)return function(r,n){return n===K?J:n===J?0:n>0?tr(n)?r:0:tr(n)?Er(J,r):J}(r,n);if(1===r)return 1;if(-1===r&&tr(n))return-1;if(er(r))return r===K?Jr(-0,-n):n<0?0:J}if(r<0&&!1===rr(n))return(r-r)/(r-r);if(o=fr(r),t=u&Yr|0,e=i&Yr|0,a=i>>>31|0,f=(f=u>>>31|0)&&tr(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&q(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?f*Cr*Cr:f*zr*zr;if(t>1072693248)return 0===a?f*Cr*Cr:f*zr*zr;v=function(r,n){var t,e,o,u,i,f;return t=(i=1.9259629911266175e-8*(o=n-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=mr(e=(u=1.4426950216293335*o)+i,0))-u),r[0]=e,r[1]=t,r}(Dr,o)}else v=function(r,n,t){var e,o,u,i,f,a,c,l,y,p,v,b,d,s,w,_,A,m,h,N,U;return m=0,t<Fr&&(m-=53,t=q(n*=9007199254740992)),m+=(t>>20)-Q|0,t=1072693248|(h=1048575&t|0),h<=235662?N=0:h<767610?N=1:(N=0,m+=1,t-=Fr),i=mr(o=(_=(n=D(n,t))-(c=Tr[N]))*(A=1/(n+c)),0),e=524288+(t>>1|536870912),a=D(0,e+=N<<18),w=(u=o*o)*u*(0===(U=u)?.5999999999999946:.5999999999999946+U*(.4285714285785502+U*(.33333332981837743+U*(.272728123808534+U*(.23066074577556175+.20697501780033842*U))))),a=mr(a=3+(u=i*i)+(w+=(f=A*(_-i*a-i*(n-(a-c))))*(i+o)),0),d=(v=-7.028461650952758e-9*(y=mr(y=(_=i*a)+(A=f*a+(w-(a-3-u))*o),0))+.9617966939259756*(A-(y-_))+Gr[N])-((b=mr(b=(p=.9617967009544373*y)+v+(l=Hr[N])+(s=m),0))-s-l-p),r[0]=b,r[1]=d,r}(Dr,o,t);if(p=(n-(c=mr(n,0)))*v[0]+n*v[1],l=c*v[0],br(Br,b=p+l),d=hr(Br[0]),s=hr(Br[1]),d>=qr){if(0!=(d-qr|s))return f*Cr*Cr;if(p+8008566259537294e-32>b-l)return f*Cr*Cr}else if((d&Yr)>=1083231232){if(0!=(d-3230714880|s))return f*zr*zr;if(p<=b-l)return f*zr*zr}return b=function(r,n,t){var e,o,u,i,f,a,c,l,y,p;return y=((l=r&Vr|0)>>20)-Q|0,c=0,l>1071644672&&(o=D(0,((c=r+(kr>>y+1)>>>0)&~(Wr>>(y=((c&Vr)>>20)-Q|0)))>>>0),c=(c&Wr|kr)>>20-y>>>0,r<0&&(c=-c),n-=o),r=hr(r=q(a=1-((a=(u=.6931471824645996*(o=mr(o=t+n,0)))+(i=.6931471805599453*(t-(o-n))+-1.904654299957768e-9*o))*(e=a-(o=a*a)*(0===(p=o)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=i-(a-u))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?Mr(a,c):D(a,r)}(d,l,p),f*b}var Kr=.6931471803691238,Qr=1.9082149292705877e-10,Rr=1048575;function Xr(r){var n,t,e,o,u,i,f,a,c,l,p,v;return 0===r?K:y(r)||r<0?NaN:(u=0,(t=q(r))<1048576&&(u-=54,t=q(r*=0x40000000000000)),t>=2146435072?r+r:(u+=(t>>20)-Q|0,u+=(a=614244+(t&=Rr)&1048576|0)>>20|0,f=(r=D(r,t|1072693248^a))-1,(Rr&2+t)<3?0===f?0===u?0:u*Kr+u*Qr:(i=f*f*(.5-.3333333333333333*f),0===u?f-i:u*Kr-(i-u*Qr-f)):(a=t-398458|0,c=440401-t|0,o=(p=(v=(l=f/(2+f))*l)*v)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=v*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),i=e+o,(a|=c)>0?(n=.5*f*f,0===u?f-(n-l*(n+i)):u*Kr-(n-(l*(n+i)+u*Qr)-f)):0===u?f-l*(f-i):u*Kr-(l*(f-i)-u*Qr-f))))}var Zr=1.1447298858494002;function $r(r,n,t){return y(r)||y(t)||y(n)||t<=0?NaN:-(Zr+Xr(t)+Z(Jr((r-n)/t,2)))}function rn(r,n){return y(n)||y(r)||n<=0?(t=NaN,function(){return t}):function(t){return y(t)?NaN:-(Zr+Xr(n)+Z(Jr((t-r)/n,2)))};var t}l($r,"factory",rn),r.default=$r,r.factory=rn,Object.defineProperty(r,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((r="undefined"!=typeof globalThis?globalThis:r||self).logpdf={});
//# sourceMappingURL=index.js.map
