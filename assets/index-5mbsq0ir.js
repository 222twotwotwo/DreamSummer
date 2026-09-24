(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Yc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ot={},rr=[],kn=()=>{},th=()=>!1,Ma=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ea=t=>t.startsWith("onUpdate:"),xt=Object.assign,Kc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Em=Object.prototype.hasOwnProperty,nt=(t,e)=>Em.call(t,e),Ne=Array.isArray,Ci=t=>Js(t)==="[object Map]",ta=t=>Js(t)==="[object Set]",Iu=t=>Js(t)==="[object Date]",Ve=t=>typeof t=="function",ft=t=>typeof t=="string",Vn=t=>typeof t=="symbol",rt=t=>t!==null&&typeof t=="object",nh=t=>(rt(t)||Ve(t))&&Ve(t.then)&&Ve(t.catch),ih=Object.prototype.toString,Js=t=>ih.call(t),bm=t=>Js(t).slice(8,-1),rh=t=>Js(t)==="[object Object]",jc=t=>ft(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ls=Yc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ba=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Tm=/-\w/g,nn=ba(t=>t.replace(Tm,e=>e.slice(1).toUpperCase())),wm=/\B([A-Z])/g,pr=ba(t=>t.replace(wm,"-$1").toLowerCase()),Zc=ba(t=>t.charAt(0).toUpperCase()+t.slice(1)),Xa=ba(t=>t?`on${Zc(t)}`:""),Bn=(t,e)=>!Object.is(t,e),$a=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},sh=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},Am=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Cm=t=>{const e=ft(t)?Number(t):NaN;return isNaN(e)?t:e};let Uu;const Ta=()=>Uu||(Uu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Os(t){if(Ne(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=ft(i)?Dm(i):Os(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(ft(t)||rt(t))return t}const Rm=/;(?![^(]*\))/g,Pm=/:([^]+)/,Lm=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function Dm(t){const e={};return t.replace(Lm,n=>n.startsWith("/*")?"":n).split(Rm).forEach(n=>{if(n){const i=n.split(Pm);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function fr(t){let e="";if(ft(t))e=t;else if(Ne(t))for(let n=0;n<t.length;n++){const i=fr(t[n]);i&&(e+=i+" ")}else if(rt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Im="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Um=Yc(Im);function oh(t){return!!t||t===""}function Nm(t,e,n){if(t.length!==e.length)return!1;let i=!0;for(let r=0;i&&r<t.length;r++)i=wa(t[r],e[r],n);return i}function Nu(t,e,n){if(t.size!==e.size)return!1;const i=Array.from(e),r=new Uint8Array(i.length);for(const s of t){let o=-1;for(let a=0;a<i.length;a++)if(!r[a]&&wa(s,i[a],n)){o=a;break}if(o<0)return!1;r[o]=1}return!0}function Fm(t,e,n){let i=Ci(t),r=Ci(e);if(i||r||(i=ta(t),r=ta(e),i||r))return i&&r?Nu(t,e,n):!1;const s=Object.keys(t).length,o=Object.keys(e).length;if(s!==o)return!1;for(const a in t){const l=t.hasOwnProperty(a),c=e.hasOwnProperty(a);if(l&&!c||!l&&c||!wa(t[a],e[a],n))return!1}return String(t)===String(e)}function Fu(t,e,n,i){n||(n=[new Map,new Map]);const[r,s]=n;if(r.has(t)||s.has(e))return r.get(t)===e&&s.get(e)===t;r.set(t,e),s.set(e,t);const o=i(t,e,n);return r.delete(t),s.delete(e),o}function wa(t,e,n){if(t===e)return!0;let i=Iu(t),r=Iu(e);return i||r?i&&r?t.getTime()===e.getTime():!1:(i=Vn(t),r=Vn(e),i||r?t===e:(i=Ne(t),r=Ne(e),i||r?i&&r?Fu(t,e,n,Nm):!1:(i=rt(t),r=rt(e),i||r?!i||!r?!1:Fu(t,e,n,Fm):String(t)===String(e))))}const ah=t=>!!(t&&t.__v_isRef===!0),ln=t=>ft(t)?t:t==null?"":Ne(t)||rt(t)&&(t.toString===ih||!Ve(t.toString))?ah(t)?ln(t.value):JSON.stringify(t,lh,2):String(t),lh=(t,e)=>ah(e)?lh(t,e.value):Ci(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[Ya(i,s)+" =>"]=r,n),{})}:ta(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ya(n))}:Vn(e)?Ya(e):rt(e)&&!Ne(e)&&!rh(e)?String(e):e,Ya=(t,e="")=>{var n;return Vn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let wt;class Om{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&wt&&(wt.active?(this.parent=wt,this.index=(wt.scopes||(wt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes){const i=this.scopes.slice();for(e=0,n=i.length;e<n;e++)i[e].pause()}for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes){const r=this.scopes.slice();for(e=0,n=r.length;e<n;e++)r[e].resume()}const i=this.effects.slice();for(e=0,n=i.length;e<n;e++)i[e].resume()}}run(e){if(this._active){const n=wt;try{return wt=this,e()}finally{wt=n}}}on(){++this._on===1&&(this.prevScope=wt,wt=this)}off(){if(this._on>0&&--this._on===0){if(wt===this)wt=this.prevScope;else{let e=wt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const r=this.scopes.slice();for(n=0,i=r.length;n<i;n++)r[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Bm(){return wt}let lt;const Ka=new WeakSet;class ch{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,wt&&(wt.active?wt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ka.has(this)&&(Ka.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||fh(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ou(this),dh(this);const e=lt,n=An;lt=this,An=!0;try{return this.fn()}finally{hh(this),lt=e,An=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)eu(e);this.deps=this.depsTail=void 0,Ou(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ka.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){kl(this)&&this.run()}get dirty(){return kl(this)}}let uh=0,Ds,Is;function fh(t,e=!1){if(t.flags|=8,e){t.next=Is,Is=t;return}t.next=Ds,Ds=t}function Jc(){uh++}function Qc(){if(--uh>0)return;if(Is){let e=Is;for(Is=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ds;){let e=Ds;for(Ds=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function dh(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function hh(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),eu(i),zm(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function kl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ph(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function ph(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Bs)||(t.globalVersion=Bs,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!kl(t))))return;t.flags|=2;const e=t.dep,n=lt,i=An;lt=t,An=!0;try{dh(t);const r=t.fn(t._value);(e.version===0||Bn(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{lt=n,An=i,hh(t),t.flags&=-3}}function eu(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)eu(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function zm(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let An=!0;const mh=[];function ci(){mh.push(An),An=!1}function ui(){const t=mh.pop();An=t===void 0?!0:t}function Ou(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=lt;lt=void 0;try{e()}finally{lt=n}}}let Bs=0;class km{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class tu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!lt||!An||lt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==lt)n=this.activeLink=new km(lt,this),lt.deps?(n.prevDep=lt.depsTail,lt.depsTail.nextDep=n,lt.depsTail=n):lt.deps=lt.depsTail=n,gh(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=lt.depsTail,n.nextDep=void 0,lt.depsTail.nextDep=n,lt.depsTail=n,lt.deps===n&&(lt.deps=i)}return n}trigger(e){this.version++,Bs++,this.notify(e)}notify(e){Jc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Qc()}}}function gh(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)gh(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Hl=new WeakMap,lr=Symbol(""),Vl=Symbol(""),zs=Symbol("");function It(t,e,n){if(An&&lt){let i=Hl.get(t);i||Hl.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new tu),r.map=i,r.key=n),r.track()}}function ii(t,e,n,i,r,s){const o=Hl.get(t);if(!o){Bs++;return}const a=l=>{l&&l.trigger()};if(Jc(),e==="clear")o.forEach(a);else{const l=Ne(t),c=l&&jc(n);if(l&&n==="length"){const u=Number(i);o.forEach((f,d)=>{(d==="length"||d===zs||!Vn(d)&&d>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(zs)),e){case"add":l?c&&a(o.get("length")):(a(o.get(lr)),Ci(t)&&a(o.get(Vl)));break;case"delete":l||(a(o.get(lr)),Ci(t)&&a(o.get(Vl)));break;case"set":Ci(t)&&a(o.get(lr));break}}Qc()}function _r(t){const e=je(t);return e===t||(It(e,"iterate",zs),pn(t))?e:Gn(t)?Ri(t)?e.map(n=>Ui(gn(n))):e.map(Ui):e.map(gn)}function Aa(t){return It(t=je(t),"iterate",zs),t}function Nn(t,e){return Gn(t)?Ui(Ri(t)?gn(e):e):gn(e)}const Hm={__proto__:null,[Symbol.iterator](){return ja(this,Symbol.iterator,t=>Nn(this,t))},concat(...t){return _r(this).concat(...t.map(e=>Ne(e)?_r(e):e))},entries(){return ja(this,"entries",t=>(t[1]=Nn(this,t[1]),t))},every(t,e){return $n(this,"every",t,e,void 0,arguments)},filter(t,e){return $n(this,"filter",t,e,n=>n.map(i=>Nn(this,i)),arguments)},find(t,e){return $n(this,"find",t,e,n=>Nn(this,n),arguments)},findIndex(t,e){return $n(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return $n(this,"findLast",t,e,n=>Nn(this,n),arguments)},findLastIndex(t,e){return $n(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return $n(this,"forEach",t,e,void 0,arguments)},includes(...t){return Za(this,"includes",t)},indexOf(...t){return Za(this,"indexOf",t)},join(t){return _r(this).join(t)},lastIndexOf(...t){return Za(this,"lastIndexOf",t)},map(t,e){return $n(this,"map",t,e,void 0,arguments)},pop(){return hs(this,"pop")},push(...t){return hs(this,"push",t)},reduce(t,...e){return Bu(this,"reduce",t,e)},reduceRight(t,...e){return Bu(this,"reduceRight",t,e)},shift(){return hs(this,"shift")},some(t,e){return $n(this,"some",t,e,void 0,arguments)},splice(...t){return hs(this,"splice",t)},toReversed(){return _r(this).toReversed()},toSorted(t){return _r(this).toSorted(t)},toSpliced(...t){return _r(this).toSpliced(...t)},unshift(...t){return hs(this,"unshift",t)},values(){return ja(this,"values",t=>Nn(this,t))}};function ja(t,e,n){const i=Aa(t),r=i[e]();return i!==t&&!pn(t)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=n(s.value)),s}),r}const Vm=Array.prototype;function $n(t,e,n,i,r,s){const o=Aa(t),a=o!==t&&!pn(t),l=o[e];if(l!==Vm[e]){const f=l.apply(t,s);return a?gn(f):f}let c=n;o!==t&&(a?c=function(f,d){return n.call(this,Nn(t,f),d,t)}:n.length>2&&(c=function(f,d){return n.call(this,f,d,t)}));const u=l.call(o,c,i);return a&&r?r(u):u}function Bu(t,e,n,i){const r=Aa(t),s=r!==t&&!pn(t);let o=n,a=!1;r!==t&&(s?(a=i.length===0,o=function(c,u,f){return a&&(a=!1,c=Nn(t,c)),n.call(this,c,Nn(t,u),f,t)}):n.length>3&&(o=function(c,u,f){return n.call(this,c,u,f,t)}));const l=r[e](o,...i);return a?Nn(t,l):l}function Za(t,e,n){const i=je(t);It(i,"iterate",zs);const r=i[e](...n);return(r===-1||r===!1)&&ru(n[0])?(n[0]=je(n[0]),i[e](...n)):r}function hs(t,e,n=[]){ci(),Jc();const i=je(t)[e].apply(t,n);return Qc(),ui(),i}const Gm=Yc("__proto__,__v_isRef,__isVue"),_h=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Vn));function Wm(t){Vn(t)||(t=String(t));const e=je(this);return It(e,"has",t),e.hasOwnProperty(t)}class vh{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?eg:Mh:s?yh:Sh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ne(e);if(!r){let l;if(o&&(l=Hm[n]))return l;if(n==="hasOwnProperty")return Wm}const a=Reflect.get(e,n,Nt(e)?e:i);if((Vn(n)?_h.has(n):Gm(n))||(r||It(e,"get",n),s))return a;if(Nt(a)){const l=o&&jc(n)?a:a.value;return r&&rt(l)?Wl(l):l}return rt(a)?r?Wl(a):oi(a):a}}class xh extends vh{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];const o=Ne(e)&&jc(n);if(!this._isShallow){const c=Gn(s);if(!pn(i)&&!Gn(i)&&(s=je(s),i=je(i)),!o&&Nt(s)&&!Nt(i))return c||(s.value=i),!0}const a=o?Number(n)<e.length:nt(e,n),l=Reflect.set(e,n,i,Nt(e)?e:r);return e===je(r)&&l&&(a?Bn(i,s)&&ii(e,"set",n,i):ii(e,"add",n,i)),l}deleteProperty(e,n){const i=nt(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&ii(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!Vn(n)||!_h.has(n))&&It(e,"has",n),i}ownKeys(e){return It(e,"iterate",Ne(e)?"length":lr),Reflect.ownKeys(e)}}class qm extends vh{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Xm=new xh,$m=new qm,Ym=new xh(!0);const Gl=t=>t,co=t=>Reflect.getPrototypeOf(t);function Km(t,e,n){return function(...i){const r=this.__v_raw,s=je(r),o=Ci(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?Gl:e?Ui:gn;return!e&&It(s,"iterate",l?Vl:lr),xt(Object.create(c),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}}})}}function uo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function jm(t,e){const n={get(r){const s=this.__v_raw,o=je(s),a=je(r);t||(Bn(r,a)&&It(o,"get",r),It(o,"get",a));const{has:l}=co(o),c=e?Gl:t?Ui:gn;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!t&&It(je(r),"iterate",lr),r.size},has(r){const s=this.__v_raw,o=je(s),a=je(r);return t||(Bn(r,a)&&It(o,"has",r),It(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=je(a),c=e?Gl:t?Ui:gn;return!t&&It(l,"iterate",lr),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return xt(n,t?{add:uo("add"),set:uo("set"),delete:uo("delete"),clear:uo("clear")}:{add(r){const s=je(this),o=co(s),a=je(r),l=!e&&!pn(r)&&!Gn(r)?a:r;return o.has.call(s,l)||Bn(r,l)&&o.has.call(s,r)||Bn(a,l)&&o.has.call(s,a)||(s.add(l),ii(s,"add",l,l)),this},set(r,s){!e&&!pn(s)&&!Gn(s)&&(s=je(s));const o=je(this),{has:a,get:l}=co(o);let c=a.call(o,r);c||(r=je(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?Bn(s,u)&&ii(o,"set",r,s):ii(o,"add",r,s),this},delete(r){const s=je(this),{has:o,get:a}=co(s);let l=o.call(s,r);l||(r=je(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&ii(s,"delete",r,void 0),c},clear(){const r=je(this),s=r.size!==0,o=r.clear();return s&&ii(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Km(r,t,e)}),n}function nu(t,e){const n=jm(t,e);return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(nt(n,r)&&r in i?n:i,r,s)}const Zm={get:nu(!1,!1)},Jm={get:nu(!1,!0)},Qm={get:nu(!0,!1)};const Sh=new WeakMap,yh=new WeakMap,Mh=new WeakMap,eg=new WeakMap;function tg(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function oi(t){return Gn(t)?t:iu(t,!1,Xm,Zm,Sh)}function ng(t){return iu(t,!1,Ym,Jm,yh)}function Wl(t){return iu(t,!0,$m,Qm,Mh)}function iu(t,e,n,i,r){if(!rt(t)||t.__v_raw&&!(e&&t.__v_isReactive)||t.__v_skip||!Object.isExtensible(t))return t;const s=r.get(t);if(s)return s;const o=tg(bm(t));if(o===0)return t;const a=new Proxy(t,o===2?i:n);return r.set(t,a),a}function Ri(t){return Gn(t)?Ri(t.__v_raw):!!(t&&t.__v_isReactive)}function Gn(t){return!!(t&&t.__v_isReadonly)}function pn(t){return!!(t&&t.__v_isShallow)}function ru(t){return t?!!t.__v_raw:!1}function je(t){const e=t&&t.__v_raw;return e?je(e):t}function su(t){return!nt(t,"__v_skip")&&Object.isExtensible(t)&&sh(t,"__v_skip",!0),t}const gn=t=>rt(t)?oi(t):t,Ui=t=>rt(t)?Wl(t):t;function Nt(t){return t?t.__v_isRef===!0:!1}function vt(t){return Eh(t,!1)}function ks(t){return Eh(t,!0)}function Eh(t,e){return Nt(t)?t:new ig(t,e)}class ig{constructor(e,n){this.dep=new tu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:je(e),this._value=n?e:gn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||pn(e)||Gn(e);e=i?e:je(e),Bn(e,n)&&(this._rawValue=e,this._value=i?e:gn(e),this.dep.trigger())}}function bh(t){return Nt(t)?t.value:t}const rg={get:(t,e,n)=>e==="__v_raw"?t:bh(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Nt(r)&&!Nt(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function Th(t){return Ri(t)?t:new Proxy(t,rg)}class sg{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new tu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Bs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&lt!==this)return fh(this,!0),!0}get value(){const e=this.dep.track();return ph(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function og(t,e,n=!1){let i,r;return Ve(t)?i=t:(i=t.get,r=t.set),new sg(i,r,n)}const fo={},na=new WeakMap;let Zi;function ag(t,e=!1,n=Zi){if(n){let i=na.get(n);i||na.set(n,i=[]),i.push(t)}}function lg(t,e,n=ot){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=n,c=M=>r?M:pn(M)||r===!1||r===0?ri(M,1):ri(M);let u,f,d,p,v=!1,x=!1;if(Nt(t)?(f=()=>t.value,v=pn(t)):Ri(t)?(f=()=>c(t),v=!0):Ne(t)?(x=!0,v=t.some(M=>Ri(M)||pn(M)),f=()=>t.map(M=>{if(Nt(M))return M.value;if(Ri(M))return c(M);if(Ve(M))return l?l(M,2):M()})):Ve(t)?e?f=l?()=>l(t,2):t:f=()=>{if(d){ci();try{d()}finally{ui()}}const M=Zi;Zi=u;try{return l?l(t,3,[p]):t(p)}finally{Zi=M}}:f=kn,e&&r){const M=f,D=r===!0?1/0:r;f=()=>ri(M(),D)}const m=Bm(),h=()=>{u.stop(),m&&m.active&&Kc(m.effects,u)};if(s&&e){const M=e;e=(...D)=>{const E=M(...D);return h(),E}}let A=x?new Array(t.length).fill(fo):fo;const b=M=>{if(!(!(u.flags&1)||!u.dirty&&!M))if(e){const D=u.run();if(M||r||v||(x?D.some((E,C)=>Bn(E,A[C])):Bn(D,A))){d&&d();const E=Zi;Zi=u;try{const C=[D,A===fo?void 0:x&&A[0]===fo?[]:A,p];A=D,l?l(e,3,C):e(...C)}finally{Zi=E}}}else u.run()};return a&&a(b),u=new ch(f),u.scheduler=o?()=>o(b,!1):b,p=M=>ag(M,!1,u),d=u.onStop=()=>{const M=na.get(u);if(M){if(l)l(M,4);else for(const D of M)D();na.delete(u)}},e?i?b(!0):A=u.run():o?o(b.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function ri(t,e=1/0,n){if(e<=0||!rt(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Nt(t))ri(t.value,e,n);else if(Ne(t))for(let i=0;i<t.length;i++)ri(t[i],e,n);else if(ta(t)||Ci(t))t.forEach(i=>{ri(i,e,n)});else if(rh(t)){for(const i in t)ri(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&ri(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Qs(t,e,n,i){try{return i?t(...i):t()}catch(r){Ca(r,e,n)}}function _n(t,e,n,i){if(Ve(t)){const r=Qs(t,e,n,i);return r&&nh(r)&&r.catch(s=>{Ca(s,e,n)}),r}if(Ne(t)){const r=[];for(let s=0;s<t.length;s++)r.push(_n(t[s],e,n,i));return r}}function Ca(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ot;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}a=a.parent}if(s){ci(),Qs(s,null,10,[t,l,c]),ui();return}}cg(t,n,r,i,o)}function cg(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}const zt=[];let Dn=-1;const qr=[];let wi=null,Vr=0;const wh=Promise.resolve();let ia=null;function Qr(t){const e=ia||wh;return t?e.then(this?t.bind(this):t):e}function ug(t){let e=Dn+1,n=zt.length;for(;e<n;){const i=e+n>>>1,r=zt[i],s=Hs(r);s<t||s===t&&r.flags&2?e=i+1:n=i}return e}function ou(t){if(!(t.flags&1)){const e=Hs(t),n=zt[zt.length-1];!n||!(t.flags&2)&&e>=Hs(n)?zt.push(t):zt.splice(ug(e),0,t),t.flags|=1,Ah()}}function Ah(){ia||(ia=wh.then(Rh))}function fg(t){if(!Ne(t))wi&&t.id===-1?wi.splice(Vr+1,0,t):t.flags&1||(qr.push(t),t.flags|=1);else for(let e=0;e<t.length;e++)qr.push(t[e]);Ah()}function zu(t,e,n=Dn+1){for(;n<zt.length;n++){const i=zt[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;zt.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Ch(t){if(qr.length){const e=[...new Set(qr)].sort((n,i)=>Hs(n)-Hs(i));if(qr.length=0,wi){for(let n=0;n<e.length;n++)wi.push(e[n]);return}for(wi=e,Vr=0;Vr<wi.length;Vr++){const n=wi[Vr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}wi=null,Vr=0}}const Hs=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Rh(t){try{for(Dn=0;Dn<zt.length;Dn++){const e=zt[Dn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Qs(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Dn<zt.length;Dn++){const e=zt[Dn];e&&(e.flags&=-2)}Dn=-1,zt.length=0,Ch(),ia=null,(zt.length||qr.length)&&Rh()}}let en=null,Ph=null;function ra(t){const e=en;return en=t,Ph=t&&t.type.__scopeId||null,e}function At(t,e=en,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&la(-1);const s=ra(e),o=ur.length;let a;try{a=t(...r)}finally{for(let l=ur.length;l>o;l--)sp();ra(s),i._d&&la(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function cr(t,e){if(en===null)return t;const n=Na(en),i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=ot]=e[r];s&&(Ve(s)&&(s={mounted:s,updated:s}),s.deep&&ri(o),i.push({dir:s,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function ki(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(ci(),_n(l,n,8,[t.el,a,t,e]),ui())}}function Ra(t,e){if(Ut){let n=Ut.provides;const i=Ut.parent&&Ut.parent.provides;i===n&&(n=Ut.provides=Object.create(i)),n[t]=e}}function Cn(t,e,n=!1){const i=Wn();if(i||$r){let r=$r?$r._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Ve(e)?e.call(i&&i.proxy):e}}const dg=Symbol.for("v-scx"),hg=()=>Cn(dg);function tt(t,e,n){return Lh(t,e,n)}function Lh(t,e,n=ot){const{immediate:i,deep:r,flush:s,once:o}=n,a=xt({},n),l=e&&i||!e&&s!=="post";let c;if(qs){if(s==="sync"){const p=hg();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=kn,p.resume=kn,p.pause=kn,p}}const u=Ut;a.call=(p,v,x)=>_n(p,u,v,x);let f=!1;s==="post"?a.scheduler=p=>{$t(p,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(p,v)=>{v?p():ou(p)}),a.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const d=lg(t,e,a);return qs&&(c?c.push(d):l&&d()),d}function pg(t,e,n){const i=this.proxy,r=ft(t)?t.includes(".")?Dh(i,t):()=>i[t]:t.bind(i,i);let s;Ve(e)?s=e:(s=e.handler,n=e);const o=to(this),a=Lh(r,s.bind(i),n);return o(),a}function Dh(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const mg=Symbol("_vte"),Pa=t=>t.__isTeleport,cn=Symbol("_leaveCb"),ps=Symbol("_enterCb");function gg(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Oi(()=>{t.isMounted=!0}),_i(()=>{t.isUnmounting=!0}),t}const sn=[Function,Array],Ih={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:sn,onEnter:sn,onAfterEnter:sn,onEnterCancelled:sn,onBeforeLeave:sn,onLeave:sn,onAfterLeave:sn,onLeaveCancelled:sn,onBeforeAppear:sn,onAppear:sn,onAfterAppear:sn,onAppearCancelled:sn},Uh=t=>{const e=t.subTree;return e.component?Uh(e.component):e},_g={name:"BaseTransition",props:Ih,setup(t,{slots:e}){const n=Wn(),i=gg();return()=>{const r=e.default&&Oh(e.default(),!0),s=r&&r.length?Nh(r):n.subTree?o_():void 0;if(!s)return;const o=je(t),{mode:a}=o;if(i.isLeaving)return Ja(s);const l=sa(s);if(!l)return Ja(s);let c=ql(l,o,i,n,f=>c=f);l.type!==Ht&&Vs(l,c);let u=n.subTree&&sa(n.subTree);if(u&&u.type!==Ht&&!tr(u,l)&&Uh(n).type!==Ht){let f=ql(u,o,i,n);if(Vs(u,f),a==="out-in"&&l.type!==Ht)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,u=void 0},Ja(s);a==="in-out"&&l.type!==Ht?f.delayLeave=(d,p,v)=>{const x=Fh(i,u);x[String(u.key)]=u,d[cn]=()=>{p(),d[cn]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{v(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function Nh(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Ht){e=n;break}}return e}const vg=_g;function Fh(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function ql(t,e,n,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:d,onLeave:p,onAfterLeave:v,onLeaveCancelled:x,onBeforeAppear:m,onAppear:h,onAfterAppear:A,onAppearCancelled:b}=e,M=String(t.key),D=Fh(n,t),E=(S,y)=>{S&&_n(S,i,9,y)},C=(S,y)=>{const P=y[1];E(S,y),Ne(S)?S.every(F=>F.length<=1)&&P():S.length<=1&&P()},I={mode:o,persisted:a,beforeEnter(S){let y=l;if(!n.isMounted)if(s)y=m||l;else return;S[cn]&&S[cn](!0);const P=D[M];P&&tr(t,P)&&P.el[cn]&&P.el[cn](),E(y,[S])},enter(S){if(D[M]===t)return;let y=c,P=u,F=f;if(!n.isMounted)if(s)y=h||c,P=A||u,F=b||f;else return;let V=!1;S[ps]=G=>{V||(V=!0,G?E(F,[S]):E(P,[S]),I.delayedLeave&&I.delayedLeave(),S[ps]=void 0)};const J=S[ps].bind(null,!1);y?C(y,[S,J]):J()},leave(S,y){const P=String(t.key);if(S[ps]&&S[ps](!0),n.isUnmounting)return y();E(d,[S]);let F=!1;S[cn]=J=>{F||(F=!0,y(),J?E(x,[S]):E(v,[S]),S[cn]=void 0,D[P]===t&&delete D[P])};const V=S[cn].bind(null,!1);D[P]=t,p?C(p,[S,V]):V()},clone(S){const y=ql(S,e,n,i,r);return r&&r(y),y}};return I}function Ja(t){if(La(t))return t=Ni(t),t.children=null,t}function sa(t){if(!La(t))return Pa(t.type)&&t.children?Nh(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&Ve(n.default))return n.default()}}function Vs(t,e){if(t.shapeFlag&6&&t.component){t.transition=e;const n=t.component.subTree;Vs(Pa(n.type)&&sa(n)||n,e)}else t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Oh(t,e=!1,n){let i=[],r=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===Rt?(o.patchFlag&128&&r++,i=i.concat(Oh(o.children,e,a))):(e||o.type!==Ht)&&i.push(a!=null?Ni(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function eo(t,e){return Ve(t)?xt({name:t.name},e,{setup:t}):t}function Bh(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function ku(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const oa=new WeakMap;function Us(t,e,n,i,r=!1){if(Ne(t)){t.forEach((x,m)=>Us(x,e&&(Ne(e)?e[m]:e),n,i,r));return}if(Ns(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Us(t,e,n,i.component.subTree);return}const s=i.shapeFlag&4?Na(i.component):i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ot?a.refs={}:a.refs,f=a.setupState,d=je(f),p=f===ot?th:x=>ku(u,x)?!1:nt(d,x),v=(x,m)=>!(m&&ku(u,m));if(c!=null&&c!==l){if(Hu(e),ft(c))u[c]=null,p(c)&&(f[c]=null);else if(Nt(c)){const x=e;v(c,x.k)&&(c.value=null),x.k&&(u[x.k]=null)}}if(Ve(l))Qs(l,a,12,[o,u]);else{const x=ft(l),m=Nt(l);if(x||m){const h=()=>{if(t.f){const A=x?p(l)?f[l]:u[l]:v()||!t.k?l.value:u[t.k];if(r)Ne(A)&&Kc(A,s);else if(Ne(A))A.includes(s)||A.push(s);else if(x)u[l]=[s],p(l)&&(f[l]=u[l]);else{const b=[s];v(l,t.k)&&(l.value=b),t.k&&(u[t.k]=b)}}else x?(u[l]=o,p(l)&&(f[l]=o)):m&&(v(l,t.k)&&(l.value=o),t.k&&(u[t.k]=o))};if(o){const A=()=>{h(),oa.delete(t)};A.id=-1,oa.set(t,A),$t(A,n)}else Hu(t),h()}}}function Hu(t){const e=oa.get(t);e&&(e.flags|=8,oa.delete(t))}Ta().requestIdleCallback;Ta().cancelIdleCallback;const Ns=t=>!!t.type.__asyncLoader,La=t=>t.type.__isKeepAlive;function xg(t,e){kh(t,"a",e)}function zh(t,e){kh(t,"da",e)}function kh(t,e,n=Ut){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Da(e,i,n),n){let r=n.parent;for(;r&&r.parent;)La(r.parent.vnode)&&Sg(i,e,n,r),r=r.parent}}function Sg(t,e,n,i){const r=Da(e,t,i,!0);es(()=>{Kc(i[e],r)},n)}function Da(t,e,n=Ut,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{ci();const a=to(n),l=_n(e,n,t,o);return a(),ui(),l});return i?r.unshift(s):r.push(s),s}}const gi=t=>(e,n=Ut)=>{(!qs||t==="sp")&&Da(t,(...i)=>e(...i),n)},yg=gi("bm"),Oi=gi("m"),Mg=gi("bu"),Eg=gi("u"),_i=gi("bum"),es=gi("um"),bg=gi("sp"),Tg=gi("rtg"),wg=gi("rtc");function Ag(t,e=Ut){Da("ec",t,e)}const Cg="directives",Rg=Symbol.for("v-ndc");function Hh(t){return Pg(Cg,t)}function Pg(t,e,n=!0,i=!1){const r=en||Ut;if(r){const s=r.type,o=Vu(r[t]||s[t],e)||Vu(r.appContext[t],e);return!o&&i?s:o}}function Vu(t,e){return t&&(t[e]||t[nn(e)]||t[Zc(nn(e))])}function Xr(t,e,n,i){let r;const s=n,o=Ne(t);if(o||ft(t)){const a=o&&Ri(t);let l=!1,c=!1;a&&(l=!pn(t),c=Gn(t),t=Aa(t)),r=new Array(t.length);for(let u=0,f=t.length;u<f;u++)r[u]=e(l?c?Ui(gn(t[u])):gn(t[u]):t[u],u,void 0,s)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,s)}else if(rt(t))if(t[Symbol.iterator])r=Array.from(t,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(t);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(t[u],u,l,s)}}else r=[];return r}const Xl=t=>t?lp(t)?Na(t):Xl(t.parent):null,Fs=xt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Xl(t.parent),$root:t=>Xl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Gh(t),$forceUpdate:t=>t.f||(t.f=()=>{ou(t.update)}),$nextTick:t=>t.n||(t.n=Qr.bind(t.proxy)),$watch:t=>pg.bind(t)}),Qa=(t,e)=>t!==ot&&!t.__isScriptSetup&&nt(t,e),Lg={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(Qa(i,e))return o[e]=1,i[e];if(r!==ot&&nt(r,e))return o[e]=2,r[e];if(nt(s,e))return o[e]=3,s[e];if(n!==ot&&nt(n,e))return o[e]=4,n[e];$l&&(o[e]=0)}}const c=Fs[e];let u,f;if(c)return e==="$attrs"&&It(t.attrs,"get",""),c(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==ot&&nt(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,nt(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return Qa(r,e)?(r[e]=n,!0):i!==ot&&nt(i,e)?(i[e]=n,!0):nt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(n[a]||t!==ot&&a[0]!=="$"&&nt(t,a)||Qa(e,a)||nt(s,a)||nt(i,a)||nt(Fs,a)||nt(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:nt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Gu(t){return Ne(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let $l=!0;function Dg(t){const e=Gh(t),n=t.proxy,i=t.ctx;$l=!1,e.beforeCreate&&Wu(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:p,updated:v,activated:x,deactivated:m,beforeDestroy:h,beforeUnmount:A,destroyed:b,unmounted:M,render:D,renderTracked:E,renderTriggered:C,errorCaptured:I,serverPrefetch:S,expose:y,inheritAttrs:P,components:F,directives:V,filters:J}=e;if(c&&Ig(c,i,null),o)for(const q in o){const k=o[q];Ve(k)&&(i[q]=k.bind(n))}if(r){const q=r.call(n,n);rt(q)&&(t.data=oi(q))}if($l=!0,s)for(const q in s){const k=s[q],fe=Ve(k)?k.bind(n,n):Ve(k.get)?k.get.bind(n,n):kn,pe=!Ve(k)&&Ve(k.set)?k.set.bind(n):kn,_e=ge({get:fe,set:pe});Object.defineProperty(i,q,{enumerable:!0,configurable:!0,get:()=>_e.value,set:ue=>_e.value=ue})}if(a)for(const q in a)Vh(a[q],i,n,q);if(l){const q=Ve(l)?l.call(n):l;Reflect.ownKeys(q).forEach(k=>{Ra(k,q[k])})}u&&Wu(u,t,"c");function U(q,k){Ne(k)?k.forEach(fe=>q(fe.bind(n))):k&&q(k.bind(n))}if(U(yg,f),U(Oi,d),U(Mg,p),U(Eg,v),U(xg,x),U(zh,m),U(Ag,I),U(wg,E),U(Tg,C),U(_i,A),U(es,M),U(bg,S),Ne(y))if(y.length){const q=t.exposed||(t.exposed={});y.forEach(k=>{Object.defineProperty(q,k,{get:()=>n[k],set:fe=>n[k]=fe,enumerable:!0})})}else t.exposed||(t.exposed={});D&&t.render===kn&&(t.render=D),P!=null&&(t.inheritAttrs=P),F&&(t.components=F),V&&(t.directives=V),S&&Bh(t)}function Ig(t,e,n=kn){Ne(t)&&(t=Yl(t));for(const i in t){const r=t[i];let s;rt(r)?"default"in r?s=Cn(r.from||i,r.default,!0):s=Cn(r.from||i):s=Cn(r),Nt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Wu(t,e,n){_n(Ne(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Vh(t,e,n,i){let r=i.includes(".")?Dh(n,i):()=>n[i];if(ft(t)){const s=e[t];Ve(s)&&tt(r,s)}else if(Ve(t))tt(r,t.bind(n));else if(rt(t))if(Ne(t))t.forEach(s=>Vh(s,e,n,i));else{const s=Ve(t.handler)?t.handler.bind(n):e[t.handler];Ve(s)&&tt(r,s,t)}}function Gh(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>aa(l,c,o,!0)),aa(l,e,o)),rt(e)&&s.set(e,l),l}function aa(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&aa(t,s,n,!0),r&&r.forEach(o=>aa(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=Ug[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Ug={data:qu,props:Xu,emits:Xu,methods:As,computed:As,beforeCreate:Ot,created:Ot,beforeMount:Ot,mounted:Ot,beforeUpdate:Ot,updated:Ot,beforeDestroy:Ot,beforeUnmount:Ot,destroyed:Ot,unmounted:Ot,activated:Ot,deactivated:Ot,errorCaptured:Ot,serverPrefetch:Ot,components:As,directives:As,watch:Fg,provide:qu,inject:Ng};function qu(t,e){return e?t?function(){return xt(Ve(t)?t.call(this,this):t,Ve(e)?e.call(this,this):e)}:e:t}function Ng(t,e){return As(Yl(t),Yl(e))}function Yl(t){if(Ne(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ot(t,e){return t?[...new Set([].concat(t,e))]:e}function As(t,e){return t?xt(Object.create(null),t,e):e}function Xu(t,e){return t?Ne(t)&&Ne(e)?[...new Set([...t,...e])]:xt(Object.create(null),Gu(t),Gu(e??{})):e}function Fg(t,e){if(!t)return e;if(!e)return t;const n=xt(Object.create(null),t);for(const i in e)n[i]=Ot(t[i],e[i]);return n}function Wh(){return{app:null,config:{isNativeTag:th,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Og=0;function Bg(t,e){return function(i,r=null){Ve(i)||(i=xt({},i)),r!=null&&!rt(r)&&(r=null);const s=Wh(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:Og++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:g_,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&Ve(u.install)?(o.add(u),u.install(c,...f)):Ve(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,d){if(!l){const p=c._ceVNode||$e(i,r);return p.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),t(p,u,d),l=!0,c._container=u,u.__vue_app__=c,Na(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(_n(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=$r;$r=c;try{return u()}finally{$r=f}}};return c}}let $r=null;const zg=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${nn(e)}Modifiers`]||t[`${pr(e)}Modifiers`];function kg(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||ot;let r=n;const s=e.startsWith("update:"),o=s&&zg(i,e.slice(7));o&&(o.trim&&(r=n.map(u=>ft(u)?u.trim():u)),o.number&&(r=r.map(Am)));let a,l=i[a=Xa(e)]||i[a=Xa(nn(e))];!l&&s&&(l=i[a=Xa(pr(e))]),l&&_n(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,_n(c,t,6,r)}}const Hg=new WeakMap;function qh(t,e,n=!1){const i=n?Hg:e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!Ve(t)){const l=c=>{const u=qh(c,e,!0);u&&(a=!0,xt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(rt(t)&&i.set(t,null),null):(Ne(s)?s.forEach(l=>o[l]=null):xt(o,s),rt(t)&&i.set(t,o),o)}function Ia(t,e){return!t||!Ma(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),nt(t,e[0].toLowerCase()+e.slice(1))||nt(t,pr(e))||nt(t,e))}function $u(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:p,ctx:v,inheritAttrs:x}=t,m=ra(t);let h,A;try{if(n.shapeFlag&4){const M=r||i,D=M;h=Fn(c.call(D,M,u,f,p,d,v)),A=a}else{const M=e;h=Fn(M.length>1?M(f,{attrs:a,slots:o,emit:l}):M(f,null)),A=e.props?a:Vg(a)}}catch(M){ur.length=0,Ca(M,t,1),h=$e(Ht)}let b=h;if(A&&x!==!1){const M=Object.keys(A),{shapeFlag:D}=b;M.length&&D&7&&(s&&M.some(Ea)&&(A=Gg(A,s)),b=Ni(b,A,!1,!0))}if(n.dirs&&(b=Ni(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition){const M=Pa(b.type)&&sa(b)||b;Vs(M,n.transition)}return h=b,ra(m),h}const Vg=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ma(n))&&((e||(e={}))[n]=t[n]);return e},Gg=(t,e)=>{const n={};for(const i in t)(!Ea(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Wg(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Yu(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(Xh(o,i,d)&&!Ia(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Yu(i,o,c):!0:!!o;return!1}function Yu(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(Xh(e,t,s)&&!Ia(n,s))return!0}return!1}function Xh(t,e,n){const i=t[n],r=e[n];return n==="style"&&rt(i)&&rt(r)?!wa(i,r):i!==r}function qg({vnode:t,parent:e,suspense:n},i){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.suspense.vnode.el=r.el=i,t=r),r===t)(t=e.vnode).el=i,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=i)}const $h={},Yh=()=>Object.create($h),Kh=t=>Object.getPrototypeOf(t)===$h;function Xg(t,e,n,i=!1){const r={},s=Yh();t.propsDefaults=Object.create(null),jh(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:ng(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function $g(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=je(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Ia(t.emitsOptions,d))continue;const p=e[d];if(l)if(nt(s,d))p!==s[d]&&(s[d]=p,c=!0);else{const v=nn(d);r[v]=Kl(l,a,v,p,t,!1)}else p!==s[d]&&(s[d]=p,c=!0)}}}else{jh(t,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!nt(e,f)&&((u=pr(f))===f||!nt(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=Kl(l,a,f,void 0,t,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!nt(e,f))&&(delete s[f],c=!0)}c&&ii(t.attrs,"set","")}function jh(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ls(l))continue;const c=e[l];let u;r&&nt(r,u=nn(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:Ia(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=je(n),c=a||ot;for(let u=0;u<s.length;u++){const f=s[u];n[f]=Kl(r,l,f,c[f],t,!nt(c,f))}}return o}function Kl(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=nt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ve(l)){const{propsDefaults:c}=r;if(n in c)i=c[n];else{const u=to(r);i=c[n]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(n,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===pr(n))&&(i=!0))}return i}const Yg=new WeakMap;function Zh(t,e,n=!1){const i=n?Yg:e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!Ve(t)){const u=f=>{l=!0;const[d,p]=Zh(f,e,!0);xt(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return rt(t)&&i.set(t,rr),rr;if(Ne(s))for(let u=0;u<s.length;u++){const f=nn(s[u]);Ku(f)&&(o[f]=ot)}else if(s)for(const u in s){const f=nn(u);if(Ku(f)){const d=s[u],p=o[f]=Ne(d)||Ve(d)?{type:d}:xt({},d),v=p.type;let x=!1,m=!0;if(Ne(v))for(let h=0;h<v.length;++h){const A=v[h],b=Ve(A)&&A.name;if(b==="Boolean"){x=!0;break}else b==="String"&&(m=!1)}else x=Ve(v)&&v.name==="Boolean";p[0]=x,p[1]=m,(x||nt(p,"default"))&&a.push(f)}}const c=[o,a];return rt(t)&&i.set(t,c),c}function Ku(t){return t[0]!=="$"&&!Ls(t)}const au=t=>t==="_"||t==="_ctx"||t==="$stable",lu=t=>Ne(t)?t.map(Fn):[Fn(t)],Kg=(t,e,n)=>{if(e._n)return e;const i=At((...r)=>lu(e(...r)),n);return i._c=!1,i},Jh=(t,e,n)=>{const i=t._ctx;for(const r in t){if(au(r))continue;const s=t[r];if(Ve(s))e[r]=Kg(r,s,i);else if(s!=null){const o=lu(s);e[r]=()=>o}}},Qh=(t,e)=>{const n=lu(e);t.slots.default=()=>n},ep=(t,e,n)=>{for(const i in e)(n||!au(i))&&(t[i]=e[i])},jg=(t,e,n)=>{const i=t.slots=Yh();if(t.vnode.shapeFlag&32){const r=e._;r?(ep(i,e,n),n&&sh(i,"_",r,!0)):Jh(e,i)}else e&&Qh(t,e)},Zg=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=ot;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:ep(r,e,n):(s=!e.$stable,Jh(e,r)),o=e}else e&&(Qh(t,e),o={default:1});if(s)for(const a in r)!au(a)&&o[a]==null&&delete r[a]},$t=n_;function Jg(t){return Qg(t)}function Qg(t,e){const n=Ta();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:p=kn,insertStaticContent:v}=t,x=(g,L,X,ee=null,H=null,Z=null,te=void 0,ne=null,T=!!L.dynamicChildren)=>{if(g===L)return;g&&!tr(g,L)&&(ee=Se(g),ue(g,H,Z,!0),g=null),L.patchFlag===-2&&(T=!1,L.dynamicChildren=null),L.dynamicChildren&&g&&g.dynamicChildren&&g.dynamicChildren.hasOnce&&(L.dynamicChildren===rr&&(L.dynamicChildren=[]),L.dynamicChildren.hasOnce=!0);const{type:_,ref:N,shapeFlag:O}=L;switch(_){case Ua:m(g,L,X,ee);break;case Ht:h(g,L,X,ee);break;case $o:g==null&&A(L,X,ee,te);break;case Rt:F(g,L,X,ee,H,Z,te,ne,T);break;default:O&1?D(g,L,X,ee,H,Z,te,ne,T):O&6?V(g,L,X,ee,H,Z,te,ne,T):(O&64||O&128)&&_.process(g,L,X,ee,H,Z,te,ne,T,He)}N!=null&&H?Us(N,g&&g.ref,Z,L||g,!L):N==null&&g&&g.ref!=null&&Us(g.ref,null,Z,g,!0)},m=(g,L,X,ee)=>{if(g==null)i(L.el=a(L.children),X,ee);else{const H=L.el=g.el;L.children!==g.children&&c(H,L.children)}},h=(g,L,X,ee)=>{g==null?i(L.el=l(L.children||""),X,ee):L.el=g.el},A=(g,L,X,ee)=>{[g.el,g.anchor]=v(g.children,L,X,ee,g.el,g.anchor)},b=({el:g,anchor:L},X,ee)=>{let H;for(;g&&g!==L;)H=d(g),i(g,X,ee),g=H;i(L,X,ee)},M=({el:g,anchor:L})=>{let X;for(;g&&g!==L;)X=d(g),r(g),g=X;r(L)},D=(g,L,X,ee,H,Z,te,ne,T)=>{if(L.type==="svg"?te="svg":L.type==="math"&&(te="mathml"),g==null)E(L,X,ee,H,Z,te,ne,T);else{const _=g.el&&g.el._isVueCE?g.el:null;try{_&&_._beginPatch(),S(g,L,H,Z,te,ne,T)}finally{_&&_._endPatch()}}},E=(g,L,X,ee,H,Z,te,ne)=>{let T,_;const{props:N,shapeFlag:O,transition:$,dirs:R}=g;if(T=g.el=o(g.type,Z,N&&N.is,N),O&8?u(T,g.children):O&16&&I(g.children,T,null,ee,H,el(g,Z),te,ne),R&&ki(g,null,ee,"created"),C(T,g,g.scopeId,te,ee),N){for(const re in N)re!=="value"&&!Ls(re)&&s(T,re,null,N[re],Z,ee);"value"in N&&s(T,"value",null,N.value,Z),(_=N.onVnodeBeforeMount)&&Ln(_,ee,g)}R&&ki(g,null,ee,"beforeMount");const ie=e_(H,$);ie&&$.beforeEnter(T),i(T,L,X),((_=N&&N.onVnodeMounted)||ie||R)&&$t(()=>{try{_&&Ln(_,ee,g),ie&&$.enter(T),R&&ki(g,null,ee,"mounted")}finally{}},H)},C=(g,L,X,ee,H)=>{if(X&&p(g,X),ee)for(let Z=0;Z<ee.length;Z++)p(g,ee[Z]);if(H){let Z=H.subTree;if(L===Z||rp(Z.type)&&(Z.ssContent===L||Z.ssFallback===L)){const te=H.vnode;C(g,te,te.scopeId,te.slotScopeIds,H.parent)}}},I=(g,L,X,ee,H,Z,te,ne,T=0)=>{for(let _=T;_<g.length;_++){const N=g[_]=ne?ni(g[_]):Fn(g[_]);x(null,N,L,X,ee,H,Z,te,ne)}},S=(g,L,X,ee,H,Z,te)=>{const ne=L.el=g.el;let{patchFlag:T,dynamicChildren:_,dirs:N}=L;T|=g.patchFlag&16;const O=g.props||ot,$=L.props||ot;let R;if(X&&Hi(X,!1),(R=$.onVnodeBeforeUpdate)&&Ln(R,X,L,g),N&&ki(L,g,X,"beforeUpdate"),X&&Hi(X,!0),_&&(!g.dynamicChildren||g.dynamicChildren.length!==_.length)&&(T=0,te=!1,_=null),(O.innerHTML&&$.innerHTML==null||O.textContent&&$.textContent==null)&&u(ne,""),_?y(g.dynamicChildren,_,ne,X,ee,el(L,H),Z):te||k(g,L,ne,null,X,ee,el(L,H),Z,!1),T>0){if(T&16)P(ne,O,$,X,H);else if(T&2&&O.class!==$.class&&s(ne,"class",null,$.class,H),T&4&&s(ne,"style",O.style,$.style,H),T&8){const ie=L.dynamicProps;for(let re=0;re<ie.length;re++){const le=ie[re],be=O[le],oe=$[le];(oe!==be||le==="value")&&s(ne,le,be,oe,H,X)}}T&1&&g.children!==L.children&&u(ne,L.children)}else!te&&_==null&&P(ne,O,$,X,H);((R=$.onVnodeUpdated)||N)&&$t(()=>{R&&Ln(R,X,L,g),N&&ki(L,g,X,"updated")},ee)},y=(g,L,X,ee,H,Z,te)=>{for(let ne=0;ne<L.length;ne++){const T=g[ne],_=L[ne],N=T.el&&(T.type===Rt||!tr(T,_)||T.shapeFlag&198)?f(T.el):X;x(T,_,N,null,ee,H,Z,te,!0)}},P=(g,L,X,ee,H)=>{if(L!==X){if(L!==ot)for(const Z in L)!Ls(Z)&&!(Z in X)&&s(g,Z,L[Z],null,H,ee);for(const Z in X){if(Ls(Z))continue;const te=X[Z],ne=L[Z];te!==ne&&Z!=="value"&&s(g,Z,ne,te,H,ee)}"value"in X&&s(g,"value",L.value,X.value,H)}},F=(g,L,X,ee,H,Z,te,ne,T)=>{const _=L.el=g?g.el:a(""),N=L.anchor=g?g.anchor:a("");let{patchFlag:O,dynamicChildren:$,slotScopeIds:R}=L;R&&(ne=ne?ne.concat(R):R),g==null?(i(_,X,ee),i(N,X,ee),I(L.children||[],X,N,H,Z,te,ne,T)):O>0&&O&64&&$&&g.dynamicChildren&&g.dynamicChildren.length===$.length?(y(g.dynamicChildren,$,X,H,Z,te,ne),(L.key!=null||H&&L===H.subTree)&&tp(g,L,!0)):k(g,L,X,N,H,Z,te,ne,T)},V=(g,L,X,ee,H,Z,te,ne,T)=>{L.slotScopeIds=ne,g==null?L.shapeFlag&512?H.ctx.activate(L,X,ee,te,T):J(L,X,ee,H,Z,te,T):G(g,L,T)},J=(g,L,X,ee,H,Z,te)=>{const ne=g.component=u_(g,ee,H);if(La(g)&&(ne.ctx.renderer=He),f_(ne,!1,te),ne.asyncDep){if(H&&H.registerDep(ne,U,te),!g.el){const T=ne.subTree=$e(Ht);h(null,T,L,X),g.placeholder=T.el}}else U(ne,g,L,X,H,Z,te)},G=(g,L,X)=>{const ee=L.component=g.component;if(Wg(g,L,X))if(ee.asyncDep&&!ee.asyncResolved){L.el=g.el,q(ee,L,X);return}else ee.next=L,ee.update();else L.el=g.el,ee.vnode=L},U=(g,L,X,ee,H,Z,te)=>{const ne=()=>{if(g.isMounted){let{next:O,bu:$,u:R,parent:ie,vnode:re}=g;{const ke=np(g);if(ke){O&&(O.el=re.el,q(g,O,te)),ke.asyncDep.then(()=>{$t(()=>{g.isUnmounted||_()},H)});return}}let le=O,be;Hi(g,!1),O?(O.el=re.el,q(g,O,te)):O=re,$&&$a($),(be=O.props&&O.props.onVnodeBeforeUpdate)&&Ln(be,ie,O,re),Hi(g,!0);const oe=$u(g),ve=g.subTree;g.subTree=oe,x(ve,oe,f(ve.el),Se(ve),g,H,Z),O.el=oe.el,le===null&&qg(g,oe.el),R&&$t(R,H),(be=O.props&&O.props.onVnodeUpdated)&&$t(()=>Ln(be,ie,O,re),H)}else{let O;const{el:$,props:R}=L,{bm:ie,m:re,parent:le,root:be,type:oe}=g,ve=Ns(L);Hi(g,!1),ie&&$a(ie),!ve&&(O=R&&R.onVnodeBeforeMount)&&Ln(O,le,L),Hi(g,!0);{be.ce&&be.ce._hasShadowRoot()&&be.ce._injectChildStyle(oe,g.parent?g.parent.type:void 0);const ke=g.subTree=$u(g);x(null,ke,X,ee,g,H,Z),L.el=ke.el}if(re&&$t(re,H),!ve&&(O=R&&R.onVnodeMounted)){const ke=L;$t(()=>Ln(O,le,ke),H)}(L.shapeFlag&256||le&&Ns(le.vnode)&&le.vnode.shapeFlag&256)&&g.a&&$t(g.a,H),g.isMounted=!0,L=X=ee=null}};g.scope.on();const T=g.effect=new ch(ne);g.scope.off();const _=g.update=T.run.bind(T),N=g.job=T.runIfDirty.bind(T);N.i=g,N.id=g.uid,T.scheduler=()=>ou(N),Hi(g,!0),_()},q=(g,L,X)=>{L.component=g;const ee=g.vnode.props;g.vnode=L,g.next=null,$g(g,L.props,ee,X),Zg(g,L.children,X),ci(),zu(g),ui()},k=(g,L,X,ee,H,Z,te,ne,T=!1)=>{const _=g&&g.children,N=g?g.shapeFlag:0,O=L.children,{patchFlag:$,shapeFlag:R}=L;if($>0){if($&128){pe(_,O,X,ee,H,Z,te,ne,T);return}else if($&256){fe(_,O,X,ee,H,Z,te,ne,T);return}}R&8?(N&16&&ye(_,H,Z),O!==_&&u(X,O)):N&16?R&16?pe(_,O,X,ee,H,Z,te,ne,T):ye(_,H,Z,!0):(N&8&&u(X,""),R&16&&I(O,X,ee,H,Z,te,ne,T))},fe=(g,L,X,ee,H,Z,te,ne,T)=>{g=g||rr,L=L||rr;const _=g.length,N=L.length,O=Math.min(_,N);let $;for($=0;$<O;$++){const R=L[$]=T?ni(L[$]):Fn(L[$]);x(g[$],R,X,null,H,Z,te,ne,T)}_>N?ye(g,H,Z,!0,!1,O):I(L,X,ee,H,Z,te,ne,T,O)},pe=(g,L,X,ee,H,Z,te,ne,T)=>{let _=0;const N=L.length;let O=g.length-1,$=N-1;for(;_<=O&&_<=$;){const R=g[_],ie=L[_]=T?ni(L[_]):Fn(L[_]);if(tr(R,ie))x(R,ie,X,null,H,Z,te,ne,T);else break;_++}for(;_<=O&&_<=$;){const R=g[O],ie=L[$]=T?ni(L[$]):Fn(L[$]);if(tr(R,ie))x(R,ie,X,null,H,Z,te,ne,T);else break;O--,$--}if(_>O){if(_<=$){const R=$+1,ie=R<N?L[R].el:ee;for(;_<=$;)x(null,L[_]=T?ni(L[_]):Fn(L[_]),X,ie,H,Z,te,ne,T),_++}}else if(_>$)for(;_<=O;)ue(g[_],H,Z,!0),_++;else{const R=_,ie=_,re=new Map;for(_=ie;_<=$;_++){const Ce=L[_]=T?ni(L[_]):Fn(L[_]);Ce.key!=null&&re.set(Ce.key,_)}let le,be=0;const oe=$-ie+1;let ve=!1,ke=0;const De=new Array(oe);for(_=0;_<oe;_++)De[_]=0;for(_=R;_<=O;_++){const Ce=g[_];if(be>=oe){ue(Ce,H,Z,!0);continue}let Ie;if(Ce.key!=null)Ie=re.get(Ce.key);else for(le=ie;le<=$;le++)if(De[le-ie]===0&&tr(Ce,L[le])){Ie=le;break}Ie===void 0?ue(Ce,H,Z,!0):(De[Ie-ie]=_+1,Ie>=ke?ke=Ie:ve=!0,x(Ce,L[Ie],X,null,H,Z,te,ne,T),be++)}const Ee=ve?t_(De):rr;for(le=Ee.length-1,_=oe-1;_>=0;_--){const Ce=ie+_,Ie=L[Ce],at=L[Ce+1],B=Ce+1<N?at.el||ip(at):ee;De[_]===0?x(null,Ie,X,B,H,Z,te,ne,T):ve&&(le<0||_!==Ee[le]?_e(Ie,X,B,2):le--)}}},_e=(g,L,X,ee,H=null)=>{const{el:Z,type:te,transition:ne,children:T,shapeFlag:_}=g;if(_&6){_e(g.component.subTree,L,X,ee);return}if(_&128){g.suspense.move(L,X,ee);return}if(_&64){te.move(g,L,X,He);return}if(te===Rt){i(Z,L,X);for(let O=0;O<T.length;O++)_e(T[O],L,X,ee);i(g.anchor,L,X);return}if(te===$o){b(g,L,X);return}if(ee!==2&&_&1&&ne)if(ee===0)ne.persisted&&!Z[cn]?i(Z,L,X):(ne.beforeEnter(Z),i(Z,L,X),$t(()=>ne.enter(Z),H));else{const{leave:O,delayLeave:$,afterLeave:R}=ne,ie=()=>{g.ctx.isUnmounted?r(Z):i(Z,L,X)},re=()=>{const le=Z._isLeaving||!!Z[cn];Z._isLeaving&&Z[cn](!0),ne.persisted&&!le?ie():O(Z,()=>{ie(),R&&R()})};$?$(Z,ie,re):re()}else i(Z,L,X)},ue=(g,L,X,ee=!1,H=!1)=>{const{type:Z,props:te,ref:ne,children:T,dynamicChildren:_,shapeFlag:N,patchFlag:O,dirs:$,cacheIndex:R,memo:ie}=g;if((O===-2||_&&_.hasOnce)&&(H=!1),ne!=null&&(ci(),Us(ne,null,X,g,!0),ui()),R!=null&&(!g.ctx||g.ctx===L)&&(L.renderCache[R]=void 0),N&256){L.ctx.deactivate(g);return}const re=N&1&&$,le=!Ns(g);let be;if(le&&(be=te&&te.onVnodeBeforeUnmount)&&Ln(be,L,g),N&6)ce(g.component,X,ee);else{if(N&128){g.suspense.unmount(X,ee);return}re&&ki(g,null,L,"beforeUnmount"),N&64?g.type.remove(g,L,X,He,ee):_&&!_.hasOnce&&(Z!==Rt||O>0&&O&64)?ye(_,L,X,!1,!0):(Z===Rt&&O&384||!H&&N&16)&&ye(T,L,X),ee&&Be(g)}const oe=ie!=null&&R==null;(le&&(be=te&&te.onVnodeUnmounted)||re||oe)&&$t(()=>{be&&Ln(be,L,g),re&&ki(g,null,L,"unmounted"),oe&&(g.el=null)},X)},Be=g=>{const{type:L,el:X,anchor:ee,transition:H}=g;if(L===Rt){Q(X,ee);return}if(L===$o){M(g),H&&!H.persisted&&H.afterLeave&&H.afterLeave();return}const Z=()=>{r(X),H&&!H.persisted&&H.afterLeave&&H.afterLeave()};if(g.shapeFlag&1&&H&&!H.persisted){const{leave:te,delayLeave:ne}=H,T=()=>te(X,Z);ne?ne(g.el,Z,T):T()}else Z()},Q=(g,L)=>{let X;for(;g!==L;)X=d(g),r(g),g=X;r(L)},ce=(g,L,X)=>{const{bum:ee,scope:H,job:Z,subTree:te,um:ne,m:T,a:_}=g;ju(T),ju(_),ee&&$a(ee),H.stop(),Z?(Z.flags|=8,ue(te,g,L,X)):g.vnode.el&&te&&(te.transition=g.vnode.transition,ue(te,g,L,X)),ne&&$t(ne,L),$t(()=>{g.isUnmounted=!0},L)},ye=(g,L,X,ee=!1,H=!1,Z=0)=>{for(let te=Z;te<g.length;te++)ue(g[te],L,X,ee,H)},Se=g=>{if(g.shapeFlag&6)return Se(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const L=d(g.anchor||g.el),X=L&&L[mg];return X?d(X):L};let Pe=!1;const Ae=(g,L,X)=>{let ee;g==null?L._vnode&&(ue(L._vnode,null,null,!0),ee=L._vnode.component):x(L._vnode||null,g,L,null,null,null,X),L._vnode=g,Pe||(Pe=!0,zu(ee),Ch(),Pe=!1)},He={p:x,um:ue,m:_e,r:Be,mt:J,mc:I,pc:k,pbc:y,n:Se,o:t};return{render:Ae,hydrate:void 0,createApp:Bg(Ae)}}function el({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Hi({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function e_(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function tp(t,e,n=!1){const i=t.children,r=e.children;if(Ne(i)&&Ne(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=ni(r[s]),a.el=o.el),!n&&a.patchFlag!==-2&&tp(o,a)),a.type===Ua&&(a.patchFlag===-1&&(a=r[s]=ni(a)),a.el=o.el),a.type===Ht&&!a.el&&(a.el=o.el)}}function t_(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function np(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:np(e)}function ju(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function ip(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?ip(e.subTree):null}const rp=t=>t.__isSuspense;function n_(t,e){e&&e.pendingBranch?Ne(t)?e.effects.push(...t):e.effects.push(t):fg(t)}const Rt=Symbol.for("v-fgt"),Ua=Symbol.for("v-txt"),Ht=Symbol.for("v-cmt"),$o=Symbol.for("v-stc"),ur=[];let tn=null;function Ct(t=!1){ur.push(tn=t?null:[])}function sp(){ur.pop(),tn=ur[ur.length-1]||null}let Gs=1;function la(t,e=!1){Gs+=t,t<0&&tn&&e&&(tn.hasOnce=!0)}function op(t){return t.dynamicChildren=Gs>0?tn||rr:null,sp(),Gs>0&&tn&&tn.push(t),t}function Yt(t,e,n,i,r,s){return op(Ge(t,e,n,i,r,s,!0))}function cu(t,e,n,i,r){return op($e(t,e,n,i,r,!0))}function ca(t){return t?t.__v_isVNode===!0:!1}function tr(t,e){return t.type===e.type&&t.key===e.key}const ap=({key:t})=>t??null,Yo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ft(t)||Nt(t)||Ve(t)?{i:en,r:t,k:e,f:!!n}:t:null);function Ge(t,e=null,n=null,i=0,r=null,s=t===Rt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ap(e),ref:e&&Yo(e),scopeId:Ph,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:en};return a?(ua(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=ft(n)?8:16),Gs>0&&!o&&tn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&tn.push(l),l}const $e=i_;function i_(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===Rg)&&(t=Ht),ca(t)){const a=Ni(t,e,!0);return n&&ua(a,n),Gs>0&&!s&&tn&&(a.shapeFlag&6?tn[tn.indexOf(t)]=a:tn.push(a)),a.patchFlag=-2,a}if(m_(t)&&(t=t.__vccOpts),e){e=r_(e);let{class:a,style:l}=e;a&&!ft(a)&&(e.class=fr(a)),rt(l)&&(ru(l)&&!Ne(l)&&(l=xt({},l)),e.style=Os(l))}const o=ft(t)?1:rp(t)?128:Pa(t)?64:rt(t)?4:Ve(t)?2:0;return Ge(t,e,n,i,r,o,s,!0)}function r_(t){return t?ru(t)||Kh(t)?xt({},t):t:null}function Ni(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=t,c=e?a_(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&ap(c),ref:e&&e.ref?n&&s?Ne(s)?s.concat(Yo(e)):[s,Yo(e)]:Yo(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Rt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ni(t.ssContent),ssFallback:t.ssFallback&&Ni(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce,cacheIndex:t.cacheIndex};return l&&i&&Vs(u,l.clone(u)),u}function fn(t=" ",e=0){return $e(Ua,null,t,e)}function s_(t,e){const n=$e($o,null,t);return n.staticCount=e,n}function o_(t="",e=!1){return e?(Ct(),cu(Ht,null,t)):$e(Ht,null,t)}function Fn(t){return t==null||typeof t=="boolean"?$e(Ht):Ne(t)?$e(Rt,null,t.slice()):ca(t)?ni(t):$e(Ua,null,String(t))}function ni(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ni(t)}function ua(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Ne(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),ua(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!Kh(e)?e._ctx=en:r===3&&en&&(en.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else if(Ve(e)){if(i&65){ua(t,{default:e});return}e={default:e,_ctx:en},n=32}else e=String(e),i&64?(n=16,e=[fn(e)]):n=8;t.children=e,t.shapeFlag|=n}function a_(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=fr([e.class,i.class]));else if(r==="style")e.style=Os([e.style,i.style]);else if(Ma(r)){const s=e[r],o=i[r];o&&s!==o&&!(Ne(s)&&s.includes(o))?e[r]=s?[].concat(s,o):o:o==null&&s==null&&!Ea(r)&&(e[r]=o)}else r!==""&&(e[r]=i[r])}return e}function Ln(t,e,n,i=null){_n(t,e,7,[n,i])}const l_=Wh();let c_=0;function u_(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||l_,s={uid:c_++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Om(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Zh(i,r),emitsOptions:qh(i,r),emit:null,emitted:null,propsDefaults:ot,inheritAttrs:i.inheritAttrs,ctx:ot,data:ot,props:ot,attrs:ot,slots:ot,refs:ot,setupState:ot,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=kg.bind(null,s),t.ce&&t.ce(s),s}let Ut=null;const Wn=()=>Ut||en;let fa,Ws;{const t=Ta(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};fa=e("__VUE_INSTANCE_SETTERS__",n=>Ut=n),Ws=e("__VUE_SSR_SETTERS__",n=>qs=n)}const to=t=>{const e=Ut;return fa(t),t.scope.on(),()=>{t.scope.off(),fa(e)}},Zu=()=>{Ut&&Ut.scope.off(),fa(null)};function lp(t){return t.vnode.shapeFlag&4}let qs=!1;function f_(t,e=!1,n=!1){e&&Ws(e);const{props:i,children:r}=t.vnode,s=lp(t);Xg(t,i,s,e),jg(t,r,n||e);const o=s?d_(t,e):void 0;return e&&Ws(!1),o}function d_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Lg);const{setup:i}=n;if(i){ci();const r=t.setupContext=i.length>1?p_(t):null,s=to(t),o=Qs(i,t,0,[t.props,r]),a=nh(o);if(ui(),s(),(a||t.sp)&&!Ns(t)&&Bh(t),a){if(o.then(Zu,Zu),e)return o.then(l=>{Ws(!0);try{Ju(t,l,e)}finally{Ws(!1)}}).catch(l=>{Ca(l,t,0)});t.asyncDep=o}else Ju(t,o)}else cp(t)}function Ju(t,e,n){Ve(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:rt(e)&&(t.setupState=Th(e)),cp(t)}function cp(t,e,n){const i=t.type;t.render||(t.render=i.render||kn);{const r=to(t);ci();try{Dg(t)}finally{ui(),r()}}}const h_={get(t,e){return It(t,"get",""),t[e]}};function p_(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,h_),slots:t.slots,emit:t.emit,expose:e}}function Na(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Th(su(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Fs)return Fs[n](t)},has(e,n){return n in e||n in Fs}})):t.proxy}function m_(t){return Ve(t)&&"__vccOpts"in t}const ge=(t,e)=>og(t,e,qs);function Ue(t,e,n){try{la(-1);const i=arguments.length;return i===2?rt(e)&&!Ne(e)?ca(e)?$e(t,null,[e]):$e(t,e):$e(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&ca(n)&&(n=[n]),$e(t,e,n))}finally{la(1)}}const g_="3.5.43";/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let jl;const Qu=typeof window<"u"&&window.trustedTypes;if(Qu)try{jl=Qu.createPolicy("vue",{createHTML:t=>t})}catch{}const up=jl?t=>jl.createHTML(t):t=>t,__="http://www.w3.org/2000/svg",v_="http://www.w3.org/1998/Math/MathML",ti=typeof document<"u"?document:null,ef=ti&&ti.createElement("template"),x_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?ti.createElementNS(__,t):e==="mathml"?ti.createElementNS(v_,t):n?ti.createElement(t,{is:n}):ti.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>ti.createTextNode(t),createComment:t=>ti.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ti.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{ef.innerHTML=up(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=ef.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},xi="transition",ms="animation",Xs=Symbol("_vtc"),fp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},S_=xt({},Ih,fp),y_=t=>(t.displayName="Transition",t.props=S_,t),M_=y_((t,{slots:e})=>Ue(vg,E_(t),e)),Vi=(t,e=[])=>{Ne(t)?t.forEach(n=>n(...e)):t&&t(...e)},tf=t=>t?Ne(t)?t.some(e=>e.length>1):t.length>1:!1;function E_(t){const e={};for(const F in t)F in fp||(e[F]=t[F]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,v=b_(r),x=v&&v[0],m=v&&v[1],{onBeforeEnter:h,onEnter:A,onEnterCancelled:b,onLeave:M,onLeaveCancelled:D,onBeforeAppear:E=h,onAppear:C=A,onAppearCancelled:I=b}=e,S=(F,V,J,G)=>{F._enterCancelled=G,Gi(F,V?u:a),Gi(F,V?c:o),J&&J()},y=(F,V)=>{F._isLeaving=!1,Gi(F,f),Gi(F,p),Gi(F,d),V&&V()},P=F=>(V,J)=>{const G=F?C:A,U=()=>S(V,F,J);Vi(G,[V,U]),nf(()=>{Gi(V,F?l:s),Yn(V,F?u:a),tf(G)||rf(V,i,x,U)})};return xt(e,{onBeforeEnter(F){Vi(h,[F]),Yn(F,s),Yn(F,o)},onBeforeAppear(F){Vi(E,[F]),Yn(F,l),Yn(F,c)},onEnter:P(!1),onAppear:P(!0),onLeave(F,V){F._isLeaving=!0;const J=()=>y(F,V);Yn(F,f),F._enterCancelled?(Yn(F,d),af(F)):(af(F),Yn(F,d)),nf(()=>{F._isLeaving&&(Gi(F,f),Yn(F,p),tf(M)||rf(F,i,m,J))}),Vi(M,[F,J])},onEnterCancelled(F){S(F,!1,void 0,!0),Vi(b,[F])},onAppearCancelled(F){S(F,!0,void 0,!0),Vi(I,[F])},onLeaveCancelled(F){y(F),Vi(D,[F])}})}function b_(t){if(t==null)return null;if(rt(t))return[tl(t.enter),tl(t.leave)];{const e=tl(t);return[e,e]}}function tl(t){return Cm(t)}function Yn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Xs]||(t[Xs]=new Set)).add(e)}function Gi(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[Xs];n&&(n.delete(e),n.size||(t[Xs]=void 0))}function nf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let T_=0;function rf(t,e,n,i){const r=t._endId=++T_,s=()=>{r===t._endId&&i()};if(n!=null)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=w_(t,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{t.removeEventListener(c,d),s()},d=p=>{p.target===t&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),t.addEventListener(c,d)}function w_(t,e){const n=window.getComputedStyle(t),i=v=>(n[v]||"").split(", "),r=i(`${xi}Delay`),s=i(`${xi}Duration`),o=sf(r,s),a=i(`${ms}Delay`),l=i(`${ms}Duration`),c=sf(a,l);let u=null,f=0,d=0;e===xi?o>0&&(u=xi,f=o,d=s.length):e===ms?c>0&&(u=ms,f=c,d=l.length):(f=Math.max(o,c),u=f>0?o>c?xi:ms:null,d=u?u===xi?s.length:l.length:0);const p=u===xi&&/\b(?:transform|all)(?:,|$)/.test(i(`${xi}Property`).toString());return{type:u,timeout:f,propCount:d,hasTransform:p}}function sf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>of(n)+of(t[i])))}function of(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function af(t){return(t?t.ownerDocument:document).body.offsetHeight}function A_(t,e,n){const i=t[Xs];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const lf=Symbol("_vod"),C_=Symbol("_vsh"),R_=Symbol(""),P_=/(?:^|;)\s*display\s*:/;function L_(t,e,n){const i=t.style,r=ft(n);let s=!1;if(n&&!r){if(e)if(ft(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Cs(i,a,"")}else for(const o in e)n[o]==null&&Cs(i,o,"");for(const o in n){o==="display"&&(s=!0);const a=n[o];a!=null?I_(t,o,!ft(e)&&e?e[o]:void 0,a)||Cs(i,o,a):Cs(i,o,"")}}else if(r){if(e!==n){const o=i[R_];o&&(n+=";"+o),i.cssText=n,s=P_.test(n)}}else e&&t.removeAttribute("style");lf in t&&(t[lf]=s?i.display:"",t[C_]&&(i.display="none"))}const ho=/\s*!important$/;function Cs(t,e,n){if(Ne(n))n.forEach(i=>Cs(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))ho.test(n)?t.setProperty(e,n.replace(ho,""),"important"):t.setProperty(e,n);else{const i=D_(t,e);ho.test(n)?t.setProperty(pr(i),n.replace(ho,""),"important"):t[i]=n}}const cf=["Webkit","Moz","ms"],nl={};function D_(t,e){const n=nl[e];if(n)return n;let i=nn(e);if(i!=="filter"&&i in t)return nl[e]=i;i=Zc(i);for(let r=0;r<cf.length;r++){const s=cf[r]+i;if(s in t)return nl[e]=s}return e}function I_(t,e,n,i){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&ft(i)&&n===i}const uf="http://www.w3.org/1999/xlink";function ff(t,e,n,i,r,s=Um(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(uf,e.slice(6,e.length)):t.setAttributeNS(uf,e,n):n==null||s&&!oh(n)?t.removeAttribute(e):t.setAttribute(e,s?"":Vn(n)?String(n):n)}function df(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?up(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=oh(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function U_(t,e,n,i){t.addEventListener(e,n,i)}function N_(t,e,n,i){t.removeEventListener(e,n,i)}const hf=Symbol("_vei");function F_(t,e,n,i,r=null){const s=t[hf]||(t[hf]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=z_(e);if(i){const c=s[e]=V_(i,r);U_(t,a,c,l)}else o&&(N_(t,a,o,l),s[e]=void 0)}}const O_=/(Once|Passive|Capture)$/,B_=/^on:?(?:Once|Passive|Capture)$/;function z_(t){let e,n;for(;(n=t.match(O_))&&!B_.test(t);)e||(e={}),t=t.slice(0,t.length-n[1].length),e[n[1].toLowerCase()]=!0;return[t[2]===":"?t.slice(3):pr(t.slice(2)),e]}let il=0;const k_=Promise.resolve(),H_=()=>il||(k_.then(()=>il=0),il=Date.now());function V_(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;const r=n.value;if(Ne(r)){const s=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{s.call(i),i._stopped=!0};const o=r.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&_n(c,e,5,a)}}else _n(r,e,5,[i])};return n.value=t,n.attached=H_(),n}const pf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,G_=(t,e,n,i,r,s)=>{const o=r==="svg";e==="class"?A_(t,i,o):e==="style"?L_(t,n,i):Ma(e)?Ea(e)||F_(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):W_(t,e,i,o))?(df(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ff(t,e,i,o,s,e!=="value")):t._isVueCE&&(q_(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!ft(i)))?df(t,nn(e),i,s,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),ff(t,e,i,o))};function W_(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&pf(e)&&Ve(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return pf(e)&&ft(n)?!1:e in t}function q_(t,e){const n=t._def.props;if(!n)return!1;const i=nn(e);return Array.isArray(n)?n.some(r=>nn(r)===i):Object.keys(n).some(r=>nn(r)===i)}const X_=xt({patchProp:G_},x_);let mf;function $_(){return mf||(mf=Jg(X_))}const Y_=(...t)=>{const e=$_().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=j_(i);if(!r)return;const s=e._component;!Ve(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,K_(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function K_(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function j_(t){return ft(t)?document.querySelector(t):t}function uu(t,e,n,i){return Object.defineProperty(t,e,{get:n,set:i,enumerable:!0}),t}const fi=vt(!1);let Zl;const Z_=512;function J_(t){return typeof t=="string"?t.slice(0,Z_).toLowerCase():""}const Q_=/(?:^|\s)version\/([\w.]+)/,ev=/(?:^|\s)applewebkit\/[\w.]+/,tv=/(?:^|\s)safari\/[\w.]+/;function nv(t){const e=Q_.exec(t);return e!==null&&ev.test(t)&&tv.test(t)?{browser:"safari",version:e[1]}:null}const iv=/(edg|edga|edgios)\/([\w.]+)/,rv=/(opr)[\/]([\w.]+)/,sv=/(vivaldi)[\/]([\w.]+)/,ov=/(chrome|crios)[\/]([\w.]+)/,av=/(firefox|fxios)[\/]([\w.]+)/,lv=/(webkit)[\/]([\w.]+)/;function cv(t,e){let n=iv.exec(t)||rv.exec(t)||sv.exec(t)||ov.exec(t);if(n===null){const i=nv(t);if(i!==null)return{...i,platform:e[0]||""};n=av.exec(t)||lv.exec(t)||[]}return{browser:n[5]||n[3]||n[1]||"",version:n[4]||n[2]||"0",platform:e[0]||""}}const uv=/(ipad)/,fv=/(ipod)/,dv=/(iphone)/,hv=/(android)/,pv=/(win)/,mv=/(mac)/,gv=/(linux)/,_v=/(cros)/;function vv(t){return uv.exec(t)||fv.exec(t)||dv.exec(t)||hv.exec(t)||pv.exec(t)||mv.exec(t)||gv.exec(t)||_v.exec(t)||[]}const dp="ontouchstart"in window||window.navigator.maxTouchPoints>0;function xv(t){const e=J_(t),n=vv(e),i=cv(e,n),r={mobile:!1,desktop:!1,cordova:!1,capacitor:!1,nativeMobile:!1,electron:!1,bex:!1,linux:!1,mac:!1,win:!1,cros:!1,chrome:!1,firefox:!1,opera:!1,safari:!1,vivaldi:!1,edge:!1,webkit:!1,android:!1,ios:!1,ipad:!1,iphone:!1,ipod:!1};i.browser&&(r[i.browser]=!0,r.version=i.version,r.versionNumber=Number.parseInt(i.version,10)),i.platform&&(r[i.platform]=!0);const s=r.android||r.ios||r.ipad||r.iphone||r.ipod;if(s===!0||e.includes("mobile")?r.mobile=!0:r.desktop=!0,r.edga||r.edgios||r.edg?(r.edge=!0,i.browser="edge"):r.crios?(r.chrome=!0,i.browser="chrome"):r.fxios&&(r.firefox=!0,i.browser="firefox"),(r.ipod||r.ipad||r.iphone)&&(r.ios=!0),r.vivaldi&&(i.browser="vivaldi",r.vivaldi=!0),(r.chrome||r.opr||r.safari||r.vivaldi||r.mobile&&!r.ios&&!s)&&(r.webkit=!0),r.opr&&(i.browser="opera",r.opera=!0),r.name=i.browser,r.platform=i.platform,e.includes("electron"))r.electron=!0;else if(document.location.href.includes("-extension://"))r.bex=!0;else{if(window.Capacitor!==void 0?(r.capacitor=!0,r.nativeMobile=!0,r.nativeMobileWrapper="capacitor"):(window._cordovaNative!==void 0||window.cordova!==void 0)&&(r.cordova=!0,r.nativeMobile=!0,r.nativeMobileWrapper="cordova"),fi.value&&(Zl={is:{...r}}),dp&&r.mac&&(r.desktop&&r.safari||r.nativeMobile&&!r.android&&!r.ios&&!r.ipad)){delete r.mac,delete r.desktop;const o=Math.min(window.innerHeight,window.innerWidth)>414?"ipad":"iphone";Object.assign(r,{mobile:!0,ios:!0,platform:o,[o]:!0})}!r.mobile&&window.navigator.userAgentData&&window.navigator.userAgentData.mobile&&(delete r.desktop,r.mobile=!0)}return r}const gf=navigator.userAgent,Sv={has:{touch:!1,webStorage:!1},within:{iframe:!1}},Vt={userAgent:gf,is:xv(gf),has:{touch:dp},within:{iframe:window.self!==window.top}},da={install(t){const{$q:e}=t;fi.value?(t.onSSRHydrated.push(()=>{Object.assign(e.platform,Vt),fi.value=!1}),e.platform=oi(this)):e.platform=this}};{let t;uu(Vt.has,"webStorage",()=>{if(t!==void 0)return t;try{if(window.localStorage)return t=!0,!0}catch{}return t=!1,!1}),Object.assign(da,Vt),fi.value&&(Object.assign(da,Zl,Sv),Zl=null)}function Xt(t){return su(eo(t))}function hp(t){return su(t)}const Fa=(t,e)=>{const n=oi(t);for(const i in t)uu(e,i,()=>n[i],r=>{n[i]=r});return e},Tn={passive:{passive:!0},passiveCapture:{passive:!0,capture:!0},notPassiveCapture:{passive:!1,capture:!0}};function di(){}function yv(t){return t.button===0}function Oa(t){return t.touches&&t.touches[0]?t=t.touches[0]:t.changedTouches&&t.changedTouches[0]?t=t.changedTouches[0]:t.targetTouches&&t.targetTouches[0]&&(t=t.targetTouches[0]),{top:t.clientY,left:t.clientX}}function $s(t){t.stopPropagation()}function Ys(t){t.cancelable!==!1&&t.preventDefault()}function si(t){t.cancelable!==!1&&t.preventDefault(),t.stopPropagation()}function pp(t,e){if(t===void 0||e&&t.__dragPrevented)return;e?t.__dragPrevented=!0:delete t.__dragPrevented;const n=e?i=>{i.__dragPrevented=!0,i.addEventListener("dragstart",Ys,Tn.notPassiveCapture)}:i=>{delete i.__dragPrevented,i.removeEventListener("dragstart",Ys,Tn.notPassiveCapture)};t.querySelectorAll("a, img").forEach(n)}function Mv(t,e=250,n){let i=null;function r(...s){const o=()=>{i=null,t.apply(this,s)};i!==null&&clearTimeout(i),i=setTimeout(o,e)}return r.cancel=()=>{i!==null&&(clearTimeout(i),i=null)},r}const rl=["sm","md","lg","xl"],{passive:_f}=Tn,Ev=Fa({width:0,height:0,name:"xs",sizes:{sm:600,md:1024,lg:1440,xl:1920},lt:{sm:!0,md:!0,lg:!0,xl:!0},gt:{xs:!1,sm:!1,md:!1,lg:!1},xs:!0,sm:!1,md:!1,lg:!1,xl:!1},{setSizes:di,setDebounce:di,install({$q:t,onSSRHydrated:e}){var f;if(t.screen=this,this.__installed){t.config.screen!==void 0&&(t.config.screen.bodyClasses?this.__update(!0):document.body.classList.remove(`screen--${this.name}`));return}const{visualViewport:n}=window,i=n||window,r=document.scrollingElement||document.documentElement,s=n===void 0||Vt.is.mobile?()=>[Math.max(window.innerWidth,r.clientWidth),Math.max(window.innerHeight,r.clientHeight)]:()=>[n.width*n.scale+window.innerWidth-r.clientWidth,n.height*n.scale+window.innerHeight-r.clientHeight],o=((f=t.config.screen)==null?void 0:f.bodyClasses)===!0;this.__update=d=>{const[p,v]=s();if(v!==this.height&&(this.height=v),p!==this.width)this.width=p;else if(d!==!0)return;let x=this.sizes;this.gt.xs=p>=x.sm,this.gt.sm=p>=x.md,this.gt.md=p>=x.lg,this.gt.lg=p>=x.xl,this.lt.sm=p<x.sm,this.lt.md=p<x.md,this.lt.lg=p<x.lg,this.lt.xl=p<x.xl,this.xs=this.lt.sm,this.sm=this.gt.xs&&this.lt.md,this.md=this.gt.sm&&this.lt.lg,this.lg=this.gt.md&&this.lt.xl,this.xl=this.gt.lg,x=this.xs&&"xs"||this.sm&&"sm"||this.md&&"md"||this.lg&&"lg"||"xl",x!==this.name&&(o&&(document.body.classList.remove(`screen--${this.name}`),document.body.classList.add(`screen--${x}`)),this.name=x)};let a,l={},c=16;this.setSizes=d=>{rl.forEach(p=>{d[p]!==void 0&&(l[p]=d[p])})},this.setDebounce=d=>{c=d};const u=()=>{const d=getComputedStyle(document.body);d.getPropertyValue("--q-size-sm")&&rl.forEach(p=>{this.sizes[p]=Number.parseInt(d.getPropertyValue(`--q-size-${p}`),10)}),this.setSizes=p=>{rl.forEach(v=>{p[v]&&(this.sizes[v]=p[v])}),this.__update(!0)},this.setDebounce=p=>{a!==void 0&&i.removeEventListener("resize",a,_f),a=p>0?Mv(this.__update,p):this.__update,i.addEventListener("resize",a,_f)},this.setDebounce(c),Object.keys(l).length!==0?(this.setSizes(l),l=void 0):this.__update(),o&&this.name==="xs"&&document.body.classList.add("screen--xs")};fi.value?e.push(u):u()}}),vf="data-dark-auto",Dt=Fa({isActive:!1,mode:!1},{__media:void 0,set(t){Dt.mode=t,t==="auto"?(Dt.__media===void 0&&(Dt.__media=window.matchMedia("(prefers-color-scheme: dark)"),Dt.__updateMedia=()=>{Dt.set("auto")},Dt.__media.addListener(Dt.__updateMedia)),t=Dt.__media.matches):Dt.__media!==void 0&&(Dt.__media.removeListener(Dt.__updateMedia),Dt.__media=void 0),Dt.isActive=t===!0,document.body.classList.remove(`body--${t===!0?"light":"dark"}`),document.body.classList.add(`body--${t===!0?"dark":"light"}`)},toggle(){Dt.set(!Dt.isActive)},install({$q:t,ssrContext:e,onSSRHydrated:n}){if(t.dark=this,!this.__installed){if(fi.value){if(document.body.hasAttribute(vf)){this.mode="auto",n.push(()=>{document.body.removeAttribute(vf),this.mode==="auto"&&this.set("auto")});return}this.set(document.body.classList.contains("body--dark"));return}this.set(t.config.dark??!1)}}});function bv(t,e,n=document.body){if(typeof t!="string")throw new TypeError("Expected a string as propName");if(typeof e!="string")throw new TypeError("Expected a string as value");if(!(n instanceof Element))throw new TypeError("Expected a DOM element");n.style.setProperty(`--q-${t}`,e)}let mp=!1;function Tv(t){mp=t.isComposing===!0}function wv(t){return mp||t!==Object(t)||t.isComposing||t.qKeyEvent}function Ks(t,e){return!wv(t)&&(Array.isArray(e)?e.includes(t.keyCode):e===t.keyCode)}function gp(t){if(t.ios)return"ios";if(t.android)return"android"}function Av({is:t,has:e,within:n},i){const r=[t.desktop?"desktop":"mobile",`${e.touch?"":"no-"}touch`];if(t.mobile){const s=gp(t);s!==void 0&&r.push("platform-"+s)}if(t.nativeMobile){const s=t.nativeMobileWrapper,o=i[s];r.push(s,"native-mobile"),t.ios&&(o===void 0||o.iosStatusBarPadding)?r.push("q-ios-padding"):t.android&&(o===void 0||o.androidStatusBarPadding!==!1)&&r.push("q-safe-area-padding")}else t.electron?r.push("electron"):t.bex&&r.push("bex");return n.iframe&&r.push("within-iframe"),r}function Cv(){const{is:t}=Vt,e=document.body.className,n=new Set(e.replaceAll(/ {2}/g," ").split(" "));if(!t.nativeMobile&&!t.electron&&!t.bex){if(t.desktop)n.delete("mobile"),n.delete("platform-ios"),n.delete("platform-android"),n.add("desktop");else if(t.mobile){n.delete("desktop"),n.add("mobile"),n.delete("platform-ios"),n.delete("platform-android");const r=gp(t);r!==void 0&&n.add(`platform-${r}`)}}Vt.has.touch&&(n.delete("no-touch"),n.add("touch")),Vt.within.iframe&&n.add("within-iframe");const i=[...n].join(" ");e!==i&&(document.body.className=i)}function Rv(t){for(const e in t)bv(e,t[e])}const Pv={install(t){if(!this.__installed){if(fi.value)Cv();else{const{$q:e}=t;e.config.brand!==void 0&&Rv(e.config.brand),document.body.classList.add(...Av(Vt,e.config))}Vt.is.ios&&document.body.addEventListener("touchstart",di),window.addEventListener("keydown",Tv,!0)}}},_p=()=>!0;function Lv(t){return typeof t=="string"&&t!==""&&t!=="/"&&t!=="#/"}function Dv(t){return t.startsWith("#")&&(t=t.slice(1)),t.startsWith("/")||(t="/"+t),t.endsWith("/")&&(t=t.slice(0,-1)),"#"+t}function Iv(t){if(t.backButtonExit===!1)return()=>!1;if(t.backButtonExit==="*")return _p;const e=["#/"];return Array.isArray(t.backButtonExit)&&e.push(...t.backButtonExit.filter(Lv).map(Dv)),()=>e.includes(window.location.hash)}const Jl={__history:[],add:di,remove:di,install({$q:t}){if(this.__installed)return;const{cordova:e,capacitor:n}=Vt.is;if(!e&&!n)return;const i=t.config[e?"cordova":"capacitor"];if((i==null?void 0:i.backButton)===!1||n&&(window.Capacitor===void 0||window.Capacitor.Plugins.App===void 0))return;this.add=o=>{o.condition===void 0&&(o.condition=_p),this.__history.push(o)},this.remove=o=>{const a=this.__history.indexOf(o);a!==-1&&this.__history.splice(a,1)};const r=Iv({backButtonExit:!0,...i}),s=()=>{if(this.__history.length!==0){const o=this.__history.at(-1);o.condition()&&(this.__history.pop(),o.handler())}else r()?navigator.app.exitApp():window.history.back()};e?document.addEventListener("deviceready",()=>{document.addEventListener("backbutton",s,!1)}):window.Capacitor.Plugins.App.addListener("backButton",s)}},xf={isoName:"en-US",nativeName:"English (US)",label:{clear:"Clear",ok:"OK",cancel:"Cancel",close:"Close",set:"Set",select:"Select",reset:"Reset",remove:"Remove",update:"Update",create:"Create",search:"Search",filter:"Filter",refresh:"Refresh",minimum:"Minimum",maximum:"Maximum",range:"Range",noValue:"No value",resize:"Resize",expand:t=>t?`Expand "${t}"`:"Expand",collapse:t=>t?`Collapse "${t}"`:"Collapse"},date:{days:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),daysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),firstDayOfWeek:0,format24h:!1,pluralDay:"days",prevMonth:"Previous month",nextMonth:"Next month",prevYear:"Previous year",nextYear:"Next year",today:"Today",prevRangeYears:t=>`Previous ${t} years`,nextRangeYears:t=>`Next ${t} years`,hour:"Hour",minute:"Minute",second:"Second",now:"Current time"},table:{noData:"No data available",noResults:"No matching records found",loading:"Loading...",selectedRecords:t=>t===1?"1 record selected.":(t===0?"No":t)+" records selected.",recordsPerPage:"Records per page:",allRows:"All",pagination:(t,e,n)=>t+"–"+e+" of "+n,columns:"Columns",selectAllRows:"Select all rows",selectRow:"Select row"},pagination:{label:"Pagination",first:"First page",prev:"Previous page",next:"Next page",last:"Last page"},carousel:{prevSlide:"Previous slide",nextSlide:"Next slide"},colorPicker:{spectrum:"Spectrum",tune:"Tune",palette:"Palette",value:"Color value",hue:"Hue",alpha:"Opacity",saturation:"Saturation",brightness:"Brightness"},uploader:{addFiles:"Pick files",upload:"Upload files",abort:"Abort upload",removeQueued:"Remove queued files",removeUploaded:"Remove uploaded files",removeFile:"Remove file"},editor:{toolbar:"Editor toolbar",url:"URL",bold:"Bold",italic:"Italic",strikethrough:"Strikethrough",underline:"Underline",unorderedList:"Unordered List",orderedList:"Ordered List",subscript:"Subscript",superscript:"Superscript",hyperlink:"Hyperlink",toggleFullscreen:"Toggle Fullscreen",quote:"Quote",left:"Left align",center:"Center align",right:"Right align",justify:"Justify align",print:"Print",outdent:"Decrease indentation",indent:"Increase indentation",removeFormat:"Remove formatting",formatting:"Formatting",fontSize:"Font Size",align:"Align",hr:"Insert Horizontal Rule",undo:"Undo",redo:"Redo",heading1:"Heading 1",heading2:"Heading 2",heading3:"Heading 3",heading4:"Heading 4",heading5:"Heading 5",heading6:"Heading 6",paragraph:"Paragraph",code:"Code",size1:"Very small",size2:"A bit small",size3:"Normal",size4:"Medium-large",size5:"Big",size6:"Very big",size7:"Maximum",defaultFont:"Default Font",viewSource:"View Source"},tree:{noNodes:"No nodes available",noResults:"No matching nodes found"}};function vp(t){return t.split(/[-_]/).map((e,n)=>n===0?e.toLowerCase():n>1||e.length<4?e.toUpperCase():e[0].toUpperCase()+e.slice(1).toLowerCase())}function Sf(){const t=Array.isArray(navigator.languages)&&navigator.languages.length!==0?navigator.languages[0]:navigator.language;if(typeof t=="string")return vp(t).join("-")}function sl(t){try{const{language:e,script:n,region:i}=new Intl.Locale(t).maximize();return{language:e,script:n,region:i}}catch{}}function yf(t,e){if(typeof t!="string"||!Array.isArray(e))return;const n=new Map;for(const l of e){if(typeof l!="string")continue;const c=l.toLowerCase().replaceAll("_","-");n.has(c)||n.set(c,l)}if(n.size===0)return;const i=vp(t),r=[];for(let l=i.length;l>1;l--)r.push(i.slice(0,l).join("-"));if(i.length>2&&i[1].length===4){const l=[i[0],...i.slice(2)];for(let c=l.length;c>1;c--)r.push(l.slice(0,c).join("-"))}r.push(i[0]);for(const l of r){const c=n.get(l.toLowerCase());if(c!==void 0)return c}const s=sl(i.join("-"));if(s===void 0)return;const o=sl(s.language).region;let a;for(const[l,c]of n){const u=sl(l);if(u===void 0||u.language!==s.language)continue;const f=(u.script===s.script?4:0)+(u.region===s.region?2:0)+(u.region===o?1:0),d=l.split("-").length;(a===void 0||f>a.score||f===a.score&&d<a.depth)&&(a={tag:c,score:f,depth:d})}return a==null?void 0:a.tag}const In=Fa({__qLang:{}},{getLocale:Sf,getClosestIsoName:yf,set(t=xf,e){const n={...t,rtl:t.rtl===!0,getLocale:Sf,getClosestIsoName:yf};{if(n.set=In.set,In.__langConfig===void 0||!In.__langConfig.noHtmlAttrs){const i=document.documentElement;i.setAttribute("dir",n.rtl?"rtl":"ltr"),i.setAttribute("lang",n.isoName)}for(const i of Object.keys(In.__qLang))i in n||delete In.__qLang[i];Object.assign(In.__qLang,n)}},install({$q:t,lang:e,ssrContext:n}){t.lang=In.__qLang,In.__langConfig=t.config.lang,this.__installed?e!==void 0&&this.set(e):(this.props=new Proxy(this.__qLang,{get:Reflect.get,ownKeys(i){return Reflect.ownKeys(i).filter(r=>r!=="set"&&r!=="getLocale"&&r!=="getClosestIsoName")}}),this.set(e||xf))}}),Uv={name:"material-icons",type:{positive:"check_circle",negative:"warning",info:"info",warning:"priority_high"},arrow:{up:"arrow_upward",right:"arrow_forward",down:"arrow_downward",left:"arrow_back",dropdown:"arrow_drop_down"},chevron:{left:"chevron_left",right:"chevron_right"},colorPicker:{spectrum:"gradient",tune:"tune",palette:"style"},pullToRefresh:{icon:"refresh"},carousel:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down",navigationIcon:"lens"},chip:{remove:"cancel",selected:"check"},datetime:{arrowLeft:"chevron_left",arrowRight:"chevron_right",now:"access_time",today:"today"},editor:{bold:"format_bold",italic:"format_italic",strikethrough:"strikethrough_s",underline:"format_underlined",unorderedList:"format_list_bulleted",orderedList:"format_list_numbered",subscript:"vertical_align_bottom",superscript:"vertical_align_top",hyperlink:"link",toggleFullscreen:"fullscreen",quote:"format_quote",left:"format_align_left",center:"format_align_center",right:"format_align_right",justify:"format_align_justify",print:"print",outdent:"format_indent_decrease",indent:"format_indent_increase",removeFormat:"format_clear",formatting:"text_format",fontSize:"format_size",align:"format_align_left",hr:"remove",undo:"undo",redo:"redo",heading:"format_size",code:"code",size:"format_size",font:"font_download",viewSource:"code"},expansionItem:{icon:"keyboard_arrow_down",denseIcon:"arrow_drop_down"},fab:{icon:"add",activeIcon:"close"},field:{clear:"cancel",error:"error"},pagination:{first:"first_page",prev:"keyboard_arrow_left",next:"keyboard_arrow_right",last:"last_page"},rating:{icon:"grade"},stepper:{done:"check",active:"edit",error:"warning"},tabs:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down"},table:{arrowUp:"arrow_upward",warning:"warning",firstPage:"first_page",prevPage:"chevron_left",nextPage:"chevron_right",lastPage:"last_page"},tree:{icon:"play_arrow"},uploader:{done:"done",clear:"clear",add:"add_box",upload:"cloud_upload",removeQueue:"clear_all",removeUploaded:"done_all"}},ha=Fa({iconMapFn:null,__qIconSet:{}},{set(t,e){const n={...t};n.set=ha.set,Object.assign(ha.__qIconSet,n)},install({$q:t,iconSet:e,ssrContext:n}){t.config.iconMapFn!==void 0&&(this.iconMapFn=t.config.iconMapFn),t.iconSet=this.__qIconSet,uu(t,"iconMapFn",()=>this.iconMapFn,i=>{this.iconMapFn=i}),this.__installed?e!==void 0&&this.set(e):(this.props=new Proxy(this.__qIconSet,{get:Reflect.get,ownKeys(i){return Reflect.ownKeys(i).filter(r=>r!=="set")}}),this.set(e||Uv))}}),xp="_q_",no="_q_l_",Sp="_q_li_",yp="_q_pc_";function kt(){}function Mf(t){return t!==null&&typeof t=="object"&&!Array.isArray(t)}const Ef={};let Mp=!1;function Nv(){Mp=!0}const bf=[da,Pv,Dt,Ev,Jl,In,ha];function Tf(t,e){e.forEach(n=>{n.install(t),n.__installed=!0})}function Fv(t,e,n){t.config.globalProperties.$q=n.$q,t.provide(xp,n.$q),Tf(n,bf),e.components!==void 0&&Object.values(e.components).forEach(i=>{Mf(i)&&i.name!==void 0&&t.component(i.name,i)}),e.directives!==void 0&&Object.values(e.directives).forEach(i=>{Mf(i)&&i.name!==void 0&&t.directive(i.name,i)}),e.plugins!==void 0&&Tf(n,Object.values(e.plugins).filter(i=>typeof i.install=="function"&&!bf.includes(i))),fi.value&&(n.$q.onSSRHydrated=()=>{n.onSSRHydrated.forEach(i=>{i()}),n.$q.onSSRHydrated=()=>{}})}const Ov=function(e,n={}){const i={version:"2.33.0"};Mp?i.config=n.config||{}:(n.config!==void 0&&Object.assign(Ef,n.config),i.config={...Ef},Nv()),Fv(e,n,{parentApp:e,$q:i,lang:n.lang,iconSet:n.iconSet,onSSRHydrated:[]})},Bv={name:"Quasar",version:"2.33.0",install:Ov,lang:In,iconSet:ha},zv={isoName:"zh-CN",nativeName:"中文（简体）",label:{clear:"清空",ok:"确定",cancel:"取消",close:"关闭",set:"设置",select:"选择",reset:"重置",remove:"移除",update:"更新",create:"创建",search:"搜索",filter:"过滤",refresh:"刷新",minimum:"最小值",maximum:"最大值",range:"范围",noValue:"无值",resize:"调整大小",expand:t=>t?`展开"${t}"`:"扩张",collapse:t=>t?`折叠"${t}"`:"坍塌"},date:{days:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),daysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),headerTitle:t=>new Intl.DateTimeFormat("zh-CN",{weekday:"short",month:"short",day:"numeric"}).format(t),firstDayOfWeek:0,format24h:!1,pluralDay:"天",prevMonth:"上个月",nextMonth:"下个月",prevYear:"上一年",nextYear:"下一年",today:"今天",prevRangeYears:t=>`前${t}年`,nextRangeYears:t=>`后${t}年`,hour:"小时",minute:"分钟",second:"秒",now:"当前时间"},table:{noData:"没有可用数据",noResults:"找不到匹配的数据",loading:"正在加载...",selectedRecords:t=>"已选择"+t+"行",recordsPerPage:"每页的行数:",allRows:"全部",pagination:(t,e,n)=>t+"〜"+e+" / "+n,columns:"列",selectAllRows:"选择所有行",selectRow:"选择行"},pagination:{label:"分页",first:"第一页",prev:"上一页",next:"下一页",last:"最后一页"},carousel:{prevSlide:"上一张幻灯片",nextSlide:"下一张幻灯片"},colorPicker:{spectrum:"光谱",tune:"调整",palette:"调色板",value:"颜色值",hue:"色相",alpha:"不透明度",saturation:"饱和度",brightness:"亮度"},uploader:{addFiles:"选择文件",upload:"上传文件",abort:"中止上传",removeQueued:"移除排队文件",removeUploaded:"移除已上传文件",removeFile:"移除文件"},editor:{toolbar:"编辑器工具栏",url:"URL",bold:"粗体",italic:"斜体",strikethrough:"删除线",underline:"下划线",unorderedList:"无序列表",orderedList:"有序列表",subscript:"下标",superscript:"上标",hyperlink:"超链接",toggleFullscreen:"全屏切换",quote:"引号",left:"左对齐",center:"居中对齐",right:"右对齐",justify:"两端对齐",print:"打印",outdent:"减少缩进",indent:"增加缩进",removeFormat:"清除样式",formatting:"格式化",fontSize:"字体大小",align:"对齐",hr:"插入水平线",undo:"撤消",redo:"重做",heading1:"标题一",heading2:"标题二",heading3:"标题三",heading4:"标题四",heading5:"标题五",heading6:"标题六",paragraph:"段落",code:"代码",size1:"非常小",size2:"比较小",size3:"正常",size4:"中等偏大",size5:"大",size6:"非常大",size7:"超级大",defaultFont:"默认字体",viewSource:"查看资料"},tree:{noNodes:"没有可用节点",noResults:"找不到匹配的节点"}};function qn(){var t;return((t=Wn())==null?void 0:t.appContext.config.globalProperties.$q)??Cn(xp)}function mr(t,e){return t!==void 0&&t()||e}function Ep(t,e){if(t!==void 0){const n=t();if(n!=null)return[...n]}return e}function Gr(t,e){return t!==void 0?e.concat(t()):e}const kv=Xt({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(t,{slots:e}){const n=qn(),i=Cn(no,kt);if(i===kt)return console.error("QPage needs to be a deep child of QLayout"),kt;if(Cn(yp,kt)===kt)return console.error("QPage needs to be child of QPageContainer"),kt;const s=ge(()=>{const a=(i.header.space?i.header.size:0)+(i.footer.space?i.footer.size:0);if(typeof t.styleFn=="function"){const l=i.isContainer.value?i.containerHeight.value:n.screen.height;return t.styleFn(a,l)}return{minHeight:i.isContainer.value?i.containerHeight.value-a+"px":n.screen.height===0?a!==0?`calc(100vh - ${a}px)`:"100vh":n.screen.height-a+"px"}}),o=ge(()=>`q-page${t.padding?" q-layout-padding":""}`);return()=>Ue("main",{class:o.value,style:s.value},mr(e.default))}}),Hv=Xt({name:"QPageContainer",setup(t,{slots:e}){const n=qn(),i=Cn(no,kt);if(i===kt)return console.error("QPageContainer needs to be child of QLayout"),kt;Ra(yp,!0);const r=ge(()=>{const s={};return i.header.space&&(s.paddingTop=`${i.header.size}px`),i.right.space&&(s[`padding${n.lang.rtl?"Left":"Right"}`]=`${i.right.size}px`),i.footer.space&&(s.paddingBottom=`${i.footer.size}px`),i.left.space&&(s[`padding${n.lang.rtl?"Right":"Left"}`]=`${i.left.size}px`),s});return()=>Ue("div",{class:"q-page-container",style:r.value},mr(e.default))}});function Ql(t,e){const n=t.style;for(const i in e)n[i]=e[i]}function Vv(t){if(t==null)return;if(typeof t=="string")try{return document.querySelector(t)||void 0}catch{return}const e=bh(t);if(e)return e.$el||e}const Gv=[Element,String,Object],wf=[null,document,document.body,document.scrollingElement,document.documentElement];function Wv(t,e){let n=Vv(e);if(n!==void 0&&n!==window&&!(n instanceof Element)&&!wf.includes(n)&&(console.warn("[Quasar] scroll-target: the specified value is not an Element nor a component with a root element; falling back to auto detection"),n=void 0),n===void 0){if(t==null)return window;n=t.closest(".scroll,.scroll-y,.overflow-auto")}return wf.includes(n)?window:n}function ec(t){return t===window?window.scrollY:t.scrollTop}function tc(t){return t===window?window.scrollX:t.scrollLeft}let po;function ol(){if(po!==void 0)return po;const t=document.createElement("p"),e=document.createElement("div");Ql(t,{width:"100%",height:"200px"}),Ql(e,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),e.append(t),document.body.append(e);const n=t.offsetWidth;e.style.overflow="scroll";let i=t.offsetWidth;return n===i&&(i=e.clientWidth),e.remove(),po=n-i,po}const{passive:Af}=Tn,qv=["both","horizontal","vertical"],Xv=Xt({name:"QScrollObserver",props:{axis:{type:String,validator:t=>qv.includes(t),default:"vertical"},debounce:[String,Number],scrollTarget:Gv},emits:["scroll"],setup(t,{emit:e}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let i=null,r,s;tt(()=>t.scrollTarget,()=>{l(),a()});function o(){i==null||i();const d=Math.max(0,ec(r)),p=tc(r),v={top:d-n.position.top,left:p-n.position.left};if(t.axis==="vertical"&&v.top===0||t.axis==="horizontal"&&v.left===0)return;const x=Math.abs(v.top)>=Math.abs(v.left)?v.top<0?"up":"down":v.left<0?"left":"right";n.position={top:d,left:p},n.directionChanged=n.direction!==x,n.delta=v,n.directionChanged&&(n.direction=x,n.inflectionPoint=n.position),e("scroll",{...n})}function a(){r=Wv(s,t.scrollTarget),r.addEventListener("scroll",c,Af),c(!0)}function l(){r!==void 0&&(r.removeEventListener("scroll",c,Af),r=void 0)}function c(d){if(d===!0||t.debounce===0||t.debounce==="0")o();else if(i===null){const[p,v]=t.debounce?[setTimeout(o,t.debounce),clearTimeout]:[requestAnimationFrame(o),cancelAnimationFrame];i=()=>{v(p),i=null}}}const{proxy:u}=Wn(),f=qn();return tt(()=>f.lang.rtl,o),Oi(()=>{s=u.$el.parentNode,a()}),_i(()=>{i==null||i(),l()}),Object.assign(u,{trigger:c,getPosition:()=>n}),di}}),nc=Xt({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(t,{emit:e}){let n=null,i,r={width:-1,height:-1};function s(f){f===!0||t.debounce===0||t.debounce==="0"?o():n===null&&(n=setTimeout(o,t.debounce))}function o(){if(n!==null&&(clearTimeout(n),n=null),i){const{offsetWidth:f,offsetHeight:d}=i;(f!==r.width||d!==r.height)&&(r={width:f,height:d},e("resize",r))}}const{proxy:a}=Wn();a.trigger=s;let l,c=!1;const u=f=>{c||(i=a.$el.parentNode,i?(l=new ResizeObserver(s),l.observe(i,{box:"border-box"}),o()):f||Qr(()=>{u(!0)}))};return Oi(()=>{u()}),_i(()=>{c=!0,n!==null&&clearTimeout(n),l&&(l.disconnect(),l=null)}),di}});let gs=0,mo,go,Rs,al=!1,Cf,Rf,Ji=!1,Pf,Wi=null;const fu=new Set;function $v(t){fu.add(t)}function Yv(t){fu.delete(t)}function _o(t){al||(al=!0,requestAnimationFrame(()=>{al=!1;const{height:e,scale:n}=t.target;if(Math.abs(n-1)>.01)return;const{clientHeight:i,scrollTop:r}=document.scrollingElement;(Rs===void 0||e!==window.innerHeight)&&(Rs=i-e,document.scrollingElement.scrollTop=r),r>Rs&&(document.scrollingElement.scrollTop-=Math.ceil((r-Rs)/8))}))}function Lf(t){var n,i,r,s;const e=document.body;if(t==="add"){mo=tc(window),go=ec(window),Pf=window.location.pathname,Ji=Vt.is.ios;const o=["q-document--prevent-scroll"];Ji?(Cf=e.style.left,Rf=e.style.top,e.style.left=`-${mo}px`,e.style.top=`-${go}px`,o.push("q-document--pin-body")):(o.push("q-document--clip-scroll"),window.innerWidth-document.documentElement.clientWidth>0&&o.push("q-document--reserve-scrollbar")),document.documentElement.classList.add(...o),document.qScrollPrevented=!0,Ji&&(window.scrollTo(0,0),(n=window.visualViewport)==null||n.addEventListener("resize",_o,Tn.passiveCapture),(i=window.visualViewport)==null||i.addEventListener("scroll",_o,Tn.passiveCapture),window.scrollTo(0,0))}else Ji&&((r=window.visualViewport)==null||r.removeEventListener("resize",_o,Tn.passiveCapture),(s=window.visualViewport)==null||s.removeEventListener("scroll",_o,Tn.passiveCapture)),document.documentElement.classList.remove("q-document--prevent-scroll","q-document--clip-scroll","q-document--reserve-scrollbar","q-document--pin-body"),document.qScrollPrevented=!1,Ji&&(e.style.left=Cf,e.style.top=Rf),Ji&&window.location.pathname===Pf&&(tc(window)!==mo||ec(window)!==go)?window.scrollTo(mo,go):fu.forEach(o=>{o()}),Rs=void 0}function Kv(t){let e="add";if(t===!0){if(gs++,Wi!==null){clearTimeout(Wi),Wi=null;return}if(gs>1)return}else{if(gs===0||(gs--,gs>0))return;if(e="remove",Ji&&Vt.is.nativeMobile){Wi!==null&&clearTimeout(Wi),Wi=setTimeout(()=>{Lf(e),Wi=null},100);return}}Lf(e)}const jv=/^(h|l)h(h|r) lpr (f|l)f(f|r)$/,Zv=Xt({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:t=>jv.test(t.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(t,{slots:e,emit:n}){const i=qn(),r=ks(null),s=vt(i.screen.height),o=vt(t.container?0:i.screen.width),a=vt({position:0,direction:"down",inflectionPoint:0}),l=vt(0),c=vt(fi.value?0:ol()),u=ge(()=>"q-layout q-layout--"+(t.container?"containerized":"standard")),f=ge(()=>t.container?null:{minHeight:i.screen.height+"px"}),d=ge(()=>c.value!==0?{[i.lang.rtl?"left":"right"]:`${c.value}px`}:null),p=ge(()=>c.value!==0?{[i.lang.rtl?"right":"left"]:0,[i.lang.rtl?"left":"right"]:`-${c.value}px`,width:`calc(100% + ${c.value}px)`}:null);let v=null;function x(E){const C={position:E.position.top,direction:E.direction,directionChanged:E.directionChanged,inflectionPoint:E.inflectionPoint.top,delta:E.delta.top};t.container||!document.qScrollPrevented?(v=null,m(C)):v=C}function m(E){a.value=E,t.onScroll!==void 0&&n("scroll",E)}function h(E){const{height:C,width:I}=E;let S=!1;s.value!==C&&(S=!0,s.value=C,t.onScrollHeight!==void 0&&n("scrollHeight",C),b()),o.value!==I&&(S=!0,o.value=I),S&&t.onResize!==void 0&&n("resize",E)}function A({height:E}){l.value!==E&&(l.value=E,b())}function b(){if(t.container){const E=s.value>l.value?ol():0;c.value!==E&&(c.value=E)}}let M=null;const D={instances:{},view:ge(()=>t.view),isContainer:ge(()=>t.container),rootRef:r,height:s,containerHeight:l,scrollbarWidth:c,totalWidth:ge(()=>t.container?o.value+c.value:i.screen.width),rows:ge(()=>{const E=t.view.toLowerCase().split(" ");return{top:[...E[0]],middle:[...E[1]],bottom:[...E[2]]}}),header:oi({size:0,offset:0,space:!1}),right:oi({size:300,offset:0,space:!1}),footer:oi({size:0,offset:0,space:!1}),left:oi({size:300,offset:0,space:!1}),scroll:a,animate(){M!==null?clearTimeout(M):document.body.classList.add("q-body--layout-animate"),M=setTimeout(()=>{M=null,document.body.classList.remove("q-body--layout-animate")},155)},update(E,C,I){D[E][C]=I}};Ra(no,D);{const E=()=>{if(v!==null){const C=v;v=null,m(C)}};$v(E),es(()=>{Yv(E)})}if(ol()>0){let E=null;const C=document.documentElement,I=()=>{E=null,C.classList.remove("hide-scrollbar")},S=()=>{if(E===null){if(C.scrollHeight>i.screen.height)return;C.classList.add("hide-scrollbar")}else clearTimeout(E);E=setTimeout(I,300)},y=P=>{E!==null&&P==="remove"&&(clearTimeout(E),I()),window[`${P}EventListener`]("resize",S)};tt(()=>t.container?"remove":"add",y),t.container||y("add"),es(()=>{y("remove")})}return()=>{const E=Gr(e.default,[Ue(Xv,{onScroll:x}),Ue(nc,{onResize:h})]),C=Ue("div",{class:u.value,style:f.value,ref:t.container?void 0:r,tabindex:-1},E);return t.container?Ue("div",{class:"q-layout-container overflow-hidden",ref:r},[Ue(nc,{onResize:A}),Ue("div",{class:"absolute-full",style:d.value},[Ue("div",{class:"scroll",style:p.value},[C])])]):C}}}),Jv=Xt({name:"QSpace",setup(){const t=Ue("div",{class:"q-space"});return()=>t}}),ic={xs:18,sm:24,md:32,lg:38,xl:46},bp={size:String};function Tp(t){const e=new Map;return n=>{if(n===void 0)return null;let i=e.get(n);return i===void 0&&(e.size>500&&e.clear(),i={fontSize:n in t?`${t[n]}px`:n},e.set(n,i)),i}}const Qv=Tp(ic),Df="0 0 24 24",wp={"mdi-":"mdi ","icon-":"","fa-":"","bt-":"bt ","eva-":"eva ","iconfont ":"","ti-":"themify-icon ","bi-":"bootstrap-icons ","i-":""},e0=Object.keys(wp),t0={o_:"-outlined",r_:"-round",s_:"-sharp"},n0={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"};function i0(t){const e=t.codePointAt(0);if(e!==102&&e!==108||t.codePointAt(1)!==97)return!1;const n=t.codePointAt(2);return n===32?!0:t.codePointAt(3)===32&&(n===115||n===114||n===108||n===98||n===100||n===107)}function r0(t){return t===32||t>=9&&t<=13||t===160||t===5760||t>=8192&&t<=8202||t===8232||t===8233||t===8239||t===8287||t===12288||t===65279}function s0(t){const e=t.codePointAt(0);if(e!==77&&e!==109)return!1;let n=1,i=t.codePointAt(n);return r0(i)&&(i=t.codePointAt(++n)),(i===43||i===45)&&(i=t.codePointAt(++n)),i===46&&(i=t.codePointAt(++n)),i>=48&&i<=57}const rc={cls:""},o0={"aria-hidden":"true"};function a0(t,e){if(t.startsWith("img:"))return{cls:"",img:!0,src:t.slice(4)};if(t.startsWith("svguse:")){const[r,s]=t.split("|");return{cls:"",svguse:!0,src:r.slice(7),viewBox:s||Df}}if(t.startsWith("ion-"))return{cls:" ionicons "+(t.startsWith("ion-md")||t.startsWith("ion-ios")||t.startsWith("ion-logo")?t:`ion-${e?"ios":"md"}${t.slice(3)}`)};if(t.startsWith("sym_")){const r=n0[t.slice(0,6)];if(r!==void 0)return{cls:" notranslate material-symbols"+r,content:t.slice(6),ligature:!0}}for(const r of e0)if(t.startsWith(r))return{cls:` ${wp[r]}${t}`};if(i0(t))return{cls:" "+t};if(s0(t)){const[r,s]=t.split("|");return{cls:"",svg:!0,viewBox:s||Df,nodes:r.split("&&").map(o=>{const[a,l,c]=o.split("@@");return{d:a,style:l,transform:c}})}}const n=" notranslate material-icons",i=t0[t.slice(0,2)];return i!==void 0?{cls:n+i,content:t.slice(2),ligature:!0}:{cls:n,content:t,ligature:!0}}const l0=new Map,c0=new Map;function sc(t,e){const n=e?c0:l0;let i=n.get(t);return i===void 0&&(n.size>1e3&&n.clear(),i=a0(t,e),n.set(t,i)),i}const If=new WeakMap;function u0(t,e,n){let i=If.get(t);i===void 0&&(i=new Map,If.set(t,i));const r=(n===!0?"ios;":"md;")+e;let s=i.get(r);if(s===void 0){i.size>1e3&&i.clear();const o=t(e);if(o===void 0)s=sc(e,n);else if(o.icon!==void 0)s=o.icon==="none"||!o.icon?rc:sc(o.icon,n);else{const{cls:a,content:l}=o;s={cls:a!==void 0?" "+a:"",content:l,ligature:l!==void 0&&l.trim().length!==0}}i.set(r,s)}return s}const oc=Xt({name:"QIcon",props:{...bp,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(t,{slots:e}){const n=qn(),i=n.platform.is.ios;let r=null,s=rc,o=null;return()=>{const a=t.name;(a!==r||n.iconMapFn!==o)&&(r=a,o=n.iconMapFn,s=a==="none"||!a?rc:o!==null?u0(o,a,i):sc(a,i));const l=s,c={"aria-hidden":"true",class:"q-icon"+(t.left?" on-left":"")+(t.right?" on-right":"")+(t.color!==void 0?` text-${t.color}`:"")+l.cls};return t.size!==void 0&&(c.style=Qv(t.size)),l.content!==void 0?Ue(t.tag,c,Gr(e.default,[l.ligature?Ue("span",o0,l.content):l.content])):l.img?Ue(t.tag,c,Gr(e.default,[Ue("img",{src:l.src})])):l.svg?Ue(t.tag,c,Gr(e.default,[Ue("svg",{viewBox:l.viewBox},l.nodes.map(u=>Ue("path",u)))])):l.svguse?Ue(t.tag,c,Gr(e.default,[Ue("svg",{viewBox:l.viewBox},[Ue("use",{"xlink:href":l.src})])])):Ue(t.tag,c,mr(e.default))}}}),f0={size:{type:[String,Number],default:"1em"},color:String};function d0(t){return t in ic?`${ic[t]}px`:t}function h0(t,e){return`q-spinner q-spinner-${e}`+(t?` text-${t}`:"")}const p0=Xt({name:"QSpinner",props:{...f0,thickness:{type:Number,default:5}},setup(t){return()=>{const e=d0(t.size);return Ue("svg",{class:h0(t.color,"mat"),width:e,height:e,viewBox:"0 0 50 50"},[Ue("circle",{class:"path",cx:"25",cy:"25",r:"20",fill:"none",stroke:"currentColor","stroke-width":t.thickness,"stroke-miterlimit":"10"})])}}}),m0=50,g0=100,_0=300,{passive:Uf}=Tn,Nf=[[],[["click",Ff],["keyup",Of]],[["pointerdown",Ff],["pointercancel",Bf],["pointerleave",Bf],["keydown",Of]]];function Ap(t,e,n,i){n.stop&&$s(t);const r=n.color,s=n.center||i===!0,o=document.createElement("span"),a=document.createElement("span"),l=Oa(t),{left:c,top:u,width:f,height:d}=e.getBoundingClientRect(),p=Math.hypot(f,d),v=p/2,x=`${(f-p)/2}px`,m=s?x:`${l.left-c-v}px`,h=`${(d-p)/2}px`,A=s?h:`${l.top-u-v}px`;a.className="q-ripple__inner",Ql(a,{height:`${p}px`,width:`${p}px`,transform:`translate(${m},${A}) scale(.2)`,opacity:0}),o.className=`q-ripple${r?" text-"+r:""}`,o.setAttribute("dir","ltr"),o.append(a),e.append(o);let b,M=0;const D=()=>{o.remove();const S=n.ripples.indexOf(I);S!==-1&&n.ripples.splice(S,1)},E=()=>{M=2,a.classList.remove("q-ripple__inner--enter"),a.classList.add("q-ripple__inner--leave"),a.style.opacity=0,b=setTimeout(D,275)},C=()=>{M=1,a.classList.add("q-ripple__inner--enter"),a.style.transform=`translate(${x},${h}) scale(1)`,a.style.opacity=.2,b=setTimeout(E,250)},I={pointerId:t.type==="pointerdown"?t.pointerId:null,abort(){clearTimeout(b),o.remove()},cancel(){I.pointerId=null,M!==2&&(clearTimeout(b),M===0?D():E())}};n.ripples.push(I),b=setTimeout(C,t.type==="pointerdown"&&t.pointerType==="touch"?g0:m0)}function Ff(t){if(!t.qSkipRipple){const e=t.currentTarget;Ap(t,e,e.__qripple,t.qKeyEvent===!0)}}function Of(t){const e=t.currentTarget,n=e.__qripple;if(!t.qSkipRipple&&Ks(t,n.keyCodes)){const i=Date.now();i-n.keyTime>=_0&&(n.keyTime=i,Ap(t,e,n,!0))}}function Bf(t){if(t.type==="pointerleave"&&t.buttons===0)return;const{ripples:e}=t.currentTarget.__qripple;for(let n=e.length-1;n>=0;n--){const i=e[n];i.pointerId===t.pointerId&&i.cancel()}}function v0(t,e){return t!==e&&(t.early!==e.early||t.stop!==e.stop||t.center!==e.center)}function zf(t,{modifiers:e,value:n,arg:i}){const r={...t.cfg,...e,...n},s=r.keyCodes||13;t.arg=i,t.modifiers=e,t.early=r.early===!0,t.stop=r.stop===!0,t.center=r.center===!0,t.color=r.color||i,t.keyCodes=Array.isArray(s)?s.flat():s}function ll(t,e){const n=e.enabled?e.early?2:1:0;if(n!==e.bound){for(const[i,r]of Nf[e.bound])t.removeEventListener(i,r,Uf);for(const[i,r]of Nf[n])t.addEventListener(i,r,Uf);e.bound=n}}const x0=hp({name:"ripple",beforeMount(t,e){const n=e.instance.$.appContext.config.globalProperties.$q.config||{};if(n.ripple===!1)return;const i={cfg:n.ripple,enabled:e.value!==!1,arg:void 0,modifiers:void 0,early:!1,stop:!1,center:!1,color:void 0,keyCodes:13,keyTime:0,bound:0,ripples:[]};zf(i,e),t.__qripple=i,ll(t,i)},updated(t,e){const n=t.__qripple;if(n===void 0)return;const{value:i,oldValue:r,arg:s,modifiers:o}=e;n.enabled=i!==!1,n.enabled&&(i!==r||s!==n.arg||v0(o,n.modifiers))&&zf(n,e),ll(t,n)},beforeUnmount(t){const e=t.__qripple;e!==void 0&&(e.ripples.forEach(n=>{n.abort()}),e.enabled=!1,ll(t,e),t.__qripple=void 0)}}),Cp={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},S0=Object.keys(Cp),y0={align:{type:String,validator:t=>S0.includes(t)}};function M0(t){return()=>{const e=t.align===void 0?t.vertical?"stretch":"left":t.align;return`${t.vertical?"items":"justify"}-${Cp[e]}`}}function Rp(t){return t.appContext.config.globalProperties.$router!==void 0}function E0(t){return t.isUnmounted===!0||t.isDeactivated===!0}function kf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}function Hf(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function b0(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!Array.isArray(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function Vf(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function T0(t,e){return Array.isArray(t)?Vf(t,e):Array.isArray(e)?Vf(e,t):t===e}function w0(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!T0(t[n],e[n]))return!1;return!0}const Pp={to:[String,Object],replace:Boolean,href:String,target:String,disable:Boolean},A0={...Pp,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"}},Gf={},cl={value:!1},C0={value:null},R0={value:""};function Lp({fallbackTag:t,useDisableForRouterLinkProps:e=!0}={}){const n=Wn(),{props:i,proxy:r,emit:s}=n,o=ge(()=>!i.disable&&i.href!==void 0);if(!Rp(n)){const M=ge(()=>i.type==="a"||o.value?"a":i.tag||t||"div"),D=ge(()=>o.value?{href:i.href,target:i.target}:Gf);return{hasRouterLink:cl,hasHrefLink:o,hasLink:o,linkTag:M,resolvedLink:C0,linkIsActive:cl,linkIsExactActive:cl,linkClass:R0,linkAttrs:D,getLink:()=>null,navigateToRouterLink(E){return E.preventDefault(),Promise.resolve(!1)},navigateOnClick(E){s("click",E)}}}const a=ge(e?()=>!i.disable&&!o.value&&i.to!==void 0&&i.to!==null&&i.to!=="":()=>!o.value&&i.to!==void 0&&i.to!==null&&i.to!==""),l=ge(()=>a.value?h(i.to):null),c=ge(()=>l.value!==null),u=ge(()=>o.value||c.value),f=ge(()=>i.type==="a"||u.value?"a":i.tag||t||"div"),d=ge(()=>o.value?{href:i.href,target:i.target}:c.value?{href:l.value.href,target:i.target}:Gf),p=ge(()=>{if(!c.value)return-1;const{matched:M}=l.value,{length:D}=M,E=M[D-1];if(E===void 0)return-1;const C=r.$route.matched;if(C.length===0)return-1;const I=C.findIndex(Hf.bind(null,E));if(I!==-1)return I;const S=kf(M[D-2]);return D>1&&kf(E)===S&&C.at(-1).path!==S?C.findIndex(Hf.bind(null,M[D-2])):I}),v=ge(()=>c.value&&p.value!==-1&&b0(r.$route.params,l.value.params)),x=ge(()=>v.value&&p.value===r.$route.matched.length-1&&w0(r.$route.params,l.value.params)),m=ge(()=>c.value?x.value?` ${i.exactActiveClass} ${i.activeClass}`:i.exact?"":v.value?` ${i.activeClass}`:"":"");function h(M){try{return r.$router.resolve(M)}catch{}return null}function A(M,{returnRouterError:D,to:E=i.to,replace:C=i.replace}={}){if(i.disable)return M.preventDefault(),Promise.resolve(!1);if(M.metaKey||M.altKey||M.ctrlKey||M.shiftKey||M.button!==void 0&&M.button!==0||i.target==="_blank")return Promise.resolve(!1);M.preventDefault();const I=r.$router[C?"replace":"push"](E);return D?I:I.then(()=>{}).catch(()=>{})}function b(M){if(c.value){const D=E=>A(M,E);s("click",M,D),M.defaultPrevented||D()}else s("click",M)}return{hasRouterLink:c,hasHrefLink:o,hasLink:u,linkTag:f,resolvedLink:l,linkIsActive:v,linkIsExactActive:x,linkClass:m,linkAttrs:d,getLink:h,navigateToRouterLink:A,navigateOnClick:b}}const Wf={none:0,xs:4,sm:8,md:16,lg:24,xl:32},P0={xs:8,sm:10,md:14,lg:20,xl:24},L0=Tp(P0),D0=["button","submit","reset"],I0=/[^\s]\/[^\s]/,U0=["flat","outline","push","unelevated"];function N0(t,e){return t.flat?"flat":t.outline?"outline":t.push?"push":t.unelevated?"unelevated":e}const F0={...bp,...Pp,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...U0.reduce((t,e)=>(t[e]=Boolean)&&t,{}),square:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...y0.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean},O0={...F0,round:Boolean};function B0(t){const e=M0(t),{hasRouterLink:n,hasLink:i,linkTag:r,linkAttrs:s,navigateOnClick:o}=Lp({fallbackTag:"button"}),a=ge(()=>{const x=t.fab||t.fabMini?{}:L0(t.size);return t.padding!==void 0?{...x,padding:t.padding.split(/\s+/).map(m=>m in Wf?Wf[m]+"px":m).join(" "),minWidth:"0",minHeight:"0"}:x}),l=ge(()=>t.rounded||t.fab||t.fabMini),c=ge(()=>!t.disable&&!t.loading),u=ge(()=>c.value?t.tabindex||0:-1),f=ge(()=>N0(t,"standard")),d=ge(()=>{const x={tabindex:u.value};return i.value?Object.assign(x,s.value):D0.includes(t.type)&&(x.type=t.type),r.value==="a"?(t.disable&&(x["aria-disabled"]="true"),x.href===void 0&&(x.role="button"),!n.value&&I0.test(t.type)&&(x.type=t.type)):t.disable&&(x.disabled="",x["aria-disabled"]="true"),t.loading&&t.percentage!==void 0&&Object.assign(x,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":t.percentage}),x}),p=ge(()=>{let x;t.color!==void 0?x=t.flat||t.outline?`text-${t.textColor||t.color}`:`bg-${t.color} text-${t.textColor||"white"}`:t.textColor&&(x=`text-${t.textColor}`);const m=t.round?"round":`rectangle${l.value?" q-btn--rounded":t.square?" q-btn--square":""}`;return`q-btn--${f.value} q-btn--${m}`+(x!==void 0?" "+x:"")+(c.value?" q-btn--actionable q-focusable q-hoverable":t.disable?" disabled":"")+(t.fab?" q-btn--fab":t.fabMini?" q-btn--fab-mini":"")+(t.noCaps?" q-btn--no-uppercase":"")+(t.dense?" q-btn--dense":"")+(t.stretch?" no-border-radius self-stretch":"")+(t.glossy?" glossy":"")+(t.square?" q-btn--square":"")}),v=ge(()=>e()+(t.stack?" column":" row")+(t.noWrap?" no-wrap text-no-wrap":"")+(t.loading?" q-btn__content--hidden":""));return{classes:p,style:a,innerClasses:v,attributes:d,hasLink:i,linkTag:r,navigateOnClick:o,isActionable:c}}const{passiveCapture:on}=Tn;let vr=null,xr=null,Sr=null;function _s(t){si(t),t.qSkipRipple=!0}const sr=Xt({name:"QBtn",props:{...O0,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(t,{slots:e,emit:n}){const{proxy:i}=Wn(),r=qn(),{classes:s,style:o,innerClasses:a,attributes:l,hasLink:c,linkTag:u,navigateOnClick:f,isActionable:d}=B0(t),p=ks(null),v=ks(null);let x=null,m,h=null,A=null;const b=ge(()=>t.label!==void 0&&t.label!==null&&t.label!==""),M=ge(()=>t.disable||t.ripple===!1?!1:{keyCodes:c.value?[13,32]:[13],...t.ripple===!0?{}:t.ripple}),D=ge(()=>({center:t.round})),E=ge(()=>{const G=Math.max(0,Math.min(100,t.percentage));return G>0?{transition:"transform 0.6s",transform:`translateX(${G-100}%)`}:{}}),C=ge(()=>{if(t.loading)return{onMousedown:_s,onTouchstart:_s,onClick:_s,onKeydown:_s,onKeyup:_s};if(d.value){const G={onClick:S,onKeydown:y,onMousedown:F};if(r.platform.has.touch){const U=t.onTouchstart!==void 0?"":"Passive";G[`onTouchstart${U}`]=P}return G}return{onClick:si}}),I=ge(()=>({ref:p,class:"q-btn q-btn-item non-selectable no-outline "+s.value,style:o.value,...l.value,...C.value}));function S(G){if(p.value!==null){if(G!==void 0){if(G.defaultPrevented)return;const U=document.activeElement;if(t.type==="submit"&&U!==document.body&&!p.value.contains(U)&&!U.contains(p.value)){G.qAvoidFocus||p.value.focus();const q=()=>{var k;A=null,document.removeEventListener("keydown",si,!0),document.removeEventListener("keyup",q,on),(k=p.value)==null||k.removeEventListener("blur",q,on)};A=q,document.addEventListener("keydown",si,!0),document.addEventListener("keyup",q,on),p.value.addEventListener("blur",q,on)}}f(G)}}function y(G){p.value!==null&&(n("keydown",G),Ks(G,[13,32])&&xr!==p.value&&(xr!==null&&J(),G.defaultPrevented||(G.qAvoidFocus||p.value.focus(),xr=p.value,p.value.classList.add("q-btn--active"),document.addEventListener("keyup",V,!0),p.value.addEventListener("blur",V,on)),si(G)))}function P(G){p.value!==null&&(n("touchstart",G),!G.defaultPrevented&&(vr!==p.value&&(vr!==null&&J(),vr=p.value,x=G.target,x.addEventListener("touchcancel",V,on),x.addEventListener("touchend",V,on)),m=!0,h!==null&&clearTimeout(h),h=setTimeout(()=>{h=null,m=!1},200)))}function F(G){p.value!==null&&(G.qSkipRipple=m===!0,n("mousedown",G),!G.defaultPrevented&&Sr!==p.value&&(Sr!==null&&J(),Sr=p.value,p.value.classList.add("q-btn--active"),document.addEventListener("mouseup",V,on)))}function V(G){if(p.value!==null){if((G==null?void 0:G.type)==="keyup"){if(xr===p.value&&Ks(G,[13,32])){const U=new MouseEvent("click",G);U.qKeyEvent=!0,G.defaultPrevented&&Ys(U),G.cancelBubble&&$s(U),p.value.dispatchEvent(U),si(G),G.qKeyEvent=!0}n("keyup",G)}J()}}function J(G){var q,k;A==null||A();const U=v.value;!G&&(vr===p.value||Sr===p.value)&&U!==null&&U!==document.activeElement&&(U.setAttribute("tabindex",-1),U.focus({preventScroll:!0})),vr===p.value&&(x!==null&&(x.removeEventListener("touchcancel",V,on),x.removeEventListener("touchend",V,on)),vr=x=null),Sr===p.value&&(document.removeEventListener("mouseup",V,on),Sr=null),xr===p.value&&(document.removeEventListener("keyup",V,!0),(q=p.value)==null||q.removeEventListener("blur",V,on),xr=null),(k=p.value)==null||k.classList.remove("q-btn--active")}return _i(()=>{J(!0)}),Object.assign(i,{click:G=>{d.value&&S(G)}}),()=>{let G=[];t.icon!==void 0&&G.push(Ue(oc,{name:t.icon,left:!t.stack&&b.value,role:"img"})),b.value&&G.push(Ue("span",{class:"block"},[t.label])),G=Gr(e.default,G),t.iconRight!==void 0&&!t.round&&G.push(Ue(oc,{name:t.iconRight,right:!t.stack&&b.value,role:"img"}));const U=[Ue("span",{class:"q-focus-helper",ref:v})];return t.loading&&t.percentage!==void 0&&U.push(Ue("span",{class:"q-btn__progress absolute-full overflow-hidden"+(t.darkPercentage?" q-btn__progress--dark":"")},[Ue("span",{class:"q-btn__progress-indicator fit block",style:E.value})])),U.push(Ue("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+a.value},G)),t.loading!==null&&U.push(Ue(M_,{name:"q-transition--fade"},()=>t.loading?[Ue("span",{key:"loading",class:"absolute-full flex flex-center"},e.loading!==void 0?e.loading():[Ue(p0)])]:null)),cr(Ue(u.value,I.value,U),[[x0,M.value,void 0,D.value]])}}}),z0=Xt({name:"QToolbar",props:{inset:Boolean},setup(t,{slots:e}){const n=ge(()=>"q-toolbar row no-wrap items-center"+(t.inset?" q-toolbar--inset":""));return()=>Ue("div",{class:n.value,role:"toolbar"},mr(e.default))}});function vs(t,e){t.value!==e&&(t.value=e)}const k0=Xt({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(t,{slots:e,emit:n}){const i=qn(),r=Cn(no,kt);if(r===kt)return console.error("QHeader needs to be child of QLayout"),kt;const s=vt(Number.parseInt(t.heightHint,10)),o=vt(!0),a=ge(()=>t.reveal||r.view.value.includes("H")||i.platform.is.ios&&r.isContainer.value),l=ge(()=>{if(!t.modelValue)return 0;if(a.value)return o.value?s.value:0;const h=s.value-r.scroll.value.position;return Math.max(h,0)}),c=ge(()=>!t.modelValue||a.value&&!o.value),u=ge(()=>t.modelValue&&c.value&&t.reveal),f=ge(()=>"q-header q-layout__section--marginal "+(a.value?"fixed":"absolute")+"-top"+(t.bordered?" q-header--bordered":"")+(c.value?" q-header--hidden":"")+(t.modelValue?"":" q-layout--prevent-focus")),d=ge(()=>{const h=r.rows.value.top,A={};return h[0]==="l"&&r.left.space&&(A[i.lang.rtl?"right":"left"]=`${r.left.size}px`),h[2]==="r"&&r.right.space&&(A[i.lang.rtl?"left":"right"]=`${r.right.size}px`),A});function p(h,A){r.update("header",h,A)}function v({height:h}){vs(s,h),p("size",h)}function x(h){u.value&&vs(o,!0),n("focusin",h)}tt(()=>t.modelValue,h=>{p("space",h),vs(o,!0),r.animate()}),tt(l,h=>{p("offset",h)}),tt(()=>t.reveal,h=>{h||vs(o,t.modelValue)}),tt(o,h=>{r.animate(),n("reveal",h)}),tt(r.scroll,h=>{t.reveal&&vs(o,h.direction==="up"||h.position<=t.revealOffset||h.position-h.inflectionPoint<100)});const m={};return r.instances.header=m,t.modelValue&&p("size",s.value),p("space",t.modelValue),p("offset",l.value),_i(()=>{r.instances.header===m&&(r.instances.header=void 0,p("size",0),p("offset",0),p("space",!1))}),()=>{const h=Ep(e.default,[]);return t.elevated&&h.push(Ue("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),h.push(Ue(nc,{debounce:0,onResize:v})),Ue("header",{class:f.value,style:d.value,onFocusin:x},h)}}}),qf=Xt({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(t,{slots:e}){const n=ge(()=>`q-item__section column q-item__section--${t.avatar||t.side||t.thumbnail?"side":"main"}`+(t.top?" q-item__section--top justify-start":" justify-center")+(t.avatar?" q-item__section--avatar":"")+(t.thumbnail?" q-item__section--thumbnail":"")+(t.noWrap?" q-item__section--nowrap":""));return()=>Ue("div",{class:n.value},mr(e.default))}}),du={dark:{type:Boolean,default:null}};function hu(t,e){return()=>t.dark===null?e.dark.isActive:t.dark}const H0=Xt({name:"QItem",props:{...du,...A0,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:{type:Boolean,default:null},onClick:Function,dense:Boolean,insetLevel:Number,role:String,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["keyup"],setup(t,{slots:e,emit:n}){const i=qn(),r=hu(t,i),{hasLink:s,linkAttrs:o,linkClass:a,linkTag:l,navigateOnClick:c}=Lp(),u=ks(null),f=ks(null),d=ge(()=>(t.clickable===null?t.onClick!==void 0:t.clickable)||s.value||t.tag==="label"),p=ge(()=>!t.disable&&d.value),v=Cn(Sp,null),x=ge(()=>{if(t.role!==void 0)return t.role;const E=v!==null?v.value:null;if(E==="menu"||E==="menubar")return d.value?"menuitem":void 0;if(!s.value)return p.value?"button":E==="list"?"listitem":void 0}),m=ge(()=>"q-item q-item-type row no-wrap"+(t.dense?" q-item--dense":"")+(r()?" q-item--dark":"")+(s.value&&t.active===null?a.value:t.active?` q-item--active${t.activeClass!==void 0?` ${t.activeClass}`:""}`:"")+(t.disable?" disabled":"")+(p.value?" q-item--clickable q-link cursor-pointer "+(t.manualFocus?"q-manual-focusable":"q-focusable q-hoverable")+(t.focused?" q-manual-focusable--focused":""):"")),h=ge(()=>t.insetLevel===void 0?null:{["padding"+(i.lang.rtl?"Right":"Left")]:16+t.insetLevel*56+"px"});function A(E){p.value&&(f.value!==null&&!E.qAvoidFocus&&(!E.qKeyEvent&&document.activeElement===u.value?f.value.focus({preventScroll:!0}):document.activeElement===f.value&&u.value.focus({preventScroll:!0})),c(E))}function b(E){if(p.value&&Ks(E,[13,32])){si(E),E.qKeyEvent=!0;const C=new MouseEvent("click",E);C.qKeyEvent=!0,u.value.dispatchEvent(C)}n("keyup",E)}function M(E){p.value&&E.keyCode===32&&si(E)}function D(){const E=Ep(e.default,[]);return p.value&&E.unshift(Ue("div",{class:"q-focus-helper",tabindex:-1,ref:f})),E}return()=>{const E={ref:u,class:m.value,style:h.value,role:x.value,onKeyup:b};return p.value?(E.onClick=A,E.onKeydown=M,E.tabindex=t.tabindex||"0",Object.assign(E,o.value)):d.value&&(E["aria-disabled"]="true"),Ue(l.value,E,D())}}}),V0=["ul","ol"],G0=Xt({name:"QList",props:{...du,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,role:String,tag:{type:String,default:"div"}},setup(t,{slots:e}){const n=qn(),i=hu(t,n),r=ge(()=>t.role!==void 0?t.role:V0.includes(t.tag)?null:"list");Ra(Sp,ge(()=>t.role!==void 0?t.role:"list"));const s=ge(()=>"q-list"+(t.bordered?" q-list--bordered":"")+(t.dense?" q-list--dense":"")+(t.separator?" q-list--separator":"")+(i()?" q-list--dark":"")+(t.padding?" q-list--padding":""));return()=>Ue(t.tag,{class:s.value,role:r.value},mr(e.default))}});function W0(t,e,n){let i;function r(){i!==void 0&&(Jl.remove(i),i=void 0)}return _i(()=>{t.value&&r()}),{removeFromHistory:r,addToHistory(){i={condition:()=>n.value,handler:e},Jl.add(i)}}}const q0={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},X0=["beforeShow","show","beforeHide","hide"];function $0({showing:t,canShow:e,canHide:n,hideOnRouteChange:i,handleShow:r,handleHide:s,handleRouteChange:o,processOnMount:a}){const l=Wn(),{props:c,emit:u,proxy:f}=l;let d;function p(M){t.value?m(M):v(M)}function v(M){if(c.disable||(M==null?void 0:M.qAnchorHandled)===!0||e!==void 0&&!e(M))return;const D=c["onUpdate:modelValue"]!==void 0;D&&(u("update:modelValue",!0),d=M,Qr(()=>{d===M&&(d=void 0)})),(c.modelValue===null||!D)&&x(M)}function x(M){t.value||(t.value=!0,u("beforeShow",M),r!==void 0?r(M):u("show",M))}function m(M){if(c.disable||n!==void 0&&!n(M))return;const D=c["onUpdate:modelValue"]!==void 0;D&&(u("update:modelValue",!1),d=M,Qr(()=>{d===M&&(d=void 0)})),(c.modelValue===null||!D)&&h(M)}function h(M){t.value&&(t.value=!1,u("beforeHide",M),s!==void 0?s(M):u("hide",M))}function A(M){c.disable&&M?c["onUpdate:modelValue"]!==void 0&&u("update:modelValue",!1):M===!0!==t.value&&(M?x:h)(d)}tt(()=>c.modelValue,A),i!==void 0&&Rp(l)&&tt(()=>f.$route.fullPath,()=>{i.value&&t.value&&(o==null||o(),m())}),a&&Oi(()=>{A(c.modelValue)});const b={show:v,hide:m,toggle:p};return Object.assign(f,b),b}function Y0(){let t;return{preventBodyScroll(e){e!==t&&(t!==void 0||e)&&(t=e,Kv(e))}}}function K0(){let t=null;const e=Wn();function n(){t!==null&&(clearTimeout(t),t=null)}return zh(n),_i(n),{removeTimeout:n,registerTimeout(i,r){n(),E0(e)||(t=setTimeout(()=>{t=null,i()},r))}}}const pu={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},j0=Object.keys(pu);pu.all=!0;function Z0(t){const e={};for(const n of j0)t[n]&&(e[n]=!0);return Object.keys(e).length===0?pu:(e.horizontal?e.left=e.right=!0:e.left&&e.right&&(e.horizontal=!0),e.vertical?e.up=e.down=!0:e.up&&e.down&&(e.vertical=!0),e.horizontal&&e.vertical&&(e.all=!0),e)}const J0=["INPUT","TEXTAREA"];function Dp(t,e){return e.event===void 0&&t.target!==void 0&&!t.target.draggable&&typeof e.handler=="function"&&!J0.includes(t.target.nodeName.toUpperCase())&&(t.qClonedBy===void 0||!t.qClonedBy.includes(e.uid))}function Q0(){if(window.getSelection!==void 0){const t=window.getSelection();t.empty!==void 0?t.empty():t.removeAllRanges!==void 0&&(t.removeAllRanges(),da.is.mobile||t.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const{passive:Xf,passiveCapture:Pi,notPassiveCapture:ts}=Tn;let ex=0;function ac(t,e,n){const i=Oa(t);let r,s=i.left-e.event.x,o=i.top-e.event.y,a=Math.abs(s),l=Math.abs(o);const c=e.direction;c.horizontal&&!c.vertical?r=s<0?"left":"right":!c.horizontal&&c.vertical?r=o<0?"up":"down":c.up&&o<0?(r="up",a>l&&(c.left&&s<0?r="left":c.right&&s>0&&(r="right"))):c.down&&o>0?(r="down",a>l&&(c.left&&s<0?r="left":c.right&&s>0&&(r="right"))):c.left&&s<0?(r="left",a<l&&(c.up&&o<0?r="up":c.down&&o>0&&(r="down"))):c.right&&s>0&&(r="right",a<l&&(c.up&&o<0?r="up":c.down&&o>0&&(r="down")));let u=!1;if(r===void 0&&n===!1){if(e.event.isFirst||e.event.lastDir===void 0)return{};r=e.event.lastDir,u=!0,r==="left"||r==="right"?(i.left-=s,a=0,s=0):(i.top-=o,l=0,o=0)}return{synthetic:u,payload:{evt:t,touch:e.event.mouse!==!0,mouse:e.event.mouse===!0,position:i,direction:r,isFirst:e.event.isFirst,isFinal:n===!0,duration:Date.now()-e.event.time,distance:{x:a,y:l},offset:{x:s,y:o},delta:{x:i.left-e.event.lastX,y:i.top-e.event.lastY}}}}function $f(t,e,n){e.modifiers=n,e.direction=Z0(n),e.stop=n.stop===!0,e.prevent=n.prevent===!0,e.mouseAllDir=n.mouseAllDir===!0||n.mousealldir===!0,e.preserveCursor=n.preserveCursor===!0||n.preservecursor===!0;const i=n.mouse?n.mouseCapture||n.mousecapture?Pi:Xf:null;i!==e.mouseOpts&&(e.mouseOpts!==null&&t.removeEventListener("mousedown",lc,e.mouseOpts),i!==null&&t.addEventListener("mousedown",lc,i),e.mouseOpts=i);const r=Vt.has.touch?n.capture?Pi:Xf:null;r!==e.touchOpts&&(e.touchOpts!==null&&t.removeEventListener("touchstart",cc,e.touchOpts),r!==null&&t.addEventListener("touchstart",cc,r),e.touchOpts=r)}function lc(t){const e=t.currentTarget.__qtouchpan;Dp(t,e)&&yv(t)&&(e.target=document,document.addEventListener("mousemove",e,ts),document.addEventListener("mouseup",e,Pi),Up(e,t,!0))}function cc(t){const e=t.currentTarget.__qtouchpan;if(Dp(t,e)){const{target:n}=t;e.target=n,n.addEventListener("touchmove",e,ts),n.addEventListener("touchcancel",e,Pi),n.addEventListener("touchend",e,Pi),Up(e,t,!1)}}function tx(t){t.type==="mousemove"||t.type==="touchmove"?uc(this,t):js(this,t)}function Ip(t,e,n){n?si(e):(t.stop&&$s(e),t.prevent&&Ys(e))}function Up(t,e,n){if(Vt.is.firefox&&pp(t.el,!0),t.lastEvt=e,n||t.stop){if(!t.direction.all&&(!n||!t.mouseAllDir)){const s=e.type.includes("mouse")?new MouseEvent(e.type,e):new TouchEvent(e.type,e);e.defaultPrevented&&Ys(s),e.cancelBubble&&$s(s),Object.assign(s,{qKeyEvent:e.qKeyEvent,qClickOutside:e.qClickOutside,qAnchorHandled:e.qAnchorHandled,qClonedBy:e.qClonedBy===void 0?[t.uid]:e.qClonedBy.concat(t.uid)}),t.initialEvent={target:e.target,event:s}}$s(e)}const{left:i,top:r}=Oa(e);t.event={x:i,y:r,time:Date.now(),mouse:n,detected:!1,isFirst:!0,isFinal:!1,lastX:i,lastY:r,lastDir:void 0}}function Yf(t,e,n){Ip(t,e,n),t.styled=!0,t.preserveCursor||(t.cursor=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),n&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Q0()}function Kf(t,e){t.styled=!1,t.cursor!==void 0&&(document.documentElement.style.cursor=t.cursor,t.cursor=void 0),document.body.classList.remove("non-selectable"),e&&document.body.classList.remove("no-pointer-events--children")}function uc(t,e){const{event:n}=t;if(n===void 0)return;const i=Oa(e),r=i.left-n.x,s=i.top-n.y;if(r===0&&s===0)return;t.lastEvt=e;const{mouse:o}=n;if(n.detected){n.isFirst||Ip(t,e,o);const{payload:u,synthetic:f}=ac(e,t,!1);u!==void 0&&(t.handler(u)===!1?js(t,e):(!t.styled&&n.isFirst&&Yf(t,e,o),n.lastX=u.position.left,n.lastY=u.position.top,n.lastDir=f?void 0:u.direction,n.isFirst=!1));return}const{direction:a}=t;if(a.all||o&&t.mouseAllDir){Yf(t,e,o),n.detected=!0,uc(t,e);return}const l=Math.abs(r),c=Math.abs(s);l!==c&&(a.horizontal&&l>c||a.vertical&&l<c||a.up&&l<c&&s<0||a.down&&l<c&&s>0||a.left&&l>c&&r<0||a.right&&l>c&&r>0?(n.detected=!0,uc(t,e)):js(t,e,!0))}function js(t,e,n){const{event:i,target:r}=t;if(i===void 0)return;const{mouse:s}=i;if(s?(r.removeEventListener("mousemove",t,ts),r.removeEventListener("mouseup",t,Pi)):(r.removeEventListener("touchmove",t,ts),r.removeEventListener("touchcancel",t,Pi),r.removeEventListener("touchend",t,Pi)),Vt.is.firefox&&pp(t.el,!1),n)t.styled&&Kf(t,s),!i.detected&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(i.detected){e===void 0&&(e=t.lastEvt),i.isFirst&&t.handler(ac(e,t).payload);const{payload:o}=ac(e,t,!0),{handler:a}=t;t.styled?(Kf(t,s),s?setTimeout(a,50,o):a(o)):a(o)}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0,t.target=null}const ul=hp({name:"touch-pan",beforeMount(t,{value:e,modifiers:n}){const i={handleEvent:tx,el:t,uid:"qvtp_"+ex++,handler:e,modifiers:void 0,direction:void 0,stop:!1,prevent:!1,mouseAllDir:!1,preserveCursor:!1,mouseOpts:null,touchOpts:null,target:null,event:void 0,initialEvent:void 0,lastEvt:void 0,styled:!1,cursor:void 0};t.__qtouchpan=i,$f(t,i,n),i.touchOpts!==null&&t.addEventListener("touchmove",di,ts)},updated(t,{oldValue:e,value:n,modifiers:i}){const r=t.__qtouchpan;r!==void 0&&(e!==n&&(typeof n!="function"&&js(r),r.handler=n),i!==r.modifiers&&$f(t,r,i))},beforeUnmount(t){const e=t.__qtouchpan;e!==void 0&&(js(e),e.mouseOpts!==null&&t.removeEventListener("mousedown",lc,e.mouseOpts),e.touchOpts!==null&&(t.removeEventListener("touchstart",cc,e.touchOpts),t.removeEventListener("touchmove",di,ts)),t.__qtouchpan=void 0)}});function vo(t,e,n){return n<=e?e:Math.min(n,Math.max(e,t))}const Yr=[];let ns;function nx(t){t.keyCode===27&&(ns=!0)}function ix(){ns&&(ns=!1)}function rx(t){ns&&Ks(t,27)&&(ns=!1,Yr.at(-1)(t))}function Np(t){window[t]("keydown",nx),window[t]("blur",ix),window[t]("keyup",rx),ns=!1}function sx(t){Yr.push(t),Yr.length===1&&Np("addEventListener")}function jf(t){const e=Yr.indexOf(t);e!==-1&&(Yr.splice(e,1),Yr.length===0&&Np("removeEventListener"))}const Zf=150;function ox(t,e){t.value!==e&&(t.value=e)}const ax=Xt({name:"QDrawer",inheritAttrs:!1,props:{...q0,...du,side:{type:String,default:"left",validator:t=>["left","right"].includes(t)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:t=>["default","desktop","mobile"].includes(t),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...X0,"onLayout","miniState","escapeKey","pan"],setup(t,{slots:e,emit:n,attrs:i}){const r=Wn(),s=qn(),o=hu(t,s),{preventBodyScroll:a}=Y0(),{registerTimeout:l,removeTimeout:c}=K0(),u=Cn(no,kt);if(u===kt)return console.error("QDrawer needs to be child of QLayout"),kt;let f,d=null,p;const v=vt(t.behavior==="mobile"||t.behavior!=="desktop"&&u.totalWidth.value<=t.breakpoint),x=ge(()=>t.mini&&!v.value),m=ge(()=>x.value?t.miniWidth:t.width),h=ge(()=>t.overlay||t.miniToOverlay||u.view.value.includes(U.value?"R":"L")||s.platform.is.ios&&u.isContainer.value),A=vt(t.showIfAbove&&!v.value||t.modelValue===!0),b=ge(()=>!t.overlay&&A.value&&!v.value),M=ge(()=>t.overlay&&A.value&&!v.value),D=ge(()=>!t.persistent&&(v.value||M.value));function E(R,ie){if(y(),R!==!1&&u.animate(),H(0),v.value){const re=u.instances[ue.value];re!=null&&re.belowBreakpoint.value&&re.hide(!1),Z(1),u.isContainer.value||a(!0)}else Z(0),R!==!1&&te(!1);l(()=>{R!==!1&&te(!0),ie||n("show",R)},Zf)}function C(R,ie){P(),R!==!1&&u.animate(),Z(0),H(q.value*m.value),N(),ie?c():l(()=>{n("hide",R)},Zf)}const{show:I,hide:S}=$0({showing:A,hideOnRouteChange:D,handleShow:E,handleHide:C}),{addToHistory:y,removeFromHistory:P}=W0(A,S,D),F=ge(()=>A.value&&D.value);function V(R){n("escapeKey"),S(R)}function J(R){R?sx(V):jf(V)}const G={belowBreakpoint:v,hide:S},U=ge(()=>t.side==="right"),q=ge(()=>(s.lang.rtl?-1:1)*(U.value?1:-1)),k=vt(0),fe=vt(!1),pe=vt(!1),_e=vt(m.value*q.value),ue=ge(()=>U.value?"left":"right"),Be=ge(()=>A.value&&!v.value&&!t.overlay?t.miniToOverlay?t.miniWidth:m.value:0),Q=ge(()=>"fullscreen q-drawer__backdrop"+(!A.value&&!fe.value?" hidden":"")),ce=ge(()=>({backgroundColor:`rgba(0,0,0,${k.value*.4})`})),ye=ge(()=>U.value?u.rows.value.top[2]==="r":u.rows.value.top[0]==="l"),Se=ge(()=>U.value?u.rows.value.bottom[2]==="r":u.rows.value.bottom[0]==="l"),Pe=ge(()=>{const R={};return u.header.space&&!ye.value&&(h.value?R.top=`${u.header.offset}px`:u.header.space&&(R.top=`${u.header.size}px`)),u.footer.space&&!Se.value&&(h.value?R.bottom=`${u.footer.offset}px`:u.footer.space&&(R.bottom=`${u.footer.size}px`)),R}),Ae=ge(()=>{const R={"--q-drawer-width":`${m.value}px`,transform:`translateX(${_e.value}px)`};return v.value?R:Object.assign(R,Pe.value)}),He=ge(()=>"q-drawer__content fit "+(u.isContainer.value?"overflow-auto":"scroll")),ct=ge(()=>`q-drawer q-drawer--${t.side}`+(pe.value?" q-drawer--mini-animate":"")+(t.bordered?" q-drawer--bordered":"")+(o()?" q-drawer--dark q-dark":"")+(fe.value?" no-transition":A.value?"":" q-layout--prevent-focus")+(v.value?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${x.value?"mini":"standard"}`+(h.value||!b.value?" fixed":"")+(t.overlay||t.miniToOverlay?" q-drawer--on-top":"")+(ye.value?" q-drawer--top-padding":""))),g=ge(()=>{const R=s.lang.rtl?t.side:ue.value;return[[ul,T,void 0,{[R]:!0,mouse:!0,prevent:!0}]]}),L=ge(()=>{const R=s.lang.rtl?ue.value:t.side;return[[ul,v.value&&!t.noSwipeClose?_:void 0,void 0,{[R]:!0,mouse:!0}]]}),X=ge(()=>{const R=s.lang.rtl?ue.value:t.side;return[[ul,A.value&&!t.noSwipeBackdrop?_:void 0,void 0,{[R]:!0,mouse:!0,mouseAllDir:!0,prevent:!0}]]});function ee(){ox(v,t.behavior==="mobile"||t.behavior!=="desktop"&&u.totalWidth.value<=t.breakpoint)}tt(v,R=>{R?(f=A.value,A.value&&S(!1)):A.value?(H(0),Z(0),N()):!t.overlay&&t.behavior!=="mobile"&&f!==!1&&I(!1)}),tt(()=>t.side,(R,ie)=>{u.instances[ie]===G&&(u.instances[ie]=void 0,u[ie].space=!1,u[ie].offset=0),u.instances[R]=G,u[R].size=m.value,u[R].space=b.value,u[R].offset=Be.value}),tt(u.totalWidth,()=>{(u.isContainer.value||!document.qScrollPrevented)&&ee()}),tt(()=>t.behavior+t.breakpoint,ee),tt(u.isContainer,R=>{A.value&&a(!R),R&&ee()}),tt(u.scrollbarWidth,()=>{H(A.value?0:void 0)}),tt(Be,R=>{O("offset",R)}),tt(b,R=>{n("onLayout",R),O("space",R)}),tt(U,()=>{H()}),tt(m,R=>{H(),$(t.miniToOverlay,R)}),tt(()=>t.miniToOverlay,R=>{$(R,m.value)}),tt(()=>s.lang.rtl,()=>{H()}),tt(()=>t.mini,()=>{t.noMiniAnimation||t.modelValue&&(ne(),u.animate())}),tt(x,R=>{n("miniState",R)});function H(R){R===void 0?Qr(()=>{R=A.value?0:m.value,H(q.value*R)}):(u.isContainer.value&&U.value&&(v.value||Math.abs(R)===m.value)&&(R+=q.value*u.scrollbarWidth.value),_e.value=R)}function Z(R){k.value=R}function te(R){const ie=R?"remove":u.isContainer.value?"":"add";ie!==""&&document.body.classList[ie]("q-body--drawer-toggle")}function ne(){d!==null&&clearTimeout(d),r.proxy&&r.proxy.$el&&r.proxy.$el.classList.add("q-drawer--mini-animate"),pe.value=!0,d=setTimeout(()=>{var R,ie;d=null,pe.value=!1,(ie=(R=r==null?void 0:r.proxy)==null?void 0:R.$el)==null||ie.classList.remove("q-drawer--mini-animate")},150)}function T(R){if(A.value)return;const ie=m.value,re=vo(R.distance.x,0,ie);if(R.isFinal){re>=Math.min(75,ie)?(I(),n("pan",{type:"open",stage:"end"})):(u.animate(),Z(0),H(q.value*ie),n("pan",{type:"open",stage:"cancel"})),fe.value=!1;return}H((s.lang.rtl?!U.value:U.value)?Math.max(ie-re,0):Math.min(0,re-ie)),Z(vo(re/ie,0,1)),R.isFirst&&(fe.value=!0,n("pan",{type:"open",stage:"start"}))}function _(R){if(!A.value)return;const ie=m.value,re=R.direction===t.side,le=(s.lang.rtl?!re:re)?vo(R.distance.x,0,ie):0;if(R.isFinal){Math.abs(le)<Math.min(75,ie)?(u.animate(),Z(1),H(0),n("pan",{type:"close",stage:"cancel"})):(S(),n("pan",{type:"close",stage:"end"})),fe.value=!1;return}H(q.value*le),Z(vo(1-le/ie,0,1)),R.isFirst&&(fe.value=!0,n("pan",{type:"close",stage:"start"}))}function N(){a(!1),te(!0)}function O(R,ie){u.update(t.side,R,ie)}function $(R,ie){O("size",R?t.miniWidth:ie)}return u.instances[t.side]=G,$(t.miniToOverlay,m.value),O("space",b.value),O("offset",Be.value),t.showIfAbove&&!t.modelValue&&A.value&&t["onUpdate:modelValue"]!==void 0&&n("update:modelValue",!0),Oi(()=>{n("onLayout",b.value),n("miniState",x.value),tt(F,J,{immediate:!0}),f=t.showIfAbove;const R=()=>{(A.value?E:C)(!1,!0)};if(u.totalWidth.value!==0){Qr(R);return}p=tt(u.totalWidth,()=>{p(),p=void 0,!A.value&&t.showIfAbove&&!v.value?I(!1):R()})}),_i(()=>{p==null||p(),jf(V),d!==null&&(clearTimeout(d),d=null),A.value&&N(),u.instances[t.side]===G&&(u.instances[t.side]=void 0,O("size",0),O("offset",0),O("space",!1))}),()=>{const R=[];v.value&&(t.noSwipeOpen||R.push(cr(Ue("div",{key:"open",class:`q-drawer__opener fixed-${t.side}`,"aria-hidden":"true"}),g.value)),R.push(cr(Ue("div",{ref:"backdrop",class:Q.value,style:ce.value,"aria-hidden":"true",onClick:S}),X.value)));const ie={},re={};for(const oe in i)oe==="role"||oe.startsWith("aria-")?ie[oe]=i[oe]:re[oe]=i[oe];const le=x.value&&e.mini!==void 0,be=[Ue("div",{...re,key:String(le),class:[He.value,i.class]},le?e.mini():mr(e.default))];return t.elevated&&A.value&&be.push(Ue("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),R.push(cr(Ue("aside",{ref:"content",class:ct.value,style:Ae.value,...ie},be),L.value)),Ue("div",{class:"q-drawer-container"},R)}}}),Fp=vt(0),lx=vt(0),cx={class:"nav-links"},ux=eo({__name:"SiteNav",setup(t){const e=[{slide:0,label:"活动全景"},{slide:4,label:"活动目标"},{slide:5,label:"核心流程"},{slide:6,label:"时间安排"},{slide:7,label:"网站模块"},{slide:8,label:"考核激励"}],n=vt(!1),i=vt(!1),r=()=>{n.value=window.scrollY>40},s=ge(()=>{let o=-1;return e.forEach((a,l)=>{Fp.value>=a.slide&&(o=l)}),o});return Oi(()=>{window.addEventListener("scroll",r,{passive:!0}),r()}),es(()=>window.removeEventListener("scroll",r)),(o,a)=>(Ct(),Yt(Rt,null,[$e(k0,{class:fr(["nav",{scrolled:n.value}])},{default:At(()=>[$e(z0,{class:"nav-inner"},{default:At(()=>[a[5]||(a[5]=Ge("a",{class:"logo",href:"#showcase","data-slide":"0"},[Ge("span",{class:"logo-text"},"逐梦之夏")],-1)),$e(Jv,{class:"nav-space"}),Ge("nav",cx,[(Ct(),Yt(Rt,null,Xr(e,(l,c)=>$e(sr,{key:l.label,flat:"","no-caps":"",ripple:!1,href:"#showcase","data-slide":l.slide,class:fr(["nav-link",{active:s.value===c}])},{default:At(()=>[fn(ln(l.label),1)]),_:2},1032,["data-slide","class"])),64))]),$e(sr,{unelevated:"","no-caps":"",color:"accent",href:"#showcase","data-slide":"9",class:"nav-cta q-px-lg"},{default:At(()=>[...a[4]||(a[4]=[fn("立即申请",-1)])]),_:1}),$e(sr,{flat:"",round:"",icon:"menu",class:"nav-burger","aria-label":"菜单",onClick:a[0]||(a[0]=l=>i.value=!i.value)})]),_:1})]),_:1},8,["class"]),$e(ax,{modelValue:i.value,"onUpdate:modelValue":a[3]||(a[3]=l=>i.value=l),side:"right",overlay:"",class:"nav-drawer"},{default:At(()=>[$e(G0,{padding:"",class:"nav-drawer-list"},{default:At(()=>[(Ct(),Yt(Rt,null,Xr(e,l=>$e(H0,{key:l.label,clickable:"",tag:"a",href:"#showcase","data-slide":l.slide,onClick:a[1]||(a[1]=c=>i.value=!1)},{default:At(()=>[$e(qf,null,{default:At(()=>[fn(ln(l.label),1)]),_:2},1024),$e(qf,{side:""},{default:At(()=>[$e(oc,{name:"chevron_right",size:"18px"})]),_:1})]),_:2},1032,["data-slide"])),64))]),_:1}),$e(sr,{unelevated:"","no-caps":"",color:"accent",href:"#showcase","data-slide":9,class:"q-mx-md",style:{width:"calc(100% - 32px)"},onClick:a[2]||(a[2]=l=>i.value=!1)},{default:At(()=>[...a[6]||(a[6]=[fn("立即申请",-1)])]),_:1})]),_:1},8,["modelValue"])],64))}}),fx={id:"hero",class:"hero"},dx={class:"hero-content"},hx={class:"hero-actions"},px={class:"hero-stats"},mx=eo({__name:"HeroSection",setup(t){const e=[{label:"主办方",value:"逐梦创新实验室"},{label:"面向对象",value:"全校大一新生"},{label:"活动周期",value:"2026.09 — 2027.02"}];return(n,i)=>(Ct(),Yt("header",fx,[i[3]||(i[3]=s_('<div class="hero-bg" aria-hidden="true"><img src="./images/bg-hero.jpg" alt=""></div><span class="hero-corner-tag" aria-hidden="true"><b>逐梦之夏</b></span><svg class="hero-waves" viewBox="0 0 1440 24" preserveAspectRatio="none" aria-hidden="true"><path d="M0 12 Q 60 2 120 12 T 240 12 T 360 12 T 480 12 T 600 12 T 720 12 T 840 12 T 960 12 T 1080 12 T 1200 12 T 1320 12 T 1440 12"></path><path d="M0 18 Q 60 10 120 18 T 240 18 T 360 18 T 480 18 T 600 18 T 720 18 T 840 18 T 960 18 T 1080 18 T 1200 18 T 1320 18 T 1440 18" opacity="0.55"></path></svg>',3)),Ge("div",dx,[i[2]||(i[2]=Ge("h1",{class:"hero-title"},"逐梦之夏",-1)),Ge("div",hx,[$e(sr,{unelevated:"","no-caps":"",color:"accent",href:"#showcase","data-slide":"9",class:"btn q-px-xl"},{default:At(()=>[...i[0]||(i[0]=[fn("浏览课题 · 立即申请",-1)])]),_:1}),$e(sr,{outline:"","no-caps":"",color:"secondary",href:"#showcase","data-slide":"5",class:"btn btn-ghost q-px-xl"},{default:At(()=>[...i[1]||(i[1]=[fn("了解流程 ",-1),Ge("i",{class:"arr q-ml-sm"},"↓",-1)])]),_:1})])]),Ge("div",px,[(Ct(),Yt(Rt,null,Xr(e,r=>Ge("div",{key:r.label,class:"stat"},[Ge("i",null,ln(r.label),1),Ge("b",null,ln(r.value),1)])),64))]),i[4]||(i[4]=Ge("div",{class:"scroll-hint","aria-hidden":"true"},[Ge("span")],-1))]))}}),gx={id:"showcase",class:"showcase"},_x={class:"showcase-inner"},vx={class:"slide-media-wrap"},xx=["src","alt","loading"],Sx={class:"slide-body"},yx={class:"slide-title"},Mx={class:"slide-desc"},Ex={class:"slide-points"},bx={key:1,class:"link-more",href:"#showcase","data-slide":"9"},Tx={class:"showcase-nav","aria-label":"幻灯片切换"},wx=["aria-label","onClick"],Ax={class:"lbl"},Cx={class:"showcase-counter"},Rx={class:"showcase-progress"},Jf=780,Px=12,Lx=56,Dx=20,Ix=.55,Ux=eo({__name:"ProductShowcase",setup(t){const e=[{num:"01",title:"项目招标",desc:"实验室老师与项目团队发布真实课题，由导师审核，确保课题真实、可执行、有孵化价值。",points:["课题名称与背景","七项发布要素一次讲清","真实 · 可执行 · 有孵化价值"],img:"./images/slide-bidding.jpg",imgAlt:"夕阳云海中飘行的卷轴与纸飞机插画"},{num:"02",title:"学习考核",desc:'以过程留痕为基础，六大维度综合评价学习意愿，拒绝"简历面试"式的片面观察。',points:["申请材料 · 周会参与 · 任务完成","知识分享 · 月报质量 · 导师评价","全过程 OA 系统留痕"],img:"./images/slide-assessment.jpg",imgAlt:"晨光云海上漂浮的书本插画"},{num:"03",title:"人才招募",desc:"优秀参与者进入实验室，成为项目骨干或新生力军，在真实项目中赢得直通资格。",points:["负责人推荐资格","结项后发布实验室招募令","绿色通道 · 竞赛推荐"],img:"./images/slide-recruit.jpg",imgAlt:"飞鸟群飞向地平线引路之星的黄昏插画"},{num:"04",title:"项目孵化",desc:"立项推进、周会月报跟进、结项评审，优秀项目进入下一期孵化或推荐参赛。",points:["周会 · 月报 · 中期检查","结项答辩：优秀 / 合格 / 不合格","成果沉淀至项目库续期孵化"],img:"./images/slide-incubation.jpg",imgAlt:"晨光中生长着发光幼苗的浮空岛插画"},{num:"05",title:"活动目标",desc:"以课题项目为试金石，考核学习意愿、孵化优质项目、招募生力军。",points:["考核学习意愿 · 多维综合判断，拒绝片面的简历面试","孵化优质项目 · 真实课题落地，形成可参赛成果","招募新生力量 · 优秀参与者直通实验室面试","沉淀长效机制 · 建成课题库、人才库、项目库"],img:"./images/slide-goals.jpg",imgAlt:"晨光云海上四座发光路标石柱的插画"},{num:"06",title:"核心流程",desc:"四步走完全程，过程材料在 OA 系统内全部留痕。",points:["项目发布 · 七项发布要素一次讲清，导师审核把关","自主申请 · 材料初筛 + 面试/小任务 + 导师确认","系统跟进 · 负责人制 + 周会月报 + 中期检查","完成结项 · 交报告与演示，答辩评出优秀 / 合格 / 不合格"],img:"./images/slide-flow.jpg",imgAlt:"云海中逐级升高的四段浮空石阶与光门插画"},{num:"07",title:"时间安排",desc:"一个学期的节奏，具体时间以 OA 系统公告为准。",points:["筹备与宣传 —— 建站、课题征集、网站上线","申请立项 —— 申请、筛选、面试、立项公示","项目执行 —— 周会、月报、中期检查","结项评审 —— 提交材料、答辩评审、评优公示","转化招募 —— 直通面试、新生招募、续期孵化"],img:"./images/slide-schedule.jpg",imgAlt:"自黎明渐变到黄昏橙红的天际光带插画"},{num:"08",title:"网站模块",desc:"OA 课题项目招标网站，从发布到结项全流程线上化。",points:["项目大厅 · 课题列表与标签筛选，详情覆盖七项要素","申请入口 · 在线填报资料，进度看板跟踪申请状态","过程留痕 · 周会月报上传、文件归档、通知提醒","评价结项 · 导师评价、材料提交与数据统计"],img:"./images/slide-platform.jpg",imgAlt:"云海上悬浮着九块发光光屏阵列的插画"},{num:"09",title:"考核激励",desc:"项目即考核：在真实任务中观察你的学习意愿。",points:["六大维度 · 材料申请、周会任务、知识分享、月报与导师评价","全程留痕 · OA 记录、周会纪要、项目看板、学习日志","招募转化路径 · 报名者 → 成员 → 优秀成员 → 骨干 → 新生力军","激励与退出 · 优秀者直通与竞赛推荐，长期无进展则退出"],img:"./images/slide-review.jpg",imgAlt:"云海中六道柔光汇聚向暖金星徽的插画"},{num:"10",title:"加入我们",desc:"不问出身，只看投入。浏览课题，提交申请，在真实项目中开始成长。",points:["浏览课题 · 前往 OA 招标网站查看全部课题","提交申请 · 在线填报资料、作品与学习计划","走进项目 · 初筛、面试/小任务、导师确认后立项","宣传节奏 · 预热 → 上线 → 课题发布 → 申请 → 立项公示 → 结项评优 → 招募"],img:"./images/slide-join.jpg",imgAlt:"云海之路尽头矗立着光之门拱的插画",cta:{label:"前往 OA 招标网站",href:"#"}}],n=vt(0),i=E=>String(E).padStart(2,"0"),r=vt(null);let s=!1;function o(){const E=r.value;if(!E)return;const C=E.getBoundingClientRect(),I=E.offsetHeight-window.innerHeight;if(I<=0)return;const S=Math.min(1,Math.max(0,-C.top/I)),y=Math.min(e.length-1,Math.floor(S*e.length));n.value=y}let a=0;function l(){const E=r.value;if(!E)return!1;const C=E.getBoundingClientRect();return C.top<=1&&C.bottom>=window.innerHeight-1}function c(E){if(E.ctrlKey||E.metaKey||E.altKey||!l())return;let C=E.deltaY;if(E.deltaMode===1?C*=32:E.deltaMode===2&&(C*=800),Math.abs(C)<Px){E.preventDefault();return}const I=C>0?1:-1,S=n.value+I;if(S<0||S>=e.length)return;E.preventDefault();const y=Date.now();y<a||(a=y+Jf,M(S))}function u(E){const C=E.target;if(C&&(C.tagName==="INPUT"||C.tagName==="TEXTAREA"||C.isContentEditable)||E.metaKey||E.ctrlKey||E.altKey||E.shiftKey)return;let I=0;if(E.key==="ArrowDown"||E.key==="PageDown"?I=1:(E.key==="ArrowUp"||E.key==="PageUp")&&(I=-1),!I||!l())return;const S=n.value+I;S<0||S>=e.length||(E.preventDefault(),M(S))}let f=0,d=0,p=0,v=!0;function x(){const E=r.value;if(!E)return!0;const C=E.querySelectorAll(".slide")[n.value];return C?C.scrollHeight>C.clientHeight+1:!0}function m(E){if(E.touches.length!==1){v=!0;return}v=!1,f=E.touches[0].clientX,d=E.touches[0].clientY,p=Date.now()}function h(E){if(v||E.touches.length!==1||!l()||x())return;const C=E.touches[0],I=Math.abs(C.clientX-f),S=Math.abs(C.clientY-d);if(I>=S)return;const y=n.value+(C.clientY<d?1:-1);y<0||y>=e.length||E.preventDefault()}function A(E){if(v||!l()||x())return;const C=E.changedTouches[0];if(!C)return;const I=d-C.clientY,S=Math.abs(I),y=S/Math.max(Date.now()-p,1);if(S<Lx&&!(S>=Dx&&y>=Ix))return;const P=n.value+(I>0?1:-1);if(P<0||P>=e.length)return;const F=Date.now();F<a||(a=F+Jf,M(P))}function b(){s||(s=!0,requestAnimationFrame(()=>{o(),s=!1}))}function M(E){const C=r.value;if(!C)return;const I=C.getBoundingClientRect(),S=C.offsetHeight-window.innerHeight,y=window.scrollY+I.top+(E+.5)/e.length*S;window.scrollTo({top:y,behavior:"smooth"})}function D(E){const C=E.target,I=C==null?void 0:C.closest("[data-slide]");if(!I)return;const S=Number(I.dataset.slide);!Number.isInteger(S)||S<0||S>=e.length||(E.preventDefault(),M(S))}return tt(n,E=>{Fp.value=E}),Oi(()=>{window.addEventListener("scroll",b,{passive:!0}),window.addEventListener("resize",b,{passive:!0}),window.addEventListener("wheel",c,{passive:!1}),window.addEventListener("keydown",u),window.addEventListener("touchstart",m,{passive:!0}),window.addEventListener("touchmove",h,{passive:!1}),window.addEventListener("touchend",A,{passive:!0}),document.addEventListener("click",D),lx.value=e.length,o()}),es(()=>{window.removeEventListener("scroll",b),window.removeEventListener("resize",b),window.removeEventListener("wheel",c),window.removeEventListener("keydown",u),window.removeEventListener("touchstart",m),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",A),document.removeEventListener("click",D)}),(E,C)=>{const I=Hh("reveal");return Ct(),Yt("div",{ref_key:"rootEl",ref:r,class:"showcase-track",style:Os({"--slide-count":e.length})},[Ge("section",gx,[Ge("div",_x,[(Ct(),Yt(Rt,null,Xr(e,(S,y)=>Ge("article",{key:S.num,class:fr(["slide",{active:y===n.value,passed:y<n.value}])},[Ge("div",vx,[cr(Ge("img",{class:"slide-media",src:S.img,alt:S.imgAlt,loading:y===0?"eager":"lazy"},null,8,xx),[[I]]),C[0]||(C[0]=Ge("span",{class:"media-tag","aria-hidden":"true"},[Ge("b",null,"逐梦之夏")],-1))]),cr((Ct(),Yt("div",Sx,[Ge("h3",yx,ln(S.title),1),Ge("p",Mx,ln(S.desc),1),Ge("ul",Ex,[(Ct(!0),Yt(Rt,null,Xr(S.points,P=>(Ct(),Yt("li",{key:P},ln(P),1))),128))]),S.cta?(Ct(),cu(sr,{key:0,unelevated:"","no-caps":"",color:"accent",href:S.cta.href,class:"btn q-px-xl slide-cta"},{default:At(()=>[fn(ln(S.cta.label),1)]),_:2},1032,["href"])):(Ct(),Yt("a",bx,[...C[1]||(C[1]=[fn("了解更多 ",-1),Ge("i",null,"MORE →",-1)])]))])),[[I,1]])],2)),64))]),Ge("div",Tx,[(Ct(),Yt(Rt,null,Xr(e,(S,y)=>Ge("button",{key:S.num,class:fr({active:y===n.value}),"aria-label":S.title,onClick:P=>M(y)},[C[2]||(C[2]=Ge("span",{class:"dot"},null,-1)),Ge("span",Ax,ln(S.title),1)],10,wx)),64))]),Ge("div",Cx,[Ge("b",null,ln(i(n.value+1)),1),fn(" / "+ln(i(e.length)),1)]),Ge("div",Rx,[Ge("i",{style:Os({width:`${(n.value+1)/e.length*100}%`})},null,4)])])],4)}}}),Op=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},Nx={},Fx={class:"statement"};function Ox(t,e){const n=Hh("reveal");return cr((Ct(),Yt("section",Fx,[...e[0]||(e[0]=[Ge("p",{class:"st-text"},"真实项目，是最好的试金石。",-1),Ge("p",{class:"st-sub"},[fn(' 传统招新只能看到简历与面试表现；而"逐梦之夏"把招新转化为项目实践——'),Ge("br"),fn(" 学生在真实项目中学习、试错、产出，实验室在过程中观察、筛选、孵化。 ")],-1)])])),[[n]])}const Bx=Op(Nx,[["render",Ox]]),zx={},kx={class:"footer"};function Hx(t,e){return Ct(),Yt("footer",kx,[...e[0]||(e[0]=[Ge("div",{class:"footer-brand"},[Ge("p",{class:"footer-name"},"逐梦创新实验室")],-1),Ge("p",{class:"footer-note"},'"逐梦之夏"活动策划案 V1.0 · 编制于二〇二六年九月 · 未尽事宜由实验室另行通知，各阶段具体时间以 OA 系统公告为准',-1)])])}const Vx=Op(zx,[["render",Hx]]),Gx=eo({__name:"App",setup(t){return(e,n)=>(Ct(),cu(Zv,{view:"hHh lpR fFr"},{default:At(()=>[$e(ux),$e(Hv,null,{default:At(()=>[$e(kv,null,{default:At(()=>[$e(mx),Ge("main",null,[$e(Ux),$e(Bx)]),$e(Vx)]),_:1})]),_:1})]),_:1}))}});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mu="168",Wx=0,Qf=1,qx=2,Bp=1,Xx=2,ei=3,Fi=0,Gt=1,Mn=2,Li=0,Kr=1,ed=2,td=3,nd=4,$x=5,nr=100,Yx=101,Kx=102,jx=103,Zx=104,Jx=200,Qx=201,eS=202,tS=203,fc=204,dc=205,nS=206,iS=207,rS=208,sS=209,oS=210,aS=211,lS=212,cS=213,uS=214,fS=0,dS=1,hS=2,pa=3,pS=4,mS=5,gS=6,_S=7,zp=0,vS=1,xS=2,Di=0,SS=1,yS=2,MS=3,ES=4,bS=5,TS=6,wS=7,kp=300,is=301,rs=302,hc=303,pc=304,Ba=306,mc=1e3,or=1001,gc=1002,dn=1003,AS=1004,xo=1005,En=1006,fl=1007,ar=1008,hi=1009,Hp=1010,Vp=1011,Zs=1012,gu=1013,dr=1014,ai=1015,io=1016,_u=1017,vu=1018,ss=1020,Gp=35902,Wp=1021,qp=1022,wn=1023,Xp=1024,$p=1025,jr=1026,os=1027,Yp=1028,xu=1029,Kp=1030,Su=1031,yu=1033,Ko=33776,jo=33777,Zo=33778,Jo=33779,_c=35840,vc=35841,xc=35842,Sc=35843,yc=36196,Mc=37492,Ec=37496,bc=37808,Tc=37809,wc=37810,Ac=37811,Cc=37812,Rc=37813,Pc=37814,Lc=37815,Dc=37816,Ic=37817,Uc=37818,Nc=37819,Fc=37820,Oc=37821,Qo=36492,Bc=36494,zc=36495,jp=36283,kc=36284,Hc=36285,Vc=36286,CS=3200,RS=3201,PS=0,LS=1,Ai="",Un="srgb",Bi="srgb-linear",Mu="display-p3",za="display-p3-linear",ma="linear",ut="srgb",ga="rec709",_a="p3",yr=7680,id=519,DS=512,IS=513,US=514,Zp=515,NS=516,FS=517,OS=518,BS=519,Gc=35044,rd="300 es",li=2e3,va=2001;class cs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dl=Math.PI/180,Wc=180/Math.PI;function Ii(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pt[t&255]+Pt[t>>8&255]+Pt[t>>16&255]+Pt[t>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[n&63|128]+Pt[n>>8&255]+"-"+Pt[n>>16&255]+Pt[n>>24&255]+Pt[i&255]+Pt[i>>8&255]+Pt[i>>16&255]+Pt[i>>24&255]).toLowerCase()}function Kt(t,e,n){return Math.max(e,Math.min(n,t))}function zS(t,e){return(t%e+e)%e}function hl(t,e,n){return(1-n)*t+n*e}function zn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function st(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Xe{constructor(e=0,n=0){Xe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(e,n,i,r,s,o,a,l,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],v=i[8],x=r[0],m=r[3],h=r[6],A=r[1],b=r[4],M=r[7],D=r[2],E=r[5],C=r[8];return s[0]=o*x+a*A+l*D,s[3]=o*m+a*b+l*E,s[6]=o*h+a*M+l*C,s[1]=c*x+u*A+f*D,s[4]=c*m+u*b+f*E,s[7]=c*h+u*M+f*C,s[2]=d*x+p*A+v*D,s[5]=d*m+p*b+v*E,s[8]=d*h+p*M+v*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,p=c*s-o*l,v=n*f+i*d+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=f*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=d*x,e[4]=(u*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=p*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(pl.makeScale(e,n)),this}rotate(e){return this.premultiply(pl.makeRotation(-e)),this}translate(e,n){return this.premultiply(pl.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const pl=new qe;function Jp(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function xa(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function kS(){const t=xa("canvas");return t.style.display="block",t}const sd={};function Zr(t){t in sd||(sd[t]=!0,console.warn(t))}function HS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const od=new qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ad=new qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),xs={[Bi]:{transfer:ma,primaries:ga,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Un]:{transfer:ut,primaries:ga,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[za]:{transfer:ma,primaries:_a,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(ad),fromReference:t=>t.applyMatrix3(od)},[Mu]:{transfer:ut,primaries:_a,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(ad),fromReference:t=>t.applyMatrix3(od).convertLinearToSRGB()}},VS=new Set([Bi,za]),it={enabled:!0,_workingColorSpace:Bi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!VS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=xs[e].toReference,r=xs[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return xs[t].primaries},getTransfer:function(t){return t===Ai?ma:xs[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(xs[e].luminanceCoefficients)}};function Jr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ml(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Mr;class GS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Mr===void 0&&(Mr=xa("canvas")),Mr.width=e.width,Mr.height=e.height;const i=Mr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Mr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=xa("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Jr(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Jr(n[i]/255)*255):n[i]=Jr(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let WS=0;class Qp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:WS++}),this.uuid=Ii(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(gl(r[o].image)):s.push(gl(r[o]))}else s=gl(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function gl(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?GS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qS=0;class Wt extends cs{constructor(e=Wt.DEFAULT_IMAGE,n=Wt.DEFAULT_MAPPING,i=or,r=or,s=En,o=ar,a=wn,l=hi,c=Wt.DEFAULT_ANISOTROPY,u=Ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qS++}),this.uuid=Ii(),this.name="",this.source=new Qp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mc:e.x=e.x-Math.floor(e.x);break;case or:e.x=e.x<0?0:1;break;case gc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mc:e.y=e.y-Math.floor(e.y);break;case or:e.y=e.y<0?0:1;break;case gc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=kp;Wt.DEFAULT_ANISOTROPY=1;class Et{constructor(e=0,n=0,i=0,r=1){Et.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],v=l[9],x=l[2],m=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+x)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const b=(c+1)/2,M=(p+1)/2,D=(h+1)/2,E=(u+d)/4,C=(f+x)/4,I=(v+m)/4;return b>M&&b>D?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=E/i,s=C/i):M>D?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=E/r,s=I/r):D<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),i=C/s,r=I/s),this.set(i,r,s,n),this}let A=Math.sqrt((m-v)*(m-v)+(f-x)*(f-x)+(d-u)*(d-u));return Math.abs(A)<.001&&(A=1),this.x=(m-v)/A,this.y=(f-x)/A,this.z=(d-u)/A,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class XS extends cs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Et(0,0,e,n),this.scissorTest=!1,this.viewport=new Et(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Wt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Qp(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hr extends XS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class em extends Wt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=dn,this.minFilter=dn,this.wrapR=or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $S extends Wt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=dn,this.minFilter=dn,this.wrapR=or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ro{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[o+0],p=s[o+1],v=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=v,e[n+3]=x;return}if(f!==x||l!==d||c!==p||u!==v){let m=1-a;const h=l*d+c*p+u*v+f*x,A=h>=0?1:-1,b=1-h*h;if(b>Number.EPSILON){const D=Math.sqrt(b),E=Math.atan2(D,h*A);m=Math.sin(m*E)/D,a=Math.sin(a*E)/D}const M=a*A;if(l=l*m+d*M,c=c*m+p*M,u=u*m+v*M,f=f*m+x*M,m===1-a){const D=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=D,c*=D,u*=D,f*=D}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],p=s[o+2],v=s[o+3];return e[n]=a*v+u*f+l*p-c*d,e[n+1]=l*v+u*d+c*f-a*p,e[n+2]=c*v+u*p+a*d-l*f,e[n+3]=u*v-a*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*p*v,this._y=c*p*f-d*u*v,this._z=c*u*v+d*p*f,this._w=c*u*f-d*p*v;break;case"YXZ":this._x=d*u*f+c*p*v,this._y=c*p*f-d*u*v,this._z=c*u*v-d*p*f,this._w=c*u*f+d*p*v;break;case"ZXY":this._x=d*u*f-c*p*v,this._y=c*p*f+d*u*v,this._z=c*u*v+d*p*f,this._w=c*u*f-d*p*v;break;case"ZYX":this._x=d*u*f-c*p*v,this._y=c*p*f+d*u*v,this._z=c*u*v-d*p*f,this._w=c*u*f+d*p*v;break;case"YZX":this._x=d*u*f+c*p*v,this._y=c*p*f+d*u*v,this._z=c*u*v-d*p*f,this._w=c*u*f-d*p*v;break;case"XZY":this._x=d*u*f-c*p*v,this._y=c*p*f-d*u*v,this._z=c*u*v+d*p*f,this._w=c*u*f+d*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,n=0,i=0){Y.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(ld.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(ld.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return _l.copy(this).projectOnVector(e),this.sub(_l)}reflect(e){return this.sub(_l.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _l=new Y,ld=new ro;class so{constructor(e=new Y(1/0,1/0,1/0),n=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(xn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(xn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=xn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,xn):xn.fromBufferAttribute(s,o),xn.applyMatrix4(e.matrixWorld),this.expandByPoint(xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),So.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),So.copy(i.boundingBox)),So.applyMatrix4(e.matrixWorld),this.union(So)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xn),xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ss),yo.subVectors(this.max,Ss),Er.subVectors(e.a,Ss),br.subVectors(e.b,Ss),Tr.subVectors(e.c,Ss),Si.subVectors(br,Er),yi.subVectors(Tr,br),qi.subVectors(Er,Tr);let n=[0,-Si.z,Si.y,0,-yi.z,yi.y,0,-qi.z,qi.y,Si.z,0,-Si.x,yi.z,0,-yi.x,qi.z,0,-qi.x,-Si.y,Si.x,0,-yi.y,yi.x,0,-qi.y,qi.x,0];return!vl(n,Er,br,Tr,yo)||(n=[1,0,0,0,1,0,0,0,1],!vl(n,Er,br,Tr,yo))?!1:(Mo.crossVectors(Si,yi),n=[Mo.x,Mo.y,Mo.z],vl(n,Er,br,Tr,yo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Kn=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],xn=new Y,So=new so,Er=new Y,br=new Y,Tr=new Y,Si=new Y,yi=new Y,qi=new Y,Ss=new Y,yo=new Y,Mo=new Y,Xi=new Y;function vl(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Xi.fromArray(t,s);const a=r.x*Math.abs(Xi.x)+r.y*Math.abs(Xi.y)+r.z*Math.abs(Xi.z),l=e.dot(Xi),c=n.dot(Xi),u=i.dot(Xi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const YS=new so,ys=new Y,xl=new Y;class ka{constructor(e=new Y,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):YS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ys.subVectors(e,this.center);const n=ys.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ys,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ys.copy(e.center).add(xl)),this.expandByPoint(ys.copy(e.center).sub(xl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const jn=new Y,Sl=new Y,Eo=new Y,Mi=new Y,yl=new Y,bo=new Y,Ml=new Y;class tm{constructor(e=new Y,n=new Y(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=jn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(jn.copy(this.origin).addScaledVector(this.direction,n),jn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Sl.copy(e).add(n).multiplyScalar(.5),Eo.copy(n).sub(e).normalize(),Mi.copy(this.origin).sub(Sl);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Eo),a=Mi.dot(this.direction),l=-Mi.dot(Eo),c=Mi.lengthSq(),u=Math.abs(1-o*o);let f,d,p,v;if(u>0)if(f=o*l-a,d=o*a-l,v=s*u,f>=0)if(d>=-v)if(d<=v){const x=1/u;f*=x,d*=x,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-v?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=v?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Sl).addScaledVector(Eo,d),p}intersectSphere(e,n){jn.subVectors(e.center,this.origin);const i=jn.dot(this.direction),r=jn.dot(jn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,jn)!==null}intersectTriangle(e,n,i,r,s){yl.subVectors(n,e),bo.subVectors(i,e),Ml.crossVectors(yl,bo);let o=this.direction.dot(Ml),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Mi.subVectors(this.origin,e);const l=a*this.direction.dot(bo.crossVectors(Mi,bo));if(l<0)return null;const c=a*this.direction.dot(yl.cross(Mi));if(c<0||l+c>o)return null;const u=-a*Mi.dot(Ml);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,n,i,r,s,o,a,l,c,u,f,d,p,v,x,m){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,d,p,v,x,m)}set(e,n,i,r,s,o,a,l,c,u,f,d,p,v,x,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=v,h[11]=x,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/wr.setFromMatrixColumn(e,0).length(),s=1/wr.setFromMatrixColumn(e,1).length(),o=1/wr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*f,v=a*u,x=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+v*c,n[5]=d-x*c,n[9]=-a*l,n[2]=x-d*c,n[6]=v+p*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,v=c*u,x=c*f;n[0]=d+x*a,n[4]=v*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=p*a-v,n[6]=x+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,v=c*u,x=c*f;n[0]=d-x*a,n[4]=-o*f,n[8]=v+p*a,n[1]=p+v*a,n[5]=o*u,n[9]=x-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*f,v=a*u,x=a*f;n[0]=l*u,n[4]=v*c-p,n[8]=d*c+x,n[1]=l*f,n[5]=x*c+d,n[9]=p*c-v,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,v=a*l,x=a*c;n[0]=l*u,n[4]=x-d*f,n[8]=v*f+p,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*f+v,n[10]=d-x*f}else if(e.order==="XZY"){const d=o*l,p=o*c,v=a*l,x=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+x,n[5]=o*u,n[9]=p*f-v,n[2]=v*f-p,n[6]=a*u,n[10]=x*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(KS,e,jS)}lookAt(e,n,i){const r=this.elements;return Jt.subVectors(e,n),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),Ei.crossVectors(i,Jt),Ei.lengthSq()===0&&(Math.abs(i.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),Ei.crossVectors(i,Jt)),Ei.normalize(),To.crossVectors(Jt,Ei),r[0]=Ei.x,r[4]=To.x,r[8]=Jt.x,r[1]=Ei.y,r[5]=To.y,r[9]=Jt.y,r[2]=Ei.z,r[6]=To.z,r[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],v=i[2],x=i[6],m=i[10],h=i[14],A=i[3],b=i[7],M=i[11],D=i[15],E=r[0],C=r[4],I=r[8],S=r[12],y=r[1],P=r[5],F=r[9],V=r[13],J=r[2],G=r[6],U=r[10],q=r[14],k=r[3],fe=r[7],pe=r[11],_e=r[15];return s[0]=o*E+a*y+l*J+c*k,s[4]=o*C+a*P+l*G+c*fe,s[8]=o*I+a*F+l*U+c*pe,s[12]=o*S+a*V+l*q+c*_e,s[1]=u*E+f*y+d*J+p*k,s[5]=u*C+f*P+d*G+p*fe,s[9]=u*I+f*F+d*U+p*pe,s[13]=u*S+f*V+d*q+p*_e,s[2]=v*E+x*y+m*J+h*k,s[6]=v*C+x*P+m*G+h*fe,s[10]=v*I+x*F+m*U+h*pe,s[14]=v*S+x*V+m*q+h*_e,s[3]=A*E+b*y+M*J+D*k,s[7]=A*C+b*P+M*G+D*fe,s[11]=A*I+b*F+M*U+D*pe,s[15]=A*S+b*V+M*q+D*_e,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],v=e[3],x=e[7],m=e[11],h=e[15];return v*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*p-i*l*p)+x*(+n*l*p-n*c*d+s*o*d-r*o*p+r*c*u-s*l*u)+m*(+n*c*f-n*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+h*(-r*a*u-n*l*f+n*a*d+r*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],v=e[12],x=e[13],m=e[14],h=e[15],A=f*m*c-x*d*c+x*l*p-a*m*p-f*l*h+a*d*h,b=v*d*c-u*m*c-v*l*p+o*m*p+u*l*h-o*d*h,M=u*x*c-v*f*c+v*a*p-o*x*p-u*a*h+o*f*h,D=v*f*l-u*x*l-v*a*d+o*x*d+u*a*m-o*f*m,E=n*A+i*b+r*M+s*D;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/E;return e[0]=A*C,e[1]=(x*d*s-f*m*s-x*r*p+i*m*p+f*r*h-i*d*h)*C,e[2]=(a*m*s-x*l*s+x*r*c-i*m*c-a*r*h+i*l*h)*C,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*p-i*l*p)*C,e[4]=b*C,e[5]=(u*m*s-v*d*s+v*r*p-n*m*p-u*r*h+n*d*h)*C,e[6]=(v*l*s-o*m*s-v*r*c+n*m*c+o*r*h-n*l*h)*C,e[7]=(o*d*s-u*l*s+u*r*c-n*d*c-o*r*p+n*l*p)*C,e[8]=M*C,e[9]=(v*f*s-u*x*s-v*i*p+n*x*p+u*i*h-n*f*h)*C,e[10]=(o*x*s-v*a*s+v*i*c-n*x*c-o*i*h+n*a*h)*C,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*p-n*a*p)*C,e[12]=D*C,e[13]=(u*x*r-v*f*r+v*i*d-n*x*d-u*i*m+n*f*m)*C,e[14]=(v*a*r-o*x*r-v*i*l+n*x*l+o*i*m-n*a*m)*C,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*d+n*a*d)*C,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,d=s*c,p=s*u,v=s*f,x=o*u,m=o*f,h=a*f,A=l*c,b=l*u,M=l*f,D=i.x,E=i.y,C=i.z;return r[0]=(1-(x+h))*D,r[1]=(p+M)*D,r[2]=(v-b)*D,r[3]=0,r[4]=(p-M)*E,r[5]=(1-(d+h))*E,r[6]=(m+A)*E,r[7]=0,r[8]=(v+b)*C,r[9]=(m-A)*C,r[10]=(1-(d+x))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=wr.set(r[0],r[1],r[2]).length();const o=wr.set(r[4],r[5],r[6]).length(),a=wr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Sn.copy(this);const c=1/s,u=1/o,f=1/a;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=u,Sn.elements[5]*=u,Sn.elements[6]*=u,Sn.elements[8]*=f,Sn.elements[9]*=f,Sn.elements[10]*=f,n.setFromRotationMatrix(Sn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=li){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r);let p,v;if(a===li)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===va)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=li){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(o-s),d=(n+e)*c,p=(i+r)*u;let v,x;if(a===li)v=(o+s)*f,x=-2*f;else if(a===va)v=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const wr=new Y,Sn=new pt,KS=new Y(0,0,0),jS=new Y(1,1,1),Ei=new Y,To=new Y,Jt=new Y,cd=new pt,ud=new ro;class pi{constructor(e=0,n=0,i=0,r=pi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Kt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return cd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cd,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return ud.setFromEuler(this),this.setFromQuaternion(ud,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pi.DEFAULT_ORDER="XYZ";class nm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ZS=0;const fd=new Y,Ar=new ro,Zn=new pt,wo=new Y,Ms=new Y,JS=new Y,QS=new ro,dd=new Y(1,0,0),hd=new Y(0,1,0),pd=new Y(0,0,1),md={type:"added"},ey={type:"removed"},Cr={type:"childadded",child:null},El={type:"childremoved",child:null};class qt extends cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ZS++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qt.DEFAULT_UP.clone();const e=new Y,n=new pi,i=new ro,r=new Y(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pt},normalMatrix:{value:new qe}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ar.setFromAxisAngle(e,n),this.quaternion.multiply(Ar),this}rotateOnWorldAxis(e,n){return Ar.setFromAxisAngle(e,n),this.quaternion.premultiply(Ar),this}rotateX(e){return this.rotateOnAxis(dd,e)}rotateY(e){return this.rotateOnAxis(hd,e)}rotateZ(e){return this.rotateOnAxis(pd,e)}translateOnAxis(e,n){return fd.copy(e).applyQuaternion(this.quaternion),this.position.add(fd.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(dd,e)}translateY(e){return this.translateOnAxis(hd,e)}translateZ(e){return this.translateOnAxis(pd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?wo.copy(e):wo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(Ms,wo,this.up):Zn.lookAt(wo,Ms,this.up),this.quaternion.setFromRotationMatrix(Zn),r&&(Zn.extractRotation(r.matrixWorld),Ar.setFromRotationMatrix(Zn),this.quaternion.premultiply(Ar.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(md),Cr.child=e,this.dispatchEvent(Cr),Cr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(ey),El.child=e,this.dispatchEvent(El),El.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(md),Cr.child=e,this.dispatchEvent(Cr),Cr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,e,JS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,QS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}qt.DEFAULT_UP=new Y(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yn=new Y,Jn=new Y,bl=new Y,Qn=new Y,Rr=new Y,Pr=new Y,gd=new Y,Tl=new Y,wl=new Y,Al=new Y;class bn{constructor(e=new Y,n=new Y,i=new Y){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),yn.subVectors(e,n),r.cross(yn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){yn.subVectors(r,n),Jn.subVectors(i,n),bl.subVectors(e,n);const o=yn.dot(yn),a=yn.dot(Jn),l=yn.dot(bl),c=Jn.dot(Jn),u=Jn.dot(bl),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(c*l-a*u)*d,v=(o*u-a*l)*d;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Qn.x),l.addScaledVector(o,Qn.y),l.addScaledVector(a,Qn.z),l)}static isFrontFacing(e,n,i,r){return yn.subVectors(i,n),Jn.subVectors(e,n),yn.cross(Jn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),yn.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return bn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return bn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Rr.subVectors(r,i),Pr.subVectors(s,i),Tl.subVectors(e,i);const l=Rr.dot(Tl),c=Pr.dot(Tl);if(l<=0&&c<=0)return n.copy(i);wl.subVectors(e,r);const u=Rr.dot(wl),f=Pr.dot(wl);if(u>=0&&f<=u)return n.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Rr,o);Al.subVectors(e,s);const p=Rr.dot(Al),v=Pr.dot(Al);if(v>=0&&p<=v)return n.copy(s);const x=p*c-l*v;if(x<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(i).addScaledVector(Pr,a);const m=u*v-p*f;if(m<=0&&f-u>=0&&p-v>=0)return gd.subVectors(s,r),a=(f-u)/(f-u+(p-v)),n.copy(r).addScaledVector(gd,a);const h=1/(m+x+d);return o=x*h,a=d*h,n.copy(i).addScaledVector(Rr,o).addScaledVector(Pr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const im={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},Ao={h:0,s:0,l:0};function Cl(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ye{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=it.workingColorSpace){return this.r=e,this.g=n,this.b=i,it.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=it.workingColorSpace){if(e=zS(e,1),n=Kt(n,0,1),i=Kt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Cl(o,s,e+1/3),this.g=Cl(o,s,e),this.b=Cl(o,s,e-1/3)}return it.toWorkingColorSpace(this,r),this}setStyle(e,n=Un){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Un){const i=im[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Jr(e.r),this.g=Jr(e.g),this.b=Jr(e.b),this}copyLinearToSRGB(e){return this.r=ml(e.r),this.g=ml(e.g),this.b=ml(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Un){return it.fromWorkingColorSpace(Lt.copy(this),e),Math.round(Kt(Lt.r*255,0,255))*65536+Math.round(Kt(Lt.g*255,0,255))*256+Math.round(Kt(Lt.b*255,0,255))}getHexString(e=Un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=it.workingColorSpace){it.fromWorkingColorSpace(Lt.copy(this),n);const i=Lt.r,r=Lt.g,s=Lt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=it.workingColorSpace){return it.fromWorkingColorSpace(Lt.copy(this),n),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=Un){it.fromWorkingColorSpace(Lt.copy(this),e);const n=Lt.r,i=Lt.g,r=Lt.b;return e!==Un?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(bi),this.setHSL(bi.h+e,bi.s+n,bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(bi),e.getHSL(Ao);const i=hl(bi.h,Ao.h,n),r=hl(bi.s,Ao.s,n),s=hl(bi.l,Ao.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Lt=new Ye;Ye.NAMES=im;let ty=0;class us extends cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ty++}),this.uuid=Ii(),this.name="",this.type="Material",this.blending=Kr,this.side=Fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fc,this.blendDst=dc,this.blendEquation=nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=pa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=id,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yr,this.stencilZFail=yr,this.stencilZPass=yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Kr&&(i.blending=this.blending),this.side!==Fi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==fc&&(i.blendSrc=this.blendSrc),this.blendDst!==dc&&(i.blendDst=this.blendDst),this.blendEquation!==nr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==pa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==id&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==yr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==yr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==yr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Sa extends us{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.combine=zp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new Y,Co=new Xe;class mn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Gc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Zr("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Co.fromBufferAttribute(this,n),Co.applyMatrix3(e),this.setXY(n,Co.x,Co.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyMatrix3(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyMatrix4(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyNormalMatrix(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.transformDirection(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=zn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=st(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=zn(n,this.array)),n}setX(e,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=zn(n,this.array)),n}setY(e,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=zn(n,this.array)),n}setZ(e,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=zn(n,this.array)),n}setW(e,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=st(n,this.array),i=st(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=st(n,this.array),i=st(i,this.array),r=st(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=st(n,this.array),i=st(i,this.array),r=st(r,this.array),s=st(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gc&&(e.usage=this.usage),e}}class rm extends mn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class sm extends mn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Hn extends mn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let ny=0;const an=new pt,Rl=new qt,Lr=new Y,Qt=new so,Es=new so,Mt=new Y;class Rn extends cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ny++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jp(e)?sm:rm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,n,i){return an.makeTranslation(e,n,i),this.applyMatrix4(an),this}scale(e,n,i){return an.makeScale(e,n,i),this.applyMatrix4(an),this}lookAt(e){return Rl.lookAt(e),Rl.updateMatrix(),this.applyMatrix4(Rl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lr).negate(),this.translate(Lr.x,Lr.y,Lr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Hn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new so);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Qt.setFromBufferAttribute(s),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,Qt.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,Qt.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(Qt.min),this.boundingBox.expandByPoint(Qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ka);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(Qt.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Es.setFromBufferAttribute(a),this.morphTargetsRelative?(Mt.addVectors(Qt.min,Es.min),Qt.expandByPoint(Mt),Mt.addVectors(Qt.max,Es.max),Qt.expandByPoint(Mt)):(Qt.expandByPoint(Es.min),Qt.expandByPoint(Es.max))}Qt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Mt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Mt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Mt.fromBufferAttribute(a,c),l&&(Lr.fromBufferAttribute(e,c),Mt.add(Lr)),r=Math.max(r,i.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new Y,l[I]=new Y;const c=new Y,u=new Y,f=new Y,d=new Xe,p=new Xe,v=new Xe,x=new Y,m=new Y;function h(I,S,y){c.fromBufferAttribute(i,I),u.fromBufferAttribute(i,S),f.fromBufferAttribute(i,y),d.fromBufferAttribute(s,I),p.fromBufferAttribute(s,S),v.fromBufferAttribute(s,y),u.sub(c),f.sub(c),p.sub(d),v.sub(d);const P=1/(p.x*v.y-v.x*p.y);isFinite(P)&&(x.copy(u).multiplyScalar(v.y).addScaledVector(f,-p.y).multiplyScalar(P),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(P),a[I].add(x),a[S].add(x),a[y].add(x),l[I].add(m),l[S].add(m),l[y].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let I=0,S=A.length;I<S;++I){const y=A[I],P=y.start,F=y.count;for(let V=P,J=P+F;V<J;V+=3)h(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const b=new Y,M=new Y,D=new Y,E=new Y;function C(I){D.fromBufferAttribute(r,I),E.copy(D);const S=a[I];b.copy(S),b.sub(D.multiplyScalar(D.dot(S))).normalize(),M.crossVectors(E,S);const P=M.dot(l[I])<0?-1:1;o.setXYZW(I,b.x,b.y,b.z,P)}for(let I=0,S=A.length;I<S;++I){const y=A[I],P=y.start,F=y.count;for(let V=P,J=P+F;V<J;V+=3)C(e.getX(V+0)),C(e.getX(V+1)),C(e.getX(V+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new mn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new Y,s=new Y,o=new Y,a=new Y,l=new Y,c=new Y,u=new Y,f=new Y;if(e)for(let d=0,p=e.count;d<p;d+=3){const v=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Mt.fromBufferAttribute(e,n),Mt.normalize(),e.setXYZ(n,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let p=0,v=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let h=0;h<u;h++)d[v++]=c[p++]}return new mn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Rn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _d=new pt,$i=new tm,Ro=new ka,vd=new Y,Dr=new Y,Ir=new Y,Ur=new Y,Pl=new Y,Po=new Y,Lo=new Xe,Do=new Xe,Io=new Xe,xd=new Y,Sd=new Y,yd=new Y,Uo=new Y,No=new Y;class hn extends qt{constructor(e=new Rn,n=new Sa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Po.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Pl.fromBufferAttribute(f,e),o?Po.addScaledVector(Pl,u):Po.addScaledVector(Pl.sub(n),u))}n.add(Po)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ro.copy(i.boundingSphere),Ro.applyMatrix4(s),$i.copy(e.ray).recast(e.near),!(Ro.containsPoint($i.origin)===!1&&($i.intersectSphere(Ro,vd)===null||$i.origin.distanceToSquared(vd)>(e.far-e.near)**2))&&(_d.copy(s).invert(),$i.copy(e.ray).applyMatrix4(_d),!(i.boundingBox!==null&&$i.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,$i)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=d.length;v<x;v++){const m=d[v],h=o[m.materialIndex],A=Math.max(m.start,p.start),b=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=A,D=b;M<D;M+=3){const E=a.getX(M),C=a.getX(M+1),I=a.getX(M+2);r=Fo(this,h,e,i,c,u,f,E,C,I),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=v,h=x;m<h;m+=3){const A=a.getX(m),b=a.getX(m+1),M=a.getX(m+2);r=Fo(this,o,e,i,c,u,f,A,b,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=d.length;v<x;v++){const m=d[v],h=o[m.materialIndex],A=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=A,D=b;M<D;M+=3){const E=M,C=M+1,I=M+2;r=Fo(this,h,e,i,c,u,f,E,C,I),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=v,h=x;m<h;m+=3){const A=m,b=m+1,M=m+2;r=Fo(this,o,e,i,c,u,f,A,b,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function iy(t,e,n,i,r,s,o,a){let l;if(e.side===Gt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Fi,a),l===null)return null;No.copy(a),No.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(No);return c<n.near||c>n.far?null:{distance:c,point:No.clone(),object:t}}function Fo(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Dr),t.getVertexPosition(l,Ir),t.getVertexPosition(c,Ur);const u=iy(t,e,n,i,Dr,Ir,Ur,Uo);if(u){r&&(Lo.fromBufferAttribute(r,a),Do.fromBufferAttribute(r,l),Io.fromBufferAttribute(r,c),u.uv=bn.getInterpolation(Uo,Dr,Ir,Ur,Lo,Do,Io,new Xe)),s&&(Lo.fromBufferAttribute(s,a),Do.fromBufferAttribute(s,l),Io.fromBufferAttribute(s,c),u.uv1=bn.getInterpolation(Uo,Dr,Ir,Ur,Lo,Do,Io,new Xe)),o&&(xd.fromBufferAttribute(o,a),Sd.fromBufferAttribute(o,l),yd.fromBufferAttribute(o,c),u.normal=bn.getInterpolation(Uo,Dr,Ir,Ur,xd,Sd,yd,new Y),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new Y,materialIndex:0};bn.getNormal(Dr,Ir,Ur,f.normal),u.face=f}return u}class oo extends Rn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,p=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Hn(c,3)),this.setAttribute("normal",new Hn(u,3)),this.setAttribute("uv",new Hn(f,2));function v(x,m,h,A,b,M,D,E,C,I,S){const y=M/C,P=D/I,F=M/2,V=D/2,J=E/2,G=C+1,U=I+1;let q=0,k=0;const fe=new Y;for(let pe=0;pe<U;pe++){const _e=pe*P-V;for(let ue=0;ue<G;ue++){const Be=ue*y-F;fe[x]=Be*A,fe[m]=_e*b,fe[h]=J,c.push(fe.x,fe.y,fe.z),fe[x]=0,fe[m]=0,fe[h]=E>0?1:-1,u.push(fe.x,fe.y,fe.z),f.push(ue/C),f.push(1-pe/I),q+=1}}for(let pe=0;pe<I;pe++)for(let _e=0;_e<C;_e++){const ue=d+_e+G*pe,Be=d+_e+G*(pe+1),Q=d+(_e+1)+G*(pe+1),ce=d+(_e+1)+G*pe;l.push(ue,Be,ce),l.push(Be,Q,ce),k+=6}a.addGroup(p,k,S),p+=k,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function as(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Bt(t){const e={};for(let n=0;n<t.length;n++){const i=as(t[n]);for(const r in i)e[r]=i[r]}return e}function ry(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function om(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const sy={clone:as,merge:Bt};var oy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ay=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mi extends us{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oy,this.fragmentShader=ay,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=as(e.uniforms),this.uniformsGroups=ry(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class am extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=li}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ti=new Y,Md=new Xe,Ed=new Xe;class un extends am{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Wc*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(dl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wc*2*Math.atan(Math.tan(dl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z)}getViewSize(e,n){return this.getViewBounds(e,Md,Ed),n.subVectors(Ed,Md)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(dl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Nr=-90,Fr=1;class ly extends qt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new un(Nr,Fr,e,n);r.layers=this.layers,this.add(r);const s=new un(Nr,Fr,e,n);s.layers=this.layers,this.add(s);const o=new un(Nr,Fr,e,n);o.layers=this.layers,this.add(o);const a=new un(Nr,Fr,e,n);a.layers=this.layers,this.add(a);const l=new un(Nr,Fr,e,n);l.layers=this.layers,this.add(l);const c=new un(Nr,Fr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===li)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===va)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,d,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class lm extends Wt{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:is,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class cy extends hr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new lm(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:En}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new oo(5,5,5),s=new mi({name:"CubemapFromEquirect",uniforms:as(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Gt,blending:Li});s.uniforms.tEquirect.value=n;const o=new hn(r,s),a=n.minFilter;return n.minFilter===ar&&(n.minFilter=En),new ly(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Ll=new Y,uy=new Y,fy=new qe;class Qi{constructor(e=new Y(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Ll.subVectors(i,n).cross(uy.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Ll),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||fy.getNormalMatrix(e),r=this.coplanarPoint(Ll).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yi=new ka,Oo=new Y;class cm{constructor(e=new Qi,n=new Qi,i=new Qi,r=new Qi,s=new Qi,o=new Qi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=li){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],p=r[8],v=r[9],x=r[10],m=r[11],h=r[12],A=r[13],b=r[14],M=r[15];if(i[0].setComponents(l-s,d-c,m-p,M-h).normalize(),i[1].setComponents(l+s,d+c,m+p,M+h).normalize(),i[2].setComponents(l+o,d+u,m+v,M+A).normalize(),i[3].setComponents(l-o,d-u,m-v,M-A).normalize(),i[4].setComponents(l-a,d-f,m-x,M-b).normalize(),n===li)i[5].setComponents(l+a,d+f,m+x,M+b).normalize();else if(n===va)i[5].setComponents(a,f,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Yi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yi)}intersectsSprite(e){return Yi.center.set(0,0,0),Yi.radius=.7071067811865476,Yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yi)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Oo.x=r.normal.x>0?e.max.x:e.min.x,Oo.y=r.normal.y>0?e.max.y:e.min.y,Oo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Oo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function um(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function dy(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l._updateRange,d=l.updateRanges;if(t.bindBuffer(c,a),f.count===-1&&d.length===0&&t.bufferSubData(c,0,u),d.length!==0){for(let p=0,v=d.length;p<v;p++){const x=d[p];t.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}f.count!==-1&&(t.bufferSubData(c,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count),f.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class ls extends Rn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=n/l,p=[],v=[],x=[],m=[];for(let h=0;h<u;h++){const A=h*d-o;for(let b=0;b<c;b++){const M=b*f-s;v.push(M,-A,0),x.push(0,0,1),m.push(b/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let A=0;A<a;A++){const b=A+c*h,M=A+c*(h+1),D=A+1+c*(h+1),E=A+1+c*h;p.push(b,M,E),p.push(M,D,E)}this.setIndex(p),this.setAttribute("position",new Hn(v,3)),this.setAttribute("normal",new Hn(x,3)),this.setAttribute("uv",new Hn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ls(e.width,e.height,e.widthSegments,e.heightSegments)}}var hy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,py=`#ifdef USE_ALPHAHASH
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
#endif`,my=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_y=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xy=`#ifdef USE_AOMAP
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
#endif`,Sy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yy=`#ifdef USE_BATCHING
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
#endif`,My=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ey=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,by=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ty=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wy=`#ifdef USE_IRIDESCENCE
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
#endif`,Ay=`#ifdef USE_BUMPMAP
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
#endif`,Cy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ry=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Py=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ly=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Iy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Uy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ny=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Fy=`#define PI 3.141592653589793
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
} // validated`,Oy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,By=`vec3 transformedNormal = objectNormal;
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
#endif`,zy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ky=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wy=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qy=`#ifdef USE_ENVMAP
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
#endif`,Xy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$y=`#ifdef USE_ENVMAP
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
#endif`,Yy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ky=`#ifdef USE_ENVMAP
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
#endif`,jy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eM=`#ifdef USE_GRADIENTMAP
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
}`,tM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rM=`uniform bool receiveShadow;
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
#endif`,sM=`#ifdef USE_ENVMAP
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
#endif`,oM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,aM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uM=`PhysicalMaterial material;
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
#endif`,fM=`struct PhysicalMaterial {
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
}`,dM=`
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
#endif`,hM=`#if defined( RE_IndirectDiffuse )
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
#endif`,pM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_M=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,SM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,MM=`#if defined( USE_POINTS_UV )
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
#endif`,EM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,TM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,AM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CM=`#ifdef USE_MORPHTARGETS
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
#endif`,RM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,PM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,LM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,DM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,NM=`#ifdef USE_NORMALMAP
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
#endif`,FM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,OM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,BM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,HM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,VM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,GM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,WM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,XM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$M=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,YM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,KM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ZM=`float getShadowMask() {
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
}`,JM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,QM=`#ifdef USE_SKINNING
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
#endif`,eE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tE=`#ifdef USE_SKINNING
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
#endif`,nE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,oE=`#ifdef USE_TRANSMISSION
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
#endif`,aE=`#ifdef USE_TRANSMISSION
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
#endif`,lE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hE=`uniform sampler2D t2D;
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
}`,pE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_E=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vE=`#include <common>
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
}`,xE=`#if DEPTH_PACKING == 3200
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
}`,SE=`#define DISTANCE
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
}`,yE=`#define DISTANCE
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
}`,ME=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,EE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bE=`uniform float scale;
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
}`,TE=`uniform vec3 diffuse;
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
}`,wE=`#include <common>
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
}`,AE=`uniform vec3 diffuse;
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
}`,CE=`#define LAMBERT
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
}`,RE=`#define LAMBERT
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
}`,PE=`#define MATCAP
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
}`,LE=`#define MATCAP
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
}`,DE=`#define NORMAL
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
}`,IE=`#define NORMAL
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
}`,UE=`#define PHONG
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
}`,NE=`#define PHONG
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
}`,FE=`#define STANDARD
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
}`,OE=`#define STANDARD
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
}`,BE=`#define TOON
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
}`,zE=`#define TOON
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
}`,kE=`uniform float size;
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
}`,HE=`uniform vec3 diffuse;
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
}`,VE=`#include <common>
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
}`,GE=`uniform vec3 color;
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
}`,WE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,qE=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:hy,alphahash_pars_fragment:py,alphamap_fragment:my,alphamap_pars_fragment:gy,alphatest_fragment:_y,alphatest_pars_fragment:vy,aomap_fragment:xy,aomap_pars_fragment:Sy,batching_pars_vertex:yy,batching_vertex:My,begin_vertex:Ey,beginnormal_vertex:by,bsdfs:Ty,iridescence_fragment:wy,bumpmap_pars_fragment:Ay,clipping_planes_fragment:Cy,clipping_planes_pars_fragment:Ry,clipping_planes_pars_vertex:Py,clipping_planes_vertex:Ly,color_fragment:Dy,color_pars_fragment:Iy,color_pars_vertex:Uy,color_vertex:Ny,common:Fy,cube_uv_reflection_fragment:Oy,defaultnormal_vertex:By,displacementmap_pars_vertex:zy,displacementmap_vertex:ky,emissivemap_fragment:Hy,emissivemap_pars_fragment:Vy,colorspace_fragment:Gy,colorspace_pars_fragment:Wy,envmap_fragment:qy,envmap_common_pars_fragment:Xy,envmap_pars_fragment:$y,envmap_pars_vertex:Yy,envmap_physical_pars_fragment:sM,envmap_vertex:Ky,fog_vertex:jy,fog_pars_vertex:Zy,fog_fragment:Jy,fog_pars_fragment:Qy,gradientmap_pars_fragment:eM,lightmap_pars_fragment:tM,lights_lambert_fragment:nM,lights_lambert_pars_fragment:iM,lights_pars_begin:rM,lights_toon_fragment:oM,lights_toon_pars_fragment:aM,lights_phong_fragment:lM,lights_phong_pars_fragment:cM,lights_physical_fragment:uM,lights_physical_pars_fragment:fM,lights_fragment_begin:dM,lights_fragment_maps:hM,lights_fragment_end:pM,logdepthbuf_fragment:mM,logdepthbuf_pars_fragment:gM,logdepthbuf_pars_vertex:_M,logdepthbuf_vertex:vM,map_fragment:xM,map_pars_fragment:SM,map_particle_fragment:yM,map_particle_pars_fragment:MM,metalnessmap_fragment:EM,metalnessmap_pars_fragment:bM,morphinstance_vertex:TM,morphcolor_vertex:wM,morphnormal_vertex:AM,morphtarget_pars_vertex:CM,morphtarget_vertex:RM,normal_fragment_begin:PM,normal_fragment_maps:LM,normal_pars_fragment:DM,normal_pars_vertex:IM,normal_vertex:UM,normalmap_pars_fragment:NM,clearcoat_normal_fragment_begin:FM,clearcoat_normal_fragment_maps:OM,clearcoat_pars_fragment:BM,iridescence_pars_fragment:zM,opaque_fragment:kM,packing:HM,premultiplied_alpha_fragment:VM,project_vertex:GM,dithering_fragment:WM,dithering_pars_fragment:qM,roughnessmap_fragment:XM,roughnessmap_pars_fragment:$M,shadowmap_pars_fragment:YM,shadowmap_pars_vertex:KM,shadowmap_vertex:jM,shadowmask_pars_fragment:ZM,skinbase_vertex:JM,skinning_pars_vertex:QM,skinning_vertex:eE,skinnormal_vertex:tE,specularmap_fragment:nE,specularmap_pars_fragment:iE,tonemapping_fragment:rE,tonemapping_pars_fragment:sE,transmission_fragment:oE,transmission_pars_fragment:aE,uv_pars_fragment:lE,uv_pars_vertex:cE,uv_vertex:uE,worldpos_vertex:fE,background_vert:dE,background_frag:hE,backgroundCube_vert:pE,backgroundCube_frag:mE,cube_vert:gE,cube_frag:_E,depth_vert:vE,depth_frag:xE,distanceRGBA_vert:SE,distanceRGBA_frag:yE,equirect_vert:ME,equirect_frag:EE,linedashed_vert:bE,linedashed_frag:TE,meshbasic_vert:wE,meshbasic_frag:AE,meshlambert_vert:CE,meshlambert_frag:RE,meshmatcap_vert:PE,meshmatcap_frag:LE,meshnormal_vert:DE,meshnormal_frag:IE,meshphong_vert:UE,meshphong_frag:NE,meshphysical_vert:FE,meshphysical_frag:OE,meshtoon_vert:BE,meshtoon_frag:zE,points_vert:kE,points_frag:HE,shadow_vert:VE,shadow_frag:GE,sprite_vert:WE,sprite_frag:qE},xe={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},On={basic:{uniforms:Bt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Bt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Bt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Bt([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Bt([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Bt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Bt([xe.points,xe.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Bt([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Bt([xe.common,xe.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Bt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Bt([xe.sprite,xe.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Bt([xe.common,xe.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Bt([xe.lights,xe.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};On.physical={uniforms:Bt([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Bo={r:0,b:0,g:0},Ki=new pi,XE=new pt;function $E(t,e,n,i,r,s,o){const a=new Ye(0);let l=s===!0?0:1,c,u,f=null,d=0,p=null;function v(A){let b=A.isScene===!0?A.background:null;return b&&b.isTexture&&(b=(A.backgroundBlurriness>0?n:e).get(b)),b}function x(A){let b=!1;const M=v(A);M===null?h(a,l):M&&M.isColor&&(h(M,1),b=!0);const D=t.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(A,b){const M=v(b);M&&(M.isCubeTexture||M.mapping===Ba)?(u===void 0&&(u=new hn(new oo(1,1,1),new mi({name:"BackgroundCubeMaterial",uniforms:as(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ki.copy(b.backgroundRotation),Ki.x*=-1,Ki.y*=-1,Ki.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ki.y*=-1,Ki.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(XE.makeRotationFromEuler(Ki)),u.material.toneMapped=it.getTransfer(M.colorSpace)!==ut,(f!==M||d!==M.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=M,d=M.version,p=t.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new hn(new ls(2,2),new mi({name:"BackgroundMaterial",uniforms:as(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=it.getTransfer(M.colorSpace)!==ut,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||d!==M.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=M,d=M.version,p=t.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function h(A,b){A.getRGB(Bo,om(t)),i.buffers.color.setClear(Bo.r,Bo.g,Bo.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(A,b=1){a.set(A),l=b,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,h(a,l)},render:x,addToRenderList:m}}function YE(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(y,P,F,V,J){let G=!1;const U=f(V,F,P);s!==U&&(s=U,c(s.object)),G=p(y,V,F,J),G&&v(y,V,F,J),J!==null&&e.update(J,t.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,M(y,P,F,V),J!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function l(){return t.createVertexArray()}function c(y){return t.bindVertexArray(y)}function u(y){return t.deleteVertexArray(y)}function f(y,P,F){const V=F.wireframe===!0;let J=i[y.id];J===void 0&&(J={},i[y.id]=J);let G=J[P.id];G===void 0&&(G={},J[P.id]=G);let U=G[V];return U===void 0&&(U=d(l()),G[V]=U),U}function d(y){const P=[],F=[],V=[];for(let J=0;J<n;J++)P[J]=0,F[J]=0,V[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:V,object:y,attributes:{},index:null}}function p(y,P,F,V){const J=s.attributes,G=P.attributes;let U=0;const q=F.getAttributes();for(const k in q)if(q[k].location>=0){const pe=J[k];let _e=G[k];if(_e===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(_e=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(_e=y.instanceColor)),pe===void 0||pe.attribute!==_e||_e&&pe.data!==_e.data)return!0;U++}return s.attributesNum!==U||s.index!==V}function v(y,P,F,V){const J={},G=P.attributes;let U=0;const q=F.getAttributes();for(const k in q)if(q[k].location>=0){let pe=G[k];pe===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(pe=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(pe=y.instanceColor));const _e={};_e.attribute=pe,pe&&pe.data&&(_e.data=pe.data),J[k]=_e,U++}s.attributes=J,s.attributesNum=U,s.index=V}function x(){const y=s.newAttributes;for(let P=0,F=y.length;P<F;P++)y[P]=0}function m(y){h(y,0)}function h(y,P){const F=s.newAttributes,V=s.enabledAttributes,J=s.attributeDivisors;F[y]=1,V[y]===0&&(t.enableVertexAttribArray(y),V[y]=1),J[y]!==P&&(t.vertexAttribDivisor(y,P),J[y]=P)}function A(){const y=s.newAttributes,P=s.enabledAttributes;for(let F=0,V=P.length;F<V;F++)P[F]!==y[F]&&(t.disableVertexAttribArray(F),P[F]=0)}function b(y,P,F,V,J,G,U){U===!0?t.vertexAttribIPointer(y,P,F,J,G):t.vertexAttribPointer(y,P,F,V,J,G)}function M(y,P,F,V){x();const J=V.attributes,G=F.getAttributes(),U=P.defaultAttributeValues;for(const q in G){const k=G[q];if(k.location>=0){let fe=J[q];if(fe===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(fe=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(fe=y.instanceColor)),fe!==void 0){const pe=fe.normalized,_e=fe.itemSize,ue=e.get(fe);if(ue===void 0)continue;const Be=ue.buffer,Q=ue.type,ce=ue.bytesPerElement,ye=Q===t.INT||Q===t.UNSIGNED_INT||fe.gpuType===gu;if(fe.isInterleavedBufferAttribute){const Se=fe.data,Pe=Se.stride,Ae=fe.offset;if(Se.isInstancedInterleavedBuffer){for(let He=0;He<k.locationSize;He++)h(k.location+He,Se.meshPerAttribute);y.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let He=0;He<k.locationSize;He++)m(k.location+He);t.bindBuffer(t.ARRAY_BUFFER,Be);for(let He=0;He<k.locationSize;He++)b(k.location+He,_e/k.locationSize,Q,pe,Pe*ce,(Ae+_e/k.locationSize*He)*ce,ye)}else{if(fe.isInstancedBufferAttribute){for(let Se=0;Se<k.locationSize;Se++)h(k.location+Se,fe.meshPerAttribute);y.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Se=0;Se<k.locationSize;Se++)m(k.location+Se);t.bindBuffer(t.ARRAY_BUFFER,Be);for(let Se=0;Se<k.locationSize;Se++)b(k.location+Se,_e/k.locationSize,Q,pe,_e*ce,_e/k.locationSize*Se*ce,ye)}}else if(U!==void 0){const pe=U[q];if(pe!==void 0)switch(pe.length){case 2:t.vertexAttrib2fv(k.location,pe);break;case 3:t.vertexAttrib3fv(k.location,pe);break;case 4:t.vertexAttrib4fv(k.location,pe);break;default:t.vertexAttrib1fv(k.location,pe)}}}}A()}function D(){I();for(const y in i){const P=i[y];for(const F in P){const V=P[F];for(const J in V)u(V[J].object),delete V[J];delete P[F]}delete i[y]}}function E(y){if(i[y.id]===void 0)return;const P=i[y.id];for(const F in P){const V=P[F];for(const J in V)u(V[J].object),delete V[J];delete P[F]}delete i[y.id]}function C(y){for(const P in i){const F=i[P];if(F[y.id]===void 0)continue;const V=F[y.id];for(const J in V)u(V[J].object),delete V[J];delete F[y.id]}}function I(){S(),o=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:I,resetDefaultState:S,dispose:D,releaseStatesOfGeometry:E,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:A}}function KE(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let v=0;v<f;v++)p+=u[v];n.update(p,i,1)}function l(c,u,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)o(c[v],u[v],d[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let v=0;for(let x=0;x<f;x++)v+=u[x];for(let x=0;x<d.length;x++)n.update(v,i,d[x])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function jE(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(E){return!(E!==wn&&i.convert(E)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const C=E===io&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==hi&&i.convert(E)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==ai&&!C)}function l(E){if(E==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),h=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),A=t.getParameter(t.MAX_VARYING_VECTORS),b=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),M=p>0,D=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:h,maxVaryings:A,maxFragmentUniforms:b,vertexTextures:M,maxSamples:D}}function ZE(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Qi,a=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,p){const v=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,h=t.get(f);if(!r||v===null||v.length===0||s&&!m)s?u(null):c();else{const A=s?0:i,b=A*4;let M=h.clippingState||null;l.value=M,M=u(v,d,b,p);for(let D=0;D!==b;++D)M[D]=n[D];h.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,v){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=l.value,v!==!0||m===null){const h=p+x*4,A=d.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<h)&&(m=new Float32Array(h));for(let b=0,M=p;b!==x;++b,M+=4)o.copy(f[b]).applyMatrix4(A,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function JE(t){let e=new WeakMap;function n(o,a){return a===hc?o.mapping=is:a===pc&&(o.mapping=rs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===hc||a===pc)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new cy(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class QE extends am{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Wr=4,bd=[.125,.215,.35,.446,.526,.582],ir=20,Dl=new QE,Td=new Ye;let Il=null,Ul=0,Nl=0,Fl=!1;const er=(1+Math.sqrt(5))/2,Or=1/er,wd=[new Y(-er,Or,0),new Y(er,Or,0),new Y(-Or,0,er),new Y(Or,0,er),new Y(0,er,-Or),new Y(0,er,Or),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)];class Ad{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Il=this._renderer.getRenderTarget(),Ul=this._renderer.getActiveCubeFace(),Nl=this._renderer.getActiveMipmapLevel(),Fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Il,Ul,Nl),this._renderer.xr.enabled=Fl,e.scissorTest=!1,zo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===is||e.mapping===rs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Il=this._renderer.getRenderTarget(),Ul=this._renderer.getActiveCubeFace(),Nl=this._renderer.getActiveMipmapLevel(),Fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:En,minFilter:En,generateMipmaps:!1,type:io,format:wn,colorSpace:Bi,depthBuffer:!1},r=Cd(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cd(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=eb(s)),this._blurMaterial=tb(s,e,n)}return r}_compileMaterial(e){const n=new hn(this._lodPlanes[0],e);this._renderer.compile(n,Dl)}_sceneToCubeUV(e,n,i,r){const a=new un(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Td),u.toneMapping=Di,u.autoClear=!1;const p=new Sa({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1}),v=new hn(new oo,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(Td),x=!0);for(let h=0;h<6;h++){const A=h%3;A===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):A===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const b=this._cubeSize;zo(r,A*b,h>2?b:0,b,b),u.setRenderTarget(r),x&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===is||e.mapping===rs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rd());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new hn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;zo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Dl)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=wd[(r-s-1)%wd.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new hn(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ir-1),x=s/v,m=isFinite(s)?1+Math.floor(u*x):ir;m>ir&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ir}`);const h=[];let A=0;for(let C=0;C<ir;++C){const I=C/x,S=Math.exp(-I*I/2);h.push(S),C===0?A+=S:C<m&&(A+=2*S)}for(let C=0;C<h.length;C++)h[C]=h[C]/A;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:b}=this;d.dTheta.value=v,d.mipInt.value=b-i;const M=this._sizeLods[r],D=3*M*(r>b-Wr?r-b+Wr:0),E=4*(this._cubeSize-M);zo(n,D,E,3*M,2*M),l.setRenderTarget(n),l.render(f,Dl)}}function eb(t){const e=[],n=[],i=[];let r=t;const s=t-Wr+1+bd.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Wr?l=bd[o-t+Wr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,v=6,x=3,m=2,h=1,A=new Float32Array(x*v*p),b=new Float32Array(m*v*p),M=new Float32Array(h*v*p);for(let E=0;E<p;E++){const C=E%3*2/3-1,I=E>2?0:-1,S=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];A.set(S,x*v*E),b.set(d,m*v*E);const y=[E,E,E,E,E,E];M.set(y,h*v*E)}const D=new Rn;D.setAttribute("position",new mn(A,x)),D.setAttribute("uv",new mn(b,m)),D.setAttribute("faceIndex",new mn(M,h)),e.push(D),r>Wr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Cd(t,e,n){const i=new hr(t,e,n);return i.texture.mapping=Ba,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function zo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function tb(t,e,n){const i=new Float32Array(ir),r=new Y(0,1,0);return new mi({name:"SphericalGaussianBlur",defines:{n:ir,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Eu(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Rd(){return new mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Eu(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Pd(){return new mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Eu(){return`

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
	`}function nb(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===hc||l===pc,u=l===is||l===rs;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new Ad(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new Ad(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function ib(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Zr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function rb(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const x=d.morphAttributes[v];for(let m=0,h=x.length;m<h;m++)e.remove(x[m])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const v in d)e.update(d[v],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const v in p){const x=p[v];for(let m=0,h=x.length;m<h;m++)e.update(x[m],t.ARRAY_BUFFER)}}function c(f){const d=[],p=f.index,v=f.attributes.position;let x=0;if(p!==null){const A=p.array;x=p.version;for(let b=0,M=A.length;b<M;b+=3){const D=A[b+0],E=A[b+1],C=A[b+2];d.push(D,E,E,C,C,D)}}else if(v!==void 0){const A=v.array;x=v.version;for(let b=0,M=A.length/3-1;b<M;b+=3){const D=b+0,E=b+1,C=b+2;d.push(D,E,E,C,C,D)}}else return;const m=new(Jp(d)?sm:rm)(d,1);m.version=x;const h=s.get(f);h&&e.remove(h),s.set(f,m)}function u(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function sb(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){t.drawElements(i,p,s,d*o),n.update(p,i,1)}function c(d,p,v){v!==0&&(t.drawElementsInstanced(i,p,s,d*o,v),n.update(p,i,v))}function u(d,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,v);let m=0;for(let h=0;h<v;h++)m+=p[h];n.update(m,i,1)}function f(d,p,v,x){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)c(d[h]/o,p[h],x[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,x,0,v);let h=0;for(let A=0;A<v;A++)h+=p[A];for(let A=0;A<x.length;A++)n.update(h,i,x[A])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function ob(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function ab(t,e,n){const i=new WeakMap,r=new Et;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let y=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var p=y;d!==void 0&&d.texture.dispose();const v=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],A=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let M=0;v===!0&&(M=1),x===!0&&(M=2),m===!0&&(M=3);let D=a.attributes.position.count*M,E=1;D>e.maxTextureSize&&(E=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const C=new Float32Array(D*E*4*f),I=new em(C,D,E,f);I.type=ai,I.needsUpdate=!0;const S=M*4;for(let P=0;P<f;P++){const F=h[P],V=A[P],J=b[P],G=D*E*4*P;for(let U=0;U<F.count;U++){const q=U*S;v===!0&&(r.fromBufferAttribute(F,U),C[G+q+0]=r.x,C[G+q+1]=r.y,C[G+q+2]=r.z,C[G+q+3]=0),x===!0&&(r.fromBufferAttribute(V,U),C[G+q+4]=r.x,C[G+q+5]=r.y,C[G+q+6]=r.z,C[G+q+7]=0),m===!0&&(r.fromBufferAttribute(J,U),C[G+q+8]=r.x,C[G+q+9]=r.y,C[G+q+10]=r.z,C[G+q+11]=J.itemSize===4?r.w:1)}}d={count:f,texture:I,size:new Xe(D,E)},i.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const x=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function lb(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class fm extends Wt{constructor(e,n,i,r,s,o,a,l,c,u=jr){if(u!==jr&&u!==os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===jr&&(i=dr),i===void 0&&u===os&&(i=ss),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:dn,this.minFilter=l!==void 0?l:dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const dm=new Wt,Ld=new fm(1,1),hm=new em,pm=new $S,mm=new lm,Dd=[],Id=[],Ud=new Float32Array(16),Nd=new Float32Array(9),Fd=new Float32Array(4);function fs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Dd[r];if(s===void 0&&(s=new Float32Array(r),Dd[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function St(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function yt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ha(t,e){let n=Id[e];n===void 0&&(n=new Int32Array(e),Id[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function cb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function ub(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(St(n,e))return;t.uniform2fv(this.addr,e),yt(n,e)}}function fb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(St(n,e))return;t.uniform3fv(this.addr,e),yt(n,e)}}function db(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(St(n,e))return;t.uniform4fv(this.addr,e),yt(n,e)}}function hb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(St(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),yt(n,e)}else{if(St(n,i))return;Fd.set(i),t.uniformMatrix2fv(this.addr,!1,Fd),yt(n,i)}}function pb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(St(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),yt(n,e)}else{if(St(n,i))return;Nd.set(i),t.uniformMatrix3fv(this.addr,!1,Nd),yt(n,i)}}function mb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(St(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),yt(n,e)}else{if(St(n,i))return;Ud.set(i),t.uniformMatrix4fv(this.addr,!1,Ud),yt(n,i)}}function gb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function _b(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(St(n,e))return;t.uniform2iv(this.addr,e),yt(n,e)}}function vb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(St(n,e))return;t.uniform3iv(this.addr,e),yt(n,e)}}function xb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(St(n,e))return;t.uniform4iv(this.addr,e),yt(n,e)}}function Sb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function yb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(St(n,e))return;t.uniform2uiv(this.addr,e),yt(n,e)}}function Mb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(St(n,e))return;t.uniform3uiv(this.addr,e),yt(n,e)}}function Eb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(St(n,e))return;t.uniform4uiv(this.addr,e),yt(n,e)}}function bb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Ld.compareFunction=Zp,s=Ld):s=dm,n.setTexture2D(e||s,r)}function Tb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||pm,r)}function wb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||mm,r)}function Ab(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||hm,r)}function Cb(t){switch(t){case 5126:return cb;case 35664:return ub;case 35665:return fb;case 35666:return db;case 35674:return hb;case 35675:return pb;case 35676:return mb;case 5124:case 35670:return gb;case 35667:case 35671:return _b;case 35668:case 35672:return vb;case 35669:case 35673:return xb;case 5125:return Sb;case 36294:return yb;case 36295:return Mb;case 36296:return Eb;case 35678:case 36198:case 36298:case 36306:case 35682:return bb;case 35679:case 36299:case 36307:return Tb;case 35680:case 36300:case 36308:case 36293:return wb;case 36289:case 36303:case 36311:case 36292:return Ab}}function Rb(t,e){t.uniform1fv(this.addr,e)}function Pb(t,e){const n=fs(e,this.size,2);t.uniform2fv(this.addr,n)}function Lb(t,e){const n=fs(e,this.size,3);t.uniform3fv(this.addr,n)}function Db(t,e){const n=fs(e,this.size,4);t.uniform4fv(this.addr,n)}function Ib(t,e){const n=fs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Ub(t,e){const n=fs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Nb(t,e){const n=fs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Fb(t,e){t.uniform1iv(this.addr,e)}function Ob(t,e){t.uniform2iv(this.addr,e)}function Bb(t,e){t.uniform3iv(this.addr,e)}function zb(t,e){t.uniform4iv(this.addr,e)}function kb(t,e){t.uniform1uiv(this.addr,e)}function Hb(t,e){t.uniform2uiv(this.addr,e)}function Vb(t,e){t.uniform3uiv(this.addr,e)}function Gb(t,e){t.uniform4uiv(this.addr,e)}function Wb(t,e,n){const i=this.cache,r=e.length,s=Ha(n,r);St(i,s)||(t.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||dm,s[o])}function qb(t,e,n){const i=this.cache,r=e.length,s=Ha(n,r);St(i,s)||(t.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||pm,s[o])}function Xb(t,e,n){const i=this.cache,r=e.length,s=Ha(n,r);St(i,s)||(t.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||mm,s[o])}function $b(t,e,n){const i=this.cache,r=e.length,s=Ha(n,r);St(i,s)||(t.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||hm,s[o])}function Yb(t){switch(t){case 5126:return Rb;case 35664:return Pb;case 35665:return Lb;case 35666:return Db;case 35674:return Ib;case 35675:return Ub;case 35676:return Nb;case 5124:case 35670:return Fb;case 35667:case 35671:return Ob;case 35668:case 35672:return Bb;case 35669:case 35673:return zb;case 5125:return kb;case 36294:return Hb;case 36295:return Vb;case 36296:return Gb;case 35678:case 36198:case 36298:case 36306:case 35682:return Wb;case 35679:case 36299:case 36307:return qb;case 35680:case 36300:case 36308:case 36293:return Xb;case 36289:case 36303:case 36311:case 36292:return $b}}class Kb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Cb(n.type)}}class jb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Yb(n.type)}}class Zb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Ol=/(\w+)(\])?(\[|\.)?/g;function Od(t,e){t.seq.push(e),t.map[e.id]=e}function Jb(t,e,n){const i=t.name,r=i.length;for(Ol.lastIndex=0;;){const s=Ol.exec(i),o=Ol.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Od(n,c===void 0?new Kb(a,t,e):new jb(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new Zb(a),Od(n,f)),n=f}}}class ea{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);Jb(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Bd(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Qb=37297;let eT=0;function tT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function nT(t){const e=it.getPrimaries(it.workingColorSpace),n=it.getPrimaries(t);let i;switch(e===n?i="":e===_a&&n===ga?i="LinearDisplayP3ToLinearSRGB":e===ga&&n===_a&&(i="LinearSRGBToLinearDisplayP3"),t){case Bi:case za:return[i,"LinearTransferOETF"];case Un:case Mu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function zd(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+tT(t.getShaderSource(e),o)}else return r}function iT(t,e){const n=nT(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function rT(t,e){let n;switch(e){case SS:n="Linear";break;case yS:n="Reinhard";break;case MS:n="Cineon";break;case ES:n="ACESFilmic";break;case TS:n="AgX";break;case wS:n="Neutral";break;case bS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ko=new Y;function sT(){it.getLuminanceCoefficients(ko);const t=ko.x.toFixed(4),e=ko.y.toFixed(4),n=ko.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ps).join(`
`)}function aT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function lT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ps(t){return t!==""}function kd(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hd(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cT=/^[ \t]*#include +<([\w\d./]+)>/gm;function qc(t){return t.replace(cT,fT)}const uT=new Map;function fT(t,e){let n=We[e];if(n===void 0){const i=uT.get(e);if(i!==void 0)n=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return qc(n)}const dT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vd(t){return t.replace(dT,hT)}function hT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Gd(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function pT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Bp?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Xx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ei&&(e="SHADOWMAP_TYPE_VSM"),e}function mT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case is:case rs:e="ENVMAP_TYPE_CUBE";break;case Ba:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case rs:e="ENVMAP_MODE_REFRACTION";break}return e}function _T(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case zp:e="ENVMAP_BLENDING_MULTIPLY";break;case vS:e="ENVMAP_BLENDING_MIX";break;case xS:e="ENVMAP_BLENDING_ADD";break}return e}function vT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function xT(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=pT(n),c=mT(n),u=gT(n),f=_T(n),d=vT(n),p=oT(n),v=aT(s),x=r.createProgram();let m,h,A=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Ps).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Ps).join(`
`),h.length>0&&(h+=`
`)):(m=[Gd(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ps).join(`
`),h=[Gd(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Di?"#define TONE_MAPPING":"",n.toneMapping!==Di?We.tonemapping_pars_fragment:"",n.toneMapping!==Di?rT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,iT("linearToOutputTexel",n.outputColorSpace),sT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ps).join(`
`)),o=qc(o),o=kd(o,n),o=Hd(o,n),a=qc(a),a=kd(a,n),a=Hd(a,n),o=Vd(o),a=Vd(a),n.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===rd?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===rd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const b=A+m+o,M=A+h+a,D=Bd(r,r.VERTEX_SHADER,b),E=Bd(r,r.FRAGMENT_SHADER,M);r.attachShader(x,D),r.attachShader(x,E),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function C(P){if(t.debug.checkShaderErrors){const F=r.getProgramInfoLog(x).trim(),V=r.getShaderInfoLog(D).trim(),J=r.getShaderInfoLog(E).trim();let G=!0,U=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(G=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,D,E);else{const q=zd(r,D,"vertex"),k=zd(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+F+`
`+q+`
`+k)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(V===""||J==="")&&(U=!1);U&&(P.diagnostics={runnable:G,programLog:F,vertexShader:{log:V,prefix:m},fragmentShader:{log:J,prefix:h}})}r.deleteShader(D),r.deleteShader(E),I=new ea(r,x),S=lT(r,x)}let I;this.getUniforms=function(){return I===void 0&&C(this),I};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(x,Qb)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=eT++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=D,this.fragmentShader=E,this}let ST=0;class yT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new MT(e),n.set(e,i)),i}}class MT{constructor(e){this.id=ST++,this.code=e,this.usedTimes=0}}function ET(t,e,n,i,r,s,o){const a=new nm,l=new yT,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,y,P,F,V){const J=F.fog,G=V.geometry,U=S.isMeshStandardMaterial?F.environment:null,q=(S.isMeshStandardMaterial?n:e).get(S.envMap||U),k=q&&q.mapping===Ba?q.image.height:null,fe=v[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const pe=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,_e=pe!==void 0?pe.length:0;let ue=0;G.morphAttributes.position!==void 0&&(ue=1),G.morphAttributes.normal!==void 0&&(ue=2),G.morphAttributes.color!==void 0&&(ue=3);let Be,Q,ce,ye;if(fe){const Ze=On[fe];Be=Ze.vertexShader,Q=Ze.fragmentShader}else Be=S.vertexShader,Q=S.fragmentShader,l.update(S),ce=l.getVertexShaderID(S),ye=l.getFragmentShaderID(S);const Se=t.getRenderTarget(),Pe=V.isInstancedMesh===!0,Ae=V.isBatchedMesh===!0,He=!!S.map,ct=!!S.matcap,g=!!q,L=!!S.aoMap,X=!!S.lightMap,ee=!!S.bumpMap,H=!!S.normalMap,Z=!!S.displacementMap,te=!!S.emissiveMap,ne=!!S.metalnessMap,T=!!S.roughnessMap,_=S.anisotropy>0,N=S.clearcoat>0,O=S.dispersion>0,$=S.iridescence>0,R=S.sheen>0,ie=S.transmission>0,re=_&&!!S.anisotropyMap,le=N&&!!S.clearcoatMap,be=N&&!!S.clearcoatNormalMap,oe=N&&!!S.clearcoatRoughnessMap,ve=$&&!!S.iridescenceMap,ke=$&&!!S.iridescenceThicknessMap,De=R&&!!S.sheenColorMap,Ee=R&&!!S.sheenRoughnessMap,Ce=!!S.specularMap,Ie=!!S.specularColorMap,at=!!S.specularIntensityMap,B=ie&&!!S.transmissionMap,de=ie&&!!S.thicknessMap,se=!!S.gradientMap,ae=!!S.alphaMap,me=S.alphaTest>0,Fe=!!S.alphaHash,Ke=!!S.extensions;let mt=Di;S.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(mt=t.toneMapping);const bt={shaderID:fe,shaderType:S.type,shaderName:S.name,vertexShader:Be,fragmentShader:Q,defines:S.defines,customVertexShaderID:ce,customFragmentShaderID:ye,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Ae,batchingColor:Ae&&V._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&V.instanceColor!==null,instancingMorph:Pe&&V.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Se===null?t.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:Bi,alphaToCoverage:!!S.alphaToCoverage,map:He,matcap:ct,envMap:g,envMapMode:g&&q.mapping,envMapCubeUVHeight:k,aoMap:L,lightMap:X,bumpMap:ee,normalMap:H,displacementMap:d&&Z,emissiveMap:te,normalMapObjectSpace:H&&S.normalMapType===LS,normalMapTangentSpace:H&&S.normalMapType===PS,metalnessMap:ne,roughnessMap:T,anisotropy:_,anisotropyMap:re,clearcoat:N,clearcoatMap:le,clearcoatNormalMap:be,clearcoatRoughnessMap:oe,dispersion:O,iridescence:$,iridescenceMap:ve,iridescenceThicknessMap:ke,sheen:R,sheenColorMap:De,sheenRoughnessMap:Ee,specularMap:Ce,specularColorMap:Ie,specularIntensityMap:at,transmission:ie,transmissionMap:B,thicknessMap:de,gradientMap:se,opaque:S.transparent===!1&&S.blending===Kr&&S.alphaToCoverage===!1,alphaMap:ae,alphaTest:me,alphaHash:Fe,combine:S.combine,mapUv:He&&x(S.map.channel),aoMapUv:L&&x(S.aoMap.channel),lightMapUv:X&&x(S.lightMap.channel),bumpMapUv:ee&&x(S.bumpMap.channel),normalMapUv:H&&x(S.normalMap.channel),displacementMapUv:Z&&x(S.displacementMap.channel),emissiveMapUv:te&&x(S.emissiveMap.channel),metalnessMapUv:ne&&x(S.metalnessMap.channel),roughnessMapUv:T&&x(S.roughnessMap.channel),anisotropyMapUv:re&&x(S.anisotropyMap.channel),clearcoatMapUv:le&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:be&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:ke&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:De&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&x(S.sheenRoughnessMap.channel),specularMapUv:Ce&&x(S.specularMap.channel),specularColorMapUv:Ie&&x(S.specularColorMap.channel),specularIntensityMapUv:at&&x(S.specularIntensityMap.channel),transmissionMapUv:B&&x(S.transmissionMap.channel),thicknessMapUv:de&&x(S.thicknessMap.channel),alphaMapUv:ae&&x(S.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(H||_),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!G.attributes.uv&&(He||ae),fog:!!J,useFog:S.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:V.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:ue,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:mt,decodeVideoTexture:He&&S.map.isVideoTexture===!0&&it.getTransfer(S.map.colorSpace)===ut,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Mn,flipSided:S.side===Gt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ke&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ke&&S.extensions.multiDraw===!0||Ae)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return bt.vertexUv1s=c.has(1),bt.vertexUv2s=c.has(2),bt.vertexUv3s=c.has(3),c.clear(),bt}function h(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)y.push(P),y.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(A(y,S),b(y,S),y.push(t.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function A(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function b(S,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.doubleSided&&a.enable(10),y.flipSided&&a.enable(11),y.useDepthPacking&&a.enable(12),y.dithering&&a.enable(13),y.transmission&&a.enable(14),y.sheen&&a.enable(15),y.opaque&&a.enable(16),y.pointsUvs&&a.enable(17),y.decodeVideoTexture&&a.enable(18),y.alphaToCoverage&&a.enable(19),S.push(a.mask)}function M(S){const y=v[S.type];let P;if(y){const F=On[y];P=sy.clone(F.uniforms)}else P=S.uniforms;return P}function D(S,y){let P;for(let F=0,V=u.length;F<V;F++){const J=u[F];if(J.cacheKey===y){P=J,++P.usedTimes;break}}return P===void 0&&(P=new xT(t,y,S,s),u.push(P)),P}function E(S){if(--S.usedTimes===0){const y=u.indexOf(S);u[y]=u[u.length-1],u.pop(),S.destroy()}}function C(S){l.remove(S)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:M,acquireProgram:D,releaseProgram:E,releaseShaderCache:C,programs:u,dispose:I}}function bT(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function TT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Wd(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function qd(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,p,v,x,m){let h=t[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:v,renderOrder:f.renderOrder,z:x,group:m},t[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=v,h.renderOrder=f.renderOrder,h.z=x,h.group=m),e++,h}function a(f,d,p,v,x,m){const h=o(f,d,p,v,x,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(f,d,p,v,x,m){const h=o(f,d,p,v,x,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function c(f,d){n.length>1&&n.sort(f||TT),i.length>1&&i.sort(d||Wd),r.length>1&&r.sort(d||Wd)}function u(){for(let f=e,d=t.length;f<d;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function wT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new qd,t.set(i,[o])):r>=s.length?(o=new qd,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function AT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Y,color:new Ye};break;case"SpotLight":n={position:new Y,direction:new Y,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Y,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Y,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":n={color:new Ye,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return t[e.id]=n,n}}}function CT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let RT=0;function PT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function LT(t){const e=new AT,n=CT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Y);const r=new Y,s=new pt,o=new pt;function a(c){let u=0,f=0,d=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,v=0,x=0,m=0,h=0,A=0,b=0,M=0,D=0,E=0,C=0;c.sort(PT);for(let S=0,y=c.length;S<y;S++){const P=c[S],F=P.color,V=P.intensity,J=P.distance,G=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=F.r*V,f+=F.g*V,d+=F.b*V;else if(P.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(P.sh.coefficients[U],V);C++}else if(P.isDirectionalLight){const U=e.get(P);if(U.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const q=P.shadow,k=n.get(P);k.shadowIntensity=q.intensity,k.shadowBias=q.bias,k.shadowNormalBias=q.normalBias,k.shadowRadius=q.radius,k.shadowMapSize=q.mapSize,i.directionalShadow[p]=k,i.directionalShadowMap[p]=G,i.directionalShadowMatrix[p]=P.shadow.matrix,A++}i.directional[p]=U,p++}else if(P.isSpotLight){const U=e.get(P);U.position.setFromMatrixPosition(P.matrixWorld),U.color.copy(F).multiplyScalar(V),U.distance=J,U.coneCos=Math.cos(P.angle),U.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),U.decay=P.decay,i.spot[x]=U;const q=P.shadow;if(P.map&&(i.spotLightMap[D]=P.map,D++,q.updateMatrices(P),P.castShadow&&E++),i.spotLightMatrix[x]=q.matrix,P.castShadow){const k=n.get(P);k.shadowIntensity=q.intensity,k.shadowBias=q.bias,k.shadowNormalBias=q.normalBias,k.shadowRadius=q.radius,k.shadowMapSize=q.mapSize,i.spotShadow[x]=k,i.spotShadowMap[x]=G,M++}x++}else if(P.isRectAreaLight){const U=e.get(P);U.color.copy(F).multiplyScalar(V),U.halfWidth.set(P.width*.5,0,0),U.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=U,m++}else if(P.isPointLight){const U=e.get(P);if(U.color.copy(P.color).multiplyScalar(P.intensity),U.distance=P.distance,U.decay=P.decay,P.castShadow){const q=P.shadow,k=n.get(P);k.shadowIntensity=q.intensity,k.shadowBias=q.bias,k.shadowNormalBias=q.normalBias,k.shadowRadius=q.radius,k.shadowMapSize=q.mapSize,k.shadowCameraNear=q.camera.near,k.shadowCameraFar=q.camera.far,i.pointShadow[v]=k,i.pointShadowMap[v]=G,i.pointShadowMatrix[v]=P.shadow.matrix,b++}i.point[v]=U,v++}else if(P.isHemisphereLight){const U=e.get(P);U.skyColor.copy(P.color).multiplyScalar(V),U.groundColor.copy(P.groundColor).multiplyScalar(V),i.hemi[h]=U,h++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_FLOAT_1,i.rectAreaLTC2=xe.LTC_FLOAT_2):(i.rectAreaLTC1=xe.LTC_HALF_1,i.rectAreaLTC2=xe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const I=i.hash;(I.directionalLength!==p||I.pointLength!==v||I.spotLength!==x||I.rectAreaLength!==m||I.hemiLength!==h||I.numDirectionalShadows!==A||I.numPointShadows!==b||I.numSpotShadows!==M||I.numSpotMaps!==D||I.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=v,i.hemi.length=h,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=M+D-E,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=C,I.directionalLength=p,I.pointLength=v,I.spotLength=x,I.rectAreaLength=m,I.hemiLength=h,I.numDirectionalShadows=A,I.numPointShadows=b,I.numSpotShadows=M,I.numSpotMaps=D,I.numLightProbes=C,i.version=RT++)}function l(c,u){let f=0,d=0,p=0,v=0,x=0;const m=u.matrixWorldInverse;for(let h=0,A=c.length;h<A;h++){const b=c[h];if(b.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),f++}else if(b.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const M=i.rectArea[v];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(b.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),v++}else if(b.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){const M=i.hemi[x];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function Xd(t){const e=new LT(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function DT(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Xd(t),e.set(r,[a])):s>=o.length?(a=new Xd(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class IT extends us{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=CS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class UT extends us{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const NT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FT=`uniform sampler2D shadow_pass;
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
}`;function OT(t,e,n){let i=new cm;const r=new Xe,s=new Xe,o=new Et,a=new IT({depthPacking:RS}),l=new UT,c={},u=n.maxTextureSize,f={[Fi]:Gt,[Gt]:Fi,[Mn]:Mn},d=new mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:NT,fragmentShader:FT}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const v=new Rn;v.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new hn(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bp;let h=this.type;this.render=function(E,C,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const S=t.getRenderTarget(),y=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),F=t.state;F.setBlending(Li),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const V=h!==ei&&this.type===ei,J=h===ei&&this.type!==ei;for(let G=0,U=E.length;G<U;G++){const q=E[G],k=q.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const fe=k.getFrameExtents();if(r.multiply(fe),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/fe.x),r.x=s.x*fe.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/fe.y),r.y=s.y*fe.y,k.mapSize.y=s.y)),k.map===null||V===!0||J===!0){const _e=this.type!==ei?{minFilter:dn,magFilter:dn}:{};k.map!==null&&k.map.dispose(),k.map=new hr(r.x,r.y,_e),k.map.texture.name=q.name+".shadowMap",k.camera.updateProjectionMatrix()}t.setRenderTarget(k.map),t.clear();const pe=k.getViewportCount();for(let _e=0;_e<pe;_e++){const ue=k.getViewport(_e);o.set(s.x*ue.x,s.y*ue.y,s.x*ue.z,s.y*ue.w),F.viewport(o),k.updateMatrices(q,_e),i=k.getFrustum(),M(C,I,k.camera,q,this.type)}k.isPointLightShadow!==!0&&this.type===ei&&A(k,I),k.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(S,y,P)};function A(E,C){const I=e.update(x);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new hr(r.x,r.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(C,null,I,d,x,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(C,null,I,p,x,null)}function b(E,C,I,S){let y=null;const P=I.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)y=P;else if(y=I.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const F=y.uuid,V=C.uuid;let J=c[F];J===void 0&&(J={},c[F]=J);let G=J[V];G===void 0&&(G=y.clone(),J[V]=G,C.addEventListener("dispose",D)),y=G}if(y.visible=C.visible,y.wireframe=C.wireframe,S===ei?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:f[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,I.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const F=t.properties.get(y);F.light=I}return y}function M(E,C,I,S,y){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&y===ei)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,E.matrixWorld);const V=e.update(E),J=E.material;if(Array.isArray(J)){const G=V.groups;for(let U=0,q=G.length;U<q;U++){const k=G[U],fe=J[k.materialIndex];if(fe&&fe.visible){const pe=b(E,fe,S,y);E.onBeforeShadow(t,E,C,I,V,pe,k),t.renderBufferDirect(I,null,V,pe,E,k),E.onAfterShadow(t,E,C,I,V,pe,k)}}}else if(J.visible){const G=b(E,J,S,y);E.onBeforeShadow(t,E,C,I,V,G,null),t.renderBufferDirect(I,null,V,G,E,null),E.onAfterShadow(t,E,C,I,V,G,null)}}const F=E.children;for(let V=0,J=F.length;V<J;V++)M(F[V],C,I,S,y)}function D(E){E.target.removeEventListener("dispose",D);for(const I in c){const S=c[I],y=E.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}function BT(t){function e(){let B=!1;const de=new Et;let se=null;const ae=new Et(0,0,0,0);return{setMask:function(me){se!==me&&!B&&(t.colorMask(me,me,me,me),se=me)},setLocked:function(me){B=me},setClear:function(me,Fe,Ke,mt,bt){bt===!0&&(me*=mt,Fe*=mt,Ke*=mt),de.set(me,Fe,Ke,mt),ae.equals(de)===!1&&(t.clearColor(me,Fe,Ke,mt),ae.copy(de))},reset:function(){B=!1,se=null,ae.set(-1,0,0,0)}}}function n(){let B=!1,de=null,se=null,ae=null;return{setTest:function(me){me?ye(t.DEPTH_TEST):Se(t.DEPTH_TEST)},setMask:function(me){de!==me&&!B&&(t.depthMask(me),de=me)},setFunc:function(me){if(se!==me){switch(me){case fS:t.depthFunc(t.NEVER);break;case dS:t.depthFunc(t.ALWAYS);break;case hS:t.depthFunc(t.LESS);break;case pa:t.depthFunc(t.LEQUAL);break;case pS:t.depthFunc(t.EQUAL);break;case mS:t.depthFunc(t.GEQUAL);break;case gS:t.depthFunc(t.GREATER);break;case _S:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}se=me}},setLocked:function(me){B=me},setClear:function(me){ae!==me&&(t.clearDepth(me),ae=me)},reset:function(){B=!1,de=null,se=null,ae=null}}}function i(){let B=!1,de=null,se=null,ae=null,me=null,Fe=null,Ke=null,mt=null,bt=null;return{setTest:function(Ze){B||(Ze?ye(t.STENCIL_TEST):Se(t.STENCIL_TEST))},setMask:function(Ze){de!==Ze&&!B&&(t.stencilMask(Ze),de=Ze)},setFunc:function(Ze,Xn,Pn){(se!==Ze||ae!==Xn||me!==Pn)&&(t.stencilFunc(Ze,Xn,Pn),se=Ze,ae=Xn,me=Pn)},setOp:function(Ze,Xn,Pn){(Fe!==Ze||Ke!==Xn||mt!==Pn)&&(t.stencilOp(Ze,Xn,Pn),Fe=Ze,Ke=Xn,mt=Pn)},setLocked:function(Ze){B=Ze},setClear:function(Ze){bt!==Ze&&(t.clearStencil(Ze),bt=Ze)},reset:function(){B=!1,de=null,se=null,ae=null,me=null,Fe=null,Ke=null,mt=null,bt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,d=[],p=null,v=!1,x=null,m=null,h=null,A=null,b=null,M=null,D=null,E=new Ye(0,0,0),C=0,I=!1,S=null,y=null,P=null,F=null,V=null;const J=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,U=0;const q=t.getParameter(t.VERSION);q.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(q)[1]),G=U>=1):q.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),G=U>=2);let k=null,fe={};const pe=t.getParameter(t.SCISSOR_BOX),_e=t.getParameter(t.VIEWPORT),ue=new Et().fromArray(pe),Be=new Et().fromArray(_e);function Q(B,de,se,ae){const me=new Uint8Array(4),Fe=t.createTexture();t.bindTexture(B,Fe),t.texParameteri(B,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(B,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ke=0;Ke<se;Ke++)B===t.TEXTURE_3D||B===t.TEXTURE_2D_ARRAY?t.texImage3D(de,0,t.RGBA,1,1,ae,0,t.RGBA,t.UNSIGNED_BYTE,me):t.texImage2D(de+Ke,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,me);return Fe}const ce={};ce[t.TEXTURE_2D]=Q(t.TEXTURE_2D,t.TEXTURE_2D,1),ce[t.TEXTURE_CUBE_MAP]=Q(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[t.TEXTURE_2D_ARRAY]=Q(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ce[t.TEXTURE_3D]=Q(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ye(t.DEPTH_TEST),s.setFunc(pa),ee(!1),H(Qf),ye(t.CULL_FACE),L(Li);function ye(B){c[B]!==!0&&(t.enable(B),c[B]=!0)}function Se(B){c[B]!==!1&&(t.disable(B),c[B]=!1)}function Pe(B,de){return u[B]!==de?(t.bindFramebuffer(B,de),u[B]=de,B===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=de),B===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=de),!0):!1}function Ae(B,de){let se=d,ae=!1;if(B){se=f.get(de),se===void 0&&(se=[],f.set(de,se));const me=B.textures;if(se.length!==me.length||se[0]!==t.COLOR_ATTACHMENT0){for(let Fe=0,Ke=me.length;Fe<Ke;Fe++)se[Fe]=t.COLOR_ATTACHMENT0+Fe;se.length=me.length,ae=!0}}else se[0]!==t.BACK&&(se[0]=t.BACK,ae=!0);ae&&t.drawBuffers(se)}function He(B){return p!==B?(t.useProgram(B),p=B,!0):!1}const ct={[nr]:t.FUNC_ADD,[Yx]:t.FUNC_SUBTRACT,[Kx]:t.FUNC_REVERSE_SUBTRACT};ct[jx]=t.MIN,ct[Zx]=t.MAX;const g={[Jx]:t.ZERO,[Qx]:t.ONE,[eS]:t.SRC_COLOR,[fc]:t.SRC_ALPHA,[oS]:t.SRC_ALPHA_SATURATE,[rS]:t.DST_COLOR,[nS]:t.DST_ALPHA,[tS]:t.ONE_MINUS_SRC_COLOR,[dc]:t.ONE_MINUS_SRC_ALPHA,[sS]:t.ONE_MINUS_DST_COLOR,[iS]:t.ONE_MINUS_DST_ALPHA,[aS]:t.CONSTANT_COLOR,[lS]:t.ONE_MINUS_CONSTANT_COLOR,[cS]:t.CONSTANT_ALPHA,[uS]:t.ONE_MINUS_CONSTANT_ALPHA};function L(B,de,se,ae,me,Fe,Ke,mt,bt,Ze){if(B===Li){v===!0&&(Se(t.BLEND),v=!1);return}if(v===!1&&(ye(t.BLEND),v=!0),B!==$x){if(B!==x||Ze!==I){if((m!==nr||b!==nr)&&(t.blendEquation(t.FUNC_ADD),m=nr,b=nr),Ze)switch(B){case Kr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ed:t.blendFunc(t.ONE,t.ONE);break;case td:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case nd:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Kr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ed:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case td:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case nd:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}h=null,A=null,M=null,D=null,E.set(0,0,0),C=0,x=B,I=Ze}return}me=me||de,Fe=Fe||se,Ke=Ke||ae,(de!==m||me!==b)&&(t.blendEquationSeparate(ct[de],ct[me]),m=de,b=me),(se!==h||ae!==A||Fe!==M||Ke!==D)&&(t.blendFuncSeparate(g[se],g[ae],g[Fe],g[Ke]),h=se,A=ae,M=Fe,D=Ke),(mt.equals(E)===!1||bt!==C)&&(t.blendColor(mt.r,mt.g,mt.b,bt),E.copy(mt),C=bt),x=B,I=!1}function X(B,de){B.side===Mn?Se(t.CULL_FACE):ye(t.CULL_FACE);let se=B.side===Gt;de&&(se=!se),ee(se),B.blending===Kr&&B.transparent===!1?L(Li):L(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),s.setFunc(B.depthFunc),s.setTest(B.depthTest),s.setMask(B.depthWrite),r.setMask(B.colorWrite);const ae=B.stencilWrite;o.setTest(ae),ae&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),te(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ye(t.SAMPLE_ALPHA_TO_COVERAGE):Se(t.SAMPLE_ALPHA_TO_COVERAGE)}function ee(B){S!==B&&(B?t.frontFace(t.CW):t.frontFace(t.CCW),S=B)}function H(B){B!==Wx?(ye(t.CULL_FACE),B!==y&&(B===Qf?t.cullFace(t.BACK):B===qx?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Se(t.CULL_FACE),y=B}function Z(B){B!==P&&(G&&t.lineWidth(B),P=B)}function te(B,de,se){B?(ye(t.POLYGON_OFFSET_FILL),(F!==de||V!==se)&&(t.polygonOffset(de,se),F=de,V=se)):Se(t.POLYGON_OFFSET_FILL)}function ne(B){B?ye(t.SCISSOR_TEST):Se(t.SCISSOR_TEST)}function T(B){B===void 0&&(B=t.TEXTURE0+J-1),k!==B&&(t.activeTexture(B),k=B)}function _(B,de,se){se===void 0&&(k===null?se=t.TEXTURE0+J-1:se=k);let ae=fe[se];ae===void 0&&(ae={type:void 0,texture:void 0},fe[se]=ae),(ae.type!==B||ae.texture!==de)&&(k!==se&&(t.activeTexture(se),k=se),t.bindTexture(B,de||ce[B]),ae.type=B,ae.texture=de)}function N(){const B=fe[k];B!==void 0&&B.type!==void 0&&(t.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function O(){try{t.compressedTexImage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function $(){try{t.compressedTexImage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function R(){try{t.texSubImage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ie(){try{t.texSubImage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function re(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function le(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function be(){try{t.texStorage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function oe(){try{t.texStorage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ve(){try{t.texImage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ke(){try{t.texImage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function De(B){ue.equals(B)===!1&&(t.scissor(B.x,B.y,B.z,B.w),ue.copy(B))}function Ee(B){Be.equals(B)===!1&&(t.viewport(B.x,B.y,B.z,B.w),Be.copy(B))}function Ce(B,de){let se=l.get(de);se===void 0&&(se=new WeakMap,l.set(de,se));let ae=se.get(B);ae===void 0&&(ae=t.getUniformBlockIndex(de,B.name),se.set(B,ae))}function Ie(B,de){const ae=l.get(de).get(B);a.get(de)!==ae&&(t.uniformBlockBinding(de,ae,B.__bindingPointIndex),a.set(de,ae))}function at(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},k=null,fe={},u={},f=new WeakMap,d=[],p=null,v=!1,x=null,m=null,h=null,A=null,b=null,M=null,D=null,E=new Ye(0,0,0),C=0,I=!1,S=null,y=null,P=null,F=null,V=null,ue.set(0,0,t.canvas.width,t.canvas.height),Be.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ye,disable:Se,bindFramebuffer:Pe,drawBuffers:Ae,useProgram:He,setBlending:L,setMaterial:X,setFlipSided:ee,setCullFace:H,setLineWidth:Z,setPolygonOffset:te,setScissorTest:ne,activeTexture:T,bindTexture:_,unbindTexture:N,compressedTexImage2D:O,compressedTexImage3D:$,texImage2D:ve,texImage3D:ke,updateUBOMapping:Ce,uniformBlockBinding:Ie,texStorage2D:be,texStorage3D:oe,texSubImage2D:R,texSubImage3D:ie,compressedTexSubImage2D:re,compressedTexSubImage3D:le,scissor:De,viewport:Ee,reset:at}}function $d(t,e,n,i){const r=zT(i);switch(n){case Wp:return t*e;case Xp:return t*e;case $p:return t*e*2;case Yp:return t*e/r.components*r.byteLength;case xu:return t*e/r.components*r.byteLength;case Kp:return t*e*2/r.components*r.byteLength;case Su:return t*e*2/r.components*r.byteLength;case qp:return t*e*3/r.components*r.byteLength;case wn:return t*e*4/r.components*r.byteLength;case yu:return t*e*4/r.components*r.byteLength;case Ko:case jo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Zo:case Jo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case vc:case Sc:return Math.max(t,16)*Math.max(e,8)/4;case _c:case xc:return Math.max(t,8)*Math.max(e,8)/2;case yc:case Mc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ec:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case bc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Tc:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case wc:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Ac:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Cc:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Rc:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Pc:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Lc:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Dc:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Ic:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Uc:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Nc:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Fc:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Oc:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Qo:case Bc:case zc:return Math.ceil(t/4)*Math.ceil(e/4)*16;case jp:case kc:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Hc:case Vc:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function zT(t){switch(t){case hi:case Hp:return{byteLength:1,components:1};case Zs:case Vp:case io:return{byteLength:2,components:1};case _u:case vu:return{byteLength:2,components:4};case dr:case gu:case ai:return{byteLength:4,components:1};case Gp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function kT(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xe,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(T,_){return p?new OffscreenCanvas(T,_):xa("canvas")}function x(T,_,N){let O=1;const $=ne(T);if(($.width>N||$.height>N)&&(O=N/Math.max($.width,$.height)),O<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const R=Math.floor(O*$.width),ie=Math.floor(O*$.height);f===void 0&&(f=v(R,ie));const re=_?v(R,ie):f;return re.width=R,re.height=ie,re.getContext("2d").drawImage(T,0,0,R,ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+R+"x"+ie+")."),re}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),T;return T}function m(T){return T.generateMipmaps&&T.minFilter!==dn&&T.minFilter!==En}function h(T){t.generateMipmap(T)}function A(T,_,N,O,$=!1){if(T!==null){if(t[T]!==void 0)return t[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let R=_;if(_===t.RED&&(N===t.FLOAT&&(R=t.R32F),N===t.HALF_FLOAT&&(R=t.R16F),N===t.UNSIGNED_BYTE&&(R=t.R8)),_===t.RED_INTEGER&&(N===t.UNSIGNED_BYTE&&(R=t.R8UI),N===t.UNSIGNED_SHORT&&(R=t.R16UI),N===t.UNSIGNED_INT&&(R=t.R32UI),N===t.BYTE&&(R=t.R8I),N===t.SHORT&&(R=t.R16I),N===t.INT&&(R=t.R32I)),_===t.RG&&(N===t.FLOAT&&(R=t.RG32F),N===t.HALF_FLOAT&&(R=t.RG16F),N===t.UNSIGNED_BYTE&&(R=t.RG8)),_===t.RG_INTEGER&&(N===t.UNSIGNED_BYTE&&(R=t.RG8UI),N===t.UNSIGNED_SHORT&&(R=t.RG16UI),N===t.UNSIGNED_INT&&(R=t.RG32UI),N===t.BYTE&&(R=t.RG8I),N===t.SHORT&&(R=t.RG16I),N===t.INT&&(R=t.RG32I)),_===t.RGB&&N===t.UNSIGNED_INT_5_9_9_9_REV&&(R=t.RGB9_E5),_===t.RGBA){const ie=$?ma:it.getTransfer(O);N===t.FLOAT&&(R=t.RGBA32F),N===t.HALF_FLOAT&&(R=t.RGBA16F),N===t.UNSIGNED_BYTE&&(R=ie===ut?t.SRGB8_ALPHA8:t.RGBA8),N===t.UNSIGNED_SHORT_4_4_4_4&&(R=t.RGBA4),N===t.UNSIGNED_SHORT_5_5_5_1&&(R=t.RGB5_A1)}return(R===t.R16F||R===t.R32F||R===t.RG16F||R===t.RG32F||R===t.RGBA16F||R===t.RGBA32F)&&e.get("EXT_color_buffer_float"),R}function b(T,_){let N;return T?_===null||_===dr||_===ss?N=t.DEPTH24_STENCIL8:_===ai?N=t.DEPTH32F_STENCIL8:_===Zs&&(N=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===dr||_===ss?N=t.DEPTH_COMPONENT24:_===ai?N=t.DEPTH_COMPONENT32F:_===Zs&&(N=t.DEPTH_COMPONENT16),N}function M(T,_){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==dn&&T.minFilter!==En?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function D(T){const _=T.target;_.removeEventListener("dispose",D),C(_),_.isVideoTexture&&u.delete(_)}function E(T){const _=T.target;_.removeEventListener("dispose",E),S(_)}function C(T){const _=i.get(T);if(_.__webglInit===void 0)return;const N=T.source,O=d.get(N);if(O){const $=O[_.__cacheKey];$.usedTimes--,$.usedTimes===0&&I(T),Object.keys(O).length===0&&d.delete(N)}i.remove(T)}function I(T){const _=i.get(T);t.deleteTexture(_.__webglTexture);const N=T.source,O=d.get(N);delete O[_.__cacheKey],o.memory.textures--}function S(T){const _=i.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(_.__webglFramebuffer[O]))for(let $=0;$<_.__webglFramebuffer[O].length;$++)t.deleteFramebuffer(_.__webglFramebuffer[O][$]);else t.deleteFramebuffer(_.__webglFramebuffer[O]);_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer[O])}else{if(Array.isArray(_.__webglFramebuffer))for(let O=0;O<_.__webglFramebuffer.length;O++)t.deleteFramebuffer(_.__webglFramebuffer[O]);else t.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&t.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let O=0;O<_.__webglColorRenderbuffer.length;O++)_.__webglColorRenderbuffer[O]&&t.deleteRenderbuffer(_.__webglColorRenderbuffer[O]);_.__webglDepthRenderbuffer&&t.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const N=T.textures;for(let O=0,$=N.length;O<$;O++){const R=i.get(N[O]);R.__webglTexture&&(t.deleteTexture(R.__webglTexture),o.memory.textures--),i.remove(N[O])}i.remove(T)}let y=0;function P(){y=0}function F(){const T=y;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),y+=1,T}function V(T){const _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function J(T,_){const N=i.get(T);if(T.isVideoTexture&&Z(T),T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){const O=T.image;if(O===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Be(N,T,_);return}}n.bindTexture(t.TEXTURE_2D,N.__webglTexture,t.TEXTURE0+_)}function G(T,_){const N=i.get(T);if(T.version>0&&N.__version!==T.version){Be(N,T,_);return}n.bindTexture(t.TEXTURE_2D_ARRAY,N.__webglTexture,t.TEXTURE0+_)}function U(T,_){const N=i.get(T);if(T.version>0&&N.__version!==T.version){Be(N,T,_);return}n.bindTexture(t.TEXTURE_3D,N.__webglTexture,t.TEXTURE0+_)}function q(T,_){const N=i.get(T);if(T.version>0&&N.__version!==T.version){Q(N,T,_);return}n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+_)}const k={[mc]:t.REPEAT,[or]:t.CLAMP_TO_EDGE,[gc]:t.MIRRORED_REPEAT},fe={[dn]:t.NEAREST,[AS]:t.NEAREST_MIPMAP_NEAREST,[xo]:t.NEAREST_MIPMAP_LINEAR,[En]:t.LINEAR,[fl]:t.LINEAR_MIPMAP_NEAREST,[ar]:t.LINEAR_MIPMAP_LINEAR},pe={[DS]:t.NEVER,[BS]:t.ALWAYS,[IS]:t.LESS,[Zp]:t.LEQUAL,[US]:t.EQUAL,[OS]:t.GEQUAL,[NS]:t.GREATER,[FS]:t.NOTEQUAL};function _e(T,_){if(_.type===ai&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===En||_.magFilter===fl||_.magFilter===xo||_.magFilter===ar||_.minFilter===En||_.minFilter===fl||_.minFilter===xo||_.minFilter===ar)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(T,t.TEXTURE_WRAP_S,k[_.wrapS]),t.texParameteri(T,t.TEXTURE_WRAP_T,k[_.wrapT]),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,k[_.wrapR]),t.texParameteri(T,t.TEXTURE_MAG_FILTER,fe[_.magFilter]),t.texParameteri(T,t.TEXTURE_MIN_FILTER,fe[_.minFilter]),_.compareFunction&&(t.texParameteri(T,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(T,t.TEXTURE_COMPARE_FUNC,pe[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===dn||_.minFilter!==xo&&_.minFilter!==ar||_.type===ai&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");t.texParameterf(T,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function ue(T,_){let N=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",D));const O=_.source;let $=d.get(O);$===void 0&&($={},d.set(O,$));const R=V(_);if(R!==T.__cacheKey){$[R]===void 0&&($[R]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,N=!0),$[R].usedTimes++;const ie=$[T.__cacheKey];ie!==void 0&&($[T.__cacheKey].usedTimes--,ie.usedTimes===0&&I(_)),T.__cacheKey=R,T.__webglTexture=$[R].texture}return N}function Be(T,_,N){let O=t.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(O=t.TEXTURE_2D_ARRAY),_.isData3DTexture&&(O=t.TEXTURE_3D);const $=ue(T,_),R=_.source;n.bindTexture(O,T.__webglTexture,t.TEXTURE0+N);const ie=i.get(R);if(R.version!==ie.__version||$===!0){n.activeTexture(t.TEXTURE0+N);const re=it.getPrimaries(it.workingColorSpace),le=_.colorSpace===Ai?null:it.getPrimaries(_.colorSpace),be=_.colorSpace===Ai||re===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let oe=x(_.image,!1,r.maxTextureSize);oe=te(_,oe);const ve=s.convert(_.format,_.colorSpace),ke=s.convert(_.type);let De=A(_.internalFormat,ve,ke,_.colorSpace,_.isVideoTexture);_e(O,_);let Ee;const Ce=_.mipmaps,Ie=_.isVideoTexture!==!0,at=ie.__version===void 0||$===!0,B=R.dataReady,de=M(_,oe);if(_.isDepthTexture)De=b(_.format===os,_.type),at&&(Ie?n.texStorage2D(t.TEXTURE_2D,1,De,oe.width,oe.height):n.texImage2D(t.TEXTURE_2D,0,De,oe.width,oe.height,0,ve,ke,null));else if(_.isDataTexture)if(Ce.length>0){Ie&&at&&n.texStorage2D(t.TEXTURE_2D,de,De,Ce[0].width,Ce[0].height);for(let se=0,ae=Ce.length;se<ae;se++)Ee=Ce[se],Ie?B&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,Ee.width,Ee.height,ve,ke,Ee.data):n.texImage2D(t.TEXTURE_2D,se,De,Ee.width,Ee.height,0,ve,ke,Ee.data);_.generateMipmaps=!1}else Ie?(at&&n.texStorage2D(t.TEXTURE_2D,de,De,oe.width,oe.height),B&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,oe.width,oe.height,ve,ke,oe.data)):n.texImage2D(t.TEXTURE_2D,0,De,oe.width,oe.height,0,ve,ke,oe.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ie&&at&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,De,Ce[0].width,Ce[0].height,oe.depth);for(let se=0,ae=Ce.length;se<ae;se++)if(Ee=Ce[se],_.format!==wn)if(ve!==null)if(Ie){if(B)if(_.layerUpdates.size>0){const me=$d(Ee.width,Ee.height,_.format,_.type);for(const Fe of _.layerUpdates){const Ke=Ee.data.subarray(Fe*me/Ee.data.BYTES_PER_ELEMENT,(Fe+1)*me/Ee.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,Fe,Ee.width,Ee.height,1,ve,Ke,0,0)}_.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,Ee.width,Ee.height,oe.depth,ve,Ee.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,se,De,Ee.width,Ee.height,oe.depth,0,Ee.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?B&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,Ee.width,Ee.height,oe.depth,ve,ke,Ee.data):n.texImage3D(t.TEXTURE_2D_ARRAY,se,De,Ee.width,Ee.height,oe.depth,0,ve,ke,Ee.data)}else{Ie&&at&&n.texStorage2D(t.TEXTURE_2D,de,De,Ce[0].width,Ce[0].height);for(let se=0,ae=Ce.length;se<ae;se++)Ee=Ce[se],_.format!==wn?ve!==null?Ie?B&&n.compressedTexSubImage2D(t.TEXTURE_2D,se,0,0,Ee.width,Ee.height,ve,Ee.data):n.compressedTexImage2D(t.TEXTURE_2D,se,De,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?B&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,Ee.width,Ee.height,ve,ke,Ee.data):n.texImage2D(t.TEXTURE_2D,se,De,Ee.width,Ee.height,0,ve,ke,Ee.data)}else if(_.isDataArrayTexture)if(Ie){if(at&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,De,oe.width,oe.height,oe.depth),B)if(_.layerUpdates.size>0){const se=$d(oe.width,oe.height,_.format,_.type);for(const ae of _.layerUpdates){const me=oe.data.subarray(ae*se/oe.data.BYTES_PER_ELEMENT,(ae+1)*se/oe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ae,oe.width,oe.height,1,ve,ke,me)}_.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,ve,ke,oe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,De,oe.width,oe.height,oe.depth,0,ve,ke,oe.data);else if(_.isData3DTexture)Ie?(at&&n.texStorage3D(t.TEXTURE_3D,de,De,oe.width,oe.height,oe.depth),B&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,ve,ke,oe.data)):n.texImage3D(t.TEXTURE_3D,0,De,oe.width,oe.height,oe.depth,0,ve,ke,oe.data);else if(_.isFramebufferTexture){if(at)if(Ie)n.texStorage2D(t.TEXTURE_2D,de,De,oe.width,oe.height);else{let se=oe.width,ae=oe.height;for(let me=0;me<de;me++)n.texImage2D(t.TEXTURE_2D,me,De,se,ae,0,ve,ke,null),se>>=1,ae>>=1}}else if(Ce.length>0){if(Ie&&at){const se=ne(Ce[0]);n.texStorage2D(t.TEXTURE_2D,de,De,se.width,se.height)}for(let se=0,ae=Ce.length;se<ae;se++)Ee=Ce[se],Ie?B&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,ve,ke,Ee):n.texImage2D(t.TEXTURE_2D,se,De,ve,ke,Ee);_.generateMipmaps=!1}else if(Ie){if(at){const se=ne(oe);n.texStorage2D(t.TEXTURE_2D,de,De,se.width,se.height)}B&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ve,ke,oe)}else n.texImage2D(t.TEXTURE_2D,0,De,ve,ke,oe);m(_)&&h(O),ie.__version=R.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function Q(T,_,N){if(_.image.length!==6)return;const O=ue(T,_),$=_.source;n.bindTexture(t.TEXTURE_CUBE_MAP,T.__webglTexture,t.TEXTURE0+N);const R=i.get($);if($.version!==R.__version||O===!0){n.activeTexture(t.TEXTURE0+N);const ie=it.getPrimaries(it.workingColorSpace),re=_.colorSpace===Ai?null:it.getPrimaries(_.colorSpace),le=_.colorSpace===Ai||ie===re?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const be=_.isCompressedTexture||_.image[0].isCompressedTexture,oe=_.image[0]&&_.image[0].isDataTexture,ve=[];for(let ae=0;ae<6;ae++)!be&&!oe?ve[ae]=x(_.image[ae],!0,r.maxCubemapSize):ve[ae]=oe?_.image[ae].image:_.image[ae],ve[ae]=te(_,ve[ae]);const ke=ve[0],De=s.convert(_.format,_.colorSpace),Ee=s.convert(_.type),Ce=A(_.internalFormat,De,Ee,_.colorSpace),Ie=_.isVideoTexture!==!0,at=R.__version===void 0||O===!0,B=$.dataReady;let de=M(_,ke);_e(t.TEXTURE_CUBE_MAP,_);let se;if(be){Ie&&at&&n.texStorage2D(t.TEXTURE_CUBE_MAP,de,Ce,ke.width,ke.height);for(let ae=0;ae<6;ae++){se=ve[ae].mipmaps;for(let me=0;me<se.length;me++){const Fe=se[me];_.format!==wn?De!==null?Ie?B&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,me,0,0,Fe.width,Fe.height,De,Fe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,me,Ce,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?B&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,me,0,0,Fe.width,Fe.height,De,Ee,Fe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,me,Ce,Fe.width,Fe.height,0,De,Ee,Fe.data)}}}else{if(se=_.mipmaps,Ie&&at){se.length>0&&de++;const ae=ne(ve[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,de,Ce,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(oe){Ie?B&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ve[ae].width,ve[ae].height,De,Ee,ve[ae].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ce,ve[ae].width,ve[ae].height,0,De,Ee,ve[ae].data);for(let me=0;me<se.length;me++){const Ke=se[me].image[ae].image;Ie?B&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,me+1,0,0,Ke.width,Ke.height,De,Ee,Ke.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,me+1,Ce,Ke.width,Ke.height,0,De,Ee,Ke.data)}}else{Ie?B&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,De,Ee,ve[ae]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ce,De,Ee,ve[ae]);for(let me=0;me<se.length;me++){const Fe=se[me];Ie?B&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,me+1,0,0,De,Ee,Fe.image[ae]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,me+1,Ce,De,Ee,Fe.image[ae])}}}m(_)&&h(t.TEXTURE_CUBE_MAP),R.__version=$.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function ce(T,_,N,O,$,R){const ie=s.convert(N.format,N.colorSpace),re=s.convert(N.type),le=A(N.internalFormat,ie,re,N.colorSpace);if(!i.get(_).__hasExternalTextures){const oe=Math.max(1,_.width>>R),ve=Math.max(1,_.height>>R);$===t.TEXTURE_3D||$===t.TEXTURE_2D_ARRAY?n.texImage3D($,R,le,oe,ve,_.depth,0,ie,re,null):n.texImage2D($,R,le,oe,ve,0,ie,re,null)}n.bindFramebuffer(t.FRAMEBUFFER,T),H(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,O,$,i.get(N).__webglTexture,0,ee(_)):($===t.TEXTURE_2D||$>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,O,$,i.get(N).__webglTexture,R),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ye(T,_,N){if(t.bindRenderbuffer(t.RENDERBUFFER,T),_.depthBuffer){const O=_.depthTexture,$=O&&O.isDepthTexture?O.type:null,R=b(_.stencilBuffer,$),ie=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=ee(_);H(_)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,re,R,_.width,_.height):N?t.renderbufferStorageMultisample(t.RENDERBUFFER,re,R,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,R,_.width,_.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ie,t.RENDERBUFFER,T)}else{const O=_.textures;for(let $=0;$<O.length;$++){const R=O[$],ie=s.convert(R.format,R.colorSpace),re=s.convert(R.type),le=A(R.internalFormat,ie,re,R.colorSpace),be=ee(_);N&&H(_)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,be,le,_.width,_.height):H(_)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,be,le,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,le,_.width,_.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Se(T,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),J(_.depthTexture,0);const O=i.get(_.depthTexture).__webglTexture,$=ee(_);if(_.depthTexture.format===jr)H(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,O,0,$):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,O,0);else if(_.depthTexture.format===os)H(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,O,0,$):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,O,0);else throw new Error("Unknown depthTexture format")}function Pe(T){const _=i.get(T),N=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){const O=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),O){const $=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,O.removeEventListener("dispose",$)};O.addEventListener("dispose",$),_.__depthDisposeCallback=$}_.__boundDepthTexture=O}if(T.depthTexture&&!_.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");Se(_.__webglFramebuffer,T)}else if(N){_.__webglDepthbuffer=[];for(let O=0;O<6;O++)if(n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[O]),_.__webglDepthbuffer[O]===void 0)_.__webglDepthbuffer[O]=t.createRenderbuffer(),ye(_.__webglDepthbuffer[O],T,!1);else{const $=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,R=_.__webglDepthbuffer[O];t.bindRenderbuffer(t.RENDERBUFFER,R),t.framebufferRenderbuffer(t.FRAMEBUFFER,$,t.RENDERBUFFER,R)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=t.createRenderbuffer(),ye(_.__webglDepthbuffer,T,!1);else{const O=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,$=_.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,$),t.framebufferRenderbuffer(t.FRAMEBUFFER,O,t.RENDERBUFFER,$)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ae(T,_,N){const O=i.get(T);_!==void 0&&ce(O.__webglFramebuffer,T,T.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),N!==void 0&&Pe(T)}function He(T){const _=T.texture,N=i.get(T),O=i.get(_);T.addEventListener("dispose",E);const $=T.textures,R=T.isWebGLCubeRenderTarget===!0,ie=$.length>1;if(ie||(O.__webglTexture===void 0&&(O.__webglTexture=t.createTexture()),O.__version=_.version,o.memory.textures++),R){N.__webglFramebuffer=[];for(let re=0;re<6;re++)if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer[re]=[];for(let le=0;le<_.mipmaps.length;le++)N.__webglFramebuffer[re][le]=t.createFramebuffer()}else N.__webglFramebuffer[re]=t.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer=[];for(let re=0;re<_.mipmaps.length;re++)N.__webglFramebuffer[re]=t.createFramebuffer()}else N.__webglFramebuffer=t.createFramebuffer();if(ie)for(let re=0,le=$.length;re<le;re++){const be=i.get($[re]);be.__webglTexture===void 0&&(be.__webglTexture=t.createTexture(),o.memory.textures++)}if(T.samples>0&&H(T)===!1){N.__webglMultisampledFramebuffer=t.createFramebuffer(),N.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let re=0;re<$.length;re++){const le=$[re];N.__webglColorRenderbuffer[re]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,N.__webglColorRenderbuffer[re]);const be=s.convert(le.format,le.colorSpace),oe=s.convert(le.type),ve=A(le.internalFormat,be,oe,le.colorSpace,T.isXRRenderTarget===!0),ke=ee(T);t.renderbufferStorageMultisample(t.RENDERBUFFER,ke,ve,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+re,t.RENDERBUFFER,N.__webglColorRenderbuffer[re])}t.bindRenderbuffer(t.RENDERBUFFER,null),T.depthBuffer&&(N.__webglDepthRenderbuffer=t.createRenderbuffer(),ye(N.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(R){n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture),_e(t.TEXTURE_CUBE_MAP,_);for(let re=0;re<6;re++)if(_.mipmaps&&_.mipmaps.length>0)for(let le=0;le<_.mipmaps.length;le++)ce(N.__webglFramebuffer[re][le],T,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+re,le);else ce(N.__webglFramebuffer[re],T,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);m(_)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ie){for(let re=0,le=$.length;re<le;re++){const be=$[re],oe=i.get(be);n.bindTexture(t.TEXTURE_2D,oe.__webglTexture),_e(t.TEXTURE_2D,be),ce(N.__webglFramebuffer,T,be,t.COLOR_ATTACHMENT0+re,t.TEXTURE_2D,0),m(be)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let re=t.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(re=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(re,O.__webglTexture),_e(re,_),_.mipmaps&&_.mipmaps.length>0)for(let le=0;le<_.mipmaps.length;le++)ce(N.__webglFramebuffer[le],T,_,t.COLOR_ATTACHMENT0,re,le);else ce(N.__webglFramebuffer,T,_,t.COLOR_ATTACHMENT0,re,0);m(_)&&h(re),n.unbindTexture()}T.depthBuffer&&Pe(T)}function ct(T){const _=T.textures;for(let N=0,O=_.length;N<O;N++){const $=_[N];if(m($)){const R=T.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ie=i.get($).__webglTexture;n.bindTexture(R,ie),h(R),n.unbindTexture()}}}const g=[],L=[];function X(T){if(T.samples>0){if(H(T)===!1){const _=T.textures,N=T.width,O=T.height;let $=t.COLOR_BUFFER_BIT;const R=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ie=i.get(T),re=_.length>1;if(re)for(let le=0;le<_.length;le++)n.bindFramebuffer(t.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ie.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ie.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ie.__webglFramebuffer);for(let le=0;le<_.length;le++){if(T.resolveDepthBuffer&&(T.depthBuffer&&($|=t.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&($|=t.STENCIL_BUFFER_BIT)),re){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ie.__webglColorRenderbuffer[le]);const be=i.get(_[le]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,be,0)}t.blitFramebuffer(0,0,N,O,0,0,N,O,$,t.NEAREST),l===!0&&(g.length=0,L.length=0,g.push(t.COLOR_ATTACHMENT0+le),T.depthBuffer&&T.resolveDepthBuffer===!1&&(g.push(R),L.push(R),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,L)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,g))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),re)for(let le=0;le<_.length;le++){n.bindFramebuffer(t.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,ie.__webglColorRenderbuffer[le]);const be=i.get(_[le]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ie.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,be,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ie.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const _=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_])}}}function ee(T){return Math.min(r.maxSamples,T.samples)}function H(T){const _=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Z(T){const _=o.render.frame;u.get(T)!==_&&(u.set(T,_),T.update())}function te(T,_){const N=T.colorSpace,O=T.format,$=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||N!==Bi&&N!==Ai&&(it.getTransfer(N)===ut?(O!==wn||$!==hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),_}function ne(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=P,this.setTexture2D=J,this.setTexture2DArray=G,this.setTexture3D=U,this.setTextureCube=q,this.rebindTextures=Ae,this.setupRenderTarget=He,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=H}function HT(t,e){function n(i,r=Ai){let s;const o=it.getTransfer(r);if(i===hi)return t.UNSIGNED_BYTE;if(i===_u)return t.UNSIGNED_SHORT_4_4_4_4;if(i===vu)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Gp)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Hp)return t.BYTE;if(i===Vp)return t.SHORT;if(i===Zs)return t.UNSIGNED_SHORT;if(i===gu)return t.INT;if(i===dr)return t.UNSIGNED_INT;if(i===ai)return t.FLOAT;if(i===io)return t.HALF_FLOAT;if(i===Wp)return t.ALPHA;if(i===qp)return t.RGB;if(i===wn)return t.RGBA;if(i===Xp)return t.LUMINANCE;if(i===$p)return t.LUMINANCE_ALPHA;if(i===jr)return t.DEPTH_COMPONENT;if(i===os)return t.DEPTH_STENCIL;if(i===Yp)return t.RED;if(i===xu)return t.RED_INTEGER;if(i===Kp)return t.RG;if(i===Su)return t.RG_INTEGER;if(i===yu)return t.RGBA_INTEGER;if(i===Ko||i===jo||i===Zo||i===Jo)if(o===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ko)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===jo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Zo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Jo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ko)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===jo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Zo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Jo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===_c||i===vc||i===xc||i===Sc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===_c)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===vc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===xc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Sc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===yc||i===Mc||i===Ec)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===yc||i===Mc)return o===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ec)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===bc||i===Tc||i===wc||i===Ac||i===Cc||i===Rc||i===Pc||i===Lc||i===Dc||i===Ic||i===Uc||i===Nc||i===Fc||i===Oc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===bc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Tc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===wc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ac)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Cc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Rc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Pc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Lc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Dc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ic)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Uc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Nc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Fc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Oc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Qo||i===Bc||i===zc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Qo)return o===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Bc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===zc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===jp||i===kc||i===Hc||i===Vc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Qo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===kc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Hc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Vc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ss?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class VT extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ho extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const GT={type:"move"};class Bl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ho,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ho,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ho,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),h=this._getHandJoint(c,x);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,v=.005;c.inputState.pinching&&d>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(GT)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ho;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const WT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qT=`
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

}`;class XT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Wt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new mi({vertexShader:WT,fragmentShader:qT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new hn(new ls(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $T extends cs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,v=null;const x=new XT,m=n.getContextAttributes();let h=null,A=null;const b=[],M=[],D=new Xe;let E=null;const C=new un;C.layers.enable(1),C.viewport=new Et;const I=new un;I.layers.enable(2),I.viewport=new Et;const S=[C,I],y=new VT;y.layers.enable(1),y.layers.enable(2);let P=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ce=b[Q];return ce===void 0&&(ce=new Bl,b[Q]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(Q){let ce=b[Q];return ce===void 0&&(ce=new Bl,b[Q]=ce),ce.getGripSpace()},this.getHand=function(Q){let ce=b[Q];return ce===void 0&&(ce=new Bl,b[Q]=ce),ce.getHandSpace()};function V(Q){const ce=M.indexOf(Q.inputSource);if(ce===-1)return;const ye=b[ce];ye!==void 0&&(ye.update(Q.inputSource,Q.frame,c||o),ye.dispatchEvent({type:Q.type,data:Q.inputSource}))}function J(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",G);for(let Q=0;Q<b.length;Q++){const ce=M[Q];ce!==null&&(M[Q]=null,b[Q].disconnect(ce))}P=null,F=null,x.reset(),e.setRenderTarget(h),p=null,d=null,f=null,r=null,A=null,Be.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",J),r.addEventListener("inputsourceschange",G),m.xrCompatible!==!0&&await n.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(D),r.renderState.layers===void 0){const ce={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ce),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),A=new hr(p.framebufferWidth,p.framebufferHeight,{format:wn,type:hi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ce=null,ye=null,Se=null;m.depth&&(Se=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ce=m.stencil?os:jr,ye=m.stencil?ss:dr);const Pe={colorFormat:n.RGBA8,depthFormat:Se,scaleFactor:s};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(Pe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),A=new hr(d.textureWidth,d.textureHeight,{format:wn,type:hi,depthTexture:new fm(d.textureWidth,d.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Be.setContext(r),Be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function G(Q){for(let ce=0;ce<Q.removed.length;ce++){const ye=Q.removed[ce],Se=M.indexOf(ye);Se>=0&&(M[Se]=null,b[Se].disconnect(ye))}for(let ce=0;ce<Q.added.length;ce++){const ye=Q.added[ce];let Se=M.indexOf(ye);if(Se===-1){for(let Ae=0;Ae<b.length;Ae++)if(Ae>=M.length){M.push(ye),Se=Ae;break}else if(M[Ae]===null){M[Ae]=ye,Se=Ae;break}if(Se===-1)break}const Pe=b[Se];Pe&&Pe.connect(ye)}}const U=new Y,q=new Y;function k(Q,ce,ye){U.setFromMatrixPosition(ce.matrixWorld),q.setFromMatrixPosition(ye.matrixWorld);const Se=U.distanceTo(q),Pe=ce.projectionMatrix.elements,Ae=ye.projectionMatrix.elements,He=Pe[14]/(Pe[10]-1),ct=Pe[14]/(Pe[10]+1),g=(Pe[9]+1)/Pe[5],L=(Pe[9]-1)/Pe[5],X=(Pe[8]-1)/Pe[0],ee=(Ae[8]+1)/Ae[0],H=He*X,Z=He*ee,te=Se/(-X+ee),ne=te*-X;if(ce.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ne),Q.translateZ(te),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Pe[10]===-1)Q.projectionMatrix.copy(ce.projectionMatrix),Q.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const T=He+te,_=ct+te,N=H-ne,O=Z+(Se-ne),$=g*ct/_*T,R=L*ct/_*T;Q.projectionMatrix.makePerspective(N,O,$,R,T,_),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function fe(Q,ce){ce===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ce.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let ce=Q.near,ye=Q.far;x.texture!==null&&(x.depthNear>0&&(ce=x.depthNear),x.depthFar>0&&(ye=x.depthFar)),y.near=I.near=C.near=ce,y.far=I.far=C.far=ye,(P!==y.near||F!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),P=y.near,F=y.far);const Se=Q.parent,Pe=y.cameras;fe(y,Se);for(let Ae=0;Ae<Pe.length;Ae++)fe(Pe[Ae],Se);Pe.length===2?k(y,C,I):y.projectionMatrix.copy(C.projectionMatrix),pe(Q,y,Se)};function pe(Q,ce,ye){ye===null?Q.matrix.copy(ce.matrixWorld):(Q.matrix.copy(ye.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ce.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ce.projectionMatrix),Q.projectionMatrixInverse.copy(ce.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Wc*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Q){l=Q,d!==null&&(d.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let _e=null;function ue(Q,ce){if(u=ce.getViewerPose(c||o),v=ce,u!==null){const ye=u.views;p!==null&&(e.setRenderTargetFramebuffer(A,p.framebuffer),e.setRenderTarget(A));let Se=!1;ye.length!==y.cameras.length&&(y.cameras.length=0,Se=!0);for(let Ae=0;Ae<ye.length;Ae++){const He=ye[Ae];let ct=null;if(p!==null)ct=p.getViewport(He);else{const L=f.getViewSubImage(d,He);ct=L.viewport,Ae===0&&(e.setRenderTargetTextures(A,L.colorTexture,d.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(A))}let g=S[Ae];g===void 0&&(g=new un,g.layers.enable(Ae),g.viewport=new Et,S[Ae]=g),g.matrix.fromArray(He.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.projectionMatrix.fromArray(He.projectionMatrix),g.projectionMatrixInverse.copy(g.projectionMatrix).invert(),g.viewport.set(ct.x,ct.y,ct.width,ct.height),Ae===0&&(y.matrix.copy(g.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Se===!0&&y.cameras.push(g)}const Pe=r.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")){const Ae=f.getDepthInformation(ye[0]);Ae&&Ae.isValid&&Ae.texture&&x.init(e,Ae,r.renderState)}}for(let ye=0;ye<b.length;ye++){const Se=M[ye],Pe=b[ye];Se!==null&&Pe!==void 0&&Pe.update(Se,ce,c||o)}_e&&_e(Q,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),v=null}const Be=new um;Be.setAnimationLoop(ue),this.setAnimationLoop=function(Q){_e=Q},this.dispose=function(){}}}const ji=new pi,YT=new pt;function KT(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,om(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,A,b,M){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,M)):h.isMeshMatcapMaterial?(s(m,h),v(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),x(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,A,b):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Gt&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Gt&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const A=e.get(h),b=A.envMap,M=A.envMapRotation;b&&(m.envMap.value=b,ji.copy(M),ji.x*=-1,ji.y*=-1,ji.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ji.y*=-1,ji.z*=-1),m.envMapRotation.value.setFromMatrix4(YT.makeRotationFromEuler(ji)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,A,b){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*A,m.scale.value=b*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,A){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Gt&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,h){h.matcap&&(m.matcap.value=h.matcap)}function x(m,h){const A=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function jT(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,b){const M=b.program;i.uniformBlockBinding(A,M)}function c(A,b){let M=r[A.id];M===void 0&&(v(A),M=u(A),r[A.id]=M,A.addEventListener("dispose",m));const D=b.program;i.updateUBOMapping(A,D);const E=e.render.frame;s[A.id]!==E&&(d(A),s[A.id]=E)}function u(A){const b=f();A.__bindingPointIndex=b;const M=t.createBuffer(),D=A.__size,E=A.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,D,E),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,b,M),M}function f(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){const b=r[A.id],M=A.uniforms,D=A.__cache;t.bindBuffer(t.UNIFORM_BUFFER,b);for(let E=0,C=M.length;E<C;E++){const I=Array.isArray(M[E])?M[E]:[M[E]];for(let S=0,y=I.length;S<y;S++){const P=I[S];if(p(P,E,S,D)===!0){const F=P.__offset,V=Array.isArray(P.value)?P.value:[P.value];let J=0;for(let G=0;G<V.length;G++){const U=V[G],q=x(U);typeof U=="number"||typeof U=="boolean"?(P.__data[0]=U,t.bufferSubData(t.UNIFORM_BUFFER,F+J,P.__data)):U.isMatrix3?(P.__data[0]=U.elements[0],P.__data[1]=U.elements[1],P.__data[2]=U.elements[2],P.__data[3]=0,P.__data[4]=U.elements[3],P.__data[5]=U.elements[4],P.__data[6]=U.elements[5],P.__data[7]=0,P.__data[8]=U.elements[6],P.__data[9]=U.elements[7],P.__data[10]=U.elements[8],P.__data[11]=0):(U.toArray(P.__data,J),J+=q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,F,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(A,b,M,D){const E=A.value,C=b+"_"+M;if(D[C]===void 0)return typeof E=="number"||typeof E=="boolean"?D[C]=E:D[C]=E.clone(),!0;{const I=D[C];if(typeof E=="number"||typeof E=="boolean"){if(I!==E)return D[C]=E,!0}else if(I.equals(E)===!1)return I.copy(E),!0}return!1}function v(A){const b=A.uniforms;let M=0;const D=16;for(let C=0,I=b.length;C<I;C++){const S=Array.isArray(b[C])?b[C]:[b[C]];for(let y=0,P=S.length;y<P;y++){const F=S[y],V=Array.isArray(F.value)?F.value:[F.value];for(let J=0,G=V.length;J<G;J++){const U=V[J],q=x(U),k=M%D,fe=k%q.boundary,pe=k+fe;M+=fe,pe!==0&&D-pe<q.storage&&(M+=D-pe),F.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=M,M+=q.storage}}}const E=M%D;return E>0&&(M+=D-E),A.__size=M,A.__cache={},this}function x(A){const b={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(b.boundary=4,b.storage=4):A.isVector2?(b.boundary=8,b.storage=8):A.isVector3||A.isColor?(b.boundary=16,b.storage=12):A.isVector4?(b.boundary=16,b.storage=16):A.isMatrix3?(b.boundary=48,b.storage=48):A.isMatrix4?(b.boundary=64,b.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),b}function m(A){const b=A.target;b.removeEventListener("dispose",m);const M=o.indexOf(b.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function h(){for(const A in r)t.deleteBuffer(r[A]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class ZT{constructor(e={}){const{canvas:n=kS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const p=new Uint32Array(4),v=new Int32Array(4);let x=null,m=null;const h=[],A=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Un,this.toneMapping=Di,this.toneMappingExposure=1;const b=this;let M=!1,D=0,E=0,C=null,I=-1,S=null;const y=new Et,P=new Et;let F=null;const V=new Ye(0);let J=0,G=n.width,U=n.height,q=1,k=null,fe=null;const pe=new Et(0,0,G,U),_e=new Et(0,0,G,U);let ue=!1;const Be=new cm;let Q=!1,ce=!1;const ye=new pt,Se=new Y,Pe=new Et,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function ct(){return C===null?q:1}let g=i;function L(w,z){return n.getContext(w,z)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${mu}`),n.addEventListener("webglcontextlost",se,!1),n.addEventListener("webglcontextrestored",ae,!1),n.addEventListener("webglcontextcreationerror",me,!1),g===null){const z="webgl2";if(g=L(z,w),g===null)throw L(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let X,ee,H,Z,te,ne,T,_,N,O,$,R,ie,re,le,be,oe,ve,ke,De,Ee,Ce,Ie,at;function B(){X=new ib(g),X.init(),Ce=new HT(g,X),ee=new jE(g,X,e,Ce),H=new BT(g),Z=new ob(g),te=new bT,ne=new kT(g,X,H,te,ee,Ce,Z),T=new JE(b),_=new nb(b),N=new dy(g),Ie=new YE(g,N),O=new rb(g,N,Z,Ie),$=new lb(g,O,N,Z),ke=new ab(g,ee,ne),be=new ZE(te),R=new ET(b,T,_,X,ee,Ie,be),ie=new KT(b,te),re=new wT,le=new DT(X),ve=new $E(b,T,_,H,$,d,l),oe=new OT(b,$,ee),at=new jT(g,Z,ee,H),De=new KE(g,X,Z),Ee=new sb(g,X,Z),Z.programs=R.programs,b.capabilities=ee,b.extensions=X,b.properties=te,b.renderLists=re,b.shadowMap=oe,b.state=H,b.info=Z}B();const de=new $T(b,g);this.xr=de,this.getContext=function(){return g},this.getContextAttributes=function(){return g.getContextAttributes()},this.forceContextLoss=function(){const w=X.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=X.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(w){w!==void 0&&(q=w,this.setSize(G,U,!1))},this.getSize=function(w){return w.set(G,U)},this.setSize=function(w,z,K=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=w,U=z,n.width=Math.floor(w*q),n.height=Math.floor(z*q),K===!0&&(n.style.width=w+"px",n.style.height=z+"px"),this.setViewport(0,0,w,z)},this.getDrawingBufferSize=function(w){return w.set(G*q,U*q).floor()},this.setDrawingBufferSize=function(w,z,K){G=w,U=z,q=K,n.width=Math.floor(w*K),n.height=Math.floor(z*K),this.setViewport(0,0,w,z)},this.getCurrentViewport=function(w){return w.copy(y)},this.getViewport=function(w){return w.copy(pe)},this.setViewport=function(w,z,K,j){w.isVector4?pe.set(w.x,w.y,w.z,w.w):pe.set(w,z,K,j),H.viewport(y.copy(pe).multiplyScalar(q).round())},this.getScissor=function(w){return w.copy(_e)},this.setScissor=function(w,z,K,j){w.isVector4?_e.set(w.x,w.y,w.z,w.w):_e.set(w,z,K,j),H.scissor(P.copy(_e).multiplyScalar(q).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(w){H.setScissorTest(ue=w)},this.setOpaqueSort=function(w){k=w},this.setTransparentSort=function(w){fe=w},this.getClearColor=function(w){return w.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor.apply(ve,arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha.apply(ve,arguments)},this.clear=function(w=!0,z=!0,K=!0){let j=0;if(w){let W=!1;if(C!==null){const he=C.texture.format;W=he===yu||he===Su||he===xu}if(W){const he=C.texture.type,Me=he===hi||he===dr||he===Zs||he===ss||he===_u||he===vu,Te=ve.getClearColor(),we=ve.getClearAlpha(),Oe=Te.r,ze=Te.g,Re=Te.b;Me?(p[0]=Oe,p[1]=ze,p[2]=Re,p[3]=we,g.clearBufferuiv(g.COLOR,0,p)):(v[0]=Oe,v[1]=ze,v[2]=Re,v[3]=we,g.clearBufferiv(g.COLOR,0,v))}else j|=g.COLOR_BUFFER_BIT}z&&(j|=g.DEPTH_BUFFER_BIT),K&&(j|=g.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),g.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",se,!1),n.removeEventListener("webglcontextrestored",ae,!1),n.removeEventListener("webglcontextcreationerror",me,!1),re.dispose(),le.dispose(),te.dispose(),T.dispose(),_.dispose(),$.dispose(),Ie.dispose(),at.dispose(),R.dispose(),de.dispose(),de.removeEventListener("sessionstart",Pn),de.removeEventListener("sessionend",wu),zi.stop()};function se(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function ae(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const w=Z.autoReset,z=oe.enabled,K=oe.autoUpdate,j=oe.needsUpdate,W=oe.type;B(),Z.autoReset=w,oe.enabled=z,oe.autoUpdate=K,oe.needsUpdate=j,oe.type=W}function me(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Fe(w){const z=w.target;z.removeEventListener("dispose",Fe),Ke(z)}function Ke(w){mt(w),te.remove(w)}function mt(w){const z=te.get(w).programs;z!==void 0&&(z.forEach(function(K){R.releaseProgram(K)}),w.isShaderMaterial&&R.releaseShaderCache(w))}this.renderBufferDirect=function(w,z,K,j,W,he){z===null&&(z=Ae);const Me=W.isMesh&&W.matrixWorld.determinant()<0,Te=xm(w,z,K,j,W);H.setMaterial(j,Me);let we=K.index,Oe=1;if(j.wireframe===!0){if(we=O.getWireframeAttribute(K),we===void 0)return;Oe=2}const ze=K.drawRange,Re=K.attributes.position;let Je=ze.start*Oe,dt=(ze.start+ze.count)*Oe;he!==null&&(Je=Math.max(Je,he.start*Oe),dt=Math.min(dt,(he.start+he.count)*Oe)),we!==null?(Je=Math.max(Je,0),dt=Math.min(dt,we.count)):Re!=null&&(Je=Math.max(Je,0),dt=Math.min(dt,Re.count));const ht=dt-Je;if(ht<0||ht===1/0)return;Ie.setup(W,j,Te,K,we);let jt,Qe=De;if(we!==null&&(jt=N.get(we),Qe=Ee,Qe.setIndex(jt)),W.isMesh)j.wireframe===!0?(H.setLineWidth(j.wireframeLinewidth*ct()),Qe.setMode(g.LINES)):Qe.setMode(g.TRIANGLES);else if(W.isLine){let Le=j.linewidth;Le===void 0&&(Le=1),H.setLineWidth(Le*ct()),W.isLineSegments?Qe.setMode(g.LINES):W.isLineLoop?Qe.setMode(g.LINE_LOOP):Qe.setMode(g.LINE_STRIP)}else W.isPoints?Qe.setMode(g.POINTS):W.isSprite&&Qe.setMode(g.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)Qe.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(X.get("WEBGL_multi_draw"))Qe.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Le=W._multiDrawStarts,Tt=W._multiDrawCounts,et=W._multiDrawCount,vn=we?N.get(we).bytesPerElement:1,gr=te.get(j).currentProgram.getUniforms();for(let Zt=0;Zt<et;Zt++)gr.setValue(g,"_gl_DrawID",Zt),Qe.render(Le[Zt]/vn,Tt[Zt])}else if(W.isInstancedMesh)Qe.renderInstances(Je,ht,W.count);else if(K.isInstancedBufferGeometry){const Le=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Tt=Math.min(K.instanceCount,Le);Qe.renderInstances(Je,ht,Tt)}else Qe.render(Je,ht)};function bt(w,z,K){w.transparent===!0&&w.side===Mn&&w.forceSinglePass===!1?(w.side=Gt,w.needsUpdate=!0,lo(w,z,K),w.side=Fi,w.needsUpdate=!0,lo(w,z,K),w.side=Mn):lo(w,z,K)}this.compile=function(w,z,K=null){K===null&&(K=w),m=le.get(K),m.init(z),A.push(m),K.traverseVisible(function(W){W.isLight&&W.layers.test(z.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),w!==K&&w.traverseVisible(function(W){W.isLight&&W.layers.test(z.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),m.setupLights();const j=new Set;return w.traverse(function(W){const he=W.material;if(he)if(Array.isArray(he))for(let Me=0;Me<he.length;Me++){const Te=he[Me];bt(Te,K,W),j.add(Te)}else bt(he,K,W),j.add(he)}),A.pop(),m=null,j},this.compileAsync=function(w,z,K=null){const j=this.compile(w,z,K);return new Promise(W=>{function he(){if(j.forEach(function(Me){te.get(Me).currentProgram.isReady()&&j.delete(Me)}),j.size===0){W(w);return}setTimeout(he,10)}X.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Ze=null;function Xn(w){Ze&&Ze(w)}function Pn(){zi.stop()}function wu(){zi.start()}const zi=new um;zi.setAnimationLoop(Xn),typeof self<"u"&&zi.setContext(self),this.setAnimationLoop=function(w){Ze=w,de.setAnimationLoop(w),w===null?zi.stop():zi.start()},de.addEventListener("sessionstart",Pn),de.addEventListener("sessionend",wu),this.render=function(w,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(z),z=de.getCamera()),w.isScene===!0&&w.onBeforeRender(b,w,z,C),m=le.get(w,A.length),m.init(z),A.push(m),ye.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Be.setFromProjectionMatrix(ye),ce=this.localClippingEnabled,Q=be.init(this.clippingPlanes,ce),x=re.get(w,h.length),x.init(),h.push(x),de.enabled===!0&&de.isPresenting===!0){const he=b.xr.getDepthSensingMesh();he!==null&&Va(he,z,-1/0,b.sortObjects)}Va(w,z,0,b.sortObjects),x.finish(),b.sortObjects===!0&&x.sort(k,fe),He=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,He&&ve.addToRenderList(x,w),this.info.render.frame++,Q===!0&&be.beginShadows();const K=m.state.shadowsArray;oe.render(K,w,z),Q===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=x.opaque,W=x.transmissive;if(m.setupLights(),z.isArrayCamera){const he=z.cameras;if(W.length>0)for(let Me=0,Te=he.length;Me<Te;Me++){const we=he[Me];Cu(j,W,w,we)}He&&ve.render(w);for(let Me=0,Te=he.length;Me<Te;Me++){const we=he[Me];Au(x,w,we,we.viewport)}}else W.length>0&&Cu(j,W,w,z),He&&ve.render(w),Au(x,w,z);C!==null&&(ne.updateMultisampleRenderTarget(C),ne.updateRenderTargetMipmap(C)),w.isScene===!0&&w.onAfterRender(b,w,z),Ie.resetDefaultState(),I=-1,S=null,A.pop(),A.length>0?(m=A[A.length-1],Q===!0&&be.setGlobalState(b.clippingPlanes,m.state.camera)):m=null,h.pop(),h.length>0?x=h[h.length-1]:x=null};function Va(w,z,K,j){if(w.visible===!1)return;if(w.layers.test(z.layers)){if(w.isGroup)K=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(z);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Be.intersectsSprite(w)){j&&Pe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ye);const Me=$.update(w),Te=w.material;Te.visible&&x.push(w,Me,Te,K,Pe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Be.intersectsObject(w))){const Me=$.update(w),Te=w.material;if(j&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Pe.copy(w.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Pe.copy(Me.boundingSphere.center)),Pe.applyMatrix4(w.matrixWorld).applyMatrix4(ye)),Array.isArray(Te)){const we=Me.groups;for(let Oe=0,ze=we.length;Oe<ze;Oe++){const Re=we[Oe],Je=Te[Re.materialIndex];Je&&Je.visible&&x.push(w,Me,Je,K,Pe.z,Re)}}else Te.visible&&x.push(w,Me,Te,K,Pe.z,null)}}const he=w.children;for(let Me=0,Te=he.length;Me<Te;Me++)Va(he[Me],z,K,j)}function Au(w,z,K,j){const W=w.opaque,he=w.transmissive,Me=w.transparent;m.setupLightsView(K),Q===!0&&be.setGlobalState(b.clippingPlanes,K),j&&H.viewport(y.copy(j)),W.length>0&&ao(W,z,K),he.length>0&&ao(he,z,K),Me.length>0&&ao(Me,z,K),H.buffers.depth.setTest(!0),H.buffers.depth.setMask(!0),H.buffers.color.setMask(!0),H.setPolygonOffset(!1)}function Cu(w,z,K,j){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[j.id]===void 0&&(m.state.transmissionRenderTarget[j.id]=new hr(1,1,{generateMipmaps:!0,type:X.has("EXT_color_buffer_half_float")||X.has("EXT_color_buffer_float")?io:hi,minFilter:ar,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const he=m.state.transmissionRenderTarget[j.id],Me=j.viewport||y;he.setSize(Me.z,Me.w);const Te=b.getRenderTarget();b.setRenderTarget(he),b.getClearColor(V),J=b.getClearAlpha(),J<1&&b.setClearColor(16777215,.5),b.clear(),He&&ve.render(K);const we=b.toneMapping;b.toneMapping=Di;const Oe=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),m.setupLightsView(j),Q===!0&&be.setGlobalState(b.clippingPlanes,j),ao(w,K,j),ne.updateMultisampleRenderTarget(he),ne.updateRenderTargetMipmap(he),X.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Re=0,Je=z.length;Re<Je;Re++){const dt=z[Re],ht=dt.object,jt=dt.geometry,Qe=dt.material,Le=dt.group;if(Qe.side===Mn&&ht.layers.test(j.layers)){const Tt=Qe.side;Qe.side=Gt,Qe.needsUpdate=!0,Ru(ht,K,j,jt,Qe,Le),Qe.side=Tt,Qe.needsUpdate=!0,ze=!0}}ze===!0&&(ne.updateMultisampleRenderTarget(he),ne.updateRenderTargetMipmap(he))}b.setRenderTarget(Te),b.setClearColor(V,J),Oe!==void 0&&(j.viewport=Oe),b.toneMapping=we}function ao(w,z,K){const j=z.isScene===!0?z.overrideMaterial:null;for(let W=0,he=w.length;W<he;W++){const Me=w[W],Te=Me.object,we=Me.geometry,Oe=j===null?Me.material:j,ze=Me.group;Te.layers.test(K.layers)&&Ru(Te,z,K,we,Oe,ze)}}function Ru(w,z,K,j,W,he){w.onBeforeRender(b,z,K,j,W,he),w.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),W.onBeforeRender(b,z,K,j,w,he),W.transparent===!0&&W.side===Mn&&W.forceSinglePass===!1?(W.side=Gt,W.needsUpdate=!0,b.renderBufferDirect(K,z,j,W,w,he),W.side=Fi,W.needsUpdate=!0,b.renderBufferDirect(K,z,j,W,w,he),W.side=Mn):b.renderBufferDirect(K,z,j,W,w,he),w.onAfterRender(b,z,K,j,W,he)}function lo(w,z,K){z.isScene!==!0&&(z=Ae);const j=te.get(w),W=m.state.lights,he=m.state.shadowsArray,Me=W.state.version,Te=R.getParameters(w,W.state,he,z,K),we=R.getProgramCacheKey(Te);let Oe=j.programs;j.environment=w.isMeshStandardMaterial?z.environment:null,j.fog=z.fog,j.envMap=(w.isMeshStandardMaterial?_:T).get(w.envMap||j.environment),j.envMapRotation=j.environment!==null&&w.envMap===null?z.environmentRotation:w.envMapRotation,Oe===void 0&&(w.addEventListener("dispose",Fe),Oe=new Map,j.programs=Oe);let ze=Oe.get(we);if(ze!==void 0){if(j.currentProgram===ze&&j.lightsStateVersion===Me)return Lu(w,Te),ze}else Te.uniforms=R.getUniforms(w),w.onBeforeCompile(Te,b),ze=R.acquireProgram(Te,we),Oe.set(we,ze),j.uniforms=Te.uniforms;const Re=j.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Re.clippingPlanes=be.uniform),Lu(w,Te),j.needsLights=ym(w),j.lightsStateVersion=Me,j.needsLights&&(Re.ambientLightColor.value=W.state.ambient,Re.lightProbe.value=W.state.probe,Re.directionalLights.value=W.state.directional,Re.directionalLightShadows.value=W.state.directionalShadow,Re.spotLights.value=W.state.spot,Re.spotLightShadows.value=W.state.spotShadow,Re.rectAreaLights.value=W.state.rectArea,Re.ltc_1.value=W.state.rectAreaLTC1,Re.ltc_2.value=W.state.rectAreaLTC2,Re.pointLights.value=W.state.point,Re.pointLightShadows.value=W.state.pointShadow,Re.hemisphereLights.value=W.state.hemi,Re.directionalShadowMap.value=W.state.directionalShadowMap,Re.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Re.spotShadowMap.value=W.state.spotShadowMap,Re.spotLightMatrix.value=W.state.spotLightMatrix,Re.spotLightMap.value=W.state.spotLightMap,Re.pointShadowMap.value=W.state.pointShadowMap,Re.pointShadowMatrix.value=W.state.pointShadowMatrix),j.currentProgram=ze,j.uniformsList=null,ze}function Pu(w){if(w.uniformsList===null){const z=w.currentProgram.getUniforms();w.uniformsList=ea.seqWithValue(z.seq,w.uniforms)}return w.uniformsList}function Lu(w,z){const K=te.get(w);K.outputColorSpace=z.outputColorSpace,K.batching=z.batching,K.batchingColor=z.batchingColor,K.instancing=z.instancing,K.instancingColor=z.instancingColor,K.instancingMorph=z.instancingMorph,K.skinning=z.skinning,K.morphTargets=z.morphTargets,K.morphNormals=z.morphNormals,K.morphColors=z.morphColors,K.morphTargetsCount=z.morphTargetsCount,K.numClippingPlanes=z.numClippingPlanes,K.numIntersection=z.numClipIntersection,K.vertexAlphas=z.vertexAlphas,K.vertexTangents=z.vertexTangents,K.toneMapping=z.toneMapping}function xm(w,z,K,j,W){z.isScene!==!0&&(z=Ae),ne.resetTextureUnits();const he=z.fog,Me=j.isMeshStandardMaterial?z.environment:null,Te=C===null?b.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Bi,we=(j.isMeshStandardMaterial?_:T).get(j.envMap||Me),Oe=j.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,ze=!!K.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Re=!!K.morphAttributes.position,Je=!!K.morphAttributes.normal,dt=!!K.morphAttributes.color;let ht=Di;j.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ht=b.toneMapping);const jt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Qe=jt!==void 0?jt.length:0,Le=te.get(j),Tt=m.state.lights;if(Q===!0&&(ce===!0||w!==S)){const rn=w===S&&j.id===I;be.setState(j,w,rn)}let et=!1;j.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Tt.state.version||Le.outputColorSpace!==Te||W.isBatchedMesh&&Le.batching===!1||!W.isBatchedMesh&&Le.batching===!0||W.isBatchedMesh&&Le.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Le.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Le.instancing===!1||!W.isInstancedMesh&&Le.instancing===!0||W.isSkinnedMesh&&Le.skinning===!1||!W.isSkinnedMesh&&Le.skinning===!0||W.isInstancedMesh&&Le.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Le.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Le.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Le.instancingMorph===!1&&W.morphTexture!==null||Le.envMap!==we||j.fog===!0&&Le.fog!==he||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==be.numPlanes||Le.numIntersection!==be.numIntersection)||Le.vertexAlphas!==Oe||Le.vertexTangents!==ze||Le.morphTargets!==Re||Le.morphNormals!==Je||Le.morphColors!==dt||Le.toneMapping!==ht||Le.morphTargetsCount!==Qe)&&(et=!0):(et=!0,Le.__version=j.version);let vn=Le.currentProgram;et===!0&&(vn=lo(j,z,W));let gr=!1,Zt=!1,Ga=!1;const gt=vn.getUniforms(),vi=Le.uniforms;if(H.useProgram(vn.program)&&(gr=!0,Zt=!0,Ga=!0),j.id!==I&&(I=j.id,Zt=!0),gr||S!==w){gt.setValue(g,"projectionMatrix",w.projectionMatrix),gt.setValue(g,"viewMatrix",w.matrixWorldInverse);const rn=gt.map.cameraPosition;rn!==void 0&&rn.setValue(g,Se.setFromMatrixPosition(w.matrixWorld)),ee.logarithmicDepthBuffer&&gt.setValue(g,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&gt.setValue(g,"isOrthographic",w.isOrthographicCamera===!0),S!==w&&(S=w,Zt=!0,Ga=!0)}if(W.isSkinnedMesh){gt.setOptional(g,W,"bindMatrix"),gt.setOptional(g,W,"bindMatrixInverse");const rn=W.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),gt.setValue(g,"boneTexture",rn.boneTexture,ne))}W.isBatchedMesh&&(gt.setOptional(g,W,"batchingTexture"),gt.setValue(g,"batchingTexture",W._matricesTexture,ne),gt.setOptional(g,W,"batchingIdTexture"),gt.setValue(g,"batchingIdTexture",W._indirectTexture,ne),gt.setOptional(g,W,"batchingColorTexture"),W._colorsTexture!==null&&gt.setValue(g,"batchingColorTexture",W._colorsTexture,ne));const Wa=K.morphAttributes;if((Wa.position!==void 0||Wa.normal!==void 0||Wa.color!==void 0)&&ke.update(W,K,vn),(Zt||Le.receiveShadow!==W.receiveShadow)&&(Le.receiveShadow=W.receiveShadow,gt.setValue(g,"receiveShadow",W.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(vi.envMap.value=we,vi.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&z.environment!==null&&(vi.envMapIntensity.value=z.environmentIntensity),Zt&&(gt.setValue(g,"toneMappingExposure",b.toneMappingExposure),Le.needsLights&&Sm(vi,Ga),he&&j.fog===!0&&ie.refreshFogUniforms(vi,he),ie.refreshMaterialUniforms(vi,j,q,U,m.state.transmissionRenderTarget[w.id]),ea.upload(g,Pu(Le),vi,ne)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(ea.upload(g,Pu(Le),vi,ne),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&gt.setValue(g,"center",W.center),gt.setValue(g,"modelViewMatrix",W.modelViewMatrix),gt.setValue(g,"normalMatrix",W.normalMatrix),gt.setValue(g,"modelMatrix",W.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const rn=j.uniformsGroups;for(let qa=0,Mm=rn.length;qa<Mm;qa++){const Du=rn[qa];at.update(Du,vn),at.bind(Du,vn)}}return vn}function Sm(w,z){w.ambientLightColor.needsUpdate=z,w.lightProbe.needsUpdate=z,w.directionalLights.needsUpdate=z,w.directionalLightShadows.needsUpdate=z,w.pointLights.needsUpdate=z,w.pointLightShadows.needsUpdate=z,w.spotLights.needsUpdate=z,w.spotLightShadows.needsUpdate=z,w.rectAreaLights.needsUpdate=z,w.hemisphereLights.needsUpdate=z}function ym(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(w,z,K){te.get(w.texture).__webglTexture=z,te.get(w.depthTexture).__webglTexture=K;const j=te.get(w);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=K===void 0,j.__autoAllocateDepthBuffer||X.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,z){const K=te.get(w);K.__webglFramebuffer=z,K.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(w,z=0,K=0){C=w,D=z,E=K;let j=!0,W=null,he=!1,Me=!1;if(w){const we=te.get(w);if(we.__useDefaultFramebuffer!==void 0)H.bindFramebuffer(g.FRAMEBUFFER,null),j=!1;else if(we.__webglFramebuffer===void 0)ne.setupRenderTarget(w);else if(we.__hasExternalTextures)ne.rebindTextures(w,te.get(w.texture).__webglTexture,te.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Re=w.depthTexture;if(we.__boundDepthTexture!==Re){if(Re!==null&&te.has(Re)&&(w.width!==Re.image.width||w.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ne.setupDepthRenderbuffer(w)}}const Oe=w.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Me=!0);const ze=te.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ze[z])?W=ze[z][K]:W=ze[z],he=!0):w.samples>0&&ne.useMultisampledRTT(w)===!1?W=te.get(w).__webglMultisampledFramebuffer:Array.isArray(ze)?W=ze[K]:W=ze,y.copy(w.viewport),P.copy(w.scissor),F=w.scissorTest}else y.copy(pe).multiplyScalar(q).floor(),P.copy(_e).multiplyScalar(q).floor(),F=ue;if(H.bindFramebuffer(g.FRAMEBUFFER,W)&&j&&H.drawBuffers(w,W),H.viewport(y),H.scissor(P),H.setScissorTest(F),he){const we=te.get(w.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_CUBE_MAP_POSITIVE_X+z,we.__webglTexture,K)}else if(Me){const we=te.get(w.texture),Oe=z||0;g.framebufferTextureLayer(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,we.__webglTexture,K||0,Oe)}I=-1},this.readRenderTargetPixels=function(w,z,K,j,W,he,Me){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=te.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Me!==void 0&&(Te=Te[Me]),Te){H.bindFramebuffer(g.FRAMEBUFFER,Te);try{const we=w.texture,Oe=we.format,ze=we.type;if(!ee.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=w.width-j&&K>=0&&K<=w.height-W&&g.readPixels(z,K,j,W,Ce.convert(Oe),Ce.convert(ze),he)}finally{const we=C!==null?te.get(C).__webglFramebuffer:null;H.bindFramebuffer(g.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(w,z,K,j,W,he,Me){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=te.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Me!==void 0&&(Te=Te[Me]),Te){H.bindFramebuffer(g.FRAMEBUFFER,Te);try{const we=w.texture,Oe=we.format,ze=we.type;if(!ee.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=w.width-j&&K>=0&&K<=w.height-W){const Re=g.createBuffer();g.bindBuffer(g.PIXEL_PACK_BUFFER,Re),g.bufferData(g.PIXEL_PACK_BUFFER,he.byteLength,g.STREAM_READ),g.readPixels(z,K,j,W,Ce.convert(Oe),Ce.convert(ze),0),g.flush();const Je=g.fenceSync(g.SYNC_GPU_COMMANDS_COMPLETE,0);await HS(g,Je,4);try{g.bindBuffer(g.PIXEL_PACK_BUFFER,Re),g.getBufferSubData(g.PIXEL_PACK_BUFFER,0,he)}finally{g.deleteBuffer(Re),g.deleteSync(Je)}return he}}finally{const we=C!==null?te.get(C).__webglFramebuffer:null;H.bindFramebuffer(g.FRAMEBUFFER,we)}}},this.copyFramebufferToTexture=function(w,z=null,K=0){w.isTexture!==!0&&(Zr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,w=arguments[1]);const j=Math.pow(2,-K),W=Math.floor(w.image.width*j),he=Math.floor(w.image.height*j),Me=z!==null?z.x:0,Te=z!==null?z.y:0;ne.setTexture2D(w,0),g.copyTexSubImage2D(g.TEXTURE_2D,K,0,0,Me,Te,W,he),H.unbindTexture()},this.copyTextureToTexture=function(w,z,K=null,j=null,W=0){w.isTexture!==!0&&(Zr("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,w=arguments[1],z=arguments[2],W=arguments[3]||0,K=null);let he,Me,Te,we,Oe,ze;K!==null?(he=K.max.x-K.min.x,Me=K.max.y-K.min.y,Te=K.min.x,we=K.min.y):(he=w.image.width,Me=w.image.height,Te=0,we=0),j!==null?(Oe=j.x,ze=j.y):(Oe=0,ze=0);const Re=Ce.convert(z.format),Je=Ce.convert(z.type);ne.setTexture2D(z,0),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,z.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,z.unpackAlignment);const dt=g.getParameter(g.UNPACK_ROW_LENGTH),ht=g.getParameter(g.UNPACK_IMAGE_HEIGHT),jt=g.getParameter(g.UNPACK_SKIP_PIXELS),Qe=g.getParameter(g.UNPACK_SKIP_ROWS),Le=g.getParameter(g.UNPACK_SKIP_IMAGES),Tt=w.isCompressedTexture?w.mipmaps[W]:w.image;g.pixelStorei(g.UNPACK_ROW_LENGTH,Tt.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,Tt.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Te),g.pixelStorei(g.UNPACK_SKIP_ROWS,we),w.isDataTexture?g.texSubImage2D(g.TEXTURE_2D,W,Oe,ze,he,Me,Re,Je,Tt.data):w.isCompressedTexture?g.compressedTexSubImage2D(g.TEXTURE_2D,W,Oe,ze,Tt.width,Tt.height,Re,Tt.data):g.texSubImage2D(g.TEXTURE_2D,W,Oe,ze,he,Me,Re,Je,Tt),g.pixelStorei(g.UNPACK_ROW_LENGTH,dt),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,ht),g.pixelStorei(g.UNPACK_SKIP_PIXELS,jt),g.pixelStorei(g.UNPACK_SKIP_ROWS,Qe),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Le),W===0&&z.generateMipmaps&&g.generateMipmap(g.TEXTURE_2D),H.unbindTexture()},this.copyTextureToTexture3D=function(w,z,K=null,j=null,W=0){w.isTexture!==!0&&(Zr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,j=arguments[1]||null,w=arguments[2],z=arguments[3],W=arguments[4]||0);let he,Me,Te,we,Oe,ze,Re,Je,dt;const ht=w.isCompressedTexture?w.mipmaps[W]:w.image;K!==null?(he=K.max.x-K.min.x,Me=K.max.y-K.min.y,Te=K.max.z-K.min.z,we=K.min.x,Oe=K.min.y,ze=K.min.z):(he=ht.width,Me=ht.height,Te=ht.depth,we=0,Oe=0,ze=0),j!==null?(Re=j.x,Je=j.y,dt=j.z):(Re=0,Je=0,dt=0);const jt=Ce.convert(z.format),Qe=Ce.convert(z.type);let Le;if(z.isData3DTexture)ne.setTexture3D(z,0),Le=g.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)ne.setTexture2DArray(z,0),Le=g.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,z.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,z.unpackAlignment);const Tt=g.getParameter(g.UNPACK_ROW_LENGTH),et=g.getParameter(g.UNPACK_IMAGE_HEIGHT),vn=g.getParameter(g.UNPACK_SKIP_PIXELS),gr=g.getParameter(g.UNPACK_SKIP_ROWS),Zt=g.getParameter(g.UNPACK_SKIP_IMAGES);g.pixelStorei(g.UNPACK_ROW_LENGTH,ht.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,ht.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,we),g.pixelStorei(g.UNPACK_SKIP_ROWS,Oe),g.pixelStorei(g.UNPACK_SKIP_IMAGES,ze),w.isDataTexture||w.isData3DTexture?g.texSubImage3D(Le,W,Re,Je,dt,he,Me,Te,jt,Qe,ht.data):z.isCompressedArrayTexture?g.compressedTexSubImage3D(Le,W,Re,Je,dt,he,Me,Te,jt,ht.data):g.texSubImage3D(Le,W,Re,Je,dt,he,Me,Te,jt,Qe,ht),g.pixelStorei(g.UNPACK_ROW_LENGTH,Tt),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,et),g.pixelStorei(g.UNPACK_SKIP_PIXELS,vn),g.pixelStorei(g.UNPACK_SKIP_ROWS,gr),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Zt),W===0&&z.generateMipmaps&&g.generateMipmap(Le),H.unbindTexture()},this.initRenderTarget=function(w){te.get(w).__webglFramebuffer===void 0&&ne.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ne.setTextureCube(w,0):w.isData3DTexture?ne.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ne.setTexture2DArray(w,0):ne.setTexture2D(w,0),H.unbindTexture()},this.resetState=function(){D=0,E=0,C=null,H.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Mu?"display-p3":"srgb",n.unpackColorSpace=it.workingColorSpace===za?"display-p3":"srgb"}}class bu{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ye(e),this.near=n,this.far=i}clone(){return new bu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class JT extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pi,this.environmentIntensity=1,this.environmentRotation=new pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class QT{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Gc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ii()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Zr("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ft=new Y;class ya{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyMatrix4(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyNormalMatrix(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.transformDirection(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=zn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=st(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=st(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=st(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=st(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=st(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=zn(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=zn(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=zn(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=zn(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=st(n,this.array),i=st(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=st(n,this.array),i=st(i,this.array),r=st(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=st(n,this.array),i=st(i,this.array),r=st(r,this.array),s=st(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new mn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ya(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Xc extends us{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Br;const bs=new Y,zr=new Y,kr=new Y,Hr=new Xe,Ts=new Xe,gm=new pt,Vo=new Y,ws=new Y,Go=new Y,Yd=new Xe,zl=new Xe,Kd=new Xe;class jd extends qt{constructor(e=new Xc){if(super(),this.isSprite=!0,this.type="Sprite",Br===void 0){Br=new Rn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new QT(n,5);Br.setIndex([0,1,2,0,2,3]),Br.setAttribute("position",new ya(i,3,0,!1)),Br.setAttribute("uv",new ya(i,2,3,!1))}this.geometry=Br,this.material=e,this.center=new Xe(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),zr.setFromMatrixScale(this.matrixWorld),gm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),kr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&zr.multiplyScalar(-kr.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;Wo(Vo.set(-.5,-.5,0),kr,o,zr,r,s),Wo(ws.set(.5,-.5,0),kr,o,zr,r,s),Wo(Go.set(.5,.5,0),kr,o,zr,r,s),Yd.set(0,0),zl.set(1,0),Kd.set(1,1);let a=e.ray.intersectTriangle(Vo,ws,Go,!1,bs);if(a===null&&(Wo(ws.set(-.5,.5,0),kr,o,zr,r,s),zl.set(0,1),a=e.ray.intersectTriangle(Vo,Go,ws,!1,bs),a===null))return;const l=e.ray.origin.distanceTo(bs);l<e.near||l>e.far||n.push({distance:l,point:bs.clone(),uv:bn.getInterpolation(bs,Vo,ws,Go,Yd,zl,Kd,new Xe),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Wo(t,e,n,i,r,s){Hr.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(Ts.x=s*Hr.x-r*Hr.y,Ts.y=r*Hr.x+s*Hr.y):Ts.copy(Hr),t.copy(e),t.x+=Ts.x,t.y+=Ts.y,t.applyMatrix4(gm)}class _m extends us{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Zd=new pt,$c=new tm,qo=new ka,Xo=new Y;class ew extends qt{constructor(e=new Rn,n=new _m){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),qo.copy(i.boundingSphere),qo.applyMatrix4(r),qo.radius+=s,e.ray.intersectsSphere(qo)===!1)return;Zd.copy(r).invert(),$c.copy(e.ray).applyMatrix4(Zd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let v=d,x=p;v<x;v++){const m=c.getX(v);Xo.fromBufferAttribute(f,m),Jd(Xo,m,l,r,e,n,this)}}else{const d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let v=d,x=p;v<x;v++)Xo.fromBufferAttribute(f,v),Jd(Xo,v,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Jd(t,e,n,i,r,s,o){const a=$c.distanceSqToPoint(t);if(a<n){const l=new Y;$c.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class ds extends Wt{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Tu extends Rn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new Y,d=new Y,p=[],v=[],x=[],m=[];for(let h=0;h<=i;h++){const A=[],b=h/i;let M=0;h===0&&o===0?M=.5/n:h===i&&l===Math.PI&&(M=-.5/n);for(let D=0;D<=n;D++){const E=D/n;f.x=-e*Math.cos(r+E*s)*Math.sin(o+b*a),f.y=e*Math.cos(o+b*a),f.z=e*Math.sin(r+E*s)*Math.sin(o+b*a),v.push(f.x,f.y,f.z),d.copy(f).normalize(),x.push(d.x,d.y,d.z),m.push(E+M,1-b),A.push(c++)}u.push(A)}for(let h=0;h<i;h++)for(let A=0;A<n;A++){const b=u[h][A+1],M=u[h][A],D=u[h+1][A],E=u[h+1][A+1];(h!==0||o>0)&&p.push(b,M,E),(h!==i-1||l<Math.PI)&&p.push(M,D,E)}this.setIndex(p),this.setAttribute("position",new Hn(v,3)),this.setAttribute("normal",new Hn(x,3)),this.setAttribute("uv",new Hn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class tw{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Qd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Qd();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Qd(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mu);function nw(){const e=document.createElement("canvas");e.width=256,e.height=256;const n=e.getContext("2d"),i=7;for(let s=0;s<i;s++){const o=256*(.28+Math.random()*.44),a=256*(.3+Math.random()*.4),l=256*(.1+Math.random()*.16),c=n.createRadialGradient(o,a,0,o,a,l);c.addColorStop(0,"rgba(255,255,255,0.55)"),c.addColorStop(.6,"rgba(255,255,255,0.22)"),c.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=c,n.beginPath(),n.arc(o,a,l,0,Math.PI*2),n.fill()}return new ds(e)}function iw(){const e=document.createElement("canvas");e.width=64,e.height=64;const n=e.getContext("2d"),i=n.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);return i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.35,"rgba(238,231,214,0.7)"),i.addColorStop(1,"rgba(238,231,214,0)"),n.fillStyle=i,n.fillRect(0,0,64,64),new ds(e)}function rw(){const e=document.createElement("canvas");e.width=64,e.height=64;const n=e.getContext("2d");n.translate(64/2,64/2),n.rotate(Math.PI/5);const i=n.createRadialGradient(0,0,2,0,0,64/2.2);return i.addColorStop(0,"rgba(255,255,255,0.95)"),i.addColorStop(.7,"rgba(226,218,198,0.75)"),i.addColorStop(1,"rgba(226,218,198,0)"),n.fillStyle=i,n.beginPath(),n.ellipse(0,0,64*.34,64*.2,0,0,Math.PI*2),n.fill(),new ds(e)}function sw(){const e=document.createElement("canvas");e.width=64,e.height=64;const n=e.getContext("2d");n.translate(64/2,64/2),n.rotate(-Math.PI/5);const i=n.createRadialGradient(0,0,2,0,0,64/2.2);return i.addColorStop(0,"rgba(168,196,124,0.95)"),i.addColorStop(.7,"rgba(138,172,104,0.75)"),i.addColorStop(1,"rgba(138,172,104,0)"),n.fillStyle=i,n.beginPath(),n.ellipse(0,0,64*.36,64*.18,0,0,Math.PI*2),n.fill(),n.strokeStyle="rgba(255,255,255,0.5)",n.lineWidth=1.4,n.beginPath(),n.moveTo(-64*.3,0),n.lineTo(64*.3,0),n.stroke(),new ds(e)}function ow(){const e=document.createElement("canvas");e.width=256,e.height=256;const n=e.getContext("2d"),i=n.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);return i.addColorStop(0,"rgba(255,252,240,1)"),i.addColorStop(.18,"rgba(255,246,214,0.85)"),i.addColorStop(.45,"rgba(244,232,192,0.32)"),i.addColorStop(1,"rgba(244,232,192,0)"),n.fillStyle=i,n.fillRect(0,0,256,256),new ds(e)}function aw(){const t=document.createElement("canvas");t.width=64,t.height=256;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,256);n.addColorStop(0,"rgba(255,255,255,0.62)"),n.addColorStop(.55,"rgba(236,239,243,0.18)"),n.addColorStop(1,"rgba(236,239,243,0)"),e.fillStyle=n,e.fillRect(0,0,64,256);const i=e.createLinearGradient(0,0,64,0);return i.addColorStop(0,"rgba(0,0,0,1)"),i.addColorStop(.5,"rgba(0,0,0,0)"),i.addColorStop(1,"rgba(0,0,0,1)"),e.globalCompositeOperation="destination-out",e.fillStyle=i,e.fillRect(0,0,64,256),new ds(t)}function lw(t){const e=new JT;e.fog=new bu(16315626,20,52);const n=new un(60,window.innerWidth/window.innerHeight,.1,200);n.position.set(0,7.5,16);const i=new ZT({antialias:!0,alpha:!0});i.setClearColor(0,0),i.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.setSize(window.innerWidth,window.innerHeight),t.appendChild(i.domElement);const r={uTop:{value:new Ye(15130576)},uHorizon:{value:new Ye(16447212)},uTime:{value:0}},s=new mi({uniforms:r,side:Gt,depthWrite:!1,vertexShader:`
      varying vec3 vPos;
      void main() {
        vPos = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform vec3 uTop;
      uniform vec3 uHorizon;
      uniform float uTime;
      varying vec3 vPos;
      void main() {
        // 归一化高度：-1(下) ~ 1(上)
        float h = normalize(vPos).y;
        float t = smoothstep(-0.15, 0.75, h);
        // 轻微的时间呼吸：暖色微微起伏
        vec3 top = uTop * (1.0 + 0.03 * sin(uTime * 0.25));
        vec3 col = mix(uHorizon, top, t);
        gl_FragColor = vec4(col, 1.0);
      }
    `}),o=new hn(new Tu(90,32,24),s);o.renderOrder=-10,e.add(o);const a=new Xc({map:ow(),transparent:!0,opacity:.6,depthWrite:!1,fog:!1}),l=new jd(a);l.position.set(11,9.5,-34),l.scale.set(16,16,1),e.add(l);const c=nw(),u=[],f=46;function d(U,q,k,fe,pe){const _e=new Xc({map:c,color:pe,transparent:!0,opacity:fe,depthWrite:!1,fog:!1}),ue=new jd(_e),Be=(Math.random()-.5)*f;ue.position.set(Be,q,U),ue.scale.set(k,k*.55,1),e.add(ue),u.push({sprite:ue,speed:.15+Math.random()*.3,baseY:q,bobPhase:Math.random()*Math.PI*2,bobAmp:.15+Math.random()*.3,span:f})}for(let U=0;U<30;U++){const q=Math.random();d(-2-q*20,-3.4-q*1.6+Math.random()*.8,6+q*9,.55+Math.random()*.35,U%3===0?15525330:16776694)}for(let U=0;U<12;U++)d(-26-Math.random()*10,3+Math.random()*5,14+Math.random()*8,.18+Math.random()*.14,16184038);const p=iw();function v(U,q,k,fe,pe){const _e=new Float32Array(U*3),ue=new Float32Array(U),Be=new Float32Array(U),Q=new Float32Array(U),ce=new Float32Array(U);for(let Ae=0;Ae<U;Ae++)ue[Ae]=(Math.random()-.5)*40,Be[Ae]=-2-Math.random()*22,Q[Ae]=.25+Math.random()*.5,ce[Ae]=Math.random()*Math.PI*2,_e[Ae*3]=ue[Ae],_e[Ae*3+1]=Math.random()*pe-4,_e[Ae*3+2]=Be[Ae];const ye=new Rn;ye.setAttribute("position",new mn(_e,3));const Se=new _m({size:q,map:p,color:fe,transparent:!0,opacity:k,depthWrite:!1,sizeAttenuation:!0}),Pe=new ew(ye,Se);return e.add(Pe),{points:Pe,baseX:ue,baseZ:Be,speeds:Q,phases:ce,yRange:pe}}const x=v(130,.22,.55,13288108,14),m=v(60,.32,.5,14998984,13),h=v(50,.46,.7,16774877,12),A=x.points.geometry.getAttribute("position"),b=m.points.geometry.getAttribute("position"),M=h.points.geometry.getAttribute("position"),D=rw(),E=sw(),C=[],I=new ls(.34,.22);for(let U=0;U<44;U++){const q=U%3===0,k=new Sa({map:q?E:D,transparent:!0,opacity:.5+Math.random()*.4,depthWrite:!1,side:Mn}),fe=new hn(I,k);fe.position.set((Math.random()-.5)*30,-4+Math.random()*14,-1-Math.random()*14),fe.rotation.z=Math.random()*Math.PI*2,e.add(fe),C.push({mesh:fe,fallSpeed:.25+Math.random()*.45,rotSpeed:.4+Math.random()*1.2,swayPhase:Math.random()*Math.PI*2,swayAmp:.6+Math.random()*1.2})}const S=aw(),y=[];for(let U=0;U<5;U++){const q=new Sa({map:S,transparent:!0,opacity:0,depthWrite:!1,side:Mn,fog:!1}),k=new hn(new ls(3.2+U*1.1,26),q);q.color=new Ye(16644068),k.position.set(-14+U*7+Math.random()*2,4,-14-U*3),k.rotation.z=.35+Math.random()*.2,e.add(k),y.push({mesh:k,mat:q,phase:Math.random()*Math.PI*2,baseOpacity:.16+Math.random()*.1})}const P={x:0,y:0};let F=0;window.addEventListener("mousemove",U=>{P.x=U.clientX/window.innerWidth*2-1,P.y=U.clientY/window.innerHeight*2-1}),window.addEventListener("scroll",()=>{const U=Math.max(document.documentElement.scrollHeight-window.innerHeight,1);F=window.scrollY/U}),window.addEventListener("resize",()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight)});const V=new tw;let J=0;function G(){requestAnimationFrame(G);const U=Math.min(V.getDelta(),.05);J+=U;const q=J;r.uTime.value=q;for(const ue of u)ue.sprite.position.x+=ue.speed*U,ue.sprite.position.x>ue.span/2&&(ue.sprite.position.x=-ue.span/2),ue.sprite.position.y=ue.baseY+Math.sin(q*.3+ue.bobPhase)*ue.bobAmp;const k=(ue,Be)=>{for(let Q=0;Q<ue.speeds.length;Q++){let ce=Be.getY(Q)+ue.speeds[Q]*U;ce>ue.yRange-4&&(ce=-4),Be.setY(Q,ce),Be.setX(Q,ue.baseX[Q]+Math.sin(q*.5+ue.phases[Q])*.6)}Be.needsUpdate=!0};k(x,A),k(m,b),k(h,M),h.points.material.opacity=.62+.24*Math.sin(q*2.6)*Math.sin(q*1.3);for(const ue of C)ue.mesh.position.y-=ue.fallSpeed*U,ue.mesh.position.x+=Math.sin(q*.8+ue.swayPhase)*.004*ue.swayAmp,ue.mesh.rotation.z+=ue.rotSpeed*U,ue.mesh.rotation.x+=ue.rotSpeed*.6*U,ue.mesh.position.y<-6&&(ue.mesh.position.y=10+Math.random()*4,ue.mesh.position.x=(Math.random()-.5)*30);a.opacity=.55+.12*Math.sin(q*.35);for(const ue of y)ue.mat.opacity=ue.baseOpacity*(.65+.35*Math.sin(q*.4+ue.phase));const fe=P.x*2.4,pe=7.5-F*9-P.y*1.2,_e=16-F*4;n.position.x+=(fe-n.position.x)*.04,n.position.y+=(pe-n.position.y)*.04,n.position.z+=(_e-n.position.z)*.04,n.lookAt(0,-1-F*5,0),o.position.copy(n.position),i.render(e,n)}G()}const vm=new IntersectionObserver(t=>{for(const e of t)e.isIntersecting&&(e.target.classList.add("visible"),vm.unobserve(e.target))},{threshold:.12}),cw={mounted(t,e){t.classList.add("reveal");const n=Math.min((e.value??0)*70,420);n>0&&(t.style.transitionDelay=`${n}ms`),vm.observe(t)}},eh=document.getElementById("webgl-bg");eh&&lw(eh);Y_(Gx).use(Bv,{plugins:{},lang:zv}).directive("reveal",cw).mount("#app");
