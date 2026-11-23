const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/mount-BMK7Ahml.js","assets/readouts-CtLW-SWs.js","assets/replaySource-BrNA1pKk.js","assets/oemDashboard-Cj9B7edU.js","assets/oemDashboard-Dhx7_x8s.css"])))=>i.map(i=>d[i]);
var x_=Object.defineProperty;var qd=i=>{throw TypeError(i)};var M_=(i,e,t)=>e in i?x_(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var et=(i,e,t)=>M_(i,typeof e!="symbol"?e+"":e,t),Zc=(i,e,t)=>e.has(i)||qd("Cannot "+t);var U=(i,e,t)=>(Zc(i,e,"read from private field"),t?t.call(i):e.get(i)),Se=(i,e,t)=>e.has(i)?qd("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(i):e.set(i,t),Xe=(i,e,t,n)=>(Zc(i,e,"write to private field"),n?n.call(i,t):e.set(i,t),t),gt=(i,e,t)=>(Zc(i,e,"access private method"),t);var lr=(i,e,t,n)=>({set _(s){Xe(i,e,s,t)},get _(){return U(i,e,n)}});(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const v_="modulepreload",y_=function(i){return"/"+i},Yd={},eu=function(e,t,n){let s=Promise.resolve();if(t&&t.length>0){let o=function(c){return Promise.all(c.map(h=>Promise.resolve(h).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=o(t.map(c=>{if(c=y_(c),c in Yd)return;Yd[c]=!0;const h=c.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const d=document.createElement("link");if(d.rel=h?"stylesheet":v_,h||(d.as="script"),d.crossOrigin="",d.href=c,l&&d.setAttribute("nonce",l),document.head.appendChild(d),h)return new Promise((f,p)=>{d.addEventListener("load",f),d.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cd="176",Or={ROTATE:0,DOLLY:1,PAN:2},Ur={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},b_=0,Kd=1,S_=2,Lm=1,Pm=2,Li=3,Gi=0,vn=1,Cn=2,_s=0,Br=1,Zd=2,Jd=3,Qd=4,E_=5,Us=100,w_=101,T_=102,A_=103,R_=104,C_=200,L_=201,P_=202,D_=203,tu=204,nu=205,I_=206,N_=207,U_=208,F_=209,O_=210,B_=211,k_=212,z_=213,H_=214,iu=0,su=1,ru=2,fo=3,ou=4,au=5,lu=6,cu=7,Dm=0,G_=1,V_=2,xs=0,W_=1,$_=2,X_=3,Im=4,j_=5,q_=6,Y_=7,ef="attached",K_="detached",Nm=300,po=301,mo=302,hu=303,uu=304,Oc=306,go=1e3,ms=1001,Mc=1002,En=1003,Um=1004,oa=1005,Ln=1006,oc=1007,Bi=1008,Mi=1009,Fm=1010,Om=1011,_a=1012,hd=1013,Qs=1014,ri=1015,tl=1016,ud=1017,dd=1018,xa=1020,Bm=35902,km=1021,zm=1022,Yn=1023,Ma=1026,va=1027,fd=1028,pd=1029,Hm=1030,md=1031,gd=1033,ac=33776,lc=33777,cc=33778,hc=33779,du=35840,fu=35841,pu=35842,mu=35843,gu=36196,_u=37492,xu=37496,Mu=37808,vu=37809,yu=37810,bu=37811,Su=37812,Eu=37813,wu=37814,Tu=37815,Au=37816,Ru=37817,Cu=37818,Lu=37819,Pu=37820,Du=37821,uc=36492,Iu=36494,Nu=36495,Gm=36283,Uu=36284,Fu=36285,Ou=36286,ya=2300,ba=2301,Jc=2302,tf=2400,nf=2401,sf=2402,Z_=2500,J_=0,Vm=1,Bu=2,Q_=3200,e0=3201,Wm=0,t0=1,os="",Xt="srgb",wn="srgb-linear",vc="linear",At="srgb",cr=7680,rf=519,n0=512,i0=513,s0=514,$m=515,r0=516,o0=517,a0=518,l0=519,ku=35044,EA=35048,of="300 es",ki=2e3,yc=2001;class ir{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let af=1234567;const ua=Math.PI/180,_o=180/Math.PI;function oi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]).toLowerCase()}function ht(i,e,t){return Math.max(e,Math.min(t,i))}function _d(i,e){return(i%e+e)%e}function c0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function h0(i,e,t){return i!==e?(t-i)/(e-i):0}function da(i,e,t){return(1-t)*i+t*e}function u0(i,e,t,n){return da(i,e,1-Math.exp(-t*n))}function d0(i,e=1){return e-Math.abs(_d(i,e*2)-e)}function f0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function p0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function m0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function g0(i,e){return i+Math.random()*(e-i)}function _0(i){return i*(.5-Math.random())}function x0(i){i!==void 0&&(af=i);let e=af+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function M0(i){return i*ua}function v0(i){return i*_o}function y0(i){return(i&i-1)===0&&i!==0}function b0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function S0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function E0(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),p=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*p,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*p,a*c);break;case"ZYZ":i.set(l*p,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ii(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function yt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const xd={DEG2RAD:ua,RAD2DEG:_o,generateUUID:oi,clamp:ht,euclideanModulo:_d,mapLinear:c0,inverseLerp:h0,lerp:da,damp:u0,pingpong:d0,smoothstep:f0,smootherstep:p0,randInt:m0,randFloat:g0,randFloatSpread:_0,seededRandom:x0,degToRad:M0,radToDeg:v0,isPowerOfTwo:y0,ceilPowerOfTwo:b0,floorPowerOfTwo:S0,setQuaternionFromProperEuler:E0,normalize:yt,denormalize:ii};class qe{constructor(e=0,t=0){qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class at{constructor(e,t,n,s,r,o,a,l,c){at.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],_=s[0],g=s[3],m=s[6],M=s[1],v=s[4],x=s[7],R=s[2],S=s[5],E=s[8];return r[0]=o*_+a*M+l*R,r[3]=o*g+a*v+l*S,r[6]=o*m+a*x+l*E,r[1]=c*_+h*M+u*R,r[4]=c*g+h*v+u*S,r[7]=c*m+h*x+u*E,r[2]=d*_+f*M+p*R,r[5]=d*g+f*v+p*S,r[8]=d*m+f*x+p*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,p=t*u+n*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return e[0]=u*_,e[1]=(s*c-h*n)*_,e[2]=(a*n-s*o)*_,e[3]=d*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Qc.makeScale(e,t)),this}rotate(e){return this.premultiply(Qc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Qc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qc=new at;function Xm(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Sa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function w0(){const i=Sa("canvas");return i.style.display="block",i}const lf={};function dc(i){i in lf||(lf[i]=!0,console.warn(i))}function T0(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function A0(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function R0(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const cf=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hf=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function C0(){const i={enabled:!0,workingColorSpace:wn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===At&&(s.r=Hi(s.r),s.g=Hi(s.g),s.b=Hi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===At&&(s.r=kr(s.r),s.g=kr(s.g),s.b=kr(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===os?vc:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[wn]:{primaries:e,whitePoint:n,transfer:vc,toXYZ:cf,fromXYZ:hf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Xt},outputColorSpaceConfig:{drawingBufferColorSpace:Xt}},[Xt]:{primaries:e,whitePoint:n,transfer:At,toXYZ:cf,fromXYZ:hf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Xt}}}),i}const vt=C0();function Hi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function kr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let hr;class L0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{hr===void 0&&(hr=Sa("canvas")),hr.width=e.width,hr.height=e.height;const s=hr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=hr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Sa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Hi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Hi(t[n]/255)*255):t[n]=Hi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let P0=0;class Md{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:P0++}),this.uuid=oi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(eh(s[o].image)):r.push(eh(s[o]))}else r=eh(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function eh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?L0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let D0=0;class tn extends ir{constructor(e=tn.DEFAULT_IMAGE,t=tn.DEFAULT_MAPPING,n=ms,s=ms,r=Ln,o=Bi,a=Yn,l=Mi,c=tn.DEFAULT_ANISOTROPY,h=os){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=oi(),this.name="",this.source=new Md(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case go:e.x=e.x-Math.floor(e.x);break;case ms:e.x=e.x<0?0:1;break;case Mc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case go:e.y=e.y-Math.floor(e.y);break;case ms:e.y=e.y<0?0:1;break;case Mc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Nm;tn.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,t=0,n=0,s=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,x=(f+1)/2,R=(m+1)/2,S=(h+d)/4,E=(u+_)/4,L=(p+g)/4;return v>x&&v>R?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=S/n,r=E/n):x>R?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=S/s,r=L/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=E/r,s=L/r),this.set(n,s,r,t),this}let M=Math.sqrt((g-p)*(g-p)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(g-p)/M,this.y=(u-_)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this.w=ht(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this.w=ht(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class I0 extends ir{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth?n.depth:1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);const s={width:e,height:t,depth:this.depth};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},n);const r=new tn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Md(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class er extends I0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class jm extends tn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=En,this.minFilter=En,this.wrapR=ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class N0 extends tn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=En,this.minFilter=En,this.wrapR=ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],p=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=_;return}if(u!==_||l!==d||c!==f||h!==p){let g=1-a;const m=l*d+c*f+h*p+u*_,M=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const R=Math.sqrt(v),S=Math.atan2(R,m*M);g=Math.sin(g*S)/R,a=Math.sin(a*S)/R}const x=a*M;if(l=l*g+d*x,c=c*g+f*x,h=h*g+p*x,u=u*g+_*x,g===1-a){const R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+h*u+l*f-c*d,e[t+1]=l*p+h*d+c*u-a*f,e[t+2]=c*p+h*f+a*d-l*u,e[t+3]=h*p-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,n=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(uf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(uf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return th.copy(this).projectOnVector(e),this.sub(th)}reflect(e){return this.sub(th.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const th=new V,uf=new vi;class On{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Jn):Jn.fromBufferAttribute(r,o),Jn.applyMatrix4(e.matrixWorld),this.expandByPoint(Jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),dl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),dl.copy(n.boundingBox)),dl.applyMatrix4(e.matrixWorld),this.union(dl)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wo),fl.subVectors(this.max,Wo),ur.subVectors(e.a,Wo),dr.subVectors(e.b,Wo),fr.subVectors(e.c,Wo),qi.subVectors(dr,ur),Yi.subVectors(fr,dr),bs.subVectors(ur,fr);let t=[0,-qi.z,qi.y,0,-Yi.z,Yi.y,0,-bs.z,bs.y,qi.z,0,-qi.x,Yi.z,0,-Yi.x,bs.z,0,-bs.x,-qi.y,qi.x,0,-Yi.y,Yi.x,0,-bs.y,bs.x,0];return!nh(t,ur,dr,fr,fl)||(t=[1,0,0,0,1,0,0,0,1],!nh(t,ur,dr,fr,fl))?!1:(pl.crossVectors(qi,Yi),t=[pl.x,pl.y,pl.z],nh(t,ur,dr,fr,fl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Si=[new V,new V,new V,new V,new V,new V,new V,new V],Jn=new V,dl=new On,ur=new V,dr=new V,fr=new V,qi=new V,Yi=new V,bs=new V,Wo=new V,fl=new V,pl=new V,Ss=new V;function nh(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ss.fromArray(i,r);const a=s.x*Math.abs(Ss.x)+s.y*Math.abs(Ss.y)+s.z*Math.abs(Ss.z),l=e.dot(Ss),c=t.dot(Ss),h=n.dot(Ss);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const U0=new On,$o=new V,ih=new V;class Bn{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):U0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$o.subVectors(e,this.center);const t=$o.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector($o,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ih.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($o.copy(e.center).add(ih)),this.expandByPoint($o.copy(e.center).sub(ih))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ei=new V,sh=new V,ml=new V,Ki=new V,rh=new V,gl=new V,oh=new V;class Ao{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ei.copy(this.origin).addScaledVector(this.direction,t),Ei.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){sh.copy(e).add(t).multiplyScalar(.5),ml.copy(t).sub(e).normalize(),Ki.copy(this.origin).sub(sh);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ml),a=Ki.dot(this.direction),l=-Ki.dot(ml),c=Ki.lengthSq(),h=Math.abs(1-o*o);let u,d,f,p;if(h>0)if(u=o*l-a,d=o*a-l,p=r*h,u>=0)if(d>=-p)if(d<=p){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(sh).addScaledVector(ml,d),f}intersectSphere(e,t){Ei.subVectors(e.center,this.origin);const n=Ei.dot(this.direction),s=Ei.dot(Ei)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ei)!==null}intersectTriangle(e,t,n,s,r){rh.subVectors(t,e),gl.subVectors(n,e),oh.crossVectors(rh,gl);let o=this.direction.dot(oh),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ki.subVectors(this.origin,e);const l=a*this.direction.dot(gl.crossVectors(Ki,gl));if(l<0)return null;const c=a*this.direction.dot(rh.cross(Ki));if(c<0||l+c>o)return null;const h=-a*Ki.dot(oh);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rt{constructor(e,t,n,s,r,o,a,l,c,h,u,d,f,p,_,g){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,d,f,p,_,g)}set(e,t,n,s,r,o,a,l,c,h,u,d,f,p,_,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/pr.setFromMatrixColumn(e,0).length(),r=1/pr.setFromMatrixColumn(e,1).length(),o=1/pr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*u,p=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+p*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,p=c*h,_=c*u;t[0]=d+_*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-p,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,p=c*h,_=c*u;t[0]=d-_*a,t[4]=-o*u,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,f=o*u,p=a*h,_=a*u;t[0]=l*h,t[4]=p*c-f,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,p=a*l,_=a*c;t[0]=l*h,t[4]=_-d*u,t[8]=p*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+p,t[10]=d-_*u}else if(e.order==="XZY"){const d=o*l,f=o*c,p=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=o*h,t[9]=f*u-p,t[2]=p*u-f,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(F0,e,O0)}lookAt(e,t,n){const s=this.elements;return Dn.subVectors(e,t),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),Zi.crossVectors(n,Dn),Zi.lengthSq()===0&&(Math.abs(n.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),Zi.crossVectors(n,Dn)),Zi.normalize(),_l.crossVectors(Dn,Zi),s[0]=Zi.x,s[4]=_l.x,s[8]=Dn.x,s[1]=Zi.y,s[5]=_l.y,s[9]=Dn.y,s[2]=Zi.z,s[6]=_l.z,s[10]=Dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],_=n[6],g=n[10],m=n[14],M=n[3],v=n[7],x=n[11],R=n[15],S=s[0],E=s[4],L=s[8],b=s[12],y=s[1],C=s[5],H=s[9],G=s[13],O=s[2],I=s[6],D=s[10],P=s[14],F=s[3],$=s[7],ee=s[11],W=s[15];return r[0]=o*S+a*y+l*O+c*F,r[4]=o*E+a*C+l*I+c*$,r[8]=o*L+a*H+l*D+c*ee,r[12]=o*b+a*G+l*P+c*W,r[1]=h*S+u*y+d*O+f*F,r[5]=h*E+u*C+d*I+f*$,r[9]=h*L+u*H+d*D+f*ee,r[13]=h*b+u*G+d*P+f*W,r[2]=p*S+_*y+g*O+m*F,r[6]=p*E+_*C+g*I+m*$,r[10]=p*L+_*H+g*D+m*ee,r[14]=p*b+_*G+g*P+m*W,r[3]=M*S+v*y+x*O+R*F,r[7]=M*E+v*C+x*I+R*$,r[11]=M*L+v*H+x*D+R*ee,r[15]=M*b+v*G+x*P+R*W,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],p=e[3],_=e[7],g=e[11],m=e[15];return p*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*f-n*l*f)+_*(+t*l*f-t*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+g*(+t*c*u-t*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+m*(-s*a*h-t*l*u+t*a*d+s*o*u-n*o*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],p=e[12],_=e[13],g=e[14],m=e[15],M=u*g*c-_*d*c+_*l*f-a*g*f-u*l*m+a*d*m,v=p*d*c-h*g*c-p*l*f+o*g*f+h*l*m-o*d*m,x=h*_*c-p*u*c+p*a*f-o*_*f-h*a*m+o*u*m,R=p*u*l-h*_*l-p*a*d+o*_*d+h*a*g-o*u*g,S=t*M+n*v+s*x+r*R;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/S;return e[0]=M*E,e[1]=(_*d*r-u*g*r-_*s*f+n*g*f+u*s*m-n*d*m)*E,e[2]=(a*g*r-_*l*r+_*s*c-n*g*c-a*s*m+n*l*m)*E,e[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*f-n*l*f)*E,e[4]=v*E,e[5]=(h*g*r-p*d*r+p*s*f-t*g*f-h*s*m+t*d*m)*E,e[6]=(p*l*r-o*g*r-p*s*c+t*g*c+o*s*m-t*l*m)*E,e[7]=(o*d*r-h*l*r+h*s*c-t*d*c-o*s*f+t*l*f)*E,e[8]=x*E,e[9]=(p*u*r-h*_*r-p*n*f+t*_*f+h*n*m-t*u*m)*E,e[10]=(o*_*r-p*a*r+p*n*c-t*_*c-o*n*m+t*a*m)*E,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*f-t*a*f)*E,e[12]=R*E,e[13]=(h*_*s-p*u*s+p*n*d-t*_*d-h*n*g+t*u*g)*E,e[14]=(p*a*s-o*_*s-p*n*l+t*_*l+o*n*g-t*a*g)*E,e[15]=(o*u*s-h*a*s+h*n*l-t*u*l-o*n*d+t*a*d)*E,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,p=r*u,_=o*h,g=o*u,m=a*u,M=l*c,v=l*h,x=l*u,R=n.x,S=n.y,E=n.z;return s[0]=(1-(_+m))*R,s[1]=(f+x)*R,s[2]=(p-v)*R,s[3]=0,s[4]=(f-x)*S,s[5]=(1-(d+m))*S,s[6]=(g+M)*S,s[7]=0,s[8]=(p+v)*E,s[9]=(g-M)*E,s[10]=(1-(d+_))*E,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=pr.set(s[0],s[1],s[2]).length();const o=pr.set(s[4],s[5],s[6]).length(),a=pr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Qn.copy(this);const c=1/r,h=1/o,u=1/a;return Qn.elements[0]*=c,Qn.elements[1]*=c,Qn.elements[2]*=c,Qn.elements[4]*=h,Qn.elements[5]*=h,Qn.elements[6]*=h,Qn.elements[8]*=u,Qn.elements[9]*=u,Qn.elements[10]*=u,t.setFromRotationMatrix(Qn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=ki){const l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s);let f,p;if(a===ki)f=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===yc)f=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=ki){const l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(o-r),d=(t+e)*c,f=(n+s)*h;let p,_;if(a===ki)p=(o+r)*u,_=-2*u;else if(a===yc)p=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const pr=new V,Qn=new rt,F0=new V(0,0,0),O0=new V(1,1,1),Zi=new V,_l=new V,Dn=new V,df=new rt,ff=new vi;class yi{constructor(e=0,t=0,n=0,s=yi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ht(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ht(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return df.makeRotationFromQuaternion(e),this.setFromRotationMatrix(df,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ff.setFromEuler(this),this.setFromQuaternion(ff,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yi.DEFAULT_ORDER="XYZ";class vd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let B0=0;const pf=new V,mr=new vi,wi=new rt,xl=new V,Xo=new V,k0=new V,z0=new vi,mf=new V(1,0,0),gf=new V(0,1,0),_f=new V(0,0,1),xf={type:"added"},H0={type:"removed"},gr={type:"childadded",child:null},ah={type:"childremoved",child:null};class Bt extends ir{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:B0++}),this.uuid=oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bt.DEFAULT_UP.clone();const e=new V,t=new yi,n=new vi,s=new V(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new rt},normalMatrix:{value:new at}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=Bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return mr.setFromAxisAngle(e,t),this.quaternion.multiply(mr),this}rotateOnWorldAxis(e,t){return mr.setFromAxisAngle(e,t),this.quaternion.premultiply(mr),this}rotateX(e){return this.rotateOnAxis(mf,e)}rotateY(e){return this.rotateOnAxis(gf,e)}rotateZ(e){return this.rotateOnAxis(_f,e)}translateOnAxis(e,t){return pf.copy(e).applyQuaternion(this.quaternion),this.position.add(pf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mf,e)}translateY(e){return this.translateOnAxis(gf,e)}translateZ(e){return this.translateOnAxis(_f,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?xl.copy(e):xl.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(Xo,xl,this.up):wi.lookAt(xl,Xo,this.up),this.quaternion.setFromRotationMatrix(wi),s&&(wi.extractRotation(s.matrixWorld),mr.setFromRotationMatrix(wi),this.quaternion.premultiply(mr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xf),gr.child=e,this.dispatchEvent(gr),gr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(H0),ah.child=e,this.dispatchEvent(ah),ah.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xf),gr.child=e,this.dispatchEvent(gr),gr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,e,k0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,z0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?{min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}:void 0,boundingSphere:a.boundingSphere?{radius:a.boundingSphere.radius,center:a.boundingSphere.center.toArray()}:void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Bt.DEFAULT_UP=new V(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ei=new V,Ti=new V,lh=new V,Ai=new V,_r=new V,xr=new V,Mf=new V,ch=new V,hh=new V,uh=new V,dh=new _t,fh=new _t,ph=new _t;class qn{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ei.subVectors(e,t),s.cross(ei);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ei.subVectors(s,t),Ti.subVectors(n,t),lh.subVectors(e,t);const o=ei.dot(ei),a=ei.dot(Ti),l=ei.dot(lh),c=Ti.dot(Ti),h=Ti.dot(lh),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,p=(o*h-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ai)===null?!1:Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ai.x),l.addScaledVector(o,Ai.y),l.addScaledVector(a,Ai.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return dh.setScalar(0),fh.setScalar(0),ph.setScalar(0),dh.fromBufferAttribute(e,t),fh.fromBufferAttribute(e,n),ph.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(dh,r.x),o.addScaledVector(fh,r.y),o.addScaledVector(ph,r.z),o}static isFrontFacing(e,t,n,s){return ei.subVectors(n,t),Ti.subVectors(e,t),ei.cross(Ti).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ei.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),ei.cross(Ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return qn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return qn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;_r.subVectors(s,n),xr.subVectors(r,n),ch.subVectors(e,n);const l=_r.dot(ch),c=xr.dot(ch);if(l<=0&&c<=0)return t.copy(n);hh.subVectors(e,s);const h=_r.dot(hh),u=xr.dot(hh);if(h>=0&&u<=h)return t.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(_r,o);uh.subVectors(e,r);const f=_r.dot(uh),p=xr.dot(uh);if(p>=0&&f<=p)return t.copy(r);const _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(xr,a);const g=h*p-f*u;if(g<=0&&u-h>=0&&f-p>=0)return Mf.subVectors(r,s),a=(u-h)/(u-h+(f-p)),t.copy(s).addScaledVector(Mf,a);const m=1/(g+_+d);return o=_*m,a=d*m,t.copy(n).addScaledVector(_r,o).addScaledVector(xr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const qm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},Ml={h:0,s:0,l:0};function mh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=vt.workingColorSpace){return this.r=e,this.g=t,this.b=n,vt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=vt.workingColorSpace){if(e=_d(e,1),t=ht(t,0,1),n=ht(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=mh(o,r,e+1/3),this.g=mh(o,r,e),this.b=mh(o,r,e-1/3)}return vt.toWorkingColorSpace(this,s),this}setStyle(e,t=Xt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){const n=qm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}copyLinearToSRGB(e){return this.r=kr(e.r),this.g=kr(e.g),this.b=kr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return vt.fromWorkingColorSpace(_n.copy(this),e),Math.round(ht(_n.r*255,0,255))*65536+Math.round(ht(_n.g*255,0,255))*256+Math.round(ht(_n.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.fromWorkingColorSpace(_n.copy(this),t);const n=_n.r,s=_n.g,r=_n.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=vt.workingColorSpace){return vt.fromWorkingColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=Xt){vt.fromWorkingColorSpace(_n.copy(this),e);const t=_n.r,n=_n.g,s=_n.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ji),this.setHSL(Ji.h+e,Ji.s+t,Ji.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ji),e.getHSL(Ml);const n=da(Ji.h,Ml.h,t),s=da(Ji.s,Ml.s,t),r=da(Ji.l,Ml.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _n=new ze;ze.NAMES=qm;let G0=0;class ai extends ir{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:G0++}),this.uuid=oi(),this.name="",this.type="Material",this.blending=Br,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tu,this.blendDst=nu,this.blendEquation=Us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=fo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cr,this.stencilZFail=cr,this.stencilZPass=cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Br&&(n.blending=this.blending),this.side!==Gi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==tu&&(n.blendSrc=this.blendSrc),this.blendDst!==nu&&(n.blendDst=this.blendDst),this.blendEquation!==Us&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==cr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==cr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class hn extends ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=Dm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kt=new V,vl=new qe;let V0=0;class xt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:V0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ku,this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)vl.fromBufferAttribute(this,t),vl.applyMatrix3(e),this.setXY(t,vl.x,vl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ii(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ii(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ii(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ii(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ii(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array),r=yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ku&&(e.usage=this.usage),e}}class Ym extends xt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Km extends xt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class qt extends xt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let W0=0;const Vn=new rt,gh=new Bt,Mr=new V,In=new On,jo=new On,cn=new V;class Nt extends ir{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:W0++}),this.uuid=oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xm(e)?Km:Ym)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new at().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,t,n){return Vn.makeTranslation(e,t,n),this.applyMatrix4(Vn),this}scale(e,t,n){return Vn.makeScale(e,t,n),this.applyMatrix4(Vn),this}lookAt(e){return gh.lookAt(e),gh.updateMatrix(),this.applyMatrix4(gh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mr).negate(),this.translate(Mr.x,Mr.y,Mr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new qt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new On);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];In.setFromBufferAttribute(r),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const n=this.boundingSphere.center;if(In.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];jo.setFromBufferAttribute(a),this.morphTargetsRelative?(cn.addVectors(In.min,jo.min),In.expandByPoint(cn),cn.addVectors(In.max,jo.max),In.expandByPoint(cn)):(In.expandByPoint(jo.min),In.expandByPoint(jo.max))}In.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)cn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(cn));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)cn.fromBufferAttribute(a,c),l&&(Mr.fromBufferAttribute(e,c),cn.add(Mr)),s=Math.max(s,n.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<n.count;L++)a[L]=new V,l[L]=new V;const c=new V,h=new V,u=new V,d=new qe,f=new qe,p=new qe,_=new V,g=new V;function m(L,b,y){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,y),d.fromBufferAttribute(r,L),f.fromBufferAttribute(r,b),p.fromBufferAttribute(r,y),h.sub(c),u.sub(c),f.sub(d),p.sub(d);const C=1/(f.x*p.y-p.x*f.y);isFinite(C)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(C),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(C),a[L].add(_),a[b].add(_),a[y].add(_),l[L].add(g),l[b].add(g),l[y].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let L=0,b=M.length;L<b;++L){const y=M[L],C=y.start,H=y.count;for(let G=C,O=C+H;G<O;G+=3)m(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const v=new V,x=new V,R=new V,S=new V;function E(L){R.fromBufferAttribute(s,L),S.copy(R);const b=a[L];v.copy(b),v.sub(R.multiplyScalar(R.dot(b))).normalize(),x.crossVectors(S,b);const C=x.dot(l[L])<0?-1:1;o.setXYZW(L,v.x,v.y,v.z,C)}for(let L=0,b=M.length;L<b;++L){const y=M[L],C=y.start,H=y.count;for(let G=C,O=C+H;G<O;G+=3)E(e.getX(G+0)),E(e.getX(G+1)),E(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new V,r=new V,o=new V,a=new V,l=new V,c=new V,h=new V,u=new V;if(e)for(let d=0,f=e.count;d<f;d+=3){const p=e.getX(d+0),_=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)cn.fromBufferAttribute(e,t),cn.normalize(),e.setXYZ(t,cn.x,cn.y,cn.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,p=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let m=0;m<h;m++)d[p++]=c[f++]}return new xt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Nt,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vf=new rt,Es=new Ao,yl=new Bn,yf=new V,bl=new V,Sl=new V,El=new V,_h=new V,wl=new V,bf=new V,Tl=new V;class Dt extends Bt{constructor(e=new Nt,t=new hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){wl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(_h.fromBufferAttribute(u,e),o?wl.addScaledVector(_h,h):wl.addScaledVector(_h.sub(t),h))}t.add(wl)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),yl.copy(n.boundingSphere),yl.applyMatrix4(r),Es.copy(e.ray).recast(e.near),!(yl.containsPoint(Es.origin)===!1&&(Es.intersectSphere(yl,yf)===null||Es.origin.distanceToSquared(yf)>(e.far-e.near)**2))&&(vf.copy(r).invert(),Es.copy(e.ray).applyMatrix4(vf),!(n.boundingBox!==null&&Es.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Es)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=d.length;p<_;p++){const g=d[p],m=o[g.materialIndex],M=Math.max(g.start,f.start),v=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let x=M,R=v;x<R;x+=3){const S=a.getX(x),E=a.getX(x+1),L=a.getX(x+2);s=Al(this,m,e,n,c,h,u,S,E,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const p=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){const M=a.getX(g),v=a.getX(g+1),x=a.getX(g+2);s=Al(this,o,e,n,c,h,u,M,v,x),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=d.length;p<_;p++){const g=d[p],m=o[g.materialIndex],M=Math.max(g.start,f.start),v=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let x=M,R=v;x<R;x+=3){const S=x,E=x+1,L=x+2;s=Al(this,m,e,n,c,h,u,S,E,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){const M=g,v=g+1,x=g+2;s=Al(this,o,e,n,c,h,u,M,v,x),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function $0(i,e,t,n,s,r,o,a){let l;if(e.side===vn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Gi,a),l===null)return null;Tl.copy(a),Tl.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Tl);return c<t.near||c>t.far?null:{distance:c,point:Tl.clone(),object:i}}function Al(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,bl),i.getVertexPosition(l,Sl),i.getVertexPosition(c,El);const h=$0(i,e,t,n,bl,Sl,El,bf);if(h){const u=new V;qn.getBarycoord(bf,bl,Sl,El,u),s&&(h.uv=qn.getInterpolatedAttribute(s,a,l,c,u,new qe)),r&&(h.uv1=qn.getInterpolatedAttribute(r,a,l,c,u,new qe)),o&&(h.normal=qn.getInterpolatedAttribute(o,a,l,c,u,new V),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new V,materialIndex:0};qn.getNormal(bl,Sl,El,d.normal),h.face=d,h.barycoord=u}return h}class Ro extends Nt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,s,o,2),p("x","z","y",1,-1,e,n,-t,s,o,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(h,3)),this.setAttribute("uv",new qt(u,2));function p(_,g,m,M,v,x,R,S,E,L,b){const y=x/E,C=R/L,H=x/2,G=R/2,O=S/2,I=E+1,D=L+1;let P=0,F=0;const $=new V;for(let ee=0;ee<D;ee++){const W=ee*C-G;for(let Q=0;Q<I;Q++){const pe=Q*y-H;$[_]=pe*M,$[g]=W*v,$[m]=O,c.push($.x,$.y,$.z),$[_]=0,$[g]=0,$[m]=S>0?1:-1,h.push($.x,$.y,$.z),u.push(Q/E),u.push(1-ee/L),P+=1}}for(let ee=0;ee<L;ee++)for(let W=0;W<E;W++){const Q=d+W+I*ee,pe=d+W+I*(ee+1),Z=d+(W+1)+I*(ee+1),oe=d+(W+1)+I*ee;l.push(Q,pe,oe),l.push(pe,Z,oe),F+=6}a.addGroup(f,F,b),f+=F,d+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ro(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xo(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Sn(i){const e={};for(let t=0;t<i.length;t++){const n=xo(i[t]);for(const s in n)e[s]=n[s]}return e}function X0(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Zm(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:vt.workingColorSpace}const yd={clone:xo,merge:Sn};var j0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,q0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vi extends ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=j0,this.fragmentShader=q0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xo(e.uniforms),this.uniformsGroups=X0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Jm extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=ki}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qi=new V,Sf=new qe,Ef=new qe;class xn extends Jm{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=_o*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ua*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _o*2*Math.atan(Math.tan(ua*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z),Qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z)}getViewSize(e,t){return this.getViewBounds(e,Sf,Ef),t.subVectors(Ef,Sf)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ua*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const vr=-90,yr=1;class Y0 extends Bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new xn(vr,yr,e,t);s.layers=this.layers,this.add(s);const r=new xn(vr,yr,e,t);r.layers=this.layers,this.add(r);const o=new xn(vr,yr,e,t);o.layers=this.layers,this.add(o);const a=new xn(vr,yr,e,t);a.layers=this.layers,this.add(a);const l=new xn(vr,yr,e,t);l.layers=this.layers,this.add(l);const c=new xn(vr,yr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===ki)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===yc)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Qm extends tn{constructor(e=[],t=po,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class K0 extends er{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Qm(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ln}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ro(5,5,5),r=new Vi({name:"CubemapFromEquirect",uniforms:xo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:vn,blending:_s});r.uniforms.tEquirect.value=t;const o=new Dt(s,r),a=t.minFilter;return t.minFilter===Bi&&(t.minFilter=Ln),new Y0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}class bt extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Z0={type:"move"};class xh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,n),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Z0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new bt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class qs{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ze(e),this.near=t,this.far=n}clone(){return new qs(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class bd extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yi,this.environmentIntensity=1,this.environmentRotation=new yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Sd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ku,this.updateRanges=[],this.version=0,this.uuid=oi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=oi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=oi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const yn=new V;class Fn{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.applyMatrix4(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.applyNormalMatrix(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.transformDirection(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ii(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ii(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ii(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ii(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ii(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array),r=yt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new xt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Fn(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class J0 extends ai{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let br;const qo=new V,Sr=new V,Er=new V,wr=new qe,Yo=new qe,eg=new rt,Rl=new V,Ko=new V,Cl=new V,wf=new qe,Mh=new qe,Tf=new qe;class wA extends Bt{constructor(e=new J0){if(super(),this.isSprite=!0,this.type="Sprite",br===void 0){br=new Nt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Sd(t,5);br.setIndex([0,1,2,0,2,3]),br.setAttribute("position",new Fn(n,3,0,!1)),br.setAttribute("uv",new Fn(n,2,3,!1))}this.geometry=br,this.material=e,this.center=new qe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Sr.setFromMatrixScale(this.matrixWorld),eg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Er.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Sr.multiplyScalar(-Er.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;Ll(Rl.set(-.5,-.5,0),Er,o,Sr,s,r),Ll(Ko.set(.5,-.5,0),Er,o,Sr,s,r),Ll(Cl.set(.5,.5,0),Er,o,Sr,s,r),wf.set(0,0),Mh.set(1,0),Tf.set(1,1);let a=e.ray.intersectTriangle(Rl,Ko,Cl,!1,qo);if(a===null&&(Ll(Ko.set(-.5,.5,0),Er,o,Sr,s,r),Mh.set(0,1),a=e.ray.intersectTriangle(Rl,Cl,Ko,!1,qo),a===null))return;const l=e.ray.origin.distanceTo(qo);l<e.near||l>e.far||t.push({distance:l,point:qo.clone(),uv:qn.getInterpolation(qo,Rl,Ko,Cl,wf,Mh,Tf,new qe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ll(i,e,t,n,s,r){wr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Yo.x=r*wr.x-s*wr.y,Yo.y=s*wr.x+r*wr.y):Yo.copy(wr),i.copy(e),i.x+=Yo.x,i.y+=Yo.y,i.applyMatrix4(eg)}const Af=new V,Rf=new _t,Cf=new _t,Q0=new V,Lf=new rt,Pl=new V,vh=new Bn,Pf=new rt,yh=new Ao;class ex extends Dt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ef,this.bindMatrix=new rt,this.bindMatrixInverse=new rt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new On),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Pl),this.boundingBox.expandByPoint(Pl)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Bn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Pl),this.boundingSphere.expandByPoint(Pl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vh.copy(this.boundingSphere),vh.applyMatrix4(s),e.ray.intersectsSphere(vh)!==!1&&(Pf.copy(s).invert(),yh.copy(e.ray).applyMatrix4(Pf),!(this.boundingBox!==null&&yh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,yh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new _t,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ef?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===K_?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;Rf.fromBufferAttribute(s.attributes.skinIndex,e),Cf.fromBufferAttribute(s.attributes.skinWeight,e),Af.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Cf.getComponent(r);if(o!==0){const a=Rf.getComponent(r);Lf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Q0.copy(Af).applyMatrix4(Lf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class tg extends Bt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ng extends tn{constructor(e=null,t=1,n=1,s,r,o,a,l,c=En,h=En,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Df=new rt,tx=new rt;class Ed{constructor(e=[],t=[]){this.uuid=oi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new rt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new rt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:tx;Df.multiplyMatrices(a,t[r]),Df.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Ed(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new ng(t,e,e,Yn,ri);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new tg),this.bones.push(o),this.boneInverses.push(new rt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class zu extends xt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Tr=new rt,If=new rt,Dl=[],Nf=new On,nx=new rt,Zo=new Dt,Jo=new Bn;class ix extends Dt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new zu(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,nx)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new On),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Tr),Nf.copy(e.boundingBox).applyMatrix4(Tr),this.boundingBox.union(Nf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Bn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Tr),Jo.copy(e.boundingSphere).applyMatrix4(Tr),this.boundingSphere.union(Jo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Zo.geometry=this.geometry,Zo.material=this.material,Zo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Jo.copy(this.boundingSphere),Jo.applyMatrix4(n),e.ray.intersectsSphere(Jo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Tr),If.multiplyMatrices(n,Tr),Zo.matrixWorld=If,Zo.raycast(e,Dl);for(let o=0,a=Dl.length;o<a;o++){const l=Dl[o];l.instanceId=r,l.object=this,t.push(l)}Dl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new zu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ng(new Float32Array(s*this.count),s,this.count,fd,ri));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const bh=new V,sx=new V,rx=new at;class rs{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=bh.subVectors(n,t).cross(sx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(bh),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||rx.getNormalMatrix(e),s=this.coplanarPoint(bh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ws=new Bn,Il=new V;class wd{constructor(e=new rs,t=new rs,n=new rs,s=new rs,r=new rs,o=new rs){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ki){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],p=s[9],_=s[10],g=s[11],m=s[12],M=s[13],v=s[14],x=s[15];if(n[0].setComponents(l-r,d-c,g-f,x-m).normalize(),n[1].setComponents(l+r,d+c,g+f,x+m).normalize(),n[2].setComponents(l+o,d+h,g+p,x+M).normalize(),n[3].setComponents(l-o,d-h,g-p,x-M).normalize(),n[4].setComponents(l-a,d-u,g-_,x-v).normalize(),t===ki)n[5].setComponents(l+a,d+u,g+_,x+v).normalize();else if(t===yc)n[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ws.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ws.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ws)}intersectsSprite(e){return ws.center.set(0,0,0),ws.radius=.7071067811865476,ws.applyMatrix4(e.matrixWorld),this.intersectsSphere(ws)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Il.x=s.normal.x>0?e.max.x:e.min.x,Il.y=s.normal.y>0?e.max.y:e.min.y,Il.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Il)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Vt extends ai{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const bc=new V,Sc=new V,Uf=new rt,Qo=new Ao,Nl=new Bn,Sh=new V,Ff=new V;class Td extends Bt{constructor(e=new Nt,t=new Vt){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)bc.fromBufferAttribute(t,s-1),Sc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=bc.distanceTo(Sc);e.setAttribute("lineDistance",new qt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Nl.copy(n.boundingSphere),Nl.applyMatrix4(s),Nl.radius+=r,e.ray.intersectsSphere(Nl)===!1)return;Uf.copy(s).invert(),Qo.copy(e.ray).applyMatrix4(Uf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let _=f,g=p-1;_<g;_+=c){const m=h.getX(_),M=h.getX(_+1),v=Ul(this,e,Qo,l,m,M,_);v&&t.push(v)}if(this.isLineLoop){const _=h.getX(p-1),g=h.getX(f),m=Ul(this,e,Qo,l,_,g,p-1);m&&t.push(m)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let _=f,g=p-1;_<g;_+=c){const m=Ul(this,e,Qo,l,_,_+1,_);m&&t.push(m)}if(this.isLineLoop){const _=Ul(this,e,Qo,l,p-1,f,p-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ul(i,e,t,n,s,r,o){const a=i.geometry.attributes.position;if(bc.fromBufferAttribute(a,s),Sc.fromBufferAttribute(a,r),t.distanceSqToSegment(bc,Sc,Sh,Ff)>n)return;Sh.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Sh);if(!(c<e.near||c>e.far))return{distance:c,point:Ff.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const Of=new V,Bf=new V;class Jt extends Td{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Of.fromBufferAttribute(t,s),Bf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Of.distanceTo(Bf);e.setAttribute("lineDistance",new qt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ox extends Td{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ig extends ai{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const kf=new rt,Hu=new Ao,Fl=new Bn,Ol=new V;class ax extends Bt{constructor(e=new Nt,t=new ig){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fl.copy(n.boundingSphere),Fl.applyMatrix4(s),Fl.radius+=r,e.ray.intersectsSphere(Fl)===!1)return;kf.copy(s).invert(),Hu.copy(e.ray).applyMatrix4(kf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=d,_=f;p<_;p++){const g=c.getX(p);Ol.fromBufferAttribute(u,g),zf(Ol,g,l,s,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let p=d,_=f;p<_;p++)Ol.fromBufferAttribute(u,p),zf(Ol,p,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function zf(i,e,t,n,s,r,o){const a=Hu.distanceSqToPoint(i);if(a<t){const l=new V;Hu.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class sg extends tn{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class rg extends tn{constructor(e,t,n=Qs,s,r,o,a=En,l=En,c,h=Ma){if(h!==Ma&&h!==va)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Md(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Bc extends Nt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new V,h=new qe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new qt(o,3)),this.setAttribute("normal",new qt(a,3)),this.setAttribute("uv",new qt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class kc extends Nt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let p=0;const _=[],g=n/2;let m=0;M(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new qt(u,3)),this.setAttribute("normal",new qt(d,3)),this.setAttribute("uv",new qt(f,2));function M(){const x=new V,R=new V;let S=0;const E=(t-e)/n;for(let L=0;L<=r;L++){const b=[],y=L/r,C=y*(t-e)+e;for(let H=0;H<=s;H++){const G=H/s,O=G*l+a,I=Math.sin(O),D=Math.cos(O);R.x=C*I,R.y=-y*n+g,R.z=C*D,u.push(R.x,R.y,R.z),x.set(I,E,D).normalize(),d.push(x.x,x.y,x.z),f.push(G,1-y),b.push(p++)}_.push(b)}for(let L=0;L<s;L++)for(let b=0;b<r;b++){const y=_[b][L],C=_[b+1][L],H=_[b+1][L+1],G=_[b][L+1];(e>0||b!==0)&&(h.push(y,C,G),S+=3),(t>0||b!==r-1)&&(h.push(C,H,G),S+=3)}c.addGroup(m,S,0),m+=S}function v(x){const R=p,S=new qe,E=new V;let L=0;const b=x===!0?e:t,y=x===!0?1:-1;for(let H=1;H<=s;H++)u.push(0,g*y,0),d.push(0,y,0),f.push(.5,.5),p++;const C=p;for(let H=0;H<=s;H++){const O=H/s*l+a,I=Math.cos(O),D=Math.sin(O);E.x=b*D,E.y=g*y,E.z=b*I,u.push(E.x,E.y,E.z),d.push(0,y,0),S.x=I*.5+.5,S.y=D*.5*y+.5,f.push(S.x,S.y),p++}for(let H=0;H<s;H++){const G=R+H,O=C+H;x===!0?h.push(O,O+1,G):h.push(O+1,O,G),L+=3}c.addGroup(m,L,x===!0?1:2),m+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class og extends kc{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new og(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class sr extends Nt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,f=[],p=[],_=[],g=[];for(let m=0;m<h;m++){const M=m*d-o;for(let v=0;v<c;v++){const x=v*u-r;p.push(x,-M,0),_.push(0,0,1),g.push(v/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<a;M++){const v=M+c*m,x=M+c*(m+1),R=M+1+c*(m+1),S=M+1+c*m;f.push(v,x,S),f.push(x,R,S)}this.setIndex(f),this.setAttribute("position",new qt(p,3)),this.setAttribute("normal",new qt(_,3)),this.setAttribute("uv",new qt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sr(e.width,e.height,e.widthSegments,e.heightSegments)}}class ag extends Nt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new V,d=new V,f=[],p=[],_=[],g=[];for(let m=0;m<=n;m++){const M=[],v=m/n;let x=0;m===0&&o===0?x=.5/t:m===n&&l===Math.PI&&(x=-.5/t);for(let R=0;R<=t;R++){const S=R/t;u.x=-e*Math.cos(s+S*r)*Math.sin(o+v*a),u.y=e*Math.cos(o+v*a),u.z=e*Math.sin(s+S*r)*Math.sin(o+v*a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),g.push(S+x,1-v),M.push(c++)}h.push(M)}for(let m=0;m<n;m++)for(let M=0;M<t;M++){const v=h[m][M+1],x=h[m][M],R=h[m+1][M],S=h[m+1][M+1];(m!==0||o>0)&&f.push(v,x,S),(m!==n-1||l<Math.PI)&&f.push(x,R,S)}this.setIndex(f),this.setAttribute("position",new qt(p,3)),this.setAttribute("normal",new qt(_,3)),this.setAttribute("uv",new qt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ag(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class lx extends Nt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,s=new V,r=new V;if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const u=l[c],d=u.start,f=u.count;for(let p=d,_=d+f;p<_;p+=3)for(let g=0;g<3;g++){const m=a.getX(p+g),M=a.getX(p+(g+1)%3);s.fromBufferAttribute(o,m),r.fromBufferAttribute(o,M),Hf(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const h=3*a+c,u=3*a+(c+1)%3;s.fromBufferAttribute(o,h),r.fromBufferAttribute(o,u),Hf(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new qt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Hf(i,e,t){const n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(s)===!0?!1:(t.add(n),t.add(s),!0)}class nl extends ai{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wm,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class kn extends nl{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new qe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ht(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class cx extends ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Q_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hx extends ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Gf extends Vt{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function Bl(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function ux(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function dx(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Vf(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function lg(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class il{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class fx extends il{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:tf,endingEnd:tf}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case nf:r=e,a=2*t-n;break;case sf:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case nf:o=e,l=2*n-t;break;case sf:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(s-t),_=p*p,g=_*p,m=-d*g+2*d*_-d*p,M=(1+d)*g+(-1.5-2*d)*_+(-.5+d)*p+1,v=(-1-f)*g+(1.5+f)*_+.5*p,x=f*g-f*_;for(let R=0;R!==a;++R)r[R]=m*o[h+R]+M*o[c+R]+v*o[l+R]+x*o[u+R];return r}}class px extends il{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}}class mx extends il{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class hi{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Bl(t,this.TimeBufferType),this.values=Bl(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Bl(e.times,Array),values:Bl(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new mx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new px(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new fx(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ya:t=this.InterpolantFactoryMethodDiscrete;break;case ba:t=this.InterpolantFactoryMethodLinear;break;case Jc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ya;case this.InterpolantFactoryMethodLinear:return ba;case this.InterpolantFactoryMethodSmooth:return Jc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&ux(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Jc,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{const u=a*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){const _=t[u+p];if(_!==t[d+p]||_!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}hi.prototype.ValueTypeName="";hi.prototype.TimeBufferType=Float32Array;hi.prototype.ValueBufferType=Float32Array;hi.prototype.DefaultInterpolation=ba;class Co extends hi{constructor(e,t,n){super(e,t,n)}}Co.prototype.ValueTypeName="bool";Co.prototype.ValueBufferType=Array;Co.prototype.DefaultInterpolation=ya;Co.prototype.InterpolantFactoryMethodLinear=void 0;Co.prototype.InterpolantFactoryMethodSmooth=void 0;class cg extends hi{constructor(e,t,n,s){super(e,t,n,s)}}cg.prototype.ValueTypeName="color";class Mo extends hi{constructor(e,t,n,s){super(e,t,n,s)}}Mo.prototype.ValueTypeName="number";class gx extends il{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t);let c=e*a;for(let h=c+a;c!==h;c+=4)vi.slerpFlat(r,0,o,c-a,o,c,l);return r}}class vo extends hi{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new gx(this.times,this.values,this.getValueSize(),e)}}vo.prototype.ValueTypeName="quaternion";vo.prototype.InterpolantFactoryMethodSmooth=void 0;class Lo extends hi{constructor(e,t,n){super(e,t,n)}}Lo.prototype.ValueTypeName="string";Lo.prototype.ValueBufferType=Array;Lo.prototype.DefaultInterpolation=ya;Lo.prototype.InterpolantFactoryMethodLinear=void 0;Lo.prototype.InterpolantFactoryMethodSmooth=void 0;class yo extends hi{constructor(e,t,n,s){super(e,t,n,s)}}yo.prototype.ValueTypeName="vector";class _x{constructor(e="",t=-1,n=[],s=Z_){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=oi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Mx(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(hi.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=dx(l);l=Vf(l,1,h),c=Vf(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Mo(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=s[u];d||(s[u]=d=[]),d.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,p,_){if(f.length!==0){const g=[],m=[];lg(f,g,m,p),g.length!==0&&_.push(new u(d,g,m))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let _=0;_<d[p].morphTargets.length;_++)f[d[p].morphTargets[_]]=-1;for(const _ in f){const g=[],m=[];for(let M=0;M!==d[p].morphTargets.length;++M){const v=d[p];g.push(v.time),m.push(v.morphTarget===_?1:0)}s.push(new Mo(".morphTargetInfluence["+_+"]",g,m))}l=f.length*o}else{const f=".bones["+t[u].name+"]";n(yo,f+".position",d,"pos",s),n(vo,f+".quaternion",d,"rot",s),n(yo,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function xx(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Mo;case"vector":case"vector2":case"vector3":case"vector4":return yo;case"color":return cg;case"quaternion":return vo;case"bool":case"boolean":return Co;case"string":return Lo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Mx(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=xx(i.type);if(i.times===void 0){const t=[],n=[];lg(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const gs={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class vx{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null}}}const yx=new vx;class Po{constructor(e){this.manager=e!==void 0?e:yx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Po.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ri={};class bx extends Error{constructor(e,t){super(e),this.response=t}}class hg extends Po{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=gs.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ri[e]!==void 0){Ri[e].push({onLoad:t,onProgress:n,onError:s});return}Ri[e]=[],Ri[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Ri[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0;let _=0;const g=new ReadableStream({start(m){M();function M(){u.read().then(({done:v,value:x})=>{if(v)m.close();else{_+=x.byteLength;const R=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:f});for(let S=0,E=h.length;S<E;S++){const L=h[S];L.onProgress&&L.onProgress(R)}m.enqueue(x),M()}},v=>{m.error(v)})}}});return new Response(g)}else throw new bx(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{gs.add(e,c);const h=Ri[e];delete Ri[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Ri[e];if(h===void 0)throw this.manager.itemError(e),c;delete Ri[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Sx extends Po{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=gs.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Sa("img");function l(){h(),gs.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Ex extends Po{constructor(e){super(e)}load(e,t,n,s){const r=new tn,o=new Sx(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class zc extends Bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class TA extends zc{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Eh=new rt,Wf=new V,$f=new V;class Ad{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.mapType=Mi,this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wd,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Wf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wf),$f.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($f),t.updateMatrixWorld(),Eh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Eh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Eh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class wx extends Ad{constructor(){super(new xn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=_o*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Tx extends zc{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new wx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Xf=new rt,ea=new V,wh=new V;class Ax extends Ad{constructor(){super(new xn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new qe(4,2),this._viewportCount=6,this._viewports=[new _t(2,1,1,1),new _t(0,1,1,1),new _t(3,1,1,1),new _t(1,1,1,1),new _t(3,0,1,1),new _t(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ea.setFromMatrixPosition(e.matrixWorld),n.position.copy(ea),wh.copy(n.position),wh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(wh),n.updateMatrixWorld(),s.makeTranslation(-ea.x,-ea.y,-ea.z),Xf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xf)}}class Rx extends zc{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ax}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Rd extends Jm{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Cx extends Ad{constructor(){super(new Rd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ug extends zc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.shadow=new Cx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class fa{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class dg extends Nt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Lx extends Po{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=gs.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return gs.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),gs.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});gs.add(e,l),r.manager.itemStart(e)}}class Px extends xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Dx{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=jf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=jf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function jf(){return performance.now()}const Cd="\\[\\]\\.:\\/",Ix=new RegExp("["+Cd+"]","g"),Ld="[^"+Cd+"]",Nx="[^"+Cd.replace("\\.","")+"]",Ux=/((?:WC+[\/:])*)/.source.replace("WC",Ld),Fx=/(WCOD+)?/.source.replace("WCOD",Nx),Ox=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ld),Bx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ld),kx=new RegExp("^"+Ux+Fx+Ox+Bx+"$"),zx=["material","materials","bones","map"];class Hx{constructor(e,t,n){const s=n||St.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class St{constructor(e,t,n){this.path=t,this.parsedPath=n||St.parseTrackName(t),this.node=St.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new St.Composite(e,t,n):new St(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ix,"")}static parseTrackName(e){const t=kx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);zx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=St.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}St.Composite=Hx;St.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};St.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};St.prototype.GetterByBindingType=[St.prototype._getValue_direct,St.prototype._getValue_array,St.prototype._getValue_arrayElement,St.prototype._getValue_toArray];St.prototype.SetterByBindingTypeAndVersioning=[[St.prototype._setValue_direct,St.prototype._setValue_direct_setNeedsUpdate,St.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[St.prototype._setValue_array,St.prototype._setValue_array_setNeedsUpdate,St.prototype._setValue_array_setMatrixWorldNeedsUpdate],[St.prototype._setValue_arrayElement,St.prototype._setValue_arrayElement_setNeedsUpdate,St.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[St.prototype._setValue_fromArray,St.prototype._setValue_fromArray_setNeedsUpdate,St.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Ec extends Sd{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}const qf=new rt;class Gx{constructor(e,t,n=0,s=1/0){this.ray=new Ao(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new vd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return qf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(qf),this}intersectObject(e,t=!0,n=[]){return Gu(e,this,n,t),n.sort(Yf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Gu(e[s],this,n,t);return n.sort(Yf),n}}function Yf(i,e){return i.distance-e.distance}function Gu(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Gu(r[o],e,t,!0)}}class Kf{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ht(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ht(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Zf=new V,kl=new V;class Vx{constructor(e=new V,t=new V){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Zf.subVectors(e,this.start),kl.subVectors(this.end,this.start);const n=kl.dot(kl);let r=kl.dot(Zf)/n;return t&&(r=ht(r,0,1)),r}closestPointToPoint(e,t,n){const s=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class Wx extends ir{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Jf(i,e,t,n){const s=$x(n);switch(t){case km:return i*e;case fd:return i*e/s.components*s.byteLength;case pd:return i*e/s.components*s.byteLength;case Hm:return i*e*2/s.components*s.byteLength;case md:return i*e*2/s.components*s.byteLength;case zm:return i*e*3/s.components*s.byteLength;case Yn:return i*e*4/s.components*s.byteLength;case gd:return i*e*4/s.components*s.byteLength;case ac:case lc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case cc:case hc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fu:case mu:return Math.max(i,16)*Math.max(e,8)/4;case du:case pu:return Math.max(i,8)*Math.max(e,8)/2;case gu:case _u:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case xu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Mu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case vu:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case yu:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case bu:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Su:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Eu:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case wu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Tu:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Au:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ru:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Cu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Lu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Pu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Du:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case uc:case Iu:case Nu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Gm:case Uu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Fu:case Ou:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function $x(i){switch(i){case Mi:case Fm:return{byteLength:1,components:1};case _a:case Om:case tl:return{byteLength:2,components:1};case ud:case dd:return{byteLength:2,components:4};case Qs:case hd:case ri:return{byteLength:4,components:1};case Bm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function fg(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Xx(i){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){const p=u[d],_=u[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){const _=u[f];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var jx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Yx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,eM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,nM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,iM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,oM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,aM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,lM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,cM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,gM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_M=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,xM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,MM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,SM="gl_FragColor = linearToOutputTexel( gl_FragColor );",EM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,TM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,AM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,RM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,CM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,LM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,PM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,DM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,IM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,NM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,UM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,FM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,OM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,BM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,kM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,zM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,HM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,GM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,VM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,WM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,$M=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,XM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,YM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,KM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,QM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ev=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,nv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ov=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,av=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,cv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,uv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,gv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_v=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,bv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ev=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Av=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Cv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Lv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Pv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Dv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Iv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Nv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Uv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Fv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ov=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Hv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Gv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$v=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Qv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ey=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ty=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ny=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ry=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,oy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ay=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ly=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,uy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,py=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,my=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_y=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,My=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,by=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ey=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ct={alphahash_fragment:jx,alphahash_pars_fragment:qx,alphamap_fragment:Yx,alphamap_pars_fragment:Kx,alphatest_fragment:Zx,alphatest_pars_fragment:Jx,aomap_fragment:Qx,aomap_pars_fragment:eM,batching_pars_vertex:tM,batching_vertex:nM,begin_vertex:iM,beginnormal_vertex:sM,bsdfs:rM,iridescence_fragment:oM,bumpmap_pars_fragment:aM,clipping_planes_fragment:lM,clipping_planes_pars_fragment:cM,clipping_planes_pars_vertex:hM,clipping_planes_vertex:uM,color_fragment:dM,color_pars_fragment:fM,color_pars_vertex:pM,color_vertex:mM,common:gM,cube_uv_reflection_fragment:_M,defaultnormal_vertex:xM,displacementmap_pars_vertex:MM,displacementmap_vertex:vM,emissivemap_fragment:yM,emissivemap_pars_fragment:bM,colorspace_fragment:SM,colorspace_pars_fragment:EM,envmap_fragment:wM,envmap_common_pars_fragment:TM,envmap_pars_fragment:AM,envmap_pars_vertex:RM,envmap_physical_pars_fragment:kM,envmap_vertex:CM,fog_vertex:LM,fog_pars_vertex:PM,fog_fragment:DM,fog_pars_fragment:IM,gradientmap_pars_fragment:NM,lightmap_pars_fragment:UM,lights_lambert_fragment:FM,lights_lambert_pars_fragment:OM,lights_pars_begin:BM,lights_toon_fragment:zM,lights_toon_pars_fragment:HM,lights_phong_fragment:GM,lights_phong_pars_fragment:VM,lights_physical_fragment:WM,lights_physical_pars_fragment:$M,lights_fragment_begin:XM,lights_fragment_maps:jM,lights_fragment_end:qM,logdepthbuf_fragment:YM,logdepthbuf_pars_fragment:KM,logdepthbuf_pars_vertex:ZM,logdepthbuf_vertex:JM,map_fragment:QM,map_pars_fragment:ev,map_particle_fragment:tv,map_particle_pars_fragment:nv,metalnessmap_fragment:iv,metalnessmap_pars_fragment:sv,morphinstance_vertex:rv,morphcolor_vertex:ov,morphnormal_vertex:av,morphtarget_pars_vertex:lv,morphtarget_vertex:cv,normal_fragment_begin:hv,normal_fragment_maps:uv,normal_pars_fragment:dv,normal_pars_vertex:fv,normal_vertex:pv,normalmap_pars_fragment:mv,clearcoat_normal_fragment_begin:gv,clearcoat_normal_fragment_maps:_v,clearcoat_pars_fragment:xv,iridescence_pars_fragment:Mv,opaque_fragment:vv,packing:yv,premultiplied_alpha_fragment:bv,project_vertex:Sv,dithering_fragment:Ev,dithering_pars_fragment:wv,roughnessmap_fragment:Tv,roughnessmap_pars_fragment:Av,shadowmap_pars_fragment:Rv,shadowmap_pars_vertex:Cv,shadowmap_vertex:Lv,shadowmask_pars_fragment:Pv,skinbase_vertex:Dv,skinning_pars_vertex:Iv,skinning_vertex:Nv,skinnormal_vertex:Uv,specularmap_fragment:Fv,specularmap_pars_fragment:Ov,tonemapping_fragment:Bv,tonemapping_pars_fragment:kv,transmission_fragment:zv,transmission_pars_fragment:Hv,uv_pars_fragment:Gv,uv_pars_vertex:Vv,uv_vertex:Wv,worldpos_vertex:$v,background_vert:Xv,background_frag:jv,backgroundCube_vert:qv,backgroundCube_frag:Yv,cube_vert:Kv,cube_frag:Zv,depth_vert:Jv,depth_frag:Qv,distanceRGBA_vert:ey,distanceRGBA_frag:ty,equirect_vert:ny,equirect_frag:iy,linedashed_vert:sy,linedashed_frag:ry,meshbasic_vert:oy,meshbasic_frag:ay,meshlambert_vert:ly,meshlambert_frag:cy,meshmatcap_vert:hy,meshmatcap_frag:uy,meshnormal_vert:dy,meshnormal_frag:fy,meshphong_vert:py,meshphong_frag:my,meshphysical_vert:gy,meshphysical_frag:_y,meshtoon_vert:xy,meshtoon_frag:My,points_vert:vy,points_frag:yy,shadow_vert:by,shadow_frag:Sy,sprite_vert:Ey,sprite_frag:wy},we={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},Rn={basic:{uniforms:Sn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:Sn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new ze(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:Sn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:Sn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:Sn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new ze(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:Sn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:Sn([we.points,we.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:Sn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:Sn([we.common,we.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:Sn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:Sn([we.sprite,we.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:Sn([we.common,we.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:Sn([we.lights,we.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};Rn.physical={uniforms:Sn([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const zl={r:0,b:0,g:0},Ts=new yi,Ty=new rt;function Ay(i,e,t,n,s,r,o){const a=new ze(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function p(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?t:e).get(x)),x}function _(v){let x=!1;const R=p(v);R===null?m(a,l):R&&R.isColor&&(m(R,1),x=!0);const S=i.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(v,x){const R=p(x);R&&(R.isCubeTexture||R.mapping===Oc)?(h===void 0&&(h=new Dt(new Ro(1,1,1),new Vi({name:"BackgroundCubeMaterial",uniforms:xo(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,E,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ts.copy(x.backgroundRotation),Ts.x*=-1,Ts.y*=-1,Ts.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Ts.y*=-1,Ts.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ty.makeRotationFromEuler(Ts)),h.material.toneMapped=vt.getTransfer(R.colorSpace)!==At,(u!==R||d!==R.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=R,d=R.version,f=i.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new Dt(new sr(2,2),new Vi({name:"BackgroundMaterial",uniforms:xo(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=vt.getTransfer(R.colorSpace)!==At,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(u!==R||d!==R.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=R,d=R.version,f=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function m(v,x){v.getRGB(zl,Zm(i)),n.buffers.color.setClear(zl.r,zl.g,zl.b,x,o)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),l=x,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,m(a,l)},render:_,addToRenderList:g,dispose:M}}function Ry(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(y,C,H,G,O){let I=!1;const D=u(G,H,C);r!==D&&(r=D,c(r.object)),I=f(y,G,H,O),I&&p(y,G,H,O),O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(I||o)&&(o=!1,x(y,C,H,G),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,C,H){const G=H.wireframe===!0;let O=n[y.id];O===void 0&&(O={},n[y.id]=O);let I=O[C.id];I===void 0&&(I={},O[C.id]=I);let D=I[G];return D===void 0&&(D=d(l()),I[G]=D),D}function d(y){const C=[],H=[],G=[];for(let O=0;O<t;O++)C[O]=0,H[O]=0,G[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:H,attributeDivisors:G,object:y,attributes:{},index:null}}function f(y,C,H,G){const O=r.attributes,I=C.attributes;let D=0;const P=H.getAttributes();for(const F in P)if(P[F].location>=0){const ee=O[F];let W=I[F];if(W===void 0&&(F==="instanceMatrix"&&y.instanceMatrix&&(W=y.instanceMatrix),F==="instanceColor"&&y.instanceColor&&(W=y.instanceColor)),ee===void 0||ee.attribute!==W||W&&ee.data!==W.data)return!0;D++}return r.attributesNum!==D||r.index!==G}function p(y,C,H,G){const O={},I=C.attributes;let D=0;const P=H.getAttributes();for(const F in P)if(P[F].location>=0){let ee=I[F];ee===void 0&&(F==="instanceMatrix"&&y.instanceMatrix&&(ee=y.instanceMatrix),F==="instanceColor"&&y.instanceColor&&(ee=y.instanceColor));const W={};W.attribute=ee,ee&&ee.data&&(W.data=ee.data),O[F]=W,D++}r.attributes=O,r.attributesNum=D,r.index=G}function _(){const y=r.newAttributes;for(let C=0,H=y.length;C<H;C++)y[C]=0}function g(y){m(y,0)}function m(y,C){const H=r.newAttributes,G=r.enabledAttributes,O=r.attributeDivisors;H[y]=1,G[y]===0&&(i.enableVertexAttribArray(y),G[y]=1),O[y]!==C&&(i.vertexAttribDivisor(y,C),O[y]=C)}function M(){const y=r.newAttributes,C=r.enabledAttributes;for(let H=0,G=C.length;H<G;H++)C[H]!==y[H]&&(i.disableVertexAttribArray(H),C[H]=0)}function v(y,C,H,G,O,I,D){D===!0?i.vertexAttribIPointer(y,C,H,O,I):i.vertexAttribPointer(y,C,H,G,O,I)}function x(y,C,H,G){_();const O=G.attributes,I=H.getAttributes(),D=C.defaultAttributeValues;for(const P in I){const F=I[P];if(F.location>=0){let $=O[P];if($===void 0&&(P==="instanceMatrix"&&y.instanceMatrix&&($=y.instanceMatrix),P==="instanceColor"&&y.instanceColor&&($=y.instanceColor)),$!==void 0){const ee=$.normalized,W=$.itemSize,Q=e.get($);if(Q===void 0)continue;const pe=Q.buffer,Z=Q.type,oe=Q.bytesPerElement,_e=Z===i.INT||Z===i.UNSIGNED_INT||$.gpuType===hd;if($.isInterleavedBufferAttribute){const se=$.data,Me=se.stride,Ce=$.offset;if(se.isInstancedInterleavedBuffer){for(let Ie=0;Ie<F.locationSize;Ie++)m(F.location+Ie,se.meshPerAttribute);y.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Ie=0;Ie<F.locationSize;Ie++)g(F.location+Ie);i.bindBuffer(i.ARRAY_BUFFER,pe);for(let Ie=0;Ie<F.locationSize;Ie++)v(F.location+Ie,W/F.locationSize,Z,ee,Me*oe,(Ce+W/F.locationSize*Ie)*oe,_e)}else{if($.isInstancedBufferAttribute){for(let se=0;se<F.locationSize;se++)m(F.location+se,$.meshPerAttribute);y.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let se=0;se<F.locationSize;se++)g(F.location+se);i.bindBuffer(i.ARRAY_BUFFER,pe);for(let se=0;se<F.locationSize;se++)v(F.location+se,W/F.locationSize,Z,ee,W*oe,W/F.locationSize*se*oe,_e)}}else if(D!==void 0){const ee=D[P];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(F.location,ee);break;case 3:i.vertexAttrib3fv(F.location,ee);break;case 4:i.vertexAttrib4fv(F.location,ee);break;default:i.vertexAttrib1fv(F.location,ee)}}}}M()}function R(){L();for(const y in n){const C=n[y];for(const H in C){const G=C[H];for(const O in G)h(G[O].object),delete G[O];delete C[H]}delete n[y]}}function S(y){if(n[y.id]===void 0)return;const C=n[y.id];for(const H in C){const G=C[H];for(const O in G)h(G[O].object),delete G[O];delete C[H]}delete n[y.id]}function E(y){for(const C in n){const H=n[C];if(H[y.id]===void 0)continue;const G=H[y.id];for(const O in G)h(G[O].object),delete G[O];delete H[y.id]}}function L(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:b,dispose:R,releaseStatesOfGeometry:S,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:g,disableUnusedAttributes:M}}function Cy(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let p=0;p<u;p++)f+=h[p];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)o(c[p],h[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let p=0;for(let _=0;_<u;_++)p+=h[_]*d[_];t.update(p,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Ly(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==Yn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const L=E===tl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Mi&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==ri&&!L)}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=p>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:M,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:R,maxSamples:S}}function Py(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new rs,a=new at,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const p=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,m=i.get(u);if(!s||p===null||p.length===0||r&&!g)r?h(null):c();else{const M=r?0:n,v=M*4;let x=m.clippingState||null;l.value=x,x=h(p,d,v,f);for(let R=0;R!==v;++R)x[R]=t[R];m.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,p){const _=u!==null?u.length:0;let g=null;if(_!==0){if(g=l.value,p!==!0||g===null){const m=f+_*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<m)&&(g=new Float32Array(m));for(let v=0,x=f;v!==_;++v,x+=4)o.copy(u[v]).applyMatrix4(M,a),o.normal.toArray(g,x),g[x+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function Dy(i){let e=new WeakMap;function t(o,a){return a===hu?o.mapping=po:a===uu&&(o.mapping=mo),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===hu||a===uu)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new K0(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Fr=4,Qf=[.125,.215,.35,.446,.526,.582],Fs=20,Th=new Rd,ep=new ze;let Ah=null,Rh=0,Ch=0,Lh=!1;const Ns=(1+Math.sqrt(5))/2,Ar=1/Ns,tp=[new V(-Ns,Ar,0),new V(Ns,Ar,0),new V(-Ar,0,Ns),new V(Ar,0,Ns),new V(0,Ns,-Ar),new V(0,Ns,Ar),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)],Iy=new V;class Vu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:a=Iy}=r;Ah=this._renderer.getRenderTarget(),Rh=this._renderer.getActiveCubeFace(),Ch=this._renderer.getActiveMipmapLevel(),Lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ip(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ah,Rh,Ch),this._renderer.xr.enabled=Lh,e.scissorTest=!1,Hl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===po||e.mapping===mo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ah=this._renderer.getRenderTarget(),Rh=this._renderer.getActiveCubeFace(),Ch=this._renderer.getActiveMipmapLevel(),Lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:tl,format:Yn,colorSpace:wn,depthBuffer:!1},s=np(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=np(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ny(r)),this._blurMaterial=Uy(r,e,t)}return s}_compileMaterial(e){const t=new Dt(this._lodPlanes[0],e);this._renderer.compile(t,Th)}_sceneToCubeUV(e,t,n,s,r){const l=new xn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(ep),u.toneMapping=xs,u.autoClear=!1;const p=new hn({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1}),_=new Dt(new Ro,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(ep),g=!0);for(let M=0;M<6;M++){const v=M%3;v===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[M],r.y,r.z)):v===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[M]));const x=this._cubeSize;Hl(s,v*x,M>2?x:0,x,x),u.setRenderTarget(s),g&&u.render(_,l),u.render(e,l)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===po||e.mapping===mo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=sp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ip());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Dt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Hl(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Th)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=tp[(s-r-1)%tp.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Dt(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Fs-1),_=r/p,g=isFinite(r)?1+Math.floor(h*_):Fs;g>Fs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Fs}`);const m=[];let M=0;for(let E=0;E<Fs;++E){const L=E/_,b=Math.exp(-L*L/2);m.push(b),E===0?M+=b:E<g&&(M+=2*b)}for(let E=0;E<m.length;E++)m[E]=m[E]/M;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=p,d.mipInt.value=v-n;const x=this._sizeLods[s],R=3*x*(s>v-Fr?s-v+Fr:0),S=4*(this._cubeSize-x);Hl(t,R,S,3*x,2*x),l.setRenderTarget(t),l.render(u,Th)}}function Ny(i){const e=[],t=[],n=[];let s=i;const r=i-Fr+1+Qf.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Fr?l=Qf[o-i+Fr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,p=6,_=3,g=2,m=1,M=new Float32Array(_*p*f),v=new Float32Array(g*p*f),x=new Float32Array(m*p*f);for(let S=0;S<f;S++){const E=S%3*2/3-1,L=S>2?0:-1,b=[E,L,0,E+2/3,L,0,E+2/3,L+1,0,E,L,0,E+2/3,L+1,0,E,L+1,0];M.set(b,_*p*S),v.set(d,g*p*S);const y=[S,S,S,S,S,S];x.set(y,m*p*S)}const R=new Nt;R.setAttribute("position",new xt(M,_)),R.setAttribute("uv",new xt(v,g)),R.setAttribute("faceIndex",new xt(x,m)),e.push(R),s>Fr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function np(i,e,t){const n=new er(i,e,t);return n.texture.mapping=Oc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hl(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Uy(i,e,t){const n=new Float32Array(Fs),s=new V(0,1,0);return new Vi({name:"SphericalGaussianBlur",defines:{n:Fs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Pd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_s,depthTest:!1,depthWrite:!1})}function ip(){return new Vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_s,depthTest:!1,depthWrite:!1})}function sp(){return new Vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_s,depthTest:!1,depthWrite:!1})}function Pd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Fy(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===hu||l===uu,h=l===po||l===mo;if(c||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Vu(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new Vu(i)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Oy(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&dc("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function By(i,e,t,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)e.update(d[f],i.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,p=u.attributes.position;let _=0;if(f!==null){const M=f.array;_=f.version;for(let v=0,x=M.length;v<x;v+=3){const R=M[v+0],S=M[v+1],E=M[v+2];d.push(R,S,S,E,E,R)}}else if(p!==void 0){const M=p.array;_=p.version;for(let v=0,x=M.length/3-1;v<x;v+=3){const R=v+0,S=v+1,E=v+2;d.push(R,S,S,E,E,R)}}else return;const g=new(Xm(d)?Km:Ym)(d,1);g.version=_;const m=r.get(u);m&&e.remove(m),r.set(u,g)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function ky(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,p){p!==0&&(i.drawElementsInstanced(n,f,r,d*o,p),t.update(f,n,p))}function h(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];t.update(g,n,1)}function u(d,f,p,_){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)c(d[m]/o,f[m],_[m]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,p);let m=0;for(let M=0;M<p;M++)m+=f[M]*_[M];t.update(m,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function zy(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Hy(i,e,t){const n=new WeakMap,s=new _t;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let b=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let v=0;f===!0&&(v=1),p===!0&&(v=2),_===!0&&(v=3);let x=a.attributes.position.count*v,R=1;x>e.maxTextureSize&&(R=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const S=new Float32Array(x*R*4*u),E=new jm(S,x,R,u);E.type=ri,E.needsUpdate=!0;const L=v*4;for(let y=0;y<u;y++){const C=g[y],H=m[y],G=M[y],O=x*R*4*y;for(let I=0;I<C.count;I++){const D=I*L;f===!0&&(s.fromBufferAttribute(C,I),S[O+D+0]=s.x,S[O+D+1]=s.y,S[O+D+2]=s.z,S[O+D+3]=0),p===!0&&(s.fromBufferAttribute(H,I),S[O+D+4]=s.x,S[O+D+5]=s.y,S[O+D+6]=s.z,S[O+D+7]=0),_===!0&&(s.fromBufferAttribute(G,I),S[O+D+8]=s.x,S[O+D+9]=s.y,S[O+D+10]=s.z,S[O+D+11]=G.itemSize===4?s.w:1)}}d={count:u,texture:E,size:new qe(x,R)},n.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Gy(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const pg=new tn,rp=new rg(1,1),mg=new jm,gg=new N0,_g=new Qm,op=[],ap=[],lp=new Float32Array(16),cp=new Float32Array(9),hp=new Float32Array(4);function Do(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=op[s];if(r===void 0&&(r=new Float32Array(s),op[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function nn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function sn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Hc(i,e){let t=ap[e];t===void 0&&(t=new Int32Array(e),ap[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Vy(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Wy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;i.uniform2fv(this.addr,e),sn(t,e)}}function $y(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;i.uniform3fv(this.addr,e),sn(t,e)}}function Xy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;i.uniform4fv(this.addr,e),sn(t,e)}}function jy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,n))return;hp.set(n),i.uniformMatrix2fv(this.addr,!1,hp),sn(t,n)}}function qy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,n))return;cp.set(n),i.uniformMatrix3fv(this.addr,!1,cp),sn(t,n)}}function Yy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,n))return;lp.set(n),i.uniformMatrix4fv(this.addr,!1,lp),sn(t,n)}}function Ky(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Zy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;i.uniform2iv(this.addr,e),sn(t,e)}}function Jy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;i.uniform3iv(this.addr,e),sn(t,e)}}function Qy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;i.uniform4iv(this.addr,e),sn(t,e)}}function eb(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function tb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;i.uniform2uiv(this.addr,e),sn(t,e)}}function nb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;i.uniform3uiv(this.addr,e),sn(t,e)}}function ib(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;i.uniform4uiv(this.addr,e),sn(t,e)}}function sb(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(rp.compareFunction=$m,r=rp):r=pg,t.setTexture2D(e||r,s)}function rb(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||gg,s)}function ob(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||_g,s)}function ab(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||mg,s)}function lb(i){switch(i){case 5126:return Vy;case 35664:return Wy;case 35665:return $y;case 35666:return Xy;case 35674:return jy;case 35675:return qy;case 35676:return Yy;case 5124:case 35670:return Ky;case 35667:case 35671:return Zy;case 35668:case 35672:return Jy;case 35669:case 35673:return Qy;case 5125:return eb;case 36294:return tb;case 36295:return nb;case 36296:return ib;case 35678:case 36198:case 36298:case 36306:case 35682:return sb;case 35679:case 36299:case 36307:return rb;case 35680:case 36300:case 36308:case 36293:return ob;case 36289:case 36303:case 36311:case 36292:return ab}}function cb(i,e){i.uniform1fv(this.addr,e)}function hb(i,e){const t=Do(e,this.size,2);i.uniform2fv(this.addr,t)}function ub(i,e){const t=Do(e,this.size,3);i.uniform3fv(this.addr,t)}function db(i,e){const t=Do(e,this.size,4);i.uniform4fv(this.addr,t)}function fb(i,e){const t=Do(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function pb(i,e){const t=Do(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function mb(i,e){const t=Do(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function gb(i,e){i.uniform1iv(this.addr,e)}function _b(i,e){i.uniform2iv(this.addr,e)}function xb(i,e){i.uniform3iv(this.addr,e)}function Mb(i,e){i.uniform4iv(this.addr,e)}function vb(i,e){i.uniform1uiv(this.addr,e)}function yb(i,e){i.uniform2uiv(this.addr,e)}function bb(i,e){i.uniform3uiv(this.addr,e)}function Sb(i,e){i.uniform4uiv(this.addr,e)}function Eb(i,e,t){const n=this.cache,s=e.length,r=Hc(t,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||pg,r[o])}function wb(i,e,t){const n=this.cache,s=e.length,r=Hc(t,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||gg,r[o])}function Tb(i,e,t){const n=this.cache,s=e.length,r=Hc(t,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||_g,r[o])}function Ab(i,e,t){const n=this.cache,s=e.length,r=Hc(t,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||mg,r[o])}function Rb(i){switch(i){case 5126:return cb;case 35664:return hb;case 35665:return ub;case 35666:return db;case 35674:return fb;case 35675:return pb;case 35676:return mb;case 5124:case 35670:return gb;case 35667:case 35671:return _b;case 35668:case 35672:return xb;case 35669:case 35673:return Mb;case 5125:return vb;case 36294:return yb;case 36295:return bb;case 36296:return Sb;case 35678:case 36198:case 36298:case 36306:case 35682:return Eb;case 35679:case 36299:case 36307:return wb;case 35680:case 36300:case 36308:case 36293:return Tb;case 36289:case 36303:case 36311:case 36292:return Ab}}class Cb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=lb(t.type)}}class Lb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Rb(t.type)}}class Pb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Ph=/(\w+)(\])?(\[|\.)?/g;function up(i,e){i.seq.push(e),i.map[e.id]=e}function Db(i,e,t){const n=i.name,s=n.length;for(Ph.lastIndex=0;;){const r=Ph.exec(n),o=Ph.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){up(t,c===void 0?new Cb(a,i,e):new Lb(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Pb(a),up(t,u)),t=u}}}class fc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Db(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function dp(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Ib=37297;let Nb=0;function Ub(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const fp=new at;function Fb(i){vt._getMatrix(fp,vt.workingColorSpace,i);const e=`mat3( ${fp.elements.map(t=>t.toFixed(4))} )`;switch(vt.getTransfer(i)){case vc:return[e,"LinearTransferOETF"];case At:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function pp(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Ub(i.getShaderSource(e),o)}else return s}function Ob(i,e){const t=Fb(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Bb(i,e){let t;switch(e){case W_:t="Linear";break;case $_:t="Reinhard";break;case X_:t="Cineon";break;case Im:t="ACESFilmic";break;case q_:t="AgX";break;case Y_:t="Neutral";break;case j_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Gl=new V;function kb(){vt.getLuminanceCoefficients(Gl);const i=Gl.x.toFixed(4),e=Gl.y.toFixed(4),t=Gl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zb(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(aa).join(`
`)}function Hb(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Gb(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function aa(i){return i!==""}function mp(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Vb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wu(i){return i.replace(Vb,$b)}const Wb=new Map;function $b(i,e){let t=ct[e];if(t===void 0){const n=Wb.get(e);if(n!==void 0)t=ct[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Wu(t)}const Xb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _p(i){return i.replace(Xb,jb)}function jb(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function xp(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function qb(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Lm?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Pm?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Li&&(e="SHADOWMAP_TYPE_VSM"),e}function Yb(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case po:case mo:e="ENVMAP_TYPE_CUBE";break;case Oc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Kb(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case mo:e="ENVMAP_MODE_REFRACTION";break}return e}function Zb(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Dm:e="ENVMAP_BLENDING_MULTIPLY";break;case G_:e="ENVMAP_BLENDING_MIX";break;case V_:e="ENVMAP_BLENDING_ADD";break}return e}function Jb(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Qb(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=qb(t),c=Yb(t),h=Kb(t),u=Zb(t),d=Jb(t),f=zb(t),p=Hb(r),_=s.createProgram();let g,m,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(aa).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(aa).join(`
`),m.length>0&&(m+=`
`)):(g=[xp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(aa).join(`
`),m=[xp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xs?"#define TONE_MAPPING":"",t.toneMapping!==xs?ct.tonemapping_pars_fragment:"",t.toneMapping!==xs?Bb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,Ob("linearToOutputTexel",t.outputColorSpace),kb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(aa).join(`
`)),o=Wu(o),o=mp(o,t),o=gp(o,t),a=Wu(a),a=mp(a,t),a=gp(a,t),o=_p(o),a=_p(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===of?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===of?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=M+g+o,x=M+m+a,R=dp(s,s.VERTEX_SHADER,v),S=dp(s,s.FRAGMENT_SHADER,x);s.attachShader(_,R),s.attachShader(_,S),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function E(C){if(i.debug.checkShaderErrors){const H=s.getProgramInfoLog(_).trim(),G=s.getShaderInfoLog(R).trim(),O=s.getShaderInfoLog(S).trim();let I=!0,D=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(I=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,R,S);else{const P=pp(s,R,"vertex"),F=pp(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+H+`
`+P+`
`+F)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(G===""||O==="")&&(D=!1);D&&(C.diagnostics={runnable:I,programLog:H,vertexShader:{log:G,prefix:g},fragmentShader:{log:O,prefix:m}})}s.deleteShader(R),s.deleteShader(S),L=new fc(s,_),b=Gb(s,_)}let L;this.getUniforms=function(){return L===void 0&&E(this),L};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,Ib)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Nb++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=S,this}let eS=0;class tS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new nS(e),t.set(e,n)),n}}class nS{constructor(e){this.id=eS++,this.code=e,this.usedTimes=0}}function iS(i,e,t,n,s,r,o){const a=new vd,l=new tS,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function g(b,y,C,H,G){const O=H.fog,I=G.geometry,D=b.isMeshStandardMaterial?H.environment:null,P=(b.isMeshStandardMaterial?t:e).get(b.envMap||D),F=P&&P.mapping===Oc?P.image.height:null,$=p[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const ee=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,W=ee!==void 0?ee.length:0;let Q=0;I.morphAttributes.position!==void 0&&(Q=1),I.morphAttributes.normal!==void 0&&(Q=2),I.morphAttributes.color!==void 0&&(Q=3);let pe,Z,oe,_e;if($){const Mt=Rn[$];pe=Mt.vertexShader,Z=Mt.fragmentShader}else pe=b.vertexShader,Z=b.fragmentShader,l.update(b),oe=l.getVertexShaderID(b),_e=l.getFragmentShaderID(b);const se=i.getRenderTarget(),Me=i.state.buffers.depth.getReversed(),Ce=G.isInstancedMesh===!0,Ie=G.isBatchedMesh===!0,dt=!!b.map,Fe=!!b.matcap,Te=!!P,z=!!b.aoMap,Ct=!!b.lightMap,ft=!!b.bumpMap,pt=!!b.normalMap,je=!!b.displacementMap,Lt=!!b.emissiveMap,Ve=!!b.metalnessMap,N=!!b.roughnessMap,T=b.anisotropy>0,te=b.clearcoat>0,he=b.dispersion>0,xe=b.iridescence>0,ce=b.sheen>0,ue=b.transmission>0,ve=T&&!!b.anisotropyMap,Ke=te&&!!b.clearcoatMap,Ze=te&&!!b.clearcoatNormalMap,ye=te&&!!b.clearcoatRoughnessMap,Oe=xe&&!!b.iridescenceMap,Ye=xe&&!!b.iridescenceThicknessMap,Je=ce&&!!b.sheenColorMap,ke=ce&&!!b.sheenRoughnessMap,ut=!!b.specularMap,ot=!!b.specularColorMap,Et=!!b.specularIntensityMap,q=ue&&!!b.transmissionMap,Le=ue&&!!b.thicknessMap,ae=!!b.gradientMap,de=!!b.alphaMap,Pe=b.alphaTest>0,Ae=!!b.alphaHash,nt=!!b.extensions;let Ot=xs;b.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Ot=i.toneMapping);const rn={shaderID:$,shaderType:b.type,shaderName:b.name,vertexShader:pe,fragmentShader:Z,defines:b.defines,customVertexShaderID:oe,customFragmentShaderID:_e,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Ie,batchingColor:Ie&&G._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&G.instanceColor!==null,instancingMorph:Ce&&G.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:wn,alphaToCoverage:!!b.alphaToCoverage,map:dt,matcap:Fe,envMap:Te,envMapMode:Te&&P.mapping,envMapCubeUVHeight:F,aoMap:z,lightMap:Ct,bumpMap:ft,normalMap:pt,displacementMap:d&&je,emissiveMap:Lt,normalMapObjectSpace:pt&&b.normalMapType===t0,normalMapTangentSpace:pt&&b.normalMapType===Wm,metalnessMap:Ve,roughnessMap:N,anisotropy:T,anisotropyMap:ve,clearcoat:te,clearcoatMap:Ke,clearcoatNormalMap:Ze,clearcoatRoughnessMap:ye,dispersion:he,iridescence:xe,iridescenceMap:Oe,iridescenceThicknessMap:Ye,sheen:ce,sheenColorMap:Je,sheenRoughnessMap:ke,specularMap:ut,specularColorMap:ot,specularIntensityMap:Et,transmission:ue,transmissionMap:q,thicknessMap:Le,gradientMap:ae,opaque:b.transparent===!1&&b.blending===Br&&b.alphaToCoverage===!1,alphaMap:de,alphaTest:Pe,alphaHash:Ae,combine:b.combine,mapUv:dt&&_(b.map.channel),aoMapUv:z&&_(b.aoMap.channel),lightMapUv:Ct&&_(b.lightMap.channel),bumpMapUv:ft&&_(b.bumpMap.channel),normalMapUv:pt&&_(b.normalMap.channel),displacementMapUv:je&&_(b.displacementMap.channel),emissiveMapUv:Lt&&_(b.emissiveMap.channel),metalnessMapUv:Ve&&_(b.metalnessMap.channel),roughnessMapUv:N&&_(b.roughnessMap.channel),anisotropyMapUv:ve&&_(b.anisotropyMap.channel),clearcoatMapUv:Ke&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:Ze&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ye&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:ke&&_(b.sheenRoughnessMap.channel),specularMapUv:ut&&_(b.specularMap.channel),specularColorMapUv:ot&&_(b.specularColorMap.channel),specularIntensityMapUv:Et&&_(b.specularIntensityMap.channel),transmissionMapUv:q&&_(b.transmissionMap.channel),thicknessMapUv:Le&&_(b.thicknessMap.channel),alphaMapUv:de&&_(b.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(pt||T),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!I.attributes.uv&&(dt||de),fog:!!O,useFog:b.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Me,skinning:G.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:Q,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ot,decodeVideoTexture:dt&&b.map.isVideoTexture===!0&&vt.getTransfer(b.map.colorSpace)===At,decodeVideoTextureEmissive:Lt&&b.emissiveMap.isVideoTexture===!0&&vt.getTransfer(b.emissiveMap.colorSpace)===At,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Cn,flipSided:b.side===vn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:nt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&b.extensions.multiDraw===!0||Ie)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return rn.vertexUv1s=c.has(1),rn.vertexUv2s=c.has(2),rn.vertexUv3s=c.has(3),c.clear(),rn}function m(b){const y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(const C in b.defines)y.push(C),y.push(b.defines[C]);return b.isRawShaderMaterial===!1&&(M(y,b),v(y,b),y.push(i.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function M(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function v(b,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),b.push(a.mask)}function x(b){const y=p[b.type];let C;if(y){const H=Rn[y];C=yd.clone(H.uniforms)}else C=b.uniforms;return C}function R(b,y){let C;for(let H=0,G=h.length;H<G;H++){const O=h[H];if(O.cacheKey===y){C=O,++C.usedTimes;break}}return C===void 0&&(C=new Qb(i,y,b,r),h.push(C)),C}function S(b){if(--b.usedTimes===0){const y=h.indexOf(b);h[y]=h[h.length-1],h.pop(),b.destroy()}}function E(b){l.remove(b)}function L(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:x,acquireProgram:R,releaseProgram:S,releaseShaderCache:E,programs:h,dispose:L}}function sS(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function rS(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Mp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function vp(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,d,f,p,_,g){let m=i[e];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:p,renderOrder:u.renderOrder,z:_,group:g},i[e]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=_,m.group=g),e++,m}function a(u,d,f,p,_,g){const m=o(u,d,f,p,_,g);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):t.push(m)}function l(u,d,f,p,_,g){const m=o(u,d,f,p,_,g);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):t.unshift(m)}function c(u,d){t.length>1&&t.sort(u||rS),n.length>1&&n.sort(d||Mp),s.length>1&&s.sort(d||Mp)}function h(){for(let u=e,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function oS(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new vp,i.set(n,[o])):s>=r.length?(o=new vp,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function aS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new ze};break;case"SpotLight":t={position:new V,direction:new V,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new V,halfWidth:new V,halfHeight:new V};break}return i[e.id]=t,t}}}function lS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let cS=0;function hS(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function uS(i){const e=new aS,t=lS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new V);const s=new V,r=new rt,o=new rt;function a(c){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,p=0,_=0,g=0,m=0,M=0,v=0,x=0,R=0,S=0,E=0;c.sort(hS);for(let b=0,y=c.length;b<y;b++){const C=c[b],H=C.color,G=C.intensity,O=C.distance,I=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=H.r*G,u+=H.g*G,d+=H.b*G;else if(C.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(C.sh.coefficients[D],G);E++}else if(C.isDirectionalLight){const D=e.get(C);if(D.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const P=C.shadow,F=t.get(C);F.shadowIntensity=P.intensity,F.shadowBias=P.bias,F.shadowNormalBias=P.normalBias,F.shadowRadius=P.radius,F.shadowMapSize=P.mapSize,n.directionalShadow[f]=F,n.directionalShadowMap[f]=I,n.directionalShadowMatrix[f]=C.shadow.matrix,M++}n.directional[f]=D,f++}else if(C.isSpotLight){const D=e.get(C);D.position.setFromMatrixPosition(C.matrixWorld),D.color.copy(H).multiplyScalar(G),D.distance=O,D.coneCos=Math.cos(C.angle),D.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),D.decay=C.decay,n.spot[_]=D;const P=C.shadow;if(C.map&&(n.spotLightMap[R]=C.map,R++,P.updateMatrices(C),C.castShadow&&S++),n.spotLightMatrix[_]=P.matrix,C.castShadow){const F=t.get(C);F.shadowIntensity=P.intensity,F.shadowBias=P.bias,F.shadowNormalBias=P.normalBias,F.shadowRadius=P.radius,F.shadowMapSize=P.mapSize,n.spotShadow[_]=F,n.spotShadowMap[_]=I,x++}_++}else if(C.isRectAreaLight){const D=e.get(C);D.color.copy(H).multiplyScalar(G),D.halfWidth.set(C.width*.5,0,0),D.halfHeight.set(0,C.height*.5,0),n.rectArea[g]=D,g++}else if(C.isPointLight){const D=e.get(C);if(D.color.copy(C.color).multiplyScalar(C.intensity),D.distance=C.distance,D.decay=C.decay,C.castShadow){const P=C.shadow,F=t.get(C);F.shadowIntensity=P.intensity,F.shadowBias=P.bias,F.shadowNormalBias=P.normalBias,F.shadowRadius=P.radius,F.shadowMapSize=P.mapSize,F.shadowCameraNear=P.camera.near,F.shadowCameraFar=P.camera.far,n.pointShadow[p]=F,n.pointShadowMap[p]=I,n.pointShadowMatrix[p]=C.shadow.matrix,v++}n.point[p]=D,p++}else if(C.isHemisphereLight){const D=e.get(C);D.skyColor.copy(C.color).multiplyScalar(G),D.groundColor.copy(C.groundColor).multiplyScalar(G),n.hemi[m]=D,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=we.LTC_FLOAT_1,n.rectAreaLTC2=we.LTC_FLOAT_2):(n.rectAreaLTC1=we.LTC_HALF_1,n.rectAreaLTC2=we.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const L=n.hash;(L.directionalLength!==f||L.pointLength!==p||L.spotLength!==_||L.rectAreaLength!==g||L.hemiLength!==m||L.numDirectionalShadows!==M||L.numPointShadows!==v||L.numSpotShadows!==x||L.numSpotMaps!==R||L.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=x+R-S,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=E,L.directionalLength=f,L.pointLength=p,L.spotLength=_,L.rectAreaLength=g,L.hemiLength=m,L.numDirectionalShadows=M,L.numPointShadows=v,L.numSpotShadows=x,L.numSpotMaps=R,L.numLightProbes=E,n.version=cS++)}function l(c,h){let u=0,d=0,f=0,p=0,_=0;const g=h.matrixWorldInverse;for(let m=0,M=c.length;m<M;m++){const v=c[m];if(v.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),u++}else if(v.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),f++}else if(v.isRectAreaLight){const x=n.rectArea[p];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(g),o.identity(),r.copy(v.matrixWorld),r.premultiply(g),o.extractRotation(r),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),p++}else if(v.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(g),d++}else if(v.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:n}}function yp(i){const e=new uS(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function dS(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new yp(i),e.set(s,[a])):r>=o.length?(a=new yp(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const fS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function mS(i,e,t){let n=new wd;const s=new qe,r=new qe,o=new _t,a=new cx({depthPacking:e0}),l=new hx,c={},h=t.maxTextureSize,u={[Gi]:vn,[vn]:Gi,[Cn]:Cn},d=new Vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:fS,fragmentShader:pS}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new Nt;p.setAttribute("position",new xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Dt(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lm;let m=this.type;this.render=function(S,E,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;const b=i.getRenderTarget(),y=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),H=i.state;H.setBlending(_s),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const G=m!==Li&&this.type===Li,O=m===Li&&this.type!==Li;for(let I=0,D=S.length;I<D;I++){const P=S[I],F=P.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",P,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const $=F.getFrameExtents();if(s.multiply($),r.copy(F.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/$.x),s.x=r.x*$.x,F.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/$.y),s.y=r.y*$.y,F.mapSize.y=r.y)),F.map===null||G===!0||O===!0){const W=this.type!==Li?{minFilter:En,magFilter:En}:{};F.map!==null&&F.map.dispose(),F.map=new er(s.x,s.y,W),F.map.texture.name=P.name+".shadowMap",F.camera.updateProjectionMatrix()}i.setRenderTarget(F.map),i.clear();const ee=F.getViewportCount();for(let W=0;W<ee;W++){const Q=F.getViewport(W);o.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),H.viewport(o),F.updateMatrices(P,W),n=F.getFrustum(),x(E,L,F.camera,P,this.type)}F.isPointLightShadow!==!0&&this.type===Li&&M(F,L),F.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(b,y,C)};function M(S,E){const L=e.update(_);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new er(s.x,s.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(E,null,L,d,_,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(E,null,L,f,_,null)}function v(S,E,L,b){let y=null;const C=L.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(C!==void 0)y=C;else if(y=L.isPointLight===!0?l:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const H=y.uuid,G=E.uuid;let O=c[H];O===void 0&&(O={},c[H]=O);let I=O[G];I===void 0&&(I=y.clone(),O[G]=I,E.addEventListener("dispose",R)),y=I}if(y.visible=E.visible,y.wireframe=E.wireframe,b===Li?y.side=E.shadowSide!==null?E.shadowSide:E.side:y.side=E.shadowSide!==null?E.shadowSide:u[E.side],y.alphaMap=E.alphaMap,y.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,y.map=E.map,y.clipShadows=E.clipShadows,y.clippingPlanes=E.clippingPlanes,y.clipIntersection=E.clipIntersection,y.displacementMap=E.displacementMap,y.displacementScale=E.displacementScale,y.displacementBias=E.displacementBias,y.wireframeLinewidth=E.wireframeLinewidth,y.linewidth=E.linewidth,L.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const H=i.properties.get(y);H.light=L}return y}function x(S,E,L,b,y){if(S.visible===!1)return;if(S.layers.test(E.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&y===Li)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,S.matrixWorld);const G=e.update(S),O=S.material;if(Array.isArray(O)){const I=G.groups;for(let D=0,P=I.length;D<P;D++){const F=I[D],$=O[F.materialIndex];if($&&$.visible){const ee=v(S,$,b,y);S.onBeforeShadow(i,S,E,L,G,ee,F),i.renderBufferDirect(L,null,G,ee,S,F),S.onAfterShadow(i,S,E,L,G,ee,F)}}}else if(O.visible){const I=v(S,O,b,y);S.onBeforeShadow(i,S,E,L,G,I,null),i.renderBufferDirect(L,null,G,I,S,null),S.onAfterShadow(i,S,E,L,G,I,null)}}const H=S.children;for(let G=0,O=H.length;G<O;G++)x(H[G],E,L,b,y)}function R(S){S.target.removeEventListener("dispose",R);for(const L in c){const b=c[L],y=S.target.uuid;y in b&&(b[y].dispose(),delete b[y])}}}const gS={[iu]:su,[ru]:lu,[ou]:cu,[fo]:au,[su]:iu,[lu]:ru,[cu]:ou,[au]:fo};function _S(i,e){function t(){let q=!1;const Le=new _t;let ae=null;const de=new _t(0,0,0,0);return{setMask:function(Pe){ae!==Pe&&!q&&(i.colorMask(Pe,Pe,Pe,Pe),ae=Pe)},setLocked:function(Pe){q=Pe},setClear:function(Pe,Ae,nt,Ot,rn){rn===!0&&(Pe*=Ot,Ae*=Ot,nt*=Ot),Le.set(Pe,Ae,nt,Ot),de.equals(Le)===!1&&(i.clearColor(Pe,Ae,nt,Ot),de.copy(Le))},reset:function(){q=!1,ae=null,de.set(-1,0,0,0)}}}function n(){let q=!1,Le=!1,ae=null,de=null,Pe=null;return{setReversed:function(Ae){if(Le!==Ae){const nt=e.get("EXT_clip_control");Ae?nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.ZERO_TO_ONE_EXT):nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.NEGATIVE_ONE_TO_ONE_EXT),Le=Ae;const Ot=Pe;Pe=null,this.setClear(Ot)}},getReversed:function(){return Le},setTest:function(Ae){Ae?se(i.DEPTH_TEST):Me(i.DEPTH_TEST)},setMask:function(Ae){ae!==Ae&&!q&&(i.depthMask(Ae),ae=Ae)},setFunc:function(Ae){if(Le&&(Ae=gS[Ae]),de!==Ae){switch(Ae){case iu:i.depthFunc(i.NEVER);break;case su:i.depthFunc(i.ALWAYS);break;case ru:i.depthFunc(i.LESS);break;case fo:i.depthFunc(i.LEQUAL);break;case ou:i.depthFunc(i.EQUAL);break;case au:i.depthFunc(i.GEQUAL);break;case lu:i.depthFunc(i.GREATER);break;case cu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}de=Ae}},setLocked:function(Ae){q=Ae},setClear:function(Ae){Pe!==Ae&&(Le&&(Ae=1-Ae),i.clearDepth(Ae),Pe=Ae)},reset:function(){q=!1,ae=null,de=null,Pe=null,Le=!1}}}function s(){let q=!1,Le=null,ae=null,de=null,Pe=null,Ae=null,nt=null,Ot=null,rn=null;return{setTest:function(Mt){q||(Mt?se(i.STENCIL_TEST):Me(i.STENCIL_TEST))},setMask:function(Mt){Le!==Mt&&!q&&(i.stencilMask(Mt),Le=Mt)},setFunc:function(Mt,Tn,Pn){(ae!==Mt||de!==Tn||Pe!==Pn)&&(i.stencilFunc(Mt,Tn,Pn),ae=Mt,de=Tn,Pe=Pn)},setOp:function(Mt,Tn,Pn){(Ae!==Mt||nt!==Tn||Ot!==Pn)&&(i.stencilOp(Mt,Tn,Pn),Ae=Mt,nt=Tn,Ot=Pn)},setLocked:function(Mt){q=Mt},setClear:function(Mt){rn!==Mt&&(i.clearStencil(Mt),rn=Mt)},reset:function(){q=!1,Le=null,ae=null,de=null,Pe=null,Ae=null,nt=null,Ot=null,rn=null}}}const r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],p=null,_=!1,g=null,m=null,M=null,v=null,x=null,R=null,S=null,E=new ze(0,0,0),L=0,b=!1,y=null,C=null,H=null,G=null,O=null;const I=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,P=0;const F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(P=parseFloat(/^WebGL (\d)/.exec(F)[1]),D=P>=1):F.indexOf("OpenGL ES")!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),D=P>=2);let $=null,ee={};const W=i.getParameter(i.SCISSOR_BOX),Q=i.getParameter(i.VIEWPORT),pe=new _t().fromArray(W),Z=new _t().fromArray(Q);function oe(q,Le,ae,de){const Pe=new Uint8Array(4),Ae=i.createTexture();i.bindTexture(q,Ae),i.texParameteri(q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let nt=0;nt<ae;nt++)q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?i.texImage3D(Le,0,i.RGBA,1,1,de,0,i.RGBA,i.UNSIGNED_BYTE,Pe):i.texImage2D(Le+nt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pe);return Ae}const _e={};_e[i.TEXTURE_2D]=oe(i.TEXTURE_2D,i.TEXTURE_2D,1),_e[i.TEXTURE_CUBE_MAP]=oe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[i.TEXTURE_2D_ARRAY]=oe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_e[i.TEXTURE_3D]=oe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(i.DEPTH_TEST),o.setFunc(fo),ft(!1),pt(Kd),se(i.CULL_FACE),z(_s);function se(q){h[q]!==!0&&(i.enable(q),h[q]=!0)}function Me(q){h[q]!==!1&&(i.disable(q),h[q]=!1)}function Ce(q,Le){return u[q]!==Le?(i.bindFramebuffer(q,Le),u[q]=Le,q===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Le),q===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Le),!0):!1}function Ie(q,Le){let ae=f,de=!1;if(q){ae=d.get(Le),ae===void 0&&(ae=[],d.set(Le,ae));const Pe=q.textures;if(ae.length!==Pe.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let Ae=0,nt=Pe.length;Ae<nt;Ae++)ae[Ae]=i.COLOR_ATTACHMENT0+Ae;ae.length=Pe.length,de=!0}}else ae[0]!==i.BACK&&(ae[0]=i.BACK,de=!0);de&&i.drawBuffers(ae)}function dt(q){return p!==q?(i.useProgram(q),p=q,!0):!1}const Fe={[Us]:i.FUNC_ADD,[w_]:i.FUNC_SUBTRACT,[T_]:i.FUNC_REVERSE_SUBTRACT};Fe[A_]=i.MIN,Fe[R_]=i.MAX;const Te={[C_]:i.ZERO,[L_]:i.ONE,[P_]:i.SRC_COLOR,[tu]:i.SRC_ALPHA,[O_]:i.SRC_ALPHA_SATURATE,[U_]:i.DST_COLOR,[I_]:i.DST_ALPHA,[D_]:i.ONE_MINUS_SRC_COLOR,[nu]:i.ONE_MINUS_SRC_ALPHA,[F_]:i.ONE_MINUS_DST_COLOR,[N_]:i.ONE_MINUS_DST_ALPHA,[B_]:i.CONSTANT_COLOR,[k_]:i.ONE_MINUS_CONSTANT_COLOR,[z_]:i.CONSTANT_ALPHA,[H_]:i.ONE_MINUS_CONSTANT_ALPHA};function z(q,Le,ae,de,Pe,Ae,nt,Ot,rn,Mt){if(q===_s){_===!0&&(Me(i.BLEND),_=!1);return}if(_===!1&&(se(i.BLEND),_=!0),q!==E_){if(q!==g||Mt!==b){if((m!==Us||x!==Us)&&(i.blendEquation(i.FUNC_ADD),m=Us,x=Us),Mt)switch(q){case Br:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zd:i.blendFunc(i.ONE,i.ONE);break;case Jd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Qd:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case Br:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zd:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Jd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Qd:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}M=null,v=null,R=null,S=null,E.set(0,0,0),L=0,g=q,b=Mt}return}Pe=Pe||Le,Ae=Ae||ae,nt=nt||de,(Le!==m||Pe!==x)&&(i.blendEquationSeparate(Fe[Le],Fe[Pe]),m=Le,x=Pe),(ae!==M||de!==v||Ae!==R||nt!==S)&&(i.blendFuncSeparate(Te[ae],Te[de],Te[Ae],Te[nt]),M=ae,v=de,R=Ae,S=nt),(Ot.equals(E)===!1||rn!==L)&&(i.blendColor(Ot.r,Ot.g,Ot.b,rn),E.copy(Ot),L=rn),g=q,b=!1}function Ct(q,Le){q.side===Cn?Me(i.CULL_FACE):se(i.CULL_FACE);let ae=q.side===vn;Le&&(ae=!ae),ft(ae),q.blending===Br&&q.transparent===!1?z(_s):z(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),o.setFunc(q.depthFunc),o.setTest(q.depthTest),o.setMask(q.depthWrite),r.setMask(q.colorWrite);const de=q.stencilWrite;a.setTest(de),de&&(a.setMask(q.stencilWriteMask),a.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),a.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Lt(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?se(i.SAMPLE_ALPHA_TO_COVERAGE):Me(i.SAMPLE_ALPHA_TO_COVERAGE)}function ft(q){y!==q&&(q?i.frontFace(i.CW):i.frontFace(i.CCW),y=q)}function pt(q){q!==b_?(se(i.CULL_FACE),q!==C&&(q===Kd?i.cullFace(i.BACK):q===S_?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Me(i.CULL_FACE),C=q}function je(q){q!==H&&(D&&i.lineWidth(q),H=q)}function Lt(q,Le,ae){q?(se(i.POLYGON_OFFSET_FILL),(G!==Le||O!==ae)&&(i.polygonOffset(Le,ae),G=Le,O=ae)):Me(i.POLYGON_OFFSET_FILL)}function Ve(q){q?se(i.SCISSOR_TEST):Me(i.SCISSOR_TEST)}function N(q){q===void 0&&(q=i.TEXTURE0+I-1),$!==q&&(i.activeTexture(q),$=q)}function T(q,Le,ae){ae===void 0&&($===null?ae=i.TEXTURE0+I-1:ae=$);let de=ee[ae];de===void 0&&(de={type:void 0,texture:void 0},ee[ae]=de),(de.type!==q||de.texture!==Le)&&($!==ae&&(i.activeTexture(ae),$=ae),i.bindTexture(q,Le||_e[q]),de.type=q,de.texture=Le)}function te(){const q=ee[$];q!==void 0&&q.type!==void 0&&(i.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function he(){try{i.compressedTexImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function xe(){try{i.compressedTexImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ce(){try{i.texSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ue(){try{i.texSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ve(){try{i.compressedTexSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ke(){try{i.compressedTexSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ze(){try{i.texStorage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ye(){try{i.texStorage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Oe(){try{i.texImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ye(){try{i.texImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Je(q){pe.equals(q)===!1&&(i.scissor(q.x,q.y,q.z,q.w),pe.copy(q))}function ke(q){Z.equals(q)===!1&&(i.viewport(q.x,q.y,q.z,q.w),Z.copy(q))}function ut(q,Le){let ae=c.get(Le);ae===void 0&&(ae=new WeakMap,c.set(Le,ae));let de=ae.get(q);de===void 0&&(de=i.getUniformBlockIndex(Le,q.name),ae.set(q,de))}function ot(q,Le){const de=c.get(Le).get(q);l.get(Le)!==de&&(i.uniformBlockBinding(Le,de,q.__bindingPointIndex),l.set(Le,de))}function Et(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},$=null,ee={},u={},d=new WeakMap,f=[],p=null,_=!1,g=null,m=null,M=null,v=null,x=null,R=null,S=null,E=new ze(0,0,0),L=0,b=!1,y=null,C=null,H=null,G=null,O=null,pe.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:se,disable:Me,bindFramebuffer:Ce,drawBuffers:Ie,useProgram:dt,setBlending:z,setMaterial:Ct,setFlipSided:ft,setCullFace:pt,setLineWidth:je,setPolygonOffset:Lt,setScissorTest:Ve,activeTexture:N,bindTexture:T,unbindTexture:te,compressedTexImage2D:he,compressedTexImage3D:xe,texImage2D:Oe,texImage3D:Ye,updateUBOMapping:ut,uniformBlockBinding:ot,texStorage2D:Ze,texStorage3D:ye,texSubImage2D:ce,texSubImage3D:ue,compressedTexSubImage2D:ve,compressedTexSubImage3D:Ke,scissor:Je,viewport:ke,reset:Et}}function xS(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new qe,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(N,T){return f?new OffscreenCanvas(N,T):Sa("canvas")}function _(N,T,te){let he=1;const xe=Ve(N);if((xe.width>te||xe.height>te)&&(he=te/Math.max(xe.width,xe.height)),he<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ce=Math.floor(he*xe.width),ue=Math.floor(he*xe.height);u===void 0&&(u=p(ce,ue));const ve=T?p(ce,ue):u;return ve.width=ce,ve.height=ue,ve.getContext("2d").drawImage(N,0,0,ce,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+ce+"x"+ue+")."),ve}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),N;return N}function g(N){return N.generateMipmaps}function m(N){i.generateMipmap(N)}function M(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(N,T,te,he,xe=!1){if(N!==null){if(i[N]!==void 0)return i[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ce=T;if(T===i.RED&&(te===i.FLOAT&&(ce=i.R32F),te===i.HALF_FLOAT&&(ce=i.R16F),te===i.UNSIGNED_BYTE&&(ce=i.R8)),T===i.RED_INTEGER&&(te===i.UNSIGNED_BYTE&&(ce=i.R8UI),te===i.UNSIGNED_SHORT&&(ce=i.R16UI),te===i.UNSIGNED_INT&&(ce=i.R32UI),te===i.BYTE&&(ce=i.R8I),te===i.SHORT&&(ce=i.R16I),te===i.INT&&(ce=i.R32I)),T===i.RG&&(te===i.FLOAT&&(ce=i.RG32F),te===i.HALF_FLOAT&&(ce=i.RG16F),te===i.UNSIGNED_BYTE&&(ce=i.RG8)),T===i.RG_INTEGER&&(te===i.UNSIGNED_BYTE&&(ce=i.RG8UI),te===i.UNSIGNED_SHORT&&(ce=i.RG16UI),te===i.UNSIGNED_INT&&(ce=i.RG32UI),te===i.BYTE&&(ce=i.RG8I),te===i.SHORT&&(ce=i.RG16I),te===i.INT&&(ce=i.RG32I)),T===i.RGB_INTEGER&&(te===i.UNSIGNED_BYTE&&(ce=i.RGB8UI),te===i.UNSIGNED_SHORT&&(ce=i.RGB16UI),te===i.UNSIGNED_INT&&(ce=i.RGB32UI),te===i.BYTE&&(ce=i.RGB8I),te===i.SHORT&&(ce=i.RGB16I),te===i.INT&&(ce=i.RGB32I)),T===i.RGBA_INTEGER&&(te===i.UNSIGNED_BYTE&&(ce=i.RGBA8UI),te===i.UNSIGNED_SHORT&&(ce=i.RGBA16UI),te===i.UNSIGNED_INT&&(ce=i.RGBA32UI),te===i.BYTE&&(ce=i.RGBA8I),te===i.SHORT&&(ce=i.RGBA16I),te===i.INT&&(ce=i.RGBA32I)),T===i.RGB&&te===i.UNSIGNED_INT_5_9_9_9_REV&&(ce=i.RGB9_E5),T===i.RGBA){const ue=xe?vc:vt.getTransfer(he);te===i.FLOAT&&(ce=i.RGBA32F),te===i.HALF_FLOAT&&(ce=i.RGBA16F),te===i.UNSIGNED_BYTE&&(ce=ue===At?i.SRGB8_ALPHA8:i.RGBA8),te===i.UNSIGNED_SHORT_4_4_4_4&&(ce=i.RGBA4),te===i.UNSIGNED_SHORT_5_5_5_1&&(ce=i.RGB5_A1)}return(ce===i.R16F||ce===i.R32F||ce===i.RG16F||ce===i.RG32F||ce===i.RGBA16F||ce===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function x(N,T){let te;return N?T===null||T===Qs||T===xa?te=i.DEPTH24_STENCIL8:T===ri?te=i.DEPTH32F_STENCIL8:T===_a&&(te=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Qs||T===xa?te=i.DEPTH_COMPONENT24:T===ri?te=i.DEPTH_COMPONENT32F:T===_a&&(te=i.DEPTH_COMPONENT16),te}function R(N,T){return g(N)===!0||N.isFramebufferTexture&&N.minFilter!==En&&N.minFilter!==Ln?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function S(N){const T=N.target;T.removeEventListener("dispose",S),L(T),T.isVideoTexture&&h.delete(T)}function E(N){const T=N.target;T.removeEventListener("dispose",E),y(T)}function L(N){const T=n.get(N);if(T.__webglInit===void 0)return;const te=N.source,he=d.get(te);if(he){const xe=he[T.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&b(N),Object.keys(he).length===0&&d.delete(te)}n.remove(N)}function b(N){const T=n.get(N);i.deleteTexture(T.__webglTexture);const te=N.source,he=d.get(te);delete he[T.__cacheKey],o.memory.textures--}function y(N){const T=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(T.__webglFramebuffer[he]))for(let xe=0;xe<T.__webglFramebuffer[he].length;xe++)i.deleteFramebuffer(T.__webglFramebuffer[he][xe]);else i.deleteFramebuffer(T.__webglFramebuffer[he]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[he])}else{if(Array.isArray(T.__webglFramebuffer))for(let he=0;he<T.__webglFramebuffer.length;he++)i.deleteFramebuffer(T.__webglFramebuffer[he]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let he=0;he<T.__webglColorRenderbuffer.length;he++)T.__webglColorRenderbuffer[he]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[he]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const te=N.textures;for(let he=0,xe=te.length;he<xe;he++){const ce=n.get(te[he]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),o.memory.textures--),n.remove(te[he])}n.remove(N)}let C=0;function H(){C=0}function G(){const N=C;return N>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+s.maxTextures),C+=1,N}function O(N){const T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function I(N,T){const te=n.get(N);if(N.isVideoTexture&&je(N),N.isRenderTargetTexture===!1&&N.version>0&&te.__version!==N.version){const he=N.image;if(he===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(te,N,T);return}}t.bindTexture(i.TEXTURE_2D,te.__webglTexture,i.TEXTURE0+T)}function D(N,T){const te=n.get(N);if(N.version>0&&te.__version!==N.version){Z(te,N,T);return}t.bindTexture(i.TEXTURE_2D_ARRAY,te.__webglTexture,i.TEXTURE0+T)}function P(N,T){const te=n.get(N);if(N.version>0&&te.__version!==N.version){Z(te,N,T);return}t.bindTexture(i.TEXTURE_3D,te.__webglTexture,i.TEXTURE0+T)}function F(N,T){const te=n.get(N);if(N.version>0&&te.__version!==N.version){oe(te,N,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture,i.TEXTURE0+T)}const $={[go]:i.REPEAT,[ms]:i.CLAMP_TO_EDGE,[Mc]:i.MIRRORED_REPEAT},ee={[En]:i.NEAREST,[Um]:i.NEAREST_MIPMAP_NEAREST,[oa]:i.NEAREST_MIPMAP_LINEAR,[Ln]:i.LINEAR,[oc]:i.LINEAR_MIPMAP_NEAREST,[Bi]:i.LINEAR_MIPMAP_LINEAR},W={[n0]:i.NEVER,[l0]:i.ALWAYS,[i0]:i.LESS,[$m]:i.LEQUAL,[s0]:i.EQUAL,[a0]:i.GEQUAL,[r0]:i.GREATER,[o0]:i.NOTEQUAL};function Q(N,T){if(T.type===ri&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Ln||T.magFilter===oc||T.magFilter===oa||T.magFilter===Bi||T.minFilter===Ln||T.minFilter===oc||T.minFilter===oa||T.minFilter===Bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,$[T.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,$[T.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,$[T.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,ee[T.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,ee[T.minFilter]),T.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,W[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===En||T.minFilter!==oa&&T.minFilter!==Bi||T.type===ri&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");i.texParameterf(N,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function pe(N,T){let te=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",S));const he=T.source;let xe=d.get(he);xe===void 0&&(xe={},d.set(he,xe));const ce=O(T);if(ce!==N.__cacheKey){xe[ce]===void 0&&(xe[ce]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,te=!0),xe[ce].usedTimes++;const ue=xe[N.__cacheKey];ue!==void 0&&(xe[N.__cacheKey].usedTimes--,ue.usedTimes===0&&b(T)),N.__cacheKey=ce,N.__webglTexture=xe[ce].texture}return te}function Z(N,T,te){let he=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(he=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(he=i.TEXTURE_3D);const xe=pe(N,T),ce=T.source;t.bindTexture(he,N.__webglTexture,i.TEXTURE0+te);const ue=n.get(ce);if(ce.version!==ue.__version||xe===!0){t.activeTexture(i.TEXTURE0+te);const ve=vt.getPrimaries(vt.workingColorSpace),Ke=T.colorSpace===os?null:vt.getPrimaries(T.colorSpace),Ze=T.colorSpace===os||ve===Ke?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let ye=_(T.image,!1,s.maxTextureSize);ye=Lt(T,ye);const Oe=r.convert(T.format,T.colorSpace),Ye=r.convert(T.type);let Je=v(T.internalFormat,Oe,Ye,T.colorSpace,T.isVideoTexture);Q(he,T);let ke;const ut=T.mipmaps,ot=T.isVideoTexture!==!0,Et=ue.__version===void 0||xe===!0,q=ce.dataReady,Le=R(T,ye);if(T.isDepthTexture)Je=x(T.format===va,T.type),Et&&(ot?t.texStorage2D(i.TEXTURE_2D,1,Je,ye.width,ye.height):t.texImage2D(i.TEXTURE_2D,0,Je,ye.width,ye.height,0,Oe,Ye,null));else if(T.isDataTexture)if(ut.length>0){ot&&Et&&t.texStorage2D(i.TEXTURE_2D,Le,Je,ut[0].width,ut[0].height);for(let ae=0,de=ut.length;ae<de;ae++)ke=ut[ae],ot?q&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,ke.width,ke.height,Oe,Ye,ke.data):t.texImage2D(i.TEXTURE_2D,ae,Je,ke.width,ke.height,0,Oe,Ye,ke.data);T.generateMipmaps=!1}else ot?(Et&&t.texStorage2D(i.TEXTURE_2D,Le,Je,ye.width,ye.height),q&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ye.width,ye.height,Oe,Ye,ye.data)):t.texImage2D(i.TEXTURE_2D,0,Je,ye.width,ye.height,0,Oe,Ye,ye.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ot&&Et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Le,Je,ut[0].width,ut[0].height,ye.depth);for(let ae=0,de=ut.length;ae<de;ae++)if(ke=ut[ae],T.format!==Yn)if(Oe!==null)if(ot){if(q)if(T.layerUpdates.size>0){const Pe=Jf(ke.width,ke.height,T.format,T.type);for(const Ae of T.layerUpdates){const nt=ke.data.subarray(Ae*Pe/ke.data.BYTES_PER_ELEMENT,(Ae+1)*Pe/ke.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,Ae,ke.width,ke.height,1,Oe,nt)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,ke.width,ke.height,ye.depth,Oe,ke.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ae,Je,ke.width,ke.height,ye.depth,0,ke.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ot?q&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,ke.width,ke.height,ye.depth,Oe,Ye,ke.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ae,Je,ke.width,ke.height,ye.depth,0,Oe,Ye,ke.data)}else{ot&&Et&&t.texStorage2D(i.TEXTURE_2D,Le,Je,ut[0].width,ut[0].height);for(let ae=0,de=ut.length;ae<de;ae++)ke=ut[ae],T.format!==Yn?Oe!==null?ot?q&&t.compressedTexSubImage2D(i.TEXTURE_2D,ae,0,0,ke.width,ke.height,Oe,ke.data):t.compressedTexImage2D(i.TEXTURE_2D,ae,Je,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?q&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,ke.width,ke.height,Oe,Ye,ke.data):t.texImage2D(i.TEXTURE_2D,ae,Je,ke.width,ke.height,0,Oe,Ye,ke.data)}else if(T.isDataArrayTexture)if(ot){if(Et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Le,Je,ye.width,ye.height,ye.depth),q)if(T.layerUpdates.size>0){const ae=Jf(ye.width,ye.height,T.format,T.type);for(const de of T.layerUpdates){const Pe=ye.data.subarray(de*ae/ye.data.BYTES_PER_ELEMENT,(de+1)*ae/ye.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,de,ye.width,ye.height,1,Oe,Ye,Pe)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Oe,Ye,ye.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Je,ye.width,ye.height,ye.depth,0,Oe,Ye,ye.data);else if(T.isData3DTexture)ot?(Et&&t.texStorage3D(i.TEXTURE_3D,Le,Je,ye.width,ye.height,ye.depth),q&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Oe,Ye,ye.data)):t.texImage3D(i.TEXTURE_3D,0,Je,ye.width,ye.height,ye.depth,0,Oe,Ye,ye.data);else if(T.isFramebufferTexture){if(Et)if(ot)t.texStorage2D(i.TEXTURE_2D,Le,Je,ye.width,ye.height);else{let ae=ye.width,de=ye.height;for(let Pe=0;Pe<Le;Pe++)t.texImage2D(i.TEXTURE_2D,Pe,Je,ae,de,0,Oe,Ye,null),ae>>=1,de>>=1}}else if(ut.length>0){if(ot&&Et){const ae=Ve(ut[0]);t.texStorage2D(i.TEXTURE_2D,Le,Je,ae.width,ae.height)}for(let ae=0,de=ut.length;ae<de;ae++)ke=ut[ae],ot?q&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,Oe,Ye,ke):t.texImage2D(i.TEXTURE_2D,ae,Je,Oe,Ye,ke);T.generateMipmaps=!1}else if(ot){if(Et){const ae=Ve(ye);t.texStorage2D(i.TEXTURE_2D,Le,Je,ae.width,ae.height)}q&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Oe,Ye,ye)}else t.texImage2D(i.TEXTURE_2D,0,Je,Oe,Ye,ye);g(T)&&m(he),ue.__version=ce.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function oe(N,T,te){if(T.image.length!==6)return;const he=pe(N,T),xe=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+te);const ce=n.get(xe);if(xe.version!==ce.__version||he===!0){t.activeTexture(i.TEXTURE0+te);const ue=vt.getPrimaries(vt.workingColorSpace),ve=T.colorSpace===os?null:vt.getPrimaries(T.colorSpace),Ke=T.colorSpace===os||ue===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);const Ze=T.isCompressedTexture||T.image[0].isCompressedTexture,ye=T.image[0]&&T.image[0].isDataTexture,Oe=[];for(let de=0;de<6;de++)!Ze&&!ye?Oe[de]=_(T.image[de],!0,s.maxCubemapSize):Oe[de]=ye?T.image[de].image:T.image[de],Oe[de]=Lt(T,Oe[de]);const Ye=Oe[0],Je=r.convert(T.format,T.colorSpace),ke=r.convert(T.type),ut=v(T.internalFormat,Je,ke,T.colorSpace),ot=T.isVideoTexture!==!0,Et=ce.__version===void 0||he===!0,q=xe.dataReady;let Le=R(T,Ye);Q(i.TEXTURE_CUBE_MAP,T);let ae;if(Ze){ot&&Et&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Le,ut,Ye.width,Ye.height);for(let de=0;de<6;de++){ae=Oe[de].mipmaps;for(let Pe=0;Pe<ae.length;Pe++){const Ae=ae[Pe];T.format!==Yn?Je!==null?ot?q&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe,0,0,Ae.width,Ae.height,Je,Ae.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe,ut,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ot?q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe,0,0,Ae.width,Ae.height,Je,ke,Ae.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe,ut,Ae.width,Ae.height,0,Je,ke,Ae.data)}}}else{if(ae=T.mipmaps,ot&&Et){ae.length>0&&Le++;const de=Ve(Oe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Le,ut,de.width,de.height)}for(let de=0;de<6;de++)if(ye){ot?q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Oe[de].width,Oe[de].height,Je,ke,Oe[de].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ut,Oe[de].width,Oe[de].height,0,Je,ke,Oe[de].data);for(let Pe=0;Pe<ae.length;Pe++){const nt=ae[Pe].image[de].image;ot?q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe+1,0,0,nt.width,nt.height,Je,ke,nt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe+1,ut,nt.width,nt.height,0,Je,ke,nt.data)}}else{ot?q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Je,ke,Oe[de]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ut,Je,ke,Oe[de]);for(let Pe=0;Pe<ae.length;Pe++){const Ae=ae[Pe];ot?q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe+1,0,0,Je,ke,Ae.image[de]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe+1,ut,Je,ke,Ae.image[de])}}}g(T)&&m(i.TEXTURE_CUBE_MAP),ce.__version=xe.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function _e(N,T,te,he,xe,ce){const ue=r.convert(te.format,te.colorSpace),ve=r.convert(te.type),Ke=v(te.internalFormat,ue,ve,te.colorSpace),Ze=n.get(T),ye=n.get(te);if(ye.__renderTarget=T,!Ze.__hasExternalTextures){const Oe=Math.max(1,T.width>>ce),Ye=Math.max(1,T.height>>ce);xe===i.TEXTURE_3D||xe===i.TEXTURE_2D_ARRAY?t.texImage3D(xe,ce,Ke,Oe,Ye,T.depth,0,ue,ve,null):t.texImage2D(xe,ce,Ke,Oe,Ye,0,ue,ve,null)}t.bindFramebuffer(i.FRAMEBUFFER,N),pt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,he,xe,ye.__webglTexture,0,ft(T)):(xe===i.TEXTURE_2D||xe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,he,xe,ye.__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function se(N,T,te){if(i.bindRenderbuffer(i.RENDERBUFFER,N),T.depthBuffer){const he=T.depthTexture,xe=he&&he.isDepthTexture?he.type:null,ce=x(T.stencilBuffer,xe),ue=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=ft(T);pt(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve,ce,T.width,T.height):te?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,ce,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ce,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,N)}else{const he=T.textures;for(let xe=0;xe<he.length;xe++){const ce=he[xe],ue=r.convert(ce.format,ce.colorSpace),ve=r.convert(ce.type),Ke=v(ce.internalFormat,ue,ve,ce.colorSpace),Ze=ft(T);te&&pt(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ze,Ke,T.width,T.height):pt(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ze,Ke,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Ke,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Me(N,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const he=n.get(T.depthTexture);he.__renderTarget=T,(!he.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),I(T.depthTexture,0);const xe=he.__webglTexture,ce=ft(T);if(T.depthTexture.format===Ma)pt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,xe,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,xe,0);else if(T.depthTexture.format===va)pt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,xe,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function Ce(N){const T=n.get(N),te=N.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==N.depthTexture){const he=N.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),he){const xe=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,he.removeEventListener("dispose",xe)};he.addEventListener("dispose",xe),T.__depthDisposeCallback=xe}T.__boundDepthTexture=he}if(N.depthTexture&&!T.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");const he=N.texture.mipmaps;he&&he.length>0?Me(T.__webglFramebuffer[0],N):Me(T.__webglFramebuffer,N)}else if(te){T.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[he]),T.__webglDepthbuffer[he]===void 0)T.__webglDepthbuffer[he]=i.createRenderbuffer(),se(T.__webglDepthbuffer[he],N,!1);else{const xe=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=T.__webglDepthbuffer[he];i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,xe,i.RENDERBUFFER,ce)}}else{const he=N.texture.mipmaps;if(he&&he.length>0?t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),se(T.__webglDepthbuffer,N,!1);else{const xe=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,xe,i.RENDERBUFFER,ce)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ie(N,T,te){const he=n.get(N);T!==void 0&&_e(he.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),te!==void 0&&Ce(N)}function dt(N){const T=N.texture,te=n.get(N),he=n.get(T);N.addEventListener("dispose",E);const xe=N.textures,ce=N.isWebGLCubeRenderTarget===!0,ue=xe.length>1;if(ue||(he.__webglTexture===void 0&&(he.__webglTexture=i.createTexture()),he.__version=T.version,o.memory.textures++),ce){te.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(T.mipmaps&&T.mipmaps.length>0){te.__webglFramebuffer[ve]=[];for(let Ke=0;Ke<T.mipmaps.length;Ke++)te.__webglFramebuffer[ve][Ke]=i.createFramebuffer()}else te.__webglFramebuffer[ve]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){te.__webglFramebuffer=[];for(let ve=0;ve<T.mipmaps.length;ve++)te.__webglFramebuffer[ve]=i.createFramebuffer()}else te.__webglFramebuffer=i.createFramebuffer();if(ue)for(let ve=0,Ke=xe.length;ve<Ke;ve++){const Ze=n.get(xe[ve]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=i.createTexture(),o.memory.textures++)}if(N.samples>0&&pt(N)===!1){te.__webglMultisampledFramebuffer=i.createFramebuffer(),te.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let ve=0;ve<xe.length;ve++){const Ke=xe[ve];te.__webglColorRenderbuffer[ve]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,te.__webglColorRenderbuffer[ve]);const Ze=r.convert(Ke.format,Ke.colorSpace),ye=r.convert(Ke.type),Oe=v(Ke.internalFormat,Ze,ye,Ke.colorSpace,N.isXRRenderTarget===!0),Ye=ft(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ye,Oe,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,te.__webglColorRenderbuffer[ve])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(te.__webglDepthRenderbuffer=i.createRenderbuffer(),se(te.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ce){t.bindTexture(i.TEXTURE_CUBE_MAP,he.__webglTexture),Q(i.TEXTURE_CUBE_MAP,T);for(let ve=0;ve<6;ve++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ke=0;Ke<T.mipmaps.length;Ke++)_e(te.__webglFramebuffer[ve][Ke],N,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ke);else _e(te.__webglFramebuffer[ve],N,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);g(T)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){for(let ve=0,Ke=xe.length;ve<Ke;ve++){const Ze=xe[ve],ye=n.get(Ze);t.bindTexture(i.TEXTURE_2D,ye.__webglTexture),Q(i.TEXTURE_2D,Ze),_e(te.__webglFramebuffer,N,Ze,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,0),g(Ze)&&m(i.TEXTURE_2D)}t.unbindTexture()}else{let ve=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ve=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ve,he.__webglTexture),Q(ve,T),T.mipmaps&&T.mipmaps.length>0)for(let Ke=0;Ke<T.mipmaps.length;Ke++)_e(te.__webglFramebuffer[Ke],N,T,i.COLOR_ATTACHMENT0,ve,Ke);else _e(te.__webglFramebuffer,N,T,i.COLOR_ATTACHMENT0,ve,0);g(T)&&m(ve),t.unbindTexture()}N.depthBuffer&&Ce(N)}function Fe(N){const T=N.textures;for(let te=0,he=T.length;te<he;te++){const xe=T[te];if(g(xe)){const ce=M(N),ue=n.get(xe).__webglTexture;t.bindTexture(ce,ue),m(ce),t.unbindTexture()}}}const Te=[],z=[];function Ct(N){if(N.samples>0){if(pt(N)===!1){const T=N.textures,te=N.width,he=N.height;let xe=i.COLOR_BUFFER_BIT;const ce=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=n.get(N),ve=T.length>1;if(ve)for(let Ze=0;Ze<T.length;Ze++)t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ze,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ze,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer);const Ke=N.texture.mipmaps;Ke&&Ke.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let Ze=0;Ze<T.length;Ze++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(xe|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(xe|=i.STENCIL_BUFFER_BIT)),ve){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ue.__webglColorRenderbuffer[Ze]);const ye=n.get(T[Ze]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ye,0)}i.blitFramebuffer(0,0,te,he,0,0,te,he,xe,i.NEAREST),l===!0&&(Te.length=0,z.length=0,Te.push(i.COLOR_ATTACHMENT0+Ze),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Te.push(ce),z.push(ce),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,z)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Te))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ve)for(let Ze=0;Ze<T.length;Ze++){t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ze,i.RENDERBUFFER,ue.__webglColorRenderbuffer[Ze]);const ye=n.get(T[Ze]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ze,i.TEXTURE_2D,ye,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&l){const T=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function ft(N){return Math.min(s.maxSamples,N.samples)}function pt(N){const T=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function je(N){const T=o.render.frame;h.get(N)!==T&&(h.set(N,T),N.update())}function Lt(N,T){const te=N.colorSpace,he=N.format,xe=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||te!==wn&&te!==os&&(vt.getTransfer(te)===At?(he!==Yn||xe!==Mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),T}function Ve(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=H,this.setTexture2D=I,this.setTexture2DArray=D,this.setTexture3D=P,this.setTextureCube=F,this.rebindTextures=Ie,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=Fe,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=pt}function MS(i,e){function t(n,s=os){let r;const o=vt.getTransfer(s);if(n===Mi)return i.UNSIGNED_BYTE;if(n===ud)return i.UNSIGNED_SHORT_4_4_4_4;if(n===dd)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Bm)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Fm)return i.BYTE;if(n===Om)return i.SHORT;if(n===_a)return i.UNSIGNED_SHORT;if(n===hd)return i.INT;if(n===Qs)return i.UNSIGNED_INT;if(n===ri)return i.FLOAT;if(n===tl)return i.HALF_FLOAT;if(n===km)return i.ALPHA;if(n===zm)return i.RGB;if(n===Yn)return i.RGBA;if(n===Ma)return i.DEPTH_COMPONENT;if(n===va)return i.DEPTH_STENCIL;if(n===fd)return i.RED;if(n===pd)return i.RED_INTEGER;if(n===Hm)return i.RG;if(n===md)return i.RG_INTEGER;if(n===gd)return i.RGBA_INTEGER;if(n===ac||n===lc||n===cc||n===hc)if(o===At)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ac)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===lc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===cc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===hc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ac)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===lc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===cc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===hc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===du||n===fu||n===pu||n===mu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===du)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===fu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===pu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===mu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===gu||n===_u||n===xu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===gu||n===_u)return o===At?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===xu)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Mu||n===vu||n===yu||n===bu||n===Su||n===Eu||n===wu||n===Tu||n===Au||n===Ru||n===Cu||n===Lu||n===Pu||n===Du)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Mu)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===vu)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===yu)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===bu)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Su)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Eu)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wu)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Tu)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Au)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ru)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Cu)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Lu)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Pu)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Du)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===uc||n===Iu||n===Nu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===uc)return o===At?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Iu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Nu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Gm||n===Uu||n===Fu||n===Ou)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===uc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Uu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ou)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===xa?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const vS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class bS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new tn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Vi({vertexShader:vS,fragmentShader:yS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Dt(new sr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class SS extends ir{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null;const _=new bS,g=t.getContextAttributes();let m=null,M=null;const v=[],x=[],R=new qe;let S=null;const E=new xn;E.viewport=new _t;const L=new xn;L.viewport=new _t;const b=[E,L],y=new Px;let C=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let oe=v[Z];return oe===void 0&&(oe=new xh,v[Z]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(Z){let oe=v[Z];return oe===void 0&&(oe=new xh,v[Z]=oe),oe.getGripSpace()},this.getHand=function(Z){let oe=v[Z];return oe===void 0&&(oe=new xh,v[Z]=oe),oe.getHandSpace()};function G(Z){const oe=x.indexOf(Z.inputSource);if(oe===-1)return;const _e=v[oe];_e!==void 0&&(_e.update(Z.inputSource,Z.frame,c||o),_e.dispatchEvent({type:Z.type,data:Z.inputSource}))}function O(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",I);for(let Z=0;Z<v.length;Z++){const oe=x[Z];oe!==null&&(x[Z]=null,v[Z].disconnect(oe))}C=null,H=null,_.reset(),e.setRenderTarget(m),f=null,d=null,u=null,s=null,M=null,pe.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",O),s.addEventListener("inputsourceschange",I),g.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(R),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,se=null,Me=null;g.depth&&(Me=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=g.stencil?va:Ma,se=g.stencil?xa:Qs);const Ce={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Ce),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new er(d.textureWidth,d.textureHeight,{format:Yn,type:Mi,depthTexture:new rg(d.textureWidth,d.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const _e={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,_e),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new er(f.framebufferWidth,f.framebufferHeight,{format:Yn,type:Mi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),pe.setContext(s),pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function I(Z){for(let oe=0;oe<Z.removed.length;oe++){const _e=Z.removed[oe],se=x.indexOf(_e);se>=0&&(x[se]=null,v[se].disconnect(_e))}for(let oe=0;oe<Z.added.length;oe++){const _e=Z.added[oe];let se=x.indexOf(_e);if(se===-1){for(let Ce=0;Ce<v.length;Ce++)if(Ce>=x.length){x.push(_e),se=Ce;break}else if(x[Ce]===null){x[Ce]=_e,se=Ce;break}if(se===-1)break}const Me=v[se];Me&&Me.connect(_e)}}const D=new V,P=new V;function F(Z,oe,_e){D.setFromMatrixPosition(oe.matrixWorld),P.setFromMatrixPosition(_e.matrixWorld);const se=D.distanceTo(P),Me=oe.projectionMatrix.elements,Ce=_e.projectionMatrix.elements,Ie=Me[14]/(Me[10]-1),dt=Me[14]/(Me[10]+1),Fe=(Me[9]+1)/Me[5],Te=(Me[9]-1)/Me[5],z=(Me[8]-1)/Me[0],Ct=(Ce[8]+1)/Ce[0],ft=Ie*z,pt=Ie*Ct,je=se/(-z+Ct),Lt=je*-z;if(oe.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Lt),Z.translateZ(je),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Me[10]===-1)Z.projectionMatrix.copy(oe.projectionMatrix),Z.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const Ve=Ie+je,N=dt+je,T=ft-Lt,te=pt+(se-Lt),he=Fe*dt/N*Ve,xe=Te*dt/N*Ve;Z.projectionMatrix.makePerspective(T,te,he,xe,Ve,N),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function $(Z,oe){oe===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(oe.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let oe=Z.near,_e=Z.far;_.texture!==null&&(_.depthNear>0&&(oe=_.depthNear),_.depthFar>0&&(_e=_.depthFar)),y.near=L.near=E.near=oe,y.far=L.far=E.far=_e,(C!==y.near||H!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),C=y.near,H=y.far),E.layers.mask=Z.layers.mask|2,L.layers.mask=Z.layers.mask|4,y.layers.mask=E.layers.mask|L.layers.mask;const se=Z.parent,Me=y.cameras;$(y,se);for(let Ce=0;Ce<Me.length;Ce++)$(Me[Ce],se);Me.length===2?F(y,E,L):y.projectionMatrix.copy(E.projectionMatrix),ee(Z,y,se)};function ee(Z,oe,_e){_e===null?Z.matrix.copy(oe.matrixWorld):(Z.matrix.copy(_e.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(oe.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(oe.projectionMatrix),Z.projectionMatrixInverse.copy(oe.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=_o*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let W=null;function Q(Z,oe){if(h=oe.getViewerPose(c||o),p=oe,h!==null){const _e=h.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let se=!1;_e.length!==y.cameras.length&&(y.cameras.length=0,se=!0);for(let Ie=0;Ie<_e.length;Ie++){const dt=_e[Ie];let Fe=null;if(f!==null)Fe=f.getViewport(dt);else{const z=u.getViewSubImage(d,dt);Fe=z.viewport,Ie===0&&(e.setRenderTargetTextures(M,z.colorTexture,z.depthStencilTexture),e.setRenderTarget(M))}let Te=b[Ie];Te===void 0&&(Te=new xn,Te.layers.enable(Ie),Te.viewport=new _t,b[Ie]=Te),Te.matrix.fromArray(dt.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(dt.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),Ie===0&&(y.matrix.copy(Te.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),se===!0&&y.cameras.push(Te)}const Me=s.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&u){const Ie=u.getDepthInformation(_e[0]);Ie&&Ie.isValid&&Ie.texture&&_.init(e,Ie,s.renderState)}}for(let _e=0;_e<v.length;_e++){const se=x[_e],Me=v[_e];se!==null&&Me!==void 0&&Me.update(se,oe,c||o)}W&&W(Z,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),p=null}const pe=new fg;pe.setAnimationLoop(Q),this.setAnimationLoop=function(Z){W=Z},this.dispose=function(){}}}const As=new yi,ES=new rt;function wS(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Zm(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,M,v,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,x)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,M,v):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===vn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===vn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const M=e.get(m),v=M.envMap,x=M.envMapRotation;v&&(g.envMap.value=v,As.copy(x),As.x*=-1,As.y*=-1,As.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(As.y*=-1,As.z*=-1),g.envMapRotation.value.setFromMatrix4(ES.makeRotationFromEuler(As)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,M,v){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*M,g.scale.value=v*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,M){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===vn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){const M=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function TS(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,v){const x=v.program;n.uniformBlockBinding(M,x)}function c(M,v){let x=s[M.id];x===void 0&&(p(M),x=h(M),s[M.id]=x,M.addEventListener("dispose",g));const R=v.program;n.updateUBOMapping(M,R);const S=e.render.frame;r[M.id]!==S&&(d(M),r[M.id]=S)}function h(M){const v=u();M.__bindingPointIndex=v;const x=i.createBuffer(),R=M.__size,S=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,R,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,x),x}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const v=s[M.id],x=M.uniforms,R=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let S=0,E=x.length;S<E;S++){const L=Array.isArray(x[S])?x[S]:[x[S]];for(let b=0,y=L.length;b<y;b++){const C=L[b];if(f(C,S,b,R)===!0){const H=C.__offset,G=Array.isArray(C.value)?C.value:[C.value];let O=0;for(let I=0;I<G.length;I++){const D=G[I],P=_(D);typeof D=="number"||typeof D=="boolean"?(C.__data[0]=D,i.bufferSubData(i.UNIFORM_BUFFER,H+O,C.__data)):D.isMatrix3?(C.__data[0]=D.elements[0],C.__data[1]=D.elements[1],C.__data[2]=D.elements[2],C.__data[3]=0,C.__data[4]=D.elements[3],C.__data[5]=D.elements[4],C.__data[6]=D.elements[5],C.__data[7]=0,C.__data[8]=D.elements[6],C.__data[9]=D.elements[7],C.__data[10]=D.elements[8],C.__data[11]=0):(D.toArray(C.__data,O),O+=P.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,v,x,R){const S=M.value,E=v+"_"+x;if(R[E]===void 0)return typeof S=="number"||typeof S=="boolean"?R[E]=S:R[E]=S.clone(),!0;{const L=R[E];if(typeof S=="number"||typeof S=="boolean"){if(L!==S)return R[E]=S,!0}else if(L.equals(S)===!1)return L.copy(S),!0}return!1}function p(M){const v=M.uniforms;let x=0;const R=16;for(let E=0,L=v.length;E<L;E++){const b=Array.isArray(v[E])?v[E]:[v[E]];for(let y=0,C=b.length;y<C;y++){const H=b[y],G=Array.isArray(H.value)?H.value:[H.value];for(let O=0,I=G.length;O<I;O++){const D=G[O],P=_(D),F=x%R,$=F%P.boundary,ee=F+$;x+=$,ee!==0&&R-ee<P.storage&&(x+=R-ee),H.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=x,x+=P.storage}}}const S=x%R;return S>0&&(x+=R-S),M.__size=x,M.__cache={},this}function _(M){const v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function g(M){const v=M.target;v.removeEventListener("dispose",g);const x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function m(){for(const M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}class AS{constructor(e={}){const{canvas:t=w0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const M=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let R=!1;this._outputColorSpace=Xt;let S=0,E=0,L=null,b=-1,y=null;const C=new _t,H=new _t;let G=null;const O=new ze(0);let I=0,D=t.width,P=t.height,F=1,$=null,ee=null;const W=new _t(0,0,D,P),Q=new _t(0,0,D,P);let pe=!1;const Z=new wd;let oe=!1,_e=!1;const se=new rt,Me=new rt,Ce=new V,Ie=new _t,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Fe=!1;function Te(){return L===null?F:1}let z=n;function Ct(A,Y){return t.getContext(A,Y)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${cd}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",Pe,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),z===null){const Y="webgl2";if(z=Ct(Y,A),z===null)throw Ct(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ft,pt,je,Lt,Ve,N,T,te,he,xe,ce,ue,ve,Ke,Ze,ye,Oe,Ye,Je,ke,ut,ot,Et,q;function Le(){ft=new Oy(z),ft.init(),ot=new MS(z,ft),pt=new Ly(z,ft,e,ot),je=new _S(z,ft),pt.reverseDepthBuffer&&d&&je.buffers.depth.setReversed(!0),Lt=new zy(z),Ve=new sS,N=new xS(z,ft,je,Ve,pt,ot,Lt),T=new Dy(x),te=new Fy(x),he=new Xx(z),Et=new Ry(z,he),xe=new By(z,he,Lt,Et),ce=new Gy(z,xe,he,Lt),Je=new Hy(z,pt,N),ye=new Py(Ve),ue=new iS(x,T,te,ft,pt,Et,ye),ve=new wS(x,Ve),Ke=new oS,Ze=new dS(ft),Ye=new Ay(x,T,te,je,ce,f,l),Oe=new mS(x,ce,pt),q=new TS(z,Lt,pt,je),ke=new Cy(z,ft,Lt),ut=new ky(z,ft,Lt),Lt.programs=ue.programs,x.capabilities=pt,x.extensions=ft,x.properties=Ve,x.renderLists=Ke,x.shadowMap=Oe,x.state=je,x.info=Lt}Le();const ae=new SS(x,z);this.xr=ae,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const A=ft.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ft.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(A){A!==void 0&&(F=A,this.setSize(D,P,!1))},this.getSize=function(A){return A.set(D,P)},this.setSize=function(A,Y,ie=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=A,P=Y,t.width=Math.floor(A*F),t.height=Math.floor(Y*F),ie===!0&&(t.style.width=A+"px",t.style.height=Y+"px"),this.setViewport(0,0,A,Y)},this.getDrawingBufferSize=function(A){return A.set(D*F,P*F).floor()},this.setDrawingBufferSize=function(A,Y,ie){D=A,P=Y,F=ie,t.width=Math.floor(A*ie),t.height=Math.floor(Y*ie),this.setViewport(0,0,A,Y)},this.getCurrentViewport=function(A){return A.copy(C)},this.getViewport=function(A){return A.copy(W)},this.setViewport=function(A,Y,ie,re){A.isVector4?W.set(A.x,A.y,A.z,A.w):W.set(A,Y,ie,re),je.viewport(C.copy(W).multiplyScalar(F).round())},this.getScissor=function(A){return A.copy(Q)},this.setScissor=function(A,Y,ie,re){A.isVector4?Q.set(A.x,A.y,A.z,A.w):Q.set(A,Y,ie,re),je.scissor(H.copy(Q).multiplyScalar(F).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(A){je.setScissorTest(pe=A)},this.setOpaqueSort=function(A){$=A},this.setTransparentSort=function(A){ee=A},this.getClearColor=function(A){return A.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor(...arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha(...arguments)},this.clear=function(A=!0,Y=!0,ie=!0){let re=0;if(A){let K=!1;if(L!==null){const be=L.texture.format;K=be===gd||be===md||be===pd}if(K){const be=L.texture.type,Re=be===Mi||be===Qs||be===_a||be===xa||be===ud||be===dd,w=Ye.getClearColor(),k=Ye.getClearAlpha(),X=w.r,j=w.g,J=w.b;Re?(p[0]=X,p[1]=j,p[2]=J,p[3]=k,z.clearBufferuiv(z.COLOR,0,p)):(_[0]=X,_[1]=j,_[2]=J,_[3]=k,z.clearBufferiv(z.COLOR,0,_))}else re|=z.COLOR_BUFFER_BIT}Y&&(re|=z.DEPTH_BUFFER_BIT),ie&&(re|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),Ye.dispose(),Ke.dispose(),Ze.dispose(),Ve.dispose(),T.dispose(),te.dispose(),ce.dispose(),Et.dispose(),q.dispose(),ue.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",ol),ae.removeEventListener("sessionend",No),zn.stop()};function de(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const A=Lt.autoReset,Y=Oe.enabled,ie=Oe.autoUpdate,re=Oe.needsUpdate,K=Oe.type;Le(),Lt.autoReset=A,Oe.enabled=Y,Oe.autoUpdate=ie,Oe.needsUpdate=re,Oe.type=K}function Ae(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function nt(A){const Y=A.target;Y.removeEventListener("dispose",nt),Ot(Y)}function Ot(A){rn(A),Ve.remove(A)}function rn(A){const Y=Ve.get(A).programs;Y!==void 0&&(Y.forEach(function(ie){ue.releaseProgram(ie)}),A.isShaderMaterial&&ue.releaseShaderCache(A))}this.renderBufferDirect=function(A,Y,ie,re,K,be){Y===null&&(Y=dt);const Re=K.isMesh&&K.matrixWorld.determinant()<0,w=al(A,Y,ie,re,K);je.setMaterial(re,Re);let k=ie.index,X=1;if(re.wireframe===!0){if(k=xe.getWireframeAttribute(ie),k===void 0)return;X=2}const j=ie.drawRange,J=ie.attributes.position;let ne=j.start*X,B=(j.start+j.count)*X;be!==null&&(ne=Math.max(ne,be.start*X),B=Math.min(B,(be.start+be.count)*X)),k!==null?(ne=Math.max(ne,0),B=Math.min(B,k.count)):J!=null&&(ne=Math.max(ne,0),B=Math.min(B,J.count));const le=B-ne;if(le<0||le===1/0)return;Et.setup(K,re,w,ie,k);let De,fe=ke;if(k!==null&&(De=he.get(k),fe=ut,fe.setIndex(De)),K.isMesh)re.wireframe===!0?(je.setLineWidth(re.wireframeLinewidth*Te()),fe.setMode(z.LINES)):fe.setMode(z.TRIANGLES);else if(K.isLine){let ge=re.linewidth;ge===void 0&&(ge=1),je.setLineWidth(ge*Te()),K.isLineSegments?fe.setMode(z.LINES):K.isLineLoop?fe.setMode(z.LINE_LOOP):fe.setMode(z.LINE_STRIP)}else K.isPoints?fe.setMode(z.POINTS):K.isSprite&&fe.setMode(z.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)dc("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),fe.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(ft.get("WEBGL_multi_draw"))fe.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const ge=K._multiDrawStarts,He=K._multiDrawCounts,Be=K._multiDrawCount,Ge=k?he.get(k).bytesPerElement:1,Ee=Ve.get(re).currentProgram.getUniforms();for(let Ne=0;Ne<Be;Ne++)Ee.setValue(z,"_gl_DrawID",Ne),fe.render(ge[Ne]/Ge,He[Ne])}else if(K.isInstancedMesh)fe.renderInstances(ne,le,K.count);else if(ie.isInstancedBufferGeometry){const ge=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,He=Math.min(ie.instanceCount,ge);fe.renderInstances(ne,le,He)}else fe.render(ne,le)};function Mt(A,Y,ie){A.transparent===!0&&A.side===Cn&&A.forceSinglePass===!1?(A.side=vn,A.needsUpdate=!0,ys(A,Y,ie),A.side=Gi,A.needsUpdate=!0,ys(A,Y,ie),A.side=Cn):ys(A,Y,ie)}this.compile=function(A,Y,ie=null){ie===null&&(ie=A),m=Ze.get(ie),m.init(Y),v.push(m),ie.traverseVisible(function(K){K.isLight&&K.layers.test(Y.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),A!==ie&&A.traverseVisible(function(K){K.isLight&&K.layers.test(Y.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),m.setupLights();const re=new Set;return A.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const be=K.material;if(be)if(Array.isArray(be))for(let Re=0;Re<be.length;Re++){const w=be[Re];Mt(w,ie,K),re.add(w)}else Mt(be,ie,K),re.add(be)}),m=v.pop(),re},this.compileAsync=function(A,Y,ie=null){const re=this.compile(A,Y,ie);return new Promise(K=>{function be(){if(re.forEach(function(Re){Ve.get(Re).currentProgram.isReady()&&re.delete(Re)}),re.size===0){K(A);return}setTimeout(be,10)}ft.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let Tn=null;function Pn(A){Tn&&Tn(A)}function ol(){zn.stop()}function No(){zn.start()}const zn=new fg;zn.setAnimationLoop(Pn),typeof self<"u"&&zn.setContext(self),this.setAnimationLoop=function(A){Tn=A,ae.setAnimationLoop(A),A===null?zn.stop():zn.start()},ae.addEventListener("sessionstart",ol),ae.addEventListener("sessionend",No),this.render=function(A,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(Y),Y=ae.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,Y,L),m=Ze.get(A,v.length),m.init(Y),v.push(m),Me.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Z.setFromProjectionMatrix(Me),_e=this.localClippingEnabled,oe=ye.init(this.clippingPlanes,_e),g=Ke.get(A,M.length),g.init(),M.push(g),ae.enabled===!0&&ae.isPresenting===!0){const be=x.xr.getDepthSensingMesh();be!==null&&vs(be,Y,-1/0,x.sortObjects)}vs(A,Y,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort($,ee),Fe=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,Fe&&Ye.addToRenderList(g,A),this.info.render.frame++,oe===!0&&ye.beginShadows();const ie=m.state.shadowsArray;Oe.render(ie,A,Y),oe===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const re=g.opaque,K=g.transmissive;if(m.setupLights(),Y.isArrayCamera){const be=Y.cameras;if(K.length>0)for(let Re=0,w=be.length;Re<w;Re++){const k=be[Re];Fo(re,K,A,k)}Fe&&Ye.render(A);for(let Re=0,w=be.length;Re<w;Re++){const k=be[Re];Uo(g,A,k,k.viewport)}}else K.length>0&&Fo(re,K,A,Y),Fe&&Ye.render(A),Uo(g,A,Y);L!==null&&E===0&&(N.updateMultisampleRenderTarget(L),N.updateRenderTargetMipmap(L)),A.isScene===!0&&A.onAfterRender(x,A,Y),Et.resetDefaultState(),b=-1,y=null,v.pop(),v.length>0?(m=v[v.length-1],oe===!0&&ye.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,M.pop(),M.length>0?g=M[M.length-1]:g=null};function vs(A,Y,ie,re){if(A.visible===!1)return;if(A.layers.test(Y.layers)){if(A.isGroup)ie=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Y);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Z.intersectsSprite(A)){re&&Ie.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Me);const Re=ce.update(A),w=A.material;w.visible&&g.push(A,Re,w,ie,Ie.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Z.intersectsObject(A))){const Re=ce.update(A),w=A.material;if(re&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ie.copy(A.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Ie.copy(Re.boundingSphere.center)),Ie.applyMatrix4(A.matrixWorld).applyMatrix4(Me)),Array.isArray(w)){const k=Re.groups;for(let X=0,j=k.length;X<j;X++){const J=k[X],ne=w[J.materialIndex];ne&&ne.visible&&g.push(A,Re,ne,ie,Ie.z,J)}}else w.visible&&g.push(A,Re,w,ie,Ie.z,null)}}const be=A.children;for(let Re=0,w=be.length;Re<w;Re++)vs(be[Re],Y,ie,re)}function Uo(A,Y,ie,re){const K=A.opaque,be=A.transmissive,Re=A.transparent;m.setupLightsView(ie),oe===!0&&ye.setGlobalState(x.clippingPlanes,ie),re&&je.viewport(C.copy(re)),K.length>0&&Xi(K,Y,ie),be.length>0&&Xi(be,Y,ie),Re.length>0&&Xi(Re,Y,ie),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function Fo(A,Y,ie,re){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[re.id]===void 0&&(m.state.transmissionRenderTarget[re.id]=new er(1,1,{generateMipmaps:!0,type:ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float")?tl:Mi,minFilter:Bi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:vt.workingColorSpace}));const be=m.state.transmissionRenderTarget[re.id],Re=re.viewport||C;be.setSize(Re.z*x.transmissionResolutionScale,Re.w*x.transmissionResolutionScale);const w=x.getRenderTarget();x.setRenderTarget(be),x.getClearColor(O),I=x.getClearAlpha(),I<1&&x.setClearColor(16777215,.5),x.clear(),Fe&&Ye.render(ie);const k=x.toneMapping;x.toneMapping=xs;const X=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),m.setupLightsView(re),oe===!0&&ye.setGlobalState(x.clippingPlanes,re),Xi(A,ie,re),N.updateMultisampleRenderTarget(be),N.updateRenderTargetMipmap(be),ft.has("WEBGL_multisampled_render_to_texture")===!1){let j=!1;for(let J=0,ne=Y.length;J<ne;J++){const B=Y[J],le=B.object,De=B.geometry,fe=B.material,ge=B.group;if(fe.side===Cn&&le.layers.test(re.layers)){const He=fe.side;fe.side=vn,fe.needsUpdate=!0,Hn(le,ie,re,De,fe,ge),fe.side=He,fe.needsUpdate=!0,j=!0}}j===!0&&(N.updateMultisampleRenderTarget(be),N.updateRenderTargetMipmap(be))}x.setRenderTarget(w),x.setClearColor(O,I),X!==void 0&&(re.viewport=X),x.toneMapping=k}function Xi(A,Y,ie){const re=Y.isScene===!0?Y.overrideMaterial:null;for(let K=0,be=A.length;K<be;K++){const Re=A[K],w=Re.object,k=Re.geometry,X=Re.group;let j=Re.material;j.allowOverride===!0&&re!==null&&(j=re),w.layers.test(ie.layers)&&Hn(w,Y,ie,k,j,X)}}function Hn(A,Y,ie,re,K,be){A.onBeforeRender(x,Y,ie,re,K,be),A.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),K.onBeforeRender(x,Y,ie,re,A,be),K.transparent===!0&&K.side===Cn&&K.forceSinglePass===!1?(K.side=vn,K.needsUpdate=!0,x.renderBufferDirect(ie,Y,re,K,A,be),K.side=Gi,K.needsUpdate=!0,x.renderBufferDirect(ie,Y,re,K,A,be),K.side=Cn):x.renderBufferDirect(ie,Y,re,K,A,be),A.onAfterRender(x,Y,ie,re,K,be)}function ys(A,Y,ie){Y.isScene!==!0&&(Y=dt);const re=Ve.get(A),K=m.state.lights,be=m.state.shadowsArray,Re=K.state.version,w=ue.getParameters(A,K.state,be,Y,ie),k=ue.getProgramCacheKey(w);let X=re.programs;re.environment=A.isMeshStandardMaterial?Y.environment:null,re.fog=Y.fog,re.envMap=(A.isMeshStandardMaterial?te:T).get(A.envMap||re.environment),re.envMapRotation=re.environment!==null&&A.envMap===null?Y.environmentRotation:A.envMapRotation,X===void 0&&(A.addEventListener("dispose",nt),X=new Map,re.programs=X);let j=X.get(k);if(j!==void 0){if(re.currentProgram===j&&re.lightsStateVersion===Re)return Bo(A,w),j}else w.uniforms=ue.getUniforms(A),A.onBeforeCompile(w,x),j=ue.acquireProgram(w,k),X.set(k,j),re.uniforms=w.uniforms;const J=re.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(J.clippingPlanes=ye.uniform),Bo(A,w),re.needsLights=cl(A),re.lightsStateVersion=Re,re.needsLights&&(J.ambientLightColor.value=K.state.ambient,J.lightProbe.value=K.state.probe,J.directionalLights.value=K.state.directional,J.directionalLightShadows.value=K.state.directionalShadow,J.spotLights.value=K.state.spot,J.spotLightShadows.value=K.state.spotShadow,J.rectAreaLights.value=K.state.rectArea,J.ltc_1.value=K.state.rectAreaLTC1,J.ltc_2.value=K.state.rectAreaLTC2,J.pointLights.value=K.state.point,J.pointLightShadows.value=K.state.pointShadow,J.hemisphereLights.value=K.state.hemi,J.directionalShadowMap.value=K.state.directionalShadowMap,J.directionalShadowMatrix.value=K.state.directionalShadowMatrix,J.spotShadowMap.value=K.state.spotShadowMap,J.spotLightMatrix.value=K.state.spotLightMatrix,J.spotLightMap.value=K.state.spotLightMap,J.pointShadowMap.value=K.state.pointShadowMap,J.pointShadowMatrix.value=K.state.pointShadowMatrix),re.currentProgram=j,re.uniformsList=null,j}function Oo(A){if(A.uniformsList===null){const Y=A.currentProgram.getUniforms();A.uniformsList=fc.seqWithValue(Y.seq,A.uniforms)}return A.uniformsList}function Bo(A,Y){const ie=Ve.get(A);ie.outputColorSpace=Y.outputColorSpace,ie.batching=Y.batching,ie.batchingColor=Y.batchingColor,ie.instancing=Y.instancing,ie.instancingColor=Y.instancingColor,ie.instancingMorph=Y.instancingMorph,ie.skinning=Y.skinning,ie.morphTargets=Y.morphTargets,ie.morphNormals=Y.morphNormals,ie.morphColors=Y.morphColors,ie.morphTargetsCount=Y.morphTargetsCount,ie.numClippingPlanes=Y.numClippingPlanes,ie.numIntersection=Y.numClipIntersection,ie.vertexAlphas=Y.vertexAlphas,ie.vertexTangents=Y.vertexTangents,ie.toneMapping=Y.toneMapping}function al(A,Y,ie,re,K){Y.isScene!==!0&&(Y=dt),N.resetTextureUnits();const be=Y.fog,Re=re.isMeshStandardMaterial?Y.environment:null,w=L===null?x.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:wn,k=(re.isMeshStandardMaterial?te:T).get(re.envMap||Re),X=re.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,j=!!ie.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),J=!!ie.morphAttributes.position,ne=!!ie.morphAttributes.normal,B=!!ie.morphAttributes.color;let le=xs;re.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(le=x.toneMapping);const De=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,fe=De!==void 0?De.length:0,ge=Ve.get(re),He=m.state.lights;if(oe===!0&&(_e===!0||A!==y)){const it=A===y&&re.id===b;ye.setState(re,A,it)}let Be=!1;re.version===ge.__version?(ge.needsLights&&ge.lightsStateVersion!==He.state.version||ge.outputColorSpace!==w||K.isBatchedMesh&&ge.batching===!1||!K.isBatchedMesh&&ge.batching===!0||K.isBatchedMesh&&ge.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&ge.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&ge.instancing===!1||!K.isInstancedMesh&&ge.instancing===!0||K.isSkinnedMesh&&ge.skinning===!1||!K.isSkinnedMesh&&ge.skinning===!0||K.isInstancedMesh&&ge.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&ge.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&ge.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&ge.instancingMorph===!1&&K.morphTexture!==null||ge.envMap!==k||re.fog===!0&&ge.fog!==be||ge.numClippingPlanes!==void 0&&(ge.numClippingPlanes!==ye.numPlanes||ge.numIntersection!==ye.numIntersection)||ge.vertexAlphas!==X||ge.vertexTangents!==j||ge.morphTargets!==J||ge.morphNormals!==ne||ge.morphColors!==B||ge.toneMapping!==le||ge.morphTargetsCount!==fe)&&(Be=!0):(Be=!0,ge.__version=re.version);let Ge=ge.currentProgram;Be===!0&&(Ge=ys(re,Y,K));let Ee=!1,Ne=!1,$e=!1;const Ue=Ge.getUniforms(),tt=ge.uniforms;if(je.useProgram(Ge.program)&&(Ee=!0,Ne=!0,$e=!0),re.id!==b&&(b=re.id,Ne=!0),Ee||y!==A){je.buffers.depth.getReversed()?(se.copy(A.projectionMatrix),A0(se),R0(se),Ue.setValue(z,"projectionMatrix",se)):Ue.setValue(z,"projectionMatrix",A.projectionMatrix),Ue.setValue(z,"viewMatrix",A.matrixWorldInverse);const me=Ue.map.cameraPosition;me!==void 0&&me.setValue(z,Ce.setFromMatrixPosition(A.matrixWorld)),pt.logarithmicDepthBuffer&&Ue.setValue(z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Ue.setValue(z,"isOrthographic",A.isOrthographicCamera===!0),y!==A&&(y=A,Ne=!0,$e=!0)}if(K.isSkinnedMesh){Ue.setOptional(z,K,"bindMatrix"),Ue.setOptional(z,K,"bindMatrixInverse");const it=K.skeleton;it&&(it.boneTexture===null&&it.computeBoneTexture(),Ue.setValue(z,"boneTexture",it.boneTexture,N))}K.isBatchedMesh&&(Ue.setOptional(z,K,"batchingTexture"),Ue.setValue(z,"batchingTexture",K._matricesTexture,N),Ue.setOptional(z,K,"batchingIdTexture"),Ue.setValue(z,"batchingIdTexture",K._indirectTexture,N),Ue.setOptional(z,K,"batchingColorTexture"),K._colorsTexture!==null&&Ue.setValue(z,"batchingColorTexture",K._colorsTexture,N));const lt=ie.morphAttributes;if((lt.position!==void 0||lt.normal!==void 0||lt.color!==void 0)&&Je.update(K,ie,Ge),(Ne||ge.receiveShadow!==K.receiveShadow)&&(ge.receiveShadow=K.receiveShadow,Ue.setValue(z,"receiveShadow",K.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(tt.envMap.value=k,tt.flipEnvMap.value=k.isCubeTexture&&k.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&Y.environment!==null&&(tt.envMapIntensity.value=Y.environmentIntensity),Ne&&(Ue.setValue(z,"toneMappingExposure",x.toneMappingExposure),ge.needsLights&&ll(tt,$e),be&&re.fog===!0&&ve.refreshFogUniforms(tt,be),ve.refreshMaterialUniforms(tt,re,F,P,m.state.transmissionRenderTarget[A.id]),fc.upload(z,Oo(ge),tt,N)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(fc.upload(z,Oo(ge),tt,N),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Ue.setValue(z,"center",K.center),Ue.setValue(z,"modelViewMatrix",K.modelViewMatrix),Ue.setValue(z,"normalMatrix",K.normalMatrix),Ue.setValue(z,"modelMatrix",K.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const it=re.uniformsGroups;for(let me=0,st=it.length;me<st;me++){const Qe=it[me];q.update(Qe,Ge),q.bind(Qe,Ge)}}return Ge}function ll(A,Y){A.ambientLightColor.needsUpdate=Y,A.lightProbe.needsUpdate=Y,A.directionalLights.needsUpdate=Y,A.directionalLightShadows.needsUpdate=Y,A.pointLights.needsUpdate=Y,A.pointLightShadows.needsUpdate=Y,A.spotLights.needsUpdate=Y,A.spotLightShadows.needsUpdate=Y,A.rectAreaLights.needsUpdate=Y,A.hemisphereLights.needsUpdate=Y}function cl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(A,Y,ie){const re=Ve.get(A);re.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),Ve.get(A.texture).__webglTexture=Y,Ve.get(A.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:ie,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Y){const ie=Ve.get(A);ie.__webglFramebuffer=Y,ie.__useDefaultFramebuffer=Y===void 0};const ko=z.createFramebuffer();this.setRenderTarget=function(A,Y=0,ie=0){L=A,S=Y,E=ie;let re=!0,K=null,be=!1,Re=!1;if(A){const k=Ve.get(A);if(k.__useDefaultFramebuffer!==void 0)je.bindFramebuffer(z.FRAMEBUFFER,null),re=!1;else if(k.__webglFramebuffer===void 0)N.setupRenderTarget(A);else if(k.__hasExternalTextures)N.rebindTextures(A,Ve.get(A.texture).__webglTexture,Ve.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const J=A.depthTexture;if(k.__boundDepthTexture!==J){if(J!==null&&Ve.has(J)&&(A.width!==J.image.width||A.height!==J.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(A)}}const X=A.texture;(X.isData3DTexture||X.isDataArrayTexture||X.isCompressedArrayTexture)&&(Re=!0);const j=Ve.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(j[Y])?K=j[Y][ie]:K=j[Y],be=!0):A.samples>0&&N.useMultisampledRTT(A)===!1?K=Ve.get(A).__webglMultisampledFramebuffer:Array.isArray(j)?K=j[ie]:K=j,C.copy(A.viewport),H.copy(A.scissor),G=A.scissorTest}else C.copy(W).multiplyScalar(F).floor(),H.copy(Q).multiplyScalar(F).floor(),G=pe;if(ie!==0&&(K=ko),je.bindFramebuffer(z.FRAMEBUFFER,K)&&re&&je.drawBuffers(A,K),je.viewport(C),je.scissor(H),je.setScissorTest(G),be){const k=Ve.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+Y,k.__webglTexture,ie)}else if(Re){const k=Ve.get(A.texture),X=Y;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,k.__webglTexture,ie,X)}else if(A!==null&&ie!==0){const k=Ve.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,k.__webglTexture,ie)}b=-1},this.readRenderTargetPixels=function(A,Y,ie,re,K,be,Re){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let w=Ve.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Re!==void 0&&(w=w[Re]),w){je.bindFramebuffer(z.FRAMEBUFFER,w);try{const k=A.texture,X=k.format,j=k.type;if(!pt.textureFormatReadable(X)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pt.textureTypeReadable(j)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=A.width-re&&ie>=0&&ie<=A.height-K&&z.readPixels(Y,ie,re,K,ot.convert(X),ot.convert(j),be)}finally{const k=L!==null?Ve.get(L).__webglFramebuffer:null;je.bindFramebuffer(z.FRAMEBUFFER,k)}}},this.readRenderTargetPixelsAsync=async function(A,Y,ie,re,K,be,Re){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let w=Ve.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Re!==void 0&&(w=w[Re]),w)if(Y>=0&&Y<=A.width-re&&ie>=0&&ie<=A.height-K){je.bindFramebuffer(z.FRAMEBUFFER,w);const k=A.texture,X=k.format,j=k.type;if(!pt.textureFormatReadable(X))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pt.textureTypeReadable(j))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const J=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,J),z.bufferData(z.PIXEL_PACK_BUFFER,be.byteLength,z.STREAM_READ),z.readPixels(Y,ie,re,K,ot.convert(X),ot.convert(j),0);const ne=L!==null?Ve.get(L).__webglFramebuffer:null;je.bindFramebuffer(z.FRAMEBUFFER,ne);const B=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await T0(z,B,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,J),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,be),z.deleteBuffer(J),z.deleteSync(B),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Y=null,ie=0){const re=Math.pow(2,-ie),K=Math.floor(A.image.width*re),be=Math.floor(A.image.height*re),Re=Y!==null?Y.x:0,w=Y!==null?Y.y:0;N.setTexture2D(A,0),z.copyTexSubImage2D(z.TEXTURE_2D,ie,0,0,Re,w,K,be),je.unbindTexture()};const zo=z.createFramebuffer(),Ho=z.createFramebuffer();this.copyTextureToTexture=function(A,Y,ie=null,re=null,K=0,be=null){be===null&&(K!==0?(dc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),be=K,K=0):be=0);let Re,w,k,X,j,J,ne,B,le;const De=A.isCompressedTexture?A.mipmaps[be]:A.image;if(ie!==null)Re=ie.max.x-ie.min.x,w=ie.max.y-ie.min.y,k=ie.isBox3?ie.max.z-ie.min.z:1,X=ie.min.x,j=ie.min.y,J=ie.isBox3?ie.min.z:0;else{const lt=Math.pow(2,-K);Re=Math.floor(De.width*lt),w=Math.floor(De.height*lt),A.isDataArrayTexture?k=De.depth:A.isData3DTexture?k=Math.floor(De.depth*lt):k=1,X=0,j=0,J=0}re!==null?(ne=re.x,B=re.y,le=re.z):(ne=0,B=0,le=0);const fe=ot.convert(Y.format),ge=ot.convert(Y.type);let He;Y.isData3DTexture?(N.setTexture3D(Y,0),He=z.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(N.setTexture2DArray(Y,0),He=z.TEXTURE_2D_ARRAY):(N.setTexture2D(Y,0),He=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,Y.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,Y.unpackAlignment);const Be=z.getParameter(z.UNPACK_ROW_LENGTH),Ge=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Ee=z.getParameter(z.UNPACK_SKIP_PIXELS),Ne=z.getParameter(z.UNPACK_SKIP_ROWS),$e=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,De.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,De.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,X),z.pixelStorei(z.UNPACK_SKIP_ROWS,j),z.pixelStorei(z.UNPACK_SKIP_IMAGES,J);const Ue=A.isDataArrayTexture||A.isData3DTexture,tt=Y.isDataArrayTexture||Y.isData3DTexture;if(A.isDepthTexture){const lt=Ve.get(A),it=Ve.get(Y),me=Ve.get(lt.__renderTarget),st=Ve.get(it.__renderTarget);je.bindFramebuffer(z.READ_FRAMEBUFFER,me.__webglFramebuffer),je.bindFramebuffer(z.DRAW_FRAMEBUFFER,st.__webglFramebuffer);for(let Qe=0;Qe<k;Qe++)Ue&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ve.get(A).__webglTexture,K,J+Qe),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ve.get(Y).__webglTexture,be,le+Qe)),z.blitFramebuffer(X,j,Re,w,ne,B,Re,w,z.DEPTH_BUFFER_BIT,z.NEAREST);je.bindFramebuffer(z.READ_FRAMEBUFFER,null),je.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(K!==0||A.isRenderTargetTexture||Ve.has(A)){const lt=Ve.get(A),it=Ve.get(Y);je.bindFramebuffer(z.READ_FRAMEBUFFER,zo),je.bindFramebuffer(z.DRAW_FRAMEBUFFER,Ho);for(let me=0;me<k;me++)Ue?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,lt.__webglTexture,K,J+me):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,lt.__webglTexture,K),tt?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,it.__webglTexture,be,le+me):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,it.__webglTexture,be),K!==0?z.blitFramebuffer(X,j,Re,w,ne,B,Re,w,z.COLOR_BUFFER_BIT,z.NEAREST):tt?z.copyTexSubImage3D(He,be,ne,B,le+me,X,j,Re,w):z.copyTexSubImage2D(He,be,ne,B,X,j,Re,w);je.bindFramebuffer(z.READ_FRAMEBUFFER,null),je.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else tt?A.isDataTexture||A.isData3DTexture?z.texSubImage3D(He,be,ne,B,le,Re,w,k,fe,ge,De.data):Y.isCompressedArrayTexture?z.compressedTexSubImage3D(He,be,ne,B,le,Re,w,k,fe,De.data):z.texSubImage3D(He,be,ne,B,le,Re,w,k,fe,ge,De):A.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,be,ne,B,Re,w,fe,ge,De.data):A.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,be,ne,B,De.width,De.height,fe,De.data):z.texSubImage2D(z.TEXTURE_2D,be,ne,B,Re,w,fe,ge,De);z.pixelStorei(z.UNPACK_ROW_LENGTH,Be),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ge),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Ee),z.pixelStorei(z.UNPACK_SKIP_ROWS,Ne),z.pixelStorei(z.UNPACK_SKIP_IMAGES,$e),be===0&&Y.generateMipmaps&&z.generateMipmap(He),je.unbindTexture()},this.copyTextureToTexture3D=function(A,Y,ie=null,re=null,K=0){return dc('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,Y,ie,re,K)},this.initRenderTarget=function(A){Ve.get(A).__webglFramebuffer===void 0&&N.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?N.setTextureCube(A,0):A.isData3DTexture?N.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?N.setTexture2DArray(A,0):N.setTexture2D(A,0),je.unbindTexture()},this.resetState=function(){S=0,E=0,L=null,je.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=vt._getDrawingBufferColorSpace(e),t.unpackColorSpace=vt._getUnpackColorSpace()}}var Gr,Vr,Wr,Bs,$r,Xr,jr,mn,$u,pc,Xu,ju,xg;class Dd{constructor(e){Se(this,mn);et(this,"renderer");et(this,"scene",new bd);et(this,"camera");Se(this,Gr);Se(this,Vr);Se(this,Wr,new Set);Se(this,Bs,new Set);Se(this,$r,new Dx(!1));Se(this,Xr,!1);Se(this,jr,null);Xe(this,Gr,e),this.renderer=new AS({antialias:!0,powerPreference:"high-performance"}),this.renderer.outputColorSpace=Xt,this.renderer.toneMapping=Im,this.renderer.toneMappingExposure=1,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Pm,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.domElement.style.display="block",e.appendChild(this.renderer.domElement),this.camera=new xn(32,1,.1,200),Xe(this,Vr,new ResizeObserver(()=>this.resize())),U(this,Vr).observe(e),this.resize()}add(e){this.scene.add(e)}addInset(e){return U(this,Bs).add(e),()=>U(this,Bs).delete(e)}setMainViewport(e){Xe(this,jr,e),gt(this,mn,pc).call(this)}onFrame(e){return U(this,Wr).add(e),()=>U(this,Wr).delete(e)}start(){U(this,Xr)||(Xe(this,Xr,!0),U(this,$r).start(),this.renderer.setAnimationLoop(()=>{const e=Math.min(U(this,$r).getDelta(),.1)*1e6,t=gt(this,mn,pc).call(this);for(const n of U(this,Wr))n(e);t&&gt(this,mn,Xu).call(this,t),this.renderer.render(this.scene,this.camera),t&&gt(this,mn,ju).call(this),U(this,Bs).size&&gt(this,mn,xg).call(this)}))}stop(){Xe(this,Xr,!1),this.renderer.setAnimationLoop(null),U(this,$r).stop()}resize(){const e=Math.max(1,U(this,Gr).clientWidth),t=Math.max(1,U(this,Gr).clientHeight);this.renderer.setSize(e,t,!0),gt(this,mn,pc).call(this)}dispose(){this.stop(),U(this,Vr).disconnect(),this.renderer.dispose(),this.renderer.domElement.remove()}}Gr=new WeakMap,Vr=new WeakMap,Wr=new WeakMap,Bs=new WeakMap,$r=new WeakMap,Xr=new WeakMap,jr=new WeakMap,mn=new WeakSet,$u=function(e){const t=this.renderer.domElement,n=t.getBoundingClientRect(),s=e.getBoundingClientRect();if(n.width<1||n.height<1)return null;const r=t.clientWidth/n.width,o=t.clientHeight/n.height,a=Math.round(s.width*r),l=Math.round(s.height*o);return a<2||l<2?null:{x:Math.round((s.left-n.left)*r),y:Math.round((n.bottom-s.bottom)*o),w:a,h:l}},pc=function(){const e=U(this,jr)?gt(this,mn,$u).call(this,U(this,jr)):null,t=this.renderer.domElement,n=e?e.w/e.h:Math.max(1,t.clientWidth)/Math.max(1,t.clientHeight);return Math.abs(this.camera.aspect-n)>1e-6&&(this.camera.aspect=n,this.camera.updateProjectionMatrix()),e},Xu=function(e){this.renderer.setViewport(e.x,e.y,e.w,e.h),this.renderer.setScissor(e.x,e.y,e.w,e.h),this.renderer.setScissorTest(!0)},ju=function(){const e=this.renderer.domElement;this.renderer.setScissorTest(!1),this.renderer.setViewport(0,0,e.clientWidth,e.clientHeight)},xg=function(){for(const e of U(this,Bs)){const t=gt(this,mn,$u).call(this,e.element);t&&(Math.abs(e.camera.aspect-t.w/t.h)>1e-6&&(e.camera.aspect=t.w/t.h,e.camera.updateProjectionMatrix()),gt(this,mn,Xu).call(this,t),this.renderer.render(e.scene,e.camera))}gt(this,mn,ju).call(this)};const bp={type:"change"},Id={type:"start"},Mg={type:"end"},Vl=new Ao,Sp=new rs,RS=Math.cos(70*xd.DEG2RAD),Qt=new V,An=2*Math.PI,Rt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Dh=1e-6;class vg extends Wx{constructor(e,t=null){super(e,t),this.state=Rt.NONE,this.target=new V,this.cursor=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Or.ROTATE,MIDDLE:Or.DOLLY,RIGHT:Or.PAN},this.touches={ONE:Ur.ROTATE,TWO:Ur.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new V,this._lastQuaternion=new vi,this._lastTargetPosition=new V,this._quat=new vi().setFromUnitVectors(e.up,new V(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Kf,this._sphericalDelta=new Kf,this._scale=1,this._panOffset=new V,this._rotateStart=new qe,this._rotateEnd=new qe,this._rotateDelta=new qe,this._panStart=new qe,this._panEnd=new qe,this._panDelta=new qe,this._dollyStart=new qe,this._dollyEnd=new qe,this._dollyDelta=new qe,this._dollyDirection=new V,this._mouse=new qe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=LS.bind(this),this._onPointerDown=CS.bind(this),this._onPointerUp=PS.bind(this),this._onContextMenu=BS.bind(this),this._onMouseWheel=NS.bind(this),this._onKeyDown=US.bind(this),this._onTouchStart=FS.bind(this),this._onTouchMove=OS.bind(this),this._onMouseDown=DS.bind(this),this._onMouseMove=IS.bind(this),this._interceptControlDown=kS.bind(this),this._interceptControlUp=zS.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(bp),this.update(),this.state=Rt.NONE}update(e=null){const t=this.object.position;Qt.copy(t).sub(this.target),Qt.applyQuaternion(this._quat),this._spherical.setFromVector3(Qt),this.autoRotate&&this.state===Rt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=An:n>Math.PI&&(n-=An),s<-Math.PI?s+=An:s>Math.PI&&(s-=An),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Qt.setFromSpherical(this._spherical),Qt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Qt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Qt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new V(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new V(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Qt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Vl.origin.copy(this.object.position),Vl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Vl.direction))<RS?this.object.lookAt(this.target):(Sp.setFromNormalAndCoplanarPoint(this.object.up,this.target),Vl.intersectPlane(Sp,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Dh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Dh||this._lastTargetPosition.distanceToSquared(this.target)>Dh?(this.dispatchEvent(bp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?An/60*this.autoRotateSpeed*e:An/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Qt.setFromMatrixColumn(t,0),Qt.multiplyScalar(-e),this._panOffset.add(Qt)}_panUp(e,t){this.screenSpacePanning===!0?Qt.setFromMatrixColumn(t,1):(Qt.setFromMatrixColumn(t,0),Qt.crossVectors(this.object.up,Qt)),Qt.multiplyScalar(e),this._panOffset.add(Qt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Qt.copy(s).sub(this.target);let r=Qt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(An*this._rotateDelta.x/t.clientHeight),this._rotateUp(An*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(An*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-An*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(An*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-An*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(An*this._rotateDelta.x/t.clientHeight),this._rotateUp(An*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new qe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function CS(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function LS(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function PS(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Mg),this.state=Rt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function DS(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Or.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Rt.DOLLY;break;case Or.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Rt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Rt.ROTATE}break;case Or.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Rt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Rt.PAN}break;default:this.state=Rt.NONE}this.state!==Rt.NONE&&this.dispatchEvent(Id)}function IS(i){switch(this.state){case Rt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Rt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Rt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function NS(i){this.enabled===!1||this.enableZoom===!1||this.state!==Rt.NONE||(i.preventDefault(),this.dispatchEvent(Id),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Mg))}function US(i){this.enabled!==!1&&this._handleKeyDown(i)}function FS(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ur.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Rt.TOUCH_ROTATE;break;case Ur.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Rt.TOUCH_PAN;break;default:this.state=Rt.NONE}break;case 2:switch(this.touches.TWO){case Ur.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Rt.TOUCH_DOLLY_PAN;break;case Ur.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Rt.TOUCH_DOLLY_ROTATE;break;default:this.state=Rt.NONE}break;default:this.state=Rt.NONE}this.state!==Rt.NONE&&this.dispatchEvent(Id)}function OS(i){switch(this._trackPointer(i),this.state){case Rt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Rt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Rt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Rt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Rt.NONE}}function BS(i){this.enabled!==!1&&i.preventDefault()}function kS(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function zS(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const HS=.55;class yg{constructor(e,t){et(this,"controls");this.controls=new vg(e,t);const n=this.controls;n.enableDamping=!0,n.dampingFactor=.06,n.rotateSpeed=.6,n.zoomSpeed=.8,n.panSpeed=.6,n.minDistance=3.2,n.maxDistance=14,n.minPolarAngle=.15,n.maxPolarAngle=Math.PI/2-.04,n.target.set(0,HS,0),e.position.set(-4.6,1.45,-4.9),n.update()}update(){this.controls.update()}dispose(){this.controls.dispose()}}const Ep=395016;function GS(i){const e=new Vu(i),t=VS(),n=e.fromScene(t,.02).texture;return e.dispose(),Sg(t),n}function bg(i,e){const t=GS(i);e.environment=t,e.background=new ze(Ep),e.fog=new qs(Ep,12,32);const n=new bt;n.name="Studio";const s=new Dt(new Bc(40,96),new nl({color:789775,roughness:.32,metalness:0,envMapIntensity:.6}));s.name="StudioFloor",s.rotation.x=-Math.PI/2,s.receiveShadow=!0,n.add(s);const r=new Dt(new sr(3.4,5.6),new hn({map:WS(),transparent:!0,depthWrite:!1,opacity:.85}));r.name="ContactShadow",r.rotation.x=-Math.PI/2,r.position.y=.002,r.renderOrder=1,n.add(r);const o=new ug(16777215,2.2);o.name="KeyLight",o.position.set(2.5,9,3.5),o.castShadow=!0,o.shadow.mapSize.set(2048,2048),o.shadow.bias=-3e-4,o.shadow.normalBias=.02;const a=o.shadow.camera;return a.left=-3.5,a.right=3.5,a.top=3.5,a.bottom=-3.5,a.near=1,a.far=20,n.add(o,o.target),{group:n,environment:t,dispose(){t.dispose(),Sg(n)}}}function VS(){const i=new bd;i.add(new Dt(new Ro(30,14,30),new hn({color:723982,side:vn})));const e=(t,n,s,r,o,a,l,c)=>{const h=new Dt(new sr(t,n),new hn({color:new ze(1,1,1).multiplyScalar(s),side:vn}));h.position.set(r,o,a),h.rotation.set(l,c,0),i.add(h)};return e(2.4,9,8,0,6.5,0,-Math.PI/2,0),e(9,.7,4.5,-8,2.4,0,0,-Math.PI/2),e(9,.7,4.5,8,2.4,0,0,Math.PI/2),e(4,1.2,1.6,0,2.2,-10,0,Math.PI),e(4,1.2,1.2,0,2.2,10,0,0),i}function WS(){const i=document.createElement("canvas");i.width=i.height=128;const e=i.getContext("2d");if(!e)throw new Error("2D canvas unavailable");const t=e.createRadialGradient(64,64,8,64,64,64);t.addColorStop(0,"rgba(0,0,0,0.9)"),t.addColorStop(.55,"rgba(0,0,0,0.45)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,128,128);const n=new sg(i);return n.colorSpace=Xt,n}function Sg(i){i.traverse(e=>{var s;const t=e;if(!t.isMesh)return;t.geometry.dispose();const n=t.material;(s=n.map)==null||s.dispose(),n.dispose()})}function $S(i){let e=i.groundY??0;i.surfaceY!==null&&i.surfaceY<=i.eyeY&&i.surfaceY>e&&(e=i.surfaceY);const t=Math.max(i.minEyeHeight,i.eyeY-e),n=Math.min(Math.max(t*.25,.3),200),s=Math.max(.1,Math.min(n,.5*i.targetDistance)),r=Math.max(12e3,i.targetDistance*6);return{near:s,far:r}}const XS=i=>i<.5?4*i*i*i:1-(-2*i+2)**3/2;var fn,qr,La,ks,Pa,Ii,Yr,$i,qu,wg,Tg;class Eg{constructor(e,t,n){Se(this,$i);et(this,"controls");Se(this,fn);Se(this,qr);Se(this,La);Se(this,ks);Se(this,Pa);Se(this,Ii,null);Se(this,Yr,0);Xe(this,fn,e),Xe(this,qr,n.groundHeightAt),Xe(this,La,n.surfaceBelow),Xe(this,ks,n.minEyeHeightMeters??1.5),Xe(this,Pa,n.transitionSeconds??1.2);const s=this.controls=new vg(e,t);s.enableDamping=!0,s.dampingFactor=.08,s.rotateSpeed=.5,s.zoomSpeed=1,s.panSpeed=1,s.screenSpacePanning=!1,s.zoomToCursor=!0,s.minDistance=3,s.maxDistance=n.maxDistanceMeters??9e3,s.minPolarAngle=0,s.maxPolarAngle=Math.PI/2+.35,s.addEventListener("start",()=>{Xe(this,Ii,null)})}setView(e,t=!0){if(!t){Xe(this,Ii,null),gt(this,$i,qu).call(this,e);return}Xe(this,Ii,{from:this.view(),to:e,t:0}),Xe(this,Yr,performance.now())}view(){const e=U(this,fn).position,t=this.controls.target;return{position:{x:e.x,y:e.y,z:e.z},target:{x:t.x,y:t.y,z:t.z}}}get transitioning(){return U(this,Ii)!==null}get clipPlanes(){return{near:U(this,fn).near,far:U(this,fn).far}}update(){const e=U(this,Ii);if(e){const t=performance.now();e.t=Math.min(1,e.t+(t-U(this,Yr))/1e3/U(this,Pa)),Xe(this,Yr,t);const n=XS(e.t),s=(r,o)=>({x:r.x+(o.x-r.x)*n,y:r.y+(o.y-r.y)*n,z:r.z+(o.z-r.z)*n});gt(this,$i,qu).call(this,{position:s(e.from.position,e.to.position),target:s(e.from.target,e.to.target)}),e.t>=1&&Xe(this,Ii,null)}else this.controls.update();gt(this,$i,wg).call(this),gt(this,$i,Tg).call(this)}dispose(){this.controls.dispose()}}fn=new WeakMap,qr=new WeakMap,La=new WeakMap,ks=new WeakMap,Pa=new WeakMap,Ii=new WeakMap,Yr=new WeakMap,$i=new WeakSet,qu=function(e){U(this,fn).position.set(e.position.x,e.position.y,e.position.z),this.controls.target.set(e.target.x,e.target.y,e.target.z),U(this,fn).up.set(0,1,0),U(this,fn).lookAt(this.controls.target),this.controls.update()},wg=function(){const e=U(this,fn).position,t=U(this,qr).call(this,e.x,e.z);t!==null&&e.y<t+U(this,ks)&&(e.y=t+U(this,ks))},Tg=function(){var s;const e=U(this,fn).position,{near:t,far:n}=$S({eyeY:e.y,groundY:U(this,qr).call(this,e.x,e.z),surfaceY:((s=U(this,La))==null?void 0:s.call(this,e.x,e.z,e.y))??null,targetDistance:e.distanceTo(jS.copy(this.controls.target)),minEyeHeight:U(this,ks)});(Math.abs(t-U(this,fn).near)>.001||n!==U(this,fn).far)&&(U(this,fn).near=t,U(this,fn).far=n,U(this,fn).updateProjectionMatrix())};const jS=new V,Yu=[.25,.5,1,2,4],es=4;function Ag(i){const{startUs:e,endUs:t}=i;if(!Number.isSafeInteger(e)||!Number.isSafeInteger(t)||e<0||t<e)throw new RangeError(`invalid replay bounds [${e}, ${t}]`);let n="paused",s=1,r=e*es;const o=()=>({status:n,timeUs:Math.floor(r/es),rate:s}),a=l=>Math.min(Math.max(l,e),t)*es;return{bounds:{startUs:e,endUs:t},get state(){return o()},play(){n==="ended"&&(r=e*es),n=r>=t*es?"ended":"playing"},pause(){n==="playing"&&(n="paused")},seek(l){if(!Number.isSafeInteger(l))throw new RangeError(`seek time must be an integer µs, got ${l}`);r=a(l),n==="ended"&&(n="paused")},setRate(l){if(!Yu.includes(l))throw new RangeError(`unsupported playback rate ${l}; use one of ${Yu.join(", ")}`);s=l},advance(l){if(!Number.isSafeInteger(l)||l<0)throw new RangeError(`wall delta must be a non-negative integer µs, got ${l}`);return n==="playing"&&(r+=l*s*es,r>=t*es&&(r=t*es,n="ended")),o()}}}class qS{constructor(e){et(this,"columns");const t=new Map,n=(e==null?void 0:e.count)??0;for(let s=0;s<n;s++){const r=e.get(s);for(const o in r.signals){const a=r.signals[o];if(!a)continue;let l=t.get(o);if(!l)l={unit:a.unit,confidence:a.confidence,t:[],v:[]},t.set(o,l);else if(l.unit!==a.unit||l.confidence!==a.confidence)throw new Error(`signal ${o} changes unit or confidence at event ${s} (${l.unit}/${l.confidence} → ${a.unit}/${a.confidence})`);l.t.push(r.timeUs),l.v.push(a.value)}}this.columns=new Map([...t.entries()].sort(([s],[r])=>s<r?-1:1).map(([s,r])=>[s,{unit:r.unit,confidence:r.confidence,timeUs:Float64Array.from(r.t),value:Float64Array.from(r.v)}]))}get names(){return[...this.columns.keys()]}get size(){let e=0;for(const t of this.columns.values())e+=t.timeUs.length;return e}at(e,t){const n=this.columns.get(e);if(!n)return;const s=YS(n.timeUs,t);if(!(s<0))return{value:n.value[s],unit:n.unit,confidence:n.confidence,updatedAtUs:n.timeUs[s]}}}function YS(i,e){let t=0,n=i.length;for(;t<n;){const s=t+n>>>1;i[s]<=e?t=s+1:n=s}return t-1}const KS={position:"hold-last",heading:"hold-last",signals:"hold-last",maxPositionGapUs:3e6,outOfRange:"empty"};function Rg(i,e={}){const t=e.policy??KS;ZS(t);const n=e.bounds??{startUs:0,endUs:i.durationUs};if(!Number.isSafeInteger(n.startUs)||!Number.isSafeInteger(n.endUs)||n.endUs<n.startUs)throw new RangeError(`invalid replay bounds [${n.startUs}, ${n.endUs}]`);const s=new qS(i.streams.vehicleStates),r=i.streams.gnssFixes,o=s.names,a=i.sessionId,l=c=>{if(!Number.isFinite(c))throw new RangeError(`sample time must be a number of µs, got ${c}`);let h=c;if(h<n.startUs||h>n.endUs){if(t.outOfRange==="empty")return{timeUs:c,withinBounds:!1,signals:{}};h=Math.min(Math.max(h,n.startUs),n.endUs)}const u={};for(const f of o){const p=s.at(f,h);p&&(u[f]=p)}let d;if(r&&r.count>0){const f=r.lowerBound(Math.floor(h)+1)-1;if(f>=0){const p=r.get(f);d={fix:p,ageUs:h-p.timeUs}}}return{timeUs:h,withinBounds:!0,signals:u,...d&&{gnss:d}}};return{sessionId:a,durationUs:n.endUs-n.startUs,bounds:{...n},availableSignals:o,hasGnss:((r==null?void 0:r.count)??0)>0,stateAt:l,sampleAt(c){const h=l(c),u=h.gnss&&h.gnss.ageUs<=t.maxPositionGapUs?h.gnss:void 0;return{timeUs:h.timeUs,signals:h.signals,...u&&{position:u.fix.position,positionAgeUs:u.ageUs},...(u==null?void 0:u.fix.speedMps)!==void 0&&{speedMps:u.fix.speedMps}}}}}function ZS(i){const e=[i.position!=="hold-last"&&`position "${i.position}"`,i.heading!=="hold-last"&&`heading "${i.heading}"`,i.signals!=="hold-last"&&`signals "${i.signals}"`].filter(Boolean);if(e.length)throw new Error(`86REPLAY implements hold-last sampling only; unsupported: ${e.join(", ")}`);if(!(i.maxPositionGapUs>=0))throw new RangeError("maxPositionGapUs must be ≥ 0")}const JS=/^\d+$/;function QS(i){return JS.test(i)?i:void 0}const wp="86sim.replay-segment",Tp=1,Ih=1;function Ap(i,e){for(let t=1;t<e.length;t++)if(e[t].timeUs<e[t-1].timeUs)throw new Error(`${i} stream is not in time order at index ${t}`);return{kind:i,count:e.length,timeAt(t){return Rp(e,t).timeUs},get(t){return Rp(e,t)},lowerBound(t){let n=0,s=e.length;for(;n<s;){const r=n+s>>>1;e[r].timeUs<t?n=r+1:s=r}return n}}}function Rp(i,e){const t=i[e];if(t===void 0)throw new RangeError(`index ${e} outside 0..${i.length-1}`);return t}function Cg(i){const e=[],t=()=>({ok:!1,issues:e.map(u=>({severity:"error",code:"invalid-replay-artifact",message:u}))});if(typeof i!="object"||i===null)return e.push("artifact is not an object"),t();const n=i;n.format!==wp&&e.push(`format is ${String(n.format)}, expected ${wp}`),n.formatVersion!==Tp&&e.push(`formatVersion ${String(n.formatVersion)} is not supported (expected ${Tp})`),n.contractsSchemaVersion!==Ih&&e.push(`contractsSchemaVersion ${String(n.contractsSchemaVersion)} differs from ${Ih}`);const s=typeof n.sessionId=="string"?QS(n.sessionId):void 0;if(s||e.push(`sessionId ${String(n.sessionId)} is not a numeric session folder name`),e.length)return t();const r=[];let o=0;for(const[u,d]of Object.entries(n.signals)){if(!d)continue;const f=d.timeUs.length;if(d.sourceRecordIndex.length!==f||d.value.length!==f){e.push(`signal ${u}: column lengths differ`);continue}for(let p=0;p<f;p++)p>0&&d.timeUs[p]<d.timeUs[p-1]&&e.push(`signal ${u}: time goes backwards at ${p}`),r.push({t:d.timeUs[p],r:d.sourceRecordIndex[p],order:o,name:u,signal:{value:d.value[p],unit:d.unit,confidence:d.confidence}});o++}if(e.length)return t();r.sort((u,d)=>u.t-d.t||u.r-d.r||u.order-d.order);const a=[];for(let u=0;u<r.length;){const{t:d,r:f}=r[u],p={};for(;u<r.length&&r[u].t===d&&r[u].r===f;u++)p[r[u].name]=r[u].signal;a.push({kind:"vehicle-state",timeUs:d,sourceRecordIndex:f,signals:p})}let l,c;if(n.gnssFixes){const u=n.gnssFixes,d=u.timeUs.length;if([u.sourceRecordIndex,u.latitudeDeg,u.longitudeDeg,u.altitudeMslM,u.speedMps,u.courseDegTrue,u.fixQuality,u.satellites,u.hdop,u.receiverUtcUs].some(p=>p.length!==d))return e.push("gnssFixes: column lengths differ"),t();l=[];for(let p=0;p<d;p++){const _=u.altitudeMslM[p];l.push({kind:"gnss-fix",timeUs:u.timeUs[p],sourceRecordIndex:u.sourceRecordIndex[p],position:{latitudeDeg:u.latitudeDeg[p],longitudeDeg:u.longitudeDeg[p],..._!=null&&{altitudeMeters:_,altitudeReference:"mean-sea-level"}},...Rr("speedMps",u.speedMps[p]),...Rr("courseDegTrue",u.courseDegTrue[p]),...Rr("fixQuality",u.fixQuality[p]),...Rr("satellites",u.satellites[p]),...Rr("hdop",u.hdop[p]),...Rr("receiverUtcUs",u.receiverUtcUs[p])})}d>0&&(c={minLatitudeDeg:Math.min(...u.latitudeDeg),maxLatitudeDeg:Math.max(...u.latitudeDeg),minLongitudeDeg:Math.min(...u.longitudeDeg),maxLongitudeDeg:Math.max(...u.longitudeDeg)})}let h;try{const u=Ap("vehicle-state",a),d=l&&Ap("gnss-fix",l),f=Math.max(u.count?u.timeAt(u.count-1):0,d!=null&&d.count?d.timeAt(d.count-1):0);h={schemaVersion:Ih,sessionId:s,timeBase:n.timeBase,durationUs:f,streams:{vehicleStates:u,...d&&{gnssFixes:d}},...c&&{bounds:c}}}catch(u){return e.push(u.message),t()}return{ok:!0,session:h,interval:n.interval,segment:n}}function Rr(i,e){return e==null?{}:{[i]:e}}const Nd={position:{east:0,north:0,up:0},headingDegTrue:0},Wl=1/3.6,eE=Math.PI/180;function tE(i,e){const t=u=>{var d;return(d=i.signals[u])==null?void 0:d.value},n=u=>{const d=t(u);return d===void 0?void 0:d>=.5},s=t("wheelSpeedFlKph"),r=t("wheelSpeedFrKph"),o=t("wheelSpeedRlKph"),a=t("wheelSpeedRrKph"),l=s!==void 0&&r!==void 0&&o!==void 0&&a!==void 0?{frontLeft:s*Wl,frontRight:r*Wl,rearLeft:o*Wl,rearRight:a*Wl}:void 0,c=t("gear"),h=c!==void 0&&Number.isInteger(c)&&c>=0&&c<=6?c:void 0;return{pose:e,...Ci("steeringWheelAngleDeg",t("steeringWheelAngleDeg")),...Ci("wheelSpeedsMps",l),...Ci("brakeLampOn",n("brakeLamp")),...Ci("turnSignalLeftOn",n("turnSignalLeft")),...Ci("turnSignalRightOn",n("turnSignalRight")),...Ci("reverseOn",n("reverse")),...Ci("daytimeRunningLightsOn",n("daytimeRunningLights")),...Ci("gear",h),...Ci("engineSpeedRpm",t("engineSpeedRpm"))}}function nE(i,e){return i/e}function iE(i,e,t){if(!(e>0))throw new RangeError("radiusM must be > 0");return i*t/e}function sE(i){return-i*eE}function Ci(i,e){return e===void 0?{}:{[i]:e}}function Cp(i,e){if(e===J_)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Bu||e===Vm){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===Bu)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class rE extends Po{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new hE(t)}),this.register(function(t){return new uE(t)}),this.register(function(t){return new vE(t)}),this.register(function(t){return new yE(t)}),this.register(function(t){return new bE(t)}),this.register(function(t){return new fE(t)}),this.register(function(t){return new pE(t)}),this.register(function(t){return new mE(t)}),this.register(function(t){return new gE(t)}),this.register(function(t){return new cE(t)}),this.register(function(t){return new _E(t)}),this.register(function(t){return new dE(t)}),this.register(function(t){return new ME(t)}),this.register(function(t){return new xE(t)}),this.register(function(t){return new aE(t)}),this.register(function(t){return new SE(t)}),this.register(function(t){return new EE(t)})}load(e,t,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=fa.extractUrlBase(e);o=fa.resolveURL(c,this.path)}else o=fa.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new hg(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Lg){try{o[mt.KHR_BINARY_GLTF]=new wE(e)}catch(u){s&&s(u);return}r=JSON.parse(o[mt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new BE(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case mt.KHR_MATERIALS_UNLIT:o[u]=new lE;break;case mt.KHR_DRACO_MESH_COMPRESSION:o[u]=new TE(r,this.dracoLoader);break;case mt.KHR_TEXTURE_TRANSFORM:o[u]=new AE;break;case mt.KHR_MESH_QUANTIZATION:o[u]=new RE;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function oE(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const mt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class aE{constructor(e){this.parser=e,this.name=mt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new ze(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],wn);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ug(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Rx(h),c.distance=u;break;case"spot":c=new Tx(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Pi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class lE{constructor(){this.name=mt.KHR_MATERIALS_UNLIT}getMaterialType(){return hn}extendParams(e,t,n){const s=[];e.color=new ze(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],wn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Xt))}return Promise.all(s)}}class cE{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class hE{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new qe(a,a)}return Promise.all(r)}}class uE{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class dE{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class fE{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new ze(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],wn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Xt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class pE{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class mE{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ze().setRGB(a[0],a[1],a[2],wn),Promise.all(r)}}class gE{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class _E{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new ze().setRGB(a[0],a[1],a[2],wn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Xt)),Promise.all(r)}}class xE{constructor(e){this.parser=e,this.name=mt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class ME{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class vE{constructor(e){this.parser=e,this.name=mt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class yE{constructor(e){this.parser=e,this.name=mt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class bE{constructor(e){this.parser=e,this.name=mt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class SE{constructor(e){this.name=mt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}}class EE{constructor(e){this.name=mt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const c of s.primitives)if(c.mode!==$n.TRIANGLES&&c.mode!==$n.TRIANGLE_STRIP&&c.mode!==$n.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const p of u){const _=new rt,g=new V,m=new vi,M=new V(1,1,1),v=new ix(p.geometry,p.material,d);for(let x=0;x<d;x++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,x),l.SCALE&&M.fromBufferAttribute(l.SCALE,x),v.setMatrixAt(x,_.compose(g,m,M));for(const x in l)if(x==="_COLOR_0"){const R=l[x];v.instanceColor=new zu(R.array,R.itemSize,R.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&p.geometry.setAttribute(x,l[x]);Bt.prototype.copy.call(v,p),this.parser.assignFinalMaterial(v),f.push(v)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Lg="glTF",ta=12,Lp={JSON:1313821514,BIN:5130562};class wE{constructor(e){this.name=mt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ta),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Lg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-ta,r=new DataView(e,ta);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Lp.JSON){const c=new Uint8Array(e,ta+o,a);this.content=n.decode(c)}else if(l===Lp.BIN){const c=ta+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class TE{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=mt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=Ku[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=Ku[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],f=zr[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(const p in f.attributes){const _=f.attributes[p],g=l[p];g!==void 0&&(_.normalized=g)}u(f)},a,c,wn,d)})})}}class AE{constructor(){this.name=mt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class RE{constructor(){this.name=mt.KHR_MESH_QUANTIZATION}}class Pg extends il{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,p=e*c,_=p-c,g=-2*f+3*d,m=f-d,M=1-g,v=m-d+u;for(let x=0;x!==a;x++){const R=o[_+x+a],S=o[_+x+l]*h,E=o[p+x+a],L=o[p+x]*h;r[x]=M*R+v*S+g*E+m*L}return r}}const CE=new vi;class LE extends Pg{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return CE.fromArray(r).normalize().toArray(r),r}}const $n={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},zr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Pp={9728:En,9729:Ln,9984:Um,9985:oc,9986:oa,9987:Bi},Dp={33071:ms,33648:Mc,10497:go},Nh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ku={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ts={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},PE={CUBICSPLINE:void 0,LINEAR:ba,STEP:ya},Uh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function DE(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new nl({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Gi})),i.DefaultMaterial}function Rs(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Pi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function IE(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(d)}if(s){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function NE(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function UE(i){let e;const t=i.extensions&&i.extensions[mt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Fh(t.attributes):e=i.indices+":"+Fh(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Fh(i.targets[n]);return e}function Fh(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Zu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function FE(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const OE=new rt;class BE{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new oE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new Ex(this.options.manager):this.textureLoader=new Lx(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new hg(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Rs(r,a,s),Pi(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())r(h,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[mt.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(fa.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=Nh[s.type],a=zr[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new xt(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Nh[s.type],c=zr[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0;let _,g;if(f&&f!==u){const m=Math.floor(d/f),M="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count;let v=t.cache.get(M);v||(_=new c(a,m*f,s.count*f/h),v=new Sd(_,f/h),t.cache.add(M,v)),g=new Fn(v,l,d%f/h,p)}else a===null?_=new c(s.count*l):_=new c(a,d,s.count*l),g=new xt(_,l,p);if(s.sparse!==void 0){const m=Nh.SCALAR,M=zr[s.sparse.indices.componentType],v=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,R=new M(o[1],v,s.sparse.count*m),S=new c(o[2],x,s.sparse.count*l);a!==null&&(g=new xt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let E=0,L=R.length;E<L;E++){const b=R[E];if(g.setX(b,S[E*l]),l>=2&&g.setY(b,S[E*l+1]),l>=3&&g.setZ(b,S[E*l+2]),l>=4&&g.setW(b,S[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=p}return g})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Pp[d.magFilter]||Ln,h.minFilter=Pp[d.minFilter]||Bi,h.wrapS=Dp[d.wrapS]||go,h.wrapT=Dp[d.wrapT]||go,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==En&&h.minFilter!==Ln,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let p=d;t.isImageBitmapLoader===!0&&(p=function(_){const g=new tn(_);g.needsUpdate=!0,d(g)}),t.load(fa.resolveURL(u,r.path),p,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),Pi(u,o),u.userData.mimeType=o.mimeType||FE(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[mt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[mt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[mt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new ig,ai.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Vt,ai.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return nl}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[mt.KHR_MATERIALS_UNLIT]){const u=s[mt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new ze(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],wn),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,Xt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Cn);const h=r.alphaMode||Uh.OPAQUE;if(h===Uh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Uh.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==hn&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new qe(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==hn&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==hn){const u=r.emissiveFactor;a.emissive=new ze().setRGB(u[0],u[1],u[2],wn)}return r.emissiveTexture!==void 0&&o!==hn&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Xt)),Promise.all(c).then(function(){const u=new o(a);return r.name&&(u.name=r.name),Pi(u,r),t.associations.set(u,{materials:e}),r.extensions&&Rs(s,u,r),u})}createUniqueName(e){const t=St.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[mt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Ip(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=UE(c),u=s[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[mt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Ip(new Nt,c,t),s[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?DE(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,p=h.length;f<p;f++){const _=h[f],g=o[f];let m;const M=c[f];if(g.mode===$n.TRIANGLES||g.mode===$n.TRIANGLE_STRIP||g.mode===$n.TRIANGLE_FAN||g.mode===void 0)m=r.isSkinnedMesh===!0?new ex(_,M):new Dt(_,M),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===$n.TRIANGLE_STRIP?m.geometry=Cp(m.geometry,Vm):g.mode===$n.TRIANGLE_FAN&&(m.geometry=Cp(m.geometry,Bu));else if(g.mode===$n.LINES)m=new Jt(_,M);else if(g.mode===$n.LINE_STRIP)m=new Td(_,M);else if(g.mode===$n.LINE_LOOP)m=new ox(_,M);else if(g.mode===$n.POINTS)m=new ax(_,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&NE(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Pi(m,r),g.extensions&&Rs(s,m,g),t.assignFinalMaterial(m),u.push(m)}for(let f=0,p=u.length;f<p;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Rs(s,u[0],r),u[0];const d=new bt;r.extensions&&Rs(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,p=u.length;f<p;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new xn(xd.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Rd(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Pi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const d=new rt;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ed(a,l)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){const f=s.channels[u],p=s.samplers[f.sampler],_=f.target,g=_.node,m=s.parameters!==void 0?s.parameters[p.input]:p.input,M=s.parameters!==void 0?s.parameters[p.output]:p.output;_.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",M)),c.push(p),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],p=u[2],_=u[3],g=u[4],m=[];for(let M=0,v=d.length;M<v;M++){const x=d[M],R=f[M],S=p[M],E=_[M],L=g[M];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const b=n._createAnimationTracks(x,R,S,E,L);if(b)for(let y=0;y<b.length;y++)m.push(b[y])}return new _x(r,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,OE)});for(let f=0,p=u.length;f<p;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new tg:c.length>1?h=new bt:c.length===1?h=c[0]:h=new Bt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Pi(h,r),r.extensions&&Rs(n,h,r),r.matrix!==void 0){const u=new rt;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new bt;n.name&&(r.name=s.createUniqueName(n.name)),Pi(r,n),n.extensions&&Rs(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of s.associations)(d instanceof ai||d instanceof tn)&&u.set(d,f);return h.traverse(d=>{const f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){const o=[],a=e.name?e.name:e.uuid,l=[];ts[r.path]===ts.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(ts[r.path]){case ts.weights:c=Mo;break;case ts.rotation:c=vo;break;case ts.translation:case ts.scale:c=yo;break;default:switch(n.itemSize){case 1:c=Mo;break;case 2:case 3:default:c=yo;break}break}const h=s.interpolation!==void 0?PE[s.interpolation]:ba,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const p=new c(l[d]+"."+ts[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(p),o.push(p)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Zu(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof vo?LE:Pg;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function kE(i,e,t){const n=e.attributes,s=new On;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new V(l[0],l[1],l[2]),new V(c[0],c[1],c[2])),a.normalized){const h=Zu(zr[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new V,l=new V;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){const _=Zu(zr[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new Bn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Ip(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=Ku[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return vt.workingColorSpace!==wn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${vt.workingColorSpace}" not supported.`),Pi(i,e),kE(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?IE(i,e.targets,t):i})}function zE(){return new kn({name:"GR86_SilverPaint",color:new ze(13488598),metalness:.85,roughness:.3,clearcoat:1,clearcoatRoughness:.03,envMapIntensity:1.5})}function HE(){return new kn({name:"GR86_WindowGlass",color:new ze(461067),metalness:0,roughness:.02,transparent:!0,opacity:.82,depthWrite:!1,side:Cn,envMapIntensity:1.4})}function Np(i,e){return new kn({name:"GR86_LensGlass",color:new ze(i),metalness:0,roughness:.03,transparent:!0,opacity:e,depthWrite:!1,side:Cn,envMapIntensity:1.2})}const GE=new Set(["Cabin_1_Met","lether","engine","grile","logos","disk","Dashboard"]);function VE(i){const e=zE(),t=HE(),n=Np(16777215,.12),s=Np(9045510,.3),r=new Map,o=new Set;i.traverse(l=>{const c=l;if(!c.isMesh)return;c.castShadow=!0,c.receiveShadow=!1;const h=Dg(c),u=d=>{switch(d.name){case"CAR_Paint":return e;case"glass":return h.startsWith("Light_")||h.startsWith("Bumper")?n:t;case"red_glass":return s;default:return a(d),d}};c.material=Array.isArray(c.material)?c.material.map(u):u(c.material)});function a(l){if(!(o.has(l)||!(l instanceof nl)))switch(o.add(l),GE.has(l.name)&&(l.transparent=!1,l.alphaTest=.5,l.depthWrite=!0),(l.name.startsWith("Lamp_")||l.name==="Light_Map")&&(l.emissive.set(16777215),l.emissiveIntensity=0,l.name.startsWith("Lamp_")&&r.set(l.name,l)),l.name){case"Pastic_Ext":l.color.set(2763565),l.metalness=0,l.roughness=.62;break;case"Black_Color_CP":l.map=null,l.color.set(328966),l.metalness=0,l.roughness=.12,l.needsUpdate=!0;break;case"mirror":l.color.set(16777215),l.metalness=1,l.roughness=.02;break;case"tyre":l.metalness=0;break;case"Dashboard":l.emissive.set(16777215),l.emissiveIntensity=.6;break;case"glass_Ligt":l.transparent=!0,l.depthWrite=!1;break}}return{paint:e,lamps:r}}function Dg(i){let e=i;for(;e!=null&&e.parent&&e.parent.name!=="GR86";)e=e.parent;return(e==null?void 0:e.name)??""}const WE="GR86",$E={frontLeft:"Wheel_FL",frontRight:"Wheel_FR",rearLeft:"Wheel_RL",rearRight:"Wheel_RR"},XE={frontLeft:"Caliper_FL",frontRight:"Caliper_FR",rearLeft:"Caliper_RL",rearRight:"Caliper_RR"},jE={headlamps:["Lamp_Headlamp_L","Lamp_Headlamp_R"],brake:["Lamp_TailBrake_L","Lamp_TailBrake_R","Lamp_BrakeCentre_C"],turnLeft:["Lamp_TurnFront_L","Lamp_TurnRear_L"],turnRight:["Lamp_TurnFront_R","Lamp_TurnRear_R"],reverse:["Lamp_Reverse_L","Lamp_Reverse_R","Lamp_Reverse_C"]},qE={headlamps:7.5,brake:10,turnLeft:7.5,turnRight:7.5,reverse:6.25},Ig=13.5,YE=Math.PI/180;class pa extends Error{constructor(){super(...arguments);et(this,"name","VehicleAssetError")}}const wc="glTF 2.0 binary (.glb) built by scripts/assets/convert_gr86.py: metres, forward −Z, up +Y, nodes GR86 > Body, Wheel_FL/FR/RL/RR, Caliper_FL/FR/RL/RR, … with Lamp_* materials";var zs,Hs,as,Dr;const Dc=class Dc{constructor(e,t){Se(this,as);et(this,"object3d");et(this,"materials");et(this,"parts");Se(this,zs);Se(this,Hs,{pose:Nd});this.object3d=e,e.updateMatrixWorld(!0),this.materials=VE(t),this.parts=KE(t),Xe(this,zs,{frontLeft:$l(t,"frontLeft",!0),frontRight:$l(t,"frontRight",!0),rearLeft:$l(t,"rearLeft",!1),rearRight:$l(t,"rearRight",!1)}),this.apply(U(this,Hs))}static async load(e,t=new rE){let n;try{n=(await t.loadAsync(e)).scene}catch(s){throw new pa(`GR86 model could not be loaded from "${e}". Expected ${wc}. (${String(s)})`)}return Dc.fromScene(n)}static fromScene(e){const t=e.getObjectByName(WE)??e;return new Dc(e,t)}get state(){return U(this,Hs)}wheelRadiusM(e){return U(this,zs)[e].radiusM}apply(e){Xe(this,Hs,e);const{pose:t}=e;this.object3d.position.set(t.position.east,t.position.up,-t.position.north),this.object3d.rotation.set(0,sE(t.headingDegTrue),0);const n=nE(e.steeringWheelAngleDeg??0,Ig)*YE;for(const s of Object.values(U(this,zs)))s.steer.rotation.y=s.steers?n:0;gt(this,as,Dr).call(this,"brake",e.brakeLampOn),gt(this,as,Dr).call(this,"turnLeft",e.turnSignalLeftOn),gt(this,as,Dr).call(this,"turnRight",e.turnSignalRightOn),gt(this,as,Dr).call(this,"reverse",e.reverseOn),gt(this,as,Dr).call(this,"headlamps",e.daytimeRunningLightsOn)}update(e){const t=U(this,Hs).wheelSpeedsMps;if(!t||!(e>0))return;const n=e/1e6;for(const[s,r]of Object.entries(U(this,zs))){const o=r.spin.rotation.x-iE(t[s],r.radiusM,n);r.spin.rotation.x=o%(2*Math.PI)}}dispose(){const e=new Set;this.object3d.traverse(t=>{const n=t;if(n.isMesh){n.geometry.dispose();for(const s of Array.isArray(n.material)?n.material:[n.material])if(!e.has(s)){e.add(s);for(const r of Object.values(s))r&&typeof r=="object"&&"isTexture"in r&&r.dispose();s.dispose()}}}),this.object3d.removeFromParent()}};zs=new WeakMap,Hs=new WeakMap,as=new WeakSet,Dr=function(e,t){const n=t?qE[e]:0;for(const s of jE[e]){const r=this.materials.lamps.get(s);r&&(r.emissiveIntensity=n)}};let Tc=Dc;function $l(i,e,t){const n=$E[e],s=i.getObjectByName(n),r=s==null?void 0:s.parent;if(!s||!r)throw new pa(`GR86 asset is missing wheel node "${n}". Expected ${wc}.`);const o=new On().setFromObject(s).getSize(new V),a=Math.max(o.y,o.z)/2;if(!(a>0))throw new pa(`Wheel node "${n}" has no geometry.`);const l=new bt;l.name=`${n}_Steer`,l.position.copy(s.position),l.quaternion.copy(s.quaternion),r.add(l),l.add(s),s.position.set(0,0,0),s.quaternion.identity();const c=XE[e],h=i.getObjectByName(c);if(!h)throw new pa(`GR86 asset is missing caliper node "${c}". Expected ${wc}.`);return l.updateMatrixWorld(!0),l.attach(h),{steer:l,spin:s,radiusM:a,steers:t}}function KE(i){const e=new Map;return i.traverse(t=>{var a;const n=t;if(!n.isMesh)return;const s=Dg(n),r=e.get(s)??{triangles:0,materials:new Set},o=n.geometry;r.triangles+=(o.index?o.index.count:((a=o.attributes.position)==null?void 0:a.count)??0)/3;for(const l of Array.isArray(n.material)?n.material:[n.material])r.materials.add(l.name);e.set(s,r)}),[...e].map(([t,n])=>({name:t,kind:ZE(t),triangles:n.triangles,materials:[...n.materials].sort()}))}function ZE(i){return i.startsWith("Wheel_")?"wheel":i.startsWith("Caliper_")?"brake":i.startsWith("Light_")?"lamp-unit":/^(Door_|Hood|Trunk|SideMirror_)/.test(i)?"movable":i==="Body_Bones"?"interior":i==="Engine"||i==="Exhaust"?"mechanical":"body"}const JE=1.609344;function QE(i,e,t=Nd){var l;const n=i.sampleAt(e),s=ew(tE(n,t)),r=(l=n.signals.vehicleSpeedKph)==null?void 0:l.value,o=s.reverseOn?"R":s.gear===void 0?void 0:s.gear===0?"N":String(s.gear),a={timeUs:n.timeUs,elapsedUs:n.timeUs-i.bounds.startUs,...r!==void 0&&{speedMph:r/JE},...s.engineSpeedRpm!==void 0&&{engineSpeedRpm:s.engineSpeedRpm},...o!==void 0&&{gear:o},...s.steeringWheelAngleDeg!==void 0&&{steeringWheelAngleDeg:s.steeringWheelAngleDeg},...s.brakeLampOn!==void 0&&{brakeLampOn:s.brakeLampOn}};return{render:s,telemetry:a}}function ew(i){const e=i.wheelSpeedsMps;return!i.reverseOn||!e?i:{...i,wheelSpeedsMps:{frontLeft:-e.frontLeft,frontRight:-e.frontRight,rearLeft:-e.rearLeft,rearRight:-e.rearRight}}}const na="—";function tw(i,e){return{speed:i.speedMph===void 0?na:i.speedMph.toFixed(1),rpm:i.engineSpeedRpm===void 0?na:String(Math.round(i.engineSpeedRpm)),gear:i.gear??na,steering:i.steeringWheelAngleDeg===void 0?na:`${i.steeringWheelAngleDeg>0?"L ":i.steeringWheelAngleDeg<0?"R ":""}${Math.abs(i.steeringWheelAngleDeg).toFixed(1)}°`,brake:i.brakeLampOn===void 0?na:i.brakeLampOn?"ON":"off",time:`${Up(i.elapsedUs)} / ${Up(e)}`}}function Up(i){const e=Math.floor(i/1e3),t=Math.floor(e/6e4),n=Math.floor(e%6e4/1e3);return`${t}:${String(n).padStart(2,"0")}.${String(e%1e3).padStart(3,"0")}`}function Ng(i,e,t){const{startUs:n,endUs:s}=e.bounds,r=s-n,o=document.createElement("aside");o.className="telemetry",o.innerHTML=`
    <h1>${t}</h1>
    <dl>
      <dt>Speed</dt><dd><b data-t="speed"></b><small>mph</small></dd>
      <dt>RPM</dt><dd><b data-t="rpm"></b></dd>
      <dt>Gear</dt><dd><b data-t="gear"></b></dd>
      <dt>Steering</dt><dd><b data-t="steering"></b></dd>
      <dt>Brake</dt><dd><b data-t="brake"></b></dd>
    </dl>`;const a=document.createElement("div");a.className="playback",a.innerHTML=`
    <button type="button" data-a="toggle" aria-label="Play">▶</button>
    <button type="button" data-a="restart" aria-label="Restart" title="Restart">↺</button>
    <input type="range" data-a="scrub" min="0" max="${Math.round(r/1e3)}" step="1" value="0" aria-label="Timeline">
    <output data-t="time"></output>
    <div class="rates" role="group" aria-label="Playback speed">
      ${Yu.map(m=>`<button type="button" data-rate="${m}">${m}×</button>`).join("")}
    </div>`,i.append(o,a);const l=new Map([...i.querySelectorAll("[data-t]")].map(m=>[m.dataset.t,m])),c=a.querySelector('[data-a="toggle"]'),h=a.querySelector('[data-a="scrub"]'),u=[...a.querySelectorAll("[data-rate]")];let d=!1,f=!1;a.addEventListener("click",m=>{const M=m.target.closest("button");M&&(M.dataset.a==="toggle"?e.state.status==="playing"?e.pause():e.play():M.dataset.a==="restart"?e.restart():M.dataset.rate&&e.setRate(Number(M.dataset.rate)))}),h.addEventListener("pointerdown",()=>{f=!0,d=e.state.status==="playing",d&&e.pause()}),h.addEventListener("input",()=>e.seek(n+Number(h.value)*1e3));const p=()=>{f&&(f=!1,d&&e.play())};h.addEventListener("pointerup",p),h.addEventListener("pointercancel",p);const _=()=>{const{status:m,rate:M,timeUs:v}=e.state,x=tw(e.frame.telemetry,r);for(const[R,S]of l)S.textContent=x[R];l.get("brake").classList.toggle("on",e.frame.telemetry.brakeLampOn===!0),c.textContent=m==="playing"?"❚❚":"▶",c.setAttribute("aria-label",m==="playing"?"Pause":"Play"),f||(h.value=String(Math.round((v-n)/1e3)));for(const R of u)R.classList.toggle("active",Number(R.dataset.rate)===M);a.dataset.status=m};_();const g=e.onChange(_);return()=>{g(),o.remove(),a.remove()}}function Ug(i,e){let t=e(),n=0,s=i.state.status==="playing",r=i.state.timeUs,o=!1;const a=()=>{t=e(),n=0},l=i.onChange(c=>{const{status:h,timeUs:u}=c.state,d=h==="playing";!o&&d&&(!s||u!==r)&&a(),s=d,r=u});return{tick(){const c=e(),h=Math.max(0,(c-t)*1e3)+n;if(t=c,i.state.status!=="playing"){n=0;return}const u=Math.floor(h);n=h-u,o=!0;try{i.tick(u)}finally{o=!1}},resync:a,dispose:l}}function Fg(i,e,t,n){const s=new Set,r=c=>QE(i,c);let o=r(e.state.timeUs);t.apply(o.render);const a=()=>{const c=e.state.timeUs;c!==o.telemetry.timeUs&&(o=r(c),t.apply(o.render));for(const h of s)h(l)},l={bounds:e.bounds,get state(){return e.state},get frame(){return o},play(){e.play(),a()},pause(){e.pause(),a()},restart(){e.seek(e.bounds.startUs),e.play(),a()},seek(c){e.seek(Math.round(c)),a()},setRate(c){e.setRate(c),a()},tick(c){const h=e.state,u=e.advance(Math.max(0,Math.round(c)));u.timeUs===h.timeUs&&u.status===h.status||(a(),u.timeUs>h.timeUs&&t.update(u.timeUs-h.timeUs))},onChange(c){return s.add(c),()=>s.delete(c)}};return l}const Cr=66e4;function nw(i,e){const t={drl:!0,brake:!1,reverse:!1,left:!1,right:!1,hazard:!1,steeringDeg:0,speedKph:0};let n=0;const s=document.createElement("aside");s.className="twin-panel",s.innerHTML=`
    <h1>GR86 <span>86TWIN</span></h1>
    <label><input type="checkbox" data-k="drl" checked> Headlamps / DRL</label>
    <label><input type="checkbox" data-k="brake"> Brake lamps</label>
    <label><input type="checkbox" data-k="left"> Turn left</label>
    <label><input type="checkbox" data-k="right"> Turn right</label>
    <label><input type="checkbox" data-k="hazard"> Hazards</label>
    <label><input type="checkbox" data-k="reverse"> Reverse</label>
    <label class="range">Steering wheel <output data-o="steeringDeg">0°</output>
      <input type="range" data-k="steeringDeg" min="-460" max="460" step="1" value="0"></label>
    <label class="range">Wheel speed <output data-o="speedKph">0 km/h</output>
      <input type="range" data-k="speedKph" min="0" max="120" step="1" value="0"></label>
    <p class="hint">Drag to orbit · scroll to zoom · right-drag to pan</p>`,i.appendChild(s),s.addEventListener("input",o=>{const a=o.target,l=a.dataset.k;if(!l)return;a.type==="checkbox"?t[l]=a.checked:t[l]=Number(a.value);const c=s.querySelector(`[data-o="${l}"]`);c&&(c.value=l==="speedKph"?`${t.speedKph} km/h`:`${t.steeringDeg}° (${(t.steeringDeg/Ig).toFixed(1)}° road)`),r()});function r(){const o=n%Cr<Cr/2,a=t.speedKph/3.6,l={pose:Nd,steeringWheelAngleDeg:t.steeringDeg,wheelSpeedsMps:{frontLeft:a,frontRight:a,rearLeft:a,rearRight:a},brakeLampOn:t.brake,turnSignalLeftOn:(t.left||t.hazard)&&o,turnSignalRightOn:(t.right||t.hazard)&&o,reverseOn:t.reverse,daytimeRunningLightsOn:t.drl};e.apply(l)}return r(),o=>{if(!(t.left||t.right||t.hazard))return;const a=n%Cr<Cr/2;n+=o,n%Cr<Cr/2!==a&&r()}}const iw=6378137,Ac=1/298.257223563,Ju=Ac*(2-Ac),Fp=Math.sqrt(Ju),Wi=Ac/(2-Ac),bo=Wi*Wi,Ys=bo*Wi,_i=Ys*Wi,si=_i*Wi,Un=si*Wi,Xl=iw/(1+Wi)*(1+bo/4+_i/64+Un/256),sw=[Wi/2-2*bo/3+5*Ys/16+41*_i/180-127*si/288+7891*Un/37800,13*bo/48-3*Ys/5+557*_i/1440+281*si/630-1983433*Un/1935360,61*Ys/240-103*_i/140+15061*si/26880+167603*Un/181440,49561*_i/161280-179*si/168+6601661*Un/7257600,34729*si/80640-3418889*Un/1995840,212378941*Un/319334400],rw=[Wi/2-2*bo/3+37*Ys/96-_i/360-81*si/512+96199*Un/604800,bo/48+Ys/15-437*_i/1440+46*si/105-1118711*Un/3870720,17*Ys/480-37*_i/840-209*si/4480+5569*Un/90720,4397*_i/161280-11*si/504-830251*Un/7257600,4583*si/161280-108847*Un/3991680,20648693*Un/638668800],Rc=Math.PI/180,Op=45;class jl extends Error{constructor(){super(...arguments);et(this,"name","AltitudeReferenceError")}}function Og(i){const e=Math.sinh(Fp*Math.atanh(Fp*i/Math.hypot(1,i)));return i*Math.hypot(1,e)-e*Math.hypot(1,i)}function ow(i){let e=i;for(let t=0;t<8;t++){const n=Og(e),s=(i-n)/Math.hypot(1,n)*((1+(1-Ju)*e*e)/((1-Ju)*Math.hypot(1,e)));if(e+=s,Math.abs(s)<=1e-15*Math.max(1,Math.abs(e)))break}return e}function Bp(i){return i>=-180&&i<180?i:((i+180)%360+360)%360-180}function ss(i,e){if(!Number.isFinite(i))throw new RangeError(`${e} must be a finite number (got ${i})`)}function kp(i){if(ss(i,"latitudeDeg"),Math.abs(i)>=90)throw new RangeError(`latitudeDeg must be inside (−90, 90) (got ${i})`)}function zp(i,e){const t=Og(Math.tan(i*Rc)),n=e*Rc,s=Math.cos(n),r=Math.atan2(t,s),o=Math.asinh(Math.sin(n)/Math.hypot(t,s));let a=r,l=o;for(let c=1;c<=6;c++){const h=sw[c-1];a+=h*Math.sin(2*c*r)*Math.cosh(2*c*o),l+=h*Math.cos(2*c*r)*Math.sinh(2*c*o)}return{xi:a,eta:l}}function aw(i,e){let t=i,n=e;for(let a=1;a<=6;a++){const l=rw[a-1];t-=l*Math.sin(2*a*i)*Math.cosh(2*a*e),n-=l*Math.cos(2*a*i)*Math.sinh(2*a*e)}const s=Math.sinh(n),r=Math.cos(t),o=Math.sin(t)/Math.hypot(s,r);return{latitudeDeg:Math.atan(ow(o))/Rc,dLonDeg:Math.atan2(s,r)/Rc}}class lw{constructor(e){et(this,"origin");et(this,"originXi");et(this,"originAltitude");if(kp(e.latitudeDeg),ss(e.longitudeDeg,"longitudeDeg"),e.altitudeMeters===void 0)throw new jl("projection origin needs altitudeMeters: it defines where up = 0");if(ss(e.altitudeMeters,"altitudeMeters"),e.altitudeReference===void 0||e.altitudeReference==="unknown")throw new jl("projection origin needs a known altitudeReference (mean-sea-level or ellipsoid)");this.origin=Object.freeze({...e}),this.originXi=zp(e.latitudeDeg,0).xi,this.originAltitude=e.altitudeMeters}toLocalHorizontal(e,t){kp(e),ss(t,"longitudeDeg");const n=Bp(t-this.origin.longitudeDeg);if(Math.abs(n)>Op)throw new RangeError(`longitude is ${n.toFixed(3)}° from the origin; the limit is ±${Op}°`);const{xi:s,eta:r}=zp(e,n);return{east:Xl*r,north:Xl*(s-this.originXi)}}toLocal(e){const{east:t,north:n}=this.toLocalHorizontal(e.latitudeDeg,e.longitudeDeg);return{east:t,north:n,up:this.upFor(e)}}toGeo(e){ss(e.east,"east"),ss(e.north,"north"),ss(e.up,"up");const{latitudeDeg:t,dLonDeg:n}=aw(e.north/Xl+this.originXi,e.east/Xl);return{latitudeDeg:t,longitudeDeg:Bp(this.origin.longitudeDeg+n),altitudeMeters:this.originAltitude+e.up,altitudeReference:this.origin.altitudeReference}}upFor(e){if(e.altitudeMeters===void 0)throw new jl("position has no altitude; use toLocalHorizontal and take up from elsewhere");if(ss(e.altitudeMeters,"altitudeMeters"),e.altitudeReference!==this.origin.altitudeReference)throw new jl(`altitude reference "${e.altitudeReference??"missing"}" does not match the projection's "${this.origin.altitudeReference}"; convert it explicitly first`);return e.altitudeMeters-this.originAltitude}}function Bg(i){return new lw(i)}const Oh="86sim.region-manifest",Bh=1;class cw extends Error{constructor(){super(...arguments);et(this,"name","RegionManifestError")}}const hw=/^[a-z0-9]+(?:-[a-z0-9]+)*$/,uw=["vector","elevation","imagery","other"],dw=["planned","available"],fw=["mean-sea-level","ellipsoid"];function Zt(i,e){throw new cw(`${i}: ${e}`)}function Lr(i,e){return(typeof i!="object"||i===null||Array.isArray(i))&&Zt(e,"must be an object"),i}function Ir(i,e,t){const n=i[e];return(typeof n!="string"||n.length===0)&&Zt(`${t}.${e}`,"must be a non-empty string"),n}function ns(i,e,t){e in i||Zt(`${t}.${e}`,"is required (use null for a placeholder)");const n=i[e];return n===null?null:((typeof n!="string"||n.length===0)&&Zt(`${t}.${e}`,"must be a non-empty string or null"),n)}function Cs(i,e,t,n,s){const r=i[e];return(typeof r!="number"||!Number.isFinite(r)||r<n||r>s)&&Zt(`${t}.${e}`,`must be a number in [${n}, ${s}]`),r}function kh(i,e,t,n){const s=i[e];return(typeof s!="string"||!n.includes(s))&&Zt(`${t}.${e}`,`must be one of ${n.join(", ")}`),s}function zh(i,e,t){const n=Ir(i,e,t);return hw.test(n)||Zt(`${t}.${e}`,"must be lower-case kebab-case"),n}function Hp(i,e,t){const n=i[e];return Array.isArray(n)||Zt(`${t}.${e}`,"must be an array"),n}function pw(i){const e=Lr(i,"manifest");e.schema!==Oh&&Zt("manifest.schema",`must be "${Oh}"`),e.schemaVersion!==Bh&&Zt("manifest.schemaVersion",`must be ${Bh}`);const t=Lr(e.bounds,"manifest.bounds"),n={minLatitudeDeg:Cs(t,"minLatitudeDeg","manifest.bounds",-89,89),maxLatitudeDeg:Cs(t,"maxLatitudeDeg","manifest.bounds",-89,89),minLongitudeDeg:Cs(t,"minLongitudeDeg","manifest.bounds",-180,180),maxLongitudeDeg:Cs(t,"maxLongitudeDeg","manifest.bounds",-180,180)};n.minLatitudeDeg<n.maxLatitudeDeg||Zt("manifest.bounds","minLatitudeDeg must be below maxLatitudeDeg"),n.minLongitudeDeg<n.maxLongitudeDeg||Zt("manifest.bounds","minLongitudeDeg must be below maxLongitudeDeg");const s=Lr(e.origin,"manifest.origin"),r={latitudeDeg:Cs(s,"latitudeDeg","manifest.origin",-89,89),longitudeDeg:Cs(s,"longitudeDeg","manifest.origin",-180,180),altitudeMeters:Cs(s,"altitudeMeters","manifest.origin",-1e3,1e4),altitudeReference:kh(s,"altitudeReference","manifest.origin",fw)};(r.latitudeDeg<n.minLatitudeDeg||r.latitudeDeg>n.maxLatitudeDeg||r.longitudeDeg<n.minLongitudeDeg||r.longitudeDeg>n.maxLongitudeDeg)&&Zt("manifest.origin","must lie inside bounds");const o=Lr(e.projection,"manifest.projection");o.method!=="transverse-mercator"&&Zt("manifest.projection.method",'must be "transverse-mercator"'),o.ellipsoid!=="WGS84"&&Zt("manifest.projection.ellipsoid",'must be "WGS84"');const a=Hp(e,"sources","manifest").map((d,f)=>{const p=`manifest.sources[${f}]`,_=Lr(d,p);return Object.freeze({id:zh(_,"id",p),kind:kh(_,"kind",p,uw),provider:Ir(_,"provider",p),product:ns(_,"product",p),license:ns(_,"license",p),url:ns(_,"url",p),retrieved:ns(_,"retrieved",p),horizontalDatum:ns(_,"horizontalDatum",p),verticalDatum:ns(_,"verticalDatum",p),notes:ns(_,"notes",p)})}),l=new Set;for(const d of a)l.has(d.id)&&Zt("manifest.sources",`duplicate id "${d.id}"`),l.add(d.id);const c=new Set,h=new Set,u=Hp(e,"assets","manifest").map((d,f)=>{const p=`manifest.assets[${f}]`,_=Lr(d,p),g=Object.freeze({id:zh(_,"id",p),path:Ir(_,"path",p),sourceId:Ir(_,"sourceId",p),status:kh(_,"status",p,dw),format:ns(_,"format",p),description:Ir(_,"description",p)});return(g.path.startsWith("/")||g.path.includes("\\")||g.path.split("/").some(m=>m===".."||m==="."||m===""))&&Zt(`${p}.path`,"must be a plain relative path inside the region directory"),l.has(g.sourceId)||Zt(`${p}.sourceId`,`unknown source "${g.sourceId}"`),c.has(g.id)&&Zt("manifest.assets",`duplicate id "${g.id}"`),h.has(g.path)&&Zt("manifest.assets",`duplicate path "${g.path}"`),c.add(g.id),h.add(g.path),g});return Object.freeze({schema:Oh,schemaVersion:Bh,id:zh(e,"id","manifest"),name:Ir(e,"name","manifest"),bounds:Object.freeze(n),origin:Object.freeze(r),projection:Object.freeze({method:"transverse-mercator",ellipsoid:"WGS84"}),sources:Object.freeze(a),assets:Object.freeze(u)})}function mw(i){return{id:i.id,bounds:i.bounds,origin:i.origin}}const gw="86sim.world-roads",_w="86sim.world-buildings",xw="86sim.world-water",Mw="86sim.world-trees",vw="86sim.world-greens",Gp=1,Cc=1e5,yw=["park","grass","wood","scrub","cemetery"],kg=i=>{var e,t;return((t=(e=i.attributes)==null?void 0:e.otherTags)==null?void 0:t.highway)==="street_lamp"};class bw extends Error{constructor(){super(...arguments);et(this,"name","GeoAssetError")}}const It=(i,e)=>{throw new bw(`${i}: ${e}`)};function Mn(i,e){return(typeof i!="object"||i===null||Array.isArray(i))&&It(e,"must be an object"),i}function Ea(i,e){return Array.isArray(i)||It(e,"must be an array"),i}function jt(i,e,t){return e in i||It(`${t}.${e}`,"is required (use null when not applicable)"),i[e]}function li(i,e,t){const n=jt(i,e,t);return(typeof n!="string"||n.length===0)&&It(`${t}.${e}`,"must be a non-empty string"),n}function sl(i,e,t){const n=jt(i,e,t);return n===null?null:((typeof n!="string"||n.length===0)&&It(`${t}.${e}`,"must be a non-empty string or null"),n)}function la(i,e,t){const n=jt(i,e,t);return(typeof n!="number"||!Number.isFinite(n))&&It(`${t}.${e}`,"must be a finite number"),n}function Ks(i,e,t,{integer:n=!1,min:s=-1/0}={}){const r=jt(i,e,t);return r===null?null:((typeof r!="number"||!Number.isFinite(r)||n&&!Number.isInteger(r)||r<s)&&It(`${t}.${e}`,`must be ${n?"an integer":"a finite number"}${s>-1/0?` ≥ ${s}`:""} or null`),r)}function Ms(i,e,t){const n=jt(i,e,t);return typeof n!="boolean"&&It(`${t}.${e}`,"must be a boolean"),n}function mc(i,e,t,n,s){const r=jt(i,e,t);return r===null&&s?null:(n.includes(r)||It(`${t}.${e}`,`must be one of ${n.join(", ")}${s?" or null":""}`),r)}function zg(i,e,t){const n=Ea(i,e);n.length%2!==0&&It(e,"must hold [east, north] pairs"),n.length/2<t&&It(e,`needs at least ${t} vertices`);for(let s=0;s<n.length;s++){const r=n[s];(typeof r!="number"||!Number.isFinite(r)||Math.abs(r)>Cc)&&It(`${e}[${s}]`,`must be a finite coordinate within ±${Cc} m`)}return n}function Ud(i,e){const t=Ea(i,e);return t.length===0&&It(e,"needs at least one polygon"),t.map((n,s)=>{const r=Ea(n,`${e}[${s}]`);return r.length===0&&It(`${e}[${s}]`,"needs an exterior ring"),r.map((o,a)=>zg(o,`${e}[${s}][${a}]`,3))})}const Sw=/^[wr][1-9][0-9]*$/;function Gc(i,e){const t=li(i,"id",e);return Sw.test(t)||It(`${e}.id`,`"${t}" is not an OSM key ("w<way id>" or "r<relation id>")`),t}function Hg(i,e){return i[0]!==e[0]?i[0]<e[0]?-1:1:i.length!==e.length?i.length-e.length:i<e?-1:i>e?1:0}function Ew(i,e){for(let t=1;t<i.length;t++)Hg(i[t-1],i[t])>=0&&It(`${e}[${t}]`,`ids must be unique and sorted (${i[t-1]} then ${i[t]})`)}function rl(i,e){const t=Mn(i,"$");t.schema!==e&&It("$.schema",`must be "${e}"`),t.schemaVersion!==Gp&&It("$.schemaVersion",`must be ${Gp}`),li(t,"regionId","$");const n=Mn(jt(t,"frame","$"),"$.frame");(n.kind!=="local-enu-horizontal"||n.units!=="metre"||n.projection!=="transverse-mercator/WGS84"||JSON.stringify(n.axes)!=='["east","north"]')&&It("$.frame","must be local-enu-horizontal metres, axes [east, north], transverse-mercator/WGS84"),la(n,"precisionMeters","$.frame")>0||It("$.frame.precisionMeters","must be > 0");const s=Mn(jt(n,"origin","$.frame"),"$.frame.origin");la(s,"latitudeDeg","$.frame.origin"),la(s,"longitudeDeg","$.frame.origin");const r=Mn(jt(t,"source","$"),"$.source");for(const l of["sourceId","attribution","license","licenseUrl","product","snapshot","file","md5"])li(r,l,"$.source");const o=Mn(jt(r,"selection","$.source"),"$.source.selection");for(const l of Object.keys(o))li(o,l,"$.source.selection");const a=Mn(jt(r,"clip","$.source"),"$.source.clip");for(const l of["minLatitudeDeg","maxLatitudeDeg","minLongitudeDeg","maxLongitudeDeg"])la(a,l,"$.source.clip");return t}const ww=["drivable","pedestrian","cycle","transit","other"];function Tw(i,e){const t=Mn(i,e);Gc(t,e),li(t,"highway",e),mc(t,"category",e,ww,!1);for(const r of["name","ref","bridge","tunnel","surface","access","motorVehicle","junction"])sl(t,r,e);mc(t,"oneway",e,["forward","backward","no"],!0);for(const r of["lanes","lanesForward","lanesBackward"])Ks(t,r,e,{integer:!0,min:0});Ks(t,"layer",e,{integer:!0});const n=jt(t,"maxSpeed",e);if(n!==null){const r=Mn(n,`${e}.maxSpeed`);li(r,"raw",`${e}.maxSpeed`),Ks(r,"value",`${e}.maxSpeed`,{min:0}),mc(r,"unit",`${e}.maxSpeed`,["mph","km/h"],!0),Ms(r,"unitImplied",`${e}.maxSpeed`)}Ms(t,"clipped",e);const s=Ea(jt(t,"lines",e),`${e}.lines`);return s.length===0&&It(`${e}.lines`,"needs at least one polyline"),s.forEach((r,o)=>zg(r,`${e}.lines[${o}]`,2)),t}function Vp(i,e){const t=Mn(i,e);Gc(t,e),li(t,"building",e);for(const n of["name","roofShape"])sl(t,n,e);for(const n of["heightMeters","minHeightMeters","levels","minLevel"])Ks(t,n,e,{min:0});return Ms(t,"clipped",e),Ms(t,"repaired",e),Ud(jt(t,"polygons",e),`${e}.polygons`),t}function Aw(i,e){const t=Mn(i,e);Gc(t,e);for(const o of["water","name"])sl(t,o,e);Ms(t,"clipped",e),Ms(t,"repaired",e);const n=Mn(jt(t,"sourceHoles",e),`${e}.sourceHoles`),s=Ks(n,"total",`${e}.sourceHoles`,{integer:!0,min:0}),r=Ks(n,"insideClip",`${e}.sourceHoles`,{integer:!0,min:0});return(s===null||r===null||r>s)&&It(`${e}.sourceHoles`,"needs integers with insideClip ≤ total"),Ud(jt(t,"polygons",e),`${e}.polygons`),t}function Rw(i,e){const t=Mn(i,e);return Gc(t,e),mc(t,"kind",e,yw,!1),/^[a-z_]+=[a-z_]+$/.test(li(t,"tag",e))||It(`${e}.tag`,"must be key=value"),sl(t,"name",e),Ms(t,"clipped",e),Ms(t,"repaired",e),Ud(jt(t,"polygons",e),`${e}.polygons`),t}function So(i,e,t){const n=Ea(jt(i,e,"$"),`$.${e}`).map((s,r)=>t(s,`$.${e}[${r}]`));return Ew(n.map(s=>s.id),`$.${e}`),n}function Cw(i){const e=rl(i,gw);return So(e,"roads",Tw),e}function Lw(i){const e=rl(i,_w),t=So(e,"buildings",Vp),n=So(e,"parts",Vp),s=new Set(t.map(r=>r.id));return n.forEach((r,o)=>{s.has(r.id)&&It(`$.parts[${o}].id`,`"${r.id}" is also a building`)}),e}function Pw(i){const e=rl(i,xw);return So(e,"water",Aw),e}const Dw=/^n[1-9][0-9]*$/;function Iw(i,e,t){const n=jt(i,e,t);if(n===null)return;const s=Mn(n,`${t}.${e}`);li(s,"raw",`${t}.${e}`),Ks(s,"meters",`${t}.${e}`,{min:0})}const Nw=["name","genus","genusCommon","species","speciesCommon","taxon","leafType","leafCycle","denotation"];function Uw(i,e){const t=Mn(i,e),n=li(t,"id",e);Dw.test(n)||It(`${e}.id`,`"${n}" is not an OSM node key ("n<node id>")`);for(const r of["east","north"]){const o=la(t,r,e);Math.abs(o)>Cc&&It(`${e}.${r}`,`must be within ±${Cc} m`)}const s=jt(t,"attributes",e);if(s!==null){const r=`${e}.attributes`,o=Mn(s,r);for(const l of Nw)sl(o,l,r);for(const l of["height","circumference","crownDiameter"])Iw(o,l,r);const a=jt(o,"otherTags",r);if(a!==null){const l=Mn(a,`${r}.otherTags`),c=Object.keys(l);c.length===0&&It(`${r}.otherTags`,"must be null when empty");for(const h of c)li(l,h,`${r}.otherTags`)}}return t}function Fw(i){const e=rl(i,Mw);return So(e,"trees",Uw),e}function Ow(i){const e=rl(i,vw);return So(e,"greens",Rw),e}const Bw="86sim.world-terrain",kw=1;class Os extends Error{constructor(){super(...arguments);et(this,"name","TerrainAssetError")}}const Nn=(i,e)=>{throw new Os(`${i}: ${e}`)};function is(i,e){return(typeof i!="object"||i===null||Array.isArray(i))&&Nn(e,"must be an object"),i}function ti(i,e,t){const n=i[e];return(typeof n!="number"||!Number.isFinite(n))&&Nn(`${t}.${e}`,"must be a finite number"),n}function ql(i,e,t,n){const s=ti(i,e,t);return(!Number.isInteger(s)||s<n)&&Nn(`${t}.${e}`,`must be an integer ≥ ${n}`),s}function bn(i,e,t,n){i[e]!==n&&Nn(`${t}.${e}`,`must be ${JSON.stringify(n)}`)}function Gg(i){const e=is(i,"$");bn(e,"schema","$",Bw),bn(e,"schemaVersion","$",kw),(typeof e.regionId!="string"||!e.regionId)&&Nn("$.regionId","must be a non-empty string");const t=is(e.frame,"$.frame");bn(t,"kind","$.frame","local-enu-horizontal"),bn(t,"units","$.frame","metre"),bn(t,"projection","$.frame","transverse-mercator/WGS84");const n=is(t.origin,"$.frame.origin");ti(n,"latitudeDeg","$.frame.origin"),ti(n,"longitudeDeg","$.frame.origin");const s=is(e.grid,"$.grid"),r=ql(s,"columns","$.grid",2),o=ql(s,"rows","$.grid",2),a=ti(s,"spacingMeters","$.grid");a>0||Nn("$.grid.spacingMeters","must be > 0");const l=ti(s,"west","$.grid"),c=ti(s,"east","$.grid"),h=ti(s,"south","$.grid"),u=ti(s,"north","$.grid"),d=1e-6*a;Math.abs(l+(r-1)*a-c)>d&&Nn("$.grid.east","must equal west + (columns − 1)·spacing"),Math.abs(u-(o-1)*a-h)>d&&Nn("$.grid.south","must equal north − (rows − 1)·spacing"),bn(s,"rowOrder","$.grid","north-to-south"),bn(s,"columnOrder","$.grid","west-to-east");const f=is(e.data,"$.data");(typeof f.path!="string"||!/^[^/\\.][^/\\]*$/.test(f.path))&&Nn("$.data.path","must be a file name in the same directory"),bn(f,"encoding","$.data","float32-le"),ql(f,"byteLength","$.data",0)!==o*r*4&&Nn("$.data.byteLength","must be rows × columns × 4"),(typeof f.sha256!="string"||!/^[0-9a-f]{64}$/.test(f.sha256))&&Nn("$.data.sha256","must be a hex SHA-256"),bn(f,"noData","$.data","NaN"),ql(f,"noDataCount","$.data",0);const p=is(e.heights,"$.heights");bn(p,"units","$.heights","metre"),bn(p,"verticalDatum","$.heights","NAVD88"),bn(p,"verticalCrs","$.heights","EPSG:5703"),bn(p,"verticalTransformation","$.heights","none"),typeof p.surface!="string"&&Nn("$.heights.surface","must be a string"),ti(p,"minMeters","$.heights")>ti(p,"maxMeters","$.heights")&&Nn("$.heights","minMeters must be ≤ maxMeters");const _=is(p.anchor,"$.heights.anchor");bn(_,"east","$.heights.anchor",0),bn(_,"north","$.heights.anchor",0),ti(_,"heightNavd88Meters","$.heights.anchor");for(const g of["source","coordinateOperation","validation"])is(e[g],`$.${g}`);return e}const zw=Object.freeze({available:!1,reason:"outside-grid"}),Hw=Object.freeze({available:!1,reason:"no-data"});function Gw(i){if(i.byteLength%4!==0)throw new Os("terrain data length is not a multiple of 4");const e=new DataView(i.buffer,i.byteOffset,i.byteLength),t=new Float32Array(i.byteLength/4);for(let n=0;n<t.length;n++)t[n]=e.getFloat32(n*4,!0);return t}class Fd{constructor(e,t){et(this,"metadata");et(this,"anchorHeightNavd88Meters");et(this,"heights");et(this,"g");const n=e.grid;if(t.length!==n.rows*n.columns)throw new Os(`terrain has ${t.length} values; the grid needs ${n.rows} × ${n.columns}`);let s=0,r=1/0,o=-1/0;for(const a of t){if(Number.isNaN(a)){s++;continue}if(!Number.isFinite(a))throw new Os("terrain contains an infinite height");a<r&&(r=a),a>o&&(o=a)}if(s!==e.data.noDataCount)throw new Os(`terrain has ${s} NaN nodes; metadata says ${e.data.noDataCount}`);if(s<t.length&&(Math.fround(e.heights.minMeters)!==r||Math.fround(e.heights.maxMeters)!==o))throw new Os(`terrain range ${r}…${o} does not match the metadata`);this.metadata=e,this.g=n,this.heights=t,this.anchorHeightNavd88Meters=e.heights.anchor.heightNavd88Meters}static fromAsset(e,t){const n=Gg(e);if(t.byteLength!==n.data.byteLength)throw new Os(`terrain data is ${t.byteLength} bytes; expected ${n.data.byteLength}`);return new Fd(n,Gw(t))}nodeHeight(e,t){if(!Number.isInteger(e)||!Number.isInteger(t)||e<0||t<0||e>=this.g.rows||t>=this.g.columns)throw new RangeError(`node (${e}, ${t}) is outside the ${this.g.rows} × ${this.g.columns} grid`);const n=this.heights[e*this.g.columns+t];return Number.isNaN(n)?null:n}nodePosition(e,t){return{east:this.g.west+t*this.g.spacingMeters,north:this.g.north-e*this.g.spacingMeters}}sample(e,t){if(!Number.isFinite(e)||!Number.isFinite(t))throw new RangeError(`east/north must be finite (got ${e}, ${t})`);const n=this.g;if(e<n.west||e>n.east||t<n.south||t>n.north)return zw;const s=(e-n.west)/n.spacingMeters,r=(n.north-t)/n.spacingMeters,o=Math.min(Math.floor(s),n.columns-2),a=Math.min(Math.floor(r),n.rows-2),l=s-o,c=r-a,h=a*n.columns+o,u=[[this.heights[h],(1-l)*(1-c)],[this.heights[h+1],l*(1-c)],[this.heights[h+n.columns],(1-l)*c],[this.heights[h+n.columns+1],l*c]];let d=0;for(const[f,p]of u)if(p!==0){if(Number.isNaN(f))return Hw;d+=f*p}return{available:!0,heightNavd88Meters:d,localY:d-this.anchorHeightNavd88Meters}}}function Vw(i){const e=i.metadata.grid,{columns:t,rows:n,spacingMeters:s}=e,r=i.anchorHeightNavd88Meters,o=t*n,a=(t-1)*(n-1),l=o+a,c=new Float32Array(l*3),h=new Uint8Array(l);let u=1/0,d=-1/0;for(let p=0;p<n;p++)for(let _=0;_<t;_++){const g=p*t+_,m=i.nodeHeight(p,_),M=m===null?0:m-r;m!==null&&(h[g]=1,M<u&&(u=M),M>d&&(d=M)),c[g*3]=e.west+_*s,c[g*3+1]=e.north-p*s,c[g*3+2]=M}const f=[];for(let p=0;p<n-1;p++)for(let _=0;_<t-1;_++){const g=p*t+_,m=g+1,M=g+t,v=M+1,x=o+p*(t-1)+_,R=e.west+(_+.5)*s,S=e.north-(p+.5)*s;if(c[x*3]=R,c[x*3+1]=S,!(h[g]&&h[m]&&h[M]&&h[v]))continue;const E=i.sample(R,S);E.available&&(h[x]=1,c[x*3+2]=E.localY,f.push(g,M,x,M,v,x,v,m,x,m,g,x))}return{columns:t,rows:n,nodeCount:o,spacingMeters:s,anchorHeightNavd88Meters:r,positions:c,indices:Uint32Array.from(f),validVertex:h,minUp:Number.isFinite(u)?u:0,maxUp:Number.isFinite(d)?d:0}}const Wp={standard:3.35,motorway:3.65},Ww={motorway:7.3,motorway_link:4.5,trunk:7.3,trunk_link:4.5,primary:10,primary_link:4.5,secondary:9,secondary_link:4.5,tertiary:8,tertiary_link:4.5,residential:7,unclassified:6.5,living_street:5.5,service:4,busway:3.7,construction:6,track:3,pedestrian:6,footway:2,path:1.8,steps:2,elevator:2,cycleway:2.2},$w={vehicle:6,path:2},Vg=new Set(["no","low_water_crossing"]),Xw=new Set(["no","building_passage"]),Od={maxSegmentMeters:2.5,liftMeters:{vehicle:.3,path:.25},miterLimit:2,capSegments:10,capTurnDeg:40};function Wg(i,e,t,n,s,r,o=1){const a=i.length/2,l=Math.max(0,e-1),c=Math.min(a-1,e+1);let h=i[2*c]-i[2*l],u=i[2*c+1]-i[2*l+1];const d=Math.hypot(h,u)||1;h/=d,u/=d;const f=i[2*e],p=i[2*e+1],_=s[e],g=s[l]??_,M=((s[c]??_)-g)/d,v=(t-f)*h+(n-p)*u;let x=_+M*v;if(o>0){const S=(t-f)*-u+(n-p)*h,E=r(f,p),L=r(f-u*S,p+h*S);E!==null&&L!==null&&(x+=o*(L-E))}const R=r(t,n);return R!==null&&x<R+$p?R+$p:x}const $p=.1,Hh=.15;var ls,Da;class $g{constructor(e){Se(this,ls,new Map);Se(this,Da,new Map);for(const t of e){const n=`${t.roadId}\0${t.line}`;let s=U(this,ls).get(n);s||U(this,ls).set(n,s=[]),s.push(t)}}has(e,t){return U(this,ls).has(`${e}\0${t}`)}upAt(e,t,n,s,r){for(const o of U(this,ls).get(`${e.id}\0${t}`)??[]){if(n<o.alongStart-1e-6||n>o.alongEnd+1e-6)continue;let a=U(this,Da).get(o);if(!a){const f=e.lines[t],p=[0];for(let _=2;_<f.length;_+=2)p.push(p.at(-1)+Math.hypot(f[_]-f[_-2],f[_+1]-f[_-1]));a=o.points.map(([_,g])=>{let m=1;for(;m<p.length-1&&p[m]<_;)m++;const M=Math.min(1,Math.max(0,(_-p[m-1])/(p[m]-p[m-1]||1)));return(s(f[2*m-2]+(f[2*m]-f[2*m-2])*M,f[2*m-1]+(f[2*m+1]-f[2*m-1])*M)??0)+r+g}),U(this,Da).set(o,a)}const l=o.points;let c=0,h=l.length-1;for(;h-c>1;){const f=c+h>>1;l[f][0]<=n?c=f:h=f}const u=l[c][0],d=l[h][0];return d>u?a[c]+(a[h]-a[c])*Math.min(1,Math.max(0,(n-u)/(d-u))):a[c]}return null}at(e,t,n){for(const s of U(this,ls).get(`${e}\0${t}`)??[]){if(n<s.alongStart-1e-6||n>s.alongEnd+1e-6)continue;const r=s.points;let o=0,a=r.length-1;for(;a-o>1;){const d=o+a>>1;r[d][0]<=n?o=d:a=d}const[l,c]=r[o],[h,u]=r[a];return h>l?c+(u-c)*Math.min(1,Math.max(0,(n-l)/(h-l))):c}return 0}}ls=new WeakMap,Da=new WeakMap;function Oi(i){return i.category==="pedestrian"||i.category==="cycle"?"path":"vehicle"}function Zs(i){return i.bridge!==null&&!Vg.has(i.bridge)?"bridge":i.tunnel!==null&&!Xw.has(i.tunnel)?"tunnel":"surface"}function gc(i){const e=Oi(i);if(e==="vehicle"){const t=i.lanes??(i.lanesForward!==null&&i.lanesBackward!==null?i.lanesForward+i.lanesBackward:null);if(t!==null&&t>0){const n=/^(motorway|trunk)/.test(i.highway)?Wp.motorway:Wp.standard;return{widthMeters:t*n,source:"lanes"}}}return{widthMeters:Ww[i.highway]??$w[e],source:"default"}}function jw(i,e,t){const n=e.metadata.grid,s=n.spacingMeters,r=[],o=i.length/2;for(let a=0;a<o-1;a++){const l=i[2*a],c=i[2*a+1],h=i[2*a+2],u=i[2*a+3];r.push(l,c);const d=Math.hypot(h-l,u-c);if(d===0)continue;const f=(l-n.west)/s,p=(h-n.west)/s,_=(n.north-c)/s,g=(n.north-u)/s,m=[];Yl(f,p,m),Yl(_,g,m),Yl(f+_,p+g,m),Yl(f-_,p-g,m);const M=Math.ceil(d/t);for(let x=1;x<M;x++)m.push(x/M);m.sort((x,R)=>x-R);let v=0;for(const x of m)x-v<1e-6||1-x<1e-6||(r.push(l+(h-l)*x,c+(u-c)*x),v=x)}return r.push(i[i.length-2],i[i.length-1]),r}function Yl(i,e,t){if(i===e)return;const n=Math.min(i,e),s=Math.max(i,e);for(let r=Math.floor(n)+1;r<s;r++)t.push((r-i)/(e-i));Number.isInteger(n)&&n!==i&&n!==e&&t.push((n-i)/(e-i))}class Lc{constructor(){et(this,"p",[]);et(this,"i",[])}vertex(e,t,n){return this.p.push(e,t,n),this.p.length/3-1}tri(e,t,n){this.i.push(e,t,n)}build(){return{positions:Float32Array.from(this.p),indices:Uint32Array.from(this.i)}}}function qw(i,e,t=Od,n=[]){const s={vehicle:new Lc,path:new Lc},r=n.length?new $g(n):null,o=new Set,a={vehicle:new Map,path:new Map},l=[],c=[],h={p:[],i:[]},u=(b,y,C)=>{const H=new Map,G=(D,P)=>D<P?`${D},${P}`:`${P},${D}`,O=b.i.length/3;for(let D=y;D<O;D++)for(let P=0;P<3;P++){const F=b.i[3*D+P],$=b.i[3*D+(P+1)%3];H.set(G(F,$),(H.get(G(F,$))??0)+1)}const I=D=>S(b.p[3*D],b.p[3*D+1]);for(let D=y;D<O;D++)for(let P=0;P<3;P++){const F=b.i[3*D+P],$=b.i[3*D+(P+1)%3];if(H.get(G(F,$))!==1)continue;const ee=I(F),W=I($);if(ee===null||W===null||b.p[3*F+2]-(ee+C)<=Hh&&b.p[3*$+2]-(W+C)<=Hh)continue;const Q=h.p.length/3;h.p.push(b.p[3*F],b.p[3*F+1],b.p[3*F+2],b.p[3*F],b.p[3*F+1],ee,b.p[3*$],b.p[3*$+1],W,b.p[3*$],b.p[3*$+1],b.p[3*$+2]),h.i.push(Q,Q+1,Q+2,Q,Q+2,Q+3)}},d={vehicle:[],path:[]},f={bridge:[],tunnel:[]},p={surface:0,bridge:0,tunnel:0},_={vehicle:0,path:0};let g=0,m=0,M=0,v=0,x=0,R=0;const S=(b,y)=>{const C=e.sample(b,y);return C.available?C.localY:null};for(const b of i){const y=Zs(b),C=Oi(b);if(p[y]++,_[C]++,y!=="surface"){for(const $ of b.lines){const ee=$.length/2,W=S($[0],$[1]),Q=S($[$.length-2],$[$.length-1]);if(W===null||Q===null){R++;continue}let pe=0;for(let se=1;se<ee;se++)pe+=Math.hypot($[2*se]-$[2*se-2],$[2*se+1]-$[2*se-1]);let Z=0;const oe=f[y],_e=t.liftMeters[C];for(let se=1;se<ee;se++){const Me=$[2*se-2],Ce=$[2*se-1],Ie=$[2*se],dt=$[2*se+1],Fe=W+(Q-W)*(pe>0?Z/pe:0);Z+=Math.hypot(Ie-Me,dt-Ce);const Te=W+(Q-W)*(pe>0?Z/pe:1);oe.push(Me,Ce,Fe+_e,Ie,dt,Te+_e)}}continue}const{widthMeters:H,source:G}=gc(b);G==="lanes"?g++:m++;const O=H/2,I=t.liftMeters[C],D=s[C],P=d[C],F=D.i.length/3;b.lines.forEach(($,ee)=>{M+=$.length/2;const W=jw($,e,t.maxSegmentMeters),Q=W.length/2;v+=Q;const pe=new Float64Array(Q);if(r!=null&&r.has(b.id,ee)){let Fe=0;for(let Te=0;Te<Q;Te++){Te>0&&(Fe+=Math.hypot(W[2*Te]-W[2*Te-2],W[2*Te+1]-W[2*Te-1]));const z=S(W[2*Te],W[2*Te+1]),Ct=z===null?null:r.upAt(b,ee,Fe,S,I);pe[Te]=Ct===null||z===null?0:Math.max(0,Ct-(z+I))}o.add(b.id)}const Z=new Array(Q);for(let Fe=0;Fe<Q;Fe++){const Te=S(W[2*Fe],W[2*Fe+1]);Z[Fe]=Te===null?null:Te+I+pe[Fe],Te===null&&x++}for(let Fe=0;Fe<Q-1;Fe++){const Te=Z[Fe],z=Z[Fe+1];Te!=null&&z!=null&&P.push(W[2*Fe],W[2*Fe+1],Te+.05,W[2*Fe+2],W[2*Fe+3],z+.05)}const oe=D.i.length/3,_e=D.p.length/3;let se=[],Me=[],Ce=-2;const Ie=()=>{se.length>=2&&c.push({id:b.id,surfaceClass:C,line:ee,halfWidth:O,left:Uint32Array.from(se),right:Uint32Array.from(Me)}),se=[],Me=[]},dt=Xg(D,W,O,Z,(Fe,Te,z)=>{if(pe[Fe]>0&&Z[Fe]!=null)return Wg(W,Fe,Te,z,Z,S);const Ct=S(Te,z);return Ct===null?null:Ct+I+pe[Fe]},t,(Fe,Te,z)=>{Fe!==Ce+1&&Ie(),se.push(Te),Me.push(z),Ce=Fe});if(Ie(),x+=dt.pointsWithoutHeight,pe.some(Fe=>Fe>0)){const Fe=a[C];for(let Te=_e;Te<D.p.length/3;Te++){const z=S(D.p[3*Te],D.p[3*Te+1]);Fe.set(Te,z===null?0:Math.max(0,D.p[3*Te+2]-(z+I)))}}pe.some(Fe=>Fe>Hh)&&u(D,oe,I)}),l.push({id:b.id,surfaceClass:C,firstTriangle:F,triangleCount:D.i.length/3-F})}const E={vehicle:s.vehicle.build(),path:s.path.build()},L=b=>{const y=new Float32Array(E[b].positions.length/3);for(const[C,H]of a[b])y[C]=H;return y};return{surfaces:E,features:l,liftedRoads:o,vertexLift:{vehicle:L("vehicle"),path:L("path")},skirts:{positions:Float32Array.from(h.p),indices:Uint32Array.from(h.i)},sides:c,centerlines:{vehicle:{positions:Float32Array.from(d.vehicle)},path:{positions:Float32Array.from(d.path)}},structures:{bridge:{positions:Float32Array.from(f.bridge)},tunnel:{positions:Float32Array.from(f.tunnel)}},stats:{roads:i.length,byTreatment:p,byClass:_,widthFromLanes:g,widthDefault:m,sourceVertices:M,drapedVertices:v,pointsWithoutTerrain:x,undrawnStructureLines:R,triangles:{vehicle:E.vehicle.indices.length/3,path:E.path.indices.length/3}}}}function Xg(i,e,t,n,s,r,o){const a=e.length/2,l=Math.cos(r.capTurnDeg*Math.PI/180);let c=0;const h=[];for(let f=0;f<a-1;f++){const p=e[2*f+2]-e[2*f],_=e[2*f+3]-e[2*f+1],g=Math.hypot(p,_);h.push(p/g,_/g)}let u=-1,d=-1;for(let f=0;f<a;f++){const p=e[2*f],_=e[2*f+1];let g,m,M=1,v=!1;if(f===0)g=h[0],m=h[1];else if(f===a-1)g=h[2*f-2],m=h[2*f-1];else{const C=h[2*f-2],H=h[2*f-1],G=h[2*f],O=h[2*f+1];v=C*G+H*O<l;const D=C+G,P=H+O,F=Math.hypot(D,P);F<1e-9?(g=C,m=H):(g=D/F,m=P/F,M=Math.min(1/Math.max(g*C+m*H,1e-9),r.miterLimit))}const x=-m*t*M,R=g*t*M,S=s(f,p+x,_+R),E=s(f,p-x,_-R),L=n[f];if(S===null||E===null||L==null){c+=(S===null?1:0)+(E===null?1:0),u=d=-1;continue}const b=i.vertex(p+x,_+R,S),y=i.vertex(p-x,_-R,E);u>=0&&(i.tri(u,d,b),i.tri(b,d,y)),u=b,d=y,o==null||o(f,b,y),(f===0||f===a-1||v)&&Yw(i,p,_,t,L,r.capSegments,(C,H)=>s(f,C,H))}return{pointsWithoutHeight:c}}function Yw(i,e,t,n,s,r,o){const a=i.vertex(e,t,s);let l=-1,c=-1;for(let h=0;h<r;h++){const u=2*Math.PI*h/r,d=e+n*Math.cos(u),f=t+n*Math.sin(u),p=o(d,f),_=p===null?-1:i.vertex(d,f,p);h===0&&(l=_),c>=0&&_>=0&&i.tri(a,c,_),c=_}c>=0&&l>=0&&i.tri(a,c,l)}function Kw(i,e,t){const n=new Map;for(const p of i.features)p.triangleCount>0&&n.set(p.id,{id:p.id,mesh:i.surfaces[p.surfaceClass],cls:p.surfaceClass,deck:!1,first:p.firstTriangle,count:p.triangleCount,lift:i.vertexLift[p.surfaceClass]});for(const p of(e==null?void 0:e.features)??[])p.status==="deck"&&p.triangleCount>0&&n.set(p.id,{id:p.id,mesh:e.surfaces[p.surfaceClass],cls:p.surfaceClass,deck:!0,first:p.firstTriangle,count:p.triangleCount,lift:null});const s=(p,_)=>{const g=t.sample(p,_);return g.available?g.localY:null};let r=0;const o=(p,_,g,m,M=null)=>{const v=p.positions,x=p.indices,R=x[3*_]*3,S=x[3*_+1]*3,E=x[3*_+2]*3,L=v[R],b=v[R+1],y=v[S],C=v[S+1],H=v[E],G=v[E+1];if(g<Math.min(L,y,H)-1e-6||g>Math.max(L,y,H)+1e-6||m<Math.min(b,C,G)-1e-6||m>Math.max(b,C,G)+1e-6)return null;const O=(C-G)*(L-H)+(H-y)*(b-G);if(Math.abs(O)<1e-12)return null;const I=((C-G)*(g-H)+(H-y)*(m-G))/O,D=((G-b)*(g-H)+(L-H)*(m-G))/O,P=1-I-D;return I<-1e-7||D<-1e-7||P<-1e-7?null:(r=M?I*M[R/3]+D*M[S/3]+P*M[E/3]:0,I*v[R+2]+D*v[S+2]+P*v[E+2])},a=(p,_,g,m,M)=>{const v=s(m,M),x=p.deck?"deck":g>.02?"approach":"ground";return{id:p.id,surface:x,surfaceClass:p.cls,up:_,liftMeters:p.deck?null:g,terrainUp:v,estimated:x!=="ground"}},l=20;let c=null;const h=[...n.values()],u=(p,_)=>(p+32768)*65536+(_+32768),d=()=>c||(c=new Map,h.forEach((p,_)=>{const g=p.mesh.positions,m=p.mesh.indices;for(let M=p.first;M<p.first+p.count;M++){let v=1/0,x=1/0,R=-1/0,S=-1/0;for(let E=0;E<3;E++){const L=m[3*M+E]*3;v=Math.min(v,g[L]),R=Math.max(R,g[L]),x=Math.min(x,g[L+1]),S=Math.max(S,g[L+1])}for(let E=Math.floor(v/l);E<=Math.floor(R/l);E++)for(let L=Math.floor(x/l);L<=Math.floor(S/l);L++){const b=u(E,L);let y=c.get(b);y||c.set(b,y=[]),y.push(_,M)}}}),c),f=new Map(h.map((p,_)=>[p.id,_]));return{heightAt(p,_,g){const m=n.get(p);if(!m)return null;const M=f.get(p),v=d().get(u(Math.floor(_/l),Math.floor(g/l)))??[];let x=null;for(let R=0;R<v.length;R+=2){if(v[R]!==M)continue;const S=o(m.mesh,v[R+1],_,g,m.lift);S!==null&&(x===null||S>x[0])&&(x=[S,r])}return x===null?null:a(m,x[0],x[1],_,g)},surfacesAt(p,_){const g=d().get(u(Math.floor(p/l),Math.floor(_/l)))??[],m=new Map;for(let M=0;M<g.length;M+=2){const v=g[M],x=o(h[v].mesh,g[M+1],p,_,h[v].lift);x!==null&&(!m.has(v)||x>m.get(v)[0])&&m.set(v,[x,r])}return[...m].map(([M,[v,x]])=>a(h[M],v,x,p,_)).sort((M,v)=>M.up-v.up||(M.id<v.id?-1:1))}}}function Zw(i){let e=0;const t=i.length/2;for(let n=0;n<t;n++){const s=(n+1)%t;e+=i[2*n]*i[2*s+1]-i[2*s]*i[2*n+1]}return e/2}function Kl(i,e,t,n,s,r){const o=(t-i)*(r-e)-(n-e)*(s-i);return o>0?1:o<0?-1:0}function Zl(i,e,t,n,s,r){return Math.min(i,t)<=s&&s<=Math.max(i,t)&&Math.min(e,n)<=r&&r<=Math.max(e,n)}function jg(i,e,t,n,s,r,o,a){const l=Kl(i,e,t,n,s,r),c=Kl(i,e,t,n,o,a),h=Kl(s,r,o,a,i,e),u=Kl(s,r,o,a,t,n);return l!==c&&h!==u?!0:l===0&&Zl(i,e,t,n,s,r)||c===0&&Zl(i,e,t,n,o,a)||h===0&&Zl(s,r,o,a,i,e)||u===0&&Zl(s,r,o,a,t,n)}function Eo(i,e,t){let n=!1;const s=t.length/2;for(let r=0,o=s-1;r<s;o=r++){const a=t[2*r],l=t[2*r+1],c=t[2*o],h=t[2*o+1];l>e!=h>e&&i<(c-a)*(e-l)/(h-l)+a&&(n=!n)}return n}const qg={nodeSpacingMeters:5,minLengthMeters:.5,waterClearanceMeters:{vehicle:6,path:3.5},roadClearanceMeters:{vehicle:5.5,path:3.5},minimumWaterClearanceMeters:1,minimumRoadClearanceMeters:2.5,liftGrade:{vehicle:.06,path:.08},maxGrade:{vehicle:.15,path:.25},transitionMeters:15,smoothingPasses:32,approachMeters:40,approachGradeBlend:.08,approachCorrectionMeters:50,maxApproachLiftMeters:6,approachLiftGrade:{vehicle:.08,path:.1},approachCrossingMarginMeters:3,approachSpringMeters:12,crossingReachMeters:40,deckThicknessMeters:.8,road:Od};function Gh(i){return i.layer??1}function Xp(i){return i.bridge===null?"none":Vg.has(i.bridge)?"at-grade":Zs(i)==="bridge"?"deck":"none"}var Kr,Ia,Qu;class Vc{constructor(e){Se(this,Ia);Se(this,Kr,new Map);et(this,"cell");this.cell=e}add(e,t,n,s,r){const o=this.cell;for(let a=Math.floor(t/o);a<=Math.floor(s/o);a++)for(let l=Math.floor(n/o);l<=Math.floor(r/o);l++){const c=gt(this,Ia,Qu).call(this,a,l);let h=U(this,Kr).get(c);h||U(this,Kr).set(c,h=[]),h.push(e)}}query(e,t,n,s,r){const o=this.cell,a=[];r.clear();for(let l=Math.floor(e/o);l<=Math.floor(n/o);l++)for(let c=Math.floor(t/o);c<=Math.floor(s/o);c++)for(const h of U(this,Kr).get(gt(this,Ia,Qu).call(this,l,c))??[])r.has(h)||(r.add(h),a.push(h));return a}}Kr=new WeakMap,Ia=new WeakSet,Qu=function(e,t){return(e+32768)*65536+(t+32768)};var Na,Ic;class Jw{constructor(e){Se(this,Na,new Vc(20));Se(this,Ic,new Set);et(this,"mesh");this.mesh=e;const t=e.positions,n=e.indices;for(let s=0;s<n.length/3;s++){const r=n[3*s]*3,o=n[3*s+1]*3,a=n[3*s+2]*3;U(this,Na).add(s,Math.min(t[r],t[o],t[a]),Math.min(t[r+1],t[o+1],t[a+1]),Math.max(t[r],t[o],t[a]),Math.max(t[r+1],t[o+1],t[a+1]))}}at(e,t){const n=this.mesh.positions,s=this.mesh.indices;let r=null;for(const o of U(this,Na).query(e,t,e,t,U(this,Ic))){const a=s[3*o]*3,l=s[3*o+1]*3,c=s[3*o+2]*3,h=n[a],u=n[a+1],d=n[l],f=n[l+1],p=n[c],_=n[c+1],g=(f-_)*(h-p)+(p-d)*(u-_);if(Math.abs(g)<1e-12)continue;const m=((f-_)*(e-p)+(p-d)*(t-_))/g,M=((_-u)*(e-p)+(h-p)*(t-_))/g,v=1-m-M;if(m<-1e-9||M<-1e-9||v<-1e-9)continue;const x=m*n[a+2]+M*n[l+2]+v*n[c+2];(r===null||x>r)&&(r=x)}return r}}Na=new WeakMap,Ic=new WeakMap;class ca{constructor(){et(this,"k",[]);et(this,"v",[])}get size(){return this.k.length}push(e,t){const n=this.k,s=this.v;let r=n.length;for(n.push(e),s.push(t);r>0;){const o=r-1>>1;if(n[o]<=e)break;n[r]=n[o],s[r]=s[o],r=o}n[r]=e,s[r]=t}pop(){const e=this.k,t=this.v,n=[e[0],t[0]],s=e.pop(),r=t.pop();if(e.length>0){let o=0;for(;;){const a=2*o+1,l=a+1;let c=o,h=s;if(a<e.length&&e[a]<h&&(c=a,h=e[a]),l<e.length&&e[l]<h&&(c=l,h=e[l]),c===o)break;e[o]=e[c],t[o]=t[c],o=c}e[o]=s,t[o]=r}return n}}const Wn=1e9,Qw=4;function eT(i,e,t,n={}){const s=globalThis.performance?performance.now():Date.now(),r=new Set;let o=jp(i,e,t,n,r);for(let l=0;l<2&&(n.approachCorrectionMeters??qg.approachCorrectionMeters)>0;l++){const c=r.size;for(const h of o.features){if(h.fallbackReason!=="grade"&&h.fallbackReason!=="clearance")continue;const u=i.find(d=>d.id===h.id);for(const d of u.lines)for(let f=0;f<d.length;f+=2)r.add(`${d[f]},${d[f+1]}`)}if(r.size===c)break;o=jp(i,e,t,n,r)}const a=globalThis.performance?performance.now():Date.now();return{...o,stats:{...o.stats,milliseconds:a-s,approach:{...o.stats.approach,keptAtDrapedHeight:r.size}}}}function jp(i,e,t,n,s){var re,K,be,Re;const r={...qg,...n},o=globalThis.performance?performance.now():Date.now(),a=r.road.liftMeters,l=(w,k)=>{const X=e.sample(w,k);return X.available?X.localY:null},c=t&&t.indices.length>0?new Jw(t):null,h=(w,k)=>`${w},${k}`,u=new Set,d=[];for(const w of i){const k=Xp(w);k==="deck"?u.add(w.id):k==="at-grade"&&d.push(w.id)}const f=new Map;for(const w of i){const k=u.has(w.id);for(const X of w.lines)for(let j=0;j<X.length;j+=2){const J=h(X[j],X[j+1]);let ne=f.get(J);ne||f.set(J,ne=[]),ne.some(B=>B.road===w)||ne.push({road:w,deck:k})}}const p=[],_=[],g=new Map,m=(w,k,X)=>{if(X){const j=h(w,k),J=g.get(j);if(J!==void 0)return J;g.set(j,p.length)}return p.push(w),_.push(k),p.length-1},M=[],v=[],x=w=>{let k=0;for(let X=2;X<w.length;X+=2)k+=Math.hypot(w[X]-w[X-2],w[X+1]-w[X-1]);return k};for(const w of i){if(!u.has(w.id))continue;const k=Oi(w),{widthMeters:X}=gc(w),j=[],J=[];let ne=null;w.lines.reduce((B,le)=>B+x(le),0)<r.minLengthMeters&&(ne="degenerate");for(const[B,le]of w.lines.entries()){const De=le.length/2;for(const Ge of[0,De-1]){const Ee=(f.get(h(le[2*Ge],le[2*Ge+1]))??[]).filter(Ne=>Ne.road!==w);j.push(Ee.some(Ne=>!Ne.deck)?"ground":Ee.length>0?"bridge":w.clipped?"edge":"landing")}if(ne)continue;const fe=[],ge=[],He=[];let Be=0;for(let Ge=0;Ge<De;Ge++){const Ee=le[2*Ge],Ne=le[2*Ge+1];if(Ge>0){const $e=le[2*Ge-2],Ue=le[2*Ge-1],tt=Math.hypot(Ee-$e,Ne-Ue);if(tt===0)continue;const lt=Math.ceil(tt/r.nodeSpacingMeters);for(let it=1;it<lt;it++){const me=it/lt;fe.push(m($e+(Ee-$e)*me,Ue+(Ne-Ue)*me,!1)),He.push($e+(Ee-$e)*me,Ue+(Ne-Ue)*me),ge.push(Be+tt*me)}Be+=tt}fe.push(m(Ee,Ne,!0)),He.push(Ee,Ne),ge.push(Be)}fe.length>=2&&J.push({nodes:fe,along:ge,flat:He,line:B})}if(!ne&&J.length===0&&(ne="degenerate"),!ne)for(const B of J)for(let le=0;le<B.flat.length&&!ne;le+=2)l(B.flat[le],B.flat[le+1])===null&&(ne="no-terrain");M.push({road:w,cls:k,hw:X/2,lines:ne?[]:J,ends:j,component:-1,reason:ne})}const R=tT(i,M,f,u,l,r,m,h,a,s),S=p.length,E=new Uint8Array(S),L=new Float64Array(S),b=new Float64Array(S).fill(-Wn),y=new Float64Array(S).fill(-Wn),C=new Float64Array(S).fill(-Wn),H=new Float64Array(S).fill(Wn),G=new Uint8Array(S),O=new Float64Array(S).fill(NaN),I=new Uint8Array(S),D=new Set,P=new Float64Array(S).fill(NaN),F=Array.from({length:S},()=>[]),$=(w,k,X)=>{F[w].push(k,X),F[k].push(w,X)},ee=new Uint8Array(S),W=new Float64Array(S).fill(Wn);for(const[w,k]of R.nodes)ee[w]=1,L[w]=k.terrainUp,k.lift>=a.vehicle&&(E[w]=1),W[w]=k.terrainUp+k.lift,k.fixed&&(O[w]=k.terrainUp+k.lift);for(const[w,k,X]of R.edges)$(w,k,X);const Q=new Float64Array(S);for(const w of R.nodes.keys()){const k=F[w];let X=0;for(let j=1;j<k.length;j+=2)X+=k[j];X=k.length?X/(k.length/2):r.nodeSpacingMeters,Q[w]=X/(r.approachSpringMeters*r.approachSpringMeters)}const pe=M.filter(w=>!w.reason);for(const w of pe)for(const k of w.lines){const X=k.nodes.length;for(let j=0;j<X;j++){const J=k.nodes[j];w.cls==="vehicle"&&(E[J]=1),j>0&&$(k.nodes[j-1],J,k.along[j]-k.along[j-1]);const ne=Math.max(0,j-1),B=Math.min(X-1,j+1);let le=k.flat[2*B]-k.flat[2*ne],De=k.flat[2*B+1]-k.flat[2*ne+1];const fe=Math.hypot(le,De)||1;le/=fe,De/=fe;const ge=k.flat[2*j],He=k.flat[2*j+1],Be=-De*w.hw,Ge=le*w.hw;L[J]=l(ge,He);const Ee=l(ge+Be,He+Ge),Ne=l(ge-Be,He-Ge);if(b[J]=Math.max(b[J],Ee??-Wn,Ne??-Wn),c){let $e=-Wn;for(const[Ue,tt]of[[ge,He],[ge+Be,He+Ge],[ge-Be,He-Ge]]){const lt=c.at(Ue,tt);lt!==null&&lt>$e&&($e=lt)}$e>-Wn&&(P[J]=Math.max(Number.isNaN(P[J])?-Wn:P[J],$e))}}}const Z=w=>E[w]?a.vehicle:a.path;for(const w of pe)for(const k of w.lines)for(let X=0;X<k.nodes.length;X++){const j=k.nodes[X],J=f.get(h(k.flat[2*X],k.flat[2*X+1]));!J||!g.has(h(k.flat[2*X],k.flat[2*X+1]))||g.get(h(k.flat[2*X],k.flat[2*X+1]))!==j||J.some(ne=>!ne.deck)&&(I[j]=1,F[j].some((B,le)=>le%2===0&&ee[B]===1&&!R.nodes.has(j))?D.add(j):O[j]=L[j]+Z(j))}M.forEach(w=>{w.reason||w.lines.forEach((k,X)=>{for(const[j,J]of[[w.ends[2*X],0],[w.ends[2*X+1],k.nodes.length-1]]){const ne=k.nodes[J];j==="landing"&&F[ne].length===2&&(I[ne]=2,O[ne]=L[ne]+Z(ne))}})});const oe=new Int32Array(S).fill(-1);let _e=0;for(let w=0;w<S;w++){if(oe[w]!==-1||F[w].length===0)continue;const k=[w];for(oe[w]=_e;k.length;){const X=k.pop(),j=F[X];for(let J=0;J<j.length;J+=2)oe[j[J]]===-1&&(oe[j[J]]=_e,k.push(j[J]))}_e++}const se=Array.from({length:_e},()=>[]);for(let w=0;w<S;w++)oe[w]>=0&&se[oe[w]].push(w);const Me=new Uint8Array(_e);for(let w=0;w<S;w++)I[w]===1&&oe[w]>=0&&(Me[oe[w]]=1);for(const w of pe)w.component=oe[w.lines[0].nodes[0]],Me[w.component]||(w.reason="isolated");const Ce=[],Ie=[],dt=[],Fe=[],Te=new Map;for(let w=0;w<S;w++){if(I[w]!==1||Number.isNaN(O[w]))continue;const k=h(p[w],_[w]);for(const{road:X,deck:j}of f.get(k)??[]){if(j)continue;const J=a[Oi(X)];for(const ne of X.lines){const B=ne.length/2;for(let le=0;le<B;le++)if(!(ne[2*le]!==p[w]||ne[2*le+1]!==_[w]))for(const De of[-1,1]){let fe=p[w],ge=_[w],He=0,Be=-1,Ge=le+De,Ee=r.nodeSpacingMeters;for(;Ge>=0&&Ge<B&&He<r.approachMeters;){const Ne=ne[2*Ge],$e=ne[2*Ge+1],Ue=Math.hypot(Ne-fe,$e-ge);for(;Ee<=He+Ue&&Ee<=r.approachMeters;){const tt=(Ee-He)/Ue,lt=fe+(Ne-fe)*tt,it=ge+($e-ge)*tt,me=l(lt,it);if(me===null){He=Wn;break}const st=Ce.length;if(Ce.push(lt),Ie.push(it),dt.push(me+J),Fe.push(-1),Be<0){let Qe=Te.get(w);Qe||Te.set(w,Qe=[]),Qe.push(st)}else Fe[Be]=st;Be=st,Ee+=r.nodeSpacingMeters}He+=Ue,fe=Ne,ge=$e,Ge+=De}}}}}const z=new Float64Array(S).fill(1/0);{const w=new ca;for(let k=0;k<S;k++)I[k]&&(z[k]=0,w.push(0,k));for(;w.size;){const[k,X]=w.pop();if(k>z[X])continue;const j=F[X];for(let J=0;J<j.length;J+=2){const ne=j[J],B=k+j[J+1];B<z[ne]&&(z[ne]=B,w.push(B,ne))}}}const Ct=new Float64Array(S).fill(1/0);{const w=new ca,k=new Float64Array(S).fill(1/0);for(let X=0;X<S;X++)!Number.isNaN(O[X])&&(ee[X]||I[X]===1)&&(k[X]=0,w.push(0,X));for(;w.size;){const[X,j]=w.pop();if(X>k[j])continue;const J=F[j];for(let ne=0;ne<J.length;ne+=2){const B=J[ne];if(!ee[B]&&!D.has(B))continue;const le=E[j]||E[B]?r.approachLiftGrade.vehicle:r.approachLiftGrade.path,De=X+le*J[ne+1];De<k[B]&&(k[B]=De,w.push(De,B))}}for(let X=0;X<S;X++)Number.isFinite(k[X])&&(Ct[X]=Math.min(k[X],r.maxApproachLiftMeters))}const ft=w=>Math.min(1,z[w]/r.transitionMeters);for(let w=0;w<S;w++){if(oe[w]<0)continue;if(ee[w]){y[w]=W[w],C[w]=W[w]-.01,H[w]=W[w]+Ct[w];continue}const k=Z(w),X=(z[w]<r.transitionMeters?L[w]:Math.max(L[w],b[w]))+k;if(y[w]=X,C[w]=L[w]+k-.01,G[w]=0,!Number.isNaN(P[w])){const j=P[w],J=j+(E[w]?r.waterClearanceMeters.vehicle:r.waterClearanceMeters.path);J>y[w]&&(y[w]=J,G[w]=1),C[w]=Math.max(C[w],j+ft(w)*r.minimumWaterClearanceMeters)}}for(const w of D)H[w]=Math.min(H[w],L[w]+Z(w)+Ct[w]);const pt=new Vc(25),je=[];for(const w of i)for(const k of w.lines)for(let X=2;X<k.length;X+=2){const j={road:w,e0:k[X-2],n0:k[X-1],e1:k[X],n1:k[X+1]};pt.add(je.length,Math.min(j.e0,j.e1),Math.min(j.n0,j.n1),Math.max(j.e0,j.e1),Math.max(j.n0,j.n1)),je.push(j)}const Lt=new Map(pe.map(w=>[w.road.id,w])),Ve=[];let N=0,T=0,te=0,he=0;const xe=new Set,ce=new Set;for(const w of pe){const k=Gh(w.road);for(const X of w.lines)for(let j=1;j<X.nodes.length;j++){const J=X.flat[2*j-2],ne=X.flat[2*j-1],B=X.flat[2*j],le=X.flat[2*j+1];for(const De of pt.query(Math.min(J,B),Math.min(ne,le),Math.max(J,B),Math.max(ne,le),ce)){const fe=je[De];if(fe.road===w.road||!jg(J,ne,B,le,fe.e0,fe.n0,fe.e1,fe.n1))continue;const ge=B-J,He=le-ne,Be=fe.e1-fe.e0,Ge=fe.n1-fe.n0,Ee=ge*Ge-He*Be;if(Math.abs(Ee)<1e-9)continue;const Ne=((fe.e0-J)*Ge-(fe.n0-ne)*Be)/Ee,$e=((fe.e0-J)*He-(fe.n0-ne)*ge)/Ee,Ue=J+ge*Ne,tt=ne+He*Ne;if(((re=f.get(h(J,ne)))==null?void 0:re.some(kt=>kt.road===fe.road))&&Ne<1e-6||((K=f.get(h(B,le)))==null?void 0:K.some(kt=>kt.road===fe.road))&&Ne>1-1e-6||((be=f.get(h(fe.e0,fe.n0)))==null?void 0:be.some(kt=>kt.road===w.road))&&$e<1e-6||((Re=f.get(h(fe.e1,fe.n1)))==null?void 0:Re.some(kt=>kt.road===w.road))&&$e>1-1e-6)continue;const it=w.road.id<fe.road.id?`${w.road.id}|${fe.road.id}|${Math.round(Ue)},${Math.round(tt)}`:`${fe.road.id}|${w.road.id}|${Math.round(Ue)},${Math.round(tt)}`;if(xe.has(it))continue;const me=Lt.get(fe.road.id),st=Xp(fe.road);if(Zs(fe.road)==="tunnel"||me&&st==="deck"&&Gh(fe.road)>k)continue;xe.add(it);const Qe=Math.abs(Ee)/(Math.hypot(ge,He)*Math.hypot(Be,Ge)),wt=Math.sqrt(Math.max(0,1-Qe*Qe)),Wt=gc(fe.road).widthMeters/2,Yt=(kt,We)=>Math.min(r.crossingReachMeters,(kt+We*wt)/Math.max(Qe,.2))+1,on=X.along[j-1]+(X.along[j]-X.along[j-1])*Ne,Kn=(kt,We,Pt)=>kt.nodes.filter((an,Gt)=>Math.abs(kt.along[Gt]-We)<=Pt);if(me&&st==="deck"){if(Gh(fe.road)===k){te++;continue}let We=null,Pt=0,an=null;for(const Gt of me.lines)for(let Ut=1;Ut<Gt.nodes.length&&!We;Ut++){const Tt=Gt.flat[2*Ut-2],ji=Gt.flat[2*Ut-1],rr=Gt.flat[2*Ut],or=Gt.flat[2*Ut+1],ar=Math.hypot(rr-Tt,or-ji);if(ar===0)continue;const bi=((Ue-Tt)*(rr-Tt)+(tt-ji)*(or-ji))/(ar*ar);if(bi<-1e-6||bi>1+1e-6)continue;const Go=Tt+(rr-Tt)*bi-Ue,ln=ji+(or-ji)*bi-tt;Go*Go+ln*ln>1e-4||(We=Gt,Pt=Gt.along[Ut-1]+ar*bi,an=[Gt.nodes[Ut-1],Gt.nodes[Ut],Math.min(1,Math.max(0,bi))])}if(!We)continue;T++,Ve.push({upper:Kn(X,on,Yt(me.hw,w.hw)),upperAt:[X.nodes[j-1],X.nodes[j],Ne],lower:Kn(We,Pt,Yt(w.hw,me.hw)),lowerAt:an,groundUp:null,clearance:r.roadClearanceMeters[me.cls]})}else if(!me&&st!=="deck"){if((fe.road.layer??0)>=k){he++;continue}const We=l(Ue,tt);if(We===null)continue;N++;const Pt=Oi(fe.road);Ve.push({upper:Kn(X,on,Yt(Wt,w.hw)),upperAt:[X.nodes[j-1],X.nodes[j],Ne],lower:[],lowerAt:null,groundUp:We+a[Pt],clearance:r.roadClearanceMeters[Pt]})}}}}for(const w of Ve)if(w.groundUp!==null)for(const k of w.upper)w.groundUp+w.clearance>y[k]&&(y[k]=w.groundUp+w.clearance,G[k]=2),C[k]=Math.max(C[k],w.groundUp+ft(k)*r.minimumRoadClearanceMeters);const ue=new Float64Array(S),ve=new Float64Array(S),Ke=new Uint8Array(S),Ze=new Float64Array(S),ye=(w,k)=>E[w]||E[k]?r.liftGrade.vehicle:r.liftGrade.path;let Oe=0;const Ye=new Float64Array(S);{let w=0,k=0;for(let X=0;X<S;X++)Number.isNaN(O[X])||(w+=O[X],k++);w=k?w/k:0;for(let X=0;X<S;X++)Ye[X]=Number.isNaN(O[X])?w:O[X]}let Je=new Set(se.keys());const ke=new Float64Array(S),ut=new Float64Array(S),ot=()=>{const w=Ze.fill(1/0),k=new ca;for(let B=0;B<S;B++)Number.isNaN(O[B])||(w[B]=0,k.push(0,B));for(let B=0;B<S;B++){if(!Number.isFinite(Ct[B])||!Number.isNaN(O[B]))continue;const le=Math.max(0,H[B]-Ye[B]);le<w[B]&&(w[B]=le,k.push(le,B))}for(;k.size;){const[B,le]=k.pop();if(B>w[le])continue;const De=F[le];for(let fe=0;fe<De.length;fe+=2){const ge=De[fe],He=B+ye(le,ge)*De[fe+1];He<w[ge]&&(w[ge]=He,k.push(He,ge))}}for(let B=0;B<S;B++)w[B]=Ye[B]+w[B];for(let B=0;B<S;B++)Ke[B]=Number.isNaN(O[B])&&oe[B]>=0&&w[B]<C[B]-.02?1:0,ve[B]=Number.isNaN(O[B])?Math.min(y[B],Math.max(w[B],C[B])):O[B];for(let B=0;B<S;B++)ve[B]>H[B]&&(ve[B]=Math.max(C[B],H[B]));const X=new ca,j=new Float64Array(S);for(let B=0;B<S;B++)j[B]=ve[B]-Ye[B];for(let B=0;B<S;B++)oe[B]>=0&&Number.isNaN(O[B])&&X.push(-j[B],B);for(;X.size;){const[B,le]=X.pop();if(-B<j[le])continue;const De=F[le];for(let fe=0;fe<De.length;fe+=2){const ge=De[fe],He=-B-ye(le,ge)*De[fe+1];He>j[ge]&&Number.isNaN(O[ge])&&(j[ge]=He,X.push(-He,ge))}}for(let B=0;B<S;B++)Number.isNaN(O[B])&&(ve[B]=Ye[B]+j[B]);for(let B=0;B<S;B++)ve[B]>H[B]&&(ve[B]=Math.max(C[B],H[B]));for(let B=0;B<S;B++)Je.has(oe[B])&&(ue[B]=Number.isNaN(O[B])?Oe===0?Math.max(Ye[B],ve[B]):Math.min(Math.max(ke[B],ve[B]),Math.max(H[B],ve[B])):O[B]);Pe(ue,B=>!Number.isNaN(O[B]),ve,H,Je),ke.set(ue);const J=new Float64Array(S);for(let B=0;B<r.smoothingPasses;B++){for(let le=0;le<S;le++){if(oe[le]<0||!Je.has(oe[le])){J[le]=ue[le];continue}const De=F[le];let fe=0,ge=0;for(let Be=0;Be<De.length;Be+=2){const Ge=1/Math.max(De[Be+1],.05);fe+=Ge,ge+=Ge*ue[De[Be]]}const He=Te.get(le);if(He)for(const Be of He){const Ge=1/r.nodeSpacingMeters;fe+=Ge,ge+=Ge*dt[Be]}Q[le]&&(fe+=Q[le],ge+=Q[le]*W[le]),J[le]=fe===0?ue[le]:ue[le]+.5*(ge/fe-ue[le]),Number.isNaN(O[le])&&(J[le]<ve[le]&&(J[le]=ve[le]),J[le]>H[le]&&H[le]>=ve[le]&&(J[le]=H[le]))}ue.set(J)}const ne=new Uint8Array(S);for(let B=0;B<S;B++)Number.isNaN(O[B])?H[B]<Wn&&ue[B]>H[B]+1e-6&&H[B]>=ve[B]&&(ne[B]=1,ut[B]=H[B]-ue[B]):(ne[B]=1,ut[B]=O[B]-ue[B]);Pe(ut,B=>ne[B]===1,null,null,Je,0);for(let B=0;B<S;B++)if(!(oe[B]<0||!Je.has(oe[B]))){if(!Number.isNaN(O[B])){ue[B]=O[B];continue}ue[B]=ue[B]+ut[B],ue[B]>H[B]&&H[B]>=ve[B]&&(ue[B]=H[B]),ue[B]<ve[B]&&(ue[B]=ve[B])}},Et=new Float64Array(S).fill(-1/0),q=new Float64Array(S).fill(1/0),Le=new Float64Array(S);let ae=null;const de=()=>{if(ae)return ae;const w=new Int32Array(S+1);for(let J=0;J<S;J++)w[J+1]=w[J]+F[J].length/2;const k=new Int32Array(w[S]),X=new Float64Array(w[S]),j=new Float64Array(S);for(let J=0;J<S;J++){const ne=F[J];for(let B=0,le=w[J];B<ne.length;B+=2,le++)k[le]=ne[B],X[le]=1/Math.max(ne[B+1],.05),j[J]=j[J]+X[le];j[J]=j[J]+Q[J]}return ae={off:w,nbr:k,w:X,sw:j}};function Pe(w,k,X,j,J,ne=null){const{off:B,nbr:le,w:De,sw:fe}=de(),ge=X??Et,He=j??q,Be=ne===null?W:Le;for(const[Ge,Ee]of se.entries()){if(J&&!J.has(Ge))continue;const Ne=Int32Array.from(Ee.filter(Ue=>!k(Ue)&&fe[Ue]>0));if(Ne.length===0)continue;const $e=Math.min(1.98,2/(1+Math.sin(Math.PI/Math.max(2,Ee.length))));for(let Ue=0;Ue<2e4;Ue++){let tt=0;for(let lt=0;lt<Ne.length;lt++){const it=Ne[lt];let me=Q[it]*Be[it];for(let on=B[it],Kn=B[it+1];on<Kn;on++)me+=De[on]*w[le[on]];const st=w[it];let Qe=st+$e*(me/fe[it]-st);const wt=ge[it],Wt=He[it];Qe<wt?Qe=wt:Qe>Wt&&Wt>=wt&&(Qe=Wt);const Yt=Qe>st?Qe-st:st-Qe;Yt>tt&&(tt=Yt),w[it]=Qe}if(tt<.005)break}}}const Ae=w=>ue[w[0]]+(ue[w[1]]-ue[w[0]])*w[2];for(Pe(Ye,w=>!Number.isNaN(O[w]),null,H,null),Oe=0;Oe<8;Oe++){ot();const w=new Set;for(const k of Ve){if(k.groundUp!==null||!k.lowerAt)continue;const X=Ae(k.upperAt),j=Ae(k.lowerAt);if(X>=j+k.clearance-.05)continue;for(const ne of k.upper)j+k.clearance>y[ne]+.1&&(y[ne]=j+k.clearance,G[ne]=2,w.add(oe[ne]));const J=Ze[k.upperAt[0]]+(Ze[k.upperAt[1]]-Ze[k.upperAt[0]])*k.upperAt[2];if(J<j+k.clearance)for(const ne of k.lower){const B=Math.max(C[ne],J-k.clearance);B<H[ne]-.1&&(H[ne]=B,w.add(oe[ne]))}}if(w.size===0)break;Je=w}let nt=1/0,Ot=0;for(const w of Ve){if(w.groundUp!==null||!w.lowerAt)continue;const k=Ae(w.upperAt)-Ae(w.lowerAt);nt=Math.min(nt,k),k<w.clearance-.05&&Ot++}for(const w of Ve){if(w.groundUp!==null||!w.lowerAt)continue;const k=Ae(w.lowerAt);for(const X of w.upper)C[X]=Math.max(C[X],k+ft(X)*r.minimumRoadClearanceMeters)}const rn=(w,k,X)=>{const j=Te.get(w);if(!j)return null;let J=null,ne=1/0;for(const B of j){const le=Ce[B]-p[w],De=Ie[B]-_[w],fe=Math.hypot(le,De)||1,ge=(le*k+De*X)/fe;if(ge<ne){ne=ge;const He=Fe[B];J=-(He>=0?(dt[He]-ue[w])/(2*r.nodeSpacingMeters):(dt[B]-ue[w])/r.nodeSpacingMeters)}}return J};for(const w of pe)if(!w.reason)for(const k of w.lines){const X=k.nodes.length,j=k.along[X-1],J=Math.min(r.transitionMeters,j/3);if(!(J<2))for(const ne of[0,X-1]){const B=k.nodes[ne];if(I[B]!==1||Number.isNaN(O[B]))continue;const le=ne===0?1:-1,De=st=>Math.abs(k.along[st]-k.along[ne]),fe=k.flat[2*(ne+le)]-k.flat[2*ne],ge=k.flat[2*(ne+le)+1]-k.flat[2*ne+1],He=Math.hypot(fe,ge)||1,Be=rn(B,fe/He,ge/He);if(Be===null)continue;let Ge=ne;for(;Ge+le>=0&&Ge+le<X&&De(Ge)<J;)Ge+=le;const Ee=Math.max(0,Math.min(X-1,Ge+le)),Ne=De(Ge);if(Ne<2)continue;const $e=De(Ee)-Ne>.5?(ue[k.nodes[Ee]]-ue[k.nodes[Ge]])/(De(Ee)-Ne):(ue[k.nodes[Ge]]-ue[B])/Ne,Ue=(ue[k.nodes[Ge]]-ue[B])/Ne,tt=r.maxGrade[w.cls],lt=Math.max(-tt,Math.min(tt,Math.max(Ue-r.approachGradeBlend,Math.min(Ue+r.approachGradeBlend,Be)))),it=ue[B],me=ue[k.nodes[Ge]];for(let st=ne+le;st!==Ge;st+=le){const Qe=k.nodes[st];if(F[Qe].length!==4||!Number.isNaN(O[Qe]))break;const wt=De(st)/Ne,Wt=wt*wt,Yt=Wt*wt,on=(2*Yt-3*Wt+1)*it+(Yt-2*Wt+wt)*lt*Ne+(-2*Yt+3*Wt)*me+(Yt-Wt)*$e*Ne;ue[Qe]=Math.max(on,ve[Qe])}}}const Mt=[];{const w=new Map;for(const X of R.segs){const j=`${X.road.id}\0${X.line}`;let J=w.get(j);J||w.set(j,J=[]),J.push(X)}const k=(X,j)=>{const J=ue[X]-(L[X]+a[Oi(j)]);return Math.abs(J)<1e-6?0:J};for(const X of w.values()){X.sort((B,le)=>B.a0-le.a0);let j=[];const J=()=>{if(j.length>=2&&j.some(B=>B[1]>.005)){const B=X[0].road;Mt.push({roadId:B.id,line:X[0].line,alongStart:j[0][0],alongEnd:j.at(-1)[0],maxLiftMeters:Math.max(...j.map(le=>le[1])),points:j})}j=[]};let ne=-1/0;for(const B of X)Math.abs(B.a0-ne)>1e-6&&(J(),j.push([B.a0,k(B.n0,B.road)])),j.push([B.a1,k(B.n1,B.road)]),ne=B.a1;J()}Mt.sort((X,j)=>X.roadId<j.roadId?-1:X.roadId>j.roadId?1:X.line-j.line||X.alongStart-j.alongStart)}let Tn=0,Pn=0;{const w=new Map;for(const k of D)w.set(k,Math.max(0,ue[k]-(L[k]+Z(k))));for(const[k,X]of R.nodes){const j=ue[k]-(X.terrainUp+X.lift);w.has(X.abutment)&&w.set(X.abutment,Math.max(w.get(X.abutment),j)),Pn=Math.max(Pn,j)}for(const k of w.values())k>.05&&Tn++}const ol=new $g(Mt),No=new Map,zn=(w,k)=>{const X=`${w.id}\0${k}`;let j=No.get(X);if(!j){const J=w.lines[k];j=[0];for(let ne=2;ne<J.length;ne+=2)j.push(j.at(-1)+Math.hypot(J[ne]-J[ne-2],J[ne+1]-J[ne-1]));No.set(X,j)}return j},vs=(w,k,X)=>{const j=w.lines[k],J=zn(w,k);let ne=1;for(;ne<J.length-1&&J[ne]<X;)ne++;const B=Math.min(1,Math.max(0,(X-J[ne-1])/(J[ne]-J[ne-1]||1))),le=j[2*ne-2]+(j[2*ne]-j[2*ne-2])*B,De=j[2*ne-1]+(j[2*ne+1]-j[2*ne-1])*B,fe=l(le,De);if(fe===null)return null;const ge=a[Oi(w)],He=ol.upAt(w,k,X,l,ge);return He===null?fe+ge:Math.max(He,fe+ge)},Uo=[],Fo=[],Xi={vehicle:new Lc,path:new Lc},Hn={p:[],i:[]},ys=[],Oo=[],Bo=[],al=[],ll={degenerate:0,"no-terrain":0,isolated:0,clearance:0,grade:0},cl={ground:0,bridge:0,edge:0,landing:0};let ko=0,zo=0,Ho=0;const A=[];for(const w of M){for(const Ee of w.ends)cl[Ee]++;let k=0,X=null,j=0,J=1/0,ne=-1/0,B=0;const le=new Set;if(!w.reason){for(const Ee of w.lines)for(let Ne=0;Ne<Ee.nodes.length;Ne++){const $e=Ee.nodes[Ne];(ue[$e]<C[$e]-.02||Ke[$e])&&(w.reason="clearance");let Ue=Ne+1;for(;Ue<Ee.nodes.length&&Ee.along[Ue]-Ee.along[Ne]<Qw;)Ue++;if(Ue<Ee.nodes.length||Ne===0&&Ee.nodes.length>1){const tt=Math.min(Ue,Ee.nodes.length-1),lt=Ee.along[tt]-Ee.along[Ne];lt>.5&&(k=Math.max(k,Math.abs(ue[Ee.nodes[tt]]-ue[$e])/lt))}J=Math.min(J,ue[$e]),ne=Math.max(ne,ue[$e]),j=Math.max(j,ue[$e]-L[$e]),Number.isNaN(P[$e])||(X=Math.min(X??1/0,ue[$e]-P[$e])),Number.isNaN(O[$e])&&ue[$e]-ve[$e]<.05&&ve[$e]>L[$e]+Z($e)+.05&&le.add(G[$e]===1?"water":G[$e]===2?"road":"terrain")}!w.reason&&w.road.highway!=="steps"&&k>r.maxGrade[w.cls]&&(w.reason="grade")}const De=w.road,{widthMeters:fe,source:ge}=gc(De),He=w.lines.map(Ee=>{const Ne=new Float32Array(Ee.nodes.length*3);return Ee.nodes.forEach(($e,Ue)=>{Ne[3*Ue]=Ee.flat[2*Ue],Ne[3*Ue+1]=Ee.flat[2*Ue+1],Ne[3*Ue+2]=ue[$e]}),Ne});let Be=0,Ge=0;if(w.reason){ll[w.reason]++;for(const Ee of De.lines){const Ne=Ee.length/2,$e=l(Ee[0],Ee[1]),Ue=l(Ee[Ee.length-2],Ee[Ee.length-1]);if($e===null||Ue===null)continue;const tt=x(Ee);let lt=0;const it=a[w.cls];for(let me=1;me<Ne;me++){const st=Ee[2*me-2],Qe=Ee[2*me-1],wt=Ee[2*me],Wt=Ee[2*me+1],Yt=$e+(Ue-$e)*(tt>0?lt/tt:0);lt+=Math.hypot(wt-st,Wt-Qe);const on=$e+(Ue-$e)*(tt>0?lt/tt:1);al.push(st,Qe,Yt+it,wt,Wt,on+it)}}}else{Ho++;const Ee=Xi[w.cls];Be=Ee.i.length/3;const Ne=Ee.p.length/3;w.lines.forEach((me,st)=>{const Qe=me.nodes.length,wt=me.nodes.map(We=>ue[We]),Wt=me.nodes.map(We=>Math.max(0,1-z[We]/r.transitionMeters)),Yt=me.nodes.map(We=>L[We]),on=new Int32Array(Qe).fill(-1),Kn=new Int32Array(Qe).fill(-1);if(Xg(Ee,me.flat,w.hw,wt,(We,Pt,an)=>Wg(me.flat,We,Pt,an,wt,l,Wt[We]),r.road,(We,Pt,an)=>{on[We]=Pt,Kn[We]=an}),on.every(We=>We>=0)){const We=new Float32Array(3*Qe),Pt=new Float32Array(3*Qe),an=new Float32Array(3*Qe);for(let Ut=0;Ut<Qe;Ut++)for(let Tt=0;Tt<3;Tt++)We[3*Ut+Tt]=Ee.p[3*on[Ut]+Tt],Pt[3*Ut+Tt]=Ee.p[3*Kn[Ut]+Tt],an[3*Ut+Tt]=Tt<2?me.flat[2*Ut+Tt]:wt[Ut];const Gt=Ut=>(f.get(h(me.flat[2*Ut],me.flat[2*Ut+1]))??[]).filter(Tt=>Tt.road!==w.road).map(Tt=>Tt.road.id).sort();Fo.push({id:w.road.id,lineIndex:st,surfaceClass:w.cls,highway:w.road.highway,bridge:w.road.bridge,halfWidth:w.hw,left:We,right:Pt,centre:an,along:Float32Array.from(me.along),startEnd:w.ends[2*me.line],endEnd:w.ends[2*me.line+1],startOthers:Gt(0),endOthers:Gt(Qe-1)})}A.push({c:w,e:me.flat.filter((We,Pt)=>Pt%2===0),n:me.flat.filter((We,Pt)=>Pt%2===1),up:wt,along:me.along,w:Wt,tc:Yt,lineIndex:st});for(let We=0;We<Qe;We++)We>0&&Oo.push(me.flat[2*We-2],me.flat[2*We-1],wt[We-1]+.1,me.flat[2*We],me.flat[2*We+1],wt[We]+.1);let kt=0;for(let We=0;We<Qe;We++)(me.along[We]>=kt||We===Qe-1)&&(Bo.push(me.flat[2*We],me.flat[2*We+1],wt[We],me.flat[2*We],me.flat[2*We+1],Yt[We]),kt=me.along[We]+20);for(const We of[0,Qe-1]){const Pt=me.nodes[We];if(I[Pt]!==1)continue;const an=me.flat[2*We],Gt=me.flat[2*We+1],Ut=We===0?1:-1;let Tt=We;for(;Tt+Ut>=0&&Tt+Ut<Qe&&Math.abs(me.along[Tt]-me.along[We])<10;)Tt+=Ut;const ji=Math.abs(me.along[Tt]-me.along[We]);if(ji<1)continue;const rr=me.flat[2*Tt]-an,or=me.flat[2*Tt+1]-Gt,ar=Math.hypot(rr,or)||1;let bi=null,Go=1/0;for(const Zn of f.get(h(an,Gt))??[])Zn.deck||Zs(Zn.road)!=="surface"||Zn.road.lines.forEach((ui,Vo)=>{for(let Gn=0;Gn<ui.length/2;Gn++){if(ui[2*Gn]!==an||ui[2*Gn+1]!==Gt)continue;const hl=zn(Zn.road,Vo);for(const Wd of[-1,1]){const ul=Gn+Wd;if(ul<0||ul>=ui.length/2)continue;const $d=ui[2*ul]-an,Xd=ui[2*ul+1]-Gt,jd=($d*rr+Xd*or)/(ar*(Math.hypot($d,Xd)||1));jd<Go&&(Go=jd,bi={r:Zn.road,li:Vo,s0:hl[Gn],sgn:Wd})}}});for(const Zn of f.get(h(an,Gt))??[])Zn.deck||Zs(Zn.road)!=="surface"||Zn.road.lines.forEach((ui,Vo)=>{for(let Gn=0;Gn<ui.length/2;Gn++){if(ui[2*Gn]!==an||ui[2*Gn+1]!==Gt)continue;const hl=vs(Zn.road,Vo,zn(Zn.road,Vo)[Gn]);hl!==null&&(ko=Math.max(ko,Math.abs(ue[Pt]-hl)))}});const ln=bi;if(!ln)continue;const __=zn(ln.r,ln.li).at(-1),qc=Math.min(10,ln.sgn>0?__-ln.s0:ln.s0);if(qc<1)continue;const Yc=vs(ln.r,ln.li,ln.s0),Hd=vs(ln.r,ln.li,ln.s0+ln.sgn*qc);if(Yc===null||Hd===null)continue;const Gd=(ue[me.nodes[Tt]]-ue[Pt])/ji,Vd=(Yc-Hd)/qc,Kc=Math.abs(Gd-Vd);zo=Math.max(zo,Kc),B=Math.max(B,Kc),Uo.push({bridgeId:w.road.id,roadId:ln.r.id,roadHighway:ln.r.highway,east:an,north:Gt,stepMeters:Math.abs(ue[Pt]-Yc),deckGrade:Gd,groundGrade:Vd,gradeChange:Kc,raisedMeters:Math.max(0,ue[Pt]-(L[Pt]+Z(Pt))),corrected:D.has(Pt)})}}),Ge=Ee.i.length/3-Be;const $e=new Map,Ue=(me,st)=>me<st?`${me},${st}`:`${st},${me}`;for(let me=Be;me<Be+Ge;me++)for(let st=0;st<3;st++){const Qe=Ee.i[3*me+st],wt=Ee.i[3*me+(st+1)%3];$e.set(Ue(Qe,wt),($e.get(Ue(Qe,wt))??0)+1)}const tt=r.deckThicknessMeters,lt=Hn.p.length/3;for(let me=Ne;me<Ee.p.length/3;me++)Hn.p.push(Ee.p[3*me],Ee.p[3*me+1],Ee.p[3*me+2]-tt);const it=(me,st)=>[Ee.p[3*me],Ee.p[3*me+1],Ee.p[3*me+2]-st];for(let me=Be;me<Be+Ge;me++){const st=Ee.i[3*me],Qe=Ee.i[3*me+1],wt=Ee.i[3*me+2];Hn.i.push(lt+st-Ne,lt+wt-Ne,lt+Qe-Ne);for(const[Wt,Yt]of[[st,Qe],[Qe,wt],[wt,st]]){if($e.get(Ue(Wt,Yt))!==1)continue;const on=it(Wt,0),Kn=it(Yt,0);ys.push(...on,...Kn);const kt=Hn.p.length/3;Hn.p.push(...on,...it(Wt,tt),...it(Yt,tt),...Kn),Hn.i.push(kt,kt+1,kt+2,kt,kt+2,kt+3)}}}v.push({id:De.id,name:De.name,ref:De.ref,highway:De.highway,surfaceClass:w.cls,bridge:De.bridge,layer:De.layer,widthMeters:fe,widthSource:ge,lengthMeters:De.lines.reduce((Ee,Ne)=>Ee+x(Ne),0),status:w.reason?"debug-only":"deck",fallbackReason:w.reason,ends:w.ends,heightSource:"estimated",liftedFor:[...le].sort(),deckMinUp:Number.isFinite(J)?J:NaN,deckMaxUp:Number.isFinite(ne)?ne:NaN,maxAboveTerrainMeters:j,minAboveWaterMeters:X,maxGrade:k,approachGradeChange:B,profiles:He,firstTriangle:Be,triangleCount:w.reason?0:Ge})}const Y={vehicle:Xi.vehicle.build(),path:Xi.path.build()},ie=globalThis.performance?performance.now():Date.now();return{surfaces:Y,slab:{positions:Float32Array.from(Hn.p),indices:Uint32Array.from(Hn.i)},outlines:{positions:Float32Array.from(ys)},profileLines:{positions:Float32Array.from(Oo)},dropLines:{positions:Float32Array.from(Bo)},fallbackLines:{positions:Float32Array.from(al)},features:v,atGrade:d,approaches:Mt,transitions:Uo,edges:Fo,locator:nT(A,l),stats:{bridges:M.length,decks:Ho,debugOnly:M.length-Ho,fallbacks:ll,atGrade:d.length,ends:cl,crossings:{overGround:N,overDeck:T,unordered:te,invertedLayer:he},profileNodes:S,solveRounds:Oe+1,deckOverDeck:{minGapMeters:Number.isFinite(nt)?nt:null,belowTarget:Ot},maxApproachStepMeters:ko,maxApproachGradeChange:zo,triangles:{vehicle:Y.vehicle.indices.length/3,path:Y.path.indices.length/3},slabTriangles:Hn.i.length/3,milliseconds:ie-o,approach:{abutments:D.size,raised:Tn,roadStretches:Mt.length,nodes:R.nodes.size,maxLiftMeters:Pn}}}}function tT(i,e,t,n,s,r,o,a,l,c){const h={nodes:new Map,edges:[],segs:[]},u=r.approachCorrectionMeters;if(!(u>0))return h;const d=e.filter(P=>!P.reason),f=P=>!n.has(P.id)&&Zs(P)==="surface"&&P.highway!=="steps"&&P.highway!=="elevator",p=new Set,_=new Vc(25),g=[];for(const P of d)for(const F of P.lines){for(let $=0;$<F.flat.length;$+=2)p.add(a(F.flat[$],F.flat[$+1]));for(let $=2;$<F.flat.length;$+=2){const ee={e0:F.flat[$-2],n0:F.flat[$-1],e1:F.flat[$],n1:F.flat[$+1],hw:P.hw};_.add(g.length,Math.min(ee.e0,ee.e1),Math.min(ee.n0,ee.n1),Math.max(ee.e0,ee.e1),Math.max(ee.n0,ee.n1)),g.push(ee)}}const m=[],M=new Map,v=new Set;for(const P of i)f(P)&&P.lines.forEach((F,$)=>{let ee=0;for(let W=2;W<F.length;W+=2){const Q=F[W-2],pe=F[W-1],Z=F[W],oe=F[W+1],_e=Math.hypot(Z-Q,oe-pe);if(_e===0)continue;const se={road:P,line:$,ka:a(Q,pe),kb:a(Z,oe),ea:Q,na:pe,eb:Z,nb:oe,len:_e,along:ee,cuts:[]};for(const Me of _.query(Math.min(Q,Z),Math.min(pe,oe),Math.max(Q,Z),Math.max(pe,oe),v)){const Ce=g[Me];if(!jg(Q,pe,Z,oe,Ce.e0,Ce.n0,Ce.e1,Ce.n1))continue;const Ie=Z-Q,dt=oe-pe,Fe=Ce.e1-Ce.e0,Te=Ce.n1-Ce.n0,z=Ie*Te-dt*Fe;if(Math.abs(z)<1e-9)continue;const Ct=((Ce.e0-Q)*Te-(Ce.n0-pe)*Fe)/z;Ct<1e-6&&p.has(se.ka)||Ct>1-1e-6&&p.has(se.kb)||se.cuts.push({x:Ct*_e,hw:Ce.hw})}se.cuts.sort((Me,Ce)=>Me.x-Ce.x);for(const Me of[se.ka,se.kb]){let Ce=M.get(Me);Ce||M.set(Me,Ce=[]),Ce.push(m.length)}m.push(se),ee+=_e}});const x=P=>(t.get(P)??[]).some(F=>!F.deck&&!f(F.road)),R=new Map,S=P=>{let F=R.get(P);return F===void 0&&R.set(P,F=R.size),F},E=new Map,L=new Map,b=new Set,y=[],C=new ca;for(const P of p){if(!M.has(P))continue;const F=ee=>{const W=m[ee];return W.cuts.some(Q=>(W.ka===P?Q.x:W.len-Q.x)<=Q.hw+r.approachCrossingMarginMeters+1)};if(c.has(P)||x(P)||M.get(P).some(F))continue;E.set(P,0),L.set(P,P);const $=S(P);y[$]=P,C.push(0,$)}for(;C.size;){const[P,F]=C.pop(),$=y[F];if(!(P>E.get($)||b.has($))&&!(P>0&&x($))){b.add($);for(const ee of M.get($)??[]){const W=m[ee];if(W.cuts.length)continue;const Q=W.ka===$?W.kb:W.ka,pe=P+W.len;if(!(pe>=u||p.has(Q))&&pe<(E.get(Q)??1/0)){E.set(Q,pe),L.set(Q,L.get($));const Z=S(Q);y[Z]=Q,C.push(pe,Z)}}}}const H=P=>o(Number(P.split(",")[0]),Number(P.split(",")[1]),!0),G=new Map,O=(P,F,$)=>{var W;const ee=o(F,$,!0);if(!p.has(P)&&!h.nodes.has(ee)){G.set(ee,P);const Q=s(F,$);let pe=0;for(const oe of t.get(P)??[])f(oe.road)&&(pe=Math.max(pe,l[Oi(oe.road)]));const Z=((W=M.get(P))==null?void 0:W.length)??0;h.nodes.set(ee,{terrainUp:Q??0,lift:pe,fixed:Q===null||x(P)||Z<2||!b.has(P),abutment:H(L.get(P)??P)})}return ee},I=m.map(P=>{const F=b.has(P.ka)?E.get(P.ka):1/0,$=b.has(P.kb)?E.get(P.kb):1/0;if(!Number.isFinite(F)&&!Number.isFinite($))return[];const ee=_e=>_e+r.approachCrossingMarginMeters,W=P.cuts[0],Q=P.cuts.at(-1),pe=Number.isFinite(F)?Math.min(u-F,W?W.x-ee(W.hw):1/0):-1,Z=Number.isFinite($)?Math.max(P.len-(u-$),Q?Q.x+ee(Q.hw):-1/0):P.len+1;if(!P.cuts.length&&pe>=Z)return[[0,P.len]];const oe=[];return pe>.5&&oe.push([0,Math.min(pe,P.len)]),P.len-Z>.5&&oe.push([Math.max(Z,0),P.len]),oe}),D=new Set;m.forEach((P,F)=>{const $=I[F];$.length===1&&$[0][0]===0&&$[0][1]===P.len||($.some(W=>W[0]===0)||D.add(P.ka),$.some(W=>W[1]===P.len)||D.add(P.kb))}),m.forEach((P,F)=>{const $=b.has(P.ka)?E.get(P.ka):1/0;for(const[ee,W]of I[F]){const Q=Math.max(1,Math.ceil((W-ee)/r.nodeSpacingMeters)),pe=L.get(ee===0&&Number.isFinite($)?P.ka:P.kb)??P.ka;let Z=-1,oe=0;for(let _e=0;_e<=Q;_e++){const se=ee+(W-ee)*_e/Q;let Me;if(se<=1e-9)Me=O(P.ka,P.ea,P.na);else if(se>=P.len-1e-9)Me=O(P.kb,P.eb,P.nb);else{const Ce=se/P.len,Ie=P.ea+(P.eb-P.ea)*Ce,dt=P.na+(P.nb-P.na)*Ce,Fe=s(Ie,dt);if(Fe===null)break;Me=o(Ie,dt,!1);const Te=_e===0||_e===Q;h.nodes.set(Me,{terrainUp:Fe,lift:l[Oi(P.road)],fixed:Te,abutment:H(pe)})}Z>=0&&(h.edges.push([Z,Me,se-oe]),h.segs.push({road:P.road,line:P.line,a0:P.along+oe,n0:Z,a1:P.along+se,n1:Me})),Z=Me,oe=se}}});for(const[P,F]of G)D.has(F)&&(h.nodes.get(P).fixed=!0);return h}function nT(i,e){const t=new Vc(25),n=[];i.forEach((a,l)=>{for(let c=1;c<a.e.length;c++){const h=a.c.hw;t.add(n.length,Math.min(a.e[c-1],a.e[c])-h,Math.min(a.n[c-1],a.n[c])-h,Math.max(a.e[c-1],a.e[c])+h,Math.max(a.n[c-1],a.n[c])+h),n.push({l,j:c})}});const s=new Set,r=(a,l,c,h)=>{const u=i[a],d=u.e[l-1],f=u.n[l-1],p=u.e[l],_=u.n[l],g=(p-d)**2+(_-f)**2,m=g===0?0:Math.min(1,Math.max(0,((c-d)*(p-d)+(h-f)*(_-f))/g)),M=d+(p-d)*m,v=f+(_-f)*m,x=Math.hypot(c-M,h-v);if(x>u.c.hw+1e-6)return null;let R=u.up[l-1]+(u.up[l]-u.up[l-1])*m;const S=u.w[l-1]+(u.w[l]-u.w[l-1])*m;if(S>0){const L=e(c,h),b=u.tc[l-1]+(u.tc[l]-u.tc[l-1])*m;L!==null&&(R+=S*(L-b))}const E=u.c.road;return{id:E.id,name:E.name,layer:E.layer,surfaceClass:u.c.cls,up:R,heightSource:"estimated",lateralMeters:x,alongMeters:u.along[l-1]+Math.sqrt(g)*m}},o=(a,l,c,h)=>{const u=new Map;for(const d of a){const f=n[d];if(h!==null&&i[f.l].c.road.id!==h)continue;const p=r(f.l,f.j,l,c);if(!p)continue;const _=u.get(p.id);(!_||p.lateralMeters<_.lateralMeters)&&u.set(p.id,p)}return[...u.values()].sort((d,f)=>d.up-f.up||(d.id<f.id?-1:1))};return{decksAt:(a,l)=>o(t.query(a,l,a,l,s),a,l,null),deckHeightAt:(a,l,c)=>o(t.query(l,c,l,c,s),l,c,a)[0]??null}}function iT(i,e,t){for(const n of i.features)if(n.status==="deck"&&n.surfaceClass===e&&t>=n.firstTriangle&&t<n.firstTriangle+n.triangleCount)return n;return null}function sT(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=Yg(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=cT(i,e,r,t)),i.length>80*t){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let d=t;d<s;d+=t){const f=i[d],p=i[d+1];f<a&&(a=f),p<l&&(l=p),f>h&&(h=f),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return wa(r,o,t,a,l,c,0),o}function Yg(i,e,t,n,s){let r;if(s===vT(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=qp(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=qp(o/n|0,i[o],i[o+1],r);return r&&wo(r,r.next)&&(Aa(r),r=r.next),r}function tr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(wo(t,t.next)||Ht(t.prev,t,t.next)===0)){if(Aa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function wa(i,e,t,n,s,r,o){if(!i)return;!o&&r&&pT(i,n,s,r);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?oT(i,n,s,r):rT(i)){e.push(l.i,i.i,c.i),Aa(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=aT(tr(i),e),wa(i,e,t,n,s,r,2)):o===2&&lT(i,e,t,n,s,r):wa(tr(i),e,t,n,s,r,1);break}}}function rT(i){const e=i.prev,t=i,n=i.next;if(Ht(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),d=Math.max(s,r,o),f=Math.max(a,l,c);let p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&ha(s,a,r,l,o,c,p.x,p.y)&&Ht(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function oT(i,e,t,n){const s=i.prev,r=i,o=i.next;if(Ht(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=Math.min(a,l,c),p=Math.min(h,u,d),_=Math.max(a,l,c),g=Math.max(h,u,d),m=ed(f,p,e,t,n),M=ed(_,g,e,t,n);let v=i.prevZ,x=i.nextZ;for(;v&&v.z>=m&&x&&x.z<=M;){if(v.x>=f&&v.x<=_&&v.y>=p&&v.y<=g&&v!==s&&v!==o&&ha(a,h,l,u,c,d,v.x,v.y)&&Ht(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=f&&x.x<=_&&x.y>=p&&x.y<=g&&x!==s&&x!==o&&ha(a,h,l,u,c,d,x.x,x.y)&&Ht(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=m;){if(v.x>=f&&v.x<=_&&v.y>=p&&v.y<=g&&v!==s&&v!==o&&ha(a,h,l,u,c,d,v.x,v.y)&&Ht(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=M;){if(x.x>=f&&x.x<=_&&x.y>=p&&x.y<=g&&x!==s&&x!==o&&ha(a,h,l,u,c,d,x.x,x.y)&&Ht(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function aT(i,e){let t=i;do{const n=t.prev,s=t.next.next;!wo(n,s)&&Zg(n,t,t.next,s)&&Ta(n,s)&&Ta(s,n)&&(e.push(n.i,t.i,s.i),Aa(t),Aa(t.next),t=i=s),t=t.next}while(t!==i);return tr(t)}function lT(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&_T(o,a)){let l=Jg(o,a);o=tr(o,o.next),l=tr(l,l.next),wa(o,e,t,n,s,r,0),wa(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function cT(i,e,t,n){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Yg(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(gT(c))}s.sort(hT);for(let r=0;r<s.length;r++)t=uT(s[r],t);return t}function hT(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function uT(i,e){const t=dT(i,e);if(!t)return e;const n=Jg(t,i);return tr(n,n.next),tr(t,t.next)}function dT(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,o;if(wo(i,t))return t;do{if(wo(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Kg(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){const u=Math.abs(s-t.y)/(n-t.x);Ta(t,i)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&fT(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function fT(i,e){return Ht(i.prev,i,e.prev)<0&&Ht(e.next,i,i.next)<0}function pT(i,e,t,n){let s=i;do s.z===0&&(s.z=ed(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,mT(s)}function mT(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function ed(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function gT(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Kg(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function ha(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Kg(i,e,t,n,s,r,o,a)}function _T(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!xT(i,e)&&(Ta(i,e)&&Ta(e,i)&&MT(i,e)&&(Ht(i.prev,i,e.prev)||Ht(i,e.prev,e))||wo(i,e)&&Ht(i.prev,i,i.next)>0&&Ht(e.prev,e,e.next)>0)}function Ht(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function wo(i,e){return i.x===e.x&&i.y===e.y}function Zg(i,e,t,n){const s=Ql(Ht(i,e,t)),r=Ql(Ht(i,e,n)),o=Ql(Ht(t,n,i)),a=Ql(Ht(t,n,e));return!!(s!==r&&o!==a||s===0&&Jl(i,t,e)||r===0&&Jl(i,n,e)||o===0&&Jl(t,i,n)||a===0&&Jl(t,e,n))}function Jl(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ql(i){return i>0?1:i<0?-1:0}function xT(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Zg(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ta(i,e){return Ht(i.prev,i,i.next)<0?Ht(i,e,i.next)>=0&&Ht(i,i.prev,e)>=0:Ht(i,e,i.prev)<0||Ht(i,i.next,e)<0}function MT(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Jg(i,e){const t=td(i.i,i.x,i.y),n=td(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function qp(i,e,t,n){const s=td(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Aa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function td(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function vT(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}const Bd={floorHeightMeters:3.2,defaultHeightMeters:10,maxHeightMeters:600,maxLevels:200,foundationDepthMeters:1,minClearanceMeters:2.5,boundarySampleMeters:5,interiorSampleMeters:10,minRingAreaSquareMeters:1,containmentToleranceMeters:.5,minPartRiseMeters:.5,outlineReplacementCoverage:.98,cornerAngleDeg:25};function Yp(i,e=Bd){const t=i.heightMeters;if(t!==null&&Number.isFinite(t)&&t>0&&t<=e.maxHeightMeters)return{meters:t,source:"height"};const n=i.levels;return n!==null&&Number.isFinite(n)&&n>0&&n<=e.maxLevels?{meters:n*e.floorHeightMeters,source:"levels"}:{meters:e.defaultHeightMeters,source:"default"}}function Kp(i,e,t=Bd){const n=i.minHeightMeters;if(n!==null&&Number.isFinite(n)&&n>0&&n<e)return{meters:n,source:"min_height"};const s=i.minLevel;return s!==null&&Number.isFinite(s)&&s>0&&s*t.floorHeightMeters<e?{meters:s*t.floorHeightMeters,source:"min_level"}:null}function yT(i){const e=[],t=i.length/2;for(let n=0;n<t;n++){const s=i[2*n],r=i[2*n+1],o=e.length;o>=2&&e[o-2]===s&&e[o-1]===r||e.push(s,r)}for(;e.length>=4&&e[0]===e[e.length-2]&&e[1]===e[e.length-1];)e.length-=2;return Float64Array.from(e)}function bT(i){const e=new Float64Array(i.length),t=i.length/2;for(let n=0;n<t;n++)e[2*n]=i[2*(t-1-n)],e[2*n+1]=i[2*(t-1-n)+1];return e}function nd(i,e){const t=[];let n=0;for(const s of i){const r=[];let o=0;for(let a=0;a<s.length;a++){let l=yT(s[a]);const c=l.length>=6?Zw(l):0;if(Math.abs(c)<e){if(n++,a===0){n+=s.length-1;break}continue}a===0!=c>0&&(l=bT(l)),r.push(l),o+=a===0?Math.abs(c):-Math.abs(c)}r.length>0&&t.push({rings:r,area:o})}return{polygons:t,ringsDropped:n}}function Wc(i){const e=[],t=[];return i.forEach((n,s)=>{s>0&&t.push(e.length/2);for(let r=0;r<n.length;r++)e.push(n[r])}),sT(e,t,2)}function Vh(i,e,t){let n=1/0,s=-1/0;const r=(o,a,l)=>{const c=e.sample(o,a);c.available&&(l&&c.localY<n&&(n=c.localY),c.localY>s&&(s=c.localY))};for(const o of i){let a=1/0,l=1/0,c=-1/0,h=-1/0;for(const d of o.rings){const f=d.length/2;for(let p=0;p<f;p++){const _=d[2*p],g=d[2*p+1],m=d[2*((p+1)%f)],M=d[2*((p+1)%f)+1],v=Math.max(1,Math.ceil(Math.hypot(m-_,M-g)/t.boundarySampleMeters));for(let x=0;x<v;x++)r(_+(m-_)*x/v,g+(M-g)*x/v,!0);a=Math.min(a,_),l=Math.min(l,g),c=Math.max(c,_),h=Math.max(h,g)}}const u=t.interiorSampleMeters;for(let d=Math.ceil(a/u)*u;d<=c;d+=u)for(let f=Math.ceil(l/u)*u;f<=h;f+=u)Io(d,f,o)&&r(d,f,!1)}return n===1/0?null:{min:n,max:s}}function Io(i,e,t){const n=t.rings;if(!Eo(i,e,n[0]))return!1;for(let s=1;s<n.length;s++)if(Eo(i,e,n[s]))return!1;return!0}function kd(i,e,t){let n=1/0;const s=t.length/2;for(let r=0;r<s;r++){const o=t[2*r],a=t[2*r+1],l=t[2*((r+1)%s)],c=t[2*((r+1)%s)+1],h=l-o,u=c-a,d=h*h+u*u,f=d>0?Math.min(1,Math.max(0,((i-o)*h+(e-a)*u)/d)):0;n=Math.min(n,Math.hypot(i-o-f*h,e-a-f*u))}return n}function id(i,e,t,n){for(const s of t){if(Io(i,e,s))return!0;for(const r of s.rings)if(kd(i,e,r)<=n)return!0}return!1}function sd(i){const e={x0:1/0,y0:1/0,x1:-1/0,y1:-1/0};for(const t of i){const n=t.rings[0];for(let s=0;s<n.length;s+=2)e.x0=Math.min(e.x0,n[s]),e.x1=Math.max(e.x1,n[s]),e.y0=Math.min(e.y0,n[s+1]),e.y1=Math.max(e.y1,n[s+1])}return e}function Zp(i,e,t){for(const n of e){for(const o of n.rings)for(let a=0;a<o.length;a+=2)if(!id(o[a],o[a+1],i,t))return!1;const s=$c(n.rings),r=Wc(n.rings);for(let o=0;o<r.length;o+=3){const a=(s[2*r[o]]+s[2*r[o+1]]+s[2*r[o+2]])/3,l=(s[2*r[o]+1]+s[2*r[o+1]+1]+s[2*r[o+2]+1])/3;if(!id(a,l,i,t))return!1}}return!0}function ST(i,e,t){const n=(r,o,a)=>a.some(l=>Io(r,o,l)&&l.rings.every(c=>kd(r,o,c)>t)),s=(r,o)=>{for(const a of r){const l=$c(a.rings),c=Wc(a.rings);for(let h=0;h<l.length;h+=2)if(n(l[h],l[h+1],o))return!0;for(let h=0;h<c.length;h+=3){const u=(l[2*c[h]]+l[2*c[h+1]]+l[2*c[h+2]])/3,d=(l[2*c[h]+1]+l[2*c[h+1]+1]+l[2*c[h+2]+1])/3;if(n(u,d,o))return!0}}return!1};return s(i,e)||s(e,i)}function ET(i,e,t){const n=sd(i),s=i.reduce((l,c)=>l+c.area,0),r=Math.max(.5,Math.sqrt(s/4e3));let o=0,a=0;for(let l=n.x0+r/2;l<n.x1;l+=r)for(let c=n.y0+r/2;c<n.y1;c+=r)i.some(h=>Io(l,c,h))&&(o++,e.some(h=>id(l,c,h,t))&&a++);return o===0?0:a/o}function $c(i){const e=new Float64Array(i.reduce((n,s)=>n+s.length,0));let t=0;for(const n of i)e.set(n,t),t+=n.length;return e}class wT{constructor(){et(this,"positions",[]);et(this,"normals",[]);et(this,"indices",[]);et(this,"roof",[]);et(this,"edges",[]);et(this,"wallTriangles",0);et(this,"roofTriangles",0)}get vertexCount(){return this.positions.length/3}get triangleCount(){return this.indices.length/3}vertex(e,t,n,s,r,o,a){return this.positions.push(e,t,n),this.normals.push(s,r,o),this.roof.push(a?1:0),this.vertexCount-1}walls(e,t,n){for(const s of e){const r=s.length/2;for(let o=0;o<r;o++){const a=s[2*o],l=s[2*o+1],c=s[2*((o+1)%r)],h=s[2*((o+1)%r)+1],u=Math.hypot(c-a,h-l);if(u<1e-6)continue;const d=(h-l)/u,f=-(c-a)/u,p=this.vertex(a,l,t,d,f,0,!1),_=this.vertex(c,h,t,d,f,0,!1),g=this.vertex(c,h,n,d,f,0,!1),m=this.vertex(a,l,n,d,f,0,!1);this.indices.push(p,_,g,p,g,m),this.wallTriangles+=2}}}roofCap(e,t){const n=$c(e),s=this.vertexCount;for(let a=0;a<n.length;a+=2)this.vertex(n[a],n[a+1],t,0,0,1,!0);const r=Wc(e);let o=0;for(let a=0;a<r.length;a+=3){let l=r[a],c=r[a+1];const h=r[a+2],u=(n[2*c]-n[2*l])*(n[2*h+1]-n[2*l+1])-(n[2*c+1]-n[2*l+1])*(n[2*h]-n[2*l]);Math.abs(u)<1e-6||(u<0&&([l,c]=[c,l]),this.indices.push(s+l,s+c,s+h),this.roofTriangles++,o+=Math.abs(u)/2)}return o}outline(e,t,n,s,r){for(const o of e){const a=o.length/2;for(let l=0;l<a;l++){const c=o[2*l],h=o[2*l+1],u=o[2*((l+1)%a)],d=o[2*((l+1)%a)+1];for(const x of t)this.edges.push(c,h,x,u,d,x);const f=o[2*((l+a-1)%a)],p=o[2*((l+a-1)%a)+1],_=c-f,g=h-p,m=u-c,M=d-h,v=Math.hypot(_,g)*Math.hypot(m,M);v>0&&(_*m+g*M)/v<r&&this.edges.push(c,h,n,c,h,s)}}}}function TT(i,e,t={}){const n={...Bd,...t},s=new wT,r=[],o=[],a=Math.cos(n.cornerAngleDeg*Math.PI/180),l=n.containmentToleranceMeters,c=()=>({height:0,levels:0,default:0}),h={building:c(),part:c()},u={"replaces-outline":0,"on-outline":0,standalone:0};let d=0,f=0;const p=(I,D,P,F=[],$=[])=>o.push({id:I,kind:D,reason:P,outlineIds:F,partIds:$}),_=(I,D,P,F,$,ee,W,Q,pe,Z,oe)=>{const _e=s.triangleCount,se=s.vertexCount;let Me=0;const Ce=Z==="on-outline"||$!==null;for(const Ie of P)s.walls(Ie.rings,W,Q),Me+=s.roofCap(Ie.rings,Q),s.outline(Ie.rings,Ce?[W,Q]:[Q],W,Q,a);h[D][F.source]++,pe&&f++,r.push({id:I.id,kind:D,building:I.building,name:I.name,heightMeters:F.meters,heightSource:F.source,minHeightMeters:($==null?void 0:$.meters)??null,minHeightSource:($==null?void 0:$.source)??null,placement:Z,outlineId:oe,groundMinUp:ee.min,groundMaxUp:ee.max,baseUp:W,roofUp:Q,roofRaised:pe,firstTriangle:_e,triangleCount:s.triangleCount-_e,firstVertex:se,vertexCount:s.vertexCount-se,roofAreaSquareMeters:Me})},g=(I,D,P)=>{const F=D+I.meters,$=Math.max(F,P.max+n.minClearanceMeters);return{roofUp:$,raised:$>F}},m=(I,D)=>I?D+I.meters:D-n.foundationDepthMeters,M=new Map;for(const I of i.buildings){const D=nd(I.polygons,n.minRingAreaSquareMeters);if(d+=D.ringsDropped,D.polygons.length===0){p(I.id,"building","degenerate");continue}const P=Vh(D.polygons,e,n);if(!P){p(I.id,"building","no-terrain");continue}const F=Yp(I,n);M.set(I.id,{f:I,polygons:D.polygons,bounds:sd(D.polygons),area:D.polygons.reduce(($,ee)=>$+ee.area,0),ground:P,h:F,...g(F,P.min,P)})}const v=(I,D)=>I.x0>=D.x0-l&&I.x1<=D.x1+l&&I.y0>=D.y0-l&&I.y1<=D.y1+l,x=200,R=[...M.keys()],S=new Map;R.forEach((I,D)=>{const P=M.get(I).bounds;for(let F=Math.floor((P.y0-l)/x);F<=Math.floor((P.y1+l)/x);F++)for(let $=Math.floor((P.x0-l)/x);$<=Math.floor((P.x1+l)/x);$++){const ee=`${$}:${F}`;let W=S.get(ee);W||S.set(ee,W=[]),W.push(D)}});const E=(I,D,P)=>{const F=[];for(const $ of S.get(`${Math.floor(D.x0/x)}:${Math.floor(D.y0/x)}`)??[]){const ee=R[$],W=M.get(ee);ee!==P&&v(D,W.bounds)&&Zp(W.polygons,I,l)&&F.push(ee)}return F},L=(I,D)=>{for(const P of I)if(I.every(F=>F===P||(D.get(P)??[]).includes(F)))return P;return null},b=new Map;for(const[I,D]of M){const P=E(D.polygons,D.bounds,I).filter(F=>{const $=M.get(F);return!Zp(D.polygons,$.polygons,l)||$.area>D.area||$.area===D.area&&Hg(F,I)<0});P.length>0&&b.set(I,P)}const y=new Map;for(const[I,D]of b){const P=D.length===1?D[0]:L(D,b);P&&y.set(I,P)}const C=[];for(const I of i.parts){const D=nd(I.polygons,n.minRingAreaSquareMeters);if(d+=D.ringsDropped,D.polygons.length===0){p(I.id,"part","degenerate");continue}const P=sd(D.polygons),F=E(D.polygons,P,null);if(F.length>1){const $=L(F,b);if(!$){p(I.id,"part","part-ambiguous",F);continue}C.push({f:I,polygons:D.polygons,host:$});continue}if(F.length===0){const $=[];for(const[ee,W]of M){const Q=W.bounds;P.x1<Q.x0||P.x0>Q.x1||P.y1<Q.y0||P.y0>Q.y1||ST(W.polygons,D.polygons,l)&&$.push(ee)}if($.length>0){p(I.id,"part","part-overlaps-outline",$);continue}}C.push({f:I,polygons:D.polygons,host:F[0]??null})}const H=new Map;for(const I of C)I.host&&(H.has(I.host)||H.set(I.host,[]),H.get(I.host).push(I));const G=new Set;for(const[I,D]of H)ET(M.get(I).polygons,D.map(P=>P.polygons),l)>=n.outlineReplacementCoverage&&G.add(I);for(const[I,D]of M){const{f:P,polygons:F,ground:$,h:ee}=D;if(G.has(I)){p(I,"building","outline-replaced-by-parts",[],H.get(I).map(Z=>Z.f.id));continue}const W=Kp(P,ee.meters,n),Q=y.get(I),pe=Q&&!G.has(Q)?M.get(Q):null;if(pe){if(D.roofUp<pe.roofUp+n.minPartRiseMeters){p(I,"building","outline-within-outline",[Q]);continue}_(P,"building",F,ee,W,$,Math.max(pe.roofUp,m(W,$.min)),D.roofUp,D.raised,"on-outline",Q);continue}_(P,"building",F,ee,W,$,m(W,$.min),D.roofUp,D.raised,null,null)}for(const{f:I,polygons:D,host:P}of C){const F=Yp(I,n),$=Kp(I,F.meters,n),ee=P?M.get(P):null;if(!ee){const Q=Vh(D,e,n);if(!Q){p(I.id,"part","no-terrain");continue}const pe=g(F,Q.min,Q);_(I,"part",D,F,$,Q,m($,Q.min),pe.roofUp,pe.raised,"standalone",null),u.standalone++;continue}if(G.has(P)){const Q=Vh(D,e,n)??ee.ground,pe=g(F,ee.ground.min,{min:ee.ground.min,max:Q.max});_(I,"part",D,F,$,ee.ground,m($,ee.ground.min),pe.roofUp,pe.raised,"replaces-outline",P),u["replaces-outline"]++;continue}const W=ee.ground.min+F.meters;if(W<ee.roofUp+n.minPartRiseMeters){p(I.id,"part","part-within-outline",[P]);continue}_(I,"part",D,F,$,ee.ground,Math.max(ee.roofUp,m($,ee.ground.min)),W,!1,"on-outline",P),u["on-outline"]++}const O={"no-terrain":0,degenerate:0,"part-within-outline":0,"part-ambiguous":0,"part-overlaps-outline":0,"outline-replaced-by-parts":0,"outline-within-outline":0};for(const I of o)O[I.reason]++;return{mesh:{positions:Float32Array.from(s.positions),normals:Float32Array.from(s.normals),indices:Uint32Array.from(s.indices),roof:Uint8Array.from(s.roof)},edges:{positions:Float32Array.from(s.edges)},features:r,excluded:o,stats:{buildingsDrawn:r.filter(I=>I.kind==="building").length,partsDrawn:r.filter(I=>I.kind==="part").length,heightSources:h,partPlacement:u,excluded:O,roofRaised:f,ringsDropped:d,triangles:s.triangleCount,wallTriangles:s.wallTriangles,roofTriangles:s.roofTriangles,vertices:s.vertexCount,edgeSegments:s.edges.length/6}}}function AT(i,e){const t=i.features;let n=0,s=t.length-1;for(;n<=s;){const r=n+s>>1,o=t[r];if(e<o.firstTriangle)s=r-1;else if(e>=o.firstTriangle+o.triangleCount)n=r+1;else return o}return null}const RT={renderOffsetMeters:.25,riverMaxEdgeMeters:25,riverShoreClearanceMeters:12,riverSmoothingMeters:15,riverRoughnessFactor:.5,riverOutlierMeters:.75,levelSampleMeters:5,levelMaxSpreadMeters:1,levelPercentile:.9,drapedMaxEdgeMeters:5,minRingAreaSquareMeters:1};function CT(i){return i.water==="river"||i.water==="stream"||i.water==="rapids"?"river":"level"}var Zr,Ua,rd;class Jp{constructor(e,t){Se(this,Ua);Se(this,Zr,new Map);et(this,"cell");this.cell=t;for(const n of e){const s=gt(this,Ua,rd).call(this,Math.floor(n.e/t),Math.floor(n.n/t));let r=U(this,Zr).get(s);r||U(this,Zr).set(s,r=[]),r.push(n)}}near(e,t,n){const s=[],r=Math.floor((e-n)/this.cell),o=Math.floor((e+n)/this.cell),a=Math.floor((t-n)/this.cell),l=Math.floor((t+n)/this.cell);for(let c=r;c<=o;c++)for(let h=a;h<=l;h++)for(const u of U(this,Zr).get(gt(this,Ua,rd).call(this,c,h))??[])(u.e-e)**2+(u.n-t)**2<=n*n&&s.push(u);return s}}Zr=new WeakMap,Ua=new WeakSet,rd=function(e,t){return`${e},${t}`};const LT=i=>{const e=[...i].sort((n,s)=>n-s),t=e.length>>1;return e.length%2?e[t]:(e[t-1]+e[t])/2};function PT(i,e,t){const n=e.metadata.grid,s=[];for(const r of i){let o=1/0,a=1/0,l=-1/0,c=-1/0;const h=r.rings[0];for(let _=0;_<h.length;_+=2)o=Math.min(o,h[_]),l=Math.max(l,h[_]),a=Math.min(a,h[_+1]),c=Math.max(c,h[_+1]);const u=Math.max(0,Math.ceil((o-n.west)/n.spacingMeters)),d=Math.min(n.columns-1,Math.floor((l-n.west)/n.spacingMeters)),f=Math.max(0,Math.ceil((n.north-c)/n.spacingMeters)),p=Math.min(n.rows-1,Math.floor((n.north-a)/n.spacingMeters));for(let _=f;_<=p;_++)for(let g=u;g<=d;g++){const m=n.west+g*n.spacingMeters,M=n.north-_*n.spacingMeters;if(!Io(m,M,r)||r.rings.some(x=>kd(m,M,x)<t))continue;const v=e.sample(m,M);v.available&&s.push({e:m,n:M,up:v.localY})}}return s}var Fa,cs,Ni,Jr;class DT{constructor(e,t,n){Se(this,Fa);Se(this,cs);Se(this,Ni);Se(this,Jr);et(this,"keptSamples");const s=Xe(this,Fa,t.metadata.grid),r=n.riverSmoothingMeters;Xe(this,cs,new Float64Array(s.columns*s.rows)),Xe(this,Ni,new Uint8Array(s.columns*s.rows)),Xe(this,Jr,new Uint8Array(s.columns*s.rows));const o=new Jp(e,3*r),a=e.filter(b=>Math.abs(b.up-LT(o.near(b.e,b.n,2*r).map(y=>y.up)))<=n.riverOutlierMeters);this.keptSamples=a.length;const l=new Jp(a,3*r),c=15,h=3*r+c*s.spacingMeters;let u=1/0,d=-1/0,f=1/0,p=-1/0;for(const b of e)u=Math.min(u,b.e),d=Math.max(d,b.e),f=Math.min(f,b.n),p=Math.max(p,b.n);const _=Math.max(0,Math.floor((u-h-s.west)/s.spacingMeters)),g=Math.min(s.columns-1,Math.ceil((d+h-s.west)/s.spacingMeters)),m=Math.max(0,Math.floor((s.north-p-h)/s.spacingMeters)),M=Math.min(s.rows-1,Math.ceil((s.north-f+h)/s.spacingMeters)),v=Math.ceil(3*r/s.spacingMeters),x=Math.max(0,Math.floor((u-s.west)/s.spacingMeters)-v),R=Math.min(s.columns-1,Math.ceil((d-s.west)/s.spacingMeters)+v),S=Math.max(0,Math.floor((s.north-p)/s.spacingMeters)-v),E=Math.min(s.rows-1,Math.ceil((s.north-f)/s.spacingMeters)+v);for(let b=S;b<=E;b++)for(let y=x;y<=R;y++){const C=s.west+y*s.spacingMeters,H=s.north-b*s.spacingMeters,G=NT(l.near(C,H,3*r),C,H,r);G&&(U(this,cs)[b*s.columns+y]=G.up+n.riverRoughnessFactor*G.residualSd,U(this,Ni)[b*s.columns+y]=1)}const L=[[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[-1,1],[1,-1],[1,1]];for(let b=0;b<c;b++){const y=[];for(let C=m;C<=M;C++)for(let H=_;H<=g;H++){const G=C*s.columns+H;if(U(this,Ni)[G])continue;let O=0,I=0;for(const[D,P]of L){const F=C+D,$=H+P;F<0||$<0||F>=s.rows||$>=s.columns||!U(this,Ni)[F*s.columns+$]||(O++,I+=U(this,cs)[F*s.columns+$])}O>0&&y.push([G,I/O])}if(y.length===0)break;for(const[C,H]of y)U(this,cs)[C]=H,U(this,Ni)[C]=1,U(this,Jr)[C]=1}}at(e,t){const n=U(this,Fa),s=Math.min(Math.max((e-n.west)/n.spacingMeters,0),n.columns-1),r=Math.min(Math.max((n.north-t)/n.spacingMeters,0),n.rows-1),o=Math.min(Math.floor(s),n.columns-2),a=Math.min(Math.floor(r),n.rows-2),l=s-o,c=r-a,h=[a*n.columns+o,a*n.columns+o+1,(a+1)*n.columns+o,(a+1)*n.columns+o+1];if(h.some(_=>!U(this,Ni)[_]))return null;const[u,d,f,p]=h.map(_=>U(this,cs)[_]);return{up:u*(1-l)*(1-c)+d*l*(1-c)+f*(1-l)*c+p*l*c,filled:h.some(_=>U(this,Jr)[_]===1)}}}Fa=new WeakMap,cs=new WeakMap,Ni=new WeakMap,Jr=new WeakMap;const IT=.05,Qp=.5;function NT(i,e,t,n){let s=0,r=0,o=0,a=0,l=0,c=0,h=0,u=0,d=0,f=0,p=1/0,_=-1/0;for(const E of i){p=Math.min(p,E.up),_=Math.max(_,E.up);const L=E.e-e,b=E.n-t,y=Math.exp(-(L*L+b*b)/(2*n*n));s+=y,r+=y*L,o+=y*b,a+=y*L*L,l+=y*L*b,c+=y*b*b,h+=y*E.up,u+=y*L*E.up,d+=y*b*E.up,f+=y*E.up*E.up}if(s<=1e-6)return null;const g=IT*n*n*s;a+=g,c+=g;const m=s*(a*c-l*l)-r*(r*c-l*o)+o*(r*l-a*o),M=s*(n*n)**2;if(!(Math.abs(m)>1e-6*M)){const E=h/s;return{up:E,residualSd:Math.sqrt(Math.max(0,f/s-E*E))}}const v=(h*(a*c-l*l)-r*(u*c-l*d)+o*(u*l-a*d))/m,x=(s*(u*c-d*l)-h*(r*c-l*o)+o*(r*d-u*o))/m,R=(s*(a*d-l*u)-r*(r*d-u*o)+h*(r*l-a*o))/m,S=(f-v*h-x*u-R*d)/s;return{up:Math.min(_+Qp,Math.max(p-Qp,v)),residualSd:Math.sqrt(Math.max(0,S))}}function em(i,e,t){const n=(f,p)=>(i[2*f]-i[2*p])**2+(i[2*f+1]-i[2*p+1])**2,s=(f,p)=>f<p?`${f},${p}`:`${p},${f}`,r=new Map,o=[],a=[],l=(f,p,_)=>{const g=o.length;a.push(f,p,_),o.push(!0);for(const[m,M]of[[f,p],[p,_],[_,f]]){const v=s(m,M),x=r.get(v);x?x.push(g):r.set(v,[g])}return g},c=f=>{o[f]=!1;const p=[a[3*f],a[3*f+1],a[3*f+2]];for(const[_,g]of[[p[0],p[1]],[p[1],p[2]],[p[2],p[0]]]){const m=s(_,g),M=r.get(m);M.splice(M.indexOf(f),1),M.length===0&&r.delete(m)}return p},h=f=>{const p=[a[3*f],a[3*f+1],a[3*f+2]];let _=0,g=-1,m="";for(let M=0;M<3;M++){const v=n(p[M],p[(M+1)%3]),x=s(p[M],p[(M+1)%3]);(v>g||v===g&&x<m)&&(g=v,_=M,m=x)}return[p[_],p[(_+1)%3],g]};for(let f=0;f<e.length;f+=3)l(e[f],e[f+1],e[f+2]);const u=t*t;let d=0;for(let f=0;f<o.length;f++)for(;o[f]&&h(f)[2]>u;){const p=[f];for(;p.length>0;){if(++d>5e6)throw new Error("water mesh refinement did not converge");const _=p[p.length-1];if(!o[_]){p.pop();continue}const[g,m]=h(_),M=s(g,m),v=(r.get(M)??[]).find(R=>R!==_);if(v!==void 0){const[R,S]=h(v);if(s(R,S)!==M){p.push(v);continue}}const x=i.length/2;i.push((i[2*g]+i[2*m])/2,(i[2*g+1]+i[2*m+1])/2);for(const R of v===void 0?[_]:[_,v]){const S=c(R),E=S[0]!==g&&S[0]!==m?1:S[1]!==g&&S[1]!==m?2:0,L=S[E],b=S[(E+1)%3],y=S[(E+2)%3];l(L,x,y),l(x,b,y)}p.pop()}}e.length=0;for(let f=0;f<o.length;f++)o[f]&&e.push(a[3*f],a[3*f+1],a[3*f+2])}function UT(i,e,t={}){const n={...RT,...t},s=[];let r=0;const o=[];for(const M of i){const v=nd(M.polygons,n.minRingAreaSquareMeters);if(r+=v.ringsDropped,v.polygons.length===0){s.push({id:M.id,reason:"degenerate"});continue}o.push({f:M,polygons:v.polygons,kind:CT(M)})}const a=[],l=new Map;for(const M of o){if(M.kind!=="river")continue;const v=PT(M.polygons,e,n.riverShoreClearanceMeters);l.set(M.f.id,v.length);for(const x of v)a.push(x)}const c=a.length>0?new DT(a,e,n):null,h=[],u=[],d=[],f=[],p=[],_={river:0,level:0,draped:0};let g=0,m=0;for(const{f:M,polygons:v,kind:x}of o){const R=x==="level"?tm(v,e,n):null;if(x==="level"&&!R){s.push({id:M.id,reason:"no-terrain"});continue}const S=x==="river"?"river":R.spread<=n.levelMaxSpreadMeters?"level":"draped",E=[],L=[];for(const W of v){const Q=$c(W.rings),pe=E.length/2;for(let oe=0;oe<Q.length;oe++)E.push(Q[oe]);const Z=Wc(W.rings);for(let oe=0;oe<Z.length;oe+=3){let _e=pe+Z[oe],se=pe+Z[oe+1];const Me=pe+Z[oe+2],Ce=(E[2*se]-E[2*_e])*(E[2*Me+1]-E[2*_e+1])-(E[2*se+1]-E[2*_e+1])*(E[2*Me]-E[2*_e]);Math.abs(Ce)<1e-6||(Ce<0&&([_e,se]=[se,_e]),L.push(_e,se,Me))}}S==="river"&&em(E,L,n.riverMaxEdgeMeters),S==="draped"&&em(E,L,n.drapedMaxEdgeMeters);const b=E.length/2,y=new Float64Array(b);let C=0,H=!1;if(S==="river"&&c){H=!0,C=l.get(M.id)??0;for(let W=0;W<b&&H;W++){const Q=c.at(E[2*W],E[2*W+1]);if(!Q){H=!1;break}y[W]=Q.up+n.renderOffsetMeters,Q.filled&&m++}}if(S==="draped"){H=!0,C=b;for(let W=0;W<b&&H;W++){const Q=e.sample(E[2*W],E[2*W+1]);if(!Q.available){H=!1;break}y[W]=Q.localY+n.renderOffsetMeters}}if(!H){const W=R??tm(v,e,n);if(!W){s.push({id:M.id,reason:"no-terrain"});continue}y.fill(W.up+n.renderOffsetMeters),C=W.samples}const G=h.length/3,O=d.length/3,I=new Float64Array(b*3);for(let W=0;W<L.length;W+=3){const Q=L[W],pe=L[W+1],Z=L[W+2],oe=E[2*pe]-E[2*Q],_e=E[2*pe+1]-E[2*Q+1],se=y[pe]-y[Q],Me=E[2*Z]-E[2*Q],Ce=E[2*Z+1]-E[2*Q+1],Ie=y[Z]-y[Q],dt=_e*Ie-se*Ce,Fe=se*Me-oe*Ie,Te=oe*Ce-_e*Me;for(const z of[Q,pe,Z])I[3*z]=I[3*z]+dt,I[3*z+1]=I[3*z+1]+Fe,I[3*z+2]=I[3*z+2]+Te}let D=1/0,P=-1/0;for(let W=0;W<b;W++){h.push(E[2*W],E[2*W+1],y[W]);const Q=Math.hypot(I[3*W],I[3*W+1],I[3*W+2])||1;u.push(I[3*W]/Q,I[3*W+1]/Q,I[3*W+2]/Q),D=Math.min(D,y[W]),P=Math.max(P,y[W])}const F=new Map,$=(W,Q)=>W<Q?`${W},${Q}`:`${Q},${W}`;for(let W=0;W<L.length;W+=3){for(const[Q,pe]of[[L[W],L[W+1]],[L[W+1],L[W+2]],[L[W+2],L[W]]])F.set($(Q,pe),(F.get($(Q,pe))??0)+1);d.push(G+L[W],G+L[W+1],G+L[W+2])}for(let W=0;W<L.length;W+=3)for(const[Q,pe]of[[L[W],L[W+1]],[L[W+1],L[W+2]],[L[W+2],L[W]]])F.get($(Q,pe))===1&&f.push(E[2*Q],E[2*Q+1],y[Q],E[2*pe],E[2*pe+1],y[pe]);const ee=v.reduce((W,Q)=>W+Q.rings.length-1,0);g+=ee,_[S]++,p.push({id:M.id,water:M.water,name:M.name,kind:S,polygons:v.length,holes:ee,areaSquareMeters:v.reduce((W,Q)=>W+Q.area,0),surfaceMinUp:D,surfaceMaxUp:P,samples:C,firstTriangle:O,triangleCount:d.length/3-O,firstVertex:G,vertexCount:b})}return{mesh:{positions:Float32Array.from(h),normals:Float32Array.from(u),indices:Uint32Array.from(d)},shorelines:{positions:Float32Array.from(f)},features:p,excluded:s,stats:{features:_,holes:g,ringsDropped:r,riverSamples:a.length,riverOutliers:a.length-((c==null?void 0:c.keptSamples)??0),riverVerticesGapFilled:m,triangles:d.length/3,vertices:h.length/3,shorelineSegments:f.length/6}}}function tm(i,e,t){const n=[],s=(o,a)=>{const l=e.sample(o,a);l.available&&n.push(l.localY)};for(const o of i){const a=o.rings[0];let l=1/0,c=1/0,h=-1/0,u=-1/0;for(let f=0;f<a.length;f+=2)l=Math.min(l,a[f]),h=Math.max(h,a[f]),c=Math.min(c,a[f+1]),u=Math.max(u,a[f+1]);const d=Math.min(t.levelSampleMeters,Math.max(.5,Math.sqrt(o.area/50)));for(let f=l+d/2;f<h;f+=d)for(let p=c+d/2;p<u;p+=d)Io(f,p,o)&&s(f,p);for(const f of o.rings)for(let p=0;p<f.length;p+=2)s(f[p],f[p+1])}if(n.length===0)return null;n.sort((o,a)=>o-a);const r=o=>n[Math.floor(o*(n.length-1))];return{up:r(t.levelPercentile),spread:r(.9)-r(.1),samples:n.length}}function FT(i,e){const t=i.features;let n=0,s=t.length-1;for(;n<=s;){const r=n+s>>1,o=t[r];if(e<o.firstTriangle)s=r-1;else if(e>=o.firstTriangle+o.triangleCount)n=r+1;else return o}return null}const Qg=["footprint-corner","roof-corner","roof-edge","road-vertex","junction","bridge-edge","tree","lamp"],OT=["F","R","E","V","J","B","T","L"],BT=Object.fromEntries(Qg.map((i,e)=>[i,e])),kT={cellMeters:200,cornerAngleDeg:25,roofEdgeMinMeters:24,roadLiftMeters:.4,bridgeStepMeters:20,defaultTreeHeightMeters:9};function od(i){const e=i.replace(/_link$/,"");return e==="motorway"||e==="trunk"?1:e==="primary"?.8:e==="secondary"?.7:e==="tertiary"?.55:e==="residential"||e==="unclassified"||e==="living_street"?.35:e==="service"?.15:.25}const ma=i=>i<0?0:i>1?1:i,ec=(i,e)=>i+32768<<16|e+32768;var Oa,Ui,Gs,Ba,ka,za,Ha,Ga;class AA{constructor(e,t={}){et(this,"options");Se(this,Oa);Se(this,Ui,new Map);Se(this,Gs,new Map);Se(this,Ba);Se(this,ka,0);Se(this,za,0);Se(this,Ha,0);Se(this,Ga);this.options={...kT,...t},Xe(this,Oa,e);const n=nm(),s=(o,a)=>{const l=ec(this.cellIndex(o),this.cellIndex(a));let c=U(this,Ui).get(l);return c||(c={buildings:[],roadVertices:[],bridges:[],trees:[],fillers:[]},U(this,Ui).set(l,c)),c};e.buildings.forEach(({feature:o},a)=>{const l=zT(o);l&&s((l.minE+l.maxE)/2,(l.minN+l.maxN)/2).buildings.push(a)}),e.roads.forEach((o,a)=>{o.category==="drivable"&&o.lines.forEach((l,c)=>{for(let h=0;h<l.length/2;h++)s(l[2*h],l[2*h+1]).roadVertices.push(a,c,h)})}),e.bridges.forEach((o,a)=>{if(o.status!=="deck")return;const l=o.profiles[0];if(!l||l.length<3)return;const c=3*Math.floor(l.length/6);s(l[c],l[c+1]).bridges.push(a)}),e.trees.forEach((o,a)=>s(o.east,o.north).trees.push(a)),e.fillerTrees.forEach((o,a)=>s(o.east,o.north).fillers.push(a));let r=0;for(const o of U(this,Ui).values())r+=8*(o.buildings.length+o.roadVertices.length+o.bridges.length+o.trees.length+o.fillers.length)+120;Xe(this,Ga,r),Xe(this,Ba,nm()-n)}cellIndex(e){return Math.floor(e/this.options.cellMeters)}get stats(){return{binMilliseconds:U(this,Ba),cellsBinned:U(this,Ui).size,cellsBuilt:U(this,Gs).size,objectsBuilt:U(this,ka),anchorsBuilt:U(this,za),bytes:U(this,Ha)+U(this,Ga)}}cellsWithin(e,t,n){const s=this.options.cellMeters,r=[];for(let o=this.cellIndex(e-n);o<=this.cellIndex(e+n);o++)for(let a=this.cellIndex(t-n);a<=this.cellIndex(t+n);a++){if(!U(this,Ui).has(ec(o,a)))continue;const l=Math.max(o*s-e,0,e-(o+1)*s),c=Math.max(a*s-t,0,t-(a+1)*s),h=Math.hypot(l,c);h<=n&&r.push([o,a,h])}return r.sort((o,a)=>o[2]-a[2]||o[0]-a[0]||o[1]-a[1]),r.map(([o,a])=>[o,a])}isCellBuilt(e,t){return U(this,Gs).has(ec(e,t))}cell(e,t){const n=ec(e,t),s=U(this,Gs).get(n);if(s)return s;const r=VT(e,t,U(this,Ui).get(n),U(this,Oa),this.options);return U(this,Gs).set(n,r),Xe(this,ka,U(this,ka)+r.objects.length),Xe(this,za,U(this,za)+r.anchorKind.length),Xe(this,Ha,U(this,Ha)+(r.anchors.byteLength+r.anchorKind.byteLength+r.anchorObject.byteLength+r.objects.length*200)),r}anchorId(e,t){const n=e.objects[e.anchorObject[t]];return`${n.key}#${OT[e.anchorKind[t]]}${t-n.firstAnchor}`}anchorKind(e,t){return Qg[e.anchorKind[t]]}}Oa=new WeakMap,Ui=new WeakMap,Gs=new WeakMap,Ba=new WeakMap,ka=new WeakMap,za=new WeakMap,Ha=new WeakMap,Ga=new WeakMap;const nm=()=>globalThis.performance?performance.now():Date.now();function zT(i){let e=1/0,t=1/0,n=-1/0,s=-1/0;for(const r of i.polygons){const o=r[0];if(o)for(let a=0;a<o.length;a+=2){const l=o[a],c=o[a+1];l<e&&(e=l),l>n&&(n=l),c<t&&(t=c),c>s&&(s=c)}}return Number.isFinite(e)?{minE:e,minN:t,maxE:n,maxN:s}:null}function HT(i,e){let t=i.length/2;if(t>=2&&i[0]===i[2*(t-1)]&&i[1]===i[2*(t-1)+1]&&t--,t<3)return Array.from({length:t},(r,o)=>o);const n=Math.cos(e*Math.PI/180),s=[];for(let r=0;r<t;r++){const o=(r+t-1)%t,a=(r+1)%t,l=i[2*r]-i[2*o],c=i[2*r+1]-i[2*o+1],h=i[2*a]-i[2*r],u=i[2*a+1]-i[2*r+1],d=Math.hypot(l,c),f=Math.hypot(h,u);d===0||f===0||(l*h+c*u)/(d*f)<n&&s.push(r)}return s}var Va;class GT{constructor(){et(this,"objects",[]);et(this,"pos",[]);et(this,"kind",[]);et(this,"owner",[]);Se(this,Va,0)}begin(){Xe(this,Va,this.kind.length)}anchor(e,t,n,s){this.pos.push(t,n,s),this.kind.push(BT[e]),this.owner.push(this.objects.length)}end(e){const t=U(this,Va),n=this.kind.length-t;let s=1/0,r=1/0,o=1/0,a=-1/0,l=-1/0,c=-1/0;for(let h=t;h<t+n;h++){const u=this.pos[3*h],d=this.pos[3*h+1],f=this.pos[3*h+2];s=Math.min(s,u),a=Math.max(a,u),r=Math.min(r,d),l=Math.max(l,d),o=Math.min(o,f),c=Math.max(c,f)}this.objects.push({minE:s,minN:r,minU:o,maxE:a,maxN:l,maxU:c,...e,firstAnchor:t,anchorCount:n})}}Va=new WeakMap;const im=i=>(Math.round(i*10)/10).toFixed(1);function VT(i,e,t,n,s){const r=new GT;if(t){for(const o of t.buildings)WT(r,n.buildings[o],n,s);$T(r,i,e,t.roadVertices,n,s);for(const o of t.bridges)XT(r,n.bridges[o],n,s);for(const o of t.trees)jT(r,n.trees[o],n,s);for(const o of t.fillers)qT(r,n.fillerTrees[o],n)}return{ix:i,iy:e,objects:r.objects,anchors:Float32Array.from(r.pos),anchorKind:Uint8Array.from(r.kind),anchorObject:Uint32Array.from(r.owner)}}function WT(i,{feature:e,massed:t},n,s){i.begin();const r=Math.max(t.baseUp,t.groundMinUp);let o=1/0,a=1/0,l=-1/0,c=-1/0;for(const u of e.polygons){const d=u[0];if(!d)continue;for(let p=0;p<d.length;p+=2)o=Math.min(o,d[p]),l=Math.max(l,d[p]),a=Math.min(a,d[p+1]),c=Math.max(c,d[p+1]);const f=HT(d,s.cornerAngleDeg);for(const p of f){const _=d[2*p],g=d[2*p+1],m=n.groundUp(_,g);i.anchor("footprint-corner",_,g,Math.max(t.baseUp,m??t.groundMinUp)),i.anchor("roof-corner",_,g,t.roofUp)}for(let p=0;p<f.length;p++){const _=f[p],g=f[(p+1)%f.length],m=d[2*_],M=d[2*_+1],v=d[2*g],x=d[2*g+1];Math.hypot(v-m,x-M)>=s.roofEdgeMinMeters&&i.anchor("roof-edge",(m+v)/2,(M+x)/2,t.roofUp)}}const h=t.roofAreaSquareMeters;i.end({key:`bldg:${t.id}`,cls:"building",osmId:t.id,name:t.name,minE:o,minN:a,minU:r,maxE:l,maxN:c,maxU:t.roofUp,labelE:(o+l)/2,labelN:(a+c)/2,labelU:t.roofUp,prominence:ma(.7*ma(t.heightMeters/80)+.3*ma(Math.sqrt(h)/70)),detail:{cls:"building",kind:t.kind,building:t.building,heightMeters:t.heightMeters,heightSource:t.heightSource,baseUp:t.baseUp,roofUp:t.roofUp,footprint:e.polygons}})}function $T(i,e,t,n,s,r){var d;if(n.length===0)return;const o=new Map;for(let f=0;f<n.length;f+=3){const p=n[f];let _=o.get(p);_||(_=[],o.set(p,_)),_.push(n[f+1],n[f+2])}const a=(e+.5)*r.cellMeters,l=(t+.5)*r.cellMeters,c=(f,p,_)=>(s.roadUp(f.id,p,_)??s.groundUp(p,_)??0)+r.roadLiftMeters,h=new Map;for(const[f,p]of o){const _=s.roads[f];i.begin();let g=-1,m=1/0;for(let M=0;M<p.length;M+=2){const v=_.lines[p[M]],x=p[M+1],R=v[2*x],S=v[2*x+1];i.anchor("road-vertex",R,S,c(_,R,S));const E=Math.hypot(R-a,S-l);E<m&&(m=E,g=i.kind.length-1);const L=v.length/2-1,b=`${R},${S}`;let y=h.get(b);y||(y={e:R,n:S,arms:0,ways:new Set},h.set(b,y)),y.arms+=x===0||x===L?1:2,y.ways.add(f)}i.end({key:`road:${_.id}@${e},${t}`,cls:"road",osmId:_.id,name:_.name,labelE:i.pos[3*g],labelN:i.pos[3*g+1],labelU:i.pos[3*g+2],prominence:od(_.highway),detail:{cls:"road",highway:_.highway,ref:_.ref,lanes:_.lanes,bridge:_.bridge!==null&&_.bridge!=="no",tunnel:_.tunnel!==null&&_.tunnel!=="no"}})}const u=[...h.values()].filter(f=>f.arms>=3&&f.ways.size>=2);u.sort((f,p)=>f.e-p.e||f.n-p.n);for(const f of u){const p=[...f.ways].map(m=>s.roads[m]).sort((m,M)=>m.id<M.id?-1:m.id>M.id?1:0),_=c(p[0],f.e,f.n);i.begin(),i.anchor("junction",f.e,f.n,_);const g=6;i.end({key:`jct:${p.map(m=>m.id).join("/")}@${im(f.e)},${im(f.n)}`,cls:"junction",osmId:p[0].id,name:((d=p.find(m=>m.name))==null?void 0:d.name)??null,minE:f.e-g,maxE:f.e+g,minN:f.n-g,maxN:f.n+g,minU:_-.4,maxU:_+2,labelE:f.e,labelN:f.n,labelU:_,prominence:ma(.3+.5*Math.max(...p.map(m=>od(m.highway)))+.05*(f.arms-3)),detail:{cls:"junction",ways:p.map(m=>m.id),highways:p.map(m=>m.highway),arms:f.arms}})}}function XT(i,e,t,n){i.begin();const s=e.widthMeters/2;let r=1/0;for(const l of e.profiles){const c=l.length/3;let h=1/0,u=1/0;for(let d=0;d<c;d++){const f=l[3*d],p=l[3*d+1],_=l[3*d+2],g=t.groundUp(f,p);if(g!==null&&(r=Math.min(r,g)),d>0&&d<c-1&&Math.hypot(f-h,p-u)<n.bridgeStepMeters)continue;h=f,u=p;const m=Math.max(0,d-1),M=Math.min(c-1,d+1),v=l[3*M]-l[3*m],x=l[3*M+1]-l[3*m+1],R=Math.hypot(v,x)||1,S=-x/R*s,E=v/R*s;i.anchor("bridge-edge",f+S,p+E,_),i.anchor("bridge-edge",f-S,p-E,_)}}const o=e.profiles[0],a=3*Math.floor(o.length/6);i.end({key:`brdg:${e.id}`,cls:"bridge",osmId:e.id,name:e.name,...Number.isFinite(r)&&{minU:Math.min(r,e.deckMinUp)},labelE:o[a],labelN:o[a+1],labelU:o[a+2],prominence:ma(.55+.45*od(e.highway)),detail:{cls:"bridge",highway:e.highway,ref:e.ref,lengthMeters:e.lengthMeters,deckMinUp:e.deckMinUp,deckMaxUp:e.deckMaxUp,maxAboveTerrainMeters:e.maxAboveTerrainMeters,layer:e.layer}})}function jT(i,e,t,n){var l,c,h,u,d,f,p;const s=t.groundUp(e.east,e.north);if(s===null)return;if(i.begin(),kg(e)){i.anchor("lamp",e.east,e.north,s),i.end({key:`lamp:${e.id}`,cls:"lamp",osmId:e.id,name:((l=e.attributes)==null?void 0:l.name)??null,minE:e.east-1,maxE:e.east+1,minN:e.north-1,maxN:e.north+1,minU:s,maxU:s+1,labelE:e.east,labelN:e.north,labelU:s,prominence:.3,detail:{cls:"lamp"}});return}const r=((h=(c=e.attributes)==null?void 0:c.height)==null?void 0:h.meters)??null,o=Math.min(40,Math.max(3,r??n.defaultTreeHeightMeters)),a=Math.min(10,Math.max(1.5,((d=(u=e.attributes)==null?void 0:u.crownDiameter)==null?void 0:d.meters)??Math.min(6,o*.75)))/2;i.anchor("tree",e.east,e.north,s+o*.6),i.end({key:`tree:${e.id}`,cls:"tree",osmId:e.id,name:((f=e.attributes)==null?void 0:f.name)??null,minE:e.east-a,maxE:e.east+a,minN:e.north-a,maxN:e.north+a,minU:s,maxU:s+o,labelE:e.east,labelN:e.north,labelU:s+o,prominence:.12+(r!==null?.08:0),detail:{cls:"tree",heightMeters:o,heightTagged:r!==null,estimated:!1,genus:((p=e.attributes)==null?void 0:p.genus)??null}})}function qT(i,e,t){const n=t.groundUp(e.east,e.north);if(n===null)return;const s=e.heightM,r=e.crownDiameterM/2;i.begin(),i.anchor("tree",e.east,e.north,n+s*.6),i.end({key:`tree~:${e.greenId}@${Math.round(e.east)},${Math.round(e.north)}`,cls:"tree",osmId:null,name:null,minE:e.east-r,maxE:e.east+r,minN:e.north-r,maxN:e.north+r,minU:n,maxU:n+s,labelE:e.east,labelN:e.north,labelU:n+s,prominence:.05,detail:{cls:"tree",heightMeters:s,heightTagged:!1,estimated:!0,genus:null}})}class Ra extends Error{constructor(){super(...arguments);et(this,"name","WorldLoadError")}}async function YT(i,e){const t=await Ls(i,"region.json",async()=>pw(await i.readJson("region.json",e))),n=ia(t,"terrain"),s=ia(t,"roads"),r=ia(t,"buildings"),o=ia(t,"water"),a=await Ls(i,n.path,async()=>Gg(await i.readJson(n.path,e)));sa(t,n.path,a.regionId,a.frame.origin);const l=KT(n.path,a.data.path),c=await Ls(i,l,async()=>{const m=await i.readBytes(l,e),M=await ZT(m);if(M!==null&&M!==a.data.sha256)throw new Error(`SHA-256 ${M} does not match terrain metadata (${a.data.sha256})`);return Fd.fromAsset(a,m)}),h=await Ls(i,s.path,async()=>Cw(await i.readJson(s.path,e)));sa(t,s.path,h.regionId,h.frame.origin);const u=await Ls(i,r.path,async()=>Lw(await i.readJson(r.path,e)));sa(t,r.path,u.regionId,u.frame.origin);const d=await Ls(i,o.path,async()=>Pw(await i.readJson(o.path,e)));sa(t,o.path,d.regionId,d.frame.origin);const f=async(m,M)=>{if(!t.assets.some(R=>R.id===m))return;const v=ia(t,m),x=await Ls(i,v.path,async()=>M(await i.readJson(v.path,e)));return sa(t,v.path,x.regionId,x.frame.origin),x},p=await f("trees",Fw),_=await f("greens",Ow),g=mw(t);return{geometry:{region:g,manifest:t,terrain:c,roads:h,buildings:u,water:d,...p?{trees:p}:{},..._?{greens:_}:{}},projection:Bg(g.origin)}}async function Ls(i,e,t){try{return await t()}catch(n){throw n instanceof DOMException&&n.name==="AbortError"?n:new Ra(`${i.location}${e}: ${n instanceof Error?n.message:String(n)}`)}}function ia(i,e){const t=i.assets.find(n=>n.id===e);if(!t)throw new Ra(`region "${i.id}" has no "${e}" asset`);if(t.status!=="available")throw new Ra(`region "${i.id}": asset "${e}" is ${t.status}, not available`);return t}function sa(i,e,t,n){if(t!==i.id)throw new Ra(`${e} belongs to region "${t}", not "${i.id}"`);if(n.latitudeDeg!==i.origin.latitudeDeg||n.longitudeDeg!==i.origin.longitudeDeg)throw new Ra(`${e} uses origin ${n.latitudeDeg}, ${n.longitudeDeg}; the region origin is ${i.origin.latitudeDeg}, ${i.origin.longitudeDeg}`)}function KT(i,e){const t=i.lastIndexOf("/");return t<0?e:i.slice(0,t+1)+e}async function ZT(i){var s;const e=(s=globalThis.crypto)==null?void 0:s.subtle;if(!e)return null;const t=new Uint8Array(i),n=new Uint8Array(await e.digest("SHA-256",t));return Array.from(n,r=>r.toString(16).padStart(2,"0")).join("")}function JT(i,e=fetch){const t=i.endsWith("/")?i:`${i}/`,n=async(s,r)=>{const o=t+s,a=await e(o,r?{signal:r}:{});if(!a.ok)throw new Error(`HTTP ${a.status} for ${o}`);return a};return{location:t,async readJson(s,r){return(await n(s,r)).json()},async readBytes(s,r){return new Uint8Array(await(await n(s,r)).arrayBuffer())}}}we.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new qe(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Rn.line={uniforms:yd.merge([we.common,we.fog,we.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class Xc extends Vi{constructor(e){super({type:"LineMaterial",uniforms:yd.clone(Rn.line.uniforms),vertexShader:Rn.line.vertexShader,fragmentShader:Rn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const sm=new On,tc=new V;class zd extends dg{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new qt(e,3)),this.setAttribute("uv",new qt(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new Ec(t,6,1);return this.setAttribute("instanceStart",new Fn(n,3,0)),this.setAttribute("instanceEnd",new Fn(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new Ec(t,6,1);return this.setAttribute("instanceColorStart",new Fn(n,3,0)),this.setAttribute("instanceColorEnd",new Fn(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new lx(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new On);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),sm.setFromBufferAttribute(t),this.boundingBox.union(sm))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bn),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)tc.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(tc)),tc.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(tc));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}}const Wh=new _t,rm=new V,om=new V,un=new _t,dn=new _t,di=new _t,$h=new V,Xh=new rt,pn=new Vx,am=new V,nc=new On,ic=new Bn,fi=new _t;let gi,Js;function lm(i,e,t){return fi.set(0,0,-e,1).applyMatrix4(i.projectionMatrix),fi.multiplyScalar(1/fi.w),fi.x=Js/t.width,fi.y=Js/t.height,fi.applyMatrix4(i.projectionMatrixInverse),fi.multiplyScalar(1/fi.w),Math.abs(Math.max(fi.x,fi.y))}function QT(i,e){const t=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,o=Math.min(n.instanceCount,s.count);for(let a=0,l=o;a<l;a++){pn.start.fromBufferAttribute(s,a),pn.end.fromBufferAttribute(r,a),pn.applyMatrix4(t);const c=new V,h=new V;gi.distanceSqToSegment(pn.start,pn.end,h,c),h.distanceTo(c)<Js*.5&&e.push({point:h,pointOnLine:c,distance:gi.origin.distanceTo(h),object:i,face:null,faceIndex:a,uv:null,uv1:null})}}function e1(i,e,t){const n=e.projectionMatrix,r=i.material.resolution,o=i.matrixWorld,a=i.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,h=Math.min(a.instanceCount,l.count),u=-e.near;gi.at(1,di),di.w=1,di.applyMatrix4(e.matrixWorldInverse),di.applyMatrix4(n),di.multiplyScalar(1/di.w),di.x*=r.x/2,di.y*=r.y/2,di.z=0,$h.copy(di),Xh.multiplyMatrices(e.matrixWorldInverse,o);for(let d=0,f=h;d<f;d++){if(un.fromBufferAttribute(l,d),dn.fromBufferAttribute(c,d),un.w=1,dn.w=1,un.applyMatrix4(Xh),dn.applyMatrix4(Xh),un.z>u&&dn.z>u)continue;if(un.z>u){const v=un.z-dn.z,x=(un.z-u)/v;un.lerp(dn,x)}else if(dn.z>u){const v=dn.z-un.z,x=(dn.z-u)/v;dn.lerp(un,x)}un.applyMatrix4(n),dn.applyMatrix4(n),un.multiplyScalar(1/un.w),dn.multiplyScalar(1/dn.w),un.x*=r.x/2,un.y*=r.y/2,dn.x*=r.x/2,dn.y*=r.y/2,pn.start.copy(un),pn.start.z=0,pn.end.copy(dn),pn.end.z=0;const _=pn.closestPointToPointParameter($h,!0);pn.at(_,am);const g=xd.lerp(un.z,dn.z,_),m=g>=-1&&g<=1,M=$h.distanceTo(am)<Js*.5;if(m&&M){pn.start.fromBufferAttribute(l,d),pn.end.fromBufferAttribute(c,d),pn.start.applyMatrix4(o),pn.end.applyMatrix4(o);const v=new V,x=new V;gi.distanceSqToSegment(pn.start,pn.end,x,v),t.push({point:x,pointOnLine:v,distance:gi.origin.distanceTo(x),object:i,face:null,faceIndex:d,uv:null,uv1:null})}}}class e_ extends Dt{constructor(e=new zd,t=new Xc({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,s=new Float32Array(2*t.count);for(let o=0,a=0,l=t.count;o<l;o++,a+=2)rm.fromBufferAttribute(t,o),om.fromBufferAttribute(n,o),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+rm.distanceTo(om);const r=new Ec(s,2,1);return e.setAttribute("instanceDistanceStart",new Fn(r,1,0)),e.setAttribute("instanceDistanceEnd",new Fn(r,1,1)),this}raycast(e,t){const n=this.material.worldUnits,s=e.camera;s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const r=e.params.Line2!==void 0&&e.params.Line2.threshold||0;gi=e.ray;const o=this.matrixWorld,a=this.geometry,l=this.material;Js=l.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),ic.copy(a.boundingSphere).applyMatrix4(o);let c;if(n)c=Js*.5;else{const u=Math.max(s.near,ic.distanceToPoint(gi.origin));c=lm(s,u,l.resolution)}if(ic.radius+=c,gi.intersectsSphere(ic)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),nc.copy(a.boundingBox).applyMatrix4(o);let h;if(n)h=Js*.5;else{const u=Math.max(s.near,nc.distanceToPoint(gi.origin));h=lm(s,u,l.resolution)}nc.expandByScalar(h),gi.intersectsBox(nc)!==!1&&(n?QT(this,t):e1(this,s,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(Wh),this.material.uniforms.resolution.value.set(Wh.z,Wh.w))}}const t1={wood:{spacingM:12,heightM:[8,14],crownDiameterM:[5,8]},scrub:{spacingM:12,heightM:[3,5],crownDiameterM:[2.5,4]}},n1=4,cm=.35;function i1(i,e,t=t1){const n=[],s={},r={road:0,footprint:0,nearMapped:0},o=r1(e.footprints),a=new o1(e.mappedTrees,n1),l=new Set;for(const c of i){const h=t[c.kind];if(!h)continue;const u=h.spacingM;for(const d of c.polygons){const f=t_(d[0]);for(let p=Math.floor(f.minN/u);p<=Math.ceil(f.maxN/u);p++)for(let _=Math.floor(f.minE/u);_<=Math.ceil(f.maxE/u);_++){const g=`${u}:${_}:${p}`;if(l.has(g))continue;const m=s1(_,p),M=(_+.5+(sc(m,0)-.5)*2*cm)*u,v=(p+.5+(sc(m,1)-.5)*2*cm)*u;if(!(M<f.minE||M>f.maxE||v<f.minN||v>f.maxN||!n_(M,v,d))){if(l.add(g),e.onRoad(M,v)){r.road++;continue}if(o.contains(M,v)){r.footprint++;continue}if(a.near(M,v)){r.nearMapped++;continue}n.push({east:M,north:v,greenId:c.id,kind:c.kind,heightM:hm(h.heightM,sc(m,2)),crownDiameterM:hm(h.crownDiameterM,sc(m,3))}),s[c.kind]=(s[c.kind]??0)+1}}}}return{trees:n,stats:{placed:s,skipped:r}}}const hm=([i,e],t)=>i+(e-i)*t;function s1(i,e){let t=Math.imul(i|0,668265261)^Math.imul(e|0,374761393);return t=Math.imul(t^t>>>15,2246822507),t=Math.imul(t^t>>>13,3266489909),(t^t>>>16)>>>0}const sc=(i,e)=>(i>>>8*e&255)/256;function t_(i){let e=1/0,t=-1/0,n=1/0,s=-1/0;for(let r=0;r<i.length;r+=2)e=Math.min(e,i[r]),t=Math.max(t,i[r]),n=Math.min(n,i[r+1]),s=Math.max(s,i[r+1]);return{minE:e,maxE:t,minN:n,maxN:s}}function n_(i,e,t){return Eo(i,e,t[0])&&!t.slice(1).some(n=>Eo(i,e,n))}function r1(i,e=100){const t=new Map;for(const n of i)for(const s of n){const r=t_(s[0]);for(let o=Math.floor(r.minN/e);o<=Math.floor(r.maxN/e);o++)for(let a=Math.floor(r.minE/e);a<=Math.floor(r.maxE/e);a++){const l=`${a}:${o}`;let c=t.get(l);c||t.set(l,c=[]),c.push({poly:s,b:r})}}return{contains(n,s){for(const{poly:r,b:o}of t.get(`${Math.floor(n/e)}:${Math.floor(s/e)}`)??[])if(n>=o.minE&&n<=o.maxE&&s>=o.minN&&s<=o.maxN&&n_(n,s,r))return!0;return!1}}}var Vs,Qr;class o1{constructor(e,t){Se(this,Vs);Se(this,Qr,new Map);Xe(this,Vs,t);for(const n of e){const s=`${Math.floor(n.east/t)}:${Math.floor(n.north/t)}`;let r=U(this,Qr).get(s);r||U(this,Qr).set(s,r=[]),r.push({e:n.east,n:n.north})}}near(e,t){const n=Math.floor(e/U(this,Vs)),s=Math.floor(t/U(this,Vs));for(let r=s-1;r<=s+1;r++)for(let o=n-1;o<=n+1;o++)for(const a of U(this,Qr).get(`${o}:${r}`)??[])if(Math.hypot(a.e-e,a.n-t)<U(this,Vs))return!0;return!1}}Vs=new WeakMap,Qr=new WeakMap;const i_=.4,a1=2;function l1(i,e,t){const n=[],s=[],r=[];let o=0,a=0;return i.forEach((l,c)=>{const h=Zs(l);if(h==="tunnel")return;let u=!1;for(const d of l.lines){const f=h==="bridge"?h1(l.id,d,t):c1(l.id,d,e,t);for(let p=0;p+1<f.length;p++){const _=f[p],g=f[p+1];_===null||g===null||(n.push(_[0],_[1],_[2],g[0],g[1],g[2]),s.push(c),r.push(h==="bridge"?1:0),u=!0)}}u&&(h==="bridge"?a++:o++)}),{positions:Float32Array.from(n),segmentRoad:Uint32Array.from(s),segmentDeck:Uint8Array.from(r),stats:{groundRoads:o,deckRoads:a,segments:s.length}}}function c1(i,e,t,n){const s=t.positions[0],r=t.positions[1],o=t.spacingMeters,a=[],l=(h,u)=>{const d=u1(t,h,u);if(d===null)return null;const f=n.raisedUp(i,h,u);return[h,u,Math.max(d,f??-1/0)+i_]},c=e.length/2;for(let h=0;h<c-1;h++){const u=e[2*h],d=e[2*h+1],f=e[2*h+2],p=e[2*h+3],_=(u-s)/o,g=(r-d)/o,m=(f-s)/o-_,M=(r-p)/o-g,v=[0];for(const[x,R]of[[_,m],[g,M],[_-g,m-M],[_+g,m+M]]){if(R===0)continue;const S=Math.min(x,x+R),E=Math.max(x,x+R);for(let L=Math.floor(S)+1;L<E;L++)v.push((L-x)/R)}v.sort((x,R)=>x-R);for(const x of v)a.push(l(u+(f-u)*x,d+(p-d)*x))}return a.push(l(e[2*c-2],e[2*c-1])),a}function h1(i,e,t){const n=[],s=(o,a)=>{const l=t.deckUp(i,o,a);return l===null?null:[o,a,l+i_]},r=e.length/2;for(let o=0;o<r-1;o++){const a=e[2*o],l=e[2*o+1],c=e[2*o+2],h=e[2*o+3],u=Math.max(1,Math.ceil(Math.hypot(c-a,h-l)/a1));for(let d=0;d<u;d++)n.push(s(a+(c-a)*d/u,l+(h-l)*d/u))}return n.push(s(e[2*r-2],e[2*r-1])),n}function u1(i,e,t){const n=i.positions[0],s=i.positions[1],r=i.spacingMeters,o=(e-n)/r,a=(s-t)/r;if(!(o>=0&&a>=0&&o<=i.columns-1&&a<=i.rows-1))return null;const l=Math.min(Math.floor(o),i.columns-2),c=Math.min(Math.floor(a),i.rows-2),h=i.nodeCount+c*(i.columns-1)+l;if(!i.validVertex[h])return null;const u=c*i.columns+l,d=u+1,f=u+i.columns,p=f+1,_=G=>i.positions[G*3+2],g=o-l-.5,m=a-c-.5,[M,v]=Math.abs(g)>=Math.abs(m)?g<0?[[u,-.5,-.5],[f,-.5,.5]]:[[d,.5,-.5],[p,.5,.5]]:m<0?[[u,-.5,-.5],[d,.5,-.5]]:[[f,-.5,.5],[p,.5,.5]],[x,R,S]=M,[E,L,b]=v,y=R*b-L*S,C=(g*b-L*m)/y,H=(R*m-g*S)/y;return _(h)*(1-C-H)+_(x)*C+_(E)*H}const d1=["path","service","local","arterial","major"],f1={major:.95,arterial:.78,local:.6,service:.46,path:.36},p1=1.12,jh=[.875,.906,.933];function m1(i){const e=i.highway.replace(/_link$/,"");return i.category!=="drivable"?"path":e==="motorway"||e==="trunk"?"major":e==="primary"||e==="secondary"?"arterial":e==="service"?"service":"local"}const s_={park:"#6f9e80",grass:"#86a072",wood:"#5f9274",scrub:"#9a9e6c",cemetery:"#7f9a90"},g1=.45,Nr=[[0,"#123c66"],[.35,"#1f7fa8"],[.7,"#3fc2c9"],[1,"#d8f4ee"]],_1="#74d08e",um={heightM:9,crownDiameterM:6},qh=8;function x1(i){var n,s,r,o;const e=Math.min(40,Math.max(3,((s=(n=i.attributes)==null?void 0:n.height)==null?void 0:s.meters)??um.heightM)),t=Math.min(10,Math.max(1.5,((o=(r=i.attributes)==null?void 0:r.crownDiameter)==null?void 0:o.meters)??Math.min(um.crownDiameterM,e*.75)));return{east:i.east,north:i.north,heightM:e,crownDiameterM:t}}function dm(i,e){const t=[];let n=0;for(const s of i){const r=e(s.east,s.north);if(r===null){n++;continue}const o=s.heightM,a=s.crownDiameterM/2,l=s.east,c=s.north;t.push(l,c,r,l,c,r+o);for(const[h,u]of[[r+o*.6,a],[r+o*.88,a*.55]])for(let d=0;d<qh;d++){const f=2*Math.PI*d/qh,p=2*Math.PI*(d+1)/qh;t.push(l+u*Math.cos(f),c+u*Math.sin(f),h,l+u*Math.cos(p),c+u*Math.sin(p),h)}}return{positions:Float32Array.from(t),stats:{drawn:i.length-n,skipped:n}}}function Yh(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function M1(i){const e=parseInt(i.replace("#",""),16);return[Yh((e>>16&255)/255),Yh((e>>8&255)/255),Yh((e&255)/255)]}Nr.map(([i,e])=>[i,M1(e)]);const zi={background:"#05070a",fog:{color:"#05070a",near:2500,far:9e3}},v1=10;var Ws,$s,eo,to,hs,no,io,Xs,ni,Fi,Wa,$a,Ft,Xa;class y1{constructor(){et(this,"object3d",new bt);Se(this,Ws,null);Se(this,$s,null);Se(this,eo,null);Se(this,to,null);Se(this,hs,null);Se(this,no,null);Se(this,io,null);Se(this,Xs,null);Se(this,ni,null);Se(this,Fi,null);Se(this,Wa,[]);Se(this,$a,{});Se(this,Ft,{terrain:new bt,roads:new bt,structures:new bt,buildings:new bt,water:new bt,bridges:new bt,greens:new bt,trees:new bt,fillerTrees:new bt,origin:new bt,roadDebug:new bt,bridgeDebug:new bt});Se(this,Xa,{fill:new hn({color:263946,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),gridMinor:Ps(new Vt({vertexColors:!0,toneMapped:!1,transparent:!0,opacity:.55,depthWrite:!1}),400,1500),gridMajor:Ps(new Vt({vertexColors:!0,toneMapped:!1,transparent:!0,opacity:1,depthWrite:!1}),2500,7e3),pickOnly:new hn({visible:!1}),building:new hn({color:791580,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),buildingEdge:Ps(new Vt({color:13821682,toneMapped:!1,transparent:!0,opacity:.85}),2500,7e3),water:new hn({color:996166,toneMapped:!1,transparent:!0,opacity:.6,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),shoreline:Ps(new Vt({color:7320264,toneMapped:!1,transparent:!0,opacity:.9}),2500,7e3),greens:Ps(new Vt({vertexColors:!0,toneMapped:!1,transparent:!0,opacity:.35,depthWrite:!1}),1500,5e3),trees:Ps(new Vt({color:7655566,toneMapped:!1,transparent:!0,opacity:.85}),900,3e3),fillerTrees:Ps(new Vt({color:7655566,toneMapped:!1,transparent:!0,opacity:.85}),900,3e3),bridge:new Gf({color:16727406,toneMapped:!1,dashSize:6,gapSize:4}),tunnel:new Gf({color:4063134,toneMapped:!1,dashSize:3,gapSize:5}),debugVehicle:new Vt({color:16777215,transparent:!0,opacity:.9,depthTest:!1}),debugPath:new Vt({color:16740544,transparent:!0,opacity:.8,depthTest:!1}),debugDeck:new Vt({color:16773754,transparent:!0,opacity:.95,depthTest:!1}),debugDrop:new Vt({color:8055039,transparent:!0,opacity:.7})});this.object3d.name="World";for(const[e,t]of Object.entries(U(this,Ft)))t.name=`World.${e}`,this.object3d.add(t);U(this,Ft).origin.visible=!1,U(this,Ft).roadDebug.visible=!1,U(this,Ft).roadDebug.renderOrder=10,U(this,Ft).bridgeDebug.visible=!1}get extent(){if(!U(this,eo))throw new Error("ThreeWorldRenderer: show() a region first");return U(this,eo)}get stats(){if(!U(this,to))throw new Error("ThreeWorldRenderer: show() a region first");return U(this,to)}attach(e){Xe(this,Ws,e),e.add(this.object3d),e.background=new ze(zi.background),e.fog=new qs(zi.fog.color,zi.fog.near,zi.fog.far)}show(e){var H,G;if(U(this,$s))throw new Error("ThreeWorldRenderer: a region is already shown; create a new renderer");const t=fm(),n=e.terrain,s=Vw(n),r=TT(e.buildings,n),o=UT(e.water.water,n),a=eT(e.roads.roads,n,o.mesh),l=qw(e.roads.roads,n,Od,a.approaches),c=Kw(l,a,n);Xe(this,Fi,c),Xe(this,$s,n),Xe(this,ni,a),Xe(this,hs,r),Xe(this,io,o);const h=(O,I)=>(O.name=I,O),u=U(this,Xa),d=new xt(jc(s.positions),3),f=new xt(s.indices,1),p=new Nt;p.setAttribute("position",d),p.setIndex(f),p.computeBoundingSphere(),p.computeBoundingBox();const _=h(new Dt(p,u.fill),"TerrainFill"),g=new xt(A1(C1(s),s,e.greens),3),m=O=>{const I=new Nt;return I.setAttribute("position",d),I.setAttribute("color",g),I.setIndex(new xt(b1(s,O),1)),I.computeBoundingSphere(),I};U(this,Ft).terrain.add(_,h(new Jt(m(1),u.gridMinor),"TerrainGridMinor"),h(new Jt(m(v1),u.gridMajor),"TerrainGridMajor"));const M=e.roads.roads,v=l1(M,s,{raisedUp:(O,I,D)=>{const P=c.heightAt(O,I,D);return P&&P.surface==="approach"?P.up:null},deckUp:(O,I,D)=>{var P;return((P=a.locator.deckHeightAt(O,I,D))==null?void 0:P.up)??null}});for(const O of[0,1]){const I=h(new bt,O?"BridgeWires":"RoadWires");for(const D of d1){const P=E1(v,M,O,D);if(!P)continue;const F=new Xc({vertexColors:!0,linewidth:S1[D]*(O?1.15:1),toneMapped:!1}),$=h(new e_(P,F),`${I.name}.${D}`);$.renderOrder=O?4:3,I.add($)}I.children.length>0&&(O?U(this,Ft).bridges:U(this,Ft).roads).add(I)}for(const O of["path","vehicle"]){const I=a.surfaces[O];if(I.indices.length===0)continue;const D=h(new Dt(Kh(I.positions,I.indices),u.pickOnly),O==="vehicle"?"BridgeDecksVehicle":"BridgeDecksPath");D.visible=!1,U(this,$a)[O]=D,U(this,Ft).bridges.add(D)}for(const O of["bridge","tunnel"]){const I=O==="bridge"?a.fallbackLines.positions:l.structures[O].positions;if(I.length===0)continue;const D=h(new Jt(Ds(I),u[O]),O==="bridge"?"BridgeCenterlines":"TunnelCenterlines");D.computeLineDistances(),D.renderOrder=5,U(this,Ft).structures.add(D)}if(r.mesh.indices.length>0){Xe(this,no,h(new Dt(Kh(r.mesh.positions,r.mesh.indices,!0),u.building),"Buildings"));const O=h(new Jt(Ds(r.edges.positions),u.buildingEdge),"BuildingEdges");O.renderOrder=3,U(this,Ft).buildings.add(U(this,no),O)}if(o.mesh.indices.length>0){Xe(this,Xs,h(new Dt(Kh(o.mesh.positions,o.mesh.indices,!0),u.water),"Water")),U(this,Xs).renderOrder=1;const O=h(new Jt(Ds(o.shorelines.positions),u.shoreline),"Shorelines");O.renderOrder=2,U(this,Ft).water.add(U(this,Xs),O)}const x=(O,I)=>{const D=n.sample(O,I);return D.available?D.localY:null},R=T1(e.greens,x);if(R.positions.length>0){const O=new Nt;O.setAttribute("position",new xt(R.positions,3)),O.setAttribute("color",new xt(R.colors,3)),O.computeBoundingSphere();const I=h(new Jt(O,u.greens),"GreenOutlines");I.renderOrder=2,U(this,Ft).greens.add(I)}const S=((H=e.trees)==null?void 0:H.trees)??[],E=S.filter(O=>!kg(O)),L=dm(E.map(x1),x);L.positions.length>0&&U(this,Ft).trees.add(h(new Jt(Ds(L.positions),u.trees),"Trees"));const b=i1(((G=e.greens)==null?void 0:G.greens)??[],{onRoad:(O,I)=>U(this,Fi).surfacesAt(O,I).length>0,footprints:[...e.buildings.buildings,...e.buildings.parts,...e.water.water].map(O=>O.polygons),mappedTrees:S});Xe(this,Wa,b.trees);const y=dm(b.trees,x);if(y.positions.length>0){const O=h(new Jt(Ds(y.positions),u.fillerTrees),"FillerTrees");O.renderOrder=2,U(this,Ft).fillerTrees.add(O)}for(const O of["vehicle","path"]){const I=l.centerlines[O].positions;if(I.length===0)continue;const D=h(new Jt(Ds(I),O==="vehicle"?u.debugVehicle:u.debugPath),`RoadCenterlines.${O}`);D.renderOrder=10,U(this,Ft).roadDebug.add(D)}for(const[O,I,D]of[["BridgeProfiles",a.profileLines,u.debugDeck],["BridgeDrops",a.dropLines,u.debugDrop]]){if(I.positions.length===0)continue;const P=h(new Jt(Ds(I.positions),D),O);P.renderOrder=10,U(this,Ft).bridgeDebug.add(P)}U(this,Ft).origin.add(L1(s));const C=p.boundingBox;Xe(this,eo,{minX:C.min.x,maxX:C.max.x,minY:C.min.y,maxY:C.max.y,minZ:C.min.z,maxZ:C.max.z}),Xe(this,to,{terrainVertices:s.positions.length/3,terrainTriangles:s.indices.length/3,roadVertices:{vehicle:l.surfaces.vehicle.positions.length/3,path:l.surfaces.path.positions.length/3},roadTriangles:l.stats.triangles,structureSegments:{bridge:a.fallbackLines.positions.length/6,tunnel:l.structures.tunnel.positions.length/6},bridgeDeckVertices:{vehicle:a.surfaces.vehicle.positions.length/3,path:a.surfaces.path.positions.length/3},bridgeDeckTriangles:a.stats.triangles,bridgeSlabTriangles:a.stats.slabTriangles,approachSkirtTriangles:l.skirts.indices.length/3,bridgeOutlineSegments:a.outlines.positions.length/6,buildingVertices:r.stats.vertices,buildingTriangles:r.stats.triangles,buildingEdgeSegments:r.stats.edgeSegments,waterVertices:o.stats.vertices,waterTriangles:o.stats.triangles,shorelineSegments:o.stats.shorelineSegments,buildMilliseconds:fm()-t,roads:l.stats,buildings:r.stats,water:o.stats,bridges:a.stats,roadWires:v.stats,greens:R.stats,trees:{drawn:L.stats.drawn,skipped:L.stats.skipped,taggedHeight:E.filter(O=>{var I,D;return((D=(I=O.attributes)==null?void 0:I.height)==null?void 0:D.meters)!=null}).length},fillerTrees:b.stats})}setOverlay(e,t){U(this,Ft)[e].visible=t}overlayVisible(e){return U(this,Ft)[e].visible}groundHeightAt(e,t){if(!U(this,$s)||!Number.isFinite(e)||!Number.isFinite(t))return null;const n=U(this,$s).sample(e,0-t);return n.available?n.localY:null}get buildings(){var e;return((e=U(this,hs))==null?void 0:e.features)??[]}get fillerTrees(){return U(this,Wa)}get buildingMassing(){if(!U(this,hs))throw new Error("ThreeWorldRenderer: show() a region first");return U(this,hs)}buildingAt(e){const t=U(this,no),n=U(this,hs);if(!t||!n||!U(this,Ft).buildings.visible)return null;const s=e.intersectObject(t,!1)[0];if(!s||s.faceIndex==null)return null;const r=AT(n,s.faceIndex);return r?{building:r,point:s.point,distance:s.distance}:null}get waterFeatures(){var e;return((e=U(this,io))==null?void 0:e.features)??[]}waterAt(e){const t=U(this,Xs),n=U(this,io);if(!t||!n||!U(this,Ft).water.visible)return null;const s=e.intersectObject(t,!1)[0];if(!s||s.faceIndex==null)return null;const r=FT(n,s.faceIndex);return r?{water:r,point:s.point,distance:s.distance}:null}get bridgeDecks(){if(!U(this,ni))throw new Error("ThreeWorldRenderer: show() a region first");return U(this,ni)}roadDecksAt(e,t){return!U(this,ni)||!Number.isFinite(e)||!Number.isFinite(t)?[]:U(this,ni).locator.decksAt(e,0-t)}bridgeDeckHeightAt(e,t,n){return!U(this,ni)||!Number.isFinite(t)||!Number.isFinite(n)?null:U(this,ni).locator.deckHeightAt(e,t,0-n)}roadHeightAt(e,t,n){return!U(this,Fi)||!Number.isFinite(t)||!Number.isFinite(n)?null:U(this,Fi).heightAt(e,t,0-n)}roadSurfacesAt(e,t){return!U(this,Fi)||!Number.isFinite(e)||!Number.isFinite(t)?[]:U(this,Fi).surfacesAt(e,0-t)}bridgeAt(e){const t=U(this,ni);if(!t||!U(this,Ft).bridges.visible)return null;let n=null;for(const s of["vehicle","path"]){const r=U(this,$a)[s];if(!r)continue;const o=e.intersectObject(r,!1)[0];if(!o||o.faceIndex==null||n&&n.distance<=o.distance)continue;const a=iT(t,s,o.faceIndex);a&&(n={bridge:a,deck:t.locator.deckHeightAt(a.id,o.point.x,0-o.point.z),point:o.point,distance:o.distance})}return n}dispose(){const e=new Set,t=new Set(Object.values(U(this,Xa)));this.object3d.traverse(n=>{const s=n;s.geometry&&e.add(s.geometry),s.material&&(Array.isArray(s.material)?s.material:[s.material]).forEach(r=>t.add(r))}),e.forEach(n=>n.dispose()),t.forEach(n=>n.dispose()),this.object3d.removeFromParent(),U(this,Ws)&&(U(this,Ws).fog=null,U(this,Ws).background=null)}}Ws=new WeakMap,$s=new WeakMap,eo=new WeakMap,to=new WeakMap,hs=new WeakMap,no=new WeakMap,io=new WeakMap,Xs=new WeakMap,ni=new WeakMap,Fi=new WeakMap,Wa=new WeakMap,$a=new WeakMap,Ft=new WeakMap,Xa=new WeakMap;const fm=()=>globalThis.performance?performance.now():Date.now();function Ps(i,e,t){return i.onBeforeCompile=n=>{n.fragmentShader=n.fragmentShader.replace("#include <fog_fragment>",`#include <fog_fragment>
#ifdef USE_FOG
  gl_FragColor.a *= 1.0 - smoothstep(${e.toFixed(1)}, ${t.toFixed(1)}, vFogDepth);
#endif`)},i.customProgramCacheKey=()=>`faded-${e}-${t}`,i}function Kh(i,e,t=!1){const n=new Nt;return n.setAttribute("position",new xt(jc(i),3)),n.setIndex(new xt(e,1)),n.computeBoundingSphere(),t&&n.computeBoundingBox(),n}function Ds(i){const e=new Nt;return e.setAttribute("position",new xt(jc(i),3)),e.computeBoundingSphere(),e}function jc(i){const e=new Float32Array(i.length);for(let t=0;t<i.length;t+=3)e[t]=i[t],e[t+1]=i[t+2],e[t+2]=0-i[t+1];return e}function b1(i,e){const t=[],n=s=>i.validVertex[s]===1;for(let s=0;s<i.rows;s+=e)for(let r=0;r<i.columns-1;r++){const o=s*i.columns+r;n(o)&&n(o+1)&&t.push(o,o+1)}for(let s=0;s<i.columns;s+=e)for(let r=0;r<i.rows-1;r++){const o=r*i.columns+s;n(o)&&n(o+i.columns)&&t.push(o,o+i.columns)}return Uint32Array.from(t)}const S1={major:3.2,arterial:2.5,local:1.9,service:1.4,path:1};function E1(i,e,t,n){const s=[];for(let h=0;h<i.segmentDeck.length;h++)i.segmentDeck[h]===t&&m1(e[i.segmentRoad[h]])===n&&s.push(h);if(s.length===0)return null;const r=new Float32Array(s.length*6),o=new Float32Array(s.length*6),a=Math.min(1,f1[n]*(t?p1:1)),l=new ze().setRGB(jh[0]*a,jh[1]*a,jh[2]*a,Xt);s.forEach((h,u)=>{for(let d=0;d<6;d++)r[u*6+d]=i.positions[h*6+d];for(let d=0;d<2;d++)o[u*6+d*3]=l.r,o[u*6+d*3+1]=l.g,o[u*6+d*3+2]=l.b});const c=new zd;return c.setPositions(jc(r)),c.setColors(o),c}const pm=.3,w1=4;function T1(i,e){const t=[],n=[],s={park:0,grass:0,wood:0,scrub:0,cemetery:0},r=new ze;for(const o of(i==null?void 0:i.greens)??[]){s[o.kind]++,r.set(s_[o.kind]);for(const a of o.polygons)for(const l of a){const c=l.length/2;for(let h=0;h<c;h++){const u=l[2*h],d=l[2*h+1],f=l[2*((h+1)%c)],p=l[2*((h+1)%c)+1],_=Math.max(1,Math.ceil(Math.hypot(f-u,p-d)/w1));for(let g=0;g<_;g++){const m=g/_,M=(g+1)/_,v=u+(f-u)*m,x=d+(p-d)*m,R=u+(f-u)*M,S=d+(p-d)*M,E=e(v,x),L=e(R,S);E===null||L===null||(t.push(v,E+pm,-x,R,L+pm,-S),n.push(r.r,r.g,r.b,r.r,r.g,r.b))}}}}return{positions:Float32Array.from(t),colors:Float32Array.from(n),stats:{features:(i==null?void 0:i.greens.length)??0,byKind:s,segments:t.length/6}}}function A1(i,e,t){const n=new ze;for(const s of(t==null?void 0:t.greens)??[]){n.set(s_[s.kind]);for(const r of s.polygons){const o=r[0];let a=1/0,l=-1/0,c=1/0,h=-1/0;for(let M=0;M<o.length;M+=2)a=Math.min(a,o[M]),l=Math.max(l,o[M]),c=Math.min(c,o[M+1]),h=Math.max(h,o[M+1]);const u=e.positions[0],d=e.positions[1],f=e.spacingMeters,p=Math.max(0,Math.ceil((a-u)/f)),_=Math.min(e.columns-1,Math.floor((l-u)/f)),g=Math.max(0,Math.ceil((d-h)/f)),m=Math.min(e.rows-1,Math.floor((d-c)/f));for(let M=g;M<=m;M++)for(let v=p;v<=_;v++){const x=M*e.columns+v,R=e.positions[x*3],S=e.positions[x*3+1];if(!(!Eo(R,S,o)||r.slice(1).some(E=>Eo(R,S,E))))for(let E=0;E<3;E++)i[x*3+E]=i[x*3+E]+([n.r,n.g,n.b][E]-i[x*3+E])*g1}}}return i}function R1(i,e){const t=Math.min(1,Math.max(0,i));for(let n=1;n<Nr.length;n++){const[s,r]=Nr[n];if(t<=s){const[o,a]=Nr[n-1];return e.set(a).lerp(new ze(r),(t-o)/(s-o||1))}}return e.set(Nr[Nr.length-1][1])}function C1(i){const e=new Float32Array(i.positions.length),t=new ze,n=i.maxUp-i.minUp||1;for(let s=0;s<i.validVertex.length;s++)R1((i.positions[s*3+2]-i.minUp)/n,t),e[s*3]=t.r,e[s*3+1]=t.g,e[s*3+2]=t.b;return e}function L1(i){const e=new bt;e.name="OriginAxes";const t=(n,s,r,o,a)=>{const l=new Nt;l.setAttribute("position",new xt(new Float32Array([0,0,0,n,s,r]),3));const c=new Jt(l,new Vt({color:o,depthTest:!1}));c.name=a,c.renderOrder=20,e.add(c)};return t(100,0,0,16730955,"East"),t(0,0,-100,4980602,"North"),t(0,Math.max(60,i.maxUp+20),0,5939455,"Up"),e}const Pc=1280,Hr=128,P1=Pc/Hr,$t=i=>`${i.level}/${i.x}/${i.y}`,nr=i=>Pc*2**i,D1=i=>P1*2**i;function Zh(i){const e=nr(i.level);return{east:i.x*e,north:i.y*e}}function I1(i,e,t){const n=nr(i);return{level:i,x:Math.floor(e/n),y:Math.floor(t/n)}}function N1(i){if(i.level===0)return[];const e=i.level-1;return[{level:e,x:2*i.x,y:2*i.y},{level:e,x:2*i.x+1,y:2*i.y},{level:e,x:2*i.x,y:2*i.y+1},{level:e,x:2*i.x+1,y:2*i.y+1}]}function r_(i,e){if(e<i.level)throw new RangeError(`no ancestor of ${$t(i)} at level ${e}`);const t=2**(e-i.level);return{level:e,x:Math.floor(i.x/t),y:Math.floor(i.y/t)}}function mm(i,e,t){const n=nr(i.level),s=i.x*n,r=i.y*n,o=Math.max(s-e,0,e-(s+n)),a=Math.max(r-t,0,t-(r+n));return Math.hypot(o,a)}const gm="86sim.world-tileset",_m=1,xm="86sim.world-tile/1";class U1 extends Error{constructor(){super(...arguments);et(this,"name","TilesetError")}}const en=(i,e)=>{throw new U1(`${i}: ${e}`)},Pr=i=>typeof i=="object"&&i!==null&&!Array.isArray(i),rc=i=>typeof i=="number"&&Number.isFinite(i);function ad(i,e){return Array.isArray(i)||en(e,"must be an array"),i.map((t,n)=>{(!Array.isArray(t)||t.length!==5||!t.every(r=>Number.isInteger(r)))&&en(`${e}[${n}]`,"must be [level, x, y, offset, length] integers");const s=t;return(s[0]<0||s[3]<0||s[4]<=0)&&en(`${e}[${n}]`,"level and offset must be ≥ 0 and length > 0"),s})}function F1(i){if(!Pr(i))return en("$","must be an object");i.schema!==gm&&en("$.schema",`must be "${gm}"`),i.schemaVersion!==_m&&en("$.schemaVersion",`must be ${_m}`),(typeof i.id!="string"||!i.id)&&en("$.id","must be a non-empty string");const e=i.frame;(!Pr(e)||!Pr(e.origin)||!rc(e.origin.latitudeDeg)||!rc(e.origin.longitudeDeg))&&en("$.frame.origin","must have finite latitudeDeg and longitudeDeg");const t=e.origin;(!rc(t.altitudeMeters)||typeof t.altitudeReference!="string")&&en("$.frame.origin","must have altitudeMeters and altitudeReference (they define up = 0)"),rc(i.anchorHeightNavd88Meters)||en("$.anchorHeightNavd88Meters","must be a finite number");const n=i.grid;if(!Pr(n))return en("$.grid","must be an object");(n.baseTileMeters!==Pc||n.cellsPerTile!==Hr)&&en("$.grid",`must be ${Pc} m tiles of ${Hr} cells`),(!Number.isInteger(n.maxLevel)||n.maxLevel<0)&&en("$.grid.maxLevel","must be an integer ≥ 0"),(!Number.isInteger(n.shardLevel)||n.shardLevel<0||n.shardLevel>n.maxLevel)&&en("$.grid.shardLevel","must be an integer in [0, maxLevel]");const s=i.archive;(!Pr(s)||typeof s.path!="string"||!(/^[^/\\.:][^/\\:]*$/.test(s.path)||/^https:\/\/[^\s]+$/.test(s.path)))&&en("$.archive.path","must be a file name in the same directory or an https URL"),(!Pr(s)||s.compression!=="gzip"||s.format!==xm)&&en("$.archive",`must be gzip ${xm}`);const r=ad(i.tiles,"$.tiles"),o=ad(i.shards,"$.shards");return r.forEach((a,l)=>{a[0]<n.shardLevel&&en(`$.tiles[${l}]`,"is below shardLevel; it belongs in a shard")}),o.forEach((a,l)=>{a[0]!==n.shardLevel&&en(`$.shards[${l}]`,"must be at shardLevel")}),i}function O1(i,e){const t=ad(i,`shard ${$t(e)}`);for(const n of t){const s=r_({level:n[0],x:n[1],y:n[2]},e.level);(n[0]>=e.level||s.x!==e.x||s.y!==e.y)&&en(`shard ${$t(e)}`,`entry ${n[0]}/${n[1]}/${n[2]} is not below it`)}return t}const Jh=5,B1={refineFactor:2,maxInFlight:6,memoryBudgetBytes:384*1024*1024,uploadBytesPerFrame:6*1024*1024,abandonAfterFrames:90};var so,ro,Xn,ja,us,ds,qa,zt,Ya,Nc,fs,Ka,Za,Ja,oo,ao,xi,o_,_c,a_;class k1{constructor(e,t,n,s={}){Se(this,xi);Se(this,so);Se(this,ro);Se(this,Xn);Se(this,ja);Se(this,us,new Map);Se(this,ds,new Map);Se(this,qa,new Map);Se(this,zt,new Map);Se(this,Ya);Se(this,Nc,0);Se(this,fs,0);Se(this,Ka,0);Se(this,Za,0);Se(this,Ja,0);Se(this,oo,0);Se(this,ao,[]);Xe(this,so,e),Xe(this,ro,t),Xe(this,ja,n),Xe(this,Xn,{...B1,...s});for(const r of e.tiles)U(this,us).set($t({level:r[0],x:r[1],y:r[2]}),r);for(const r of e.shards)U(this,qa).set($t({level:r[0],x:r[1],y:r[2]}),r);Xe(this,Ya,e.tiles.filter(r=>r[0]===e.grid.maxLevel).map(r=>({level:r[0],x:r[1],y:r[2]})))}get options(){return U(this,Xn)}setOptions(e){Object.assign(U(this,Xn),e)}entry(e){const t=U(this,so).grid.shardLevel;if(e.level>=t)return U(this,us).get($t(e))??null;const n=r_(e,t),s=$t(n),r=U(this,qa).get(s);if(!r)return null;const o=U(this,ds).get(s);if(o==="ready")return U(this,us).get($t(e))??null;if(o==="failed")return null;o===void 0&&gt(this,xi,o_).call(this,s,n,r)}update(e){const t=++lr(this,Nc)._,n=[],s=[...U(this,zt).entries()].filter(_=>_[1].state==="pending").sort((_,g)=>_[1].priority-g[1].priority);let r=U(this,Xn).uploadBytesPerFrame;for(const[_,g]of s){if(n.length>0&&g.bytes>r)break;r-=g.bytes,U(this,zt).set(_,{state:"resident",data:g.data,bytes:g.bytes,lastDrawn:t}),Xe(this,fs,U(this,fs)+g.bytes),n.push({key:Mm(_),data:g.data})}const o=[],a=new Map,l=_=>Math.hypot(mm(_,e.east,e.north),Math.max(0,e.up)),c=(_,g)=>{const m=$t(_);gt(this,xi,_c).call(this,_)||a.has(m)||a.set(m,{key:_,entry:g,priority:l(_)/nr(_.level)})},h=(_,g)=>{if(_.level>0&&l(_)<U(this,Xn).refineFactor*nr(_.level)){const M=[];let v=!0;for(const x of N1(_)){const R=this.entry(x);if(R===void 0){v=!1;continue}R!==null&&M.push([x,R])}if(v&&M.length>0&&M.every(([x])=>gt(this,xi,_c).call(this,x))){for(const[x,R]of M)h(x,R);return}for(const[x,R]of M)c(x,R)}gt(this,xi,_c).call(this,_)?o.push(_):c(_,g)},u=e.radiusMeters??1/0;for(const _ of U(this,Ya)){if(u!==1/0&&mm(_,e.east,e.north)>u)continue;const g=U(this,us).get($t(_));g&&h(_,g)}for(const _ of o){const g=U(this,zt).get($t(_));(g==null?void 0:g.state)==="resident"&&(g.lastDrawn=t)}for(const[_,g]of a){const m=U(this,zt).get(_);(m==null?void 0:m.state)==="loading"&&(m.lastWanted=t,m.priority=g.priority),(m==null?void 0:m.state)==="pending"&&(m.priority=g.priority)}for(const[_,g]of U(this,zt))g.state==="loading"&&t-g.lastWanted>U(this,Xn).abandonAfterFrames&&(g.abort.abort(),U(this,zt).delete(_));let d=0;for(const _ of U(this,zt).values())_.state==="loading"&&d++;const f=[...a.values()].filter(_=>!U(this,zt).has($t(_.key))).sort((_,g)=>_.priority-g.priority||g.key.level-_.key.level);for(const _ of f){if(d>=U(this,Xn).maxInFlight)break;gt(this,xi,a_).call(this,_.key,_.entry,_.priority,t),d++}const p=[];if(U(this,fs)>U(this,Xn).memoryBudgetBytes){const _=new Set(o.map($t)),g=[...U(this,zt).entries()].filter(m=>m[1].state==="resident"&&!_.has(m[0])).sort((m,M)=>m[1].lastDrawn-M[1].lastDrawn);for(const[m,M]of g){if(U(this,fs)<=U(this,Xn).memoryBudgetBytes)break;U(this,zt).delete(m),Xe(this,fs,U(this,fs)-M.bytes),lr(this,Za)._++,p.push(Mm(m))}}return Xe(this,ao,o),{draw:o,added:n,evicted:p}}residentData(e){const t=U(this,zt).get($t(e));return(t==null?void 0:t.state)==="resident"?t.data:null}get stats(){let e=0,t=0,n=0;for(const r of U(this,zt).values())r.state==="resident"?e++:r.state==="pending"?t++:r.state==="loading"&&n++;const s=Array.from({length:U(this,so).grid.maxLevel+1},()=>0);for(const r of U(this,ao))s[r.level]++;return{resident:e,residentBytes:U(this,fs),pending:t,inFlight:n,drawn:U(this,ao).length,drawnByLevel:s,loaded:U(this,Ka),evicted:U(this,Za),failed:U(this,Ja),shards:[...U(this,ds).values()].filter(r=>r==="ready").length,fetchedBytes:U(this,oo)}}dispose(){for(const e of U(this,zt).values())e.state==="loading"&&e.abort.abort();U(this,zt).clear()}}so=new WeakMap,ro=new WeakMap,Xn=new WeakMap,ja=new WeakMap,us=new WeakMap,ds=new WeakMap,qa=new WeakMap,zt=new WeakMap,Ya=new WeakMap,Nc=new WeakMap,fs=new WeakMap,Ka=new WeakMap,Za=new WeakMap,Ja=new WeakMap,oo=new WeakMap,ao=new WeakMap,xi=new WeakSet,o_=function(e,t,n){U(this,ds).set(e,"loading"),Xe(this,oo,U(this,oo)+n[4]),U(this,ro).loadShard(n,t).then(s=>{for(const r of s)U(this,us).set($t({level:r[0],x:r[1],y:r[2]}),r);U(this,ds).set(e,"ready")},s=>{console.error(`tile shard ${e}:`,s),U(this,ds).set(e,"failed")})},_c=function(e){var t;return((t=U(this,zt).get($t(e)))==null?void 0:t.state)==="resident"},a_=function(e,t,n,s){const r=$t(e),o=new AbortController;U(this,zt).set(r,{state:"loading",abort:o,lastWanted:s,priority:n}),Xe(this,oo,U(this,oo)+t[4]),U(this,ro).loadTile(t,e,o.signal).then(a=>{const l=U(this,zt).get(r);(l==null?void 0:l.state)!=="loading"||l.abort!==o||(lr(this,Ka)._++,U(this,zt).set(r,{state:"pending",data:a,bytes:U(this,ja).call(this,a),priority:l.priority}))},a=>{const l=U(this,zt).get(r);(l==null?void 0:l.state)!=="loading"||l.abort!==o||(a instanceof Error&&a.name==="AbortError"||(console.error(`tile ${r}:`,a),lr(this,Ja)._++),U(this,zt).set(r,{state:"failed"}))})};function Mm(i){const[e,t,n]=i.split("/").map(Number);return{level:e,x:t,y:n}}let ra=null,vm=!1;async function z1(i,e,t,n,s=fetch){const r=ra==null?void 0:ra.get(i);if(r)return new Uint8Array((await r).slice(e,e+t));const o=await s(i,{headers:{Range:`bytes=${e}-${e+t-1}`}});if(o.status===206){const a=new Uint8Array(await o.arrayBuffer());if(a.byteLength!==t)throw new Error(`range ${e}+${t} of ${i} returned ${a.byteLength} bytes`);return a}if(o.status===200){vm||(vm=!0,console.warn(`${i}: the server ignored the Range header; downloading the whole archive once`)),ra??(ra=new Map);const a=o.arrayBuffer();return ra.set(i,a),new Uint8Array((await a).slice(e,e+t))}throw new Error(`HTTP ${o.status} for ${i} (bytes ${e}+${t})`)}async function H1(i){const e=new Blob([i]).stream().pipeThrough(new DecompressionStream("gzip"));return new Uint8Array(await new Response(e).arrayBuffer())}var lo,Qa,pi,ps,Uc,Fc,l_;class G1{constructor(e,t,n=V1()){Se(this,Fc);Se(this,lo);Se(this,Qa);Se(this,pi,[]);Se(this,ps,new Map);Se(this,Uc,1);et(this,"timings",[]);const s=e.endsWith("/")?e:`${e}/`;Xe(this,lo,new URL(t.archive.path,new URL(s,location.href)).href),Xe(this,Qa,{heightRange:t.heightRange});for(let r=0;r<n;r++){const o=new Worker(new URL("/assets/tileWorker-7toNRH9b.js",import.meta.url),{type:"module",name:`tiles-${r}`});o.onmessage=a=>gt(this,Fc,l_).call(this,a.data),o.onerror=a=>console.error("tile worker error:",a.message),U(this,pi).push({worker:o,busy:0})}}get size(){return U(this,pi).length}async loadShard(e,t){const n=await z1(U(this,lo),e[3],e[4]);return O1(JSON.parse(new TextDecoder().decode(await H1(n))),t)}loadTile(e,t,n){const s=lr(this,Uc)._++;let r=0;U(this,pi).forEach((a,l)=>{a.busy<U(this,pi)[r].busy&&(r=l)});const o=U(this,pi)[r];return o.busy++,new Promise((a,l)=>{U(this,ps).set(s,{resolve:a,reject:l,worker:r}),n.addEventListener("abort",()=>o.worker.postMessage({type:"cancel",id:s}),{once:!0});const c={type:"load",id:s,url:U(this,lo),offset:e[3],length:e[4],options:U(this,Qa)};o.worker.postMessage(c)})}dispose(){for(const e of U(this,pi))e.worker.terminate();for(const e of U(this,ps).values()){const t=new Error("tile pool disposed");t.name="AbortError",e.reject(t)}U(this,ps).clear()}}lo=new WeakMap,Qa=new WeakMap,pi=new WeakMap,ps=new WeakMap,Uc=new WeakMap,Fc=new WeakSet,l_=function(e){const t=U(this,ps).get(e.id);if(t)if(U(this,ps).delete(e.id),U(this,pi)[t.worker].busy--,e.ok)this.timings.unshift(e.ms),this.timings.length>50&&(this.timings.length=50),t.resolve(e.data);else{const n=new Error(e.error);e.aborted&&(n.name="AbortError"),t.reject(n)}};function V1(){const i=typeof navigator<"u"?navigator.hardwareConcurrency??4:4;return Math.max(1,Math.min(4,i-1))}async function W1(i,e=fetch){const t=`${i.endsWith("/")?i:`${i}/`}tileset.json`,n=await e(t);if(!n.ok)throw new Error(`HTTP ${n.status} for ${t}`);return F1(await n.json())}const ga={saturation:1,gain:1},$1={id:"wireframe",background:zi.background,terrainFill:"#04070a",buildingFill:"#0c141c",buildingEdge:"#d2e6f2",buildingEdgeOpacity:.85,tree:_1,treeOpacity:.85,grid:ga,roads:ga,outlines:ga},X1=["#ffd23f","#ff8a3d","#ff4d8d","#b86bff","#4da3ff","#3dffc5","#9dff4d","#ffffff"];var mi,js,co,ho,jn,el,uo,ci,ld,c_,xc;class j1{constructor(e,t,n={},s=$1){Se(this,ci);et(this,"object3d",new bt);et(this,"streamer");et(this,"manifest");Se(this,mi,new Map);Se(this,js,new Set);Se(this,co,{buildings:!0,roads:!0,outlines:!0,trees:!0,fillerTrees:!0,tileBounds:!1});Se(this,ho,{value:1});Se(this,jn,null);Se(this,el,0);Se(this,uo);et(this,"look");this.manifest=e,this.look=s,this.object3d.name="TiledWorld",this.streamer=new k1(e,t,a=>a.stats.bytes,n);const r=U(this,ho),o=(a,l,c,h=ga)=>h_(a,l,c,r,h);Xe(this,uo,{fill:new hn({color:new ze(s.terrainFill),toneMapped:!1,side:Cn,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),gridMinor:o(new Vt({vertexColors:!0,toneMapped:!1,transparent:!0,opacity:.55,depthWrite:!1}),400,1500,s.grid),gridMajor:o(new Vt({vertexColors:!0,toneMapped:!1,transparent:!0,opacity:1,depthWrite:!1}),2500,7e3,s.grid),building:new hn({color:new ze(s.buildingFill),toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),buildingEdge:o(new Vt({color:new ze(s.buildingEdge),toneMapped:!1,transparent:!0,opacity:s.buildingEdgeOpacity}),2500,7e3),roads:o(new Vt({vertexColors:!0,toneMapped:!1,transparent:!0,opacity:1}),3500,9e3,s.roads),outlines:o(new Vt({vertexColors:!0,toneMapped:!1,transparent:!0,opacity:.6,depthWrite:!1}),1500,5e3,s.outlines),trees:Y1(new Vt({color:new ze(s.tree),toneMapped:!1,transparent:!0,opacity:s.treeOpacity}),900,3e3,r),bounds:X1.map(a=>new Vt({color:new ze(a),toneMapped:!1,depthTest:!1,transparent:!0,opacity:.8}))})}attach(e){Xe(this,jn,e),e.add(this.object3d),e.background=new ze(this.look.background),e.fog=new qs(this.look.background,zi.fog.near,zi.fog.far)}update(e){var l,c;const t=e.position,n={east:t.x,north:-t.z,up:t.y},s=this.groundHeightAt(t.x,t.z)??0,r=Math.max(1,(t.y-s)/900);U(this,ho).value=r,((l=U(this,jn))==null?void 0:l.fog)instanceof qs&&(U(this,jn).fog.near=zi.fog.near*r,U(this,jn).fog.far=zi.fog.far*r);const o=((c=U(this,jn))==null?void 0:c.fog)instanceof qs?U(this,jn).fog.far:void 0,a=this.streamer.update({east:n.east,north:n.north,up:n.up-s,...o!==void 0&&{radiusMeters:o}});for(const h of a.evicted)gt(this,ci,xc).call(this,$t(h));for(const{key:h,data:u}of a.added)gt(this,ci,c_).call(this,h,u);Xe(this,el,a.added.length),U(this,js).clear();for(const h of a.draw)U(this,js).add($t(h));for(const[h,u]of U(this,mi))u.visible=U(this,js).has(h)}setOverlay(e,t){U(this,co)[e]=t;for(const n of U(this,mi).values())for(const s of n.children)s.userData.layer===e&&(s.visible=t)}overlayVisible(e){return U(this,co)[e]}get stats(){return{...this.streamer.stats,residentMeshes:U(this,mi).size,uploadsThisFrame:U(this,el),fadeScale:U(this,ho).value}}groundHeightAt(e,t){if(!Number.isFinite(e)||!Number.isFinite(t))return null;const n=gt(this,ci,ld).call(this,e,t);if(!(n!=null&&n.heights))return null;const s=Zh(n.key),r=D1(n.key.level),o=nr(n.key.level),a=Hr+1,l=Math.min(Hr,Math.max(0,(e-s.east)/r)),c=Math.min(Hr,Math.max(0,(s.north+o- -t)/r)),h=Math.min(Math.floor(l),a-2),u=Math.min(Math.floor(c),a-2),d=l-h,f=c-u,p=n.heights,_=u*a+h,g=p[_]*(1-d)*(1-f)+p[_+1]*d*(1-f)+p[_+a]*(1-d)*f+p[_+a+1]*d*f;return Number.isNaN(g)?null:g}roadSurfacesAt(e,t){const n=gt(this,ci,ld).call(this,e,t);if(!(n!=null&&n.decks))return[];const s=Zh(n.key),r=e-s.east,o=-t-s.north,a=n.decks.segments,l=[];for(let c=0;c<n.decks.halfWidths.length;c++){const h=a[c*6],u=a[c*6+1],d=a[c*6+2],f=a[c*6+3],p=a[c*6+4],_=a[c*6+5],g=f-h,m=p-u,M=g*g+m*m,v=M===0?0:Math.max(0,Math.min(1,((r-h)*g+(o-u)*m)/M));Math.hypot(r-h-v*g,o-u-v*m)<=n.decks.halfWidths[c]&&l.push({up:d+(_-d)*v,surface:"deck"})}return l.sort((c,h)=>c.up-h.up)}dispose(){for(const t of[...U(this,mi).keys()])gt(this,ci,xc).call(this,t);this.streamer.dispose(),Object.values(U(this,uo)).flatMap(t=>Array.isArray(t)?t:[t]).forEach(t=>t.dispose()),this.object3d.removeFromParent(),U(this,jn)&&(U(this,jn).fog=null,U(this,jn).background=null)}}mi=new WeakMap,js=new WeakMap,co=new WeakMap,ho=new WeakMap,jn=new WeakMap,el=new WeakMap,uo=new WeakMap,ci=new WeakSet,ld=function(e,t){const n=e,s=-t;let r=null;for(let o=0;o<=this.manifest.grid.maxLevel;o++){const a=I1(o,n,s),l=this.streamer.residentData(a);if(l!=null&&l.heights){if(U(this,js).has($t(a)))return l;r??(r=l)}}return r},c_=function(e,t){const n=$t(e);gt(this,ci,xc).call(this,n);const s=U(this,uo),r=Zh(e),o=new bt;o.name=`Tile ${n}`,o.position.set(r.east,0,-r.north),o.visible=!1;const a=(u,d,f=0)=>(u.userData.layer=d,u.renderOrder=f,u.matrixAutoUpdate=!1,u.updateMatrix(),d&&(u.visible=U(this,co)[d]),o.add(u),u);if(t.terrain){const u=Di(new xt(t.terrain.positions,3)),d=Di(new xt(t.terrain.colors,3,!0)),f=(m,M)=>{const v=new Nt;return v.setAttribute("position",u),M&&v.setAttribute("color",d),v.setIndex(Di(new xt(m,1))),v},p=f(t.terrain.fill,!1);p.computeBoundingSphere();const _=f(t.terrain.minor,!0),g=f(t.terrain.major,!0);_.boundingSphere=g.boundingSphere=p.boundingSphere,a(new Dt(p,s.fill),null),a(new Jt(_,s.gridMinor),null),a(new Jt(g,s.gridMajor),null)}if(t.buildings){const u=Di(new xt(t.buildings.positions,3)),d=new Nt,f=new Nt;d.setAttribute("position",u),d.setIndex(Di(new xt(t.buildings.indices,1))),d.computeBoundingSphere(),f.setAttribute("position",u),f.setIndex(Di(new xt(t.buildings.edges,1))),f.boundingSphere=d.boundingSphere,a(new Dt(d,s.building),"buildings"),a(new Jt(f,s.buildingEdge),"buildings",3)}t.roads&&a(new Jt(ym(t.roads),s.roads),"roads",3),t.outlines&&a(new Jt(ym(t.outlines),s.outlines),"outlines",2),t.trees&&a(new Jt(bm(t.trees),s.trees),"trees",2),t.fillerTrees&&a(new Jt(bm(t.fillerTrees),s.trees),"fillerTrees",2);const l=nr(e.level),h=(t.terrain?Math.max(...Z1(t)):0)+2;a(new Jt(K1(new Float32Array([0,h,0,l,h,0,l,h,0,l,h,-l,l,h,-l,0,h,-l,0,h,-l,0,h,0])),s.bounds[Math.min(e.level,s.bounds.length-1)]),"tileBounds",20),o.updateMatrix(),Object.assign(t,{terrain:null,buildings:null,roads:null,outlines:null,trees:null,fillerTrees:null}),U(this,mi).set(n,o),this.object3d.add(o)},xc=function(e){const t=U(this,mi).get(e);t&&(t.traverse(n=>{var r;(r=n.geometry)==null||r.dispose()}),t.removeFromParent(),U(this,mi).delete(e))};function Di(i){return i.onUpload(function(){this.array=null}),i}function ym(i){const e=new Nt;return e.setAttribute("position",Di(new xt(i.positions,3))),e.setAttribute("color",Di(new xt(i.colors,3,!0))),e.setIndex(Di(new xt(i.indices,1))),e.computeBoundingSphere(),e}const q1=(()=>{const i=[0,0,0,0,1,0];for(const[e,t]of[[.6,1],[.88,.55]])for(let n=0;n<8;n++){const s=2*Math.PI*n/8,r=2*Math.PI*(n+1)/8;i.push(t*Math.cos(s),e,-t*Math.sin(s),t*Math.cos(r),e,-t*Math.sin(r))}return new Float32Array(i)})();function bm(i){const e=new dg;e.setAttribute("position",new xt(q1.slice(),3));const t=new Ec(i,Jh);e.setAttribute("aTreeBase",new Fn(t,3,0)),e.setAttribute("aTreeSize",new Fn(t,2,3)),e.instanceCount=i.length/Jh;const n={min:new V(1/0,1/0,1/0),max:new V(-1/0,-1/0,-1/0)};for(let r=0;r<i.length;r+=Jh)n.min.min(new V(i[r],i[r+1],i[r+2])),n.max.max(new V(i[r],i[r+1]+i[r+3],i[r+2]));const s=n.min.clone().add(n.max).multiplyScalar(.5);return e.boundingSphere=new Bn(s,s.distanceTo(n.max)+10),e}function Y1(i,e,t,n){h_(i,e,t,n);const s=i.onBeforeCompile;return i.onBeforeCompile=(r,o)=>{s(r,o),r.vertexShader=`attribute vec3 aTreeBase;
attribute vec2 aTreeSize;
${r.vertexShader}`.replace("#include <begin_vertex>","vec3 transformed = aTreeBase + vec3(position.x * aTreeSize.y, position.y * aTreeSize.x, position.z * aTreeSize.y);")},i.customProgramCacheKey=()=>`tile-trees-${e}-${t}`,i}function K1(i,e){const t=new Nt;return t.setAttribute("position",new xt(i,3)),t.computeBoundingSphere(),t}function Z1(i){const e=i.heights;if(!e)return[0];const t=[];for(let n=0;n<e.length;n+=97)Number.isNaN(e[n])||t.push(e[n]);return t.length?t:[0]}function h_(i,e,t,n,s=ga){const r=s.saturation!==1||s.gain!==1||s.tint!==void 0,o=new ze(s.tint??"#ffffff");i.onBeforeCompile=l=>{l.uniforms.uFadeScale=n;let c=`uniform float uFadeScale;
${l.fragmentShader}`;r&&(l.uniforms.uGrade={value:[s.saturation,s.gain]},l.uniforms.uTint={value:o},c=`uniform vec2 uGrade;
uniform vec3 uTint;
${c}`.replace("#include <color_fragment>",`#include <color_fragment>
  diffuseColor.rgb = mix(vec3(dot(diffuseColor.rgb, vec3(0.2126, 0.7152, 0.0722))), diffuseColor.rgb, uGrade.x) * uGrade.y * uTint;`)),l.fragmentShader=c.replace("#include <fog_fragment>",`#include <fog_fragment>
#ifdef USE_FOG
  gl_FragColor.a *= 1.0 - smoothstep(${e.toFixed(1)} * uFadeScale, ${t.toFixed(1)} * uFadeScale, vFogDepth);
#endif`)};const a=r?`-g${s.saturation}-${s.gain}-${s.tint??""}`:"";return i.customProgramCacheKey=()=>`tile-faded-${e}-${t}${a}`,i}class u_ extends zd{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,n=new Float32Array(2*t);for(let s=0;s<t;s+=3)n[2*s]=e[s],n[2*s+1]=e[s+1],n[2*s+2]=e[s+2],n[2*s+3]=e[s+3],n[2*s+4]=e[s+4],n[2*s+5]=e[s+5];return super.setPositions(n),this}setColors(e){const t=e.length-3,n=new Float32Array(2*t);for(let s=0;s<t;s+=3)n[2*s]=e[s],n[2*s+1]=e[s+1],n[2*s+2]=e[s+2],n[2*s+3]=e[s+3],n[2*s+4]=e[s+4],n[2*s+5]=e[s+5];return super.setColors(n),this}setFromPoints(e){const t=e.length-1,n=new Float32Array(6*t);for(let s=0;s<t;s++)n[6*s]=e[s].x,n[6*s+1]=e[s].y,n[6*s+2]=e[s].z||0,n[6*s+3]=e[s+1].x,n[6*s+4]=e[s+1].y,n[6*s+5]=e[s+1].z||0;return super.setPositions(n),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class J1 extends e_{constructor(e=new u_,t=new Xc({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}const Is={dotM:8,heightRatio:.15,haloM:24,beamM:20,capColor:"#a9bccf",pulseSeconds:2};function Q1(){const i=(c,h)=>{const u=new sg(c);u.colorSpace=Xt,u.minFilter=Ln;const d=new Dt(new sr(1,1).rotateX(-Math.PI/2),new hn({map:u,depthTest:!1,depthWrite:!1,transparent:!0,fog:!1,side:Cn}));return d.renderOrder=1e3+h,d},e=i(Sm(128,(c,h)=>{const u=c.createRadialGradient(h,h,0,h,h,h);u.addColorStop(0,"rgba(10,132,255,0.45)"),u.addColorStop(.7,"rgba(10,132,255,0.18)"),u.addColorStop(1,"rgba(10,132,255,0)"),c.fillStyle=u,c.fillRect(0,0,2*h,2*h)}),0),t=i(Sm(128,(c,h)=>{const u=c.createRadialGradient(h,h,0,h,h,h);u.addColorStop(0,"rgba(169,188,207,0.75)"),u.addColorStop(1,"rgba(169,188,207,0)"),c.fillStyle=u,c.beginPath(),c.moveTo(h,h),c.arc(h,h,h,-Math.PI/2-.42,-Math.PI/2+.42),c.closePath(),c.fill()}),1),n=Is.heightRatio,s=c=>new hn({color:c,fog:!1,transparent:!0}),r=new Dt(new kc(.5,.5,n,40).translate(0,n/2,0),[s("#c9ced6"),s("#ffffff"),s("#ffffff")]),o=new Dt(new Bc(.37,40).rotateX(-Math.PI/2).translate(0,n+.001,0),s(Is.capColor));r.renderOrder=1002,o.renderOrder=1003,r.onBeforeRender=c=>c.clearDepth();const a=new bt;a.add(r,o);const l=new bt;return l.name="LocationDot",l.add(e,t,a),a.scale.setScalar(Is.dotM),t.scale.setScalar(2*Is.beamM),e.scale.setScalar(Is.haloM),{object3d:l,set(c,h){l.position.copy(c),l.rotation.y=-(h*Math.PI)/180},update(c){const h=c/1e3/Is.pulseSeconds%1;e.scale.setScalar(Is.haloM*(.55+.45*h)),e.material.opacity=1-h*.85}}}function Sm(i,e){const t=document.createElement("canvas");t.width=t.height=i;const n=t.getContext("2d");if(!n)throw new Error("2D canvas unavailable");return e(n,i/2),t}const Qh=3e6,Em=1;function eA(i,e,t,n){const s=i.streams.gnssFixes;if(!s)return[];const r=[];for(let c=0;c<s.count;c++)r.push(s.get(c));let o=0,a=r.length-1;if(n){for(;o+1<r.length&&r[o+1].timeUs<=n.startUs;)o++;for(;a-1>=0&&r[a-1].timeUs>=n.endUs;)a--}const l=[];for(const c of r.slice(o,a+1)){const h=c.position;if(!Number.isFinite(h.latitudeDeg)||!Number.isFinite(h.longitudeDeg))continue;const u=e.toLocal({...h,altitudeMeters:0});l.push({timeUs:c.timeUs,east:u.east,north:u.north,...h.altitudeMeters!==void 0&&Number.isFinite(h.altitudeMeters)&&{upHint:h.altitudeMeters-t},...c.speedMps!==void 0&&{speedMps:c.speedMps},...c.courseDegTrue!==void 0&&{courseDegTrue:c.courseDegTrue}})}return l}function tA(i){const e=[...i].sort((c,h)=>c.timeUs-h.timeUs);if(e.length===0)throw new Error("a drive path needs at least one GNSS fix");const t=e.length,n=new Float64Array(t),s=new Float64Array(t);for(let c=0;c<t;c++){const h=e[c];if(h.speedMps!==void 0&&h.speedMps<.3)continue;if(h.speedMps!==void 0&&h.courseDegTrue!==void 0){const p=h.courseDegTrue*Math.PI/180;n[c]=h.speedMps*Math.sin(p),s[c]=h.speedMps*Math.cos(p);continue}const u=e[c-1>=0&&h.timeUs-e[c-1].timeUs<=Qh?c-1:c],d=e[c+1<t&&e[c+1].timeUs-h.timeUs<=Qh?c+1:c],f=(d.timeUs-u.timeUs)/1e6;f>0&&(n[c]=(d.east-u.east)/f,s[c]=(d.north-u.north)/f)}const r=new Float64Array(t);let o=null;for(let c=0;c<t;c++)Math.hypot(n[c],s[c])>=Em&&(o=e[c].courseDegTrue??Tm(Math.atan2(n[c],s[c]))),r[c]=o??NaN;const a=r.findIndex(c=>!Number.isNaN(c));for(let c=0;c<t;c++)Number.isNaN(r[c])&&(r[c]=a<0?0:r[a]);const l=c=>{let h=0,u=t-1;for(;u-h>1;){const d=h+u>>1;e[d].timeUs<=c?h=d:u=d}return h};return{fixes:e,startUs:e[0].timeUs,endUs:e[t-1].timeUs,at(c){if(t===1||c<=e[0].timeUs)return wm(e[0],r[0]);if(c>=e[t-1].timeUs)return wm(e[t-1],r[t-1]);const h=l(c),u=e[h],d=e[h+1],f=(d.timeUs-u.timeUs)/1e6,p=(c-u.timeUs)/(d.timeUs-u.timeUs);let _,g,m,M;if(d.timeUs-u.timeUs>Qh)_=u.east+p*(d.east-u.east),g=u.north+p*(d.north-u.north),m=(d.east-u.east)/f,M=(d.north-u.north)/f;else{const S=p*p,E=S*p,L=2*E-3*S+1,b=E-2*S+p,y=-2*E+3*S,C=E-S,H=6*S-6*p,G=3*S-4*p+1,O=-6*S+6*p,I=3*S-2*p;_=L*u.east+b*f*n[h]+y*d.east+C*f*n[h+1],g=L*u.north+b*f*s[h]+y*d.north+C*f*s[h+1],m=(H*u.east+G*f*n[h]+O*d.east+I*f*n[h+1])/f,M=(H*u.north+G*f*s[h]+O*d.north+I*f*s[h+1])/f}const v=Math.hypot(m,M),x=v>=Em?Tm(Math.atan2(m,M)):sA(r[h],r[h+1],p),R=u.upHint!==void 0&&d.upHint!==void 0?u.upHint+p*(d.upHint-u.upHint):u.upHint??d.upHint;return{east:_,north:g,headingDegTrue:x,speedMps:v,...R!==void 0&&{upHint:R}}}}}function nA(i,e,t){if(i.length===0)return e??t;if(t===null)return Math.max(...i);let n=i[0];for(const s of i)Math.abs(s-t)<Math.abs(n-t)&&(n=s);return e!==null&&Math.abs(e-t)+iA<Math.abs(n-t)?e:n}const iA=1;function wm(i,e){return{east:i.east,north:i.north,headingDegTrue:e,speedMps:0,...i.upHint!==void 0&&{upHint:i.upHint}}}function Tm(i){return(i*180/Math.PI%360+360)%360}function sA(i,e,t){const n=(e-i+540)%360-180;return((i+t*n)%360+360)%360}const d_="/assets/vehicles/gr86/gr86.glb",f_="0580_627s-927s",rA=i=>`/replays/${i}.replay.json`,oA={driven:"#ffd23f",drivenWidth:5,ahead:"#ff4d1a",aheadWidth:3,aheadOpacity:.85};async function p_(i,e,t,n,s,r,o={}){var _e;const a={studioInset:!0,replayPanel:!0,panelControls:!0,follow:!0,insetOrbit:!0,...o},l=new URLSearchParams(location.search).get("replay")??f_,c=rA(l),[h,u]=await Promise.all([a.studioInset?Tc.load(d_).catch(se=>(console.error("GR86 model:",se),null)):Promise.resolve(null),fetch(c).then(se=>{if(!se.ok)throw new Error(`HTTP ${se.status} for ${c}`);return se.json()})]),d=Cg(u);if(!d.ok)throw new Error(d.issues.map(se=>se.message).join(`
`));const f=eA(d.session,s.projection,s.anchorHeightNavd88Meters,d.interval);if(f.length===0)throw new Error(`session ${d.session.sessionId} has no GNSS fixes in ${l}`);const p=tA(f),_=Am(t),g=se=>{const Me=p.at(se);return{position:{east:Me.east,north:Me.north,up:_(se,Me)},headingDegTrue:Me.headingDegTrue}},m=hA(p,()=>Am(t),a.track??oA);e.add(m.group);const M=a.marker?a.marker():Q1();e.add(M.object3d);let v=null,x=null,R=null;const S=a.insetElement??document.createElement("div");if(h){a.insetElement||(S.className="car-view",S.innerHTML="<span>GR86</span>",i.appendChild(S));const se=aA(e,h,S,a.insetOrbit);R=se.scene,x=se.camera,v=se.orbit}const E=Rg(d.session,{bounds:d.interval}),L=Ag(d.interval),b=Fg(E,L,h??lA),y=Ug(b,()=>performance.now());document.addEventListener("visibilitychange",()=>y.resync());const{startUs:C,endUs:H}=d.interval;a.replayPanel&&Ng(i,b,`Session ${d.session.sessionId} <span>${C/1e6}–${H/1e6} s · ${s.placeName}</span>`);const G=document.createElement("div");G.className="seg",G.innerHTML="<button data-car>Find car</button>";const O=(se,Me,Ce="")=>{const Ie=document.createElement("label");return Ce&&(Ie.title=Ce),Ie.innerHTML=`<input type="checkbox" checked> ${se}`,{label:Ie,box:Ie.querySelector("input")}},I=O("Follow car",!0,"Move the camera with the car, keeping your angle and distance"),D=O("Drive track"),P=O("GR86 view",!0,"The car in the studio: wheels, steering and lamps from the recording");I.box.checked=a.follow,r&&a.panelControls&&((_e=r.querySelector(".seg"))==null||_e.after(G,I.label,D.label,...h?[P.label]:[])),D.box.addEventListener("change",()=>{m.group.visible=D.box.checked}),P.box.addEventListener("change",()=>{S.hidden=!P.box.checked});let F=g(L.state.timeUs),$=L.state.timeUs;const ee=new V,W=new V,Q=()=>M.set(W.set(F.position.east,F.position.up,-F.position.north),F.headingDegTrue);Q(),ee.copy(W);const pe=()=>{n.setView(cA(W),!1),ee.copy(W)};G.querySelector("[data-car]").addEventListener("click",()=>{pe(),I.box.checked=!0});const Z={position:W,get headingDegTrue(){return F.headingDegTrue}};e.onFrame(()=>{y.tick(),v==null||v.update();const se=L.state.timeUs;if(se!==$&&(F=g(se),$=se,Q()),m.driven(se),I.box.checked&&!n.transitioning){const Me=W.clone().sub(ee);n.controls.target.add(Me),e.camera.position.add(Me)}ee.copy(W),M.update(performance.now())}),pe();const oe=()=>{m.refresh(),m.driven(L.state.timeUs),$=Number.NaN};return{player:b,replay:E,path:p,sessionId:d.session.sessionId,interval:d.interval,stem:l,vehicle:h,insetCamera:x,insetScene:R,dot:M,car:Z,refreshSurfaces:oe}}function aA(i,e,t,n){const s=new bd,r=bg(i.renderer,s);s.add(r.group,e.object3d);const o=new xn(32,1,.1,200);let a=new yg(o,t);return n||(a.dispose(),a=null),i.addInset({scene:s,camera:o,element:t}),{scene:s,camera:o,orbit:a}}const lA={apply(){},update(){},dispose(){}};function cA(i){return{position:{x:i.x-260,y:i.y+480,z:i.z+440},target:{x:i.x,y:i.y,z:i.z}}}function Am(i){let e=null,t=null;const n=[4,8].flatMap(s=>Array.from({length:8},(r,o)=>[s*Math.cos(o*Math.PI/4),s*Math.sin(o*Math.PI/4)]));return(s,r)=>{const o=r.east,a=-r.north,c=e!==null&&Math.abs(s-e)<=15e5?t:r.upHint??null;let h=i.roadSurfacesAt(o,a).map(f=>f.up);if(c!==null&&!h.some(f=>Math.abs(f-c)<2.5))for(const[f,p]of n)for(const _ of i.roadSurfacesAt(o+f,a+p))h=[...h,_.up];const u=i.groundHeightAt(o,a),d=nA(h,u,c)??0;return e=s,t=d,d}}function hA(i,e,t){const s=[];for(let d=i.startUs;d<i.endUs;d+=25e4)s.push(d);s.push(i.endUs);const r=()=>{const d=e(),f=[];for(const p of s){const _=i.at(p);f.push(_.east,d(p,_)+.8,-_.north)}return f},o=(d,f,p,_)=>{const g=f.map((m,M)=>M%3===1?m+p:m);d.setPositions(_?Array.from({length:g.length},(m,M)=>g[g.length-3*(Math.floor(M/3)+1)+M%3]):g)},a=(d,f,p,_,g,m=!1)=>{const M=new u_;o(M,d,g,m);const v=new Xc({color:f,linewidth:p,transparent:_<1,opacity:_,worldUnits:!1}),x=new J1(M,v);return x.renderOrder=2,x},l=r(),c=a(l,t.ahead,t.aheadWidth,t.aheadOpacity,0,!0),h=a(l,t.driven,t.drivenWidth,1,.3),u=new bt;return u.name="DriveTrack",u.add(c,h),{group:u,refresh(){const d=r();o(c.geometry,d,0,!0),o(h.geometry,d,.3,!1)},driven(d){const f=Math.max(0,Math.min(s.length-1,Math.floor((d-i.startUs)/25e4)));h.geometry.instanceCount=f,c.geometry.instanceCount=s.length-1-f}}}const uA={minimal:{boxes:6,points:150,labels:8},dense:{boxes:18,points:800,labels:24},extreme:{boxes:35,points:2500,labels:55}},RA=Object.keys(uA);function dA(i){return new URLSearchParams(i).get("look")==="perception"?"perception":"wireframe"}function fA(i){const e=new URLSearchParams(i).get("density");return e==="minimal"||e==="dense"||e==="extreme"?e:"dense"}function Ca(i,e){const t=document.createElement("div");return t.className="status",t.textContent=e,i.appendChild(t),t}function To(i,e){i.classList.add("error"),i.textContent=e}const pA="/regions/richmond-downtown-pilot/";async function mA(i){const e=new Dd(i);e.camera.fov=45,e.camera.updateProjectionMatrix();const t=Ca(i,"Loading Richmond…");let n;try{n=await YT(JT(pA))}catch(p){console.error(p),To(t,`Richmond world could not be loaded: ${p instanceof Error?p.message:String(p)}`);return}const s=new y1;s.show(n.geometry),s.attach(e.scene);const r=(p,_)=>s.groundHeightAt(p,_),o=(p,_,g)=>{let m=null;for(const M of s.roadSurfacesAt(p,_))M.up<=g&&(m===null||M.up>m)&&(m=M.up);return m},a=new Eg(e.camera,e.renderer.domElement,{groundHeightAt:r,surfaceBelow:o}),l=gA(n,r);a.setView(l,!1),e.onFrame(()=>a.update());const c=m_();e.onFrame(c.tick),e.start(),t.remove();const h=_A(i,n,s,a,l,e,c),u={host:e,world:s,camera:a,loaded:n},d=dA(location.search)==="perception"?await eu(async()=>{const{mountPerception:p}=await import("./mount-BMK7Ahml.js");return{mountPerception:p}},__vite__mapDeps([0,1])).then(({mountPerception:p})=>p({root:i,host:e,world:s,camera:a,loaded:n,panel:h,initial:{enabled:!0,points:!0,boxes:!0,labels:!0,density:fA(location.search)}})):null;if(u.perception=d,new URLSearchParams(location.search).has("noreplay"))return;const f=Ca(i,"Loading GR86 and session…");try{const p={projection:n.projection,anchorHeightNavd88Meters:n.geometry.terrain.anchorHeightNavd88Meters,placeName:"Richmond"},_=await p_(i,e,s,a,p,h);if(u.drive=_,d){const{perceptionReplaySource:g}=await eu(async()=>{const{perceptionReplaySource:M}=await import("./replaySource-BrNA1pKk.js");return{perceptionReplaySource:M}},__vite__mapDeps([2,1])),m=new URLSearchParams(location.search).get("replay")??f_;d.attachReplay(g(_,n.projection,m.split("_")[0]??m,s,n.geometry.roads.roads))}f.remove()}catch(p){console.error(p),To(f,`The Richmond replay could not be loaded (the map still works): ${p instanceof Error?p.message:String(p)}`)}}function gA(i,e){const t=i.projection.toLocal({latitudeDeg:37.5392,longitudeDeg:-77.4365,altitudeMeters:0,altitudeReference:"mean-sea-level"}),n=t.east,s=-t.north,r=e(n,s);if(r===null)throw new Error("no terrain under the home view target");return{position:{x:n-650,y:r+620,z:s+1050},target:{x:n,y:r,z:s}}}function _A(i,e,t,n,s,r,o){const a=e.geometry.manifest,l=e.geometry.terrain.metadata,c=t.stats,h=c.buildings,u=S=>h.heightSources.building[S]+h.heightSources.part[S],d=document.createElement("div");d.className="world-panel",d.innerHTML=`
    <h1>86WORLD <span>${a.name}</span></h1>
    <div class="seg"><button data-reset>Reset view</button></div>
    <label><input type="checkbox" data-overlay="origin"> Origin axes</label>
    <label><input type="checkbox" data-overlay="buildings"> Buildings</label>
    <label><input type="checkbox" data-overlay="water"> Water</label>
    <label><input type="checkbox" data-overlay="bridges"> Bridge decks</label>
    <label><input type="checkbox" data-overlay="greens"> Green areas</label>
    <label><input type="checkbox" data-overlay="trees"> Trees</label>
    <label title="Estimated trees filling wooded and scrub areas (the filler rule); not mapped data"><input type="checkbox" data-overlay="fillerTrees"> Filler trees</label>
    <label><input type="checkbox" data-overlay="bridgeDebug"> Bridge profiles</label>
    <label><input type="checkbox" data-overlay="roadDebug"> Road centrelines</label>
    <dl>
      <dt>Terrain</dt><dd>${l.grid.columns}×${l.grid.rows} @ ${l.grid.spacingMeters} m</dd>
      <dt>Heights</dt><dd>NAVD88 − ${l.heights.anchor.heightNavd88Meters.toFixed(2)} m</dd>
      <dt>Roads</dt><dd title="Wires on the terrain mesh (a vertex at every triangle edge they cross) and along deck profiles">${c.roadWires.groundRoads} wires · ${c.roadWires.deckRoads} on decks</dd>
      <dt>Buildings</dt><dd>${h.buildingsDrawn} + ${h.partsDrawn} parts</dd>
      <dt>Bldg height</dt><dd title="height tag · building:levels × 3.2 m · 10 m default">${u("height")} tagged · ${u("levels")} levels · ${u("default")} default</dd>
      <dt>Water</dt><dd>${c.water.features.river+c.water.features.level+c.water.features.draped} features · ${c.water.holes} islands</dd>
      <dt>Bridges</dt><dd title="deck heights are estimates; debug-only bridges keep a dashed centreline">${c.bridges.decks} decks · <i class="sw br"></i>${c.bridges.debugOnly} debug-only</dd>
      <dt>Green areas</dt><dd title="OSM parks, gardens, grass, woods, scrub and cemeteries: outlines draped on the terrain">${c.greens.features} · ${c.greens.byKind.wood} wooded</dd>
      <dt>Trees</dt><dd title="OSM-mapped tree points; height and crown size are defaults unless tagged">${c.trees.drawn} mapped · ${c.trees.taggedHeight} tagged heights</dd>
      <dt>Filler trees</dt><dd title="Estimated: a jittered 12 m lattice inside woods and scrub, kept off roads, buildings, water and mapped trees">${(c.fillerTrees.placed.wood??0)+(c.fillerTrees.placed.scrub??0)} estimated</dd>
      <dt>Tunnels</dt><dd><i class="sw tu"></i>${c.roads.byTreatment.tunnel} centrelines</dd>
      <dt>Frame</dt><dd data-out="fps">–</dd>
      <dt>Draw</dt><dd data-out="draw">–</dd>
      <dt>Target</dt><dd data-out="where">–</dd>
      <dt>Picked</dt><dd data-out="pick">click a building, bridge or water</dd>
    </dl>
    <p class="hint">Drag to orbit · right-drag to pan · scroll to zoom · click a building, bridge or water to identify it. True scale, no vertical exaggeration. Bridge deck heights are estimated (the DEM has no decks); dashed lines are bridges without a plausible deck, and tunnels. Building heights without a height tag are estimates.</p>`,i.appendChild(d),d.querySelector("[data-reset]").addEventListener("click",()=>n.setView(s)),d.querySelectorAll("[data-overlay]").forEach(S=>{const E=S.dataset.overlay;S.checked=t.overlayVisible(E),S.addEventListener("change",()=>t.setOverlay(E,S.checked))});const f=d.querySelector('[data-out="pick"]'),p=r.renderer.domElement,_=new Gx,g=new qe;let m=null;p.addEventListener("pointerdown",S=>{m={x:S.clientX,y:S.clientY}}),p.addEventListener("pointerup",S=>{if(!m||Math.hypot(S.clientX-m.x,S.clientY-m.y)>4)return;const E=p.getBoundingClientRect();g.set((S.clientX-E.left)/E.width*2-1,-((S.clientY-E.top)/E.height)*2+1),_.setFromCamera(g,r.camera);const L=t.buildingAt(_),b=t.waterAt(_),y=t.bridgeAt(_);if(y&&(!L||y.distance<L.distance)&&(!b||y.distance<b.distance)){const G=y.bridge,O=l.heights.anchor.heightNavd88Meters,I=y.deck?y.deck.up:y.point.y,D=t.groundHeightAt(y.point.x,y.point.z);f.textContent=`${G.id}${G.name?` ${G.name}`:""} · bridge deck · layer ${G.layer??"(1)"} · est. NAVD88 ${(I+O).toFixed(1)} m`+(D!==null?` (${(I-D).toFixed(1)} m above terrain)`:"");return}if(b&&(!L||b.distance<L.distance)){const G=b.water,O=l.heights.anchor.heightNavd88Meters,I=G.kind==="river"?`${(G.surfaceMinUp+O).toFixed(1)}–${(G.surfaceMaxUp+O).toFixed(1)} m`:`${(G.surfaceMinUp+O).toFixed(1)} m`;f.textContent=`${G.id}${G.name?` ${G.name}`:""} · ${G.water??"water"} · ${G.kind} · NAVD88 ${I}`;return}if(!L){f.textContent="–";return}const C=L.building,H=C.heightSource==="height"?"height tag":C.heightSource==="levels"?"levels × 3.2 m":"default";f.textContent=`${C.id}${C.name?` ${C.name}`:""} · ${C.kind==="part"?"part · ":""}${C.heightMeters.toFixed(1)} m (${H})`});const M=d.querySelector('[data-out="fps"]'),v=d.querySelector('[data-out="draw"]'),x=d.querySelector('[data-out="where"]');let R=0;return r.onFrame(()=>{const S=performance.now();if(S<R)return;R=S+500;const E=o.read();M.textContent=E?`${E.fps.toFixed(0)} fps · ${E.ms.toFixed(1)} ms`:"–";const L=r.renderer.info.render;v.textContent=`${L.calls} calls · ${(L.triangles/1e3).toFixed(0)}k tris`;const b=n.controls.target,y=e.projection.toGeo({east:b.x,north:-b.z,up:0});x.textContent=`${y.latitudeDeg.toFixed(5)}, ${y.longitudeDeg.toFixed(5)}`}),d}function m_(){const i=[];return{tick:()=>{i.push(performance.now()),i.length>61&&i.shift()},read:()=>{if(i.length<2)return null;const e=(i[i.length-1]-i[0])/(i.length-1);return{fps:1e3/e,ms:e}}}}const xA="richmond",Rm=i=>`/tiles/${i}/`;async function MA(i){const e=new URLSearchParams(location.search),t=e.get("tiles")||xA,n=new Dd(i);n.camera.fov=45,n.camera.updateProjectionMatrix();const s=Ca(i,`Loading tileset ${t}…`);let r;try{r=await W1(Rm(t))}catch(m){console.error(m),To(s,`Tileset "${t}" could not be loaded: ${m instanceof Error?m.message:String(m)}. Build it with npm run world:tiles-richmond.`);return}const o=new G1(Rm(t),r),a=new j1(r,o);a.attach(n.scene);const l=Bg(r.frame.origin),c=(m,M)=>a.groundHeightAt(m,M),h=(m,M,v)=>{let x=null;for(const R of a.roadSurfacesAt(m,M))R.up<=v&&(x===null||R.up>x)&&(x=R.up);return x},u=new Eg(n.camera,n.renderer.domElement,{groundHeightAt:c,surfaceBelow:h,maxDistanceMeters:6e5}),d=vA(r,l);u.setView(d,!1),n.onFrame(()=>{u.update(),a.update(n.camera)});const f=m_();n.onFrame(f.tick),n.start(),s.remove();const p=yA(i,r,a,o,u,d,n,f,l),_={host:n,world:a,camera:u,manifest:r,pool:o};if(e.has("noreplay"))return;const g=Ca(i,"Loading GR86 and session…");try{const m=await p_(i,n,a,u,{projection:l,anchorHeightNavd88Meters:r.anchorHeightNavd88Meters,placeName:r.name},p);_.drive=m;let M=a.stats.loaded,v=0;n.onFrame(()=>{const x=a.stats.loaded,R=performance.now();x===M||R<v||(M=x,v=R+1e3,m.refreshSurfaces())}),g.remove()}catch(m){console.error(m),To(g,`The replay could not be loaded (the map still works): ${m instanceof Error?m.message:String(m)}`)}}function vA(i,e){const t=e.toLocal({latitudeDeg:37.5392,longitudeDeg:-77.4365,altitudeMeters:0,altitudeReference:"mean-sea-level"}),n=i.extent,s=t.east>=n.minEast&&t.east<=n.maxEast&&t.north>=n.minNorth&&t.north<=n.maxNorth,r=s?t.east:(n.minEast+n.maxEast)/2,o=s?t.north:(n.minNorth+n.maxNorth)/2,a=r,l=-o;return{position:{x:a-650,y:620,z:l+1050},target:{x:a,y:0,z:l}}}function yA(i,e,t,n,s,r,o,a,l){const c=y=>`${(y/1048576).toFixed(y<10485760?1:0)} MB`,h=document.createElement("div");h.className="world-panel";const u=Array.from({length:e.grid.maxLevel+1},(y,C)=>C);h.innerHTML=`
    <h1>86WORLD <span>${e.name} · streamed</span></h1>
    <div class="seg"><button data-reset>Reset view</button><button data-wide>Whole tileset</button></div>
    <label><input type="checkbox" data-overlay="buildings"> Buildings</label>
    <label><input type="checkbox" data-overlay="roads"> Roads</label>
    <label><input type="checkbox" data-overlay="outlines"> Shores &amp; green areas</label>
    <label><input type="checkbox" data-overlay="trees"> Trees</label>
    <label title="Estimated trees filling wooded and scrub areas (the filler rule); not mapped data"><input type="checkbox" data-overlay="fillerTrees"> Filler trees</label>
    <label title="Tile borders, coloured by level"><input type="checkbox" data-overlay="tileBounds"> Tile borders</label>
    <label title="Lower: coarser tiles nearer the camera (less memory, faster). Higher: full detail further out.">Detail <input type="range" min="1" max="4" step="0.25" data-detail> <output data-out="detail"></output></label>
    <label title="Decoded tiles kept in memory before the least recently drawn are evicted">Budget <select data-budget>
      ${[64,128,256,384,768,1536].map(y=>`<option value="${y}">${y} MB</option>`).join("")}
    </select></label>
    <dl>
      <dt>Tileset</dt><dd>${e.stats.tiles??e.tiles.length} tiles · L0–L${e.grid.maxLevel} · ${c(e.archive.byteLength)}</dd>
      <dt>Drawn</dt><dd data-out="drawn">–</dd>
      <dt>Resident</dt><dd data-out="resident">–</dd>
      <dt>Streaming</dt><dd data-out="stream">–</dd>
      <dt>Fetched</dt><dd data-out="fetched">–</dd>
      <dt>Workers</dt><dd data-out="workers">${n.size} × decode + mesh</dd>
      <dt>Frame</dt><dd data-out="fps">–</dd>
      <dt>Draw</dt><dd data-out="draw">–</dd>
      <dt>Eye</dt><dd data-out="eye">–</dd>
      <dt>Target</dt><dd data-out="where">–</dd>
    </dl>
    <p class="hint">Tiles stream in around the camera: full detail close up (level 0, 1.28 km tiles), coarser further out (each level doubles the tile and halves the detail). Drag to orbit · right-drag to pan · scroll to zoom. Bridge decks are estimated. ${e.attribution.join(" · ")}</p>`,i.appendChild(h),h.querySelector("[data-reset]").addEventListener("click",()=>s.setView(r)),h.querySelector("[data-wide]").addEventListener("click",()=>{const y=e.extent,C=(y.minEast+y.maxEast)/2,H=-(y.minNorth+y.maxNorth)/2,G=Math.max(y.maxEast-y.minEast,y.maxNorth-y.minNorth);s.setView({position:{x:C-G*.35,y:G*.9,z:H+G*.6},target:{x:C,y:0,z:H}})}),h.querySelectorAll("[data-overlay]").forEach(y=>{const C=y.dataset.overlay;y.checked=t.overlayVisible(C),y.addEventListener("change",()=>t.setOverlay(C,y.checked))});const d=h.querySelector("[data-detail]"),f=h.querySelector('[data-out="detail"]');d.value=String(t.streamer.options.refineFactor),f.textContent=d.value,d.addEventListener("input",()=>{t.streamer.setOptions({refineFactor:Number(d.value)}),f.textContent=d.value});const p=h.querySelector("[data-budget]");p.value=String(Math.round(t.streamer.options.memoryBudgetBytes/1048576)),p.addEventListener("change",()=>t.streamer.setOptions({memoryBudgetBytes:Number(p.value)*1048576}));const _=y=>h.querySelector(`[data-out="${y}"]`),[g,m,M,v,x,R,S,E,L]=["drawn","resident","stream","fetched","workers","fps","draw","eye","where"].map(_);let b=0;return o.onFrame(()=>{const y=performance.now();if(y<b)return;b=y+500;const C=t.stats;g.textContent=`${C.drawn} tiles · ${u.map($=>`L${$} ${C.drawnByLevel[$]??0}`).join(" ")}`,m.textContent=`${C.resident} tiles · ${c(C.residentBytes)} of ${c(t.streamer.options.memoryBudgetBytes)}`,M.textContent=`${C.inFlight} loading · ${C.pending} queued · ${C.loaded} loaded · ${C.evicted} evicted${C.failed?` · ${C.failed} failed`:""}`,v.textContent=`${c(C.fetchedBytes)} · ${C.shards} shards`;const H=n.timings;H.length&&(x.textContent=`${n.size} × decode + mesh · ${(H.reduce(($,ee)=>$+ee,0)/H.length).toFixed(0)} ms/tile`);const G=a.read();R.textContent=G?`${G.fps.toFixed(0)} fps · ${G.ms.toFixed(1)} ms`:"–";const O=o.renderer.info.render;S.textContent=`${O.calls} calls · ${(O.triangles/1e3).toFixed(0)}k tris`;const I=o.camera.position,D=t.groundHeightAt(I.x,I.z);E.textContent=`${D===null?"–":`${(I.y-D).toFixed(0)} m above ground`}`;const P=s.controls.target,F=l.toGeo({east:P.x,north:-P.z,up:0});L.textContent=`${F.latitudeDeg.toFixed(5)}, ${F.longitudeDeg.toFixed(5)}`}),h}const Cm="/replays/0382_180s-240s.replay.json";async function bA(i){if(new URLSearchParams(location.search).has("oem"))return(await eu(async()=>{const{composeOemDashboard:o}=await import("./oemDashboard-Cj9B7edU.js");return{composeOemDashboard:o}},__vite__mapDeps([3,4]))).composeOemDashboard(i);if(new URLSearchParams(location.search).has("tiles"))return MA(i);if(new URLSearchParams(location.search).has("world"))return mA(i);const e=new Dd(i),t=bg(e.renderer,e.scene);e.add(t.group);const n=new yg(e.camera,e.renderer.domElement);e.onFrame(()=>n.update()),e.start();const s=Ca(i,"Loading GR86…");let r;try{r=await Tc.load(d_),e.add(r.object3d)}catch(o){console.error(o),To(s,o instanceof pa?o.message:`GR86 model failed to initialise: ${String(o)}. Expected ${wc}.`);return}if(new URLSearchParams(location.search).has("manual")){e.onFrame(o=>r.update(o)),e.onFrame(nw(i,r)),s.remove();return}s.textContent="Loading session…";try{const o=await fetch(Cm);if(!o.ok)throw new Error(`HTTP ${o.status} for ${Cm}`);const a=Cg(await o.json());if(!a.ok)throw new Error(a.issues.map(p=>p.message).join(`
`));const l=Rg(a.session,{bounds:a.interval}),c=Ag(a.interval),h=Fg(l,c,r),u=Ug(h,()=>performance.now());e.onFrame(()=>u.tick()),document.addEventListener("visibilitychange",()=>u.resync());const{startUs:d,endUs:f}=a.interval;Ng(i,h,`Session ${a.session.sessionId} <span>${d/1e6}–${f/1e6} s</span>`),s.remove()}catch(o){console.error(o),To(s,`Session replay could not be loaded: ${o instanceof Error?o.message:String(o)}`)}}const g_=document.getElementById("app");if(!g_)throw new Error("#app element missing from index.html");bA(g_);export{Bg as $,Zd as A,On as B,ze as C,Cn as D,vn as E,qs as F,d_ as G,TA as H,ag as I,Gi as J,JE as K,u_ as L,nl as M,$E as N,Nd as O,sr as P,xt as Q,go as R,Xt as S,Tc as T,ax as U,V,Br as W,xA as X,W1 as Y,G1 as Z,j1 as _,J1 as a,Eg as a0,f_ as a1,p_ as a2,m_ as a3,EA as a4,Qg as a5,AA as a6,RA as a7,uA as a8,rt as a9,Xc as b,Dd as c,bg as d,Nt as e,qt as f,Jt as g,Vt as h,bt as i,hn as j,Dt as k,sg as l,aA as m,Ln as n,jE as o,wA as p,J0 as q,QE as r,Am as s,wn as t,ug as u,kc as v,Bc as w,Rx as x,og as y,Vi as z};
