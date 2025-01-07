(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function $u(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Et={},Mo=[],ar=()=>{},C0=()=>!1,gl=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Wu=n=>n.startsWith("onUpdate:"),Ft=Object.assign,ju=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},A0=Object.prototype.hasOwnProperty,gt=(n,e)=>A0.call(n,e),He=Array.isArray,To=n=>vl(n)==="[object Map]",Op=n=>vl(n)==="[object Set]",je=n=>typeof n=="function",Lt=n=>typeof n=="string",zr=n=>typeof n=="symbol",Rt=n=>n!==null&&typeof n=="object",Bp=n=>(Rt(n)||je(n))&&je(n.then)&&je(n.catch),Up=Object.prototype.toString,vl=n=>Up.call(n),R0=n=>vl(n).slice(8,-1),Fp=n=>vl(n)==="[object Object]",Xu=n=>Lt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,_s=$u(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),bl=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},P0=/-(\w)/g,On=bl(n=>n.replace(P0,(e,t)=>t?t.toUpperCase():"")),L0=/\B([A-Z])/g,$i=bl(n=>n.replace(L0,"-$1").toLowerCase()),_l=bl(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ol=bl(n=>n?`on${_l(n)}`:""),ui=(n,e)=>!Object.is(n,e),Bl=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},zp=(n,e,t,r=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:r,value:t})},I0=n=>{const e=parseFloat(n);return isNaN(e)?n:e},k0=n=>{const e=Lt(n)?Number(n):NaN;return isNaN(e)?n:e};let Kd;const yl=()=>Kd||(Kd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function lr(n){if(He(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],i=Lt(r)?B0(r):lr(r);if(i)for(const o in i)e[o]=i[o]}return e}else if(Lt(n)||Rt(n))return n}const D0=/;(?![^(]*\))/g,N0=/:([^]+)/,O0=/\/\*[^]*?\*\//g;function B0(n){const e={};return n.replace(O0,"").split(D0).forEach(t=>{if(t){const r=t.split(N0);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function mi(n){let e="";if(Lt(n))e=n;else if(He(n))for(let t=0;t<n.length;t++){const r=mi(n[t]);r&&(e+=r+" ")}else if(Rt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}function Ki(n){if(!n)return null;let{class:e,style:t}=n;return e&&!Lt(e)&&(n.class=mi(e)),t&&(n.style=lr(t)),n}const U0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",F0=$u(U0);function Hp(n){return!!n||n===""}const Vp=n=>!!(n&&n.__v_isRef===!0),Kt=n=>Lt(n)?n:n==null?"":He(n)||Rt(n)&&(n.toString===Up||!je(n.toString))?Vp(n)?Kt(n.value):JSON.stringify(n,Gp,2):String(n),Gp=(n,e)=>Vp(e)?Gp(n,e.value):To(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,i],o)=>(t[Ul(r,o)+" =>"]=i,t),{})}:Op(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Ul(t))}:zr(e)?Ul(e):Rt(e)&&!He(e)&&!Fp(e)?String(e):e,Ul=(n,e="")=>{var t;return zr(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Mn;class z0{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Mn,!e&&Mn&&(this.index=(Mn.scopes||(Mn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Mn;try{return Mn=this,e()}finally{Mn=t}}}on(){Mn=this}off(){Mn=this.parent}stop(e){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function H0(){return Mn}let Ct;const Fl=new WeakSet;class $p{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Mn&&Mn.active&&Mn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Fl.has(this)&&(Fl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||jp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Yd(this),Xp(this);const e=Ct,t=Jn;Ct=this,Jn=!0;try{return this.fn()}finally{Kp(this),Ct=e,Jn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)qu(e);this.deps=this.depsTail=void 0,Yd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Fl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Oc(this)&&this.run()}get dirty(){return Oc(this)}}let Wp=0,ys,xs;function jp(n,e=!1){if(n.flags|=8,e){n.next=xs,xs=n;return}n.next=ys,ys=n}function Ku(){Wp++}function Yu(){if(--Wp>0)return;if(xs){let e=xs;for(xs=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;ys;){let e=ys;for(ys=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){n||(n=r)}e=t}}if(n)throw n}function Xp(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Kp(n){let e,t=n.depsTail,r=t;for(;r;){const i=r.prevDep;r.version===-1?(r===t&&(t=i),qu(r),V0(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=i}n.deps=e,n.depsTail=t}function Oc(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Yp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Yp(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Ls))return;n.globalVersion=Ls;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!Oc(n)){n.flags&=-3;return}const t=Ct,r=Jn;Ct=n,Jn=!0;try{Xp(n);const i=n.fn(n._value);(e.version===0||ui(i,n._value))&&(n._value=i,e.version++)}catch(i){throw e.version++,i}finally{Ct=t,Jn=r,Kp(n),n.flags&=-3}}function qu(n,e=!1){const{dep:t,prevSub:r,nextSub:i}=n;if(r&&(r.nextSub=i,n.prevSub=void 0),i&&(i.prevSub=r,n.nextSub=void 0),t.subs===n&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let o=t.computed.deps;o;o=o.nextDep)qu(o,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function V0(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Jn=!0;const qp=[];function _i(){qp.push(Jn),Jn=!1}function yi(){const n=qp.pop();Jn=n===void 0?!0:n}function Yd(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Ct;Ct=void 0;try{e()}finally{Ct=t}}}let Ls=0;class G0{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Zu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Ct||!Jn||Ct===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Ct)t=this.activeLink=new G0(Ct,this),Ct.deps?(t.prevDep=Ct.depsTail,Ct.depsTail.nextDep=t,Ct.depsTail=t):Ct.deps=Ct.depsTail=t,Zp(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=Ct.depsTail,t.nextDep=void 0,Ct.depsTail.nextDep=t,Ct.depsTail=t,Ct.deps===t&&(Ct.deps=r)}return t}trigger(e){this.version++,Ls++,this.notify(e)}notify(e){Ku();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Yu()}}}function Zp(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Zp(r)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Bc=new WeakMap,zi=Symbol(""),Uc=Symbol(""),Is=Symbol("");function tn(n,e,t){if(Jn&&Ct){let r=Bc.get(n);r||Bc.set(n,r=new Map);let i=r.get(t);i||(r.set(t,i=new Zu),i.map=r,i.key=t),i.track()}}function Lr(n,e,t,r,i,o){const s=Bc.get(n);if(!s){Ls++;return}const a=l=>{l&&l.trigger()};if(Ku(),e==="clear")s.forEach(a);else{const l=He(n),c=l&&Xu(t);if(l&&t==="length"){const u=Number(r);s.forEach((d,f)=>{(f==="length"||f===Is||!zr(f)&&f>=u)&&a(d)})}else switch((t!==void 0||s.has(void 0))&&a(s.get(t)),c&&a(s.get(Is)),e){case"add":l?c&&a(s.get("length")):(a(s.get(zi)),To(n)&&a(s.get(Uc)));break;case"delete":l||(a(s.get(zi)),To(n)&&a(s.get(Uc)));break;case"set":To(n)&&a(s.get(zi));break}}Yu()}function Yi(n){const e=ft(n);return e===n?e:(tn(e,"iterate",Is),Nn(n)?e:e.map(nn))}function xl(n){return tn(n=ft(n),"iterate",Is),n}const $0={__proto__:null,[Symbol.iterator](){return zl(this,Symbol.iterator,nn)},concat(...n){return Yi(this).concat(...n.map(e=>He(e)?Yi(e):e))},entries(){return zl(this,"entries",n=>(n[1]=nn(n[1]),n))},every(n,e){return br(this,"every",n,e,void 0,arguments)},filter(n,e){return br(this,"filter",n,e,t=>t.map(nn),arguments)},find(n,e){return br(this,"find",n,e,nn,arguments)},findIndex(n,e){return br(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return br(this,"findLast",n,e,nn,arguments)},findLastIndex(n,e){return br(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return br(this,"forEach",n,e,void 0,arguments)},includes(...n){return Hl(this,"includes",n)},indexOf(...n){return Hl(this,"indexOf",n)},join(n){return Yi(this).join(n)},lastIndexOf(...n){return Hl(this,"lastIndexOf",n)},map(n,e){return br(this,"map",n,e,void 0,arguments)},pop(){return ts(this,"pop")},push(...n){return ts(this,"push",n)},reduce(n,...e){return qd(this,"reduce",n,e)},reduceRight(n,...e){return qd(this,"reduceRight",n,e)},shift(){return ts(this,"shift")},some(n,e){return br(this,"some",n,e,void 0,arguments)},splice(...n){return ts(this,"splice",n)},toReversed(){return Yi(this).toReversed()},toSorted(n){return Yi(this).toSorted(n)},toSpliced(...n){return Yi(this).toSpliced(...n)},unshift(...n){return ts(this,"unshift",n)},values(){return zl(this,"values",nn)}};function zl(n,e,t){const r=xl(n),i=r[e]();return r!==n&&!Nn(n)&&(i._next=i.next,i.next=()=>{const o=i._next();return o.value&&(o.value=t(o.value)),o}),i}const W0=Array.prototype;function br(n,e,t,r,i,o){const s=xl(n),a=s!==n&&!Nn(n),l=s[e];if(l!==W0[e]){const d=l.apply(n,o);return a?nn(d):d}let c=t;s!==n&&(a?c=function(d,f){return t.call(this,nn(d),f,n)}:t.length>2&&(c=function(d,f){return t.call(this,d,f,n)}));const u=l.call(s,c,r);return a&&i?i(u):u}function qd(n,e,t,r){const i=xl(n);let o=t;return i!==n&&(Nn(n)?t.length>3&&(o=function(s,a,l){return t.call(this,s,a,l,n)}):o=function(s,a,l){return t.call(this,s,nn(a),l,n)}),i[e](o,...r)}function Hl(n,e,t){const r=ft(n);tn(r,"iterate",Is);const i=r[e](...t);return(i===-1||i===!1)&&td(t[0])?(t[0]=ft(t[0]),r[e](...t)):i}function ts(n,e,t=[]){_i(),Ku();const r=ft(n)[e].apply(n,t);return Yu(),yi(),r}const j0=$u("__proto__,__v_isRef,__isVue"),Jp=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(zr));function X0(n){zr(n)||(n=String(n));const e=ft(this);return tn(e,"has",n),e.hasOwnProperty(n)}class Qp{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){if(t==="__v_skip")return e.__v_skip;const i=this._isReadonly,o=this._isShallow;if(t==="__v_isReactive")return!i;if(t==="__v_isReadonly")return i;if(t==="__v_isShallow")return o;if(t==="__v_raw")return r===(i?o?rv:rm:o?nm:tm).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const s=He(e);if(!i){let l;if(s&&(l=$0[t]))return l;if(t==="hasOwnProperty")return X0}const a=Reflect.get(e,t,rn(e)?e:r);return(zr(t)?Jp.has(t):j0(t))||(i||tn(e,"get",t),o)?a:rn(a)?s&&Xu(t)?a:a.value:Rt(a)?i?Qu(a):Sl(a):a}}class em extends Qp{constructor(e=!1){super(!1,e)}set(e,t,r,i){let o=e[t];if(!this._isShallow){const l=Hi(o);if(!Nn(r)&&!Hi(r)&&(o=ft(o),r=ft(r)),!He(e)&&rn(o)&&!rn(r))return l?!1:(o.value=r,!0)}const s=He(e)&&Xu(t)?Number(t)<e.length:gt(e,t),a=Reflect.set(e,t,r,rn(e)?e:i);return e===ft(i)&&(s?ui(r,o)&&Lr(e,"set",t,r):Lr(e,"add",t,r)),a}deleteProperty(e,t){const r=gt(e,t);e[t];const i=Reflect.deleteProperty(e,t);return i&&r&&Lr(e,"delete",t,void 0),i}has(e,t){const r=Reflect.has(e,t);return(!zr(t)||!Jp.has(t))&&tn(e,"has",t),r}ownKeys(e){return tn(e,"iterate",He(e)?"length":zi),Reflect.ownKeys(e)}}class K0 extends Qp{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Y0=new em,q0=new K0,Z0=new em(!0);const Fc=n=>n,la=n=>Reflect.getPrototypeOf(n);function J0(n,e,t){return function(...r){const i=this.__v_raw,o=ft(i),s=To(o),a=n==="entries"||n===Symbol.iterator&&s,l=n==="keys"&&s,c=i[n](...r),u=t?Fc:e?zc:nn;return!e&&tn(o,"iterate",l?Uc:zi),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function ca(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Q0(n,e){const t={get(i){const o=this.__v_raw,s=ft(o),a=ft(i);n||(ui(i,a)&&tn(s,"get",i),tn(s,"get",a));const{has:l}=la(s),c=e?Fc:n?zc:nn;if(l.call(s,i))return c(o.get(i));if(l.call(s,a))return c(o.get(a));o!==s&&o.get(i)},get size(){const i=this.__v_raw;return!n&&tn(ft(i),"iterate",zi),Reflect.get(i,"size",i)},has(i){const o=this.__v_raw,s=ft(o),a=ft(i);return n||(ui(i,a)&&tn(s,"has",i),tn(s,"has",a)),i===a?o.has(i):o.has(i)||o.has(a)},forEach(i,o){const s=this,a=s.__v_raw,l=ft(a),c=e?Fc:n?zc:nn;return!n&&tn(l,"iterate",zi),a.forEach((u,d)=>i.call(o,c(u),c(d),s))}};return Ft(t,n?{add:ca("add"),set:ca("set"),delete:ca("delete"),clear:ca("clear")}:{add(i){!e&&!Nn(i)&&!Hi(i)&&(i=ft(i));const o=ft(this);return la(o).has.call(o,i)||(o.add(i),Lr(o,"add",i,i)),this},set(i,o){!e&&!Nn(o)&&!Hi(o)&&(o=ft(o));const s=ft(this),{has:a,get:l}=la(s);let c=a.call(s,i);c||(i=ft(i),c=a.call(s,i));const u=l.call(s,i);return s.set(i,o),c?ui(o,u)&&Lr(s,"set",i,o):Lr(s,"add",i,o),this},delete(i){const o=ft(this),{has:s,get:a}=la(o);let l=s.call(o,i);l||(i=ft(i),l=s.call(o,i)),a&&a.call(o,i);const c=o.delete(i);return l&&Lr(o,"delete",i,void 0),c},clear(){const i=ft(this),o=i.size!==0,s=i.clear();return o&&Lr(i,"clear",void 0,void 0),s}}),["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=J0(i,n,e)}),t}function Ju(n,e){const t=Q0(n,e);return(r,i,o)=>i==="__v_isReactive"?!n:i==="__v_isReadonly"?n:i==="__v_raw"?r:Reflect.get(gt(t,i)&&i in r?t:r,i,o)}const ev={get:Ju(!1,!1)},tv={get:Ju(!1,!0)},nv={get:Ju(!0,!1)};const tm=new WeakMap,nm=new WeakMap,rm=new WeakMap,rv=new WeakMap;function iv(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ov(n){return n.__v_skip||!Object.isExtensible(n)?0:iv(R0(n))}function Sl(n){return Hi(n)?n:ed(n,!1,Y0,ev,tm)}function sv(n){return ed(n,!1,Z0,tv,nm)}function Qu(n){return ed(n,!0,q0,nv,rm)}function ed(n,e,t,r,i){if(!Rt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const o=i.get(n);if(o)return o;const s=ov(n);if(s===0)return n;const a=new Proxy(n,s===2?r:t);return i.set(n,a),a}function Eo(n){return Hi(n)?Eo(n.__v_raw):!!(n&&n.__v_isReactive)}function Hi(n){return!!(n&&n.__v_isReadonly)}function Nn(n){return!!(n&&n.__v_isShallow)}function td(n){return n?!!n.__v_raw:!1}function ft(n){const e=n&&n.__v_raw;return e?ft(e):n}function av(n){return!gt(n,"__v_skip")&&Object.isExtensible(n)&&zp(n,"__v_skip",!0),n}const nn=n=>Rt(n)?Sl(n):n,zc=n=>Rt(n)?Qu(n):n;function rn(n){return n?n.__v_isRef===!0:!1}function Wa(n){return lv(n,!1)}function lv(n,e){return rn(n)?n:new cv(n,e)}class cv{constructor(e,t){this.dep=new Zu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:ft(e),this._value=t?e:nn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,r=this.__v_isShallow||Nn(e)||Hi(e);e=r?e:ft(e),ui(e,t)&&(this._rawValue=e,this._value=r?e:nn(e),this.dep.trigger())}}function dt(n){return rn(n)?n.value:n}const uv={get:(n,e,t)=>e==="__v_raw"?n:dt(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const i=n[e];return rn(i)&&!rn(t)?(i.value=t,!0):Reflect.set(n,e,t,r)}};function im(n){return Eo(n)?n:new Proxy(n,uv)}class dv{constructor(e,t,r){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Zu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ls-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ct!==this)return jp(this,!0),!0}get value(){const e=this.dep.track();return Yp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function fv(n,e,t=!1){let r,i;return je(n)?r=n:(r=n.get,i=n.set),new dv(r,i,t)}const ua={},rl=new WeakMap;let Di;function hv(n,e=!1,t=Di){if(t){let r=rl.get(t);r||rl.set(t,r=[]),r.push(n)}}function pv(n,e,t=Et){const{immediate:r,deep:i,once:o,scheduler:s,augmentJob:a,call:l}=t,c=y=>i?y:Nn(y)||i===!1||i===0?Ir(y,1):Ir(y);let u,d,f,h,g=!1,v=!1;if(rn(n)?(d=()=>n.value,g=Nn(n)):Eo(n)?(d=()=>c(n),g=!0):He(n)?(v=!0,g=n.some(y=>Eo(y)||Nn(y)),d=()=>n.map(y=>{if(rn(y))return y.value;if(Eo(y))return c(y);if(je(y))return l?l(y,2):y()})):je(n)?e?d=l?()=>l(n,2):n:d=()=>{if(f){_i();try{f()}finally{yi()}}const y=Di;Di=u;try{return l?l(n,3,[h]):n(h)}finally{Di=y}}:d=ar,e&&i){const y=d,R=i===!0?1/0:i;d=()=>Ir(y(),R)}const m=H0(),p=()=>{u.stop(),m&&m.active&&ju(m.effects,u)};if(o&&e){const y=e;e=(...R)=>{y(...R),p()}}let E=v?new Array(n.length).fill(ua):ua;const x=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(e){const R=u.run();if(i||g||(v?R.some((P,A)=>ui(P,E[A])):ui(R,E))){f&&f();const P=Di;Di=u;try{const A=[R,E===ua?void 0:v&&E[0]===ua?[]:E,h];l?l(e,3,A):e(...A),E=R}finally{Di=P}}}else u.run()};return a&&a(x),u=new $p(d),u.scheduler=s?()=>s(x,!1):x,h=y=>hv(y,!1,u),f=u.onStop=()=>{const y=rl.get(u);if(y){if(l)l(y,4);else for(const R of y)R();rl.delete(u)}},e?r?x(!0):E=u.run():s?s(x.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Ir(n,e=1/0,t){if(e<=0||!Rt(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,rn(n))Ir(n.value,e,t);else if(He(n))for(let r=0;r<n.length;r++)Ir(n[r],e,t);else if(Op(n)||To(n))n.forEach(r=>{Ir(r,e,t)});else if(Fp(n)){for(const r in n)Ir(n[r],e,t);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&Ir(n[r],e,t)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ta(n,e,t,r){try{return r?n(...r):n()}catch(i){wl(i,e,t)}}function er(n,e,t,r){if(je(n)){const i=ta(n,e,t,r);return i&&Bp(i)&&i.catch(o=>{wl(o,e,t)}),i}if(He(n)){const i=[];for(let o=0;o<n.length;o++)i.push(er(n[o],e,t,r));return i}}function wl(n,e,t,r=!0){const i=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:s}=e&&e.appContext.config||Et;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](n,l,c)===!1)return}a=a.parent}if(o){_i(),ta(o,null,10,[n,l,c]),yi();return}}mv(n,t,i,r,s)}function mv(n,e,t,r=!0,i=!1){if(i)throw n;console.error(n)}const un=[];let rr=-1;const Co=[];let ei=null,ho=0;const om=Promise.resolve();let il=null;function sm(n){const e=il||om;return n?e.then(this?n.bind(this):n):e}function gv(n){let e=rr+1,t=un.length;for(;e<t;){const r=e+t>>>1,i=un[r],o=ks(i);o<n||o===n&&i.flags&2?e=r+1:t=r}return e}function nd(n){if(!(n.flags&1)){const e=ks(n),t=un[un.length-1];!t||!(n.flags&2)&&e>=ks(t)?un.push(n):un.splice(gv(e),0,n),n.flags|=1,am()}}function am(){il||(il=om.then(cm))}function vv(n){He(n)?Co.push(...n):ei&&n.id===-1?ei.splice(ho+1,0,n):n.flags&1||(Co.push(n),n.flags|=1),am()}function Zd(n,e,t=rr+1){for(;t<un.length;t++){const r=un[t];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;un.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function lm(n){if(Co.length){const e=[...new Set(Co)].sort((t,r)=>ks(t)-ks(r));if(Co.length=0,ei){ei.push(...e);return}for(ei=e,ho=0;ho<ei.length;ho++){const t=ei[ho];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}ei=null,ho=0}}const ks=n=>n.id==null?n.flags&2?-1:1/0:n.id;function cm(n){try{for(rr=0;rr<un.length;rr++){const e=un[rr];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ta(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;rr<un.length;rr++){const e=un[rr];e&&(e.flags&=-2)}rr=-1,un.length=0,lm(),il=null,(un.length||Co.length)&&cm()}}let $t=null,um=null;function ol(n){const e=$t;return $t=n,um=n&&n.type.__scopeId||null,e}function ze(n,e=$t,t){if(!e||n._n)return n;const r=(...i)=>{r._d&&df(-1);const o=ol(e);let s;try{s=n(...i)}finally{ol(o),r._d&&df(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function rd(n,e){if($t===null)return n;const t=Al($t),r=n.dirs||(n.dirs=[]);for(let i=0;i<e.length;i++){let[o,s,a,l=Et]=e[i];o&&(je(o)&&(o={mounted:o,updated:o}),o.deep&&Ir(s),r.push({dir:o,instance:t,value:s,oldValue:void 0,arg:a,modifiers:l}))}return n}function wi(n,e,t,r){const i=n.dirs,o=e&&e.dirs;for(let s=0;s<i.length;s++){const a=i[s];o&&(a.oldValue=o[s].value);let l=a.dir[r];l&&(_i(),er(l,t,8,[n.el,a,n,e]),yi())}}const dm=Symbol("_vte"),fm=n=>n.__isTeleport,Ss=n=>n&&(n.disabled||n.disabled===""),Jd=n=>n&&(n.defer||n.defer===""),Qd=n=>typeof SVGElement<"u"&&n instanceof SVGElement,ef=n=>typeof MathMLElement=="function"&&n instanceof MathMLElement,Hc=(n,e)=>{const t=n&&n.to;return Lt(t)?e?e(t):null:t},hm={name:"Teleport",__isTeleport:!0,process(n,e,t,r,i,o,s,a,l,c){const{mc:u,pc:d,pbc:f,o:{insert:h,querySelector:g,createText:v,createComment:m}}=c,p=Ss(e.props);let{shapeFlag:E,children:x,dynamicChildren:y}=e;if(n==null){const R=e.el=v(""),P=e.anchor=v("");h(R,t,r),h(P,t,r);const A=(M,w)=>{E&16&&(i&&i.isCE&&(i.ce._teleportTarget=M),u(x,M,w,i,o,s,a,l))},k=()=>{const M=e.target=Hc(e.props,g),w=pm(M,e,v,h);M&&(s!=="svg"&&Qd(M)?s="svg":s!=="mathml"&&ef(M)&&(s="mathml"),p||(A(M,w),ja(e,!1)))};p&&(A(t,P),ja(e,!0)),Jd(e.props)?cn(()=>{k(),e.el.__isMounted=!0},o):k()}else{if(Jd(e.props)&&!n.el.__isMounted){cn(()=>{hm.process(n,e,t,r,i,o,s,a,l,c),delete n.el.__isMounted},o);return}e.el=n.el,e.targetStart=n.targetStart;const R=e.anchor=n.anchor,P=e.target=n.target,A=e.targetAnchor=n.targetAnchor,k=Ss(n.props),M=k?t:P,w=k?R:A;if(s==="svg"||Qd(P)?s="svg":(s==="mathml"||ef(P))&&(s="mathml"),y?(f(n.dynamicChildren,y,M,i,o,s,a),ud(n,e,!0)):l||d(n,e,M,w,i,o,s,a,!1),p)k?e.props&&n.props&&e.props.to!==n.props.to&&(e.props.to=n.props.to):da(e,t,R,c,1);else if((e.props&&e.props.to)!==(n.props&&n.props.to)){const L=e.target=Hc(e.props,g);L&&da(e,L,null,c,0)}else k&&da(e,P,A,c,1);ja(e,p)}},remove(n,e,t,{um:r,o:{remove:i}},o){const{shapeFlag:s,children:a,anchor:l,targetStart:c,targetAnchor:u,target:d,props:f}=n;if(d&&(i(c),i(u)),o&&i(l),s&16){const h=o||!Ss(f);for(let g=0;g<a.length;g++){const v=a[g];r(v,e,t,h,!!v.dynamicChildren)}}},move:da,hydrate:bv};function da(n,e,t,{o:{insert:r},m:i},o=2){o===0&&r(n.targetAnchor,e,t);const{el:s,anchor:a,shapeFlag:l,children:c,props:u}=n,d=o===2;if(d&&r(s,e,t),(!d||Ss(u))&&l&16)for(let f=0;f<c.length;f++)i(c[f],e,t,2);d&&r(a,e,t)}function bv(n,e,t,r,i,o,{o:{nextSibling:s,parentNode:a,querySelector:l,insert:c,createText:u}},d){const f=e.target=Hc(e.props,l);if(f){const h=Ss(e.props),g=f._lpa||f.firstChild;if(e.shapeFlag&16)if(h)e.anchor=d(s(n),e,a(n),t,r,i,o),e.targetStart=g,e.targetAnchor=g&&s(g);else{e.anchor=s(n);let v=g;for(;v;){if(v&&v.nodeType===8){if(v.data==="teleport start anchor")e.targetStart=v;else if(v.data==="teleport anchor"){e.targetAnchor=v,f._lpa=e.targetAnchor&&s(e.targetAnchor);break}}v=s(v)}e.targetAnchor||pm(f,e,u,c),d(g&&s(g),e,f,t,r,i,o)}ja(e,h)}return e.anchor&&s(e.anchor)}const _v=hm;function ja(n,e){const t=n.ctx;if(t&&t.ut){let r,i;for(e?(r=n.el,i=n.anchor):(r=n.targetStart,i=n.targetAnchor);r&&r!==i;)r.nodeType===1&&r.setAttribute("data-v-owner",t.uid),r=r.nextSibling;t.ut()}}function pm(n,e,t,r){const i=e.targetStart=t(""),o=e.targetAnchor=t("");return i[dm]=o,n&&(r(i,n),r(o,n)),o}const ti=Symbol("_leaveCb"),fa=Symbol("_enterCb");function yv(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return id(()=>{n.isMounted=!0}),wm(()=>{n.isUnmounting=!0}),n}const Pn=[Function,Array],mm={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Pn,onEnter:Pn,onAfterEnter:Pn,onEnterCancelled:Pn,onBeforeLeave:Pn,onLeave:Pn,onAfterLeave:Pn,onLeaveCancelled:Pn,onBeforeAppear:Pn,onAppear:Pn,onAfterAppear:Pn,onAppearCancelled:Pn},gm=n=>{const e=n.subTree;return e.component?gm(e.component):e},xv={name:"BaseTransition",props:mm,setup(n,{slots:e}){const t=Wm(),r=yv();return()=>{const i=e.default&&_m(e.default(),!0);if(!i||!i.length)return;const o=vm(i),s=ft(n),{mode:a}=s;if(r.isLeaving)return Vl(o);const l=tf(o);if(!l)return Vl(o);let c=Vc(l,s,r,t,d=>c=d);l.type!==fn&&Ds(l,c);let u=t.subTree&&tf(t.subTree);if(u&&u.type!==fn&&!Oi(l,u)&&gm(t).type!==fn){let d=Vc(u,s,r,t);if(Ds(u,d),a==="out-in"&&l.type!==fn)return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,t.job.flags&8||t.update(),delete d.afterLeave,u=void 0},Vl(o);a==="in-out"&&l.type!==fn?d.delayLeave=(f,h,g)=>{const v=bm(r,u);v[String(u.key)]=u,f[ti]=()=>{h(),f[ti]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return o}}};function vm(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==fn){e=t;break}}return e}const Sv=xv;function bm(n,e){const{leavingVNodes:t}=n;let r=t.get(e.type);return r||(r=Object.create(null),t.set(e.type,r)),r}function Vc(n,e,t,r,i){const{appear:o,mode:s,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:f,onLeave:h,onAfterLeave:g,onLeaveCancelled:v,onBeforeAppear:m,onAppear:p,onAfterAppear:E,onAppearCancelled:x}=e,y=String(n.key),R=bm(t,n),P=(M,w)=>{M&&er(M,r,9,w)},A=(M,w)=>{const L=w[1];P(M,w),He(M)?M.every(O=>O.length<=1)&&L():M.length<=1&&L()},k={mode:s,persisted:a,beforeEnter(M){let w=l;if(!t.isMounted)if(o)w=m||l;else return;M[ti]&&M[ti](!0);const L=R[y];L&&Oi(n,L)&&L.el[ti]&&L.el[ti](),P(w,[M])},enter(M){let w=c,L=u,O=d;if(!t.isMounted)if(o)w=p||c,L=E||u,O=x||d;else return;let z=!1;const ee=M[fa]=re=>{z||(z=!0,re?P(O,[M]):P(L,[M]),k.delayedLeave&&k.delayedLeave(),M[fa]=void 0)};w?A(w,[M,ee]):ee()},leave(M,w){const L=String(n.key);if(M[fa]&&M[fa](!0),t.isUnmounting)return w();P(f,[M]);let O=!1;const z=M[ti]=ee=>{O||(O=!0,w(),ee?P(v,[M]):P(g,[M]),M[ti]=void 0,R[L]===n&&delete R[L])};R[L]=n,h?A(h,[M,z]):z()},clone(M){const w=Vc(M,e,t,r,i);return i&&i(w),w}};return k}function Vl(n){if(Ml(n))return n=vi(n),n.children=null,n}function tf(n){if(!Ml(n))return fm(n.type)&&n.children?vm(n.children):n;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&je(t.default))return t.default()}}function Ds(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Ds(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function _m(n,e=!1,t){let r=[],i=0;for(let o=0;o<n.length;o++){let s=n[o];const a=t==null?s.key:String(t)+String(s.key!=null?s.key:o);s.type===kt?(s.patchFlag&128&&i++,r=r.concat(_m(s.children,e,a))):(e||s.type!==fn)&&r.push(a!=null?vi(s,{key:a}):s)}if(i>1)for(let o=0;o<r.length;o++)r[o].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function ym(n,e){return je(n)?Ft({name:n.name},e,{setup:n}):n}function xm(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function sl(n,e,t,r,i=!1){if(He(n)){n.forEach((g,v)=>sl(g,e&&(He(e)?e[v]:e),t,r,i));return}if(Ao(r)&&!i){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&sl(n,e,t,r.component.subTree);return}const o=r.shapeFlag&4?Al(r.component):r.el,s=i?null:o,{i:a,r:l}=n,c=e&&e.r,u=a.refs===Et?a.refs={}:a.refs,d=a.setupState,f=ft(d),h=d===Et?()=>!1:g=>gt(f,g);if(c!=null&&c!==l&&(Lt(c)?(u[c]=null,h(c)&&(d[c]=null)):rn(c)&&(c.value=null)),je(l))ta(l,a,12,[s,u]);else{const g=Lt(l),v=rn(l);if(g||v){const m=()=>{if(n.f){const p=g?h(l)?d[l]:u[l]:l.value;i?He(p)&&ju(p,o):He(p)?p.includes(o)||p.push(o):g?(u[l]=[o],h(l)&&(d[l]=u[l])):(l.value=[o],n.k&&(u[n.k]=l.value))}else g?(u[l]=s,h(l)&&(d[l]=s)):v&&(l.value=s,n.k&&(u[n.k]=s))};s?(m.id=-1,cn(m,t)):m()}}}yl().requestIdleCallback;yl().cancelIdleCallback;const Ao=n=>!!n.type.__asyncLoader,Ml=n=>n.type.__isKeepAlive;function wv(n,e){Sm(n,"a",e)}function Mv(n,e){Sm(n,"da",e)}function Sm(n,e,t=qt){const r=n.__wdc||(n.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return n()});if(Tl(e,r,t),t){let i=t.parent;for(;i&&i.parent;)Ml(i.parent.vnode)&&Tv(r,e,t,i),i=i.parent}}function Tv(n,e,t,r){const i=Tl(e,n,r,!0);Mm(()=>{ju(r[e],i)},t)}function Tl(n,e,t=qt,r=!1){if(t){const i=t[n]||(t[n]=[]),o=e.__weh||(e.__weh=(...s)=>{_i();const a=na(t),l=er(e,t,n,s);return a(),yi(),l});return r?i.unshift(o):i.push(o),o}}const Hr=n=>(e,t=qt)=>{(!Bs||n==="sp")&&Tl(n,(...r)=>e(...r),t)},Ev=Hr("bm"),id=Hr("m"),Cv=Hr("bu"),Av=Hr("u"),wm=Hr("bum"),Mm=Hr("um"),Rv=Hr("sp"),Pv=Hr("rtg"),Lv=Hr("rtc");function Iv(n,e=qt){Tl("ec",n,e)}const od="components",kv="directives";function jn(n,e){return ad(od,n,!0,e)||n}const Tm=Symbol.for("v-ndc");function gi(n){return Lt(n)?ad(od,n,!1)||n:n||Tm}function sd(n){return ad(kv,n)}function ad(n,e,t=!0,r=!1){const i=$t||qt;if(i){const o=i.type;if(n===od){const a=bb(o,!1);if(a&&(a===e||a===On(e)||a===_l(On(e))))return o}const s=nf(i[n]||o[n],e)||nf(i.appContext[n],e);return!s&&r?o:s}}function nf(n,e){return n&&(n[e]||n[On(e)]||n[_l(On(e))])}function bo(n,e,t,r){let i;const o=t,s=He(n);if(s||Lt(n)){const a=s&&Eo(n);let l=!1;a&&(l=!Nn(n),n=xl(n)),i=new Array(n.length);for(let c=0,u=n.length;c<u;c++)i[c]=e(l?nn(n[c]):n[c],c,void 0,o)}else if(typeof n=="number"){i=new Array(n);for(let a=0;a<n;a++)i[a]=e(a+1,a,void 0,o)}else if(Rt(n))if(n[Symbol.iterator])i=Array.from(n,(a,l)=>e(a,l,void 0,o));else{const a=Object.keys(n);i=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];i[l]=e(n[u],u,l,o)}}else i=[];return i}function nt(n,e,t={},r,i){if($t.ce||$t.parent&&Ao($t.parent)&&$t.parent.ce)return e!=="default"&&(t.name=e),ge(),Wt(kt,null,[Te("slot",t,r&&r())],64);let o=n[e];o&&o._c&&(o._d=!1),ge();const s=o&&Em(o(t)),a=t.key||s&&s.key,l=Wt(kt,{key:(a&&!zr(a)?a:`_${e}`)+(!s&&r?"_fb":"")},s||(r?r():[]),s&&n._===1?64:-2);return!i&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),o&&o._c&&(o._d=!0),l}function Em(n){return n.some(e=>Os(e)?!(e.type===fn||e.type===kt&&!Em(e.children)):!0)?n:null}const Gc=n=>n?jm(n)?Al(n):Gc(n.parent):null,ws=Ft(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Gc(n.parent),$root:n=>Gc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>ld(n),$forceUpdate:n=>n.f||(n.f=()=>{nd(n.update)}),$nextTick:n=>n.n||(n.n=sm.bind(n.proxy)),$watch:n=>tb.bind(n)}),Gl=(n,e)=>n!==Et&&!n.__isScriptSetup&&gt(n,e),Dv={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:r,data:i,props:o,accessCache:s,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const h=s[e];if(h!==void 0)switch(h){case 1:return r[e];case 2:return i[e];case 4:return t[e];case 3:return o[e]}else{if(Gl(r,e))return s[e]=1,r[e];if(i!==Et&&gt(i,e))return s[e]=2,i[e];if((c=n.propsOptions[0])&&gt(c,e))return s[e]=3,o[e];if(t!==Et&&gt(t,e))return s[e]=4,t[e];$c&&(s[e]=0)}}const u=ws[e];let d,f;if(u)return e==="$attrs"&&tn(n.attrs,"get",""),u(n);if((d=a.__cssModules)&&(d=d[e]))return d;if(t!==Et&&gt(t,e))return s[e]=4,t[e];if(f=l.config.globalProperties,gt(f,e))return f[e]},set({_:n},e,t){const{data:r,setupState:i,ctx:o}=n;return Gl(i,e)?(i[e]=t,!0):r!==Et&&gt(r,e)?(r[e]=t,!0):gt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(o[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:i,propsOptions:o}},s){let a;return!!t[s]||n!==Et&&gt(n,s)||Gl(e,s)||(a=o[0])&&gt(a,s)||gt(r,s)||gt(ws,s)||gt(i.config.globalProperties,s)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:gt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function rf(n){return He(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let $c=!0;function Nv(n){const e=ld(n),t=n.proxy,r=n.ctx;$c=!1,e.beforeCreate&&of(e.beforeCreate,n,"bc");const{data:i,computed:o,methods:s,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:h,updated:g,activated:v,deactivated:m,beforeDestroy:p,beforeUnmount:E,destroyed:x,unmounted:y,render:R,renderTracked:P,renderTriggered:A,errorCaptured:k,serverPrefetch:M,expose:w,inheritAttrs:L,components:O,directives:z,filters:ee}=e;if(c&&Ov(c,r,null),s)for(const Q in s){const H=s[Q];je(H)&&(r[Q]=H.bind(t))}if(i){const Q=i.call(t,t);Rt(Q)&&(n.data=Sl(Q))}if($c=!0,o)for(const Q in o){const H=o[Q],de=je(H)?H.bind(t,t):je(H.get)?H.get.bind(t,t):ar,pe=!je(H)&&je(H.set)?H.set.bind(t):ar,_e=yb({get:de,set:pe});Object.defineProperty(r,Q,{enumerable:!0,configurable:!0,get:()=>_e.value,set:Le=>_e.value=Le})}if(a)for(const Q in a)Cm(a[Q],r,t,Q);if(l){const Q=je(l)?l.call(t):l;Reflect.ownKeys(Q).forEach(H=>{Vv(H,Q[H])})}u&&of(u,n,"c");function q(Q,H){He(H)?H.forEach(de=>Q(de.bind(t))):H&&Q(H.bind(t))}if(q(Ev,d),q(id,f),q(Cv,h),q(Av,g),q(wv,v),q(Mv,m),q(Iv,k),q(Lv,P),q(Pv,A),q(wm,E),q(Mm,y),q(Rv,M),He(w))if(w.length){const Q=n.exposed||(n.exposed={});w.forEach(H=>{Object.defineProperty(Q,H,{get:()=>t[H],set:de=>t[H]=de})})}else n.exposed||(n.exposed={});R&&n.render===ar&&(n.render=R),L!=null&&(n.inheritAttrs=L),O&&(n.components=O),z&&(n.directives=z),M&&xm(n)}function Ov(n,e,t=ar){He(n)&&(n=Wc(n));for(const r in n){const i=n[r];let o;Rt(i)?"default"in i?o=Xa(i.from||r,i.default,!0):o=Xa(i.from||r):o=Xa(i),rn(o)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):e[r]=o}}function of(n,e,t){er(He(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function Cm(n,e,t,r){let i=r.includes(".")?zm(t,r):()=>t[r];if(Lt(n)){const o=e[n];je(o)&&si(i,o)}else if(je(n))si(i,n.bind(t));else if(Rt(n))if(He(n))n.forEach(o=>Cm(o,e,t,r));else{const o=je(n.handler)?n.handler.bind(t):e[n.handler];je(o)&&si(i,o,n)}}function ld(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:i,optionsCache:o,config:{optionMergeStrategies:s}}=n.appContext,a=o.get(e);let l;return a?l=a:!i.length&&!t&&!r?l=e:(l={},i.length&&i.forEach(c=>al(l,c,s,!0)),al(l,e,s)),Rt(e)&&o.set(e,l),l}function al(n,e,t,r=!1){const{mixins:i,extends:o}=e;o&&al(n,o,t,!0),i&&i.forEach(s=>al(n,s,t,!0));for(const s in e)if(!(r&&s==="expose")){const a=Bv[s]||t&&t[s];n[s]=a?a(n[s],e[s]):e[s]}return n}const Bv={data:sf,props:af,emits:af,methods:ms,computed:ms,beforeCreate:an,created:an,beforeMount:an,mounted:an,beforeUpdate:an,updated:an,beforeDestroy:an,beforeUnmount:an,destroyed:an,unmounted:an,activated:an,deactivated:an,errorCaptured:an,serverPrefetch:an,components:ms,directives:ms,watch:Fv,provide:sf,inject:Uv};function sf(n,e){return e?n?function(){return Ft(je(n)?n.call(this,this):n,je(e)?e.call(this,this):e)}:e:n}function Uv(n,e){return ms(Wc(n),Wc(e))}function Wc(n){if(He(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function an(n,e){return n?[...new Set([].concat(n,e))]:e}function ms(n,e){return n?Ft(Object.create(null),n,e):e}function af(n,e){return n?He(n)&&He(e)?[...new Set([...n,...e])]:Ft(Object.create(null),rf(n),rf(e??{})):e}function Fv(n,e){if(!n)return e;if(!e)return n;const t=Ft(Object.create(null),n);for(const r in e)t[r]=an(n[r],e[r]);return t}function Am(){return{app:null,config:{isNativeTag:C0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let zv=0;function Hv(n,e){return function(r,i=null){je(r)||(r=Ft({},r)),i!=null&&!Rt(i)&&(i=null);const o=Am(),s=new WeakSet,a=[];let l=!1;const c=o.app={_uid:zv++,_component:r,_props:i,_container:null,_context:o,_instance:null,version:Sb,get config(){return o.config},set config(u){},use(u,...d){return s.has(u)||(u&&je(u.install)?(s.add(u),u.install(c,...d)):je(u)&&(s.add(u),u(c,...d))),c},mixin(u){return o.mixins.includes(u)||o.mixins.push(u),c},component(u,d){return d?(o.components[u]=d,c):o.components[u]},directive(u,d){return d?(o.directives[u]=d,c):o.directives[u]},mount(u,d,f){if(!l){const h=c._ceVNode||Te(r,i);return h.appContext=o,f===!0?f="svg":f===!1&&(f=void 0),d&&e?e(h,u):n(h,u,f),l=!0,c._container=u,u.__vue_app__=c,Al(h.component)}},onUnmount(u){a.push(u)},unmount(){l&&(er(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,d){return o.provides[u]=d,c},runWithContext(u){const d=Ro;Ro=c;try{return u()}finally{Ro=d}}};return c}}let Ro=null;function Vv(n,e){if(qt){let t=qt.provides;const r=qt.parent&&qt.parent.provides;r===t&&(t=qt.provides=Object.create(r)),t[n]=e}}function Xa(n,e,t=!1){const r=qt||$t;if(r||Ro){const i=Ro?Ro._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&n in i)return i[n];if(arguments.length>1)return t&&je(e)?e.call(r&&r.proxy):e}}const Rm={},Pm=()=>Object.create(Rm),Lm=n=>Object.getPrototypeOf(n)===Rm;function Gv(n,e,t,r=!1){const i={},o=Pm();n.propsDefaults=Object.create(null),Im(n,e,i,o);for(const s in n.propsOptions[0])s in i||(i[s]=void 0);t?n.props=r?i:sv(i):n.type.props?n.props=i:n.props=o,n.attrs=o}function $v(n,e,t,r){const{props:i,attrs:o,vnode:{patchFlag:s}}=n,a=ft(i),[l]=n.propsOptions;let c=!1;if((r||s>0)&&!(s&16)){if(s&8){const u=n.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(El(n.emitsOptions,f))continue;const h=e[f];if(l)if(gt(o,f))h!==o[f]&&(o[f]=h,c=!0);else{const g=On(f);i[g]=jc(l,a,g,h,n,!1)}else h!==o[f]&&(o[f]=h,c=!0)}}}else{Im(n,e,i,o)&&(c=!0);let u;for(const d in a)(!e||!gt(e,d)&&((u=$i(d))===d||!gt(e,u)))&&(l?t&&(t[d]!==void 0||t[u]!==void 0)&&(i[d]=jc(l,a,d,void 0,n,!0)):delete i[d]);if(o!==a)for(const d in o)(!e||!gt(e,d))&&(delete o[d],c=!0)}c&&Lr(n.attrs,"set","")}function Im(n,e,t,r){const[i,o]=n.propsOptions;let s=!1,a;if(e)for(let l in e){if(_s(l))continue;const c=e[l];let u;i&&gt(i,u=On(l))?!o||!o.includes(u)?t[u]=c:(a||(a={}))[u]=c:El(n.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,s=!0)}if(o){const l=ft(t),c=a||Et;for(let u=0;u<o.length;u++){const d=o[u];t[d]=jc(i,l,d,c[d],n,!gt(c,d))}}return s}function jc(n,e,t,r,i,o){const s=n[t];if(s!=null){const a=gt(s,"default");if(a&&r===void 0){const l=s.default;if(s.type!==Function&&!s.skipFactory&&je(l)){const{propsDefaults:c}=i;if(t in c)r=c[t];else{const u=na(i);r=c[t]=l.call(null,e),u()}}else r=l;i.ce&&i.ce._setProp(t,r)}s[0]&&(o&&!a?r=!1:s[1]&&(r===""||r===$i(t))&&(r=!0))}return r}const Wv=new WeakMap;function km(n,e,t=!1){const r=t?Wv:e.propsCache,i=r.get(n);if(i)return i;const o=n.props,s={},a=[];let l=!1;if(!je(n)){const u=d=>{l=!0;const[f,h]=km(d,e,!0);Ft(s,f),h&&a.push(...h)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!o&&!l)return Rt(n)&&r.set(n,Mo),Mo;if(He(o))for(let u=0;u<o.length;u++){const d=On(o[u]);lf(d)&&(s[d]=Et)}else if(o)for(const u in o){const d=On(u);if(lf(d)){const f=o[u],h=s[d]=He(f)||je(f)?{type:f}:Ft({},f),g=h.type;let v=!1,m=!0;if(He(g))for(let p=0;p<g.length;++p){const E=g[p],x=je(E)&&E.name;if(x==="Boolean"){v=!0;break}else x==="String"&&(m=!1)}else v=je(g)&&g.name==="Boolean";h[0]=v,h[1]=m,(v||gt(h,"default"))&&a.push(d)}}const c=[s,a];return Rt(n)&&r.set(n,c),c}function lf(n){return n[0]!=="$"&&!_s(n)}const Dm=n=>n[0]==="_"||n==="$stable",cd=n=>He(n)?n.map(ir):[ir(n)],jv=(n,e,t)=>{if(e._n)return e;const r=ze((...i)=>cd(e(...i)),t);return r._c=!1,r},Nm=(n,e,t)=>{const r=n._ctx;for(const i in n){if(Dm(i))continue;const o=n[i];if(je(o))e[i]=jv(i,o,r);else if(o!=null){const s=cd(o);e[i]=()=>s}}},Om=(n,e)=>{const t=cd(e);n.slots.default=()=>t},Bm=(n,e,t)=>{for(const r in e)(t||r!=="_")&&(n[r]=e[r])},Xv=(n,e,t)=>{const r=n.slots=Pm();if(n.vnode.shapeFlag&32){const i=e._;i?(Bm(r,e,t),t&&zp(r,"_",i,!0)):Nm(e,r)}else e&&Om(n,e)},Kv=(n,e,t)=>{const{vnode:r,slots:i}=n;let o=!0,s=Et;if(r.shapeFlag&32){const a=e._;a?t&&a===1?o=!1:Bm(i,e,t):(o=!e.$stable,Nm(e,i)),s=e}else e&&(Om(n,e),s={default:1});if(o)for(const a in i)!Dm(a)&&s[a]==null&&delete i[a]},cn=lb;function Yv(n){return qv(n)}function qv(n,e){const t=yl();t.__VUE__=!0;const{insert:r,remove:i,patchProp:o,createElement:s,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:h=ar,insertStaticContent:g}=n,v=(C,_,X,Z=null,K=null,$=null,se=void 0,Y=null,S=!!_.dynamicChildren)=>{if(C===_)return;C&&!Oi(C,_)&&(Z=me(C),Le(C,K,$,!0),C=null),_.patchFlag===-2&&(S=!1,_.dynamicChildren=null);const{type:b,ref:I,shapeFlag:B}=_;switch(b){case Cl:m(C,_,X,Z);break;case fn:p(C,_,X,Z);break;case jl:C==null&&E(_,X,Z,se);break;case kt:O(C,_,X,Z,K,$,se,Y,S);break;default:B&1?R(C,_,X,Z,K,$,se,Y,S):B&6?z(C,_,X,Z,K,$,se,Y,S):(B&64||B&128)&&b.process(C,_,X,Z,K,$,se,Y,S,Ve)}I!=null&&K&&sl(I,C&&C.ref,$,_||C,!_)},m=(C,_,X,Z)=>{if(C==null)r(_.el=a(_.children),X,Z);else{const K=_.el=C.el;_.children!==C.children&&c(K,_.children)}},p=(C,_,X,Z)=>{C==null?r(_.el=l(_.children||""),X,Z):_.el=C.el},E=(C,_,X,Z)=>{[C.el,C.anchor]=g(C.children,_,X,Z,C.el,C.anchor)},x=({el:C,anchor:_},X,Z)=>{let K;for(;C&&C!==_;)K=f(C),r(C,X,Z),C=K;r(_,X,Z)},y=({el:C,anchor:_})=>{let X;for(;C&&C!==_;)X=f(C),i(C),C=X;i(_)},R=(C,_,X,Z,K,$,se,Y,S)=>{_.type==="svg"?se="svg":_.type==="math"&&(se="mathml"),C==null?P(_,X,Z,K,$,se,Y,S):M(C,_,K,$,se,Y,S)},P=(C,_,X,Z,K,$,se,Y)=>{let S,b;const{props:I,shapeFlag:B,transition:G,dirs:V}=C;if(S=C.el=s(C.type,$,I&&I.is,I),B&8?u(S,C.children):B&16&&k(C.children,S,null,Z,K,$l(C,$),se,Y),V&&wi(C,null,Z,"created"),A(S,C,C.scopeId,se,Z),I){for(const ae in I)ae!=="value"&&!_s(ae)&&o(S,ae,null,I[ae],$,Z);"value"in I&&o(S,"value",null,I.value,$),(b=I.onVnodeBeforeMount)&&tr(b,Z,C)}V&&wi(C,null,Z,"beforeMount");const ce=Zv(K,G);ce&&G.beforeEnter(S),r(S,_,X),((b=I&&I.onVnodeMounted)||ce||V)&&cn(()=>{b&&tr(b,Z,C),ce&&G.enter(S),V&&wi(C,null,Z,"mounted")},K)},A=(C,_,X,Z,K)=>{if(X&&h(C,X),Z)for(let $=0;$<Z.length;$++)h(C,Z[$]);if(K){let $=K.subTree;if(_===$||Vm($.type)&&($.ssContent===_||$.ssFallback===_)){const se=K.vnode;A(C,se,se.scopeId,se.slotScopeIds,K.parent)}}},k=(C,_,X,Z,K,$,se,Y,S=0)=>{for(let b=S;b<C.length;b++){const I=C[b]=Y?ni(C[b]):ir(C[b]);v(null,I,_,X,Z,K,$,se,Y)}},M=(C,_,X,Z,K,$,se)=>{const Y=_.el=C.el;let{patchFlag:S,dynamicChildren:b,dirs:I}=_;S|=C.patchFlag&16;const B=C.props||Et,G=_.props||Et;let V;if(X&&Mi(X,!1),(V=G.onVnodeBeforeUpdate)&&tr(V,X,_,C),I&&wi(_,C,X,"beforeUpdate"),X&&Mi(X,!0),(B.innerHTML&&G.innerHTML==null||B.textContent&&G.textContent==null)&&u(Y,""),b?w(C.dynamicChildren,b,Y,X,Z,$l(_,K),$):se||H(C,_,Y,null,X,Z,$l(_,K),$,!1),S>0){if(S&16)L(Y,B,G,X,K);else if(S&2&&B.class!==G.class&&o(Y,"class",null,G.class,K),S&4&&o(Y,"style",B.style,G.style,K),S&8){const ce=_.dynamicProps;for(let ae=0;ae<ce.length;ae++){const le=ce[ae],Fe=B[le],oe=G[le];(oe!==Fe||le==="value")&&o(Y,le,Fe,oe,K,X)}}S&1&&C.children!==_.children&&u(Y,_.children)}else!se&&b==null&&L(Y,B,G,X,K);((V=G.onVnodeUpdated)||I)&&cn(()=>{V&&tr(V,X,_,C),I&&wi(_,C,X,"updated")},Z)},w=(C,_,X,Z,K,$,se)=>{for(let Y=0;Y<_.length;Y++){const S=C[Y],b=_[Y],I=S.el&&(S.type===kt||!Oi(S,b)||S.shapeFlag&70)?d(S.el):X;v(S,b,I,null,Z,K,$,se,!0)}},L=(C,_,X,Z,K)=>{if(_!==X){if(_!==Et)for(const $ in _)!_s($)&&!($ in X)&&o(C,$,_[$],null,K,Z);for(const $ in X){if(_s($))continue;const se=X[$],Y=_[$];se!==Y&&$!=="value"&&o(C,$,Y,se,K,Z)}"value"in X&&o(C,"value",_.value,X.value,K)}},O=(C,_,X,Z,K,$,se,Y,S)=>{const b=_.el=C?C.el:a(""),I=_.anchor=C?C.anchor:a("");let{patchFlag:B,dynamicChildren:G,slotScopeIds:V}=_;V&&(Y=Y?Y.concat(V):V),C==null?(r(b,X,Z),r(I,X,Z),k(_.children||[],X,I,K,$,se,Y,S)):B>0&&B&64&&G&&C.dynamicChildren?(w(C.dynamicChildren,G,X,K,$,se,Y),(_.key!=null||K&&_===K.subTree)&&ud(C,_,!0)):H(C,_,X,I,K,$,se,Y,S)},z=(C,_,X,Z,K,$,se,Y,S)=>{_.slotScopeIds=Y,C==null?_.shapeFlag&512?K.ctx.activate(_,X,Z,se,S):ee(_,X,Z,K,$,se,S):re(C,_,S)},ee=(C,_,X,Z,K,$,se)=>{const Y=C.component=hb(C,Z,K);if(Ml(C)&&(Y.ctx.renderer=Ve),pb(Y,!1,se),Y.asyncDep){if(K&&K.registerDep(Y,q,se),!C.el){const S=Y.subTree=Te(fn);p(null,S,_,X)}}else q(Y,C,_,X,K,$,se)},re=(C,_,X)=>{const Z=_.component=C.component;if(sb(C,_,X))if(Z.asyncDep&&!Z.asyncResolved){Q(Z,_,X);return}else Z.next=_,Z.update();else _.el=C.el,Z.vnode=_},q=(C,_,X,Z,K,$,se)=>{const Y=()=>{if(C.isMounted){let{next:B,bu:G,u:V,parent:ce,vnode:ae}=C;{const Ae=Um(C);if(Ae){B&&(B.el=ae.el,Q(C,B,se)),Ae.asyncDep.then(()=>{C.isUnmounted||Y()});return}}let le=B,Fe;Mi(C,!1),B?(B.el=ae.el,Q(C,B,se)):B=ae,G&&Bl(G),(Fe=B.props&&B.props.onVnodeBeforeUpdate)&&tr(Fe,ce,B,ae),Mi(C,!0);const oe=Wl(C),ve=C.subTree;C.subTree=oe,v(ve,oe,d(ve.el),me(ve),C,K,$),B.el=oe.el,le===null&&ab(C,oe.el),V&&cn(V,K),(Fe=B.props&&B.props.onVnodeUpdated)&&cn(()=>tr(Fe,ce,B,ae),K)}else{let B;const{el:G,props:V}=_,{bm:ce,m:ae,parent:le,root:Fe,type:oe}=C,ve=Ao(_);if(Mi(C,!1),ce&&Bl(ce),!ve&&(B=V&&V.onVnodeBeforeMount)&&tr(B,le,_),Mi(C,!0),G&&tt){const Ae=()=>{C.subTree=Wl(C),tt(G,C.subTree,C,K,null)};ve&&oe.__asyncHydrate?oe.__asyncHydrate(G,C,Ae):Ae()}else{Fe.ce&&Fe.ce._injectChildStyle(oe);const Ae=C.subTree=Wl(C);v(null,Ae,X,Z,C,K,$),_.el=Ae.el}if(ae&&cn(ae,K),!ve&&(B=V&&V.onVnodeMounted)){const Ae=_;cn(()=>tr(B,le,Ae),K)}(_.shapeFlag&256||le&&Ao(le.vnode)&&le.vnode.shapeFlag&256)&&C.a&&cn(C.a,K),C.isMounted=!0,_=X=Z=null}};C.scope.on();const S=C.effect=new $p(Y);C.scope.off();const b=C.update=S.run.bind(S),I=C.job=S.runIfDirty.bind(S);I.i=C,I.id=C.uid,S.scheduler=()=>nd(I),Mi(C,!0),b()},Q=(C,_,X)=>{_.component=C;const Z=C.vnode.props;C.vnode=_,C.next=null,$v(C,_.props,Z,X),Kv(C,_.children,X),_i(),Zd(C),yi()},H=(C,_,X,Z,K,$,se,Y,S=!1)=>{const b=C&&C.children,I=C?C.shapeFlag:0,B=_.children,{patchFlag:G,shapeFlag:V}=_;if(G>0){if(G&128){pe(b,B,X,Z,K,$,se,Y,S);return}else if(G&256){de(b,B,X,Z,K,$,se,Y,S);return}}V&8?(I&16&&Me(b,K,$),B!==b&&u(X,B)):I&16?V&16?pe(b,B,X,Z,K,$,se,Y,S):Me(b,K,$,!0):(I&8&&u(X,""),V&16&&k(B,X,Z,K,$,se,Y,S))},de=(C,_,X,Z,K,$,se,Y,S)=>{C=C||Mo,_=_||Mo;const b=C.length,I=_.length,B=Math.min(b,I);let G;for(G=0;G<B;G++){const V=_[G]=S?ni(_[G]):ir(_[G]);v(C[G],V,X,null,K,$,se,Y,S)}b>I?Me(C,K,$,!0,!1,B):k(_,X,Z,K,$,se,Y,S,B)},pe=(C,_,X,Z,K,$,se,Y,S)=>{let b=0;const I=_.length;let B=C.length-1,G=I-1;for(;b<=B&&b<=G;){const V=C[b],ce=_[b]=S?ni(_[b]):ir(_[b]);if(Oi(V,ce))v(V,ce,X,null,K,$,se,Y,S);else break;b++}for(;b<=B&&b<=G;){const V=C[B],ce=_[G]=S?ni(_[G]):ir(_[G]);if(Oi(V,ce))v(V,ce,X,null,K,$,se,Y,S);else break;B--,G--}if(b>B){if(b<=G){const V=G+1,ce=V<I?_[V].el:Z;for(;b<=G;)v(null,_[b]=S?ni(_[b]):ir(_[b]),X,ce,K,$,se,Y,S),b++}}else if(b>G)for(;b<=B;)Le(C[b],K,$,!0),b++;else{const V=b,ce=b,ae=new Map;for(b=ce;b<=G;b++){const Ue=_[b]=S?ni(_[b]):ir(_[b]);Ue.key!=null&&ae.set(Ue.key,b)}let le,Fe=0;const oe=G-ce+1;let ve=!1,Ae=0;const De=new Array(oe);for(b=0;b<oe;b++)De[b]=0;for(b=V;b<=B;b++){const Ue=C[b];if(Fe>=oe){Le(Ue,K,$,!0);continue}let Ne;if(Ue.key!=null)Ne=ae.get(Ue.key);else for(le=ce;le<=G;le++)if(De[le-ce]===0&&Oi(Ue,_[le])){Ne=le;break}Ne===void 0?Le(Ue,K,$,!0):(De[Ne-ce]=b+1,Ne>=Ae?Ae=Ne:ve=!0,v(Ue,_[Ne],X,null,K,$,se,Y,S),Fe++)}const Ee=ve?Jv(De):Mo;for(le=Ee.length-1,b=oe-1;b>=0;b--){const Ue=ce+b,Ne=_[Ue],vt=Ue+1<I?_[Ue+1].el:Z;De[b]===0?v(null,Ne,X,vt,K,$,se,Y,S):ve&&(le<0||b!==Ee[le]?_e(Ne,X,vt,2):le--)}}},_e=(C,_,X,Z,K=null)=>{const{el:$,type:se,transition:Y,children:S,shapeFlag:b}=C;if(b&6){_e(C.component.subTree,_,X,Z);return}if(b&128){C.suspense.move(_,X,Z);return}if(b&64){se.move(C,_,X,Ve);return}if(se===kt){r($,_,X);for(let B=0;B<S.length;B++)_e(S[B],_,X,Z);r(C.anchor,_,X);return}if(se===jl){x(C,_,X);return}if(Z!==2&&b&1&&Y)if(Z===0)Y.beforeEnter($),r($,_,X),cn(()=>Y.enter($),K);else{const{leave:B,delayLeave:G,afterLeave:V}=Y,ce=()=>r($,_,X),ae=()=>{B($,()=>{ce(),V&&V()})};G?G($,ce,ae):ae()}else r($,_,X)},Le=(C,_,X,Z=!1,K=!1)=>{const{type:$,props:se,ref:Y,children:S,dynamicChildren:b,shapeFlag:I,patchFlag:B,dirs:G,cacheIndex:V}=C;if(B===-2&&(K=!1),Y!=null&&sl(Y,null,X,C,!0),V!=null&&(_.renderCache[V]=void 0),I&256){_.ctx.deactivate(C);return}const ce=I&1&&G,ae=!Ao(C);let le;if(ae&&(le=se&&se.onVnodeBeforeUnmount)&&tr(le,_,C),I&6)fe(C.component,X,Z);else{if(I&128){C.suspense.unmount(X,Z);return}ce&&wi(C,null,_,"beforeUnmount"),I&64?C.type.remove(C,_,X,Ve,Z):b&&!b.hasOnce&&($!==kt||B>0&&B&64)?Me(b,_,X,!1,!0):($===kt&&B&384||!K&&I&16)&&Me(S,_,X),Z&&ot(C)}(ae&&(le=se&&se.onVnodeUnmounted)||ce)&&cn(()=>{le&&tr(le,_,C),ce&&wi(C,null,_,"unmounted")},X)},ot=C=>{const{type:_,el:X,anchor:Z,transition:K}=C;if(_===kt){ne(X,Z);return}if(_===jl){y(C);return}const $=()=>{i(X),K&&!K.persisted&&K.afterLeave&&K.afterLeave()};if(C.shapeFlag&1&&K&&!K.persisted){const{leave:se,delayLeave:Y}=K,S=()=>se(X,$);Y?Y(C.el,$,S):S()}else $()},ne=(C,_)=>{let X;for(;C!==_;)X=f(C),i(C),C=X;i(_)},fe=(C,_,X)=>{const{bum:Z,scope:K,job:$,subTree:se,um:Y,m:S,a:b}=C;cf(S),cf(b),Z&&Bl(Z),K.stop(),$&&($.flags|=8,Le(se,C,_,X)),Y&&cn(Y,_),cn(()=>{C.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&C.asyncDep&&!C.asyncResolved&&C.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve())},Me=(C,_,X,Z=!1,K=!1,$=0)=>{for(let se=$;se<C.length;se++)Le(C[se],_,X,Z,K)},me=C=>{if(C.shapeFlag&6)return me(C.component.subTree);if(C.shapeFlag&128)return C.suspense.next();const _=f(C.anchor||C.el),X=_&&_[dm];return X?f(X):_};let Ie=!1;const Be=(C,_,X)=>{C==null?_._vnode&&Le(_._vnode,null,null,!0):v(_._vnode||null,C,_,null,null,null,X),_._vnode=C,Ie||(Ie=!0,Zd(),lm(),Ie=!1)},Ve={p:v,um:Le,m:_e,r:ot,mt:ee,mc:k,pc:H,pbc:w,n:me,o:n};let xt,tt;return{render:Be,hydrate:xt,createApp:Hv(Be,xt)}}function $l({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Mi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Zv(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function ud(n,e,t=!1){const r=n.children,i=e.children;if(He(r)&&He(i))for(let o=0;o<r.length;o++){const s=r[o];let a=i[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[o]=ni(i[o]),a.el=s.el),!t&&a.patchFlag!==-2&&ud(s,a)),a.type===Cl&&(a.el=s.el)}}function Jv(n){const e=n.slice(),t=[0];let r,i,o,s,a;const l=n.length;for(r=0;r<l;r++){const c=n[r];if(c!==0){if(i=t[t.length-1],n[i]<c){e[r]=i,t.push(r);continue}for(o=0,s=t.length-1;o<s;)a=o+s>>1,n[t[a]]<c?o=a+1:s=a;c<n[t[o]]&&(o>0&&(e[r]=t[o-1]),t[o]=r)}}for(o=t.length,s=t[o-1];o-- >0;)t[o]=s,s=e[s];return t}function Um(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Um(e)}function cf(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const Qv=Symbol.for("v-scx"),eb=()=>Xa(Qv);function si(n,e,t){return Fm(n,e,t)}function Fm(n,e,t=Et){const{immediate:r,deep:i,flush:o,once:s}=t,a=Ft({},t),l=e&&r||!e&&o!=="post";let c;if(Bs){if(o==="sync"){const h=eb();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=ar,h.resume=ar,h.pause=ar,h}}const u=qt;a.call=(h,g,v)=>er(h,u,g,v);let d=!1;o==="post"?a.scheduler=h=>{cn(h,u&&u.suspense)}:o!=="sync"&&(d=!0,a.scheduler=(h,g)=>{g?h():nd(h)}),a.augmentJob=h=>{e&&(h.flags|=4),d&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const f=pv(n,e,a);return Bs&&(c?c.push(f):l&&f()),f}function tb(n,e,t){const r=this.proxy,i=Lt(n)?n.includes(".")?zm(r,n):()=>r[n]:n.bind(r,r);let o;je(e)?o=e:(o=e.handler,t=e);const s=na(this),a=Fm(i,o.bind(r),t);return s(),a}function zm(n,e){const t=e.split(".");return()=>{let r=n;for(let i=0;i<t.length&&r;i++)r=r[t[i]];return r}}const nb=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${On(e)}Modifiers`]||n[`${$i(e)}Modifiers`];function rb(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||Et;let i=t;const o=e.startsWith("update:"),s=o&&nb(r,e.slice(7));s&&(s.trim&&(i=t.map(u=>Lt(u)?u.trim():u)),s.number&&(i=t.map(I0)));let a,l=r[a=Ol(e)]||r[a=Ol(On(e))];!l&&o&&(l=r[a=Ol($i(e))]),l&&er(l,n,6,i);const c=r[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,er(c,n,6,i)}}function Hm(n,e,t=!1){const r=e.emitsCache,i=r.get(n);if(i!==void 0)return i;const o=n.emits;let s={},a=!1;if(!je(n)){const l=c=>{const u=Hm(c,e,!0);u&&(a=!0,Ft(s,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!o&&!a?(Rt(n)&&r.set(n,null),null):(He(o)?o.forEach(l=>s[l]=null):Ft(s,o),Rt(n)&&r.set(n,s),s)}function El(n,e){return!n||!gl(e)?!1:(e=e.slice(2).replace(/Once$/,""),gt(n,e[0].toLowerCase()+e.slice(1))||gt(n,$i(e))||gt(n,e))}function Wl(n){const{type:e,vnode:t,proxy:r,withProxy:i,propsOptions:[o],slots:s,attrs:a,emit:l,render:c,renderCache:u,props:d,data:f,setupState:h,ctx:g,inheritAttrs:v}=n,m=ol(n);let p,E;try{if(t.shapeFlag&4){const y=i||r,R=y;p=ir(c.call(R,y,u,d,h,f,g)),E=a}else{const y=e;p=ir(y.length>1?y(d,{attrs:a,slots:s,emit:l}):y(d,null)),E=e.props?a:ib(a)}}catch(y){Ms.length=0,wl(y,n,1),p=Te(fn)}let x=p;if(E&&v!==!1){const y=Object.keys(E),{shapeFlag:R}=x;y.length&&R&7&&(o&&y.some(Wu)&&(E=ob(E,o)),x=vi(x,E,!1,!0))}return t.dirs&&(x=vi(x,null,!1,!0),x.dirs=x.dirs?x.dirs.concat(t.dirs):t.dirs),t.transition&&Ds(x,t.transition),p=x,ol(m),p}const ib=n=>{let e;for(const t in n)(t==="class"||t==="style"||gl(t))&&((e||(e={}))[t]=n[t]);return e},ob=(n,e)=>{const t={};for(const r in n)(!Wu(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function sb(n,e,t){const{props:r,children:i,component:o}=n,{props:s,children:a,patchFlag:l}=e,c=o.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return r?uf(r,s,c):!!s;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(s[f]!==r[f]&&!El(c,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===s?!1:r?s?uf(r,s,c):!0:!!s;return!1}function uf(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let i=0;i<r.length;i++){const o=r[i];if(e[o]!==n[o]&&!El(t,o))return!0}return!1}function ab({vnode:n,parent:e},t){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.el=n.el),r===n)(n=e.vnode).el=t,e=e.parent;else break}}const Vm=n=>n.__isSuspense;function lb(n,e){e&&e.pendingBranch?He(n)?e.effects.push(...n):e.effects.push(n):vv(n)}const kt=Symbol.for("v-fgt"),Cl=Symbol.for("v-txt"),fn=Symbol.for("v-cmt"),jl=Symbol.for("v-stc"),Ms=[];let Tn=null;function ge(n=!1){Ms.push(Tn=n?null:[])}function cb(){Ms.pop(),Tn=Ms[Ms.length-1]||null}let Ns=1;function df(n,e=!1){Ns+=n,n<0&&Tn&&e&&(Tn.hasOnce=!0)}function Gm(n){return n.dynamicChildren=Ns>0?Tn||Mo:null,cb(),Ns>0&&Tn&&Tn.push(n),n}function Pe(n,e,t,r,i,o){return Gm(J(n,e,t,r,i,o,!0))}function Wt(n,e,t,r,i){return Gm(Te(n,e,t,r,i,!0))}function Os(n){return n?n.__v_isVNode===!0:!1}function Oi(n,e){return n.type===e.type&&n.key===e.key}const $m=({key:n})=>n??null,Ka=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Lt(n)||rn(n)||je(n)?{i:$t,r:n,k:e,f:!!t}:n:null);function J(n,e=null,t=null,r=0,i=null,o=n===kt?0:1,s=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&$m(e),ref:e&&Ka(e),scopeId:um,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:$t};return a?(dd(l,t),o&128&&n.normalize(l)):t&&(l.shapeFlag|=Lt(t)?8:16),Ns>0&&!s&&Tn&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&Tn.push(l),l}const Te=ub;function ub(n,e=null,t=null,r=0,i=null,o=!1){if((!n||n===Tm)&&(n=fn),Os(n)){const a=vi(n,e,!0);return t&&dd(a,t),Ns>0&&!o&&Tn&&(a.shapeFlag&6?Tn[Tn.indexOf(n)]=a:Tn.push(a)),a.patchFlag=-2,a}if(_b(n)&&(n=n.__vccOpts),e){e=po(e);let{class:a,style:l}=e;a&&!Lt(a)&&(e.class=mi(a)),Rt(l)&&(td(l)&&!He(l)&&(l=Ft({},l)),e.style=lr(l))}const s=Lt(n)?1:Vm(n)?128:fm(n)?64:Rt(n)?4:je(n)?2:0;return J(n,e,t,r,i,s,o,!0)}function po(n){return n?td(n)||Lm(n)?Ft({},n):n:null}function vi(n,e,t=!1,r=!1){const{props:i,ref:o,patchFlag:s,children:a,transition:l}=n,c=e?he(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&$m(c),ref:e&&e.ref?t&&o?He(o)?o.concat(Ka(e)):[o,Ka(e)]:Ka(e):o,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==kt?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&vi(n.ssContent),ssFallback:n.ssFallback&&vi(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&r&&Ds(u,l.clone(u)),u}function Qe(n=" ",e=0){return Te(Cl,null,n,e)}function At(n="",e=!1){return e?(ge(),Wt(fn,null,n)):Te(fn,null,n)}function ir(n){return n==null||typeof n=="boolean"?Te(fn):He(n)?Te(kt,null,n.slice()):Os(n)?ni(n):Te(Cl,null,String(n))}function ni(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:vi(n)}function dd(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(He(e))t=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),dd(n,i()),i._c&&(i._d=!0));return}else{t=32;const i=e._;!i&&!Lm(e)?e._ctx=$t:i===3&&$t&&($t.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else je(e)?(e={default:e,_ctx:$t},t=32):(e=String(e),r&64?(t=16,e=[Qe(e)]):t=8);n.children=e,n.shapeFlag|=t}function he(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=mi([e.class,r.class]));else if(i==="style")e.style=lr([e.style,r.style]);else if(gl(i)){const o=e[i],s=r[i];s&&o!==s&&!(He(o)&&o.includes(s))&&(e[i]=o?[].concat(o,s):s)}else i!==""&&(e[i]=r[i])}return e}function tr(n,e,t,r=null){er(n,e,7,[t,r])}const db=Am();let fb=0;function hb(n,e,t){const r=n.type,i=(e?e.appContext:n.appContext)||db,o={uid:fb++,vnode:n,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new z0(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:km(r,i),emitsOptions:Hm(r,i),emit:null,emitted:null,propsDefaults:Et,inheritAttrs:r.inheritAttrs,ctx:Et,data:Et,props:Et,attrs:Et,slots:Et,refs:Et,setupState:Et,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=rb.bind(null,o),n.ce&&n.ce(o),o}let qt=null;const Wm=()=>qt||$t;let ll,Xc;{const n=yl(),e=(t,r)=>{let i;return(i=n[t])||(i=n[t]=[]),i.push(r),o=>{i.length>1?i.forEach(s=>s(o)):i[0](o)}};ll=e("__VUE_INSTANCE_SETTERS__",t=>qt=t),Xc=e("__VUE_SSR_SETTERS__",t=>Bs=t)}const na=n=>{const e=qt;return ll(n),n.scope.on(),()=>{n.scope.off(),ll(e)}},ff=()=>{qt&&qt.scope.off(),ll(null)};function jm(n){return n.vnode.shapeFlag&4}let Bs=!1;function pb(n,e=!1,t=!1){e&&Xc(e);const{props:r,children:i}=n.vnode,o=jm(n);Gv(n,r,o,e),Xv(n,i,t);const s=o?mb(n,e):void 0;return e&&Xc(!1),s}function mb(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Dv);const{setup:r}=t;if(r){_i();const i=n.setupContext=r.length>1?vb(n):null,o=na(n),s=ta(r,n,0,[n.props,i]),a=Bp(s);if(yi(),o(),(a||n.sp)&&!Ao(n)&&xm(n),a){if(s.then(ff,ff),e)return s.then(l=>{hf(n,l,e)}).catch(l=>{wl(l,n,0)});n.asyncDep=s}else hf(n,s,e)}else Xm(n,e)}function hf(n,e,t){je(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Rt(e)&&(n.setupState=im(e)),Xm(n,t)}let pf;function Xm(n,e,t){const r=n.type;if(!n.render){if(!e&&pf&&!r.render){const i=r.template||ld(n).template;if(i){const{isCustomElement:o,compilerOptions:s}=n.appContext.config,{delimiters:a,compilerOptions:l}=r,c=Ft(Ft({isCustomElement:o,delimiters:a},s),l);r.render=pf(i,c)}}n.render=r.render||ar}{const i=na(n);_i();try{Nv(n)}finally{yi(),i()}}}const gb={get(n,e){return tn(n,"get",""),n[e]}};function vb(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,gb),slots:n.slots,emit:n.emit,expose:e}}function Al(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(im(av(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in ws)return ws[t](n)},has(e,t){return t in e||t in ws}})):n.proxy}function bb(n,e=!0){return je(n)?n.displayName||n.name:n.name||e&&n.__name}function _b(n){return je(n)&&"__vccOpts"in n}const yb=(n,e)=>fv(n,e,Bs);function xb(n,e,t){const r=arguments.length;return r===2?Rt(e)&&!He(e)?Os(e)?Te(n,null,[e]):Te(n,e):Te(n,null,e):(r>3?t=Array.prototype.slice.call(arguments,2):r===3&&Os(t)&&(t=[t]),Te(n,e,t))}const Sb="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Kc;const mf=typeof window<"u"&&window.trustedTypes;if(mf)try{Kc=mf.createPolicy("vue",{createHTML:n=>n})}catch{}const Km=Kc?n=>Kc.createHTML(n):n=>n,wb="http://www.w3.org/2000/svg",Mb="http://www.w3.org/1998/Math/MathML",Ar=typeof document<"u"?document:null,gf=Ar&&Ar.createElement("template"),Tb={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const i=e==="svg"?Ar.createElementNS(wb,n):e==="mathml"?Ar.createElementNS(Mb,n):t?Ar.createElement(n,{is:t}):Ar.createElement(n);return n==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:n=>Ar.createTextNode(n),createComment:n=>Ar.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Ar.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,i,o){const s=t?t.previousSibling:e.lastChild;if(i&&(i===o||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),t),!(i===o||!(i=i.nextSibling)););else{gf.innerHTML=Km(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const a=gf.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[s?s.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},$r="transition",ns="animation",Us=Symbol("_vtc"),Ym={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Eb=Ft({},mm,Ym),Cb=n=>(n.displayName="Transition",n.props=Eb,n),qm=Cb((n,{slots:e})=>xb(Sv,Ab(n),e)),Ti=(n,e=[])=>{He(n)?n.forEach(t=>t(...e)):n&&n(...e)},vf=n=>n?He(n)?n.some(e=>e.length>1):n.length>1:!1;function Ab(n){const e={};for(const O in n)O in Ym||(e[O]=n[O]);if(n.css===!1)return e;const{name:t="v",type:r,duration:i,enterFromClass:o=`${t}-enter-from`,enterActiveClass:s=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=o,appearActiveClass:c=s,appearToClass:u=a,leaveFromClass:d=`${t}-leave-from`,leaveActiveClass:f=`${t}-leave-active`,leaveToClass:h=`${t}-leave-to`}=n,g=Rb(i),v=g&&g[0],m=g&&g[1],{onBeforeEnter:p,onEnter:E,onEnterCancelled:x,onLeave:y,onLeaveCancelled:R,onBeforeAppear:P=p,onAppear:A=E,onAppearCancelled:k=x}=e,M=(O,z,ee,re)=>{O._enterCancelled=re,Ei(O,z?u:a),Ei(O,z?c:s),ee&&ee()},w=(O,z)=>{O._isLeaving=!1,Ei(O,d),Ei(O,h),Ei(O,f),z&&z()},L=O=>(z,ee)=>{const re=O?A:E,q=()=>M(z,O,ee);Ti(re,[z,q]),bf(()=>{Ei(z,O?l:o),_r(z,O?u:a),vf(re)||_f(z,r,v,q)})};return Ft(e,{onBeforeEnter(O){Ti(p,[O]),_r(O,o),_r(O,s)},onBeforeAppear(O){Ti(P,[O]),_r(O,l),_r(O,c)},onEnter:L(!1),onAppear:L(!0),onLeave(O,z){O._isLeaving=!0;const ee=()=>w(O,z);_r(O,d),O._enterCancelled?(_r(O,f),Sf()):(Sf(),_r(O,f)),bf(()=>{O._isLeaving&&(Ei(O,d),_r(O,h),vf(y)||_f(O,r,m,ee))}),Ti(y,[O,ee])},onEnterCancelled(O){M(O,!1,void 0,!0),Ti(x,[O])},onAppearCancelled(O){M(O,!0,void 0,!0),Ti(k,[O])},onLeaveCancelled(O){w(O),Ti(R,[O])}})}function Rb(n){if(n==null)return null;if(Rt(n))return[Xl(n.enter),Xl(n.leave)];{const e=Xl(n);return[e,e]}}function Xl(n){return k0(n)}function _r(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Us]||(n[Us]=new Set)).add(e)}function Ei(n,e){e.split(/\s+/).forEach(r=>r&&n.classList.remove(r));const t=n[Us];t&&(t.delete(e),t.size||(n[Us]=void 0))}function bf(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Pb=0;function _f(n,e,t,r){const i=n._endId=++Pb,o=()=>{i===n._endId&&r()};if(t!=null)return setTimeout(o,t);const{type:s,timeout:a,propCount:l}=Lb(n,e);if(!s)return r();const c=s+"end";let u=0;const d=()=>{n.removeEventListener(c,f),o()},f=h=>{h.target===n&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),n.addEventListener(c,f)}function Lb(n,e){const t=window.getComputedStyle(n),r=g=>(t[g]||"").split(", "),i=r(`${$r}Delay`),o=r(`${$r}Duration`),s=yf(i,o),a=r(`${ns}Delay`),l=r(`${ns}Duration`),c=yf(a,l);let u=null,d=0,f=0;e===$r?s>0&&(u=$r,d=s,f=o.length):e===ns?c>0&&(u=ns,d=c,f=l.length):(d=Math.max(s,c),u=d>0?s>c?$r:ns:null,f=u?u===$r?o.length:l.length:0);const h=u===$r&&/\b(transform|all)(,|$)/.test(r(`${$r}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:h}}function yf(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,r)=>xf(t)+xf(n[r])))}function xf(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Sf(){return document.body.offsetHeight}function Ib(n,e,t){const r=n[Us];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const wf=Symbol("_vod"),kb=Symbol("_vsh"),Db=Symbol(""),Nb=/(^|;)\s*display\s*:/;function Ob(n,e,t){const r=n.style,i=Lt(t);let o=!1;if(t&&!i){if(e)if(Lt(e))for(const s of e.split(";")){const a=s.slice(0,s.indexOf(":")).trim();t[a]==null&&Ya(r,a,"")}else for(const s in e)t[s]==null&&Ya(r,s,"");for(const s in t)s==="display"&&(o=!0),Ya(r,s,t[s])}else if(i){if(e!==t){const s=r[Db];s&&(t+=";"+s),r.cssText=t,o=Nb.test(t)}}else e&&n.removeAttribute("style");wf in n&&(n[wf]=o?r.display:"",n[kb]&&(r.display="none"))}const Mf=/\s*!important$/;function Ya(n,e,t){if(He(t))t.forEach(r=>Ya(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=Bb(n,e);Mf.test(t)?n.setProperty($i(r),t.replace(Mf,""),"important"):n[r]=t}}const Tf=["Webkit","Moz","ms"],Kl={};function Bb(n,e){const t=Kl[e];if(t)return t;let r=On(e);if(r!=="filter"&&r in n)return Kl[e]=r;r=_l(r);for(let i=0;i<Tf.length;i++){const o=Tf[i]+r;if(o in n)return Kl[e]=o}return e}const Ef="http://www.w3.org/1999/xlink";function Cf(n,e,t,r,i,o=F0(e)){r&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Ef,e.slice(6,e.length)):n.setAttributeNS(Ef,e,t):t==null||o&&!Hp(t)?n.removeAttribute(e):n.setAttribute(e,o?"":zr(t)?String(t):t)}function Af(n,e,t,r,i){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Km(t):t);return}const o=n.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){const a=o==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let s=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Hp(t):t==null&&a==="string"?(t="",s=!0):a==="number"&&(t=0,s=!0)}try{n[e]=t}catch{}s&&n.removeAttribute(i||e)}function Ub(n,e,t,r){n.addEventListener(e,t,r)}function Fb(n,e,t,r){n.removeEventListener(e,t,r)}const Rf=Symbol("_vei");function zb(n,e,t,r,i=null){const o=n[Rf]||(n[Rf]={}),s=o[e];if(r&&s)s.value=r;else{const[a,l]=Hb(e);if(r){const c=o[e]=$b(r,i);Ub(n,a,c,l)}else s&&(Fb(n,a,s,l),o[e]=void 0)}}const Pf=/(?:Once|Passive|Capture)$/;function Hb(n){let e;if(Pf.test(n)){e={};let r;for(;r=n.match(Pf);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):$i(n.slice(2)),e]}let Yl=0;const Vb=Promise.resolve(),Gb=()=>Yl||(Vb.then(()=>Yl=0),Yl=Date.now());function $b(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;er(Wb(r,t.value),e,5,[r])};return t.value=n,t.attached=Gb(),t}function Wb(n,e){if(He(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const Lf=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,jb=(n,e,t,r,i,o)=>{const s=i==="svg";e==="class"?Ib(n,r,s):e==="style"?Ob(n,t,r):gl(e)?Wu(e)||zb(n,e,t,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Xb(n,e,r,s))?(Af(n,e,r),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Cf(n,e,r,s,o,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Lt(r))?Af(n,On(e),r,o,e):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),Cf(n,e,r,s))};function Xb(n,e,t,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in n&&Lf(e)&&je(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=n.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Lf(e)&&Lt(t)?!1:e in n}const Kb=Ft({patchProp:jb},Tb);let If;function Yb(){return If||(If=Yv(Kb))}const qb=(...n)=>{const e=Yb().createApp(...n),{mount:t}=e;return e.mount=r=>{const i=Jb(r);if(!i)return;const o=e._component;!je(o)&&!o.render&&!o.template&&(o.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const s=t(i,!1,Zb(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),s},e};function Zb(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Jb(n){return Lt(n)?document.querySelector(n):n}var Qb=Object.defineProperty,kf=Object.getOwnPropertySymbols,e_=Object.prototype.hasOwnProperty,t_=Object.prototype.propertyIsEnumerable,Df=(n,e,t)=>e in n?Qb(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,n_=(n,e)=>{for(var t in e||(e={}))e_.call(e,t)&&Df(n,t,e[t]);if(kf)for(var t of kf(e))t_.call(e,t)&&Df(n,t,e[t]);return n};function Cn(n){return n==null||n===""||Array.isArray(n)&&n.length===0||!(n instanceof Date)&&typeof n=="object"&&Object.keys(n).length===0}function r_(n,e,t,r=1){let i=-1;const o=Cn(n),s=Cn(e);return o&&s?i=0:o?i=r:s?i=-r:typeof n=="string"&&typeof e=="string"?i=t(n,e):i=n<e?-1:n>e?1:0,i}function Rl(n){return!!(n&&n.constructor&&n.call&&n.apply)}function Tt(n){return!Cn(n)}function i_(n,e){if(!n||!e)return null;try{const t=n[e];if(Tt(t))return t}catch{}if(Object.keys(n).length){if(Rl(e))return e(n);if(e.indexOf(".")===-1)return n[e];{let t=e.split("."),r=n;for(let i=0,o=t.length;i<o;++i){if(r==null)return null;r=r[t[i]]}return r}}return null}function ur(n,e=!0){return n instanceof Object&&n.constructor===Object&&(e||Object.keys(n).length!==0)}function kn(n,...e){return Rl(n)?n(...e):n}function _n(n,e=!0){return typeof n=="string"&&(e||n!=="")}function Xn(n){return _n(n)?n.replace(/(-|_)/g,"").toLowerCase():n}function fd(n,e="",t={}){const r=Xn(e).split("."),i=r.shift();return i?ur(n)?fd(kn(n[Object.keys(n).find(o=>Xn(o)===i)||""],t),r.join("."),t):void 0:kn(n,t)}function Pl(n,e=!0){return Array.isArray(n)&&(e||n.length!==0)}function o_(n){return Tt(n)&&!isNaN(n)}function s_(){return new Intl.Collator(void 0,{numeric:!0}).compare}function kr(n,e){if(e){const t=e.test(n);return e.lastIndex=0,t}return!1}function a_(...n){const e=(t={},r={})=>{const i=n_({},t);return Object.keys(r).forEach(o=>{ur(r[o])&&o in t&&ur(t[o])?i[o]=e(t[o],r[o]):i[o]=r[o]}),i};return n.reduce((t,r,i)=>i===0?r:e(t,r),{})}function Ts(n){return n&&n.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}function l_(n,e,t=1,r,i=1){const o=r_(n,e,r,t);let s=t;return(Cn(n)||Cn(e))&&(s=i===1?t:i),s*o}function c_(n){return _n(n,!1)?n[0].toUpperCase()+n.slice(1):n}function Zm(n){return _n(n)?n.replace(/(_)/g,"-").replace(/[A-Z]/g,(e,t)=>t===0?e:"-"+e.toLowerCase()).toLowerCase():n}function Nf(n){return _n(n)?n.replace(/[A-Z]/g,(e,t)=>t===0?e:"."+e.toLowerCase()).toLowerCase():n}function Jm(){const n=new Map;return{on(e,t){let r=n.get(e);return r?r.push(t):r=[t],n.set(e,r),this},off(e,t){let r=n.get(e);return r&&r.splice(r.indexOf(t)>>>0,1),this},emit(e,t){let r=n.get(e);r&&r.slice().map(i=>{i(t)})},clear(){n.clear()}}}var u_=Object.defineProperty,d_=Object.defineProperties,f_=Object.getOwnPropertyDescriptors,cl=Object.getOwnPropertySymbols,Qm=Object.prototype.hasOwnProperty,eg=Object.prototype.propertyIsEnumerable,Of=(n,e,t)=>e in n?u_(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Kn=(n,e)=>{for(var t in e||(e={}))Qm.call(e,t)&&Of(n,t,e[t]);if(cl)for(var t of cl(e))eg.call(e,t)&&Of(n,t,e[t]);return n},ql=(n,e)=>d_(n,f_(e)),yr=(n,e)=>{var t={};for(var r in n)Qm.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&cl)for(var r of cl(n))e.indexOf(r)<0&&eg.call(n,r)&&(t[r]=n[r]);return t},h_=Jm(),Wn=h_;function Bf(n,e){Pl(n)?n.push(...e||[]):ur(n)&&Object.assign(n,e)}function p_(n){return ur(n)&&n.hasOwnProperty("value")&&n.hasOwnProperty("type")?n.value:n}function m_(n){return n.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function Yc(n="",e=""){return m_(`${_n(n,!1)&&_n(e,!1)?`${n}-`:n}${e}`)}function tg(n="",e=""){return`--${Yc(n,e)}`}function g_(n=""){const e=(n.match(/{/g)||[]).length,t=(n.match(/}/g)||[]).length;return(e+t)%2!==0}function ng(n,e="",t="",r=[],i){if(_n(n)){const o=/{([^}]*)}/g,s=n.trim();if(g_(s))return;if(kr(s,o)){const a=s.replaceAll(o,u=>{const f=u.replace(/{|}/g,"").split(".").filter(h=>!r.some(g=>kr(h,g)));return`var(${tg(t,Zm(f.join("-")))}${Tt(i)?`, ${i}`:""})`}),l=/(\d+\s+[\+\-\*\/]\s+\d+)/g,c=/var\([^)]+\)/g;return kr(a.replace(c,"0"),l)?`calc(${a})`:a}return s}else if(o_(n))return n}function v_(n,e,t){_n(e,!1)&&n.push(`${e}:${t};`)}function mo(n,e){return n?`${n}{${e}}`:""}var Es=(...n)=>b_(wt.getTheme(),...n),b_=(n={},e,t,r)=>{if(e){const{variable:i,options:o}=wt.defaults||{},{prefix:s,transform:a}=(n==null?void 0:n.options)||o||{},c=kr(e,/{([^}]*)}/g)?e:`{${e}}`;return r==="value"||Cn(r)&&a==="strict"?wt.getTokenValue(e):ng(c,void 0,s,[i.excludedKeyRegex],t)}return""};function __(n,e={}){const t=wt.defaults.variable,{prefix:r=t.prefix,selector:i=t.selector,excludedKeyRegex:o=t.excludedKeyRegex}=e,s=(c,u="")=>Object.entries(c).reduce((d,[f,h])=>{const g=kr(f,o)?Yc(u):Yc(u,Zm(f)),v=p_(h);if(ur(v)){const{variables:m,tokens:p}=s(v,g);Bf(d.tokens,p),Bf(d.variables,m)}else d.tokens.push((r?g.replace(`${r}-`,""):g).replaceAll("-",".")),v_(d.variables,tg(g),ng(v,g,r,[o]));return d},{variables:[],tokens:[]}),{variables:a,tokens:l}=s(n,r);return{value:a,tokens:l,declarations:a.join(""),css:mo(i,a.join(""))}}var Hn={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(n){return{type:"class",selector:n,matched:this.pattern.test(n.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(n){return{type:"attr",selector:`:root${n}`,matched:this.pattern.test(n.trim())}}},media:{pattern:/^@media (.*)$/,resolve(n){return{type:"media",selector:`${n}{:root{[CSS]}}`,matched:this.pattern.test(n.trim())}}},system:{pattern:/^system$/,resolve(n){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(n.trim())}}},custom:{resolve(n){return{type:"custom",selector:n,matched:!0}}}},resolve(n){const e=Object.keys(this.rules).filter(t=>t!=="custom").map(t=>this.rules[t]);return[n].flat().map(t=>{var r;return(r=e.map(i=>i.resolve(t)).find(i=>i.matched))!=null?r:this.rules.custom.resolve(t)})}},_toVariables(n,e){return __(n,{prefix:e==null?void 0:e.prefix})},getCommon({name:n="",theme:e={},params:t,set:r,defaults:i}){var o,s,a,l,c,u,d;const{preset:f,options:h}=e;let g,v,m,p,E,x,y;if(Tt(f)&&h.transform!=="strict"){const{primitive:R,semantic:P,extend:A}=f,k=P||{},{colorScheme:M}=k,w=yr(k,["colorScheme"]),L=A||{},{colorScheme:O}=L,z=yr(L,["colorScheme"]),ee=M||{},{dark:re}=ee,q=yr(ee,["dark"]),Q=O||{},{dark:H}=Q,de=yr(Q,["dark"]),pe=Tt(R)?this._toVariables({primitive:R},h):{},_e=Tt(w)?this._toVariables({semantic:w},h):{},Le=Tt(q)?this._toVariables({light:q},h):{},ot=Tt(re)?this._toVariables({dark:re},h):{},ne=Tt(z)?this._toVariables({semantic:z},h):{},fe=Tt(de)?this._toVariables({light:de},h):{},Me=Tt(H)?this._toVariables({dark:H},h):{},[me,Ie]=[(o=pe.declarations)!=null?o:"",pe.tokens],[Be,Ve]=[(s=_e.declarations)!=null?s:"",_e.tokens||[]],[xt,tt]=[(a=Le.declarations)!=null?a:"",Le.tokens||[]],[C,_]=[(l=ot.declarations)!=null?l:"",ot.tokens||[]],[X,Z]=[(c=ne.declarations)!=null?c:"",ne.tokens||[]],[K,$]=[(u=fe.declarations)!=null?u:"",fe.tokens||[]],[se,Y]=[(d=Me.declarations)!=null?d:"",Me.tokens||[]];g=this.transformCSS(n,me,"light","variable",h,r,i),v=Ie;const S=this.transformCSS(n,`${Be}${xt}`,"light","variable",h,r,i),b=this.transformCSS(n,`${C}`,"dark","variable",h,r,i);m=`${S}${b}`,p=[...new Set([...Ve,...tt,..._])];const I=this.transformCSS(n,`${X}${K}color-scheme:light`,"light","variable",h,r,i),B=this.transformCSS(n,`${se}color-scheme:dark`,"dark","variable",h,r,i);E=`${I}${B}`,x=[...new Set([...Z,...$,...Y])],y=kn(f.css,{dt:Es})}return{primitive:{css:g,tokens:v},semantic:{css:m,tokens:p},global:{css:E,tokens:x},style:y}},getPreset({name:n="",preset:e={},options:t,params:r,set:i,defaults:o,selector:s}){var a,l,c;let u,d,f;if(Tt(e)&&t.transform!=="strict"){const h=n.replace("-directive",""),g=e,{colorScheme:v,extend:m,css:p}=g,E=yr(g,["colorScheme","extend","css"]),x=m||{},{colorScheme:y}=x,R=yr(x,["colorScheme"]),P=v||{},{dark:A}=P,k=yr(P,["dark"]),M=y||{},{dark:w}=M,L=yr(M,["dark"]),O=Tt(E)?this._toVariables({[h]:Kn(Kn({},E),R)},t):{},z=Tt(k)?this._toVariables({[h]:Kn(Kn({},k),L)},t):{},ee=Tt(A)?this._toVariables({[h]:Kn(Kn({},A),w)},t):{},[re,q]=[(a=O.declarations)!=null?a:"",O.tokens||[]],[Q,H]=[(l=z.declarations)!=null?l:"",z.tokens||[]],[de,pe]=[(c=ee.declarations)!=null?c:"",ee.tokens||[]],_e=this.transformCSS(h,`${re}${Q}`,"light","variable",t,i,o,s),Le=this.transformCSS(h,de,"dark","variable",t,i,o,s);u=`${_e}${Le}`,d=[...new Set([...q,...H,...pe])],f=kn(p,{dt:Es})}return{css:u,tokens:d,style:f}},getPresetC({name:n="",theme:e={},params:t,set:r,defaults:i}){var o;const{preset:s,options:a}=e,l=(o=s==null?void 0:s.components)==null?void 0:o[n];return this.getPreset({name:n,preset:l,options:a,params:t,set:r,defaults:i})},getPresetD({name:n="",theme:e={},params:t,set:r,defaults:i}){var o;const s=n.replace("-directive",""),{preset:a,options:l}=e,c=(o=a==null?void 0:a.directives)==null?void 0:o[s];return this.getPreset({name:s,preset:c,options:l,params:t,set:r,defaults:i})},applyDarkColorScheme(n){return!(n.darkModeSelector==="none"||n.darkModeSelector===!1)},getColorSchemeOption(n,e){var t;return this.applyDarkColorScheme(n)?this.regex.resolve(n.darkModeSelector===!0?e.options.darkModeSelector:(t=n.darkModeSelector)!=null?t:e.options.darkModeSelector):[]},getLayerOrder(n,e={},t,r){const{cssLayer:i}=e;return i?`@layer ${kn(i.order||"primeui",t)}`:""},getCommonStyleSheet({name:n="",theme:e={},params:t,props:r={},set:i,defaults:o}){const s=this.getCommon({name:n,theme:e,params:t,set:i,defaults:o}),a=Object.entries(r).reduce((l,[c,u])=>l.push(`${c}="${u}"`)&&l,[]).join(" ");return Object.entries(s||{}).reduce((l,[c,u])=>{if(u!=null&&u.css){const d=Ts(u==null?void 0:u.css),f=`${c}-variables`;l.push(`<style type="text/css" data-primevue-style-id="${f}" ${a}>${d}</style>`)}return l},[]).join("")},getStyleSheet({name:n="",theme:e={},params:t,props:r={},set:i,defaults:o}){var s;const a={name:n,theme:e,params:t,set:i,defaults:o},l=(s=n.includes("-directive")?this.getPresetD(a):this.getPresetC(a))==null?void 0:s.css,c=Object.entries(r).reduce((u,[d,f])=>u.push(`${d}="${f}"`)&&u,[]).join(" ");return l?`<style type="text/css" data-primevue-style-id="${n}-variables" ${c}>${Ts(l)}</style>`:""},createTokens(n={},e,t="",r="",i={}){return Object.entries(n).forEach(([o,s])=>{const a=kr(o,e.variable.excludedKeyRegex)?t:t?`${t}.${Nf(o)}`:Nf(o),l=r?`${r}.${o}`:o;ur(s)?this.createTokens(s,e,a,l,i):(i[a]||(i[a]={paths:[],computed(c,u={}){var d,f;return this.paths.length===1?(d=this.paths[0])==null?void 0:d.computed(this.paths[0].scheme,u.binding):c&&c!=="none"?(f=this.paths.find(h=>h.scheme===c))==null?void 0:f.computed(c,u.binding):this.paths.map(h=>h.computed(h.scheme,u[h.scheme]))}}),i[a].paths.push({path:l,value:s,scheme:l.includes("colorScheme.light")?"light":l.includes("colorScheme.dark")?"dark":"none",computed(c,u={}){const d=/{([^}]*)}/g;let f=s;if(u.name=this.path,u.binding||(u.binding={}),kr(s,d)){const g=s.trim().replaceAll(d,p=>{var E;const x=p.replace(/{|}/g,""),y=(E=i[x])==null?void 0:E.computed(c,u);return Pl(y)&&y.length===2?`light-dark(${y[0].value},${y[1].value})`:y==null?void 0:y.value}),v=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,m=/var\([^)]+\)/g;f=kr(g.replace(m,"0"),v)?`calc(${g})`:g}return Cn(u.binding)&&delete u.binding,{colorScheme:c,path:this.path,paths:u,value:f.includes("undefined")?void 0:f}}}))}),i},getTokenValue(n,e,t){var r;const o=(l=>l.split(".").filter(u=>!kr(u.toLowerCase(),t.variable.excludedKeyRegex)).join("."))(e),s=e.includes("colorScheme.light")?"light":e.includes("colorScheme.dark")?"dark":void 0,a=[(r=n[o])==null?void 0:r.computed(s)].flat().filter(l=>l);return a.length===1?a[0].value:a.reduce((l={},c)=>{const u=c,{colorScheme:d}=u,f=yr(u,["colorScheme"]);return l[d]=f,l},void 0)},getSelectorRule(n,e,t,r){return t==="class"||t==="attr"?mo(Tt(e)?`${n}${e},${n} ${e}`:n,r):mo(n,Tt(e)?mo(e,r):r)},transformCSS(n,e,t,r,i={},o,s,a){if(Tt(e)){const{cssLayer:l}=i;if(r!=="style"){const c=this.getColorSchemeOption(i,s);e=t==="dark"?c.reduce((u,{type:d,selector:f})=>(Tt(f)&&(u+=f.includes("[CSS]")?f.replace("[CSS]",e):this.getSelectorRule(f,a,d,e)),u),""):mo(a??":root",e)}if(l){const c={name:"primeui",order:"primeui"};ur(l)&&(c.name=kn(l.name,{name:n,type:r})),Tt(c.name)&&(e=mo(`@layer ${c.name}`,e),o==null||o.layerNames(c.name))}return e}return""}},wt={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(n={}){const{theme:e}=n;e&&(this._theme=ql(Kn({},e),{options:Kn(Kn({},this.defaults.options),e.options)}),this._tokens=Hn.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var n;return((n=this.theme)==null?void 0:n.preset)||{}},get options(){var n;return((n=this.theme)==null?void 0:n.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(n){this.update({theme:n}),Wn.emit("theme:change",n)},getPreset(){return this.preset},setPreset(n){this._theme=ql(Kn({},this.theme),{preset:n}),this._tokens=Hn.createTokens(n,this.defaults),this.clearLoadedStyleNames(),Wn.emit("preset:change",n),Wn.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(n){this._theme=ql(Kn({},this.theme),{options:n}),this.clearLoadedStyleNames(),Wn.emit("options:change",n),Wn.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(n){this._layerNames.add(n)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(n){return this._loadedStyleNames.has(n)},setLoadedStyleName(n){this._loadedStyleNames.add(n)},deleteLoadedStyleName(n){this._loadedStyleNames.delete(n)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(n){return Hn.getTokenValue(this.tokens,n,this.defaults)},getCommon(n="",e){return Hn.getCommon({name:n,theme:this.theme,params:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(n="",e){const t={name:n,theme:this.theme,params:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Hn.getPresetC(t)},getDirective(n="",e){const t={name:n,theme:this.theme,params:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Hn.getPresetD(t)},getCustomPreset(n="",e,t,r){const i={name:n,preset:e,options:this.options,selector:t,params:r,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Hn.getPreset(i)},getLayerOrderCSS(n=""){return Hn.getLayerOrder(n,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(n="",e,t="style",r){return Hn.transformCSS(n,e,r,t,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(n="",e,t={}){return Hn.getCommonStyleSheet({name:n,theme:this.theme,params:e,props:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(n,e,t={}){return Hn.getStyleSheet({name:n,theme:this.theme,params:e,props:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(n){this._loadingStyles.add(n)},onStyleUpdated(n){this._loadingStyles.add(n)},onStyleLoaded(n,{name:e}){this._loadingStyles.size&&(this._loadingStyles.delete(e),Wn.emit(`theme:${e}:load`,n),!this._loadingStyles.size&&Wn.emit("theme:load"))}};function rg(n,e){return n?n.classList?n.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(n.className):!1}function Ko(n,e){if(n&&e){const t=r=>{rg(n,r)||(n.classList?n.classList.add(r):n.className+=" "+r)};[e].flat().filter(Boolean).forEach(r=>r.split(" ").forEach(t))}}function y_(){return window.innerWidth-document.documentElement.offsetWidth}function ig(n){for(const e of document==null?void 0:document.styleSheets)try{for(const t of e==null?void 0:e.cssRules)for(const r of t==null?void 0:t.style)if(n.test(r))return{name:r,value:t.style.getPropertyValue(r).trim()}}catch{}return null}function og(n="p-overflow-hidden"){const e=ig(/-scrollbar-width$/);e!=null&&e.name&&document.body.style.setProperty(e.name,y_()+"px"),Ko(document.body,n)}function Po(n,e){if(n&&e){const t=r=>{n.classList?n.classList.remove(r):n.className=n.className.replace(new RegExp("(^|\\b)"+r.split(" ").join("|")+"(\\b|$)","gi")," ")};[e].flat().filter(Boolean).forEach(r=>r.split(" ").forEach(t))}}function qc(n="p-overflow-hidden"){const e=ig(/-scrollbar-width$/);e!=null&&e.name&&document.body.style.removeProperty(e.name),Po(document.body,n)}function x_(){let n=window,e=document,t=e.documentElement,r=e.getElementsByTagName("body")[0],i=n.innerWidth||t.clientWidth||r.clientWidth,o=n.innerHeight||t.clientHeight||r.clientHeight;return{width:i,height:o}}function S_(){let n=document.documentElement;return(window.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}function w_(){let n=document.documentElement;return(window.pageYOffset||n.scrollTop)-(n.clientTop||0)}function Jr(n,e){return n instanceof HTMLElement?n.offsetWidth:0}function Wi(n){return typeof HTMLElement=="object"?n instanceof HTMLElement:n&&typeof n=="object"&&n!==null&&n.nodeType===1&&typeof n.nodeName=="string"}function ul(n,e={}){if(Wi(n)){const t=(r,i)=>{var o,s;const a=(o=n==null?void 0:n.$attrs)!=null&&o[r]?[(s=n==null?void 0:n.$attrs)==null?void 0:s[r]]:[];return[i].flat().reduce((l,c)=>{if(c!=null){const u=typeof c;if(u==="string"||u==="number")l.push(c);else if(u==="object"){const d=Array.isArray(c)?t(r,c):Object.entries(c).map(([f,h])=>r==="style"&&(h||h===0)?`${f.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${h}`:h?f:void 0);l=d.length?l.concat(d.filter(f=>!!f)):l}}return l},a)};Object.entries(e).forEach(([r,i])=>{if(i!=null){const o=r.match(/^on(.+)/);o?n.addEventListener(o[1].toLowerCase(),i):r==="p-bind"||r==="pBind"?ul(n,i):(i=r==="class"?[...new Set(t("class",i))].join(" ").trim():r==="style"?t("style",i).join(";").trim():i,(n.$attrs=n.$attrs||{})&&(n.$attrs[r]=i),n.setAttribute(r,i))}})}}function Cs(n,e={},...t){if(n){const r=document.createElement(n);return ul(r,e),r.append(...t),r}}function M_(n,e){if(n){n.style.opacity="0";let t=+new Date,r="0",i=function(){r=`${+n.style.opacity+(new Date().getTime()-t)/e}`,n.style.opacity=r,t=+new Date,+r<1&&(window.requestAnimationFrame&&requestAnimationFrame(i)||setTimeout(i,16))};i()}}function go(n,e){return Wi(n)?Array.from(n.querySelectorAll(e)):[]}function Oo(n,e){return Wi(n)?n.matches(e)?n:n.querySelector(e):null}function _o(n,e){n&&document.activeElement!==n&&n.focus(e)}function Pr(n,e){if(Wi(n)){const t=n.getAttribute(e);return isNaN(t)?t==="true"||t==="false"?t==="true":t:+t}}function sg(n,e=""){let t=go(n,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`),r=[];for(let i of t)getComputedStyle(i).display!="none"&&getComputedStyle(i).visibility!="hidden"&&r.push(i);return r}function rs(n,e){const t=sg(n,e);return t.length>0?t[0]:null}function Uf(n){if(n){let e=n.offsetHeight,t=getComputedStyle(n);return e-=parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)+parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),e}return 0}function ag(n){if(n){let e=n.parentNode;return e&&e instanceof ShadowRoot&&e.host&&(e=e.host),e}return null}function T_(n,e){const t=sg(n,e);return t.length>0?t[t.length-1]:null}function E_(n){if(n){let e=n.getBoundingClientRect();return{top:e.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:e.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}}function Qr(n,e){return n?n.offsetHeight:0}function lg(n,e=[]){const t=ag(n);return t===null?e:lg(t,e.concat([t]))}function C_(n){let e=[];if(n){let t=lg(n);const r=/(auto|scroll)/,i=o=>{try{let s=window.getComputedStyle(o,null);return r.test(s.getPropertyValue("overflow"))||r.test(s.getPropertyValue("overflowX"))||r.test(s.getPropertyValue("overflowY"))}catch{return!1}};for(let o of t){let s=o.nodeType===1&&o.dataset.scrollselectors;if(s){let a=s.split(",");for(let l of a){let c=Oo(o,l);c&&i(c)&&e.push(c)}}o.nodeType!==9&&i(o)&&e.push(o)}}return e}function cg(n){return!!(n!==null&&typeof n<"u"&&n.nodeName&&ag(n))}function Ff(n){if(n){let e=n.offsetWidth,t=getComputedStyle(n);return e-=parseFloat(t.paddingLeft)+parseFloat(t.paddingRight)+parseFloat(t.borderLeftWidth)+parseFloat(t.borderRightWidth),e}return 0}function A_(n,e,t){return Wi(n)?Pr(n,e)===t:!1}function hd(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function zf(n,e=""){return Wi(n)?n.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`):!1}function R_(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function ug(n,e="",t){Wi(n)&&t!==null&&t!==void 0&&n.setAttribute(e,t)}var ha={};function pd(n="pui_id_"){return ha.hasOwnProperty(n)||(ha[n]=0),ha[n]++,`${n}${ha[n]}`}function P_(){let n=[];const e=(s,a,l=999)=>{const c=i(s,a,l),u=c.value+(c.key===s?0:l)+1;return n.push({key:s,value:u}),u},t=s=>{n=n.filter(a=>a.value!==s)},r=(s,a)=>i(s).value,i=(s,a,l=0)=>[...n].reverse().find(c=>!0)||{key:s,value:l},o=s=>s&&parseInt(s.style.zIndex,10)||0;return{get:o,set:(s,a,l)=>{a&&(a.style.zIndex=String(e(s,!0,l)))},clear:s=>{s&&(t(o(s)),s.style.zIndex="")},getCurrent:s=>r(s)}}var di=P_(),Jt={STARTS_WITH:"startsWith",CONTAINS:"contains",NOT_CONTAINS:"notContains",ENDS_WITH:"endsWith",EQUALS:"equals",NOT_EQUALS:"notEquals",IN:"in",LESS_THAN:"lt",LESS_THAN_OR_EQUAL_TO:"lte",GREATER_THAN:"gt",GREATER_THAN_OR_EQUAL_TO:"gte",BETWEEN:"between",DATE_IS:"dateIs",DATE_IS_NOT:"dateIsNot",DATE_BEFORE:"dateBefore",DATE_AFTER:"dateAfter"};function Fs(n){"@babel/helpers - typeof";return Fs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Fs(n)}function Hf(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function Vf(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Hf(Object(t),!0).forEach(function(r){L_(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Hf(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function L_(n,e,t){return(e=I_(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function I_(n){var e=k_(n,"string");return Fs(e)=="symbol"?e:e+""}function k_(n,e){if(Fs(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(Fs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function D_(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;Wm()?id(n):e?n():sm(n)}var N_=0;function O_(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=Wa(!1),r=Wa(n),i=Wa(null),o=hd()?window.document:void 0,s=e.document,a=s===void 0?o:s,l=e.immediate,c=l===void 0?!0:l,u=e.manual,d=u===void 0?!1:u,f=e.name,h=f===void 0?"style_".concat(++N_):f,g=e.id,v=g===void 0?void 0:g,m=e.media,p=m===void 0?void 0:m,E=e.nonce,x=E===void 0?void 0:E,y=e.first,R=y===void 0?!1:y,P=e.onMounted,A=P===void 0?void 0:P,k=e.onUpdated,M=k===void 0?void 0:k,w=e.onLoad,L=w===void 0?void 0:w,O=e.props,z=O===void 0?{}:O,ee=function(){},re=function(H){var de=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(a){var pe=Vf(Vf({},z),de),_e=pe.name||h,Le=pe.id||v,ot=pe.nonce||x;i.value=a.querySelector('style[data-primevue-style-id="'.concat(_e,'"]'))||a.getElementById(Le)||a.createElement("style"),i.value.isConnected||(r.value=H||n,ul(i.value,{type:"text/css",id:Le,media:p,nonce:ot}),R?a.head.prepend(i.value):a.head.appendChild(i.value),ug(i.value,"data-primevue-style-id",_e),ul(i.value,pe),i.value.onload=function(ne){return L==null?void 0:L(ne,{name:_e})},A==null||A(_e)),!t.value&&(ee=si(r,function(ne){i.value.textContent=ne,M==null||M(_e)},{immediate:!0}),t.value=!0)}},q=function(){!a||!t.value||(ee(),cg(i.value)&&a.head.removeChild(i.value),t.value=!1)};return c&&!d&&D_(re),{id:v,name:h,el:i,css:r,unload:q,load:re,isLoaded:Qu(t)}}function zs(n){"@babel/helpers - typeof";return zs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},zs(n)}function Gf(n,e){return z_(n)||F_(n,e)||U_(n,e)||B_()}function B_(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function U_(n,e){if(n){if(typeof n=="string")return $f(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?$f(n,e):void 0}}function $f(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=Array(e);t<e;t++)r[t]=n[t];return r}function F_(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r,i,o,s,a=[],l=!0,c=!1;try{if(o=(t=t.call(n)).next,e!==0)for(;!(l=(r=o.call(t)).done)&&(a.push(r.value),a.length!==e);l=!0);}catch(u){c=!0,i=u}finally{try{if(!l&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(c)throw i}}return a}}function z_(n){if(Array.isArray(n))return n}function Wf(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function Zl(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Wf(Object(t),!0).forEach(function(r){H_(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Wf(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function H_(n,e,t){return(e=V_(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function V_(n){var e=G_(n,"string");return zs(e)=="symbol"?e:e+""}function G_(n,e){if(zs(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(zs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var $_=function(e){var t=e.dt;return`
*,
::before,
::after {
    box-sizing: border-box;
}

/* Non vue overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* Vue based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-disabled,
.p-component:disabled {
    opacity: `.concat(t("disabled.opacity"),`;
}

.pi {
    font-size: `).concat(t("icon.size"),`;
}

.p-icon {
    width: `).concat(t("icon.size"),`;
    height: `).concat(t("icon.size"),`;
}

.p-overlay-mask {
    background: `).concat(t("mask.background"),`;
    color: `).concat(t("mask.color"),`;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation `).concat(t("mask.transition.duration"),` forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation `).concat(t("mask.transition.duration"),` forwards;
}

@keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: `).concat(t("mask.background"),`;
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: `).concat(t("mask.background"),`;
    }
    to {
        background: transparent;
    }
}
`)},W_=function(e){var t=e.dt;return`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: `.concat(t("scrollbar.width"),`;
}
`)},j_={},X_={},ut={name:"base",css:W_,theme:$_,classes:j_,inlineStyles:X_,load:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(o){return o},i=r(kn(e,{dt:Es}));return Tt(i)?O_(Ts(i),Zl({name:this.name},t)):{}},loadCSS:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return this.load(this.css,e)},loadTheme:function(){var e=this,t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return this.load(this.theme,t,function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return wt.transformCSS(t.name||e.name,"".concat(i).concat(r))})},getCommonTheme:function(e){return wt.getCommon(this.name,e)},getComponentTheme:function(e){return wt.getComponent(this.name,e)},getDirectiveTheme:function(e){return wt.getDirective(this.name,e)},getPresetTheme:function(e,t,r){return wt.getCustomPreset(this.name,e,t,r)},getLayerOrderThemeCSS:function(){return wt.getLayerOrderCSS(this.name)},getStyleSheet:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.css){var r=kn(this.css,{dt:Es})||"",i=Ts("".concat(r).concat(e)),o=Object.entries(t).reduce(function(s,a){var l=Gf(a,2),c=l[0],u=l[1];return s.push("".concat(c,'="').concat(u,'"'))&&s},[]).join(" ");return Tt(i)?'<style type="text/css" data-primevue-style-id="'.concat(this.name,'" ').concat(o,">").concat(i,"</style>"):""}return""},getCommonThemeStyleSheet:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return wt.getCommonStyleSheet(this.name,e,t)},getThemeStyleSheet:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=[wt.getStyleSheet(this.name,e,t)];if(this.theme){var i=this.name==="base"?"global-style":"".concat(this.name,"-style"),o=kn(this.theme,{dt:Es}),s=Ts(wt.transformCSS(i,o)),a=Object.entries(t).reduce(function(l,c){var u=Gf(c,2),d=u[0],f=u[1];return l.push("".concat(d,'="').concat(f,'"'))&&l},[]).join(" ");Tt(s)&&r.push('<style type="text/css" data-primevue-style-id="'.concat(i,'" ').concat(a,">").concat(s,"</style>"))}return r.join("")},extend:function(e){return Zl(Zl({},this),{},{css:void 0,theme:void 0},e)}},yo=Jm();function Hs(n){"@babel/helpers - typeof";return Hs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Hs(n)}function jf(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function pa(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?jf(Object(t),!0).forEach(function(r){K_(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):jf(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function K_(n,e,t){return(e=Y_(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Y_(n){var e=q_(n,"string");return Hs(e)=="symbol"?e:e+""}function q_(n,e){if(Hs(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(Hs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var Z_={ripple:!1,inputStyle:null,inputVariant:null,locale:{startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",completed:"Completed",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",today:"Today",weekHeader:"Wk",firstDayOfWeek:0,showMonthAfterYear:!1,dateFormat:"mm/dd/yy",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyFilterMessage:"No results found",searchMessage:"{0} results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",fileChosenMessage:"{0} files",noFileChosenMessage:"No file chosen",emptyMessage:"No available options",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"Page {page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List"}},filterMatchModeOptions:{text:[Jt.STARTS_WITH,Jt.CONTAINS,Jt.NOT_CONTAINS,Jt.ENDS_WITH,Jt.EQUALS,Jt.NOT_EQUALS],numeric:[Jt.EQUALS,Jt.NOT_EQUALS,Jt.LESS_THAN,Jt.LESS_THAN_OR_EQUAL_TO,Jt.GREATER_THAN,Jt.GREATER_THAN_OR_EQUAL_TO],date:[Jt.DATE_IS,Jt.DATE_IS_NOT,Jt.DATE_BEFORE,Jt.DATE_AFTER]},zIndex:{modal:1100,overlay:1e3,menu:1e3,tooltip:1100},theme:void 0,unstyled:!1,pt:void 0,ptOptions:{mergeSections:!0,mergeProps:!1},csp:{nonce:void 0}},J_=Symbol();function Q_(n,e){var t={config:Sl(e)};return n.config.globalProperties.$primevue=t,n.provide(J_,t),ey(),ty(n,t),t}var xo=[];function ey(){Wn.clear(),xo.forEach(function(n){return n==null?void 0:n()}),xo=[]}function ty(n,e){var t=Wa(!1),r=function(){var c;if(((c=e.config)===null||c===void 0?void 0:c.theme)!=="none"&&!wt.isStyleNameLoaded("common")){var u,d,f=((u=ut.getCommonTheme)===null||u===void 0?void 0:u.call(ut))||{},h=f.primitive,g=f.semantic,v=f.global,m=f.style,p={nonce:(d=e.config)===null||d===void 0||(d=d.csp)===null||d===void 0?void 0:d.nonce};ut.load(h==null?void 0:h.css,pa({name:"primitive-variables"},p)),ut.load(g==null?void 0:g.css,pa({name:"semantic-variables"},p)),ut.load(v==null?void 0:v.css,pa({name:"global-variables"},p)),ut.loadTheme(pa({name:"global-style"},p),m),wt.setLoadedStyleName("common")}};Wn.on("theme:change",function(l){t.value||(n.config.globalProperties.$primevue.config.theme=l,t.value=!0)});var i=si(e.config,function(l,c){yo.emit("config:change",{newValue:l,oldValue:c})},{immediate:!0,deep:!0}),o=si(function(){return e.config.ripple},function(l,c){yo.emit("config:ripple:change",{newValue:l,oldValue:c})},{immediate:!0,deep:!0}),s=si(function(){return e.config.theme},function(l,c){t.value||wt.setTheme(l),e.config.unstyled||r(),t.value=!1,yo.emit("config:theme:change",{newValue:l,oldValue:c})},{immediate:!0,deep:!1}),a=si(function(){return e.config.unstyled},function(l,c){!l&&e.config.theme&&r(),yo.emit("config:unstyled:change",{newValue:l,oldValue:c})},{immediate:!0,deep:!0});xo.push(i),xo.push(o),xo.push(s),xo.push(a)}var ny={install:function(e,t){var r=a_(Z_,t);Q_(e,r)}},ry={root:{transitionDuration:"{transition.duration}"},panel:{borderWidth:"0 0 1px 0",borderColor:"{content.border.color}"},header:{color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{text.color}",padding:"1.125rem",fontWeight:"600",borderRadius:"0",borderWidth:"0",borderColor:"{content.border.color}",background:"{content.background}",hoverBackground:"{content.background}",activeBackground:"{content.background}",activeHoverBackground:"{content.background}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"},toggleIcon:{color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{text.color}",activeHoverColor:"{text.color}"},first:{topBorderRadius:"{content.border.radius}",borderWidth:"0"},last:{bottomBorderRadius:"{content.border.radius}",activeBottomBorderRadius:"0"}},content:{borderWidth:"0",borderColor:"{content.border.color}",background:"{content.background}",color:"{text.color}",padding:"0 1.125rem 1.125rem 1.125rem"}},iy={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}"},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},dropdown:{width:"2.5rem",sm:{width:"2rem"},lg:{width:"3rem"},borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},chip:{borderRadius:"{border.radius.sm}"},emptyMessage:{padding:"{list.option.padding}"},colorScheme:{light:{chip:{focusBackground:"{surface.200}",focusColor:"{surface.800}"},dropdown:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}"}},dark:{chip:{focusBackground:"{surface.700}",focusColor:"{surface.0}"},dropdown:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}"}}}},oy={root:{width:"2rem",height:"2rem",fontSize:"1rem",background:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},icon:{size:"1rem"},group:{borderColor:"{content.background}",offset:"-0.75rem"},lg:{width:"3rem",height:"3rem",fontSize:"1.5rem",icon:{size:"1.5rem"},group:{offset:"-1rem"}},xl:{width:"4rem",height:"4rem",fontSize:"2rem",icon:{size:"2rem"},group:{offset:"-1.5rem"}}},sy={root:{borderRadius:"{border.radius.md}",padding:"0 0.5rem",fontSize:"0.75rem",fontWeight:"700",minWidth:"1.5rem",height:"1.5rem"},dot:{size:"0.5rem"},sm:{fontSize:"0.625rem",minWidth:"1.25rem",height:"1.25rem"},lg:{fontSize:"0.875rem",minWidth:"1.75rem",height:"1.75rem"},xl:{fontSize:"1rem",minWidth:"2rem",height:"2rem"},colorScheme:{light:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.100}",color:"{surface.600}"},success:{background:"{green.500}",color:"{surface.0}"},info:{background:"{sky.500}",color:"{surface.0}"},warn:{background:"{orange.500}",color:"{surface.0}"},danger:{background:"{red.500}",color:"{surface.0}"},contrast:{background:"{surface.950}",color:"{surface.0}"}},dark:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.800}",color:"{surface.300}"},success:{background:"{green.400}",color:"{green.950}"},info:{background:"{sky.400}",color:"{sky.950}"},warn:{background:"{orange.400}",color:"{orange.950}"},danger:{background:"{red.400}",color:"{red.950}"},contrast:{background:"{surface.0}",color:"{surface.950}"}}}},ay={primitive:{borderRadius:{none:"0",xs:"2px",sm:"4px",md:"6px",lg:"8px",xl:"12px"},emerald:{50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b",950:"#022c22"},green:{50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d",950:"#052e16"},lime:{50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314",950:"#1a2e05"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d",950:"#450a0a"},orange:{50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12",950:"#431407"},amber:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f",950:"#451a03"},yellow:{50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12",950:"#422006"},teal:{50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a",950:"#042f2e"},cyan:{50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63",950:"#083344"},sky:{50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e",950:"#082f49"},blue:{50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a",950:"#172554"},indigo:{50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81",950:"#1e1b4b"},violet:{50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95",950:"#2e1065"},purple:{50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87",950:"#3b0764"},fuchsia:{50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75",950:"#4a044e"},pink:{50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843",950:"#500724"},rose:{50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337",950:"#4c0519"},slate:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a",950:"#020617"},gray:{50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827",950:"#030712"},zinc:{50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b",950:"#09090b"},neutral:{50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717",950:"#0a0a0a"},stone:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917",950:"#0c0a09"}},semantic:{transitionDuration:"0.2s",focusRing:{width:"1px",style:"solid",color:"{primary.color}",offset:"2px",shadow:"none"},disabledOpacity:"0.6",iconSize:"1rem",anchorGutter:"2px",primary:{50:"{emerald.50}",100:"{emerald.100}",200:"{emerald.200}",300:"{emerald.300}",400:"{emerald.400}",500:"{emerald.500}",600:"{emerald.600}",700:"{emerald.700}",800:"{emerald.800}",900:"{emerald.900}",950:"{emerald.950}"},formField:{paddingX:"0.75rem",paddingY:"0.5rem",sm:{fontSize:"0.875rem",paddingX:"0.625rem",paddingY:"0.375rem"},lg:{fontSize:"1.125rem",paddingX:"0.875rem",paddingY:"0.625rem"},borderRadius:"{border.radius.md}",focusRing:{width:"0",style:"none",color:"transparent",offset:"0",shadow:"none"},transitionDuration:"{transition.duration}"},list:{padding:"0.25rem 0.25rem",gap:"2px",header:{padding:"0.5rem 1rem 0.25rem 1rem"},option:{padding:"0.5rem 0.75rem",borderRadius:"{border.radius.sm}"},optionGroup:{padding:"0.5rem 0.75rem",fontWeight:"600"}},content:{borderRadius:"{border.radius.md}"},mask:{transitionDuration:"0.15s"},navigation:{list:{padding:"0.25rem 0.25rem",gap:"2px"},item:{padding:"0.5rem 0.75rem",borderRadius:"{border.radius.sm}",gap:"0.5rem"},submenuLabel:{padding:"0.5rem 0.75rem",fontWeight:"600"},submenuIcon:{size:"0.875rem"}},overlay:{select:{borderRadius:"{border.radius.md}",shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"},popover:{borderRadius:"{border.radius.md}",padding:"0.75rem",shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"},modal:{borderRadius:"{border.radius.xl}",padding:"1.25rem",shadow:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"},navigation:{shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"}},colorScheme:{light:{surface:{0:"#ffffff",50:"{slate.50}",100:"{slate.100}",200:"{slate.200}",300:"{slate.300}",400:"{slate.400}",500:"{slate.500}",600:"{slate.600}",700:"{slate.700}",800:"{slate.800}",900:"{slate.900}",950:"{slate.950}"},primary:{color:"{primary.500}",contrastColor:"#ffffff",hoverColor:"{primary.600}",activeColor:"{primary.700}"},highlight:{background:"{primary.50}",focusBackground:"{primary.100}",color:"{primary.700}",focusColor:"{primary.800}"},mask:{background:"rgba(0,0,0,0.4)",color:"{surface.200}"},formField:{background:"{surface.0}",disabledBackground:"{surface.200}",filledBackground:"{surface.50}",filledHoverBackground:"{surface.50}",filledFocusBackground:"{surface.50}",borderColor:"{surface.300}",hoverBorderColor:"{surface.400}",focusBorderColor:"{primary.color}",invalidBorderColor:"{red.400}",color:"{surface.700}",disabledColor:"{surface.500}",placeholderColor:"{surface.500}",invalidPlaceholderColor:"{red.600}",floatLabelColor:"{surface.500}",floatLabelFocusColor:"{primary.600}",floatLabelActiveColor:"{surface.500}",floatLabelInvalidColor:"{form.field.invalid.placeholder.color}",iconColor:"{surface.400}",shadow:"0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"},text:{color:"{surface.700}",hoverColor:"{surface.800}",mutedColor:"{surface.500}",hoverMutedColor:"{surface.600}"},content:{background:"{surface.0}",hoverBackground:"{surface.100}",borderColor:"{surface.200}",color:"{text.color}",hoverColor:"{text.hover.color}"},overlay:{select:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"},popover:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"},modal:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"}},list:{option:{focusBackground:"{surface.100}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{text.color}",focusColor:"{text.hover.color}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",icon:{color:"{surface.400}",focusColor:"{surface.500}"}},optionGroup:{background:"transparent",color:"{text.muted.color}"}},navigation:{item:{focusBackground:"{surface.100}",activeBackground:"{surface.100}",color:"{text.color}",focusColor:"{text.hover.color}",activeColor:"{text.hover.color}",icon:{color:"{surface.400}",focusColor:"{surface.500}",activeColor:"{surface.500}"}},submenuLabel:{background:"transparent",color:"{text.muted.color}"},submenuIcon:{color:"{surface.400}",focusColor:"{surface.500}",activeColor:"{surface.500}"}}},dark:{surface:{0:"#ffffff",50:"{zinc.50}",100:"{zinc.100}",200:"{zinc.200}",300:"{zinc.300}",400:"{zinc.400}",500:"{zinc.500}",600:"{zinc.600}",700:"{zinc.700}",800:"{zinc.800}",900:"{zinc.900}",950:"{zinc.950}"},primary:{color:"{primary.400}",contrastColor:"{surface.900}",hoverColor:"{primary.300}",activeColor:"{primary.200}"},highlight:{background:"color-mix(in srgb, {primary.400}, transparent 84%)",focusBackground:"color-mix(in srgb, {primary.400}, transparent 76%)",color:"rgba(255,255,255,.87)",focusColor:"rgba(255,255,255,.87)"},mask:{background:"rgba(0,0,0,0.6)",color:"{surface.200}"},formField:{background:"{surface.950}",disabledBackground:"{surface.700}",filledBackground:"{surface.800}",filledHoverBackground:"{surface.800}",filledFocusBackground:"{surface.800}",borderColor:"{surface.600}",hoverBorderColor:"{surface.500}",focusBorderColor:"{primary.color}",invalidBorderColor:"{red.300}",color:"{surface.0}",disabledColor:"{surface.400}",placeholderColor:"{surface.400}",invalidPlaceholderColor:"{red.400}",floatLabelColor:"{surface.400}",floatLabelFocusColor:"{primary.color}",floatLabelActiveColor:"{surface.400}",floatLabelInvalidColor:"{form.field.invalid.placeholder.color}",iconColor:"{surface.400}",shadow:"0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"},text:{color:"{surface.0}",hoverColor:"{surface.0}",mutedColor:"{surface.400}",hoverMutedColor:"{surface.300}"},content:{background:"{surface.900}",hoverBackground:"{surface.800}",borderColor:"{surface.700}",color:"{text.color}",hoverColor:"{text.hover.color}"},overlay:{select:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"},popover:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"},modal:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"}},list:{option:{focusBackground:"{surface.800}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{text.color}",focusColor:"{text.hover.color}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",icon:{color:"{surface.500}",focusColor:"{surface.400}"}},optionGroup:{background:"transparent",color:"{text.muted.color}"}},navigation:{item:{focusBackground:"{surface.800}",activeBackground:"{surface.800}",color:"{text.color}",focusColor:"{text.hover.color}",activeColor:"{text.hover.color}",icon:{color:"{surface.500}",focusColor:"{surface.400}",activeColor:"{surface.400}"}},submenuLabel:{background:"transparent",color:"{text.muted.color}"},submenuIcon:{color:"{surface.500}",focusColor:"{surface.400}",activeColor:"{surface.400}"}}}}}},ly={root:{borderRadius:"{content.border.radius}"}},cy={root:{padding:"1rem",background:"{content.background}",gap:"0.5rem",transitionDuration:"{transition.duration}"},item:{color:"{text.muted.color}",hoverColor:"{text.color}",borderRadius:"{content.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",hoverColor:"{navigation.item.icon.focus.color}"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},separator:{color:"{navigation.item.icon.color}"}},uy={root:{borderRadius:"{form.field.border.radius}",roundedBorderRadius:"2rem",gap:"0.5rem",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",iconOnlyWidth:"2.5rem",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"},label:{fontWeight:"500"},raisedShadow:"0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"},badgeSize:"1rem",transitionDuration:"{form.field.transition.duration}"},colorScheme:{light:{root:{primary:{background:"{primary.color}",hoverBackground:"{primary.hover.color}",activeBackground:"{primary.active.color}",borderColor:"{primary.color}",hoverBorderColor:"{primary.hover.color}",activeBorderColor:"{primary.active.color}",color:"{primary.contrast.color}",hoverColor:"{primary.contrast.color}",activeColor:"{primary.contrast.color}",focusRing:{color:"{primary.color}",shadow:"none"}},secondary:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",borderColor:"{surface.100}",hoverBorderColor:"{surface.200}",activeBorderColor:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}",focusRing:{color:"{surface.600}",shadow:"none"}},info:{background:"{sky.500}",hoverBackground:"{sky.600}",activeBackground:"{sky.700}",borderColor:"{sky.500}",hoverBorderColor:"{sky.600}",activeBorderColor:"{sky.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{sky.500}",shadow:"none"}},success:{background:"{green.500}",hoverBackground:"{green.600}",activeBackground:"{green.700}",borderColor:"{green.500}",hoverBorderColor:"{green.600}",activeBorderColor:"{green.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{green.500}",shadow:"none"}},warn:{background:"{orange.500}",hoverBackground:"{orange.600}",activeBackground:"{orange.700}",borderColor:"{orange.500}",hoverBorderColor:"{orange.600}",activeBorderColor:"{orange.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{orange.500}",shadow:"none"}},help:{background:"{purple.500}",hoverBackground:"{purple.600}",activeBackground:"{purple.700}",borderColor:"{purple.500}",hoverBorderColor:"{purple.600}",activeBorderColor:"{purple.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{purple.500}",shadow:"none"}},danger:{background:"{red.500}",hoverBackground:"{red.600}",activeBackground:"{red.700}",borderColor:"{red.500}",hoverBorderColor:"{red.600}",activeBorderColor:"{red.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{red.500}",shadow:"none"}},contrast:{background:"{surface.950}",hoverBackground:"{surface.900}",activeBackground:"{surface.800}",borderColor:"{surface.950}",hoverBorderColor:"{surface.900}",activeBorderColor:"{surface.800}",color:"{surface.0}",hoverColor:"{surface.0}",activeColor:"{surface.0}",focusRing:{color:"{surface.950}",shadow:"none"}}},outlined:{primary:{hoverBackground:"{primary.50}",activeBackground:"{primary.100}",borderColor:"{primary.200}",color:"{primary.color}"},secondary:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.200}",color:"{surface.500}"},success:{hoverBackground:"{green.50}",activeBackground:"{green.100}",borderColor:"{green.200}",color:"{green.500}"},info:{hoverBackground:"{sky.50}",activeBackground:"{sky.100}",borderColor:"{sky.200}",color:"{sky.500}"},warn:{hoverBackground:"{orange.50}",activeBackground:"{orange.100}",borderColor:"{orange.200}",color:"{orange.500}"},help:{hoverBackground:"{purple.50}",activeBackground:"{purple.100}",borderColor:"{purple.200}",color:"{purple.500}"},danger:{hoverBackground:"{red.50}",activeBackground:"{red.100}",borderColor:"{red.200}",color:"{red.500}"},contrast:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.700}",color:"{surface.950}"},plain:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.200}",color:"{surface.700}"}},text:{primary:{hoverBackground:"{primary.50}",activeBackground:"{primary.100}",color:"{primary.color}"},secondary:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.500}"},success:{hoverBackground:"{green.50}",activeBackground:"{green.100}",color:"{green.500}"},info:{hoverBackground:"{sky.50}",activeBackground:"{sky.100}",color:"{sky.500}"},warn:{hoverBackground:"{orange.50}",activeBackground:"{orange.100}",color:"{orange.500}"},help:{hoverBackground:"{purple.50}",activeBackground:"{purple.100}",color:"{purple.500}"},danger:{hoverBackground:"{red.50}",activeBackground:"{red.100}",color:"{red.500}"},contrast:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.950}"},plain:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.700}"}},link:{color:"{primary.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}},dark:{root:{primary:{background:"{primary.color}",hoverBackground:"{primary.hover.color}",activeBackground:"{primary.active.color}",borderColor:"{primary.color}",hoverBorderColor:"{primary.hover.color}",activeBorderColor:"{primary.active.color}",color:"{primary.contrast.color}",hoverColor:"{primary.contrast.color}",activeColor:"{primary.contrast.color}",focusRing:{color:"{primary.color}",shadow:"none"}},secondary:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",borderColor:"{surface.800}",hoverBorderColor:"{surface.700}",activeBorderColor:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}",focusRing:{color:"{surface.300}",shadow:"none"}},info:{background:"{sky.400}",hoverBackground:"{sky.300}",activeBackground:"{sky.200}",borderColor:"{sky.400}",hoverBorderColor:"{sky.300}",activeBorderColor:"{sky.200}",color:"{sky.950}",hoverColor:"{sky.950}",activeColor:"{sky.950}",focusRing:{color:"{sky.400}",shadow:"none"}},success:{background:"{green.400}",hoverBackground:"{green.300}",activeBackground:"{green.200}",borderColor:"{green.400}",hoverBorderColor:"{green.300}",activeBorderColor:"{green.200}",color:"{green.950}",hoverColor:"{green.950}",activeColor:"{green.950}",focusRing:{color:"{green.400}",shadow:"none"}},warn:{background:"{orange.400}",hoverBackground:"{orange.300}",activeBackground:"{orange.200}",borderColor:"{orange.400}",hoverBorderColor:"{orange.300}",activeBorderColor:"{orange.200}",color:"{orange.950}",hoverColor:"{orange.950}",activeColor:"{orange.950}",focusRing:{color:"{orange.400}",shadow:"none"}},help:{background:"{purple.400}",hoverBackground:"{purple.300}",activeBackground:"{purple.200}",borderColor:"{purple.400}",hoverBorderColor:"{purple.300}",activeBorderColor:"{purple.200}",color:"{purple.950}",hoverColor:"{purple.950}",activeColor:"{purple.950}",focusRing:{color:"{purple.400}",shadow:"none"}},danger:{background:"{red.400}",hoverBackground:"{red.300}",activeBackground:"{red.200}",borderColor:"{red.400}",hoverBorderColor:"{red.300}",activeBorderColor:"{red.200}",color:"{red.950}",hoverColor:"{red.950}",activeColor:"{red.950}",focusRing:{color:"{red.400}",shadow:"none"}},contrast:{background:"{surface.0}",hoverBackground:"{surface.100}",activeBackground:"{surface.200}",borderColor:"{surface.0}",hoverBorderColor:"{surface.100}",activeBorderColor:"{surface.200}",color:"{surface.950}",hoverColor:"{surface.950}",activeColor:"{surface.950}",focusRing:{color:"{surface.0}",shadow:"none"}}},outlined:{primary:{hoverBackground:"color-mix(in srgb, {primary.color}, transparent 96%)",activeBackground:"color-mix(in srgb, {primary.color}, transparent 84%)",borderColor:"{primary.700}",color:"{primary.color}"},secondary:{hoverBackground:"rgba(255,255,255,0.04)",activeBackground:"rgba(255,255,255,0.16)",borderColor:"{surface.700}",color:"{surface.400}"},success:{hoverBackground:"color-mix(in srgb, {green.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {green.400}, transparent 84%)",borderColor:"{green.700}",color:"{green.400}"},info:{hoverBackground:"color-mix(in srgb, {sky.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {sky.400}, transparent 84%)",borderColor:"{sky.700}",color:"{sky.400}"},warn:{hoverBackground:"color-mix(in srgb, {orange.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {orange.400}, transparent 84%)",borderColor:"{orange.700}",color:"{orange.400}"},help:{hoverBackground:"color-mix(in srgb, {purple.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {purple.400}, transparent 84%)",borderColor:"{purple.700}",color:"{purple.400}"},danger:{hoverBackground:"color-mix(in srgb, {red.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {red.400}, transparent 84%)",borderColor:"{red.700}",color:"{red.400}"},contrast:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{surface.500}",color:"{surface.0}"},plain:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{surface.600}",color:"{surface.0}"}},text:{primary:{hoverBackground:"color-mix(in srgb, {primary.color}, transparent 96%)",activeBackground:"color-mix(in srgb, {primary.color}, transparent 84%)",color:"{primary.color}"},secondary:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.400}"},success:{hoverBackground:"color-mix(in srgb, {green.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {green.400}, transparent 84%)",color:"{green.400}"},info:{hoverBackground:"color-mix(in srgb, {sky.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {sky.400}, transparent 84%)",color:"{sky.400}"},warn:{hoverBackground:"color-mix(in srgb, {orange.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {orange.400}, transparent 84%)",color:"{orange.400}"},help:{hoverBackground:"color-mix(in srgb, {purple.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {purple.400}, transparent 84%)",color:"{purple.400}"},danger:{hoverBackground:"color-mix(in srgb, {red.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {red.400}, transparent 84%)",color:"{red.400}"},contrast:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.0}"},plain:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.0}"}},link:{color:"{primary.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}}}},dy={root:{background:"{content.background}",borderRadius:"{border.radius.xl}",color:"{content.color}",shadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)"},body:{padding:"1.25rem",gap:"0.5rem"},caption:{gap:"0.5rem"},title:{fontSize:"1.25rem",fontWeight:"500"},subtitle:{color:"{text.muted.color}"}},fy={root:{transitionDuration:"{transition.duration}"},content:{gap:"0.25rem"},indicatorList:{padding:"1rem",gap:"0.5rem"},indicator:{width:"2rem",height:"0.5rem",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},colorScheme:{light:{indicator:{background:"{surface.200}",hoverBackground:"{surface.300}",activeBackground:"{primary.color}"}},dark:{indicator:{background:"{surface.700}",hoverBackground:"{surface.600}",activeBackground:"{primary.color}"}}}},hy={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}",mobileIndent:"1rem"},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}",icon:{color:"{list.option.icon.color}",focusColor:"{list.option.icon.focus.color}",size:"0.875rem"}},clearIcon:{color:"{form.field.icon.color}"}},py={root:{borderRadius:"{border.radius.sm}",width:"1.25rem",height:"1.25rem",background:"{form.field.background}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.border.color}",checkedBorderColor:"{primary.color}",checkedHoverBorderColor:"{primary.hover.color}",checkedFocusBorderColor:"{primary.color}",checkedDisabledBorderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",shadow:"{form.field.shadow}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{width:"1rem",height:"1rem"},lg:{width:"1.5rem",height:"1.5rem"}},icon:{size:"0.875rem",color:"{form.field.color}",checkedColor:"{primary.contrast.color}",checkedHoverColor:"{primary.contrast.color}",disabledColor:"{form.field.disabled.color}",sm:{size:"0.75rem"},lg:{size:"1rem"}}},my={root:{borderRadius:"16px",paddingX:"0.75rem",paddingY:"0.5rem",gap:"0.5rem",transitionDuration:"{transition.duration}"},image:{width:"2rem",height:"2rem"},icon:{size:"1rem"},removeIcon:{size:"1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"}},colorScheme:{light:{root:{background:"{surface.100}",color:"{surface.800}"},icon:{color:"{surface.800}"},removeIcon:{color:"{surface.800}"}},dark:{root:{background:"{surface.800}",color:"{surface.0}"},icon:{color:"{surface.0}"},removeIcon:{color:"{surface.0}"}}}},gy={root:{transitionDuration:"{transition.duration}"},preview:{width:"1.5rem",height:"1.5rem",borderRadius:"{form.field.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},panel:{shadow:"{overlay.popover.shadow}",borderRadius:"{overlay.popover.borderRadius}"},colorScheme:{light:{panel:{background:"{surface.800}",borderColor:"{surface.900}"},handle:{color:"{surface.0}"}},dark:{panel:{background:"{surface.900}",borderColor:"{surface.700}"},handle:{color:"{surface.0}"}}}},vy={icon:{size:"2rem",color:"{overlay.modal.color}"},content:{gap:"1rem"}},by={root:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",color:"{overlay.popover.color}",borderRadius:"{overlay.popover.border.radius}",shadow:"{overlay.popover.shadow}",gutter:"10px",arrowOffset:"1.25rem"},content:{padding:"{overlay.popover.padding}",gap:"1rem"},icon:{size:"1.5rem",color:"{overlay.popover.color}"},footer:{gap:"0.5rem",padding:"0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}"}},_y={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},list:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},submenu:{mobileIndent:"1rem"},submenuIcon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},separator:{borderColor:"{content.border.color}"}},yy={root:{transitionDuration:"{transition.duration}"},header:{background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},headerCell:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{datatable.border.color}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",gap:"0.5rem",padding:"0.75rem 1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},columnTitle:{fontWeight:"600"},row:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},bodyCell:{borderColor:"{datatable.border.color}",padding:"0.75rem 1rem"},footerCell:{background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",padding:"0.75rem 1rem"},columnFooter:{fontWeight:"600"},footer:{background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},dropPoint:{color:"{primary.color}"},columnResizerWidth:"0.5rem",resizeIndicator:{width:"1px",color:"{primary.color}"},sortIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",size:"0.875rem"},loadingIcon:{size:"2rem"},rowToggleButton:{hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",selectedHoverColor:"{primary.color}",size:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},filter:{inlineGap:"0.5rem",overlaySelect:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},overlayPopover:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",borderRadius:"{overlay.popover.border.radius}",color:"{overlay.popover.color}",shadow:"{overlay.popover.shadow}",padding:"{overlay.popover.padding}",gap:"0.5rem"},rule:{borderColor:"{content.border.color}"},constraintList:{padding:"{list.padding}",gap:"{list.gap}"},constraint:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",separator:{borderColor:"{content.border.color}"},padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"}},paginatorTop:{borderColor:"{datatable.border.color}",borderWidth:"0 0 1px 0"},paginatorBottom:{borderColor:"{datatable.border.color}",borderWidth:"0 0 1px 0"},colorScheme:{light:{root:{borderColor:"{content.border.color}"},row:{stripedBackground:"{surface.50}"},bodyCell:{selectedBorderColor:"{primary.100}"}},dark:{root:{borderColor:"{surface.800}"},row:{stripedBackground:"{surface.950}"},bodyCell:{selectedBorderColor:"{primary.900}"}}}},xy={root:{borderColor:"transparent",borderWidth:"0",borderRadius:"0",padding:"0"},header:{background:"{content.background}",color:"{content.color}",borderColor:"{content.border.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem",borderRadius:"0"},content:{background:"{content.background}",color:"{content.color}",borderColor:"transparent",borderWidth:"0",padding:"0",borderRadius:"0"},footer:{background:"{content.background}",color:"{content.color}",borderColor:"{content.border.color}",borderWidth:"1px 0 0 0",padding:"0.75rem 1rem",borderRadius:"0"},paginatorTop:{borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},paginatorBottom:{borderColor:"{content.border.color}",borderWidth:"1px 0 0 0"}},Sy={root:{transitionDuration:"{transition.duration}"},panel:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.popover.shadow}",padding:"{overlay.popover.padding}"},header:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",padding:"0 0 0.5rem 0"},title:{gap:"0.5rem",fontWeight:"500"},dropdown:{width:"2.5rem",sm:{width:"2rem"},lg:{width:"3rem"},borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},inputIcon:{color:"{form.field.icon.color}"},selectMonth:{hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",padding:"0.25rem 0.5rem",borderRadius:"{content.border.radius}"},selectYear:{hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",padding:"0.25rem 0.5rem",borderRadius:"{content.border.radius}"},group:{borderColor:"{content.border.color}",gap:"{overlay.popover.padding}"},dayView:{margin:"0.5rem 0 0 0"},weekDay:{padding:"0.25rem",fontWeight:"500",color:"{content.color}"},date:{hoverBackground:"{content.hover.background}",selectedBackground:"{primary.color}",rangeSelectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{primary.contrast.color}",rangeSelectedColor:"{highlight.color}",width:"2rem",height:"2rem",borderRadius:"50%",padding:"0.25rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},monthView:{margin:"0.5rem 0 0 0"},month:{padding:"0.375rem",borderRadius:"{content.border.radius}"},yearView:{margin:"0.5rem 0 0 0"},year:{padding:"0.375rem",borderRadius:"{content.border.radius}"},buttonbar:{padding:"0.5rem 0 0 0",borderColor:"{content.border.color}"},timePicker:{padding:"0.5rem 0 0 0",borderColor:"{content.border.color}",gap:"0.5rem",buttonGap:"0.25rem"},colorScheme:{light:{dropdown:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}"},today:{background:"{surface.200}",color:"{surface.900}"}},dark:{dropdown:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}"},today:{background:"{surface.700}",color:"{surface.0}"}}}},wy={root:{background:"{overlay.modal.background}",borderColor:"{overlay.modal.border.color}",color:"{overlay.modal.color}",borderRadius:"{overlay.modal.border.radius}",shadow:"{overlay.modal.shadow}"},header:{padding:"{overlay.modal.padding}",gap:"0.5rem"},title:{fontSize:"1.25rem",fontWeight:"600"},content:{padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"},footer:{padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}",gap:"0.5rem"}},My={root:{borderColor:"{content.border.color}"},content:{background:"{content.background}",color:"{text.color}"},horizontal:{margin:"1rem 0",padding:"0 1rem",content:{padding:"0 0.5rem"}},vertical:{margin:"0 1rem",padding:"0.5rem 0",content:{padding:"0.5rem 0"}}},Ty={root:{background:"rgba(255, 255, 255, 0.1)",borderColor:"rgba(255, 255, 255, 0.2)",padding:"0.5rem",borderRadius:"{border.radius.xl}"},item:{borderRadius:"{content.border.radius}",padding:"0.5rem",size:"3rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}},Ey={root:{background:"{overlay.modal.background}",borderColor:"{overlay.modal.border.color}",color:"{overlay.modal.color}",shadow:"{overlay.modal.shadow}"},header:{padding:"{overlay.modal.padding}"},title:{fontSize:"1.5rem",fontWeight:"600"},content:{padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"},footer:{padding:"{overlay.modal.padding}"}},Cy={toolbar:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}"},toolbarItem:{color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}",padding:"{list.padding}"},overlayOption:{focusBackground:"{list.option.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},content:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"}},Ay={root:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",padding:"0 1.125rem 1.125rem 1.125rem",transitionDuration:"{transition.duration}"},legend:{background:"{content.background}",hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",borderRadius:"{content.border.radius}",borderWidth:"1px",borderColor:"transparent",padding:"0.5rem 0.75rem",gap:"0.5rem",fontWeight:"600",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},toggleIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}"},content:{padding:"0"}},Ry={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",transitionDuration:"{transition.duration}"},header:{background:"transparent",color:"{text.color}",padding:"1.125rem",borderColor:"unset",borderWidth:"0",borderRadius:"0",gap:"0.5rem"},content:{highlightBorderColor:"{primary.color}",padding:"0 1.125rem 1.125rem 1.125rem",gap:"1rem"},file:{padding:"1rem",gap:"1rem",borderColor:"{content.border.color}",info:{gap:"0.5rem"}},fileList:{gap:"0.5rem"},progressbar:{height:"0.25rem"},basic:{gap:"0.5rem"}},Py={root:{color:"{form.field.float.label.color}",focusColor:"{form.field.float.label.focus.color}",activeColor:"{form.field.float.label.active.color}",invalidColor:"{form.field.float.label.invalid.color}",transitionDuration:"0.2s",positionX:"{form.field.padding.x}",positionY:"{form.field.padding.y}",fontWeight:"500",active:{fontSize:"0.75rem",fontWeight:"400"}},over:{active:{top:"-1.25rem"}},in:{input:{paddingTop:"1.5rem",paddingBottom:"{form.field.padding.y}"},active:{top:"{form.field.padding.y}"}},on:{borderRadius:"{border.radius.xs}",active:{background:"{form.field.background}",padding:"0 0.125rem"}}},Ly={root:{borderWidth:"1px",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",transitionDuration:"{transition.duration}"},navButton:{background:"rgba(255, 255, 255, 0.1)",hoverBackground:"rgba(255, 255, 255, 0.2)",color:"{surface.100}",hoverColor:"{surface.0}",size:"3rem",gutter:"0.5rem",prev:{borderRadius:"50%"},next:{borderRadius:"50%"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},navIcon:{size:"1.5rem"},thumbnailsContent:{background:"{content.background}",padding:"1rem 0.25rem"},thumbnailNavButton:{size:"2rem",borderRadius:"{content.border.radius}",gutter:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},thumbnailNavButtonIcon:{size:"1rem"},caption:{background:"rgba(0, 0, 0, 0.5)",color:"{surface.100}",padding:"1rem"},indicatorList:{gap:"0.5rem",padding:"1rem"},indicatorButton:{width:"1rem",height:"1rem",activeBackground:"{primary.color}",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},insetIndicatorList:{background:"rgba(0, 0, 0, 0.5)"},insetIndicatorButton:{background:"rgba(255, 255, 255, 0.4)",hoverBackground:"rgba(255, 255, 255, 0.6)",activeBackground:"rgba(255, 255, 255, 0.9)"},closeButton:{size:"3rem",gutter:"0.5rem",background:"rgba(255, 255, 255, 0.1)",hoverBackground:"rgba(255, 255, 255, 0.2)",color:"{surface.50}",hoverColor:"{surface.0}",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},closeButtonIcon:{size:"1.5rem"},colorScheme:{light:{thumbnailNavButton:{hoverBackground:"{surface.100}",color:"{surface.600}",hoverColor:"{surface.700}"},indicatorButton:{background:"{surface.200}",hoverBackground:"{surface.300}"}},dark:{thumbnailNavButton:{hoverBackground:"{surface.700}",color:"{surface.400}",hoverColor:"{surface.0}"},indicatorButton:{background:"{surface.700}",hoverBackground:"{surface.600}"}}}},Iy={icon:{color:"{form.field.icon.color}"}},ky={root:{color:"{form.field.float.label.color}",focusColor:"{form.field.float.label.focus.color}",invalidColor:"{form.field.float.label.invalid.color}",transitionDuration:"0.2s",positionX:"{form.field.padding.x}",top:"{form.field.padding.y}",fontSize:"0.75rem",fontWeight:"400"},input:{paddingTop:"1.5rem",paddingBottom:"{form.field.padding.y}"}},Dy={root:{transitionDuration:"{transition.duration}"},preview:{icon:{size:"1.5rem"},mask:{background:"{mask.background}",color:"{mask.color}"}},toolbar:{position:{left:"auto",right:"1rem",top:"1rem",bottom:"auto"},blur:"8px",background:"rgba(255,255,255,0.1)",borderColor:"rgba(255,255,255,0.2)",borderWidth:"1px",borderRadius:"30px",padding:".5rem",gap:"0.5rem"},action:{hoverBackground:"rgba(255,255,255,0.1)",color:"{surface.50}",hoverColor:"{surface.0}",size:"3rem",iconSize:"1.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}},Ny={handle:{size:"15px",hoverSize:"30px",background:"rgba(255,255,255,0.3)",hoverBackground:"rgba(255,255,255,0.3)",borderColor:"unset",hoverBorderColor:"unset",borderWidth:"0",borderRadius:"50%",transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"rgba(255,255,255,0.3)",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}},Oy={root:{padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{content.border.radius}",gap:"0.5rem"},text:{fontWeight:"500"},icon:{size:"1rem"},colorScheme:{light:{info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"}},dark:{info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"}}}},By={root:{padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{transition.duration}"},display:{hoverBackground:"{content.hover.background}",hoverColor:"{content.hover.color}"}},Uy={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},chip:{borderRadius:"{border.radius.sm}"},colorScheme:{light:{chip:{focusBackground:"{surface.200}",color:"{surface.800}"}},dark:{chip:{focusBackground:"{surface.700}",color:"{surface.0}"}}}},Fy={addon:{background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.icon.color}",borderRadius:"{form.field.border.radius}",padding:"0.5rem",minWidth:"2.5rem"}},zy={root:{transitionDuration:"{transition.duration}"},button:{width:"2.5rem",borderRadius:"{form.field.border.radius}",verticalPadding:"{form.field.padding.y}"},colorScheme:{light:{button:{background:"transparent",hoverBackground:"{surface.100}",activeBackground:"{surface.200}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"{surface.400}",hoverColor:"{surface.500}",activeColor:"{surface.600}"}},dark:{button:{background:"transparent",hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"{surface.400}",hoverColor:"{surface.300}",activeColor:"{surface.200}"}}}},Hy={root:{gap:"0.5rem"},input:{width:"2.5rem",sm:{width:"2rem"},lg:{width:"3rem"}}},Vy={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}}},Gy={root:{transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},value:{background:"{primary.color}"},range:{background:"{content.border.color}"},text:{color:"{text.muted.color}"}},$y={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",borderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",shadow:"{form.field.shadow}",borderRadius:"{form.field.border.radius}",transitionDuration:"{form.field.transition.duration}"},list:{padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},checkmark:{color:"{list.option.color}",gutterStart:"-0.375rem",gutterEnd:"0.375rem"},emptyMessage:{padding:"{list.option.padding}"},colorScheme:{light:{option:{stripedBackground:"{surface.50}"}},dark:{option:{stripedBackground:"{surface.900}"}}}},Wy={root:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",verticalOrientation:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},horizontalOrientation:{padding:"0.5rem 0.75rem",gap:"0.5rem"},transitionDuration:"{transition.duration}"},baseItem:{borderRadius:"{content.border.radius}",padding:"{navigation.item.padding}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},overlay:{padding:"0",background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",shadow:"{overlay.navigation.shadow}",gap:"0.5rem"},submenu:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},submenuLabel:{padding:"{navigation.submenu.label.padding}",fontWeight:"{navigation.submenu.label.font.weight}",background:"{navigation.submenu.label.background.}",color:"{navigation.submenu.label.color}"},submenuIcon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},separator:{borderColor:"{content.border.color}"},mobileButton:{borderRadius:"50%",size:"1.75rem",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",hoverBackground:"{content.hover.background}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}},jy={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},list:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},item:{focusBackground:"{navigation.item.focus.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}"}},submenuLabel:{padding:"{navigation.submenu.label.padding}",fontWeight:"{navigation.submenu.label.font.weight}",background:"{navigation.submenu.label.background}",color:"{navigation.submenu.label.color}"},separator:{borderColor:"{content.border.color}"}},Xy={root:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",padding:"0.5rem 0.75rem",transitionDuration:"{transition.duration}"},baseItem:{borderRadius:"{content.border.radius}",padding:"{navigation.item.padding}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},submenu:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}",background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",mobileIndent:"1rem",icon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"}},separator:{borderColor:"{content.border.color}"},mobileButton:{borderRadius:"50%",size:"1.75rem",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",hoverBackground:"{content.hover.background}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}},Ky={root:{borderRadius:"{content.border.radius}",borderWidth:"1px",transitionDuration:"{transition.duration}"},content:{padding:"0.5rem 0.75rem",gap:"0.5rem",sm:{padding:"0.375rem 0.625rem"},lg:{padding:"0.625rem 0.875rem"}},text:{fontSize:"1rem",fontWeight:"500",sm:{fontSize:"0.875rem"},lg:{fontSize:"1.125rem"}},icon:{size:"1.125rem",sm:{size:"1rem"},lg:{size:"1.25rem"}},closeButton:{width:"1.75rem",height:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"}},closeIcon:{size:"1rem",sm:{size:"0.875rem"},lg:{size:"1.125rem"}},outlined:{root:{borderWidth:"1px"}},simple:{content:{padding:"0"}},colorScheme:{light:{info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"{blue.100}",focusRing:{color:"{blue.600}",shadow:"none"}},outlined:{color:"{blue.600}",borderColor:"{blue.600}"},simple:{color:"{blue.600}"}},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"{green.100}",focusRing:{color:"{green.600}",shadow:"none"}},outlined:{color:"{green.600}",borderColor:"{green.600}"},simple:{color:"{green.600}"}},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"{yellow.100}",focusRing:{color:"{yellow.600}",shadow:"none"}},outlined:{color:"{yellow.600}",borderColor:"{yellow.600}"},simple:{color:"{yellow.600}"}},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"{red.100}",focusRing:{color:"{red.600}",shadow:"none"}},outlined:{color:"{red.600}",borderColor:"{red.600}"},simple:{color:"{red.600}"}},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.200}",focusRing:{color:"{surface.600}",shadow:"none"}},outlined:{color:"{surface.500}",borderColor:"{surface.500}"},simple:{color:"{surface.500}"}},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.800}",focusRing:{color:"{surface.50}",shadow:"none"}},outlined:{color:"{surface.950}",borderColor:"{surface.950}"},simple:{color:"{surface.950}"}}},dark:{info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{blue.500}",shadow:"none"}},outlined:{color:"{blue.500}",borderColor:"{blue.500}"},simple:{color:"{blue.500}"}},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{green.500}",shadow:"none"}},outlined:{color:"{green.500}",borderColor:"{green.500}"},simple:{color:"{green.500}"}},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{yellow.500}",shadow:"none"}},outlined:{color:"{yellow.500}",borderColor:"{yellow.500}"},simple:{color:"{yellow.500}"}},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{red.500}",shadow:"none"}},outlined:{color:"{red.500}",borderColor:"{red.500}"},simple:{color:"{red.500}"}},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.700}",focusRing:{color:"{surface.300}",shadow:"none"}},outlined:{color:"{surface.400}",borderColor:"{surface.400}"},simple:{color:"{surface.400}"}},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.100}",focusRing:{color:"{surface.950}",shadow:"none"}},outlined:{color:"{surface.0}",borderColor:"{surface.0}"},simple:{color:"{surface.0}"}}}}},Yy={root:{borderRadius:"{content.border.radius}",gap:"1rem"},meters:{background:"{content.border.color}",size:"0.5rem"},label:{gap:"0.5rem"},labelMarker:{size:"0.5rem"},labelIcon:{size:"1rem"},labelList:{verticalGap:"0.5rem",horizontalGap:"1rem"}},qy={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}",gap:"0.5rem"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},clearIcon:{color:"{form.field.icon.color}"},chip:{borderRadius:"{border.radius.sm}"},emptyMessage:{padding:"{list.option.padding}"}},Zy={root:{gap:"1.125rem"},controls:{gap:"0.5rem"}},Jy={root:{gutter:"0.75rem",transitionDuration:"{transition.duration}"},node:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{content.border.color}",color:"{content.color}",selectedColor:"{highlight.color}",hoverColor:"{content.hover.color}",padding:"0.75rem 1rem",toggleablePadding:"0.75rem 1rem 1.25rem 1rem",borderRadius:"{content.border.radius}"},nodeToggleButton:{background:"{content.background}",hoverBackground:"{content.hover.background}",borderColor:"{content.border.color}",color:"{text.muted.color}",hoverColor:"{text.color}",size:"1.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},connector:{color:"{content.border.color}",borderRadius:"{content.border.radius}",height:"24px"}},Qy={root:{outline:{width:"2px",color:"{content.background}"}}},e1={root:{padding:"0.5rem 1rem",gap:"0.25rem",borderRadius:"{content.border.radius}",background:"{content.background}",color:"{content.color}",transitionDuration:"{transition.duration}"},navButton:{background:"transparent",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedColor:"{highlight.color}",width:"2.5rem",height:"2.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},currentPageReport:{color:"{text.muted.color}"},jumpToPageInput:{maxWidth:"2.5rem"}},t1={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},header:{background:"transparent",color:"{text.color}",padding:"1.125rem",borderColor:"{content.border.color}",borderWidth:"0",borderRadius:"0"},toggleableHeader:{padding:"0.375rem 1.125rem"},title:{fontWeight:"600"},content:{padding:"0 1.125rem 1.125rem 1.125rem"},footer:{padding:"0 1.125rem 1.125rem 1.125rem"}},n1={root:{gap:"0.5rem",transitionDuration:"{transition.duration}"},panel:{background:"{content.background}",borderColor:"{content.border.color}",borderWidth:"1px",color:"{content.color}",padding:"0.25rem 0.25rem",borderRadius:"{content.border.radius}",first:{borderWidth:"1px",topBorderRadius:"{content.border.radius}"},last:{borderWidth:"1px",bottomBorderRadius:"{content.border.radius}"}},item:{focusBackground:"{navigation.item.focus.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",gap:"0.5rem",padding:"{navigation.item.padding}",borderRadius:"{content.border.radius}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}"}},submenu:{indent:"1rem"},submenuIcon:{color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}"}},r1={meter:{background:"{content.border.color}",borderRadius:"{content.border.radius}",height:".75rem"},icon:{color:"{form.field.icon.color}"},overlay:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",borderRadius:"{overlay.popover.border.radius}",color:"{overlay.popover.color}",padding:"{overlay.popover.padding}",shadow:"{overlay.popover.shadow}"},content:{gap:"0.5rem"},colorScheme:{light:{strength:{weakBackground:"{red.500}",mediumBackground:"{amber.500}",strongBackground:"{green.500}"}},dark:{strength:{weakBackground:"{red.400}",mediumBackground:"{amber.400}",strongBackground:"{green.400}"}}}},i1={root:{gap:"1.125rem"},controls:{gap:"0.5rem"}},o1={root:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",color:"{overlay.popover.color}",borderRadius:"{overlay.popover.border.radius}",shadow:"{overlay.popover.shadow}",gutter:"10px",arrowOffset:"1.25rem"},content:{padding:"{overlay.popover.padding}"}},s1={root:{background:"{content.border.color}",borderRadius:"{content.border.radius}",height:"1.25rem"},value:{background:"{primary.color}"},label:{color:"{primary.contrast.color}",fontSize:"0.75rem",fontWeight:"600"}},a1={colorScheme:{light:{root:{"color.1":"{red.500}","color.2":"{blue.500}","color.3":"{green.500}","color.4":"{yellow.500}"}},dark:{root:{"color.1":"{red.400}","color.2":"{blue.400}","color.3":"{green.400}","color.4":"{yellow.400}"}}}},l1={root:{width:"1.25rem",height:"1.25rem",background:"{form.field.background}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.border.color}",checkedBorderColor:"{primary.color}",checkedHoverBorderColor:"{primary.hover.color}",checkedFocusBorderColor:"{primary.color}",checkedDisabledBorderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",shadow:"{form.field.shadow}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{width:"1rem",height:"1rem"},lg:{width:"1.5rem",height:"1.5rem"}},icon:{size:"0.75rem",checkedColor:"{primary.contrast.color}",checkedHoverColor:"{primary.contrast.color}",disabledColor:"{form.field.disabled.color}",sm:{size:"0.5rem"},lg:{size:"1rem"}}},c1={root:{gap:"0.25rem",transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},icon:{size:"1rem",color:"{text.muted.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}},u1={colorScheme:{light:{root:{background:"rgba(0,0,0,0.1)"}},dark:{root:{background:"rgba(255,255,255,0.3)"}}}},d1={root:{transitionDuration:"{transition.duration}"},bar:{size:"9px",borderRadius:"{border.radius.sm}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},colorScheme:{light:{bar:{background:"{surface.100}"}},dark:{bar:{background:"{surface.800}"}}}},f1={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},clearIcon:{color:"{form.field.icon.color}"},checkmark:{color:"{list.option.color}",gutterStart:"-0.375rem",gutterEnd:"0.375rem"},emptyMessage:{padding:"{list.option.padding}"}},h1={root:{borderRadius:"{form.field.border.radius}"},colorScheme:{light:{root:{invalidBorderColor:"{form.field.invalid.border.color}"}},dark:{root:{invalidBorderColor:"{form.field.invalid.border.color}"}}}},p1={root:{borderRadius:"{content.border.radius}"},colorScheme:{light:{root:{background:"{surface.200}",animationBackground:"rgba(255,255,255,0.4)"}},dark:{root:{background:"rgba(255, 255, 255, 0.06)",animationBackground:"rgba(255, 255, 255, 0.04)"}}}},m1={root:{transitionDuration:"{transition.duration}"},track:{background:"{content.border.color}",borderRadius:"{content.border.radius}",size:"3px"},range:{background:"{primary.color}"},handle:{width:"20px",height:"20px",borderRadius:"50%",background:"{content.border.color}",hoverBackground:"{content.border.color}",content:{borderRadius:"50%",hoverBackground:"{content.background}",width:"16px",height:"16px",shadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 1px 0px rgba(0, 0, 0, 0.14)"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},colorScheme:{light:{handle:{contentBackground:"{surface.0}"}},dark:{handle:{contentBackground:"{surface.950}"}}}},g1={root:{gap:"0.5rem",transitionDuration:"{transition.duration}"}},v1={root:{borderRadius:"{form.field.border.radius}",roundedBorderRadius:"2rem",raisedShadow:"0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)"}},b1={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",transitionDuration:"{transition.duration}"},gutter:{background:"{content.border.color}"},handle:{size:"24px",background:"transparent",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}},_1={root:{transitionDuration:"{transition.duration}"},separator:{background:"{content.border.color}",activeBackground:"{primary.color}",margin:"0 0 0 1.625rem",size:"2px"},step:{padding:"0.5rem",gap:"1rem"},stepHeader:{padding:"0",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},gap:"0.5rem"},stepTitle:{color:"{text.muted.color}",activeColor:"{primary.color}",fontWeight:"500"},stepNumber:{background:"{content.background}",activeBackground:"{content.background}",borderColor:"{content.border.color}",activeBorderColor:"{content.border.color}",color:"{text.muted.color}",activeColor:"{primary.color}",size:"2rem",fontSize:"1.143rem",fontWeight:"500",borderRadius:"50%",shadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"},steppanels:{padding:"0.875rem 0.5rem 1.125rem 0.5rem"},steppanel:{background:"{content.background}",color:"{content.color}",padding:"0",indent:"1rem"}},y1={root:{transitionDuration:"{transition.duration}"},separator:{background:"{content.border.color}"},itemLink:{borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},gap:"0.5rem"},itemLabel:{color:"{text.muted.color}",activeColor:"{primary.color}",fontWeight:"500"},itemNumber:{background:"{content.background}",activeBackground:"{content.background}",borderColor:"{content.border.color}",activeBorderColor:"{content.border.color}",color:"{text.muted.color}",activeColor:"{primary.color}",size:"2rem",fontSize:"1.143rem",fontWeight:"500",borderRadius:"50%",shadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"}},x1={root:{transitionDuration:"{transition.duration}"},tablist:{borderWidth:"0 0 1px 0",background:"{content.background}",borderColor:"{content.border.color}"},item:{background:"transparent",hoverBackground:"transparent",activeBackground:"transparent",borderWidth:"0 0 1px 0",borderColor:"{content.border.color}",hoverBorderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}",padding:"1rem 1.125rem",fontWeight:"600",margin:"0 0 -1px 0",gap:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},itemIcon:{color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},activeBar:{height:"1px",bottom:"-1px",background:"{primary.color}"}},S1={root:{transitionDuration:"{transition.duration}"},tablist:{borderWidth:"0 0 1px 0",background:"{content.background}",borderColor:"{content.border.color}"},tab:{background:"transparent",hoverBackground:"transparent",activeBackground:"transparent",borderWidth:"0 0 1px 0",borderColor:"{content.border.color}",hoverBorderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}",padding:"1rem 1.125rem",fontWeight:"600",margin:"0 0 -1px 0",gap:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},tabpanel:{background:"{content.background}",color:"{content.color}",padding:"0.875rem 1.125rem 1.125rem 1.125rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"inset {focus.ring.shadow}"}},navButton:{background:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",width:"2.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},activeBar:{height:"1px",bottom:"-1px",background:"{primary.color}"},colorScheme:{light:{navButton:{shadow:"0px 0px 10px 50px rgba(255, 255, 255, 0.6)"}},dark:{navButton:{shadow:"0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"}}}},w1={root:{transitionDuration:"{transition.duration}"},tabList:{background:"{content.background}",borderColor:"{content.border.color}"},tab:{borderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},tabPanel:{background:"{content.background}",color:"{content.color}"},navButton:{background:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}"},colorScheme:{light:{navButton:{shadow:"0px 0px 10px 50px rgba(255, 255, 255, 0.6)"}},dark:{navButton:{shadow:"0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"}}}},M1={root:{fontSize:"0.875rem",fontWeight:"700",padding:"0.25rem 0.5rem",gap:"0.25rem",borderRadius:"{content.border.radius}",roundedBorderRadius:"{border.radius.xl}"},icon:{size:"0.75rem"},colorScheme:{light:{primary:{background:"{primary.100}",color:"{primary.700}"},secondary:{background:"{surface.100}",color:"{surface.600}"},success:{background:"{green.100}",color:"{green.700}"},info:{background:"{sky.100}",color:"{sky.700}"},warn:{background:"{orange.100}",color:"{orange.700}"},danger:{background:"{red.100}",color:"{red.700}"},contrast:{background:"{surface.950}",color:"{surface.0}"}},dark:{primary:{background:"color-mix(in srgb, {primary.500}, transparent 84%)",color:"{primary.300}"},secondary:{background:"{surface.800}",color:"{surface.300}"},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",color:"{green.300}"},info:{background:"color-mix(in srgb, {sky.500}, transparent 84%)",color:"{sky.300}"},warn:{background:"color-mix(in srgb, {orange.500}, transparent 84%)",color:"{orange.300}"},danger:{background:"color-mix(in srgb, {red.500}, transparent 84%)",color:"{red.300}"},contrast:{background:"{surface.0}",color:"{surface.950}"}}}},T1={root:{background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.color}",height:"18rem",padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{form.field.border.radius}"},prompt:{gap:"0.25rem"},commandResponse:{margin:"2px 0"}},E1={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}}},C1={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},list:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},submenu:{mobileIndent:"1rem"},submenuIcon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},separator:{borderColor:"{content.border.color}"}},A1={event:{minHeight:"5rem"},horizontal:{eventContent:{padding:"1rem 0"}},vertical:{eventContent:{padding:"0 1rem"}},eventMarker:{size:"1.125rem",borderRadius:"50%",borderWidth:"2px",background:"{content.background}",borderColor:"{content.border.color}",content:{borderRadius:"50%",size:"0.375rem",background:"{primary.color}",insetShadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"}},eventConnector:{color:"{content.border.color}",size:"2px"}},R1={root:{width:"25rem",borderRadius:"{content.border.radius}",borderWidth:"1px",transitionDuration:"{transition.duration}"},icon:{size:"1.125rem"},content:{padding:"{overlay.popover.padding}",gap:"0.5rem"},text:{gap:"0.5rem"},summary:{fontWeight:"500",fontSize:"1rem"},detail:{fontWeight:"500",fontSize:"0.875rem"},closeButton:{width:"1.75rem",height:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"}},closeIcon:{size:"1rem"},colorScheme:{light:{blur:"1.5px",info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"{blue.100}",focusRing:{color:"{blue.600}",shadow:"none"}}},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"{green.100}",focusRing:{color:"{green.600}",shadow:"none"}}},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"{yellow.100}",focusRing:{color:"{yellow.600}",shadow:"none"}}},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"{red.100}",focusRing:{color:"{red.600}",shadow:"none"}}},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.200}",focusRing:{color:"{surface.600}",shadow:"none"}}},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.800}",focusRing:{color:"{surface.50}",shadow:"none"}}}},dark:{blur:"10px",info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{blue.500}",shadow:"none"}}},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{green.500}",shadow:"none"}}},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{yellow.500}",shadow:"none"}}},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{red.500}",shadow:"none"}}},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.700}",focusRing:{color:"{surface.300}",shadow:"none"}}},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",detailColor:"{surface.950}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.100}",focusRing:{color:"{surface.950}",shadow:"none"}}}}}},P1={root:{padding:"0.5rem 1rem",borderRadius:"{content.border.radius}",gap:"0.5rem",fontWeight:"500",disabledBackground:"{form.field.disabled.background}",disabledBorderColor:"{form.field.disabled.background}",disabledColor:"{form.field.disabled.color}",invalidBorderColor:"{form.field.invalid.border.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",padding:"0.375rem 0.75rem"},lg:{fontSize:"{form.field.lg.font.size}",padding:"0.625rem 1.25rem"}},icon:{disabledColor:"{form.field.disabled.color}"},content:{left:"0.25rem",top:"0.25rem",checkedShadow:"0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.04)"},colorScheme:{light:{root:{background:"{surface.100}",checkedBackground:"{surface.100}",hoverBackground:"{surface.100}",borderColor:"{surface.100}",color:"{surface.500}",hoverColor:"{surface.700}",checkedColor:"{surface.900}",checkedBorderColor:"{surface.100}"},content:{checkedBackground:"{surface.0}"},icon:{color:"{surface.500}",hoverColor:"{surface.700}",checkedColor:"{surface.900}"}},dark:{root:{background:"{surface.950}",checkedBackground:"{surface.950}",hoverBackground:"{surface.950}",borderColor:"{surface.950}",color:"{surface.400}",hoverColor:"{surface.300}",checkedColor:"{surface.0}",checkedBorderColor:"{surface.950}"},content:{checkedBackground:"{surface.800}"},icon:{color:"{surface.400}",hoverColor:"{surface.300}",checkedColor:"{surface.0}"}}}},L1={root:{width:"2.5rem",height:"1.5rem",borderRadius:"30px",gap:"0.25rem",shadow:"{form.field.shadow}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},borderWidth:"1px",borderColor:"transparent",hoverBorderColor:"transparent",checkedBorderColor:"transparent",checkedHoverBorderColor:"transparent",invalidBorderColor:"{form.field.invalid.border.color}",transitionDuration:"{form.field.transition.duration}",slideDuration:"0.2s"},handle:{borderRadius:"50%",size:"1rem"},colorScheme:{light:{root:{background:"{surface.300}",disabledBackground:"{form.field.disabled.background}",hoverBackground:"{surface.400}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}"},handle:{background:"{surface.0}",disabledBackground:"{form.field.disabled.color}",hoverBackground:"{surface.0}",checkedBackground:"{surface.0}",checkedHoverBackground:"{surface.0}",color:"{text.muted.color}",hoverColor:"{text.color}",checkedColor:"{primary.color}",checkedHoverColor:"{primary.hover.color}"}},dark:{root:{background:"{surface.700}",disabledBackground:"{surface.600}",hoverBackground:"{surface.600}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}"},handle:{background:"{surface.400}",disabledBackground:"{surface.900}",hoverBackground:"{surface.300}",checkedBackground:"{surface.900}",checkedHoverBackground:"{surface.900}",color:"{surface.900}",hoverColor:"{surface.800}",checkedColor:"{primary.color}",checkedHoverColor:"{primary.hover.color}"}}}},I1={root:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",padding:"0.75rem"}},k1={root:{maxWidth:"12.5rem",gutter:"0.25rem",shadow:"{overlay.popover.shadow}",padding:"0.5rem 0.75rem",borderRadius:"{overlay.popover.border.radius}"},colorScheme:{light:{root:{background:"{surface.700}",color:"{surface.0}"}},dark:{root:{background:"{surface.700}",color:"{surface.0}"}}}},D1={root:{background:"{content.background}",color:"{content.color}",padding:"1rem",gap:"2px",indent:"1rem",transitionDuration:"{transition.duration}"},node:{padding:"0.25rem 0.5rem",borderRadius:"{content.border.radius}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{text.color}",hoverColor:"{text.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"},gap:"0.25rem"},nodeIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedColor:"{highlight.color}"},nodeToggleButton:{borderRadius:"50%",size:"1.75rem",hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedHoverColor:"{primary.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},loadingIcon:{size:"2rem"},filter:{margin:"0 0 0.5rem 0"}},N1={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},tree:{padding:"{list.padding}"},clearIcon:{color:"{form.field.icon.color}"},emptyMessage:{padding:"{list.option.padding}"},chip:{borderRadius:"{border.radius.sm}"}},O1={root:{transitionDuration:"{transition.duration}"},header:{background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},headerCell:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{treetable.border.color}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",gap:"0.5rem",padding:"0.75rem 1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},columnTitle:{fontWeight:"600"},row:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},bodyCell:{borderColor:"{treetable.border.color}",padding:"0.75rem 1rem",gap:"0.5rem"},footerCell:{background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",padding:"0.75rem 1rem"},columnFooter:{fontWeight:"600"},footer:{background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},columnResizerWidth:"0.5rem",resizeIndicator:{width:"1px",color:"{primary.color}"},sortIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",size:"0.875rem"},loadingIcon:{size:"2rem"},nodeToggleButton:{hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",selectedHoverColor:"{primary.color}",size:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},paginatorTop:{borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},paginatorBottom:{borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},colorScheme:{light:{root:{borderColor:"{content.border.color}"},bodyCell:{selectedBorderColor:"{primary.100}"}},dark:{root:{borderColor:"{surface.800}"},bodyCell:{selectedBorderColor:"{primary.900}"}}}},B1={loader:{mask:{background:"{content.background}",color:"{text.muted.color}"},icon:{size:"2rem"}}};function Vs(n){"@babel/helpers - typeof";return Vs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Vs(n)}function Xf(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function Kf(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Xf(Object(t),!0).forEach(function(r){U1(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Xf(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function U1(n,e,t){return(e=F1(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function F1(n){var e=z1(n,"string");return Vs(e)=="symbol"?e:e+""}function z1(n,e){if(Vs(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(Vs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var H1=Kf(Kf({},ay),{},{components:{accordion:ry,autocomplete:iy,avatar:oy,badge:sy,blockui:ly,breadcrumb:cy,button:uy,datepicker:Sy,card:dy,carousel:fy,cascadeselect:hy,checkbox:py,chip:my,colorpicker:gy,confirmdialog:vy,confirmpopup:by,contextmenu:_y,dataview:xy,datatable:yy,dialog:wy,divider:My,dock:Ty,drawer:Ey,editor:Cy,fieldset:Ay,fileupload:Ry,iftalabel:ky,floatlabel:Py,galleria:Ly,iconfield:Iy,image:Dy,imagecompare:Ny,inlinemessage:Oy,inplace:By,inputchips:Uy,inputgroup:Fy,inputnumber:zy,inputotp:Hy,inputtext:Vy,knob:Gy,listbox:$y,megamenu:Wy,menu:jy,menubar:Xy,message:Ky,metergroup:Yy,multiselect:qy,orderlist:Zy,organizationchart:Jy,overlaybadge:Qy,popover:o1,paginator:e1,password:r1,panel:t1,panelmenu:n1,picklist:i1,progressbar:s1,progressspinner:a1,radiobutton:l1,rating:c1,scrollpanel:d1,select:f1,selectbutton:h1,skeleton:p1,slider:m1,speeddial:g1,splitter:b1,splitbutton:v1,stepper:_1,steps:y1,tabmenu:x1,tabs:S1,tabview:w1,textarea:E1,tieredmenu:C1,tag:M1,terminal:T1,timeline:A1,togglebutton:P1,toggleswitch:L1,tree:D1,treeselect:N1,treetable:O1,toast:R1,toolbar:I1,virtualscroller:B1},directives:{tooltip:k1,ripple:u1}});function Gs(n){"@babel/helpers - typeof";return Gs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Gs(n)}function V1(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function G1(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,W1(r.key),r)}}function $1(n,e,t){return e&&G1(n.prototype,e),Object.defineProperty(n,"prototype",{writable:!1}),n}function W1(n){var e=j1(n,"string");return Gs(e)=="symbol"?e:e+""}function j1(n,e){if(Gs(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(Gs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}var X1=function(){function n(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){};V1(this,n),this.element=e,this.listener=t}return $1(n,[{key:"bindScrollListener",value:function(){this.scrollableParents=C_(this.element);for(var t=0;t<this.scrollableParents.length;t++)this.scrollableParents[t].addEventListener("scroll",this.listener)}},{key:"unbindScrollListener",value:function(){if(this.scrollableParents)for(var t=0;t<this.scrollableParents.length;t++)this.scrollableParents[t].removeEventListener("scroll",this.listener)}},{key:"destroy",value:function(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}}])}();function ma(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"pv_id_";return pd(n)}var ii={_loadedStyleNames:new Set,getLoadedStyleNames:function(){return this._loadedStyleNames},isStyleNameLoaded:function(e){return this._loadedStyleNames.has(e)},setLoadedStyleName:function(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName:function(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames:function(){this._loadedStyleNames.clear()}};function $s(n){"@babel/helpers - typeof";return $s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$s(n)}function Yf(n,e){return Z1(n)||q1(n,e)||Y1(n,e)||K1()}function K1(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Y1(n,e){if(n){if(typeof n=="string")return qf(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?qf(n,e):void 0}}function qf(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=Array(e);t<e;t++)r[t]=n[t];return r}function q1(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r,i,o,s,a=[],l=!0,c=!1;try{if(o=(t=t.call(n)).next,e!==0)for(;!(l=(r=o.call(t)).done)&&(a.push(r.value),a.length!==e);l=!0);}catch(u){c=!0,i=u}finally{try{if(!l&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(c)throw i}}return a}}function Z1(n){if(Array.isArray(n))return n}function Zf(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function lt(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Zf(Object(t),!0).forEach(function(r){Zc(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Zf(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function Zc(n,e,t){return(e=J1(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function J1(n){var e=Q1(n,"string");return $s(e)=="symbol"?e:e+""}function Q1(n,e){if($s(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if($s(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var Ze={_getMeta:function(){return[ur(arguments.length<=0?void 0:arguments[0])||arguments.length<=0?void 0:arguments[0],kn(ur(arguments.length<=0?void 0:arguments[0])?arguments.length<=0?void 0:arguments[0]:arguments.length<=1?void 0:arguments[1])]},_getConfig:function(e,t){var r,i,o;return(r=(e==null||(i=e.instance)===null||i===void 0?void 0:i.$primevue)||(t==null||(o=t.ctx)===null||o===void 0||(o=o.appContext)===null||o===void 0||(o=o.config)===null||o===void 0||(o=o.globalProperties)===null||o===void 0?void 0:o.$primevue))===null||r===void 0?void 0:r.config},_getOptionValue:fd,_getPTValue:function(){var e,t,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"",s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,l=function(){var E=Ze._getOptionValue.apply(Ze,arguments);return _n(E)||Pl(E)?{class:E}:E},c=((e=r.binding)===null||e===void 0||(e=e.value)===null||e===void 0?void 0:e.ptOptions)||((t=r.$primevueConfig)===null||t===void 0?void 0:t.ptOptions)||{},u=c.mergeSections,d=u===void 0?!0:u,f=c.mergeProps,h=f===void 0?!1:f,g=a?Ze._useDefaultPT(r,r.defaultPT(),l,o,s):void 0,v=Ze._usePT(r,Ze._getPT(i,r.$name),l,o,lt(lt({},s),{},{global:g||{}})),m=Ze._getPTDatasets(r,o);return d||!d&&v?h?Ze._mergeProps(r,h,g,v,m):lt(lt(lt({},g),v),m):lt(lt({},v),m)},_getPTDatasets:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r="data-pc-";return lt(lt({},t==="root"&&Zc({},"".concat(r,"name"),Xn(e.$name))),{},Zc({},"".concat(r,"section"),Xn(t)))},_getPT:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0,i=function(s){var a,l=r?r(s):s,c=Xn(t);return(a=l==null?void 0:l[c])!==null&&a!==void 0?a:l};return e!=null&&e.hasOwnProperty("_usept")?{_usept:e._usept,originalValue:i(e.originalValue),value:i(e.value)}:i(e)},_usePT:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0,s=function(m){return r(m,i,o)};if(t!=null&&t.hasOwnProperty("_usept")){var a,l=t._usept||((a=e.$primevueConfig)===null||a===void 0?void 0:a.ptOptions)||{},c=l.mergeSections,u=c===void 0?!0:c,d=l.mergeProps,f=d===void 0?!1:d,h=s(t.originalValue),g=s(t.value);return h===void 0&&g===void 0?void 0:_n(g)?g:_n(h)?h:u||!u&&g?f?Ze._mergeProps(e,f,h,g):lt(lt({},h),g):g}return s(t)},_useDefaultPT:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0;return Ze._usePT(e,t,r,i,o)},_loadStyles:function(e,t,r){var i,o=Ze._getConfig(t,r),s={nonce:o==null||(i=o.csp)===null||i===void 0?void 0:i.nonce};Ze._loadCoreStyles(e.$instance,s),Ze._loadThemeStyles(e.$instance,s),Ze._loadScopedThemeStyles(e.$instance,s),Ze._themeChangeListener(function(){return Ze._loadThemeStyles(e.$instance,s)})},_loadCoreStyles:function(){var e,t,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;if(!ii.isStyleNameLoaded((e=r.$style)===null||e===void 0?void 0:e.name)&&(t=r.$style)!==null&&t!==void 0&&t.name){var o;ut.loadCSS(i),(o=r.$style)===null||o===void 0||o.loadCSS(i),ii.setLoadedStyleName(r.$style.name)}},_loadThemeStyles:function(){var e,t,r,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0;if(!(i!=null&&i.isUnstyled()||(i==null||(e=i.theme)===null||e===void 0?void 0:e.call(i))==="none")){if(!wt.isStyleNameLoaded("common")){var s,a,l=((s=i.$style)===null||s===void 0||(a=s.getCommonTheme)===null||a===void 0?void 0:a.call(s))||{},c=l.primitive,u=l.semantic,d=l.global,f=l.style;ut.load(c==null?void 0:c.css,lt({name:"primitive-variables"},o)),ut.load(u==null?void 0:u.css,lt({name:"semantic-variables"},o)),ut.load(d==null?void 0:d.css,lt({name:"global-variables"},o)),ut.loadTheme(lt({name:"global-style"},o),f),wt.setLoadedStyleName("common")}if(!wt.isStyleNameLoaded((t=i.$style)===null||t===void 0?void 0:t.name)&&(r=i.$style)!==null&&r!==void 0&&r.name){var h,g,v,m,p=((h=i.$style)===null||h===void 0||(g=h.getDirectiveTheme)===null||g===void 0?void 0:g.call(h))||{},E=p.css,x=p.style;(v=i.$style)===null||v===void 0||v.load(E,lt({name:"".concat(i.$style.name,"-variables")},o)),(m=i.$style)===null||m===void 0||m.loadTheme(lt({name:"".concat(i.$style.name,"-style")},o),x),wt.setLoadedStyleName(i.$style.name)}if(!wt.isStyleNameLoaded("layer-order")){var y,R,P=(y=i.$style)===null||y===void 0||(R=y.getLayerOrderThemeCSS)===null||R===void 0?void 0:R.call(y);ut.load(P,lt({name:"layer-order",first:!0},o)),wt.setLoadedStyleName("layer-order")}}},_loadScopedThemeStyles:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,r=e.preset();if(r&&e.$attrSelector){var i,o,s,a=((i=e.$style)===null||i===void 0||(o=i.getPresetTheme)===null||o===void 0?void 0:o.call(i,r,"[".concat(e.$attrSelector,"]")))||{},l=a.css,c=(s=e.$style)===null||s===void 0?void 0:s.load(l,lt({name:"".concat(e.$attrSelector,"-").concat(e.$style.name)},t));e.scopedStyleEl=c.el}},_themeChangeListener:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(){};ii.clearLoadedStyleNames(),Wn.on("theme:change",e)},_hook:function(e,t,r,i,o,s){var a,l,c="on".concat(c_(t)),u=Ze._getConfig(i,o),d=r==null?void 0:r.$instance,f=Ze._usePT(d,Ze._getPT(i==null||(a=i.value)===null||a===void 0?void 0:a.pt,e),Ze._getOptionValue,"hooks.".concat(c)),h=Ze._useDefaultPT(d,u==null||(l=u.pt)===null||l===void 0||(l=l.directives)===null||l===void 0?void 0:l[e],Ze._getOptionValue,"hooks.".concat(c)),g={el:r,binding:i,vnode:o,prevVnode:s};f==null||f(d,g),h==null||h(d,g)},_mergeProps:function(){for(var e=arguments.length>1?arguments[1]:void 0,t=arguments.length,r=new Array(t>2?t-2:0),i=2;i<t;i++)r[i-2]=arguments[i];return Rl(e)?e.apply(void 0,r):he.apply(void 0,r)},_extend:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=function(s,a,l,c,u){var d,f,h,g;a._$instances=a._$instances||{};var v=Ze._getConfig(l,c),m=a._$instances[e]||{},p=Cn(m)?lt(lt({},t),t==null?void 0:t.methods):{};a._$instances[e]=lt(lt({},m),{},{$name:e,$host:a,$binding:l,$modifiers:l==null?void 0:l.modifiers,$value:l==null?void 0:l.value,$el:m.$el||a||void 0,$style:lt({classes:void 0,inlineStyles:void 0,load:function(){},loadCSS:function(){},loadTheme:function(){}},t==null?void 0:t.style),$primevueConfig:v,$attrSelector:(d=a.$pd)===null||d===void 0||(d=d[e])===null||d===void 0?void 0:d.attrSelector,defaultPT:function(){return Ze._getPT(v==null?void 0:v.pt,void 0,function(x){var y;return x==null||(y=x.directives)===null||y===void 0?void 0:y[e]})},isUnstyled:function(){var x,y;return((x=a.$instance)===null||x===void 0||(x=x.$binding)===null||x===void 0||(x=x.value)===null||x===void 0?void 0:x.unstyled)!==void 0?(y=a.$instance)===null||y===void 0||(y=y.$binding)===null||y===void 0||(y=y.value)===null||y===void 0?void 0:y.unstyled:v==null?void 0:v.unstyled},theme:function(){var x;return(x=a.$instance)===null||x===void 0||(x=x.$primevueConfig)===null||x===void 0?void 0:x.theme},preset:function(){var x;return(x=a.$instance)===null||x===void 0||(x=x.$binding)===null||x===void 0||(x=x.value)===null||x===void 0?void 0:x.dt},ptm:function(){var x,y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",R=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Ze._getPTValue(a.$instance,(x=a.$instance)===null||x===void 0||(x=x.$binding)===null||x===void 0||(x=x.value)===null||x===void 0?void 0:x.pt,y,lt({},R))},ptmo:function(){var x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",R=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return Ze._getPTValue(a.$instance,x,y,R,!1)},cx:function(){var x,y,R=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return(x=a.$instance)!==null&&x!==void 0&&x.isUnstyled()?void 0:Ze._getOptionValue((y=a.$instance)===null||y===void 0||(y=y.$style)===null||y===void 0?void 0:y.classes,R,lt({},P))},sx:function(){var x,y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",R=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,P=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return R?Ze._getOptionValue((x=a.$instance)===null||x===void 0||(x=x.$style)===null||x===void 0?void 0:x.inlineStyles,y,lt({},P)):void 0}},p),a.$instance=a._$instances[e],(f=(h=a.$instance)[s])===null||f===void 0||f.call(h,a,l,c,u),a["$".concat(e)]=a.$instance,Ze._hook(e,s,a,l,c,u),a.$pd||(a.$pd={}),a.$pd[e]=lt(lt({},(g=a.$pd)===null||g===void 0?void 0:g[e]),{},{name:e,instance:a.$instance})},i=function(s){var a,l,c,u,d,f=(a=s.$instance)===null||a===void 0?void 0:a.watch;f==null||(l=f.config)===null||l===void 0||l.call(s.$instance,(c=s.$instance)===null||c===void 0?void 0:c.$primevueConfig),yo.on("config:change",function(h){var g,v=h.newValue,m=h.oldValue;return f==null||(g=f.config)===null||g===void 0?void 0:g.call(s.$instance,v,m)}),f==null||(u=f["config.ripple"])===null||u===void 0||u.call(s.$instance,(d=s.$instance)===null||d===void 0||(d=d.$primevueConfig)===null||d===void 0?void 0:d.ripple),yo.on("config:ripple:change",function(h){var g,v=h.newValue,m=h.oldValue;return f==null||(g=f["config.ripple"])===null||g===void 0?void 0:g.call(s.$instance,v,m)})};return{created:function(s,a,l,c){s.$pd||(s.$pd={}),s.$pd[e]={name:e,attrSelector:pd("pd")},r("created",s,a,l,c)},beforeMount:function(s,a,l,c){Ze._loadStyles(s,a,l),r("beforeMount",s,a,l,c),i(s)},mounted:function(s,a,l,c){Ze._loadStyles(s,a,l),r("mounted",s,a,l,c)},beforeUpdate:function(s,a,l,c){r("beforeUpdate",s,a,l,c)},updated:function(s,a,l,c){Ze._loadStyles(s,a,l),r("updated",s,a,l,c)},beforeUnmount:function(s,a,l,c){r("beforeUnmount",s,a,l,c)},unmounted:function(s,a,l,c){var u;(u=s.$instance)===null||u===void 0||(u=u.scopedStyleEl)===null||u===void 0||(u=u.value)===null||u===void 0||u.remove(),r("unmounted",s,a,l,c)}}},extend:function(){var e=Ze._getMeta.apply(Ze,arguments),t=Yf(e,2),r=t[0],i=t[1];return lt({extend:function(){var s=Ze._getMeta.apply(Ze,arguments),a=Yf(s,2),l=a[0],c=a[1];return Ze.extend(l,lt(lt(lt({},i),i==null?void 0:i.methods),c))}},Ze._extend(r,i))}},ex=function(e){var t=e.dt;return`
.p-tooltip {
    position: absolute;
    display: none;
    max-width: `.concat(t("tooltip.max.width"),`;
}

.p-tooltip-right,
.p-tooltip-left {
    padding: 0 `).concat(t("tooltip.gutter"),`;
}

.p-tooltip-top,
.p-tooltip-bottom {
    padding: `).concat(t("tooltip.gutter"),` 0;
}

.p-tooltip-text {
    white-space: pre-line;
    word-break: break-word;
    background: `).concat(t("tooltip.background"),`;
    color: `).concat(t("tooltip.color"),`;
    padding: `).concat(t("tooltip.padding"),`;
    box-shadow: `).concat(t("tooltip.shadow"),`;
    border-radius: `).concat(t("tooltip.border.radius"),`;
}

.p-tooltip-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
}

.p-tooltip-right .p-tooltip-arrow {
    margin-top: calc(-1 * `).concat(t("tooltip.gutter"),`);
    border-width: `).concat(t("tooltip.gutter")," ").concat(t("tooltip.gutter")," ").concat(t("tooltip.gutter"),` 0;
    border-right-color: `).concat(t("tooltip.background"),`;
}

.p-tooltip-left .p-tooltip-arrow {
    margin-top: calc(-1 * `).concat(t("tooltip.gutter"),`);
    border-width: `).concat(t("tooltip.gutter")," 0 ").concat(t("tooltip.gutter")," ").concat(t("tooltip.gutter"),`;
    border-left-color: `).concat(t("tooltip.background"),`;
}

.p-tooltip-top .p-tooltip-arrow {
    margin-left: calc(-1 * `).concat(t("tooltip.gutter"),`);
    border-width: `).concat(t("tooltip.gutter")," ").concat(t("tooltip.gutter")," 0 ").concat(t("tooltip.gutter"),`;
    border-top-color: `).concat(t("tooltip.background"),`;
    border-bottom-color: `).concat(t("tooltip.background"),`;
}

.p-tooltip-bottom .p-tooltip-arrow {
    margin-left: calc(-1 * `).concat(t("tooltip.gutter"),`);
    border-width: 0 `).concat(t("tooltip.gutter")," ").concat(t("tooltip.gutter")," ").concat(t("tooltip.gutter"),`;
    border-top-color: `).concat(t("tooltip.background"),`;
    border-bottom-color: `).concat(t("tooltip.background"),`;
}
`)},tx={root:"p-tooltip p-component",arrow:"p-tooltip-arrow",text:"p-tooltip-text"},nx=ut.extend({name:"tooltip-directive",theme:ex,classes:tx}),rx=Ze.extend({style:nx});function ix(n,e){return lx(n)||ax(n,e)||sx(n,e)||ox()}function ox(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function sx(n,e){if(n){if(typeof n=="string")return Jf(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Jf(n,e):void 0}}function Jf(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=Array(e);t<e;t++)r[t]=n[t];return r}function ax(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r,i,o,s,a=[],l=!0,c=!1;try{if(o=(t=t.call(n)).next,e!==0)for(;!(l=(r=o.call(t)).done)&&(a.push(r.value),a.length!==e);l=!0);}catch(u){c=!0,i=u}finally{try{if(!l&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(c)throw i}}return a}}function lx(n){if(Array.isArray(n))return n}function Qf(n,e,t){return(e=cx(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function cx(n){var e=ux(n,"string");return fi(e)=="symbol"?e:e+""}function ux(n,e){if(fi(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(fi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function fi(n){"@babel/helpers - typeof";return fi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},fi(n)}var dx=rx.extend("tooltip",{beforeMount:function(e,t){var r,i=this.getTarget(e);if(i.$_ptooltipModifiers=this.getModifiers(t),t.value){if(typeof t.value=="string")i.$_ptooltipValue=t.value,i.$_ptooltipDisabled=!1,i.$_ptooltipEscape=!0,i.$_ptooltipClass=null,i.$_ptooltipFitContent=!0,i.$_ptooltipIdAttr=ma()+"_tooltip",i.$_ptooltipShowDelay=0,i.$_ptooltipHideDelay=0,i.$_ptooltipAutoHide=!0;else if(fi(t.value)==="object"&&t.value){if(Cn(t.value.value)||t.value.value.trim()==="")return;i.$_ptooltipValue=t.value.value,i.$_ptooltipDisabled=!!t.value.disabled===t.value.disabled?t.value.disabled:!1,i.$_ptooltipEscape=!!t.value.escape===t.value.escape?t.value.escape:!0,i.$_ptooltipClass=t.value.class||"",i.$_ptooltipFitContent=!!t.value.fitContent===t.value.fitContent?t.value.fitContent:!0,i.$_ptooltipIdAttr=t.value.id||ma()+"_tooltip",i.$_ptooltipShowDelay=t.value.showDelay||0,i.$_ptooltipHideDelay=t.value.hideDelay||0,i.$_ptooltipAutoHide=!!t.value.autoHide===t.value.autoHide?t.value.autoHide:!0}}else return;i.$_ptooltipZIndex=(r=t.instance.$primevue)===null||r===void 0||(r=r.config)===null||r===void 0||(r=r.zIndex)===null||r===void 0?void 0:r.tooltip,this.bindEvents(i,t),e.setAttribute("data-pd-tooltip",!0)},updated:function(e,t){var r=this.getTarget(e);if(r.$_ptooltipModifiers=this.getModifiers(t),this.unbindEvents(r),!!t.value){if(typeof t.value=="string")r.$_ptooltipValue=t.value,r.$_ptooltipDisabled=!1,r.$_ptooltipEscape=!0,r.$_ptooltipClass=null,r.$_ptooltipIdAttr=r.$_ptooltipIdAttr||ma()+"_tooltip",r.$_ptooltipShowDelay=0,r.$_ptooltipHideDelay=0,r.$_ptooltipAutoHide=!0,this.bindEvents(r,t);else if(fi(t.value)==="object"&&t.value)if(Cn(t.value.value)||t.value.value.trim()===""){this.unbindEvents(r,t);return}else r.$_ptooltipValue=t.value.value,r.$_ptooltipDisabled=!!t.value.disabled===t.value.disabled?t.value.disabled:!1,r.$_ptooltipEscape=!!t.value.escape===t.value.escape?t.value.escape:!0,r.$_ptooltipClass=t.value.class||"",r.$_ptooltipFitContent=!!t.value.fitContent===t.value.fitContent?t.value.fitContent:!0,r.$_ptooltipIdAttr=t.value.id||r.$_ptooltipIdAttr||ma()+"_tooltip",r.$_ptooltipShowDelay=t.value.showDelay||0,r.$_ptooltipHideDelay=t.value.hideDelay||0,r.$_ptooltipAutoHide=!!t.value.autoHide===t.value.autoHide?t.value.autoHide:!0,this.bindEvents(r,t)}},unmounted:function(e,t){var r=this.getTarget(e);this.remove(r),this.unbindEvents(r,t),r.$_ptooltipScrollHandler&&(r.$_ptooltipScrollHandler.destroy(),r.$_ptooltipScrollHandler=null)},timer:void 0,methods:{bindEvents:function(e,t){var r=this,i=e.$_ptooltipModifiers;i.focus?(e.$_focusevent=function(o){return r.onFocus(o,t)},e.addEventListener("focus",e.$_focusevent),e.addEventListener("blur",this.onBlur.bind(this))):(e.$_mouseenterevent=function(o){return r.onMouseEnter(o,t)},e.addEventListener("mouseenter",e.$_mouseenterevent),e.addEventListener("mouseleave",this.onMouseLeave.bind(this)),e.addEventListener("click",this.onClick.bind(this))),e.addEventListener("keydown",this.onKeydown.bind(this))},unbindEvents:function(e){var t=e.$_ptooltipModifiers;t.focus?(e.removeEventListener("focus",e.$_focusevent),e.$_focusevent=null,e.removeEventListener("blur",this.onBlur.bind(this))):(e.removeEventListener("mouseenter",e.$_mouseenterevent),e.$_mouseenterevent=null,e.removeEventListener("mouseleave",this.onMouseLeave.bind(this)),e.removeEventListener("click",this.onClick.bind(this))),e.removeEventListener("keydown",this.onKeydown.bind(this))},bindScrollListener:function(e){var t=this;e.$_ptooltipScrollHandler||(e.$_ptooltipScrollHandler=new X1(e,function(){t.hide(e)})),e.$_ptooltipScrollHandler.bindScrollListener()},unbindScrollListener:function(e){e.$_ptooltipScrollHandler&&e.$_ptooltipScrollHandler.unbindScrollListener()},onMouseEnter:function(e,t){var r=e.currentTarget,i=r.$_ptooltipShowDelay;this.show(r,t,i)},onMouseLeave:function(e){var t=e.currentTarget,r=t.$_ptooltipHideDelay,i=t.$_ptooltipAutoHide;if(i)this.hide(t,r);else{var o=Pr(e.target,"data-pc-name")==="tooltip"||Pr(e.target,"data-pc-section")==="arrow"||Pr(e.target,"data-pc-section")==="text"||Pr(e.relatedTarget,"data-pc-name")==="tooltip"||Pr(e.relatedTarget,"data-pc-section")==="arrow"||Pr(e.relatedTarget,"data-pc-section")==="text";!o&&this.hide(t,r)}},onFocus:function(e,t){var r=e.currentTarget,i=r.$_ptooltipShowDelay;this.show(r,t,i)},onBlur:function(e){var t=e.currentTarget,r=t.$_ptooltipHideDelay;this.hide(t,r)},onClick:function(e){var t=e.currentTarget,r=t.$_ptooltipHideDelay;this.hide(t,r)},onKeydown:function(e){var t=e.currentTarget,r=t.$_ptooltipHideDelay;e.code==="Escape"&&this.hide(e.currentTarget,r)},tooltipActions:function(e,t){if(!(e.$_ptooltipDisabled||!cg(e))){var r=this.create(e,t);this.align(e),!this.isUnstyled()&&M_(r,250);var i=this;window.addEventListener("resize",function o(){R_()||i.hide(e),window.removeEventListener("resize",o)}),r.addEventListener("mouseleave",function o(){i.hide(e),r.removeEventListener("mouseleave",o),e.removeEventListener("mouseenter",e.$_mouseenterevent),setTimeout(function(){return e.addEventListener("mouseenter",e.$_mouseenterevent)},50)}),this.bindScrollListener(e),di.set("tooltip",r,e.$_ptooltipZIndex)}},show:function(e,t,r){var i=this;r!==void 0?this.timer=setTimeout(function(){return i.tooltipActions(e,t)},r):this.tooltipActions(e,t)},tooltipRemoval:function(e){this.remove(e),this.unbindScrollListener(e)},hide:function(e,t){var r=this;clearTimeout(this.timer),t!==void 0?setTimeout(function(){return r.tooltipRemoval(e)},t):this.tooltipRemoval(e)},getTooltipElement:function(e){return document.getElementById(e.$_ptooltipId)},create:function(e){var t=e.$_ptooltipModifiers,r=Cs("div",{class:!this.isUnstyled()&&this.cx("arrow"),"p-bind":this.ptm("arrow",{context:t})}),i=Cs("div",{class:!this.isUnstyled()&&this.cx("text"),"p-bind":this.ptm("text",{context:t})});e.$_ptooltipEscape?(i.innerHTML="",i.appendChild(document.createTextNode(e.$_ptooltipValue))):i.innerHTML=e.$_ptooltipValue;var o=Cs("div",Qf(Qf({id:e.$_ptooltipIdAttr,role:"tooltip",style:{display:"inline-block",width:e.$_ptooltipFitContent?"fit-content":void 0,pointerEvents:!this.isUnstyled()&&e.$_ptooltipAutoHide&&"none"},class:[!this.isUnstyled()&&this.cx("root"),e.$_ptooltipClass]},this.$attrSelector,""),"p-bind",this.ptm("root",{context:t})),r,i);return document.body.appendChild(o),e.$_ptooltipId=o.id,this.$el=o,o},remove:function(e){if(e){var t=this.getTooltipElement(e);t&&t.parentElement&&(di.clear(t),document.body.removeChild(t)),e.$_ptooltipId=null}},align:function(e){var t=e.$_ptooltipModifiers;t.top?(this.alignTop(e),this.isOutOfBounds(e)&&(this.alignBottom(e),this.isOutOfBounds(e)&&this.alignTop(e))):t.left?(this.alignLeft(e),this.isOutOfBounds(e)&&(this.alignRight(e),this.isOutOfBounds(e)&&(this.alignTop(e),this.isOutOfBounds(e)&&(this.alignBottom(e),this.isOutOfBounds(e)&&this.alignLeft(e))))):t.bottom?(this.alignBottom(e),this.isOutOfBounds(e)&&(this.alignTop(e),this.isOutOfBounds(e)&&this.alignBottom(e))):(this.alignRight(e),this.isOutOfBounds(e)&&(this.alignLeft(e),this.isOutOfBounds(e)&&(this.alignTop(e),this.isOutOfBounds(e)&&(this.alignBottom(e),this.isOutOfBounds(e)&&this.alignRight(e)))))},getHostOffset:function(e){var t=e.getBoundingClientRect(),r=t.left+S_(),i=t.top+w_();return{left:r,top:i}},alignRight:function(e){this.preAlign(e,"right");var t=this.getTooltipElement(e),r=this.getHostOffset(e),i=r.left+Jr(e),o=r.top+(Qr(e)-Qr(t))/2;t.style.left=i+"px",t.style.top=o+"px"},alignLeft:function(e){this.preAlign(e,"left");var t=this.getTooltipElement(e),r=this.getHostOffset(e),i=r.left-Jr(t),o=r.top+(Qr(e)-Qr(t))/2;t.style.left=i+"px",t.style.top=o+"px"},alignTop:function(e){this.preAlign(e,"top");var t=this.getTooltipElement(e),r=this.getHostOffset(e),i=r.left+(Jr(e)-Jr(t))/2,o=r.top-Qr(t);t.style.left=i+"px",t.style.top=o+"px"},alignBottom:function(e){this.preAlign(e,"bottom");var t=this.getTooltipElement(e),r=this.getHostOffset(e),i=r.left+(Jr(e)-Jr(t))/2,o=r.top+Qr(e);t.style.left=i+"px",t.style.top=o+"px"},preAlign:function(e,t){var r=this.getTooltipElement(e);r.style.left="-999px",r.style.top="-999px",Po(r,"p-tooltip-".concat(r.$_ptooltipPosition)),!this.isUnstyled()&&Ko(r,"p-tooltip-".concat(t)),r.$_ptooltipPosition=t,r.setAttribute("data-p-position",t);var i=Oo(r,'[data-pc-section="arrow"]');i.style.top=t==="bottom"?"0":t==="right"||t==="left"||t!=="right"&&t!=="left"&&t!=="top"&&t!=="bottom"?"50%":null,i.style.bottom=t==="top"?"0":null,i.style.left=t==="right"||t!=="right"&&t!=="left"&&t!=="top"&&t!=="bottom"?"0":t==="top"||t==="bottom"?"50%":null,i.style.right=t==="left"?"0":null},isOutOfBounds:function(e){var t=this.getTooltipElement(e),r=t.getBoundingClientRect(),i=r.top,o=r.left,s=Jr(t),a=Qr(t),l=x_();return o+s>l.width||o<0||i<0||i+a>l.height},getTarget:function(e){var t;return rg(e,"p-inputwrapper")&&(t=Oo(e,"input"))!==null&&t!==void 0?t:e},getModifiers:function(e){return e.modifiers&&Object.keys(e.modifiers).length?e.modifiers:e.arg&&fi(e.arg)==="object"?Object.entries(e.arg).reduce(function(t,r){var i=ix(r,2),o=i[0],s=i[1];return(o==="event"||o==="position")&&(t[s]=!0),t},{}):{}}}});const Bn=(n,e)=>{const t=n.__vccOpts||n;for(const[r,i]of e)t[r]=i;return t};var eh=ut.extend({name:"common"});function Ws(n){"@babel/helpers - typeof";return Ws=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ws(n)}function fx(n){return hg(n)||hx(n)||fg(n)||dg()}function hx(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function is(n,e){return hg(n)||px(n,e)||fg(n,e)||dg()}function dg(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function fg(n,e){if(n){if(typeof n=="string")return th(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?th(n,e):void 0}}function th(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=Array(e);t<e;t++)r[t]=n[t];return r}function px(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r,i,o,s,a=[],l=!0,c=!1;try{if(o=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;l=!1}else for(;!(l=(r=o.call(t)).done)&&(a.push(r.value),a.length!==e);l=!0);}catch(u){c=!0,i=u}finally{try{if(!l&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(c)throw i}}return a}}function hg(n){if(Array.isArray(n))return n}function nh(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function it(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?nh(Object(t),!0).forEach(function(r){gs(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):nh(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function gs(n,e,t){return(e=mx(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function mx(n){var e=gx(n,"string");return Ws(e)=="symbol"?e:e+""}function gx(n,e){if(Ws(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(Ws(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var Vr={name:"BaseComponent",props:{pt:{type:Object,default:void 0},ptOptions:{type:Object,default:void 0},unstyled:{type:Boolean,default:void 0},dt:{type:Object,default:void 0}},inject:{$parentInstance:{default:void 0}},watch:{isUnstyled:{immediate:!0,handler:function(e){e||(this._loadCoreStyles(),this._themeChangeListener(this._loadCoreStyles))}},dt:{immediate:!0,handler:function(e){var t=this;e?(this._loadScopedThemeStyles(e),this._themeChangeListener(function(){return t._loadScopedThemeStyles(e)})):this._unloadScopedThemeStyles()}}},scopedStyleEl:void 0,rootEl:void 0,$attrSelector:void 0,beforeCreate:function(){var e,t,r,i,o,s,a,l,c,u,d,f=(e=this.pt)===null||e===void 0?void 0:e._usept,h=f?(t=this.pt)===null||t===void 0||(t=t.originalValue)===null||t===void 0?void 0:t[this.$.type.name]:void 0,g=f?(r=this.pt)===null||r===void 0||(r=r.value)===null||r===void 0?void 0:r[this.$.type.name]:this.pt;(i=g||h)===null||i===void 0||(i=i.hooks)===null||i===void 0||(o=i.onBeforeCreate)===null||o===void 0||o.call(i);var v=(s=this.$primevueConfig)===null||s===void 0||(s=s.pt)===null||s===void 0?void 0:s._usept,m=v?(a=this.$primevue)===null||a===void 0||(a=a.config)===null||a===void 0||(a=a.pt)===null||a===void 0?void 0:a.originalValue:void 0,p=v?(l=this.$primevue)===null||l===void 0||(l=l.config)===null||l===void 0||(l=l.pt)===null||l===void 0?void 0:l.value:(c=this.$primevue)===null||c===void 0||(c=c.config)===null||c===void 0?void 0:c.pt;(u=p||m)===null||u===void 0||(u=u[this.$.type.name])===null||u===void 0||(u=u.hooks)===null||u===void 0||(d=u.onBeforeCreate)===null||d===void 0||d.call(u),this.$attrSelector=pd("pc")},created:function(){this._hook("onCreated")},beforeMount:function(){this.rootEl=Oo(this.$el,'[data-pc-name="'.concat(Xn(this.$.type.name),'"]')),this.rootEl&&(this.$attrSelector&&!this.rootEl.hasAttribute(this.$attrSelector)&&this.rootEl.setAttribute(this.$attrSelector,""),this.rootEl.$pc=it({name:this.$.type.name,attrSelector:this.$attrSelector},this.$params)),this._loadStyles(),this._hook("onBeforeMount")},mounted:function(){this._hook("onMounted")},beforeUpdate:function(){this._hook("onBeforeUpdate")},updated:function(){this._hook("onUpdated")},beforeUnmount:function(){this._hook("onBeforeUnmount")},unmounted:function(){this._unloadScopedThemeStyles(),this._hook("onUnmounted")},methods:{_hook:function(e){if(!this.$options.hostName){var t=this._usePT(this._getPT(this.pt,this.$.type.name),this._getOptionValue,"hooks.".concat(e)),r=this._useDefaultPT(this._getOptionValue,"hooks.".concat(e));t==null||t(),r==null||r()}},_mergeProps:function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];return Rl(e)?e.apply(void 0,r):he.apply(void 0,r)},_loadStyles:function(){var e=this,t=function(){ii.isStyleNameLoaded("base")||(ut.loadCSS(e.$styleOptions),e._loadGlobalStyles(),ii.setLoadedStyleName("base")),e._loadThemeStyles()};t(),this._themeChangeListener(t)},_loadCoreStyles:function(){var e,t;!ii.isStyleNameLoaded((e=this.$style)===null||e===void 0?void 0:e.name)&&(t=this.$style)!==null&&t!==void 0&&t.name&&(eh.loadCSS(this.$styleOptions),this.$options.style&&this.$style.loadCSS(this.$styleOptions),ii.setLoadedStyleName(this.$style.name))},_loadGlobalStyles:function(){var e=this._useGlobalPT(this._getOptionValue,"global.css",this.$params);Tt(e)&&ut.load(e,it({name:"global"},this.$styleOptions))},_loadThemeStyles:function(){var e,t;if(!(this.isUnstyled||this.$theme==="none")){if(!wt.isStyleNameLoaded("common")){var r,i,o=((r=this.$style)===null||r===void 0||(i=r.getCommonTheme)===null||i===void 0?void 0:i.call(r))||{},s=o.primitive,a=o.semantic,l=o.global,c=o.style;ut.load(s==null?void 0:s.css,it({name:"primitive-variables"},this.$styleOptions)),ut.load(a==null?void 0:a.css,it({name:"semantic-variables"},this.$styleOptions)),ut.load(l==null?void 0:l.css,it({name:"global-variables"},this.$styleOptions)),ut.loadTheme(it({name:"global-style"},this.$styleOptions),c),wt.setLoadedStyleName("common")}if(!wt.isStyleNameLoaded((e=this.$style)===null||e===void 0?void 0:e.name)&&(t=this.$style)!==null&&t!==void 0&&t.name){var u,d,f,h,g=((u=this.$style)===null||u===void 0||(d=u.getComponentTheme)===null||d===void 0?void 0:d.call(u))||{},v=g.css,m=g.style;(f=this.$style)===null||f===void 0||f.load(v,it({name:"".concat(this.$style.name,"-variables")},this.$styleOptions)),(h=this.$style)===null||h===void 0||h.loadTheme(it({name:"".concat(this.$style.name,"-style")},this.$styleOptions),m),wt.setLoadedStyleName(this.$style.name)}if(!wt.isStyleNameLoaded("layer-order")){var p,E,x=(p=this.$style)===null||p===void 0||(E=p.getLayerOrderThemeCSS)===null||E===void 0?void 0:E.call(p);ut.load(x,it({name:"layer-order",first:!0},this.$styleOptions)),wt.setLoadedStyleName("layer-order")}}},_loadScopedThemeStyles:function(e){var t,r,i,o=((t=this.$style)===null||t===void 0||(r=t.getPresetTheme)===null||r===void 0?void 0:r.call(t,e,"[".concat(this.$attrSelector,"]")))||{},s=o.css,a=(i=this.$style)===null||i===void 0?void 0:i.load(s,it({name:"".concat(this.$attrSelector,"-").concat(this.$style.name)},this.$styleOptions));this.scopedStyleEl=a.el},_unloadScopedThemeStyles:function(){var e;(e=this.scopedStyleEl)===null||e===void 0||(e=e.value)===null||e===void 0||e.remove()},_themeChangeListener:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(){};ii.clearLoadedStyleNames(),Wn.on("theme:change",e)},_getHostInstance:function(e){return e?this.$options.hostName?e.$.type.name===this.$options.hostName?e:this._getHostInstance(e.$parentInstance):e.$parentInstance:void 0},_getPropValue:function(e){var t;return this[e]||((t=this._getHostInstance(this))===null||t===void 0?void 0:t[e])},_getOptionValue:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return fd(e,t,r)},_getPTValue:function(){var e,t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0,s=/./g.test(r)&&!!i[r.split(".")[0]],a=this._getPropValue("ptOptions")||((e=this.$primevueConfig)===null||e===void 0?void 0:e.ptOptions)||{},l=a.mergeSections,c=l===void 0?!0:l,u=a.mergeProps,d=u===void 0?!1:u,f=o?s?this._useGlobalPT(this._getPTClassValue,r,i):this._useDefaultPT(this._getPTClassValue,r,i):void 0,h=s?void 0:this._getPTSelf(t,this._getPTClassValue,r,it(it({},i),{},{global:f||{}})),g=this._getPTDatasets(r);return c||!c&&h?d?this._mergeProps(d,f,h,g):it(it(it({},f),h),g):it(it({},h),g)},_getPTSelf:function(){for(var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];return he(this._usePT.apply(this,[this._getPT(e,this.$name)].concat(r)),this._usePT.apply(this,[this.$_attrsPT].concat(r)))},_getPTDatasets:function(){var e,t,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",i="data-pc-",o=r==="root"&&Tt((e=this.pt)===null||e===void 0?void 0:e["data-pc-section"]);return r!=="transition"&&it(it({},r==="root"&&it(it(gs({},"".concat(i,"name"),Xn(o?(t=this.pt)===null||t===void 0?void 0:t["data-pc-section"]:this.$.type.name)),o&&gs({},"".concat(i,"extend"),Xn(this.$.type.name))),hd()&&gs({},"".concat(this.$attrSelector),""))),{},gs({},"".concat(i,"section"),Xn(r)))},_getPTClassValue:function(){var e=this._getOptionValue.apply(this,arguments);return _n(e)||Pl(e)?{class:e}:e},_getPT:function(e){var t=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=arguments.length>2?arguments[2]:void 0,o=function(a){var l,c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,u=i?i(a):a,d=Xn(r),f=Xn(t.$name);return(l=c?d!==f?u==null?void 0:u[d]:void 0:u==null?void 0:u[d])!==null&&l!==void 0?l:u};return e!=null&&e.hasOwnProperty("_usept")?{_usept:e._usept,originalValue:o(e.originalValue),value:o(e.value)}:o(e,!0)},_usePT:function(e,t,r,i){var o=function(v){return t(v,r,i)};if(e!=null&&e.hasOwnProperty("_usept")){var s,a=e._usept||((s=this.$primevueConfig)===null||s===void 0?void 0:s.ptOptions)||{},l=a.mergeSections,c=l===void 0?!0:l,u=a.mergeProps,d=u===void 0?!1:u,f=o(e.originalValue),h=o(e.value);return f===void 0&&h===void 0?void 0:_n(h)?h:_n(f)?f:c||!c&&h?d?this._mergeProps(d,f,h):it(it({},f),h):h}return o(e)},_useGlobalPT:function(e,t,r){return this._usePT(this.globalPT,e,t,r)},_useDefaultPT:function(e,t,r){return this._usePT(this.defaultPT,e,t,r)},ptm:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this._getPTValue(this.pt,e,it(it({},this.$params),t))},ptmi:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return he(this.$_attrsWithoutPT,this.ptm(e,t))},ptmo:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this._getPTValue(e,t,it({instance:this},r),!1)},cx:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.isUnstyled?void 0:this._getOptionValue(this.$style.classes,e,it(it({},this.$params),t))},sx:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(t){var i=this._getOptionValue(this.$style.inlineStyles,e,it(it({},this.$params),r)),o=this._getOptionValue(eh.inlineStyles,e,it(it({},this.$params),r));return[o,i]}}},computed:{globalPT:function(){var e,t=this;return this._getPT((e=this.$primevueConfig)===null||e===void 0?void 0:e.pt,void 0,function(r){return kn(r,{instance:t})})},defaultPT:function(){var e,t=this;return this._getPT((e=this.$primevueConfig)===null||e===void 0?void 0:e.pt,void 0,function(r){return t._getOptionValue(r,t.$name,it({},t.$params))||kn(r,it({},t.$params))})},isUnstyled:function(){var e;return this.unstyled!==void 0?this.unstyled:(e=this.$primevueConfig)===null||e===void 0?void 0:e.unstyled},$inProps:function(){var e,t=Object.keys(((e=this.$.vnode)===null||e===void 0?void 0:e.props)||{});return Object.fromEntries(Object.entries(this.$props).filter(function(r){var i=is(r,1),o=i[0];return t==null?void 0:t.includes(o)}))},$theme:function(){var e;return(e=this.$primevueConfig)===null||e===void 0?void 0:e.theme},$style:function(){return it(it({classes:void 0,inlineStyles:void 0,load:function(){},loadCSS:function(){},loadTheme:function(){}},(this._getHostInstance(this)||{}).$style),this.$options.style)},$styleOptions:function(){var e;return{nonce:(e=this.$primevueConfig)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce}},$primevueConfig:function(){var e;return(e=this.$primevue)===null||e===void 0?void 0:e.config},$name:function(){return this.$options.hostName||this.$.type.name},$params:function(){var e=this._getHostInstance(this)||this.$parent;return{instance:this,props:this.$props,state:this.$data,attrs:this.$attrs,parent:{instance:e,props:e==null?void 0:e.$props,state:e==null?void 0:e.$data,attrs:e==null?void 0:e.$attrs}}},$_attrsPT:function(){return Object.entries(this.$attrs||{}).filter(function(e){var t=is(e,1),r=t[0];return r==null?void 0:r.startsWith("pt:")}).reduce(function(e,t){var r=is(t,2),i=r[0],o=r[1],s=i.split(":"),a=fx(s),l=a.slice(1);return l==null||l.reduce(function(c,u,d,f){return!c[u]&&(c[u]=d===f.length-1?o:{}),c[u]},e),e},{})},$_attrsWithoutPT:function(){return Object.entries(this.$attrs||{}).filter(function(e){var t=is(e,1),r=t[0];return!(r!=null&&r.startsWith("pt:"))}).reduce(function(e,t){var r=is(t,2),i=r[0],o=r[1];return e[i]=o,e},{})}}},vx=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,bx=ut.extend({name:"baseicon",css:vx});function js(n){"@babel/helpers - typeof";return js=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},js(n)}function rh(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function ih(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?rh(Object(t),!0).forEach(function(r){_x(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):rh(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function _x(n,e,t){return(e=yx(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function yx(n){var e=xx(n,"string");return js(e)=="symbol"?e:e+""}function xx(n,e){if(js(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(js(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var Un={name:"BaseIcon",extends:Vr,props:{label:{type:String,default:void 0},spin:{type:Boolean,default:!1}},style:bx,provide:function(){return{$pcIcon:this,$parentInstance:this}},methods:{pti:function(){var e=Cn(this.label);return ih(ih({},!this.isUnstyled&&{class:["p-icon",{"p-icon-spin":this.spin}]}),{},{role:e?void 0:"img","aria-label":e?void 0:this.label,"aria-hidden":e})}}},pg={name:"EyeIcon",extends:Un};function Sx(n,e,t,r,i,o){return ge(),Pe("svg",he({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),e[0]||(e[0]=[J("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0.0535499 7.25213C0.208567 7.59162 2.40413 12.4 7 12.4C11.5959 12.4 13.7914 7.59162 13.9465 7.25213C13.9487 7.2471 13.9506 7.24304 13.952 7.24001C13.9837 7.16396 14 7.08239 14 7.00001C14 6.91762 13.9837 6.83605 13.952 6.76001C13.9506 6.75697 13.9487 6.75292 13.9465 6.74788C13.7914 6.4084 11.5959 1.60001 7 1.60001C2.40413 1.60001 0.208567 6.40839 0.0535499 6.74788C0.0512519 6.75292 0.0494023 6.75697 0.048 6.76001C0.0163137 6.83605 0 6.91762 0 7.00001C0 7.08239 0.0163137 7.16396 0.048 7.24001C0.0494023 7.24304 0.0512519 7.2471 0.0535499 7.25213ZM7 11.2C3.664 11.2 1.736 7.92001 1.264 7.00001C1.736 6.08001 3.664 2.80001 7 2.80001C10.336 2.80001 12.264 6.08001 12.736 7.00001C12.264 7.92001 10.336 11.2 7 11.2ZM5.55551 9.16182C5.98308 9.44751 6.48576 9.6 7 9.6C7.68891 9.59789 8.349 9.32328 8.83614 8.83614C9.32328 8.349 9.59789 7.68891 9.59999 7C9.59999 6.48576 9.44751 5.98308 9.16182 5.55551C8.87612 5.12794 8.47006 4.7947 7.99497 4.59791C7.51988 4.40112 6.99711 4.34963 6.49276 4.44995C5.98841 4.55027 5.52513 4.7979 5.16152 5.16152C4.7979 5.52513 4.55027 5.98841 4.44995 6.49276C4.34963 6.99711 4.40112 7.51988 4.59791 7.99497C4.7947 8.47006 5.12794 8.87612 5.55551 9.16182ZM6.2222 5.83594C6.45243 5.6821 6.7231 5.6 7 5.6C7.37065 5.6021 7.72553 5.75027 7.98762 6.01237C8.24972 6.27446 8.39789 6.62934 8.4 7C8.4 7.27689 8.31789 7.54756 8.16405 7.77779C8.01022 8.00802 7.79157 8.18746 7.53575 8.29343C7.27994 8.39939 6.99844 8.42711 6.72687 8.37309C6.4553 8.31908 6.20584 8.18574 6.01005 7.98994C5.81425 7.79415 5.68091 7.54469 5.6269 7.27312C5.57288 7.00155 5.6006 6.72006 5.70656 6.46424C5.81253 6.20842 5.99197 5.98977 6.2222 5.83594Z",fill:"currentColor"},null,-1)]),16)}pg.render=Sx;var mg={name:"RefreshIcon",extends:Un};function wx(n,e,t,r,i,o){return ge(),Pe("svg",he({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),e[0]||(e[0]=[J("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6.77051 5.96336C6.84324 5.99355 6.92127 6.00891 7.00002 6.00854C7.07877 6.00891 7.1568 5.99355 7.22953 5.96336C7.30226 5.93317 7.36823 5.88876 7.42357 5.83273L9.82101 3.43529C9.93325 3.32291 9.99629 3.17058 9.99629 3.01175C9.99629 2.85292 9.93325 2.70058 9.82101 2.5882L7.42357 0.190763C7.3687 0.131876 7.30253 0.0846451 7.22901 0.0518865C7.15549 0.019128 7.07612 0.00151319 6.99564 9.32772e-05C6.91517 -0.00132663 6.83523 0.0134773 6.7606 0.0436218C6.68597 0.0737664 6.61817 0.118634 6.56126 0.175548C6.50435 0.232462 6.45948 0.300257 6.42933 0.374888C6.39919 0.449519 6.38439 0.529456 6.38581 0.609933C6.38722 0.690409 6.40484 0.769775 6.4376 0.843296C6.47036 0.916817 6.51759 0.982986 6.57647 1.03786L7.95103 2.41241H6.99998C5.46337 2.41241 3.98969 3.02283 2.90314 4.10938C1.81659 5.19593 1.20618 6.66961 1.20618 8.20622C1.20618 9.74283 1.81659 11.2165 2.90314 12.3031C3.98969 13.3896 5.46337 14 6.99998 14C8.53595 13.9979 10.0084 13.3868 11.0945 12.3007C12.1806 11.2146 12.7917 9.74218 12.7938 8.20622C12.7938 8.04726 12.7306 7.89481 12.6182 7.78241C12.5058 7.67001 12.3534 7.60686 12.1944 7.60686C12.0355 7.60686 11.883 7.67001 11.7706 7.78241C11.6582 7.89481 11.5951 8.04726 11.5951 8.20622C11.5951 9.11504 11.3256 10.0035 10.8207 10.7591C10.3157 11.5148 9.59809 12.1037 8.75845 12.4515C7.9188 12.7993 6.99489 12.8903 6.10353 12.713C5.21217 12.5357 4.3934 12.0981 3.75077 11.4554C3.10813 10.8128 2.67049 9.99404 2.49319 9.10268C2.31589 8.21132 2.40688 7.2874 2.75468 6.44776C3.10247 5.60811 3.69143 4.89046 4.44709 4.38554C5.20275 3.88063 6.09116 3.61113 6.99998 3.61113H7.95098L6.57647 4.98564C6.46423 5.09802 6.40119 5.25035 6.40119 5.40918C6.40119 5.56801 6.46423 5.72035 6.57647 5.83273C6.63181 5.88876 6.69778 5.93317 6.77051 5.96336Z",fill:"currentColor"},null,-1)]),16)}mg.render=wx;var gg={name:"SearchMinusIcon",extends:Un};function Mx(n,e,t,r,i,o){return ge(),Pe("svg",he({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),e[0]||(e[0]=[J("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6.0208 12.0411C4.83005 12.0411 3.66604 11.688 2.67596 11.0265C1.68589 10.3649 0.914216 9.42464 0.458534 8.32452C0.00285271 7.22441 -0.116374 6.01388 0.11593 4.84601C0.348235 3.67813 0.921637 2.60537 1.76363 1.76338C2.60562 0.921393 3.67838 0.34799 4.84625 0.115686C6.01412 -0.116618 7.22466 0.00260857 8.32477 0.45829C9.42488 0.913972 10.3652 1.68564 11.0267 2.67572C11.6883 3.66579 12.0414 4.8298 12.0414 6.02056C12.0395 7.41563 11.5542 8.76029 10.6783 9.8305L13.8244 12.9765C13.9367 13.089 13.9997 13.2414 13.9997 13.4003C13.9997 13.5592 13.9367 13.7116 13.8244 13.8241C13.769 13.8801 13.703 13.9245 13.6302 13.9548C13.5575 13.985 13.4794 14.0003 13.4006 14C13.3218 14.0003 13.2437 13.985 13.171 13.9548C13.0982 13.9245 13.0322 13.8801 12.9768 13.8241L9.83082 10.678C8.76059 11.5539 7.4159 12.0393 6.0208 12.0411ZM6.0208 1.20731C5.07199 1.20731 4.14449 1.48867 3.35559 2.0158C2.56669 2.54292 1.95181 3.29215 1.58872 4.16874C1.22562 5.04532 1.13062 6.00989 1.31572 6.94046C1.50083 7.87104 1.95772 8.72583 2.62863 9.39674C3.29954 10.0676 4.15433 10.5245 5.0849 10.7096C6.01548 10.8947 6.98005 10.7997 7.85663 10.4367C8.73322 10.0736 9.48244 9.45868 10.0096 8.66978C10.5367 7.88088 10.8181 6.95337 10.8181 6.00457C10.8181 4.73226 10.3126 3.51206 9.41297 2.6124C8.51331 1.71274 7.29311 1.20731 6.0208 1.20731ZM4.00591 6.60422H8.00362C8.16266 6.60422 8.31518 6.54104 8.42764 6.42859C8.5401 6.31613 8.60328 6.1636 8.60328 6.00456C8.60328 5.84553 8.5401 5.693 8.42764 5.58054C8.31518 5.46809 8.16266 5.40491 8.00362 5.40491H4.00591C3.84687 5.40491 3.69434 5.46809 3.58189 5.58054C3.46943 5.693 3.40625 5.84553 3.40625 6.00456C3.40625 6.1636 3.46943 6.31613 3.58189 6.42859C3.69434 6.54104 3.84687 6.60422 4.00591 6.60422Z",fill:"currentColor"},null,-1)]),16)}gg.render=Mx;var vg={name:"SearchPlusIcon",extends:Un};function Tx(n,e,t,r,i,o){return ge(),Pe("svg",he({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),e[0]||(e[0]=[J("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M2.67596 11.0265C3.66604 11.688 4.83005 12.0411 6.0208 12.0411C6.81143 12.0411 7.59432 11.8854 8.32477 11.5828C8.86999 11.357 9.37802 11.0526 9.83311 10.6803L12.9768 13.8241C13.0322 13.8801 13.0982 13.9245 13.171 13.9548C13.2437 13.985 13.3218 14.0003 13.4006 14C13.4794 14.0003 13.5575 13.985 13.6302 13.9548C13.703 13.9245 13.769 13.8801 13.8244 13.8241C13.9367 13.7116 13.9997 13.5592 13.9997 13.4003C13.9997 13.2414 13.9367 13.089 13.8244 12.9765L10.6806 9.8328C11.0529 9.37773 11.3572 8.86972 11.5831 8.32452C11.8856 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0267 2.67572C10.3652 1.68564 9.42488 0.913972 8.32477 0.45829C7.22466 0.00260857 6.01412 -0.116618 4.84625 0.115686C3.67838 0.34799 2.60562 0.921393 1.76363 1.76338C0.921637 2.60537 0.348235 3.67813 0.11593 4.84601C-0.116374 6.01388 0.00285271 7.22441 0.458534 8.32452C0.914216 9.42464 1.68589 10.3649 2.67596 11.0265ZM3.35559 2.0158C4.14449 1.48867 5.07199 1.20731 6.0208 1.20731C7.29311 1.20731 8.51331 1.71274 9.41297 2.6124C10.3126 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5367 7.88088 10.0096 8.66978C9.48244 9.45868 8.73322 10.0736 7.85663 10.4367C6.98005 10.7997 6.01548 10.8947 5.0849 10.7096C4.15433 10.5245 3.29954 10.0676 2.62863 9.39674C1.95772 8.72583 1.50083 7.87104 1.31572 6.94046C1.13062 6.00989 1.22562 5.04532 1.58872 4.16874C1.95181 3.29215 2.56669 2.54292 3.35559 2.0158ZM6.00481 8.60309C5.84641 8.60102 5.69509 8.53718 5.58308 8.42517C5.47107 8.31316 5.40722 8.16183 5.40515 8.00344V6.60422H4.00591C3.84687 6.60422 3.69434 6.54104 3.58189 6.42859C3.46943 6.31613 3.40625 6.1636 3.40625 6.00456C3.40625 5.84553 3.46943 5.693 3.58189 5.58054C3.69434 5.46809 3.84687 5.40491 4.00591 5.40491H5.40515V4.00572C5.40515 3.84668 5.46833 3.69416 5.58079 3.5817C5.69324 3.46924 5.84577 3.40607 6.00481 3.40607C6.16385 3.40607 6.31637 3.46924 6.42883 3.5817C6.54129 3.69416 6.60447 3.84668 6.60447 4.00572V5.40491H8.00362C8.16266 5.40491 8.31518 5.46809 8.42764 5.58054C8.5401 5.693 8.60328 5.84553 8.60328 6.00456C8.60328 6.1636 8.5401 6.31613 8.42764 6.42859C8.31518 6.54104 8.16266 6.60422 8.00362 6.60422H6.60447V8.00344C6.60239 8.16183 6.53855 8.31316 6.42654 8.42517C6.31453 8.53718 6.1632 8.60102 6.00481 8.60309Z",fill:"currentColor"},null,-1)]),16)}vg.render=Tx;var md={name:"TimesIcon",extends:Un};function Ex(n,e,t,r,i,o){return ge(),Pe("svg",he({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),e[0]||(e[0]=[J("path",{d:"M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z",fill:"currentColor"},null,-1)]),16)}md.render=Ex;var bg={name:"UndoIcon",extends:Un};function Cx(n,e,t,r,i,o){return ge(),Pe("svg",he({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),e[0]||(e[0]=[J("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6.77042 5.96336C6.84315 5.99355 6.92118 6.00891 6.99993 6.00854C7.07868 6.00891 7.15671 5.99355 7.22944 5.96336C7.30217 5.93317 7.36814 5.88876 7.42348 5.83273C7.53572 5.72035 7.59876 5.56801 7.59876 5.40918C7.59876 5.25035 7.53572 5.09802 7.42348 4.98564L6.04897 3.61113H6.99998C7.9088 3.61113 8.79722 3.88063 9.55288 4.38554C10.3085 4.89046 10.8975 5.60811 11.2453 6.44776C11.5931 7.2874 11.6841 8.21132 11.5068 9.10268C11.3295 9.99404 10.8918 10.8128 10.2492 11.4554C9.60657 12.0981 8.7878 12.5357 7.89644 12.713C7.00508 12.8903 6.08116 12.7993 5.24152 12.4515C4.40188 12.1037 3.68422 11.5148 3.17931 10.7591C2.67439 10.0035 2.4049 9.11504 2.4049 8.20622C2.4049 8.04726 2.34175 7.89481 2.22935 7.78241C2.11695 7.67001 1.9645 7.60686 1.80554 7.60686C1.64658 7.60686 1.49413 7.67001 1.38172 7.78241C1.26932 7.89481 1.20618 8.04726 1.20618 8.20622C1.20829 9.74218 1.81939 11.2146 2.90548 12.3007C3.99157 13.3868 5.46402 13.9979 6.99998 14C8.5366 14 10.0103 13.3896 11.0968 12.3031C12.1834 11.2165 12.7938 9.74283 12.7938 8.20622C12.7938 6.66961 12.1834 5.19593 11.0968 4.10938C10.0103 3.02283 8.5366 2.41241 6.99998 2.41241H6.04892L7.42348 1.03786C7.48236 0.982986 7.5296 0.916817 7.56235 0.843296C7.59511 0.769775 7.61273 0.690409 7.61415 0.609933C7.61557 0.529456 7.60076 0.449519 7.57062 0.374888C7.54047 0.300257 7.49561 0.232462 7.43869 0.175548C7.38178 0.118634 7.31398 0.0737664 7.23935 0.0436218C7.16472 0.0134773 7.08478 -0.00132663 7.00431 9.32772e-05C6.92383 0.00151319 6.84447 0.019128 6.77095 0.0518865C6.69742 0.0846451 6.63126 0.131876 6.57638 0.190763L4.17895 2.5882C4.06671 2.70058 4.00366 2.85292 4.00366 3.01175C4.00366 3.17058 4.06671 3.32291 4.17895 3.43529L6.57638 5.83273C6.63172 5.88876 6.69769 5.93317 6.77042 5.96336Z",fill:"currentColor"},null,-1)]),16)}bg.render=Cx;var Ax=ut.extend({name:"focustrap-directive"}),Rx=Ze.extend({style:Ax});function Xs(n){"@babel/helpers - typeof";return Xs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Xs(n)}function oh(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function sh(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?oh(Object(t),!0).forEach(function(r){Px(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):oh(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function Px(n,e,t){return(e=Lx(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Lx(n){var e=Ix(n,"string");return Xs(e)=="symbol"?e:e+""}function Ix(n,e){if(Xs(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(Xs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var _g=Rx.extend("focustrap",{mounted:function(e,t){var r=t.value||{},i=r.disabled;i||(this.createHiddenFocusableElements(e,t),this.bind(e,t),this.autoElementFocus(e,t)),e.setAttribute("data-pd-focustrap",!0),this.$el=e},updated:function(e,t){var r=t.value||{},i=r.disabled;i&&this.unbind(e)},unmounted:function(e){this.unbind(e)},methods:{getComputedSelector:function(e){return':not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])'.concat(e??"")},bind:function(e,t){var r=this,i=t.value||{},o=i.onFocusIn,s=i.onFocusOut;e.$_pfocustrap_mutationobserver=new MutationObserver(function(a){a.forEach(function(l){if(l.type==="childList"&&!e.contains(document.activeElement)){var c=function(d){var f=zf(d)?zf(d,r.getComputedSelector(e.$_pfocustrap_focusableselector))?d:rs(e,r.getComputedSelector(e.$_pfocustrap_focusableselector)):rs(d);return Tt(f)?f:d.nextSibling&&c(d.nextSibling)};_o(c(l.nextSibling))}})}),e.$_pfocustrap_mutationobserver.disconnect(),e.$_pfocustrap_mutationobserver.observe(e,{childList:!0}),e.$_pfocustrap_focusinlistener=function(a){return o&&o(a)},e.$_pfocustrap_focusoutlistener=function(a){return s&&s(a)},e.addEventListener("focusin",e.$_pfocustrap_focusinlistener),e.addEventListener("focusout",e.$_pfocustrap_focusoutlistener)},unbind:function(e){e.$_pfocustrap_mutationobserver&&e.$_pfocustrap_mutationobserver.disconnect(),e.$_pfocustrap_focusinlistener&&e.removeEventListener("focusin",e.$_pfocustrap_focusinlistener)&&(e.$_pfocustrap_focusinlistener=null),e.$_pfocustrap_focusoutlistener&&e.removeEventListener("focusout",e.$_pfocustrap_focusoutlistener)&&(e.$_pfocustrap_focusoutlistener=null)},autoFocus:function(e){this.autoElementFocus(this.$el,{value:sh(sh({},e),{},{autoFocus:!0})})},autoElementFocus:function(e,t){var r=t.value||{},i=r.autoFocusSelector,o=i===void 0?"":i,s=r.firstFocusableSelector,a=s===void 0?"":s,l=r.autoFocus,c=l===void 0?!1:l,u=rs(e,"[autofocus]".concat(this.getComputedSelector(o)));c&&!u&&(u=rs(e,this.getComputedSelector(a))),_o(u)},onFirstHiddenElementFocus:function(e){var t,r=e.currentTarget,i=e.relatedTarget,o=i===r.$_pfocustrap_lasthiddenfocusableelement||!((t=this.$el)!==null&&t!==void 0&&t.contains(i))?rs(r.parentElement,this.getComputedSelector(r.$_pfocustrap_focusableselector)):r.$_pfocustrap_lasthiddenfocusableelement;_o(o)},onLastHiddenElementFocus:function(e){var t,r=e.currentTarget,i=e.relatedTarget,o=i===r.$_pfocustrap_firsthiddenfocusableelement||!((t=this.$el)!==null&&t!==void 0&&t.contains(i))?T_(r.parentElement,this.getComputedSelector(r.$_pfocustrap_focusableselector)):r.$_pfocustrap_firsthiddenfocusableelement;_o(o)},createHiddenFocusableElements:function(e,t){var r=this,i=t.value||{},o=i.tabIndex,s=o===void 0?0:o,a=i.firstFocusableSelector,l=a===void 0?"":a,c=i.lastFocusableSelector,u=c===void 0?"":c,d=function(v){return Cs("span",{class:"p-hidden-accessible p-hidden-focusable",tabIndex:s,role:"presentation","aria-hidden":!0,"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0,onFocus:v==null?void 0:v.bind(r)})},f=d(this.onFirstHiddenElementFocus),h=d(this.onLastHiddenElementFocus);f.$_pfocustrap_lasthiddenfocusableelement=h,f.$_pfocustrap_focusableselector=l,f.setAttribute("data-pc-section","firstfocusableelement"),h.$_pfocustrap_firsthiddenfocusableelement=f,h.$_pfocustrap_focusableselector=u,h.setAttribute("data-pc-section","lastfocusableelement"),e.prepend(f),e.append(h)}}}),gd={name:"Portal",props:{appendTo:{type:[String,Object],default:"body"},disabled:{type:Boolean,default:!1}},data:function(){return{mounted:!1}},mounted:function(){this.mounted=hd()},computed:{inline:function(){return this.disabled||this.appendTo==="self"}}};function kx(n,e,t,r,i,o){return o.inline?nt(n.$slots,"default",{key:0}):i.mounted?(ge(),Wt(_v,{key:1,to:t.appendTo},[nt(n.$slots,"default")],8,["to"])):At("",!0)}gd.render=kx;var Dx=function(e){var t=e.dt;return`
.p-image-mask {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-image-preview {
    position: relative;
    display: inline-flex;
    line-height: 0;
}

.p-image-preview-mask {
    position: absolute;
    inset-inline-start: 0;
    inset-block-start: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s;
    border: 0 none;
    padding: 0;
    cursor: pointer;
    background: transparent;
    color: `.concat(t("image.preview.mask.color"),`;
    transition: background `).concat(t("image.transition.duration"),`;
}

.p-image-preview:hover > .p-image-preview-mask {
    opacity: 1;
    cursor: pointer;
    background: `).concat(t("image.preview.mask.background"),`;
}

.p-image-preview-icon {
    font-size: `).concat(t("image.preview.icon.size"),`;
    width: `).concat(t("image.preview.icon.size"),`;
    height: `).concat(t("image.preview.icon.size"),`;
}

.p-image-toolbar {
    position: absolute;
    inset-block-start: `).concat(t("image.toolbar.position.top"),`;
    inset-inline-end: `).concat(t("image.toolbar.position.right"),`;
    inset-inline-start: `).concat(t("image.toolbar.position.left"),`;
    inset-block-end: `).concat(t("image.toolbar.position.bottom"),`;
    display: flex;
    z-index: 1;
    padding: `).concat(t("image.toolbar.padding"),`;
    background: `).concat(t("image.toolbar.background"),`;
    backdrop-filter: blur(`).concat(t("image.toolbar.blur"),`);
    border-color: `).concat(t("image.toolbar.border.color"),`;
    border-style: solid;
    border-width: `).concat(t("image.toolbar.border.width"),`;
    border-radius: `).concat(t("image.toolbar.border.radius"),`;
    gap: `).concat(t("image.toolbar.gap"),`;
}

.p-image-action {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: `).concat(t("image.action.color"),`;
    background: transparent;
    width: `).concat(t("image.action.size"),`;
    height: `).concat(t("image.action.size"),`;
    margin: 0;
    padding: 0;
    border: 0 none;
    cursor: pointer;
    user-select: none;
    border-radius: `).concat(t("image.action.border.radius"),`;
    outline-color: transparent;
    transition: background `).concat(t("image.transition.duration"),", color ").concat(t("image.transition.duration"),", outline-color ").concat(t("image.transition.duration"),", box-shadow ").concat(t("image.transition.duration"),`;
}

.p-image-action:hover {
    color: `).concat(t("image.action.hover.color"),`;
    background: `).concat(t("image.action.hover.background"),`;
}

.p-image-action:focus-visible {
    box-shadow: `).concat(t("image.action.focus.ring.shadow"),`;
    outline: `).concat(t("image.action.focus.ring.width")," ").concat(t("image.action.focus.ring.style")," ").concat(t("image.action.focus.ring.color"),`;
    outline-offset: `).concat(t("image.action.focus.ring.offset"),`;
}

.p-image-action .p-icon {
    font-size: `).concat(t("image.action.icon.size"),`;
    width: `).concat(t("image.action.icon.size"),`;
    height: `).concat(t("image.action.icon.size"),`;
}

.p-image-action.p-disabled {
    pointer-events: auto;
}

.p-image-original {
    transition: transform 0.15s;
    max-width: 100vw;
    max-height: 100vh;
}

.p-image-original-enter-active {
    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
}

.p-image-original-leave-active {
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.p-image-original-enter-from,
.p-image-original-leave-to {
    opacity: 0;
    transform: scale(0.7);
}
`)},Nx={root:function(e){var t=e.props;return["p-image p-component",{"p-image-preview":t.preview}]},previewMask:"p-image-preview-mask",previewIcon:"p-image-preview-icon",mask:"p-image-mask p-overlay-mask p-overlay-mask-enter",toolbar:"p-image-toolbar",rotateRightButton:"p-image-action p-image-rotate-right-button",rotateLeftButton:"p-image-action p-image-rotate-left-button",zoomOutButton:function(e){var t=e.instance;return["p-image-action p-image-zoom-out-button",{"p-disabled":t.isZoomOutDisabled}]},zoomInButton:function(e){var t=e.instance;return["p-image-action p-image-zoom-in-button",{"p-disabled":t.isZoomInDisabled}]},closeButton:"p-image-action p-image-close-button",original:"p-image-original"},Ox=ut.extend({name:"image",theme:Dx,classes:Nx}),Bx={name:"BaseImage",extends:Vr,props:{preview:{type:Boolean,default:!1},class:{type:null,default:null},style:{type:null,default:null},imageStyle:{type:null,default:null},imageClass:{type:null,default:null},previewButtonProps:{type:null,default:null},indicatorIcon:{type:String,default:void 0},previewIcon:{type:String,default:void 0},zoomInDisabled:{type:Boolean,default:!1},zoomOutDisabled:{type:Boolean,default:!1}},style:Ox,provide:function(){return{$pcImage:this,$parentInstance:this}}},vd={name:"Image",extends:Bx,inheritAttrs:!1,emits:["show","hide","error"],mask:null,data:function(){return{maskVisible:!1,previewVisible:!1,rotate:0,scale:1}},beforeUnmount:function(){this.mask&&di.clear(this.container)},methods:{maskRef:function(e){this.mask=e},toolbarRef:function(e){this.toolbarRef=e},onImageClick:function(){var e=this;this.preview&&(og(),this.maskVisible=!0,setTimeout(function(){e.previewVisible=!0},25))},onPreviewImageClick:function(){this.previewClick=!0},onMaskClick:function(e){var t=A_(e.target,"data-pc-section-group","action")||e.target.closest('[data-pc-section-group="action"]');!this.previewClick&&!t&&(this.previewVisible=!1,this.rotate=0,this.scale=1),this.previewClick=!1},onMaskKeydown:function(e){var t=this;switch(e.code){case"Escape":this.hidePreview(),setTimeout(function(){_o(t.$refs.previewButton)},200),e.preventDefault();break}},onError:function(){this.$emit("error")},rotateRight:function(){this.rotate+=90,this.previewClick=!0},rotateLeft:function(){this.rotate-=90,this.previewClick=!0},zoomIn:function(){this.scale=this.scale+.1,this.previewClick=!0},zoomOut:function(){this.scale=this.scale-.1,this.previewClick=!0},onBeforeEnter:function(){di.set("modal",this.mask,this.$primevue.config.zIndex.modal)},onEnter:function(){this.focus(),this.$emit("show")},onBeforeLeave:function(){!this.isUnstyled&&Ko(this.mask,"p-overlay-mask-leave")},onLeave:function(){qc(),this.$emit("hide")},onAfterLeave:function(e){di.clear(e),this.maskVisible=!1},focus:function(){var e=this.mask.querySelector("[autofocus]");e&&e.focus()},hidePreview:function(){this.previewVisible=!1,this.rotate=0,this.scale=1,qc()}},computed:{containerClass:function(){return[this.cx("root"),this.class]},rotateClass:function(){return"p-image-preview-rotate-"+this.rotate},imagePreviewStyle:function(){return{transform:"rotate("+this.rotate+"deg) scale("+this.scale+")"}},isZoomInDisabled:function(){return this.zoomInDisabled||this.scale>=1.5},isZoomOutDisabled:function(){return this.zoomOutDisabled||this.scale<=.5},rightAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.rotateRight:void 0},leftAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.rotateLeft:void 0},zoomInAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.zoomIn:void 0},zoomOutAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.zoomOut:void 0},zoomImageAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.zoomImage:void 0},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},components:{Portal:gd,EyeIcon:pg,RefreshIcon:mg,UndoIcon:bg,SearchMinusIcon:gg,SearchPlusIcon:vg,TimesIcon:md},directives:{focustrap:_g}};function Ks(n){"@babel/helpers - typeof";return Ks=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ks(n)}function ah(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function ga(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?ah(Object(t),!0).forEach(function(r){Ux(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):ah(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function Ux(n,e,t){return(e=Fx(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Fx(n){var e=zx(n,"string");return Ks(e)=="symbol"?e:e+""}function zx(n,e){if(Ks(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(Ks(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var Hx=["aria-label"],Vx=["aria-modal"],Gx=["aria-label"],$x=["aria-label"],Wx=["disabled","aria-label"],jx=["disabled","aria-label"],Xx=["aria-label"],Kx=["src"];function Yx(n,e,t,r,i,o){var s=jn("RefreshIcon"),a=jn("UndoIcon"),l=jn("SearchMinusIcon"),c=jn("SearchPlusIcon"),u=jn("TimesIcon"),d=jn("Portal"),f=sd("focustrap");return ge(),Pe("span",he({class:o.containerClass,style:n.style},n.ptmi("root")),[nt(n.$slots,"image",{errorCallback:o.onError},function(){return[J("img",he({style:n.imageStyle,class:n.imageClass,onError:e[0]||(e[0]=function(){return o.onError&&o.onError.apply(o,arguments)})},ga(ga({},n.$attrs),n.ptm("image"))),null,16)]}),n.preview?(ge(),Pe("button",he({key:0,ref:"previewButton","aria-label":o.zoomImageAriaLabel,type:"button",class:n.cx("previewMask"),onClick:e[1]||(e[1]=function(){return o.onImageClick&&o.onImageClick.apply(o,arguments)})},ga(ga({},n.previewButtonProps),n.ptm("previewMask"))),[nt(n.$slots,n.$slots.previewicon?"previewicon":"indicatoricon",{},function(){return[(ge(),Wt(gi(n.previewIcon||n.indicatorIcon?"i":"EyeIcon"),he({class:n.cx("previewIcon")},n.ptm("previewIcon")),null,16,["class"]))]})],16,Hx)):At("",!0),Te(d,null,{default:ze(function(){return[i.maskVisible?rd((ge(),Pe("div",he({key:0,ref:o.maskRef,role:"dialog",class:n.cx("mask"),"aria-modal":i.maskVisible,onClick:e[8]||(e[8]=function(){return o.onMaskClick&&o.onMaskClick.apply(o,arguments)}),onKeydown:e[9]||(e[9]=function(){return o.onMaskKeydown&&o.onMaskKeydown.apply(o,arguments)})},n.ptm("mask")),[J("div",he({class:n.cx("toolbar")},n.ptm("toolbar")),[J("button",he({class:n.cx("rotateRightButton"),onClick:e[2]||(e[2]=function(){return o.rotateRight&&o.rotateRight.apply(o,arguments)}),type:"button","aria-label":o.rightAriaLabel},n.ptm("rotateRightButton"),{"data-pc-group-section":"action"}),[nt(n.$slots,"refresh",{},function(){return[Te(s,Ki(po(n.ptm("rotateRightIcon"))),null,16)]})],16,Gx),J("button",he({class:n.cx("rotateLeftButton"),onClick:e[3]||(e[3]=function(){return o.rotateLeft&&o.rotateLeft.apply(o,arguments)}),type:"button","aria-label":o.leftAriaLabel},n.ptm("rotateLeftButton"),{"data-pc-group-section":"action"}),[nt(n.$slots,"undo",{},function(){return[Te(a,Ki(po(n.ptm("rotateLeftIcon"))),null,16)]})],16,$x),J("button",he({class:n.cx("zoomOutButton"),onClick:e[4]||(e[4]=function(){return o.zoomOut&&o.zoomOut.apply(o,arguments)}),type:"button",disabled:o.isZoomOutDisabled,"aria-label":o.zoomOutAriaLabel},n.ptm("zoomOutButton"),{"data-pc-group-section":"action"}),[nt(n.$slots,"zoomout",{},function(){return[Te(l,Ki(po(n.ptm("zoomOutIcon"))),null,16)]})],16,Wx),J("button",he({class:n.cx("zoomInButton"),onClick:e[5]||(e[5]=function(){return o.zoomIn&&o.zoomIn.apply(o,arguments)}),type:"button",disabled:o.isZoomInDisabled,"aria-label":o.zoomInAriaLabel},n.ptm("zoomInButton"),{"data-pc-group-section":"action"}),[nt(n.$slots,"zoomin",{},function(){return[Te(c,Ki(po(n.ptm("zoomInIcon"))),null,16)]})],16,jx),J("button",he({class:n.cx("closeButton"),type:"button",onClick:e[6]||(e[6]=function(){return o.hidePreview&&o.hidePreview.apply(o,arguments)}),"aria-label":o.closeAriaLabel,autofocus:""},n.ptm("closeButton"),{"data-pc-group-section":"action"}),[nt(n.$slots,"close",{},function(){return[Te(u,Ki(po(n.ptm("closeIcon"))),null,16)]})],16,Xx)],16),Te(qm,he({name:"p-image-original",onBeforeEnter:o.onBeforeEnter,onEnter:o.onEnter,onLeave:o.onLeave,onBeforeLeave:o.onBeforeLeave,onAfterLeave:o.onAfterLeave},n.ptm("transition")),{default:ze(function(){return[i.previewVisible?(ge(),Pe("div",Ki(he({key:0},n.ptm("originalContainer"))),[nt(n.$slots,n.$slots.original?"original":"preview",{class:mi(n.cx("original")),style:lr(o.imagePreviewStyle),previewCallback:o.onPreviewImageClick},function(){return[J("img",he({src:n.$attrs.src,class:n.cx("original"),style:o.imagePreviewStyle,onClick:e[7]||(e[7]=function(){return o.onPreviewImageClick&&o.onPreviewImageClick.apply(o,arguments)})},n.ptm("original")),null,16,Kx)]})],16)):At("",!0)]}),_:3},16,["onBeforeEnter","onEnter","onLeave","onBeforeLeave","onAfterLeave"])],16,Vx)),[[f]]):At("",!0)]}),_:3})],16)}vd.render=Yx;const qx={class:"item"},Zx=["href"],Jx={props:["src"]},Qx=Object.assign(Jx,{__name:"LinksItem",setup(n){return(e,t)=>(ge(),Pe("div",qx,[Te(dt(vd),null,{image:ze(()=>[J("a",{href:n.src,rel:"noopener",target:"_blank"},[nt(e.$slots,"icon",{class:"icon"},void 0,!0)],8,Zx)]),_:3})]))}}),os=Bn(Qx,[["__scopeId","data-v-c411d425"]]),eS={},tS={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"32px",height:"32px"};function nS(n,e){return ge(),Pe("svg",tS,e[0]||(e[0]=[J("path",{d:"M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"},null,-1)]))}const rS=Bn(eS,[["render",nS]]),iS={},oS={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",width:"32px",height:"32px"};function sS(n,e){return ge(),Pe("svg",oS,e[0]||(e[0]=[J("path",{d:"M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z"},null,-1)]))}const aS=Bn(iS,[["render",sS]]),lS={},cS={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"32px",height:"32px"};function uS(n,e){return ge(),Pe("svg",cS,e[0]||(e[0]=[J("path",{d:"M 10.447266 0.265625 A 0.50005 0.50005 0 0 0 10.103516 0.41796875 L 5.65625 4.8671875 L 3.0957031 7.4257812 A 0.50005 0.50005 0 0 0 2.9785156 7.6035156 C 1.769869 8.9739016 1.7865696 11.063913 3.0957031 12.373047 L 5.65625 14.933594 C 7.0176322 16.294976 9.242133 16.294976 10.603516 14.933594 L 12.853516 12.683594 A 0.50063809 0.50063809 0 1 0 12.144531 11.976562 L 9.8945312 14.226562 C 8.9159134 15.20518 7.3418991 15.20518 6.3632812 14.226562 L 3.8027344 11.666016 C 2.8241166 10.687398 2.8241166 9.1114303 3.8027344 8.1328125 L 6.3632812 5.5742188 C 7.3418991 4.5956009 8.9159135 4.5956009 9.8945312 5.5742188 L 12.144531 7.8242188 A 0.50063784 0.50063784 0 1 0 12.853516 7.1171875 L 10.603516 4.8671875 C 9.9106907 4.174363 8.9943718 3.8431189 8.0820312 3.8554688 L 10.8125 1.125 A 0.50005 0.50005 0 0 0 10.447266 0.265625 z M 7.328125 9.4003906 A 0.50005 0.50005 0 1 0 7.328125 10.400391 L 14.228516 10.400391 A 0.50005 0.50005 0 1 0 14.228516 9.4003906 L 7.328125 9.4003906 z"},null,-1)]))}const dS=Bn(lS,[["render",uS]]),fS={},hS={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"32px",height:"32px"};function pS(n,e){return ge(),Pe("svg",hS,e[0]||(e[0]=[J("path",{d:"M 5.3632812 2 L 2 6.6367188 L 2 20 L 7 20 L 7 23 L 10 23 L 13 20 L 17 20 L 22 15 L 22 2 L 5.3632812 2 z M 6 4 L 20 4 L 20 13 L 17 16 L 12 16 L 9 19 L 9 16 L 6 16 L 6 4 z M 11 7 L 11 12 L 13 12 L 13 7 L 11 7 z M 16 7 L 16 12 L 18 12 L 18 7 L 16 7 z"},null,-1)]))}const mS=Bn(fS,[["render",pS]]),gS={},vS={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",width:"32px",height:"32px"};function bS(n,e){return ge(),Pe("svg",vS,e[0]||(e[0]=[J("path",{d:"M 24.402344 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.402344 16.898438 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.902344 40.5 17.898438 41 24.5 41 C 31.101563 41 37.097656 40.5 40.597656 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.097656 35.5 C 45.5 33 46 29.402344 46.097656 24.902344 C 46.097656 20.402344 45.597656 16.800781 45.097656 14.300781 C 44.699219 12.101563 42.800781 10.5 40.597656 10 C 37.097656 9.5 31 9 24.402344 9 Z M 24.402344 11 C 31.601563 11 37.398438 11.597656 40.199219 12.097656 C 41.699219 12.5 42.898438 13.5 43.097656 14.800781 C 43.699219 18 44.097656 21.402344 44.097656 24.902344 C 44 29.199219 43.5 32.699219 43.097656 35.199219 C 42.800781 37.097656 40.800781 37.699219 40.199219 37.902344 C 36.597656 38.601563 30.597656 39.097656 24.597656 39.097656 C 18.597656 39.097656 12.5 38.699219 9 37.902344 C 7.5 37.5 6.300781 36.5 6.101563 35.199219 C 5.300781 32.398438 5 28.699219 5 25 C 5 20.398438 5.402344 17 5.800781 14.902344 C 6.101563 13 8.199219 12.398438 8.699219 12.199219 C 12 11.5 18.101563 11 24.402344 11 Z M 19 17 L 19 33 L 33 25 Z M 21 20.402344 L 29 25 L 21 29.597656 Z"},null,-1)]))}const _S=Bn(gS,[["render",bS]]),yS={class:"screen"},xS={class:"container"},SS=ym({__name:"Links",setup(n){return(e,t)=>(ge(),Pe("div",yS,[J("div",xS,[Te(os,{ref:"github",id:"github",name:"Github",src:"https://github.com/AnotherDayOfTrying"},{icon:ze(()=>[Te(rS)]),_:1},512),Te(os,{name:"Leetcode",src:"https://leetcode.com/u/IJFH/"},{icon:ze(()=>[Te(dS)]),_:1}),Te(os,{name:"Linkedin",src:"https://www.linkedin.com/in/j-justin/"},{icon:ze(()=>[Te(aS)]),_:1}),Te(os,{name:"Twitch",src:"https://www.twitch.tv/01adot"},{icon:ze(()=>[Te(mS)]),_:1}),Te(os,{name:"Youtube",src:"./"},{icon:ze(()=>[Te(_S)]),_:1})])]))}}),wS=Bn(SS,[["__scopeId","data-v-65c2c0d6"]]),MS={data(){return{rating:"loading"}},created(){fetch("https://alfa-leetcode-api.onrender.com/ijfh/contest").then(n=>n.json()).then(n=>this.rating=parseInt(n.contestRating))}},TS={class:"overview"},ES={class:"marquee"},CS={class:"track"},AS={class:"highlight"},RS={class:"highlight"};function PS(n,e,t,r,i,o){return ge(),Pe(kt,null,[e[3]||(e[3]=J("h1",{id:"my-name"},"Justin Javier",-1)),J("div",TS,[J("div",ES,[J("div",CS,[J("div",null,[e[0]||(e[0]=Qe("Current Leetcode Rating: ")),J("span",AS,Kt(i.rating),1),e[1]||(e[1]=Qe(" · DevOps Intern · Frontend Developer · Research Assistant · Current Leetcode Rating: ")),J("span",RS,Kt(i.rating),1),e[2]||(e[2]=Qe(" · DevOps Intern · Frontend Developer · Research Assistant ·"))])])])])],64)}const LS=Bn(MS,[["render",PS],["__scopeId","data-v-a10ab3cc"]]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bd="172",Lo={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},So={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},IS=0,lh=1,kS=2,yg=1,DS=2,Cr=3,Ur=0,yn=1,sr=2,hi=0,Io=1,ch=2,uh=3,dh=4,NS=5,Bi=100,OS=101,BS=102,US=103,FS=104,zS=200,HS=201,VS=202,GS=203,Jc=204,Qc=205,$S=206,WS=207,jS=208,XS=209,KS=210,YS=211,qS=212,ZS=213,JS=214,eu=0,tu=1,nu=2,Bo=3,ru=4,iu=5,ou=6,su=7,xg=0,QS=1,ew=2,pi=0,tw=1,nw=2,rw=3,iw=4,ow=5,sw=6,aw=7,fh="attached",lw="detached",Sg=300,Uo=301,Fo=302,au=303,lu=304,Ll=306,zo=1e3,ai=1001,dl=1002,hn=1003,wg=1004,vs=1005,En=1006,qa=1007,Dr=1008,Fr=1009,Mg=1010,Tg=1011,Ys=1012,_d=1013,Vi=1014,Zn=1015,ra=1016,yd=1017,xd=1018,Ho=1020,Eg=35902,Cg=1021,Ag=1022,Dn=1023,Rg=1024,Pg=1025,ko=1026,Vo=1027,Sd=1028,wd=1029,Lg=1030,Md=1031,Td=1033,Za=33776,Ja=33777,Qa=33778,el=33779,cu=35840,uu=35841,du=35842,fu=35843,hu=36196,pu=37492,mu=37496,gu=37808,vu=37809,bu=37810,_u=37811,yu=37812,xu=37813,Su=37814,wu=37815,Mu=37816,Tu=37817,Eu=37818,Cu=37819,Au=37820,Ru=37821,tl=36492,Pu=36494,Lu=36495,Ig=36283,Iu=36284,ku=36285,Du=36286,qs=2300,Zs=2301,Jl=2302,hh=2400,ph=2401,mh=2402,cw=2500,uw=0,kg=1,Nu=2,dw=3200,fw=3201,Dg=0,hw=1,oi="",Yt="srgb",mn="srgb-linear",fl="linear",St="srgb",qi=7680,gh=519,pw=512,mw=513,gw=514,Ng=515,vw=516,bw=517,_w=518,yw=519,Ou=35044,vh="300 es",Nr=2e3,hl=2001;class ji{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const o=i.indexOf(t);o!==-1&&i.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const i=r.slice(0);for(let o=0,s=i.length;o<s;o++)i[o].call(this,e);e.target=null}}}const Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let bh=1234567;const As=Math.PI/180,Go=180/Math.PI;function Qn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[r&255]+Qt[r>>8&255]+Qt[r>>16&255]+Qt[r>>24&255]).toLowerCase()}function et(n,e,t){return Math.max(e,Math.min(t,n))}function Ed(n,e){return(n%e+e)%e}function xw(n,e,t,r,i){return r+(n-e)*(i-r)/(t-e)}function Sw(n,e,t){return n!==e?(t-n)/(e-n):0}function Rs(n,e,t){return(1-t)*n+t*e}function ww(n,e,t,r){return Rs(n,e,1-Math.exp(-t*r))}function Mw(n,e=1){return e-Math.abs(Ed(n,e*2)-e)}function Tw(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Ew(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Cw(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Aw(n,e){return n+Math.random()*(e-n)}function Rw(n){return n*(.5-Math.random())}function Pw(n){n!==void 0&&(bh=n);let e=bh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Lw(n){return n*As}function Iw(n){return n*Go}function kw(n){return(n&n-1)===0&&n!==0}function Dw(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Nw(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ow(n,e,t,r,i){const o=Math.cos,s=Math.sin,a=o(t/2),l=s(t/2),c=o((e+r)/2),u=s((e+r)/2),d=o((e-r)/2),f=s((e-r)/2),h=o((r-e)/2),g=s((r-e)/2);switch(i){case"XYX":n.set(a*u,l*d,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*h,a*c);break;case"YXY":n.set(l*h,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*h,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Yn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function _t(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Og={DEG2RAD:As,RAD2DEG:Go,generateUUID:Qn,clamp:et,euclideanModulo:Ed,mapLinear:xw,inverseLerp:Sw,lerp:Rs,damp:ww,pingpong:Mw,smoothstep:Tw,smootherstep:Ew,randInt:Cw,randFloat:Aw,randFloatSpread:Rw,seededRandom:Pw,degToRad:Lw,radToDeg:Iw,isPowerOfTwo:kw,ceilPowerOfTwo:Dw,floorPowerOfTwo:Nw,setQuaternionFromProperEuler:Ow,normalize:_t,denormalize:Yn};class $e{constructor(e=0,t=0){$e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,i=e.elements;return this.x=i[0]*t+i[3]*r+i[6],this.y=i[1]*t+i[4]*r+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(et(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(et(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),i=Math.sin(t),o=this.x-e.x,s=this.y-e.y;return this.x=o*r-s*i+e.x,this.y=o*i+s*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,t,r,i,o,s,a,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,i,o,s,a,l,c)}set(e,t,r,i,o,s,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=o,u[5]=l,u[6]=r,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,i=t.elements,o=this.elements,s=r[0],a=r[3],l=r[6],c=r[1],u=r[4],d=r[7],f=r[2],h=r[5],g=r[8],v=i[0],m=i[3],p=i[6],E=i[1],x=i[4],y=i[7],R=i[2],P=i[5],A=i[8];return o[0]=s*v+a*E+l*R,o[3]=s*m+a*x+l*P,o[6]=s*p+a*y+l*A,o[1]=c*v+u*E+d*R,o[4]=c*m+u*x+d*P,o[7]=c*p+u*y+d*A,o[2]=f*v+h*E+g*R,o[5]=f*m+h*x+g*P,o[8]=f*p+h*y+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],i=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*a*c-r*o*u+r*a*l+i*o*c-i*s*l}invert(){const e=this.elements,t=e[0],r=e[1],i=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*s-a*c,f=a*l-u*o,h=c*o-s*l,g=t*d+r*f+i*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(i*c-u*r)*v,e[2]=(a*r-i*s)*v,e[3]=f*v,e[4]=(u*t-i*l)*v,e[5]=(i*o-a*t)*v,e[6]=h*v,e[7]=(r*l-c*t)*v,e[8]=(s*t-r*o)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,i,o,s,a){const l=Math.cos(o),c=Math.sin(o);return this.set(r*l,r*c,-r*(l*s+c*a)+s+e,-i*c,i*l,-i*(-c*s+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ql.makeScale(e,t)),this}rotate(e){return this.premultiply(Ql.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ql.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let i=0;i<9;i++)if(t[i]!==r[i])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ql=new Ye;function Bg(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Js(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Bw(){const n=Js("canvas");return n.style.display="block",n}const _h={};function vo(n){n in _h||(_h[n]=!0,console.warn(n))}function Uw(n,e,t){return new Promise(function(r,i){function o(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:i();break;case n.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:r()}}setTimeout(o,t)})}function Fw(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function zw(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const yh=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xh=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hw(){const n={enabled:!0,workingColorSpace:mn,spaces:{},convert:function(i,o,s){return this.enabled===!1||o===s||!o||!s||(this.spaces[o].transfer===St&&(i.r=Or(i.r),i.g=Or(i.g),i.b=Or(i.b)),this.spaces[o].primaries!==this.spaces[s].primaries&&(i.applyMatrix3(this.spaces[o].toXYZ),i.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===St&&(i.r=Do(i.r),i.g=Do(i.g),i.b=Do(i.b))),i},fromWorkingColorSpace:function(i,o){return this.convert(i,this.workingColorSpace,o)},toWorkingColorSpace:function(i,o){return this.convert(i,o,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===oi?fl:this.spaces[i].transfer},getLuminanceCoefficients:function(i,o=this.workingColorSpace){return i.fromArray(this.spaces[o].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,o,s){return i.copy(this.spaces[o].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return n.define({[mn]:{primaries:e,whitePoint:r,transfer:fl,toXYZ:yh,fromXYZ:xh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Yt},outputColorSpaceConfig:{drawingBufferColorSpace:Yt}},[Yt]:{primaries:e,whitePoint:r,transfer:St,toXYZ:yh,fromXYZ:xh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Yt}}}),n}const st=Hw();function Or(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Do(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Zi;class Vw{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Zi===void 0&&(Zi=Js("canvas")),Zi.width=e.width,Zi.height=e.height;const r=Zi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Zi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Js("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const i=r.getImageData(0,0,e.width,e.height),o=i.data;for(let s=0;s<o.length;s++)o[s]=Or(o[s]/255)*255;return r.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Or(t[r]/255)*255):t[r]=Or(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Gw=0;class Ug{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gw++}),this.uuid=Qn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},i=this.data;if(i!==null){let o;if(Array.isArray(i)){o=[];for(let s=0,a=i.length;s<a;s++)i[s].isDataTexture?o.push(ec(i[s].image)):o.push(ec(i[s]))}else o=ec(i);r.url=o}return t||(e.images[this.uuid]=r),r}}function ec(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Vw.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $w=0;class jt extends ji{constructor(e=jt.DEFAULT_IMAGE,t=jt.DEFAULT_MAPPING,r=ai,i=ai,o=En,s=Dr,a=Dn,l=Fr,c=jt.DEFAULT_ANISOTROPY,u=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$w++}),this.uuid=Qn(),this.name="",this.source=new Ug(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zo:e.x=e.x-Math.floor(e.x);break;case ai:e.x=e.x<0?0:1;break;case dl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zo:e.y=e.y-Math.floor(e.y);break;case ai:e.y=e.y<0?0:1;break;case dl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=Sg;jt.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,r=0,i=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,i){return this.x=e,this.y=t,this.z=r,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,i=this.z,o=this.w,s=e.elements;return this.x=s[0]*t+s[4]*r+s[8]*i+s[12]*o,this.y=s[1]*t+s[5]*r+s[9]*i+s[13]*o,this.z=s[2]*t+s[6]*r+s[10]*i+s[14]*o,this.w=s[3]*t+s[7]*r+s[11]*i+s[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,i,o;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,y=(h+1)/2,R=(p+1)/2,P=(u+f)/4,A=(d+v)/4,k=(g+m)/4;return x>y&&x>R?x<.01?(r=0,i=.707106781,o=.707106781):(r=Math.sqrt(x),i=P/r,o=A/r):y>R?y<.01?(r=.707106781,i=0,o=.707106781):(i=Math.sqrt(y),r=P/i,o=k/i):R<.01?(r=.707106781,i=.707106781,o=0):(o=Math.sqrt(R),r=A/o,i=k/o),this.set(r,i,o,t),this}let E=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(d-v)/E,this.z=(f-u)/E,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(et(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ww extends ji{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const i={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const o=new jt(i,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);o.flipY=!1,o.generateMipmaps=r.generateMipmaps,o.internalFormat=r.internalFormat,this.textures=[];const s=r.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let i=0,o=this.textures.length;i<o;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,i=e.textures.length;r<i;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new Ug(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gi extends Ww{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Fg extends jt{constructor(e=null,t=1,r=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class jw extends jt{constructor(e=null,t=1,r=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dr{constructor(e=0,t=0,r=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=i}static slerpFlat(e,t,r,i,o,s,a){let l=r[i+0],c=r[i+1],u=r[i+2],d=r[i+3];const f=o[s+0],h=o[s+1],g=o[s+2],v=o[s+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=h,e[t+2]=g,e[t+3]=v;return}if(d!==v||l!==f||c!==h||u!==g){let m=1-a;const p=l*f+c*h+u*g+d*v,E=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const R=Math.sqrt(x),P=Math.atan2(R,p*E);m=Math.sin(m*P)/R,a=Math.sin(a*P)/R}const y=a*E;if(l=l*m+f*y,c=c*m+h*y,u=u*m+g*y,d=d*m+v*y,m===1-a){const R=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=R,c*=R,u*=R,d*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,r,i,o,s){const a=r[i],l=r[i+1],c=r[i+2],u=r[i+3],d=o[s],f=o[s+1],h=o[s+2],g=o[s+3];return e[t]=a*g+u*d+l*h-c*f,e[t+1]=l*g+u*f+c*d-a*h,e[t+2]=c*g+u*h+a*f-l*d,e[t+3]=u*g-a*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,i){return this._x=e,this._y=t,this._z=r,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,i=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(r/2),u=a(i/2),d=a(o/2),f=l(r/2),h=l(i/2),g=l(o/2);switch(s){case"XYZ":this._x=f*u*d+c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d-f*h*g;break;case"YXZ":this._x=f*u*d+c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d+f*h*g;break;case"ZXY":this._x=f*u*d-c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d-f*h*g;break;case"ZYX":this._x=f*u*d-c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d+f*h*g;break;case"YZX":this._x=f*u*d+c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d-f*h*g;break;case"XZY":this._x=f*u*d-c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d+f*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,i=Math.sin(r);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],i=t[4],o=t[8],s=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=r+a+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(o-c)*h,this._z=(s-i)*h}else if(r>a&&r>d){const h=2*Math.sqrt(1+r-a-d);this._w=(u-l)/h,this._x=.25*h,this._y=(i+s)/h,this._z=(o+c)/h}else if(a>d){const h=2*Math.sqrt(1+a-r-d);this._w=(o-c)/h,this._x=(i+s)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-r-a);this._w=(s-i)/h,this._x=(o+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const i=Math.min(1,t/r);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,i=e._y,o=e._z,s=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=r*u+s*a+i*c-o*l,this._y=i*u+s*l+o*a-r*c,this._z=o*u+s*c+r*l-i*a,this._w=s*u-r*a-i*l-o*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,i=this._y,o=this._z,s=this._w;let a=s*e._w+r*e._x+i*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=r,this._y=i,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-t;return this._w=h*s+t*this._w,this._x=h*r+t*this._x,this._y=h*i+t*this._y,this._z=h*o+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=s*d+this._w*f,this._x=r*d+this._x*f,this._y=i*d+this._y*f,this._z=o*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),i=Math.sqrt(1-r),o=Math.sqrt(r);return this.set(i*Math.sin(e),i*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,r=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,i=this.z,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6]*i,this.y=o[1]*t+o[4]*r+o[7]*i,this.z=o[2]*t+o[5]*r+o[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,i=this.z,o=e.elements,s=1/(o[3]*t+o[7]*r+o[11]*i+o[15]);return this.x=(o[0]*t+o[4]*r+o[8]*i+o[12])*s,this.y=(o[1]*t+o[5]*r+o[9]*i+o[13])*s,this.z=(o[2]*t+o[6]*r+o[10]*i+o[14])*s,this}applyQuaternion(e){const t=this.x,r=this.y,i=this.z,o=e.x,s=e.y,a=e.z,l=e.w,c=2*(s*i-a*r),u=2*(a*t-o*i),d=2*(o*r-s*t);return this.x=t+l*c+s*d-a*u,this.y=r+l*u+a*c-o*d,this.z=i+l*d+o*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,i=this.z,o=e.elements;return this.x=o[0]*t+o[4]*r+o[8]*i,this.y=o[1]*t+o[5]*r+o[9]*i,this.z=o[2]*t+o[6]*r+o[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(et(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,i=e.y,o=e.z,s=t.x,a=t.y,l=t.z;return this.x=i*l-o*a,this.y=o*s-r*l,this.z=r*a-i*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return tc.copy(this).projectOnVector(e),this.sub(tc)}reflect(e){return this.sub(tc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(et(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,i=this.z-e.z;return t*t+r*r+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const i=Math.sin(t)*e;return this.x=i*Math.sin(r),this.y=Math.cos(t)*e,this.z=i*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const tc=new N,Sh=new dr;class Gr{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const o=r.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,Vn):Vn.fromBufferAttribute(o,s),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),va.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),va.copy(r.boundingBox)),va.applyMatrix4(e.matrixWorld),this.union(va)}const i=e.children;for(let o=0,s=i.length;o<s;o++)this.expandByObject(i[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ss),ba.subVectors(this.max,ss),Ji.subVectors(e.a,ss),Qi.subVectors(e.b,ss),eo.subVectors(e.c,ss),Wr.subVectors(Qi,Ji),jr.subVectors(eo,Qi),Ci.subVectors(Ji,eo);let t=[0,-Wr.z,Wr.y,0,-jr.z,jr.y,0,-Ci.z,Ci.y,Wr.z,0,-Wr.x,jr.z,0,-jr.x,Ci.z,0,-Ci.x,-Wr.y,Wr.x,0,-jr.y,jr.x,0,-Ci.y,Ci.x,0];return!nc(t,Ji,Qi,eo,ba)||(t=[1,0,0,0,1,0,0,0,1],!nc(t,Ji,Qi,eo,ba))?!1:(_a.crossVectors(Wr,jr),t=[_a.x,_a.y,_a.z],nc(t,Ji,Qi,eo,ba))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xr=[new N,new N,new N,new N,new N,new N,new N,new N],Vn=new N,va=new Gr,Ji=new N,Qi=new N,eo=new N,Wr=new N,jr=new N,Ci=new N,ss=new N,ba=new N,_a=new N,Ai=new N;function nc(n,e,t,r,i){for(let o=0,s=n.length-3;o<=s;o+=3){Ai.fromArray(n,o);const a=i.x*Math.abs(Ai.x)+i.y*Math.abs(Ai.y)+i.z*Math.abs(Ai.z),l=e.dot(Ai),c=t.dot(Ai),u=r.dot(Ai);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Xw=new Gr,as=new N,rc=new N;class hr{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Xw.setFromPoints(e).getCenter(r);let i=0;for(let o=0,s=e.length;o<s;o++)i=Math.max(i,r.distanceToSquared(e[o]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;as.subVectors(e,this.center);const t=as.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),i=(r-this.radius)*.5;this.center.addScaledVector(as,i/r),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(as.copy(e.center).add(rc)),this.expandByPoint(as.copy(e.center).sub(rc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Sr=new N,ic=new N,ya=new N,Xr=new N,oc=new N,xa=new N,sc=new N;class ia{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Sr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Sr.copy(this.origin).addScaledVector(this.direction,t),Sr.distanceToSquared(e))}distanceSqToSegment(e,t,r,i){ic.copy(e).add(t).multiplyScalar(.5),ya.copy(t).sub(e).normalize(),Xr.copy(this.origin).sub(ic);const o=e.distanceTo(t)*.5,s=-this.direction.dot(ya),a=Xr.dot(this.direction),l=-Xr.dot(ya),c=Xr.lengthSq(),u=Math.abs(1-s*s);let d,f,h,g;if(u>0)if(d=s*l-a,f=s*a-l,g=o*u,d>=0)if(f>=-g)if(f<=g){const v=1/u;d*=v,f*=v,h=d*(d+s*f+2*a)+f*(s*d+f+2*l)+c}else f=o,d=Math.max(0,-(s*f+a)),h=-d*d+f*(f+2*l)+c;else f=-o,d=Math.max(0,-(s*f+a)),h=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-s*o+a)),f=d>0?-o:Math.min(Math.max(-o,-l),o),h=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-o,-l),o),h=f*(f+2*l)+c):(d=Math.max(0,-(s*o+a)),f=d>0?o:Math.min(Math.max(-o,-l),o),h=-d*d+f*(f+2*l)+c);else f=s>0?-o:o,d=Math.max(0,-(s*f+a)),h=-d*d+f*(f+2*l)+c;return r&&r.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(ic).addScaledVector(ya,f),h}intersectSphere(e,t){Sr.subVectors(e.center,this.origin);const r=Sr.dot(this.direction),i=Sr.dot(Sr)-r*r,o=e.radius*e.radius;if(i>o)return null;const s=Math.sqrt(o-i),a=r-s,l=r+s;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,i,o,s,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(r=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(r=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(o=(e.min.y-f.y)*u,s=(e.max.y-f.y)*u):(o=(e.max.y-f.y)*u,s=(e.min.y-f.y)*u),r>s||o>i||((o>r||isNaN(r))&&(r=o),(s<i||isNaN(i))&&(i=s),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),r>l||a>i)||((a>r||r!==r)&&(r=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(r>=0?r:i,t)}intersectsBox(e){return this.intersectBox(e,Sr)!==null}intersectTriangle(e,t,r,i,o){oc.subVectors(t,e),xa.subVectors(r,e),sc.crossVectors(oc,xa);let s=this.direction.dot(sc),a;if(s>0){if(i)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Xr.subVectors(this.origin,e);const l=a*this.direction.dot(xa.crossVectors(Xr,xa));if(l<0)return null;const c=a*this.direction.dot(oc.cross(Xr));if(c<0||l+c>s)return null;const u=-a*Xr.dot(sc);return u<0?null:this.at(u/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qe{constructor(e,t,r,i,o,s,a,l,c,u,d,f,h,g,v,m){qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,i,o,s,a,l,c,u,d,f,h,g,v,m)}set(e,t,r,i,o,s,a,l,c,u,d,f,h,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=r,p[12]=i,p[1]=o,p[5]=s,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qe().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,i=1/to.setFromMatrixColumn(e,0).length(),o=1/to.setFromMatrixColumn(e,1).length(),s=1/to.setFromMatrixColumn(e,2).length();return t[0]=r[0]*i,t[1]=r[1]*i,t[2]=r[2]*i,t[3]=0,t[4]=r[4]*o,t[5]=r[5]*o,t[6]=r[6]*o,t[7]=0,t[8]=r[8]*s,t[9]=r[9]*s,t[10]=r[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,i=e.y,o=e.z,s=Math.cos(r),a=Math.sin(r),l=Math.cos(i),c=Math.sin(i),u=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){const f=s*u,h=s*d,g=a*u,v=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=h+g*c,t[5]=f-v*c,t[9]=-a*l,t[2]=v-f*c,t[6]=g+h*c,t[10]=s*l}else if(e.order==="YXZ"){const f=l*u,h=l*d,g=c*u,v=c*d;t[0]=f+v*a,t[4]=g*a-h,t[8]=s*c,t[1]=s*d,t[5]=s*u,t[9]=-a,t[2]=h*a-g,t[6]=v+f*a,t[10]=s*l}else if(e.order==="ZXY"){const f=l*u,h=l*d,g=c*u,v=c*d;t[0]=f-v*a,t[4]=-s*d,t[8]=g+h*a,t[1]=h+g*a,t[5]=s*u,t[9]=v-f*a,t[2]=-s*c,t[6]=a,t[10]=s*l}else if(e.order==="ZYX"){const f=s*u,h=s*d,g=a*u,v=a*d;t[0]=l*u,t[4]=g*c-h,t[8]=f*c+v,t[1]=l*d,t[5]=v*c+f,t[9]=h*c-g,t[2]=-c,t[6]=a*l,t[10]=s*l}else if(e.order==="YZX"){const f=s*l,h=s*c,g=a*l,v=a*c;t[0]=l*u,t[4]=v-f*d,t[8]=g*d+h,t[1]=d,t[5]=s*u,t[9]=-a*u,t[2]=-c*u,t[6]=h*d+g,t[10]=f-v*d}else if(e.order==="XZY"){const f=s*l,h=s*c,g=a*l,v=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+v,t[5]=s*u,t[9]=h*d-g,t[2]=g*d-h,t[6]=a*u,t[10]=v*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Kw,e,Yw)}lookAt(e,t,r){const i=this.elements;return Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Kr.crossVectors(r,Sn),Kr.lengthSq()===0&&(Math.abs(r.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Kr.crossVectors(r,Sn)),Kr.normalize(),Sa.crossVectors(Sn,Kr),i[0]=Kr.x,i[4]=Sa.x,i[8]=Sn.x,i[1]=Kr.y,i[5]=Sa.y,i[9]=Sn.y,i[2]=Kr.z,i[6]=Sa.z,i[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,i=t.elements,o=this.elements,s=r[0],a=r[4],l=r[8],c=r[12],u=r[1],d=r[5],f=r[9],h=r[13],g=r[2],v=r[6],m=r[10],p=r[14],E=r[3],x=r[7],y=r[11],R=r[15],P=i[0],A=i[4],k=i[8],M=i[12],w=i[1],L=i[5],O=i[9],z=i[13],ee=i[2],re=i[6],q=i[10],Q=i[14],H=i[3],de=i[7],pe=i[11],_e=i[15];return o[0]=s*P+a*w+l*ee+c*H,o[4]=s*A+a*L+l*re+c*de,o[8]=s*k+a*O+l*q+c*pe,o[12]=s*M+a*z+l*Q+c*_e,o[1]=u*P+d*w+f*ee+h*H,o[5]=u*A+d*L+f*re+h*de,o[9]=u*k+d*O+f*q+h*pe,o[13]=u*M+d*z+f*Q+h*_e,o[2]=g*P+v*w+m*ee+p*H,o[6]=g*A+v*L+m*re+p*de,o[10]=g*k+v*O+m*q+p*pe,o[14]=g*M+v*z+m*Q+p*_e,o[3]=E*P+x*w+y*ee+R*H,o[7]=E*A+x*L+y*re+R*de,o[11]=E*k+x*O+y*q+R*pe,o[15]=E*M+x*z+y*Q+R*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],i=e[8],o=e[12],s=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+o*l*d-i*c*d-o*a*f+r*c*f+i*a*h-r*l*h)+v*(+t*l*h-t*c*f+o*s*f-i*s*h+i*c*u-o*l*u)+m*(+t*c*d-t*a*h-o*s*d+r*s*h+o*a*u-r*c*u)+p*(-i*a*u-t*l*d+t*a*f+i*s*d-r*s*f+r*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],i=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],g=e[12],v=e[13],m=e[14],p=e[15],E=d*m*c-v*f*c+v*l*h-a*m*h-d*l*p+a*f*p,x=g*f*c-u*m*c-g*l*h+s*m*h+u*l*p-s*f*p,y=u*v*c-g*d*c+g*a*h-s*v*h-u*a*p+s*d*p,R=g*d*l-u*v*l-g*a*f+s*v*f+u*a*m-s*d*m,P=t*E+r*x+i*y+o*R;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/P;return e[0]=E*A,e[1]=(v*f*o-d*m*o-v*i*h+r*m*h+d*i*p-r*f*p)*A,e[2]=(a*m*o-v*l*o+v*i*c-r*m*c-a*i*p+r*l*p)*A,e[3]=(d*l*o-a*f*o-d*i*c+r*f*c+a*i*h-r*l*h)*A,e[4]=x*A,e[5]=(u*m*o-g*f*o+g*i*h-t*m*h-u*i*p+t*f*p)*A,e[6]=(g*l*o-s*m*o-g*i*c+t*m*c+s*i*p-t*l*p)*A,e[7]=(s*f*o-u*l*o+u*i*c-t*f*c-s*i*h+t*l*h)*A,e[8]=y*A,e[9]=(g*d*o-u*v*o-g*r*h+t*v*h+u*r*p-t*d*p)*A,e[10]=(s*v*o-g*a*o+g*r*c-t*v*c-s*r*p+t*a*p)*A,e[11]=(u*a*o-s*d*o-u*r*c+t*d*c+s*r*h-t*a*h)*A,e[12]=R*A,e[13]=(u*v*i-g*d*i+g*r*f-t*v*f-u*r*m+t*d*m)*A,e[14]=(g*a*i-s*v*i-g*r*l+t*v*l+s*r*m-t*a*m)*A,e[15]=(s*d*i-u*a*i+u*r*l-t*d*l-s*r*f+t*a*f)*A,this}scale(e){const t=this.elements,r=e.x,i=e.y,o=e.z;return t[0]*=r,t[4]*=i,t[8]*=o,t[1]*=r,t[5]*=i,t[9]*=o,t[2]*=r,t[6]*=i,t[10]*=o,t[3]*=r,t[7]*=i,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,i))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),i=Math.sin(t),o=1-r,s=e.x,a=e.y,l=e.z,c=o*s,u=o*a;return this.set(c*s+r,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+r,u*l-i*s,0,c*l-i*a,u*l+i*s,o*l*l+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,i,o,s){return this.set(1,r,o,0,e,1,s,0,t,i,1,0,0,0,0,1),this}compose(e,t,r){const i=this.elements,o=t._x,s=t._y,a=t._z,l=t._w,c=o+o,u=s+s,d=a+a,f=o*c,h=o*u,g=o*d,v=s*u,m=s*d,p=a*d,E=l*c,x=l*u,y=l*d,R=r.x,P=r.y,A=r.z;return i[0]=(1-(v+p))*R,i[1]=(h+y)*R,i[2]=(g-x)*R,i[3]=0,i[4]=(h-y)*P,i[5]=(1-(f+p))*P,i[6]=(m+E)*P,i[7]=0,i[8]=(g+x)*A,i[9]=(m-E)*A,i[10]=(1-(f+v))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,r){const i=this.elements;let o=to.set(i[0],i[1],i[2]).length();const s=to.set(i[4],i[5],i[6]).length(),a=to.set(i[8],i[9],i[10]).length();this.determinant()<0&&(o=-o),e.x=i[12],e.y=i[13],e.z=i[14],Gn.copy(this);const c=1/o,u=1/s,d=1/a;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=u,Gn.elements[5]*=u,Gn.elements[6]*=u,Gn.elements[8]*=d,Gn.elements[9]*=d,Gn.elements[10]*=d,t.setFromRotationMatrix(Gn),r.x=o,r.y=s,r.z=a,this}makePerspective(e,t,r,i,o,s,a=Nr){const l=this.elements,c=2*o/(t-e),u=2*o/(r-i),d=(t+e)/(t-e),f=(r+i)/(r-i);let h,g;if(a===Nr)h=-(s+o)/(s-o),g=-2*s*o/(s-o);else if(a===hl)h=-s/(s-o),g=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,r,i,o,s,a=Nr){const l=this.elements,c=1/(t-e),u=1/(r-i),d=1/(s-o),f=(t+e)*c,h=(r+i)*u;let g,v;if(a===Nr)g=(s+o)*d,v=-2*d;else if(a===hl)g=o*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let i=0;i<16;i++)if(t[i]!==r[i])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const to=new N,Gn=new qe,Kw=new N(0,0,0),Yw=new N(1,1,1),Kr=new N,Sa=new N,Sn=new N,wh=new qe,Mh=new dr;class fr{constructor(e=0,t=0,r=0,i=fr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,i=this._order){return this._x=e,this._y=t,this._z=r,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const i=e.elements,o=i[0],s=i[4],a=i[8],l=i[1],c=i[5],u=i[9],d=i[2],f=i[6],h=i[10];switch(t){case"XYZ":this._y=Math.asin(et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(et(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-et(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return wh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wh,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mh.setFromEuler(this),this.setFromQuaternion(Mh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fr.DEFAULT_ORDER="XYZ";class zg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qw=0;const Th=new N,no=new dr,wr=new qe,wa=new N,ls=new N,Zw=new N,Jw=new dr,Eh=new N(1,0,0),Ch=new N(0,1,0),Ah=new N(0,0,1),Rh={type:"added"},Qw={type:"removed"},ro={type:"childadded",child:null},ac={type:"childremoved",child:null};class Dt extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qw++}),this.uuid=Qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new N,t=new fr,r=new dr,i=new N(1,1,1);function o(){r.setFromEuler(t,!1)}function s(){t.setFromQuaternion(r,void 0,!1)}t._onChange(o),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new qe},normalMatrix:{value:new Ye}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return no.setFromAxisAngle(e,t),this.quaternion.multiply(no),this}rotateOnWorldAxis(e,t){return no.setFromAxisAngle(e,t),this.quaternion.premultiply(no),this}rotateX(e){return this.rotateOnAxis(Eh,e)}rotateY(e){return this.rotateOnAxis(Ch,e)}rotateZ(e){return this.rotateOnAxis(Ah,e)}translateOnAxis(e,t){return Th.copy(e).applyQuaternion(this.quaternion),this.position.add(Th.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Eh,e)}translateY(e){return this.translateOnAxis(Ch,e)}translateZ(e){return this.translateOnAxis(Ah,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?wa.copy(e):wa.set(e,t,r);const i=this.parent;this.updateWorldMatrix(!0,!1),ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wr.lookAt(ls,wa,this.up):wr.lookAt(wa,ls,this.up),this.quaternion.setFromRotationMatrix(wr),i&&(wr.extractRotation(i.matrixWorld),no.setFromRotationMatrix(wr),this.quaternion.premultiply(no.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Rh),ro.child=e,this.dispatchEvent(ro),ro.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qw),ac.child=e,this.dispatchEvent(ac),ac.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wr.multiply(e.parent.matrixWorld)),e.applyMatrix4(wr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Rh),ro.child=e,this.dispatchEvent(ro),ro.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,i=this.children.length;r<i;r++){const s=this.children[r].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const i=this.children;for(let o=0,s=i.length;o<s;o++)i[o].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,e,Zw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,Jw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,i=t.length;r<i;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,i=t.length;r<i;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,i=t.length;r<i;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let o=0,s=i.length;o<s;o++)i[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];o(e.shapes,d)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(e.materials,this.material[l]));i.material=a}else i.material=o(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(o(e.animations,l))}}if(t){const a=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),d=s(e.shapes),f=s(e.skeletons),h=s(e.animations),g=s(e.nodes);a.length>0&&(r.geometries=a),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),u.length>0&&(r.images=u),d.length>0&&(r.shapes=d),f.length>0&&(r.skeletons=f),h.length>0&&(r.animations=h),g.length>0&&(r.nodes=g)}return r.object=i,r;function s(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const i=e.children[r];this.add(i.clone())}return this}}Dt.DEFAULT_UP=new N(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $n=new N,Mr=new N,lc=new N,Tr=new N,io=new N,oo=new N,Ph=new N,cc=new N,uc=new N,dc=new N,fc=new ht,hc=new ht,pc=new ht;class qn{constructor(e=new N,t=new N,r=new N){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,i){i.subVectors(r,t),$n.subVectors(e,t),i.cross($n);const o=i.lengthSq();return o>0?i.multiplyScalar(1/Math.sqrt(o)):i.set(0,0,0)}static getBarycoord(e,t,r,i,o){$n.subVectors(i,t),Mr.subVectors(r,t),lc.subVectors(e,t);const s=$n.dot($n),a=$n.dot(Mr),l=$n.dot(lc),c=Mr.dot(Mr),u=Mr.dot(lc),d=s*c-a*a;if(d===0)return o.set(0,0,0),null;const f=1/d,h=(c*l-a*u)*f,g=(s*u-a*l)*f;return o.set(1-h-g,g,h)}static containsPoint(e,t,r,i){return this.getBarycoord(e,t,r,i,Tr)===null?!1:Tr.x>=0&&Tr.y>=0&&Tr.x+Tr.y<=1}static getInterpolation(e,t,r,i,o,s,a,l){return this.getBarycoord(e,t,r,i,Tr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Tr.x),l.addScaledVector(s,Tr.y),l.addScaledVector(a,Tr.z),l)}static getInterpolatedAttribute(e,t,r,i,o,s){return fc.setScalar(0),hc.setScalar(0),pc.setScalar(0),fc.fromBufferAttribute(e,t),hc.fromBufferAttribute(e,r),pc.fromBufferAttribute(e,i),s.setScalar(0),s.addScaledVector(fc,o.x),s.addScaledVector(hc,o.y),s.addScaledVector(pc,o.z),s}static isFrontFacing(e,t,r,i){return $n.subVectors(r,t),Mr.subVectors(e,t),$n.cross(Mr).dot(i)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,i){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,r,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),Mr.subVectors(this.a,this.b),$n.cross(Mr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return qn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,i,o){return qn.getInterpolation(e,this.a,this.b,this.c,t,r,i,o)}containsPoint(e){return qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,i=this.b,o=this.c;let s,a;io.subVectors(i,r),oo.subVectors(o,r),cc.subVectors(e,r);const l=io.dot(cc),c=oo.dot(cc);if(l<=0&&c<=0)return t.copy(r);uc.subVectors(e,i);const u=io.dot(uc),d=oo.dot(uc);if(u>=0&&d<=u)return t.copy(i);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(r).addScaledVector(io,s);dc.subVectors(e,o);const h=io.dot(dc),g=oo.dot(dc);if(g>=0&&h<=g)return t.copy(o);const v=h*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(r).addScaledVector(oo,a);const m=u*g-h*d;if(m<=0&&d-u>=0&&h-g>=0)return Ph.subVectors(o,i),a=(d-u)/(d-u+(h-g)),t.copy(i).addScaledVector(Ph,a);const p=1/(m+v+f);return s=v*p,a=f*p,t.copy(r).addScaledVector(io,s).addScaledVector(oo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Hg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yr={h:0,s:0,l:0},Ma={h:0,s:0,l:0};function mc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Xe{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,t),this}setRGB(e,t,r,i=st.workingColorSpace){return this.r=e,this.g=t,this.b=r,st.toWorkingColorSpace(this,i),this}setHSL(e,t,r,i=st.workingColorSpace){if(e=Ed(e,1),t=et(t,0,1),r=et(r,0,1),t===0)this.r=this.g=this.b=r;else{const o=r<=.5?r*(1+t):r+t-r*t,s=2*r-o;this.r=mc(s,o,e+1/3),this.g=mc(s,o,e),this.b=mc(s,o,e-1/3)}return st.toWorkingColorSpace(this,i),this}setStyle(e,t=Yt){function r(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=i[1],a=i[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=i[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){const r=Hg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Or(e.r),this.g=Or(e.g),this.b=Or(e.b),this}copyLinearToSRGB(e){return this.r=Do(e.r),this.g=Do(e.g),this.b=Do(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return st.fromWorkingColorSpace(en.copy(this),e),Math.round(et(en.r*255,0,255))*65536+Math.round(et(en.g*255,0,255))*256+Math.round(et(en.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.fromWorkingColorSpace(en.copy(this),t);const r=en.r,i=en.g,o=en.b,s=Math.max(r,i,o),a=Math.min(r,i,o);let l,c;const u=(a+s)/2;if(a===s)l=0,c=0;else{const d=s-a;switch(c=u<=.5?d/(s+a):d/(2-s-a),s){case r:l=(i-o)/d+(i<o?6:0);break;case i:l=(o-r)/d+2;break;case o:l=(r-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=st.workingColorSpace){return st.fromWorkingColorSpace(en.copy(this),t),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=Yt){st.fromWorkingColorSpace(en.copy(this),e);const t=en.r,r=en.g,i=en.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(i*255)})`}offsetHSL(e,t,r){return this.getHSL(Yr),this.setHSL(Yr.h+e,Yr.s+t,Yr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Yr),e.getHSL(Ma);const r=Rs(Yr.h,Ma.h,t),i=Rs(Yr.s,Ma.s,t),o=Rs(Yr.l,Ma.l,t);return this.setHSL(r,i,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,i=this.b,o=e.elements;return this.r=o[0]*t+o[3]*r+o[6]*i,this.g=o[1]*t+o[4]*r+o[7]*i,this.b=o[2]*t+o[5]*r+o[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new Xe;Xe.NAMES=Hg;let eM=0;class cr extends ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:eM++}),this.uuid=Qn(),this.name="",this.type="Material",this.blending=Io,this.side=Ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jc,this.blendDst=Qc,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=Bo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(r):i&&i.isVector3&&r&&r.isVector3?i.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Io&&(r.blending=this.blending),this.side!==Ur&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Jc&&(r.blendSrc=this.blendSrc),this.blendDst!==Qc&&(r.blendDst=this.blendDst),this.blendEquation!==Bi&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Bo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gh&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(r.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function i(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(t){const o=i(e.textures),s=i(e.images);o.length>0&&(r.textures=o),s.length>0&&(r.images=s)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const i=t.length;r=new Array(i);for(let o=0;o!==i;++o)r[o]=t[o].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class li extends cr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fr,this.combine=xg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ut=new N,Ta=new $e;class pn{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Ou,this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let i=0,o=this.itemSize;i<o;i++)this.array[e+i]=t.array[r+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Ta.fromBufferAttribute(this,t),Ta.applyMatrix3(e),this.setXY(t,Ta.x,Ta.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Yn(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=_t(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yn(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yn(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yn(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),r=_t(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,i){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),r=_t(r,this.array),i=_t(i,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=i,this}setXYZW(e,t,r,i,o){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),r=_t(r,this.array),i=_t(i,this.array),o=_t(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=i,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ou&&(e.usage=this.usage),e}}class Vg extends pn{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Gg extends pn{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Br extends pn{constructor(e,t,r){super(new Float32Array(e),t,r)}}let tM=0;const Ln=new qe,gc=new Dt,so=new N,wn=new Gr,cs=new Gr,Gt=new N;class pr extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tM++}),this.uuid=Qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bg(e)?Gg:Vg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const o=new Ye().getNormalMatrix(e);r.applyNormalMatrix(o),r.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,t,r){return Ln.makeTranslation(e,t,r),this.applyMatrix4(Ln),this}scale(e,t,r){return Ln.makeScale(e,t,r),this.applyMatrix4(Ln),this}lookAt(e){return gc.lookAt(e),gc.updateMatrix(),this.applyMatrix4(gc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(so).negate(),this.translate(so.x,so.y,so.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let i=0,o=e.length;i<o;i++){const s=e[i];r.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Br(r,3))}else{const r=Math.min(e.length,t.count);for(let i=0;i<r;i++){const o=e[i];t.setXYZ(i,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,i=t.length;r<i;r++){const o=t[r];wn.setFromBufferAttribute(o),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const r=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),t)for(let o=0,s=t.length;o<s;o++){const a=t[o];cs.setFromBufferAttribute(a),this.morphTargetsRelative?(Gt.addVectors(wn.min,cs.min),wn.expandByPoint(Gt),Gt.addVectors(wn.max,cs.max),wn.expandByPoint(Gt)):(wn.expandByPoint(cs.min),wn.expandByPoint(cs.max))}wn.getCenter(r);let i=0;for(let o=0,s=e.count;o<s;o++)Gt.fromBufferAttribute(e,o),i=Math.max(i,r.distanceToSquared(Gt));if(t)for(let o=0,s=t.length;o<s;o++){const a=t[o],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Gt.fromBufferAttribute(a,c),l&&(so.fromBufferAttribute(e,c),Gt.add(so)),i=Math.max(i,r.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,i=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pn(new Float32Array(4*r.count),4));const s=this.getAttribute("tangent"),a=[],l=[];for(let k=0;k<r.count;k++)a[k]=new N,l[k]=new N;const c=new N,u=new N,d=new N,f=new $e,h=new $e,g=new $e,v=new N,m=new N;function p(k,M,w){c.fromBufferAttribute(r,k),u.fromBufferAttribute(r,M),d.fromBufferAttribute(r,w),f.fromBufferAttribute(o,k),h.fromBufferAttribute(o,M),g.fromBufferAttribute(o,w),u.sub(c),d.sub(c),h.sub(f),g.sub(f);const L=1/(h.x*g.y-g.x*h.y);isFinite(L)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(L),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(L),a[k].add(v),a[M].add(v),a[w].add(v),l[k].add(m),l[M].add(m),l[w].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let k=0,M=E.length;k<M;++k){const w=E[k],L=w.start,O=w.count;for(let z=L,ee=L+O;z<ee;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const x=new N,y=new N,R=new N,P=new N;function A(k){R.fromBufferAttribute(i,k),P.copy(R);const M=a[k];x.copy(M),x.sub(R.multiplyScalar(R.dot(M))).normalize(),y.crossVectors(P,M);const L=y.dot(l[k])<0?-1:1;s.setXYZW(k,x.x,x.y,x.z,L)}for(let k=0,M=E.length;k<M;++k){const w=E[k],L=w.start,O=w.count;for(let z=L,ee=L+O;z<ee;z+=3)A(e.getX(z+0)),A(e.getX(z+1)),A(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new pn(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let f=0,h=r.count;f<h;f++)r.setXYZ(f,0,0,0);const i=new N,o=new N,s=new N,a=new N,l=new N,c=new N,u=new N,d=new N;if(e)for(let f=0,h=e.count;f<h;f+=3){const g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),o.fromBufferAttribute(t,v),s.fromBufferAttribute(t,m),u.subVectors(s,o),d.subVectors(i,o),u.cross(d),a.fromBufferAttribute(r,g),l.fromBufferAttribute(r,v),c.fromBufferAttribute(r,m),a.add(u),l.add(u),c.add(u),r.setXYZ(g,a.x,a.y,a.z),r.setXYZ(v,l.x,l.y,l.z),r.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,h=t.count;f<h;f+=3)i.fromBufferAttribute(t,f+0),o.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),u.subVectors(s,o),d.subVectors(i,o),u.cross(d),r.setXYZ(f+0,u.x,u.y,u.z),r.setXYZ(f+1,u.x,u.y,u.z),r.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let h=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?h=l[v]*a.data.stride+a.offset:h=l[v]*u;for(let p=0;p<u;p++)f[g++]=c[h++]}return new pn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pr,r=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,r);t.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],h=e(f,r);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const c=s[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const l in r){const c=r[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(i[l]=u,o=!0)}o&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const o=e.morphAttributes;for(const c in o){const u=[],d=o[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lh=new qe,Ri=new ia,Ea=new hr,Ih=new N,Ca=new N,Aa=new N,Ra=new N,vc=new N,Pa=new N,kh=new N,La=new N;class bn extends Dt{constructor(e=new pr,t=new li){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const i=t[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=i.length;o<s;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){const r=this.geometry,i=r.attributes.position,o=r.morphAttributes.position,s=r.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(o&&a){Pa.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const u=a[l],d=o[l];u!==0&&(vc.fromBufferAttribute(d,e),s?Pa.addScaledVector(vc,u):Pa.addScaledVector(vc.sub(t),u))}t.add(Pa)}return t}raycast(e,t){const r=this.geometry,i=this.material,o=this.matrixWorld;i!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ea.copy(r.boundingSphere),Ea.applyMatrix4(o),Ri.copy(e.ray).recast(e.near),!(Ea.containsPoint(Ri.origin)===!1&&(Ri.intersectSphere(Ea,Ih)===null||Ri.origin.distanceToSquared(Ih)>(e.far-e.near)**2))&&(Lh.copy(o).invert(),Ri.copy(e.ray).applyMatrix4(Lh),!(r.boundingBox!==null&&Ri.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Ri)))}_computeIntersections(e,t,r){let i;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,u=o.attributes.uv1,d=o.attributes.normal,f=o.groups,h=o.drawRange;if(a!==null)if(Array.isArray(s))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=s[m.materialIndex],E=Math.max(m.start,h.start),x=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let y=E,R=x;y<R;y+=3){const P=a.getX(y),A=a.getX(y+1),k=a.getX(y+2);i=Ia(this,p,e,r,c,u,d,P,A,k),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,h.start),v=Math.min(a.count,h.start+h.count);for(let m=g,p=v;m<p;m+=3){const E=a.getX(m),x=a.getX(m+1),y=a.getX(m+2);i=Ia(this,s,e,r,c,u,d,E,x,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(s))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=s[m.materialIndex],E=Math.max(m.start,h.start),x=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let y=E,R=x;y<R;y+=3){const P=y,A=y+1,k=y+2;i=Ia(this,p,e,r,c,u,d,P,A,k),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,h.start),v=Math.min(l.count,h.start+h.count);for(let m=g,p=v;m<p;m+=3){const E=m,x=m+1,y=m+2;i=Ia(this,s,e,r,c,u,d,E,x,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function nM(n,e,t,r,i,o,s,a){let l;if(e.side===yn?l=r.intersectTriangle(s,o,i,!0,a):l=r.intersectTriangle(i,o,s,e.side===Ur,a),l===null)return null;La.copy(a),La.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(La);return c<t.near||c>t.far?null:{distance:c,point:La.clone(),object:n}}function Ia(n,e,t,r,i,o,s,a,l,c){n.getVertexPosition(a,Ca),n.getVertexPosition(l,Aa),n.getVertexPosition(c,Ra);const u=nM(n,e,t,r,Ca,Aa,Ra,kh);if(u){const d=new N;qn.getBarycoord(kh,Ca,Aa,Ra,d),i&&(u.uv=qn.getInterpolatedAttribute(i,a,l,c,d,new $e)),o&&(u.uv1=qn.getInterpolatedAttribute(o,a,l,c,d,new $e)),s&&(u.normal=qn.getInterpolatedAttribute(s,a,l,c,d,new N),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new N,materialIndex:0};qn.getNormal(Ca,Aa,Ra,f.normal),u.face=f,u.barycoord=d}return u}class Yo extends pr{constructor(e=1,t=1,r=1,i=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:i,heightSegments:o,depthSegments:s};const a=this;i=Math.floor(i),o=Math.floor(o),s=Math.floor(s);const l=[],c=[],u=[],d=[];let f=0,h=0;g("z","y","x",-1,-1,r,t,e,s,o,0),g("z","y","x",1,-1,r,t,-e,s,o,1),g("x","z","y",1,1,e,r,t,i,s,2),g("x","z","y",1,-1,e,r,-t,i,s,3),g("x","y","z",1,-1,e,t,r,i,o,4),g("x","y","z",-1,-1,e,t,-r,i,o,5),this.setIndex(l),this.setAttribute("position",new Br(c,3)),this.setAttribute("normal",new Br(u,3)),this.setAttribute("uv",new Br(d,2));function g(v,m,p,E,x,y,R,P,A,k,M){const w=y/A,L=R/k,O=y/2,z=R/2,ee=P/2,re=A+1,q=k+1;let Q=0,H=0;const de=new N;for(let pe=0;pe<q;pe++){const _e=pe*L-z;for(let Le=0;Le<re;Le++){const ot=Le*w-O;de[v]=ot*E,de[m]=_e*x,de[p]=ee,c.push(de.x,de.y,de.z),de[v]=0,de[m]=0,de[p]=P>0?1:-1,u.push(de.x,de.y,de.z),d.push(Le/A),d.push(1-pe/k),Q+=1}}for(let pe=0;pe<k;pe++)for(let _e=0;_e<A;_e++){const Le=f+_e+re*pe,ot=f+_e+re*(pe+1),ne=f+(_e+1)+re*(pe+1),fe=f+(_e+1)+re*pe;l.push(Le,ot,fe),l.push(ot,ne,fe),H+=6}a.addGroup(h,H,M),h+=H,f+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $o(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const i=n[t][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=i.clone():Array.isArray(i)?e[t][r]=i.slice():e[t][r]=i}}return e}function ln(n){const e={};for(let t=0;t<n.length;t++){const r=$o(n[t]);for(const i in r)e[i]=r[i]}return e}function rM(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function $g(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const iM={clone:$o,merge:ln};var oM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bi extends cr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oM,this.fragmentShader=sM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$o(e.uniforms),this.uniformsGroups=rM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const i in this.extensions)this.extensions[i]===!0&&(r[i]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Wg extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=Nr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qr=new N,Dh=new $e,Nh=new $e;class dn extends Wg{constructor(e=50,t=1,r=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Go*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(As*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Go*2*Math.atan(Math.tan(As*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){qr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qr.x,qr.y).multiplyScalar(-e/qr.z),qr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(qr.x,qr.y).multiplyScalar(-e/qr.z)}getViewSize(e,t){return this.getViewBounds(e,Dh,Nh),t.subVectors(Nh,Dh)}setViewOffset(e,t,r,i,o,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=i,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(As*.5*this.fov)/this.zoom,r=2*t,i=this.aspect*r,o=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*i/l,t-=s.offsetY*r/c,i*=s.width/l,r*=s.height/c}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+i,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ao=-90,lo=1;class aM extends Dt{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new dn(ao,lo,e,t);i.layers=this.layers,this.add(i);const o=new dn(ao,lo,e,t);o.layers=this.layers,this.add(o);const s=new dn(ao,lo,e,t);s.layers=this.layers,this.add(s);const a=new dn(ao,lo,e,t);a.layers=this.layers,this.add(a);const l=new dn(ao,lo,e,t);l.layers=this.layers,this.add(l);const c=new dn(ao,lo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,i,o,s,a,l]=t;for(const c of t)this.remove(c);if(e===Nr)r.up.set(0,1,0),r.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===hl)r.up.set(0,-1,0),r.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,i),e.render(t,o),e.setRenderTarget(r,1,i),e.render(t,s),e.setRenderTarget(r,2,i),e.render(t,a),e.setRenderTarget(r,3,i),e.render(t,l),e.setRenderTarget(r,4,i),e.render(t,c),r.texture.generateMipmaps=v,e.setRenderTarget(r,5,i),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=g,r.texture.needsPMREMUpdate=!0}}class jg extends jt{constructor(e,t,r,i,o,s,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Uo,super(e,t,r,i,o,s,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class lM extends Gi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},i=[r,r,r,r,r,r];this.texture=new jg(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:En}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Yo(5,5,5),o=new bi({name:"CubemapFromEquirect",uniforms:$o(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:yn,blending:hi});o.uniforms.tEquirect.value=t;const s=new bn(i,o),a=t.minFilter;return t.minFilter===Dr&&(t.minFilter=En),new aM(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,r,i){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,r,i);e.setRenderTarget(o)}}class cM extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fr,this.environmentIntensity=1,this.environmentRotation=new fr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class uM{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ou,this.updateRanges=[],this.version=0,this.uuid=Qn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,r){e*=this.stride,r*=t.stride;for(let i=0,o=this.stride;i<o;i++)this.array[e+i]=t.array[r+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(t,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const sn=new N;class Cd{constructor(e,t,r,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=r,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,r=this.data.count;t<r;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}getComponent(e,t){let r=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(r=Yn(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=_t(r,this.array)),this.data.array[e*this.data.stride+this.offset+t]=r,this}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Yn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Yn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Yn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Yn(t,this.array)),t}setXY(e,t,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),r=_t(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this}setXYZ(e,t,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),r=_t(r,this.array),i=_t(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=i,this}setXYZW(e,t,r,i,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),r=_t(r,this.array),i=_t(i,this.array),o=_t(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=i,this.data.array[e+3]=o,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const i=r*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[i+o])}return new pn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Cd(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const i=r*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[i+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Oh=new N,Bh=new ht,Uh=new ht,dM=new N,Fh=new qe,ka=new N,bc=new hr,zh=new qe,_c=new ia;class fM extends bn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=fh,this.bindMatrix=new qe,this.bindMatrixInverse=new qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Gr),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let r=0;r<t.count;r++)this.getVertexPosition(r,ka),this.boundingBox.expandByPoint(ka)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new hr),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let r=0;r<t.count;r++)this.getVertexPosition(r,ka),this.boundingSphere.expandByPoint(ka)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const r=this.material,i=this.matrixWorld;r!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bc.copy(this.boundingSphere),bc.applyMatrix4(i),e.ray.intersectsSphere(bc)!==!1&&(zh.copy(i).invert(),_c.copy(e.ray).applyMatrix4(zh),!(this.boundingBox!==null&&_c.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,_c)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ht,t=this.geometry.attributes.skinWeight;for(let r=0,i=t.count;r<i;r++){e.fromBufferAttribute(t,r);const o=1/e.manhattanLength();o!==1/0?e.multiplyScalar(o):e.set(1,0,0,0),t.setXYZW(r,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===fh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===lw?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const r=this.skeleton,i=this.geometry;Bh.fromBufferAttribute(i.attributes.skinIndex,e),Uh.fromBufferAttribute(i.attributes.skinWeight,e),Oh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let o=0;o<4;o++){const s=Uh.getComponent(o);if(s!==0){const a=Bh.getComponent(o);Fh.multiplyMatrices(r.bones[a].matrixWorld,r.boneInverses[a]),t.addScaledVector(dM.copy(Oh).applyMatrix4(Fh),s)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Xg extends Dt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Kg extends jt{constructor(e=null,t=1,r=1,i,o,s,a,l,c=hn,u=hn,d,f){super(null,s,a,l,c,u,i,o,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Hh=new qe,hM=new qe;class Ad{constructor(e=[],t=[]){this.uuid=Qn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let r=0,i=this.bones.length;r<i;r++)this.boneInverses.push(new qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const r=new qe;this.bones[e]&&r.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(r)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const r=this.bones[e];r&&r.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const r=this.bones[e];r&&(r.parent&&r.parent.isBone?(r.matrix.copy(r.parent.matrixWorld).invert(),r.matrix.multiply(r.matrixWorld)):r.matrix.copy(r.matrixWorld),r.matrix.decompose(r.position,r.quaternion,r.scale))}}update(){const e=this.bones,t=this.boneInverses,r=this.boneMatrices,i=this.boneTexture;for(let o=0,s=e.length;o<s;o++){const a=e[o]?e[o].matrixWorld:hM;Hh.multiplyMatrices(a,t[o]),Hh.toArray(r,o*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ad(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const r=new Kg(t,e,e,Dn,Zn);return r.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=r,this}getBoneByName(e){for(let t=0,r=this.bones.length;t<r;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let r=0,i=e.bones.length;r<i;r++){const o=e.bones[r];let s=t[o];s===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",o),s=new Xg),this.bones.push(s),this.boneInverses.push(new qe().fromArray(e.boneInverses[r]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,r=this.boneInverses;for(let i=0,o=t.length;i<o;i++){const s=t[i];e.bones.push(s.uuid);const a=r[i];e.boneInverses.push(a.toArray())}return e}}class Bu extends pn{constructor(e,t,r,i=1){super(e,t,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const co=new qe,Vh=new qe,Da=[],Gh=new Gr,pM=new qe,us=new bn,ds=new hr;class mM extends bn{constructor(e,t,r){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Bu(new Float32Array(r*16),16),this.instanceColor=null,this.morphTexture=null,this.count=r,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<r;i++)this.setMatrixAt(i,pM)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Gr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let r=0;r<t;r++)this.getMatrixAt(r,co),Gh.copy(e.boundingBox).applyMatrix4(co),this.boundingBox.union(Gh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new hr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let r=0;r<t;r++)this.getMatrixAt(r,co),ds.copy(e.boundingSphere).applyMatrix4(co),this.boundingSphere.union(ds)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const r=t.morphTargetInfluences,i=this.morphTexture.source.data.data,o=r.length+1,s=e*o+1;for(let a=0;a<r.length;a++)r[a]=i[s+a]}raycast(e,t){const r=this.matrixWorld,i=this.count;if(us.geometry=this.geometry,us.material=this.material,us.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ds.copy(this.boundingSphere),ds.applyMatrix4(r),e.ray.intersectsSphere(ds)!==!1))for(let o=0;o<i;o++){this.getMatrixAt(o,co),Vh.multiplyMatrices(r,co),us.matrixWorld=Vh,us.raycast(e,Da);for(let s=0,a=Da.length;s<a;s++){const l=Da[s];l.instanceId=o,l.object=this,t.push(l)}Da.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Bu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const r=t.morphTargetInfluences,i=r.length+1;this.morphTexture===null&&(this.morphTexture=new Kg(new Float32Array(i*this.count),i,this.count,Sd,Zn));const o=this.morphTexture.source.data.data;let s=0;for(let c=0;c<r.length;c++)s+=r[c];const a=this.geometry.morphTargetsRelative?1:1-s,l=i*e;o[l]=a,o.set(r,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const yc=new N,gM=new N,vM=new Ye;class ri{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,i){return this.normal.set(e,t,r),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const i=yc.subVectors(r,t).cross(gM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(yc),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/i;return o<0||o>1?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||vM.getNormalMatrix(e),i=this.coplanarPoint(yc).applyMatrix4(e),o=this.normal.applyMatrix3(r).normalize();return this.constant=-i.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pi=new hr,Na=new N;class Rd{constructor(e=new ri,t=new ri,r=new ri,i=new ri,o=new ri,s=new ri){this.planes=[e,t,r,i,o,s]}set(e,t,r,i,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(r),a[3].copy(i),a[4].copy(o),a[5].copy(s),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Nr){const r=this.planes,i=e.elements,o=i[0],s=i[1],a=i[2],l=i[3],c=i[4],u=i[5],d=i[6],f=i[7],h=i[8],g=i[9],v=i[10],m=i[11],p=i[12],E=i[13],x=i[14],y=i[15];if(r[0].setComponents(l-o,f-c,m-h,y-p).normalize(),r[1].setComponents(l+o,f+c,m+h,y+p).normalize(),r[2].setComponents(l+s,f+u,m+g,y+E).normalize(),r[3].setComponents(l-s,f-u,m-g,y-E).normalize(),r[4].setComponents(l-a,f-d,m-v,y-x).normalize(),t===Nr)r[5].setComponents(l+a,f+d,m+v,y+x).normalize();else if(t===hl)r[5].setComponents(a,d,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(e){return Pi.center.set(0,0,0),Pi.radius=.7071067811865476,Pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(e){const t=this.planes,r=e.center,i=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(r)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const i=t[r];if(Na.x=i.normal.x>0?e.max.x:e.min.x,Na.y=i.normal.y>0?e.max.y:e.min.y,Na.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Na)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Yg extends cr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const pl=new N,ml=new N,$h=new qe,fs=new ia,Oa=new hr,xc=new N,Wh=new N;class Pd extends Dt{constructor(e=new pr,t=new Yg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let i=1,o=t.count;i<o;i++)pl.fromBufferAttribute(t,i-1),ml.fromBufferAttribute(t,i),r[i]=r[i-1],r[i]+=pl.distanceTo(ml);e.setAttribute("lineDistance",new Br(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,i=this.matrixWorld,o=e.params.Line.threshold,s=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Oa.copy(r.boundingSphere),Oa.applyMatrix4(i),Oa.radius+=o,e.ray.intersectsSphere(Oa)===!1)return;$h.copy(i).invert(),fs.copy(e.ray).applyMatrix4($h);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=r.index,f=r.attributes.position;if(u!==null){const h=Math.max(0,s.start),g=Math.min(u.count,s.start+s.count);for(let v=h,m=g-1;v<m;v+=c){const p=u.getX(v),E=u.getX(v+1),x=Ba(this,e,fs,l,p,E);x&&t.push(x)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(h),p=Ba(this,e,fs,l,v,m);p&&t.push(p)}}else{const h=Math.max(0,s.start),g=Math.min(f.count,s.start+s.count);for(let v=h,m=g-1;v<m;v+=c){const p=Ba(this,e,fs,l,v,v+1);p&&t.push(p)}if(this.isLineLoop){const v=Ba(this,e,fs,l,g-1,h);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const i=t[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=i.length;o<s;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Ba(n,e,t,r,i,o){const s=n.geometry.attributes.position;if(pl.fromBufferAttribute(s,i),ml.fromBufferAttribute(s,o),t.distanceSqToSegment(pl,ml,xc,Wh)>r)return;xc.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(xc);if(!(l<e.near||l>e.far))return{distance:l,point:Wh.clone().applyMatrix4(n.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:n}}const jh=new N,Xh=new N;class bM extends Pd{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let i=0,o=t.count;i<o;i+=2)jh.fromBufferAttribute(t,i),Xh.fromBufferAttribute(t,i+1),r[i]=i===0?0:r[i-1],r[i+1]=r[i]+jh.distanceTo(Xh);e.setAttribute("lineDistance",new Br(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class _M extends Pd{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class qg extends cr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Kh=new qe,Uu=new ia,Ua=new hr,Fa=new N;class yM extends Dt{constructor(e=new pr,t=new qg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,i=this.matrixWorld,o=e.params.Points.threshold,s=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ua.copy(r.boundingSphere),Ua.applyMatrix4(i),Ua.radius+=o,e.ray.intersectsSphere(Ua)===!1)return;Kh.copy(i).invert(),Uu.copy(e.ray).applyMatrix4(Kh);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=r.index,d=r.attributes.position;if(c!==null){const f=Math.max(0,s.start),h=Math.min(c.count,s.start+s.count);for(let g=f,v=h;g<v;g++){const m=c.getX(g);Fa.fromBufferAttribute(d,m),Yh(Fa,m,l,i,e,t,this)}}else{const f=Math.max(0,s.start),h=Math.min(d.count,s.start+s.count);for(let g=f,v=h;g<v;g++)Fa.fromBufferAttribute(d,g),Yh(Fa,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const i=t[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=i.length;o<s;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Yh(n,e,t,r,i,o,s){const a=Uu.distanceSqToPoint(n);if(a<t){const l=new N;Uu.closestPointToPoint(n,l),l.applyMatrix4(r);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class Fi extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Zg extends jt{constructor(e,t,r,i,o,s,a,l,c,u=ko){if(u!==ko&&u!==Vo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&u===ko&&(r=Vi),r===void 0&&u===Vo&&(r=Ho),super(null,i,o,s,a,l,u,r,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:hn,this.minFilter=l!==void 0?l:hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Il extends pr{constructor(e=1,t=1,r=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:i};const o=e/2,s=t/2,a=Math.floor(r),l=Math.floor(i),c=a+1,u=l+1,d=e/a,f=t/l,h=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const E=p*f-s;for(let x=0;x<c;x++){const y=x*d-o;g.push(y,-E,0),v.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<a;E++){const x=E+c*p,y=E+c*(p+1),R=E+1+c*(p+1),P=E+1+c*p;h.push(x,y,P),h.push(y,R,P)}this.setIndex(h),this.setAttribute("position",new Br(g,3)),this.setAttribute("normal",new Br(v,3)),this.setAttribute("uv",new Br(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Il(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ld extends cr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dg,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class mr extends Ld{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $e(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return et(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class xM extends cr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class SM extends cr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function za(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function wM(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function MM(n){function e(i,o){return n[i]-n[o]}const t=n.length,r=new Array(t);for(let i=0;i!==t;++i)r[i]=i;return r.sort(e),r}function qh(n,e,t){const r=n.length,i=new n.constructor(r);for(let o=0,s=0;s!==r;++o){const a=t[o]*e;for(let l=0;l!==e;++l)i[s++]=n[a+l]}return i}function Jg(n,e,t,r){let i=1,o=n[0];for(;o!==void 0&&o[r]===void 0;)o=n[i++];if(o===void 0)return;let s=o[r];if(s!==void 0)if(Array.isArray(s))do s=o[r],s!==void 0&&(e.push(o.time),t.push.apply(t,s)),o=n[i++];while(o!==void 0);else if(s.toArray!==void 0)do s=o[r],s!==void 0&&(e.push(o.time),s.toArray(t,t.length)),o=n[i++];while(o!==void 0);else do s=o[r],s!==void 0&&(e.push(o.time),t.push(s)),o=n[i++];while(o!==void 0)}class oa{constructor(e,t,r,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(r),this.sampleValues=t,this.valueSize=r,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let r=this._cachedIndex,i=t[r],o=t[r-1];n:{e:{let s;t:{r:if(!(e<i)){for(let a=r+2;;){if(i===void 0){if(e<o)break r;return r=t.length,this._cachedIndex=r,this.copySampleValue_(r-1)}if(r===a)break;if(o=i,i=t[++r],e<i)break e}s=t.length;break t}if(!(e>=o)){const a=t[1];e<a&&(r=2,o=a);for(let l=r-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===l)break;if(i=o,o=t[--r-1],e>=o)break e}s=r,r=0;break t}break n}for(;r<s;){const a=r+s>>>1;e<t[a]?s=a:r=a+1}if(i=t[r],o=t[r-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return r=t.length,this._cachedIndex=r,this.copySampleValue_(r-1)}this._cachedIndex=r,this.intervalChanged_(r,o,i)}return this.interpolate_(r,o,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,r=this.sampleValues,i=this.valueSize,o=e*i;for(let s=0;s!==i;++s)t[s]=r[o+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class TM extends oa{constructor(e,t,r,i){super(e,t,r,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:hh,endingEnd:hh}}intervalChanged_(e,t,r){const i=this.parameterPositions;let o=e-2,s=e+1,a=i[o],l=i[s];if(a===void 0)switch(this.getSettings_().endingStart){case ph:o=e,a=2*t-r;break;case mh:o=i.length-2,a=t+i[o]-i[o+1];break;default:o=e,a=r}if(l===void 0)switch(this.getSettings_().endingEnd){case ph:s=e,l=2*r-t;break;case mh:s=1,l=r+i[1]-i[0];break;default:s=e-1,l=t}const c=(r-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-r),this._offsetPrev=o*u,this._offsetNext=s*u}interpolate_(e,t,r,i){const o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,h=this._weightNext,g=(r-t)/(i-t),v=g*g,m=v*g,p=-f*m+2*f*v-f*g,E=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*g+1,x=(-1-h)*m+(1.5+h)*v+.5*g,y=h*m-h*v;for(let R=0;R!==a;++R)o[R]=p*s[u+R]+E*s[c+R]+x*s[l+R]+y*s[d+R];return o}}class EM extends oa{constructor(e,t,r,i){super(e,t,r,i)}interpolate_(e,t,r,i){const o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(r-t)/(i-t),d=1-u;for(let f=0;f!==a;++f)o[f]=s[c+f]*d+s[l+f]*u;return o}}class CM extends oa{constructor(e,t,r,i){super(e,t,r,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class gr{constructor(e,t,r,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=za(t,this.TimeBufferType),this.values=za(r,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let r;if(t.toJSON!==this.toJSON)r=t.toJSON(e);else{r={name:e.name,times:za(e.times,Array),values:za(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(r.interpolation=i)}return r.type=e.ValueTypeName,r}InterpolantFactoryMethodDiscrete(e){return new CM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new EM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new TM(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case qs:t=this.InterpolantFactoryMethodDiscrete;break;case Zs:t=this.InterpolantFactoryMethodLinear;break;case Jl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const r="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(r);return console.warn("THREE.KeyframeTrack:",r),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qs;case this.InterpolantFactoryMethodLinear:return Zs;case this.InterpolantFactoryMethodSmooth:return Jl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let r=0,i=t.length;r!==i;++r)t[r]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let r=0,i=t.length;r!==i;++r)t[r]*=e}return this}trim(e,t){const r=this.times,i=r.length;let o=0,s=i-1;for(;o!==i&&r[o]<e;)++o;for(;s!==-1&&r[s]>t;)--s;if(++s,o!==0||s!==i){o>=s&&(s=Math.max(s,1),o=s-1);const a=this.getValueSize();this.times=r.slice(o,s),this.values=this.values.slice(o*a,s*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const r=this.times,i=this.values,o=r.length;o===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let a=0;a!==o;a++){const l=r[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(s!==null&&s>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,s),e=!1;break}s=l}if(i!==void 0&&wM(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),r=this.getValueSize(),i=this.getInterpolation()===Jl,o=e.length-1;let s=1;for(let a=1;a<o;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const d=a*r,f=d-r,h=d+r;for(let g=0;g!==r;++g){const v=t[d+g];if(v!==t[f+g]||v!==t[h+g]){l=!0;break}}}if(l){if(a!==s){e[s]=e[a];const d=a*r,f=s*r;for(let h=0;h!==r;++h)t[f+h]=t[d+h]}++s}}if(o>0){e[s]=e[o];for(let a=o*r,l=s*r,c=0;c!==r;++c)t[l+c]=t[a+c];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*r)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),r=this.constructor,i=new r(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}gr.prototype.TimeBufferType=Float32Array;gr.prototype.ValueBufferType=Float32Array;gr.prototype.DefaultInterpolation=Zs;class qo extends gr{constructor(e,t,r){super(e,t,r)}}qo.prototype.ValueTypeName="bool";qo.prototype.ValueBufferType=Array;qo.prototype.DefaultInterpolation=qs;qo.prototype.InterpolantFactoryMethodLinear=void 0;qo.prototype.InterpolantFactoryMethodSmooth=void 0;class Qg extends gr{}Qg.prototype.ValueTypeName="color";class Wo extends gr{}Wo.prototype.ValueTypeName="number";class AM extends oa{constructor(e,t,r,i){super(e,t,r,i)}interpolate_(e,t,r,i){const o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=(r-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)dr.slerpFlat(o,0,s,c-a,s,c,l);return o}}class jo extends gr{InterpolantFactoryMethodLinear(e){return new AM(this.times,this.values,this.getValueSize(),e)}}jo.prototype.ValueTypeName="quaternion";jo.prototype.InterpolantFactoryMethodSmooth=void 0;class Zo extends gr{constructor(e,t,r){super(e,t,r)}}Zo.prototype.ValueTypeName="string";Zo.prototype.ValueBufferType=Array;Zo.prototype.DefaultInterpolation=qs;Zo.prototype.InterpolantFactoryMethodLinear=void 0;Zo.prototype.InterpolantFactoryMethodSmooth=void 0;class Xo extends gr{}Xo.prototype.ValueTypeName="vector";class RM{constructor(e="",t=-1,r=[],i=cw){this.name=e,this.tracks=r,this.duration=t,this.blendMode=i,this.uuid=Qn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],r=e.tracks,i=1/(e.fps||1);for(let s=0,a=r.length;s!==a;++s)t.push(LM(r[s]).scale(i));const o=new this(e.name,e.duration,t,e.blendMode);return o.uuid=e.uuid,o}static toJSON(e){const t=[],r=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let o=0,s=r.length;o!==s;++o)t.push(gr.toJSON(r[o]));return i}static CreateFromMorphTargetSequence(e,t,r,i){const o=t.length,s=[];for(let a=0;a<o;a++){let l=[],c=[];l.push((a+o-1)%o,a,(a+1)%o),c.push(0,1,0);const u=MM(l);l=qh(l,1,u),c=qh(c,1,u),!i&&l[0]===0&&(l.push(o),c.push(c[0])),s.push(new Wo(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/r))}return new this(e,-1,s)}static findByName(e,t){let r=e;if(!Array.isArray(e)){const i=e;r=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<r.length;i++)if(r[i].name===t)return r[i];return null}static CreateClipsFromMorphTargetSequences(e,t,r){const i={},o=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(o);if(u&&u.length>1){const d=u[1];let f=i[d];f||(i[d]=f=[]),f.push(c)}}const s=[];for(const a in i)s.push(this.CreateFromMorphTargetSequence(a,i[a],t,r));return s}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const r=function(d,f,h,g,v){if(h.length!==0){const m=[],p=[];Jg(h,m,p,g),m.length!==0&&v.push(new d(f,m,p))}},i=[],o=e.name||"default",s=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const f=c[d].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const h={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let v=0;v<f[g].morphTargets.length;v++)h[f[g].morphTargets[v]]=-1;for(const v in h){const m=[],p=[];for(let E=0;E!==f[g].morphTargets.length;++E){const x=f[g];m.push(x.time),p.push(x.morphTarget===v?1:0)}i.push(new Wo(".morphTargetInfluence["+v+"]",m,p))}l=h.length*s}else{const h=".bones["+t[d].name+"]";r(Xo,h+".position",f,"pos",i),r(jo,h+".quaternion",f,"rot",i),r(Xo,h+".scale",f,"scl",i)}}return i.length===0?null:new this(o,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let r=0,i=e.length;r!==i;++r){const o=this.tracks[r];t=Math.max(t,o.times[o.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function PM(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Wo;case"vector":case"vector2":case"vector3":case"vector4":return Xo;case"color":return Qg;case"quaternion":return jo;case"bool":case"boolean":return qo;case"string":return Zo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function LM(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=PM(n.type);if(n.times===void 0){const t=[],r=[];Jg(n.keys,t,r,"value"),n.times=t,n.values=r}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const ci={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class IM{constructor(e,t,r){const i=this;let o=!1,s=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this.itemStart=function(u){a++,o===!1&&i.onStart!==void 0&&i.onStart(u,s,a),o=!0},this.itemEnd=function(u){s++,i.onProgress!==void 0&&i.onProgress(u,s,a),s===a&&(o=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const h=c[d],g=c[d+1];if(h.global&&(h.lastIndex=0),h.test(u))return g}return null}}}const kM=new IM;class Jo{constructor(e){this.manager=e!==void 0?e:kM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const r=this;return new Promise(function(i,o){r.load(e,i,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Jo.DEFAULT_MATERIAL_NAME="__DEFAULT";const Er={};class DM extends Error{constructor(e,t){super(e),this.response=t}}class e0 extends Jo{constructor(e){super(e)}load(e,t,r,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=ci.get(e);if(o!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(o),this.manager.itemEnd(e)},0),o;if(Er[e]!==void 0){Er[e].push({onLoad:t,onProgress:r,onError:i});return}Er[e]=[],Er[e].push({onLoad:t,onProgress:r,onError:i});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(s).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Er[e],d=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),h=f?parseInt(f):0,g=h!==0;let v=0;const m=new ReadableStream({start(p){E();function E(){d.read().then(({done:x,value:y})=>{if(x)p.close();else{v+=y.byteLength;const R=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:h});for(let P=0,A=u.length;P<A;P++){const k=u[P];k.onProgress&&k.onProgress(R)}p.enqueue(y),E()}},x=>{p.error(x)})}}});return new Response(m)}else throw new DM(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,h=new TextDecoder(f);return c.arrayBuffer().then(g=>h.decode(g))}}}).then(c=>{ci.add(e,c);const u=Er[e];delete Er[e];for(let d=0,f=u.length;d<f;d++){const h=u[d];h.onLoad&&h.onLoad(c)}}).catch(c=>{const u=Er[e];if(u===void 0)throw this.manager.itemError(e),c;delete Er[e];for(let d=0,f=u.length;d<f;d++){const h=u[d];h.onError&&h.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class NM extends Jo{constructor(e){super(e)}load(e,t,r,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,s=ci.get(e);if(s!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(s),o.manager.itemEnd(e)},0),s;const a=Js("img");function l(){u(),ci.add(e,this),t&&t(this),o.manager.itemEnd(e)}function c(d){u(),i&&i(d),o.manager.itemError(e),o.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(e),a.src=e,a}}class OM extends Jo{constructor(e){super(e)}load(e,t,r,i){const o=new jt,s=new NM(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){o.image=a,o.needsUpdate=!0,t!==void 0&&t(o)},r,i),o}}class Id extends Dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Sc=new qe,Zh=new N,Jh=new N;class kd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rd,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;Zh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zh),Jh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Jh),t.updateMatrixWorld(),Sc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sc),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Sc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class BM extends kd{constructor(){super(new dn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,r=Go*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,o=e.distance||t.far;(r!==t.fov||i!==t.aspect||o!==t.far)&&(t.fov=r,t.aspect=i,t.far=o,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class UM extends Id{constructor(e,t,r=0,i=Math.PI/3,o=0,s=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.distance=r,this.angle=i,this.penumbra=o,this.decay=s,this.map=null,this.shadow=new BM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Qh=new qe,hs=new N,wc=new N;class FM extends kd{constructor(){super(new dn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $e(4,2),this._viewportCount=6,this._viewports=[new ht(2,1,1,1),new ht(0,1,1,1),new ht(3,1,1,1),new ht(1,1,1,1),new ht(3,0,1,1),new ht(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){const r=this.camera,i=this.matrix,o=e.distance||r.far;o!==r.far&&(r.far=o,r.updateProjectionMatrix()),hs.setFromMatrixPosition(e.matrixWorld),r.position.copy(hs),wc.copy(r.position),wc.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(wc),r.updateMatrixWorld(),i.makeTranslation(-hs.x,-hs.y,-hs.z),Qh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qh)}}class zM extends Id{constructor(e,t,r=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=i,this.shadow=new FM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Dd extends Wg{constructor(e=-1,t=1,r=1,i=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=i,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,i,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=i,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let o=r-e,s=r+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class HM extends kd{constructor(){super(new Dd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class VM extends Id{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new HM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ps{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let r=0,i=e.length;r<i;r++)t+=String.fromCharCode(e[r]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class GM extends Jo{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,r,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,s=ci.get(e);if(s!==void 0){if(o.manager.itemStart(e),s.then){s.then(c=>{t&&t(c),o.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(s),o.manager.itemEnd(e)},0),s}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(o.options,{colorSpaceConversion:"none"}))}).then(function(c){return ci.add(e,c),t&&t(c),o.manager.itemEnd(e),c}).catch(function(c){i&&i(c),ci.remove(e),o.manager.itemError(e),o.manager.itemEnd(e)});ci.add(e,l),o.manager.itemStart(e)}}class $M extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}const Nd="\\[\\]\\.:\\/",WM=new RegExp("["+Nd+"]","g"),Od="[^"+Nd+"]",jM="[^"+Nd.replace("\\.","")+"]",XM=/((?:WC+[\/:])*)/.source.replace("WC",Od),KM=/(WCOD+)?/.source.replace("WCOD",jM),YM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Od),qM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Od),ZM=new RegExp("^"+XM+KM+YM+qM+"$"),JM=["material","materials","bones","map"];class QM{constructor(e,t,r){const i=r||yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const r=this._targetGroup.nCachedObjects_,i=this._bindings[r];i!==void 0&&i.getValue(e,t)}setValue(e,t){const r=this._bindings;for(let i=this._targetGroup.nCachedObjects_,o=r.length;i!==o;++i)r[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,r=e.length;t!==r;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,r=e.length;t!==r;++t)e[t].unbind()}}class yt{constructor(e,t,r){this.path=t,this.parsedPath=r||yt.parseTrackName(t),this.node=yt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,r){return e&&e.isAnimationObjectGroup?new yt.Composite(e,t,r):new yt(e,t,r)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(WM,"")}static parseTrackName(e){const t=ZM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const r={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=r.nodeName&&r.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const o=r.nodeName.substring(i+1);JM.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,i),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return r}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const r=e.skeleton.getBoneByName(t);if(r!==void 0)return r}if(e.children){const r=function(o){for(let s=0;s<o.length;s++){const a=o[s];if(a.name===t||a.uuid===t)return a;const l=r(a.children);if(l)return l}return null},i=r(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const r=this.resolvedProperty;for(let i=0,o=r.length;i!==o;++i)e[t++]=r[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const r=this.resolvedProperty;for(let i=0,o=r.length;i!==o;++i)r[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const r=this.resolvedProperty;for(let i=0,o=r.length;i!==o;++i)r[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const r=this.resolvedProperty;for(let i=0,o=r.length;i!==o;++i)r[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,r=t.objectName,i=t.propertyName;let o=t.propertyIndex;if(e||(e=yt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let c=t.objectIndex;switch(r){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[r]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const s=e[i];if(s===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[o]!==void 0&&(o=e.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=o}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}yt.Composite=QM;yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};yt.prototype.GetterByBindingType=[yt.prototype._getValue_direct,yt.prototype._getValue_array,yt.prototype._getValue_arrayElement,yt.prototype._getValue_toArray];yt.prototype.SetterByBindingTypeAndVersioning=[[yt.prototype._setValue_direct,yt.prototype._setValue_direct_setNeedsUpdate,yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_array,yt.prototype._setValue_array_setNeedsUpdate,yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_arrayElement,yt.prototype._setValue_arrayElement_setNeedsUpdate,yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_fromArray,yt.prototype._setValue_fromArray_setNeedsUpdate,yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class ep{constructor(e=1,t=0,r=0){return this.radius=e,this.phi=t,this.theta=r,this}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=et(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(et(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class eT extends ji{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function tp(n,e,t,r){const i=tT(r);switch(t){case Cg:return n*e;case Rg:return n*e;case Pg:return n*e*2;case Sd:return n*e/i.components*i.byteLength;case wd:return n*e/i.components*i.byteLength;case Lg:return n*e*2/i.components*i.byteLength;case Md:return n*e*2/i.components*i.byteLength;case Ag:return n*e*3/i.components*i.byteLength;case Dn:return n*e*4/i.components*i.byteLength;case Td:return n*e*4/i.components*i.byteLength;case Za:case Ja:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Qa:case el:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case uu:case fu:return Math.max(n,16)*Math.max(e,8)/4;case cu:case du:return Math.max(n,8)*Math.max(e,8)/2;case hu:case pu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case mu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case gu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case vu:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case bu:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case _u:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case yu:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case xu:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Su:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case wu:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Mu:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Tu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Eu:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Cu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Au:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ru:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case tl:case Pu:case Lu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ig:case Iu:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ku:case Du:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function tT(n){switch(n){case Fr:case Mg:return{byteLength:1,components:1};case Ys:case Tg:case ra:return{byteLength:2,components:1};case yd:case xd:return{byteLength:2,components:4};case Vi:case _d:case Zn:return{byteLength:4,components:1};case Eg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bd);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function t0(){let n=null,e=!1,t=null,r=null;function i(o,s){t(o,s),r=n.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(r=n.requestAnimationFrame(i),e=!0)},stop:function(){n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function nT(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function r(a,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<d.length;h++){const g=d[f],v=d[h];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,d[f]=v)}d.length=f+1;for(let h=0,g=d.length;h<g;h++){const v=d[h];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(c.buffer,a,l),c.version=a.version}}return{get:i,remove:o,update:s}}var rT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,iT=`#ifdef USE_ALPHAHASH
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
#endif`,oT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cT=`#ifdef USE_AOMAP
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
#endif`,uT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dT=`#ifdef USE_BATCHING
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
#endif`,fT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gT=`#ifdef USE_IRIDESCENCE
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
#endif`,vT=`#ifdef USE_BUMPMAP
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
#endif`,bT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_T=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ST=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,MT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,TT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ET=`#define PI 3.141592653589793
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
} // validated`,CT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,AT=`vec3 transformedNormal = objectNormal;
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
#endif`,RT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,PT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,LT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,IT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kT="gl_FragColor = linearToOutputTexel( gl_FragColor );",DT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,NT=`#ifdef USE_ENVMAP
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
#endif`,OT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,BT=`#ifdef USE_ENVMAP
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
#endif`,UT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,FT=`#ifdef USE_ENVMAP
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
#endif`,zT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,HT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,VT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,GT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$T=`#ifdef USE_GRADIENTMAP
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
}`,WT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,XT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,KT=`uniform bool receiveShadow;
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
#endif`,YT=`#ifdef USE_ENVMAP
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
#endif`,qT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ZT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,JT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,QT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eE=`PhysicalMaterial material;
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
#endif`,tE=`struct PhysicalMaterial {
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
}`,nE=`
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
#endif`,rE=`#if defined( RE_IndirectDiffuse )
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
#endif`,iE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,oE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fE=`#if defined( USE_POINTS_UV )
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
#endif`,hE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bE=`#ifdef USE_MORPHTARGETS
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
#endif`,_E=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,SE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ME=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,TE=`#ifdef USE_NORMALMAP
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
#endif`,EE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,CE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,AE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,RE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,PE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,LE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,IE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,DE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,NE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,OE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,BE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,UE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,FE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,HE=`float getShadowMask() {
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
}`,VE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,GE=`#ifdef USE_SKINNING
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
#endif`,$E=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,WE=`#ifdef USE_SKINNING
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
#endif`,jE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,XE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,KE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,YE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qE=`#ifdef USE_TRANSMISSION
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
#endif`,ZE=`#ifdef USE_TRANSMISSION
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
#endif`,JE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rC=`uniform sampler2D t2D;
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
}`,iC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oC=`#ifdef ENVMAP_TYPE_CUBE
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
}`,sC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lC=`#include <common>
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
}`,cC=`#if DEPTH_PACKING == 3200
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
}`,uC=`#define DISTANCE
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
}`,dC=`#define DISTANCE
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
}`,fC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pC=`uniform float scale;
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
}`,mC=`uniform vec3 diffuse;
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
}`,gC=`#include <common>
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
}`,vC=`uniform vec3 diffuse;
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
}`,bC=`#define LAMBERT
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
}`,_C=`#define LAMBERT
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
}`,yC=`#define MATCAP
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
}`,xC=`#define MATCAP
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
}`,SC=`#define NORMAL
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
}`,wC=`#define NORMAL
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
}`,MC=`#define PHONG
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
}`,TC=`#define PHONG
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
}`,EC=`#define STANDARD
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
}`,CC=`#define STANDARD
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
}`,AC=`#define TOON
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
}`,RC=`#define TOON
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
}`,PC=`uniform float size;
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
}`,LC=`uniform vec3 diffuse;
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
}`,IC=`#include <common>
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
}`,kC=`uniform vec3 color;
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
}`,DC=`uniform float rotation;
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
}`,NC=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:rT,alphahash_pars_fragment:iT,alphamap_fragment:oT,alphamap_pars_fragment:sT,alphatest_fragment:aT,alphatest_pars_fragment:lT,aomap_fragment:cT,aomap_pars_fragment:uT,batching_pars_vertex:dT,batching_vertex:fT,begin_vertex:hT,beginnormal_vertex:pT,bsdfs:mT,iridescence_fragment:gT,bumpmap_pars_fragment:vT,clipping_planes_fragment:bT,clipping_planes_pars_fragment:_T,clipping_planes_pars_vertex:yT,clipping_planes_vertex:xT,color_fragment:ST,color_pars_fragment:wT,color_pars_vertex:MT,color_vertex:TT,common:ET,cube_uv_reflection_fragment:CT,defaultnormal_vertex:AT,displacementmap_pars_vertex:RT,displacementmap_vertex:PT,emissivemap_fragment:LT,emissivemap_pars_fragment:IT,colorspace_fragment:kT,colorspace_pars_fragment:DT,envmap_fragment:NT,envmap_common_pars_fragment:OT,envmap_pars_fragment:BT,envmap_pars_vertex:UT,envmap_physical_pars_fragment:YT,envmap_vertex:FT,fog_vertex:zT,fog_pars_vertex:HT,fog_fragment:VT,fog_pars_fragment:GT,gradientmap_pars_fragment:$T,lightmap_pars_fragment:WT,lights_lambert_fragment:jT,lights_lambert_pars_fragment:XT,lights_pars_begin:KT,lights_toon_fragment:qT,lights_toon_pars_fragment:ZT,lights_phong_fragment:JT,lights_phong_pars_fragment:QT,lights_physical_fragment:eE,lights_physical_pars_fragment:tE,lights_fragment_begin:nE,lights_fragment_maps:rE,lights_fragment_end:iE,logdepthbuf_fragment:oE,logdepthbuf_pars_fragment:sE,logdepthbuf_pars_vertex:aE,logdepthbuf_vertex:lE,map_fragment:cE,map_pars_fragment:uE,map_particle_fragment:dE,map_particle_pars_fragment:fE,metalnessmap_fragment:hE,metalnessmap_pars_fragment:pE,morphinstance_vertex:mE,morphcolor_vertex:gE,morphnormal_vertex:vE,morphtarget_pars_vertex:bE,morphtarget_vertex:_E,normal_fragment_begin:yE,normal_fragment_maps:xE,normal_pars_fragment:SE,normal_pars_vertex:wE,normal_vertex:ME,normalmap_pars_fragment:TE,clearcoat_normal_fragment_begin:EE,clearcoat_normal_fragment_maps:CE,clearcoat_pars_fragment:AE,iridescence_pars_fragment:RE,opaque_fragment:PE,packing:LE,premultiplied_alpha_fragment:IE,project_vertex:kE,dithering_fragment:DE,dithering_pars_fragment:NE,roughnessmap_fragment:OE,roughnessmap_pars_fragment:BE,shadowmap_pars_fragment:UE,shadowmap_pars_vertex:FE,shadowmap_vertex:zE,shadowmask_pars_fragment:HE,skinbase_vertex:VE,skinning_pars_vertex:GE,skinning_vertex:$E,skinnormal_vertex:WE,specularmap_fragment:jE,specularmap_pars_fragment:XE,tonemapping_fragment:KE,tonemapping_pars_fragment:YE,transmission_fragment:qE,transmission_pars_fragment:ZE,uv_pars_fragment:JE,uv_pars_vertex:QE,uv_vertex:eC,worldpos_vertex:tC,background_vert:nC,background_frag:rC,backgroundCube_vert:iC,backgroundCube_frag:oC,cube_vert:sC,cube_frag:aC,depth_vert:lC,depth_frag:cC,distanceRGBA_vert:uC,distanceRGBA_frag:dC,equirect_vert:fC,equirect_frag:hC,linedashed_vert:pC,linedashed_frag:mC,meshbasic_vert:gC,meshbasic_frag:vC,meshlambert_vert:bC,meshlambert_frag:_C,meshmatcap_vert:yC,meshmatcap_frag:xC,meshnormal_vert:SC,meshnormal_frag:wC,meshphong_vert:MC,meshphong_frag:TC,meshphysical_vert:EC,meshphysical_frag:CC,meshtoon_vert:AC,meshtoon_frag:RC,points_vert:PC,points_frag:LC,shadow_vert:IC,shadow_frag:kC,sprite_vert:DC,sprite_frag:NC},be={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},or={basic:{uniforms:ln([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:ln([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:ln([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:ln([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:ln([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:ln([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:ln([be.points,be.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:ln([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:ln([be.common,be.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:ln([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:ln([be.sprite,be.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:ln([be.common,be.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:ln([be.lights,be.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};or.physical={uniforms:ln([or.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const Ha={r:0,b:0,g:0},Li=new fr,OC=new qe;function BC(n,e,t,r,i,o,s){const a=new Xe(0);let l=o===!0?0:1,c,u,d=null,f=0,h=null;function g(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?t:e).get(y)),y}function v(x){let y=!1;const R=g(x);R===null?p(a,l):R&&R.isColor&&(p(R,1),y=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?r.buffers.color.setClear(0,0,0,1,s):P==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,s),(n.autoClear||y)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(x,y){const R=g(y);R&&(R.isCubeTexture||R.mapping===Ll)?(u===void 0&&(u=new bn(new Yo(1,1,1),new bi({name:"BackgroundCubeMaterial",uniforms:$o(or.backgroundCube.uniforms),vertexShader:or.backgroundCube.vertexShader,fragmentShader:or.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,A,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Li.copy(y.backgroundRotation),Li.x*=-1,Li.y*=-1,Li.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),u.material.uniforms.envMap.value=R,u.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(OC.makeRotationFromEuler(Li)),u.material.toneMapped=st.getTransfer(R.colorSpace)!==St,(d!==R||f!==R.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,d=R,f=R.version,h=n.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new bn(new Il(2,2),new bi({name:"BackgroundMaterial",uniforms:$o(or.background.uniforms),vertexShader:or.background.vertexShader,fragmentShader:or.background.fragmentShader,side:Ur,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=st.getTransfer(R.colorSpace)!==St,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(d!==R||f!==R.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,d=R,f=R.version,h=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,y){x.getRGB(Ha,$g(n)),r.buffers.color.setClear(Ha.r,Ha.g,Ha.b,y,s)}function E(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(x,y=1){a.set(x),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(a,l)},render:v,addToRenderList:m,dispose:E}}function UC(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),r={},i=f(null);let o=i,s=!1;function a(w,L,O,z,ee){let re=!1;const q=d(z,O,L);o!==q&&(o=q,c(o.object)),re=h(w,z,O,ee),re&&g(w,z,O,ee),ee!==null&&e.update(ee,n.ELEMENT_ARRAY_BUFFER),(re||s)&&(s=!1,y(w,L,O,z),ee!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function l(){return n.createVertexArray()}function c(w){return n.bindVertexArray(w)}function u(w){return n.deleteVertexArray(w)}function d(w,L,O){const z=O.wireframe===!0;let ee=r[w.id];ee===void 0&&(ee={},r[w.id]=ee);let re=ee[L.id];re===void 0&&(re={},ee[L.id]=re);let q=re[z];return q===void 0&&(q=f(l()),re[z]=q),q}function f(w){const L=[],O=[],z=[];for(let ee=0;ee<t;ee++)L[ee]=0,O[ee]=0,z[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:O,attributeDivisors:z,object:w,attributes:{},index:null}}function h(w,L,O,z){const ee=o.attributes,re=L.attributes;let q=0;const Q=O.getAttributes();for(const H in Q)if(Q[H].location>=0){const pe=ee[H];let _e=re[H];if(_e===void 0&&(H==="instanceMatrix"&&w.instanceMatrix&&(_e=w.instanceMatrix),H==="instanceColor"&&w.instanceColor&&(_e=w.instanceColor)),pe===void 0||pe.attribute!==_e||_e&&pe.data!==_e.data)return!0;q++}return o.attributesNum!==q||o.index!==z}function g(w,L,O,z){const ee={},re=L.attributes;let q=0;const Q=O.getAttributes();for(const H in Q)if(Q[H].location>=0){let pe=re[H];pe===void 0&&(H==="instanceMatrix"&&w.instanceMatrix&&(pe=w.instanceMatrix),H==="instanceColor"&&w.instanceColor&&(pe=w.instanceColor));const _e={};_e.attribute=pe,pe&&pe.data&&(_e.data=pe.data),ee[H]=_e,q++}o.attributes=ee,o.attributesNum=q,o.index=z}function v(){const w=o.newAttributes;for(let L=0,O=w.length;L<O;L++)w[L]=0}function m(w){p(w,0)}function p(w,L){const O=o.newAttributes,z=o.enabledAttributes,ee=o.attributeDivisors;O[w]=1,z[w]===0&&(n.enableVertexAttribArray(w),z[w]=1),ee[w]!==L&&(n.vertexAttribDivisor(w,L),ee[w]=L)}function E(){const w=o.newAttributes,L=o.enabledAttributes;for(let O=0,z=L.length;O<z;O++)L[O]!==w[O]&&(n.disableVertexAttribArray(O),L[O]=0)}function x(w,L,O,z,ee,re,q){q===!0?n.vertexAttribIPointer(w,L,O,ee,re):n.vertexAttribPointer(w,L,O,z,ee,re)}function y(w,L,O,z){v();const ee=z.attributes,re=O.getAttributes(),q=L.defaultAttributeValues;for(const Q in re){const H=re[Q];if(H.location>=0){let de=ee[Q];if(de===void 0&&(Q==="instanceMatrix"&&w.instanceMatrix&&(de=w.instanceMatrix),Q==="instanceColor"&&w.instanceColor&&(de=w.instanceColor)),de!==void 0){const pe=de.normalized,_e=de.itemSize,Le=e.get(de);if(Le===void 0)continue;const ot=Le.buffer,ne=Le.type,fe=Le.bytesPerElement,Me=ne===n.INT||ne===n.UNSIGNED_INT||de.gpuType===_d;if(de.isInterleavedBufferAttribute){const me=de.data,Ie=me.stride,Be=de.offset;if(me.isInstancedInterleavedBuffer){for(let Ve=0;Ve<H.locationSize;Ve++)p(H.location+Ve,me.meshPerAttribute);w.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Ve=0;Ve<H.locationSize;Ve++)m(H.location+Ve);n.bindBuffer(n.ARRAY_BUFFER,ot);for(let Ve=0;Ve<H.locationSize;Ve++)x(H.location+Ve,_e/H.locationSize,ne,pe,Ie*fe,(Be+_e/H.locationSize*Ve)*fe,Me)}else{if(de.isInstancedBufferAttribute){for(let me=0;me<H.locationSize;me++)p(H.location+me,de.meshPerAttribute);w.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let me=0;me<H.locationSize;me++)m(H.location+me);n.bindBuffer(n.ARRAY_BUFFER,ot);for(let me=0;me<H.locationSize;me++)x(H.location+me,_e/H.locationSize,ne,pe,_e*fe,_e/H.locationSize*me*fe,Me)}}else if(q!==void 0){const pe=q[Q];if(pe!==void 0)switch(pe.length){case 2:n.vertexAttrib2fv(H.location,pe);break;case 3:n.vertexAttrib3fv(H.location,pe);break;case 4:n.vertexAttrib4fv(H.location,pe);break;default:n.vertexAttrib1fv(H.location,pe)}}}}E()}function R(){k();for(const w in r){const L=r[w];for(const O in L){const z=L[O];for(const ee in z)u(z[ee].object),delete z[ee];delete L[O]}delete r[w]}}function P(w){if(r[w.id]===void 0)return;const L=r[w.id];for(const O in L){const z=L[O];for(const ee in z)u(z[ee].object),delete z[ee];delete L[O]}delete r[w.id]}function A(w){for(const L in r){const O=r[L];if(O[w.id]===void 0)continue;const z=O[w.id];for(const ee in z)u(z[ee].object),delete z[ee];delete O[w.id]}}function k(){M(),s=!0,o!==i&&(o=i,c(o.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:k,resetDefaultState:M,dispose:R,releaseStatesOfGeometry:P,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:E}}function FC(n,e,t){let r;function i(c){r=c}function o(c,u){n.drawArrays(r,c,u),t.update(u,r,1)}function s(c,u,d){d!==0&&(n.drawArraysInstanced(r,c,u,d),t.update(u,r,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,c,0,u,0,d);let h=0;for(let g=0;g<d;g++)h+=u[g];t.update(h,r,1)}function l(c,u,d,f){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<c.length;g++)s(c[g],u[g],f[g]);else{h.multiDrawArraysInstancedWEBGL(r,c,0,u,0,f,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v]*f[v];t.update(g,r,1)}}this.setMode=i,this.render=o,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function zC(n,e,t,r){let i;function o(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){return!(A!==Dn&&r.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const k=A===ra&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Fr&&r.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Zn&&!k)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:R,maxSamples:P}}function HC(n){const e=this;let t=null,r=0,i=!1,o=!1;const s=new ri,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||r!==0||i;return i=f,r=d.length,h},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!i||g===null||g.length===0||o&&!m)o?u(null):c();else{const E=o?0:r,x=E*4;let y=p.clippingState||null;l.value=y,y=u(g,f,x,h);for(let R=0;R!==x;++R)y[R]=t[R];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function u(d,f,h,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=h+v*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,y=h;x!==v;++x,y+=4)s.copy(d[x]).applyMatrix4(E,a),s.normal.toArray(m,y),m[y+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function VC(n){let e=new WeakMap;function t(s,a){return a===au?s.mapping=Uo:a===lu&&(s.mapping=Fo),s}function r(s){if(s&&s.isTexture){const a=s.mapping;if(a===au||a===lu)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new lM(l.height);return c.fromEquirectangularTexture(n,s),e.set(s,c),s.addEventListener("dispose",i),t(c.texture,s.mapping)}else return null}}return s}function i(s){const a=s.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:r,dispose:o}}const wo=4,np=[.125,.215,.35,.446,.526,.582],Ui=20,Mc=new Dd,rp=new Xe;let Tc=null,Ec=0,Cc=0,Ac=!1;const Ni=(1+Math.sqrt(5))/2,uo=1/Ni,ip=[new N(-Ni,uo,0),new N(Ni,uo,0),new N(-uo,0,Ni),new N(uo,0,Ni),new N(0,Ni,-uo),new N(0,Ni,uo),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class op{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,i=100){Tc=this._renderer.getRenderTarget(),Ec=this._renderer.getActiveCubeFace(),Cc=this._renderer.getActiveMipmapLevel(),Ac=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,r,i,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ap(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Tc,Ec,Cc),this._renderer.xr.enabled=Ac,e.scissorTest=!1,Va(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Uo||e.mapping===Fo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Tc=this._renderer.getRenderTarget(),Ec=this._renderer.getActiveCubeFace(),Cc=this._renderer.getActiveMipmapLevel(),Ac=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:En,minFilter:En,generateMipmaps:!1,type:ra,format:Dn,colorSpace:mn,depthBuffer:!1},i=sp(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sp(e,t,r);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=GC(o)),this._blurMaterial=$C(o,e,t)}return i}_compileMaterial(e){const t=new bn(this._lodPlanes[0],e);this._renderer.compile(t,Mc)}_sceneToCubeUV(e,t,r,i){const a=new dn(90,1,t,r),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(rp),u.toneMapping=pi,u.autoClear=!1;const h=new li({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1}),g=new bn(new Yo,h);let v=!1;const m=e.background;m?m.isColor&&(h.color.copy(m),e.background=null,v=!0):(h.color.copy(rp),v=!0);for(let p=0;p<6;p++){const E=p%3;E===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):E===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const x=this._cubeSize;Va(i,E*x,p>2?x:0,x,x),u.setRenderTarget(i),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){const r=this._renderer,i=e.mapping===Uo||e.mapping===Fo;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=lp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ap());const o=i?this._cubemapMaterial:this._equirectMaterial,s=new bn(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;Va(t,0,0,3*l,2*l),r.setRenderTarget(t),r.render(s,Mc)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let o=1;o<i;o++){const s=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=ip[(i-o-1)%ip.length];this._blur(e,o-1,o,s,a)}t.autoClear=r}_blur(e,t,r,i,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,r,i,"latitudinal",o),this._halfBlur(s,e,r,r,i,"longitudinal",o)}_halfBlur(e,t,r,i,o,s,a){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new bn(this._lodPlanes[i],c),f=c.uniforms,h=this._sizeLods[r]-1,g=isFinite(o)?Math.PI/(2*h):2*Math.PI/(2*Ui-1),v=o/g,m=isFinite(o)?1+Math.floor(u*v):Ui;m>Ui&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ui}`);const p=[];let E=0;for(let A=0;A<Ui;++A){const k=A/v,M=Math.exp(-k*k/2);p.push(M),A===0?E+=M:A<m&&(E+=2*M)}for(let A=0;A<p.length;A++)p[A]=p[A]/E;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=s==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-r;const y=this._sizeLods[i],R=3*y*(i>x-wo?i-x+wo:0),P=4*(this._cubeSize-y);Va(t,R,P,3*y,2*y),l.setRenderTarget(t),l.render(d,Mc)}}function GC(n){const e=[],t=[],r=[];let i=n;const o=n-wo+1+np.length;for(let s=0;s<o;s++){const a=Math.pow(2,i);t.push(a);let l=1/a;s>n-wo?l=np[s-n+wo-1]:s===0&&(l=0),r.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,g=6,v=3,m=2,p=1,E=new Float32Array(v*g*h),x=new Float32Array(m*g*h),y=new Float32Array(p*g*h);for(let P=0;P<h;P++){const A=P%3*2/3-1,k=P>2?0:-1,M=[A,k,0,A+2/3,k,0,A+2/3,k+1,0,A,k,0,A+2/3,k+1,0,A,k+1,0];E.set(M,v*g*P),x.set(f,m*g*P);const w=[P,P,P,P,P,P];y.set(w,p*g*P)}const R=new pr;R.setAttribute("position",new pn(E,v)),R.setAttribute("uv",new pn(x,m)),R.setAttribute("faceIndex",new pn(y,p)),e.push(R),i>wo&&i--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function sp(n,e,t){const r=new Gi(n,e,t);return r.texture.mapping=Ll,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Va(n,e,t,r,i){n.viewport.set(e,t,r,i),n.scissor.set(e,t,r,i)}function $C(n,e,t){const r=new Float32Array(Ui),i=new N(0,1,0);return new bi({name:"SphericalGaussianBlur",defines:{n:Ui,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Bd(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function ap(){return new bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bd(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function lp(){return new bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Bd(){return`

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
	`}function WC(n){let e=new WeakMap,t=null;function r(a){if(a&&a.isTexture){const l=a.mapping,c=l===au||l===lu,u=l===Uo||l===Fo;if(c||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new op(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const h=a.image;return c&&h&&h.height>0||u&&h&&i(h)?(t===null&&(t=new op(n)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",o),d.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:s}}function jC(n){const e={};function t(r){if(e[r]!==void 0)return e[r];let i;switch(r){case"WEBGL_depth_texture":i=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=n.getExtension(r)}return e[r]=i,i}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const i=t(r);return i===null&&vo("THREE.WebGLRenderer: "+r+" extension not supported."),i}}}function XC(n,e,t,r){const i={},o=new WeakMap;function s(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",s),delete i[f.id];const h=o.get(f);h&&(e.remove(h),o.delete(f)),r.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return i[f.id]===!0||(f.addEventListener("dispose",s),i[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const h in f)e.update(f[h],n.ARRAY_BUFFER)}function c(d){const f=[],h=d.index,g=d.attributes.position;let v=0;if(h!==null){const E=h.array;v=h.version;for(let x=0,y=E.length;x<y;x+=3){const R=E[x+0],P=E[x+1],A=E[x+2];f.push(R,P,P,A,A,R)}}else if(g!==void 0){const E=g.array;v=g.version;for(let x=0,y=E.length/3-1;x<y;x+=3){const R=x+0,P=x+1,A=x+2;f.push(R,P,P,A,A,R)}}else return;const m=new(Bg(f)?Gg:Vg)(f,1);m.version=v;const p=o.get(d);p&&e.remove(p),o.set(d,m)}function u(d){const f=o.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return o.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function KC(n,e,t){let r;function i(f){r=f}let o,s;function a(f){o=f.type,s=f.bytesPerElement}function l(f,h){n.drawElements(r,h,o,f*s),t.update(h,r,1)}function c(f,h,g){g!==0&&(n.drawElementsInstanced(r,h,o,f*s,g),t.update(h,r,g))}function u(f,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,h,0,o,f,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];t.update(m,r,1)}function d(f,h,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/s,h[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(r,h,0,o,f,0,v,0,g);let p=0;for(let E=0;E<g;E++)p+=h[E]*v[E];t.update(p,r,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function YC(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(o,s,a){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=a*(o/3);break;case n.LINES:t.lines+=a*(o/2);break;case n.LINE_STRIP:t.lines+=a*(o-1);break;case n.LINE_LOOP:t.lines+=a*o;break;case n.POINTS:t.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:r}}function qC(n,e,t){const r=new WeakMap,i=new ht;function o(s,a,l){const c=s.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=r.get(a);if(f===void 0||f.count!==d){let w=function(){k.dispose(),r.delete(a),a.removeEventListener("dispose",w)};var h=w;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),v===!0&&(y=2),m===!0&&(y=3);let R=a.attributes.position.count*y,P=1;R>e.maxTextureSize&&(P=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const A=new Float32Array(R*P*4*d),k=new Fg(A,R,P,d);k.type=Zn,k.needsUpdate=!0;const M=y*4;for(let L=0;L<d;L++){const O=p[L],z=E[L],ee=x[L],re=R*P*4*L;for(let q=0;q<O.count;q++){const Q=q*M;g===!0&&(i.fromBufferAttribute(O,q),A[re+Q+0]=i.x,A[re+Q+1]=i.y,A[re+Q+2]=i.z,A[re+Q+3]=0),v===!0&&(i.fromBufferAttribute(z,q),A[re+Q+4]=i.x,A[re+Q+5]=i.y,A[re+Q+6]=i.z,A[re+Q+7]=0),m===!0&&(i.fromBufferAttribute(ee,q),A[re+Q+8]=i.x,A[re+Q+9]=i.y,A[re+Q+10]=i.z,A[re+Q+11]=ee.itemSize===4?i.w:1)}}f={count:d,texture:k,size:new $e(R,P)},r.set(a,f),a.addEventListener("dispose",w)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:o}}function ZC(n,e,t,r){let i=new WeakMap;function o(l){const c=r.render.frame,u=l.geometry,d=e.get(l,u);if(i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return d}function s(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:o,dispose:s}}const n0=new jt,cp=new Zg(1,1),r0=new Fg,i0=new jw,o0=new jg,up=[],dp=[],fp=new Float32Array(16),hp=new Float32Array(9),pp=new Float32Array(4);function Qo(n,e,t){const r=n[0];if(r<=0||r>0)return n;const i=e*t;let o=up[i];if(o===void 0&&(o=new Float32Array(i),up[i]=o),e!==0){r.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=t,n[s].toArray(o,a)}return o}function Ht(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function Vt(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function kl(n,e){let t=dp[e];t===void 0&&(t=new Int32Array(e),dp[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function JC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function QC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2fv(this.addr,e),Vt(t,e)}}function e2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;n.uniform3fv(this.addr,e),Vt(t,e)}}function t2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4fv(this.addr,e),Vt(t,e)}}function n2(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(Ht(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,r))return;pp.set(r),n.uniformMatrix2fv(this.addr,!1,pp),Vt(t,r)}}function r2(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(Ht(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,r))return;hp.set(r),n.uniformMatrix3fv(this.addr,!1,hp),Vt(t,r)}}function i2(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(Ht(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,r))return;fp.set(r),n.uniformMatrix4fv(this.addr,!1,fp),Vt(t,r)}}function o2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function s2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2iv(this.addr,e),Vt(t,e)}}function a2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3iv(this.addr,e),Vt(t,e)}}function l2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4iv(this.addr,e),Vt(t,e)}}function c2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function u2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2uiv(this.addr,e),Vt(t,e)}}function d2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3uiv(this.addr,e),Vt(t,e)}}function f2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4uiv(this.addr,e),Vt(t,e)}}function h2(n,e,t){const r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(n.uniform1i(this.addr,i),r[0]=i);let o;this.type===n.SAMPLER_2D_SHADOW?(cp.compareFunction=Ng,o=cp):o=n0,t.setTexture2D(e||o,i)}function p2(n,e,t){const r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(n.uniform1i(this.addr,i),r[0]=i),t.setTexture3D(e||i0,i)}function m2(n,e,t){const r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(n.uniform1i(this.addr,i),r[0]=i),t.setTextureCube(e||o0,i)}function g2(n,e,t){const r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(n.uniform1i(this.addr,i),r[0]=i),t.setTexture2DArray(e||r0,i)}function v2(n){switch(n){case 5126:return JC;case 35664:return QC;case 35665:return e2;case 35666:return t2;case 35674:return n2;case 35675:return r2;case 35676:return i2;case 5124:case 35670:return o2;case 35667:case 35671:return s2;case 35668:case 35672:return a2;case 35669:case 35673:return l2;case 5125:return c2;case 36294:return u2;case 36295:return d2;case 36296:return f2;case 35678:case 36198:case 36298:case 36306:case 35682:return h2;case 35679:case 36299:case 36307:return p2;case 35680:case 36300:case 36308:case 36293:return m2;case 36289:case 36303:case 36311:case 36292:return g2}}function b2(n,e){n.uniform1fv(this.addr,e)}function _2(n,e){const t=Qo(e,this.size,2);n.uniform2fv(this.addr,t)}function y2(n,e){const t=Qo(e,this.size,3);n.uniform3fv(this.addr,t)}function x2(n,e){const t=Qo(e,this.size,4);n.uniform4fv(this.addr,t)}function S2(n,e){const t=Qo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function w2(n,e){const t=Qo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function M2(n,e){const t=Qo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function T2(n,e){n.uniform1iv(this.addr,e)}function E2(n,e){n.uniform2iv(this.addr,e)}function C2(n,e){n.uniform3iv(this.addr,e)}function A2(n,e){n.uniform4iv(this.addr,e)}function R2(n,e){n.uniform1uiv(this.addr,e)}function P2(n,e){n.uniform2uiv(this.addr,e)}function L2(n,e){n.uniform3uiv(this.addr,e)}function I2(n,e){n.uniform4uiv(this.addr,e)}function k2(n,e,t){const r=this.cache,i=e.length,o=kl(t,i);Ht(r,o)||(n.uniform1iv(this.addr,o),Vt(r,o));for(let s=0;s!==i;++s)t.setTexture2D(e[s]||n0,o[s])}function D2(n,e,t){const r=this.cache,i=e.length,o=kl(t,i);Ht(r,o)||(n.uniform1iv(this.addr,o),Vt(r,o));for(let s=0;s!==i;++s)t.setTexture3D(e[s]||i0,o[s])}function N2(n,e,t){const r=this.cache,i=e.length,o=kl(t,i);Ht(r,o)||(n.uniform1iv(this.addr,o),Vt(r,o));for(let s=0;s!==i;++s)t.setTextureCube(e[s]||o0,o[s])}function O2(n,e,t){const r=this.cache,i=e.length,o=kl(t,i);Ht(r,o)||(n.uniform1iv(this.addr,o),Vt(r,o));for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||r0,o[s])}function B2(n){switch(n){case 5126:return b2;case 35664:return _2;case 35665:return y2;case 35666:return x2;case 35674:return S2;case 35675:return w2;case 35676:return M2;case 5124:case 35670:return T2;case 35667:case 35671:return E2;case 35668:case 35672:return C2;case 35669:case 35673:return A2;case 5125:return R2;case 36294:return P2;case 36295:return L2;case 36296:return I2;case 35678:case 36198:case 36298:case 36306:case 35682:return k2;case 35679:case 36299:case 36307:return D2;case 35680:case 36300:case 36308:case 36293:return N2;case 36289:case 36303:case 36311:case 36292:return O2}}class U2{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=v2(t.type)}}class F2{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=B2(t.type)}}class z2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const i=this.seq;for(let o=0,s=i.length;o!==s;++o){const a=i[o];a.setValue(e,t[a.id],r)}}}const Rc=/(\w+)(\])?(\[|\.)?/g;function mp(n,e){n.seq.push(e),n.map[e.id]=e}function H2(n,e,t){const r=n.name,i=r.length;for(Rc.lastIndex=0;;){const o=Rc.exec(r),s=Rc.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===i){mp(t,c===void 0?new U2(a,n,e):new F2(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new z2(a),mp(t,d)),t=d}}}class nl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<r;++i){const o=e.getActiveUniform(t,i),s=e.getUniformLocation(t,o.name);H2(o,s,this)}}setValue(e,t,r,i){const o=this.map[t];o!==void 0&&o.setValue(e,r,i)}setOptional(e,t,r){const i=t[r];i!==void 0&&this.setValue(e,r,i)}static upload(e,t,r,i){for(let o=0,s=t.length;o!==s;++o){const a=t[o],l=r[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const r=[];for(let i=0,o=e.length;i!==o;++i){const s=e[i];s.id in t&&r.push(s)}return r}}function gp(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}const V2=37297;let G2=0;function $2(n,e){const t=n.split(`
`),r=[],i=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let s=i;s<o;s++){const a=s+1;r.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return r.join(`
`)}const vp=new Ye;function W2(n){st._getMatrix(vp,st.workingColorSpace,n);const e=`mat3( ${vp.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(n)){case fl:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function bp(n,e,t){const r=n.getShaderParameter(e,n.COMPILE_STATUS),i=n.getShaderInfoLog(e).trim();if(r&&i==="")return"";const o=/ERROR: 0:(\d+)/.exec(i);if(o){const s=parseInt(o[1]);return t.toUpperCase()+`

`+i+`

`+$2(n.getShaderSource(e),s)}else return i}function j2(n,e){const t=W2(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function X2(n,e){let t;switch(e){case tw:t="Linear";break;case nw:t="Reinhard";break;case rw:t="Cineon";break;case iw:t="ACESFilmic";break;case sw:t="AgX";break;case aw:t="Neutral";break;case ow:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ga=new N;function K2(){st.getLuminanceCoefficients(Ga);const n=Ga.x.toFixed(4),e=Ga.y.toFixed(4),t=Ga.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Y2(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bs).join(`
`)}function q2(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function Z2(n,e){const t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){const o=n.getActiveAttrib(e,i),s=o.name;let a=1;o.type===n.FLOAT_MAT2&&(a=2),o.type===n.FLOAT_MAT3&&(a=3),o.type===n.FLOAT_MAT4&&(a=4),t[s]={type:o.type,location:n.getAttribLocation(e,s),locationSize:a}}return t}function bs(n){return n!==""}function _p(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const J2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fu(n){return n.replace(J2,eA)}const Q2=new Map;function eA(n,e){let t=Je[e];if(t===void 0){const r=Q2.get(e);if(r!==void 0)t=Je[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Fu(t)}const tA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xp(n){return n.replace(tA,nA)}function nA(n,e,t,r){let i="";for(let o=parseInt(e);o<parseInt(t);o++)i+=r.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return i}function Sp(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function rA(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===yg?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===DS?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Cr&&(e="SHADOWMAP_TYPE_VSM"),e}function iA(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Uo:case Fo:e="ENVMAP_TYPE_CUBE";break;case Ll:e="ENVMAP_TYPE_CUBE_UV";break}return e}function oA(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Fo:e="ENVMAP_MODE_REFRACTION";break}return e}function sA(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case xg:e="ENVMAP_BLENDING_MULTIPLY";break;case QS:e="ENVMAP_BLENDING_MIX";break;case ew:e="ENVMAP_BLENDING_ADD";break}return e}function aA(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function lA(n,e,t,r){const i=n.getContext(),o=t.defines;let s=t.vertexShader,a=t.fragmentShader;const l=rA(t),c=iA(t),u=oA(t),d=sA(t),f=aA(t),h=Y2(t),g=q2(o),v=i.createProgram();let m,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(bs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(bs).join(`
`),p.length>0&&(p+=`
`)):(m=[Sp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bs).join(`
`),p=[Sp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pi?"#define TONE_MAPPING":"",t.toneMapping!==pi?Je.tonemapping_pars_fragment:"",t.toneMapping!==pi?X2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,j2("linearToOutputTexel",t.outputColorSpace),K2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(bs).join(`
`)),s=Fu(s),s=_p(s,t),s=yp(s,t),a=Fu(a),a=_p(a,t),a=yp(a,t),s=xp(s),a=xp(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===vh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=E+m+s,y=E+p+a,R=gp(i,i.VERTEX_SHADER,x),P=gp(i,i.FRAGMENT_SHADER,y);i.attachShader(v,R),i.attachShader(v,P),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function A(L){if(n.debug.checkShaderErrors){const O=i.getProgramInfoLog(v).trim(),z=i.getShaderInfoLog(R).trim(),ee=i.getShaderInfoLog(P).trim();let re=!0,q=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(re=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(i,v,R,P);else{const Q=bp(i,R,"vertex"),H=bp(i,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+O+`
`+Q+`
`+H)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(z===""||ee==="")&&(q=!1);q&&(L.diagnostics={runnable:re,programLog:O,vertexShader:{log:z,prefix:m},fragmentShader:{log:ee,prefix:p}})}i.deleteShader(R),i.deleteShader(P),k=new nl(i,v),M=Z2(i,v)}let k;this.getUniforms=function(){return k===void 0&&A(this),k};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=i.getProgramParameter(v,V2)),w},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=G2++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=P,this}let cA=0;class uA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,i=this._getShaderStage(t),o=this._getShaderStage(r),s=this._getShaderCacheForMaterial(e);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new dA(e),t.set(e,r)),r}}class dA{constructor(e){this.id=cA++,this.code=e,this.usedTimes=0}}function fA(n,e,t,r,i,o,s){const a=new zg,l=new uA,c=new Set,u=[],d=i.logarithmicDepthBuffer,f=i.vertexTextures;let h=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,w,L,O,z){const ee=O.fog,re=z.geometry,q=M.isMeshStandardMaterial?O.environment:null,Q=(M.isMeshStandardMaterial?t:e).get(M.envMap||q),H=Q&&Q.mapping===Ll?Q.image.height:null,de=g[M.type];M.precision!==null&&(h=i.getMaxPrecision(M.precision),h!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",h,"instead."));const pe=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,_e=pe!==void 0?pe.length:0;let Le=0;re.morphAttributes.position!==void 0&&(Le=1),re.morphAttributes.normal!==void 0&&(Le=2),re.morphAttributes.color!==void 0&&(Le=3);let ot,ne,fe,Me;if(de){const bt=or[de];ot=bt.vertexShader,ne=bt.fragmentShader}else ot=M.vertexShader,ne=M.fragmentShader,l.update(M),fe=l.getVertexShaderID(M),Me=l.getFragmentShaderID(M);const me=n.getRenderTarget(),Ie=n.state.buffers.depth.getReversed(),Be=z.isInstancedMesh===!0,Ve=z.isBatchedMesh===!0,xt=!!M.map,tt=!!M.matcap,C=!!Q,_=!!M.aoMap,X=!!M.lightMap,Z=!!M.bumpMap,K=!!M.normalMap,$=!!M.displacementMap,se=!!M.emissiveMap,Y=!!M.metalnessMap,S=!!M.roughnessMap,b=M.anisotropy>0,I=M.clearcoat>0,B=M.dispersion>0,G=M.iridescence>0,V=M.sheen>0,ce=M.transmission>0,ae=b&&!!M.anisotropyMap,le=I&&!!M.clearcoatMap,Fe=I&&!!M.clearcoatNormalMap,oe=I&&!!M.clearcoatRoughnessMap,ve=G&&!!M.iridescenceMap,Ae=G&&!!M.iridescenceThicknessMap,De=V&&!!M.sheenColorMap,Ee=V&&!!M.sheenRoughnessMap,Ue=!!M.specularMap,Ne=!!M.specularColorMap,vt=!!M.specularIntensityMap,D=ce&&!!M.transmissionMap,ye=ce&&!!M.thicknessMap,te=!!M.gradientMap,ie=!!M.alphaMap,we=M.alphaTest>0,Se=!!M.alphaHash,Ke=!!M.extensions;let Nt=pi;M.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(Nt=n.toneMapping);const Zt={shaderID:de,shaderType:M.type,shaderName:M.name,vertexShader:ot,fragmentShader:ne,defines:M.defines,customVertexShaderID:fe,customFragmentShaderID:Me,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:h,batching:Ve,batchingColor:Ve&&z._colorsTexture!==null,instancing:Be,instancingColor:Be&&z.instanceColor!==null,instancingMorph:Be&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:me===null?n.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:mn,alphaToCoverage:!!M.alphaToCoverage,map:xt,matcap:tt,envMap:C,envMapMode:C&&Q.mapping,envMapCubeUVHeight:H,aoMap:_,lightMap:X,bumpMap:Z,normalMap:K,displacementMap:f&&$,emissiveMap:se,normalMapObjectSpace:K&&M.normalMapType===hw,normalMapTangentSpace:K&&M.normalMapType===Dg,metalnessMap:Y,roughnessMap:S,anisotropy:b,anisotropyMap:ae,clearcoat:I,clearcoatMap:le,clearcoatNormalMap:Fe,clearcoatRoughnessMap:oe,dispersion:B,iridescence:G,iridescenceMap:ve,iridescenceThicknessMap:Ae,sheen:V,sheenColorMap:De,sheenRoughnessMap:Ee,specularMap:Ue,specularColorMap:Ne,specularIntensityMap:vt,transmission:ce,transmissionMap:D,thicknessMap:ye,gradientMap:te,opaque:M.transparent===!1&&M.blending===Io&&M.alphaToCoverage===!1,alphaMap:ie,alphaTest:we,alphaHash:Se,combine:M.combine,mapUv:xt&&v(M.map.channel),aoMapUv:_&&v(M.aoMap.channel),lightMapUv:X&&v(M.lightMap.channel),bumpMapUv:Z&&v(M.bumpMap.channel),normalMapUv:K&&v(M.normalMap.channel),displacementMapUv:$&&v(M.displacementMap.channel),emissiveMapUv:se&&v(M.emissiveMap.channel),metalnessMapUv:Y&&v(M.metalnessMap.channel),roughnessMapUv:S&&v(M.roughnessMap.channel),anisotropyMapUv:ae&&v(M.anisotropyMap.channel),clearcoatMapUv:le&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:Fe&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:De&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&v(M.sheenRoughnessMap.channel),specularMapUv:Ue&&v(M.specularMap.channel),specularColorMapUv:Ne&&v(M.specularColorMap.channel),specularIntensityMapUv:vt&&v(M.specularIntensityMap.channel),transmissionMapUv:D&&v(M.transmissionMap.channel),thicknessMapUv:ye&&v(M.thicknessMap.channel),alphaMapUv:ie&&v(M.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&(K||b),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!re.attributes.uv&&(xt||ie),fog:!!ee,useFog:M.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Ie,skinning:z.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Le,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:Nt,decodeVideoTexture:xt&&M.map.isVideoTexture===!0&&st.getTransfer(M.map.colorSpace)===St,decodeVideoTextureEmissive:se&&M.emissiveMap.isVideoTexture===!0&&st.getTransfer(M.emissiveMap.colorSpace)===St,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===sr,flipSided:M.side===yn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ke&&M.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ke&&M.extensions.multiDraw===!0||Ve)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Zt.vertexUv1s=c.has(1),Zt.vertexUv2s=c.has(2),Zt.vertexUv3s=c.has(3),c.clear(),Zt}function p(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const L in M.defines)w.push(L),w.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(E(w,M),x(w,M),w.push(n.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function E(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function x(M,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),M.push(a.mask)}function y(M){const w=g[M.type];let L;if(w){const O=or[w];L=iM.clone(O.uniforms)}else L=M.uniforms;return L}function R(M,w){let L;for(let O=0,z=u.length;O<z;O++){const ee=u[O];if(ee.cacheKey===w){L=ee,++L.usedTimes;break}}return L===void 0&&(L=new lA(n,w,M,o),u.push(L)),L}function P(M){if(--M.usedTimes===0){const w=u.indexOf(M);u[w]=u[u.length-1],u.pop(),M.destroy()}}function A(M){l.remove(M)}function k(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:R,releaseProgram:P,releaseShaderCache:A,programs:u,dispose:k}}function hA(){let n=new WeakMap;function e(s){return n.has(s)}function t(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function r(s){n.delete(s)}function i(s,a,l){n.get(s)[a]=l}function o(){n=new WeakMap}return{has:e,get:t,remove:r,update:i,dispose:o}}function pA(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function wp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Mp(){const n=[];let e=0;const t=[],r=[],i=[];function o(){e=0,t.length=0,r.length=0,i.length=0}function s(d,f,h,g,v,m){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:h,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},n[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=h,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=v,p.group=m),e++,p}function a(d,f,h,g,v,m){const p=s(d,f,h,g,v,m);h.transmission>0?r.push(p):h.transparent===!0?i.push(p):t.push(p)}function l(d,f,h,g,v,m){const p=s(d,f,h,g,v,m);h.transmission>0?r.unshift(p):h.transparent===!0?i.unshift(p):t.unshift(p)}function c(d,f){t.length>1&&t.sort(d||pA),r.length>1&&r.sort(f||wp),i.length>1&&i.sort(f||wp)}function u(){for(let d=e,f=n.length;d<f;d++){const h=n[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:r,transparent:i,init:o,push:a,unshift:l,finish:u,sort:c}}function mA(){let n=new WeakMap;function e(r,i){const o=n.get(r);let s;return o===void 0?(s=new Mp,n.set(r,[s])):i>=o.length?(s=new Mp,o.push(s)):s=o[i],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function gA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Xe};break;case"SpotLight":t={position:new N,direction:new N,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function vA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let bA=0;function _A(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function yA(n){const e=new gA,t=vA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new N);const i=new N,o=new qe,s=new qe;function a(c){let u=0,d=0,f=0;for(let M=0;M<9;M++)r.probe[M].set(0,0,0);let h=0,g=0,v=0,m=0,p=0,E=0,x=0,y=0,R=0,P=0,A=0;c.sort(_A);for(let M=0,w=c.length;M<w;M++){const L=c[M],O=L.color,z=L.intensity,ee=L.distance,re=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=O.r*z,d+=O.g*z,f+=O.b*z;else if(L.isLightProbe){for(let q=0;q<9;q++)r.probe[q].addScaledVector(L.sh.coefficients[q],z);A++}else if(L.isDirectionalLight){const q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Q=L.shadow,H=t.get(L);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,r.directionalShadow[h]=H,r.directionalShadowMap[h]=re,r.directionalShadowMatrix[h]=L.shadow.matrix,E++}r.directional[h]=q,h++}else if(L.isSpotLight){const q=e.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(O).multiplyScalar(z),q.distance=ee,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,r.spot[v]=q;const Q=L.shadow;if(L.map&&(r.spotLightMap[R]=L.map,R++,Q.updateMatrices(L),L.castShadow&&P++),r.spotLightMatrix[v]=Q.matrix,L.castShadow){const H=t.get(L);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,r.spotShadow[v]=H,r.spotShadowMap[v]=re,y++}v++}else if(L.isRectAreaLight){const q=e.get(L);q.color.copy(O).multiplyScalar(z),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),r.rectArea[m]=q,m++}else if(L.isPointLight){const q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),q.distance=L.distance,q.decay=L.decay,L.castShadow){const Q=L.shadow,H=t.get(L);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,H.shadowCameraNear=Q.camera.near,H.shadowCameraFar=Q.camera.far,r.pointShadow[g]=H,r.pointShadowMap[g]=re,r.pointShadowMatrix[g]=L.shadow.matrix,x++}r.point[g]=q,g++}else if(L.isHemisphereLight){const q=e.get(L);q.skyColor.copy(L.color).multiplyScalar(z),q.groundColor.copy(L.groundColor).multiplyScalar(z),r.hemi[p]=q,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=be.LTC_FLOAT_1,r.rectAreaLTC2=be.LTC_FLOAT_2):(r.rectAreaLTC1=be.LTC_HALF_1,r.rectAreaLTC2=be.LTC_HALF_2)),r.ambient[0]=u,r.ambient[1]=d,r.ambient[2]=f;const k=r.hash;(k.directionalLength!==h||k.pointLength!==g||k.spotLength!==v||k.rectAreaLength!==m||k.hemiLength!==p||k.numDirectionalShadows!==E||k.numPointShadows!==x||k.numSpotShadows!==y||k.numSpotMaps!==R||k.numLightProbes!==A)&&(r.directional.length=h,r.spot.length=v,r.rectArea.length=m,r.point.length=g,r.hemi.length=p,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=x,r.pointShadowMap.length=x,r.spotShadow.length=y,r.spotShadowMap.length=y,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=x,r.spotLightMatrix.length=y+R-P,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=A,k.directionalLength=h,k.pointLength=g,k.spotLength=v,k.rectAreaLength=m,k.hemiLength=p,k.numDirectionalShadows=E,k.numPointShadows=x,k.numSpotShadows=y,k.numSpotMaps=R,k.numLightProbes=A,r.version=bA++)}function l(c,u){let d=0,f=0,h=0,g=0,v=0;const m=u.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){const x=c[p];if(x.isDirectionalLight){const y=r.directional[d];y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),d++}else if(x.isSpotLight){const y=r.spot[h];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),h++}else if(x.isRectAreaLight){const y=r.rectArea[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),s.identity(),o.copy(x.matrixWorld),o.premultiply(m),s.extractRotation(o),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(s),y.halfHeight.applyMatrix4(s),g++}else if(x.isPointLight){const y=r.point[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const y=r.hemi[v];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:r}}function Tp(n){const e=new yA(n),t=[],r=[];function i(u){c.camera=u,t.length=0,r.length=0}function o(u){t.push(u)}function s(u){r.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:s}}function xA(n){let e=new WeakMap;function t(i,o=0){const s=e.get(i);let a;return s===void 0?(a=new Tp(n),e.set(i,[a])):o>=s.length?(a=new Tp(n),s.push(a)):a=s[o],a}function r(){e=new WeakMap}return{get:t,dispose:r}}const SA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wA=`uniform sampler2D shadow_pass;
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
}`;function MA(n,e,t){let r=new Rd;const i=new $e,o=new $e,s=new ht,a=new xM({depthPacking:fw}),l=new SM,c={},u=t.maxTextureSize,d={[Ur]:yn,[yn]:Ur,[sr]:sr},f=new bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:SA,fragmentShader:wA}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const g=new pr;g.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new bn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yg;let p=this.type;this.render=function(P,A,k){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const M=n.getRenderTarget(),w=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),O=n.state;O.setBlending(hi),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const z=p!==Cr&&this.type===Cr,ee=p===Cr&&this.type!==Cr;for(let re=0,q=P.length;re<q;re++){const Q=P[re],H=Q.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const de=H.getFrameExtents();if(i.multiply(de),o.copy(H.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(o.x=Math.floor(u/de.x),i.x=o.x*de.x,H.mapSize.x=o.x),i.y>u&&(o.y=Math.floor(u/de.y),i.y=o.y*de.y,H.mapSize.y=o.y)),H.map===null||z===!0||ee===!0){const _e=this.type!==Cr?{minFilter:hn,magFilter:hn}:{};H.map!==null&&H.map.dispose(),H.map=new Gi(i.x,i.y,_e),H.map.texture.name=Q.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const pe=H.getViewportCount();for(let _e=0;_e<pe;_e++){const Le=H.getViewport(_e);s.set(o.x*Le.x,o.y*Le.y,o.x*Le.z,o.y*Le.w),O.viewport(s),H.updateMatrices(Q,_e),r=H.getFrustum(),y(A,k,H.camera,Q,this.type)}H.isPointLightShadow!==!0&&this.type===Cr&&E(H,k),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(M,w,L)};function E(P,A){const k=e.update(v);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,h.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Gi(i.x,i.y)),f.uniforms.shadow_pass.value=P.map.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(A,null,k,f,v,null),h.uniforms.shadow_pass.value=P.mapPass.texture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(A,null,k,h,v,null)}function x(P,A,k,M){let w=null;const L=k.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(L!==void 0)w=L;else if(w=k.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const O=w.uuid,z=A.uuid;let ee=c[O];ee===void 0&&(ee={},c[O]=ee);let re=ee[z];re===void 0&&(re=w.clone(),ee[z]=re,A.addEventListener("dispose",R)),w=re}if(w.visible=A.visible,w.wireframe=A.wireframe,M===Cr?w.side=A.shadowSide!==null?A.shadowSide:A.side:w.side=A.shadowSide!==null?A.shadowSide:d[A.side],w.alphaMap=A.alphaMap,w.alphaTest=A.alphaTest,w.map=A.map,w.clipShadows=A.clipShadows,w.clippingPlanes=A.clippingPlanes,w.clipIntersection=A.clipIntersection,w.displacementMap=A.displacementMap,w.displacementScale=A.displacementScale,w.displacementBias=A.displacementBias,w.wireframeLinewidth=A.wireframeLinewidth,w.linewidth=A.linewidth,k.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const O=n.properties.get(w);O.light=k}return w}function y(P,A,k,M,w){if(P.visible===!1)return;if(P.layers.test(A.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&w===Cr)&&(!P.frustumCulled||r.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,P.matrixWorld);const z=e.update(P),ee=P.material;if(Array.isArray(ee)){const re=z.groups;for(let q=0,Q=re.length;q<Q;q++){const H=re[q],de=ee[H.materialIndex];if(de&&de.visible){const pe=x(P,de,M,w);P.onBeforeShadow(n,P,A,k,z,pe,H),n.renderBufferDirect(k,null,z,pe,P,H),P.onAfterShadow(n,P,A,k,z,pe,H)}}}else if(ee.visible){const re=x(P,ee,M,w);P.onBeforeShadow(n,P,A,k,z,re,null),n.renderBufferDirect(k,null,z,re,P,null),P.onAfterShadow(n,P,A,k,z,re,null)}}const O=P.children;for(let z=0,ee=O.length;z<ee;z++)y(O[z],A,k,M,w)}function R(P){P.target.removeEventListener("dispose",R);for(const k in c){const M=c[k],w=P.target.uuid;w in M&&(M[w].dispose(),delete M[w])}}}const TA={[eu]:tu,[nu]:ou,[ru]:su,[Bo]:iu,[tu]:eu,[ou]:nu,[su]:ru,[iu]:Bo};function EA(n,e){function t(){let D=!1;const ye=new ht;let te=null;const ie=new ht(0,0,0,0);return{setMask:function(we){te!==we&&!D&&(n.colorMask(we,we,we,we),te=we)},setLocked:function(we){D=we},setClear:function(we,Se,Ke,Nt,Zt){Zt===!0&&(we*=Nt,Se*=Nt,Ke*=Nt),ye.set(we,Se,Ke,Nt),ie.equals(ye)===!1&&(n.clearColor(we,Se,Ke,Nt),ie.copy(ye))},reset:function(){D=!1,te=null,ie.set(-1,0,0,0)}}}function r(){let D=!1,ye=!1,te=null,ie=null,we=null;return{setReversed:function(Se){if(ye!==Se){const Ke=e.get("EXT_clip_control");ye?Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.ZERO_TO_ONE_EXT):Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.NEGATIVE_ONE_TO_ONE_EXT);const Nt=we;we=null,this.setClear(Nt)}ye=Se},getReversed:function(){return ye},setTest:function(Se){Se?me(n.DEPTH_TEST):Ie(n.DEPTH_TEST)},setMask:function(Se){te!==Se&&!D&&(n.depthMask(Se),te=Se)},setFunc:function(Se){if(ye&&(Se=TA[Se]),ie!==Se){switch(Se){case eu:n.depthFunc(n.NEVER);break;case tu:n.depthFunc(n.ALWAYS);break;case nu:n.depthFunc(n.LESS);break;case Bo:n.depthFunc(n.LEQUAL);break;case ru:n.depthFunc(n.EQUAL);break;case iu:n.depthFunc(n.GEQUAL);break;case ou:n.depthFunc(n.GREATER);break;case su:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ie=Se}},setLocked:function(Se){D=Se},setClear:function(Se){we!==Se&&(ye&&(Se=1-Se),n.clearDepth(Se),we=Se)},reset:function(){D=!1,te=null,ie=null,we=null,ye=!1}}}function i(){let D=!1,ye=null,te=null,ie=null,we=null,Se=null,Ke=null,Nt=null,Zt=null;return{setTest:function(bt){D||(bt?me(n.STENCIL_TEST):Ie(n.STENCIL_TEST))},setMask:function(bt){ye!==bt&&!D&&(n.stencilMask(bt),ye=bt)},setFunc:function(bt,Fn,vr){(te!==bt||ie!==Fn||we!==vr)&&(n.stencilFunc(bt,Fn,vr),te=bt,ie=Fn,we=vr)},setOp:function(bt,Fn,vr){(Se!==bt||Ke!==Fn||Nt!==vr)&&(n.stencilOp(bt,Fn,vr),Se=bt,Ke=Fn,Nt=vr)},setLocked:function(bt){D=bt},setClear:function(bt){Zt!==bt&&(n.clearStencil(bt),Zt=bt)},reset:function(){D=!1,ye=null,te=null,ie=null,we=null,Se=null,Ke=null,Nt=null,Zt=null}}}const o=new t,s=new r,a=new i,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,h=[],g=null,v=!1,m=null,p=null,E=null,x=null,y=null,R=null,P=null,A=new Xe(0,0,0),k=0,M=!1,w=null,L=null,O=null,z=null,ee=null;const re=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,Q=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(H)[1]),q=Q>=1):H.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),q=Q>=2);let de=null,pe={};const _e=n.getParameter(n.SCISSOR_BOX),Le=n.getParameter(n.VIEWPORT),ot=new ht().fromArray(_e),ne=new ht().fromArray(Le);function fe(D,ye,te,ie){const we=new Uint8Array(4),Se=n.createTexture();n.bindTexture(D,Se),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ke=0;Ke<te;Ke++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(ye,0,n.RGBA,1,1,ie,0,n.RGBA,n.UNSIGNED_BYTE,we):n.texImage2D(ye+Ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,we);return Se}const Me={};Me[n.TEXTURE_2D]=fe(n.TEXTURE_2D,n.TEXTURE_2D,1),Me[n.TEXTURE_CUBE_MAP]=fe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[n.TEXTURE_2D_ARRAY]=fe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Me[n.TEXTURE_3D]=fe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),me(n.DEPTH_TEST),s.setFunc(Bo),Z(!1),K(lh),me(n.CULL_FACE),_(hi);function me(D){u[D]!==!0&&(n.enable(D),u[D]=!0)}function Ie(D){u[D]!==!1&&(n.disable(D),u[D]=!1)}function Be(D,ye){return d[D]!==ye?(n.bindFramebuffer(D,ye),d[D]=ye,D===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ye),D===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ye),!0):!1}function Ve(D,ye){let te=h,ie=!1;if(D){te=f.get(ye),te===void 0&&(te=[],f.set(ye,te));const we=D.textures;if(te.length!==we.length||te[0]!==n.COLOR_ATTACHMENT0){for(let Se=0,Ke=we.length;Se<Ke;Se++)te[Se]=n.COLOR_ATTACHMENT0+Se;te.length=we.length,ie=!0}}else te[0]!==n.BACK&&(te[0]=n.BACK,ie=!0);ie&&n.drawBuffers(te)}function xt(D){return g!==D?(n.useProgram(D),g=D,!0):!1}const tt={[Bi]:n.FUNC_ADD,[OS]:n.FUNC_SUBTRACT,[BS]:n.FUNC_REVERSE_SUBTRACT};tt[US]=n.MIN,tt[FS]=n.MAX;const C={[zS]:n.ZERO,[HS]:n.ONE,[VS]:n.SRC_COLOR,[Jc]:n.SRC_ALPHA,[KS]:n.SRC_ALPHA_SATURATE,[jS]:n.DST_COLOR,[$S]:n.DST_ALPHA,[GS]:n.ONE_MINUS_SRC_COLOR,[Qc]:n.ONE_MINUS_SRC_ALPHA,[XS]:n.ONE_MINUS_DST_COLOR,[WS]:n.ONE_MINUS_DST_ALPHA,[YS]:n.CONSTANT_COLOR,[qS]:n.ONE_MINUS_CONSTANT_COLOR,[ZS]:n.CONSTANT_ALPHA,[JS]:n.ONE_MINUS_CONSTANT_ALPHA};function _(D,ye,te,ie,we,Se,Ke,Nt,Zt,bt){if(D===hi){v===!0&&(Ie(n.BLEND),v=!1);return}if(v===!1&&(me(n.BLEND),v=!0),D!==NS){if(D!==m||bt!==M){if((p!==Bi||y!==Bi)&&(n.blendEquation(n.FUNC_ADD),p=Bi,y=Bi),bt)switch(D){case Io:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ch:n.blendFunc(n.ONE,n.ONE);break;case uh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case dh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Io:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ch:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case uh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case dh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}E=null,x=null,R=null,P=null,A.set(0,0,0),k=0,m=D,M=bt}return}we=we||ye,Se=Se||te,Ke=Ke||ie,(ye!==p||we!==y)&&(n.blendEquationSeparate(tt[ye],tt[we]),p=ye,y=we),(te!==E||ie!==x||Se!==R||Ke!==P)&&(n.blendFuncSeparate(C[te],C[ie],C[Se],C[Ke]),E=te,x=ie,R=Se,P=Ke),(Nt.equals(A)===!1||Zt!==k)&&(n.blendColor(Nt.r,Nt.g,Nt.b,Zt),A.copy(Nt),k=Zt),m=D,M=!1}function X(D,ye){D.side===sr?Ie(n.CULL_FACE):me(n.CULL_FACE);let te=D.side===yn;ye&&(te=!te),Z(te),D.blending===Io&&D.transparent===!1?_(hi):_(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),o.setMask(D.colorWrite);const ie=D.stencilWrite;a.setTest(ie),ie&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),se(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?me(n.SAMPLE_ALPHA_TO_COVERAGE):Ie(n.SAMPLE_ALPHA_TO_COVERAGE)}function Z(D){w!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),w=D)}function K(D){D!==IS?(me(n.CULL_FACE),D!==L&&(D===lh?n.cullFace(n.BACK):D===kS?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ie(n.CULL_FACE),L=D}function $(D){D!==O&&(q&&n.lineWidth(D),O=D)}function se(D,ye,te){D?(me(n.POLYGON_OFFSET_FILL),(z!==ye||ee!==te)&&(n.polygonOffset(ye,te),z=ye,ee=te)):Ie(n.POLYGON_OFFSET_FILL)}function Y(D){D?me(n.SCISSOR_TEST):Ie(n.SCISSOR_TEST)}function S(D){D===void 0&&(D=n.TEXTURE0+re-1),de!==D&&(n.activeTexture(D),de=D)}function b(D,ye,te){te===void 0&&(de===null?te=n.TEXTURE0+re-1:te=de);let ie=pe[te];ie===void 0&&(ie={type:void 0,texture:void 0},pe[te]=ie),(ie.type!==D||ie.texture!==ye)&&(de!==te&&(n.activeTexture(te),de=te),n.bindTexture(D,ye||Me[D]),ie.type=D,ie.texture=ye)}function I(){const D=pe[de];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function B(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function G(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function V(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ae(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Fe(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function De(D){ot.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),ot.copy(D))}function Ee(D){ne.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),ne.copy(D))}function Ue(D,ye){let te=c.get(ye);te===void 0&&(te=new WeakMap,c.set(ye,te));let ie=te.get(D);ie===void 0&&(ie=n.getUniformBlockIndex(ye,D.name),te.set(D,ie))}function Ne(D,ye){const ie=c.get(ye).get(D);l.get(ye)!==ie&&(n.uniformBlockBinding(ye,ie,D.__bindingPointIndex),l.set(ye,ie))}function vt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},de=null,pe={},d={},f=new WeakMap,h=[],g=null,v=!1,m=null,p=null,E=null,x=null,y=null,R=null,P=null,A=new Xe(0,0,0),k=0,M=!1,w=null,L=null,O=null,z=null,ee=null,ot.set(0,0,n.canvas.width,n.canvas.height),ne.set(0,0,n.canvas.width,n.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:me,disable:Ie,bindFramebuffer:Be,drawBuffers:Ve,useProgram:xt,setBlending:_,setMaterial:X,setFlipSided:Z,setCullFace:K,setLineWidth:$,setPolygonOffset:se,setScissorTest:Y,activeTexture:S,bindTexture:b,unbindTexture:I,compressedTexImage2D:B,compressedTexImage3D:G,texImage2D:ve,texImage3D:Ae,updateUBOMapping:Ue,uniformBlockBinding:Ne,texStorage2D:Fe,texStorage3D:oe,texSubImage2D:V,texSubImage3D:ce,compressedTexSubImage2D:ae,compressedTexSubImage3D:le,scissor:De,viewport:Ee,reset:vt}}function CA(n,e,t,r,i,o,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $e,u=new WeakMap;let d;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,b){return h?new OffscreenCanvas(S,b):Js("canvas")}function v(S,b,I){let B=1;const G=Y(S);if((G.width>I||G.height>I)&&(B=I/Math.max(G.width,G.height)),B<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const V=Math.floor(B*G.width),ce=Math.floor(B*G.height);d===void 0&&(d=g(V,ce));const ae=b?g(V,ce):d;return ae.width=V,ae.height=ce,ae.getContext("2d").drawImage(S,0,0,V,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+G.width+"x"+G.height+") to ("+V+"x"+ce+")."),ae}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+G.width+"x"+G.height+")."),S;return S}function m(S){return S.generateMipmaps}function p(S){n.generateMipmap(S)}function E(S){return S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?n.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(S,b,I,B,G=!1){if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let V=b;if(b===n.RED&&(I===n.FLOAT&&(V=n.R32F),I===n.HALF_FLOAT&&(V=n.R16F),I===n.UNSIGNED_BYTE&&(V=n.R8)),b===n.RED_INTEGER&&(I===n.UNSIGNED_BYTE&&(V=n.R8UI),I===n.UNSIGNED_SHORT&&(V=n.R16UI),I===n.UNSIGNED_INT&&(V=n.R32UI),I===n.BYTE&&(V=n.R8I),I===n.SHORT&&(V=n.R16I),I===n.INT&&(V=n.R32I)),b===n.RG&&(I===n.FLOAT&&(V=n.RG32F),I===n.HALF_FLOAT&&(V=n.RG16F),I===n.UNSIGNED_BYTE&&(V=n.RG8)),b===n.RG_INTEGER&&(I===n.UNSIGNED_BYTE&&(V=n.RG8UI),I===n.UNSIGNED_SHORT&&(V=n.RG16UI),I===n.UNSIGNED_INT&&(V=n.RG32UI),I===n.BYTE&&(V=n.RG8I),I===n.SHORT&&(V=n.RG16I),I===n.INT&&(V=n.RG32I)),b===n.RGB_INTEGER&&(I===n.UNSIGNED_BYTE&&(V=n.RGB8UI),I===n.UNSIGNED_SHORT&&(V=n.RGB16UI),I===n.UNSIGNED_INT&&(V=n.RGB32UI),I===n.BYTE&&(V=n.RGB8I),I===n.SHORT&&(V=n.RGB16I),I===n.INT&&(V=n.RGB32I)),b===n.RGBA_INTEGER&&(I===n.UNSIGNED_BYTE&&(V=n.RGBA8UI),I===n.UNSIGNED_SHORT&&(V=n.RGBA16UI),I===n.UNSIGNED_INT&&(V=n.RGBA32UI),I===n.BYTE&&(V=n.RGBA8I),I===n.SHORT&&(V=n.RGBA16I),I===n.INT&&(V=n.RGBA32I)),b===n.RGB&&I===n.UNSIGNED_INT_5_9_9_9_REV&&(V=n.RGB9_E5),b===n.RGBA){const ce=G?fl:st.getTransfer(B);I===n.FLOAT&&(V=n.RGBA32F),I===n.HALF_FLOAT&&(V=n.RGBA16F),I===n.UNSIGNED_BYTE&&(V=ce===St?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT_4_4_4_4&&(V=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(V=n.RGB5_A1)}return(V===n.R16F||V===n.R32F||V===n.RG16F||V===n.RG32F||V===n.RGBA16F||V===n.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function y(S,b){let I;return S?b===null||b===Vi||b===Ho?I=n.DEPTH24_STENCIL8:b===Zn?I=n.DEPTH32F_STENCIL8:b===Ys&&(I=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Vi||b===Ho?I=n.DEPTH_COMPONENT24:b===Zn?I=n.DEPTH_COMPONENT32F:b===Ys&&(I=n.DEPTH_COMPONENT16),I}function R(S,b){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==hn&&S.minFilter!==En?Math.log2(Math.max(b.width,b.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?b.mipmaps.length:1}function P(S){const b=S.target;b.removeEventListener("dispose",P),k(b),b.isVideoTexture&&u.delete(b)}function A(S){const b=S.target;b.removeEventListener("dispose",A),w(b)}function k(S){const b=r.get(S);if(b.__webglInit===void 0)return;const I=S.source,B=f.get(I);if(B){const G=B[b.__cacheKey];G.usedTimes--,G.usedTimes===0&&M(S),Object.keys(B).length===0&&f.delete(I)}r.remove(S)}function M(S){const b=r.get(S);n.deleteTexture(b.__webglTexture);const I=S.source,B=f.get(I);delete B[b.__cacheKey],s.memory.textures--}function w(S){const b=r.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),r.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let B=0;B<6;B++){if(Array.isArray(b.__webglFramebuffer[B]))for(let G=0;G<b.__webglFramebuffer[B].length;G++)n.deleteFramebuffer(b.__webglFramebuffer[B][G]);else n.deleteFramebuffer(b.__webglFramebuffer[B]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[B])}else{if(Array.isArray(b.__webglFramebuffer))for(let B=0;B<b.__webglFramebuffer.length;B++)n.deleteFramebuffer(b.__webglFramebuffer[B]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let B=0;B<b.__webglColorRenderbuffer.length;B++)b.__webglColorRenderbuffer[B]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[B]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const I=S.textures;for(let B=0,G=I.length;B<G;B++){const V=r.get(I[B]);V.__webglTexture&&(n.deleteTexture(V.__webglTexture),s.memory.textures--),r.remove(I[B])}r.remove(S)}let L=0;function O(){L=0}function z(){const S=L;return S>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+i.maxTextures),L+=1,S}function ee(S){const b=[];return b.push(S.wrapS),b.push(S.wrapT),b.push(S.wrapR||0),b.push(S.magFilter),b.push(S.minFilter),b.push(S.anisotropy),b.push(S.internalFormat),b.push(S.format),b.push(S.type),b.push(S.generateMipmaps),b.push(S.premultiplyAlpha),b.push(S.flipY),b.push(S.unpackAlignment),b.push(S.colorSpace),b.join()}function re(S,b){const I=r.get(S);if(S.isVideoTexture&&$(S),S.isRenderTargetTexture===!1&&S.version>0&&I.__version!==S.version){const B=S.image;if(B===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(B.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(I,S,b);return}}t.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+b)}function q(S,b){const I=r.get(S);if(S.version>0&&I.__version!==S.version){ne(I,S,b);return}t.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+b)}function Q(S,b){const I=r.get(S);if(S.version>0&&I.__version!==S.version){ne(I,S,b);return}t.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+b)}function H(S,b){const I=r.get(S);if(S.version>0&&I.__version!==S.version){fe(I,S,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+b)}const de={[zo]:n.REPEAT,[ai]:n.CLAMP_TO_EDGE,[dl]:n.MIRRORED_REPEAT},pe={[hn]:n.NEAREST,[wg]:n.NEAREST_MIPMAP_NEAREST,[vs]:n.NEAREST_MIPMAP_LINEAR,[En]:n.LINEAR,[qa]:n.LINEAR_MIPMAP_NEAREST,[Dr]:n.LINEAR_MIPMAP_LINEAR},_e={[pw]:n.NEVER,[yw]:n.ALWAYS,[mw]:n.LESS,[Ng]:n.LEQUAL,[gw]:n.EQUAL,[_w]:n.GEQUAL,[vw]:n.GREATER,[bw]:n.NOTEQUAL};function Le(S,b){if(b.type===Zn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===En||b.magFilter===qa||b.magFilter===vs||b.magFilter===Dr||b.minFilter===En||b.minFilter===qa||b.minFilter===vs||b.minFilter===Dr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,de[b.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,de[b.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,de[b.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,pe[b.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,pe[b.minFilter]),b.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,_e[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===hn||b.minFilter!==vs&&b.minFilter!==Dr||b.type===Zn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");n.texParameterf(S,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function ot(S,b){let I=!1;S.__webglInit===void 0&&(S.__webglInit=!0,b.addEventListener("dispose",P));const B=b.source;let G=f.get(B);G===void 0&&(G={},f.set(B,G));const V=ee(b);if(V!==S.__cacheKey){G[V]===void 0&&(G[V]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,I=!0),G[V].usedTimes++;const ce=G[S.__cacheKey];ce!==void 0&&(G[S.__cacheKey].usedTimes--,ce.usedTimes===0&&M(b)),S.__cacheKey=V,S.__webglTexture=G[V].texture}return I}function ne(S,b,I){let B=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(B=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(B=n.TEXTURE_3D);const G=ot(S,b),V=b.source;t.bindTexture(B,S.__webglTexture,n.TEXTURE0+I);const ce=r.get(V);if(V.version!==ce.__version||G===!0){t.activeTexture(n.TEXTURE0+I);const ae=st.getPrimaries(st.workingColorSpace),le=b.colorSpace===oi?null:st.getPrimaries(b.colorSpace),Fe=b.colorSpace===oi||ae===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let oe=v(b.image,!1,i.maxTextureSize);oe=se(b,oe);const ve=o.convert(b.format,b.colorSpace),Ae=o.convert(b.type);let De=x(b.internalFormat,ve,Ae,b.colorSpace,b.isVideoTexture);Le(B,b);let Ee;const Ue=b.mipmaps,Ne=b.isVideoTexture!==!0,vt=ce.__version===void 0||G===!0,D=V.dataReady,ye=R(b,oe);if(b.isDepthTexture)De=y(b.format===Vo,b.type),vt&&(Ne?t.texStorage2D(n.TEXTURE_2D,1,De,oe.width,oe.height):t.texImage2D(n.TEXTURE_2D,0,De,oe.width,oe.height,0,ve,Ae,null));else if(b.isDataTexture)if(Ue.length>0){Ne&&vt&&t.texStorage2D(n.TEXTURE_2D,ye,De,Ue[0].width,Ue[0].height);for(let te=0,ie=Ue.length;te<ie;te++)Ee=Ue[te],Ne?D&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,Ee.width,Ee.height,ve,Ae,Ee.data):t.texImage2D(n.TEXTURE_2D,te,De,Ee.width,Ee.height,0,ve,Ae,Ee.data);b.generateMipmaps=!1}else Ne?(vt&&t.texStorage2D(n.TEXTURE_2D,ye,De,oe.width,oe.height),D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,oe.width,oe.height,ve,Ae,oe.data)):t.texImage2D(n.TEXTURE_2D,0,De,oe.width,oe.height,0,ve,Ae,oe.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ne&&vt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,De,Ue[0].width,Ue[0].height,oe.depth);for(let te=0,ie=Ue.length;te<ie;te++)if(Ee=Ue[te],b.format!==Dn)if(ve!==null)if(Ne){if(D)if(b.layerUpdates.size>0){const we=tp(Ee.width,Ee.height,b.format,b.type);for(const Se of b.layerUpdates){const Ke=Ee.data.subarray(Se*we/Ee.data.BYTES_PER_ELEMENT,(Se+1)*we/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,Se,Ee.width,Ee.height,1,ve,Ke)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,Ee.width,Ee.height,oe.depth,ve,Ee.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,De,Ee.width,Ee.height,oe.depth,0,Ee.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?D&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,Ee.width,Ee.height,oe.depth,ve,Ae,Ee.data):t.texImage3D(n.TEXTURE_2D_ARRAY,te,De,Ee.width,Ee.height,oe.depth,0,ve,Ae,Ee.data)}else{Ne&&vt&&t.texStorage2D(n.TEXTURE_2D,ye,De,Ue[0].width,Ue[0].height);for(let te=0,ie=Ue.length;te<ie;te++)Ee=Ue[te],b.format!==Dn?ve!==null?Ne?D&&t.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,Ee.width,Ee.height,ve,Ee.data):t.compressedTexImage2D(n.TEXTURE_2D,te,De,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?D&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,Ee.width,Ee.height,ve,Ae,Ee.data):t.texImage2D(n.TEXTURE_2D,te,De,Ee.width,Ee.height,0,ve,Ae,Ee.data)}else if(b.isDataArrayTexture)if(Ne){if(vt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,De,oe.width,oe.height,oe.depth),D)if(b.layerUpdates.size>0){const te=tp(oe.width,oe.height,b.format,b.type);for(const ie of b.layerUpdates){const we=oe.data.subarray(ie*te/oe.data.BYTES_PER_ELEMENT,(ie+1)*te/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ie,oe.width,oe.height,1,ve,Ae,we)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,ve,Ae,oe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,De,oe.width,oe.height,oe.depth,0,ve,Ae,oe.data);else if(b.isData3DTexture)Ne?(vt&&t.texStorage3D(n.TEXTURE_3D,ye,De,oe.width,oe.height,oe.depth),D&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,ve,Ae,oe.data)):t.texImage3D(n.TEXTURE_3D,0,De,oe.width,oe.height,oe.depth,0,ve,Ae,oe.data);else if(b.isFramebufferTexture){if(vt)if(Ne)t.texStorage2D(n.TEXTURE_2D,ye,De,oe.width,oe.height);else{let te=oe.width,ie=oe.height;for(let we=0;we<ye;we++)t.texImage2D(n.TEXTURE_2D,we,De,te,ie,0,ve,Ae,null),te>>=1,ie>>=1}}else if(Ue.length>0){if(Ne&&vt){const te=Y(Ue[0]);t.texStorage2D(n.TEXTURE_2D,ye,De,te.width,te.height)}for(let te=0,ie=Ue.length;te<ie;te++)Ee=Ue[te],Ne?D&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,ve,Ae,Ee):t.texImage2D(n.TEXTURE_2D,te,De,ve,Ae,Ee);b.generateMipmaps=!1}else if(Ne){if(vt){const te=Y(oe);t.texStorage2D(n.TEXTURE_2D,ye,De,te.width,te.height)}D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve,Ae,oe)}else t.texImage2D(n.TEXTURE_2D,0,De,ve,Ae,oe);m(b)&&p(B),ce.__version=V.version,b.onUpdate&&b.onUpdate(b)}S.__version=b.version}function fe(S,b,I){if(b.image.length!==6)return;const B=ot(S,b),G=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+I);const V=r.get(G);if(G.version!==V.__version||B===!0){t.activeTexture(n.TEXTURE0+I);const ce=st.getPrimaries(st.workingColorSpace),ae=b.colorSpace===oi?null:st.getPrimaries(b.colorSpace),le=b.colorSpace===oi||ce===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const Fe=b.isCompressedTexture||b.image[0].isCompressedTexture,oe=b.image[0]&&b.image[0].isDataTexture,ve=[];for(let ie=0;ie<6;ie++)!Fe&&!oe?ve[ie]=v(b.image[ie],!0,i.maxCubemapSize):ve[ie]=oe?b.image[ie].image:b.image[ie],ve[ie]=se(b,ve[ie]);const Ae=ve[0],De=o.convert(b.format,b.colorSpace),Ee=o.convert(b.type),Ue=x(b.internalFormat,De,Ee,b.colorSpace),Ne=b.isVideoTexture!==!0,vt=V.__version===void 0||B===!0,D=G.dataReady;let ye=R(b,Ae);Le(n.TEXTURE_CUBE_MAP,b);let te;if(Fe){Ne&&vt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,Ue,Ae.width,Ae.height);for(let ie=0;ie<6;ie++){te=ve[ie].mipmaps;for(let we=0;we<te.length;we++){const Se=te[we];b.format!==Dn?De!==null?Ne?D&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we,0,0,Se.width,Se.height,De,Se.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we,Ue,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we,0,0,Se.width,Se.height,De,Ee,Se.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we,Ue,Se.width,Se.height,0,De,Ee,Se.data)}}}else{if(te=b.mipmaps,Ne&&vt){te.length>0&&ye++;const ie=Y(ve[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,Ue,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(oe){Ne?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,ve[ie].width,ve[ie].height,De,Ee,ve[ie].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ue,ve[ie].width,ve[ie].height,0,De,Ee,ve[ie].data);for(let we=0;we<te.length;we++){const Ke=te[we].image[ie].image;Ne?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we+1,0,0,Ke.width,Ke.height,De,Ee,Ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we+1,Ue,Ke.width,Ke.height,0,De,Ee,Ke.data)}}else{Ne?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,De,Ee,ve[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ue,De,Ee,ve[ie]);for(let we=0;we<te.length;we++){const Se=te[we];Ne?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we+1,0,0,De,Ee,Se.image[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we+1,Ue,De,Ee,Se.image[ie])}}}m(b)&&p(n.TEXTURE_CUBE_MAP),V.__version=G.version,b.onUpdate&&b.onUpdate(b)}S.__version=b.version}function Me(S,b,I,B,G,V){const ce=o.convert(I.format,I.colorSpace),ae=o.convert(I.type),le=x(I.internalFormat,ce,ae,I.colorSpace),Fe=r.get(b),oe=r.get(I);if(oe.__renderTarget=b,!Fe.__hasExternalTextures){const ve=Math.max(1,b.width>>V),Ae=Math.max(1,b.height>>V);G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?t.texImage3D(G,V,le,ve,Ae,b.depth,0,ce,ae,null):t.texImage2D(G,V,le,ve,Ae,0,ce,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),K(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,B,G,oe.__webglTexture,0,Z(b)):(G===n.TEXTURE_2D||G>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&G<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,B,G,oe.__webglTexture,V),t.bindFramebuffer(n.FRAMEBUFFER,null)}function me(S,b,I){if(n.bindRenderbuffer(n.RENDERBUFFER,S),b.depthBuffer){const B=b.depthTexture,G=B&&B.isDepthTexture?B.type:null,V=y(b.stencilBuffer,G),ce=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=Z(b);K(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,V,b.width,b.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,V,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,V,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,S)}else{const B=b.textures;for(let G=0;G<B.length;G++){const V=B[G],ce=o.convert(V.format,V.colorSpace),ae=o.convert(V.type),le=x(V.internalFormat,ce,ae,V.colorSpace),Fe=Z(b);I&&K(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,le,b.width,b.height):K(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Fe,le,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,le,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ie(S,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const B=r.get(b.depthTexture);B.__renderTarget=b,(!B.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),re(b.depthTexture,0);const G=B.__webglTexture,V=Z(b);if(b.depthTexture.format===ko)K(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,G,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,G,0);else if(b.depthTexture.format===Vo)K(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,G,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,G,0);else throw new Error("Unknown depthTexture format")}function Be(S){const b=r.get(S),I=S.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==S.depthTexture){const B=S.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),B){const G=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,B.removeEventListener("dispose",G)};B.addEventListener("dispose",G),b.__depthDisposeCallback=G}b.__boundDepthTexture=B}if(S.depthTexture&&!b.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");Ie(b.__webglFramebuffer,S)}else if(I){b.__webglDepthbuffer=[];for(let B=0;B<6;B++)if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[B]),b.__webglDepthbuffer[B]===void 0)b.__webglDepthbuffer[B]=n.createRenderbuffer(),me(b.__webglDepthbuffer[B],S,!1);else{const G=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=b.__webglDepthbuffer[B];n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,G,n.RENDERBUFFER,V)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),me(b.__webglDepthbuffer,S,!1);else{const B=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,B,n.RENDERBUFFER,G)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ve(S,b,I){const B=r.get(S);b!==void 0&&Me(B.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),I!==void 0&&Be(S)}function xt(S){const b=S.texture,I=r.get(S),B=r.get(b);S.addEventListener("dispose",A);const G=S.textures,V=S.isWebGLCubeRenderTarget===!0,ce=G.length>1;if(ce||(B.__webglTexture===void 0&&(B.__webglTexture=n.createTexture()),B.__version=b.version,s.memory.textures++),V){I.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(b.mipmaps&&b.mipmaps.length>0){I.__webglFramebuffer[ae]=[];for(let le=0;le<b.mipmaps.length;le++)I.__webglFramebuffer[ae][le]=n.createFramebuffer()}else I.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){I.__webglFramebuffer=[];for(let ae=0;ae<b.mipmaps.length;ae++)I.__webglFramebuffer[ae]=n.createFramebuffer()}else I.__webglFramebuffer=n.createFramebuffer();if(ce)for(let ae=0,le=G.length;ae<le;ae++){const Fe=r.get(G[ae]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=n.createTexture(),s.memory.textures++)}if(S.samples>0&&K(S)===!1){I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let ae=0;ae<G.length;ae++){const le=G[ae];I.__webglColorRenderbuffer[ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[ae]);const Fe=o.convert(le.format,le.colorSpace),oe=o.convert(le.type),ve=x(le.internalFormat,Fe,oe,le.colorSpace,S.isXRRenderTarget===!0),Ae=Z(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,ve,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,I.__webglColorRenderbuffer[ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),me(I.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(V){t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture),Le(n.TEXTURE_CUBE_MAP,b);for(let ae=0;ae<6;ae++)if(b.mipmaps&&b.mipmaps.length>0)for(let le=0;le<b.mipmaps.length;le++)Me(I.__webglFramebuffer[ae][le],S,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,le);else Me(I.__webglFramebuffer[ae],S,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(b)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){for(let ae=0,le=G.length;ae<le;ae++){const Fe=G[ae],oe=r.get(Fe);t.bindTexture(n.TEXTURE_2D,oe.__webglTexture),Le(n.TEXTURE_2D,Fe),Me(I.__webglFramebuffer,S,Fe,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,0),m(Fe)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ae=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,B.__webglTexture),Le(ae,b),b.mipmaps&&b.mipmaps.length>0)for(let le=0;le<b.mipmaps.length;le++)Me(I.__webglFramebuffer[le],S,b,n.COLOR_ATTACHMENT0,ae,le);else Me(I.__webglFramebuffer,S,b,n.COLOR_ATTACHMENT0,ae,0);m(b)&&p(ae),t.unbindTexture()}S.depthBuffer&&Be(S)}function tt(S){const b=S.textures;for(let I=0,B=b.length;I<B;I++){const G=b[I];if(m(G)){const V=E(S),ce=r.get(G).__webglTexture;t.bindTexture(V,ce),p(V),t.unbindTexture()}}}const C=[],_=[];function X(S){if(S.samples>0){if(K(S)===!1){const b=S.textures,I=S.width,B=S.height;let G=n.COLOR_BUFFER_BIT;const V=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=r.get(S),ae=b.length>1;if(ae)for(let le=0;le<b.length;le++)t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let le=0;le<b.length;le++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(G|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(G|=n.STENCIL_BUFFER_BIT)),ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ce.__webglColorRenderbuffer[le]);const Fe=r.get(b[le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Fe,0)}n.blitFramebuffer(0,0,I,B,0,0,I,B,G,n.NEAREST),l===!0&&(C.length=0,_.length=0,C.push(n.COLOR_ATTACHMENT0+le),S.depthBuffer&&S.resolveDepthBuffer===!1&&(C.push(V),_.push(V),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,_)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,C))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ae)for(let le=0;le<b.length;le++){t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,ce.__webglColorRenderbuffer[le]);const Fe=r.get(b[le]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,Fe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const b=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function Z(S){return Math.min(i.maxSamples,S.samples)}function K(S){const b=r.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function $(S){const b=s.render.frame;u.get(S)!==b&&(u.set(S,b),S.update())}function se(S,b){const I=S.colorSpace,B=S.format,G=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||I!==mn&&I!==oi&&(st.getTransfer(I)===St?(B!==Dn||G!==Fr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),b}function Y(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=O,this.setTexture2D=re,this.setTexture2DArray=q,this.setTexture3D=Q,this.setTextureCube=H,this.rebindTextures=Ve,this.setupRenderTarget=xt,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=K}function AA(n,e){function t(r,i=oi){let o;const s=st.getTransfer(i);if(r===Fr)return n.UNSIGNED_BYTE;if(r===yd)return n.UNSIGNED_SHORT_4_4_4_4;if(r===xd)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Eg)return n.UNSIGNED_INT_5_9_9_9_REV;if(r===Mg)return n.BYTE;if(r===Tg)return n.SHORT;if(r===Ys)return n.UNSIGNED_SHORT;if(r===_d)return n.INT;if(r===Vi)return n.UNSIGNED_INT;if(r===Zn)return n.FLOAT;if(r===ra)return n.HALF_FLOAT;if(r===Cg)return n.ALPHA;if(r===Ag)return n.RGB;if(r===Dn)return n.RGBA;if(r===Rg)return n.LUMINANCE;if(r===Pg)return n.LUMINANCE_ALPHA;if(r===ko)return n.DEPTH_COMPONENT;if(r===Vo)return n.DEPTH_STENCIL;if(r===Sd)return n.RED;if(r===wd)return n.RED_INTEGER;if(r===Lg)return n.RG;if(r===Md)return n.RG_INTEGER;if(r===Td)return n.RGBA_INTEGER;if(r===Za||r===Ja||r===Qa||r===el)if(s===St)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Za)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ja)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Qa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===el)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Za)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ja)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Qa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===el)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===cu||r===uu||r===du||r===fu)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===cu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===uu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===du)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===fu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===hu||r===pu||r===mu)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===hu||r===pu)return s===St?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===mu)return s===St?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===gu||r===vu||r===bu||r===_u||r===yu||r===xu||r===Su||r===wu||r===Mu||r===Tu||r===Eu||r===Cu||r===Au||r===Ru)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===gu)return s===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===vu)return s===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===bu)return s===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===_u)return s===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===yu)return s===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===xu)return s===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Su)return s===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===wu)return s===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Mu)return s===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Tu)return s===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Eu)return s===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Cu)return s===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Au)return s===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ru)return s===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===tl||r===Pu||r===Lu)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===tl)return s===St?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Pu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Lu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ig||r===Iu||r===ku||r===Du)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===tl)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Iu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ku)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Du)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ho?n.UNSIGNED_INT_24_8:n[r]!==void 0?n[r]:null}return{convert:t}}const RA={type:"move"};class Pc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let i=null,o=null,s=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,r),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,g=.005;c.inputState.pinching&&f>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,r),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,r),i===null&&o!==null&&(i=o),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(RA)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Fi;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const PA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,LA=`
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

}`;class IA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const i=new jt,o=e.properties.get(i);o.__webglTexture=t.texture,(t.depthNear!==r.depthNear||t.depthFar!==r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new bi({vertexShader:PA,fragmentShader:LA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new bn(new Il(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kA extends ji{constructor(e,t){super();const r=this;let i=null,o=1,s=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,g=null;const v=new IA,m=t.getContextAttributes();let p=null,E=null;const x=[],y=[],R=new $e;let P=null;const A=new dn;A.viewport=new ht;const k=new dn;k.viewport=new ht;const M=[A,k],w=new $M;let L=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let fe=x[ne];return fe===void 0&&(fe=new Pc,x[ne]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ne){let fe=x[ne];return fe===void 0&&(fe=new Pc,x[ne]=fe),fe.getGripSpace()},this.getHand=function(ne){let fe=x[ne];return fe===void 0&&(fe=new Pc,x[ne]=fe),fe.getHandSpace()};function z(ne){const fe=y.indexOf(ne.inputSource);if(fe===-1)return;const Me=x[fe];Me!==void 0&&(Me.update(ne.inputSource,ne.frame,c||s),Me.dispatchEvent({type:ne.type,data:ne.inputSource}))}function ee(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",ee),i.removeEventListener("inputsourceschange",re);for(let ne=0;ne<x.length;ne++){const fe=y[ne];fe!==null&&(y[ne]=null,x[ne].disconnect(fe))}L=null,O=null,v.reset(),e.setRenderTarget(p),h=null,f=null,d=null,i=null,E=null,ot.stop(),r.isPresenting=!1,e.setPixelRatio(P),e.setSize(R.width,R.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){o=ne,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(ne){if(i=ne,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",ee),i.addEventListener("inputsourceschange",re),m.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(R),i.enabledFeatures!==void 0&&i.enabledFeatures.includes("layers")){let Me=null,me=null,Ie=null;m.depth&&(Ie=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=m.stencil?Vo:ko,me=m.stencil?Ho:Vi);const Be={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:o};d=new XRWebGLBinding(i,t),f=d.createProjectionLayer(Be),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new Gi(f.textureWidth,f.textureHeight,{format:Dn,type:Fr,depthTexture:new Zg(f.textureWidth,f.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}else{const Me={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};h=new XRWebGLLayer(i,t,Me),i.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),E=new Gi(h.framebufferWidth,h.framebufferHeight,{format:Dn,type:Fr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await i.requestReferenceSpace(a),ot.setContext(i),ot.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function re(ne){for(let fe=0;fe<ne.removed.length;fe++){const Me=ne.removed[fe],me=y.indexOf(Me);me>=0&&(y[me]=null,x[me].disconnect(Me))}for(let fe=0;fe<ne.added.length;fe++){const Me=ne.added[fe];let me=y.indexOf(Me);if(me===-1){for(let Be=0;Be<x.length;Be++)if(Be>=y.length){y.push(Me),me=Be;break}else if(y[Be]===null){y[Be]=Me,me=Be;break}if(me===-1)break}const Ie=x[me];Ie&&Ie.connect(Me)}}const q=new N,Q=new N;function H(ne,fe,Me){q.setFromMatrixPosition(fe.matrixWorld),Q.setFromMatrixPosition(Me.matrixWorld);const me=q.distanceTo(Q),Ie=fe.projectionMatrix.elements,Be=Me.projectionMatrix.elements,Ve=Ie[14]/(Ie[10]-1),xt=Ie[14]/(Ie[10]+1),tt=(Ie[9]+1)/Ie[5],C=(Ie[9]-1)/Ie[5],_=(Ie[8]-1)/Ie[0],X=(Be[8]+1)/Be[0],Z=Ve*_,K=Ve*X,$=me/(-_+X),se=$*-_;if(fe.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(se),ne.translateZ($),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Ie[10]===-1)ne.projectionMatrix.copy(fe.projectionMatrix),ne.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const Y=Ve+$,S=xt+$,b=Z-se,I=K+(me-se),B=tt*xt/S*Y,G=C*xt/S*Y;ne.projectionMatrix.makePerspective(b,I,B,G,Y,S),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function de(ne,fe){fe===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(fe.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(i===null)return;let fe=ne.near,Me=ne.far;v.texture!==null&&(v.depthNear>0&&(fe=v.depthNear),v.depthFar>0&&(Me=v.depthFar)),w.near=k.near=A.near=fe,w.far=k.far=A.far=Me,(L!==w.near||O!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),L=w.near,O=w.far),A.layers.mask=ne.layers.mask|2,k.layers.mask=ne.layers.mask|4,w.layers.mask=A.layers.mask|k.layers.mask;const me=ne.parent,Ie=w.cameras;de(w,me);for(let Be=0;Be<Ie.length;Be++)de(Ie[Be],me);Ie.length===2?H(w,A,k):w.projectionMatrix.copy(A.projectionMatrix),pe(ne,w,me)};function pe(ne,fe,Me){Me===null?ne.matrix.copy(fe.matrixWorld):(ne.matrix.copy(Me.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(fe.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(fe.projectionMatrix),ne.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Go*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(ne){l=ne,f!==null&&(f.fixedFoveation=ne),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=ne)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(w)};let _e=null;function Le(ne,fe){if(u=fe.getViewerPose(c||s),g=fe,u!==null){const Me=u.views;h!==null&&(e.setRenderTargetFramebuffer(E,h.framebuffer),e.setRenderTarget(E));let me=!1;Me.length!==w.cameras.length&&(w.cameras.length=0,me=!0);for(let Be=0;Be<Me.length;Be++){const Ve=Me[Be];let xt=null;if(h!==null)xt=h.getViewport(Ve);else{const C=d.getViewSubImage(f,Ve);xt=C.viewport,Be===0&&(e.setRenderTargetTextures(E,C.colorTexture,f.ignoreDepthValues?void 0:C.depthStencilTexture),e.setRenderTarget(E))}let tt=M[Be];tt===void 0&&(tt=new dn,tt.layers.enable(Be),tt.viewport=new ht,M[Be]=tt),tt.matrix.fromArray(Ve.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(Ve.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(xt.x,xt.y,xt.width,xt.height),Be===0&&(w.matrix.copy(tt.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),me===!0&&w.cameras.push(tt)}const Ie=i.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")){const Be=d.getDepthInformation(Me[0]);Be&&Be.isValid&&Be.texture&&v.init(e,Be,i.renderState)}}for(let Me=0;Me<x.length;Me++){const me=y[Me],Ie=x[Me];me!==null&&Ie!==void 0&&Ie.update(me,fe,c||s)}_e&&_e(ne,fe),fe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:fe}),g=null}const ot=new t0;ot.setAnimationLoop(Le),this.setAnimationLoop=function(ne){_e=ne},this.dispose=function(){}}}const Ii=new fr,DA=new qe;function NA(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function r(m,p){p.color.getRGB(m.fogColor.value,$g(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,E,x,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(m,p):p.isMeshToonMaterial?(o(m,p),d(m,p)):p.isMeshPhongMaterial?(o(m,p),u(m,p)):p.isMeshStandardMaterial?(o(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,y)):p.isMeshMatcapMaterial?(o(m,p),g(m,p)):p.isMeshDepthMaterial?o(m,p):p.isMeshDistanceMaterial?(o(m,p),v(m,p)):p.isMeshNormalMaterial?o(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,E,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===yn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===yn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=e.get(p),x=E.envMap,y=E.envMapRotation;x&&(m.envMap.value=x,Ii.copy(y),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),m.envMapRotation.value.setFromMatrix4(DA.makeRotationFromEuler(Ii)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===yn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const E=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function OA(n,e,t,r){let i={},o={},s=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,x){const y=x.program;r.uniformBlockBinding(E,y)}function c(E,x){let y=i[E.id];y===void 0&&(g(E),y=u(E),i[E.id]=y,E.addEventListener("dispose",m));const R=x.program;r.updateUBOMapping(E,R);const P=e.render.frame;o[E.id]!==P&&(f(E),o[E.id]=P)}function u(E){const x=d();E.__bindingPointIndex=x;const y=n.createBuffer(),R=E.__size,P=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,R,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,y),y}function d(){for(let E=0;E<a;E++)if(s.indexOf(E)===-1)return s.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const x=i[E.id],y=E.uniforms,R=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let P=0,A=y.length;P<A;P++){const k=Array.isArray(y[P])?y[P]:[y[P]];for(let M=0,w=k.length;M<w;M++){const L=k[M];if(h(L,P,M,R)===!0){const O=L.__offset,z=Array.isArray(L.value)?L.value:[L.value];let ee=0;for(let re=0;re<z.length;re++){const q=z[re],Q=v(q);typeof q=="number"||typeof q=="boolean"?(L.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,O+ee,L.__data)):q.isMatrix3?(L.__data[0]=q.elements[0],L.__data[1]=q.elements[1],L.__data[2]=q.elements[2],L.__data[3]=0,L.__data[4]=q.elements[3],L.__data[5]=q.elements[4],L.__data[6]=q.elements[5],L.__data[7]=0,L.__data[8]=q.elements[6],L.__data[9]=q.elements[7],L.__data[10]=q.elements[8],L.__data[11]=0):(q.toArray(L.__data,ee),ee+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(E,x,y,R){const P=E.value,A=x+"_"+y;if(R[A]===void 0)return typeof P=="number"||typeof P=="boolean"?R[A]=P:R[A]=P.clone(),!0;{const k=R[A];if(typeof P=="number"||typeof P=="boolean"){if(k!==P)return R[A]=P,!0}else if(k.equals(P)===!1)return k.copy(P),!0}return!1}function g(E){const x=E.uniforms;let y=0;const R=16;for(let A=0,k=x.length;A<k;A++){const M=Array.isArray(x[A])?x[A]:[x[A]];for(let w=0,L=M.length;w<L;w++){const O=M[w],z=Array.isArray(O.value)?O.value:[O.value];for(let ee=0,re=z.length;ee<re;ee++){const q=z[ee],Q=v(q),H=y%R,de=H%Q.boundary,pe=H+de;y+=de,pe!==0&&R-pe<Q.storage&&(y+=R-pe),O.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=y,y+=Q.storage}}}const P=y%R;return P>0&&(y+=R-P),E.__size=y,E.__cache={},this}function v(E){const x={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(x.boundary=4,x.storage=4):E.isVector2?(x.boundary=8,x.storage=8):E.isVector3||E.isColor?(x.boundary=16,x.storage=12):E.isVector4?(x.boundary=16,x.storage=16):E.isMatrix3?(x.boundary=48,x.storage=48):E.isMatrix4?(x.boundary=64,x.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),x}function m(E){const x=E.target;x.removeEventListener("dispose",m);const y=s.indexOf(x.__bindingPointIndex);s.splice(y,1),n.deleteBuffer(i[x.id]),delete i[x.id],delete o[x.id]}function p(){for(const E in i)n.deleteBuffer(i[E]);s=[],i={},o={}}return{bind:l,update:c,dispose:p}}class BA{constructor(e={}){const{canvas:t=Bw(),context:r=null,depth:i=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let h;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=r.getContextAttributes().alpha}else h=s;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const E=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Yt,this.toneMapping=pi,this.toneMappingExposure=1;const y=this;let R=!1,P=0,A=0,k=null,M=-1,w=null;const L=new ht,O=new ht;let z=null;const ee=new Xe(0);let re=0,q=t.width,Q=t.height,H=1,de=null,pe=null;const _e=new ht(0,0,q,Q),Le=new ht(0,0,q,Q);let ot=!1;const ne=new Rd;let fe=!1,Me=!1;this.transmissionResolutionScale=1;const me=new qe,Ie=new qe,Be=new N,Ve=new ht,xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function C(){return k===null?H:1}let _=r;function X(T,U){return t.getContext(T,U)}try{const T={alpha:!0,depth:i,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${bd}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",we,!1),t.addEventListener("webglcontextcreationerror",Se,!1),_===null){const U="webgl2";if(_=X(U,T),_===null)throw X(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Z,K,$,se,Y,S,b,I,B,G,V,ce,ae,le,Fe,oe,ve,Ae,De,Ee,Ue,Ne,vt,D;function ye(){Z=new jC(_),Z.init(),Ne=new AA(_,Z),K=new zC(_,Z,e,Ne),$=new EA(_,Z),K.reverseDepthBuffer&&f&&$.buffers.depth.setReversed(!0),se=new YC(_),Y=new hA,S=new CA(_,Z,$,Y,K,Ne,se),b=new VC(y),I=new WC(y),B=new nT(_),vt=new UC(_,B),G=new XC(_,B,se,vt),V=new ZC(_,G,B,se),De=new qC(_,K,S),oe=new HC(Y),ce=new fA(y,b,I,Z,K,vt,oe),ae=new NA(y,Y),le=new mA,Fe=new xA(Z),Ae=new BC(y,b,I,$,V,h,l),ve=new MA(y,V,K),D=new OA(_,se,K,$),Ee=new FC(_,Z,se),Ue=new KC(_,Z,se),se.programs=ce.programs,y.capabilities=K,y.extensions=Z,y.properties=Y,y.renderLists=le,y.shadowMap=ve,y.state=$,y.info=se}ye();const te=new kA(y,_);this.xr=te,this.getContext=function(){return _},this.getContextAttributes=function(){return _.getContextAttributes()},this.forceContextLoss=function(){const T=Z.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Z.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(T){T!==void 0&&(H=T,this.setSize(q,Q,!1))},this.getSize=function(T){return T.set(q,Q)},this.setSize=function(T,U,W=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=T,Q=U,t.width=Math.floor(T*H),t.height=Math.floor(U*H),W===!0&&(t.style.width=T+"px",t.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(q*H,Q*H).floor()},this.setDrawingBufferSize=function(T,U,W){q=T,Q=U,H=W,t.width=Math.floor(T*W),t.height=Math.floor(U*W),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy(_e)},this.setViewport=function(T,U,W,j){T.isVector4?_e.set(T.x,T.y,T.z,T.w):_e.set(T,U,W,j),$.viewport(L.copy(_e).multiplyScalar(H).round())},this.getScissor=function(T){return T.copy(Le)},this.setScissor=function(T,U,W,j){T.isVector4?Le.set(T.x,T.y,T.z,T.w):Le.set(T,U,W,j),$.scissor(O.copy(Le).multiplyScalar(H).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(T){$.setScissorTest(ot=T)},this.setOpaqueSort=function(T){de=T},this.setTransparentSort=function(T){pe=T},this.getClearColor=function(T){return T.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor.apply(Ae,arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha.apply(Ae,arguments)},this.clear=function(T=!0,U=!0,W=!0){let j=0;if(T){let F=!1;if(k!==null){const ue=k.texture.format;F=ue===Td||ue===Md||ue===wd}if(F){const ue=k.texture.type,xe=ue===Fr||ue===Vi||ue===Ys||ue===Ho||ue===yd||ue===xd,Ce=Ae.getClearColor(),Re=Ae.getClearAlpha(),Ge=Ce.r,We=Ce.g,ke=Ce.b;xe?(g[0]=Ge,g[1]=We,g[2]=ke,g[3]=Re,_.clearBufferuiv(_.COLOR,0,g)):(v[0]=Ge,v[1]=We,v[2]=ke,v[3]=Re,_.clearBufferiv(_.COLOR,0,v))}else j|=_.COLOR_BUFFER_BIT}U&&(j|=_.DEPTH_BUFFER_BIT),W&&(j|=_.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),_.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),Ae.dispose(),le.dispose(),Fe.dispose(),Y.dispose(),b.dispose(),I.dispose(),V.dispose(),vt.dispose(),D.dispose(),ce.dispose(),te.dispose(),te.removeEventListener("sessionstart",Hd),te.removeEventListener("sessionend",Vd),xi.stop()};function ie(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const T=se.autoReset,U=ve.enabled,W=ve.autoUpdate,j=ve.needsUpdate,F=ve.type;ye(),se.autoReset=T,ve.enabled=U,ve.autoUpdate=W,ve.needsUpdate=j,ve.type=F}function Se(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ke(T){const U=T.target;U.removeEventListener("dispose",Ke),Nt(U)}function Nt(T){Zt(T),Y.remove(T)}function Zt(T){const U=Y.get(T).programs;U!==void 0&&(U.forEach(function(W){ce.releaseProgram(W)}),T.isShaderMaterial&&ce.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,W,j,F,ue){U===null&&(U=xt);const xe=F.isMesh&&F.matrixWorld.determinant()<0,Ce=x0(T,U,W,j,F);$.setMaterial(j,xe);let Re=W.index,Ge=1;if(j.wireframe===!0){if(Re=G.getWireframeAttribute(W),Re===void 0)return;Ge=2}const We=W.drawRange,ke=W.attributes.position;let at=We.start*Ge,pt=(We.start+We.count)*Ge;ue!==null&&(at=Math.max(at,ue.start*Ge),pt=Math.min(pt,(ue.start+ue.count)*Ge)),Re!==null?(at=Math.max(at,0),pt=Math.min(pt,Re.count)):ke!=null&&(at=Math.max(at,0),pt=Math.min(pt,ke.count));const Bt=pt-at;if(Bt<0||Bt===1/0)return;vt.setup(F,j,Ce,W,Re);let Ot,ct=Ee;if(Re!==null&&(Ot=B.get(Re),ct=Ue,ct.setIndex(Ot)),F.isMesh)j.wireframe===!0?($.setLineWidth(j.wireframeLinewidth*C()),ct.setMode(_.LINES)):ct.setMode(_.TRIANGLES);else if(F.isLine){let Oe=j.linewidth;Oe===void 0&&(Oe=1),$.setLineWidth(Oe*C()),F.isLineSegments?ct.setMode(_.LINES):F.isLineLoop?ct.setMode(_.LINE_LOOP):ct.setMode(_.LINE_STRIP)}else F.isPoints?ct.setMode(_.POINTS):F.isSprite&&ct.setMode(_.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ct.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Z.get("WEBGL_multi_draw"))ct.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Oe=F._multiDrawStarts,Xt=F._multiDrawCounts,mt=F._multiDrawCount,zn=Re?B.get(Re).bytesPerElement:1,Xi=Y.get(j).currentProgram.getUniforms();for(let xn=0;xn<mt;xn++)Xi.setValue(_,"_gl_DrawID",xn),ct.render(Oe[xn]/zn,Xt[xn])}else if(F.isInstancedMesh)ct.renderInstances(at,Bt,F.count);else if(W.isInstancedBufferGeometry){const Oe=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Xt=Math.min(W.instanceCount,Oe);ct.renderInstances(at,Bt,Xt)}else ct.render(at,Bt)};function bt(T,U,W){T.transparent===!0&&T.side===sr&&T.forceSinglePass===!1?(T.side=yn,T.needsUpdate=!0,aa(T,U,W),T.side=Ur,T.needsUpdate=!0,aa(T,U,W),T.side=sr):aa(T,U,W)}this.compile=function(T,U,W=null){W===null&&(W=T),p=Fe.get(W),p.init(U),x.push(p),W.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),T!==W&&T.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const j=new Set;return T.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ue=F.material;if(ue)if(Array.isArray(ue))for(let xe=0;xe<ue.length;xe++){const Ce=ue[xe];bt(Ce,W,F),j.add(Ce)}else bt(ue,W,F),j.add(ue)}),x.pop(),p=null,j},this.compileAsync=function(T,U,W=null){const j=this.compile(T,U,W);return new Promise(F=>{function ue(){if(j.forEach(function(xe){Y.get(xe).currentProgram.isReady()&&j.delete(xe)}),j.size===0){F(T);return}setTimeout(ue,10)}Z.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Fn=null;function vr(T){Fn&&Fn(T)}function Hd(){xi.stop()}function Vd(){xi.start()}const xi=new t0;xi.setAnimationLoop(vr),typeof self<"u"&&xi.setContext(self),this.setAnimationLoop=function(T){Fn=T,te.setAnimationLoop(T),T===null?xi.stop():xi.start()},te.addEventListener("sessionstart",Hd),te.addEventListener("sessionend",Vd),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(U),U=te.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,U,k),p=Fe.get(T,x.length),p.init(U),x.push(p),Ie.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ne.setFromProjectionMatrix(Ie),Me=this.localClippingEnabled,fe=oe.init(this.clippingPlanes,Me),m=le.get(T,E.length),m.init(),E.push(m),te.enabled===!0&&te.isPresenting===!0){const ue=y.xr.getDepthSensingMesh();ue!==null&&Dl(ue,U,-1/0,y.sortObjects)}Dl(T,U,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(de,pe),tt=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,tt&&Ae.addToRenderList(m,T),this.info.render.frame++,fe===!0&&oe.beginShadows();const W=p.state.shadowsArray;ve.render(W,T,U),fe===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=m.opaque,F=m.transmissive;if(p.setupLights(),U.isArrayCamera){const ue=U.cameras;if(F.length>0)for(let xe=0,Ce=ue.length;xe<Ce;xe++){const Re=ue[xe];$d(j,F,T,Re)}tt&&Ae.render(T);for(let xe=0,Ce=ue.length;xe<Ce;xe++){const Re=ue[xe];Gd(m,T,Re,Re.viewport)}}else F.length>0&&$d(j,F,T,U),tt&&Ae.render(T),Gd(m,T,U);k!==null&&A===0&&(S.updateMultisampleRenderTarget(k),S.updateRenderTargetMipmap(k)),T.isScene===!0&&T.onAfterRender(y,T,U),vt.resetDefaultState(),M=-1,w=null,x.pop(),x.length>0?(p=x[x.length-1],fe===!0&&oe.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Dl(T,U,W,j){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ne.intersectsSprite(T)){j&&Ve.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ie);const xe=V.update(T),Ce=T.material;Ce.visible&&m.push(T,xe,Ce,W,Ve.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ne.intersectsObject(T))){const xe=V.update(T),Ce=T.material;if(j&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ve.copy(T.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Ve.copy(xe.boundingSphere.center)),Ve.applyMatrix4(T.matrixWorld).applyMatrix4(Ie)),Array.isArray(Ce)){const Re=xe.groups;for(let Ge=0,We=Re.length;Ge<We;Ge++){const ke=Re[Ge],at=Ce[ke.materialIndex];at&&at.visible&&m.push(T,xe,at,W,Ve.z,ke)}}else Ce.visible&&m.push(T,xe,Ce,W,Ve.z,null)}}const ue=T.children;for(let xe=0,Ce=ue.length;xe<Ce;xe++)Dl(ue[xe],U,W,j)}function Gd(T,U,W,j){const F=T.opaque,ue=T.transmissive,xe=T.transparent;p.setupLightsView(W),fe===!0&&oe.setGlobalState(y.clippingPlanes,W),j&&$.viewport(L.copy(j)),F.length>0&&sa(F,U,W),ue.length>0&&sa(ue,U,W),xe.length>0&&sa(xe,U,W),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function $d(T,U,W,j){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new Gi(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")||Z.has("EXT_color_buffer_float")?ra:Fr,minFilter:Dr,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));const ue=p.state.transmissionRenderTarget[j.id],xe=j.viewport||L;ue.setSize(xe.z*y.transmissionResolutionScale,xe.w*y.transmissionResolutionScale);const Ce=y.getRenderTarget();y.setRenderTarget(ue),y.getClearColor(ee),re=y.getClearAlpha(),re<1&&y.setClearColor(16777215,.5),y.clear(),tt&&Ae.render(W);const Re=y.toneMapping;y.toneMapping=pi;const Ge=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),fe===!0&&oe.setGlobalState(y.clippingPlanes,j),sa(T,W,j),S.updateMultisampleRenderTarget(ue),S.updateRenderTargetMipmap(ue),Z.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let ke=0,at=U.length;ke<at;ke++){const pt=U[ke],Bt=pt.object,Ot=pt.geometry,ct=pt.material,Oe=pt.group;if(ct.side===sr&&Bt.layers.test(j.layers)){const Xt=ct.side;ct.side=yn,ct.needsUpdate=!0,Wd(Bt,W,j,Ot,ct,Oe),ct.side=Xt,ct.needsUpdate=!0,We=!0}}We===!0&&(S.updateMultisampleRenderTarget(ue),S.updateRenderTargetMipmap(ue))}y.setRenderTarget(Ce),y.setClearColor(ee,re),Ge!==void 0&&(j.viewport=Ge),y.toneMapping=Re}function sa(T,U,W){const j=U.isScene===!0?U.overrideMaterial:null;for(let F=0,ue=T.length;F<ue;F++){const xe=T[F],Ce=xe.object,Re=xe.geometry,Ge=j===null?xe.material:j,We=xe.group;Ce.layers.test(W.layers)&&Wd(Ce,U,W,Re,Ge,We)}}function Wd(T,U,W,j,F,ue){T.onBeforeRender(y,U,W,j,F,ue),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),F.onBeforeRender(y,U,W,j,T,ue),F.transparent===!0&&F.side===sr&&F.forceSinglePass===!1?(F.side=yn,F.needsUpdate=!0,y.renderBufferDirect(W,U,j,F,T,ue),F.side=Ur,F.needsUpdate=!0,y.renderBufferDirect(W,U,j,F,T,ue),F.side=sr):y.renderBufferDirect(W,U,j,F,T,ue),T.onAfterRender(y,U,W,j,F,ue)}function aa(T,U,W){U.isScene!==!0&&(U=xt);const j=Y.get(T),F=p.state.lights,ue=p.state.shadowsArray,xe=F.state.version,Ce=ce.getParameters(T,F.state,ue,U,W),Re=ce.getProgramCacheKey(Ce);let Ge=j.programs;j.environment=T.isMeshStandardMaterial?U.environment:null,j.fog=U.fog,j.envMap=(T.isMeshStandardMaterial?I:b).get(T.envMap||j.environment),j.envMapRotation=j.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,Ge===void 0&&(T.addEventListener("dispose",Ke),Ge=new Map,j.programs=Ge);let We=Ge.get(Re);if(We!==void 0){if(j.currentProgram===We&&j.lightsStateVersion===xe)return Xd(T,Ce),We}else Ce.uniforms=ce.getUniforms(T),T.onBeforeCompile(Ce,y),We=ce.acquireProgram(Ce,Re),Ge.set(Re,We),j.uniforms=Ce.uniforms;const ke=j.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(ke.clippingPlanes=oe.uniform),Xd(T,Ce),j.needsLights=w0(T),j.lightsStateVersion=xe,j.needsLights&&(ke.ambientLightColor.value=F.state.ambient,ke.lightProbe.value=F.state.probe,ke.directionalLights.value=F.state.directional,ke.directionalLightShadows.value=F.state.directionalShadow,ke.spotLights.value=F.state.spot,ke.spotLightShadows.value=F.state.spotShadow,ke.rectAreaLights.value=F.state.rectArea,ke.ltc_1.value=F.state.rectAreaLTC1,ke.ltc_2.value=F.state.rectAreaLTC2,ke.pointLights.value=F.state.point,ke.pointLightShadows.value=F.state.pointShadow,ke.hemisphereLights.value=F.state.hemi,ke.directionalShadowMap.value=F.state.directionalShadowMap,ke.directionalShadowMatrix.value=F.state.directionalShadowMatrix,ke.spotShadowMap.value=F.state.spotShadowMap,ke.spotLightMatrix.value=F.state.spotLightMatrix,ke.spotLightMap.value=F.state.spotLightMap,ke.pointShadowMap.value=F.state.pointShadowMap,ke.pointShadowMatrix.value=F.state.pointShadowMatrix),j.currentProgram=We,j.uniformsList=null,We}function jd(T){if(T.uniformsList===null){const U=T.currentProgram.getUniforms();T.uniformsList=nl.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function Xd(T,U){const W=Y.get(T);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.batchingColor=U.batchingColor,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function x0(T,U,W,j,F){U.isScene!==!0&&(U=xt),S.resetTextureUnits();const ue=U.fog,xe=j.isMeshStandardMaterial?U.environment:null,Ce=k===null?y.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:mn,Re=(j.isMeshStandardMaterial?I:b).get(j.envMap||xe),Ge=j.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,We=!!W.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),ke=!!W.morphAttributes.position,at=!!W.morphAttributes.normal,pt=!!W.morphAttributes.color;let Bt=pi;j.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Bt=y.toneMapping);const Ot=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ct=Ot!==void 0?Ot.length:0,Oe=Y.get(j),Xt=p.state.lights;if(fe===!0&&(Me===!0||T!==w)){const on=T===w&&j.id===M;oe.setState(j,T,on)}let mt=!1;j.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==Xt.state.version||Oe.outputColorSpace!==Ce||F.isBatchedMesh&&Oe.batching===!1||!F.isBatchedMesh&&Oe.batching===!0||F.isBatchedMesh&&Oe.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Oe.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Oe.instancing===!1||!F.isInstancedMesh&&Oe.instancing===!0||F.isSkinnedMesh&&Oe.skinning===!1||!F.isSkinnedMesh&&Oe.skinning===!0||F.isInstancedMesh&&Oe.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Oe.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Oe.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Oe.instancingMorph===!1&&F.morphTexture!==null||Oe.envMap!==Re||j.fog===!0&&Oe.fog!==ue||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==oe.numPlanes||Oe.numIntersection!==oe.numIntersection)||Oe.vertexAlphas!==Ge||Oe.vertexTangents!==We||Oe.morphTargets!==ke||Oe.morphNormals!==at||Oe.morphColors!==pt||Oe.toneMapping!==Bt||Oe.morphTargetsCount!==ct)&&(mt=!0):(mt=!0,Oe.__version=j.version);let zn=Oe.currentProgram;mt===!0&&(zn=aa(j,U,F));let Xi=!1,xn=!1,es=!1;const Pt=zn.getUniforms(),An=Oe.uniforms;if($.useProgram(zn.program)&&(Xi=!0,xn=!0,es=!0),j.id!==M&&(M=j.id,xn=!0),Xi||w!==T){$.buffers.depth.getReversed()?(me.copy(T.projectionMatrix),Fw(me),zw(me),Pt.setValue(_,"projectionMatrix",me)):Pt.setValue(_,"projectionMatrix",T.projectionMatrix),Pt.setValue(_,"viewMatrix",T.matrixWorldInverse);const gn=Pt.map.cameraPosition;gn!==void 0&&gn.setValue(_,Be.setFromMatrixPosition(T.matrixWorld)),K.logarithmicDepthBuffer&&Pt.setValue(_,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Pt.setValue(_,"isOrthographic",T.isOrthographicCamera===!0),w!==T&&(w=T,xn=!0,es=!0)}if(F.isSkinnedMesh){Pt.setOptional(_,F,"bindMatrix"),Pt.setOptional(_,F,"bindMatrixInverse");const on=F.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),Pt.setValue(_,"boneTexture",on.boneTexture,S))}F.isBatchedMesh&&(Pt.setOptional(_,F,"batchingTexture"),Pt.setValue(_,"batchingTexture",F._matricesTexture,S),Pt.setOptional(_,F,"batchingIdTexture"),Pt.setValue(_,"batchingIdTexture",F._indirectTexture,S),Pt.setOptional(_,F,"batchingColorTexture"),F._colorsTexture!==null&&Pt.setValue(_,"batchingColorTexture",F._colorsTexture,S));const Rn=W.morphAttributes;if((Rn.position!==void 0||Rn.normal!==void 0||Rn.color!==void 0)&&De.update(F,W,zn),(xn||Oe.receiveShadow!==F.receiveShadow)&&(Oe.receiveShadow=F.receiveShadow,Pt.setValue(_,"receiveShadow",F.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(An.envMap.value=Re,An.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&U.environment!==null&&(An.envMapIntensity.value=U.environmentIntensity),xn&&(Pt.setValue(_,"toneMappingExposure",y.toneMappingExposure),Oe.needsLights&&S0(An,es),ue&&j.fog===!0&&ae.refreshFogUniforms(An,ue),ae.refreshMaterialUniforms(An,j,H,Q,p.state.transmissionRenderTarget[T.id]),nl.upload(_,jd(Oe),An,S)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(nl.upload(_,jd(Oe),An,S),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Pt.setValue(_,"center",F.center),Pt.setValue(_,"modelViewMatrix",F.modelViewMatrix),Pt.setValue(_,"normalMatrix",F.normalMatrix),Pt.setValue(_,"modelMatrix",F.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const on=j.uniformsGroups;for(let gn=0,Nl=on.length;gn<Nl;gn++){const Si=on[gn];D.update(Si,zn),D.bind(Si,zn)}}return zn}function S0(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function w0(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(T,U,W){Y.get(T.texture).__webglTexture=U,Y.get(T.depthTexture).__webglTexture=W;const j=Y.get(T);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=W===void 0,j.__autoAllocateDepthBuffer||Z.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,U){const W=Y.get(T);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0};const M0=_.createFramebuffer();this.setRenderTarget=function(T,U=0,W=0){k=T,P=U,A=W;let j=!0,F=null,ue=!1,xe=!1;if(T){const Re=Y.get(T);if(Re.__useDefaultFramebuffer!==void 0)$.bindFramebuffer(_.FRAMEBUFFER,null),j=!1;else if(Re.__webglFramebuffer===void 0)S.setupRenderTarget(T);else if(Re.__hasExternalTextures)S.rebindTextures(T,Y.get(T.texture).__webglTexture,Y.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const ke=T.depthTexture;if(Re.__boundDepthTexture!==ke){if(ke!==null&&Y.has(ke)&&(T.width!==ke.image.width||T.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(T)}}const Ge=T.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(xe=!0);const We=Y.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(We[U])?F=We[U][W]:F=We[U],ue=!0):T.samples>0&&S.useMultisampledRTT(T)===!1?F=Y.get(T).__webglMultisampledFramebuffer:Array.isArray(We)?F=We[W]:F=We,L.copy(T.viewport),O.copy(T.scissor),z=T.scissorTest}else L.copy(_e).multiplyScalar(H).floor(),O.copy(Le).multiplyScalar(H).floor(),z=ot;if(W!==0&&(F=M0),$.bindFramebuffer(_.FRAMEBUFFER,F)&&j&&$.drawBuffers(T,F),$.viewport(L),$.scissor(O),$.setScissorTest(z),ue){const Re=Y.get(T.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_CUBE_MAP_POSITIVE_X+U,Re.__webglTexture,W)}else if(xe){const Re=Y.get(T.texture),Ge=U;_.framebufferTextureLayer(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,Re.__webglTexture,W,Ge)}else if(T!==null&&W!==0){const Re=Y.get(T.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,Re.__webglTexture,W)}M=-1},this.readRenderTargetPixels=function(T,U,W,j,F,ue,xe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Y.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&xe!==void 0&&(Ce=Ce[xe]),Ce){$.bindFramebuffer(_.FRAMEBUFFER,Ce);try{const Re=T.texture,Ge=Re.format,We=Re.type;if(!K.textureFormatReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!K.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-j&&W>=0&&W<=T.height-F&&_.readPixels(U,W,j,F,Ne.convert(Ge),Ne.convert(We),ue)}finally{const Re=k!==null?Y.get(k).__webglFramebuffer:null;$.bindFramebuffer(_.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(T,U,W,j,F,ue,xe){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=Y.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&xe!==void 0&&(Ce=Ce[xe]),Ce){const Re=T.texture,Ge=Re.format,We=Re.type;if(!K.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!K.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=T.width-j&&W>=0&&W<=T.height-F){$.bindFramebuffer(_.FRAMEBUFFER,Ce);const ke=_.createBuffer();_.bindBuffer(_.PIXEL_PACK_BUFFER,ke),_.bufferData(_.PIXEL_PACK_BUFFER,ue.byteLength,_.STREAM_READ),_.readPixels(U,W,j,F,Ne.convert(Ge),Ne.convert(We),0);const at=k!==null?Y.get(k).__webglFramebuffer:null;$.bindFramebuffer(_.FRAMEBUFFER,at);const pt=_.fenceSync(_.SYNC_GPU_COMMANDS_COMPLETE,0);return _.flush(),await Uw(_,pt,4),_.bindBuffer(_.PIXEL_PACK_BUFFER,ke),_.getBufferSubData(_.PIXEL_PACK_BUFFER,0,ue),_.deleteBuffer(ke),_.deleteSync(pt),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,U=null,W=0){T.isTexture!==!0&&(vo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,T=arguments[1]);const j=Math.pow(2,-W),F=Math.floor(T.image.width*j),ue=Math.floor(T.image.height*j),xe=U!==null?U.x:0,Ce=U!==null?U.y:0;S.setTexture2D(T,0),_.copyTexSubImage2D(_.TEXTURE_2D,W,0,0,xe,Ce,F,ue),$.unbindTexture()};const T0=_.createFramebuffer(),E0=_.createFramebuffer();this.copyTextureToTexture=function(T,U,W=null,j=null,F=0,ue=null){T.isTexture!==!0&&(vo("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,T=arguments[1],U=arguments[2],ue=arguments[3]||0,W=null),ue===null&&(F!==0?(vo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ue=F,F=0):ue=0);let xe,Ce,Re,Ge,We,ke,at,pt,Bt;const Ot=T.isCompressedTexture?T.mipmaps[ue]:T.image;if(W!==null)xe=W.max.x-W.min.x,Ce=W.max.y-W.min.y,Re=W.isBox3?W.max.z-W.min.z:1,Ge=W.min.x,We=W.min.y,ke=W.isBox3?W.min.z:0;else{const Rn=Math.pow(2,-F);xe=Math.floor(Ot.width*Rn),Ce=Math.floor(Ot.height*Rn),T.isDataArrayTexture?Re=Ot.depth:T.isData3DTexture?Re=Math.floor(Ot.depth*Rn):Re=1,Ge=0,We=0,ke=0}j!==null?(at=j.x,pt=j.y,Bt=j.z):(at=0,pt=0,Bt=0);const ct=Ne.convert(U.format),Oe=Ne.convert(U.type);let Xt;U.isData3DTexture?(S.setTexture3D(U,0),Xt=_.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(S.setTexture2DArray(U,0),Xt=_.TEXTURE_2D_ARRAY):(S.setTexture2D(U,0),Xt=_.TEXTURE_2D),_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,U.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,U.unpackAlignment);const mt=_.getParameter(_.UNPACK_ROW_LENGTH),zn=_.getParameter(_.UNPACK_IMAGE_HEIGHT),Xi=_.getParameter(_.UNPACK_SKIP_PIXELS),xn=_.getParameter(_.UNPACK_SKIP_ROWS),es=_.getParameter(_.UNPACK_SKIP_IMAGES);_.pixelStorei(_.UNPACK_ROW_LENGTH,Ot.width),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,Ot.height),_.pixelStorei(_.UNPACK_SKIP_PIXELS,Ge),_.pixelStorei(_.UNPACK_SKIP_ROWS,We),_.pixelStorei(_.UNPACK_SKIP_IMAGES,ke);const Pt=T.isDataArrayTexture||T.isData3DTexture,An=U.isDataArrayTexture||U.isData3DTexture;if(T.isDepthTexture){const Rn=Y.get(T),on=Y.get(U),gn=Y.get(Rn.__renderTarget),Nl=Y.get(on.__renderTarget);$.bindFramebuffer(_.READ_FRAMEBUFFER,gn.__webglFramebuffer),$.bindFramebuffer(_.DRAW_FRAMEBUFFER,Nl.__webglFramebuffer);for(let Si=0;Si<Re;Si++)Pt&&(_.framebufferTextureLayer(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,Y.get(T).__webglTexture,F,ke+Si),_.framebufferTextureLayer(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,Y.get(U).__webglTexture,ue,Bt+Si)),_.blitFramebuffer(Ge,We,xe,Ce,at,pt,xe,Ce,_.DEPTH_BUFFER_BIT,_.NEAREST);$.bindFramebuffer(_.READ_FRAMEBUFFER,null),$.bindFramebuffer(_.DRAW_FRAMEBUFFER,null)}else if(F!==0||T.isRenderTargetTexture||Y.has(T)){const Rn=Y.get(T),on=Y.get(U);$.bindFramebuffer(_.READ_FRAMEBUFFER,T0),$.bindFramebuffer(_.DRAW_FRAMEBUFFER,E0);for(let gn=0;gn<Re;gn++)Pt?_.framebufferTextureLayer(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,Rn.__webglTexture,F,ke+gn):_.framebufferTexture2D(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,Rn.__webglTexture,F),An?_.framebufferTextureLayer(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,on.__webglTexture,ue,Bt+gn):_.framebufferTexture2D(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,on.__webglTexture,ue),F!==0?_.blitFramebuffer(Ge,We,xe,Ce,at,pt,xe,Ce,_.COLOR_BUFFER_BIT,_.NEAREST):An?_.copyTexSubImage3D(Xt,ue,at,pt,Bt+gn,Ge,We,xe,Ce):_.copyTexSubImage2D(Xt,ue,at,pt,Ge,We,xe,Ce);$.bindFramebuffer(_.READ_FRAMEBUFFER,null),$.bindFramebuffer(_.DRAW_FRAMEBUFFER,null)}else An?T.isDataTexture||T.isData3DTexture?_.texSubImage3D(Xt,ue,at,pt,Bt,xe,Ce,Re,ct,Oe,Ot.data):U.isCompressedArrayTexture?_.compressedTexSubImage3D(Xt,ue,at,pt,Bt,xe,Ce,Re,ct,Ot.data):_.texSubImage3D(Xt,ue,at,pt,Bt,xe,Ce,Re,ct,Oe,Ot):T.isDataTexture?_.texSubImage2D(_.TEXTURE_2D,ue,at,pt,xe,Ce,ct,Oe,Ot.data):T.isCompressedTexture?_.compressedTexSubImage2D(_.TEXTURE_2D,ue,at,pt,Ot.width,Ot.height,ct,Ot.data):_.texSubImage2D(_.TEXTURE_2D,ue,at,pt,xe,Ce,ct,Oe,Ot);_.pixelStorei(_.UNPACK_ROW_LENGTH,mt),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,zn),_.pixelStorei(_.UNPACK_SKIP_PIXELS,Xi),_.pixelStorei(_.UNPACK_SKIP_ROWS,xn),_.pixelStorei(_.UNPACK_SKIP_IMAGES,es),ue===0&&U.generateMipmaps&&_.generateMipmap(Xt),$.unbindTexture()},this.copyTextureToTexture3D=function(T,U,W=null,j=null,F=0){return T.isTexture!==!0&&(vo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,j=arguments[1]||null,T=arguments[2],U=arguments[3],F=arguments[4]||0),vo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,U,W,j,F)},this.initRenderTarget=function(T){Y.get(T).__webglFramebuffer===void 0&&S.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?S.setTextureCube(T,0):T.isData3DTexture?S.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?S.setTexture2DArray(T,0):S.setTexture2D(T,0),$.unbindTexture()},this.resetState=function(){P=0,A=0,k=null,$.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}}const Ep={type:"change"},Ud={type:"start"},s0={type:"end"},$a=new ia,Cp=new ri,UA=Math.cos(70*Og.DEG2RAD),zt=new N,vn=2*Math.PI,Mt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Lc=1e-6;class FA extends eT{constructor(e,t=null){super(e,t),this.state=Mt.NONE,this.enabled=!0,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Lo.ROTATE,MIDDLE:Lo.DOLLY,RIGHT:Lo.PAN},this.touches={ONE:So.ROTATE,TWO:So.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new dr,this._lastTargetPosition=new N,this._quat=new dr().setFromUnitVectors(e.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ep,this._sphericalDelta=new ep,this._scale=1,this._panOffset=new N,this._rotateStart=new $e,this._rotateEnd=new $e,this._rotateDelta=new $e,this._panStart=new $e,this._panEnd=new $e,this._panDelta=new $e,this._dollyStart=new $e,this._dollyEnd=new $e,this._dollyDelta=new $e,this._dollyDirection=new N,this._mouse=new $e,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=HA.bind(this),this._onPointerDown=zA.bind(this),this._onPointerUp=VA.bind(this),this._onContextMenu=YA.bind(this),this._onMouseWheel=WA.bind(this),this._onKeyDown=jA.bind(this),this._onTouchStart=XA.bind(this),this._onTouchMove=KA.bind(this),this._onMouseDown=GA.bind(this),this._onMouseMove=$A.bind(this),this._interceptControlDown=qA.bind(this),this._interceptControlUp=ZA.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ep),this.update(),this.state=Mt.NONE}update(e=null){const t=this.object.position;zt.copy(t).sub(this.target),zt.applyQuaternion(this._quat),this._spherical.setFromVector3(zt),this.autoRotate&&this.state===Mt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(r)&&isFinite(i)&&(r<-Math.PI?r+=vn:r>Math.PI&&(r-=vn),i<-Math.PI?i+=vn:i>Math.PI&&(i-=vn),r<=i?this._spherical.theta=Math.max(r,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+i)/2?Math.max(r,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const s=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=s!=this._spherical.radius}if(zt.setFromSpherical(this._spherical),zt.applyQuaternion(this._quatInverse),t.copy(this.target).add(zt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let s=null;if(this.object.isPerspectiveCamera){const a=zt.length();s=this._clampDistance(a*this._scale);const l=a-s;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),o=!!l}else if(this.object.isOrthographicCamera){const a=new N(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=l!==this.object.zoom;const c=new N(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),s=zt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;s!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(s).add(this.object.position):($a.origin.copy(this.object.position),$a.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot($a.direction))<UA?this.object.lookAt(this.target):(Cp.setFromNormalAndCoplanarPoint(this.object.up,this.target),$a.intersectPlane(Cp,this.target))))}else if(this.object.isOrthographicCamera){const s=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),s!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Lc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Lc||this._lastTargetPosition.distanceToSquared(this.target)>Lc?(this.dispatchEvent(Ep),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?vn/60*this.autoRotateSpeed*e:vn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){zt.setFromMatrixColumn(t,0),zt.multiplyScalar(-e),this._panOffset.add(zt)}_panUp(e,t){this.screenSpacePanning===!0?zt.setFromMatrixColumn(t,1):(zt.setFromMatrixColumn(t,0),zt.crossVectors(this.object.up,zt)),zt.multiplyScalar(e),this._panOffset.add(zt)}_pan(e,t){const r=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;zt.copy(i).sub(this.target);let o=zt.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*o/r.clientHeight,this.object.matrix),this._panUp(2*t*o/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),i=e-r.left,o=t-r.top,s=r.width,a=r.height;this._mouse.x=i/s*2-1,this._mouse.y=-(o/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(vn*this._rotateDelta.x/t.clientHeight),this._rotateUp(vn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(r,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(r,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,i=e.pageY-t.y,o=Math.sqrt(r*r+i*i);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),i=.5*(e.pageX+r.x),o=.5*(e.pageY+r.y);this._rotateEnd.set(i,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(vn*this._rotateDelta.x/t.clientHeight),this._rotateUp(vn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(r,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,i=e.pageY-t.y,o=Math.sqrt(r*r+i*i);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const s=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(s,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new $e,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function zA(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function HA(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function VA(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(s0),this.state=Mt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function GA(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Lo.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Mt.DOLLY;break;case Lo.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Mt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Mt.ROTATE}break;case Lo.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Mt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Mt.PAN}break;default:this.state=Mt.NONE}this.state!==Mt.NONE&&this.dispatchEvent(Ud)}function $A(n){switch(this.state){case Mt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Mt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Mt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function WA(n){this.enabled===!1||this.enableZoom===!1||this.state!==Mt.NONE||(n.preventDefault(),this.dispatchEvent(Ud),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(s0))}function jA(n){this.enabled!==!1&&this._handleKeyDown(n)}function XA(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case So.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Mt.TOUCH_ROTATE;break;case So.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Mt.TOUCH_PAN;break;default:this.state=Mt.NONE}break;case 2:switch(this.touches.TWO){case So.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Mt.TOUCH_DOLLY_PAN;break;case So.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Mt.TOUCH_DOLLY_ROTATE;break;default:this.state=Mt.NONE}break;default:this.state=Mt.NONE}this.state!==Mt.NONE&&this.dispatchEvent(Ud)}function KA(n){switch(this._trackPointer(n),this.state){case Mt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Mt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Mt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Mt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Mt.NONE}}function YA(n){this.enabled!==!1&&n.preventDefault()}function qA(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ZA(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ap(n,e){if(e===uw)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Nu||e===kg){let t=n.getIndex();if(t===null){const s=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)s.push(l);n.setIndex(s),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const r=t.count-2,i=[];if(e===Nu)for(let s=1;s<=r;s++)i.push(t.getX(0)),i.push(t.getX(s)),i.push(t.getX(s+1));else for(let s=0;s<r;s++)s%2===0?(i.push(t.getX(s)),i.push(t.getX(s+1)),i.push(t.getX(s+2))):(i.push(t.getX(s+2)),i.push(t.getX(s+1)),i.push(t.getX(s)));i.length/3!==r&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const o=n.clone();return o.setIndex(i),o.clearGroups(),o}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class JA extends Jo{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new r3(t)}),this.register(function(t){return new i3(t)}),this.register(function(t){return new h3(t)}),this.register(function(t){return new p3(t)}),this.register(function(t){return new m3(t)}),this.register(function(t){return new s3(t)}),this.register(function(t){return new a3(t)}),this.register(function(t){return new l3(t)}),this.register(function(t){return new c3(t)}),this.register(function(t){return new n3(t)}),this.register(function(t){return new u3(t)}),this.register(function(t){return new o3(t)}),this.register(function(t){return new f3(t)}),this.register(function(t){return new d3(t)}),this.register(function(t){return new e3(t)}),this.register(function(t){return new g3(t)}),this.register(function(t){return new v3(t)})}load(e,t,r,i){const o=this;let s;if(this.resourcePath!=="")s=this.resourcePath;else if(this.path!==""){const c=Ps.extractUrlBase(e);s=Ps.resolveURL(c,this.path)}else s=Ps.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),o.manager.itemError(e),o.manager.itemEnd(e)},l=new e0(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{o.parse(c,s,function(u){t(u),o.manager.itemEnd(e)},a)}catch(u){a(u)}},r,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,r,i){let o;const s={},a={},l=new TextDecoder;if(typeof e=="string")o=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===a0){try{s[rt.KHR_BINARY_GLTF]=new b3(e)}catch(d){i&&i(d);return}o=JSON.parse(s[rt.KHR_BINARY_GLTF].content)}else o=JSON.parse(l.decode(e));else o=e;if(o.asset===void 0||o.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new L3(o,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const d=this.pluginCallbacks[u](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,s[d.name]=!0}if(o.extensionsUsed)for(let u=0;u<o.extensionsUsed.length;++u){const d=o.extensionsUsed[u],f=o.extensionsRequired||[];switch(d){case rt.KHR_MATERIALS_UNLIT:s[d]=new t3;break;case rt.KHR_DRACO_MESH_COMPRESSION:s[d]=new _3(o,this.dracoLoader);break;case rt.KHR_TEXTURE_TRANSFORM:s[d]=new y3;break;case rt.KHR_MESH_QUANTIZATION:s[d]=new x3;break;default:f.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(s),c.setPlugins(a),c.parse(r,i)}parseAsync(e,t){const r=this;return new Promise(function(i,o){r.parse(e,t,i,o)})}}function QA(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const rt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class e3{constructor(e){this.parser=e,this.name=rt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let r=0,i=t.length;r<i;r++){const o=t[r];o.extensions&&o.extensions[this.name]&&o.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,o.extensions[this.name].light)}}_loadLight(e){const t=this.parser,r="light:"+e;let i=t.cache.get(r);if(i)return i;const o=t.json,l=((o.extensions&&o.extensions[this.name]||{}).lights||[])[e];let c;const u=new Xe(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],mn);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new VM(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new zM(u),c.distance=d;break;case"spot":c=new UM(u),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Rr(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(r,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,r=this.parser,o=r.json.nodes[e],a=(o.extensions&&o.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return r._getNodeRef(t.cache,a,l)})}}class t3{constructor(){this.name=rt.KHR_MATERIALS_UNLIT}getMaterialType(){return li}extendParams(e,t,r){const i=[];e.color=new Xe(1,1,1),e.opacity=1;const o=t.pbrMetallicRoughness;if(o){if(Array.isArray(o.baseColorFactor)){const s=o.baseColorFactor;e.color.setRGB(s[0],s[1],s[2],mn),e.opacity=s[3]}o.baseColorTexture!==void 0&&i.push(r.assignTexture(e,"map",o.baseColorTexture,Yt))}return Promise.all(i)}}class n3{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=i.extensions[this.name].emissiveStrength;return o!==void 0&&(t.emissiveIntensity=o),Promise.resolve()}}class r3{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const r=this.parser.json.materials[e];return!r.extensions||!r.extensions[this.name]?null:mr}extendMaterialParams(e,t){const r=this.parser,i=r.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=[],s=i.extensions[this.name];if(s.clearcoatFactor!==void 0&&(t.clearcoat=s.clearcoatFactor),s.clearcoatTexture!==void 0&&o.push(r.assignTexture(t,"clearcoatMap",s.clearcoatTexture)),s.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=s.clearcoatRoughnessFactor),s.clearcoatRoughnessTexture!==void 0&&o.push(r.assignTexture(t,"clearcoatRoughnessMap",s.clearcoatRoughnessTexture)),s.clearcoatNormalTexture!==void 0&&(o.push(r.assignTexture(t,"clearcoatNormalMap",s.clearcoatNormalTexture)),s.clearcoatNormalTexture.scale!==void 0)){const a=s.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new $e(a,a)}return Promise.all(o)}}class i3{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const r=this.parser.json.materials[e];return!r.extensions||!r.extensions[this.name]?null:mr}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=i.extensions[this.name];return t.dispersion=o.dispersion!==void 0?o.dispersion:0,Promise.resolve()}}class o3{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const r=this.parser.json.materials[e];return!r.extensions||!r.extensions[this.name]?null:mr}extendMaterialParams(e,t){const r=this.parser,i=r.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=[],s=i.extensions[this.name];return s.iridescenceFactor!==void 0&&(t.iridescence=s.iridescenceFactor),s.iridescenceTexture!==void 0&&o.push(r.assignTexture(t,"iridescenceMap",s.iridescenceTexture)),s.iridescenceIor!==void 0&&(t.iridescenceIOR=s.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),s.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=s.iridescenceThicknessMinimum),s.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=s.iridescenceThicknessMaximum),s.iridescenceThicknessTexture!==void 0&&o.push(r.assignTexture(t,"iridescenceThicknessMap",s.iridescenceThicknessTexture)),Promise.all(o)}}class s3{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_SHEEN}getMaterialType(e){const r=this.parser.json.materials[e];return!r.extensions||!r.extensions[this.name]?null:mr}extendMaterialParams(e,t){const r=this.parser,i=r.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=[];t.sheenColor=new Xe(0,0,0),t.sheenRoughness=0,t.sheen=1;const s=i.extensions[this.name];if(s.sheenColorFactor!==void 0){const a=s.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],mn)}return s.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=s.sheenRoughnessFactor),s.sheenColorTexture!==void 0&&o.push(r.assignTexture(t,"sheenColorMap",s.sheenColorTexture,Yt)),s.sheenRoughnessTexture!==void 0&&o.push(r.assignTexture(t,"sheenRoughnessMap",s.sheenRoughnessTexture)),Promise.all(o)}}class a3{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const r=this.parser.json.materials[e];return!r.extensions||!r.extensions[this.name]?null:mr}extendMaterialParams(e,t){const r=this.parser,i=r.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=[],s=i.extensions[this.name];return s.transmissionFactor!==void 0&&(t.transmission=s.transmissionFactor),s.transmissionTexture!==void 0&&o.push(r.assignTexture(t,"transmissionMap",s.transmissionTexture)),Promise.all(o)}}class l3{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_VOLUME}getMaterialType(e){const r=this.parser.json.materials[e];return!r.extensions||!r.extensions[this.name]?null:mr}extendMaterialParams(e,t){const r=this.parser,i=r.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=[],s=i.extensions[this.name];t.thickness=s.thicknessFactor!==void 0?s.thicknessFactor:0,s.thicknessTexture!==void 0&&o.push(r.assignTexture(t,"thicknessMap",s.thicknessTexture)),t.attenuationDistance=s.attenuationDistance||1/0;const a=s.attenuationColor||[1,1,1];return t.attenuationColor=new Xe().setRGB(a[0],a[1],a[2],mn),Promise.all(o)}}class c3{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_IOR}getMaterialType(e){const r=this.parser.json.materials[e];return!r.extensions||!r.extensions[this.name]?null:mr}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=i.extensions[this.name];return t.ior=o.ior!==void 0?o.ior:1.5,Promise.resolve()}}class u3{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const r=this.parser.json.materials[e];return!r.extensions||!r.extensions[this.name]?null:mr}extendMaterialParams(e,t){const r=this.parser,i=r.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=[],s=i.extensions[this.name];t.specularIntensity=s.specularFactor!==void 0?s.specularFactor:1,s.specularTexture!==void 0&&o.push(r.assignTexture(t,"specularIntensityMap",s.specularTexture));const a=s.specularColorFactor||[1,1,1];return t.specularColor=new Xe().setRGB(a[0],a[1],a[2],mn),s.specularColorTexture!==void 0&&o.push(r.assignTexture(t,"specularColorMap",s.specularColorTexture,Yt)),Promise.all(o)}}class d3{constructor(e){this.parser=e,this.name=rt.EXT_MATERIALS_BUMP}getMaterialType(e){const r=this.parser.json.materials[e];return!r.extensions||!r.extensions[this.name]?null:mr}extendMaterialParams(e,t){const r=this.parser,i=r.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=[],s=i.extensions[this.name];return t.bumpScale=s.bumpFactor!==void 0?s.bumpFactor:1,s.bumpTexture!==void 0&&o.push(r.assignTexture(t,"bumpMap",s.bumpTexture)),Promise.all(o)}}class f3{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const r=this.parser.json.materials[e];return!r.extensions||!r.extensions[this.name]?null:mr}extendMaterialParams(e,t){const r=this.parser,i=r.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=[],s=i.extensions[this.name];return s.anisotropyStrength!==void 0&&(t.anisotropy=s.anisotropyStrength),s.anisotropyRotation!==void 0&&(t.anisotropyRotation=s.anisotropyRotation),s.anisotropyTexture!==void 0&&o.push(r.assignTexture(t,"anisotropyMap",s.anisotropyTexture)),Promise.all(o)}}class h3{constructor(e){this.parser=e,this.name=rt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,r=t.json,i=r.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const o=i.extensions[this.name],s=t.options.ktx2Loader;if(!s){if(r.extensionsRequired&&r.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,o.source,s)}}class p3{constructor(e){this.parser=e,this.name=rt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,r=this.parser,i=r.json,o=i.textures[e];if(!o.extensions||!o.extensions[t])return null;const s=o.extensions[t],a=i.images[s.source];let l=r.textureLoader;if(a.uri){const c=r.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return r.loadTextureImage(e,s.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return r.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class m3{constructor(e){this.parser=e,this.name=rt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,r=this.parser,i=r.json,o=i.textures[e];if(!o.extensions||!o.extensions[t])return null;const s=o.extensions[t],a=i.images[s.source];let l=r.textureLoader;if(a.uri){const c=r.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return r.loadTextureImage(e,s.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return r.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class g3{constructor(e){this.name=rt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,r=t.bufferViews[e];if(r.extensions&&r.extensions[this.name]){const i=r.extensions[this.name],o=this.parser.getDependency("buffer",i.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return o.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,d=i.byteStride,f=new Uint8Array(a,l,c);return s.decodeGltfBufferAsync?s.decodeGltfBufferAsync(u,d,f,i.mode,i.filter).then(function(h){return h.buffer}):s.ready.then(function(){const h=new ArrayBuffer(u*d);return s.decodeGltfBuffer(new Uint8Array(h),u,d,f,i.mode,i.filter),h})})}else return null}}class v3{constructor(e){this.name=rt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,r=t.nodes[e];if(!r.extensions||!r.extensions[this.name]||r.mesh===void 0)return null;const i=t.meshes[r.mesh];for(const c of i.primitives)if(c.mode!==In.TRIANGLES&&c.mode!==In.TRIANGLE_STRIP&&c.mode!==In.TRIANGLE_FAN&&c.mode!==void 0)return null;const s=r.extensions[this.name].attributes,a=[],l={};for(const c in s)a.push(this.parser.getDependency("accessor",s[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),d=u.isGroup?u.children:[u],f=c[0].count,h=[];for(const g of d){const v=new qe,m=new N,p=new dr,E=new N(1,1,1),x=new mM(g.geometry,g.material,f);for(let y=0;y<f;y++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,y),l.SCALE&&E.fromBufferAttribute(l.SCALE,y),x.setMatrixAt(y,v.compose(m,p,E));for(const y in l)if(y==="_COLOR_0"){const R=l[y];x.instanceColor=new Bu(R.array,R.itemSize,R.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,l[y]);Dt.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),h.push(x)}return u.isGroup?(u.clear(),u.add(...h),u):h[0]}))}}const a0="glTF",ps=12,Rp={JSON:1313821514,BIN:5130562};class b3{constructor(e){this.name=rt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ps),r=new TextDecoder;if(this.header={magic:r.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==a0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-ps,o=new DataView(e,ps);let s=0;for(;s<i;){const a=o.getUint32(s,!0);s+=4;const l=o.getUint32(s,!0);if(s+=4,l===Rp.JSON){const c=new Uint8Array(e,ps+s,a);this.content=r.decode(c)}else if(l===Rp.BIN){const c=ps+s;this.body=e.slice(c,c+a)}s+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class _3{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=rt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const r=this.json,i=this.dracoLoader,o=e.extensions[this.name].bufferView,s=e.extensions[this.name].attributes,a={},l={},c={};for(const u in s){const d=zu[u]||u.toLowerCase();a[d]=s[u]}for(const u in e.attributes){const d=zu[u]||u.toLowerCase();if(s[u]!==void 0){const f=r.accessors[e.attributes[u]],h=No[f.componentType];c[d]=h.name,l[d]=f.normalized===!0}}return t.getDependency("bufferView",o).then(function(u){return new Promise(function(d,f){i.decodeDracoFile(u,function(h){for(const g in h.attributes){const v=h.attributes[g],m=l[g];m!==void 0&&(v.normalized=m)}d(h)},a,c,mn,f)})})}}class y3{constructor(){this.name=rt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class x3{constructor(){this.name=rt.KHR_MESH_QUANTIZATION}}class l0 extends oa{constructor(e,t,r,i){super(e,t,r,i)}copySampleValue_(e){const t=this.resultBuffer,r=this.sampleValues,i=this.valueSize,o=e*i*3+i;for(let s=0;s!==i;s++)t[s]=r[o+s];return t}interpolate_(e,t,r,i){const o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,d=(r-t)/u,f=d*d,h=f*d,g=e*c,v=g-c,m=-2*h+3*f,p=h-f,E=1-m,x=p-f+d;for(let y=0;y!==a;y++){const R=s[v+y+a],P=s[v+y+l]*u,A=s[g+y+a],k=s[g+y]*u;o[y]=E*R+x*P+m*A+p*k}return o}}const S3=new dr;class w3 extends l0{interpolate_(e,t,r,i){const o=super.interpolate_(e,t,r,i);return S3.fromArray(o).normalize().toArray(o),o}}const In={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},No={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Pp={9728:hn,9729:En,9984:wg,9985:qa,9986:vs,9987:Dr},Lp={33071:ai,33648:dl,10497:zo},Ic={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},zu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Zr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},M3={CUBICSPLINE:void 0,LINEAR:Zs,STEP:qs},kc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function T3(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Ld({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ur})),n.DefaultMaterial}function ki(n,e,t){for(const r in t.extensions)n[r]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[r]=t.extensions[r])}function Rr(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function E3(n,e,t){let r=!1,i=!1,o=!1;for(let c=0,u=e.length;c<u;c++){const d=e[c];if(d.POSITION!==void 0&&(r=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(o=!0),r&&i&&o)break}if(!r&&!i&&!o)return Promise.resolve(n);const s=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const d=e[c];if(r){const f=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):n.attributes.position;s.push(f)}if(i){const f=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):n.attributes.normal;a.push(f)}if(o){const f=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):n.attributes.color;l.push(f)}}return Promise.all([Promise.all(s),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],d=c[1],f=c[2];return r&&(n.morphAttributes.position=u),i&&(n.morphAttributes.normal=d),o&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function C3(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,r=e.weights.length;t<r;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let r=0,i=t.length;r<i;r++)n.morphTargetDictionary[t[r]]=r}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function A3(n){let e;const t=n.extensions&&n.extensions[rt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Dc(t.attributes):e=n.indices+":"+Dc(n.attributes)+":"+n.mode,n.targets!==void 0)for(let r=0,i=n.targets.length;r<i;r++)e+=":"+Dc(n.targets[r]);return e}function Dc(n){let e="";const t=Object.keys(n).sort();for(let r=0,i=t.length;r<i;r++)e+=t[r]+":"+n[t[r]]+";";return e}function Hu(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function R3(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const P3=new qe;class L3{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new QA,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let r=!1,i=-1,o=!1,s=-1;if(typeof navigator<"u"){const a=navigator.userAgent;r=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=r&&l?parseInt(l[1],10):-1,o=a.indexOf("Firefox")>-1,s=o?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||r&&i<17||o&&s<98?this.textureLoader=new OM(this.options.manager):this.textureLoader=new GM(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new e0(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const r=this,i=this.json,o=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([r.getDependencies("scene"),r.getDependencies("animation"),r.getDependencies("camera")])}).then(function(s){const a={scene:s[0][i.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:i.asset,parser:r,userData:{}};return ki(o,a,i),Rr(a,i),Promise.all(r._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],r=this.json.meshes||[];for(let i=0,o=t.length;i<o;i++){const s=t[i].joints;for(let a=0,l=s.length;a<l;a++)e[s[a]].isBone=!0}for(let i=0,o=e.length;i<o;i++){const s=e[i];s.mesh!==void 0&&(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0&&(r[s.mesh].isSkinnedMesh=!0)),s.camera!==void 0&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,r){if(e.refs[t]<=1)return r;const i=r.clone(),o=(s,a)=>{const l=this.associations.get(s);l!=null&&this.associations.set(a,l);for(const[c,u]of s.children.entries())o(u,a.children[c])};return o(r,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let r=0;r<t.length;r++){const i=e(t[r]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const r=[];for(let i=0;i<t.length;i++){const o=e(t[i]);o&&r.push(o)}return r}getDependency(e,t){const r=e+":"+t;let i=this.cache.get(r);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(o){return o.loadNode&&o.loadNode(t)});break;case"mesh":i=this._invokeOne(function(o){return o.loadMesh&&o.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(o){return o.loadBufferView&&o.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(o){return o.loadMaterial&&o.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(o){return o.loadTexture&&o.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(o){return o.loadAnimation&&o.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(o){return o!=this&&o.getDependency&&o.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(r,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const r=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(o,s){return r.getDependency(e,s)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],r=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[rt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(o,s){r.load(Ps.resolveURL(t.uri,i.path),o,void 0,function(){s(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(r){const i=t.byteLength||0,o=t.byteOffset||0;return r.slice(o,o+i)})}loadAccessor(e){const t=this,r=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const s=Ic[i.type],a=No[i.componentType],l=i.normalized===!0,c=new a(i.count*s);return Promise.resolve(new pn(c,s,l))}const o=[];return i.bufferView!==void 0?o.push(this.getDependency("bufferView",i.bufferView)):o.push(null),i.sparse!==void 0&&(o.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),o.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(o).then(function(s){const a=s[0],l=Ic[i.type],c=No[i.componentType],u=c.BYTES_PER_ELEMENT,d=u*l,f=i.byteOffset||0,h=i.bufferView!==void 0?r.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let v,m;if(h&&h!==d){const p=Math.floor(f/h),E="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let x=t.cache.get(E);x||(v=new c(a,p*h,i.count*h/u),x=new uM(v,h/u),t.cache.add(E,x)),m=new Cd(x,l,f%h/u,g)}else a===null?v=new c(i.count*l):v=new c(a,f,i.count*l),m=new pn(v,l,g);if(i.sparse!==void 0){const p=Ic.SCALAR,E=No[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,R=new E(s[1],x,i.sparse.count*p),P=new c(s[2],y,i.sparse.count*l);a!==null&&(m=new pn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,k=R.length;A<k;A++){const M=R[A];if(m.setX(M,P[A*l]),l>=2&&m.setY(M,P[A*l+1]),l>=3&&m.setZ(M,P[A*l+2]),l>=4&&m.setW(M,P[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,r=this.options,o=t.textures[e].source,s=t.images[o];let a=this.textureLoader;if(s.uri){const l=r.manager.getHandler(s.uri);l!==null&&(a=l)}return this.loadTextureImage(e,o,a)}loadTextureImage(e,t,r){const i=this,o=this.json,s=o.textures[e],a=o.images[t],l=(a.uri||a.bufferView)+":"+s.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,r).then(function(u){u.flipY=!1,u.name=s.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(o.samplers||{})[s.sampler]||{};return u.magFilter=Pp[f.magFilter]||En,u.minFilter=Pp[f.minFilter]||Dr,u.wrapS=Lp[f.wrapS]||zo,u.wrapT=Lp[f.wrapT]||zo,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==hn&&u.minFilter!==En,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const r=this,i=this.json,o=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const s=i.images[e],a=self.URL||self.webkitURL;let l=s.uri||"",c=!1;if(s.bufferView!==void 0)l=r.getDependency("bufferView",s.bufferView).then(function(d){c=!0;const f=new Blob([d],{type:s.mimeType});return l=a.createObjectURL(f),l});else if(s.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(d){return new Promise(function(f,h){let g=f;t.isImageBitmapLoader===!0&&(g=function(v){const m=new jt(v);m.needsUpdate=!0,f(m)}),t.load(Ps.resolveURL(d,o.path),g,void 0,h)})}).then(function(d){return c===!0&&a.revokeObjectURL(l),Rr(d,s),d.userData.mimeType=s.mimeType||R3(s.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,r,i){const o=this;return this.getDependency("texture",r.index).then(function(s){if(!s)return null;if(r.texCoord!==void 0&&r.texCoord>0&&(s=s.clone(),s.channel=r.texCoord),o.extensions[rt.KHR_TEXTURE_TRANSFORM]){const a=r.extensions!==void 0?r.extensions[rt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=o.associations.get(s);s=o.extensions[rt.KHR_TEXTURE_TRANSFORM].extendTexture(s,a),o.associations.set(s,l)}}return i!==void 0&&(s.colorSpace=i),e[t]=s,s})}assignFinalMaterial(e){const t=e.geometry;let r=e.material;const i=t.attributes.tangent===void 0,o=t.attributes.color!==void 0,s=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+r.uuid;let l=this.cache.get(a);l||(l=new qg,cr.prototype.copy.call(l,r),l.color.copy(r.color),l.map=r.map,l.sizeAttenuation=!1,this.cache.add(a,l)),r=l}else if(e.isLine){const a="LineBasicMaterial:"+r.uuid;let l=this.cache.get(a);l||(l=new Yg,cr.prototype.copy.call(l,r),l.color.copy(r.color),l.map=r.map,this.cache.add(a,l)),r=l}if(i||o||s){let a="ClonedMaterial:"+r.uuid+":";i&&(a+="derivative-tangents:"),o&&(a+="vertex-colors:"),s&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=r.clone(),o&&(l.vertexColors=!0),s&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(r))),r=l}e.material=r}getMaterialType(){return Ld}loadMaterial(e){const t=this,r=this.json,i=this.extensions,o=r.materials[e];let s;const a={},l=o.extensions||{},c=[];if(l[rt.KHR_MATERIALS_UNLIT]){const d=i[rt.KHR_MATERIALS_UNLIT];s=d.getMaterialType(),c.push(d.extendParams(a,o,t))}else{const d=o.pbrMetallicRoughness||{};if(a.color=new Xe(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const f=d.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],mn),a.opacity=f[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",d.baseColorTexture,Yt)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),s=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}o.doubleSided===!0&&(a.side=sr);const u=o.alphaMode||kc.OPAQUE;if(u===kc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===kc.MASK&&(a.alphaTest=o.alphaCutoff!==void 0?o.alphaCutoff:.5)),o.normalTexture!==void 0&&s!==li&&(c.push(t.assignTexture(a,"normalMap",o.normalTexture)),a.normalScale=new $e(1,1),o.normalTexture.scale!==void 0)){const d=o.normalTexture.scale;a.normalScale.set(d,d)}if(o.occlusionTexture!==void 0&&s!==li&&(c.push(t.assignTexture(a,"aoMap",o.occlusionTexture)),o.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=o.occlusionTexture.strength)),o.emissiveFactor!==void 0&&s!==li){const d=o.emissiveFactor;a.emissive=new Xe().setRGB(d[0],d[1],d[2],mn)}return o.emissiveTexture!==void 0&&s!==li&&c.push(t.assignTexture(a,"emissiveMap",o.emissiveTexture,Yt)),Promise.all(c).then(function(){const d=new s(a);return o.name&&(d.name=o.name),Rr(d,o),t.associations.set(d,{materials:e}),o.extensions&&ki(i,d,o),d})}createUniqueName(e){const t=yt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,r=this.extensions,i=this.primitiveCache;function o(a){return r[rt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Ip(l,a,t)})}const s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=A3(c),d=i[u];if(d)s.push(d.promise);else{let f;c.extensions&&c.extensions[rt.KHR_DRACO_MESH_COMPRESSION]?f=o(c):f=Ip(new pr,c,t),i[u]={primitive:c,promise:f},s.push(f)}}return Promise.all(s)}loadMesh(e){const t=this,r=this.json,i=this.extensions,o=r.meshes[e],s=o.primitives,a=[];for(let l=0,c=s.length;l<c;l++){const u=s[l].material===void 0?T3(this.cache):this.getDependency("material",s[l].material);a.push(u)}return a.push(t.loadGeometries(s)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],d=[];for(let h=0,g=u.length;h<g;h++){const v=u[h],m=s[h];let p;const E=c[h];if(m.mode===In.TRIANGLES||m.mode===In.TRIANGLE_STRIP||m.mode===In.TRIANGLE_FAN||m.mode===void 0)p=o.isSkinnedMesh===!0?new fM(v,E):new bn(v,E),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===In.TRIANGLE_STRIP?p.geometry=Ap(p.geometry,kg):m.mode===In.TRIANGLE_FAN&&(p.geometry=Ap(p.geometry,Nu));else if(m.mode===In.LINES)p=new bM(v,E);else if(m.mode===In.LINE_STRIP)p=new Pd(v,E);else if(m.mode===In.LINE_LOOP)p=new _M(v,E);else if(m.mode===In.POINTS)p=new yM(v,E);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&C3(p,o),p.name=t.createUniqueName(o.name||"mesh_"+e),Rr(p,o),m.extensions&&ki(i,p,m),t.assignFinalMaterial(p),d.push(p)}for(let h=0,g=d.length;h<g;h++)t.associations.set(d[h],{meshes:e,primitives:h});if(d.length===1)return o.extensions&&ki(i,d[0],o),d[0];const f=new Fi;o.extensions&&ki(i,f,o),t.associations.set(f,{meshes:e});for(let h=0,g=d.length;h<g;h++)f.add(d[h]);return f})}loadCamera(e){let t;const r=this.json.cameras[e],i=r[r.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return r.type==="perspective"?t=new dn(Og.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):r.type==="orthographic"&&(t=new Dd(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),r.name&&(t.name=this.createUniqueName(r.name)),Rr(t,r),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],r=[];for(let i=0,o=t.joints.length;i<o;i++)r.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?r.push(this.getDependency("accessor",t.inverseBindMatrices)):r.push(null),Promise.all(r).then(function(i){const o=i.pop(),s=i,a=[],l=[];for(let c=0,u=s.length;c<u;c++){const d=s[c];if(d){a.push(d);const f=new qe;o!==null&&f.fromArray(o.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ad(a,l)})}loadAnimation(e){const t=this.json,r=this,i=t.animations[e],o=i.name?i.name:"animation_"+e,s=[],a=[],l=[],c=[],u=[];for(let d=0,f=i.channels.length;d<f;d++){const h=i.channels[d],g=i.samplers[h.sampler],v=h.target,m=v.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,E=i.parameters!==void 0?i.parameters[g.output]:g.output;v.node!==void 0&&(s.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",E)),c.push(g),u.push(v))}return Promise.all([Promise.all(s),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(d){const f=d[0],h=d[1],g=d[2],v=d[3],m=d[4],p=[];for(let E=0,x=f.length;E<x;E++){const y=f[E],R=h[E],P=g[E],A=v[E],k=m[E];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const M=r._createAnimationTracks(y,R,P,A,k);if(M)for(let w=0;w<M.length;w++)p.push(M[w])}return new RM(o,void 0,p)})}createNodeMesh(e){const t=this.json,r=this,i=t.nodes[e];return i.mesh===void 0?null:r.getDependency("mesh",i.mesh).then(function(o){const s=r._getNodeRef(r.meshCache,i.mesh,o);return i.weights!==void 0&&s.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),s})}loadNode(e){const t=this.json,r=this,i=t.nodes[e],o=r._loadNodeShallow(e),s=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)s.push(r.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):r.getDependency("skin",i.skin);return Promise.all([o,Promise.all(s),l]).then(function(c){const u=c[0],d=c[1],f=c[2];f!==null&&u.traverse(function(h){h.isSkinnedMesh&&h.bind(f,P3)});for(let h=0,g=d.length;h<g;h++)u.add(d[h]);return u})}_loadNodeShallow(e){const t=this.json,r=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const o=t.nodes[e],s=o.name?i.createUniqueName(o.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),o.camera!==void 0&&a.push(i.getDependency("camera",o.camera).then(function(c){return i._getNodeRef(i.cameraCache,o.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(o.isBone===!0?u=new Xg:c.length>1?u=new Fi:c.length===1?u=c[0]:u=new Dt,u!==c[0])for(let d=0,f=c.length;d<f;d++)u.add(c[d]);if(o.name&&(u.userData.name=o.name,u.name=s),Rr(u,o),o.extensions&&ki(r,u,o),o.matrix!==void 0){const d=new qe;d.fromArray(o.matrix),u.applyMatrix4(d)}else o.translation!==void 0&&u.position.fromArray(o.translation),o.rotation!==void 0&&u.quaternion.fromArray(o.rotation),o.scale!==void 0&&u.scale.fromArray(o.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,r=this.json.scenes[e],i=this,o=new Fi;r.name&&(o.name=i.createUniqueName(r.name)),Rr(o,r),r.extensions&&ki(t,o,r);const s=r.nodes||[],a=[];for(let l=0,c=s.length;l<c;l++)a.push(i.getDependency("node",s[l]));return Promise.all(a).then(function(l){for(let u=0,d=l.length;u<d;u++)o.add(l[u]);const c=u=>{const d=new Map;for(const[f,h]of i.associations)(f instanceof cr||f instanceof jt)&&d.set(f,h);return u.traverse(f=>{const h=i.associations.get(f);h!=null&&d.set(f,h)}),d};return i.associations=c(o),o})}_createAnimationTracks(e,t,r,i,o){const s=[],a=e.name?e.name:e.uuid,l=[];Zr[o.path]===Zr.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(Zr[o.path]){case Zr.weights:c=Wo;break;case Zr.rotation:c=jo;break;case Zr.position:case Zr.scale:c=Xo;break;default:switch(r.itemSize){case 1:c=Wo;break;case 2:case 3:default:c=Xo;break}break}const u=i.interpolation!==void 0?M3[i.interpolation]:Zs,d=this._getArrayFromAccessor(r);for(let f=0,h=l.length;f<h;f++){const g=new c(l[f]+"."+Zr[o.path],t.array,d,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),s.push(g)}return s}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const r=Hu(t.constructor),i=new Float32Array(t.length);for(let o=0,s=t.length;o<s;o++)i[o]=t[o]*r;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(r){const i=this instanceof jo?w3:l0;return new i(this.times,this.values,this.getValueSize()/3,r)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function I3(n,e,t){const r=e.attributes,i=new Gr;if(r.POSITION!==void 0){const a=t.json.accessors[r.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new N(l[0],l[1],l[2]),new N(c[0],c[1],c[2])),a.normalized){const u=Hu(No[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const o=e.targets;if(o!==void 0){const a=new N,l=new N;for(let c=0,u=o.length;c<u;c++){const d=o[c];if(d.POSITION!==void 0){const f=t.json.accessors[d.POSITION],h=f.min,g=f.max;if(h!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(h[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(h[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(h[2]),Math.abs(g[2]))),f.normalized){const v=Hu(No[f.componentType]);l.multiplyScalar(v)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}n.boundingBox=i;const s=new hr;i.getCenter(s.center),s.radius=i.min.distanceTo(i.max)/2,n.boundingSphere=s}function Ip(n,e,t){const r=e.attributes,i=[];function o(s,a){return t.getDependency("accessor",s).then(function(l){n.setAttribute(a,l)})}for(const s in r){const a=zu[s]||s.toLowerCase();a in n.attributes||i.push(o(r[s],a))}if(e.indices!==void 0&&!n.index){const s=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});i.push(s)}return st.workingColorSpace!==mn&&"COLOR_0"in r&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${st.workingColorSpace}" not supported.`),Rr(n,e),I3(n,e,t),Promise.all(i).then(function(){return e.targets!==void 0?E3(n,e.targets,t):n})}class kp{static isWebGL2Available(){try{const e=document.createElement("canvas");return!!(window.WebGL2RenderingContext&&e.getContext("webgl2"))}catch{return!1}}static isColorSpaceAvailable(e){try{const t=document.createElement("canvas"),r=window.WebGL2RenderingContext&&t.getContext("webgl2");return r.drawingBufferColorSpace=e,r.drawingBufferColorSpace===e}catch{return!1}}static getWebGL2ErrorMessage(){return this.getErrorMessage(2)}static getErrorMessage(e){const t={1:"WebGL",2:"WebGL 2"},r={1:window.WebGLRenderingContext,2:window.WebGL2RenderingContext};let i='Your $0 does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">$1</a>';const o=document.createElement("div");return o.id="webglmessage",o.style.fontFamily="monospace",o.style.fontSize="13px",o.style.fontWeight="normal",o.style.textAlign="center",o.style.background="#fff",o.style.color="#000",o.style.padding="1.5em",o.style.width="400px",o.style.margin="5em auto 0",r[e]?i=i.replace("$0","graphics card"):i=i.replace("$0","browser"),i=i.replace("$1",t[e]),o.innerHTML=i,o}static isWebGLAvailable(){console.warn("isWebGLAvailable() has been deprecated and will be removed in r178. Use isWebGL2Available() instead.");try{const e=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(e.getContext("webgl")||e.getContext("experimental-webgl")))}catch{return!1}}static getWebGLErrorMessage(){return console.warn("getWebGLErrorMessage() has been deprecated and will be removed in r178. Use getWebGL2ErrorMessage() instead."),this.getErrorMessage(1)}}const k3={mounted(){if(window.innerWidth<1024)return;if(!kp.isWebGL2Available()){console.error(kp.getWebGL2ErrorMessage().textContent);return}const n=document.getElementById("grid"),e=n.getBoundingClientRect(),t=e.height,r=e.width,i=new cM,o=new dn(75,r/t,.1,1e3),s=new BA;s.setSize(r,t),s.setAnimationLoop(d),n.appendChild(s.domElement);const a=new Yo(1,1,1),l=new li({color:3355443}),c=new bn(a,l),u=new FA(o,s.domElement);new JA,o.position.set(0,0,5),u.update(),i.add(c),i.background=new Xe(1579032);function d(){u.update(),c.rotation.x+=.01,c.rotation.y+=.01,s.render(i,o)}}},D3=Object.assign(k3,{__name:"Grid",setup(n){return(e,t)=>(ge(),Pe("body",null,t[0]||(t[0]=[J("div",{id:"grid",class:"grid"},null,-1)])))}}),N3=Bn(D3,[["__scopeId","data-v-e437c5c7"]]);var c0={name:"SpinnerIcon",extends:Un};function O3(n,e,t,r,i,o){return ge(),Pe("svg",he({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),e[0]||(e[0]=[J("path",{d:"M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",fill:"currentColor"},null,-1)]),16)}c0.render=O3;var B3=function(e){var t=e.dt;return`
.p-badge {
    display: inline-flex;
    border-radius: `.concat(t("badge.border.radius"),`;
    align-items: center;
    justify-content: center;
    padding: `).concat(t("badge.padding"),`;
    background: `).concat(t("badge.primary.background"),`;
    color: `).concat(t("badge.primary.color"),`;
    font-size: `).concat(t("badge.font.size"),`;
    font-weight: `).concat(t("badge.font.weight"),`;
    min-width: `).concat(t("badge.min.width"),`;
    height: `).concat(t("badge.height"),`;
}

.p-badge-dot {
    width: `).concat(t("badge.dot.size"),`;
    min-width: `).concat(t("badge.dot.size"),`;
    height: `).concat(t("badge.dot.size"),`;
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: `).concat(t("badge.secondary.background"),`;
    color: `).concat(t("badge.secondary.color"),`;
}

.p-badge-success {
    background: `).concat(t("badge.success.background"),`;
    color: `).concat(t("badge.success.color"),`;
}

.p-badge-info {
    background: `).concat(t("badge.info.background"),`;
    color: `).concat(t("badge.info.color"),`;
}

.p-badge-warn {
    background: `).concat(t("badge.warn.background"),`;
    color: `).concat(t("badge.warn.color"),`;
}

.p-badge-danger {
    background: `).concat(t("badge.danger.background"),`;
    color: `).concat(t("badge.danger.color"),`;
}

.p-badge-contrast {
    background: `).concat(t("badge.contrast.background"),`;
    color: `).concat(t("badge.contrast.color"),`;
}

.p-badge-sm {
    font-size: `).concat(t("badge.sm.font.size"),`;
    min-width: `).concat(t("badge.sm.min.width"),`;
    height: `).concat(t("badge.sm.height"),`;
}

.p-badge-lg {
    font-size: `).concat(t("badge.lg.font.size"),`;
    min-width: `).concat(t("badge.lg.min.width"),`;
    height: `).concat(t("badge.lg.height"),`;
}

.p-badge-xl {
    font-size: `).concat(t("badge.xl.font.size"),`;
    min-width: `).concat(t("badge.xl.min.width"),`;
    height: `).concat(t("badge.xl.height"),`;
}
`)},U3={root:function(e){var t=e.props,r=e.instance;return["p-badge p-component",{"p-badge-circle":Tt(t.value)&&String(t.value).length===1,"p-badge-dot":Cn(t.value)&&!r.$slots.default,"p-badge-sm":t.size==="small","p-badge-lg":t.size==="large","p-badge-xl":t.size==="xlarge","p-badge-info":t.severity==="info","p-badge-success":t.severity==="success","p-badge-warn":t.severity==="warn","p-badge-danger":t.severity==="danger","p-badge-secondary":t.severity==="secondary","p-badge-contrast":t.severity==="contrast"}]}},F3=ut.extend({name:"badge",theme:B3,classes:U3}),z3={name:"BaseBadge",extends:Vr,props:{value:{type:[String,Number],default:null},severity:{type:String,default:null},size:{type:String,default:null}},style:F3,provide:function(){return{$pcBadge:this,$parentInstance:this}}},u0={name:"Badge",extends:z3,inheritAttrs:!1};function H3(n,e,t,r,i,o){return ge(),Pe("span",he({class:n.cx("root")},n.ptmi("root")),[nt(n.$slots,"default",{},function(){return[Qe(Kt(n.value),1)]})],16)}u0.render=H3;var V3=function(e){var t=e.dt;return`
.p-ink {
    display: block;
    position: absolute;
    background: `.concat(t("ripple.background"),`;
    border-radius: 100%;
    transform: scale(0);
    pointer-events: none;
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`)},G3={root:"p-ink"},$3=ut.extend({name:"ripple-directive",theme:V3,classes:G3}),W3=Ze.extend({style:$3});function Qs(n){"@babel/helpers - typeof";return Qs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Qs(n)}function j3(n){return q3(n)||Y3(n)||K3(n)||X3()}function X3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function K3(n,e){if(n){if(typeof n=="string")return Vu(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Vu(n,e):void 0}}function Y3(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function q3(n){if(Array.isArray(n))return Vu(n)}function Vu(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=Array(e);t<e;t++)r[t]=n[t];return r}function Dp(n,e,t){return(e=Z3(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Z3(n){var e=J3(n,"string");return Qs(e)=="symbol"?e:e+""}function J3(n,e){if(Qs(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(Qs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var d0=W3.extend("ripple",{watch:{"config.ripple":function(e){e?(this.createRipple(this.$host),this.bindEvents(this.$host),this.$host.setAttribute("data-pd-ripple",!0),this.$host.style.overflow="hidden",this.$host.style.position="relative"):(this.remove(this.$host),this.$host.removeAttribute("data-pd-ripple"))}},unmounted:function(e){this.remove(e)},timeout:void 0,methods:{bindEvents:function(e){e.addEventListener("mousedown",this.onMouseDown.bind(this))},unbindEvents:function(e){e.removeEventListener("mousedown",this.onMouseDown.bind(this))},createRipple:function(e){var t=Cs("span",Dp(Dp({role:"presentation","aria-hidden":!0,"data-p-ink":!0,"data-p-ink-active":!1,class:!this.isUnstyled()&&this.cx("root"),onAnimationEnd:this.onAnimationEnd.bind(this)},this.$attrSelector,""),"p-bind",this.ptm("root")));e.appendChild(t),this.$el=t},remove:function(e){var t=this.getInk(e);t&&(this.$host.style.overflow="",this.$host.style.position="",this.unbindEvents(e),t.removeEventListener("animationend",this.onAnimationEnd),t.remove())},onMouseDown:function(e){var t=this,r=e.currentTarget,i=this.getInk(r);if(!(!i||getComputedStyle(i,null).display==="none")){if(!this.isUnstyled()&&Po(i,"p-ink-active"),i.setAttribute("data-p-ink-active","false"),!Uf(i)&&!Ff(i)){var o=Math.max(Jr(r),Qr(r));i.style.height=o+"px",i.style.width=o+"px"}var s=E_(r),a=e.pageX-s.left+document.body.scrollTop-Ff(i)/2,l=e.pageY-s.top+document.body.scrollLeft-Uf(i)/2;i.style.top=l+"px",i.style.left=a+"px",!this.isUnstyled()&&Ko(i,"p-ink-active"),i.setAttribute("data-p-ink-active","true"),this.timeout=setTimeout(function(){i&&(!t.isUnstyled()&&Po(i,"p-ink-active"),i.setAttribute("data-p-ink-active","false"))},401)}},onAnimationEnd:function(e){this.timeout&&clearTimeout(this.timeout),!this.isUnstyled()&&Po(e.currentTarget,"p-ink-active"),e.currentTarget.setAttribute("data-p-ink-active","false")},getInk:function(e){return e&&e.children?j3(e.children).find(function(t){return Pr(t,"data-pc-name")==="ripple"}):void 0}}});function ea(n){"@babel/helpers - typeof";return ea=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ea(n)}function nr(n,e,t){return(e=Q3(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Q3(n){var e=eR(n,"string");return ea(e)=="symbol"?e:e+""}function eR(n,e){if(ea(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(ea(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var tR=function(e){var t=e.dt;return`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: `.concat(t("button.primary.color"),`;
    background: `).concat(t("button.primary.background"),`;
    border: 1px solid `).concat(t("button.primary.border.color"),`;
    padding: `).concat(t("button.padding.y")," ").concat(t("button.padding.x"),`;
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background `).concat(t("button.transition.duration"),", color ").concat(t("button.transition.duration"),", border-color ").concat(t("button.transition.duration"),`,
            outline-color `).concat(t("button.transition.duration"),", box-shadow ").concat(t("button.transition.duration"),`;
    border-radius: `).concat(t("button.border.radius"),`;
    outline-color: transparent;
    gap: `).concat(t("button.gap"),`;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-right:dir(rtl) {
    order: -1;
}

.p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: `).concat(t("button.icon.only.width"),`;
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: `).concat(t("button.icon.only.width"),`;
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: `).concat(t("button.sm.font.size"),`;
    padding: `).concat(t("button.sm.padding.y")," ").concat(t("button.sm.padding.x"),`;
}

.p-button-sm .p-button-icon {
    font-size: `).concat(t("button.sm.font.size"),`;
}

.p-button-lg {
    font-size: `).concat(t("button.lg.font.size"),`;
    padding: `).concat(t("button.lg.padding.y")," ").concat(t("button.lg.padding.x"),`;
}

.p-button-lg .p-button-icon {
    font-size: `).concat(t("button.lg.font.size"),`;
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: `).concat(t("button.label.font.weight"),`;
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: `).concat(t("button.icon.only.width"),`;
}

.p-button:not(:disabled):hover {
    background: `).concat(t("button.primary.hover.background"),`;
    border: 1px solid `).concat(t("button.primary.hover.border.color"),`;
    color: `).concat(t("button.primary.hover.color"),`;
}

.p-button:not(:disabled):active {
    background: `).concat(t("button.primary.active.background"),`;
    border: 1px solid `).concat(t("button.primary.active.border.color"),`;
    color: `).concat(t("button.primary.active.color"),`;
}

.p-button:focus-visible {
    box-shadow: `).concat(t("button.primary.focus.ring.shadow"),`;
    outline: `).concat(t("button.focus.ring.width")," ").concat(t("button.focus.ring.style")," ").concat(t("button.primary.focus.ring.color"),`;
    outline-offset: `).concat(t("button.focus.ring.offset"),`;
}

.p-button .p-badge {
    min-width: `).concat(t("button.badge.size"),`;
    height: `).concat(t("button.badge.size"),`;
    line-height: `).concat(t("button.badge.size"),`;
}

.p-button-raised {
    box-shadow: `).concat(t("button.raised.shadow"),`;
}

.p-button-rounded {
    border-radius: `).concat(t("button.rounded.border.radius"),`;
}

.p-button-secondary {
    background: `).concat(t("button.secondary.background"),`;
    border: 1px solid `).concat(t("button.secondary.border.color"),`;
    color: `).concat(t("button.secondary.color"),`;
}

.p-button-secondary:not(:disabled):hover {
    background: `).concat(t("button.secondary.hover.background"),`;
    border: 1px solid `).concat(t("button.secondary.hover.border.color"),`;
    color: `).concat(t("button.secondary.hover.color"),`;
}

.p-button-secondary:not(:disabled):active {
    background: `).concat(t("button.secondary.active.background"),`;
    border: 1px solid `).concat(t("button.secondary.active.border.color"),`;
    color: `).concat(t("button.secondary.active.color"),`;
}

.p-button-secondary:focus-visible {
    outline-color: `).concat(t("button.secondary.focus.ring.color"),`;
    box-shadow: `).concat(t("button.secondary.focus.ring.shadow"),`;
}

.p-button-success {
    background: `).concat(t("button.success.background"),`;
    border: 1px solid `).concat(t("button.success.border.color"),`;
    color: `).concat(t("button.success.color"),`;
}

.p-button-success:not(:disabled):hover {
    background: `).concat(t("button.success.hover.background"),`;
    border: 1px solid `).concat(t("button.success.hover.border.color"),`;
    color: `).concat(t("button.success.hover.color"),`;
}

.p-button-success:not(:disabled):active {
    background: `).concat(t("button.success.active.background"),`;
    border: 1px solid `).concat(t("button.success.active.border.color"),`;
    color: `).concat(t("button.success.active.color"),`;
}

.p-button-success:focus-visible {
    outline-color: `).concat(t("button.success.focus.ring.color"),`;
    box-shadow: `).concat(t("button.success.focus.ring.shadow"),`;
}

.p-button-info {
    background: `).concat(t("button.info.background"),`;
    border: 1px solid `).concat(t("button.info.border.color"),`;
    color: `).concat(t("button.info.color"),`;
}

.p-button-info:not(:disabled):hover {
    background: `).concat(t("button.info.hover.background"),`;
    border: 1px solid `).concat(t("button.info.hover.border.color"),`;
    color: `).concat(t("button.info.hover.color"),`;
}

.p-button-info:not(:disabled):active {
    background: `).concat(t("button.info.active.background"),`;
    border: 1px solid `).concat(t("button.info.active.border.color"),`;
    color: `).concat(t("button.info.active.color"),`;
}

.p-button-info:focus-visible {
    outline-color: `).concat(t("button.info.focus.ring.color"),`;
    box-shadow: `).concat(t("button.info.focus.ring.shadow"),`;
}

.p-button-warn {
    background: `).concat(t("button.warn.background"),`;
    border: 1px solid `).concat(t("button.warn.border.color"),`;
    color: `).concat(t("button.warn.color"),`;
}

.p-button-warn:not(:disabled):hover {
    background: `).concat(t("button.warn.hover.background"),`;
    border: 1px solid `).concat(t("button.warn.hover.border.color"),`;
    color: `).concat(t("button.warn.hover.color"),`;
}

.p-button-warn:not(:disabled):active {
    background: `).concat(t("button.warn.active.background"),`;
    border: 1px solid `).concat(t("button.warn.active.border.color"),`;
    color: `).concat(t("button.warn.active.color"),`;
}

.p-button-warn:focus-visible {
    outline-color: `).concat(t("button.warn.focus.ring.color"),`;
    box-shadow: `).concat(t("button.warn.focus.ring.shadow"),`;
}

.p-button-help {
    background: `).concat(t("button.help.background"),`;
    border: 1px solid `).concat(t("button.help.border.color"),`;
    color: `).concat(t("button.help.color"),`;
}

.p-button-help:not(:disabled):hover {
    background: `).concat(t("button.help.hover.background"),`;
    border: 1px solid `).concat(t("button.help.hover.border.color"),`;
    color: `).concat(t("button.help.hover.color"),`;
}

.p-button-help:not(:disabled):active {
    background: `).concat(t("button.help.active.background"),`;
    border: 1px solid `).concat(t("button.help.active.border.color"),`;
    color: `).concat(t("button.help.active.color"),`;
}

.p-button-help:focus-visible {
    outline-color: `).concat(t("button.help.focus.ring.color"),`;
    box-shadow: `).concat(t("button.help.focus.ring.shadow"),`;
}

.p-button-danger {
    background: `).concat(t("button.danger.background"),`;
    border: 1px solid `).concat(t("button.danger.border.color"),`;
    color: `).concat(t("button.danger.color"),`;
}

.p-button-danger:not(:disabled):hover {
    background: `).concat(t("button.danger.hover.background"),`;
    border: 1px solid `).concat(t("button.danger.hover.border.color"),`;
    color: `).concat(t("button.danger.hover.color"),`;
}

.p-button-danger:not(:disabled):active {
    background: `).concat(t("button.danger.active.background"),`;
    border: 1px solid `).concat(t("button.danger.active.border.color"),`;
    color: `).concat(t("button.danger.active.color"),`;
}

.p-button-danger:focus-visible {
    outline-color: `).concat(t("button.danger.focus.ring.color"),`;
    box-shadow: `).concat(t("button.danger.focus.ring.shadow"),`;
}

.p-button-contrast {
    background: `).concat(t("button.contrast.background"),`;
    border: 1px solid `).concat(t("button.contrast.border.color"),`;
    color: `).concat(t("button.contrast.color"),`;
}

.p-button-contrast:not(:disabled):hover {
    background: `).concat(t("button.contrast.hover.background"),`;
    border: 1px solid `).concat(t("button.contrast.hover.border.color"),`;
    color: `).concat(t("button.contrast.hover.color"),`;
}

.p-button-contrast:not(:disabled):active {
    background: `).concat(t("button.contrast.active.background"),`;
    border: 1px solid `).concat(t("button.contrast.active.border.color"),`;
    color: `).concat(t("button.contrast.active.color"),`;
}

.p-button-contrast:focus-visible {
    outline-color: `).concat(t("button.contrast.focus.ring.color"),`;
    box-shadow: `).concat(t("button.contrast.focus.ring.shadow"),`;
}

.p-button-outlined {
    background: transparent;
    border-color: `).concat(t("button.outlined.primary.border.color"),`;
    color: `).concat(t("button.outlined.primary.color"),`;
}

.p-button-outlined:not(:disabled):hover {
    background: `).concat(t("button.outlined.primary.hover.background"),`;
    border-color: `).concat(t("button.outlined.primary.border.color"),`;
    color: `).concat(t("button.outlined.primary.color"),`;
}

.p-button-outlined:not(:disabled):active {
    background: `).concat(t("button.outlined.primary.active.background"),`;
    border-color: `).concat(t("button.outlined.primary.border.color"),`;
    color: `).concat(t("button.outlined.primary.color"),`;
}

.p-button-outlined.p-button-secondary {
    border-color: `).concat(t("button.outlined.secondary.border.color"),`;
    color: `).concat(t("button.outlined.secondary.color"),`;
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: `).concat(t("button.outlined.secondary.hover.background"),`;
    border-color: `).concat(t("button.outlined.secondary.border.color"),`;
    color: `).concat(t("button.outlined.secondary.color"),`;
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: `).concat(t("button.outlined.secondary.active.background"),`;
    border-color: `).concat(t("button.outlined.secondary.border.color"),`;
    color: `).concat(t("button.outlined.secondary.color"),`;
}

.p-button-outlined.p-button-success {
    border-color: `).concat(t("button.outlined.success.border.color"),`;
    color: `).concat(t("button.outlined.success.color"),`;
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: `).concat(t("button.outlined.success.hover.background"),`;
    border-color: `).concat(t("button.outlined.success.border.color"),`;
    color: `).concat(t("button.outlined.success.color"),`;
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: `).concat(t("button.outlined.success.active.background"),`;
    border-color: `).concat(t("button.outlined.success.border.color"),`;
    color: `).concat(t("button.outlined.success.color"),`;
}

.p-button-outlined.p-button-info {
    border-color: `).concat(t("button.outlined.info.border.color"),`;
    color: `).concat(t("button.outlined.info.color"),`;
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: `).concat(t("button.outlined.info.hover.background"),`;
    border-color: `).concat(t("button.outlined.info.border.color"),`;
    color: `).concat(t("button.outlined.info.color"),`;
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: `).concat(t("button.outlined.info.active.background"),`;
    border-color: `).concat(t("button.outlined.info.border.color"),`;
    color: `).concat(t("button.outlined.info.color"),`;
}

.p-button-outlined.p-button-warn {
    border-color: `).concat(t("button.outlined.warn.border.color"),`;
    color: `).concat(t("button.outlined.warn.color"),`;
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: `).concat(t("button.outlined.warn.hover.background"),`;
    border-color: `).concat(t("button.outlined.warn.border.color"),`;
    color: `).concat(t("button.outlined.warn.color"),`;
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: `).concat(t("button.outlined.warn.active.background"),`;
    border-color: `).concat(t("button.outlined.warn.border.color"),`;
    color: `).concat(t("button.outlined.warn.color"),`;
}

.p-button-outlined.p-button-help {
    border-color: `).concat(t("button.outlined.help.border.color"),`;
    color: `).concat(t("button.outlined.help.color"),`;
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: `).concat(t("button.outlined.help.hover.background"),`;
    border-color: `).concat(t("button.outlined.help.border.color"),`;
    color: `).concat(t("button.outlined.help.color"),`;
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: `).concat(t("button.outlined.help.active.background"),`;
    border-color: `).concat(t("button.outlined.help.border.color"),`;
    color: `).concat(t("button.outlined.help.color"),`;
}

.p-button-outlined.p-button-danger {
    border-color: `).concat(t("button.outlined.danger.border.color"),`;
    color: `).concat(t("button.outlined.danger.color"),`;
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: `).concat(t("button.outlined.danger.hover.background"),`;
    border-color: `).concat(t("button.outlined.danger.border.color"),`;
    color: `).concat(t("button.outlined.danger.color"),`;
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: `).concat(t("button.outlined.danger.active.background"),`;
    border-color: `).concat(t("button.outlined.danger.border.color"),`;
    color: `).concat(t("button.outlined.danger.color"),`;
}

.p-button-outlined.p-button-contrast {
    border-color: `).concat(t("button.outlined.contrast.border.color"),`;
    color: `).concat(t("button.outlined.contrast.color"),`;
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: `).concat(t("button.outlined.contrast.hover.background"),`;
    border-color: `).concat(t("button.outlined.contrast.border.color"),`;
    color: `).concat(t("button.outlined.contrast.color"),`;
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: `).concat(t("button.outlined.contrast.active.background"),`;
    border-color: `).concat(t("button.outlined.contrast.border.color"),`;
    color: `).concat(t("button.outlined.contrast.color"),`;
}

.p-button-outlined.p-button-plain {
    border-color: `).concat(t("button.outlined.plain.border.color"),`;
    color: `).concat(t("button.outlined.plain.color"),`;
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: `).concat(t("button.outlined.plain.hover.background"),`;
    border-color: `).concat(t("button.outlined.plain.border.color"),`;
    color: `).concat(t("button.outlined.plain.color"),`;
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: `).concat(t("button.outlined.plain.active.background"),`;
    border-color: `).concat(t("button.outlined.plain.border.color"),`;
    color: `).concat(t("button.outlined.plain.color"),`;
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: `).concat(t("button.text.primary.color"),`;
}

.p-button-text:not(:disabled):hover {
    background: `).concat(t("button.text.primary.hover.background"),`;
    border-color: transparent;
    color: `).concat(t("button.text.primary.color"),`;
}

.p-button-text:not(:disabled):active {
    background: `).concat(t("button.text.primary.active.background"),`;
    border-color: transparent;
    color: `).concat(t("button.text.primary.color"),`;
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: `).concat(t("button.text.secondary.color"),`;
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: `).concat(t("button.text.secondary.hover.background"),`;
    border-color: transparent;
    color: `).concat(t("button.text.secondary.color"),`;
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: `).concat(t("button.text.secondary.active.background"),`;
    border-color: transparent;
    color: `).concat(t("button.text.secondary.color"),`;
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: `).concat(t("button.text.success.color"),`;
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: `).concat(t("button.text.success.hover.background"),`;
    border-color: transparent;
    color: `).concat(t("button.text.success.color"),`;
}

.p-button-text.p-button-success:not(:disabled):active {
    background: `).concat(t("button.text.success.active.background"),`;
    border-color: transparent;
    color: `).concat(t("button.text.success.color"),`;
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: `).concat(t("button.text.info.color"),`;
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: `).concat(t("button.text.info.hover.background"),`;
    border-color: transparent;
    color: `).concat(t("button.text.info.color"),`;
}

.p-button-text.p-button-info:not(:disabled):active {
    background: `).concat(t("button.text.info.active.background"),`;
    border-color: transparent;
    color: `).concat(t("button.text.info.color"),`;
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: `).concat(t("button.text.warn.color"),`;
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: `).concat(t("button.text.warn.hover.background"),`;
    border-color: transparent;
    color: `).concat(t("button.text.warn.color"),`;
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: `).concat(t("button.text.warn.active.background"),`;
    border-color: transparent;
    color: `).concat(t("button.text.warn.color"),`;
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: `).concat(t("button.text.help.color"),`;
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: `).concat(t("button.text.help.hover.background"),`;
    border-color: transparent;
    color: `).concat(t("button.text.help.color"),`;
}

.p-button-text.p-button-help:not(:disabled):active {
    background: `).concat(t("button.text.help.active.background"),`;
    border-color: transparent;
    color: `).concat(t("button.text.help.color"),`;
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: `).concat(t("button.text.danger.color"),`;
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: `).concat(t("button.text.danger.hover.background"),`;
    border-color: transparent;
    color: `).concat(t("button.text.danger.color"),`;
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: `).concat(t("button.text.danger.active.background"),`;
    border-color: transparent;
    color: `).concat(t("button.text.danger.color"),`;
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: `).concat(t("button.text.contrast.color"),`;
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: `).concat(t("button.text.contrast.hover.background"),`;
    border-color: transparent;
    color: `).concat(t("button.text.contrast.color"),`;
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: `).concat(t("button.text.contrast.active.background"),`;
    border-color: transparent;
    color: `).concat(t("button.text.contrast.color"),`;
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: `).concat(t("button.text.plain.color"),`;
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: `).concat(t("button.text.plain.hover.background"),`;
    border-color: transparent;
    color: `).concat(t("button.text.plain.color"),`;
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: `).concat(t("button.text.plain.active.background"),`;
    border-color: transparent;
    color: `).concat(t("button.text.plain.color"),`;
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: `).concat(t("button.link.color"),`;
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: `).concat(t("button.link.hover.color"),`;
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: `).concat(t("button.link.active.color"),`;
}
`)},nR={root:function(e){var t=e.instance,r=e.props;return["p-button p-component",nr(nr(nr(nr(nr(nr(nr(nr(nr({"p-button-icon-only":t.hasIcon&&!r.label&&!r.badge,"p-button-vertical":(r.iconPos==="top"||r.iconPos==="bottom")&&r.label,"p-button-loading":r.loading,"p-button-link":r.link||r.variant==="link"},"p-button-".concat(r.severity),r.severity),"p-button-raised",r.raised),"p-button-rounded",r.rounded),"p-button-text",r.text||r.variant==="text"),"p-button-outlined",r.outlined||r.variant==="outlined"),"p-button-sm",r.size==="small"),"p-button-lg",r.size==="large"),"p-button-plain",r.plain),"p-button-fluid",t.hasFluid)]},loadingIcon:"p-button-loading-icon",icon:function(e){var t=e.props;return["p-button-icon",nr({},"p-button-icon-".concat(t.iconPos),t.label)]},label:"p-button-label"},rR=ut.extend({name:"button",theme:tR,classes:nR}),iR={name:"BaseButton",extends:Vr,props:{label:{type:String,default:null},icon:{type:String,default:null},iconPos:{type:String,default:"left"},iconClass:{type:[String,Object],default:null},badge:{type:String,default:null},badgeClass:{type:[String,Object],default:null},badgeSeverity:{type:String,default:"secondary"},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:void 0},as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1},link:{type:Boolean,default:!1},severity:{type:String,default:null},raised:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},text:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1},size:{type:String,default:null},variant:{type:String,default:null},plain:{type:Boolean,default:!1},fluid:{type:Boolean,default:null}},style:rR,provide:function(){return{$pcButton:this,$parentInstance:this}}},Fd={name:"Button",extends:iR,inheritAttrs:!1,inject:{$pcFluid:{default:null}},methods:{getPTOptions:function(e){var t=e==="root"?this.ptmi:this.ptm;return t(e,{context:{disabled:this.disabled}})}},computed:{disabled:function(){return this.$attrs.disabled||this.$attrs.disabled===""||this.loading},defaultAriaLabel:function(){return this.label?this.label+(this.badge?" "+this.badge:""):this.$attrs.ariaLabel},hasIcon:function(){return this.icon||this.$slots.icon},attrs:function(){return he(this.asAttrs,this.a11yAttrs,this.getPTOptions("root"))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{"aria-label":this.defaultAriaLabel,"data-pc-name":"button","data-p-disabled":this.disabled,"data-p-severity":this.severity}},hasFluid:function(){return Cn(this.fluid)?!!this.$pcFluid:this.fluid}},components:{SpinnerIcon:c0,Badge:u0},directives:{ripple:d0}};function oR(n,e,t,r,i,o){var s=jn("SpinnerIcon"),a=jn("Badge"),l=sd("ripple");return n.asChild?nt(n.$slots,"default",{key:1,class:mi(n.cx("root")),a11yAttrs:o.a11yAttrs}):rd((ge(),Wt(gi(n.as),he({key:0,class:n.cx("root")},o.attrs),{default:ze(function(){return[nt(n.$slots,"default",{},function(){return[n.loading?nt(n.$slots,"loadingicon",he({key:0,class:[n.cx("loadingIcon"),n.cx("icon")]},n.ptm("loadingIcon")),function(){return[n.loadingIcon?(ge(),Pe("span",he({key:0,class:[n.cx("loadingIcon"),n.cx("icon"),n.loadingIcon]},n.ptm("loadingIcon")),null,16)):(ge(),Wt(s,he({key:1,class:[n.cx("loadingIcon"),n.cx("icon")],spin:""},n.ptm("loadingIcon")),null,16,["class"]))]}):nt(n.$slots,"icon",he({key:1,class:[n.cx("icon")]},n.ptm("icon")),function(){return[n.icon?(ge(),Pe("span",he({key:0,class:[n.cx("icon"),n.icon,n.iconClass]},n.ptm("icon")),null,16)):At("",!0)]}),J("span",he({class:n.cx("label")},n.ptm("label")),Kt(n.label||" "),17),n.badge?(ge(),Wt(a,{key:2,value:n.badge,class:mi(n.badgeClass),severity:n.badgeSeverity,unstyled:n.unstyled,pt:n.ptm("pcBadge")},null,8,["value","class","severity","unstyled","pt"])):At("",!0)]})]}),_:3},16,["class"])),[[l]])}Fd.render=oR;var sR=function(e){var t=e.dt;return`
.p-drawer {
    display: flex;
    flex-direction: column;
    transform: translate3d(0px, 0px, 0px);
    position: relative;
    transition: transform 0.3s;
    background: `.concat(t("drawer.background"),`;
    color: `).concat(t("drawer.color"),`;
    border: 1px solid `).concat(t("drawer.border.color"),`;
    box-shadow: `).concat(t("drawer.shadow"),`;
}

.p-drawer-content {
    overflow-y: auto;
    flex-grow: 1;
    padding: `).concat(t("drawer.content.padding"),`;
}

.p-drawer-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    padding: `).concat(t("drawer.header.padding"),`;
}

.p-drawer-footer {
    padding: `).concat(t("drawer.footer.padding"),`;
}

.p-drawer-title {
    font-weight: `).concat(t("drawer.title.font.weight"),`;
    font-size: `).concat(t("drawer.title.font.size"),`;
}

.p-drawer-full .p-drawer {
    transition: none;
    transform: none;
    width: 100vw !important;
    height: 100vh !important;
    max-height: 100%;
    top: 0px !important;
    left: 0px !important;
    border-width: 1px;
}

.p-drawer-left .p-drawer-enter-from,
.p-drawer-left .p-drawer-leave-to {
    transform: translateX(-100%);
}

.p-drawer-right .p-drawer-enter-from,
.p-drawer-right .p-drawer-leave-to {
    transform: translateX(100%);
}

.p-drawer-top .p-drawer-enter-from,
.p-drawer-top .p-drawer-leave-to {
    transform: translateY(-100%);
}

.p-drawer-bottom .p-drawer-enter-from,
.p-drawer-bottom .p-drawer-leave-to {
    transform: translateY(100%);
}

.p-drawer-full .p-drawer-enter-from,
.p-drawer-full .p-drawer-leave-to {
    opacity: 0;
}

.p-drawer-full .p-drawer-enter-active,
.p-drawer-full .p-drawer-leave-active {
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}

.p-drawer-left .p-drawer {
    width: 20rem;
    height: 100%;
    border-inline-end-width: 1px;
}

.p-drawer-right .p-drawer {
    width: 20rem;
    height: 100%;
    border-inline-start-width: 1px;
}

.p-drawer-top .p-drawer {
    height: 10rem;
    width: 100%;
    border-block-end-width: 1px;
}

.p-drawer-bottom .p-drawer {
    height: 10rem;
    width: 100%;
    border-block-start-width: 1px;
}

.p-drawer-left .p-drawer-content,
.p-drawer-right .p-drawer-content,
.p-drawer-top .p-drawer-content,
.p-drawer-bottom .p-drawer-content {
    width: 100%;
    height: 100%;
}

.p-drawer-open {
    display: flex;
}

.p-drawer-mask:dir(rtl) {
    flex-direction: row-reverse;
}
`)},aR={mask:function(e){var t=e.position,r=e.modal;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:t==="left"?"flex-start":t==="right"?"flex-end":"center",alignItems:t==="top"?"flex-start":t==="bottom"?"flex-end":"center",pointerEvents:r?"auto":"none"}},root:{pointerEvents:"auto"}},lR={mask:function(e){var t=e.instance,r=e.props,i=["left","right","top","bottom"],o=i.find(function(s){return s===r.position});return["p-drawer-mask",{"p-overlay-mask p-overlay-mask-enter":r.modal,"p-drawer-open":t.containerVisible,"p-drawer-full":t.fullScreen},o?"p-drawer-".concat(o):""]},root:function(e){var t=e.instance;return["p-drawer p-component",{"p-drawer-full":t.fullScreen}]},header:"p-drawer-header",title:"p-drawer-title",pcCloseButton:"p-drawer-close-button",content:"p-drawer-content",footer:"p-drawer-footer"},cR=ut.extend({name:"drawer",theme:sR,classes:lR,inlineStyles:aR}),uR={name:"BaseDrawer",extends:Vr,props:{visible:{type:Boolean,default:!1},position:{type:String,default:"left"},header:{type:null,default:null},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},dismissable:{type:Boolean,default:!0},showCloseIcon:{type:Boolean,default:!0},closeButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}},closeIcon:{type:String,default:void 0},modal:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1}},style:cR,provide:function(){return{$pcDrawer:this,$parentInstance:this}}},f0={name:"Drawer",extends:uR,inheritAttrs:!1,emits:["update:visible","show","after-show","hide","after-hide"],data:function(){return{containerVisible:this.visible}},container:null,mask:null,content:null,headerContainer:null,footerContainer:null,closeButton:null,outsideClickListener:null,documentKeydownListener:null,watch:{dismissable:function(e){e?this.enableDocumentSettings():this.disableDocumentSettings()}},updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.disableDocumentSettings(),this.mask&&this.autoZIndex&&di.clear(this.mask),this.container=null,this.mask=null},methods:{hide:function(){this.$emit("update:visible",!1)},onEnter:function(){this.$emit("show"),this.focus(),this.bindDocumentKeyDownListener(),this.autoZIndex&&di.set("modal",this.mask,this.baseZIndex||this.$primevue.config.zIndex.modal)},onAfterEnter:function(){this.enableDocumentSettings(),this.$emit("after-show")},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&Ko(this.mask,"p-overlay-mask-leave")},onLeave:function(){this.$emit("hide")},onAfterLeave:function(){this.autoZIndex&&di.clear(this.mask),this.unbindDocumentKeyDownListener(),this.containerVisible=!1,this.disableDocumentSettings(),this.$emit("after-hide")},onMaskClick:function(e){this.dismissable&&this.modal&&this.mask===e.target&&this.hide()},focus:function(){var e=function(i){return i&&i.querySelector("[autofocus]")},t=this.$slots.header&&e(this.headerContainer);t||(t=this.$slots.default&&e(this.container),t||(t=this.$slots.footer&&e(this.footerContainer),t||(t=this.closeButton))),t&&_o(t)},enableDocumentSettings:function(){this.dismissable&&!this.modal&&this.bindOutsideClickListener(),this.blockScroll&&og()},disableDocumentSettings:function(){this.unbindOutsideClickListener(),this.blockScroll&&qc()},onKeydown:function(e){e.code==="Escape"&&this.hide()},containerRef:function(e){this.container=e},maskRef:function(e){this.mask=e},contentRef:function(e){this.content=e},headerContainerRef:function(e){this.headerContainer=e},footerContainerRef:function(e){this.footerContainer=e},closeButtonRef:function(e){this.closeButton=e?e.$el:void 0},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeydown,document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&(document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(t){e.isOutsideClicked(t)&&e.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},isOutsideClicked:function(e){return this.container&&!this.container.contains(e.target)}},computed:{fullScreen:function(){return this.position==="full"},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},directives:{focustrap:_g},components:{Button:Fd,Portal:gd,TimesIcon:md}},dR=["aria-modal"];function fR(n,e,t,r,i,o){var s=jn("Button"),a=jn("Portal"),l=sd("focustrap");return ge(),Wt(a,null,{default:ze(function(){return[i.containerVisible?(ge(),Pe("div",he({key:0,ref:o.maskRef,onMousedown:e[0]||(e[0]=function(){return o.onMaskClick&&o.onMaskClick.apply(o,arguments)}),class:n.cx("mask"),style:n.sx("mask",!0,{position:n.position,modal:n.modal})},n.ptm("mask")),[Te(qm,he({name:"p-drawer",onEnter:o.onEnter,onAfterEnter:o.onAfterEnter,onBeforeLeave:o.onBeforeLeave,onLeave:o.onLeave,onAfterLeave:o.onAfterLeave,appear:""},n.ptm("transition")),{default:ze(function(){return[n.visible?rd((ge(),Pe("div",he({key:0,ref:o.containerRef,class:n.cx("root"),style:n.sx("root"),role:"complementary","aria-modal":n.modal},n.ptmi("root")),[n.$slots.container?nt(n.$slots,"container",{key:0,closeCallback:o.hide}):(ge(),Pe(kt,{key:1},[J("div",he({ref:o.headerContainerRef,class:n.cx("header")},n.ptm("header")),[nt(n.$slots,"header",{class:mi(n.cx("title"))},function(){return[n.header?(ge(),Pe("div",he({key:0,class:n.cx("title")},n.ptm("title")),Kt(n.header),17)):At("",!0)]}),n.showCloseIcon?(ge(),Wt(s,he({key:0,ref:o.closeButtonRef,type:"button",class:n.cx("pcCloseButton"),"aria-label":o.closeAriaLabel,unstyled:n.unstyled,onClick:o.hide},n.closeButtonProps,{pt:n.ptm("pcCloseButton"),"data-pc-group-section":"iconcontainer"}),{icon:ze(function(c){return[nt(n.$slots,"closeicon",{},function(){return[(ge(),Wt(gi(n.closeIcon?"span":"TimesIcon"),he({class:[n.closeIcon,c.class]},n.ptm("pcCloseButton").icon),null,16,["class"]))]})]}),_:3},16,["class","aria-label","unstyled","onClick","pt"])):At("",!0)],16),J("div",he({ref:o.contentRef,class:n.cx("content")},n.ptm("content")),[nt(n.$slots,"default")],16),n.$slots.footer?(ge(),Pe("div",he({key:0,ref:o.footerContainerRef,class:n.cx("footer")},n.ptm("footer")),[nt(n.$slots,"footer")],16)):At("",!0)],64))],16,dR)),[[l]]):At("",!0)]}),_:3},16,["onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])],16)):At("",!0)]}),_:3})}f0.render=fR;const hR={class:"name"},pR={data(){return{visible:!1}},props:["color","name","callback"],computed:{background(){return{"background-color":this.color}},drawerStyle(){return{width:"100%","background-color":this.color}}}},mR=Object.assign(pR,{__name:"DrawerItem",setup(n){return(e,t)=>(ge(),Pe(kt,null,[Te(dt(f0),{visible:e.visible,"onUpdate:visible":t[1]||(t[1]=r=>e.visible=r),header:"Drawer",position:"right",style:lr(e.drawerStyle)},{container:ze(()=>[nt(e.$slots,"drawer-content",{},void 0,!0),J("div",{onClick:t[0]||(t[0]=r=>{e.visible=!1,n.callback&&n.callback(!1)}),class:"button-location"},t[3]||(t[3]=[J("i",{class:"pi pi-chevron-right"},null,-1)]))]),_:3},8,["visible","style"]),J("div",{class:"item",style:lr(e.background),onClick:t[2]||(t[2]=r=>e.visible=!0)},[Te(dt(vd),null,{image:ze(()=>[nt(e.$slots,"icon",{class:"icon"},void 0,!0)]),_:3}),J("div",hR,Kt(n.name),1)],4)],64))}}),Nc=Bn(mR,[["__scopeId","data-v-8dd30527"]]);var h0={name:"ChevronDownIcon",extends:Un};function gR(n,e,t,r,i,o){return ge(),Pe("svg",he({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),e[0]||(e[0]=[J("path",{d:"M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z",fill:"currentColor"},null,-1)]),16)}h0.render=gR;var p0={name:"ChevronLeftIcon",extends:Un};function vR(n,e,t,r,i,o){return ge(),Pe("svg",he({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),e[0]||(e[0]=[J("path",{d:"M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z",fill:"currentColor"},null,-1)]),16)}p0.render=vR;var m0={name:"ChevronRightIcon",extends:Un};function bR(n,e,t,r,i,o){return ge(),Pe("svg",he({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),e[0]||(e[0]=[J("path",{d:"M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z",fill:"currentColor"},null,-1)]),16)}m0.render=bR;var g0={name:"ChevronUpIcon",extends:Un};function _R(n,e,t,r,i,o){return ge(),Pe("svg",he({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),e[0]||(e[0]=[J("path",{d:"M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z",fill:"currentColor"},null,-1)]),16)}g0.render=_R;var yR=function(e){var t=e.dt;return`
.p-carousel {
    display: flex;
    flex-direction: column;
}

.p-carousel-content-container {
    display: flex;
    flex-direction: column;
    overflow: auto;
}

.p-carousel-content {
    display: flex;
    flex-direction: row;
    gap: `.concat(t("carousel.content.gap"),`;
}

.p-carousel-content:dir(rtl) {
    flex-direction: row-reverse;
}

.p-carousel-viewport {
    overflow: hidden;
    width: 100%;
}

.p-carousel-item-list {
    display: flex;
    flex-direction: row;
}

.p-carousel-item-list:dir(rtl) {
    flex-direction: row-reverse;
}

.p-carousel-prev-button,
.p-carousel-next-button {
    align-self: center;
    flex-shrink: 0;
}

.p-carousel-indicator-list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    padding: `).concat(t("carousel.indicator.list.padding"),`;
    gap: `).concat(t("carousel.indicator.list.gap"),`;
    margin: 0;
    list-style: none;
}

.p-carousel-indicator-button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: `).concat(t("carousel.indicator.background"),`;
    width: `).concat(t("carousel.indicator.width"),`;
    height: `).concat(t("carousel.indicator.height"),`;
    border: 0 none;
    transition: background `).concat(t("carousel.transition.duration"),", color ").concat(t("carousel.transition.duration"),", outline-color ").concat(t("carousel.transition.duration"),", box-shadow ").concat(t("carousel.transition.duration"),`;
    outline-color: transparent;
    border-radius: `).concat(t("carousel.indicator.border.radius"),`;
    padding: 0;
    margin: 0;
    user-select: none;
    cursor: pointer;
}

.p-carousel-indicator-button:focus-visible {
    box-shadow: `).concat(t("carousel.indicator.focus.ring.shadow"),`;
    outline: `).concat(t("carousel.indicator.focus.ring.width")," ").concat(t("carousel.indicator.focus.ring.style")," ").concat(t("carousel.indicator.focus.ring.color"),`;
    outline-offset: `).concat(t("carousel.indicator.focus.ring.offset"),`;
}

.p-carousel-indicator-button:hover {
    background: `).concat(t("carousel.indicator.hover.background"),`;
}

.p-carousel-indicator-active .p-carousel-indicator-button {
    background: `).concat(t("carousel.indicator.active.background"),`;
}

.p-carousel-vertical .p-carousel-content {
    flex-direction: column;
}

.p-carousel-vertical .p-carousel-item-list {
    flex-direction: column;
    height: 100%;
}

.p-items-hidden .p-carousel-item {
    visibility: hidden;
}

.p-items-hidden .p-carousel-item.p-carousel-item-active {
    visibility: visible;
}
`)},xR={root:function(e){var t=e.instance;return["p-carousel p-component",{"p-carousel-vertical":t.isVertical(),"p-carousel-horizontal":!t.isVertical()}]},header:"p-carousel-header",contentContainer:"p-carousel-content-container",content:"p-carousel-content",pcPrevButton:function(e){var t=e.instance;return["p-carousel-prev-button",{"p-disabled":t.backwardIsDisabled}]},viewport:"p-carousel-viewport",itemList:"p-carousel-item-list",itemClone:function(e){var t=e.index,r=e.value,i=e.totalShiftedItems,o=e.d_numVisible;return["p-carousel-item p-carousel-item-clone",{"p-carousel-item-active":i*-1===r.length+o,"p-carousel-item-start":t===0,"p-carousel-item-end":r.slice(-1*o).length-1===t}]},item:function(e){var t=e.instance,r=e.index;return["p-carousel-item",{"p-carousel-item-active":t.firstIndex()<=r&&t.lastIndex()>=r,"p-carousel-item-start":t.firstIndex()===r,"p-carousel-item-end":t.lastIndex()===r}]},pcNextButton:function(e){var t=e.instance;return["p-carousel-next-button",{"p-disabled":t.forwardIsDisabled}]},indicatorList:"p-carousel-indicator-list",indicator:function(e){var t=e.instance,r=e.index;return["p-carousel-indicator",{"p-carousel-indicator-active":t.d_page===r}]},indicatorButton:"p-carousel-indicator-button",footer:"p-carousel-footer"},SR=ut.extend({name:"carousel",theme:yR,classes:xR}),wR={name:"BaseCarousel",extends:Vr,props:{value:null,page:{type:Number,default:0},numVisible:{type:Number,default:1},numScroll:{type:Number,default:1},responsiveOptions:Array,orientation:{type:String,default:"horizontal"},verticalViewPortHeight:{type:String,default:"300px"},contentClass:String,containerClass:String,indicatorsContentClass:String,circular:{type:Boolean,default:!1},autoplayInterval:{type:Number,default:0},showNavigators:{type:Boolean,default:!0},showIndicators:{type:Boolean,default:!0},prevButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}},nextButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}}},style:SR,provide:function(){return{$pcCarousel:this,$parentInstance:this}}};function fo(n){return CR(n)||ER(n)||TR(n)||MR()}function MR(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function TR(n,e){if(n){if(typeof n=="string")return Gu(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Gu(n,e):void 0}}function ER(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function CR(n){if(Array.isArray(n))return Gu(n)}function Gu(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=Array(e);t<e;t++)r[t]=n[t];return r}var v0={name:"Carousel",extends:wR,inheritAttrs:!1,emits:["update:page"],isRemainingItemsAdded:!1,data:function(){return{remainingItems:0,d_numVisible:this.numVisible,d_numScroll:this.numScroll,d_oldNumScroll:0,d_oldNumVisible:0,d_oldValue:null,d_page:this.page,totalShiftedItems:this.page*this.numScroll*-1,allowAutoplay:!!this.autoplayInterval,d_circular:this.circular||this.allowAutoplay,swipeThreshold:20}},watch:{page:function(e){e>this.d_page?this.navForward({},e):e<this.d_page&&this.navBackward({},e),this.d_page=e},circular:function(e){this.d_circular=e},numVisible:function(e,t){this.d_numVisible=e,this.d_oldNumVisible=t},numScroll:function(e,t){this.d_oldNumScroll=t,this.d_numScroll=e},value:function(e){this.d_oldValue=e}},mounted:function(){var e=!1;if(this.createStyle(),this.calculatePosition(),this.responsiveOptions&&this.bindDocumentListeners(),this.isCircular()){var t=this.totalShiftedItems;this.d_page===0?t=-1*this.d_numVisible:t===0&&(t=-1*this.value.length,this.remainingItems>0&&(this.isRemainingItemsAdded=!0)),t!==this.totalShiftedItems&&(this.totalShiftedItems=t,e=!0)}!e&&this.isAutoplay()&&this.startAutoplay()},updated:function(){if(!this.empty){var e=this.isCircular(),t=!1,r=this.totalShiftedItems;if(this.autoplayInterval&&this.stopAutoplay(),this.d_oldNumScroll!==this.d_numScroll||this.d_oldNumVisible!==this.d_numVisible||this.d_oldValue.length!==this.value.length){this.remainingItems=(this.value.length-this.d_numVisible)%this.d_numScroll;var i=this.d_page;this.totalIndicators!==0&&i>=this.totalIndicators&&(i=this.totalIndicators-1,this.$emit("update:page",i),this.d_page=i,t=!0),r=i*this.d_numScroll*-1,e&&(r-=this.d_numVisible),i===this.totalIndicators-1&&this.remainingItems>0?(r+=-1*this.remainingItems+this.d_numScroll,this.isRemainingItemsAdded=!0):this.isRemainingItemsAdded=!1,r!==this.totalShiftedItems&&(this.totalShiftedItems=r,t=!0),this.d_oldNumScroll=this.d_numScroll,this.d_oldNumVisible=this.d_numVisible,this.d_oldValue=this.value,this.$refs.itemsContainer.style.transform=this.isVertical()?"translate3d(0, ".concat(r*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(r*(100/this.d_numVisible),"%, 0, 0)")}e&&(this.d_page===0?r=-1*this.d_numVisible:r===0&&(r=-1*this.value.length,this.remainingItems>0&&(this.isRemainingItemsAdded=!0)),r!==this.totalShiftedItems&&(this.totalShiftedItems=r,t=!0)),!t&&this.isAutoplay()&&this.startAutoplay()}},beforeUnmount:function(){this.responsiveOptions&&this.unbindDocumentListeners(),this.autoplayInterval&&this.stopAutoplay()},methods:{getIndicatorPTOptions:function(e,t){return this.ptm(e,{context:{highlighted:t===this.d_page}})},getItemPTOptions:function(e,t){return this.ptm(e,{context:{index:t,active:this.firstIndex()<=t&&this.lastIndex()>=t,start:this.firstIndex()===t,end:this.lastIndex()===t}})},step:function(e,t){var r=this.totalShiftedItems,i=this.isCircular();if(t!=null)r=this.d_numScroll*t*-1,i&&(r-=this.d_numVisible),this.isRemainingItemsAdded=!1;else{r+=this.d_numScroll*e,this.isRemainingItemsAdded&&(r+=this.remainingItems-this.d_numScroll*e,this.isRemainingItemsAdded=!1);var o=i?r+this.d_numVisible:r;t=Math.abs(Math.floor(o/this.d_numScroll))}i&&this.d_page===this.totalIndicators-1&&e===-1?(r=-1*(this.value.length+this.d_numVisible),t=0):i&&this.d_page===0&&e===1?(r=0,t=this.totalIndicators-1):t===this.totalIndicators-1&&this.remainingItems>0&&(r+=this.remainingItems*-1-this.d_numScroll*e,this.isRemainingItemsAdded=!0),this.$refs.itemsContainer&&(!this.isUnstyled&&Po(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transform=this.isVertical()?"translate3d(0, ".concat(r*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(r*(100/this.d_numVisible),"%, 0, 0)"),this.$refs.itemsContainer.style.transition="transform 500ms ease 0s"),this.totalShiftedItems=r,this.$emit("update:page",t),this.d_page=t},calculatePosition:function(){if(this.$refs.itemsContainer&&this.responsiveOptions){for(var e=window.innerWidth,t={numVisible:this.numVisible,numScroll:this.numScroll},r=0;r<this.responsiveOptions.length;r++){var i=this.responsiveOptions[r];parseInt(i.breakpoint,10)>=e&&(t=i)}if(this.d_numScroll!==t.numScroll){var o=this.d_page;o=parseInt(o*this.d_numScroll/t.numScroll),this.totalShiftedItems=t.numScroll*o*-1,this.isCircular()&&(this.totalShiftedItems-=t.numVisible),this.d_numScroll=t.numScroll,this.$emit("update:page",o),this.d_page=o}this.d_numVisible!==t.numVisible&&(this.d_numVisible=t.numVisible)}},navBackward:function(e,t){(this.d_circular||this.d_page!==0)&&this.step(1,t),this.allowAutoplay=!1,e.cancelable&&e.preventDefault()},navForward:function(e,t){(this.d_circular||this.d_page<this.totalIndicators-1)&&this.step(-1,t),this.allowAutoplay=!1,e.cancelable&&e.preventDefault()},onIndicatorClick:function(e,t){var r=this.d_page;t>r?this.navForward(e,t):t<r&&this.navBackward(e,t)},onTransitionEnd:function(){this.$refs.itemsContainer&&(!this.isUnstyled&&Ko(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transition="",(this.d_page===0||this.d_page===this.totalIndicators-1)&&this.isCircular()&&(this.$refs.itemsContainer.style.transform=this.isVertical()?"translate3d(0, ".concat(this.totalShiftedItems*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(this.totalShiftedItems*(100/this.d_numVisible),"%, 0, 0)")))},onTouchStart:function(e){var t=e.changedTouches[0];this.startPos={x:t.pageX,y:t.pageY}},onTouchMove:function(e){var t=e.changedTouches[0],r=this.isVertical()?t.pageY-this.startPos.y:t.pageX-this.startPos.x;Math.abs(r)>this.swipeThreshold&&e.cancelable&&e.preventDefault()},onTouchEnd:function(e){var t=e.changedTouches[0];this.isVertical()?this.changePageOnTouch(e,t.pageY-this.startPos.y):this.changePageOnTouch(e,t.pageX-this.startPos.x)},changePageOnTouch:function(e,t){Math.abs(t)>this.swipeThreshold&&(t<0?this.navForward(e):this.navBackward(e))},onIndicatorKeydown:function(e){switch(e.code){case"ArrowRight":this.onRightKey();break;case"ArrowLeft":this.onLeftKey();break;case"Home":this.onHomeKey(),e.preventDefault();break;case"End":this.onEndKey(),e.preventDefault();break;case"ArrowUp":case"ArrowDown":case"PageUp":case"PageDown":e.preventDefault();break;case"Tab":this.onTabKey();break}},onRightKey:function(){var e=fo(go(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,t+1===e.length?e.length-1:t+1)},onLeftKey:function(){var e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,e-1<=0?0:e-1)},onHomeKey:function(){var e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,0)},onEndKey:function(){var e=fo(go(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,e.length-1)},onTabKey:function(){var e=fo(go(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),t=e.findIndex(function(o){return Pr(o,"data-p-active")===!0}),r=Oo(this.$refs.indicatorContent,'[data-pc-section="indicator"] > button[tabindex="0"]'),i=e.findIndex(function(o){return o===r.parentElement});e[i].children[0].tabIndex="-1",e[t].children[0].tabIndex="0"},findFocusedIndicatorIndex:function(){var e=fo(go(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),t=Oo(this.$refs.indicatorContent,'[data-pc-section="indicator"] > button[tabindex="0"]');return e.findIndex(function(r){return r===t.parentElement})},changedFocusedIndicator:function(e,t){var r=fo(go(this.$refs.indicatorContent,'[data-pc-section="indicator"]'));r[e].children[0].tabIndex="-1",r[t].children[0].tabIndex="0",r[t].children[0].focus()},bindDocumentListeners:function(){var e=this;this.documentResizeListener||(this.documentResizeListener=function(t){e.calculatePosition(t)},window.addEventListener("resize",this.documentResizeListener))},unbindDocumentListeners:function(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)},startAutoplay:function(){var e=this;this.interval=setInterval(function(){e.d_page===e.totalIndicators-1?e.step(-1,0):e.step(-1,e.d_page+1)},this.autoplayInterval)},stopAutoplay:function(){this.interval&&clearInterval(this.interval)},createStyle:function(){if(!this.carouselStyle){var e;this.carouselStyle=document.createElement("style"),this.carouselStyle.type="text/css",ug(this.carouselStyle,"nonce",(e=this.$primevue)===null||e===void 0||(e=e.config)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce),document.body.appendChild(this.carouselStyle)}var t=`
                .p-carousel[`.concat(this.$attrSelector,`] .p-carousel-item {
                    flex: 1 0 `).concat(100/this.d_numVisible,`%
                }
            `);if(this.responsiveOptions&&!this.isUnstyled){var r=fo(this.responsiveOptions),i=s_();r.sort(function(a,l){var c=a.breakpoint,u=l.breakpoint;return l_(c,u,-1,i)});for(var o=0;o<r.length;o++){var s=r[o];t+=`
                        @media screen and (max-width: `.concat(s.breakpoint,`) {
                            .p-carousel[`).concat(this.$attrSelector,`] .p-carousel-item {
                                flex: 1 0 `).concat(100/s.numVisible,`%
                            }
                        }
                    `)}}this.carouselStyle.innerHTML=t},isVertical:function(){return this.orientation==="vertical"},hasValidItemCount:function(){return this.value&&this.value.length>this.d_numVisible},isCircular:function(){return this.hasValidItemCount()&&this.d_circular},isAutoplay:function(){return this.hasValidItemCount()&&this.autoplayInterval&&this.allowAutoplay},firstIndex:function(){return this.isCircular()?-1*(this.totalShiftedItems+this.d_numVisible):this.totalShiftedItems*-1},lastIndex:function(){return this.firstIndex()+this.d_numVisible-1},ariaSlideNumber:function(e){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slideNumber.replace(/{slideNumber}/g,e):void 0},ariaPageLabel:function(e){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,e):void 0}},computed:{totalIndicators:function(){return this.value?Math.max(Math.ceil((this.value.length-this.d_numVisible)/this.d_numScroll)+1,0):0},backwardIsDisabled:function(){return this.value&&(!this.circular||this.value.length<this.d_numVisible)&&this.d_page===0},forwardIsDisabled:function(){return this.value&&(!this.circular||this.value.length<this.d_numVisible)&&(this.d_page===this.totalIndicators-1||this.totalIndicators===0)},ariaSlideLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slide:void 0},ariaPrevButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.prevPageLabel:void 0},ariaNextButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.nextPageLabel:void 0},empty:function(){return!this.value||this.value.length===0},emptyMessageText:function(){var e;return((e=this.$primevue.config)===null||e===void 0||(e=e.locale)===null||e===void 0?void 0:e.emptyMessage)||""}},components:{Button:Fd,ChevronRightIcon:m0,ChevronDownIcon:h0,ChevronLeftIcon:p0,ChevronUpIcon:g0},directives:{ripple:d0}},AR=["aria-live"],RR=["data-p-carousel-item-active","data-p-carousel-item-start","data-p-carousel-item-end"],PR=["aria-hidden","aria-label","aria-roledescription","data-p-carousel-item-active","data-p-carousel-item-start","data-p-carousel-item-end"],LR=["data-p-active"],IR=["tabindex","aria-label","aria-current","onClick"];function kR(n,e,t,r,i,o){var s=jn("Button");return ge(),Pe("div",he({class:n.cx("root"),role:"region"},n.ptmi("root")),[n.$slots.header?(ge(),Pe("div",he({key:0,class:n.cx("header")},n.ptm("header")),[nt(n.$slots,"header")],16)):At("",!0),o.empty?nt(n.$slots,"empty",{key:2},function(){return[Qe(Kt(o.emptyMessageText),1)]}):(ge(),Pe("div",he({key:1,class:[n.cx("contentContainer"),n.containerClass]},n.ptm("contentContainer")),[J("div",he({class:[n.cx("content"),n.contentClass],"aria-live":i.allowAutoplay?"polite":"off"},n.ptm("content")),[n.showNavigators?(ge(),Wt(s,he({key:0,class:n.cx("pcPrevButton"),disabled:o.backwardIsDisabled,"aria-label":o.ariaPrevButtonLabel,unstyled:n.unstyled,onClick:o.navBackward},n.prevButtonProps,{pt:n.ptm("pcPrevButton"),"data-pc-group-section":"navigator"}),{icon:ze(function(a){return[nt(n.$slots,"previcon",{},function(){return[(ge(),Wt(gi(o.isVertical()?"ChevronUpIcon":"ChevronLeftIcon"),he({class:a.icon},n.ptm("pcPrevButton").icon),null,16,["class"]))]})]}),_:3},16,["class","disabled","aria-label","unstyled","onClick","pt"])):At("",!0),J("div",he({class:n.cx("viewport"),style:[{height:o.isVertical()?n.verticalViewPortHeight:"auto"}],onTouchend:e[1]||(e[1]=function(){return o.onTouchEnd&&o.onTouchEnd.apply(o,arguments)}),onTouchstart:e[2]||(e[2]=function(){return o.onTouchStart&&o.onTouchStart.apply(o,arguments)}),onTouchmove:e[3]||(e[3]=function(){return o.onTouchMove&&o.onTouchMove.apply(o,arguments)})},n.ptm("viewport")),[J("div",he({ref:"itemsContainer",class:n.cx("itemList"),onTransitionend:e[0]||(e[0]=function(){return o.onTransitionEnd&&o.onTransitionEnd.apply(o,arguments)})},n.ptm("itemList")),[o.isCircular()?(ge(!0),Pe(kt,{key:0},bo(n.value.slice(-1*i.d_numVisible),function(a,l){return ge(),Pe("div",he({key:l+"_scloned",class:n.cx("itemClone",{index:l,value:n.value,totalShiftedItems:i.totalShiftedItems,d_numVisible:i.d_numVisible}),ref_for:!0},n.ptm("itemClone"),{"data-p-carousel-item-active":i.totalShiftedItems*-1===n.value.length+i.d_numVisible,"data-p-carousel-item-start":l===0,"data-p-carousel-item-end":n.value.slice(-1*i.d_numVisible).length-1===l}),[nt(n.$slots,"item",{data:a,index:l})],16,RR)}),128)):At("",!0),(ge(!0),Pe(kt,null,bo(n.value,function(a,l){return ge(),Pe("div",he({key:l,class:n.cx("item",{index:l}),role:"group","aria-hidden":o.firstIndex()>l||o.lastIndex()<l?!0:void 0,"aria-label":o.ariaSlideNumber(l),"aria-roledescription":o.ariaSlideLabel,ref_for:!0},o.getItemPTOptions("item",l),{"data-p-carousel-item-active":o.firstIndex()<=l&&o.lastIndex()>=l,"data-p-carousel-item-start":o.firstIndex()===l,"data-p-carousel-item-end":o.lastIndex()===l}),[nt(n.$slots,"item",{data:a,index:l})],16,PR)}),128)),o.isCircular()?(ge(!0),Pe(kt,{key:1},bo(n.value.slice(0,i.d_numVisible),function(a,l){return ge(),Pe("div",he({key:l+"_fcloned",class:n.cx("itemClone",{index:l,value:n.value,totalShiftedItems:i.totalShiftedItems,d_numVisible:i.d_numVisible}),ref_for:!0},n.ptm("itemClone")),[nt(n.$slots,"item",{data:a,index:l})],16)}),128)):At("",!0)],16)],16),n.showNavigators?(ge(),Wt(s,he({key:1,class:n.cx("pcNextButton"),disabled:o.forwardIsDisabled,"aria-label":o.ariaNextButtonLabel,unstyled:n.unstyled,onClick:o.navForward},n.nextButtonProps,{pt:n.ptm("pcNextButton"),"data-pc-group-section":"navigator"}),{icon:ze(function(a){return[nt(n.$slots,"nexticon",{},function(){return[(ge(),Wt(gi(o.isVertical()?"ChevronDownIcon":"ChevronRightIcon"),he({class:a.class},n.ptm("pcNextButton").icon),null,16,["class"]))]})]}),_:3},16,["class","disabled","aria-label","unstyled","onClick","pt"])):At("",!0)],16,AR),o.totalIndicators>=0&&n.showIndicators?(ge(),Pe("ul",he({key:0,ref:"indicatorContent",class:[n.cx("indicatorList"),n.indicatorsContentClass],onKeydown:e[4]||(e[4]=function(){return o.onIndicatorKeydown&&o.onIndicatorKeydown.apply(o,arguments)})},n.ptm("indicatorList")),[(ge(!0),Pe(kt,null,bo(o.totalIndicators,function(a,l){return ge(),Pe("li",he({key:"p-carousel-indicator-"+l.toString(),class:n.cx("indicator",{index:l}),ref_for:!0},o.getIndicatorPTOptions("indicator",l),{"data-p-active":i.d_page===l}),[J("button",he({class:n.cx("indicatorButton"),type:"button",tabindex:i.d_page===l?"0":"-1","aria-label":o.ariaPageLabel(l+1),"aria-current":i.d_page===l?"page":void 0,onClick:function(u){return o.onIndicatorClick(u,l)},ref_for:!0},o.getIndicatorPTOptions("indicatorButton",l)),null,16,IR)],16,LR)}),128))],16)):At("",!0)],16)),n.$slots.footer?(ge(),Pe("div",he({key:3,class:n.cx("footer")},n.ptm("footer")),[nt(n.$slots,"footer")],16)):At("",!0)],16)}v0.render=kR;var DR=function(e){var t=e.dt;return`
.p-timeline {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    direction: ltr;
}

.p-timeline-left .p-timeline-event-opposite {
    text-align: right;
}

.p-timeline-left .p-timeline-event-content {
    text-align: left;
}

.p-timeline-right .p-timeline-event {
    flex-direction: row-reverse;
}

.p-timeline-right .p-timeline-event-opposite {
    text-align: left;
}

.p-timeline-right .p-timeline-event-content {
    text-align: right;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) {
    flex-direction: row-reverse;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite {
    text-align: right;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content {
    text-align: left;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-opposite {
    text-align: left;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-content {
    text-align: right;
}

.p-timeline-vertical .p-timeline-event-opposite,
.p-timeline-vertical .p-timeline-event-content {
    padding: `.concat(t("timeline.vertical.event.content.padding"),`;
}

.p-timeline-vertical .p-timeline-event-connector {
    width: `).concat(t("timeline.event.connector.size"),`;
}

.p-timeline-event {
    display: flex;
    position: relative;
    min-height: `).concat(t("timeline.event.min.height"),`;
}

.p-timeline-event:last-child {
    min-height: 0;
}

.p-timeline-event-opposite {
    flex: 1;
}

.p-timeline-event-content {
    flex: 1;
}

.p-timeline-event-separator {
    flex: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.p-timeline-event-marker {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    align-self: baseline;
    border-width: `).concat(t("timeline.event.marker.border.width"),`;
    border-style: solid;
    border-color: `).concat(t("timeline.event.marker.border.color"),`;
    border-radius: `).concat(t("timeline.event.marker.border.radius"),`;
    width: `).concat(t("timeline.event.marker.size"),`;
    height: `).concat(t("timeline.event.marker.size"),`;
    background: `).concat(t("timeline.event.marker.background"),`;
}

.p-timeline-event-marker::before {
    content: " ";
    border-radius: `).concat(t("timeline.event.marker.content.border.radius"),`;
    width: `).concat(t("timeline.event.marker.content.size"),`;
    height:`).concat(t("timeline.event.marker.content.size"),`;
    background: `).concat(t("timeline.event.marker.content.background"),`;
}

.p-timeline-event-marker::after {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: `).concat(t("timeline.event.marker.border.radius"),`;
    box-shadow: `).concat(t("timeline.event.marker.content.inset.shadow"),`;
}

.p-timeline-event-connector {
    flex-grow: 1;
    background: `).concat(t("timeline.event.connector.color"),`;
}

.p-timeline-horizontal {
    flex-direction: row;
}

.p-timeline-horizontal .p-timeline-event {
    flex-direction: column;
    flex: 1;
}

.p-timeline-horizontal .p-timeline-event:last-child {
    flex: 0;
}

.p-timeline-horizontal .p-timeline-event-separator {
    flex-direction: row;
}

.p-timeline-horizontal .p-timeline-event-connector {
    width: 100%;
    height: `).concat(t("timeline.event.connector.size"),`;
}

.p-timeline-horizontal .p-timeline-event-opposite,
.p-timeline-horizontal .p-timeline-event-content {
    padding: `).concat(t("timeline.horizontal.event.content.padding"),`;
}

.p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(even) {
    flex-direction: column-reverse;
}

.p-timeline-bottom .p-timeline-event {
    flex-direction: column-reverse;
}
`)},NR={root:function(e){var t=e.props;return["p-timeline p-component","p-timeline-"+t.align,"p-timeline-"+t.layout]},event:"p-timeline-event",eventOpposite:"p-timeline-event-opposite",eventSeparator:"p-timeline-event-separator",eventMarker:"p-timeline-event-marker",eventConnector:"p-timeline-event-connector",eventContent:"p-timeline-event-content"},OR=ut.extend({name:"timeline",theme:DR,classes:NR}),BR={name:"BaseTimeline",extends:Vr,props:{value:null,align:{mode:String,default:"left"},layout:{mode:String,default:"vertical"},dataKey:null},style:OR,provide:function(){return{$pcTimeline:this,$parentInstance:this}}},b0={name:"Timeline",extends:BR,inheritAttrs:!1,methods:{getKey:function(e,t){return this.dataKey?i_(e,this.dataKey):t},getPTOptions:function(e,t){return this.ptm(e,{context:{index:t,count:this.value.length}})}}};function UR(n,e,t,r,i,o){return ge(),Pe("div",he({class:n.cx("root")},n.ptmi("root")),[(ge(!0),Pe(kt,null,bo(n.value,function(s,a){return ge(),Pe("div",he({key:o.getKey(s,a),class:n.cx("event"),ref_for:!0},o.getPTOptions("event",a)),[J("div",he({class:n.cx("eventOpposite",{index:a}),ref_for:!0},o.getPTOptions("eventOpposite",a)),[nt(n.$slots,"opposite",{item:s,index:a})],16),J("div",he({class:n.cx("eventSeparator"),ref_for:!0},o.getPTOptions("eventSeparator",a)),[nt(n.$slots,"marker",{item:s,index:a},function(){return[J("div",he({class:n.cx("eventMarker"),ref_for:!0},o.getPTOptions("eventMarker",a)),null,16)]}),a!==n.value.length-1?nt(n.$slots,"connector",{key:0,item:s,index:a},function(){return[J("div",he({class:n.cx("eventConnector"),ref_for:!0},o.getPTOptions("eventConnector",a)),null,16)]}):At("",!0)],16),J("div",he({class:n.cx("eventContent"),ref_for:!0},o.getPTOptions("eventContent",a)),[nt(n.$slots,"content",{item:s,index:a})],16)],16)}),128))],16)}b0.render=UR;var FR=function(e){var t=e.dt;return`
.p-tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: `.concat(t("tag.primary.background"),`;
    color: `).concat(t("tag.primary.color"),`;
    font-size: `).concat(t("tag.font.size"),`;
    font-weight: `).concat(t("tag.font.weight"),`;
    padding: `).concat(t("tag.padding"),`;
    border-radius: `).concat(t("tag.border.radius"),`;
    gap: `).concat(t("tag.gap"),`;
}

.p-tag-icon {
    font-size: `).concat(t("tag.icon.size"),`;
    width: `).concat(t("tag.icon.size"),`;
    height:`).concat(t("tag.icon.size"),`;
}

.p-tag-rounded {
    border-radius: `).concat(t("tag.rounded.border.radius"),`;
}

.p-tag-success {
    background: `).concat(t("tag.success.background"),`;
    color: `).concat(t("tag.success.color"),`;
}

.p-tag-info {
    background: `).concat(t("tag.info.background"),`;
    color: `).concat(t("tag.info.color"),`;
}

.p-tag-warn {
    background: `).concat(t("tag.warn.background"),`;
    color: `).concat(t("tag.warn.color"),`;
}

.p-tag-danger {
    background: `).concat(t("tag.danger.background"),`;
    color: `).concat(t("tag.danger.color"),`;
}

.p-tag-secondary {
    background: `).concat(t("tag.secondary.background"),`;
    color: `).concat(t("tag.secondary.color"),`;
}

.p-tag-contrast {
    background: `).concat(t("tag.contrast.background"),`;
    color: `).concat(t("tag.contrast.color"),`;
}
`)},zR={root:function(e){var t=e.props;return["p-tag p-component",{"p-tag-info":t.severity==="info","p-tag-success":t.severity==="success","p-tag-warn":t.severity==="warn","p-tag-danger":t.severity==="danger","p-tag-secondary":t.severity==="secondary","p-tag-contrast":t.severity==="contrast","p-tag-rounded":t.rounded}]},icon:"p-tag-icon",label:"p-tag-label"},HR=ut.extend({name:"tag",theme:FR,classes:zR}),VR={name:"BaseTag",extends:Vr,props:{value:null,severity:null,rounded:Boolean,icon:String},style:HR,provide:function(){return{$pcTag:this,$parentInstance:this}}},_0={name:"Tag",extends:VR,inheritAttrs:!1};function GR(n,e,t,r,i,o){return ge(),Pe("span",he({class:n.cx("root")},n.ptmi("root")),[n.$slots.icon?(ge(),Wt(gi(n.$slots.icon),he({key:0,class:n.cx("icon")},n.ptm("icon")),null,16,["class"])):n.icon?(ge(),Pe("span",he({key:1,class:[n.cx("icon"),n.icon]},n.ptm("icon")),null,16)):At("",!0),n.value!=null||n.$slots.default?nt(n.$slots,"default",{key:2},function(){return[J("span",he({class:n.cx("label")},n.ptm("label")),Kt(n.value),17)]}):At("",!0)],16)}_0.render=GR;var y0={name:"TimesCircleIcon",extends:Un};function $R(n,e,t,r,i,o){return ge(),Pe("svg",he({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),e[0]||(e[0]=[J("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z",fill:"currentColor"},null,-1)]),16)}y0.render=$R;var WR=function(e){var t=e.dt;return`
.p-chip {
    display: inline-flex;
    align-items: center;
    background: `.concat(t("chip.background"),`;
    color: `).concat(t("chip.color"),`;
    border-radius: `).concat(t("chip.border.radius"),`;
    padding-block: `).concat(t("chip.padding.y"),`;
    padding-inline: `).concat(t("chip.padding.x"),`;
    gap: `).concat(t("chip.gap"),`;
}

.p-chip-icon {
    color: `).concat(t("chip.icon.color"),`;
    font-size: `).concat(t("chip.icon.font.size"),`;
    width: `).concat(t("chip.icon.size"),`;
    height: `).concat(t("chip.icon.size"),`;
}

.p-chip-image {
    border-radius: 50%;
    width: `).concat(t("chip.image.width"),`;
    height: `).concat(t("chip.image.height"),`;
    margin-inline-start: calc(-1 * `).concat(t("chip.padding.y"),`);
}

.p-chip:has(.p-chip-remove-icon) {
    padding-inline-end: `).concat(t("chip.padding.y"),`;
}

.p-chip:has(.p-chip-image) {
    padding-block-start: calc(`).concat(t("chip.padding.y"),` / 2);
    padding-block-end: calc(`).concat(t("chip.padding.y"),` / 2);
}

.p-chip-remove-icon {
    cursor: pointer;
    font-size: `).concat(t("chip.remove.icon.size"),`;
    width: `).concat(t("chip.remove.icon.size"),`;
    height: `).concat(t("chip.remove.icon.size"),`;
    color: `).concat(t("chip.remove.icon.color"),`;
    border-radius: 50%;
    transition: outline-color `).concat(t("chip.transition.duration"),", box-shadow ").concat(t("chip.transition.duration"),`;
    outline-color: transparent;
}

.p-chip-remove-icon:focus-visible {
    box-shadow: `).concat(t("chip.remove.icon.focus.ring.shadow"),`;
    outline: `).concat(t("chip.remove.icon.focus.ring.width")," ").concat(t("chip.remove.icon.focus.ring.style")," ").concat(t("chip.remove.icon.focus.ring.color"),`;
    outline-offset: `).concat(t("chip.remove.icon.focus.ring.offset"),`;
}
`)},jR={root:"p-chip p-component",image:"p-chip-image",icon:"p-chip-icon",label:"p-chip-label",removeIcon:"p-chip-remove-icon"},XR=ut.extend({name:"chip",theme:WR,classes:jR}),KR={name:"BaseChip",extends:Vr,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},removable:{type:Boolean,default:!1},removeIcon:{type:String,default:void 0}},style:XR,provide:function(){return{$pcChip:this,$parentInstance:this}}},It={name:"Chip",extends:KR,inheritAttrs:!1,emits:["remove"],data:function(){return{visible:!0}},methods:{onKeydown:function(e){(e.key==="Enter"||e.key==="Backspace")&&this.close(e)},close:function(e){this.visible=!1,this.$emit("remove",e)}},components:{TimesCircleIcon:y0}},YR=["aria-label"],qR=["src"];function ZR(n,e,t,r,i,o){return i.visible?(ge(),Pe("div",he({key:0,class:n.cx("root"),"aria-label":n.label},n.ptmi("root")),[nt(n.$slots,"default",{},function(){return[n.image?(ge(),Pe("img",he({key:0,src:n.image},n.ptm("image"),{class:n.cx("image")}),null,16,qR)):n.$slots.icon?(ge(),Wt(gi(n.$slots.icon),he({key:1,class:n.cx("icon")},n.ptm("icon")),null,16,["class"])):n.icon?(ge(),Pe("span",he({key:2,class:[n.cx("icon"),n.icon]},n.ptm("icon")),null,16)):At("",!0),n.label?(ge(),Pe("div",he({key:3,class:n.cx("label")},n.ptm("label")),Kt(n.label),17)):At("",!0)]}),n.removable?nt(n.$slots,"removeicon",{key:0,removeCallback:o.close,keydownCallback:o.onKeydown},function(){return[(ge(),Wt(gi(n.removeIcon?"span":"TimesCircleIcon"),he({class:[n.cx("removeIcon"),n.removeIcon],onClick:o.close,onKeydown:o.onKeydown},n.ptm("removeIcon")),null,16,["class","onClick","onKeydown"]))]}):At("",!0)],16,YR)):At("",!0)}It.render=ZR;const JR="/assets/zenzone-1CgaEYUF.png",QR="/assets/helloworld-ChefWNk6.png",e5="/assets/habitstracker-B1VYQOUR.png",Np="/assets/me-DYEFBFKS.jpeg",t5={class:"center-card about-me-card hidden"},n5={class:"hide"},r5=["src"],i5={class:"screen"},o5={class:"container"},s5={class:"center-card"},a5={class:"resume-card"},l5={class:"center-card"},c5={class:"project-card"},u5=["href"],d5=["src"],f5={class:"center-card about-me-card"},h5=["src"],p5={data(){return["projects","overlay","nameStyle","nameToLocation","toggle","workExperience"]},created(){this.projects=[{url:"https://github.com/ECE-493-Group-20/ZenZone",image:JR,name:"ZenZone",description:"Location Activity Tracker",skills:"JS/TS, CI/CD, React, GCP"},{url:"https://github.com/AnotherDayOfTrying/hello_world",image:QR,name:"Hello_World",description:"Distributed Social Platform",skills:"Python, CI/CD, React, Heroku"},{url:"https://github.com/CMPUT301F21T49/HabitsTracker",image:e5,name:"Habit Tracker",description:"Personal Habit Tracker",skills:"Android, Java",color:{color:"#333333aa"}}],this.toggle=!1,this.workExperience=[{date:"May 2022 - Aug 2023",title:"Cloud DevOps Intern",company:"Nutrien",tasks:["Implemented role-based access control on an internal platform requiring work with React, .NET, AWS Cloud Infrastructure, and PostgreSQL","Enhanced 200+ repositories with CircleCI CI/CD pipelines, custom CircleCI Orbs, and SonarQube streamlining the development process and ensuring code quality","Created CLI tools to standardize GitHub repository settings and AWS configurations","Deployed AWS infrastructure for automated key rotation and merging development branches","Monitored, identified, and resolved application bottlenecks with SIEM tools"]},{date:"May 2021 - Aug 2021",title:"Research Assistant",company:"University of Alberta",tasks:["Responsible for full-stack development of riverice.ca using Next.js and Firebase services","Authored a comprehensive user manual detailing usage instructions and functionalities for a river ice analysis program coded in C and C++"]}]},mounted(){this.overlay={left:document.getElementById("github").getBoundingClientRect().left+45+"px",top:document.getElementById("github").getBoundingClientRect().top+-15+"px"}},methods:{moveName(n){if(!(window.innerWidth<1024))if(n){const e=document.getElementById("about-me").getBoundingClientRect();this.nameToLocation={bottom:e.bottom+30+"px",left:e.left+"px"},this.nameStyle=document.getElementById("my-name").style,document.getElementById("my-name").style=`bottom: ${this.nameToLocation.bottom}; left: ${this.nameToLocation.left}; font-size: 4vw; translation: transform(50%, 50%)`}else document.getElementById("my-name").style=this.nameStyle}}},m5=Object.assign(p5,{__name:"Drawer",setup(n){return(e,t)=>(ge(),Pe(kt,null,[J("div",t5,[t[1]||(t[1]=J("div",{id:"about-me",class:"hide"},[J("h3",null,"Aspiring Software Engineer"),Qe(" I just want to build "),J("span",{class:"highlight"},"cool things"),Qe(" with "),J("span",{class:"highlight"},"cool people"),Qe("."),J("br"),J("br"),J("br"),Qe(" Email: "),J("span",{class:"highlight"},"javierjustin7@gmail.com")],-1)),J("div",n5,[J("img",{class:"image-me",src:dt(Np)},null,8,r5)])]),J("div",i5,[J("div",o5,[Te(Nc,{color:"#285c69",name:"Resume"},{icon:ze(()=>t[2]||(t[2]=[J("i",{class:"pi pi-book"},null,-1)])),"drawer-content":ze(()=>[J("div",s5,[J("div",a5,[t[26]||(t[26]=J("div",{class:"resume-title"},[J("i",{class:"pi pi-graduation-cap pi-resume-icons"}),J("h1",null,"Academic")],-1)),t[27]||(t[27]=J("h3",null,"Computer Engineering w/ Software Specialization, BSc Co-op, 2024",-1)),t[28]||(t[28]=J("h4",null,"University of Alberta | Edmonton, Alberta",-1)),J("b",null,[t[3]||(t[3]=Qe("Grade Point Average(GPA): ")),Te(dt(_0),{value:"3.7/4.0"})]),t[29]||(t[29]=J("br",null,null,-1)),t[30]||(t[30]=J("br",null,null,-1)),t[31]||(t[31]=J("hr",null,null,-1)),t[32]||(t[32]=J("br",null,null,-1)),t[33]||(t[33]=J("div",{class:"resume-title"},[J("i",{class:"pi pi-briefcase pi-resume-icons"}),J("h1",null,"Work Experience")],-1)),Te(dt(b0),{value:e.workExperience},{content:ze(r=>[J("div",null,[J("div",null,[J("strong",null,Kt(r.item.date),1)]),J("div",null,[J("h2",null,Kt(r.item.title),1),J("h3",null,Kt(r.item.company),1),J("ul",null,[(ge(!0),Pe(kt,null,bo(r.item.tasks,i=>(ge(),Pe("li",null,Kt(i),1))),256))])])])]),_:1},8,["value"]),t[34]||(t[34]=J("br",null,null,-1)),t[35]||(t[35]=J("hr",null,null,-1)),t[36]||(t[36]=J("br",null,null,-1)),t[37]||(t[37]=J("div",{class:"resume-title"},[J("i",{class:"pi pi-list-check pi-resume-icons"}),J("h1",null,"Technical Skills")],-1)),t[38]||(t[38]=J("h3",null,"Programming Languages",-1)),J("div",null,[Te(dt(It),null,{default:ze(()=>t[4]||(t[4]=[Qe("Python")])),_:1}),Te(dt(It),null,{default:ze(()=>t[5]||(t[5]=[Qe("Typescript/Javascript")])),_:1}),Te(dt(It),null,{default:ze(()=>t[6]||(t[6]=[Qe("C#")])),_:1}),Te(dt(It),null,{default:ze(()=>t[7]||(t[7]=[Qe("Java")])),_:1}),Te(dt(It),null,{default:ze(()=>t[8]||(t[8]=[Qe("SQL")])),_:1}),Te(dt(It),null,{default:ze(()=>t[9]||(t[9]=[Qe("HTML5/CSS3")])),_:1})]),t[39]||(t[39]=J("h3",null,"Frameworks",-1)),J("div",null,[Te(dt(It),null,{default:ze(()=>t[10]||(t[10]=[Qe("React")])),_:1}),Te(dt(It),null,{default:ze(()=>t[11]||(t[11]=[Qe("Django")])),_:1}),Te(dt(It),null,{default:ze(()=>t[12]||(t[12]=[Qe("Next.js")])),_:1}),Te(dt(It),null,{default:ze(()=>t[13]||(t[13]=[Qe("Android")])),_:1})]),t[40]||(t[40]=J("h3",null,"Database Management Systems",-1)),J("div",null,[Te(dt(It),null,{default:ze(()=>t[14]||(t[14]=[Qe("PostgreSQL")])),_:1}),Te(dt(It),null,{default:ze(()=>t[15]||(t[15]=[Qe("MongoDB")])),_:1})]),t[41]||(t[41]=J("h3",null,"Cloud Computing",-1)),J("div",null,[Te(dt(It),null,{default:ze(()=>t[16]||(t[16]=[Qe("AWS")])),_:1}),Te(dt(It),null,{default:ze(()=>t[17]||(t[17]=[Qe("Firebase")])),_:1}),Te(dt(It),null,{default:ze(()=>t[18]||(t[18]=[Qe("Heroku")])),_:1})]),t[42]||(t[42]=J("h3",null,"DevOps",-1)),J("div",null,[Te(dt(It),null,{default:ze(()=>t[19]||(t[19]=[Qe("Git")])),_:1}),Te(dt(It),null,{default:ze(()=>t[20]||(t[20]=[Qe("CircleCI")])),_:1}),Te(dt(It),null,{default:ze(()=>t[21]||(t[21]=[Qe("Github Actions")])),_:1}),Te(dt(It),null,{default:ze(()=>t[22]||(t[22]=[Qe("Splunk")])),_:1}),Te(dt(It),null,{default:ze(()=>t[23]||(t[23]=[Qe("Docker")])),_:1}),Te(dt(It),null,{default:ze(()=>t[24]||(t[24]=[Qe("SonarQube")])),_:1})]),t[43]||(t[43]=J("h3",null,"Certificates",-1)),J("div",null,[Te(dt(It),null,{default:ze(()=>t[25]||(t[25]=[Qe("Google Cyber Security Certificate")])),_:1})])])])]),_:1}),Te(Nc,{color:"#1a2a35",name:"Projects"},{icon:ze(()=>t[44]||(t[44]=[J("i",{class:"pi pi-folder"},null,-1)])),"drawer-content":ze(()=>[J("div",{class:"github-pointer",style:lr(e.overlay)},"<- check out my other projects",4),J("div",l5,[Te(dt(v0),{value:e.projects,"vertical-view-port-height":"100%","num-visible":1,circular:"","show-indicators":!1,autoplayInterval:3e3},{item:ze(r=>[J("div",c5,[J("a",{href:r.data.url},[J("img",{src:r.data.image},null,8,d5),J("h1",{style:lr(r.data.color)},Kt(r.data.name),5),J("p",{style:lr(r.data.color)},[Qe(Kt(r.data.description)+" ",1),t[45]||(t[45]=J("br",null,null,-1)),Qe(" Skills: "+Kt(r.data.skills),1)],4)],8,u5)])]),_:1},8,["value"])])]),_:1}),Te(Nc,{color:"#121922",name:"About Me",callback:e.moveName},{icon:ze(()=>t[46]||(t[46]=[J("i",{class:"pi pi-id-card"},null,-1)])),"drawer-content":ze(()=>[J("div",f5,[J("div",{onVnodeMounted:t[0]||(t[0]=r=>e.moveName(!0))},t[47]||(t[47]=[J("h2",{class:"about-me-h2"},"Software Engineer",-1),J("br",null,null,-1),Qe(" I just want to build "),J("span",{class:"highlight"},"cool things",-1),Qe(" with "),J("span",{class:"highlight"},"cool people",-1),Qe("."),J("br",null,null,-1),J("br",null,null,-1),Qe(" Email: "),J("span",{class:"highlight"},"javierjustin7@gmail.com",-1)]),512),J("div",null,[J("img",{class:"image-me",src:dt(Np)},null,8,h5)])])]),_:1},8,["callback"])])])],64))}}),g5=Bn(m5,[["__scopeId","data-v-48a2ccdf"]]),v5=ym({__name:"App",setup(n){return(e,t)=>(ge(),Pe("main",null,[Te(LS),Te(wS),Te(g5),Te(N3)]))}}),b5=Bn(v5,[["__scopeId","data-v-eb717a74"]]),zd=qb(b5);zd.use(ny,{theme:{preset:H1}});zd.directive("tooltip",dx);zd.mount("#app");
