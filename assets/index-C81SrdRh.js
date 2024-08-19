(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Zc(t,e){const n=new Set(t.split(","));return r=>n.has(r)}const Ve={},$r=[],Ot=()=>{},L_=()=>!1,$o=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),el=t=>t.startsWith("onUpdate:"),at=Object.assign,tl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},F_=Object.prototype.hasOwnProperty,we=(t,e)=>F_.call(t,e),ae=Array.isArray,qr=t=>di(t)==="[object Map]",qo=t=>di(t)==="[object Set]",ah=t=>di(t)==="[object Date]",de=t=>typeof t=="function",We=t=>typeof t=="string",nn=t=>typeof t=="symbol",ke=t=>t!==null&&typeof t=="object",Af=t=>(ke(t)||de(t))&&de(t.then)&&de(t.catch),Rf=Object.prototype.toString,di=t=>Rf.call(t),U_=t=>di(t).slice(8,-1),bf=t=>di(t)==="[object Object]",nl=t=>We(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Bs=Zc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ho=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},B_=/-(\w)/g,_r=Ho(t=>t.replace(B_,(e,n)=>n?n.toUpperCase():"")),j_=/\B([A-Z])/g,Rr=Ho(t=>t.replace(j_,"-$1").toLowerCase()),Pf=Ho(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ka=Ho(t=>t?`on${Pf(t)}`:""),Qn=(t,e)=>!Object.is(t,e),eo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Sf=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},fc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ch;const Cf=()=>ch||(ch=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function rl(t){if(ae(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=We(r)?K_(r):rl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(We(t)||ke(t))return t}const $_=/;(?![^(]*\))/g,q_=/:([^]+)/,H_=/\/\*[^]*?\*\//g;function K_(t){const e={};return t.replace(H_,"").split($_).forEach(n=>{if(n){const r=n.split(q_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function sl(t){let e="";if(We(t))e=t;else if(ae(t))for(let n=0;n<t.length;n++){const r=sl(t[n]);r&&(e+=r+" ")}else if(ke(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const z_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",W_=Zc(z_);function kf(t){return!!t||t===""}function G_(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Ko(t[r],e[r]);return n}function Ko(t,e){if(t===e)return!0;let n=ah(t),r=ah(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=nn(t),r=nn(e),n||r)return t===e;if(n=ae(t),r=ae(e),n||r)return n&&r?G_(t,e):!1;if(n=ke(t),r=ke(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!Ko(t[o],e[o]))return!1}}return String(t)===String(e)}function Of(t,e){return t.findIndex(n=>Ko(n,e))}const Nf=t=>!!(t&&t.__v_isRef===!0),Vt=t=>We(t)?t:t==null?"":ae(t)||ke(t)&&(t.toString===Rf||!de(t.toString))?Nf(t)?Vt(t.value):JSON.stringify(t,Vf,2):String(t),Vf=(t,e)=>Nf(e)?Vf(t,e.value):qr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[za(r,i)+" =>"]=s,n),{})}:qo(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>za(n))}:nn(e)?za(e):ke(e)&&!ae(e)&&!bf(e)?String(e):e,za=(t,e="")=>{var n;return nn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Lt;class Q_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Lt,!e&&Lt&&(this.index=(Lt.scopes||(Lt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Lt;try{return Lt=this,e()}finally{Lt=n}}}on(){Lt=this}off(){Lt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Y_(t,e=Lt){e&&e.active&&e.effects.push(t)}function J_(){return Lt}let pr;class il{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Y_(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,er();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(X_(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),tr()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=qn,n=pr;try{return qn=!0,pr=this,this._runnings++,lh(this),this.fn()}finally{uh(this),this._runnings--,pr=n,qn=e}}stop(){this.active&&(lh(this),uh(this),this.onStop&&this.onStop(),this.active=!1)}}function X_(t){return t.value}function lh(t){t._trackId++,t._depsLength=0}function uh(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Df(t.deps[e],t);t.deps.length=t._depsLength}}function Df(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let qn=!0,pc=0;const xf=[];function er(){xf.push(qn),qn=!1}function tr(){const t=xf.pop();qn=t===void 0?!0:t}function ol(){pc++}function al(){for(pc--;!pc&&mc.length;)mc.shift()()}function Mf(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&Df(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const mc=[];function Lf(t,e,n){ol();for(const r of t.keys()){let s;r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&mc.push(r.scheduler)))}al()}const Ff=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},gc=new WeakMap,mr=Symbol(""),_c=Symbol("");function yt(t,e,n){if(qn&&pr){let r=gc.get(t);r||gc.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Ff(()=>r.delete(n))),Mf(pr,s)}}function yn(t,e,n,r,s,i){const o=gc.get(t);if(!o)return;let c=[];if(e==="clear")c=[...o.values()];else if(n==="length"&&ae(t)){const l=Number(r);o.forEach((h,f)=>{(f==="length"||!nn(f)&&f>=l)&&c.push(h)})}else switch(n!==void 0&&c.push(o.get(n)),e){case"add":ae(t)?nl(n)&&c.push(o.get("length")):(c.push(o.get(mr)),qr(t)&&c.push(o.get(_c)));break;case"delete":ae(t)||(c.push(o.get(mr)),qr(t)&&c.push(o.get(_c)));break;case"set":qr(t)&&c.push(o.get(mr));break}ol();for(const l of c)l&&Lf(l,4);al()}const Z_=Zc("__proto__,__v_isRef,__isVue"),Uf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(nn)),hh=ey();function ey(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Re(this);for(let i=0,o=this.length;i<o;i++)yt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(Re)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){er(),ol();const r=Re(this)[e].apply(this,n);return al(),tr(),r}}),t}function ty(t){nn(t)||(t=String(t));const e=Re(this);return yt(e,"has",t),e.hasOwnProperty(t)}class Bf{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?py:Hf:i?qf:$f).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ae(e);if(!s){if(o&&we(hh,n))return Reflect.get(hh,n,r);if(n==="hasOwnProperty")return ty}const c=Reflect.get(e,n,r);return(nn(n)?Uf.has(n):Z_(n))||(s||yt(e,"get",n),i)?c:vt(c)?o&&nl(n)?c:c.value:ke(c)?s?zf(c):Wo(c):c}}class jf extends Bf{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=yr(i);if(!Jr(r)&&!yr(r)&&(i=Re(i),r=Re(r)),!ae(e)&&vt(i)&&!vt(r))return l?!1:(i.value=r,!0)}const o=ae(e)&&nl(n)?Number(n)<e.length:we(e,n),c=Reflect.set(e,n,r,s);return e===Re(s)&&(o?Qn(r,i)&&yn(e,"set",n,r):yn(e,"add",n,r)),c}deleteProperty(e,n){const r=we(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&yn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!nn(n)||!Uf.has(n))&&yt(e,"has",n),r}ownKeys(e){return yt(e,"iterate",ae(e)?"length":mr),Reflect.ownKeys(e)}}class ny extends Bf{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const ry=new jf,sy=new ny,iy=new jf(!0);const cl=t=>t,zo=t=>Reflect.getPrototypeOf(t);function $i(t,e,n=!1,r=!1){t=t.__v_raw;const s=Re(t),i=Re(e);n||(Qn(e,i)&&yt(s,"get",e),yt(s,"get",i));const{has:o}=zo(s),c=r?cl:n?hl:Js;if(o.call(s,e))return c(t.get(e));if(o.call(s,i))return c(t.get(i));t!==s&&t.get(e)}function qi(t,e=!1){const n=this.__v_raw,r=Re(n),s=Re(t);return e||(Qn(t,s)&&yt(r,"has",t),yt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Hi(t,e=!1){return t=t.__v_raw,!e&&yt(Re(t),"iterate",mr),Reflect.get(t,"size",t)}function dh(t,e=!1){!e&&!Jr(t)&&!yr(t)&&(t=Re(t));const n=Re(this);return zo(n).has.call(n,t)||(n.add(t),yn(n,"add",t,t)),this}function fh(t,e,n=!1){!n&&!Jr(e)&&!yr(e)&&(e=Re(e));const r=Re(this),{has:s,get:i}=zo(r);let o=s.call(r,t);o||(t=Re(t),o=s.call(r,t));const c=i.call(r,t);return r.set(t,e),o?Qn(e,c)&&yn(r,"set",t,e):yn(r,"add",t,e),this}function ph(t){const e=Re(this),{has:n,get:r}=zo(e);let s=n.call(e,t);s||(t=Re(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&yn(e,"delete",t,void 0),i}function mh(){const t=Re(this),e=t.size!==0,n=t.clear();return e&&yn(t,"clear",void 0,void 0),n}function Ki(t,e){return function(r,s){const i=this,o=i.__v_raw,c=Re(o),l=e?cl:t?hl:Js;return!t&&yt(c,"iterate",mr),o.forEach((h,f)=>r.call(s,l(h),l(f),i))}}function zi(t,e,n){return function(...r){const s=this.__v_raw,i=Re(s),o=qr(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,h=s[t](...r),f=n?cl:e?hl:Js;return!e&&yt(i,"iterate",l?_c:mr),{next(){const{value:p,done:g}=h.next();return g?{value:p,done:g}:{value:c?[f(p[0]),f(p[1])]:f(p),done:g}},[Symbol.iterator](){return this}}}}function On(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function oy(){const t={get(i){return $i(this,i)},get size(){return Hi(this)},has:qi,add:dh,set:fh,delete:ph,clear:mh,forEach:Ki(!1,!1)},e={get(i){return $i(this,i,!1,!0)},get size(){return Hi(this)},has:qi,add(i){return dh.call(this,i,!0)},set(i,o){return fh.call(this,i,o,!0)},delete:ph,clear:mh,forEach:Ki(!1,!0)},n={get(i){return $i(this,i,!0)},get size(){return Hi(this,!0)},has(i){return qi.call(this,i,!0)},add:On("add"),set:On("set"),delete:On("delete"),clear:On("clear"),forEach:Ki(!0,!1)},r={get(i){return $i(this,i,!0,!0)},get size(){return Hi(this,!0)},has(i){return qi.call(this,i,!0)},add:On("add"),set:On("set"),delete:On("delete"),clear:On("clear"),forEach:Ki(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=zi(i,!1,!1),n[i]=zi(i,!0,!1),e[i]=zi(i,!1,!0),r[i]=zi(i,!0,!0)}),[t,n,e,r]}const[ay,cy,ly,uy]=oy();function ll(t,e){const n=e?t?uy:ly:t?cy:ay;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(we(n,s)&&s in r?n:r,s,i)}const hy={get:ll(!1,!1)},dy={get:ll(!1,!0)},fy={get:ll(!0,!1)};const $f=new WeakMap,qf=new WeakMap,Hf=new WeakMap,py=new WeakMap;function my(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function gy(t){return t.__v_skip||!Object.isExtensible(t)?0:my(U_(t))}function Wo(t){return yr(t)?t:ul(t,!1,ry,hy,$f)}function Kf(t){return ul(t,!1,iy,dy,qf)}function zf(t){return ul(t,!0,sy,fy,Hf)}function ul(t,e,n,r,s){if(!ke(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=gy(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function js(t){return yr(t)?js(t.__v_raw):!!(t&&t.__v_isReactive)}function yr(t){return!!(t&&t.__v_isReadonly)}function Jr(t){return!!(t&&t.__v_isShallow)}function Wf(t){return t?!!t.__v_raw:!1}function Re(t){const e=t&&t.__v_raw;return e?Re(e):t}function _y(t){return Object.isExtensible(t)&&Sf(t,"__v_skip",!0),t}const Js=t=>ke(t)?Wo(t):t,hl=t=>ke(t)?zf(t):t;class Gf{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new il(()=>e(this._value),()=>to(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=Re(this);return(!e._cacheable||e.effect.dirty)&&Qn(e._value,e._value=e.effect.run())&&to(e,4),Qf(e),e.effect._dirtyLevel>=2&&to(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function yy(t,e,n=!1){let r,s;const i=de(t);return i?(r=t,s=Ot):(r=t.get,s=t.set),new Gf(r,s,i||!s,n)}function Qf(t){var e;qn&&pr&&(t=Re(t),Mf(pr,(e=t.dep)!=null?e:t.dep=Ff(()=>t.dep=void 0,t instanceof Gf?t:void 0)))}function to(t,e=4,n,r){t=Re(t);const s=t.dep;s&&Lf(s,e)}function vt(t){return!!(t&&t.__v_isRef===!0)}function Dt(t){return Yf(t,!1)}function vy(t){return Yf(t,!0)}function Yf(t,e){return vt(t)?t:new Ey(t,e)}class Ey{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Re(e),this._value=n?e:Js(e)}get value(){return Qf(this),this._value}set value(e){const n=this.__v_isShallow||Jr(e)||yr(e);e=n?e:Re(e),Qn(e,this._rawValue)&&(this._rawValue,this._rawValue=e,this._value=n?e:Js(e),to(this,4))}}function Yt(t){return vt(t)?t.value:t}const wy={get:(t,e,n)=>Yt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return vt(s)&&!vt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Jf(t){return js(t)?t:new Proxy(t,wy)}/**
* @vue/runtime-core v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Hn(t,e,n,r){try{return r?t(...r):t()}catch(s){Go(s,e,n)}}function Ut(t,e,n,r){if(de(t)){const s=Hn(t,e,n,r);return s&&Af(s)&&s.catch(i=>{Go(i,e,n)}),s}if(ae(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Ut(t[i],e,n,r));return s}}function Go(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const h=i.ec;if(h){for(let f=0;f<h.length;f++)if(h[f](t,o,c)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){er(),Hn(l,null,10,[t,o,c]),tr();return}}Ty(t,n,s,r)}function Ty(t,e,n,r=!0){console.error(t)}let Xs=!1,yc=!1;const ot=[];let Qt=0;const Hr=[];let Dn=null,hr=0;const Xf=Promise.resolve();let dl=null;function Zf(t){const e=dl||Xf;return t?e.then(this?t.bind(this):t):e}function Iy(t){let e=Qt+1,n=ot.length;for(;e<n;){const r=e+n>>>1,s=ot[r],i=Zs(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function fl(t){(!ot.length||!ot.includes(t,Xs&&t.allowRecurse?Qt+1:Qt))&&(t.id==null?ot.push(t):ot.splice(Iy(t.id),0,t),ep())}function ep(){!Xs&&!yc&&(yc=!0,dl=Xf.then(np))}function Ay(t){const e=ot.indexOf(t);e>Qt&&ot.splice(e,1)}function Ry(t){ae(t)?Hr.push(...t):(!Dn||!Dn.includes(t,t.allowRecurse?hr+1:hr))&&Hr.push(t),ep()}function gh(t,e,n=Xs?Qt+1:0){for(;n<ot.length;n++){const r=ot[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;ot.splice(n,1),n--,r()}}}function tp(t){if(Hr.length){const e=[...new Set(Hr)].sort((n,r)=>Zs(n)-Zs(r));if(Hr.length=0,Dn){Dn.push(...e);return}for(Dn=e,hr=0;hr<Dn.length;hr++){const n=Dn[hr];n.active!==!1&&n()}Dn=null,hr=0}}const Zs=t=>t.id==null?1/0:t.id,by=(t,e)=>{const n=Zs(t)-Zs(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function np(t){yc=!1,Xs=!0,ot.sort(by);try{for(Qt=0;Qt<ot.length;Qt++){const e=ot[Qt];e&&e.active!==!1&&Hn(e,e.i,e.i?15:14)}}finally{Qt=0,ot.length=0,tp(),Xs=!1,dl=null,(ot.length||Hr.length)&&np()}}let Nt=null,Qo=null;function Eo(t){const e=Nt;return Nt=t,Qo=t&&t.type.__scopeId||null,e}function rp(t){Qo=t}function sp(){Qo=null}function no(t,e=Nt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Ah(-1);const i=Eo(e);let o;try{o=t(...s)}finally{Eo(i),r._d&&Ah(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Wt(t,e){if(Nt===null)return t;const n=sa(Nt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=Ve]=e[s];i&&(de(i)&&(i={mounted:i,updated:i}),i.deep&&Ln(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function cr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(er(),Ut(l,n,8,[t.el,c,t,e]),tr())}}function ip(t,e){t.shapeFlag&6&&t.component?ip(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function op(t,e){return de(t)?at({name:t.name},e,{setup:t}):t}const ro=t=>!!t.type.__asyncLoader,ap=t=>t.type.__isKeepAlive;function Py(t,e){cp(t,"a",e)}function Sy(t,e){cp(t,"da",e)}function cp(t,e,n=ft){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Yo(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ap(s.parent.vnode)&&Cy(r,e,n,s),s=s.parent}}function Cy(t,e,n,r){const s=Yo(e,t,r,!0);lp(()=>{tl(r[e],s)},n)}function Yo(t,e,n=ft,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{er();const c=fi(n),l=Ut(e,n,t,o);return c(),tr(),l});return r?s.unshift(i):s.push(i),i}}const Rn=t=>(e,n=ft)=>{(!ra||t==="sp")&&Yo(t,(...r)=>e(...r),n)},ky=Rn("bm"),Jo=Rn("m"),Oy=Rn("bu"),Ny=Rn("u"),Vy=Rn("bum"),lp=Rn("um"),Dy=Rn("sp"),xy=Rn("rtg"),My=Rn("rtc");function Ly(t,e=ft){Yo("ec",t,e)}const Fy=Symbol.for("v-ndc");function Xo(t,e,n,r){let s;const i=n;if(ae(t)||We(t)){s=new Array(t.length);for(let o=0,c=t.length;o<c;o++)s[o]=e(t[o],o,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i)}else if(ke(t))if(t[Symbol.iterator])s=Array.from(t,(o,c)=>e(o,c,void 0,i));else{const o=Object.keys(t);s=new Array(o.length);for(let c=0,l=o.length;c<l;c++){const h=o[c];s[c]=e(t[h],h,c,i)}}else s=[];return s}const vc=t=>t?Cp(t)?sa(t):vc(t.parent):null,$s=at(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>vc(t.parent),$root:t=>vc(t.root),$emit:t=>t.emit,$options:t=>pl(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,fl(t.update)}),$nextTick:t=>t.n||(t.n=Zf.bind(t.proxy)),$watch:t=>av.bind(t)}),Wa=(t,e)=>t!==Ve&&!t.__isScriptSetup&&we(t,e),Uy={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let h;if(e[0]!=="$"){const E=o[e];if(E!==void 0)switch(E){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Wa(r,e))return o[e]=1,r[e];if(s!==Ve&&we(s,e))return o[e]=2,s[e];if((h=t.propsOptions[0])&&we(h,e))return o[e]=3,i[e];if(n!==Ve&&we(n,e))return o[e]=4,n[e];Ec&&(o[e]=0)}}const f=$s[e];let p,g;if(f)return e==="$attrs"&&yt(t.attrs,"get",""),f(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==Ve&&we(n,e))return o[e]=4,n[e];if(g=l.config.globalProperties,we(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Wa(s,e)?(s[e]=n,!0):r!==Ve&&we(r,e)?(r[e]=n,!0):we(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==Ve&&we(t,o)||Wa(e,o)||(c=i[0])&&we(c,o)||we(r,o)||we($s,o)||we(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:we(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function _h(t){return ae(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ec=!0;function By(t){const e=pl(t),n=t.proxy,r=t.ctx;Ec=!1,e.beforeCreate&&yh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:h,created:f,beforeMount:p,mounted:g,beforeUpdate:E,updated:C,activated:N,deactivated:O,beforeDestroy:$,beforeUnmount:j,destroyed:U,unmounted:Z,render:fe,renderTracked:J,renderTriggered:I,errorCaptured:y,serverPrefetch:T,expose:A,inheritAttrs:R,components:b,directives:w,filters:lt}=e;if(h&&jy(h,r,null),o)for(const _e in o){const pe=o[_e];de(pe)&&(r[_e]=pe.bind(n))}if(s){const _e=s.call(n,n);ke(_e)&&(t.data=Wo(_e))}if(Ec=!0,i)for(const _e in i){const pe=i[_e],Et=de(pe)?pe.bind(n,n):de(pe.get)?pe.get.bind(n,n):Ot,xt=!de(pe)&&de(pe.set)?pe.set.bind(n):Ot,Pt=kt({get:Et,set:xt});Object.defineProperty(r,_e,{enumerable:!0,configurable:!0,get:()=>Pt.value,set:xe=>Pt.value=xe})}if(c)for(const _e in c)up(c[_e],r,n,_e);if(l){const _e=de(l)?l.call(n):l;Reflect.ownKeys(_e).forEach(pe=>{so(pe,_e[pe])})}f&&yh(f,t,"c");function je(_e,pe){ae(pe)?pe.forEach(Et=>_e(Et.bind(n))):pe&&_e(pe.bind(n))}if(je(ky,p),je(Jo,g),je(Oy,E),je(Ny,C),je(Py,N),je(Sy,O),je(Ly,y),je(My,J),je(xy,I),je(Vy,j),je(lp,Z),je(Dy,T),ae(A))if(A.length){const _e=t.exposed||(t.exposed={});A.forEach(pe=>{Object.defineProperty(_e,pe,{get:()=>n[pe],set:Et=>n[pe]=Et})})}else t.exposed||(t.exposed={});fe&&t.render===Ot&&(t.render=fe),R!=null&&(t.inheritAttrs=R),b&&(t.components=b),w&&(t.directives=w)}function jy(t,e,n=Ot){ae(t)&&(t=wc(t));for(const r in t){const s=t[r];let i;ke(s)?"default"in s?i=Bt(s.from||r,s.default,!0):i=Bt(s.from||r):i=Bt(s),vt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function yh(t,e,n){Ut(ae(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function up(t,e,n,r){const s=r.includes(".")?Ap(n,r):()=>n[r];if(We(t)){const i=e[t];de(i)&&io(s,i)}else if(de(t))io(s,t.bind(n));else if(ke(t))if(ae(t))t.forEach(i=>up(i,e,n,r));else{const i=de(t.handler)?t.handler.bind(n):e[t.handler];de(i)&&io(s,i,t)}}function pl(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(h=>wo(l,h,o,!0)),wo(l,e,o)),ke(e)&&i.set(e,l),l}function wo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&wo(t,i,n,!0),s&&s.forEach(o=>wo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=$y[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const $y={data:vh,props:Eh,emits:Eh,methods:Vs,computed:Vs,beforeCreate:dt,created:dt,beforeMount:dt,mounted:dt,beforeUpdate:dt,updated:dt,beforeDestroy:dt,beforeUnmount:dt,destroyed:dt,unmounted:dt,activated:dt,deactivated:dt,errorCaptured:dt,serverPrefetch:dt,components:Vs,directives:Vs,watch:Hy,provide:vh,inject:qy};function vh(t,e){return e?t?function(){return at(de(t)?t.call(this,this):t,de(e)?e.call(this,this):e)}:e:t}function qy(t,e){return Vs(wc(t),wc(e))}function wc(t){if(ae(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function dt(t,e){return t?[...new Set([].concat(t,e))]:e}function Vs(t,e){return t?at(Object.create(null),t,e):e}function Eh(t,e){return t?ae(t)&&ae(e)?[...new Set([...t,...e])]:at(Object.create(null),_h(t),_h(e??{})):e}function Hy(t,e){if(!t)return e;if(!e)return t;const n=at(Object.create(null),t);for(const r in e)n[r]=dt(t[r],e[r]);return n}function hp(){return{app:null,config:{isNativeTag:L_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ky=0;function zy(t,e){return function(r,s=null){de(r)||(r=at({},r)),s!=null&&!ke(s)&&(s=null);const i=hp(),o=new WeakSet;let c=!1;const l=i.app={_uid:Ky++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Sv,get config(){return i.config},set config(h){},use(h,...f){return o.has(h)||(h&&de(h.install)?(o.add(h),h.install(l,...f)):de(h)&&(o.add(h),h(l,...f))),l},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),l},component(h,f){return f?(i.components[h]=f,l):i.components[h]},directive(h,f){return f?(i.directives[h]=f,l):i.directives[h]},mount(h,f,p){if(!c){const g=Ke(r,s);return g.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),f&&e?e(g,h):t(g,h,p),c=!0,l._container=h,h.__vue_app__=l,sa(g.component)}},unmount(){c&&(t(null,l._container),delete l._container.__vue_app__)},provide(h,f){return i.provides[h]=f,l},runWithContext(h){const f=Kr;Kr=l;try{return h()}finally{Kr=f}}};return l}}let Kr=null;function so(t,e){if(ft){let n=ft.provides;const r=ft.parent&&ft.parent.provides;r===n&&(n=ft.provides=Object.create(r)),n[t]=e}}function Bt(t,e,n=!1){const r=ft||Nt;if(r||Kr){const s=Kr?Kr._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&de(e)?e.call(r&&r.proxy):e}}const dp={},fp=()=>Object.create(dp),pp=t=>Object.getPrototypeOf(t)===dp;function Wy(t,e,n,r=!1){const s={},i=fp();t.propsDefaults=Object.create(null),mp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Kf(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Gy(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Re(s),[l]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let g=f[p];if(Zo(t.emitsOptions,g))continue;const E=e[g];if(l)if(we(i,g))E!==i[g]&&(i[g]=E,h=!0);else{const C=_r(g);s[C]=Tc(l,c,C,E,t,!1)}else E!==i[g]&&(i[g]=E,h=!0)}}}else{mp(t,e,s,i)&&(h=!0);let f;for(const p in c)(!e||!we(e,p)&&((f=Rr(p))===p||!we(e,f)))&&(l?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=Tc(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!we(e,p))&&(delete i[p],h=!0)}h&&yn(t.attrs,"set","")}function mp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(Bs(l))continue;const h=e[l];let f;s&&we(s,f=_r(l))?!i||!i.includes(f)?n[f]=h:(c||(c={}))[f]=h:Zo(t.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,o=!0)}if(i){const l=Re(n),h=c||Ve;for(let f=0;f<i.length;f++){const p=i[f];n[p]=Tc(s,l,p,h[p],t,!we(h,p))}}return o}function Tc(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=we(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&de(l)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const f=fi(s);r=h[n]=l.call(null,e),f()}}else r=l}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Rr(n))&&(r=!0))}return r}const Qy=new WeakMap;function gp(t,e,n=!1){const r=n?Qy:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!de(t)){const f=p=>{l=!0;const[g,E]=gp(p,e,!0);at(o,g),E&&c.push(...E)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return ke(t)&&r.set(t,$r),$r;if(ae(i))for(let f=0;f<i.length;f++){const p=_r(i[f]);wh(p)&&(o[p]=Ve)}else if(i)for(const f in i){const p=_r(f);if(wh(p)){const g=i[f],E=o[p]=ae(g)||de(g)?{type:g}:at({},g),C=E.type;let N=!1,O=!0;if(ae(C))for(let $=0;$<C.length;++$){const j=C[$],U=de(j)&&j.name;if(U==="Boolean"){N=!0;break}else U==="String"&&(O=!1)}else N=de(C)&&C.name==="Boolean";E[0]=N,E[1]=O,(N||we(E,"default"))&&c.push(p)}}const h=[o,c];return ke(t)&&r.set(t,h),h}function wh(t){return t[0]!=="$"&&!Bs(t)}const _p=t=>t[0]==="_"||t==="$stable",ml=t=>ae(t)?t.map(Gt):[Gt(t)],Yy=(t,e,n)=>{if(e._n)return e;const r=no((...s)=>ml(e(...s)),n);return r._c=!1,r},yp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(_p(s))continue;const i=t[s];if(de(i))e[s]=Yy(s,i,r);else if(i!=null){const o=ml(i);e[s]=()=>o}}},vp=(t,e)=>{const n=ml(e);t.slots.default=()=>n},Ep=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},Jy=(t,e,n)=>{const r=t.slots=fp();if(t.vnode.shapeFlag&32){const s=e._;s?(Ep(r,e,n),n&&Sf(r,"_",s,!0)):yp(e,r)}else e&&vp(t,e)},Xy=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ve;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:Ep(s,e,n):(i=!e.$stable,yp(e,s)),o=e}else e&&(vp(t,e),o={default:1});if(i)for(const c in s)!_p(c)&&o[c]==null&&delete s[c]};function Ic(t,e,n,r,s=!1){if(ae(t)){t.forEach((g,E)=>Ic(g,e&&(ae(e)?e[E]:e),n,r,s));return}if(ro(r)&&!s)return;const i=r.shapeFlag&4?sa(r.component):r.el,o=s?null:i,{i:c,r:l}=t,h=e&&e.r,f=c.refs===Ve?c.refs={}:c.refs,p=c.setupState;if(h!=null&&h!==l&&(We(h)?(f[h]=null,we(p,h)&&(p[h]=null)):vt(h)&&(h.value=null)),de(l))Hn(l,c,12,[o,f]);else{const g=We(l),E=vt(l);if(g||E){const C=()=>{if(t.f){const N=g?we(p,l)?p[l]:f[l]:l.value;s?ae(N)&&tl(N,i):ae(N)?N.includes(i)||N.push(i):g?(f[l]=[i],we(p,l)&&(p[l]=f[l])):(l.value=[i],t.k&&(f[t.k]=l.value))}else g?(f[l]=o,we(p,l)&&(p[l]=o)):E&&(l.value=o,t.k&&(f[t.k]=o))};o?(C.id=-1,mt(C,n)):C()}}}const Zy=Symbol("_vte"),ev=t=>t.__isTeleport,mt=mv;function tv(t){return nv(t)}function nv(t,e){const n=Cf();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:h,setElementText:f,parentNode:p,nextSibling:g,setScopeId:E=Ot,insertStaticContent:C}=t,N=(_,v,S,M=null,V=null,B=null,W=void 0,q=null,K=!!v.dynamicChildren)=>{if(_===v)return;_&&!ks(_,v)&&(M=D(_),xe(_,V,B,!0),_=null),v.patchFlag===-2&&(K=!1,v.dynamicChildren=null);const{type:F,ref:Q,shapeFlag:se}=v;switch(F){case ea:O(_,v,S,M);break;case vr:$(_,v,S,M);break;case oo:_==null&&j(v,S,M,W);break;case It:b(_,v,S,M,V,B,W,q,K);break;default:se&1?fe(_,v,S,M,V,B,W,q,K):se&6?w(_,v,S,M,V,B,W,q,K):(se&64||se&128)&&F.process(_,v,S,M,V,B,W,q,K,ee)}Q!=null&&V&&Ic(Q,_&&_.ref,B,v||_,!v)},O=(_,v,S,M)=>{if(_==null)r(v.el=c(v.children),S,M);else{const V=v.el=_.el;v.children!==_.children&&h(V,v.children)}},$=(_,v,S,M)=>{_==null?r(v.el=l(v.children||""),S,M):v.el=_.el},j=(_,v,S,M)=>{[_.el,_.anchor]=C(_.children,v,S,M,_.el,_.anchor)},U=({el:_,anchor:v},S,M)=>{let V;for(;_&&_!==v;)V=g(_),r(_,S,M),_=V;r(v,S,M)},Z=({el:_,anchor:v})=>{let S;for(;_&&_!==v;)S=g(_),s(_),_=S;s(v)},fe=(_,v,S,M,V,B,W,q,K)=>{v.type==="svg"?W="svg":v.type==="math"&&(W="mathml"),_==null?J(v,S,M,V,B,W,q,K):T(_,v,V,B,W,q,K)},J=(_,v,S,M,V,B,W,q)=>{let K,F;const{props:Q,shapeFlag:se,transition:re,dirs:ne}=_;if(K=_.el=o(_.type,B,Q&&Q.is,Q),se&8?f(K,_.children):se&16&&y(_.children,K,null,M,V,Ga(_,B),W,q),ne&&cr(_,null,M,"created"),I(K,_,_.scopeId,W,M),Q){for(const Ae in Q)Ae!=="value"&&!Bs(Ae)&&i(K,Ae,null,Q[Ae],B,M);"value"in Q&&i(K,"value",null,Q.value,B),(F=Q.onVnodeBeforeMount)&&zt(F,M,_)}ne&&cr(_,null,M,"beforeMount");const oe=rv(V,re);oe&&re.beforeEnter(K),r(K,v,S),((F=Q&&Q.onVnodeMounted)||oe||ne)&&mt(()=>{F&&zt(F,M,_),oe&&re.enter(K),ne&&cr(_,null,M,"mounted")},V)},I=(_,v,S,M,V)=>{if(S&&E(_,S),M)for(let B=0;B<M.length;B++)E(_,M[B]);if(V){let B=V.subTree;if(v===B){const W=V.vnode;I(_,W,W.scopeId,W.slotScopeIds,V.parent)}}},y=(_,v,S,M,V,B,W,q,K=0)=>{for(let F=K;F<_.length;F++){const Q=_[F]=q?xn(_[F]):Gt(_[F]);N(null,Q,v,S,M,V,B,W,q)}},T=(_,v,S,M,V,B,W)=>{const q=v.el=_.el;let{patchFlag:K,dynamicChildren:F,dirs:Q}=v;K|=_.patchFlag&16;const se=_.props||Ve,re=v.props||Ve;let ne;if(S&&lr(S,!1),(ne=re.onVnodeBeforeUpdate)&&zt(ne,S,v,_),Q&&cr(v,_,S,"beforeUpdate"),S&&lr(S,!0),(se.innerHTML&&re.innerHTML==null||se.textContent&&re.textContent==null)&&f(q,""),F?A(_.dynamicChildren,F,q,S,M,Ga(v,V),B):W||pe(_,v,q,null,S,M,Ga(v,V),B,!1),K>0){if(K&16)R(q,se,re,S,V);else if(K&2&&se.class!==re.class&&i(q,"class",null,re.class,V),K&4&&i(q,"style",se.style,re.style,V),K&8){const oe=v.dynamicProps;for(let Ae=0;Ae<oe.length;Ae++){const Ee=oe[Ae],Ue=se[Ee],wt=re[Ee];(wt!==Ue||Ee==="value")&&i(q,Ee,Ue,wt,V,S)}}K&1&&_.children!==v.children&&f(q,v.children)}else!W&&F==null&&R(q,se,re,S,V);((ne=re.onVnodeUpdated)||Q)&&mt(()=>{ne&&zt(ne,S,v,_),Q&&cr(v,_,S,"updated")},M)},A=(_,v,S,M,V,B,W)=>{for(let q=0;q<v.length;q++){const K=_[q],F=v[q],Q=K.el&&(K.type===It||!ks(K,F)||K.shapeFlag&70)?p(K.el):S;N(K,F,Q,null,M,V,B,W,!0)}},R=(_,v,S,M,V)=>{if(v!==S){if(v!==Ve)for(const B in v)!Bs(B)&&!(B in S)&&i(_,B,v[B],null,V,M);for(const B in S){if(Bs(B))continue;const W=S[B],q=v[B];W!==q&&B!=="value"&&i(_,B,q,W,V,M)}"value"in S&&i(_,"value",v.value,S.value,V)}},b=(_,v,S,M,V,B,W,q,K)=>{const F=v.el=_?_.el:c(""),Q=v.anchor=_?_.anchor:c("");let{patchFlag:se,dynamicChildren:re,slotScopeIds:ne}=v;ne&&(q=q?q.concat(ne):ne),_==null?(r(F,S,M),r(Q,S,M),y(v.children||[],S,Q,V,B,W,q,K)):se>0&&se&64&&re&&_.dynamicChildren?(A(_.dynamicChildren,re,S,V,B,W,q),(v.key!=null||V&&v===V.subTree)&&wp(_,v,!0)):pe(_,v,S,Q,V,B,W,q,K)},w=(_,v,S,M,V,B,W,q,K)=>{v.slotScopeIds=q,_==null?v.shapeFlag&512?V.ctx.activate(v,S,M,W,K):lt(v,S,M,V,B,W,K):bt(_,v,K)},lt=(_,v,S,M,V,B,W)=>{const q=_.component=Tv(_,M,V);if(ap(_)&&(q.ctx.renderer=ee),Iv(q,!1,W),q.asyncDep){if(V&&V.registerDep(q,je,W),!_.el){const K=q.subTree=Ke(vr);$(null,K,v,S)}}else je(q,_,v,S,V,B,W)},bt=(_,v,S)=>{const M=v.component=_.component;if(dv(_,v,S))if(M.asyncDep&&!M.asyncResolved){_e(M,v,S);return}else M.next=v,Ay(M.update),M.effect.dirty=!0,M.update();else v.el=_.el,M.vnode=v},je=(_,v,S,M,V,B,W)=>{const q=()=>{if(_.isMounted){let{next:Q,bu:se,u:re,parent:ne,vnode:oe}=_;{const St=Tp(_);if(St){Q&&(Q.el=oe.el,_e(_,Q,W)),St.asyncDep.then(()=>{_.isUnmounted||q()});return}}let Ae=Q,Ee;lr(_,!1),Q?(Q.el=oe.el,_e(_,Q,W)):Q=oe,se&&eo(se),(Ee=Q.props&&Q.props.onVnodeBeforeUpdate)&&zt(Ee,ne,Q,oe),lr(_,!0);const Ue=Qa(_),wt=_.subTree;_.subTree=Ue,N(wt,Ue,p(wt.el),D(wt),_,V,B),Q.el=Ue.el,Ae===null&&fv(_,Ue.el),re&&mt(re,V),(Ee=Q.props&&Q.props.onVnodeUpdated)&&mt(()=>zt(Ee,ne,Q,oe),V)}else{let Q;const{el:se,props:re}=v,{bm:ne,m:oe,parent:Ae}=_,Ee=ro(v);if(lr(_,!1),ne&&eo(ne),!Ee&&(Q=re&&re.onVnodeBeforeMount)&&zt(Q,Ae,v),lr(_,!0),se&&Pe){const Ue=()=>{_.subTree=Qa(_),Pe(se,_.subTree,_,V,null)};Ee?v.type.__asyncLoader().then(()=>!_.isUnmounted&&Ue()):Ue()}else{const Ue=_.subTree=Qa(_);N(null,Ue,S,M,_,V,B),v.el=Ue.el}if(oe&&mt(oe,V),!Ee&&(Q=re&&re.onVnodeMounted)){const Ue=v;mt(()=>zt(Q,Ae,Ue),V)}(v.shapeFlag&256||Ae&&ro(Ae.vnode)&&Ae.vnode.shapeFlag&256)&&_.a&&mt(_.a,V),_.isMounted=!0,v=S=M=null}},K=_.effect=new il(q,Ot,()=>fl(F),_.scope),F=_.update=()=>{K.dirty&&K.run()};F.i=_,F.id=_.uid,lr(_,!0),F()},_e=(_,v,S)=>{v.component=_;const M=_.vnode.props;_.vnode=v,_.next=null,Gy(_,v.props,M,S),Xy(_,v.children,S),er(),gh(_),tr()},pe=(_,v,S,M,V,B,W,q,K=!1)=>{const F=_&&_.children,Q=_?_.shapeFlag:0,se=v.children,{patchFlag:re,shapeFlag:ne}=v;if(re>0){if(re&128){xt(F,se,S,M,V,B,W,q,K);return}else if(re&256){Et(F,se,S,M,V,B,W,q,K);return}}ne&8?(Q&16&&pt(F,V,B),se!==F&&f(S,se)):Q&16?ne&16?xt(F,se,S,M,V,B,W,q,K):pt(F,V,B,!0):(Q&8&&f(S,""),ne&16&&y(se,S,M,V,B,W,q,K))},Et=(_,v,S,M,V,B,W,q,K)=>{_=_||$r,v=v||$r;const F=_.length,Q=v.length,se=Math.min(F,Q);let re;for(re=0;re<se;re++){const ne=v[re]=K?xn(v[re]):Gt(v[re]);N(_[re],ne,S,null,V,B,W,q,K)}F>Q?pt(_,V,B,!0,!1,se):y(v,S,M,V,B,W,q,K,se)},xt=(_,v,S,M,V,B,W,q,K)=>{let F=0;const Q=v.length;let se=_.length-1,re=Q-1;for(;F<=se&&F<=re;){const ne=_[F],oe=v[F]=K?xn(v[F]):Gt(v[F]);if(ks(ne,oe))N(ne,oe,S,null,V,B,W,q,K);else break;F++}for(;F<=se&&F<=re;){const ne=_[se],oe=v[re]=K?xn(v[re]):Gt(v[re]);if(ks(ne,oe))N(ne,oe,S,null,V,B,W,q,K);else break;se--,re--}if(F>se){if(F<=re){const ne=re+1,oe=ne<Q?v[ne].el:M;for(;F<=re;)N(null,v[F]=K?xn(v[F]):Gt(v[F]),S,oe,V,B,W,q,K),F++}}else if(F>re)for(;F<=se;)xe(_[F],V,B,!0),F++;else{const ne=F,oe=F,Ae=new Map;for(F=oe;F<=re;F++){const ut=v[F]=K?xn(v[F]):Gt(v[F]);ut.key!=null&&Ae.set(ut.key,F)}let Ee,Ue=0;const wt=re-oe+1;let St=!1,gs=0;const Pn=new Array(wt);for(F=0;F<wt;F++)Pn[F]=0;for(F=ne;F<=se;F++){const ut=_[F];if(Ue>=wt){xe(ut,V,B,!0);continue}let Ct;if(ut.key!=null)Ct=Ae.get(ut.key);else for(Ee=oe;Ee<=re;Ee++)if(Pn[Ee-oe]===0&&ks(ut,v[Ee])){Ct=Ee;break}Ct===void 0?xe(ut,V,B,!0):(Pn[Ct-oe]=F+1,Ct>=gs?gs=Ct:St=!0,N(ut,v[Ct],S,null,V,B,W,q,K),Ue++)}const Or=St?sv(Pn):$r;for(Ee=Or.length-1,F=wt-1;F>=0;F--){const ut=oe+F,Ct=v[ut],Nr=ut+1<Q?v[ut+1].el:M;Pn[F]===0?N(null,Ct,S,Nr,V,B,W,q,K):St&&(Ee<0||F!==Or[Ee]?Pt(Ct,S,Nr,2):Ee--)}}},Pt=(_,v,S,M,V=null)=>{const{el:B,type:W,transition:q,children:K,shapeFlag:F}=_;if(F&6){Pt(_.component.subTree,v,S,M);return}if(F&128){_.suspense.move(v,S,M);return}if(F&64){W.move(_,v,S,ee);return}if(W===It){r(B,v,S);for(let se=0;se<K.length;se++)Pt(K[se],v,S,M);r(_.anchor,v,S);return}if(W===oo){U(_,v,S);return}if(M!==2&&F&1&&q)if(M===0)q.beforeEnter(B),r(B,v,S),mt(()=>q.enter(B),V);else{const{leave:se,delayLeave:re,afterLeave:ne}=q,oe=()=>r(B,v,S),Ae=()=>{se(B,()=>{oe(),ne&&ne()})};re?re(B,oe,Ae):Ae()}else r(B,v,S)},xe=(_,v,S,M=!1,V=!1)=>{const{type:B,props:W,ref:q,children:K,dynamicChildren:F,shapeFlag:Q,patchFlag:se,dirs:re,cacheIndex:ne}=_;if(se===-2&&(V=!1),q!=null&&Ic(q,null,S,_,!0),ne!=null&&(v.renderCache[ne]=void 0),Q&256){v.ctx.deactivate(_);return}const oe=Q&1&&re,Ae=!ro(_);let Ee;if(Ae&&(Ee=W&&W.onVnodeBeforeUnmount)&&zt(Ee,v,_),Q&6)Kt(_.component,S,M);else{if(Q&128){_.suspense.unmount(S,M);return}oe&&cr(_,null,v,"beforeUnmount"),Q&64?_.type.remove(_,v,S,ee,M):F&&!F.hasOnce&&(B!==It||se>0&&se&64)?pt(F,v,S,!1,!0):(B===It&&se&384||!V&&Q&16)&&pt(K,v,S),M&&Me(_)}(Ae&&(Ee=W&&W.onVnodeUnmounted)||oe)&&mt(()=>{Ee&&zt(Ee,v,_),oe&&cr(_,null,v,"unmounted")},S)},Me=_=>{const{type:v,el:S,anchor:M,transition:V}=_;if(v===It){bn(S,M);return}if(v===oo){Z(_);return}const B=()=>{s(S),V&&!V.persisted&&V.afterLeave&&V.afterLeave()};if(_.shapeFlag&1&&V&&!V.persisted){const{leave:W,delayLeave:q}=V,K=()=>W(S,B);q?q(_.el,B,K):K()}else B()},bn=(_,v)=>{let S;for(;_!==v;)S=g(_),s(_),_=S;s(v)},Kt=(_,v,S)=>{const{bum:M,scope:V,update:B,subTree:W,um:q,m:K,a:F}=_;Th(K),Th(F),M&&eo(M),V.stop(),B&&(B.active=!1,xe(W,_,v,S)),q&&mt(q,v),mt(()=>{_.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},pt=(_,v,S,M=!1,V=!1,B=0)=>{for(let W=B;W<_.length;W++)xe(_[W],v,S,M,V)},D=_=>{if(_.shapeFlag&6)return D(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const v=g(_.anchor||_.el),S=v&&v[Zy];return S?g(S):v};let Y=!1;const G=(_,v,S)=>{_==null?v._vnode&&xe(v._vnode,null,null,!0):N(v._vnode||null,_,v,null,null,null,S),v._vnode=_,Y||(Y=!0,gh(),tp(),Y=!1)},ee={p:N,um:xe,m:Pt,r:Me,mt:lt,mc:y,pc:pe,pbc:A,n:D,o:t};let ye,Pe;return{render:G,hydrate:ye,createApp:zy(G,ye)}}function Ga({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function lr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function rv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function wp(t,e,n=!1){const r=t.children,s=e.children;if(ae(r)&&ae(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=xn(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&wp(o,c)),c.type===ea&&(c.el=o.el)}}function sv(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<h?i=c+1:o=c;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Tp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Tp(e)}function Th(t){if(t)for(let e=0;e<t.length;e++)t[e].active=!1}const iv=Symbol.for("v-scx"),ov=()=>Bt(iv),Wi={};function io(t,e,n){return Ip(t,e,n)}function Ip(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:c}=Ve){if(e&&i){const J=e;e=(...I)=>{J(...I),fe()}}const l=ft,h=J=>r===!0?J:Ln(J,r===!1?1:void 0);let f,p=!1,g=!1;if(vt(t)?(f=()=>t.value,p=Jr(t)):js(t)?(f=()=>h(t),p=!0):ae(t)?(g=!0,p=t.some(J=>js(J)||Jr(J)),f=()=>t.map(J=>{if(vt(J))return J.value;if(js(J))return h(J);if(de(J))return Hn(J,l,2)})):de(t)?e?f=()=>Hn(t,l,2):f=()=>(E&&E(),Ut(t,l,3,[C])):f=Ot,e&&r){const J=f;f=()=>Ln(J())}let E,C=J=>{E=U.onStop=()=>{Hn(J,l,4),E=U.onStop=void 0}},N;if(ra)if(C=Ot,e?n&&Ut(e,l,3,[f(),g?[]:void 0,C]):f(),s==="sync"){const J=ov();N=J.__watcherHandles||(J.__watcherHandles=[])}else return Ot;let O=g?new Array(t.length).fill(Wi):Wi;const $=()=>{if(!(!U.active||!U.dirty))if(e){const J=U.run();(r||p||(g?J.some((I,y)=>Qn(I,O[y])):Qn(J,O)))&&(E&&E(),Ut(e,l,3,[J,O===Wi?void 0:g&&O[0]===Wi?[]:O,C]),O=J)}else U.run()};$.allowRecurse=!!e;let j;s==="sync"?j=$:s==="post"?j=()=>mt($,l&&l.suspense):($.pre=!0,l&&($.id=l.uid),j=()=>fl($));const U=new il(f,Ot,j),Z=J_(),fe=()=>{U.stop(),Z&&tl(Z.effects,U)};return e?n?$():O=U.run():s==="post"?mt(U.run.bind(U),l&&l.suspense):U.run(),N&&N.push(fe),fe}function av(t,e,n){const r=this.proxy,s=We(t)?t.includes(".")?Ap(r,t):()=>r[t]:t.bind(r,r);let i;de(e)?i=e:(i=e.handler,n=e);const o=fi(this),c=Ip(s,i.bind(r),n);return o(),c}function Ap(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Ln(t,e=1/0,n){if(e<=0||!ke(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,vt(t))Ln(t.value,e,n);else if(ae(t))for(let r=0;r<t.length;r++)Ln(t[r],e,n);else if(qo(t)||qr(t))t.forEach(r=>{Ln(r,e,n)});else if(bf(t)){for(const r in t)Ln(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Ln(t[r],e,n)}return t}const cv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${_r(e)}Modifiers`]||t[`${Rr(e)}Modifiers`];function lv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ve;let s=n;const i=e.startsWith("update:"),o=i&&cv(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>We(f)?f.trim():f)),o.number&&(s=n.map(fc)));let c,l=r[c=Ka(e)]||r[c=Ka(_r(e))];!l&&i&&(l=r[c=Ka(Rr(e))]),l&&Ut(l,t,6,s);const h=r[c+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Ut(h,t,6,s)}}function Rp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!de(t)){const l=h=>{const f=Rp(h,e,!0);f&&(c=!0,at(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(ke(t)&&r.set(t,null),null):(ae(i)?i.forEach(l=>o[l]=null):at(o,i),ke(t)&&r.set(t,o),o)}function Zo(t,e){return!t||!$o(e)?!1:(e=e.slice(2).replace(/Once$/,""),we(t,e[0].toLowerCase()+e.slice(1))||we(t,Rr(e))||we(t,e))}function Qa(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:h,renderCache:f,props:p,data:g,setupState:E,ctx:C,inheritAttrs:N}=t,O=Eo(t);let $,j;try{if(n.shapeFlag&4){const Z=s||r,fe=Z;$=Gt(h.call(fe,Z,f,p,E,g,C)),j=c}else{const Z=e;$=Gt(Z.length>1?Z(p,{attrs:c,slots:o,emit:l}):Z(p,null)),j=e.props?c:uv(c)}}catch(Z){qs.length=0,Go(Z,t,1),$=Ke(vr)}let U=$;if(j&&N!==!1){const Z=Object.keys(j),{shapeFlag:fe}=U;Z.length&&fe&7&&(i&&Z.some(el)&&(j=hv(j,i)),U=Xr(U,j,!1,!0))}return n.dirs&&(U=Xr(U,null,!1,!0),U.dirs=U.dirs?U.dirs.concat(n.dirs):n.dirs),n.transition&&(U.transition=n.transition),$=U,Eo(O),$}const uv=t=>{let e;for(const n in t)(n==="class"||n==="style"||$o(n))&&((e||(e={}))[n]=t[n]);return e},hv=(t,e)=>{const n={};for(const r in t)(!el(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function dv(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ih(r,o,h):!!o;if(l&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const g=f[p];if(o[g]!==r[g]&&!Zo(h,g))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Ih(r,o,h):!0:!!o;return!1}function Ih(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Zo(n,i))return!0}return!1}function fv({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const pv=t=>t.__isSuspense;function mv(t,e){e&&e.pendingBranch?ae(t)?e.effects.push(...t):e.effects.push(t):Ry(t)}const It=Symbol.for("v-fgt"),ea=Symbol.for("v-txt"),vr=Symbol.for("v-cmt"),oo=Symbol.for("v-stc"),qs=[];let At=null;function De(t=!1){qs.push(At=t?null:[])}function gv(){qs.pop(),At=qs[qs.length-1]||null}let ei=1;function Ah(t){ei+=t,t<0&&At&&(At.hasOnce=!0)}function bp(t){return t.dynamicChildren=ei>0?At||$r:null,gv(),ei>0&&At&&At.push(t),t}function He(t,e,n,r,s,i){return bp(z(t,e,n,r,s,i,!0))}function ta(t,e,n,r,s){return bp(Ke(t,e,n,r,s,!0))}function Ac(t){return t?t.__v_isVNode===!0:!1}function ks(t,e){return t.type===e.type&&t.key===e.key}const Pp=({key:t})=>t??null,ao=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?We(t)||vt(t)||de(t)?{i:Nt,r:t,k:e,f:!!n}:t:null);function z(t,e=null,n=null,r=0,s=null,i=t===It?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Pp(e),ref:e&&ao(e),scopeId:Qo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Nt};return c?(gl(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=We(n)?8:16),ei>0&&!o&&At&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&At.push(l),l}const Ke=_v;function _v(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Fy)&&(t=vr),Ac(t)){const c=Xr(t,e,!0);return n&&gl(c,n),ei>0&&!i&&At&&(c.shapeFlag&6?At[At.indexOf(t)]=c:At.push(c)),c.patchFlag=-2,c}if(Pv(t)&&(t=t.__vccOpts),e){e=yv(e);let{class:c,style:l}=e;c&&!We(c)&&(e.class=sl(c)),ke(l)&&(Wf(l)&&!ae(l)&&(l=at({},l)),e.style=rl(l))}const o=We(t)?1:pv(t)?128:ev(t)?64:ke(t)?4:de(t)?2:0;return z(t,e,n,r,s,o,i,!0)}function yv(t){return t?Wf(t)||pp(t)?at({},t):t:null}function Xr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,h=e?vv(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&Pp(h),ref:e&&e.ref?n&&i?ae(i)?i.concat(ao(e)):[i,ao(e)]:ao(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==It?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Xr(t.ssContent),ssFallback:t.ssFallback&&Xr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&ip(f,l.clone(f)),f}function Rc(t=" ",e=0){return Ke(ea,null,t,e)}function Sp(t,e){const n=Ke(oo,null,t);return n.staticCount=e,n}function na(t="",e=!1){return e?(De(),ta(vr,null,t)):Ke(vr,null,t)}function Gt(t){return t==null||typeof t=="boolean"?Ke(vr):ae(t)?Ke(It,null,t.slice()):typeof t=="object"?xn(t):Ke(ea,null,String(t))}function xn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Xr(t)}function gl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ae(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),gl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!pp(e)?e._ctx=Nt:s===3&&Nt&&(Nt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else de(e)?(e={default:e,_ctx:Nt},n=32):(e=String(e),r&64?(n=16,e=[Rc(e)]):n=8);t.children=e,t.shapeFlag|=n}function vv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=sl([e.class,r.class]));else if(s==="style")e.style=rl([e.style,r.style]);else if($o(s)){const i=e[s],o=r[s];o&&i!==o&&!(ae(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function zt(t,e,n,r=null){Ut(t,e,7,[n,r])}const Ev=hp();let wv=0;function Tv(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Ev,i={uid:wv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Q_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:gp(r,s),emitsOptions:Rp(r,s),emit:null,emitted:null,propsDefaults:Ve,inheritAttrs:r.inheritAttrs,ctx:Ve,data:Ve,props:Ve,attrs:Ve,slots:Ve,refs:Ve,setupState:Ve,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=lv.bind(null,i),t.ce&&t.ce(i),i}let ft=null,To,bc;{const t=Cf(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};To=e("__VUE_INSTANCE_SETTERS__",n=>ft=n),bc=e("__VUE_SSR_SETTERS__",n=>ra=n)}const fi=t=>{const e=ft;return To(t),t.scope.on(),()=>{t.scope.off(),To(e)}},Rh=()=>{ft&&ft.scope.off(),To(null)};function Cp(t){return t.vnode.shapeFlag&4}let ra=!1;function Iv(t,e=!1,n=!1){e&&bc(e);const{props:r,children:s}=t.vnode,i=Cp(t);Wy(t,r,i,e),Jy(t,s,n);const o=i?Av(t,e):void 0;return e&&bc(!1),o}function Av(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Uy);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?bv(t):null,i=fi(t);er();const o=Hn(r,t,0,[t.props,s]);if(tr(),i(),Af(o)){if(o.then(Rh,Rh),e)return o.then(c=>{bh(t,c,e)}).catch(c=>{Go(c,t,0)});t.asyncDep=o}else bh(t,o,e)}else kp(t,e)}function bh(t,e,n){de(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ke(e)&&(t.setupState=Jf(e)),kp(t,n)}let Ph;function kp(t,e,n){const r=t.type;if(!t.render){if(!e&&Ph&&!r.render){const s=r.template||pl(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:l}=r,h=at(at({isCustomElement:i,delimiters:c},o),l);r.render=Ph(s,h)}}t.render=r.render||Ot}{const s=fi(t);er();try{By(t)}finally{tr(),s()}}}const Rv={get(t,e){return yt(t,"get",""),t[e]}};function bv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Rv),slots:t.slots,emit:t.emit,expose:e}}function sa(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Jf(_y(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in $s)return $s[n](t)},has(e,n){return n in e||n in $s}})):t.proxy}function Pv(t){return de(t)&&"__vccOpts"in t}const kt=(t,e)=>yy(t,e,ra);function Op(t,e,n){const r=arguments.length;return r===2?ke(e)&&!ae(e)?Ac(e)?Ke(t,null,[e]):Ke(t,e):Ke(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ac(n)&&(n=[n]),Ke(t,e,n))}const Sv="3.4.38";/**
* @vue/runtime-dom v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Cv="http://www.w3.org/2000/svg",kv="http://www.w3.org/1998/Math/MathML",dn=typeof document<"u"?document:null,Sh=dn&&dn.createElement("template"),Ov={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?dn.createElementNS(Cv,t):e==="mathml"?dn.createElementNS(kv,t):n?dn.createElement(t,{is:n}):dn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>dn.createTextNode(t),createComment:t=>dn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>dn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Sh.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const c=Sh.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Nv=Symbol("_vtc");function Vv(t,e,n){const r=t[Nv];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Ch=Symbol("_vod"),Dv=Symbol("_vsh"),xv=Symbol(""),Mv=/(^|;)\s*display\s*:/;function Lv(t,e,n){const r=t.style,s=We(n);let i=!1;if(n&&!s){if(e)if(We(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&co(r,c,"")}else for(const o in e)n[o]==null&&co(r,o,"");for(const o in n)o==="display"&&(i=!0),co(r,o,n[o])}else if(s){if(e!==n){const o=r[xv];o&&(n+=";"+o),r.cssText=n,i=Mv.test(n)}}else e&&t.removeAttribute("style");Ch in t&&(t[Ch]=i?r.display:"",t[Dv]&&(r.display="none"))}const kh=/\s*!important$/;function co(t,e,n){if(ae(n))n.forEach(r=>co(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Fv(t,e);kh.test(n)?t.setProperty(Rr(r),n.replace(kh,""),"important"):t[r]=n}}const Oh=["Webkit","Moz","ms"],Ya={};function Fv(t,e){const n=Ya[e];if(n)return n;let r=_r(e);if(r!=="filter"&&r in t)return Ya[e]=r;r=Pf(r);for(let s=0;s<Oh.length;s++){const i=Oh[s]+r;if(i in t)return Ya[e]=i}return e}const Nh="http://www.w3.org/1999/xlink";function Vh(t,e,n,r,s,i=W_(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Nh,e.slice(6,e.length)):t.setAttributeNS(Nh,e,n):n==null||i&&!kf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":nn(n)?String(n):n)}function Uv(t,e,n,r){if(e==="innerHTML"||e==="textContent"){if(n==null)return;t[e]=n;return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?"":String(n);(o!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let i=!1;if(n===""||n==null){const o=typeof t[e];o==="boolean"?n=kf(n):n==null&&o==="string"?(n="",i=!0):o==="number"&&(n=0,i=!0)}try{t[e]=n}catch{}i&&t.removeAttribute(e)}function dr(t,e,n,r){t.addEventListener(e,n,r)}function Bv(t,e,n,r){t.removeEventListener(e,n,r)}const Dh=Symbol("_vei");function jv(t,e,n,r,s=null){const i=t[Dh]||(t[Dh]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=$v(e);if(r){const h=i[e]=Kv(r,s);dr(t,c,h,l)}else o&&(Bv(t,c,o,l),i[e]=void 0)}}const xh=/(?:Once|Passive|Capture)$/;function $v(t){let e;if(xh.test(t)){e={};let r;for(;r=t.match(xh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Rr(t.slice(2)),e]}let Ja=0;const qv=Promise.resolve(),Hv=()=>Ja||(qv.then(()=>Ja=0),Ja=Date.now());function Kv(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ut(zv(r,n.value),e,5,[r])};return n.value=t,n.attached=Hv(),n}function zv(t,e){if(ae(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Mh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Wv=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?Vv(t,r,o):e==="style"?Lv(t,n,r):$o(e)?el(e)||jv(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Gv(t,e,r,o))?(Uv(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Vh(t,e,r,o,i,e!=="value")):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Vh(t,e,r,o))};function Gv(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Mh(e)&&de(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Mh(e)&&We(n)?!1:e in t}const Io=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ae(e)?n=>eo(e,n):e};function Qv(t){t.target.composing=!0}function Lh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const zr=Symbol("_assign"),fn={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[zr]=Io(s);const i=r||s.props&&s.props.type==="number";dr(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=fc(c)),t[zr](c)}),n&&dr(t,"change",()=>{t.value=t.value.trim()}),e||(dr(t,"compositionstart",Qv),dr(t,"compositionend",Lh),dr(t,"change",Lh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[zr]=Io(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?fc(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},Yv={deep:!0,created(t,e,n){t[zr]=Io(n),dr(t,"change",()=>{const r=t._modelValue,s=Jv(t),i=t.checked,o=t[zr];if(ae(r)){const c=Of(r,s),l=c!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const h=[...r];h.splice(c,1),o(h)}}else if(qo(r)){const c=new Set(r);i?c.add(s):c.delete(s),o(c)}else o(Np(t,i))})},mounted:Fh,beforeUpdate(t,e,n){t[zr]=Io(n),Fh(t,e,n)}};function Fh(t,{value:e,oldValue:n},r){t._modelValue=e,ae(e)?t.checked=Of(e,r.props.value)>-1:qo(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=Ko(e,Np(t,!0)))}function Jv(t){return"_value"in t?t._value:t.value}function Np(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Xv=["ctrl","shift","alt","meta"],Zv={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Xv.some(n=>t[`${n}Key`]&&!e.includes(n))},Vp=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=Zv[e[o]];if(c&&c(s,e))return}return t(s,...i)})},eE=at({patchProp:Wv},Ov);let Uh;function tE(){return Uh||(Uh=tv(eE))}const nE=(...t)=>{const e=tE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=sE(r);if(!s)return;const i=e._component;!de(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,rE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function rE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function sE(t){return We(t)?document.querySelector(t):t}/*!
  * vue-router v4.4.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Lr=typeof document<"u";function iE(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const be=Object.assign;function Xa(t,e){const n={};for(const r in e){const s=e[r];n[r]=$t(s)?s.map(t):t(s)}return n}const Hs=()=>{},$t=Array.isArray,Dp=/#/g,oE=/&/g,aE=/\//g,cE=/=/g,lE=/\?/g,xp=/\+/g,uE=/%5B/g,hE=/%5D/g,Mp=/%5E/g,dE=/%60/g,Lp=/%7B/g,fE=/%7C/g,Fp=/%7D/g,pE=/%20/g;function _l(t){return encodeURI(""+t).replace(fE,"|").replace(uE,"[").replace(hE,"]")}function mE(t){return _l(t).replace(Lp,"{").replace(Fp,"}").replace(Mp,"^")}function Pc(t){return _l(t).replace(xp,"%2B").replace(pE,"+").replace(Dp,"%23").replace(oE,"%26").replace(dE,"`").replace(Lp,"{").replace(Fp,"}").replace(Mp,"^")}function gE(t){return Pc(t).replace(cE,"%3D")}function _E(t){return _l(t).replace(Dp,"%23").replace(lE,"%3F")}function yE(t){return t==null?"":_E(t).replace(aE,"%2F")}function ti(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const vE=/\/$/,EE=t=>t.replace(vE,"");function Za(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=AE(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:ti(o)}}function wE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Bh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function TE(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Zr(e.matched[r],n.matched[s])&&Up(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Zr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Up(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!IE(t[n],e[n]))return!1;return!0}function IE(t,e){return $t(t)?jh(t,e):$t(e)?jh(e,t):t===e}function jh(t,e){return $t(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function AE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Nn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ni;(function(t){t.pop="pop",t.push="push"})(ni||(ni={}));var Ks;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ks||(Ks={}));function RE(t){if(!t)if(Lr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),EE(t)}const bE=/^[^#]+#/;function PE(t,e){return t.replace(bE,"#")+e}function SE(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const ia=()=>({left:window.scrollX,top:window.scrollY});function CE(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=SE(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function $h(t,e){return(history.state?history.state.position-e:-1)+t}const Sc=new Map;function kE(t,e){Sc.set(t,e)}function OE(t){const e=Sc.get(t);return Sc.delete(t),e}let NE=()=>location.protocol+"//"+location.host;function Bp(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),Bh(l,"")}return Bh(n,t)+r+s}function VE(t,e,n,r){let s=[],i=[],o=null;const c=({state:g})=>{const E=Bp(t,location),C=n.value,N=e.value;let O=0;if(g){if(n.value=E,e.value=g,o&&o===C){o=null;return}O=N?g.position-N.position:0}else r(E);s.forEach($=>{$(n.value,C,{delta:O,type:ni.pop,direction:O?O>0?Ks.forward:Ks.back:Ks.unknown})})};function l(){o=n.value}function h(g){s.push(g);const E=()=>{const C=s.indexOf(g);C>-1&&s.splice(C,1)};return i.push(E),E}function f(){const{history:g}=window;g.state&&g.replaceState(be({},g.state,{scroll:ia()}),"")}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:l,listen:h,destroy:p}}function qh(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?ia():null}}function DE(t){const{history:e,location:n}=window,r={value:Bp(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,h,f){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:NE()+t+l;try{e[f?"replaceState":"pushState"](h,"",g),s.value=h}catch(E){console.error(E),n[f?"replace":"assign"](g)}}function o(l,h){const f=be({},e.state,qh(s.value.back,l,s.value.forward,!0),h,{position:s.value.position});i(l,f,!0),r.value=l}function c(l,h){const f=be({},s.value,e.state,{forward:l,scroll:ia()});i(f.current,f,!0);const p=be({},qh(r.value,l,null),{position:f.position+1},h);i(l,p,!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function xE(t){t=RE(t);const e=DE(t),n=VE(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=be({location:"",base:t,go:r,createHref:PE.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function ME(t){return typeof t=="string"||t&&typeof t=="object"}function jp(t){return typeof t=="string"||typeof t=="symbol"}const $p=Symbol("");var Hh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Hh||(Hh={}));function es(t,e){return be(new Error,{type:t,[$p]:!0},e)}function hn(t,e){return t instanceof Error&&$p in t&&(e==null||!!(t.type&e))}const Kh="[^/]+?",LE={sensitive:!1,strict:!1,start:!0,end:!0},FE=/[.+*?^${}()[\]/\\]/g;function UE(t,e){const n=be({},LE,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const f=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const g=h[p];let E=40+(n.sensitive?.25:0);if(g.type===0)p||(s+="/"),s+=g.value.replace(FE,"\\$&"),E+=40;else if(g.type===1){const{value:C,repeatable:N,optional:O,regexp:$}=g;i.push({name:C,repeatable:N,optional:O});const j=$||Kh;if(j!==Kh){E+=10;try{new RegExp(`(${j})`)}catch(Z){throw new Error(`Invalid custom RegExp for param "${C}" (${j}): `+Z.message)}}let U=N?`((?:${j})(?:/(?:${j}))*)`:`(${j})`;p||(U=O&&h.length<2?`(?:/${U})`:"/"+U),O&&(U+="?"),s+=U,E+=20,O&&(E+=-8),N&&(E+=-20),j===".*"&&(E+=-50)}f.push(E)}r.push(f)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(h){const f=h.match(o),p={};if(!f)return null;for(let g=1;g<f.length;g++){const E=f[g]||"",C=i[g-1];p[C.name]=E&&C.repeatable?E.split("/"):E}return p}function l(h){let f="",p=!1;for(const g of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const E of g)if(E.type===0)f+=E.value;else if(E.type===1){const{value:C,repeatable:N,optional:O}=E,$=C in h?h[C]:"";if($t($)&&!N)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const j=$t($)?$.join("/"):$;if(!j)if(O)g.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${C}"`);f+=j}}return f||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function BE(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function qp(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=BE(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(zh(r))return 1;if(zh(s))return-1}return s.length-r.length}function zh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const jE={type:0,value:""},$E=/[a-zA-Z0-9_]/;function qE(t){if(!t)return[[]];if(t==="/")return[[jE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(E){throw new Error(`ERR (${n})/"${h}": ${E}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,h="",f="";function p(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),h="")}function g(){h+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(h&&p(),o()):l===":"?(p(),n=1):g();break;case 4:g(),n=r;break;case 1:l==="("?n=2:$E.test(l)?g():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),o(),s}function HE(t,e,n){const r=UE(qE(t.path),n),s=be(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function KE(t,e){const n=[],r=new Map;e=Qh({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,g,E){const C=!E,N=zE(p);N.aliasOf=E&&E.record;const O=Qh(e,p),$=[N];if("alias"in p){const Z=typeof p.alias=="string"?[p.alias]:p.alias;for(const fe of Z)$.push(be({},N,{components:E?E.record.components:N.components,path:fe,aliasOf:E?E.record:N}))}let j,U;for(const Z of $){const{path:fe}=Z;if(g&&fe[0]!=="/"){const J=g.record.path,I=J[J.length-1]==="/"?"":"/";Z.path=g.record.path+(fe&&I+fe)}if(j=HE(Z,g,O),E?E.alias.push(j):(U=U||j,U!==j&&U.alias.push(j),C&&p.name&&!Gh(j)&&o(p.name)),Hp(j)&&l(j),N.children){const J=N.children;for(let I=0;I<J.length;I++)i(J[I],j,E&&E.children[I])}E=E||j}return U?()=>{o(U)}:Hs}function o(p){if(jp(p)){const g=r.get(p);g&&(r.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return n}function l(p){const g=QE(p,n);n.splice(g,0,p),p.record.name&&!Gh(p)&&r.set(p.record.name,p)}function h(p,g){let E,C={},N,O;if("name"in p&&p.name){if(E=r.get(p.name),!E)throw es(1,{location:p});O=E.record.name,C=be(Wh(g.params,E.keys.filter(U=>!U.optional).concat(E.parent?E.parent.keys.filter(U=>U.optional):[]).map(U=>U.name)),p.params&&Wh(p.params,E.keys.map(U=>U.name))),N=E.stringify(C)}else if(p.path!=null)N=p.path,E=n.find(U=>U.re.test(N)),E&&(C=E.parse(N),O=E.record.name);else{if(E=g.name?r.get(g.name):n.find(U=>U.re.test(g.path)),!E)throw es(1,{location:p,currentLocation:g});O=E.record.name,C=be({},g.params,p.params),N=E.stringify(C)}const $=[];let j=E;for(;j;)$.unshift(j.record),j=j.parent;return{name:O,path:N,params:C,matched:$,meta:GE($)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:o,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function Wh(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function zE(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:WE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function WE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Gh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function GE(t){return t.reduce((e,n)=>be(e,n.meta),{})}function Qh(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function QE(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;qp(t,e[i])<0?r=i:n=i+1}const s=YE(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function YE(t){let e=t;for(;e=e.parent;)if(Hp(e)&&qp(t,e)===0)return e}function Hp({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function JE(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(xp," "),o=i.indexOf("="),c=ti(o<0?i:i.slice(0,o)),l=o<0?null:ti(i.slice(o+1));if(c in e){let h=e[c];$t(h)||(h=e[c]=[h]),h.push(l)}else e[c]=l}return e}function Yh(t){let e="";for(let n in t){const r=t[n];if(n=gE(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}($t(r)?r.map(i=>i&&Pc(i)):[r&&Pc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function XE(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=$t(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const ZE=Symbol(""),Jh=Symbol(""),oa=Symbol(""),yl=Symbol(""),Cc=Symbol("");function Os(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Mn(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const h=g=>{g===!1?l(es(4,{from:n,to:e})):g instanceof Error?l(g):ME(g)?l(es(2,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),c())},f=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(f);t.length<3&&(p=p.then(h)),p.catch(g=>l(g))})}function ec(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(ew(l)){const f=(l.__vccOpts||l)[e];f&&i.push(Mn(f,n,r,o,c,s))}else{let h=l();i.push(()=>h.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${o.path}"`));const p=iE(f)?f.default:f;o.components[c]=p;const E=(p.__vccOpts||p)[e];return E&&Mn(E,n,r,o,c,s)()}))}}return i}function ew(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Xh(t){const e=Bt(oa),n=Bt(yl),r=kt(()=>{const l=Yt(t.to);return e.resolve(l)}),s=kt(()=>{const{matched:l}=r.value,{length:h}=l,f=l[h-1],p=n.matched;if(!f||!p.length)return-1;const g=p.findIndex(Zr.bind(null,f));if(g>-1)return g;const E=Zh(l[h-2]);return h>1&&Zh(f)===E&&p[p.length-1].path!==E?p.findIndex(Zr.bind(null,l[h-2])):g}),i=kt(()=>s.value>-1&&rw(n.params,r.value.params)),o=kt(()=>s.value>-1&&s.value===n.matched.length-1&&Up(n.params,r.value.params));function c(l={}){return nw(l)?e[Yt(t.replace)?"replace":"push"](Yt(t.to)).catch(Hs):Promise.resolve()}return{route:r,href:kt(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}const tw=op({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Xh,setup(t,{slots:e}){const n=Wo(Xh(t)),{options:r}=Bt(oa),s=kt(()=>({[ed(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ed(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Op("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),lo=tw;function nw(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function rw(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!$t(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Zh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ed=(t,e,n)=>t??e??n,sw=op({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Bt(Cc),s=kt(()=>t.route||r.value),i=Bt(Jh,0),o=kt(()=>{let h=Yt(i);const{matched:f}=s.value;let p;for(;(p=f[h])&&!p.components;)h++;return h}),c=kt(()=>s.value.matched[o.value]);so(Jh,kt(()=>o.value+1)),so(ZE,c),so(Cc,s);const l=Dt();return io(()=>[l.value,c.value,t.name],([h,f,p],[g,E,C])=>{f&&(f.instances[p]=h,E&&E!==f&&h&&h===g&&(f.leaveGuards.size||(f.leaveGuards=E.leaveGuards),f.updateGuards.size||(f.updateGuards=E.updateGuards))),h&&f&&(!E||!Zr(f,E)||!g)&&(f.enterCallbacks[p]||[]).forEach(N=>N(h))},{flush:"post"}),()=>{const h=s.value,f=t.name,p=c.value,g=p&&p.components[f];if(!g)return td(n.default,{Component:g,route:h});const E=p.props[f],C=E?E===!0?h.params:typeof E=="function"?E(h):E:null,O=Op(g,be({},C,e,{onVnodeUnmounted:$=>{$.component.isUnmounted&&(p.instances[f]=null)},ref:l}));return td(n.default,{Component:O,route:h})||O}}});function td(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Kp=sw;function iw(t){const e=KE(t.routes,t),n=t.parseQuery||JE,r=t.stringifyQuery||Yh,s=t.history,i=Os(),o=Os(),c=Os(),l=vy(Nn);let h=Nn;Lr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Xa.bind(null,D=>""+D),p=Xa.bind(null,yE),g=Xa.bind(null,ti);function E(D,Y){let G,ee;return jp(D)?(G=e.getRecordMatcher(D),ee=Y):ee=D,e.addRoute(ee,G)}function C(D){const Y=e.getRecordMatcher(D);Y&&e.removeRoute(Y)}function N(){return e.getRoutes().map(D=>D.record)}function O(D){return!!e.getRecordMatcher(D)}function $(D,Y){if(Y=be({},Y||l.value),typeof D=="string"){const v=Za(n,D,Y.path),S=e.resolve({path:v.path},Y),M=s.createHref(v.fullPath);return be(v,S,{params:g(S.params),hash:ti(v.hash),redirectedFrom:void 0,href:M})}let G;if(D.path!=null)G=be({},D,{path:Za(n,D.path,Y.path).path});else{const v=be({},D.params);for(const S in v)v[S]==null&&delete v[S];G=be({},D,{params:p(v)}),Y.params=p(Y.params)}const ee=e.resolve(G,Y),ye=D.hash||"";ee.params=f(g(ee.params));const Pe=wE(r,be({},D,{hash:mE(ye),path:ee.path})),_=s.createHref(Pe);return be({fullPath:Pe,hash:ye,query:r===Yh?XE(D.query):D.query||{}},ee,{redirectedFrom:void 0,href:_})}function j(D){return typeof D=="string"?Za(n,D,l.value.path):be({},D)}function U(D,Y){if(h!==D)return es(8,{from:Y,to:D})}function Z(D){return I(D)}function fe(D){return Z(be(j(D),{replace:!0}))}function J(D){const Y=D.matched[D.matched.length-1];if(Y&&Y.redirect){const{redirect:G}=Y;let ee=typeof G=="function"?G(D):G;return typeof ee=="string"&&(ee=ee.includes("?")||ee.includes("#")?ee=j(ee):{path:ee},ee.params={}),be({query:D.query,hash:D.hash,params:ee.path!=null?{}:D.params},ee)}}function I(D,Y){const G=h=$(D),ee=l.value,ye=D.state,Pe=D.force,_=D.replace===!0,v=J(G);if(v)return I(be(j(v),{state:typeof v=="object"?be({},ye,v.state):ye,force:Pe,replace:_}),Y||G);const S=G;S.redirectedFrom=Y;let M;return!Pe&&TE(r,ee,G)&&(M=es(16,{to:S,from:ee}),Pt(ee,ee,!0,!1)),(M?Promise.resolve(M):A(S,ee)).catch(V=>hn(V)?hn(V,2)?V:xt(V):pe(V,S,ee)).then(V=>{if(V){if(hn(V,2))return I(be({replace:_},j(V.to),{state:typeof V.to=="object"?be({},ye,V.to.state):ye,force:Pe}),Y||S)}else V=b(S,ee,!0,_,ye);return R(S,ee,V),V})}function y(D,Y){const G=U(D,Y);return G?Promise.reject(G):Promise.resolve()}function T(D){const Y=bn.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(D):D()}function A(D,Y){let G;const[ee,ye,Pe]=ow(D,Y);G=ec(ee.reverse(),"beforeRouteLeave",D,Y);for(const v of ee)v.leaveGuards.forEach(S=>{G.push(Mn(S,D,Y))});const _=y.bind(null,D,Y);return G.push(_),pt(G).then(()=>{G=[];for(const v of i.list())G.push(Mn(v,D,Y));return G.push(_),pt(G)}).then(()=>{G=ec(ye,"beforeRouteUpdate",D,Y);for(const v of ye)v.updateGuards.forEach(S=>{G.push(Mn(S,D,Y))});return G.push(_),pt(G)}).then(()=>{G=[];for(const v of Pe)if(v.beforeEnter)if($t(v.beforeEnter))for(const S of v.beforeEnter)G.push(Mn(S,D,Y));else G.push(Mn(v.beforeEnter,D,Y));return G.push(_),pt(G)}).then(()=>(D.matched.forEach(v=>v.enterCallbacks={}),G=ec(Pe,"beforeRouteEnter",D,Y,T),G.push(_),pt(G))).then(()=>{G=[];for(const v of o.list())G.push(Mn(v,D,Y));return G.push(_),pt(G)}).catch(v=>hn(v,8)?v:Promise.reject(v))}function R(D,Y,G){c.list().forEach(ee=>T(()=>ee(D,Y,G)))}function b(D,Y,G,ee,ye){const Pe=U(D,Y);if(Pe)return Pe;const _=Y===Nn,v=Lr?history.state:{};G&&(ee||_?s.replace(D.fullPath,be({scroll:_&&v&&v.scroll},ye)):s.push(D.fullPath,ye)),l.value=D,Pt(D,Y,G,_),xt()}let w;function lt(){w||(w=s.listen((D,Y,G)=>{if(!Kt.listening)return;const ee=$(D),ye=J(ee);if(ye){I(be(ye,{replace:!0}),ee).catch(Hs);return}h=ee;const Pe=l.value;Lr&&kE($h(Pe.fullPath,G.delta),ia()),A(ee,Pe).catch(_=>hn(_,12)?_:hn(_,2)?(I(_.to,ee).then(v=>{hn(v,20)&&!G.delta&&G.type===ni.pop&&s.go(-1,!1)}).catch(Hs),Promise.reject()):(G.delta&&s.go(-G.delta,!1),pe(_,ee,Pe))).then(_=>{_=_||b(ee,Pe,!1),_&&(G.delta&&!hn(_,8)?s.go(-G.delta,!1):G.type===ni.pop&&hn(_,20)&&s.go(-1,!1)),R(ee,Pe,_)}).catch(Hs)}))}let bt=Os(),je=Os(),_e;function pe(D,Y,G){xt(D);const ee=je.list();return ee.length?ee.forEach(ye=>ye(D,Y,G)):console.error(D),Promise.reject(D)}function Et(){return _e&&l.value!==Nn?Promise.resolve():new Promise((D,Y)=>{bt.add([D,Y])})}function xt(D){return _e||(_e=!D,lt(),bt.list().forEach(([Y,G])=>D?G(D):Y()),bt.reset()),D}function Pt(D,Y,G,ee){const{scrollBehavior:ye}=t;if(!Lr||!ye)return Promise.resolve();const Pe=!G&&OE($h(D.fullPath,0))||(ee||!G)&&history.state&&history.state.scroll||null;return Zf().then(()=>ye(D,Y,Pe)).then(_=>_&&CE(_)).catch(_=>pe(_,D,Y))}const xe=D=>s.go(D);let Me;const bn=new Set,Kt={currentRoute:l,listening:!0,addRoute:E,removeRoute:C,clearRoutes:e.clearRoutes,hasRoute:O,getRoutes:N,resolve:$,options:t,push:Z,replace:fe,go:xe,back:()=>xe(-1),forward:()=>xe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:je.add,isReady:Et,install(D){const Y=this;D.component("RouterLink",lo),D.component("RouterView",Kp),D.config.globalProperties.$router=Y,Object.defineProperty(D.config.globalProperties,"$route",{enumerable:!0,get:()=>Yt(l)}),Lr&&!Me&&l.value===Nn&&(Me=!0,Z(s.location).catch(ye=>{}));const G={};for(const ye in Nn)Object.defineProperty(G,ye,{get:()=>l.value[ye],enumerable:!0});D.provide(oa,Y),D.provide(yl,Kf(G)),D.provide(Cc,l);const ee=D.unmount;bn.add(D),D.unmount=function(){bn.delete(D),bn.size<1&&(h=Nn,w&&w(),w=null,l.value=Nn,Me=!1,_e=!1),ee()}}};function pt(D){return D.reduce((Y,G)=>Y.then(()=>T(G)),Promise.resolve())}return Kt}function ow(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(h=>Zr(h,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(h=>Zr(h,l))||s.push(l))}return[n,r,s]}function aa(){return Bt(oa)}function aw(t){return Bt(yl)}var nd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},cw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Wp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,h=l?t[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let g=(c&15)<<2|h>>6,E=h&63;l||(E=64,o||(g=64)),r.push(n[f],n[p],n[g],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(zp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):cw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new lw;const g=i<<2|c>>4;if(r.push(g),h!==64){const E=c<<4&240|h>>2;if(r.push(E),p!==64){const C=h<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class lw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const uw=function(t){const e=zp(t);return Wp.encodeByteArray(e,!0)},Ao=function(t){return uw(t).replace(/\./g,"")},Gp=function(t){try{return Wp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dw=()=>hw().__FIREBASE_DEFAULTS__,fw=()=>{if(typeof process>"u"||typeof nd>"u")return;const t=nd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},pw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Gp(t[1]);return e&&JSON.parse(e)},ca=()=>{try{return dw()||fw()||pw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Qp=t=>{var e,n;return(n=(e=ca())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Yp=t=>{const e=Qp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Jp=()=>{var t;return(t=ca())===null||t===void 0?void 0:t.config},Xp=t=>{var e;return(e=ca())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zp(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ao(JSON.stringify(n)),Ao(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ct())}function _w(){var t;const e=(t=ca())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function yw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function vw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ew(){const t=ct();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ww(){return!_w()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Tw(){try{return typeof indexedDB=="object"}catch{return!1}}function Iw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aw="FirebaseError";class on extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Aw,Object.setPrototypeOf(this,on.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,pi.prototype.create)}}class pi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Rw(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new on(s,c,r)}}function Rw(t,e){return t.replace(bw,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const bw=/\{\$([^}]+)}/g;function Pw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ro(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(rd(i)&&rd(o)){if(!Ro(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function rd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ds(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function xs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Sw(t,e){const n=new Cw(t,e);return n.subscribe.bind(n)}class Cw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");kw(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=tc),s.error===void 0&&(s.error=tc),s.complete===void 0&&(s.complete=tc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function kw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function tc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(t){return t&&t._delegate?t._delegate:t}class Yn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new mw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Vw(e))try{this.getOrInitializeService({instanceIdentifier:ur})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ur){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ur){return this.instances.has(e)}getOptions(e=ur){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Nw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ur){return this.component?this.component.multipleInstances?e:ur:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Nw(t){return t===ur?void 0:t}function Vw(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ow(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ge||(ge={}));const xw={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},Mw=ge.INFO,Lw={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},Fw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Lw[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vl{constructor(e){this.name=e,this._logLevel=Mw,this._logHandler=Fw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const Uw=(t,e)=>e.some(n=>t instanceof n);let sd,id;function Bw(){return sd||(sd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jw(){return id||(id=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const em=new WeakMap,kc=new WeakMap,tm=new WeakMap,nc=new WeakMap,El=new WeakMap;function $w(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Kn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&em.set(n,t)}).catch(()=>{}),El.set(e,t),e}function qw(t){if(kc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});kc.set(t,e)}let Oc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return kc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||tm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Kn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Hw(t){Oc=t(Oc)}function Kw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(rc(this),e,...n);return tm.set(r,e.sort?e.sort():[e]),Kn(r)}:jw().includes(t)?function(...e){return t.apply(rc(this),e),Kn(em.get(this))}:function(...e){return Kn(t.apply(rc(this),e))}}function zw(t){return typeof t=="function"?Kw(t):(t instanceof IDBTransaction&&qw(t),Uw(t,Bw())?new Proxy(t,Oc):t)}function Kn(t){if(t instanceof IDBRequest)return $w(t);if(nc.has(t))return nc.get(t);const e=zw(t);return e!==t&&(nc.set(t,e),El.set(e,t)),e}const rc=t=>El.get(t);function Ww(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=Kn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Kn(o.result),l.oldVersion,l.newVersion,Kn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const Gw=["get","getKey","getAll","getAllKeys","count"],Qw=["put","add","delete","clear"],sc=new Map;function od(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(sc.get(e))return sc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Qw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Gw.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),s&&l.done]))[0]};return sc.set(e,i),i}Hw(t=>({...t,get:(e,n,r)=>od(e,n)||t.get(e,n,r),has:(e,n)=>!!od(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Jw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Jw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Nc="@firebase/app",ad="0.10.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En=new vl("@firebase/app"),Xw="@firebase/app-compat",Zw="@firebase/analytics-compat",eT="@firebase/analytics",tT="@firebase/app-check-compat",nT="@firebase/app-check",rT="@firebase/auth",sT="@firebase/auth-compat",iT="@firebase/database",oT="@firebase/database-compat",aT="@firebase/functions",cT="@firebase/functions-compat",lT="@firebase/installations",uT="@firebase/installations-compat",hT="@firebase/messaging",dT="@firebase/messaging-compat",fT="@firebase/performance",pT="@firebase/performance-compat",mT="@firebase/remote-config",gT="@firebase/remote-config-compat",_T="@firebase/storage",yT="@firebase/storage-compat",vT="@firebase/firestore",ET="@firebase/vertexai-preview",wT="@firebase/firestore-compat",TT="firebase",IT="10.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc="[DEFAULT]",AT={[Nc]:"fire-core",[Xw]:"fire-core-compat",[eT]:"fire-analytics",[Zw]:"fire-analytics-compat",[nT]:"fire-app-check",[tT]:"fire-app-check-compat",[rT]:"fire-auth",[sT]:"fire-auth-compat",[iT]:"fire-rtdb",[oT]:"fire-rtdb-compat",[aT]:"fire-fn",[cT]:"fire-fn-compat",[lT]:"fire-iid",[uT]:"fire-iid-compat",[hT]:"fire-fcm",[dT]:"fire-fcm-compat",[fT]:"fire-perf",[pT]:"fire-perf-compat",[mT]:"fire-rc",[gT]:"fire-rc-compat",[_T]:"fire-gcs",[yT]:"fire-gcs-compat",[vT]:"fire-fst",[wT]:"fire-fst-compat",[ET]:"fire-vertex","fire-js":"fire-js",[TT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bo=new Map,RT=new Map,Dc=new Map;function cd(t,e){try{t.container.addComponent(e)}catch(n){En.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Er(t){const e=t.name;if(Dc.has(e))return En.debug(`There were multiple attempts to register component ${e}.`),!1;Dc.set(e,t);for(const n of bo.values())cd(n,t);for(const n of RT.values())cd(n,t);return!0}function la(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function pn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},zn=new pi("app","Firebase",bT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Yn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw zn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br=IT;function nm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Vc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw zn.create("bad-app-name",{appName:String(s)});if(n||(n=Jp()),!n)throw zn.create("no-options");const i=bo.get(s);if(i){if(Ro(n,i.options)&&Ro(r,i.config))return i;throw zn.create("duplicate-app",{appName:s})}const o=new Dw(s);for(const l of Dc.values())o.addComponent(l);const c=new PT(n,r,o);return bo.set(s,c),c}function wl(t=Vc){const e=bo.get(t);if(!e&&t===Vc&&Jp())return nm();if(!e)throw zn.create("no-app",{appName:t});return e}function Jt(t,e,n){var r;let s=(r=AT[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),En.warn(c.join(" "));return}Er(new Yn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ST="firebase-heartbeat-database",CT=1,ri="firebase-heartbeat-store";let ic=null;function rm(){return ic||(ic=Ww(ST,CT,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ri)}catch(n){console.warn(n)}}}}).catch(t=>{throw zn.create("idb-open",{originalErrorMessage:t.message})})),ic}async function kT(t){try{const n=(await rm()).transaction(ri),r=await n.objectStore(ri).get(sm(t));return await n.done,r}catch(e){if(e instanceof on)En.warn(e.message);else{const n=zn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});En.warn(n.message)}}}async function ld(t,e){try{const r=(await rm()).transaction(ri,"readwrite");await r.objectStore(ri).put(e,sm(t)),await r.done}catch(n){if(n instanceof on)En.warn(n.message);else{const r=zn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});En.warn(r.message)}}}function sm(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT=1024,NT=30*24*60*60*1e3;class VT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new xT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n,r;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=ud();return console.log("heartbeats",(e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats),((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((r=this._heartbeatsCache)===null||r===void 0?void 0:r.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(c=>c.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(c=>{const l=new Date(c.date).valueOf();return Date.now()-l<=NT}),this._storage.overwrite(this._heartbeatsCache))}catch(s){En.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ud(),{heartbeatsToSend:r,unsentEntries:s}=DT(this._heartbeatsCache.heartbeats),i=Ao(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return En.warn(n),""}}}function ud(){return new Date().toISOString().substring(0,10)}function DT(t,e=OT){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),hd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),hd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class xT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Tw()?Iw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await kT(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ld(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ld(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function hd(t){return Ao(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MT(t){Er(new Yn("platform-logger",e=>new Yw(e),"PRIVATE")),Er(new Yn("heartbeat",e=>new VT(e),"PRIVATE")),Jt(Nc,ad,t),Jt(Nc,ad,"esm2017"),Jt("fire-js","")}MT("");var LT="firebase",FT="10.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Jt(LT,FT,"app");var dd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gr,im;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,y){function T(){}T.prototype=y.prototype,I.D=y.prototype,I.prototype=new T,I.prototype.constructor=I,I.C=function(A,R,b){for(var w=Array(arguments.length-2),lt=2;lt<arguments.length;lt++)w[lt-2]=arguments[lt];return y.prototype[R].apply(A,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,y,T){T||(T=0);var A=Array(16);if(typeof y=="string")for(var R=0;16>R;++R)A[R]=y.charCodeAt(T++)|y.charCodeAt(T++)<<8|y.charCodeAt(T++)<<16|y.charCodeAt(T++)<<24;else for(R=0;16>R;++R)A[R]=y[T++]|y[T++]<<8|y[T++]<<16|y[T++]<<24;y=I.g[0],T=I.g[1],R=I.g[2];var b=I.g[3],w=y+(b^T&(R^b))+A[0]+3614090360&4294967295;y=T+(w<<7&4294967295|w>>>25),w=b+(R^y&(T^R))+A[1]+3905402710&4294967295,b=y+(w<<12&4294967295|w>>>20),w=R+(T^b&(y^T))+A[2]+606105819&4294967295,R=b+(w<<17&4294967295|w>>>15),w=T+(y^R&(b^y))+A[3]+3250441966&4294967295,T=R+(w<<22&4294967295|w>>>10),w=y+(b^T&(R^b))+A[4]+4118548399&4294967295,y=T+(w<<7&4294967295|w>>>25),w=b+(R^y&(T^R))+A[5]+1200080426&4294967295,b=y+(w<<12&4294967295|w>>>20),w=R+(T^b&(y^T))+A[6]+2821735955&4294967295,R=b+(w<<17&4294967295|w>>>15),w=T+(y^R&(b^y))+A[7]+4249261313&4294967295,T=R+(w<<22&4294967295|w>>>10),w=y+(b^T&(R^b))+A[8]+1770035416&4294967295,y=T+(w<<7&4294967295|w>>>25),w=b+(R^y&(T^R))+A[9]+2336552879&4294967295,b=y+(w<<12&4294967295|w>>>20),w=R+(T^b&(y^T))+A[10]+4294925233&4294967295,R=b+(w<<17&4294967295|w>>>15),w=T+(y^R&(b^y))+A[11]+2304563134&4294967295,T=R+(w<<22&4294967295|w>>>10),w=y+(b^T&(R^b))+A[12]+1804603682&4294967295,y=T+(w<<7&4294967295|w>>>25),w=b+(R^y&(T^R))+A[13]+4254626195&4294967295,b=y+(w<<12&4294967295|w>>>20),w=R+(T^b&(y^T))+A[14]+2792965006&4294967295,R=b+(w<<17&4294967295|w>>>15),w=T+(y^R&(b^y))+A[15]+1236535329&4294967295,T=R+(w<<22&4294967295|w>>>10),w=y+(R^b&(T^R))+A[1]+4129170786&4294967295,y=T+(w<<5&4294967295|w>>>27),w=b+(T^R&(y^T))+A[6]+3225465664&4294967295,b=y+(w<<9&4294967295|w>>>23),w=R+(y^T&(b^y))+A[11]+643717713&4294967295,R=b+(w<<14&4294967295|w>>>18),w=T+(b^y&(R^b))+A[0]+3921069994&4294967295,T=R+(w<<20&4294967295|w>>>12),w=y+(R^b&(T^R))+A[5]+3593408605&4294967295,y=T+(w<<5&4294967295|w>>>27),w=b+(T^R&(y^T))+A[10]+38016083&4294967295,b=y+(w<<9&4294967295|w>>>23),w=R+(y^T&(b^y))+A[15]+3634488961&4294967295,R=b+(w<<14&4294967295|w>>>18),w=T+(b^y&(R^b))+A[4]+3889429448&4294967295,T=R+(w<<20&4294967295|w>>>12),w=y+(R^b&(T^R))+A[9]+568446438&4294967295,y=T+(w<<5&4294967295|w>>>27),w=b+(T^R&(y^T))+A[14]+3275163606&4294967295,b=y+(w<<9&4294967295|w>>>23),w=R+(y^T&(b^y))+A[3]+4107603335&4294967295,R=b+(w<<14&4294967295|w>>>18),w=T+(b^y&(R^b))+A[8]+1163531501&4294967295,T=R+(w<<20&4294967295|w>>>12),w=y+(R^b&(T^R))+A[13]+2850285829&4294967295,y=T+(w<<5&4294967295|w>>>27),w=b+(T^R&(y^T))+A[2]+4243563512&4294967295,b=y+(w<<9&4294967295|w>>>23),w=R+(y^T&(b^y))+A[7]+1735328473&4294967295,R=b+(w<<14&4294967295|w>>>18),w=T+(b^y&(R^b))+A[12]+2368359562&4294967295,T=R+(w<<20&4294967295|w>>>12),w=y+(T^R^b)+A[5]+4294588738&4294967295,y=T+(w<<4&4294967295|w>>>28),w=b+(y^T^R)+A[8]+2272392833&4294967295,b=y+(w<<11&4294967295|w>>>21),w=R+(b^y^T)+A[11]+1839030562&4294967295,R=b+(w<<16&4294967295|w>>>16),w=T+(R^b^y)+A[14]+4259657740&4294967295,T=R+(w<<23&4294967295|w>>>9),w=y+(T^R^b)+A[1]+2763975236&4294967295,y=T+(w<<4&4294967295|w>>>28),w=b+(y^T^R)+A[4]+1272893353&4294967295,b=y+(w<<11&4294967295|w>>>21),w=R+(b^y^T)+A[7]+4139469664&4294967295,R=b+(w<<16&4294967295|w>>>16),w=T+(R^b^y)+A[10]+3200236656&4294967295,T=R+(w<<23&4294967295|w>>>9),w=y+(T^R^b)+A[13]+681279174&4294967295,y=T+(w<<4&4294967295|w>>>28),w=b+(y^T^R)+A[0]+3936430074&4294967295,b=y+(w<<11&4294967295|w>>>21),w=R+(b^y^T)+A[3]+3572445317&4294967295,R=b+(w<<16&4294967295|w>>>16),w=T+(R^b^y)+A[6]+76029189&4294967295,T=R+(w<<23&4294967295|w>>>9),w=y+(T^R^b)+A[9]+3654602809&4294967295,y=T+(w<<4&4294967295|w>>>28),w=b+(y^T^R)+A[12]+3873151461&4294967295,b=y+(w<<11&4294967295|w>>>21),w=R+(b^y^T)+A[15]+530742520&4294967295,R=b+(w<<16&4294967295|w>>>16),w=T+(R^b^y)+A[2]+3299628645&4294967295,T=R+(w<<23&4294967295|w>>>9),w=y+(R^(T|~b))+A[0]+4096336452&4294967295,y=T+(w<<6&4294967295|w>>>26),w=b+(T^(y|~R))+A[7]+1126891415&4294967295,b=y+(w<<10&4294967295|w>>>22),w=R+(y^(b|~T))+A[14]+2878612391&4294967295,R=b+(w<<15&4294967295|w>>>17),w=T+(b^(R|~y))+A[5]+4237533241&4294967295,T=R+(w<<21&4294967295|w>>>11),w=y+(R^(T|~b))+A[12]+1700485571&4294967295,y=T+(w<<6&4294967295|w>>>26),w=b+(T^(y|~R))+A[3]+2399980690&4294967295,b=y+(w<<10&4294967295|w>>>22),w=R+(y^(b|~T))+A[10]+4293915773&4294967295,R=b+(w<<15&4294967295|w>>>17),w=T+(b^(R|~y))+A[1]+2240044497&4294967295,T=R+(w<<21&4294967295|w>>>11),w=y+(R^(T|~b))+A[8]+1873313359&4294967295,y=T+(w<<6&4294967295|w>>>26),w=b+(T^(y|~R))+A[15]+4264355552&4294967295,b=y+(w<<10&4294967295|w>>>22),w=R+(y^(b|~T))+A[6]+2734768916&4294967295,R=b+(w<<15&4294967295|w>>>17),w=T+(b^(R|~y))+A[13]+1309151649&4294967295,T=R+(w<<21&4294967295|w>>>11),w=y+(R^(T|~b))+A[4]+4149444226&4294967295,y=T+(w<<6&4294967295|w>>>26),w=b+(T^(y|~R))+A[11]+3174756917&4294967295,b=y+(w<<10&4294967295|w>>>22),w=R+(y^(b|~T))+A[2]+718787259&4294967295,R=b+(w<<15&4294967295|w>>>17),w=T+(b^(R|~y))+A[9]+3951481745&4294967295,I.g[0]=I.g[0]+y&4294967295,I.g[1]=I.g[1]+(R+(w<<21&4294967295|w>>>11))&4294967295,I.g[2]=I.g[2]+R&4294967295,I.g[3]=I.g[3]+b&4294967295}r.prototype.u=function(I,y){y===void 0&&(y=I.length);for(var T=y-this.blockSize,A=this.B,R=this.h,b=0;b<y;){if(R==0)for(;b<=T;)s(this,I,b),b+=this.blockSize;if(typeof I=="string"){for(;b<y;)if(A[R++]=I.charCodeAt(b++),R==this.blockSize){s(this,A),R=0;break}}else for(;b<y;)if(A[R++]=I[b++],R==this.blockSize){s(this,A),R=0;break}}this.h=R,this.o+=y},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var y=1;y<I.length-8;++y)I[y]=0;var T=8*this.o;for(y=I.length-8;y<I.length;++y)I[y]=T&255,T/=256;for(this.u(I),I=Array(16),y=T=0;4>y;++y)for(var A=0;32>A;A+=8)I[T++]=this.g[y]>>>A&255;return I};function i(I,y){var T=c;return Object.prototype.hasOwnProperty.call(T,I)?T[I]:T[I]=y(I)}function o(I,y){this.h=y;for(var T=[],A=!0,R=I.length-1;0<=R;R--){var b=I[R]|0;A&&b==y||(T[R]=b,A=!1)}this.g=T}var c={};function l(I){return-128<=I&&128>I?i(I,function(y){return new o([y|0],0>y?-1:0)}):new o([I|0],0>I?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return O(h(-I));for(var y=[],T=1,A=0;I>=T;A++)y[A]=I/T|0,T*=4294967296;return new o(y,0)}function f(I,y){if(I.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(I.charAt(0)=="-")return O(f(I.substring(1),y));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=h(Math.pow(y,8)),A=p,R=0;R<I.length;R+=8){var b=Math.min(8,I.length-R),w=parseInt(I.substring(R,R+b),y);8>b?(b=h(Math.pow(y,b)),A=A.j(b).add(h(w))):(A=A.j(T),A=A.add(h(w)))}return A}var p=l(0),g=l(1),E=l(16777216);t=o.prototype,t.m=function(){if(N(this))return-O(this).m();for(var I=0,y=1,T=0;T<this.g.length;T++){var A=this.i(T);I+=(0<=A?A:4294967296+A)*y,y*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(C(this))return"0";if(N(this))return"-"+O(this).toString(I);for(var y=h(Math.pow(I,6)),T=this,A="";;){var R=Z(T,y).g;T=$(T,R.j(y));var b=((0<T.g.length?T.g[0]:T.h)>>>0).toString(I);if(T=R,C(T))return b+A;for(;6>b.length;)b="0"+b;A=b+A}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function C(I){if(I.h!=0)return!1;for(var y=0;y<I.g.length;y++)if(I.g[y]!=0)return!1;return!0}function N(I){return I.h==-1}t.l=function(I){return I=$(this,I),N(I)?-1:C(I)?0:1};function O(I){for(var y=I.g.length,T=[],A=0;A<y;A++)T[A]=~I.g[A];return new o(T,~I.h).add(g)}t.abs=function(){return N(this)?O(this):this},t.add=function(I){for(var y=Math.max(this.g.length,I.g.length),T=[],A=0,R=0;R<=y;R++){var b=A+(this.i(R)&65535)+(I.i(R)&65535),w=(b>>>16)+(this.i(R)>>>16)+(I.i(R)>>>16);A=w>>>16,b&=65535,w&=65535,T[R]=w<<16|b}return new o(T,T[T.length-1]&-2147483648?-1:0)};function $(I,y){return I.add(O(y))}t.j=function(I){if(C(this)||C(I))return p;if(N(this))return N(I)?O(this).j(O(I)):O(O(this).j(I));if(N(I))return O(this.j(O(I)));if(0>this.l(E)&&0>I.l(E))return h(this.m()*I.m());for(var y=this.g.length+I.g.length,T=[],A=0;A<2*y;A++)T[A]=0;for(A=0;A<this.g.length;A++)for(var R=0;R<I.g.length;R++){var b=this.i(A)>>>16,w=this.i(A)&65535,lt=I.i(R)>>>16,bt=I.i(R)&65535;T[2*A+2*R]+=w*bt,j(T,2*A+2*R),T[2*A+2*R+1]+=b*bt,j(T,2*A+2*R+1),T[2*A+2*R+1]+=w*lt,j(T,2*A+2*R+1),T[2*A+2*R+2]+=b*lt,j(T,2*A+2*R+2)}for(A=0;A<y;A++)T[A]=T[2*A+1]<<16|T[2*A];for(A=y;A<2*y;A++)T[A]=0;return new o(T,0)};function j(I,y){for(;(I[y]&65535)!=I[y];)I[y+1]+=I[y]>>>16,I[y]&=65535,y++}function U(I,y){this.g=I,this.h=y}function Z(I,y){if(C(y))throw Error("division by zero");if(C(I))return new U(p,p);if(N(I))return y=Z(O(I),y),new U(O(y.g),O(y.h));if(N(y))return y=Z(I,O(y)),new U(O(y.g),y.h);if(30<I.g.length){if(N(I)||N(y))throw Error("slowDivide_ only works with positive integers.");for(var T=g,A=y;0>=A.l(I);)T=fe(T),A=fe(A);var R=J(T,1),b=J(A,1);for(A=J(A,2),T=J(T,2);!C(A);){var w=b.add(A);0>=w.l(I)&&(R=R.add(T),b=w),A=J(A,1),T=J(T,1)}return y=$(I,R.j(y)),new U(R,y)}for(R=p;0<=I.l(y);){for(T=Math.max(1,Math.floor(I.m()/y.m())),A=Math.ceil(Math.log(T)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),b=h(T),w=b.j(y);N(w)||0<w.l(I);)T-=A,b=h(T),w=b.j(y);C(b)&&(b=g),R=R.add(b),I=$(I,w)}return new U(R,I)}t.A=function(I){return Z(this,I).h},t.and=function(I){for(var y=Math.max(this.g.length,I.g.length),T=[],A=0;A<y;A++)T[A]=this.i(A)&I.i(A);return new o(T,this.h&I.h)},t.or=function(I){for(var y=Math.max(this.g.length,I.g.length),T=[],A=0;A<y;A++)T[A]=this.i(A)|I.i(A);return new o(T,this.h|I.h)},t.xor=function(I){for(var y=Math.max(this.g.length,I.g.length),T=[],A=0;A<y;A++)T[A]=this.i(A)^I.i(A);return new o(T,this.h^I.h)};function fe(I){for(var y=I.g.length+1,T=[],A=0;A<y;A++)T[A]=I.i(A)<<1|I.i(A-1)>>>31;return new o(T,I.h)}function J(I,y){var T=y>>5;y%=32;for(var A=I.g.length-T,R=[],b=0;b<A;b++)R[b]=0<y?I.i(b+T)>>>y|I.i(b+T+1)<<32-y:I.i(b+T);return new o(R,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,im=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,gr=o}).apply(typeof dd<"u"?dd:typeof self<"u"?self:typeof window<"u"?window:{});var Gi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var om,am,Ms,cm,uo,xc,lm,um,hm;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,d){return a==Array.prototype||a==Object.prototype||(a[u]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Gi=="object"&&Gi];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,u){if(u)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var P=a[m];if(!(P in d))break e;d=d[P]}a=a[a.length-1],m=d[a],u=u(m),u!=m&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var d=0,m=!1,P={next:function(){if(!m&&d<a.length){var k=d++;return{value:u(k,a[k]),done:!1}}return m=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function f(a,u,d){return a.call.apply(a.bind,arguments)}function p(a,u,d){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,m),a.apply(u,P)}}return function(){return a.apply(u,arguments)}}function g(a,u,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,g.apply(null,arguments)}function E(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function C(a,u){function d(){}d.prototype=u.prototype,a.aa=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(m,P,k){for(var H=Array(arguments.length-2),Se=2;Se<arguments.length;Se++)H[Se-2]=arguments[Se];return u.prototype[P].apply(m,H)}}function N(a){const u=a.length;if(0<u){const d=Array(u);for(let m=0;m<u;m++)d[m]=a[m];return d}return[]}function O(a,u){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(l(m)){const P=a.length||0,k=m.length||0;a.length=P+k;for(let H=0;H<k;H++)a[P+H]=m[H]}else a.push(m)}}class ${constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function j(a){return/^[\s\xa0]*$/.test(a)}function U(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function Z(a){return Z[" "](a),a}Z[" "]=function(){};var fe=U().indexOf("Gecko")!=-1&&!(U().toLowerCase().indexOf("webkit")!=-1&&U().indexOf("Edge")==-1)&&!(U().indexOf("Trident")!=-1||U().indexOf("MSIE")!=-1)&&U().indexOf("Edge")==-1;function J(a,u,d){for(const m in a)u.call(d,a[m],m,a)}function I(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function y(a){const u={};for(const d in a)u[d]=a[d];return u}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,u){let d,m;for(let P=1;P<arguments.length;P++){m=arguments[P];for(d in m)a[d]=m[d];for(let k=0;k<T.length;k++)d=T[k],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function R(a){var u=1;a=a.split(":");const d=[];for(;0<u&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function b(a){c.setTimeout(()=>{throw a},0)}function w(){var a=Et;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class lt{constructor(){this.h=this.g=null}add(u,d){const m=bt.get();m.set(u,d),this.h?this.h.next=m:this.g=m,this.h=m}}var bt=new $(()=>new je,a=>a.reset());class je{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let _e,pe=!1,Et=new lt,xt=()=>{const a=c.Promise.resolve(void 0);_e=()=>{a.then(Pt)}};var Pt=()=>{for(var a;a=w();){try{a.h.call(a.g)}catch(d){b(d)}var u=bt;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}pe=!1};function xe(){this.s=this.s,this.C=this.C}xe.prototype.s=!1,xe.prototype.ma=function(){this.s||(this.s=!0,this.N())},xe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Me(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}Me.prototype.h=function(){this.defaultPrevented=!0};var bn=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};c.addEventListener("test",d,u),c.removeEventListener("test",d,u)}catch{}return a}();function Kt(a,u){if(Me.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(fe){e:{try{Z(u.nodeName);var P=!0;break e}catch{}P=!1}P||(u=null)}}else d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:pt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Kt.aa.h.call(this)}}C(Kt,Me);var pt={2:"touch",3:"pen",4:"mouse"};Kt.prototype.h=function(){Kt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var D="closure_listenable_"+(1e6*Math.random()|0),Y=0;function G(a,u,d,m,P){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!m,this.ha=P,this.key=++Y,this.da=this.fa=!1}function ee(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ye(a){this.src=a,this.g={},this.h=0}ye.prototype.add=function(a,u,d,m,P){var k=a.toString();a=this.g[k],a||(a=this.g[k]=[],this.h++);var H=_(a,u,m,P);return-1<H?(u=a[H],d||(u.fa=!1)):(u=new G(u,this.src,k,!!m,P),u.fa=d,a.push(u)),u};function Pe(a,u){var d=u.type;if(d in a.g){var m=a.g[d],P=Array.prototype.indexOf.call(m,u,void 0),k;(k=0<=P)&&Array.prototype.splice.call(m,P,1),k&&(ee(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function _(a,u,d,m){for(var P=0;P<a.length;++P){var k=a[P];if(!k.da&&k.listener==u&&k.capture==!!d&&k.ha==m)return P}return-1}var v="closure_lm_"+(1e6*Math.random()|0),S={};function M(a,u,d,m,P){if(Array.isArray(u)){for(var k=0;k<u.length;k++)M(a,u[k],d,m,P);return null}return d=re(d),a&&a[D]?a.K(u,d,h(m)?!!m.capture:!!m,P):V(a,u,d,!1,m,P)}function V(a,u,d,m,P,k){if(!u)throw Error("Invalid event type");var H=h(P)?!!P.capture:!!P,Se=Q(a);if(Se||(a[v]=Se=new ye(a)),d=Se.add(u,d,m,H,k),d.proxy)return d;if(m=B(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)bn||(P=H),P===void 0&&(P=!1),a.addEventListener(u.toString(),m,P);else if(a.attachEvent)a.attachEvent(K(u.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function B(){function a(d){return u.call(a.src,a.listener,d)}const u=F;return a}function W(a,u,d,m,P){if(Array.isArray(u))for(var k=0;k<u.length;k++)W(a,u[k],d,m,P);else m=h(m)?!!m.capture:!!m,d=re(d),a&&a[D]?(a=a.i,u=String(u).toString(),u in a.g&&(k=a.g[u],d=_(k,d,m,P),-1<d&&(ee(k[d]),Array.prototype.splice.call(k,d,1),k.length==0&&(delete a.g[u],a.h--)))):a&&(a=Q(a))&&(u=a.g[u.toString()],a=-1,u&&(a=_(u,d,m,P)),(d=-1<a?u[a]:null)&&q(d))}function q(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[D])Pe(u.i,a);else{var d=a.type,m=a.proxy;u.removeEventListener?u.removeEventListener(d,m,a.capture):u.detachEvent?u.detachEvent(K(d),m):u.addListener&&u.removeListener&&u.removeListener(m),(d=Q(u))?(Pe(d,a),d.h==0&&(d.src=null,u[v]=null)):ee(a)}}}function K(a){return a in S?S[a]:S[a]="on"+a}function F(a,u){if(a.da)a=!0;else{u=new Kt(u,this);var d=a.listener,m=a.ha||a.src;a.fa&&q(a),a=d.call(m,u)}return a}function Q(a){return a=a[v],a instanceof ye?a:null}var se="__closure_events_fn_"+(1e9*Math.random()>>>0);function re(a){return typeof a=="function"?a:(a[se]||(a[se]=function(u){return a.handleEvent(u)}),a[se])}function ne(){xe.call(this),this.i=new ye(this),this.M=this,this.F=null}C(ne,xe),ne.prototype[D]=!0,ne.prototype.removeEventListener=function(a,u,d,m){W(this,a,u,d,m)};function oe(a,u){var d,m=a.F;if(m)for(d=[];m;m=m.F)d.push(m);if(a=a.M,m=u.type||u,typeof u=="string")u=new Me(u,a);else if(u instanceof Me)u.target=u.target||a;else{var P=u;u=new Me(m,a),A(u,P)}if(P=!0,d)for(var k=d.length-1;0<=k;k--){var H=u.g=d[k];P=Ae(H,m,!0,u)&&P}if(H=u.g=a,P=Ae(H,m,!0,u)&&P,P=Ae(H,m,!1,u)&&P,d)for(k=0;k<d.length;k++)H=u.g=d[k],P=Ae(H,m,!1,u)&&P}ne.prototype.N=function(){if(ne.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var d=a.g[u],m=0;m<d.length;m++)ee(d[m]);delete a.g[u],a.h--}}this.F=null},ne.prototype.K=function(a,u,d,m){return this.i.add(String(a),u,!1,d,m)},ne.prototype.L=function(a,u,d,m){return this.i.add(String(a),u,!0,d,m)};function Ae(a,u,d,m){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var P=!0,k=0;k<u.length;++k){var H=u[k];if(H&&!H.da&&H.capture==d){var Se=H.listener,Ye=H.ha||H.src;H.fa&&Pe(a.i,H),P=Se.call(Ye,m)!==!1&&P}}return P&&!m.defaultPrevented}function Ee(a,u,d){if(typeof a=="function")d&&(a=g(a,d));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(a,u||0)}function Ue(a){a.g=Ee(()=>{a.g=null,a.i&&(a.i=!1,Ue(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class wt extends xe{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ue(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function St(a){xe.call(this),this.h=a,this.g={}}C(St,xe);var gs=[];function Pn(a){J(a.g,function(u,d){this.g.hasOwnProperty(d)&&q(u)},a),a.g={}}St.prototype.N=function(){St.aa.N.call(this),Pn(this)},St.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Or=c.JSON.stringify,ut=c.JSON.parse,Ct=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function Nr(){}Nr.prototype.h=null;function gu(a){return a.h||(a.h=a.i())}function _u(){}var _s={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Oa(){Me.call(this,"d")}C(Oa,Me);function Na(){Me.call(this,"c")}C(Na,Me);var sr={},yu=null;function Si(){return yu=yu||new ne}sr.La="serverreachability";function vu(a){Me.call(this,sr.La,a)}C(vu,Me);function ys(a){const u=Si();oe(u,new vu(u))}sr.STAT_EVENT="statevent";function Eu(a,u){Me.call(this,sr.STAT_EVENT,a),this.stat=u}C(Eu,Me);function ht(a){const u=Si();oe(u,new Eu(u,a))}sr.Ma="timingevent";function wu(a,u){Me.call(this,sr.Ma,a),this.size=u}C(wu,Me);function vs(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},u)}function Es(){this.g=!0}Es.prototype.xa=function(){this.g=!1};function p_(a,u,d,m,P,k){a.info(function(){if(a.g)if(k)for(var H="",Se=k.split("&"),Ye=0;Ye<Se.length;Ye++){var Te=Se[Ye].split("=");if(1<Te.length){var tt=Te[0];Te=Te[1];var nt=tt.split("_");H=2<=nt.length&&nt[1]=="type"?H+(tt+"="+Te+"&"):H+(tt+"=redacted&")}}else H=null;else H=k;return"XMLHTTP REQ ("+m+") [attempt "+P+"]: "+u+`
`+d+`
`+H})}function m_(a,u,d,m,P,k,H){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+P+"]: "+u+`
`+d+`
`+k+" "+H})}function Vr(a,u,d,m){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+__(a,d)+(m?" "+m:"")})}function g_(a,u){a.info(function(){return"TIMEOUT: "+u})}Es.prototype.info=function(){};function __(a,u){if(!a.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var m=d[a];if(!(2>m.length)){var P=m[1];if(Array.isArray(P)&&!(1>P.length)){var k=P[0];if(k!="noop"&&k!="stop"&&k!="close")for(var H=1;H<P.length;H++)P[H]=""}}}}return Or(d)}catch{return u}}var Ci={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Tu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Va;function ki(){}C(ki,Nr),ki.prototype.g=function(){return new XMLHttpRequest},ki.prototype.i=function(){return{}},Va=new ki;function Sn(a,u,d,m){this.j=a,this.i=u,this.l=d,this.R=m||1,this.U=new St(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Iu}function Iu(){this.i=null,this.g="",this.h=!1}var Au={},Da={};function xa(a,u,d){a.L=1,a.v=Di(ln(u)),a.m=d,a.P=!0,Ru(a,null)}function Ru(a,u){a.F=Date.now(),Oi(a),a.A=ln(a.v);var d=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),Uu(d.i,"t",m),a.C=0,d=a.j.J,a.h=new Iu,a.g=rh(a.j,d?u:null,!a.m),0<a.O&&(a.M=new wt(g(a.Y,a,a.g),a.O)),u=a.U,d=a.g,m=a.ca;var P="readystatechange";Array.isArray(P)||(P&&(gs[0]=P.toString()),P=gs);for(var k=0;k<P.length;k++){var H=M(d,P[k],m||u.handleEvent,!1,u.h||u);if(!H)break;u.g[H.key]=H}u=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),ys(),p_(a.i,a.u,a.A,a.l,a.R,a.m)}Sn.prototype.ca=function(a){a=a.target;const u=this.M;u&&un(a)==3?u.j():this.Y(a)},Sn.prototype.Y=function(a){try{if(a==this.g)e:{const nt=un(this.g);var u=this.g.Ba();const Mr=this.g.Z();if(!(3>nt)&&(nt!=3||this.g&&(this.h.h||this.g.oa()||zu(this.g)))){this.J||nt!=4||u==7||(u==8||0>=Mr?ys(3):ys(2)),Ma(this);var d=this.g.Z();this.X=d;t:if(bu(this)){var m=zu(this.g);a="";var P=m.length,k=un(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ir(this),ws(this);var H="";break t}this.h.i=new c.TextDecoder}for(u=0;u<P;u++)this.h.h=!0,a+=this.h.i.decode(m[u],{stream:!(k&&u==P-1)});m.length=0,this.h.g+=a,this.C=0,H=this.h.g}else H=this.g.oa();if(this.o=d==200,m_(this.i,this.u,this.A,this.l,this.R,nt,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Se,Ye=this.g;if((Se=Ye.g?Ye.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(Se)){var Te=Se;break t}}Te=null}if(d=Te)Vr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,La(this,d);else{this.o=!1,this.s=3,ht(12),ir(this),ws(this);break e}}if(this.P){d=!0;let Mt;for(;!this.J&&this.C<H.length;)if(Mt=y_(this,H),Mt==Da){nt==4&&(this.s=4,ht(14),d=!1),Vr(this.i,this.l,null,"[Incomplete Response]");break}else if(Mt==Au){this.s=4,ht(15),Vr(this.i,this.l,H,"[Invalid Chunk]"),d=!1;break}else Vr(this.i,this.l,Mt,null),La(this,Mt);if(bu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),nt!=4||H.length!=0||this.h.h||(this.s=1,ht(16),d=!1),this.o=this.o&&d,!d)Vr(this.i,this.l,H,"[Invalid Chunked Response]"),ir(this),ws(this);else if(0<H.length&&!this.W){this.W=!0;var tt=this.j;tt.g==this&&tt.ba&&!tt.M&&(tt.j.info("Great, no buffering proxy detected. Bytes received: "+H.length),qa(tt),tt.M=!0,ht(11))}}else Vr(this.i,this.l,H,null),La(this,H);nt==4&&ir(this),this.o&&!this.J&&(nt==4?Zu(this.j,this):(this.o=!1,Oi(this)))}else x_(this.g),d==400&&0<H.indexOf("Unknown SID")?(this.s=3,ht(12)):(this.s=0,ht(13)),ir(this),ws(this)}}}catch{}finally{}};function bu(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function y_(a,u){var d=a.C,m=u.indexOf(`
`,d);return m==-1?Da:(d=Number(u.substring(d,m)),isNaN(d)?Au:(m+=1,m+d>u.length?Da:(u=u.slice(m,m+d),a.C=m+d,u)))}Sn.prototype.cancel=function(){this.J=!0,ir(this)};function Oi(a){a.S=Date.now()+a.I,Pu(a,a.I)}function Pu(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=vs(g(a.ba,a),u)}function Ma(a){a.B&&(c.clearTimeout(a.B),a.B=null)}Sn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(g_(this.i,this.A),this.L!=2&&(ys(),ht(17)),ir(this),this.s=2,ws(this)):Pu(this,this.S-a)};function ws(a){a.j.G==0||a.J||Zu(a.j,a)}function ir(a){Ma(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,Pn(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function La(a,u){try{var d=a.j;if(d.G!=0&&(d.g==a||Fa(d.h,a))){if(!a.K&&Fa(d.h,a)&&d.G==3){try{var m=d.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var P=m;if(P[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Ui(d),Li(d);else break e;$a(d),ht(18)}}else d.za=P[1],0<d.za-d.T&&37500>P[2]&&d.F&&d.v==0&&!d.C&&(d.C=vs(g(d.Za,d),6e3));if(1>=ku(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else ar(d,11)}else if((a.K||d.g==a)&&Ui(d),!j(u))for(P=d.Da.g.parse(u),u=0;u<P.length;u++){let Te=P[u];if(d.T=Te[0],Te=Te[1],d.G==2)if(Te[0]=="c"){d.K=Te[1],d.ia=Te[2];const tt=Te[3];tt!=null&&(d.la=tt,d.j.info("VER="+d.la));const nt=Te[4];nt!=null&&(d.Aa=nt,d.j.info("SVER="+d.Aa));const Mr=Te[5];Mr!=null&&typeof Mr=="number"&&0<Mr&&(m=1.5*Mr,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Mt=a.g;if(Mt){const ji=Mt.g?Mt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ji){var k=m.h;k.g||ji.indexOf("spdy")==-1&&ji.indexOf("quic")==-1&&ji.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(Ua(k,k.h),k.h=null))}if(m.D){const Ha=Mt.g?Mt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ha&&(m.ya=Ha,Oe(m.I,m.D,Ha))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var H=a;if(m.qa=nh(m,m.J?m.ia:null,m.W),H.K){Ou(m.h,H);var Se=H,Ye=m.L;Ye&&(Se.I=Ye),Se.B&&(Ma(Se),Oi(Se)),m.g=H}else Ju(m);0<d.i.length&&Fi(d)}else Te[0]!="stop"&&Te[0]!="close"||ar(d,7);else d.G==3&&(Te[0]=="stop"||Te[0]=="close"?Te[0]=="stop"?ar(d,7):ja(d):Te[0]!="noop"&&d.l&&d.l.ta(Te),d.v=0)}}ys(4)}catch{}}var v_=class{constructor(a,u){this.g=a,this.map=u}};function Su(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Cu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function ku(a){return a.h?1:a.g?a.g.size:0}function Fa(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function Ua(a,u){a.g?a.g.add(u):a.h=u}function Ou(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}Su.prototype.cancel=function(){if(this.i=Nu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Nu(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.D);return u}return N(a.i)}function E_(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var u=[],d=a.length,m=0;m<d;m++)u.push(a[m]);return u}u=[],d=0;for(m in a)u[d++]=a[m];return u}function w_(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var u=[];a=a.length;for(var d=0;d<a;d++)u.push(d);return u}u=[],d=0;for(const m in a)u[d++]=m;return u}}}function Vu(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var d=w_(a),m=E_(a),P=m.length,k=0;k<P;k++)u.call(void 0,m[k],d&&d[k],a)}var Du=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function T_(a,u){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var m=a[d].indexOf("="),P=null;if(0<=m){var k=a[d].substring(0,m);P=a[d].substring(m+1)}else k=a[d];u(k,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function or(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof or){this.h=a.h,Ni(this,a.j),this.o=a.o,this.g=a.g,Vi(this,a.s),this.l=a.l;var u=a.i,d=new As;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),xu(this,d),this.m=a.m}else a&&(u=String(a).match(Du))?(this.h=!1,Ni(this,u[1]||"",!0),this.o=Ts(u[2]||""),this.g=Ts(u[3]||"",!0),Vi(this,u[4]),this.l=Ts(u[5]||"",!0),xu(this,u[6]||"",!0),this.m=Ts(u[7]||"")):(this.h=!1,this.i=new As(null,this.h))}or.prototype.toString=function(){var a=[],u=this.j;u&&a.push(Is(u,Mu,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Is(u,Mu,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Is(d,d.charAt(0)=="/"?R_:A_,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Is(d,P_)),a.join("")};function ln(a){return new or(a)}function Ni(a,u,d){a.j=d?Ts(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function Vi(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function xu(a,u,d){u instanceof As?(a.i=u,S_(a.i,a.h)):(d||(u=Is(u,b_)),a.i=new As(u,a.h))}function Oe(a,u,d){a.i.set(u,d)}function Di(a){return Oe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ts(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Is(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,I_),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function I_(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Mu=/[#\/\?@]/g,A_=/[#\?:]/g,R_=/[#\?]/g,b_=/[#\?@]/g,P_=/#/g;function As(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Cn(a){a.g||(a.g=new Map,a.h=0,a.i&&T_(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}t=As.prototype,t.add=function(a,u){Cn(this),this.i=null,a=Dr(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function Lu(a,u){Cn(a),u=Dr(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function Fu(a,u){return Cn(a),u=Dr(a,u),a.g.has(u)}t.forEach=function(a,u){Cn(this),this.g.forEach(function(d,m){d.forEach(function(P){a.call(u,P,m,this)},this)},this)},t.na=function(){Cn(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let m=0;m<u.length;m++){const P=a[m];for(let k=0;k<P.length;k++)d.push(u[m])}return d},t.V=function(a){Cn(this);let u=[];if(typeof a=="string")Fu(this,a)&&(u=u.concat(this.g.get(Dr(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)u=u.concat(a[d])}return u},t.set=function(a,u){return Cn(this),this.i=null,a=Dr(this,a),Fu(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function Uu(a,u,d){Lu(a,u),0<d.length&&(a.i=null,a.g.set(Dr(a,u),N(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var m=u[d];const k=encodeURIComponent(String(m)),H=this.V(m);for(m=0;m<H.length;m++){var P=k;H[m]!==""&&(P+="="+encodeURIComponent(String(H[m]))),a.push(P)}}return this.i=a.join("&")};function Dr(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function S_(a,u){u&&!a.j&&(Cn(a),a.i=null,a.g.forEach(function(d,m){var P=m.toLowerCase();m!=P&&(Lu(this,m),Uu(this,P,d))},a)),a.j=u}function C_(a,u){const d=new Es;if(c.Image){const m=new Image;m.onload=E(kn,d,"TestLoadImage: loaded",!0,u,m),m.onerror=E(kn,d,"TestLoadImage: error",!1,u,m),m.onabort=E(kn,d,"TestLoadImage: abort",!1,u,m),m.ontimeout=E(kn,d,"TestLoadImage: timeout",!1,u,m),c.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else u(!1)}function k_(a,u){const d=new Es,m=new AbortController,P=setTimeout(()=>{m.abort(),kn(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:m.signal}).then(k=>{clearTimeout(P),k.ok?kn(d,"TestPingServer: ok",!0,u):kn(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(P),kn(d,"TestPingServer: error",!1,u)})}function kn(a,u,d,m,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),m(d)}catch{}}function O_(){this.g=new Ct}function N_(a,u,d){const m=d||"";try{Vu(a,function(P,k){let H=P;h(P)&&(H=Or(P)),u.push(m+k+"="+encodeURIComponent(H))})}catch(P){throw u.push(m+"type="+encodeURIComponent("_badmap")),P}}function Rs(a){this.l=a.Ub||null,this.j=a.eb||!1}C(Rs,Nr),Rs.prototype.g=function(){return new xi(this.l,this.j)},Rs.prototype.i=function(a){return function(){return a}}({});function xi(a,u){ne.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(xi,ne),t=xi.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,Ps(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,bs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ps(this)),this.g&&(this.readyState=3,Ps(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Bu(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Bu(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?bs(this):Ps(this),this.readyState==3&&Bu(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,bs(this))},t.Qa=function(a){this.g&&(this.response=a,bs(this))},t.ga=function(){this.g&&bs(this)};function bs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ps(a)}t.setRequestHeader=function(a,u){this.u.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function Ps(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(xi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function ju(a){let u="";return J(a,function(d,m){u+=m,u+=":",u+=d,u+=`\r
`}),u}function Ba(a,u,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=ju(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):Oe(a,u,d))}function Fe(a){ne.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Fe,ne);var V_=/^https?$/i,D_=["POST","PUT"];t=Fe.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,u,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Va.g(),this.v=this.o?gu(this.o):gu(Va),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(k){$u(this,k);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var P in m)d.set(P,m[P]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const k of m.keys())d.set(k,m.get(k));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(k=>k.toLowerCase()=="content-type"),P=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(D_,u,void 0))||m||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,H]of d)this.g.setRequestHeader(k,H);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ku(this),this.u=!0,this.g.send(a),this.u=!1}catch(k){$u(this,k)}};function $u(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,qu(a),Mi(a)}function qu(a){a.A||(a.A=!0,oe(a,"complete"),oe(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,oe(this,"complete"),oe(this,"abort"),Mi(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Mi(this,!0)),Fe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Hu(this):this.bb())},t.bb=function(){Hu(this)};function Hu(a){if(a.h&&typeof o<"u"&&(!a.v[1]||un(a)!=4||a.Z()!=2)){if(a.u&&un(a)==4)Ee(a.Ea,0,a);else if(oe(a,"readystatechange"),un(a)==4){a.h=!1;try{const H=a.Z();e:switch(H){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var m;if(m=H===0){var P=String(a.D).match(Du)[1]||null;!P&&c.self&&c.self.location&&(P=c.self.location.protocol.slice(0,-1)),m=!V_.test(P?P.toLowerCase():"")}d=m}if(d)oe(a,"complete"),oe(a,"success");else{a.m=6;try{var k=2<un(a)?a.g.statusText:""}catch{k=""}a.l=k+" ["+a.Z()+"]",qu(a)}}finally{Mi(a)}}}}function Mi(a,u){if(a.g){Ku(a);const d=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||oe(a,"ready");try{d.onreadystatechange=m}catch{}}}function Ku(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function un(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<un(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),ut(u)}};function zu(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function x_(a){const u={};a=(a.g&&2<=un(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(j(a[m]))continue;var d=R(a[m]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const k=u[P]||[];u[P]=k,k.push(d)}I(u,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ss(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function Wu(a){this.Aa=0,this.i=[],this.j=new Es,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ss("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ss("baseRetryDelayMs",5e3,a),this.cb=Ss("retryDelaySeedMs",1e4,a),this.Wa=Ss("forwardChannelMaxRetries",2,a),this.wa=Ss("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Su(a&&a.concurrentRequestLimit),this.Da=new O_,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Wu.prototype,t.la=8,t.G=1,t.connect=function(a,u,d,m){ht(0),this.W=a,this.H=u||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=nh(this,null,this.W),Fi(this)};function ja(a){if(Gu(a),a.G==3){var u=a.U++,d=ln(a.I);if(Oe(d,"SID",a.K),Oe(d,"RID",u),Oe(d,"TYPE","terminate"),Cs(a,d),u=new Sn(a,a.j,u),u.L=2,u.v=Di(ln(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=u.v,d=!0),d||(u.g=rh(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Oi(u)}th(a)}function Li(a){a.g&&(qa(a),a.g.cancel(),a.g=null)}function Gu(a){Li(a),a.u&&(c.clearTimeout(a.u),a.u=null),Ui(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Fi(a){if(!Cu(a.h)&&!a.s){a.s=!0;var u=a.Ga;_e||xt(),pe||(_e(),pe=!0),Et.add(u,a),a.B=0}}function M_(a,u){return ku(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=vs(g(a.Ga,a,u),eh(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const P=new Sn(this,this.j,a);let k=this.o;if(this.S&&(k?(k=y(k),A(k,this.S)):k=this.S),this.m!==null||this.O||(P.H=k,k=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Yu(this,P,u),d=ln(this.I),Oe(d,"RID",a),Oe(d,"CVER",22),this.D&&Oe(d,"X-HTTP-Session-Id",this.D),Cs(this,d),k&&(this.O?u="headers="+encodeURIComponent(String(ju(k)))+"&"+u:this.m&&Ba(d,this.m,k)),Ua(this.h,P),this.Ua&&Oe(d,"TYPE","init"),this.P?(Oe(d,"$req",u),Oe(d,"SID","null"),P.T=!0,xa(P,d,null)):xa(P,d,u),this.G=2}}else this.G==3&&(a?Qu(this,a):this.i.length==0||Cu(this.h)||Qu(this))};function Qu(a,u){var d;u?d=u.l:d=a.U++;const m=ln(a.I);Oe(m,"SID",a.K),Oe(m,"RID",d),Oe(m,"AID",a.T),Cs(a,m),a.m&&a.o&&Ba(m,a.m,a.o),d=new Sn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),u&&(a.i=u.D.concat(a.i)),u=Yu(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Ua(a.h,d),xa(d,m,u)}function Cs(a,u){a.H&&J(a.H,function(d,m){Oe(u,m,d)}),a.l&&Vu({},function(d,m){Oe(u,m,d)})}function Yu(a,u,d){d=Math.min(a.i.length,d);var m=a.l?g(a.l.Na,a.l,a):null;e:{var P=a.i;let k=-1;for(;;){const H=["count="+d];k==-1?0<d?(k=P[0].g,H.push("ofs="+k)):k=0:H.push("ofs="+k);let Se=!0;for(let Ye=0;Ye<d;Ye++){let Te=P[Ye].g;const tt=P[Ye].map;if(Te-=k,0>Te)k=Math.max(0,P[Ye].g-100),Se=!1;else try{N_(tt,H,"req"+Te+"_")}catch{m&&m(tt)}}if(Se){m=H.join("&");break e}}}return a=a.i.splice(0,d),u.D=a,m}function Ju(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;_e||xt(),pe||(_e(),pe=!0),Et.add(u,a),a.v=0}}function $a(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=vs(g(a.Fa,a),eh(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Xu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=vs(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ht(10),Li(this),Xu(this))};function qa(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function Xu(a){a.g=new Sn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=ln(a.qa);Oe(u,"RID","rpc"),Oe(u,"SID",a.K),Oe(u,"AID",a.T),Oe(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&Oe(u,"TO",a.ja),Oe(u,"TYPE","xmlhttp"),Cs(a,u),a.m&&a.o&&Ba(u,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Di(ln(u)),d.m=null,d.P=!0,Ru(d,a)}t.Za=function(){this.C!=null&&(this.C=null,Li(this),$a(this),ht(19))};function Ui(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function Zu(a,u){var d=null;if(a.g==u){Ui(a),qa(a),a.g=null;var m=2}else if(Fa(a.h,u))d=u.D,Ou(a.h,u),m=1;else return;if(a.G!=0){if(u.o)if(m==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var P=a.B;m=Si(),oe(m,new wu(m,d)),Fi(a)}else Ju(a);else if(P=u.s,P==3||P==0&&0<u.X||!(m==1&&M_(a,u)||m==2&&$a(a)))switch(d&&0<d.length&&(u=a.h,u.i=u.i.concat(d)),P){case 1:ar(a,5);break;case 4:ar(a,10);break;case 3:ar(a,6);break;default:ar(a,2)}}}function eh(a,u){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*u}function ar(a,u){if(a.j.info("Error code "+u),u==2){var d=g(a.fb,a),m=a.Xa;const P=!m;m=new or(m||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Ni(m,"https"),Di(m),P?C_(m.toString(),d):k_(m.toString(),d)}else ht(2);a.G=0,a.l&&a.l.sa(u),th(a),Gu(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ht(2)):(this.j.info("Failed to ping google.com"),ht(1))};function th(a){if(a.G=0,a.ka=[],a.l){const u=Nu(a.h);(u.length!=0||a.i.length!=0)&&(O(a.ka,u),O(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function nh(a,u,d){var m=d instanceof or?ln(d):new or(d);if(m.g!="")u&&(m.g=u+"."+m.g),Vi(m,m.s);else{var P=c.location;m=P.protocol,u=u?u+"."+P.hostname:P.hostname,P=+P.port;var k=new or(null);m&&Ni(k,m),u&&(k.g=u),P&&Vi(k,P),d&&(k.l=d),m=k}return d=a.D,u=a.ya,d&&u&&Oe(m,d,u),Oe(m,"VER",a.la),Cs(a,m),m}function rh(a,u,d){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new Fe(new Rs({eb:d})):new Fe(a.pa),u.Ha(a.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function sh(){}t=sh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Bi(){}Bi.prototype.g=function(a,u){return new Tt(a,u)};function Tt(a,u){ne.call(this),this.g=new Wu(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!j(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!j(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new xr(this)}C(Tt,ne),Tt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Tt.prototype.close=function(){ja(this.g)},Tt.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Or(a),a=d);u.i.push(new v_(u.Ya++,a)),u.G==3&&Fi(u)},Tt.prototype.N=function(){this.g.l=null,delete this.j,ja(this.g),delete this.g,Tt.aa.N.call(this)};function ih(a){Oa.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}C(ih,Oa);function oh(){Na.call(this),this.status=1}C(oh,Na);function xr(a){this.g=a}C(xr,sh),xr.prototype.ua=function(){oe(this.g,"a")},xr.prototype.ta=function(a){oe(this.g,new ih(a))},xr.prototype.sa=function(a){oe(this.g,new oh)},xr.prototype.ra=function(){oe(this.g,"b")},Bi.prototype.createWebChannel=Bi.prototype.g,Tt.prototype.send=Tt.prototype.o,Tt.prototype.open=Tt.prototype.m,Tt.prototype.close=Tt.prototype.close,hm=function(){return new Bi},um=function(){return Si()},lm=sr,xc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ci.NO_ERROR=0,Ci.TIMEOUT=8,Ci.HTTP_ERROR=6,uo=Ci,Tu.COMPLETE="complete",cm=Tu,_u.EventType=_s,_s.OPEN="a",_s.CLOSE="b",_s.ERROR="c",_s.MESSAGE="d",ne.prototype.listen=ne.prototype.K,Ms=_u,am=Rs,Fe.prototype.listenOnce=Fe.prototype.L,Fe.prototype.getLastError=Fe.prototype.Ka,Fe.prototype.getLastErrorCode=Fe.prototype.Ba,Fe.prototype.getStatus=Fe.prototype.Z,Fe.prototype.getResponseJson=Fe.prototype.Oa,Fe.prototype.getResponseText=Fe.prototype.oa,Fe.prototype.send=Fe.prototype.ea,Fe.prototype.setWithCredentials=Fe.prototype.Ha,om=Fe}).apply(typeof Gi<"u"?Gi:typeof self<"u"?self:typeof window<"u"?window:{});const fd="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}st.UNAUTHENTICATED=new st(null),st.GOOGLE_CREDENTIALS=new st("google-credentials-uid"),st.FIRST_PARTY=new st("first-party-uid"),st.MOCK_USER=new st("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ls="10.13.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr=new vl("@firebase/firestore");function Ns(){return wr.logLevel}function te(t,...e){if(wr.logLevel<=ge.DEBUG){const n=e.map(Tl);wr.debug(`Firestore (${ls}): ${t}`,...n)}}function wn(t,...e){if(wr.logLevel<=ge.ERROR){const n=e.map(Tl);wr.error(`Firestore (${ls}): ${t}`,...n)}}function ts(t,...e){if(wr.logLevel<=ge.WARN){const n=e.map(Tl);wr.warn(`Firestore (${ls}): ${t}`,...n)}}function Tl(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(t="Unexpected state"){const e=`FIRESTORE (${ls}) INTERNAL ASSERTION FAILED: `+t;throw wn(e),new Error(e)}function Ce(t,e){t||le()}function he(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class X extends on{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class UT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(st.UNAUTHENTICATED))}shutdown(){}}class BT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class jT{constructor(e){this.t=e,this.currentUser=st.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new vn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new vn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new vn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ce(typeof r.accessToken=="string"),new dm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ce(e===null||typeof e=="string"),new st(e)}}class $T{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=st.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class qT{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new $T(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(st.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class HT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class KT{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,te("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ce(typeof n.token=="string"),this.R=n.token,new HT(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zT(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=zT(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Ie(t,e){return t<e?-1:t>e?1:0}function ns(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new X(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new X(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new X(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new X(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ze.fromMillis(Date.now())}static fromDate(e){return ze.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ze(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ie(this.nanoseconds,e.nanoseconds):Ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ue(e)}static min(){return new ue(new ze(0,0))}static max(){return new ue(new ze(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e,n,r){n===void 0?n=0:n>e.length&&le(),r===void 0?r=e.length-n:r>e.length-n&&le(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return si.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof si?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ne extends si{construct(e,n,r){return new Ne(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new X(x.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ne(n)}static emptyPath(){return new Ne([])}}const WT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Xe extends si{construct(e,n,r){return new Xe(e,n,r)}static isValidIdentifier(e){return WT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Xe(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new X(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new X(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new X(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new X(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Xe(n)}static emptyPath(){return new Xe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.path=e}static fromPath(e){return new ie(Ne.fromString(e))}static fromName(e){return new ie(Ne.fromString(e).popFirst(5))}static empty(){return new ie(Ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ne.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ie(new Ne(e.slice()))}}function GT(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ue.fromTimestamp(r===1e9?new ze(n+1,0):new ze(n,r));return new Jn(s,ie.empty(),e)}function QT(t){return new Jn(t.readTime,t.key,-1)}class Jn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Jn(ue.min(),ie.empty(),-1)}static max(){return new Jn(ue.max(),ie.empty(),-1)}}function YT(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ie.comparator(t.documentKey,e.documentKey),n!==0?n:Ie(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class XT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gi(t){if(t.code!==x.FAILED_PRECONDITION||t.message!==JT)throw t;te("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&le(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(s=>s?L.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new L((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;n(e[h]).next(f=>{o[h]=f,++c,c===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new L((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function ZT(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function _i(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Il.oe=-1;function ua(t){return t==null}function Po(t){return t===0&&1/t==-1/0}function eI(t){return typeof t=="number"&&Number.isInteger(t)&&!Po(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Pr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function pm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,n){this.comparator=e,this.root=n||Je.EMPTY}insert(e,n){return new Le(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Je.BLACK,null,null))}remove(e){return new Le(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Je.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Qi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Qi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Qi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Qi(this.root,e,this.comparator,!0)}}class Qi{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Je{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Je.RED,this.left=s??Je.EMPTY,this.right=i??Je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Je(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Je.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw le();const e=this.left.check();if(e!==this.right.check())throw le();return e+(this.isRed()?0:1)}}Je.EMPTY=null,Je.RED=!0,Je.BLACK=!1;Je.EMPTY=new class{constructor(){this.size=0}get key(){throw le()}get value(){throw le()}get color(){throw le()}get left(){throw le()}get right(){throw le()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Je(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.comparator=e,this.data=new Le(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new md(this.data.getIterator())}getIteratorFrom(e){return new md(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ze(this.comparator);return n.data=e,n}}class md{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.fields=e,e.sort(Xe.comparator)}static empty(){return new Rt([])}unionWith(e){let n=new Ze(Xe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Rt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ns(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new mm("Invalid base64 string: "+i):i}}(e);return new et(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new et(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}et.EMPTY_BYTE_STRING=new et("");const tI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xn(t){if(Ce(!!t),typeof t=="string"){let e=0;const n=tI.exec(t);if(Ce(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Be(t.seconds),nanos:Be(t.nanos)}}function Be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Tr(t){return typeof t=="string"?et.fromBase64String(t):et.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Al(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Rl(t){const e=t.mapValue.fields.__previous_value__;return Al(e)?Rl(e):e}function ii(t){const e=Xn(t.mapValue.fields.__local_write_time__.timestampValue);return new ze(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e,n,r,s,i,o,c,l,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h}}class oi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new oi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof oi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ir(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Al(t)?4:sI(t)?9007199254740991:rI(t)?10:11:le()}function rn(t,e){if(t===e)return!0;const n=Ir(t);if(n!==Ir(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ii(t).isEqual(ii(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Xn(s.timestampValue),c=Xn(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Tr(s.bytesValue).isEqual(Tr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Be(s.geoPointValue.latitude)===Be(i.geoPointValue.latitude)&&Be(s.geoPointValue.longitude)===Be(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Be(s.integerValue)===Be(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Be(s.doubleValue),c=Be(i.doubleValue);return o===c?Po(o)===Po(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return ns(t.arrayValue.values||[],e.arrayValue.values||[],rn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(pd(o)!==pd(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!rn(o[l],c[l])))return!1;return!0}(t,e);default:return le()}}function ai(t,e){return(t.values||[]).find(n=>rn(n,e))!==void 0}function rs(t,e){if(t===e)return 0;const n=Ir(t),r=Ir(e);if(n!==r)return Ie(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ie(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=Be(i.integerValue||i.doubleValue),l=Be(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return gd(t.timestampValue,e.timestampValue);case 4:return gd(ii(t),ii(e));case 5:return Ie(t.stringValue,e.stringValue);case 6:return function(i,o){const c=Tr(i),l=Tr(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=Ie(c[h],l[h]);if(f!==0)return f}return Ie(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=Ie(Be(i.latitude),Be(o.latitude));return c!==0?c:Ie(Be(i.longitude),Be(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return _d(t.arrayValue,e.arrayValue);case 10:return function(i,o){var c,l,h,f;const p=i.fields||{},g=o.fields||{},E=(c=p.value)===null||c===void 0?void 0:c.arrayValue,C=(l=g.value)===null||l===void 0?void 0:l.arrayValue,N=Ie(((h=E==null?void 0:E.values)===null||h===void 0?void 0:h.length)||0,((f=C==null?void 0:C.values)===null||f===void 0?void 0:f.length)||0);return N!==0?N:_d(E,C)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Yi.mapValue&&o===Yi.mapValue)return 0;if(i===Yi.mapValue)return 1;if(o===Yi.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=o.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const g=Ie(l[p],f[p]);if(g!==0)return g;const E=rs(c[l[p]],h[f[p]]);if(E!==0)return E}return Ie(l.length,f.length)}(t.mapValue,e.mapValue);default:throw le()}}function gd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ie(t,e);const n=Xn(t),r=Xn(e),s=Ie(n.seconds,r.seconds);return s!==0?s:Ie(n.nanos,r.nanos)}function _d(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=rs(n[s],r[s]);if(i)return i}return Ie(n.length,r.length)}function ss(t){return Mc(t)}function Mc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Xn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Tr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ie.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Mc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Mc(n.fields[o])}`;return s+"}"}(t.mapValue):le()}function yd(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Lc(t){return!!t&&"integerValue"in t}function bl(t){return!!t&&"arrayValue"in t}function vd(t){return!!t&&"nullValue"in t}function Ed(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ho(t){return!!t&&"mapValue"in t}function rI(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function zs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Pr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=zs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=zs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function sI(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.value=e}static empty(){return new gt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ho(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=zs(n)}setAll(e){let n=Xe.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=zs(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());ho(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return rn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];ho(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Pr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new gt(zs(this.value))}}function gm(t){const e=[];return Pr(t.fields,(n,r)=>{const s=new Xe([n]);if(ho(r)){const i=gm(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Rt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new it(e,0,ue.min(),ue.min(),ue.min(),gt.empty(),0)}static newFoundDocument(e,n,r,s){return new it(e,1,n,ue.min(),r,s,0)}static newNoDocument(e,n){return new it(e,2,n,ue.min(),ue.min(),gt.empty(),0)}static newUnknownDocument(e,n){return new it(e,3,n,ue.min(),ue.min(),gt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ue.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=gt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=gt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ue.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof it&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new it(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e,n){this.position=e,this.inclusive=n}}function wd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ie.comparator(ie.fromName(o.referenceValue),n.key):r=rs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Td(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!rn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,n="asc"){this.field=e,this.dir=n}}function iI(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{}class qe extends _m{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new aI(e,n,r):n==="array-contains"?new uI(e,r):n==="in"?new hI(e,r):n==="not-in"?new dI(e,r):n==="array-contains-any"?new fI(e,r):new qe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new cI(e,r):new lI(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(rs(n,this.value)):n!==null&&Ir(this.value)===Ir(n)&&this.matchesComparison(rs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return le()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class qt extends _m{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new qt(e,n)}matches(e){return ym(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ym(t){return t.op==="and"}function vm(t){return oI(t)&&ym(t)}function oI(t){for(const e of t.filters)if(e instanceof qt)return!1;return!0}function Fc(t){if(t instanceof qe)return t.field.canonicalString()+t.op.toString()+ss(t.value);if(vm(t))return t.filters.map(e=>Fc(e)).join(",");{const e=t.filters.map(n=>Fc(n)).join(",");return`${t.op}(${e})`}}function Em(t,e){return t instanceof qe?function(r,s){return s instanceof qe&&r.op===s.op&&r.field.isEqual(s.field)&&rn(r.value,s.value)}(t,e):t instanceof qt?function(r,s){return s instanceof qt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&Em(o,s.filters[c]),!0):!1}(t,e):void le()}function wm(t){return t instanceof qe?function(n){return`${n.field.canonicalString()} ${n.op} ${ss(n.value)}`}(t):t instanceof qt?function(n){return n.op.toString()+" {"+n.getFilters().map(wm).join(" ,")+"}"}(t):"Filter"}class aI extends qe{constructor(e,n,r){super(e,n,r),this.key=ie.fromName(r.referenceValue)}matches(e){const n=ie.comparator(e.key,this.key);return this.matchesComparison(n)}}class cI extends qe{constructor(e,n){super(e,"in",n),this.keys=Tm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class lI extends qe{constructor(e,n){super(e,"not-in",n),this.keys=Tm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Tm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ie.fromName(r.referenceValue))}class uI extends qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return bl(n)&&ai(n.arrayValue,this.value)}}class hI extends qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ai(this.value.arrayValue,n)}}class dI extends qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(ai(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ai(this.value.arrayValue,n)}}class fI extends qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!bl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ai(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.ue=null}}function Id(t,e=null,n=[],r=[],s=null,i=null,o=null){return new pI(t,e,n,r,s,i,o)}function Pl(t){const e=he(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Fc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ua(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ss(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ss(r)).join(",")),e.ue=n}return e.ue}function Sl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!iI(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Em(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Td(t.startAt,e.startAt)&&Td(t.endAt,e.endAt)}function Uc(t){return ie.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function mI(t,e,n,r,s,i,o,c){return new yi(t,e,n,r,s,i,o,c)}function Cl(t){return new yi(t)}function Ad(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Im(t){return t.collectionGroup!==null}function Ws(t){const e=he(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new Ze(Xe.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Co(i,r))}),n.has(Xe.keyField().canonicalString())||e.ce.push(new Co(Xe.keyField(),r))}return e.ce}function Xt(t){const e=he(t);return e.le||(e.le=gI(e,Ws(t))),e.le}function gI(t,e){if(t.limitType==="F")return Id(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Co(s.field,i)});const n=t.endAt?new So(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new So(t.startAt.position,t.startAt.inclusive):null;return Id(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Bc(t,e){const n=t.filters.concat([e]);return new yi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function jc(t,e,n){return new yi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ha(t,e){return Sl(Xt(t),Xt(e))&&t.limitType===e.limitType}function Am(t){return`${Pl(Xt(t))}|lt:${t.limitType}`}function Fr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>wm(s)).join(", ")}]`),ua(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ss(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ss(s)).join(",")),`Target(${r})`}(Xt(t))}; limitType=${t.limitType})`}function da(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ie.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Ws(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const h=wd(o,c,l);return o.inclusive?h<=0:h<0}(r.startAt,Ws(r),s)||r.endAt&&!function(o,c,l){const h=wd(o,c,l);return o.inclusive?h>=0:h>0}(r.endAt,Ws(r),s))}(t,e)}function _I(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Rm(t){return(e,n)=>{let r=!1;for(const s of Ws(t)){const i=yI(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function yI(t,e,n){const r=t.field.isKeyField()?ie.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),h=c.data.field(i);return l!==null&&h!==null?rs(l,h):le()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return le()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Pr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return pm(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vI=new Le(ie.comparator);function Tn(){return vI}const bm=new Le(ie.comparator);function Ls(...t){let e=bm;for(const n of t)e=e.insert(n.key,n);return e}function Pm(t){let e=bm;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function fr(){return Gs()}function Sm(){return Gs()}function Gs(){return new us(t=>t.toString(),(t,e)=>t.isEqual(e))}const EI=new Le(ie.comparator),wI=new Ze(ie.comparator);function me(...t){let e=wI;for(const n of t)e=e.add(n);return e}const TI=new Ze(Ie);function II(){return TI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kl(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Po(e)?"-0":e}}function Cm(t){return{integerValue:""+t}}function AI(t,e){return eI(e)?Cm(e):kl(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(){this._=void 0}}function RI(t,e,n){return t instanceof ko?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Al(i)&&(i=Rl(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof ci?Om(t,e):t instanceof li?Nm(t,e):function(s,i){const o=km(s,i),c=Rd(o)+Rd(s.Pe);return Lc(o)&&Lc(s.Pe)?Cm(c):kl(s.serializer,c)}(t,e)}function bI(t,e,n){return t instanceof ci?Om(t,e):t instanceof li?Nm(t,e):n}function km(t,e){return t instanceof Oo?function(r){return Lc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ko extends fa{}class ci extends fa{constructor(e){super(),this.elements=e}}function Om(t,e){const n=Vm(e);for(const r of t.elements)n.some(s=>rn(s,r))||n.push(r);return{arrayValue:{values:n}}}class li extends fa{constructor(e){super(),this.elements=e}}function Nm(t,e){let n=Vm(e);for(const r of t.elements)n=n.filter(s=>!rn(s,r));return{arrayValue:{values:n}}}class Oo extends fa{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Rd(t){return Be(t.integerValue||t.doubleValue)}function Vm(t){return bl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function PI(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof ci&&s instanceof ci||r instanceof li&&s instanceof li?ns(r.elements,s.elements,rn):r instanceof Oo&&s instanceof Oo?rn(r.Pe,s.Pe):r instanceof ko&&s instanceof ko}(t.transform,e.transform)}class SI{constructor(e,n){this.version=e,this.transformResults=n}}class jt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new jt}static exists(e){return new jt(void 0,e)}static updateTime(e){return new jt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function fo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class pa{}function Dm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ol(t.key,jt.none()):new vi(t.key,t.data,jt.none());{const n=t.data,r=gt.empty();let s=new Ze(Xe.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new nr(t.key,r,new Rt(s.toArray()),jt.none())}}function CI(t,e,n){t instanceof vi?function(s,i,o){const c=s.value.clone(),l=Pd(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof nr?function(s,i,o){if(!fo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Pd(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(xm(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Qs(t,e,n,r){return t instanceof vi?function(i,o,c,l){if(!fo(i.precondition,o))return c;const h=i.value.clone(),f=Sd(i.fieldTransforms,l,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof nr?function(i,o,c,l){if(!fo(i.precondition,o))return c;const h=Sd(i.fieldTransforms,l,o),f=o.data;return f.setAll(xm(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,c){return fo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function kI(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=km(r.transform,s||null);i!=null&&(n===null&&(n=gt.empty()),n.set(r.field,i))}return n||null}function bd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ns(r,s,(i,o)=>PI(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class vi extends pa{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class nr extends pa{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function xm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Pd(t,e,n){const r=new Map;Ce(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,bI(o,c,n[s]))}return r}function Sd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,RI(i,o,e))}return r}class Ol extends pa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class OI extends pa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&CI(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Qs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Qs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Sm();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=Dm(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ue.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),me())}isEqual(e){return this.batchId===e.batchId&&ns(this.mutations,e.mutations,(n,r)=>bd(n,r))&&ns(this.baseMutations,e.baseMutations,(n,r)=>bd(n,r))}}class Nl{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ce(e.mutations.length===r.length);let s=function(){return EI}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Nl(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $e,ve;function xI(t){switch(t){default:return le();case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0}}function Mm(t){if(t===void 0)return wn("GRPC error has no .code"),x.UNKNOWN;switch(t){case $e.OK:return x.OK;case $e.CANCELLED:return x.CANCELLED;case $e.UNKNOWN:return x.UNKNOWN;case $e.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case $e.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case $e.INTERNAL:return x.INTERNAL;case $e.UNAVAILABLE:return x.UNAVAILABLE;case $e.UNAUTHENTICATED:return x.UNAUTHENTICATED;case $e.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case $e.NOT_FOUND:return x.NOT_FOUND;case $e.ALREADY_EXISTS:return x.ALREADY_EXISTS;case $e.PERMISSION_DENIED:return x.PERMISSION_DENIED;case $e.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case $e.ABORTED:return x.ABORTED;case $e.OUT_OF_RANGE:return x.OUT_OF_RANGE;case $e.UNIMPLEMENTED:return x.UNIMPLEMENTED;case $e.DATA_LOSS:return x.DATA_LOSS;default:return le()}}(ve=$e||($e={}))[ve.OK=0]="OK",ve[ve.CANCELLED=1]="CANCELLED",ve[ve.UNKNOWN=2]="UNKNOWN",ve[ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ve[ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ve[ve.NOT_FOUND=5]="NOT_FOUND",ve[ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",ve[ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",ve[ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",ve[ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ve[ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ve[ve.ABORTED=10]="ABORTED",ve[ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",ve[ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",ve[ve.INTERNAL=13]="INTERNAL",ve[ve.UNAVAILABLE=14]="UNAVAILABLE",ve[ve.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MI(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LI=new gr([4294967295,4294967295],0);function Cd(t){const e=MI().encode(t),n=new im;return n.update(e),new Uint8Array(n.digest())}function kd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new gr([n,r],0),new gr([s,i],0)]}class Vl{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Fs(`Invalid padding: ${n}`);if(r<0)throw new Fs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Fs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Fs(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=gr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(gr.fromNumber(r)));return s.compare(LI)===1&&(s=new gr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Cd(e),[r,s]=kd(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Vl(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.Ie===0)return;const n=Cd(e),[r,s]=kd(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Fs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ei.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ma(ue.min(),s,new Le(Ie),Tn(),me())}}class Ei{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ei(r,n,me(),me(),me())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class Lm{constructor(e,n){this.targetId=e,this.me=n}}class Fm{constructor(e,n,r=et.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Od{constructor(){this.fe=0,this.ge=Vd(),this.pe=et.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=me(),n=me(),r=me();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:le()}}),new Ei(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Vd()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ce(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class FI{constructor(e){this.Le=e,this.Be=new Map,this.ke=Tn(),this.qe=Nd(),this.Qe=new Le(Ie)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:le()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(Uc(i))if(r===0){const o=new ie(i.path);this.Ue(n,o,it.newNoDocument(o,ue.min()))}else Ce(r===1);else{const o=this.Ye(n);if(o!==r){const c=this.Ze(e),l=c?this.Xe(c,e,o):1;if(l!==0){this.je(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=Tr(r).toUint8Array()}catch(l){if(l instanceof mm)return ts("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Vl(o,s,i)}catch(l){return ts(l instanceof Fs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const c=this.Je(o);if(c){if(i.current&&Uc(c.target)){const l=new ie(c.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,it.newNoDocument(l,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=me();this.qe.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const h=this.Je(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new ma(e,n,this.Qe,this.ke,r);return this.ke=Tn(),this.qe=Nd(),this.Qe=new Le(Ie),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Od,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Ze(Ie),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||te("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Od),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Nd(){return new Le(ie.comparator)}function Vd(){return new Le(ie.comparator)}const UI={asc:"ASCENDING",desc:"DESCENDING"},BI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},jI={and:"AND",or:"OR"};class $I{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function $c(t,e){return t.useProto3Json||ua(e)?e:{value:e}}function No(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Um(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function qI(t,e){return No(t,e.toTimestamp())}function Zt(t){return Ce(!!t),ue.fromTimestamp(function(n){const r=Xn(n);return new ze(r.seconds,r.nanos)}(t))}function Dl(t,e){return qc(t,e).canonicalString()}function qc(t,e){const n=function(s){return new Ne(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Bm(t){const e=Ne.fromString(t);return Ce(Km(e)),e}function Hc(t,e){return Dl(t.databaseId,e.path)}function oc(t,e){const n=Bm(e);if(n.get(1)!==t.databaseId.projectId)throw new X(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new X(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ie($m(n))}function jm(t,e){return Dl(t.databaseId,e)}function HI(t){const e=Bm(t);return e.length===4?Ne.emptyPath():$m(e)}function Kc(t){return new Ne(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function $m(t){return Ce(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Dd(t,e,n){return{name:Hc(t,e),fields:n.value.mapValue.fields}}function KI(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:le()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(Ce(f===void 0||typeof f=="string"),et.fromBase64String(f||"")):(Ce(f===void 0||f instanceof Buffer||f instanceof Uint8Array),et.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){const f=h.code===void 0?x.UNKNOWN:Mm(h.code);return new X(f,h.message||"")}(o);n=new Fm(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=oc(t,r.document.name),i=Zt(r.document.updateTime),o=r.document.createTime?Zt(r.document.createTime):ue.min(),c=new gt({mapValue:{fields:r.document.fields}}),l=it.newFoundDocument(s,i,o,c),h=r.targetIds||[],f=r.removedTargetIds||[];n=new po(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=oc(t,r.document),i=r.readTime?Zt(r.readTime):ue.min(),o=it.newNoDocument(s,i),c=r.removedTargetIds||[];n=new po([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=oc(t,r.document),i=r.removedTargetIds||[];n=new po([],i,s,null)}else{if(!("filter"in e))return le();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new DI(s,i),c=r.targetId;n=new Lm(c,o)}}return n}function zI(t,e){let n;if(e instanceof vi)n={update:Dd(t,e.key,e.value)};else if(e instanceof Ol)n={delete:Hc(t,e.key)};else if(e instanceof nr)n={update:Dd(t,e.key,e.data),updateMask:tA(e.fieldMask)};else{if(!(e instanceof OI))return le();n={verify:Hc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof ko)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof ci)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof li)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Oo)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw le()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:qI(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:le()}(t,e.precondition)),n}function WI(t,e){return t&&t.length>0?(Ce(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Zt(s.updateTime):Zt(i);return o.isEqual(ue.min())&&(o=Zt(i)),new SI(o,s.transformResults||[])}(n,e))):[]}function GI(t,e){return{documents:[jm(t,e.path)]}}function QI(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=jm(t,s);const i=function(h){if(h.length!==0)return Hm(qt.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:Ur(g.field),direction:XI(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=$c(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:s}}function YI(t){let e=HI(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ce(r===1);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const g=qm(p);return g instanceof qt&&vm(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(C){return new Co(Br(C.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(g))}(n.orderBy));let c=null;n.limit&&(c=function(p){let g;return g=typeof p=="object"?p.value:p,ua(g)?null:g}(n.limit));let l=null;n.startAt&&(l=function(p){const g=!!p.before,E=p.values||[];return new So(E,g)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const g=!p.before,E=p.values||[];return new So(E,g)}(n.endAt)),mI(e,s,o,i,c,"F",l,h)}function JI(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return le()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function qm(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Br(n.unaryFilter.field);return qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Br(n.unaryFilter.field);return qe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Br(n.unaryFilter.field);return qe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Br(n.unaryFilter.field);return qe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return le()}}(t):t.fieldFilter!==void 0?function(n){return qe.create(Br(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return le()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return qt.create(n.compositeFilter.filters.map(r=>qm(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return le()}}(n.compositeFilter.op))}(t):le()}function XI(t){return UI[t]}function ZI(t){return BI[t]}function eA(t){return jI[t]}function Ur(t){return{fieldPath:t.canonicalString()}}function Br(t){return Xe.fromServerFormat(t.fieldPath)}function Hm(t){return t instanceof qe?function(n){if(n.op==="=="){if(Ed(n.value))return{unaryFilter:{field:Ur(n.field),op:"IS_NAN"}};if(vd(n.value))return{unaryFilter:{field:Ur(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Ed(n.value))return{unaryFilter:{field:Ur(n.field),op:"IS_NOT_NAN"}};if(vd(n.value))return{unaryFilter:{field:Ur(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ur(n.field),op:ZI(n.op),value:n.value}}}(t):t instanceof qt?function(n){const r=n.getFilters().map(s=>Hm(s));return r.length===1?r[0]:{compositeFilter:{op:eA(n.op),filters:r}}}(t):le()}function tA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Km(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,n,r,s,i=ue.min(),o=ue.min(),c=et.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new $n(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(e){this.ct=e}}function rA(t){const e=YI({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?jc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(){this.un=new iA}addToCollectionParentIndex(e,n){return this.un.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(Jn.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(Jn.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class iA{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ze(Ne.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ze(Ne.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new is(0)}static kn(){return new is(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(){this.changes=new us(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,it.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Qs(r.mutation,s,Rt.empty(),ze.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,me()).next(()=>r))}getLocalViewOfDocuments(e,n,r=me()){const s=fr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Ls();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=fr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,me()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=Tn();const o=Gs(),c=function(){return Gs()}();return n.forEach((l,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof nr)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Qs(f.mutation,h,f.mutation.getFieldMask(),ze.now())):o.set(h.key,Rt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var p;return c.set(h,new aA(f,(p=o.get(h))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,n){const r=Gs();let s=new Le((o,c)=>o-c),i=me();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const h=n.get(l);if(h===null)return;let f=r.get(l)||Rt.empty();f=c.applyToLocalView(h,f),r.set(l,f);const p=(s.get(c.batchId)||me()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,f=l.value,p=Sm();f.forEach(g=>{if(!i.has(g)){const E=Dm(n.get(g),r.get(g));E!==null&&p.set(g,E),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ie.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Im(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):L.resolve(fr());let c=-1,l=i;return o.next(h=>L.forEach(h,(f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?L.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{l=l.insert(f,g)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,me())).next(f=>({batchId:c,changes:Pm(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ie(n)).next(r=>{let s=Ls();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Ls();return this.indexManager.getCollectionParents(e,i).next(c=>L.forEach(c,l=>{const h=function(p,g){return new yi(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,it.newInvalidDocument(f)))});let c=Ls();return o.forEach((l,h)=>{const f=i.get(l);f!==void 0&&Qs(f.mutation,h,Rt.empty(),ze.now()),da(n,h)&&(c=c.insert(l,h))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return L.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Zt(s.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:rA(s.bundledQuery),readTime:Zt(s.readTime)}}(n)),L.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{constructor(){this.overlays=new Le(ie.comparator),this.Ir=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=fr();return L.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const s=fr(),i=n.length+1,o=new ie(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return L.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Le((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=fr(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=fr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=s)););return L.resolve(c)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new VI(n,r));let i=this.Ir.get(n);i===void 0&&(i=me(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(){this.sessionToken=et.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(){this.Tr=new Ze(Ge.Er),this.dr=new Ze(Ge.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ge(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ge(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new ie(new Ne([])),r=new Ge(n,e),s=new Ge(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new ie(new Ne([])),r=new Ge(n,e),s=new Ge(n,e+1);let i=me();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ge(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ge{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return ie.comparator(e.key,n.key)||Ie(e.wr,n.wr)}static Ar(e,n){return Ie(e.wr,n.wr)||ie.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Ze(Ge.Er)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new NI(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.br=this.br.add(new Ge(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return L.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ge(n,0),s=new Ge(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const c=this.Dr(o.wr);i.push(c)}),L.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ze(Ie);return n.forEach(s=>{const i=new Ge(s,0),o=new Ge(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],c=>{r=r.add(c.wr)})}),L.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ie.isDocumentKey(i)||(i=i.child(""));const o=new Ge(new ie(i),0);let c=new Ze(Ie);return this.br.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.wr)),!0)},o),L.resolve(this.Cr(c))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ce(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return L.forEach(n.mutations,s=>{const i=new Ge(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ge(n,0),s=this.br.firstAfterOrEqual(r);return L.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fA{constructor(e){this.Mr=e,this.docs=function(){return new Le(ie.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():it.newInvalidDocument(n))}getEntries(e,n){let r=Tn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():it.newInvalidDocument(s))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Tn();const o=n.path,c=new ie(o.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||YT(QT(f),r)<=0||(s.has(f.key)||da(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return L.resolve(i)}getAllFromCollectionGroup(e,n,r,s){le()}Or(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new pA(this)}getSize(e){return L.resolve(this.size)}}class pA extends oA{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mA{constructor(e){this.persistence=e,this.Nr=new us(n=>Pl(n),Sl),this.lastRemoteSnapshotVersion=ue.min(),this.highestTargetId=0,this.Lr=0,this.Br=new xl,this.targetCount=0,this.kr=is.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),L.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new is(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.Kn(n),L.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),L.waitFor(i).next(()=>s)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),L.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Il(0),this.Kr=!1,this.Kr=!0,this.$r=new hA,this.referenceDelegate=e(this),this.Ur=new mA(this),this.indexManager=new sA,this.remoteDocumentCache=function(s){return new fA(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new nA(n),this.Gr=new lA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new uA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new dA(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){te("MemoryPersistence","Starting transaction:",e);const s=new _A(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return L.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class _A extends XT{constructor(e){super(),this.currentSequenceNumber=e}}class Ml{constructor(e){this.persistence=e,this.Jr=new xl,this.Yr=null}static Zr(e){return new Ml(e)}get Xr(){if(this.Yr)return this.Yr;throw le()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),L.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.Xr,r=>{const s=ie.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,ue.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return L.or([()=>L.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=me(),s=me();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ll(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vA{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return ww()?8:ZT(ct())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new yA;return this.Xi(e,n,o).next(c=>{if(i.result=c,this.zi)return this.es(e,n,o,c.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(Ns()<=ge.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",Fr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),L.resolve()):(Ns()<=ge.DEBUG&&te("QueryEngine","Query:",Fr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Ns()<=ge.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",Fr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Xt(n))):L.resolve())}Yi(e,n){if(Ad(n))return L.resolve(null);let r=Xt(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=jc(n,null,"F"),r=Xt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=me(...i);return this.Ji.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.ts(n,c);return this.ns(n,h,o,l.readTime)?this.Yi(e,jc(n,null,"F")):this.rs(e,h,n,l)}))})))}Zi(e,n,r,s){return Ad(n)||s.isEqual(ue.min())?L.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?L.resolve(null):(Ns()<=ge.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Fr(n)),this.rs(e,o,n,GT(s,-1)).next(c=>c))})}ts(e,n){let r=new Ze(Rm(e));return n.forEach((s,i)=>{da(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return Ns()<=ge.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",Fr(n)),this.Ji.getDocumentsMatchingQuery(e,n,Jn.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new Le(Ie),this._s=new us(i=>Pl(i),Sl),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new cA(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function wA(t,e,n,r){return new EA(t,e,n,r)}async function zm(t,e){const n=he(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=me();for(const h of s){o.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:c}))})})}function TA(t,e){const n=he(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(c,l,h,f){const p=h.batch,g=p.keys();let E=L.resolve();return g.forEach(C=>{E=E.next(()=>f.getEntry(l,C)).next(N=>{const O=h.docVersions.get(C);Ce(O!==null),N.version.compareTo(O)<0&&(p.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),f.addEntry(N)))})}),E.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=me();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Wm(t){const e=he(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function IA(t,e){const n=he(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const c=[];e.targetChanges.forEach((f,p)=>{const g=s.get(p);if(!g)return;c.push(n.Ur.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(i,f.addedDocuments,p)));let E=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?E=E.withResumeToken(et.EMPTY_BYTE_STRING,ue.min()).withLastLimboFreeSnapshotVersion(ue.min()):f.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(f.resumeToken,r)),s=s.insert(p,E),function(N,O,$){return N.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(g,E,f)&&c.push(n.Ur.updateTargetData(i,E))});let l=Tn(),h=me();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(AA(i,o,e.documentUpdates).next(f=>{l=f.Ps,h=f.Is})),!r.isEqual(ue.min())){const f=n.Ur.getLastRemoteSnapshotVersion(i).next(p=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return L.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(n.os=s,i))}function AA(t,e,n){let r=me(),s=me();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Tn();return n.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(ue.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):te("LocalStore","Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{Ps:o,Is:s}})}function RA(t,e){const n=he(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function bA(t,e){const n=he(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,L.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new $n(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function zc(t,e,n){const r=he(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!_i(o))throw o;te("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function xd(t,e,n){const r=he(t);let s=ue.min(),i=me();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,h,f){const p=he(l),g=p._s.get(f);return g!==void 0?L.resolve(p.os.get(g)):p.Ur.getTargetData(h,f)}(r,o,Xt(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:ue.min(),n?i:me())).next(c=>(PA(r,_I(e),c),{documents:c,Ts:i})))}function PA(t,e,n){let r=t.us.get(e)||ue.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class Md{constructor(){this.activeTargetIds=II()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class SA{constructor(){this.so=new Md,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Md,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){te("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){te("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ji=null;function ac(){return Ji===null?Ji=function(){return 268435456+Math.round(2147483648*Math.random())}():Ji++,"0x"+Ji.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt="WebChannelConnection";class NA extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const c=ac(),l=this.xo(n,r.toUriEncodedString());te("RestConnection",`Sending RPC '${n}' ${c}:`,l,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,o),this.No(n,l,h,s).then(f=>(te("RestConnection",`Received RPC '${n}' ${c}: `,f),f),f=>{throw ts("RestConnection",`RPC '${n}' ${c} failed with error: `,f,"url: ",l,"request:",s),f})}Lo(n,r,s,i,o,c){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ls}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=kA[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=ac();return new Promise((o,c)=>{const l=new om;l.setWithCredentials(!0),l.listenOnce(cm.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case uo.NO_ERROR:const f=l.getResponseJson();te(rt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),o(f);break;case uo.TIMEOUT:te(rt,`RPC '${e}' ${i} timed out`),c(new X(x.DEADLINE_EXCEEDED,"Request time out"));break;case uo.HTTP_ERROR:const p=l.getStatus();if(te(rt,`RPC '${e}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let g=l.getResponseJson();Array.isArray(g)&&(g=g[0]);const E=g==null?void 0:g.error;if(E&&E.status&&E.message){const C=function(O){const $=O.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf($)>=0?$:x.UNKNOWN}(E.status);c(new X(C,E.message))}else c(new X(x.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new X(x.UNAVAILABLE,"Connection failed."));break;default:le()}}finally{te(rt,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);te(rt,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",h,r,15)})}Bo(e,n,r){const s=ac(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=hm(),c=um(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.xmlHttpFactory=new am({})),this.Oo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=i.join("");te(rt,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=o.createWebChannel(f,l);let g=!1,E=!1;const C=new OA({Io:O=>{E?te(rt,`Not sending because RPC '${e}' stream ${s} is closed:`,O):(g||(te(rt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),te(rt,`RPC '${e}' stream ${s} sending:`,O),p.send(O))},To:()=>p.close()}),N=(O,$,j)=>{O.listen($,U=>{try{j(U)}catch(Z){setTimeout(()=>{throw Z},0)}})};return N(p,Ms.EventType.OPEN,()=>{E||(te(rt,`RPC '${e}' stream ${s} transport opened.`),C.yo())}),N(p,Ms.EventType.CLOSE,()=>{E||(E=!0,te(rt,`RPC '${e}' stream ${s} transport closed`),C.So())}),N(p,Ms.EventType.ERROR,O=>{E||(E=!0,ts(rt,`RPC '${e}' stream ${s} transport errored:`,O),C.So(new X(x.UNAVAILABLE,"The operation could not be completed")))}),N(p,Ms.EventType.MESSAGE,O=>{var $;if(!E){const j=O.data[0];Ce(!!j);const U=j,Z=U.error||(($=U[0])===null||$===void 0?void 0:$.error);if(Z){te(rt,`RPC '${e}' stream ${s} received error:`,Z);const fe=Z.status;let J=function(T){const A=$e[T];if(A!==void 0)return Mm(A)}(fe),I=Z.message;J===void 0&&(J=x.INTERNAL,I="Unknown error status: "+fe+" with message "+Z.message),E=!0,C.So(new X(J,I)),p.close()}else te(rt,`RPC '${e}' stream ${s} received:`,j),C.bo(j)}}),N(c,lm.STAT_EVENT,O=>{O.stat===xc.PROXY?te(rt,`RPC '${e}' stream ${s} detected buffering proxy`):O.stat===xc.NOPROXY&&te(rt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.wo()},0),C}}function cc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(t){return new $I(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&te("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(e,n,r,s,i,o,c,l){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Gm(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===x.RESOURCE_EXHAUSTED?(wn(n.toString()),wn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new X(x.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return te("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(te("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class VA extends Qm{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=KI(this.serializer,e),r=function(i){if(!("targetChange"in i))return ue.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ue.min():o.readTime?Zt(o.readTime):ue.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Kc(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=Uc(l)?{documents:GI(i,l)}:{query:QI(i,l)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=Um(i,o.resumeToken);const h=$c(i,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(ue.min())>0){c.readTime=No(i,o.snapshotVersion.toTimestamp());const h=$c(i,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=JI(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Kc(this.serializer),n.removeTarget=e,this.a_(n)}}class DA extends Qm{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Ce(!!e.streamToken),this.lastStreamToken=e.streamToken,Ce(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Ce(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=WI(e.writeResults,e.commitTime),r=Zt(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Kc(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>zI(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xA extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new X(x.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,qc(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new X(x.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Lo(e,qc(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new X(x.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class MA{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(wn(n),this.D_=!1):te("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Sr(this)&&(te("RemoteStore","Restarting streams for network reachability change."),await async function(l){const h=he(l);h.L_.add(4),await wi(h),h.q_.set("Unknown"),h.L_.delete(4),await _a(h)}(this))})}),this.q_=new MA(r,s)}}async function _a(t){if(Sr(t))for(const e of t.B_)await e(!0)}async function wi(t){for(const e of t.B_)await e(!1)}function Ym(t,e){const n=he(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),jl(n)?Bl(n):hs(n).r_()&&Ul(n,e))}function Fl(t,e){const n=he(t),r=hs(n);n.N_.delete(e),r.r_()&&Jm(n,e),n.N_.size===0&&(r.r_()?r.o_():Sr(n)&&n.q_.set("Unknown"))}function Ul(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ue.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}hs(t).A_(e)}function Jm(t,e){t.Q_.xe(e),hs(t).R_(e)}function Bl(t){t.Q_=new FI({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),hs(t).start(),t.q_.v_()}function jl(t){return Sr(t)&&!hs(t).n_()&&t.N_.size>0}function Sr(t){return he(t).L_.size===0}function Xm(t){t.Q_=void 0}async function FA(t){t.q_.set("Online")}async function UA(t){t.N_.forEach((e,n)=>{Ul(t,e)})}async function BA(t,e){Xm(t),jl(t)?(t.q_.M_(e),Bl(t)):t.q_.set("Unknown")}async function jA(t,e,n){if(t.q_.set("Online"),e instanceof Fm&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.N_.delete(c),s.Q_.removeTarget(c))}(t,e)}catch(r){te("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Vo(t,r)}else if(e instanceof po?t.Q_.Ke(e):e instanceof Lm?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ue.min()))try{const r=await Wm(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.Q_.rt(o);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.N_.get(h);f&&i.N_.set(h,f.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,h)=>{const f=i.N_.get(l);if(!f)return;i.N_.set(l,f.withResumeToken(et.EMPTY_BYTE_STRING,f.snapshotVersion)),Jm(i,l);const p=new $n(f.target,l,h,f.sequenceNumber);Ul(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){te("RemoteStore","Failed to raise snapshot:",r),await Vo(t,r)}}async function Vo(t,e,n){if(!_i(e))throw e;t.L_.add(1),await wi(t),t.q_.set("Offline"),n||(n=()=>Wm(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{te("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await _a(t)})}function Zm(t,e){return e().catch(n=>Vo(t,n,e))}async function ya(t){const e=he(t),n=Zn(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;$A(e);)try{const s=await RA(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,qA(e,s)}catch(s){await Vo(e,s)}eg(e)&&tg(e)}function $A(t){return Sr(t)&&t.O_.length<10}function qA(t,e){t.O_.push(e);const n=Zn(t);n.r_()&&n.V_&&n.m_(e.mutations)}function eg(t){return Sr(t)&&!Zn(t).n_()&&t.O_.length>0}function tg(t){Zn(t).start()}async function HA(t){Zn(t).p_()}async function KA(t){const e=Zn(t);for(const n of t.O_)e.m_(n.mutations)}async function zA(t,e,n){const r=t.O_.shift(),s=Nl.from(r,e,n);await Zm(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await ya(t)}async function WA(t,e){e&&Zn(t).V_&&await async function(r,s){if(function(o){return xI(o)&&o!==x.ABORTED}(s.code)){const i=r.O_.shift();Zn(r).s_(),await Zm(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ya(r)}}(t,e),eg(t)&&tg(t)}async function Fd(t,e){const n=he(t);n.asyncQueue.verifyOperationInProgress(),te("RemoteStore","RemoteStore received new credentials");const r=Sr(n);n.L_.add(3),await wi(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await _a(n)}async function GA(t,e){const n=he(t);e?(n.L_.delete(2),await _a(n)):e||(n.L_.add(2),await wi(n),n.q_.set("Unknown"))}function hs(t){return t.K_||(t.K_=function(n,r,s){const i=he(n);return i.w_(),new VA(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:FA.bind(null,t),Ro:UA.bind(null,t),mo:BA.bind(null,t),d_:jA.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),jl(t)?Bl(t):t.q_.set("Unknown")):(await t.K_.stop(),Xm(t))})),t.K_}function Zn(t){return t.U_||(t.U_=function(n,r,s){const i=he(n);return i.w_(),new DA(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:HA.bind(null,t),mo:WA.bind(null,t),f_:KA.bind(null,t),g_:zA.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await ya(t)):(await t.U_.stop(),t.O_.length>0&&(te("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new vn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new $l(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new X(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ql(t,e){if(wn("AsyncQueue",`${e}: ${t}`),_i(t))return new X(x.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ie.comparator(n.key,r.key):(n,r)=>ie.comparator(n.key,r.key),this.keyedMap=Ls(),this.sortedSet=new Le(this.comparator)}static emptySet(e){return new Wr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Wr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Wr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(){this.W_=new Le(ie.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):le():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class os{constructor(e,n,r,s,i,o,c,l,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new os(e,n,Wr.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ha(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class YA{constructor(){this.queries=Bd(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=he(n),i=s.queries;s.queries=Bd(),i.forEach((o,c)=>{for(const l of c.j_)l.onError(r)})})(this,new X(x.ABORTED,"Firestore shutting down"))}}function Bd(){return new us(t=>Am(t),ha)}async function ng(t,e){const n=he(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new QA,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=ql(o,`Initialization of query '${Fr(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&Hl(n)}async function rg(t,e){const n=he(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function JA(t,e){const n=he(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.j_)c.X_(s)&&(r=!0);o.z_=s}}r&&Hl(n)}function XA(t,e,n){const r=he(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function Hl(t){t.Y_.forEach(e=>{e.next()})}var Wc,jd;(jd=Wc||(Wc={})).ea="default",jd.Cache="cache";class sg{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new os(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=os.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Wc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e){this.key=e}}class og{constructor(e){this.key=e}}class ZA{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=me(),this.mutatedKeys=me(),this.Aa=Rm(e),this.Ra=new Wr(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Ud,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const g=s.get(f),E=da(this.query,p)?p:null,C=!!g&&this.mutatedKeys.has(g.key),N=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let O=!1;g&&E?g.data.isEqual(E.data)?C!==N&&(r.track({type:3,doc:E}),O=!0):this.ga(g,E)||(r.track({type:2,doc:E}),O=!0,(l&&this.Aa(E,l)>0||h&&this.Aa(E,h)<0)&&(c=!0)):!g&&E?(r.track({type:0,doc:E}),O=!0):g&&!E&&(r.track({type:1,doc:g}),O=!0,(l||h)&&(c=!0)),O&&(E?(o=o.add(E),i=N?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:c,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,p)=>function(E,C){const N=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return le()}};return N(E)-N(C)}(f.type,p.type)||this.Aa(f.doc,p.doc)),this.pa(r),s=s!=null&&s;const c=n&&!s?this.ya():[],l=this.da.size===0&&this.current&&!s?1:0,h=l!==this.Ea;return this.Ea=l,o.length!==0||h?{snapshot:new os(this.query,e.Ra,i,o,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Ud,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=me(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new og(r))}),this.da.forEach(r=>{e.has(r)||n.push(new ig(r))}),n}ba(e){this.Ta=e.Ts,this.da=me();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return os.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class e0{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class t0{constructor(e){this.key=e,this.va=!1}}class n0{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new us(c=>Am(c),ha),this.Ma=new Map,this.xa=new Set,this.Oa=new Le(ie.comparator),this.Na=new Map,this.La=new xl,this.Ba={},this.ka=new Map,this.qa=is.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function r0(t,e,n=!0){const r=dg(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await ag(r,e,n,!0),s}async function s0(t,e){const n=dg(t);await ag(n,e,!0,!1)}async function ag(t,e,n,r){const s=await bA(t.localStore,Xt(e)),i=s.targetId,o=n?t.sharedClientState.addLocalQueryTarget(i):"not-current";let c;return r&&(c=await i0(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Ym(t.remoteStore,s),c}async function i0(t,e,n,r,s){t.Ka=(p,g,E)=>async function(N,O,$,j){let U=O.view.ma($);U.ns&&(U=await xd(N.localStore,O.query,!1).then(({documents:I})=>O.view.ma(I,U)));const Z=j&&j.targetChanges.get(O.targetId),fe=j&&j.targetMismatches.get(O.targetId)!=null,J=O.view.applyChanges(U,N.isPrimaryClient,Z,fe);return qd(N,O.targetId,J.wa),J.snapshot}(t,p,g,E);const i=await xd(t.localStore,e,!0),o=new ZA(e,i.Ts),c=o.ma(i.documents),l=Ei.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(c,t.isPrimaryClient,l);qd(t,n,h.wa);const f=new e0(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function o0(t,e,n){const r=he(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!ha(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await zc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Fl(r.remoteStore,s.targetId),Gc(r,s.targetId)}).catch(gi)):(Gc(r,s.targetId),await zc(r.localStore,s.targetId,!0))}async function a0(t,e){const n=he(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Fl(n.remoteStore,r.targetId))}async function c0(t,e,n){const r=m0(t);try{const s=await function(o,c){const l=he(o),h=ze.now(),f=c.reduce((E,C)=>E.add(C.key),me());let p,g;return l.persistence.runTransaction("Locally write mutations","readwrite",E=>{let C=Tn(),N=me();return l.cs.getEntries(E,f).next(O=>{C=O,C.forEach(($,j)=>{j.isValidDocument()||(N=N.add($))})}).next(()=>l.localDocuments.getOverlayedDocuments(E,C)).next(O=>{p=O;const $=[];for(const j of c){const U=kI(j,p.get(j.key).overlayedDocument);U!=null&&$.push(new nr(j.key,U,gm(U.value.mapValue),jt.exists(!0)))}return l.mutationQueue.addMutationBatch(E,h,$,c)}).next(O=>{g=O;const $=O.applyToLocalDocumentSet(p,N);return l.documentOverlayCache.saveOverlays(E,O.batchId,$)})}).then(()=>({batchId:g.batchId,changes:Pm(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let h=o.Ba[o.currentUser.toKey()];h||(h=new Le(Ie)),h=h.insert(c,l),o.Ba[o.currentUser.toKey()]=h}(r,s.batchId,n),await Ti(r,s.changes),await ya(r.remoteStore)}catch(s){const i=ql(s,"Failed to persist write");n.reject(i)}}async function cg(t,e){const n=he(t);try{const r=await IA(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(Ce(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?Ce(o.va):s.removedDocuments.size>0&&(Ce(o.va),o.va=!1))}),await Ti(n,r,e)}catch(r){await gi(r)}}function $d(t,e,n){const r=he(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const c=o.view.Z_(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=he(o);l.onlineState=c;let h=!1;l.queries.forEach((f,p)=>{for(const g of p.j_)g.Z_(c)&&(h=!0)}),h&&Hl(l)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function l0(t,e,n){const r=he(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new Le(ie.comparator);o=o.insert(i,it.newNoDocument(i,ue.min()));const c=me().add(i),l=new ma(ue.min(),new Map,new Le(Ie),o,c);await cg(r,l),r.Oa=r.Oa.remove(i),r.Na.delete(e),Kl(r)}else await zc(r.localStore,e,!1).then(()=>Gc(r,e,n)).catch(gi)}async function u0(t,e){const n=he(t),r=e.batch.batchId;try{const s=await TA(n.localStore,e);ug(n,r,null),lg(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ti(n,s)}catch(s){await gi(s)}}async function h0(t,e,n){const r=he(t);try{const s=await function(o,c){const l=he(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return l.mutationQueue.lookupMutationBatch(h,c).next(p=>(Ce(p!==null),f=p.keys(),l.mutationQueue.removeMutationBatch(h,p))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>l.localDocuments.getDocuments(h,f))})}(r.localStore,e);ug(r,e,n),lg(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ti(r,s)}catch(s){await gi(s)}}function lg(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function ug(t,e,n){const r=he(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Gc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||hg(t,r)})}function hg(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Fl(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Kl(t))}function qd(t,e,n){for(const r of n)r instanceof ig?(t.La.addReference(r.key,e),d0(t,r)):r instanceof og?(te("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||hg(t,r.key)):le()}function d0(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(te("SyncEngine","New document in limbo: "+n),t.xa.add(r),Kl(t))}function Kl(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new ie(Ne.fromString(e)),r=t.qa.next();t.Na.set(r,new t0(n)),t.Oa=t.Oa.insert(n,r),Ym(t.remoteStore,new $n(Xt(Cl(n.path)),r,"TargetPurposeLimboResolution",Il.oe))}}async function Ti(t,e,n){const r=he(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((c,l)=>{o.push(r.Ka(l,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Ll.Wi(l.targetId,h);i.push(p)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(l,h){const f=he(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>L.forEach(h,g=>L.forEach(g.$i,E=>f.persistence.referenceDelegate.addReference(p,g.targetId,E)).next(()=>L.forEach(g.Ui,E=>f.persistence.referenceDelegate.removeReference(p,g.targetId,E)))))}catch(p){if(!_i(p))throw p;te("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const E=f.os.get(g),C=E.snapshotVersion,N=E.withLastLimboFreeSnapshotVersion(C);f.os=f.os.insert(g,N)}}}(r.localStore,i))}async function f0(t,e){const n=he(t);if(!n.currentUser.isEqual(e)){te("SyncEngine","User change. New user:",e.toKey());const r=await zm(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(c=>{c.forEach(l=>{l.reject(new X(x.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ti(n,r.hs)}}function p0(t,e){const n=he(t),r=n.Na.get(e);if(r&&r.va)return me().add(r.key);{let s=me();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const c=n.Fa.get(o);s=s.unionWith(c.view.Va)}return s}}function dg(t){const e=he(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=cg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=p0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=l0.bind(null,e),e.Ca.d_=JA.bind(null,e.eventManager),e.Ca.$a=XA.bind(null,e.eventManager),e}function m0(t){const e=he(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=u0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=h0.bind(null,e),e}class Hd{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ga(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return wA(this.persistence,new vA,e.initialUser,this.serializer)}createPersistence(e){return new gA(Ml.Zr,this.serializer)}createSharedClientState(e){return new SA}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class g0{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>$d(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=f0.bind(null,this.syncEngine),await GA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new YA}()}createDatastore(e){const n=ga(e.databaseInfo.databaseId),r=function(i){return new NA(i)}(e.databaseInfo);return function(i,o,c,l){return new xA(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new LA(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>$d(this.syncEngine,n,0),function(){return Ld.D()?new Ld:new CA}())}createSyncEngine(e,n){return function(s,i,o,c,l,h,f){const p=new n0(s,i,o,c,l,h);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=he(s);te("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await wi(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ga(this.observer.next,e)}error(e){this.observer.error?this.Ga(this.observer.error,e):wn("Uncaught Error in snapshot listener:",e.toString())}za(){this.muted=!0}Ga(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=st.UNAUTHENTICATED,this.clientId=fm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{te("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(te("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new X(x.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ql(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function lc(t,e){t.asyncQueue.verifyOperationInProgress(),te("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await zm(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Kd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await v0(t);te("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Fd(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Fd(e.remoteStore,s)),t._onlineComponents=e}function y0(t){return t.name==="FirebaseError"?t.code===x.FAILED_PRECONDITION||t.code===x.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function v0(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){te("FirestoreClient","Using user provided OfflineComponentProvider");try{await lc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!y0(n))throw n;ts("Error using user provided cache. Falling back to memory cache: "+n),await lc(t,new Hd)}}else te("FirestoreClient","Using default OfflineComponentProvider"),await lc(t,new Hd);return t._offlineComponents}async function pg(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(te("FirestoreClient","Using user provided OnlineComponentProvider"),await Kd(t,t._uninitializedComponentsProvider._online)):(te("FirestoreClient","Using default OnlineComponentProvider"),await Kd(t,new g0))),t._onlineComponents}function E0(t){return pg(t).then(e=>e.syncEngine)}async function mg(t){const e=await pg(t),n=e.eventManager;return n.onListen=r0.bind(null,e.syncEngine),n.onUnlisten=o0.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=s0.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=a0.bind(null,e.syncEngine),n}function w0(t,e,n={}){const r=new vn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,h){const f=new fg({next:g=>{o.enqueueAndForget(()=>rg(i,p));const E=g.docs.has(c);!E&&g.fromCache?h.reject(new X(x.UNAVAILABLE,"Failed to get document because the client is offline.")):E&&g.fromCache&&l&&l.source==="server"?h.reject(new X(x.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new sg(Cl(c.path),f,{includeMetadataChanges:!0,_a:!0});return ng(i,p)}(await mg(t),t.asyncQueue,e,n,r)),r.promise}function T0(t,e,n={}){const r=new vn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,h){const f=new fg({next:g=>{o.enqueueAndForget(()=>rg(i,p)),g.fromCache&&l.source==="server"?h.reject(new X(x.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new sg(c,f,{includeMetadataChanges:!0,_a:!0});return ng(i,p)}(await mg(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gg(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zd=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _g(t,e,n){if(!n)throw new X(x.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function I0(t,e,n,r){if(e===!0&&r===!0)throw new X(x.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Wd(t){if(!ie.isDocumentKey(t))throw new X(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Gd(t){if(ie.isDocumentKey(t))throw new X(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function va(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":le()}function In(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new X(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=va(t);throw new X(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new X(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new X(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}I0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=gg((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new X(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new X(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new X(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ea{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qd({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new X(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new X(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qd(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new UT;switch(r.type){case"firstParty":return new qT(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new X(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=zd.get(n);r&&(te("ComponentProvider","Removing Datastore"),zd.delete(n),r.terminate())}(this),Promise.resolve()}}function A0(t,e,n,r={}){var s;const i=(t=In(t,Ea))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&ts("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=st.MOCK_USER;else{c=Zp(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new X(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new st(h)}t._authCredentials=new BT(new dm(c,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ds(this.firestore,e,this._query)}}class _t{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new _t(this.firestore,e,this._key)}}class Wn extends ds{constructor(e,n,r){super(e,n,Cl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _t(this.firestore,null,new ie(e))}withConverter(e){return new Wn(this.firestore,e,this._path)}}function zl(t,e,...n){if(t=Qe(t),_g("collection","path",e),t instanceof Ea){const r=Ne.fromString(e,...n);return Gd(r),new Wn(t,null,r)}{if(!(t instanceof _t||t instanceof Wn))throw new X(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ne.fromString(e,...n));return Gd(r),new Wn(t.firestore,null,r)}}function Ii(t,e,...n){if(t=Qe(t),arguments.length===1&&(e=fm.newId()),_g("doc","path",e),t instanceof Ea){const r=Ne.fromString(e,...n);return Wd(r),new _t(t,null,new ie(r))}{if(!(t instanceof _t||t instanceof Wn))throw new X(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ne.fromString(e,...n));return Wd(r),new _t(t.firestore,t instanceof Wn?t.converter:null,new ie(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R0{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new Gm(this,"async_queue_retry"),this.Eu=()=>{const n=cc();n&&te("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()};const e=cc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.du(),this.Au(e)}enterRestrictedMode(e){if(!this.cu){this.cu=!0,this.Iu=e||!1;const n=cc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Eu)}}enqueue(e){if(this.du(),this.cu)return new Promise(()=>{});const n=new vn;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.uu.push(e),this.Ru()))}async Ru(){if(this.uu.length!==0){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(e){if(!_i(e))throw e;te("AsyncQueue","Operation failed with retryable error: "+e)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(e){const n=this.au.then(()=>(this.Pu=!0,e().catch(r=>{this.hu=r,this.Pu=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw wn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Pu=!1,r))));return this.au=n,n}enqueueAfterDelay(e,n,r){this.du(),this.Tu.indexOf(e)>-1&&(n=0);const s=$l.createAndSchedule(this,e,n,r,i=>this.Vu(i));return this.lu.push(s),s}du(){this.hu&&le()}verifyOperationInProgress(){}async mu(){let e;do e=this.au,await e;while(e!==this.au)}fu(e){for(const n of this.lu)if(n.timerId===e)return!0;return!1}gu(e){return this.mu().then(()=>{this.lu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.lu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.mu()})}pu(e){this.Tu.push(e)}Vu(e){const n=this.lu.indexOf(e);this.lu.splice(n,1)}}class fs extends Ea{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new R0}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||yg(this),this._firestoreClient.terminate()}}function b0(t,e){const n=typeof t=="object"?t:wl(),r=typeof t=="string"?t:"(default)",s=la(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Yp("firestore");i&&A0(s,...i)}return s}function Wl(t){return t._firestoreClient||yg(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function yg(t){var e,n,r;const s=t._freezeSettings(),i=function(c,l,h,f){return new nI(c,l,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,gg(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new _0(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e){this._byteString=e}static fromBase64String(e){try{return new as(et.fromBase64String(e))}catch(n){throw new X(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new as(et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new X(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new X(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new X(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ie(this._lat,e._lat)||Ie(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P0=/^__.*__$/;class S0{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new nr(e,this.data,this.fieldMask,n,this.fieldTransforms):new vi(e,this.data,n,this.fieldTransforms)}}class vg{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new nr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Eg(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw le()}}class Jl{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.yu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get wu(){return this.settings.wu}Su(e){return new Jl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Su({path:r,Du:!1});return s.vu(e),s}Cu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Su({path:r,Du:!1});return s.yu(),s}Fu(e){return this.Su({path:void 0,Du:!0})}Mu(e){return Do(e,this.settings.methodName,this.settings.xu||!1,this.path,this.settings.Ou)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}yu(){if(this.path)for(let e=0;e<this.path.length;e++)this.vu(this.path.get(e))}vu(e){if(e.length===0)throw this.Mu("Document fields must not be empty");if(Eg(this.wu)&&P0.test(e))throw this.Mu('Document fields cannot begin and end with "__"')}}class C0{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ga(e)}Nu(e,n,r,s=!1){return new Jl({wu:e,methodName:n,Ou:r,path:Xe.emptyPath(),Du:!1,xu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Xl(t){const e=t._freezeSettings(),n=ga(t._databaseId);return new C0(t._databaseId,!!e.ignoreUndefinedProperties,n)}function k0(t,e,n,r,s,i={}){const o=t.Nu(i.merge||i.mergeFields?2:0,e,n,s);Zl("Data must be an object, but it was:",o,r);const c=wg(r,o);let l,h;if(i.merge)l=new Rt(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const g=Qc(e,p,n);if(!o.contains(g))throw new X(x.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Ig(f,g)||f.push(g)}l=new Rt(f),h=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,h=o.fieldTransforms;return new S0(new gt(c),l,h)}class Ta extends Gl{_toFieldTransform(e){if(e.wu!==2)throw e.wu===1?e.Mu(`${this._methodName}() can only appear at the top level of your update data`):e.Mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ta}}function O0(t,e,n,r){const s=t.Nu(1,e,n);Zl("Data must be an object, but it was:",s,r);const i=[],o=gt.empty();Pr(r,(l,h)=>{const f=eu(e,l,n);h=Qe(h);const p=s.Cu(f);if(h instanceof Ta)i.push(f);else{const g=Ai(h,p);g!=null&&(i.push(f),o.set(f,g))}});const c=new Rt(i);return new vg(o,c,s.fieldTransforms)}function N0(t,e,n,r,s,i){const o=t.Nu(1,e,n),c=[Qc(e,r,n)],l=[s];if(i.length%2!=0)throw new X(x.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)c.push(Qc(e,i[g])),l.push(i[g+1]);const h=[],f=gt.empty();for(let g=c.length-1;g>=0;--g)if(!Ig(h,c[g])){const E=c[g];let C=l[g];C=Qe(C);const N=o.Cu(E);if(C instanceof Ta)h.push(E);else{const O=Ai(C,N);O!=null&&(h.push(E),f.set(E,O))}}const p=new Rt(h);return new vg(f,p,o.fieldTransforms)}function V0(t,e,n,r=!1){return Ai(n,t.Nu(r?4:3,e))}function Ai(t,e){if(Tg(t=Qe(t)))return Zl("Unsupported field value:",e,t),wg(t,e);if(t instanceof Gl)return function(r,s){if(!Eg(s.wu))throw s.Mu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Mu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Du&&e.wu!==4)throw e.Mu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=Ai(c,s.Fu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Qe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return AI(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ze.fromDate(r);return{timestampValue:No(s.serializer,i)}}if(r instanceof ze){const i=new ze(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:No(s.serializer,i)}}if(r instanceof Ql)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof as)return{bytesValue:Um(s.serializer,r._byteString)};if(r instanceof _t){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Dl(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Yl)return function(o,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw c.Mu("VectorValues must only contain numeric values.");return kl(c.serializer,l)})}}}}}}(r,s);throw s.Mu(`Unsupported field value: ${va(r)}`)}(t,e)}function wg(t,e){const n={};return pm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Pr(t,(r,s)=>{const i=Ai(s,e.bu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Tg(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ze||t instanceof Ql||t instanceof as||t instanceof _t||t instanceof Gl||t instanceof Yl)}function Zl(t,e,n){if(!Tg(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=va(n);throw r==="an object"?e.Mu(t+" a custom object"):e.Mu(t+" "+r)}}function Qc(t,e,n){if((e=Qe(e))instanceof wa)return e._internalPath;if(typeof e=="string")return eu(t,e);throw Do("Field path arguments must be of type string or ",t,!1,void 0,n)}const D0=new RegExp("[~\\*/\\[\\]]");function eu(t,e,n){if(e.search(D0)>=0)throw Do(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new wa(...e.split("."))._internalPath}catch{throw Do(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Do(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new X(x.INVALID_ARGUMENT,c+t+l)}function Ig(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new _t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new x0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(tu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class x0 extends Ag{data(){return super.data()}}function tu(t,e){return typeof e=="string"?eu(t,e):e instanceof wa?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M0(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new X(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class nu{}class L0 extends nu{}function F0(t,e,...n){let r=[];e instanceof nu&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof ru).length,c=i.filter(l=>l instanceof Ia).length;if(o>1||o>0&&c>0)throw new X(x.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Ia extends L0{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ia(e,n,r)}_apply(e){const n=this._parse(e);return Rg(e._query,n),new ds(e.firestore,e.converter,Bc(e._query,n))}_parse(e){const n=Xl(e.firestore);return function(i,o,c,l,h,f,p){let g;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new X(x.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Jd(p,f);const E=[];for(const C of p)E.push(Yd(l,i,C));g={arrayValue:{values:E}}}else g=Yd(l,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Jd(p,f),g=V0(c,o,p,f==="in"||f==="not-in");return qe.create(h,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function U0(t,e,n){const r=e,s=tu("where",t);return Ia._create(s,r,n)}class ru extends nu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ru(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:qt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)Rg(o,l),o=Bc(o,l)}(e._query,n),new ds(e.firestore,e.converter,Bc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Yd(t,e,n){if(typeof(n=Qe(n))=="string"){if(n==="")throw new X(x.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Im(e)&&n.indexOf("/")!==-1)throw new X(x.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ne.fromString(n));if(!ie.isDocumentKey(r))throw new X(x.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return yd(t,new ie(r))}if(n instanceof _t)return yd(t,n._key);throw new X(x.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${va(n)}.`)}function Jd(t,e){if(!Array.isArray(t)||t.length===0)throw new X(x.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Rg(t,e){const n=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new X(x.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new X(x.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class B0{convertValue(e,n="none"){switch(Ir(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Tr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw le()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Pr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Be(o.doubleValue));return new Yl(i)}convertGeoPoint(e){return new Ql(Be(e.latitude),Be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Rl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ii(e));default:return null}}convertTimestamp(e){const n=Xn(e);return new ze(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ne.fromString(e);Ce(Km(r));const s=new oi(r.get(1),r.get(3)),i=new ie(r.popFirst(5));return s.isEqual(n)||wn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j0(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class bg extends Ag{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new mo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(tu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class mo extends bg{data(e={}){return super.data(e)}}class $0{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Us(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new mo(this._firestore,this._userDataWriter,r.key,r,new Us(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new X(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new mo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Us(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new mo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Us(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:q0(c.type),doc:l,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function q0(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return le()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pg(t){t=In(t,_t);const e=In(t.firestore,fs);return w0(Wl(e),t._key).then(n=>W0(e,t,n))}class Sg extends B0{constructor(e){super(),this.firestore=e}convertBytes(e){return new as(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new _t(this.firestore,null,n)}}function Cg(t){t=In(t,ds);const e=In(t.firestore,fs),n=Wl(e),r=new Sg(e);return M0(t._query),T0(n,t._query).then(s=>new $0(e,r,t,s))}function H0(t,e,n,...r){t=In(t,_t);const s=In(t.firestore,fs),i=Xl(s);let o;return o=typeof(e=Qe(e))=="string"||e instanceof wa?N0(i,"updateDoc",t._key,e,n,r):O0(i,"updateDoc",t._key,e),su(s,[o.toMutation(t._key,jt.exists(!0))])}function K0(t){return su(In(t.firestore,fs),[new Ol(t._key,jt.none())])}function z0(t,e){const n=In(t.firestore,fs),r=Ii(t),s=j0(t.converter,e);return su(n,[k0(Xl(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,jt.exists(!1))]).then(()=>r)}function su(t,e){return function(r,s){const i=new vn;return r.asyncQueue.enqueueAndForget(async()=>c0(await E0(r),s,i)),i.promise}(Wl(t),e)}function W0(t,e,n){const r=n.docs.get(e._key),s=new Sg(t);return new bg(t,s,e._key,r,new Us(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){ls=s})(br),Er(new Yn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new fs(new jT(r.getProvider("auth-internal")),new KT(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new X(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new oi(h.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Jt(fd,"4.7.0",e),Jt(fd,"4.7.0","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kg="firebasestorage.googleapis.com",G0="storageBucket",Q0=2*60*1e3,Y0=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an extends on{constructor(e,n,r=0){super(uc(e),`Firebase Storage: ${n} (${uc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,an.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return uc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var sn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(sn||(sn={}));function uc(t){return"storage/"+t}function J0(){const t="An unknown error occurred, please check the error payload for server response.";return new an(sn.UNKNOWN,t)}function X0(){return new an(sn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Z0(){return new an(sn.CANCELED,"User canceled the upload/download.")}function eR(t){return new an(sn.INVALID_URL,"Invalid URL '"+t+"'.")}function tR(t){return new an(sn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Xd(t){return new an(sn.INVALID_ARGUMENT,t)}function Og(){return new an(sn.APP_DELETED,"The Firebase app was deleted.")}function nR(t){return new an(sn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Ft.makeFromUrl(e,n)}catch{return new Ft(e,"")}if(r.path==="")return r;throw tR(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(Z){Z.path.charAt(Z.path.length-1)==="/"&&(Z.path_=Z.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function h(Z){Z.path_=decodeURIComponent(Z.path)}const f="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",E=new RegExp(`^https?://${p}/${f}/b/${s}/o${g}`,"i"),C={bucket:1,path:3},N=n===kg?"(?:storage.googleapis.com|storage.cloud.google.com)":n,O="([^?#]*)",$=new RegExp(`^https?://${N}/${s}/${O}`,"i"),U=[{regex:c,indices:l,postModify:i},{regex:E,indices:C,postModify:h},{regex:$,indices:{bucket:1,path:2},postModify:h}];for(let Z=0;Z<U.length;Z++){const fe=U[Z],J=fe.regex.exec(e);if(J){const I=J[fe.indices.bucket];let y=J[fe.indices.path];y||(y=""),r=new Ft(I,y),fe.postModify(r);break}}if(r==null)throw eR(e);return r}}class rR{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sR(t,e,n){let r=1,s=null,i=null,o=!1,c=0;function l(){return c===2}let h=!1;function f(...O){h||(h=!0,e.apply(null,O))}function p(O){s=setTimeout(()=>{s=null,t(E,l())},O)}function g(){i&&clearTimeout(i)}function E(O,...$){if(h){g();return}if(O){g(),f.call(null,O,...$);return}if(l()||o){g(),f.call(null,O,...$);return}r<64&&(r*=2);let U;c===1?(c=2,U=0):U=(r+Math.random())*1e3,p(U)}let C=!1;function N(O){C||(C=!0,g(),!h&&(s!==null?(O||(c=2),clearTimeout(s),p(0)):O||(c=1)))}return p(0),i=setTimeout(()=>{o=!0,N(!0)},n),N}function iR(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oR(t){return t!==void 0}function Zd(t,e,n,r){if(r<e)throw Xd(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Xd(`Invalid value for '${t}'. Expected ${n} or less.`)}function aR(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var xo;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(xo||(xo={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cR(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lR{constructor(e,n,r,s,i,o,c,l,h,f,p,g=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=h,this.progressCallback_=f,this.connectionFactory_=p,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((E,C)=>{this.resolve_=E,this.reject_=C,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Xi(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=c=>{const l=c.loaded,h=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,h)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const c=i.getErrorCode()===xo.NO_ERROR,l=i.getStatus();if(!c||cR(l,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===xo.ABORT;r(!1,new Xi(!1,null,f));return}const h=this.successCodes_.indexOf(l)!==-1;r(!0,new Xi(h,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());oR(l)?i(l):i()}catch(l){o(l)}else if(c!==null){const l=J0();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(s.canceled){const l=this.appDelete_?Og():Z0();o(l)}else{const l=X0();o(l)}};this.canceled_?n(!1,new Xi(!1,null,!0)):this.backoffId_=sR(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&iR(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Xi{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function uR(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function hR(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function dR(t,e){e&&(t["X-Firebase-GMPID"]=e)}function fR(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function pR(t,e,n,r,s,i,o=!0){const c=aR(t.urlParams),l=t.url+c,h=Object.assign({},t.headers);return dR(h,e),uR(h,n),hR(h,i),fR(h,r),new lR(l,t.method,h,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mR(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function gR(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e,n){this._service=e,n instanceof Ft?this._location=n:this._location=Ft.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Mo(e,n)}get root(){const e=new Ft(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return gR(this._location.path)}get storage(){return this._service}get parent(){const e=mR(this._location.path);if(e===null)return null;const n=new Ft(this._location.bucket,e);return new Mo(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw nR(e)}}function ef(t,e){const n=e==null?void 0:e[G0];return n==null?null:Ft.makeFromBucketSpec(n,t)}function _R(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:Zp(s,t.app.options.projectId))}class yR{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=kg,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Q0,this._maxUploadRetryTime=Y0,this._requests=new Set,s!=null?this._bucket=Ft.makeFromBucketSpec(s,this._host):this._bucket=ef(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ft.makeFromBucketSpec(this._url,e):this._bucket=ef(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Zd("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Zd("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Mo(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new rR(Og());{const o=pR(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const tf="@firebase/storage",nf="0.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ng="storage";function vR(t=wl(),e){t=Qe(t);const r=la(t,Ng).getImmediate({identifier:e}),s=Yp("storage");return s&&ER(r,...s),r}function ER(t,e,n,r={}){_R(t,e,n,r)}function wR(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new yR(n,r,s,e,br)}function TR(){Er(new Yn(Ng,wR,"PUBLIC").setMultipleInstances(!0)),Jt(tf,nf,""),Jt(tf,nf,"esm2017")}TR();const IR={apiKey:"AIzaSyChnM7DSA1ZA0wiTGCBhuURfbOWGq3w83M",authDomain:"vite-tailwind-a1e16.firebaseapp.com",projectId:"vite-tailwind-a1e16",storageBucket:"vite-tailwind-a1e16.appspot.com",messagingSenderId:"731530837766",appId:"1:731530837766:web:0f0f848656ddd87d126887"},Vg=nm(IR),Cr=b0(Vg);vR(Vg);const AR=async()=>{try{return(await Cg(zl(Cr,"Products"))).docs.map(n=>({id:n.id,...n.data()}))}catch(t){throw console.error("Error fetching products:",t),t}},RR=async t=>{try{const e=Ii(Cr,"Products",t),n=await Pg(e);return n.exists()?{id:n.id,...n.data()}:(console.error("No such product!"),null)}catch(e){throw console.error("Error fetching product by ID:",e),e}},bR=async t=>{try{const e=zl(Cr,"Products"),n=F0(e,U0("name","==",t)),r=await Cg(n);return r.empty?(console.error("No products found with the given name!"),[]):r.docs.map(i=>({id:i.id,...i.data()}))}catch(e){throw console.error("Error fetching product by name:",e),e}},PR=async t=>{try{return(await z0(zl(Cr,"Products"),t)).id}catch(e){throw console.error("Error adding product:",e),e}},SR=async(t,e)=>{try{const n=Ii(Cr,"Products",t);await H0(n,e)}catch(n){throw console.error("Error updating product:",n),n}},CR=async t=>{try{const e=Ii(Cr,"Products",t);await K0(e)}catch(e){throw console.error("Error deleting product:",e),e}},Aa={getAllProducts:AR,getProductById:RR,getProductByName:bR,addProduct:PR,updateProduct:SR,deleteProduct:CR},kR={__name:"EffectTag",props:{effect:{type:String,required:!0}},setup(t){const e=aa(),n=r=>{e.push({name:"EffectView",params:{effect:r}})};return(r,s)=>(De(),He("span",{class:"inline bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 cursor-pointer",onClick:s[0]||(s[0]=i=>n(t.effect))}," #"+Vt(t.effect),1))}},OR={class:"relative"},NR={key:0,class:"absolute top-3 left-3 bg-orange-600 text-white px-2 py-1 text-xs font-bold rounded-md"},VR=["src"],DR={class:"px-4 py-3 flex flex-col space-y-2"},xR={class:"text-2xl font-bold"},MR={class:"text-lg font-semibold text-gray-700"},LR={class:"flex flex-wrap gap-1"},FR={__name:"ProductCard",props:{product:{type:Object,required:!0}},setup(t){const e=t,n=aa(),r=o=>`฿${o.toFixed(2)}`,s=kt(()=>{const o=e.product.creationTime.toDate(),c=new Date;return c.setDate(c.getDate()-14),o>=c}),i=o=>{n.push({name:"product",params:{id:o}})};return(o,c)=>(De(),He("div",{class:"rounded-lg shadow-md overflow-hidden cursor-pointer",onClick:c[0]||(c[0]=l=>i(t.product.id))},[z("div",OR,[s.value?(De(),He("div",NR,"NEW")):na("",!0),z("img",{src:t.product.image,alt:"Product Image",class:"w-full h-auto"},null,8,VR)]),z("div",DR,[z("div",xR,Vt(t.product.name),1),z("div",MR,Vt(r(t.product.price)),1),z("div",LR,[(De(!0),He(It,null,Xo(t.product.effects.slice(0,4),(l,h)=>(De(),ta(kR,{key:h,effect:l},null,8,["effect"]))),128))])])]))}},UR={ref:"scrollContainer"},BR={class:"container mx-auto pb-10"},jR=z("h2",{class:"text-4xl font-bold py-5 my-6"},"Products",-1),$R={class:"grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"},qR={__name:"HomeView",setup(t){const e=Dt([]);return Jo(async()=>{try{e.value=await Aa.getAllProducts()}catch(n){console.error("Error fetching products:",n)}}),(n,r)=>(De(),He("div",UR,[z("div",BR,[jR,z("div",$R,[(De(!0),He(It,null,Xo(e.value,s=>(De(),ta(FR,{key:s.id,product:s},null,8,["product"]))),128))])])],512))}},Ra=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},HR={},KR={class:"container mx-auto px-4 py-6"},zR=Sp('<h1 class="text-3xl font-bold mb-6">About Us</h1><section class="bg-white shadow-lg rounded-lg p-6 mb-6"><h2 class="text-2xl font-semibold mb-4">Our Mission</h2><p class="text-lg"> Our mission is to provide top-notch products and services that enhance the lives of our customers. We are committed to innovation, quality, and customer satisfaction. Our goal is to be a trusted partner in your journey towards excellence. </p></section><section class="bg-white shadow-lg rounded-lg p-6"><h2 class="text-2xl font-semibold mb-4">Contact Us</h2><ul class="list-disc pl-6"><li class="mb-2"><span class="font-medium">LINE ID:</span> @yourlineid </li><li><span class="font-medium">Phone:</span> +1-234-567-8900 </li></ul></section>',3),WR=[zR];function GR(t,e){return De(),He("div",KR,WR)}const QR=Ra(HR,[["render",GR]]),YR={};function JR(t,e){return De(),He("h1",null,"Effects")}const XR=Ra(YR,[["render",JR]]),ZR="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAHE0lEQVR4nO2deWgTWRjAv3qf9UQQFStdV9aKrFsXrAdeKKiI4oEiaEVFUf8RUdw/RBBUBE/aVRD8xwtFRfFCVutqZ5JUjUcP27S1tmuvtbe26ZG2ybd8zya03SaZ1MzMm+T94IN2Mmne935p3jVvAiAQCAQCgUAgEAgEAoFAIBB0FxNMAhkOgAxJIIENZLCDDGjQsLflkMRyoty4xQTTQYZnHFQaqhxmkGAWcMMb6A0ynAcJXBxUDmoSlKsEf7LcdcUCw0GC57pXiKybiL9BhmH6VD7Z/14A/StC1lWCBB+gj/YC6GNH7+RlTkKCRG0r3wy/h9VnvuxXANVFrHYCxEcPdiHiqTaV/wJ+0f0dJ3MamowTZPhD90RlTiMZ9mshIImLZGUOQ4InWgjI1SO5HnIPHPNqDM5Km4VrbGtw28dtuDNvJ+7K28V+Xmtbi7PTZrNz6FydBGRrIaBOi2T6mPrgooxFeKL4BCZ/Tca61jpUCp1LzzlZfBIXZyzGvua+Wkmo00KAaglEyBE4P30+Xi2/irWttYorXImQa+XXcEHGAvYaqkowooBepl64KWcTZjdko9rkNORgfE48e00hQAZc8mEJqxStyW3IxaUflobvf8CIlBF4q+IW6s3tits48uXI8BJAPZnCpkLkhaKmIpyTNic8BKzKWoWNzkbkDYfLgRuyN4S2AOqvO9GJvOJCF+74uCM0BdDgqdXVirzjRCeus60LLQFT3k7Bemc9GoUmZxNOez8tNAQMtAzUpH8fbKhrTGU3vICjhUfRqBwrOmZsAVHWKPbvbFQcLgdGW6ONKyCxNBGNzrnSc8YUEGmJRHur3Wdy9lY73q+6jzUtNT57JY+rH2NBY0GH592ruud1hpQGVo+qH2GLq8VzTPom4c2Km/8LOu4L6jwMSRliPAHUlfPHattqdu7c9Llez6HpaDpnWMowj9DlmcvZsRmpM7DZ1dzhfOrqjn41mj1+8J+D7Nidyjs+y0qP+yKgARovAmhK2R8xb2PYuaNejvJ6ztbcrZ6/mdeYx46Nez3Oc2xf/r4O51e2VHoeI8EEdQR8lZX+E3xxo+KG8QQomeGMCYIAmt+njyilAvZ82oMX/r3gifbP9canxk/GEjDAPEDRlENMEAS4n1/qKFUk4EnNE+zOFMVgy2DjCBj/eryixGKCJIBiYcZCJt2fgEtll9g72h3VLdWKyvqT9SfjCJj6bqomAqKsUawBdz9+pPBIwG1AP3M/tNRa/JZ1+vvpxhFAFauFgGhrNBY7ij0LKrTMSN3TQARQUFvgD8VzQzwIGPt6rGYCiAdVDzyL7e1Xt7oSsCxzGW7/uN0Thz8fVrQ+McE6wTgCepp6YoOzQTMBBPVuOpcjWI0wjTV6m3obRwDFu7p3mgpocjZh7PtYVQSk2lOVVT5PAk4Vn1IsIEKOYCNddwxPGY4bczay7p9SAe4rHdp3F7sSMMgyqMNr0VqF++9643TxaeMJoIug/BHb6R3bOahHsztvt+d3anCJiW8mem3sr5Rd8Zy/OXczO0ZvBl+vk1CS4LOcdMmj4QTQ9Zn5jfk+E3tY9RDjUuOYiM5x6PMhdo6twcb6+O55HYKmDqhS7lbe9TqPT2+AjPoM9vuX5i9s/qir16HjZc1lXstII/qArqbjRQDF3vy9aHS25G5RXvm8Cehv7o8ljhI0Kpn1mcp7PzwKoFifvR6NiAtdOC99XmCVz6MAJfPtPOKv4TaUgKEpQ1kX0ShYai1sf0LICKCY9GYS643wTkFjARsYdjdPbgW4Z0nLm8uRV0ocJZ4xRkgKoKBJLerb80ZZcxlOfjv5xyrfCALcbQIPewPaX0XhnhYJCwHuiM+Jx4rmCtSTdHs6mz4PWl5GEgBtO2XOlJzRZc9AUk1SYNf8hKIAaAva33u86LhmjTT181XZqGdUAdAWtKeXdtFcL7+OX1u+Br3i6eIuGp2rloPRBUCnlTVaDKfVrotfLqK1zvpDmzxodjRojW04CIAuggZJZ0vOBlz550vPs8lB1csY6gKgbQVNaVtBo++VWSu1K184CAAZWPfRH5fLLrPlTU3LFi4CStsuRewK2oNMO/B1KVs4CIi0RLL5+s7QMbrIih7XrXyqI0Gt3gLiUuO6nEKemTZT3zeHBN/UFyBDjt4CVmSt8FQ8rTPQHmTVb0OjTIBNCwFP9U400hKJ+wv2MxEBr9mqK+AvLQQc4CJZmcvYp76AFzCRg0SRy5DgZ9CE8LhNPfJ541bCBL+CBE4OksbwvHUxQffP1ztxmZtIAJ2+uEF8FEl63b6eoC8vCO8beT/T7wscOn6RQ2JY3c5eYu1fAjyHXsANZpgCMjzQvXJk1eMpJMNvwC00TqC7iNONrL9/BZQmtzoGdYLKnsVGuJQT5SYQCAQCgUAgEAgEAoFAIBBA9/gPC3ph9PmbIBIAAAAASUVORK5CYII=";async function eb(t){try{const e=Ii(Cr,"Effects",t),n=await Pg(e);return n.exists()?{id:n.id,...n.data()}:(console.error("No such effect!"),null)}catch(e){throw console.error("Error fetching effect by ID:",e),e}}const tb={getEffectById:eb},nb={class:"flex items-center p-4 border rounded-lg shadow-sm"},rb={class:"flex-shrink-0 w-12 h-12 mr-4"},sb=["src"],ib={class:"flex-1"},ob={class:"text-lg font-medium"},ab={class:"text-sm text-gray-600 mt-1"},cb={__name:"EffectCard",props:{effect:{type:String,required:!0},description:{type:String,required:!0},image:{type:String,required:!0}},setup(t){return(e,n)=>(De(),He("div",nb,[z("div",rb,[z("img",{src:t.image,alt:"Effect Icon",class:"w-full h-full object-cover rounded-full"},null,8,sb)]),z("div",ib,[z("p",ob,Vt(t.effect),1),z("p",ab,Vt(t.description),1)])]))}},lb={class:"container mx-auto px-4 py-6"},ub={key:0,class:"max-w-auto mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full"},hb={class:"md:flex flex-1"},db={class:"md:w-1/2"},fb=["src"],pb={class:"md:w-1/2 p-4 flex flex-col justify-between"},mb={class:"text-2xl md:text-3xl font-bold mb-4"},gb={class:"text-xl md:text-2xl font-bold mb-4"},_b={class:"mb-4"},yb={class:"grid grid-cols-2 gap-4 mt-6"},vb=z("div",{class:"mt-6 md:w-1/2"},[z("a",{href:"https://www.google.com",target:"_blank",class:"flex items-center bg-green-500 text-white text-xl px-4 py-2 rounded-md hover:bg-green-600"},[z("img",{src:ZR,alt:"LINE Icon",class:"w-8 h-8 mr-4"}),z("span",null,"Order on LINE")])],-1),Eb={__name:"ProductView",setup(t){const e=aw(),n=aa(),r=Dt({}),s=Dt([]);Jo(async()=>{try{const o=await Aa.getProductById(e.params.id);if(o){r.value=o;for(const c of r.value.effects){const l=await tb.getEffectById(c);l?s.value.push(l):console.error("Effect does not exist in Effects collection, or document name does not match effect name.")}}else console.error("Product not found")}catch(o){console.error("Error fetching product:",o)}});const i=()=>{n.push("/")};return(o,c)=>(De(),He("div",lb,[z("button",{onClick:i,class:"text-blue-500 hover:underline mb-4"},"← Back to Home"),r.value.id?(De(),He("div",ub,[z("div",hb,[z("div",db,[z("img",{src:r.value.image,alt:"Product Image",class:"w-full h-auto"},null,8,fb)]),z("div",pb,[z("div",null,[z("h1",mb,Vt(r.value.name),1),z("h2",gb,"฿"+Vt(r.value.price),1),z("p",_b,Vt(r.value.description),1),z("div",yb,[(De(!0),He(It,null,Xo(s.value,(l,h)=>(De(),ta(cb,{key:h,effect:l.effect,description:l.description,image:l.image},null,8,["effect","description","image"]))),128))])]),vb])])])):na("",!0)]))}},cn=t=>(rp("data-v-7b6485e6"),t=t(),sp(),t),wb={class:"container mx-auto px-4 py-6"},Tb=cn(()=>z("h1",{class:"text-3xl font-bold mb-6"},"Create New Product",-1)),Ib={class:"mb-4"},Ab=cn(()=>z("label",{for:"name",class:"block text-gray-700 font-medium mb-2"},"Product Name",-1)),Rb={class:"mb-4"},bb=cn(()=>z("label",{for:"price",class:"block text-gray-700 font-medium mb-2"},"Price (฿)",-1)),Pb={class:"mb-4"},Sb=cn(()=>z("label",{for:"description",class:"block text-gray-700 font-medium mb-2"},"Description",-1)),Cb={class:"mb-4"},kb=cn(()=>z("label",{for:"effects",class:"block text-gray-700 font-medium mb-2"},"Effects (Comma Separated)",-1)),Ob=cn(()=>z("p",{class:"text-gray-500 text-sm mt-1"},'Enter effects separated by commas (e.g., "Anti-aging, Hydrating")',-1)),Nb={class:"mb-4"},Vb={for:"stocked",class:"inline-flex items-center"},Db=cn(()=>z("span",{class:"ml-2 text-gray-700"},"In Stock",-1)),xb={class:"mb-4"},Mb=cn(()=>z("label",{for:"stock",class:"block text-gray-700 font-medium mb-2"},"Stock Quantity",-1)),Lb={class:"mb-4"},Fb=cn(()=>z("label",{for:"image",class:"block text-gray-700 font-medium mb-2"},"Image URL",-1)),Ub=cn(()=>z("button",{type:"submit",class:"bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"}," Create Product ",-1)),Bb={__name:"ManageProductsView",setup(t){const e=Dt({name:"",price:"",description:"",effects:"",stocked:!1,stock:"",image:""}),n=async()=>{try{const r=e.value.effects.split(",").map(i=>i.trim()),s={...e.value,effects:r};await Aa.addProduct(s),e.value={name:"",price:"",description:"",effects:"",stocked:!1,stock:"",image:""},alert("Product created successfully!")}catch(r){console.error("Error creating product:",r)}};return(r,s)=>(De(),He("div",wb,[Tb,z("form",{onSubmit:Vp(n,["prevent"])},[z("div",Ib,[Ab,Wt(z("input",{id:"name","onUpdate:modelValue":s[0]||(s[0]=i=>e.value.name=i),type:"text",class:"w-full px-3 py-2 border border-gray-300 rounded-md",required:""},null,512),[[fn,e.value.name]])]),z("div",Rb,[bb,Wt(z("input",{id:"price","onUpdate:modelValue":s[1]||(s[1]=i=>e.value.price=i),type:"number",step:"0.01",class:"w-full px-3 py-2 border border-gray-300 rounded-md",required:""},null,512),[[fn,e.value.price]])]),z("div",Pb,[Sb,Wt(z("textarea",{id:"description","onUpdate:modelValue":s[2]||(s[2]=i=>e.value.description=i),class:"w-full px-3 py-2 border border-gray-300 rounded-md",rows:"4"},null,512),[[fn,e.value.description]])]),z("div",Cb,[kb,Wt(z("input",{id:"effects","onUpdate:modelValue":s[3]||(s[3]=i=>e.value.effects=i),type:"text",class:"w-full px-3 py-2 border border-gray-300 rounded-md"},null,512),[[fn,e.value.effects]]),Ob]),z("div",Nb,[z("label",Vb,[Wt(z("input",{id:"stocked","onUpdate:modelValue":s[4]||(s[4]=i=>e.value.stocked=i),type:"checkbox",class:"form-checkbox"},null,512),[[Yv,e.value.stocked]]),Db])]),z("div",xb,[Mb,Wt(z("input",{id:"stock","onUpdate:modelValue":s[5]||(s[5]=i=>e.value.stock=i),type:"number",class:"w-full px-3 py-2 border border-gray-300 rounded-md"},null,512),[[fn,e.value.stock]])]),z("div",Lb,[Fb,Wt(z("input",{id:"image","onUpdate:modelValue":s[6]||(s[6]=i=>e.value.image=i),type:"url",class:"w-full px-3 py-2 border border-gray-300 rounded-md"},null,512),[[fn,e.value.image]])]),Ub],32)]))}},jb=Ra(Bb,[["__scopeId","data-v-7b6485e6"]]);function iu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Dg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $b=Dg,xg=new pi("auth","Firebase",Dg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo=new vl("@firebase/auth");function qb(t,...e){Lo.logLevel<=ge.WARN&&Lo.warn(`Auth (${br}): ${t}`,...e)}function go(t,...e){Lo.logLevel<=ge.ERROR&&Lo.error(`Auth (${br}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(t,...e){throw ou(t,...e)}function en(t,...e){return ou(t,...e)}function Mg(t,e,n){const r=Object.assign(Object.assign({},$b()),{[e]:n});return new pi("auth","Firebase",r).create(e,{appName:t.name})}function Gn(t){return Mg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ou(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return xg.create(t,...e)}function ce(t,e,...n){if(!t)throw ou(e,...n)}function mn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw go(e),new Error(e)}function An(t,e){t||mn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Hb(){return rf()==="http:"||rf()==="https:"}function rf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Hb()||yw()||"connection"in navigator)?navigator.onLine:!0}function zb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,n){this.shortDelay=e,this.longDelay=n,An(n>e,"Short delay should be less than long delay!"),this.isMobile=gw()||vw()}get(){return Kb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(t,e){An(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gb=new Ri(3e4,6e4);function kr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function rr(t,e,n,r,s={}){return Fg(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=mi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Lg.fetch()(Ug(t,t.config.apiHost,n,c),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function Fg(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Wb),e);try{const s=new Yb(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Zi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zi(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Zi(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Zi(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Mg(t,f,h);Ht(t,f)}}catch(s){if(s instanceof on)throw s;Ht(t,"network-request-failed",{message:String(s)})}}async function ba(t,e,n,r,s={}){const i=await rr(t,e,n,r,s);return"mfaPendingCredential"in i&&Ht(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Ug(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?au(t.config,s):`${t.config.apiScheme}://${s}`}function Qb(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Yb{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(en(this.auth,"network-request-failed")),Gb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Zi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=en(t,e,r);return s.customData._tokenResponse=n,s}function sf(t){return t!==void 0&&t.enterprise!==void 0}class Jb{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Qb(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Xb(t,e){return rr(t,"GET","/v2/recaptchaConfig",kr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zb(t,e){return rr(t,"POST","/v1/accounts:delete",e)}async function Bg(t,e){return rr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ys(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function eP(t,e=!1){const n=Qe(t),r=await n.getIdToken(e),s=cu(r);ce(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ys(hc(s.auth_time)),issuedAtTime:Ys(hc(s.iat)),expirationTime:Ys(hc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function hc(t){return Number(t)*1e3}function cu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return go("JWT malformed, contained fewer than 3 sections"),null;try{const s=Gp(n);return s?JSON.parse(s):(go("Failed to decode base64 JWT payload"),null)}catch(s){return go("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function of(t){const e=cu(t);return ce(e,"internal-error"),ce(typeof e.exp<"u","internal-error"),ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ui(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof on&&tP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function tP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ys(this.lastLoginAt),this.creationTime=Ys(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await ui(t,Bg(n,{idToken:r}));ce(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?jg(i.providerUserInfo):[],c=sP(t.providerData,o),l=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),f=l?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Jc(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function rP(t){const e=Qe(t);await Fo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function sP(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function jg(t){return t.map(e=>{var{providerId:n}=e,r=iu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iP(t,e){const n=await Fg(t,{},async()=>{const r=mi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Ug(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Lg.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function oP(t,e){return rr(t,"POST","/v2/accounts:revokeToken",kr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ce(e.idToken,"internal-error"),ce(typeof e.idToken<"u","internal-error"),ce(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):of(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ce(e.length!==0,"internal-error");const n=of(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ce(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await iP(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Gr;return r&&(ce(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ce(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ce(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Gr,this.toJSON())}_performRefresh(){return mn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(t,e){ce(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class gn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=iu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new nP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Jc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ui(this,this.stsTokenManager.getToken(this.auth,e));return ce(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return eP(this,e)}reload(){return rP(this)}_assign(e){this!==e&&(ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new gn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Fo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(pn(this.auth.app))return Promise.reject(Gn(this.auth));const e=await this.getIdToken();return await ui(this,Zb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,l,h,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,E=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(c=n.tenantId)!==null&&c!==void 0?c:void 0,O=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,$=(h=n.createdAt)!==null&&h!==void 0?h:void 0,j=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:U,emailVerified:Z,isAnonymous:fe,providerData:J,stsTokenManager:I}=n;ce(U&&I,e,"internal-error");const y=Gr.fromJSON(this.name,I);ce(typeof U=="string",e,"internal-error"),Vn(p,e.name),Vn(g,e.name),ce(typeof Z=="boolean",e,"internal-error"),ce(typeof fe=="boolean",e,"internal-error"),Vn(E,e.name),Vn(C,e.name),Vn(N,e.name),Vn(O,e.name),Vn($,e.name),Vn(j,e.name);const T=new gn({uid:U,auth:e,email:g,emailVerified:Z,displayName:p,isAnonymous:fe,photoURL:C,phoneNumber:E,tenantId:N,stsTokenManager:y,createdAt:$,lastLoginAt:j});return J&&Array.isArray(J)&&(T.providerData=J.map(A=>Object.assign({},A))),O&&(T._redirectEventId=O),T}static async _fromIdTokenResponse(e,n,r=!1){const s=new Gr;s.updateFromServerResponse(n);const i=new gn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Fo(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ce(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?jg(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Gr;c.updateFromIdToken(r);const l=new gn({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Jc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const af=new Map;function _n(t){An(t instanceof Function,"Expected a class definition");let e=af.get(t);return e?(An(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,af.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}$g.type="NONE";const cf=$g;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(t,e,n){return`firebase:${t}:${e}:${n}`}class Qr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=_o(this.userKey,s.apiKey,i),this.fullPersistenceKey=_o("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?gn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Qr(_n(cf),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||_n(cf);const o=_o(r,e.config.apiKey,e.name);let c=null;for(const h of n)try{const f=await h._get(o);if(f){const p=gn._fromJSON(e,f);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Qr(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new Qr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Gg(e))return"Blackberry";if(Qg(e))return"Webos";if(Hg(e))return"Safari";if((e.includes("chrome/")||Kg(e))&&!e.includes("edge/"))return"Chrome";if(Wg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function qg(t=ct()){return/firefox\//i.test(t)}function Hg(t=ct()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Kg(t=ct()){return/crios\//i.test(t)}function zg(t=ct()){return/iemobile/i.test(t)}function Wg(t=ct()){return/android/i.test(t)}function Gg(t=ct()){return/blackberry/i.test(t)}function Qg(t=ct()){return/webos/i.test(t)}function lu(t=ct()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function aP(t=ct()){var e;return lu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function cP(){return Ew()&&document.documentMode===10}function Yg(t=ct()){return lu(t)||Wg(t)||Qg(t)||Gg(t)||/windows phone/i.test(t)||zg(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jg(t,e=[]){let n;switch(t){case"Browser":n=lf(ct());break;case"Worker":n=`${lf(ct())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${br}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uP(t,e={}){return rr(t,"GET","/v2/passwordPolicy",kr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hP=6;class dP{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:hP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fP{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new uf(this),this.idTokenSubscription=new uf(this),this.beforeStateQueue=new lP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=_n(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Qr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Bg(this,{idToken:e}),r=await gn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(pn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Fo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=zb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(pn(this.app))return Promise.reject(Gn(this));const n=e?Qe(e):null;return n&&ce(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return pn(this.app)?Promise.reject(Gn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return pn(this.app)?Promise.reject(Gn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_n(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await uP(this),n=new dP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new pi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await oP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&_n(e)||this._popupRedirectResolver;ce(n,this,"argument-error"),this.redirectPersistenceManager=await Qr.create(this,[_n(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ce(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Jg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&qb(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ps(t){return Qe(t)}class uf{constructor(e){this.auth=e,this.observer=null,this.addObserver=Sw(n=>this.observer=n)}get next(){return ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function pP(t){Pa=t}function Xg(t){return Pa.loadJS(t)}function mP(){return Pa.recaptchaEnterpriseScript}function gP(){return Pa.gapiScript}function _P(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const yP="recaptcha-enterprise",vP="NO_RECAPTCHA";class EP{constructor(e){this.type=yP,this.auth=ps(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{Xb(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new Jb(l);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;sf(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(vP)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&sf(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=mP();l.length!==0&&(l+=c),Xg(l).then(()=>{s(c,i,o)}).catch(h=>{o(h)})}}).catch(c=>{o(c)})})}}async function hf(t,e,n,r=!1){const s=new EP(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function df(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await hf(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await hf(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wP(t,e){const n=la(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ro(i,e??{}))return s;Ht(s,"already-initialized")}return n.initialize({options:e})}function TP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(_n);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function IP(t,e,n){const r=ps(t);ce(r._canInitEmulator,r,"emulator-config-failed"),ce(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Zg(e),{host:o,port:c}=AP(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),RP()}function Zg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function AP(t){const e=Zg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:ff(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:ff(o)}}}function ff(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function RP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return mn("not implemented")}_getIdTokenResponse(e){return mn("not implemented")}_linkToIdToken(e,n){return mn("not implemented")}_getReauthenticationResolver(e){return mn("not implemented")}}async function bP(t,e){return rr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PP(t,e){return ba(t,"POST","/v1/accounts:signInWithPassword",kr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SP(t,e){return ba(t,"POST","/v1/accounts:signInWithEmailLink",kr(t,e))}async function CP(t,e){return ba(t,"POST","/v1/accounts:signInWithEmailLink",kr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi extends uu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new hi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new hi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return df(e,n,"signInWithPassword",PP);case"emailLink":return SP(e,{email:this._email,oobCode:this._password});default:Ht(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return df(e,r,"signUpPassword",bP);case"emailLink":return CP(e,{idToken:n,email:this._email,oobCode:this._password});default:Ht(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yr(t,e){return ba(t,"POST","/v1/accounts:signInWithIdp",kr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kP="http://localhost";class Ar extends uu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ar(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ht("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=iu(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ar(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Yr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Yr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Yr(e,n)}buildRequest(){const e={requestUri:kP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=mi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function NP(t){const e=Ds(xs(t)).link,n=e?Ds(xs(e)).deep_link_id:null,r=Ds(xs(t)).deep_link_id;return(r?Ds(xs(r)).link:null)||r||n||e||t}class hu{constructor(e){var n,r,s,i,o,c;const l=Ds(xs(e)),h=(n=l.apiKey)!==null&&n!==void 0?n:null,f=(r=l.oobCode)!==null&&r!==void 0?r:null,p=OP((s=l.mode)!==null&&s!==void 0?s:null);ce(h&&f&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=f,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=NP(e);try{return new hu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(){this.providerId=ms.PROVIDER_ID}static credential(e,n){return hi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=hu.parseLink(n);return ce(r,"argument-error"),hi._fromEmailAndCode(e,r.code,r.tenantId)}}ms.PROVIDER_ID="password";ms.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ms.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi extends e_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends bi{constructor(){super("facebook.com")}static credential(e){return Ar._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fn.credential(e.oauthAccessToken)}catch{return null}}}Fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Fn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends bi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ar._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Un.credential(n,r)}catch{return null}}}Un.GOOGLE_SIGN_IN_METHOD="google.com";Un.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends bi{constructor(){super("github.com")}static credential(e){return Ar._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bn.credential(e.oauthAccessToken)}catch{return null}}}Bn.GITHUB_SIGN_IN_METHOD="github.com";Bn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends bi{constructor(){super("twitter.com")}static credential(e,n){return Ar._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return jn.credential(n,r)}catch{return null}}}jn.TWITTER_SIGN_IN_METHOD="twitter.com";jn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await gn._fromIdTokenResponse(e,r,s),o=pf(r);return new cs({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=pf(r);return new cs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function pf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo extends on{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Uo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Uo(e,n,r,s)}}function t_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Uo._fromErrorAndOperation(t,i,e,r):i})}async function VP(t,e,n=!1){const r=await ui(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return cs._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DP(t,e,n=!1){const{auth:r}=t;if(pn(r.app))return Promise.reject(Gn(r));const s="reauthenticate";try{const i=await ui(t,t_(r,s,e,t),n);ce(i.idToken,r,"internal-error");const o=cu(i.idToken);ce(o,r,"internal-error");const{sub:c}=o;return ce(t.uid===c,r,"user-mismatch"),cs._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ht(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n_(t,e,n=!1){if(pn(t.app))return Promise.reject(Gn(t));const r="signIn",s=await t_(t,r,e),i=await cs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function xP(t,e){return n_(ps(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MP(t){const e=ps(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function LP(t,e,n){return pn(t.app)?Promise.reject(Gn(t)):xP(Qe(t),ms.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&MP(t),r})}function FP(t,e,n,r){return Qe(t).onIdTokenChanged(e,n,r)}function UP(t,e,n){return Qe(t).beforeAuthStateChanged(e,n)}function BP(t,e,n,r){return Qe(t).onAuthStateChanged(e,n,r)}const Bo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Bo,"1"),this.storage.removeItem(Bo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jP=1e3,$P=10;class s_ extends r_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Yg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);cP()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,$P):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},jP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}s_.type="LOCAL";const qP=s_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_ extends r_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}i_.type="SESSION";const o_=i_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Sa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async h=>h(n.origin,i)),l=await HP(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Sa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function du(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const h=du("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(){return window}function zP(t){tn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a_(){return typeof tn().WorkerGlobalScope<"u"&&typeof tn().importScripts=="function"}async function WP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function GP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function QP(){return a_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c_="firebaseLocalStorageDb",YP=1,jo="firebaseLocalStorage",l_="fbase_key";class Pi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ca(t,e){return t.transaction([jo],e?"readwrite":"readonly").objectStore(jo)}function JP(){const t=indexedDB.deleteDatabase(c_);return new Pi(t).toPromise()}function Xc(){const t=indexedDB.open(c_,YP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(jo,{keyPath:l_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(jo)?e(r):(r.close(),await JP(),e(await Xc()))})})}async function mf(t,e,n){const r=Ca(t,!0).put({[l_]:e,value:n});return new Pi(r).toPromise()}async function XP(t,e){const n=Ca(t,!1).get(e),r=await new Pi(n).toPromise();return r===void 0?null:r.value}function gf(t,e){const n=Ca(t,!0).delete(e);return new Pi(n).toPromise()}const ZP=800,eS=3;class u_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>eS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return a_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Sa._getInstance(QP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await WP(),!this.activeServiceWorker)return;this.sender=new KP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||GP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xc();return await mf(e,Bo,"1"),await gf(e,Bo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>mf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>XP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>gf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ca(s,!1).getAll();return new Pi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ZP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}u_.type="LOCAL";const tS=u_;new Ri(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nS(t,e){return e?_n(e):(ce(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu extends uu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Yr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Yr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Yr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function rS(t){return n_(t.auth,new fu(t),t.bypassAuthState)}function sS(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),DP(n,new fu(t),t.bypassAuthState)}async function iS(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),VP(n,new fu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return rS;case"linkViaPopup":case"linkViaRedirect":return iS;case"reauthViaPopup":case"reauthViaRedirect":return sS;default:Ht(this.auth,"internal-error")}}resolve(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oS=new Ri(2e3,1e4);class jr extends h_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,jr.currentPopupAction&&jr.currentPopupAction.cancel(),jr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ce(e,this.auth,"internal-error"),e}async onExecution(){An(this.filter.length===1,"Popup operations only handle one event");const e=du();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(en(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(en(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(en(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,oS.get())};e()}}jr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS="pendingRedirect",yo=new Map;class cS extends h_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=yo.get(this.auth._key());if(!e){try{const r=await lS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}yo.set(this.auth._key(),e)}return this.bypassAuthState||yo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function lS(t,e){const n=dS(e),r=hS(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function uS(t,e){yo.set(t._key(),e)}function hS(t){return _n(t._redirectPersistence)}function dS(t){return _o(aS,t.config.apiKey,t.name)}async function fS(t,e,n=!1){if(pn(t.app))return Promise.reject(Gn(t));const r=ps(t),s=nS(r,e),o=await new cS(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pS=10*60*1e3;class mS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!gS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!d_(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(en(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=pS&&this.cachedEventUids.clear(),this.cachedEventUids.has(_f(e))}saveEventToCache(e){this.cachedEventUids.add(_f(e)),this.lastProcessedEventTime=Date.now()}}function _f(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function d_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function gS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return d_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _S(t,e={}){return rr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vS=/^https?/;async function ES(t){if(t.config.emulator)return;const{authorizedDomains:e}=await _S(t);for(const n of e)try{if(wS(n))return}catch{}Ht(t,"unauthorized-domain")}function wS(t){const e=Yc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!vS.test(n))return!1;if(yS.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TS=new Ri(3e4,6e4);function yf(){const t=tn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function IS(t){return new Promise((e,n)=>{var r,s,i;function o(){yf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{yf(),n(en(t,"network-request-failed"))},timeout:TS.get()})}if(!((s=(r=tn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=tn().gapi)===null||i===void 0)&&i.load)o();else{const c=_P("iframefcb");return tn()[c]=()=>{gapi.load?o():n(en(t,"network-request-failed"))},Xg(`${gP()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw vo=null,e})}let vo=null;function AS(t){return vo=vo||IS(t),vo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RS=new Ri(5e3,15e3),bS="__/auth/iframe",PS="emulator/auth/iframe",SS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},CS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kS(t){const e=t.config;ce(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?au(e,PS):`https://${t.config.authDomain}/${bS}`,r={apiKey:e.apiKey,appName:t.name,v:br},s=CS.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${mi(r).slice(1)}`}async function OS(t){const e=await AS(t),n=tn().gapi;return ce(n,t,"internal-error"),e.open({where:document.body,url:kS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:SS,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=en(t,"network-request-failed"),c=tn().setTimeout(()=>{i(o)},RS.get());function l(){tn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},VS=500,DS=600,xS="_blank",MS="http://localhost";class vf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function LS(t,e,n,r=VS,s=DS){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},NS),{width:r.toString(),height:s.toString(),top:i,left:o}),h=ct().toLowerCase();n&&(c=Kg(h)?xS:n),qg(h)&&(e=e||MS,l.scrollbars="yes");const f=Object.entries(l).reduce((g,[E,C])=>`${g}${E}=${C},`,"");if(aP(h)&&c!=="_self")return FS(e||"",c),new vf(null);const p=window.open(e||"",c,f);ce(p,t,"popup-blocked");try{p.focus()}catch{}return new vf(p)}function FS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const US="__/auth/handler",BS="emulator/auth/handler",jS=encodeURIComponent("fac");async function Ef(t,e,n,r,s,i){ce(t.config.authDomain,t,"auth-domain-config-required"),ce(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:br,eventId:s};if(e instanceof e_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Pw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof bi){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),h=l?`#${jS}=${encodeURIComponent(l)}`:"";return`${$S(t)}?${mi(c).slice(1)}${h}`}function $S({config:t}){return t.emulator?au(t,BS):`https://${t.authDomain}/${US}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc="webStorageSupport";class qS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=o_,this._completeRedirectFn=fS,this._overrideRedirectResult=uS}async _openPopup(e,n,r,s){var i;An((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Ef(e,n,r,Yc(),s);return LS(e,o,du())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Ef(e,n,r,Yc(),s);return zP(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(An(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await OS(e),r=new mS(e);return n.register("authEvent",s=>(ce(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(dc,{type:dc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[dc];o!==void 0&&n(!!o),Ht(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ES(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Yg()||Hg()||lu()}}const HS=qS;var wf="@firebase/auth",Tf="1.7.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function WS(t){Er(new Yn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;ce(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Jg(t)},h=new fP(r,s,i,l);return TP(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Er(new Yn("auth-internal",e=>{const n=ps(e.getProvider("auth").getImmediate());return(r=>new KS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Jt(wf,Tf,zS(t)),Jt(wf,Tf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GS=5*60,QS=Xp("authIdTokenMaxAge")||GS;let If=null;const YS=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>QS)return;const s=n==null?void 0:n.token;If!==s&&(If=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function pu(t=wl()){const e=la(t,"auth");if(e.isInitialized())return e.getImmediate();const n=wP(t,{popupRedirectResolver:HS,persistence:[tS,qP,o_]}),r=Xp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=YS(i.toString());UP(n,o,()=>o(n.currentUser)),FP(n,c=>o(c))}}const s=Qp("auth");return s&&IP(n,`http://${s}`),n}function JS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}pP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=en("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",JS().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});WS("Browser");const ka=t=>(rp("data-v-e36bf2d2"),t=t(),sp(),t),XS={class:"flex items-center justify-center min-h-screen bg-gray-100"},ZS={class:"max-w-md w-full bg-white p-8 rounded-lg shadow-md"},eC=ka(()=>z("h2",{class:"text-2xl font-bold mb-6 text-center"},"Login",-1)),tC={class:"mb-4"},nC=ka(()=>z("label",{for:"email",class:"block text-gray-700"},"Email",-1)),rC={class:"mb-4"},sC=ka(()=>z("label",{for:"password",class:"block text-gray-700"},"Password",-1)),iC=ka(()=>z("button",{type:"submit",class:"w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"}," Login ",-1)),oC={key:0,class:"text-red-500 mt-4"},aC={__name:"LoginView",setup(t){const e=Dt(""),n=Dt(""),r=Dt(""),s=aa(),i=async()=>{const o=pu();r.value="";try{await LP(o,e.value,n.value),s.push("/")}catch(c){r.value=c.message}};return(o,c)=>(De(),He("div",XS,[z("div",ZS,[eC,z("form",{onSubmit:Vp(i,["prevent"])},[z("div",tC,[nC,Wt(z("input",{id:"email","onUpdate:modelValue":c[0]||(c[0]=l=>e.value=l),type:"email",placeholder:"Enter your email",class:"w-full px-4 py-2 border rounded-md",required:""},null,512),[[fn,e.value]])]),z("div",rC,[sC,Wt(z("input",{id:"password","onUpdate:modelValue":c[1]||(c[1]=l=>n.value=l),type:"password",placeholder:"Enter your password",class:"w-full px-4 py-2 border rounded-md",required:""},null,512),[[fn,n.value]])]),iC,r.value?(De(),He("p",oC,Vt(r.value),1)):na("",!0)],32)])]))}},cC=Ra(aC,[["__scopeId","data-v-e36bf2d2"]]),mu=iw({history:xE(),routes:[{path:"/",name:"home",component:qR},{path:"/effects",name:"effects",component:XR},{path:"/about",name:"about",component:QR},{path:"/product/:id",name:"product",component:Eb},{path:"/login",name:"login",component:cC},{path:"/admin",name:"admin",component:jb,meta:{requiresAuth:!0}}]});mu.beforeEach((t,e,n)=>{const s=pu().currentUser;t.matched.some(i=>i.meta.requiresAuth)?s?n():n("/"):n()});const lC={class:"bg-gray-800 text-white py-6"},uC={class:"container mx-auto px-4"},hC={class:"flex flex-wrap justify-between"},dC={class:"mb-4"},fC=z("h2",{class:"text-2xl font-bold mb-2"},"Company Name",-1),pC=z("p",{class:"text-gray-400"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",-1),mC={class:"text-gray-400 mt-4"},gC=Sp('<div class="mb-4"><h3 class="text-xl font-semibold mb-2">SUPPORT</h3><ul><li><a href="#" class="text-gray-400 hover:text-white">Help</a></li><li><a href="#" class="text-gray-400 hover:text-white">Give feedback</a></li><li><a href="#" class="text-gray-400 hover:text-white">Report a bug</a></li><li><a href="#" class="text-gray-400 hover:text-white">Manage cookie settings</a></li></ul></div><div class="mb-4"><h3 class="text-xl font-semibold mb-2">COMMUNITY</h3><ul><li><a href="#" class="text-gray-400 hover:text-white">Support authors</a></li><li><a href="#" class="text-gray-400 hover:text-white">Contact us</a></li></ul></div>',2),_C={__name:"Footer",setup(t){const e=Dt(new Date().getFullYear());return(n,r)=>(De(),He("footer",lC,[z("div",uC,[z("div",hC,[z("div",dC,[fC,pC,z("p",mC,"© "+Vt(e.value)+" Company Name. All rights reserved.",1)]),gC])])]))}},yC={class:"flex flex-col min-h-screen"},vC={class:"bg-gray-800 text-gray-100 px-3 py-5 md:flex justify-between items-center"},EC={class:"flex text-gray-500 text-l"},wC=z("h1",{class:"h-6 w-6 mr-2 md:mr-4 md:h-9 md:w-9"},"Logo",-1),TC=z("h1",{class:"text-l md:text-2xl"},"Company Name",-1),IC={class:"relative md:w-1/3"},AC={class:"md:flex md:items-center"},RC={key:0,class:"md:mx-4"},bC={__name:"App",setup(t){const e=Dt([{id:1,name:"Home",link:"/"},{id:2,name:"Effects",link:"/effects"},{id:3,name:"About",link:"/about"}]),n=Dt(""),r=pu(),s=Dt(!1),i=async()=>{if(n.value.trim()!=="")try{const c=await Aa.getProductByName(n.value);c.length>0?mu.push({name:"ProductSearchResults",params:{products:JSON.stringify(c)}}):console.log("No products found")}catch(c){console.error("Error searching products:",c)}},o=()=>{BP(r,c=>{c?s.value=!0:s.value=!1})};return Jo(()=>{o()}),(c,l)=>(De(),He("div",yC,[z("nav",null,[z("div",vC,[z("div",EC,[Ke(Yt(lo),{to:"/",class:"flex items-center"},{default:no(()=>[wC,TC]),_:1})]),z("div",IC,[Wt(z("input",{"onUpdate:modelValue":l[0]||(l[0]=h=>n.value=h),onInput:i,type:"text",placeholder:"Search for products...",class:"w-full px-4 py-2 border rounded-md text-black"},null,544),[[fn,n.value]])]),z("ul",AC,[(De(!0),He(It,null,Xo(e.value,h=>(De(),He("li",{class:"md:mx-4",key:h.id},[Ke(Yt(lo),{to:h.link,class:"hover:text-amber-400 md:text-xl"},{default:no(()=>[Rc(Vt(h.name),1)]),_:2},1032,["to"])]))),128)),s.value?(De(),He("li",RC,[Ke(Yt(lo),{to:"/admin",class:"hover:text-amber-400 md:text-xl"},{default:no(()=>[Rc(" Admin ")]),_:1})])):na("",!0)])])]),Ke(Yt(Kp),{class:"flex-grow"}),Ke(_C)]))}},f_=nE(bC);f_.use(mu);f_.mount("#app");
