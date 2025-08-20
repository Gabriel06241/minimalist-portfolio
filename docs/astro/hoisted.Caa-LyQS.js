/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oe=window,ze=oe.ShadowRoot&&(oe.ShadyCSS===void 0||oe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ve=Symbol(),Je=new WeakMap;let wt=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Ve)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(ze&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Je.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Je.set(t,e))}return e}toString(){return this.cssText}};const Xt=n=>new wt(typeof n=="string"?n:n+"",void 0,Ve),de=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((i,o,s)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+n[s+1],n[0]);return new wt(t,n,Ve)},Gt=(n,e)=>{ze?n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),o=oe.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=t.cssText,n.appendChild(i)})},Qe=ze?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Xt(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ge;const se=window,Ze=se.trustedTypes,Jt=Ze?Ze.emptyScript:"",et=se.reactiveElementPolyfillSupport,Me={toAttribute(n,e){switch(e){case Boolean:n=n?Jt:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},At=(n,e)=>e!==n&&(e==e||n==n),be={attribute:!0,type:String,converter:Me,reflect:!1,hasChanged:At},Le="finalized";let D=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const o=this._$Ep(i,t);o!==void 0&&(this._$Ev.set(o,i),e.push(o))}),e}static createProperty(e,t=be){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,o=this.getPropertyDescriptor(e,i,t);o!==void 0&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(o){const s=this[e];this[t]=o,this.requestUpdate(e,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||be}static finalize(){if(this.hasOwnProperty(Le))return!1;this[Le]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of i)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const o of i)t.unshift(Qe(o))}else e!==void 0&&t.push(Qe(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Gt(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=be){var o;const s=this.constructor._$Ep(e,i);if(s!==void 0&&i.reflect===!0){const r=(((o=i.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?i.converter:Me).toAttribute(t,i.type);this._$El=e,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(e,t){var i;const o=this.constructor,s=o._$Ev.get(e);if(s!==void 0&&this._$El!==s){const r=o.getPropertyOptions(s),a=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:Me;this._$El=s,this[s]=a.fromAttribute(t,r.type),this._$El=null}}requestUpdate(e,t,i){let o=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||At)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,s)=>this[s]=o),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(o=>{var s;return(s=o.hostUpdate)===null||s===void 0?void 0:s.call(o)}),this.update(i)):this._$Ek()}catch(o){throw t=!1,this._$Ek(),o}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var o;return(o=i.hostUpdated)===null||o===void 0?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};D[Le]=!0,D.elementProperties=new Map,D.elementStyles=[],D.shadowRootOptions={mode:"open"},et?.({ReactiveElement:D}),((ge=se.reactiveElementVersions)!==null&&ge!==void 0?ge:se.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var _e;const re=window,B=re.trustedTypes,tt=B?B.createPolicy("lit-html",{createHTML:n=>n}):void 0,Ie="$lit$",T=`lit$${(Math.random()+"").slice(9)}$`,Et="?"+T,Qt=`<${Et}>`,L=document,W=()=>L.createComment(""),X=n=>n===null||typeof n!="object"&&typeof n!="function",kt=Array.isArray,Zt=n=>kt(n)||typeof n?.[Symbol.iterator]=="function",$e=`[
\f\r]`,F=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,nt=/-->/g,it=/>/g,P=RegExp(`>|${$e}(?:([^\\s"'>=/]+)(${$e}*=${$e}*(?:[^
\f\r"'\`<>=]|("|')|))|$)`,"g"),ot=/'/g,st=/"/g,xt=/^(?:script|style|textarea|title)$/i,en=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),E=en(1),x=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),rt=new WeakMap,M=L.createTreeWalker(L,129,null,!1);function jt(n,e){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return tt!==void 0?tt.createHTML(e):e}const tn=(n,e)=>{const t=n.length-1,i=[];let o,s=e===2?"<svg>":"",r=F;for(let a=0;a<t;a++){const l=n[a];let c,h,d=-1,u=0;for(;u<l.length&&(r.lastIndex=u,h=r.exec(l),h!==null);)u=r.lastIndex,r===F?h[1]==="!--"?r=nt:h[1]!==void 0?r=it:h[2]!==void 0?(xt.test(h[2])&&(o=RegExp("</"+h[2],"g")),r=P):h[3]!==void 0&&(r=P):r===P?h[0]===">"?(r=o??F,d=-1):h[1]===void 0?d=-2:(d=r.lastIndex-h[2].length,c=h[1],r=h[3]===void 0?P:h[3]==='"'?st:ot):r===st||r===ot?r=P:r===nt||r===it?r=F:(r=P,o=void 0);const f=r===P&&n[a+1].startsWith("/>")?" ":"";s+=r===F?l+Qt:d>=0?(i.push(c),l.slice(0,d)+Ie+l.slice(d)+T+f):l+T+(d===-2?(i.push(void 0),a):f)}return[jt(n,s+(n[t]||"<?>")+(e===2?"</svg>":"")),i]};class G{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let s=0,r=0;const a=e.length-1,l=this.parts,[c,h]=tn(e,t);if(this.el=G.createElement(c,i),M.currentNode=this.el.content,t===2){const d=this.el.content,u=d.firstChild;u.remove(),d.append(...u.childNodes)}for(;(o=M.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes()){const d=[];for(const u of o.getAttributeNames())if(u.endsWith(Ie)||u.startsWith(T)){const f=h[r++];if(d.push(u),f!==void 0){const p=o.getAttribute(f.toLowerCase()+Ie).split(T),m=/([.?@])?(.*)/.exec(f);l.push({type:1,index:s,name:m[2],strings:p,ctor:m[1]==="."?on:m[1]==="?"?rn:m[1]==="@"?an:he})}else l.push({type:6,index:s})}for(const u of d)o.removeAttribute(u)}if(xt.test(o.tagName)){const d=o.textContent.split(T),u=d.length-1;if(u>0){o.textContent=B?B.emptyScript:"";for(let f=0;f<u;f++)o.append(d[f],W()),M.nextNode(),l.push({type:2,index:++s});o.append(d[u],W())}}}else if(o.nodeType===8)if(o.data===Et)l.push({type:2,index:s});else{let d=-1;for(;(d=o.data.indexOf(T,d+1))!==-1;)l.push({type:7,index:s}),d+=T.length-1}s++}}static createElement(e,t){const i=L.createElement("template");return i.innerHTML=e,i}}function K(n,e,t=n,i){var o,s,r,a;if(e===x)return e;let l=i!==void 0?(o=t._$Co)===null||o===void 0?void 0:o[i]:t._$Cl;const c=X(e)?void 0:e._$litDirective$;return l?.constructor!==c&&((s=l?._$AO)===null||s===void 0||s.call(l,!1),c===void 0?l=void 0:(l=new c(n),l._$AT(n,t,i)),i!==void 0?((r=(a=t)._$Co)!==null&&r!==void 0?r:a._$Co=[])[i]=l:t._$Cl=l),l!==void 0&&(e=K(n,l._$AS(n,e.values),l,i)),e}class nn{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:o}=this._$AD,s=((t=e?.creationScope)!==null&&t!==void 0?t:L).importNode(i,!0);M.currentNode=s;let r=M.nextNode(),a=0,l=0,c=o[0];for(;c!==void 0;){if(a===c.index){let h;c.type===2?h=new V(r,r.nextSibling,this,e):c.type===1?h=new c.ctor(r,c.name,c.strings,this,e):c.type===6&&(h=new ln(r,this,e)),this._$AV.push(h),c=o[++l]}a!==c?.index&&(r=M.nextNode(),a++)}return M.currentNode=L,s}v(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class V{constructor(e,t,i,o){var s;this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cp=(s=o?.isConnected)===null||s===void 0||s}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=K(this,e,t),X(e)?e===y||e==null||e===""?(this._$AH!==y&&this._$AR(),this._$AH=y):e!==this._$AH&&e!==x&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Zt(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==y&&X(this._$AH)?this._$AA.nextSibling.data=e:this.$(L.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:o}=e,s=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=G.createElement(jt(o.h,o.h[0]),this.options)),o);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===s)this._$AH.v(i);else{const r=new nn(s,this),a=r.u(this.options);r.v(i),this.$(a),this._$AH=r}}_$AC(e){let t=rt.get(e.strings);return t===void 0&&rt.set(e.strings,t=new G(e)),t}T(e){kt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const s of e)o===t.length?t.push(i=new V(this.k(W()),this.k(W()),this,this.options)):i=t[o],i._$AI(s),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}let he=class{constructor(e,t,i,o,s){this.type=1,this._$AH=y,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=y}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,o){const s=this.strings;let r=!1;if(s===void 0)e=K(this,e,t,0),r=!X(e)||e!==this._$AH&&e!==x,r&&(this._$AH=e);else{const a=e;let l,c;for(e=s[0],l=0;l<s.length-1;l++)c=K(this,a[i+l],t,l),c===x&&(c=this._$AH[l]),r||(r=!X(c)||c!==this._$AH[l]),c===y?e=y:e!==y&&(e+=(c??"")+s[l+1]),this._$AH[l]=c}r&&!o&&this.j(e)}j(e){e===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}};class on extends he{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===y?void 0:e}}const sn=B?B.emptyScript:"";class rn extends he{constructor(){super(...arguments),this.type=4}j(e){e&&e!==y?this.element.setAttribute(this.name,sn):this.element.removeAttribute(this.name)}}class an extends he{constructor(e,t,i,o,s){super(e,t,i,o,s),this.type=5}_$AI(e,t=this){var i;if((e=(i=K(this,e,t,0))!==null&&i!==void 0?i:y)===x)return;const o=this._$AH,s=e===y&&o!==y||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,r=e!==y&&(o===y||s);s&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class ln{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){K(this,e)}}const cn={I:V},at=re.litHtmlPolyfillSupport;at?.(G,V),((_e=re.litHtmlVersions)!==null&&_e!==void 0?_e:re.litHtmlVersions=[]).push("2.8.0");const dn=(n,e,t)=>{var i,o;const s=(i=t?.renderBefore)!==null&&i!==void 0?i:e;let r=s._$litPart$;if(r===void 0){const a=(o=t?.renderBefore)!==null&&o!==void 0?o:null;s._$litPart$=r=new V(e.insertBefore(W(),a),a,void 0,t??{})}return r._$AI(n),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var we,Ae;let H=class extends D{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=dn(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return x}};H.finalized=!0,H._$litElement$=!0,(we=globalThis.litElementHydrateSupport)===null||we===void 0||we.call(globalThis,{LitElement:H});const lt=globalThis.litElementPolyfillSupport;lt?.({LitElement:H});((Ae=globalThis.litElementVersions)!==null&&Ae!==void 0?Ae:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ue=n=>e=>typeof e=="function"?((t,i)=>(customElements.define(t,i),i))(n,e):((t,i)=>{const{kind:o,elements:s}=i;return{kind:o,elements:s,finisher(r){customElements.define(t,r)}}})(n,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hn=(n,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,n)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,n)}},un=(n,e,t)=>{e.constructor.createProperty(t,n)};function $(n){return(e,t)=>t!==void 0?un(n,e,t):hn(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function C(n){return $({...n,state:!0})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ee;((Ee=window.HTMLSlotElement)===null||Ee===void 0?void 0:Ee.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const S={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},ee=n=>(...e)=>({_$litDirective$:n,values:e});class te{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:fn}=cn,St=n=>n.strings===void 0,ct=()=>document.createComment(""),q=(n,e,t)=>{var i;const o=n._$AA.parentNode,s=e===void 0?n._$AB:e._$AA;if(t===void 0){const r=o.insertBefore(ct(),s),a=o.insertBefore(ct(),s);t=new fn(r,a,n,n.options)}else{const r=t._$AB.nextSibling,a=t._$AM,l=a!==n;if(l){let c;(i=t._$AQ)===null||i===void 0||i.call(t,n),t._$AM=n,t._$AP!==void 0&&(c=n._$AU)!==a._$AU&&t._$AP(c)}if(r!==s||l){let c=t._$AA;for(;c!==r;){const h=c.nextSibling;o.insertBefore(c,s),c=h}}}return t},R=(n,e,t=n)=>(n._$AI(e,t),n),pn={},Tt=(n,e=pn)=>n._$AH=e,mn=n=>n._$AH,ke=n=>{var e;(e=n._$AP)===null||e===void 0||e.call(n,!1,!0);let t=n._$AA;const i=n._$AB.nextSibling;for(;t!==i;){const o=t.nextSibling;t.remove(),t=o}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dt=(n,e,t)=>{const i=new Map;for(let o=e;o<=t;o++)i.set(n[o],o);return i},vn=ee(class extends te{constructor(n){if(super(n),n.type!==S.CHILD)throw Error("repeat() can only be used in text expressions")}ct(n,e,t){let i;t===void 0?t=e:e!==void 0&&(i=e);const o=[],s=[];let r=0;for(const a of n)o[r]=i?i(a,r):r,s[r]=t(a,r),r++;return{values:s,keys:o}}render(n,e,t){return this.ct(n,e,t).values}update(n,[e,t,i]){var o;const s=mn(n),{values:r,keys:a}=this.ct(e,t,i);if(!Array.isArray(s))return this.ut=a,r;const l=(o=this.ut)!==null&&o!==void 0?o:this.ut=[],c=[];let h,d,u=0,f=s.length-1,p=0,m=r.length-1;for(;u<=f&&p<=m;)if(s[u]===null)u++;else if(s[f]===null)f--;else if(l[u]===a[p])c[p]=R(s[u],r[p]),u++,p++;else if(l[f]===a[m])c[m]=R(s[f],r[m]),f--,m--;else if(l[u]===a[m])c[m]=R(s[u],r[m]),q(n,c[m+1],s[u]),u++,m--;else if(l[f]===a[p])c[p]=R(s[f],r[p]),q(n,s[u],s[f]),f--,p++;else if(h===void 0&&(h=dt(a,p,m),d=dt(l,u,f)),h.has(l[u]))if(h.has(l[f])){const k=d.get(a[p]),ye=k!==void 0?s[k]:null;if(ye===null){const Ge=q(n,s[u]);R(Ge,r[p]),c[p]=Ge}else c[p]=R(ye,r[p]),q(n,s[u],ye),s[k]=null;p++}else ke(s[f]),f--;else ke(s[u]),u++;for(;p<=m;){const k=q(n,c[m+1]);R(k,r[p]),c[p++]=k}for(;u<=f;){const k=s[u++];k!==null&&ke(k)}return this.ut=a,Tt(n,c),x}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yn=ee(class extends te{constructor(n){if(super(n),n.type!==S.PROPERTY&&n.type!==S.ATTRIBUTE&&n.type!==S.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!St(n))throw Error("`live` bindings can only contain a single expression")}render(n){return n}update(n,[e]){if(e===x||e===y)return e;const t=n.element,i=n.name;if(n.type===S.PROPERTY){if(e===t[i])return x}else if(n.type===S.BOOLEAN_ATTRIBUTE){if(!!e===t.hasAttribute(i))return x}else if(n.type===S.ATTRIBUTE&&t.getAttribute(i)===e+"")return x;return Tt(n),e}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Y=(n,e)=>{var t,i;const o=n._$AN;if(o===void 0)return!1;for(const s of o)(i=(t=s)._$AO)===null||i===void 0||i.call(t,e,!1),Y(s,e);return!0},ae=n=>{let e,t;do{if((e=n._$AM)===void 0)break;t=e._$AN,t.delete(n),n=e}while(t?.size===0)},Ht=n=>{for(let e;e=n._$AM;n=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(n))break;t.add(n),_n(e)}};function gn(n){this._$AN!==void 0?(ae(this),this._$AM=n,Ht(this)):this._$AM=n}function bn(n,e=!1,t=0){const i=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(i))for(let s=t;s<i.length;s++)Y(i[s],!1),ae(i[s]);else i!=null&&(Y(i,!1),ae(i));else Y(this,n)}const _n=n=>{var e,t,i,o;n.type==S.CHILD&&((e=(i=n)._$AP)!==null&&e!==void 0||(i._$AP=bn),(t=(o=n)._$AQ)!==null&&t!==void 0||(o._$AQ=gn))};class $n extends te{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),Ht(this),this.isConnected=e._$AU}_$AO(e,t=!0){var i,o;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)===null||i===void 0||i.call(this):(o=this.disconnected)===null||o===void 0||o.call(this)),t&&(Y(this,e),ae(this))}setValue(e){if(St(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ct=()=>new wn;let wn=class{};const xe=new WeakMap,Pt=ee(class extends $n{render(n){return y}update(n,[e]){var t;const i=e!==this.G;return i&&this.G!==void 0&&this.ot(void 0),(i||this.rt!==this.lt)&&(this.G=e,this.dt=(t=n.options)===null||t===void 0?void 0:t.host,this.ot(this.lt=n.element)),y}ot(n){var e;if(typeof this.G=="function"){const t=(e=this.dt)!==null&&e!==void 0?e:globalThis;let i=xe.get(t);i===void 0&&(i=new WeakMap,xe.set(t,i)),i.get(this.G)!==void 0&&this.G.call(this.dt,void 0),i.set(this.G,n),n!==void 0&&this.G.call(this.dt,n)}else this.G.value=n}get rt(){var n,e,t;return typeof this.G=="function"?(e=xe.get((n=this.dt)!==null&&n!==void 0?n:globalThis))===null||e===void 0?void 0:e.get(this.G):(t=this.G)===null||t===void 0?void 0:t.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ne=ee(class extends te{constructor(n){var e;if(super(n),n.type!==S.ATTRIBUTE||n.name!=="class"||((e=n.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(n){return" "+Object.keys(n).filter(e=>n[e]).join(" ")+" "}update(n,[e]){var t,i;if(this.it===void 0){this.it=new Set,n.strings!==void 0&&(this.nt=new Set(n.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in e)e[s]&&!(!((t=this.nt)===null||t===void 0)&&t.has(s))&&this.it.add(s);return this.render(e)}const o=n.element.classList;this.it.forEach(s=>{s in e||(o.remove(s),this.it.delete(s))});for(const s in e){const r=!!e[s];r===this.it.has(s)||!((i=this.nt)===null||i===void 0)&&i.has(s)||(r?(o.add(s),this.it.add(s)):(o.remove(s),this.it.delete(s)))}return x}});/*!
 * hotkeys-js v3.8.7
 * A simple micro-library for defining and dispatching keyboard shortcuts. It has no dependencies.
 *
 * Copyright (c) 2021 kenny wong <wowohoo@qq.com>
 * http://jaywcjlove.github.io/hotkeys
 *
 * Licensed under the MIT license.
 */var je=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function Se(n,e,t){n.addEventListener?n.addEventListener(e,t,!1):n.attachEvent&&n.attachEvent("on".concat(e),function(){t(window.event)})}function Rt(n,e){for(var t=e.slice(0,e.length-1),i=0;i<t.length;i++)t[i]=n[t[i].toLowerCase()];return t}function Ot(n){typeof n!="string"&&(n=""),n=n.replace(/\s/g,"");for(var e=n.split(","),t=e.lastIndexOf("");t>=0;)e[t-1]+=",",e.splice(t,1),t=e.lastIndexOf("");return e}function An(n,e){for(var t=n.length>=e.length?n:e,i=n.length>=e.length?e:n,o=!0,s=0;s<t.length;s++)i.indexOf(t[s])===-1&&(o=!1);return o}var Mt={backspace:8,tab:9,clear:12,enter:13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"⇪":20,",":188,".":190,"/":191,"`":192,"-":je?173:189,"=":je?61:187,";":je?59:186,"'":222,"[":219,"]":221,"\\":220},I={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,cmd:91,command:91},ht={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},A={16:!1,18:!1,17:!1,91:!1},w={};for(var ie=1;ie<20;ie++)Mt["f".concat(ie)]=111+ie;var v=[],Lt="all",It=[],fe=function(e){return Mt[e.toLowerCase()]||I[e.toLowerCase()]||e.toUpperCase().charCodeAt(0)};function Nt(n){Lt=n||"all"}function J(){return Lt||"all"}function En(){return v.slice(0)}function kn(n){var e=n.target||n.srcElement,t=e.tagName,i=!0;return(e.isContentEditable||(t==="INPUT"||t==="TEXTAREA"||t==="SELECT")&&!e.readOnly)&&(i=!1),i}function xn(n){return typeof n=="string"&&(n=fe(n)),v.indexOf(n)!==-1}function jn(n,e){var t,i;n||(n=J());for(var o in w)if(Object.prototype.hasOwnProperty.call(w,o))for(t=w[o],i=0;i<t.length;)t[i].scope===n?t.splice(i,1):i++;J()===n&&Nt(e||"all")}function Sn(n){var e=n.keyCode||n.which||n.charCode,t=v.indexOf(e);if(t>=0&&v.splice(t,1),n.key&&n.key.toLowerCase()==="meta"&&v.splice(0,v.length),(e===93||e===224)&&(e=91),e in A){A[e]=!1;for(var i in I)I[i]===e&&(b[i]=!1)}}function Tn(n){if(!n)Object.keys(w).forEach(function(r){return delete w[r]});else if(Array.isArray(n))n.forEach(function(r){r.key&&Te(r)});else if(typeof n=="object")n.key&&Te(n);else if(typeof n=="string"){for(var e=arguments.length,t=new Array(e>1?e-1:0),i=1;i<e;i++)t[i-1]=arguments[i];var o=t[0],s=t[1];typeof o=="function"&&(s=o,o=""),Te({key:n,scope:o,method:s,splitKey:"+"})}}var Te=function(e){var t=e.key,i=e.scope,o=e.method,s=e.splitKey,r=s===void 0?"+":s,a=Ot(t);a.forEach(function(l){var c=l.split(r),h=c.length,d=c[h-1],u=d==="*"?"*":fe(d);if(w[u]){i||(i=J());var f=h>1?Rt(I,c):[];w[u]=w[u].map(function(p){var m=o?p.method===o:!0;return m&&p.scope===i&&An(p.mods,f)?{}:p})}})};function ut(n,e,t){var i;if(e.scope===t||e.scope==="all"){i=e.mods.length>0;for(var o in A)Object.prototype.hasOwnProperty.call(A,o)&&(!A[o]&&e.mods.indexOf(+o)>-1||A[o]&&e.mods.indexOf(+o)===-1)&&(i=!1);(e.mods.length===0&&!A[16]&&!A[18]&&!A[17]&&!A[91]||i||e.shortcut==="*")&&e.method(n,e)===!1&&(n.preventDefault?n.preventDefault():n.returnValue=!1,n.stopPropagation&&n.stopPropagation(),n.cancelBubble&&(n.cancelBubble=!0))}}function ft(n){var e=w["*"],t=n.keyCode||n.which||n.charCode;if(b.filter.call(this,n)){if((t===93||t===224)&&(t=91),v.indexOf(t)===-1&&t!==229&&v.push(t),["ctrlKey","altKey","shiftKey","metaKey"].forEach(function(f){var p=ht[f];n[f]&&v.indexOf(p)===-1?v.push(p):!n[f]&&v.indexOf(p)>-1?v.splice(v.indexOf(p),1):f==="metaKey"&&n[f]&&v.length===3&&(n.ctrlKey||n.shiftKey||n.altKey||(v=v.slice(v.indexOf(p))))}),t in A){A[t]=!0;for(var i in I)I[i]===t&&(b[i]=!0);if(!e)return}for(var o in A)Object.prototype.hasOwnProperty.call(A,o)&&(A[o]=n[ht[o]]);n.getModifierState&&!(n.altKey&&!n.ctrlKey)&&n.getModifierState("AltGraph")&&(v.indexOf(17)===-1&&v.push(17),v.indexOf(18)===-1&&v.push(18),A[17]=!0,A[18]=!0);var s=J();if(e)for(var r=0;r<e.length;r++)e[r].scope===s&&(n.type==="keydown"&&e[r].keydown||n.type==="keyup"&&e[r].keyup)&&ut(n,e[r],s);if(t in w){for(var a=0;a<w[t].length;a++)if((n.type==="keydown"&&w[t][a].keydown||n.type==="keyup"&&w[t][a].keyup)&&w[t][a].key){for(var l=w[t][a],c=l.splitKey,h=l.key.split(c),d=[],u=0;u<h.length;u++)d.push(fe(h[u]));d.sort().join("")===v.sort().join("")&&ut(n,l,s)}}}}function Hn(n){return It.indexOf(n)>-1}function b(n,e,t){v=[];var i=Ot(n),o=[],s="all",r=document,a=0,l=!1,c=!0,h="+";for(t===void 0&&typeof e=="function"&&(t=e),Object.prototype.toString.call(e)==="[object Object]"&&(e.scope&&(s=e.scope),e.element&&(r=e.element),e.keyup&&(l=e.keyup),e.keydown!==void 0&&(c=e.keydown),typeof e.splitKey=="string"&&(h=e.splitKey)),typeof e=="string"&&(s=e);a<i.length;a++)n=i[a].split(h),o=[],n.length>1&&(o=Rt(I,n)),n=n[n.length-1],n=n==="*"?"*":fe(n),n in w||(w[n]=[]),w[n].push({keyup:l,keydown:c,scope:s,mods:o,shortcut:i[a],method:t,key:i[a],splitKey:h});typeof r<"u"&&!Hn(r)&&window&&(It.push(r),Se(r,"keydown",function(d){ft(d)}),Se(window,"focus",function(){v=[]}),Se(r,"keyup",function(d){ft(d),Sn(d)}))}var He={setScope:Nt,getScope:J,deleteScope:jn,getPressedKeyCodes:En,isPressed:xn,filter:kn,unbind:Tn};for(var Ce in He)Object.prototype.hasOwnProperty.call(He,Ce)&&(b[Ce]=He[Ce]);if(typeof window<"u"){var Cn=window.hotkeys;b.noConflict=function(n){return n&&window.hotkeys===b&&(window.hotkeys=Cn),b},window.hotkeys=b}var ne=function(n,e,t,i){var o=arguments.length,s=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(r=n[a])&&(s=(o<3?r(s):o>3?r(e,t,s):r(e,t))||s);return o>3&&s&&Object.defineProperty(e,t,s),s};let N=class extends H{constructor(){super(...arguments),this.placeholder="",this.hideBreadcrumbs=!1,this.breadcrumbHome="Home",this.breadcrumbs=[],this._inputRef=Ct()}render(){let e="";if(!this.hideBreadcrumbs){const t=[];for(const i of this.breadcrumbs)t.push(E`<button
            tabindex="-1"
            @click=${()=>this.selectParent(i)}
            class="breadcrumb"
          >
            ${i}
          </button>`);e=E`<div class="breadcrumb-list">
        <button
          tabindex="-1"
          @click=${()=>this.selectParent()}
          class="breadcrumb"
        >
          ${this.breadcrumbHome}
        </button>
        ${t}
      </div>`}return E`
      ${e}
      <div part="ninja-input-wrapper" class="search-wrapper">
        <input
          part="ninja-input"
          type="text"
          id="search"
          spellcheck="false"
          autocomplete="off"
          @input="${this._handleInput}"
          ${Pt(this._inputRef)}
          placeholder="${this.placeholder}"
          class="search"
        />
      </div>
    `}setSearch(e){this._inputRef.value&&(this._inputRef.value.value=e)}focusSearch(){requestAnimationFrame(()=>this._inputRef.value.focus())}_handleInput(e){const t=e.target;this.dispatchEvent(new CustomEvent("change",{detail:{search:t.value},bubbles:!1,composed:!1}))}selectParent(e){this.dispatchEvent(new CustomEvent("setParent",{detail:{parent:e},bubbles:!0,composed:!0}))}firstUpdated(){this.focusSearch()}_close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}};N.styles=de`
    :host {
      flex: 1;
      position: relative;
    }
    .search {
      padding: 1.25em;
      flex-grow: 1;
      flex-shrink: 0;
      margin: 0px;
      border: none;
      appearance: none;
      font-size: 1.125em;
      background: transparent;
      caret-color: var(--ninja-accent-color);
      color: var(--ninja-text-color);
      outline: none;
      font-family: var(--ninja-font-family);
    }
    .search::placeholder {
      color: var(--ninja-placeholder-color);
    }
    .breadcrumb-list {
      padding: 1em 4em 0 1em;
      display: flex;
      flex-direction: row;
      align-items: stretch;
      justify-content: flex-start;
      flex: initial;
    }

    .breadcrumb {
      background: var(--ninja-secondary-background-color);
      text-align: center;
      line-height: 1.2em;
      border-radius: var(--ninja-key-border-radius);
      border: 0;
      cursor: pointer;
      padding: 0.1em 0.5em;
      color: var(--ninja-secondary-text-color);
      margin-right: 0.5em;
      outline: none;
      font-family: var(--ninja-font-family);
    }

    .search-wrapper {
      display: flex;
      border-bottom: var(--ninja-separate-border);
    }
  `;ne([$()],N.prototype,"placeholder",void 0);ne([$({type:Boolean})],N.prototype,"hideBreadcrumbs",void 0);ne([$()],N.prototype,"breadcrumbHome",void 0);ne([$({type:Array})],N.prototype,"breadcrumbs",void 0);N=ne([ue("ninja-header")],N);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class De extends te{constructor(e){if(super(e),this.et=y,e.type!==S.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===y||e==null)return this.ft=void 0,this.et=e;if(e===x)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;const t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}}De.directiveName="unsafeHTML",De.resultType=1;const Pn=ee(De);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Rn(n,e){if(n!==void 0){let t=-1;for(const i of n)t>-1&&(yield e),t++,yield i}}function On(n,e,t,i){var o=arguments.length,s=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(r=n[a])&&(s=(o<3?r(s):o>3?r(e,t,s):r(e,t))||s);return o>3&&s&&Object.defineProperty(e,t,s),s}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */const Mn=de`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Ue=class extends H{render(){return E`<span><slot></slot></span>`}};Ue.styles=[Mn];Ue=On([ue("mwc-icon")],Ue);var pe=function(n,e,t,i){var o=arguments.length,s=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(r=n[a])&&(s=(o<3?r(s):o>3?r(e,t,s):r(e,t))||s);return o>3&&s&&Object.defineProperty(e,t,s),s};let z=class extends H{constructor(){super(),this.selected=!1,this.hotKeysJoinedView=!0,this.addEventListener("click",this.click)}ensureInView(){requestAnimationFrame(()=>this.scrollIntoView({block:"nearest"}))}click(){this.dispatchEvent(new CustomEvent("actionsSelected",{detail:this.action,bubbles:!0,composed:!0}))}updated(e){e.has("selected")&&this.selected&&this.ensureInView()}render(){let e;this.action.mdIcon?e=E`<mwc-icon part="ninja-icon" class="ninja-icon"
        >${this.action.mdIcon}</mwc-icon
      >`:this.action.icon&&(e=Pn(this.action.icon||""));let t;this.action.hotkey&&(this.hotKeysJoinedView?t=this.action.hotkey.split(",").map(o=>{const s=o.split("+"),r=E`${Rn(s.map(a=>E`<kbd>${a}</kbd>`),"+")}`;return E`<div class="ninja-hotkey ninja-hotkeys">
            ${r}
          </div>`}):t=this.action.hotkey.split(",").map(o=>{const r=o.split("+").map(a=>E`<kbd class="ninja-hotkey">${a}</kbd>`);return E`<kbd class="ninja-hotkeys">${r}</kbd>`}));const i={selected:this.selected,"ninja-action":!0};return E`
      <div
        class="ninja-action"
        part="ninja-action ${this.selected?"ninja-selected":""}"
        class=${Ne(i)}
      >
        ${e}
        <div class="ninja-title">${this.action.title}</div>
        ${t}
      </div>
    `}};z.styles=de`
    :host {
      display: flex;
      width: 100%;
    }
    .ninja-action {
      padding: 0.75em 1em;
      display: flex;
      border-left: 2px solid transparent;
      align-items: center;
      justify-content: start;
      outline: none;
      transition: color 0s ease 0s;
      width: 100%;
    }
    .ninja-action.selected {
      cursor: pointer;
      color: var(--ninja-selected-text-color);
      background-color: var(--ninja-selected-background);
      border-left: 2px solid var(--ninja-accent-color);
      outline: none;
    }
    .ninja-action.selected .ninja-icon {
      color: var(--ninja-selected-text-color);
    }
    .ninja-icon {
      font-size: var(--ninja-icon-size);
      max-width: var(--ninja-icon-size);
      max-height: var(--ninja-icon-size);
      margin-right: 1em;
      color: var(--ninja-icon-color);
      margin-right: 1em;
      position: relative;
    }

    .ninja-title {
      flex-shrink: 0.01;
      margin-right: 0.5em;
      flex-grow: 1;
      font-size: 0.8125em;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .ninja-hotkeys {
      flex-shrink: 0;
      width: min-content;
      display: flex;
    }

    .ninja-hotkeys kbd {
      font-family: inherit;
    }
    .ninja-hotkey {
      background: var(--ninja-secondary-background-color);
      padding: 0.06em 0.25em;
      border-radius: var(--ninja-key-border-radius);
      text-transform: capitalize;
      color: var(--ninja-secondary-text-color);
      font-size: 0.75em;
      font-family: inherit;
    }

    .ninja-hotkey + .ninja-hotkey {
      margin-left: 0.5em;
    }
    .ninja-hotkeys + .ninja-hotkeys {
      margin-left: 1em;
    }
  `;pe([$({type:Object})],z.prototype,"action",void 0);pe([$({type:Boolean})],z.prototype,"selected",void 0);pe([$({type:Boolean})],z.prototype,"hotKeysJoinedView",void 0);z=pe([ue("ninja-action")],z);const Ln=E` <div class="modal-footer" slot="footer">
  <span class="help">
    <svg
      version="1.0"
      class="ninja-examplekey"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1280 1280"
    >
      <path
        d="M1013 376c0 73.4-.4 113.3-1.1 120.2a159.9 159.9 0 0 1-90.2 127.3c-20 9.6-36.7 14-59.2 15.5-7.1.5-121.9.9-255 1h-242l95.5-95.5 95.5-95.5-38.3-38.2-38.2-38.3-160 160c-88 88-160 160.4-160 161 0 .6 72 73 160 161l160 160 38.2-38.3 38.3-38.2-95.5-95.5-95.5-95.5h251.1c252.9 0 259.8-.1 281.4-3.6 72.1-11.8 136.9-54.1 178.5-116.4 8.6-12.9 22.6-40.5 28-55.4 4.4-12 10.7-36.1 13.1-50.6 1.6-9.6 1.8-21 2.1-132.8l.4-122.2H1013v110z"
      />
    </svg>

    to select
  </span>
  <span class="help">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="ninja-examplekey"
      viewBox="0 0 24 24"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path
        d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
      />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="ninja-examplekey"
      viewBox="0 0 24 24"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
    </svg>
    to navigate
  </span>
  <span class="help">
    <span class="ninja-examplekey esc">esc</span>
    to close
  </span>
  <span class="help">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="ninja-examplekey backspace"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M6.707 4.879A3 3 0 018.828 4H15a3 3 0 013 3v6a3 3 0 01-3 3H8.828a3 3 0 01-2.12-.879l-4.415-4.414a1 1 0 010-1.414l4.414-4.414zm4 2.414a1 1 0 00-1.414 1.414L10.586 10l-1.293 1.293a1 1 0 101.414 1.414L12 11.414l1.293 1.293a1 1 0 001.414-1.414L13.414 10l1.293-1.293a1 1 0 00-1.414-1.414L12 8.586l-1.293-1.293z"
        clip-rule="evenodd"
      />
    </svg>
    move to parent
  </span>
</div>`,In=de`
  :host {
    --ninja-width: 640px;
    --ninja-backdrop-filter: none;
    --ninja-overflow-background: rgba(255, 255, 255, 0.5);
    --ninja-text-color: rgb(60, 65, 73);
    --ninja-font-size: 16px;
    --ninja-top: 20%;

    --ninja-key-border-radius: 0.25em;
    --ninja-accent-color: rgb(110, 94, 210);
    --ninja-secondary-background-color: rgb(239, 241, 244);
    --ninja-secondary-text-color: rgb(107, 111, 118);

    --ninja-selected-background: rgb(248, 249, 251);

    --ninja-icon-color: var(--ninja-secondary-text-color);
    --ninja-icon-size: 1.2em;
    --ninja-separate-border: 1px solid var(--ninja-secondary-background-color);

    --ninja-modal-background: #fff;
    --ninja-modal-shadow: rgb(0 0 0 / 50%) 0px 16px 70px;

    --ninja-actions-height: 300px;
    --ninja-group-text-color: rgb(144, 149, 157);

    --ninja-footer-background: rgba(242, 242, 242, 0.4);

    --ninja-placeholder-color: #8e8e8e;

    font-size: var(--ninja-font-size);

    --ninja-z-index: 1;
  }

  :host(.dark) {
    --ninja-backdrop-filter: none;
    --ninja-overflow-background: rgba(0, 0, 0, 0.7);
    --ninja-text-color: #7d7d7d;

    --ninja-modal-background: rgba(17, 17, 17, 0.85);
    --ninja-accent-color: rgb(110, 94, 210);
    --ninja-secondary-background-color: rgba(51, 51, 51, 0.44);
    --ninja-secondary-text-color: #888;

    --ninja-selected-text-color: #eaeaea;
    --ninja-selected-background: rgba(51, 51, 51, 0.44);

    --ninja-icon-color: var(--ninja-secondary-text-color);
    --ninja-separate-border: 1px solid var(--ninja-secondary-background-color);

    --ninja-modal-shadow: 0 16px 70px rgba(0, 0, 0, 0.2);

    --ninja-group-text-color: rgb(144, 149, 157);

    --ninja-footer-background: rgba(30, 30, 30, 85%);
  }

  .modal {
    display: none;
    position: fixed;
    z-index: var(--ninja-z-index);
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background: var(--ninja-overflow-background);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-backdrop-filter: var(--ninja-backdrop-filter);
    backdrop-filter: var(--ninja-backdrop-filter);
    text-align: left;
    color: var(--ninja-text-color);
    font-family: var(--ninja-font-family);
  }
  .modal.visible {
    display: block;
  }

  .modal-content {
    position: relative;
    top: var(--ninja-top);
    margin: auto;
    padding: 0;
    display: flex;
    flex-direction: column;
    flex-shrink: 1;
    -webkit-box-flex: 1;
    flex-grow: 1;
    min-width: 0px;
    will-change: transform;
    background: var(--ninja-modal-background);
    border-radius: 0.5em;
    box-shadow: var(--ninja-modal-shadow);
    max-width: var(--ninja-width);
    overflow: hidden;
  }

  .bump {
    animation: zoom-in-zoom-out 0.2s ease;
  }

  @keyframes zoom-in-zoom-out {
    0% {
      transform: scale(0.99);
    }
    50% {
      transform: scale(1.01, 1.01);
    }
    100% {
      transform: scale(1, 1);
    }
  }

  .ninja-github {
    color: var(--ninja-keys-text-color);
    font-weight: normal;
    text-decoration: none;
  }

  .actions-list {
    max-height: var(--ninja-actions-height);
    overflow: auto;
    scroll-behavior: smooth;
    position: relative;
    margin: 0;
    padding: 0.5em 0;
    list-style: none;
    scroll-behavior: smooth;
  }

  .group-header {
    height: 1.375em;
    line-height: 1.375em;
    padding-left: 1.25em;
    padding-top: 0.5em;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 0.75em;
    line-height: 1em;
    color: var(--ninja-group-text-color);
    margin: 1px 0;
  }

  .modal-footer {
    background: var(--ninja-footer-background);
    padding: 0.5em 1em;
    display: flex;
    /* font-size: 0.75em; */
    border-top: var(--ninja-separate-border);
    color: var(--ninja-secondary-text-color);
  }

  .modal-footer .help {
    display: flex;
    margin-right: 1em;
    align-items: center;
    font-size: 0.75em;
  }

  .ninja-examplekey {
    background: var(--ninja-secondary-background-color);
    padding: 0.06em 0.25em;
    border-radius: var(--ninja-key-border-radius);
    color: var(--ninja-secondary-text-color);
    width: 1em;
    height: 1em;
    margin-right: 0.5em;
    font-size: 1.25em;
    fill: currentColor;
  }
  .ninja-examplekey.esc {
    width: auto;
    height: auto;
    font-size: 1.1em;
  }
  .ninja-examplekey.backspace {
    opacity: 0.7;
  }
`;var _=function(n,e,t,i){var o=arguments.length,s=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(r=n[a])&&(s=(o<3?r(s):o>3?r(e,t,s):r(e,t))||s);return o>3&&s&&Object.defineProperty(e,t,s),s};let g=class extends H{constructor(){super(...arguments),this.placeholder="Type a command or search...",this.disableHotkeys=!1,this.hideBreadcrumbs=!1,this.openHotkey="cmd+k,ctrl+k",this.navigationUpHotkey="up,shift+tab",this.navigationDownHotkey="down,tab",this.closeHotkey="esc",this.goBackHotkey="backspace",this.selectHotkey="enter",this.hotKeysJoinedView=!1,this.noAutoLoadMdIcons=!1,this.data=[],this.visible=!1,this._bump=!0,this._actionMatches=[],this._search="",this._flatData=[],this._headerRef=Ct()}open(e={}){this._bump=!0,this.visible=!0,this._headerRef.value.focusSearch(),this._actionMatches.length>0&&(this._selected=this._actionMatches[0]),this.setParent(e.parent)}close(){this._bump=!1,this.visible=!1}setParent(e){e?this._currentRoot=e:this._currentRoot=void 0,this._selected=void 0,this._search="",this._headerRef.value.setSearch("")}get breadcrumbs(){var e;const t=[];let i=(e=this._selected)===null||e===void 0?void 0:e.parent;if(i)for(t.push(i);i;){const o=this._flatData.find(s=>s.id===i);o?.parent&&t.push(o.parent),i=o?o.parent:void 0}return t.reverse()}connectedCallback(){super.connectedCallback(),this.noAutoLoadMdIcons||document.fonts.load("24px Material Icons","apps").then(()=>{}),this._registerInternalHotkeys()}disconnectedCallback(){super.disconnectedCallback(),this._unregisterInternalHotkeys()}_flattern(e,t){let i=[];return e||(e=[]),e.map(o=>{const s=o.children&&o.children.some(a=>typeof a=="string"),r={...o,parent:o.parent||t};return s||(r.children&&r.children.length&&(t=o.id,i=[...i,...r.children]),r.children=r.children?r.children.map(a=>a.id):[]),r}).concat(i.length?this._flattern(i,t):i)}update(e){e.has("data")&&!this.disableHotkeys&&(this._flatData=this._flattern(this.data),this._flatData.filter(t=>!!t.hotkey).forEach(t=>{b(t.hotkey,i=>{i.preventDefault(),t.handler&&t.handler(t)})})),super.update(e)}_registerInternalHotkeys(){this.openHotkey&&b(this.openHotkey,e=>{e.preventDefault(),this.visible?this.close():this.open()}),this.selectHotkey&&b(this.selectHotkey,e=>{this.visible&&(e.preventDefault(),this._actionSelected(this._actionMatches[this._selectedIndex]))}),this.goBackHotkey&&b(this.goBackHotkey,e=>{this.visible&&(this._search||(e.preventDefault(),this._goBack()))}),this.navigationDownHotkey&&b(this.navigationDownHotkey,e=>{this.visible&&(e.preventDefault(),this._selectedIndex>=this._actionMatches.length-1?this._selected=this._actionMatches[0]:this._selected=this._actionMatches[this._selectedIndex+1])}),this.navigationUpHotkey&&b(this.navigationUpHotkey,e=>{this.visible&&(e.preventDefault(),this._selectedIndex===0?this._selected=this._actionMatches[this._actionMatches.length-1]:this._selected=this._actionMatches[this._selectedIndex-1])}),this.closeHotkey&&b(this.closeHotkey,()=>{this.visible&&this.close()})}_unregisterInternalHotkeys(){this.openHotkey&&b.unbind(this.openHotkey),this.selectHotkey&&b.unbind(this.selectHotkey),this.goBackHotkey&&b.unbind(this.goBackHotkey),this.navigationDownHotkey&&b.unbind(this.navigationDownHotkey),this.navigationUpHotkey&&b.unbind(this.navigationUpHotkey),this.closeHotkey&&b.unbind(this.closeHotkey)}_actionFocused(e,t){this._selected=e,t.target.ensureInView()}_onTransitionEnd(){this._bump=!1}_goBack(){const e=this.breadcrumbs.length>1?this.breadcrumbs[this.breadcrumbs.length-2]:void 0;this.setParent(e)}render(){const e={bump:this._bump,"modal-content":!0},t={visible:this.visible,modal:!0},o=this._flatData.filter(a=>{var l;const c=new RegExp(this._search,"gi"),h=a.title.match(c)||((l=a.keywords)===null||l===void 0?void 0:l.match(c));return(!this._currentRoot&&this._search||a.parent===this._currentRoot)&&h}).reduce((a,l)=>a.set(l.section,[...a.get(l.section)||[],l]),new Map);this._actionMatches=[...o.values()].flat(),this._actionMatches.length>0&&this._selectedIndex===-1&&(this._selected=this._actionMatches[0]),this._actionMatches.length===0&&(this._selected=void 0);const s=a=>E` ${vn(a,l=>l.id,l=>{var c;return E`<ninja-action
            exportparts="ninja-action,ninja-selected,ninja-icon"
            .selected=${yn(l.id===((c=this._selected)===null||c===void 0?void 0:c.id))}
            .hotKeysJoinedView=${this.hotKeysJoinedView}
            @mouseover=${h=>this._actionFocused(l,h)}
            @actionsSelected=${h=>this._actionSelected(h.detail)}
            .action=${l}
          ></ninja-action>`})}`,r=[];return o.forEach((a,l)=>{const c=l?E`<div class="group-header">${l}</div>`:void 0;r.push(E`${c}${s(a)}`)}),E`
      <div @click=${this._overlayClick} class=${Ne(t)}>
        <div class=${Ne(e)} @animationend=${this._onTransitionEnd}>
          <ninja-header
            exportparts="ninja-input,ninja-input-wrapper"
            ${Pt(this._headerRef)}
            .placeholder=${this.placeholder}
            .hideBreadcrumbs=${this.hideBreadcrumbs}
            .breadcrumbs=${this.breadcrumbs}
            @change=${this._handleInput}
            @setParent=${a=>this.setParent(a.detail.parent)}
            @close=${this.close}
          >
          </ninja-header>
          <div class="modal-body">
            <div class="actions-list" part="actions-list">${r}</div>
          </div>
          <slot name="footer"> ${Ln} </slot>
        </div>
      </div>
    `}get _selectedIndex(){return this._selected?this._actionMatches.indexOf(this._selected):-1}_actionSelected(e){var t;if(this.dispatchEvent(new CustomEvent("selected",{detail:{search:this._search,action:e},bubbles:!0,composed:!0})),!!e){if(e.children&&((t=e.children)===null||t===void 0?void 0:t.length)>0&&(this._currentRoot=e.id,this._search=""),this._headerRef.value.setSearch(""),this._headerRef.value.focusSearch(),e.handler){const i=e.handler(e);i?.keepOpen||this.close()}this._bump=!0}}async _handleInput(e){this._search=e.detail.search,await this.updateComplete,this.dispatchEvent(new CustomEvent("change",{detail:{search:this._search,actions:this._actionMatches},bubbles:!0,composed:!0}))}_overlayClick(e){var t;!((t=e.target)===null||t===void 0)&&t.classList.contains("modal")&&this.close()}};g.styles=[In];_([$({type:String})],g.prototype,"placeholder",void 0);_([$({type:Boolean})],g.prototype,"disableHotkeys",void 0);_([$({type:Boolean})],g.prototype,"hideBreadcrumbs",void 0);_([$()],g.prototype,"openHotkey",void 0);_([$()],g.prototype,"navigationUpHotkey",void 0);_([$()],g.prototype,"navigationDownHotkey",void 0);_([$()],g.prototype,"closeHotkey",void 0);_([$()],g.prototype,"goBackHotkey",void 0);_([$()],g.prototype,"selectHotkey",void 0);_([$({type:Boolean})],g.prototype,"hotKeysJoinedView",void 0);_([$({type:Boolean})],g.prototype,"noAutoLoadMdIcons",void 0);_([$({type:Array,hasChanged(){return!0}})],g.prototype,"data",void 0);_([C()],g.prototype,"visible",void 0);_([C()],g.prototype,"_bump",void 0);_([C()],g.prototype,"_actionMatches",void 0);_([C()],g.prototype,"_search",void 0);_([C()],g.prototype,"_currentRoot",void 0);_([C()],g.prototype,"_flatData",void 0);_([C()],g.prototype,"breadcrumbs",null);_([C()],g.prototype,"_selected",void 0);g=_([ue("ninja-keys")],g);const Pe=document.querySelector("ninja-keys"),Nn=document.getElementById("footer-button");Nn?.addEventListener("click",()=>{var n=new KeyboardEvent("keydown",{key:"K",code:"KeyK",keyCode:75,which:75,ctrlKey:!0,altKey:!1,shiftKey:!1,metaKey:!1});document.dispatchEvent(n)});if(Pe!=null){const n=Pe.getAttribute("data-info")??"[]",t=JSON.parse(n).map(i=>({...i,handler:()=>{window.open(i.url,"_blank")}}));Pe.data=[{id:"print",title:"🖨️ Imprimir",hotkey:"ctrl+p",section:"Actions",handler:()=>{window.print()}},...t]}const Fe=document.querySelector('.theme-switch input[type="checkbox"]');Fe.checked=!1;const Re=localStorage.getItem("theme");Re&&(document.documentElement.setAttribute("data-theme",Re),Re==="dark"&&(Fe.checked=!0));function Dn(n){n.target.checked?(document.documentElement.setAttribute("data-theme","dark"),localStorage.setItem("theme","dark")):(document.documentElement.setAttribute("data-theme","light"),localStorage.setItem("theme","light"))}Fe.addEventListener("change",Dn,!1);const U="data-astro-transition-persist";function Un(n){for(const e of document.scripts)for(const t of n.scripts)if(!t.hasAttribute("data-astro-rerun")&&(!e.src&&e.textContent===t.textContent||e.src&&e.type===t.type&&e.src===t.src)){t.dataset.astroExec="";break}}function Bn(n){const e=document.documentElement,t=[...e.attributes].filter(({name:i})=>(e.removeAttribute(i),i.startsWith("data-astro-")));[...n.documentElement.attributes,...t].forEach(({name:i,value:o})=>e.setAttribute(i,o))}function Kn(n){for(const e of Array.from(document.head.children)){const t=Fn(e,n);t?t.remove():e.remove()}document.head.append(...n.head.children)}function zn(n,e){e.replaceWith(n);for(const t of e.querySelectorAll(`[${U}]`)){const i=t.getAttribute(U),o=n.querySelector(`[${U}="${i}"]`);o&&(o.replaceWith(t),o.localName==="astro-island"&&qn(t)&&!Yn(t,o)&&(t.setAttribute("ssr",""),t.setAttribute("props",o.getAttribute("props"))))}}const Vn=()=>{const n=document.activeElement;if(n?.closest(`[${U}]`)){if(n instanceof HTMLInputElement||n instanceof HTMLTextAreaElement){const e=n.selectionStart,t=n.selectionEnd;return()=>Oe({activeElement:n,start:e,end:t})}return()=>Oe({activeElement:n})}else return()=>Oe({activeElement:null})},Oe=({activeElement:n,start:e,end:t})=>{n&&(n.focus(),(n instanceof HTMLInputElement||n instanceof HTMLTextAreaElement)&&(typeof e=="number"&&(n.selectionStart=e),typeof t=="number"&&(n.selectionEnd=t)))},Fn=(n,e)=>{const t=n.getAttribute(U),i=t&&e.head.querySelector(`[${U}="${t}"]`);if(i)return i;if(n.matches("link[rel=stylesheet]")){const o=n.getAttribute("href");return e.head.querySelector(`link[rel=stylesheet][href="${o}"]`)}return null},qn=n=>{const e=n.dataset.astroTransitionPersistProps;return e==null||e==="false"},Yn=(n,e)=>n.getAttribute("props")===e.getAttribute("props"),Wn=n=>{Un(n),Bn(n),Kn(n);const e=Vn();zn(n.body,document.body),e()},Xn="astro:before-preparation",Gn="astro:after-preparation",Jn="astro:before-swap",Qn="astro:after-swap",Zn=n=>document.dispatchEvent(new Event(n));class Dt extends Event{from;to;direction;navigationType;sourceElement;info;newDocument;signal;constructor(e,t,i,o,s,r,a,l,c,h){super(e,t),this.from=i,this.to=o,this.direction=s,this.navigationType=r,this.sourceElement=a,this.info=l,this.newDocument=c,this.signal=h,Object.defineProperties(this,{from:{enumerable:!0},to:{enumerable:!0,writable:!0},direction:{enumerable:!0,writable:!0},navigationType:{enumerable:!0},sourceElement:{enumerable:!0},info:{enumerable:!0},newDocument:{enumerable:!0,writable:!0},signal:{enumerable:!0}})}}class ei extends Dt{formData;loader;constructor(e,t,i,o,s,r,a,l,c,h){super(Xn,{cancelable:!0},e,t,i,o,s,r,a,l),this.formData=c,this.loader=h.bind(this,this),Object.defineProperties(this,{formData:{enumerable:!0},loader:{enumerable:!0,writable:!0}})}}class ti extends Dt{direction;viewTransition;swap;constructor(e,t){super(Jn,void 0,e.from,e.to,e.direction,e.navigationType,e.sourceElement,e.info,e.newDocument,e.signal),this.direction=e.direction,this.viewTransition=t,this.swap=()=>Wn(this.newDocument),Object.defineProperties(this,{direction:{enumerable:!0},viewTransition:{enumerable:!0},swap:{enumerable:!0,writable:!0}})}}async function ni(n,e,t,i,o,s,r,a,l){const c=new ei(n,e,t,i,o,s,window.document,r,a,l);return document.dispatchEvent(c)&&(await c.loader(),c.defaultPrevented||(Zn(Gn),c.navigationType!=="traverse"&&qe({scrollX,scrollY}))),c}function ii(n,e){const t=new ti(n,e);return document.dispatchEvent(t),t.swap(),t}const oi=history.pushState.bind(history),le=history.replaceState.bind(history),qe=n=>{history.state&&(history.scrollRestoration="manual",le({...history.state,...n},""))},Ye=!!document.startViewTransition,We=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),Ut=(n,e)=>n.pathname===e.pathname&&n.search===e.search;let j,O,me;const Bt=n=>document.dispatchEvent(new Event(n)),Kt=()=>Bt("astro:page-load"),si=()=>{let n=document.createElement("div");n.setAttribute("aria-live","assertive"),n.setAttribute("aria-atomic","true"),n.className="astro-route-announcer",document.body.append(n),setTimeout(()=>{let e=document.title||document.querySelector("h1")?.textContent||location.pathname;n.textContent=e},60)},pt="data-astro-transition-persist",mt="data-astro-transition",Be="data-astro-transition-fallback";let vt,Q=0;history.state?(Q=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):We()&&(le({index:Q,scrollX,scrollY},""),history.scrollRestoration="manual");async function ri(n,e){try{const t=await fetch(n,e),o=(t.headers.get("content-type")??"").split(";",1)[0].trim();return o!=="text/html"&&o!=="application/xhtml+xml"?null:{html:await t.text(),redirected:t.redirected?t.url:void 0,mediaType:o}}catch{return null}}function zt(){const n=document.querySelector('[name="astro-view-transitions-fallback"]');return n?n.getAttribute("content"):"animate"}function ai(){let n=Promise.resolve();for(const e of document.getElementsByTagName("script")){if(e.dataset.astroExec==="")continue;const t=e.getAttribute("type");if(t&&t!=="module"&&t!=="text/javascript")continue;const i=document.createElement("script");i.innerHTML=e.innerHTML;for(const o of e.attributes){if(o.name==="src"){const s=new Promise(r=>{i.onload=i.onerror=r});n=n.then(()=>s)}i.setAttribute(o.name,o.value)}i.dataset.astroExec="",e.replaceWith(i)}return n}const Vt=(n,e,t,i,o)=>{const s=Ut(e,n),r=document.title;document.title=i;let a=!1;if(n.href!==location.href&&!o)if(t.history==="replace"){const l=history.state;le({...t.state,index:l.index,scrollX:l.scrollX,scrollY:l.scrollY},"",n.href)}else oi({...t.state,index:++Q,scrollX:0,scrollY:0},"",n.href);if(document.title=r,me=n,s||(scrollTo({left:0,top:0,behavior:"instant"}),a=!0),o)scrollTo(o.scrollX,o.scrollY);else{if(n.hash){history.scrollRestoration="auto";const l=history.state;location.href=n.href,history.state||(le(l,""),s&&window.dispatchEvent(new PopStateEvent("popstate")))}else a||scrollTo({left:0,top:0,behavior:"instant"});history.scrollRestoration="manual"}};function li(n){const e=[];for(const t of n.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${pt}="${t.getAttribute(pt)}"], link[rel=stylesheet][href="${t.getAttribute("href")}"]`)){const i=document.createElement("link");i.setAttribute("rel","preload"),i.setAttribute("as","style"),i.setAttribute("href",t.getAttribute("href")),e.push(new Promise(o=>{["load","error"].forEach(s=>i.addEventListener(s,o)),document.head.append(i)}))}return e}async function yt(n,e,t,i,o){async function s(l){function c(f){const p=f.effect;return!p||!(p instanceof KeyframeEffect)||!p.target?!1:window.getComputedStyle(p.target,p.pseudoElement).animationIterationCount==="infinite"}const h=document.getAnimations();document.documentElement.setAttribute(Be,l);const u=document.getAnimations().filter(f=>!h.includes(f)&&!c(f));return Promise.allSettled(u.map(f=>f.finished))}if(o==="animate"&&!t.transitionSkipped&&!n.signal.aborted)try{await s("old")}catch{}const r=document.title,a=ii(n,t.viewTransition);Vt(a.to,a.from,e,r,i),Bt(Qn),o==="animate"&&(!t.transitionSkipped&&!a.signal.aborted?s("new").finally(()=>t.viewTransitionFinished()):t.viewTransitionFinished())}function ci(){return j?.controller.abort(),j={controller:new AbortController}}async function Ft(n,e,t,i,o){const s=ci();if(!We()||location.origin!==t.origin){s===j&&(j=void 0),location.href=t.href;return}const r=o?"traverse":i.history==="replace"?"replace":"push";if(r!=="traverse"&&qe({scrollX,scrollY}),Ut(e,t)&&(n!=="back"&&t.hash||n==="back"&&e.hash)){Vt(t,e,i,document.title,o),s===j&&(j=void 0);return}const a=await ni(e,t,n,r,i.sourceElement,i.info,s.controller.signal,i.formData,l);if(a.defaultPrevented||a.signal.aborted){s===j&&(j=void 0),a.signal.aborted||(location.href=t.href);return}async function l(d){const u=d.to.href,f={signal:d.signal};if(d.formData){f.method="POST";const k=d.sourceElement instanceof HTMLFormElement?d.sourceElement:d.sourceElement instanceof HTMLElement&&"form"in d.sourceElement?d.sourceElement.form:d.sourceElement?.closest("form");f.body=k?.attributes.getNamedItem("enctype")?.value==="application/x-www-form-urlencoded"?new URLSearchParams(d.formData):d.formData}const p=await ri(u,f);if(p===null){d.preventDefault();return}if(p.redirected){const k=new URL(p.redirected);if(k.origin!==d.to.origin){d.preventDefault();return}d.to=k}if(vt??=new DOMParser,d.newDocument=vt.parseFromString(p.html,p.mediaType),d.newDocument.querySelectorAll("noscript").forEach(k=>k.remove()),!d.newDocument.querySelector('[name="astro-view-transitions-enabled"]')&&!d.formData){d.preventDefault();return}const m=li(d.newDocument);m.length&&!d.signal.aborted&&await Promise.all(m)}async function c(){if(O&&O.viewTransition){try{O.viewTransition.skipTransition()}catch{}try{await O.viewTransition.updateCallbackDone}catch{}}return O={transitionSkipped:!1}}const h=await c();if(a.signal.aborted){s===j&&(j=void 0);return}if(document.documentElement.setAttribute(mt,a.direction),Ye)h.viewTransition=document.startViewTransition(async()=>await yt(a,i,h,o));else{const d=(async()=>{await Promise.resolve(),await yt(a,i,h,o,zt())})();h.viewTransition={updateCallbackDone:d,ready:d,finished:new Promise(u=>h.viewTransitionFinished=u),skipTransition:()=>{h.transitionSkipped=!0,document.documentElement.removeAttribute(Be)}}}h.viewTransition?.updateCallbackDone.finally(async()=>{await ai(),Kt(),si()}),h.viewTransition?.finished.finally(()=>{h.viewTransition=void 0,h===O&&(O=void 0),s===j&&(j=void 0),document.documentElement.removeAttribute(mt),document.documentElement.removeAttribute(Be)});try{await h.viewTransition?.updateCallbackDone}catch(d){const u=d;console.log("[astro]",u.name,u.message,u.stack)}}async function gt(n,e){await Ft("forward",me,new URL(n,location.href),e??{})}function di(n){if(!We()&&n.state){location.reload();return}if(n.state===null)return;const e=history.state,t=e.index,i=t>Q?"forward":"back";Q=t,Ft(i,me,new URL(location.href),{},e)}const bt=()=>{history.state&&(scrollX!==history.state.scrollX||scrollY!==history.state.scrollY)&&qe({scrollX,scrollY})};{if(Ye||zt()!=="none")if(me=new URL(location.href),addEventListener("popstate",di),addEventListener("load",Kt),"onscrollend"in window)addEventListener("scrollend",bt);else{let n,e,t,i;const o=()=>{if(i!==history.state?.index){clearInterval(n),n=void 0;return}if(e===scrollY&&t===scrollX){clearInterval(n),n=void 0,bt();return}else e=scrollY,t=scrollX};addEventListener("scroll",()=>{n===void 0&&(i=history.state?.index,e=scrollY,t=scrollX,n=window.setInterval(o,50))},{passive:!0})}for(const n of document.getElementsByTagName("script"))n.dataset.astroExec=""}const qt=new Set,ce=new WeakSet;let Ke,Yt,_t=!1;function hi(n){_t||(_t=!0,Ke??=n?.prefetchAll,Yt??=n?.defaultStrategy??"hover",ui(),fi(),pi(),vi())}function ui(){for(const n of["touchstart","mousedown"])document.body.addEventListener(n,e=>{Z(e.target,"tap")&&ve(e.target.href,{ignoreSlowConnection:!0})},{passive:!0})}function fi(){let n;document.body.addEventListener("focusin",i=>{Z(i.target,"hover")&&e(i)},{passive:!0}),document.body.addEventListener("focusout",t,{passive:!0}),Xe(()=>{for(const i of document.getElementsByTagName("a"))ce.has(i)||Z(i,"hover")&&(ce.add(i),i.addEventListener("mouseenter",e,{passive:!0}),i.addEventListener("mouseleave",t,{passive:!0}))});function e(i){const o=i.target.href;n&&clearTimeout(n),n=setTimeout(()=>{ve(o)},80)}function t(){n&&(clearTimeout(n),n=0)}}function pi(){let n;Xe(()=>{for(const e of document.getElementsByTagName("a"))ce.has(e)||Z(e,"viewport")&&(ce.add(e),n??=mi(),n.observe(e))})}function mi(){const n=new WeakMap;return new IntersectionObserver((e,t)=>{for(const i of e){const o=i.target,s=n.get(o);i.isIntersecting?(s&&clearTimeout(s),n.set(o,setTimeout(()=>{t.unobserve(o),n.delete(o),ve(o.href)},300))):s&&(clearTimeout(s),n.delete(o))}})}function vi(){Xe(()=>{for(const n of document.getElementsByTagName("a"))Z(n,"load")&&ve(n.href)})}function ve(n,e){n=n.replace(/#.*/,"");const t=e?.ignoreSlowConnection??!1;if(yi(n,t))if(qt.add(n),document.createElement("link").relList?.supports?.("prefetch")&&e?.with!=="fetch"){const i=document.createElement("link");i.rel="prefetch",i.setAttribute("href",n),document.head.append(i)}else fetch(n,{priority:"low"})}function yi(n,e){if(!navigator.onLine||!e&&Wt())return!1;try{const t=new URL(n,location.href);return location.origin===t.origin&&(location.pathname!==t.pathname||location.search!==t.search)&&!qt.has(n)}catch{}return!1}function Z(n,e){if(n?.tagName!=="A")return!1;const t=n.dataset.astroPrefetch;return t==="false"?!1:e==="tap"&&(t!=null||Ke)&&Wt()?!0:t==null&&Ke||t===""?e===Yt:t===e}function Wt(){if("connection"in navigator){const n=navigator.connection;return n.saveData||/2g/.test(n.effectiveType)}return!1}function Xe(n){n();let e=!1;document.addEventListener("astro:page-load",()=>{if(!e){e=!0;return}n()})}function gi(){const n=document.querySelector('[name="astro-view-transitions-fallback"]');return n?n.getAttribute("content"):"animate"}function $t(n){return n.dataset.astroReload!==void 0}(Ye||gi()!=="none")&&(document.addEventListener("click",n=>{let e=n.target;if(n.composed&&(e=n.composedPath()[0]),e instanceof Element&&(e=e.closest("a, area")),!(e instanceof HTMLAnchorElement)&&!(e instanceof SVGAElement)&&!(e instanceof HTMLAreaElement))return;const t=e instanceof HTMLElement?e.target:e.target.baseVal,i=e instanceof HTMLElement?e.href:e.href.baseVal,o=new URL(i,location.href).origin;$t(e)||e.hasAttribute("download")||!e.href||t&&t!=="_self"||o!==location.origin||n.button!==0||n.metaKey||n.ctrlKey||n.altKey||n.shiftKey||n.defaultPrevented||(n.preventDefault(),gt(i,{history:e.dataset.astroHistory==="replace"?"replace":"auto",sourceElement:e}))}),document.addEventListener("submit",n=>{let e=n.target;if(e.tagName!=="FORM"||n.defaultPrevented||$t(e))return;const t=e,i=n.submitter,o=new FormData(t,i),s=typeof t.action=="string"?t.action:t.getAttribute("action"),r=typeof t.method=="string"?t.method:t.getAttribute("method");let a=i?.getAttribute("formaction")??s??location.pathname;const l=i?.getAttribute("formmethod")??r??"get";if(l==="dialog"||location.origin!==new URL(a,location.href).origin)return;const c={sourceElement:i??t};if(l==="get"){const h=new URLSearchParams(o),d=new URL(a);d.search=h.toString(),a=d.toString()}else c.formData=o;n.preventDefault(),gt(a,c)}),hi({prefetchAll:!0}));
