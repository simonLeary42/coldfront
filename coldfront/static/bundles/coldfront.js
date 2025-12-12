import{g as getAugmentedNamespace,r as requireJquery,$,D as DataTable}from"./c3.js";import{d as drawGauges,g as getCookie}from"./util.js";var bootstrap$1={exports:{}};var isBrowser=typeof window<"u"&&typeof document<"u"&&typeof navigator<"u",timeoutDuration=(function(){for(var n=["Edge","Trident","Firefox"],t=0;t<n.length;t+=1)if(isBrowser&&navigator.userAgent.indexOf(n[t])>=0)return 1;return 0})();function microtaskDebounce(n){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,n()}))}}function taskDebounce(n){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,n()},timeoutDuration))}}var supportsMicroTasks=isBrowser&&window.Promise,debounce$1=supportsMicroTasks?microtaskDebounce:taskDebounce;function isFunction(n){var t={};return n&&t.toString.call(n)==="[object Function]"}function getStyleComputedProperty(n,t){if(n.nodeType!==1)return[];var e=n.ownerDocument.defaultView,i=e.getComputedStyle(n,null);return t?i[t]:i}function getParentNode(n){return n.nodeName==="HTML"?n:n.parentNode||n.host}function getScrollParent(n){if(!n)return document.body;switch(n.nodeName){case"HTML":case"BODY":return n.ownerDocument.body;case"#document":return n.body}var t=getStyleComputedProperty(n),e=t.overflow,i=t.overflowX,o=t.overflowY;return/(auto|scroll|overlay)/.test(e+o+i)?n:getScrollParent(getParentNode(n))}function getReferenceNode(n){return n&&n.referenceNode?n.referenceNode:n}var isIE11=isBrowser&&!!(window.MSInputMethodContext&&document.documentMode),isIE10=isBrowser&&/MSIE 10/.test(navigator.userAgent);function isIE(n){return n===11?isIE11:n===10?isIE10:isIE11||isIE10}function getOffsetParent(n){if(!n)return document.documentElement;for(var t=isIE(10)?document.body:null,e=n.offsetParent||null;e===t&&n.nextElementSibling;)e=(n=n.nextElementSibling).offsetParent;var i=e&&e.nodeName;return!i||i==="BODY"||i==="HTML"?n?n.ownerDocument.documentElement:document.documentElement:["TH","TD","TABLE"].indexOf(e.nodeName)!==-1&&getStyleComputedProperty(e,"position")==="static"?getOffsetParent(e):e}function isOffsetContainer(n){var t=n.nodeName;return t==="BODY"?!1:t==="HTML"||getOffsetParent(n.firstElementChild)===n}function getRoot(n){return n.parentNode!==null?getRoot(n.parentNode):n}function findCommonOffsetParent(n,t){if(!n||!n.nodeType||!t||!t.nodeType)return document.documentElement;var e=n.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,i=e?n:t,o=e?t:n,l=document.createRange();l.setStart(i,0),l.setEnd(o,0);var r=l.commonAncestorContainer;if(n!==r&&t!==r||i.contains(o))return isOffsetContainer(r)?r:getOffsetParent(r);var p=getRoot(n);return p.host?findCommonOffsetParent(p.host,t):findCommonOffsetParent(n,getRoot(t).host)}function getScroll(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"top",e=t==="top"?"scrollTop":"scrollLeft",i=n.nodeName;if(i==="BODY"||i==="HTML"){var o=n.ownerDocument.documentElement,l=n.ownerDocument.scrollingElement||o;return l[e]}return n[e]}function includeScroll(n,t){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,i=getScroll(t,"top"),o=getScroll(t,"left"),l=e?-1:1;return n.top+=i*l,n.bottom+=i*l,n.left+=o*l,n.right+=o*l,n}function getBordersSize(n,t){var e=t==="x"?"Left":"Top",i=e==="Left"?"Right":"Bottom";return parseFloat(n["border"+e+"Width"])+parseFloat(n["border"+i+"Width"])}function getSize(n,t,e,i){return Math.max(t["offset"+n],t["scroll"+n],e["client"+n],e["offset"+n],e["scroll"+n],isIE(10)?parseInt(e["offset"+n])+parseInt(i["margin"+(n==="Height"?"Top":"Left")])+parseInt(i["margin"+(n==="Height"?"Bottom":"Right")]):0)}function getWindowSizes(n){var t=n.body,e=n.documentElement,i=isIE(10)&&getComputedStyle(e);return{height:getSize("Height",t,e,i),width:getSize("Width",t,e,i)}}var classCallCheck=function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")},createClass=(function(){function n(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}})(),defineProperty=function(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n},_extends=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n};function getClientRect(n){return _extends({},n,{right:n.left+n.width,bottom:n.top+n.height})}function getBoundingClientRect(n){var t={};try{if(isIE(10)){t=n.getBoundingClientRect();var e=getScroll(n,"top"),i=getScroll(n,"left");t.top+=e,t.left+=i,t.bottom+=e,t.right+=i}else t=n.getBoundingClientRect()}catch{}var o={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},l=n.nodeName==="HTML"?getWindowSizes(n.ownerDocument):{},r=l.width||n.clientWidth||o.width,p=l.height||n.clientHeight||o.height,m=n.offsetWidth-r,v=n.offsetHeight-p;if(m||v){var _=getStyleComputedProperty(n);m-=getBordersSize(_,"x"),v-=getBordersSize(_,"y"),o.width-=m,o.height-=v}return getClientRect(o)}function getOffsetRectRelativeToArbitraryNode(n,t){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,i=isIE(10),o=t.nodeName==="HTML",l=getBoundingClientRect(n),r=getBoundingClientRect(t),p=getScrollParent(n),m=getStyleComputedProperty(t),v=parseFloat(m.borderTopWidth),_=parseFloat(m.borderLeftWidth);e&&o&&(r.top=Math.max(r.top,0),r.left=Math.max(r.left,0));var b=getClientRect({top:l.top-r.top-v,left:l.left-r.left-_,width:l.width,height:l.height});if(b.marginTop=0,b.marginLeft=0,!i&&o){var D=parseFloat(m.marginTop),I=parseFloat(m.marginLeft);b.top-=v-D,b.bottom-=v-D,b.left-=_-I,b.right-=_-I,b.marginTop=D,b.marginLeft=I}return(i&&!e?t.contains(p):t===p&&p.nodeName!=="BODY")&&(b=includeScroll(b,t)),b}function getViewportOffsetRectRelativeToArtbitraryNode(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,e=n.ownerDocument.documentElement,i=getOffsetRectRelativeToArbitraryNode(n,e),o=Math.max(e.clientWidth,window.innerWidth||0),l=Math.max(e.clientHeight,window.innerHeight||0),r=t?0:getScroll(e),p=t?0:getScroll(e,"left"),m={top:r-i.top+i.marginTop,left:p-i.left+i.marginLeft,width:o,height:l};return getClientRect(m)}function isFixed(n){var t=n.nodeName;if(t==="BODY"||t==="HTML")return!1;if(getStyleComputedProperty(n,"position")==="fixed")return!0;var e=getParentNode(n);return e?isFixed(e):!1}function getFixedPositionOffsetParent(n){if(!n||!n.parentElement||isIE())return document.documentElement;for(var t=n.parentElement;t&&getStyleComputedProperty(t,"transform")==="none";)t=t.parentElement;return t||document.documentElement}function getBoundaries(n,t,e,i){var o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!1,l={top:0,left:0},r=o?getFixedPositionOffsetParent(n):findCommonOffsetParent(n,getReferenceNode(t));if(i==="viewport")l=getViewportOffsetRectRelativeToArtbitraryNode(r,o);else{var p=void 0;i==="scrollParent"?(p=getScrollParent(getParentNode(t)),p.nodeName==="BODY"&&(p=n.ownerDocument.documentElement)):i==="window"?p=n.ownerDocument.documentElement:p=i;var m=getOffsetRectRelativeToArbitraryNode(p,r,o);if(p.nodeName==="HTML"&&!isFixed(r)){var v=getWindowSizes(n.ownerDocument),_=v.height,b=v.width;l.top+=m.top-m.marginTop,l.bottom=_+m.top,l.left+=m.left-m.marginLeft,l.right=b+m.left}else l=m}e=e||0;var D=typeof e=="number";return l.left+=D?e:e.left||0,l.top+=D?e:e.top||0,l.right-=D?e:e.right||0,l.bottom-=D?e:e.bottom||0,l}function getArea(n){var t=n.width,e=n.height;return t*e}function computeAutoPlacement(n,t,e,i,o){var l=arguments.length>5&&arguments[5]!==void 0?arguments[5]:0;if(n.indexOf("auto")===-1)return n;var r=getBoundaries(e,i,l,o),p={top:{width:r.width,height:t.top-r.top},right:{width:r.right-t.right,height:r.height},bottom:{width:r.width,height:r.bottom-t.bottom},left:{width:t.left-r.left,height:r.height}},m=Object.keys(p).map(function(D){return _extends({key:D},p[D],{area:getArea(p[D])})}).sort(function(D,I){return I.area-D.area}),v=m.filter(function(D){var I=D.width,T=D.height;return I>=e.clientWidth&&T>=e.clientHeight}),_=v.length>0?v[0].key:m[0].key,b=n.split("-")[1];return _+(b?"-"+b:"")}function getReferenceOffsets(n,t,e){var i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null,o=i?getFixedPositionOffsetParent(t):findCommonOffsetParent(t,getReferenceNode(e));return getOffsetRectRelativeToArbitraryNode(e,o,i)}function getOuterSizes(n){var t=n.ownerDocument.defaultView,e=t.getComputedStyle(n),i=parseFloat(e.marginTop||0)+parseFloat(e.marginBottom||0),o=parseFloat(e.marginLeft||0)+parseFloat(e.marginRight||0),l={width:n.offsetWidth+o,height:n.offsetHeight+i};return l}function getOppositePlacement(n){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return n.replace(/left|right|bottom|top/g,function(e){return t[e]})}function getPopperOffsets(n,t,e){e=e.split("-")[0];var i=getOuterSizes(n),o={width:i.width,height:i.height},l=["right","left"].indexOf(e)!==-1,r=l?"top":"left",p=l?"left":"top",m=l?"height":"width",v=l?"width":"height";return o[r]=t[r]+t[m]/2-i[m]/2,e===p?o[p]=t[p]-i[v]:o[p]=t[getOppositePlacement(p)],o}function find(n,t){return Array.prototype.find?n.find(t):n.filter(t)[0]}function findIndex(n,t,e){if(Array.prototype.findIndex)return n.findIndex(function(o){return o[t]===e});var i=find(n,function(o){return o[t]===e});return n.indexOf(i)}function runModifiers(n,t,e){var i=e===void 0?n:n.slice(0,findIndex(n,"name",e));return i.forEach(function(o){o.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var l=o.function||o.fn;o.enabled&&isFunction(l)&&(t.offsets.popper=getClientRect(t.offsets.popper),t.offsets.reference=getClientRect(t.offsets.reference),t=l(t,o))}),t}function update(){if(!this.state.isDestroyed){var n={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};n.offsets.reference=getReferenceOffsets(this.state,this.popper,this.reference,this.options.positionFixed),n.placement=computeAutoPlacement(this.options.placement,n.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),n.originalPlacement=n.placement,n.positionFixed=this.options.positionFixed,n.offsets.popper=getPopperOffsets(this.popper,n.offsets.reference,n.placement),n.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",n=runModifiers(this.modifiers,n),this.state.isCreated?this.options.onUpdate(n):(this.state.isCreated=!0,this.options.onCreate(n))}}function isModifierEnabled(n,t){return n.some(function(e){var i=e.name,o=e.enabled;return o&&i===t})}function getSupportedPropertyName(n){for(var t=[!1,"ms","Webkit","Moz","O"],e=n.charAt(0).toUpperCase()+n.slice(1),i=0;i<t.length;i++){var o=t[i],l=o?""+o+e:n;if(typeof document.body.style[l]<"u")return l}return null}function destroy(){return this.state.isDestroyed=!0,isModifierEnabled(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[getSupportedPropertyName("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function getWindow(n){var t=n.ownerDocument;return t?t.defaultView:window}function attachToScrollParents(n,t,e,i){var o=n.nodeName==="BODY",l=o?n.ownerDocument.defaultView:n;l.addEventListener(t,e,{passive:!0}),o||attachToScrollParents(getScrollParent(l.parentNode),t,e,i),i.push(l)}function setupEventListeners(n,t,e,i){e.updateBound=i,getWindow(n).addEventListener("resize",e.updateBound,{passive:!0});var o=getScrollParent(n);return attachToScrollParents(o,"scroll",e.updateBound,e.scrollParents),e.scrollElement=o,e.eventsEnabled=!0,e}function enableEventListeners(){this.state.eventsEnabled||(this.state=setupEventListeners(this.reference,this.options,this.state,this.scheduleUpdate))}function removeEventListeners(n,t){return getWindow(n).removeEventListener("resize",t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener("scroll",t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function disableEventListeners(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=removeEventListeners(this.reference,this.state))}function isNumeric(n){return n!==""&&!isNaN(parseFloat(n))&&isFinite(n)}function setStyles(n,t){Object.keys(t).forEach(function(e){var i="";["width","height","top","right","bottom","left"].indexOf(e)!==-1&&isNumeric(t[e])&&(i="px"),n.style[e]=t[e]+i})}function setAttributes(n,t){Object.keys(t).forEach(function(e){var i=t[e];i!==!1?n.setAttribute(e,t[e]):n.removeAttribute(e)})}function applyStyle(n){return setStyles(n.instance.popper,n.styles),setAttributes(n.instance.popper,n.attributes),n.arrowElement&&Object.keys(n.arrowStyles).length&&setStyles(n.arrowElement,n.arrowStyles),n}function applyStyleOnLoad(n,t,e,i,o){var l=getReferenceOffsets(o,t,n,e.positionFixed),r=computeAutoPlacement(e.placement,l,t,n,e.modifiers.flip.boundariesElement,e.modifiers.flip.padding);return t.setAttribute("x-placement",r),setStyles(t,{position:e.positionFixed?"fixed":"absolute"}),e}function getRoundedOffsets(n,t){var e=n.offsets,i=e.popper,o=e.reference,l=Math.round,r=Math.floor,p=function(Y){return Y},m=l(o.width),v=l(i.width),_=["left","right"].indexOf(n.placement)!==-1,b=n.placement.indexOf("-")!==-1,D=m%2===v%2,I=m%2===1&&v%2===1,T=t?_||b||D?l:r:p,O=t?l:p;return{left:T(I&&!b&&t?i.left-1:i.left),top:O(i.top),bottom:O(i.bottom),right:T(i.right)}}var isFirefox=isBrowser&&/Firefox/i.test(navigator.userAgent);function computeStyle(n,t){var e=t.x,i=t.y,o=n.offsets.popper,l=find(n.instance.modifiers,function(j){return j.name==="applyStyle"}).gpuAcceleration;l!==void 0&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var r=l!==void 0?l:t.gpuAcceleration,p=getOffsetParent(n.instance.popper),m=getBoundingClientRect(p),v={position:o.position},_=getRoundedOffsets(n,window.devicePixelRatio<2||!isFirefox),b=e==="bottom"?"top":"bottom",D=i==="right"?"left":"right",I=getSupportedPropertyName("transform"),T=void 0,O=void 0;if(b==="bottom"?p.nodeName==="HTML"?O=-p.clientHeight+_.bottom:O=-m.height+_.bottom:O=_.top,D==="right"?p.nodeName==="HTML"?T=-p.clientWidth+_.right:T=-m.width+_.right:T=_.left,r&&I)v[I]="translate3d("+T+"px, "+O+"px, 0)",v[b]=0,v[D]=0,v.willChange="transform";else{var P=b==="bottom"?-1:1,Y=D==="right"?-1:1;v[b]=O*P,v[D]=T*Y,v.willChange=b+", "+D}var B={"x-placement":n.placement};return n.attributes=_extends({},B,n.attributes),n.styles=_extends({},v,n.styles),n.arrowStyles=_extends({},n.offsets.arrow,n.arrowStyles),n}function isModifierRequired(n,t,e){var i=find(n,function(p){var m=p.name;return m===t}),o=!!i&&n.some(function(p){return p.name===e&&p.enabled&&p.order<i.order});if(!o){var l="`"+t+"`",r="`"+e+"`";console.warn(r+" modifier is required by "+l+" modifier in order to work, be sure to include it before "+l+"!")}return o}function arrow(n,t){var e;if(!isModifierRequired(n.instance.modifiers,"arrow","keepTogether"))return n;var i=t.element;if(typeof i=="string"){if(i=n.instance.popper.querySelector(i),!i)return n}else if(!n.instance.popper.contains(i))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),n;var o=n.placement.split("-")[0],l=n.offsets,r=l.popper,p=l.reference,m=["left","right"].indexOf(o)!==-1,v=m?"height":"width",_=m?"Top":"Left",b=_.toLowerCase(),D=m?"left":"top",I=m?"bottom":"right",T=getOuterSizes(i)[v];p[I]-T<r[b]&&(n.offsets.popper[b]-=r[b]-(p[I]-T)),p[b]+T>r[I]&&(n.offsets.popper[b]+=p[b]+T-r[I]),n.offsets.popper=getClientRect(n.offsets.popper);var O=p[b]+p[v]/2-T/2,P=getStyleComputedProperty(n.instance.popper),Y=parseFloat(P["margin"+_]),B=parseFloat(P["border"+_+"Width"]),j=O-n.offsets.popper[b]-Y-B;return j=Math.max(Math.min(r[v]-T,j),0),n.arrowElement=i,n.offsets.arrow=(e={},defineProperty(e,b,Math.round(j)),defineProperty(e,D,""),e),n}function getOppositeVariation(n){return n==="end"?"start":n==="start"?"end":n}var placements=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],validPlacements=placements.slice(3);function clockwise(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,e=validPlacements.indexOf(n),i=validPlacements.slice(e+1).concat(validPlacements.slice(0,e));return t?i.reverse():i}var BEHAVIORS={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"};function flip(n,t){if(isModifierEnabled(n.instance.modifiers,"inner")||n.flipped&&n.placement===n.originalPlacement)return n;var e=getBoundaries(n.instance.popper,n.instance.reference,t.padding,t.boundariesElement,n.positionFixed),i=n.placement.split("-")[0],o=getOppositePlacement(i),l=n.placement.split("-")[1]||"",r=[];switch(t.behavior){case BEHAVIORS.FLIP:r=[i,o];break;case BEHAVIORS.CLOCKWISE:r=clockwise(i);break;case BEHAVIORS.COUNTERCLOCKWISE:r=clockwise(i,!0);break;default:r=t.behavior}return r.forEach(function(p,m){if(i!==p||r.length===m+1)return n;i=n.placement.split("-")[0],o=getOppositePlacement(i);var v=n.offsets.popper,_=n.offsets.reference,b=Math.floor,D=i==="left"&&b(v.right)>b(_.left)||i==="right"&&b(v.left)<b(_.right)||i==="top"&&b(v.bottom)>b(_.top)||i==="bottom"&&b(v.top)<b(_.bottom),I=b(v.left)<b(e.left),T=b(v.right)>b(e.right),O=b(v.top)<b(e.top),P=b(v.bottom)>b(e.bottom),Y=i==="left"&&I||i==="right"&&T||i==="top"&&O||i==="bottom"&&P,B=["top","bottom"].indexOf(i)!==-1,j=!!t.flipVariations&&(B&&l==="start"&&I||B&&l==="end"&&T||!B&&l==="start"&&O||!B&&l==="end"&&P),S=!!t.flipVariationsByContent&&(B&&l==="start"&&T||B&&l==="end"&&I||!B&&l==="start"&&P||!B&&l==="end"&&O),ie=j||S;(D||Y||ie)&&(n.flipped=!0,(D||Y)&&(i=r[m+1]),ie&&(l=getOppositeVariation(l)),n.placement=i+(l?"-"+l:""),n.offsets.popper=_extends({},n.offsets.popper,getPopperOffsets(n.instance.popper,n.offsets.reference,n.placement)),n=runModifiers(n.instance.modifiers,n,"flip"))}),n}function keepTogether(n){var t=n.offsets,e=t.popper,i=t.reference,o=n.placement.split("-")[0],l=Math.floor,r=["top","bottom"].indexOf(o)!==-1,p=r?"right":"bottom",m=r?"left":"top",v=r?"width":"height";return e[p]<l(i[m])&&(n.offsets.popper[m]=l(i[m])-e[v]),e[m]>l(i[p])&&(n.offsets.popper[m]=l(i[p])),n}function toValue(n,t,e,i){var o=n.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),l=+o[1],r=o[2];if(!l)return n;if(r.indexOf("%")===0){var p=void 0;switch(r){case"%p":p=e;break;case"%":case"%r":default:p=i}var m=getClientRect(p);return m[t]/100*l}else if(r==="vh"||r==="vw"){var v=void 0;return r==="vh"?v=Math.max(document.documentElement.clientHeight,window.innerHeight||0):v=Math.max(document.documentElement.clientWidth,window.innerWidth||0),v/100*l}else return l}function parseOffset(n,t,e,i){var o=[0,0],l=["right","left"].indexOf(i)!==-1,r=n.split(/(\+|\-)/).map(function(_){return _.trim()}),p=r.indexOf(find(r,function(_){return _.search(/,|\s/)!==-1}));r[p]&&r[p].indexOf(",")===-1&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var m=/\s*,\s*|\s+/,v=p!==-1?[r.slice(0,p).concat([r[p].split(m)[0]]),[r[p].split(m)[1]].concat(r.slice(p+1))]:[r];return v=v.map(function(_,b){var D=(b===1?!l:l)?"height":"width",I=!1;return _.reduce(function(T,O){return T[T.length-1]===""&&["+","-"].indexOf(O)!==-1?(T[T.length-1]=O,I=!0,T):I?(T[T.length-1]+=O,I=!1,T):T.concat(O)},[]).map(function(T){return toValue(T,D,t,e)})}),v.forEach(function(_,b){_.forEach(function(D,I){isNumeric(D)&&(o[b]+=D*(_[I-1]==="-"?-1:1))})}),o}function offset(n,t){var e=t.offset,i=n.placement,o=n.offsets,l=o.popper,r=o.reference,p=i.split("-")[0],m=void 0;return isNumeric(+e)?m=[+e,0]:m=parseOffset(e,l,r,p),p==="left"?(l.top+=m[0],l.left-=m[1]):p==="right"?(l.top+=m[0],l.left+=m[1]):p==="top"?(l.left+=m[0],l.top-=m[1]):p==="bottom"&&(l.left+=m[0],l.top+=m[1]),n.popper=l,n}function preventOverflow(n,t){var e=t.boundariesElement||getOffsetParent(n.instance.popper);n.instance.reference===e&&(e=getOffsetParent(e));var i=getSupportedPropertyName("transform"),o=n.instance.popper.style,l=o.top,r=o.left,p=o[i];o.top="",o.left="",o[i]="";var m=getBoundaries(n.instance.popper,n.instance.reference,t.padding,e,n.positionFixed);o.top=l,o.left=r,o[i]=p,t.boundaries=m;var v=t.priority,_=n.offsets.popper,b={primary:function(I){var T=_[I];return _[I]<m[I]&&!t.escapeWithReference&&(T=Math.max(_[I],m[I])),defineProperty({},I,T)},secondary:function(I){var T=I==="right"?"left":"top",O=_[T];return _[I]>m[I]&&!t.escapeWithReference&&(O=Math.min(_[T],m[I]-(I==="right"?_.width:_.height))),defineProperty({},T,O)}};return v.forEach(function(D){var I=["left","top"].indexOf(D)!==-1?"primary":"secondary";_=_extends({},_,b[I](D))}),n.offsets.popper=_,n}function shift(n){var t=n.placement,e=t.split("-")[0],i=t.split("-")[1];if(i){var o=n.offsets,l=o.reference,r=o.popper,p=["bottom","top"].indexOf(e)!==-1,m=p?"left":"top",v=p?"width":"height",_={start:defineProperty({},m,l[m]),end:defineProperty({},m,l[m]+l[v]-r[v])};n.offsets.popper=_extends({},r,_[i])}return n}function hide(n){if(!isModifierRequired(n.instance.modifiers,"hide","preventOverflow"))return n;var t=n.offsets.reference,e=find(n.instance.modifiers,function(i){return i.name==="preventOverflow"}).boundaries;if(t.bottom<e.top||t.left>e.right||t.top>e.bottom||t.right<e.left){if(n.hide===!0)return n;n.hide=!0,n.attributes["x-out-of-boundaries"]=""}else{if(n.hide===!1)return n;n.hide=!1,n.attributes["x-out-of-boundaries"]=!1}return n}function inner(n){var t=n.placement,e=t.split("-")[0],i=n.offsets,o=i.popper,l=i.reference,r=["left","right"].indexOf(e)!==-1,p=["top","left"].indexOf(e)===-1;return o[r?"left":"top"]=l[e]-(p?o[r?"width":"height"]:0),n.placement=getOppositePlacement(t),n.offsets.popper=getClientRect(o),n}var modifiers={shift:{order:100,enabled:!0,fn:shift},offset:{order:200,enabled:!0,fn:offset,offset:0},preventOverflow:{order:300,enabled:!0,fn:preventOverflow,priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:keepTogether},arrow:{order:500,enabled:!0,fn:arrow,element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:flip,behavior:"flip",padding:5,boundariesElement:"viewport",flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:inner},hide:{order:800,enabled:!0,fn:hide},computeStyle:{order:850,enabled:!0,fn:computeStyle,gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:applyStyle,onLoad:applyStyleOnLoad,gpuAcceleration:void 0}},Defaults={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers},Popper=(function(){function n(t,e){var i=this,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};classCallCheck(this,n),this.scheduleUpdate=function(){return requestAnimationFrame(i.update)},this.update=debounce$1(this.update.bind(this)),this.options=_extends({},n.Defaults,o),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=t&&t.jquery?t[0]:t,this.popper=e&&e.jquery?e[0]:e,this.options.modifiers={},Object.keys(_extends({},n.Defaults.modifiers,o.modifiers)).forEach(function(r){i.options.modifiers[r]=_extends({},n.Defaults.modifiers[r]||{},o.modifiers?o.modifiers[r]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(r){return _extends({name:r},i.options.modifiers[r])}).sort(function(r,p){return r.order-p.order}),this.modifiers.forEach(function(r){r.enabled&&isFunction(r.onLoad)&&r.onLoad(i.reference,i.popper,i.options,r,i.state)}),this.update();var l=this.options.eventsEnabled;l&&this.enableEventListeners(),this.state.eventsEnabled=l}return createClass(n,[{key:"update",value:function(){return update.call(this)}},{key:"destroy",value:function(){return destroy.call(this)}},{key:"enableEventListeners",value:function(){return enableEventListeners.call(this)}},{key:"disableEventListeners",value:function(){return disableEventListeners.call(this)}}]),n})();Popper.Utils=(typeof window<"u"?window:global).PopperUtils;Popper.placements=placements;Popper.Defaults=Defaults;const popper=Object.freeze(Object.defineProperty({__proto__:null,default:Popper},Symbol.toStringTag,{value:"Module"})),require$$1=getAugmentedNamespace(popper);var bootstrap=bootstrap$1.exports,hasRequiredBootstrap;function requireBootstrap(){return hasRequiredBootstrap||(hasRequiredBootstrap=1,(function(n,t){(function(e,i){i(t,requireJquery(),require$$1)})(bootstrap,(function(e,i,o){function l(E){return E&&typeof E=="object"&&"default"in E?E:{default:E}}var r=l(i),p=l(o);function m(E,h){for(var f=0;f<h.length;f++){var a=h[f];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(E,a.key,a)}}function v(E,h,f){return f&&m(E,f),Object.defineProperty(E,"prototype",{writable:!1}),E}function _(){return _=Object.assign?Object.assign.bind():function(E){for(var h=1;h<arguments.length;h++){var f=arguments[h];for(var a in f)Object.prototype.hasOwnProperty.call(f,a)&&(E[a]=f[a])}return E},_.apply(this,arguments)}function b(E,h){E.prototype=Object.create(h.prototype),E.prototype.constructor=E,D(E,h)}function D(E,h){return D=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(a,s){return a.__proto__=s,a},D(E,h)}var I="transitionend",T=1e6,O=1e3;function P(E){return E===null||typeof E>"u"?""+E:{}.toString.call(E).match(/\s([a-z]+)/i)[1].toLowerCase()}function Y(){return{bindType:I,delegateType:I,handle:function(h){if(r.default(h.target).is(this))return h.handleObj.handler.apply(this,arguments)}}}function B(E){var h=this,f=!1;return r.default(this).one(S.TRANSITION_END,function(){f=!0}),setTimeout(function(){f||S.triggerTransitionEnd(h)},E),this}function j(){r.default.fn.emulateTransitionEnd=B,r.default.event.special[S.TRANSITION_END]=Y()}var S={TRANSITION_END:"bsTransitionEnd",getUID:function(h){do h+=~~(Math.random()*T);while(document.getElementById(h));return h},getSelectorFromElement:function(h){var f=h.getAttribute("data-target");if(!f||f==="#"){var a=h.getAttribute("href");f=a&&a!=="#"?a.trim():""}try{return document.querySelector(f)?f:null}catch{return null}},getTransitionDurationFromElement:function(h){if(!h)return 0;var f=r.default(h).css("transition-duration"),a=r.default(h).css("transition-delay"),s=parseFloat(f),d=parseFloat(a);return!s&&!d?0:(f=f.split(",")[0],a=a.split(",")[0],(parseFloat(f)+parseFloat(a))*O)},reflow:function(h){return h.offsetHeight},triggerTransitionEnd:function(h){r.default(h).trigger(I)},supportsTransitionEnd:function(){return!!I},isElement:function(h){return(h[0]||h).nodeType},typeCheckConfig:function(h,f,a){for(var s in a)if(Object.prototype.hasOwnProperty.call(a,s)){var d=a[s],y=f[s],w=y&&S.isElement(y)?"element":P(y);if(!new RegExp(d).test(w))throw new Error(h.toUpperCase()+": "+('Option "'+s+'" provided type "'+w+'" ')+('but expected type "'+d+'".'))}},findShadowRoot:function(h){if(!document.documentElement.attachShadow)return null;if(typeof h.getRootNode=="function"){var f=h.getRootNode();return f instanceof ShadowRoot?f:null}return h instanceof ShadowRoot?h:h.parentNode?S.findShadowRoot(h.parentNode):null},jQueryDetection:function(){if(typeof r.default>"u")throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var h=r.default.fn.jquery.split(" ")[0].split("."),f=1,a=2,s=9,d=1,y=4;if(h[0]<a&&h[1]<s||h[0]===f&&h[1]===s&&h[2]<d||h[0]>=y)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}};S.jQueryDetection(),j();var ie="alert",oe="4.6.2",Q="bs.alert",se="."+Q,Ee=".data-api",ye=r.default.fn[ie],an="alert",_e="fade",re="show",Le="close"+se,ke="closed"+se,Ae="click"+se+Ee,ee='[data-dismiss="alert"]',ue=(function(){function E(f){this._element=f}var h=E.prototype;return h.close=function(a){var s=this._element;a&&(s=this._getRootElement(a));var d=this._triggerCloseEvent(s);d.isDefaultPrevented()||this._removeElement(s)},h.dispose=function(){r.default.removeData(this._element,Q),this._element=null},h._getRootElement=function(a){var s=S.getSelectorFromElement(a),d=!1;return s&&(d=document.querySelector(s)),d||(d=r.default(a).closest("."+an)[0]),d},h._triggerCloseEvent=function(a){var s=r.default.Event(Le);return r.default(a).trigger(s),s},h._removeElement=function(a){var s=this;if(r.default(a).removeClass(re),!r.default(a).hasClass(_e)){this._destroyElement(a);return}var d=S.getTransitionDurationFromElement(a);r.default(a).one(S.TRANSITION_END,function(y){return s._destroyElement(a,y)}).emulateTransitionEnd(d)},h._destroyElement=function(a){r.default(a).detach().trigger(ke).remove()},E._jQueryInterface=function(a){return this.each(function(){var s=r.default(this),d=s.data(Q);d||(d=new E(this),s.data(Q,d)),a==="close"&&d[a](this)})},E._handleDismiss=function(a){return function(s){s&&s.preventDefault(),a.close(this)}},v(E,null,[{key:"VERSION",get:function(){return oe}}]),E})();r.default(document).on(Ae,ee,ue._handleDismiss(new ue)),r.default.fn[ie]=ue._jQueryInterface,r.default.fn[ie].Constructor=ue,r.default.fn[ie].noConflict=function(){return r.default.fn[ie]=ye,ue._jQueryInterface};var be="button",Re="4.6.2",J="bs.button",G="."+J,de=".data-api",Te=r.default.fn[be],ne="active",U="btn",z="focus",X="click"+G+de,We="focus"+G+de+" "+("blur"+G+de),Kn="load"+G+de,on='[data-toggle^="button"]',Ye='[data-toggle="buttons"]',Gn='[data-toggle="button"]',Qn='[data-toggle="buttons"] .btn',ze='input:not([type="hidden"])',Xn=".active",sn=".btn",xe=(function(){function E(f){this._element=f,this.shouldAvoidTriggerChange=!1}var h=E.prototype;return h.toggle=function(){var a=!0,s=!0,d=r.default(this._element).closest(Ye)[0];if(d){var y=this._element.querySelector(ze);if(y){if(y.type==="radio")if(y.checked&&this._element.classList.contains(ne))a=!1;else{var w=d.querySelector(Xn);w&&r.default(w).removeClass(ne)}a&&((y.type==="checkbox"||y.type==="radio")&&(y.checked=!this._element.classList.contains(ne)),this.shouldAvoidTriggerChange||r.default(y).trigger("change")),y.focus(),s=!1}}this._element.hasAttribute("disabled")||this._element.classList.contains("disabled")||(s&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(ne)),a&&r.default(this._element).toggleClass(ne))},h.dispose=function(){r.default.removeData(this._element,J),this._element=null},E._jQueryInterface=function(a,s){return this.each(function(){var d=r.default(this),y=d.data(J);y||(y=new E(this),d.data(J,y)),y.shouldAvoidTriggerChange=s,a==="toggle"&&y[a]()})},v(E,null,[{key:"VERSION",get:function(){return Re}}]),E})();r.default(document).on(X,on,function(E){var h=E.target,f=h;if(r.default(h).hasClass(U)||(h=r.default(h).closest(sn)[0]),!h||h.hasAttribute("disabled")||h.classList.contains("disabled"))E.preventDefault();else{var a=h.querySelector(ze);if(a&&(a.hasAttribute("disabled")||a.classList.contains("disabled"))){E.preventDefault();return}(f.tagName==="INPUT"||h.tagName!=="LABEL")&&xe._jQueryInterface.call(r.default(h),"toggle",f.tagName==="INPUT")}}).on(We,on,function(E){var h=r.default(E.target).closest(sn)[0];r.default(h).toggleClass(z,/^focus(in)?$/.test(E.type))}),r.default(window).on(Kn,function(){for(var E=[].slice.call(document.querySelectorAll(Qn)),h=0,f=E.length;h<f;h++){var a=E[h],s=a.querySelector(ze);s.checked||s.hasAttribute("checked")?a.classList.add(ne):a.classList.remove(ne)}E=[].slice.call(document.querySelectorAll(Gn));for(var d=0,y=E.length;d<y;d++){var w=E[d];w.getAttribute("aria-pressed")==="true"?w.classList.add(ne):w.classList.remove(ne)}}),r.default.fn[be]=xe._jQueryInterface,r.default.fn[be].Constructor=xe,r.default.fn[be].noConflict=function(){return r.default.fn[be]=Te,xe._jQueryInterface};var fe="carousel",Jn="4.6.2",Pe="bs.carousel",te="."+Pe,Ke=".data-api",$n=r.default.fn[fe],Ge=37,Zn=39,On=500,et=40,In="carousel",we="active",nt="slide",Nn="carousel-item-right",tt="carousel-item-left",rt="carousel-item-next",K="carousel-item-prev",ln="pointer-event",$e="next",Qe="prev",Xe="left",un="right",he="slide"+te,Mn="slid"+te,it="keydown"+te,u="mouseenter"+te,c="mouseleave"+te,g="touchstart"+te,C="touchmove"+te,x="touchend"+te,N="pointerdown"+te,F="pointerup"+te,L="dragstart"+te,H="load"+te+Ke,M="click"+te+Ke,k=".active",q=".active.carousel-item",ce=".carousel-item",ae=".carousel-item img",Fe=".carousel-item-next, .carousel-item-prev",Oe=".carousel-indicators",at="[data-slide], [data-slide-to]",cn='[data-ride="carousel"]',dn={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},ot={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},Ln={TOUCH:"touch",PEN:"pen"},Ie=(function(){function E(f,a){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(a),this._element=f,this._indicatorsElement=this._element.querySelector(Oe),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=!!(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var h=E.prototype;return h.next=function(){this._isSliding||this._slide($e)},h.nextWhenVisible=function(){var a=r.default(this._element);!document.hidden&&a.is(":visible")&&a.css("visibility")!=="hidden"&&this.next()},h.prev=function(){this._isSliding||this._slide(Qe)},h.pause=function(a){a||(this._isPaused=!0),this._element.querySelector(Fe)&&(S.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},h.cycle=function(a){a||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._updateInterval(),this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},h.to=function(a){var s=this;this._activeElement=this._element.querySelector(q);var d=this._getItemIndex(this._activeElement);if(!(a>this._items.length-1||a<0)){if(this._isSliding){r.default(this._element).one(Mn,function(){return s.to(a)});return}if(d===a){this.pause(),this.cycle();return}var y=a>d?$e:Qe;this._slide(y,this._items[a])}},h.dispose=function(){r.default(this._element).off(te),r.default.removeData(this._element,Pe),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},h._getConfig=function(a){return a=_({},dn,a),S.typeCheckConfig(fe,a,ot),a},h._handleSwipe=function(){var a=Math.abs(this.touchDeltaX);if(!(a<=et)){var s=a/this.touchDeltaX;this.touchDeltaX=0,s>0&&this.prev(),s<0&&this.next()}},h._addEventListeners=function(){var a=this;this._config.keyboard&&r.default(this._element).on(it,function(s){return a._keydown(s)}),this._config.pause==="hover"&&r.default(this._element).on(u,function(s){return a.pause(s)}).on(c,function(s){return a.cycle(s)}),this._config.touch&&this._addTouchEventListeners()},h._addTouchEventListeners=function(){var a=this;if(this._touchSupported){var s=function(A){a._pointerEvent&&Ln[A.originalEvent.pointerType.toUpperCase()]?a.touchStartX=A.originalEvent.clientX:a._pointerEvent||(a.touchStartX=A.originalEvent.touches[0].clientX)},d=function(A){a.touchDeltaX=A.originalEvent.touches&&A.originalEvent.touches.length>1?0:A.originalEvent.touches[0].clientX-a.touchStartX},y=function(A){a._pointerEvent&&Ln[A.originalEvent.pointerType.toUpperCase()]&&(a.touchDeltaX=A.originalEvent.clientX-a.touchStartX),a._handleSwipe(),a._config.pause==="hover"&&(a.pause(),a.touchTimeout&&clearTimeout(a.touchTimeout),a.touchTimeout=setTimeout(function(R){return a.cycle(R)},On+a._config.interval))};r.default(this._element.querySelectorAll(ae)).on(L,function(w){return w.preventDefault()}),this._pointerEvent?(r.default(this._element).on(N,function(w){return s(w)}),r.default(this._element).on(F,function(w){return y(w)}),this._element.classList.add(ln)):(r.default(this._element).on(g,function(w){return s(w)}),r.default(this._element).on(C,function(w){return d(w)}),r.default(this._element).on(x,function(w){return y(w)}))}},h._keydown=function(a){if(!/input|textarea/i.test(a.target.tagName))switch(a.which){case Ge:a.preventDefault(),this.prev();break;case Zn:a.preventDefault(),this.next();break}},h._getItemIndex=function(a){return this._items=a&&a.parentNode?[].slice.call(a.parentNode.querySelectorAll(ce)):[],this._items.indexOf(a)},h._getItemByDirection=function(a,s){var d=a===$e,y=a===Qe,w=this._getItemIndex(s),A=this._items.length-1,R=y&&w===0||d&&w===A;if(R&&!this._config.wrap)return s;var V=a===Qe?-1:1,W=(w+V)%this._items.length;return W===-1?this._items[this._items.length-1]:this._items[W]},h._triggerSlideEvent=function(a,s){var d=this._getItemIndex(a),y=this._getItemIndex(this._element.querySelector(q)),w=r.default.Event(he,{relatedTarget:a,direction:s,from:y,to:d});return r.default(this._element).trigger(w),w},h._setActiveIndicatorElement=function(a){if(this._indicatorsElement){var s=[].slice.call(this._indicatorsElement.querySelectorAll(k));r.default(s).removeClass(we);var d=this._indicatorsElement.children[this._getItemIndex(a)];d&&r.default(d).addClass(we)}},h._updateInterval=function(){var a=this._activeElement||this._element.querySelector(q);if(a){var s=parseInt(a.getAttribute("data-interval"),10);s?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=s):this._config.interval=this._config.defaultInterval||this._config.interval}},h._slide=function(a,s){var d=this,y=this._element.querySelector(q),w=this._getItemIndex(y),A=s||y&&this._getItemByDirection(a,y),R=this._getItemIndex(A),V=!!this._interval,W,Z,Ce;if(a===$e?(W=tt,Z=rt,Ce=Xe):(W=Nn,Z=K,Ce=un),A&&r.default(A).hasClass(we)){this._isSliding=!1;return}var ve=this._triggerSlideEvent(A,Ce);if(!ve.isDefaultPrevented()&&!(!y||!A)){this._isSliding=!0,V&&this.pause(),this._setActiveIndicatorElement(A),this._activeElement=A;var rn=r.default.Event(Mn,{relatedTarget:A,direction:Ce,from:w,to:R});if(r.default(this._element).hasClass(nt)){r.default(A).addClass(Z),S.reflow(A),r.default(y).addClass(W),r.default(A).addClass(W);var _t=S.getTransitionDurationFromElement(y);r.default(y).one(S.TRANSITION_END,function(){r.default(A).removeClass(W+" "+Z).addClass(we),r.default(y).removeClass(we+" "+Z+" "+W),d._isSliding=!1,setTimeout(function(){return r.default(d._element).trigger(rn)},0)}).emulateTransitionEnd(_t)}else r.default(y).removeClass(we),r.default(A).addClass(we),this._isSliding=!1,r.default(this._element).trigger(rn);V&&this.cycle()}},E._jQueryInterface=function(a){return this.each(function(){var s=r.default(this).data(Pe),d=_({},dn,r.default(this).data());typeof a=="object"&&(d=_({},d,a));var y=typeof a=="string"?a:d.slide;if(s||(s=new E(this,d),r.default(this).data(Pe,s)),typeof a=="number")s.to(a);else if(typeof y=="string"){if(typeof s[y]>"u")throw new TypeError('No method named "'+y+'"');s[y]()}else d.interval&&d.ride&&(s.pause(),s.cycle())})},E._dataApiClickHandler=function(a){var s=S.getSelectorFromElement(this);if(s){var d=r.default(s)[0];if(!(!d||!r.default(d).hasClass(In))){var y=_({},r.default(d).data(),r.default(this).data()),w=this.getAttribute("data-slide-to");w&&(y.interval=!1),E._jQueryInterface.call(r.default(d),y),w&&r.default(d).data(Pe).to(w),a.preventDefault()}}},v(E,null,[{key:"VERSION",get:function(){return Jn}},{key:"Default",get:function(){return dn}}]),E})();r.default(document).on(M,at,Ie._dataApiClickHandler),r.default(window).on(H,function(){for(var E=[].slice.call(document.querySelectorAll(cn)),h=0,f=E.length;h<f;h++){var a=r.default(E[h]);Ie._jQueryInterface.call(a,a.data())}}),r.default.fn[fe]=Ie._jQueryInterface,r.default.fn[fe].Constructor=Ie,r.default.fn[fe].noConflict=function(){return r.default.fn[fe]=$n,Ie._jQueryInterface};var Ne="collapse",st="4.6.2",Se="bs.collapse",He="."+Se,nr=".data-api",tr=r.default.fn[Ne],Be="show",fn="collapse",kn="collapsing",lt="collapsed",bt="width",rr="height",ir="show"+He,ar="shown"+He,or="hide"+He,sr="hidden"+He,lr="click"+He+nr,ur=".show, .collapsing",Ct='[data-toggle="collapse"]',ut={toggle:!0,parent:""},cr={toggle:"boolean",parent:"(string|element)"},hn=(function(){function E(f,a){this._isTransitioning=!1,this._element=f,this._config=this._getConfig(a),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+f.id+'"],'+('[data-toggle="collapse"][data-target="#'+f.id+'"]')));for(var s=[].slice.call(document.querySelectorAll(Ct)),d=0,y=s.length;d<y;d++){var w=s[d],A=S.getSelectorFromElement(w),R=[].slice.call(document.querySelectorAll(A)).filter(function(V){return V===f});A!==null&&R.length>0&&(this._selector=A,this._triggerArray.push(w))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var h=E.prototype;return h.toggle=function(){r.default(this._element).hasClass(Be)?this.hide():this.show()},h.show=function(){var a=this;if(!(this._isTransitioning||r.default(this._element).hasClass(Be))){var s,d;if(this._parent&&(s=[].slice.call(this._parent.querySelectorAll(ur)).filter(function(Z){return typeof a._config.parent=="string"?Z.getAttribute("data-parent")===a._config.parent:Z.classList.contains(fn)}),s.length===0&&(s=null)),!(s&&(d=r.default(s).not(this._selector).data(Se),d&&d._isTransitioning))){var y=r.default.Event(ir);if(r.default(this._element).trigger(y),!y.isDefaultPrevented()){s&&(E._jQueryInterface.call(r.default(s).not(this._selector),"hide"),d||r.default(s).data(Se,null));var w=this._getDimension();r.default(this._element).removeClass(fn).addClass(kn),this._element.style[w]=0,this._triggerArray.length&&r.default(this._triggerArray).removeClass(lt).attr("aria-expanded",!0),this.setTransitioning(!0);var A=function(){r.default(a._element).removeClass(kn).addClass(fn+" "+Be),a._element.style[w]="",a.setTransitioning(!1),r.default(a._element).trigger(ar)},R=w[0].toUpperCase()+w.slice(1),V="scroll"+R,W=S.getTransitionDurationFromElement(this._element);r.default(this._element).one(S.TRANSITION_END,A).emulateTransitionEnd(W),this._element.style[w]=this._element[V]+"px"}}}},h.hide=function(){var a=this;if(!(this._isTransitioning||!r.default(this._element).hasClass(Be))){var s=r.default.Event(or);if(r.default(this._element).trigger(s),!s.isDefaultPrevented()){var d=this._getDimension();this._element.style[d]=this._element.getBoundingClientRect()[d]+"px",S.reflow(this._element),r.default(this._element).addClass(kn).removeClass(fn+" "+Be);var y=this._triggerArray.length;if(y>0)for(var w=0;w<y;w++){var A=this._triggerArray[w],R=S.getSelectorFromElement(A);if(R!==null){var V=r.default([].slice.call(document.querySelectorAll(R)));V.hasClass(Be)||r.default(A).addClass(lt).attr("aria-expanded",!1)}}this.setTransitioning(!0);var W=function(){a.setTransitioning(!1),r.default(a._element).removeClass(kn).addClass(fn).trigger(sr)};this._element.style[d]="";var Z=S.getTransitionDurationFromElement(this._element);r.default(this._element).one(S.TRANSITION_END,W).emulateTransitionEnd(Z)}}},h.setTransitioning=function(a){this._isTransitioning=a},h.dispose=function(){r.default.removeData(this._element,Se),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},h._getConfig=function(a){return a=_({},ut,a),a.toggle=!!a.toggle,S.typeCheckConfig(Ne,a,cr),a},h._getDimension=function(){var a=r.default(this._element).hasClass(bt);return a?bt:rr},h._getParent=function(){var a=this,s;S.isElement(this._config.parent)?(s=this._config.parent,typeof this._config.parent.jquery<"u"&&(s=this._config.parent[0])):s=document.querySelector(this._config.parent);var d='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',y=[].slice.call(s.querySelectorAll(d));return r.default(y).each(function(w,A){a._addAriaAndCollapsedClass(E._getTargetFromElement(A),[A])}),s},h._addAriaAndCollapsedClass=function(a,s){var d=r.default(a).hasClass(Be);s.length&&r.default(s).toggleClass(lt,!d).attr("aria-expanded",d)},E._getTargetFromElement=function(a){var s=S.getSelectorFromElement(a);return s?document.querySelector(s):null},E._jQueryInterface=function(a){return this.each(function(){var s=r.default(this),d=s.data(Se),y=_({},ut,s.data(),typeof a=="object"&&a?a:{});if(!d&&y.toggle&&typeof a=="string"&&/show|hide/.test(a)&&(y.toggle=!1),d||(d=new E(this,y),s.data(Se,d)),typeof a=="string"){if(typeof d[a]>"u")throw new TypeError('No method named "'+a+'"');d[a]()}})},v(E,null,[{key:"VERSION",get:function(){return st}},{key:"Default",get:function(){return ut}}]),E})();r.default(document).on(lr,Ct,function(E){E.currentTarget.tagName==="A"&&E.preventDefault();var h=r.default(this),f=S.getSelectorFromElement(this),a=[].slice.call(document.querySelectorAll(f));r.default(a).each(function(){var s=r.default(this),d=s.data(Se),y=d?"toggle":h.data();hn._jQueryInterface.call(s,y)})}),r.default.fn[Ne]=hn._jQueryInterface,r.default.fn[Ne].Constructor=hn,r.default.fn[Ne].noConflict=function(){return r.default.fn[Ne]=tr,hn._jQueryInterface};var Je="dropdown",dr="4.6.2",pn="bs.dropdown",De="."+pn,ct=".data-api",fr=r.default.fn[Je],mn=27,wt=32,St=9,dt=38,ft=40,hr=3,pr=new RegExp(dt+"|"+ft+"|"+mn),Rn="disabled",pe="show",mr="dropup",gr="dropright",vr="dropleft",Dt="dropdown-menu-right",Er="position-static",At="hide"+De,Tt="hidden"+De,yr="show"+De,_r="shown"+De,br="click"+De,ht="click"+De+ct,xt="keydown"+De+ct,Cr="keyup"+De+ct,Pn='[data-toggle="dropdown"]',wr=".dropdown form",pt=".dropdown-menu",Sr=".navbar-nav",Dr=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Ar="top-start",Tr="top-end",xr="bottom-start",$r="bottom-end",Or="right-start",Ir="left-start",Nr={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic",popperConfig:null},Mr={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string",popperConfig:"(null|object)"},Me=(function(){function E(f,a){this._element=f,this._popper=null,this._config=this._getConfig(a),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var h=E.prototype;return h.toggle=function(){if(!(this._element.disabled||r.default(this._element).hasClass(Rn))){var a=r.default(this._menu).hasClass(pe);E._clearMenus(),!a&&this.show(!0)}},h.show=function(a){if(a===void 0&&(a=!1),!(this._element.disabled||r.default(this._element).hasClass(Rn)||r.default(this._menu).hasClass(pe))){var s={relatedTarget:this._element},d=r.default.Event(yr,s),y=E._getParentFromElement(this._element);if(r.default(y).trigger(d),!d.isDefaultPrevented()){if(!this._inNavbar&&a){if(typeof p.default>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");var w=this._element;this._config.reference==="parent"?w=y:S.isElement(this._config.reference)&&(w=this._config.reference,typeof this._config.reference.jquery<"u"&&(w=this._config.reference[0])),this._config.boundary!=="scrollParent"&&r.default(y).addClass(Er),this._popper=new p.default(w,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&r.default(y).closest(Sr).length===0&&r.default(document.body).children().on("mouseover",null,r.default.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),r.default(this._menu).toggleClass(pe),r.default(y).toggleClass(pe).trigger(r.default.Event(_r,s))}}},h.hide=function(){if(!(this._element.disabled||r.default(this._element).hasClass(Rn)||!r.default(this._menu).hasClass(pe))){var a={relatedTarget:this._element},s=r.default.Event(At,a),d=E._getParentFromElement(this._element);r.default(d).trigger(s),!s.isDefaultPrevented()&&(this._popper&&this._popper.destroy(),r.default(this._menu).toggleClass(pe),r.default(d).toggleClass(pe).trigger(r.default.Event(Tt,a)))}},h.dispose=function(){r.default.removeData(this._element,pn),r.default(this._element).off(De),this._element=null,this._menu=null,this._popper!==null&&(this._popper.destroy(),this._popper=null)},h.update=function(){this._inNavbar=this._detectNavbar(),this._popper!==null&&this._popper.scheduleUpdate()},h._addEventListeners=function(){var a=this;r.default(this._element).on(br,function(s){s.preventDefault(),s.stopPropagation(),a.toggle()})},h._getConfig=function(a){return a=_({},this.constructor.Default,r.default(this._element).data(),a),S.typeCheckConfig(Je,a,this.constructor.DefaultType),a},h._getMenuElement=function(){if(!this._menu){var a=E._getParentFromElement(this._element);a&&(this._menu=a.querySelector(pt))}return this._menu},h._getPlacement=function(){var a=r.default(this._element.parentNode),s=xr;return a.hasClass(mr)?s=r.default(this._menu).hasClass(Dt)?Tr:Ar:a.hasClass(gr)?s=Or:a.hasClass(vr)?s=Ir:r.default(this._menu).hasClass(Dt)&&(s=$r),s},h._detectNavbar=function(){return r.default(this._element).closest(".navbar").length>0},h._getOffset=function(){var a=this,s={};return typeof this._config.offset=="function"?s.fn=function(d){return d.offsets=_({},d.offsets,a._config.offset(d.offsets,a._element)),d}:s.offset=this._config.offset,s},h._getPopperConfig=function(){var a={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return this._config.display==="static"&&(a.modifiers.applyStyle={enabled:!1}),_({},a,this._config.popperConfig)},E._jQueryInterface=function(a){return this.each(function(){var s=r.default(this).data(pn),d=typeof a=="object"?a:null;if(s||(s=new E(this,d),r.default(this).data(pn,s)),typeof a=="string"){if(typeof s[a]>"u")throw new TypeError('No method named "'+a+'"');s[a]()}})},E._clearMenus=function(a){if(!(a&&(a.which===hr||a.type==="keyup"&&a.which!==St)))for(var s=[].slice.call(document.querySelectorAll(Pn)),d=0,y=s.length;d<y;d++){var w=E._getParentFromElement(s[d]),A=r.default(s[d]).data(pn),R={relatedTarget:s[d]};if(a&&a.type==="click"&&(R.clickEvent=a),!!A){var V=A._menu;if(r.default(w).hasClass(pe)&&!(a&&(a.type==="click"&&/input|textarea/i.test(a.target.tagName)||a.type==="keyup"&&a.which===St)&&r.default.contains(w,a.target))){var W=r.default.Event(At,R);r.default(w).trigger(W),!W.isDefaultPrevented()&&("ontouchstart"in document.documentElement&&r.default(document.body).children().off("mouseover",null,r.default.noop),s[d].setAttribute("aria-expanded","false"),A._popper&&A._popper.destroy(),r.default(V).removeClass(pe),r.default(w).removeClass(pe).trigger(r.default.Event(Tt,R)))}}}},E._getParentFromElement=function(a){var s,d=S.getSelectorFromElement(a);return d&&(s=document.querySelector(d)),s||a.parentNode},E._dataApiKeydownHandler=function(a){if(!(/input|textarea/i.test(a.target.tagName)?a.which===wt||a.which!==mn&&(a.which!==ft&&a.which!==dt||r.default(a.target).closest(pt).length):!pr.test(a.which))&&!(this.disabled||r.default(this).hasClass(Rn))){var s=E._getParentFromElement(this),d=r.default(s).hasClass(pe);if(!(!d&&a.which===mn)){if(a.preventDefault(),a.stopPropagation(),!d||a.which===mn||a.which===wt){a.which===mn&&r.default(s.querySelector(Pn)).trigger("focus"),r.default(this).trigger("click");return}var y=[].slice.call(s.querySelectorAll(Dr)).filter(function(A){return r.default(A).is(":visible")});if(y.length!==0){var w=y.indexOf(a.target);a.which===dt&&w>0&&w--,a.which===ft&&w<y.length-1&&w++,w<0&&(w=0),y[w].focus()}}}},v(E,null,[{key:"VERSION",get:function(){return dr}},{key:"Default",get:function(){return Nr}},{key:"DefaultType",get:function(){return Mr}}]),E})();r.default(document).on(xt,Pn,Me._dataApiKeydownHandler).on(xt,pt,Me._dataApiKeydownHandler).on(ht+" "+Cr,Me._clearMenus).on(ht,Pn,function(E){E.preventDefault(),E.stopPropagation(),Me._jQueryInterface.call(r.default(this),"toggle")}).on(ht,wr,function(E){E.stopPropagation()}),r.default.fn[Je]=Me._jQueryInterface,r.default.fn[Je].Constructor=Me,r.default.fn[Je].noConflict=function(){return r.default.fn[Je]=fr,Me._jQueryInterface};var Ze="modal",Lr="4.6.2",gn="bs.modal",le="."+gn,kr=".data-api",Rr=r.default.fn[Ze],$t=27,Pr="modal-dialog-scrollable",Fr="modal-scrollbar-measure",Hr="modal-backdrop",Ot="modal-open",en="fade",Fn="show",It="modal-static",Br="hide"+le,jr="hidePrevented"+le,Nt="hidden"+le,Mt="show"+le,Ur="shown"+le,Hn="focusin"+le,Lt="resize"+le,mt="click.dismiss"+le,kt="keydown.dismiss"+le,qr="mouseup.dismiss"+le,Rt="mousedown.dismiss"+le,Vr="click"+le+kr,Wr=".modal-dialog",Yr=".modal-body",zr='[data-toggle="modal"]',Kr='[data-dismiss="modal"]',Pt=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Ft=".sticky-top",gt={backdrop:!0,keyboard:!0,focus:!0,show:!0},Gr={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},vn=(function(){function E(f,a){this._config=this._getConfig(a),this._element=f,this._dialog=f.querySelector(Wr),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var h=E.prototype;return h.toggle=function(a){return this._isShown?this.hide():this.show(a)},h.show=function(a){var s=this;if(!(this._isShown||this._isTransitioning)){var d=r.default.Event(Mt,{relatedTarget:a});r.default(this._element).trigger(d),!d.isDefaultPrevented()&&(this._isShown=!0,r.default(this._element).hasClass(en)&&(this._isTransitioning=!0),this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),r.default(this._element).on(mt,Kr,function(y){return s.hide(y)}),r.default(this._dialog).on(Rt,function(){r.default(s._element).one(qr,function(y){r.default(y.target).is(s._element)&&(s._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return s._showElement(a)}))}},h.hide=function(a){var s=this;if(a&&a.preventDefault(),!(!this._isShown||this._isTransitioning)){var d=r.default.Event(Br);if(r.default(this._element).trigger(d),!(!this._isShown||d.isDefaultPrevented())){this._isShown=!1;var y=r.default(this._element).hasClass(en);if(y&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),r.default(document).off(Hn),r.default(this._element).removeClass(Fn),r.default(this._element).off(mt),r.default(this._dialog).off(Rt),y){var w=S.getTransitionDurationFromElement(this._element);r.default(this._element).one(S.TRANSITION_END,function(A){return s._hideModal(A)}).emulateTransitionEnd(w)}else this._hideModal()}}},h.dispose=function(){[window,this._element,this._dialog].forEach(function(a){return r.default(a).off(le)}),r.default(document).off(Hn),r.default.removeData(this._element,gn),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},h.handleUpdate=function(){this._adjustDialog()},h._getConfig=function(a){return a=_({},gt,a),S.typeCheckConfig(Ze,a,Gr),a},h._triggerBackdropTransition=function(){var a=this,s=r.default.Event(jr);if(r.default(this._element).trigger(s),!s.isDefaultPrevented()){var d=this._element.scrollHeight>document.documentElement.clientHeight;d||(this._element.style.overflowY="hidden"),this._element.classList.add(It);var y=S.getTransitionDurationFromElement(this._dialog);r.default(this._element).off(S.TRANSITION_END),r.default(this._element).one(S.TRANSITION_END,function(){a._element.classList.remove(It),d||r.default(a._element).one(S.TRANSITION_END,function(){a._element.style.overflowY=""}).emulateTransitionEnd(a._element,y)}).emulateTransitionEnd(y),this._element.focus()}},h._showElement=function(a){var s=this,d=r.default(this._element).hasClass(en),y=this._dialog?this._dialog.querySelector(Yr):null;(!this._element.parentNode||this._element.parentNode.nodeType!==Node.ELEMENT_NODE)&&document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),r.default(this._dialog).hasClass(Pr)&&y?y.scrollTop=0:this._element.scrollTop=0,d&&S.reflow(this._element),r.default(this._element).addClass(Fn),this._config.focus&&this._enforceFocus();var w=r.default.Event(Ur,{relatedTarget:a}),A=function(){s._config.focus&&s._element.focus(),s._isTransitioning=!1,r.default(s._element).trigger(w)};if(d){var R=S.getTransitionDurationFromElement(this._dialog);r.default(this._dialog).one(S.TRANSITION_END,A).emulateTransitionEnd(R)}else A()},h._enforceFocus=function(){var a=this;r.default(document).off(Hn).on(Hn,function(s){document!==s.target&&a._element!==s.target&&r.default(a._element).has(s.target).length===0&&a._element.focus()})},h._setEscapeEvent=function(){var a=this;this._isShown?r.default(this._element).on(kt,function(s){a._config.keyboard&&s.which===$t?(s.preventDefault(),a.hide()):!a._config.keyboard&&s.which===$t&&a._triggerBackdropTransition()}):this._isShown||r.default(this._element).off(kt)},h._setResizeEvent=function(){var a=this;this._isShown?r.default(window).on(Lt,function(s){return a.handleUpdate(s)}):r.default(window).off(Lt)},h._hideModal=function(){var a=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._showBackdrop(function(){r.default(document.body).removeClass(Ot),a._resetAdjustments(),a._resetScrollbar(),r.default(a._element).trigger(Nt)})},h._removeBackdrop=function(){this._backdrop&&(r.default(this._backdrop).remove(),this._backdrop=null)},h._showBackdrop=function(a){var s=this,d=r.default(this._element).hasClass(en)?en:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=Hr,d&&this._backdrop.classList.add(d),r.default(this._backdrop).appendTo(document.body),r.default(this._element).on(mt,function(R){if(s._ignoreBackdropClick){s._ignoreBackdropClick=!1;return}R.target===R.currentTarget&&(s._config.backdrop==="static"?s._triggerBackdropTransition():s.hide())}),d&&S.reflow(this._backdrop),r.default(this._backdrop).addClass(Fn),!a)return;if(!d){a();return}var y=S.getTransitionDurationFromElement(this._backdrop);r.default(this._backdrop).one(S.TRANSITION_END,a).emulateTransitionEnd(y)}else if(!this._isShown&&this._backdrop){r.default(this._backdrop).removeClass(Fn);var w=function(){s._removeBackdrop(),a&&a()};if(r.default(this._element).hasClass(en)){var A=S.getTransitionDurationFromElement(this._backdrop);r.default(this._backdrop).one(S.TRANSITION_END,w).emulateTransitionEnd(A)}else w()}else a&&a()},h._adjustDialog=function(){var a=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&a&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!a&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},h._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},h._checkScrollbar=function(){var a=document.body.getBoundingClientRect();this._isBodyOverflowing=Math.round(a.left+a.right)<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},h._setScrollbar=function(){var a=this;if(this._isBodyOverflowing){var s=[].slice.call(document.querySelectorAll(Pt)),d=[].slice.call(document.querySelectorAll(Ft));r.default(s).each(function(A,R){var V=R.style.paddingRight,W=r.default(R).css("padding-right");r.default(R).data("padding-right",V).css("padding-right",parseFloat(W)+a._scrollbarWidth+"px")}),r.default(d).each(function(A,R){var V=R.style.marginRight,W=r.default(R).css("margin-right");r.default(R).data("margin-right",V).css("margin-right",parseFloat(W)-a._scrollbarWidth+"px")});var y=document.body.style.paddingRight,w=r.default(document.body).css("padding-right");r.default(document.body).data("padding-right",y).css("padding-right",parseFloat(w)+this._scrollbarWidth+"px")}r.default(document.body).addClass(Ot)},h._resetScrollbar=function(){var a=[].slice.call(document.querySelectorAll(Pt));r.default(a).each(function(y,w){var A=r.default(w).data("padding-right");r.default(w).removeData("padding-right"),w.style.paddingRight=A||""});var s=[].slice.call(document.querySelectorAll(""+Ft));r.default(s).each(function(y,w){var A=r.default(w).data("margin-right");typeof A<"u"&&r.default(w).css("margin-right",A).removeData("margin-right")});var d=r.default(document.body).data("padding-right");r.default(document.body).removeData("padding-right"),document.body.style.paddingRight=d||""},h._getScrollbarWidth=function(){var a=document.createElement("div");a.className=Fr,document.body.appendChild(a);var s=a.getBoundingClientRect().width-a.clientWidth;return document.body.removeChild(a),s},E._jQueryInterface=function(a,s){return this.each(function(){var d=r.default(this).data(gn),y=_({},gt,r.default(this).data(),typeof a=="object"&&a?a:{});if(d||(d=new E(this,y),r.default(this).data(gn,d)),typeof a=="string"){if(typeof d[a]>"u")throw new TypeError('No method named "'+a+'"');d[a](s)}else y.show&&d.show(s)})},v(E,null,[{key:"VERSION",get:function(){return Lr}},{key:"Default",get:function(){return gt}}]),E})();r.default(document).on(Vr,zr,function(E){var h=this,f,a=S.getSelectorFromElement(this);a&&(f=document.querySelector(a));var s=r.default(f).data(gn)?"toggle":_({},r.default(f).data(),r.default(this).data());(this.tagName==="A"||this.tagName==="AREA")&&E.preventDefault();var d=r.default(f).one(Mt,function(y){y.isDefaultPrevented()||d.one(Nt,function(){r.default(h).is(":visible")&&h.focus()})});vn._jQueryInterface.call(r.default(f),s,this)}),r.default.fn[Ze]=vn._jQueryInterface,r.default.fn[Ze].Constructor=vn,r.default.fn[Ze].noConflict=function(){return r.default.fn[Ze]=Rr,vn._jQueryInterface};var Qr=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],Xr=/^aria-[\w-]*$/i,Jr={"*":["class","dir","id","lang","role",Xr],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Zr=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,ei=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;function ni(E,h){var f=E.nodeName.toLowerCase();if(h.indexOf(f)!==-1)return Qr.indexOf(f)!==-1?!!(Zr.test(E.nodeValue)||ei.test(E.nodeValue)):!0;for(var a=h.filter(function(y){return y instanceof RegExp}),s=0,d=a.length;s<d;s++)if(a[s].test(f))return!0;return!1}function Ht(E,h,f){if(E.length===0)return E;if(f&&typeof f=="function")return f(E);for(var a=new window.DOMParser,s=a.parseFromString(E,"text/html"),d=Object.keys(h),y=[].slice.call(s.body.querySelectorAll("*")),w=function(Z,Ce){var ve=y[Z],rn=ve.nodeName.toLowerCase();if(d.indexOf(ve.nodeName.toLowerCase())===-1)return ve.parentNode.removeChild(ve),"continue";var _t=[].slice.call(ve.attributes),la=[].concat(h["*"]||[],h[rn]||[]);_t.forEach(function(er){ni(er,la)||ve.removeAttribute(er.nodeName)})},A=0,R=y.length;A<R;A++)var V=w(A);return s.body.innerHTML}var je="tooltip",ti="4.6.2",Bn="bs.tooltip",me="."+Bn,ri=r.default.fn[je],Bt="bs-tooltip",ii=new RegExp("(^|\\s)"+Bt+"\\S+","g"),ai=["sanitize","whiteList","sanitizeFn"],En="fade",yn="show",_n="show",vt="out",oi=".tooltip-inner",si=".arrow",bn="hover",Et="focus",li="click",ui="manual",ci={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},di={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",customClass:"",sanitize:!0,sanitizeFn:null,whiteList:Jr,popperConfig:null},fi={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object",popperConfig:"(null|object)"},hi={HIDE:"hide"+me,HIDDEN:"hidden"+me,SHOW:"show"+me,SHOWN:"shown"+me,INSERTED:"inserted"+me,CLICK:"click"+me,FOCUSIN:"focusin"+me,FOCUSOUT:"focusout"+me,MOUSEENTER:"mouseenter"+me,MOUSELEAVE:"mouseleave"+me},Ue=(function(){function E(f,a){if(typeof p.default>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=f,this.config=this._getConfig(a),this.tip=null,this._setListeners()}var h=E.prototype;return h.enable=function(){this._isEnabled=!0},h.disable=function(){this._isEnabled=!1},h.toggleEnabled=function(){this._isEnabled=!this._isEnabled},h.toggle=function(a){if(this._isEnabled)if(a){var s=this.constructor.DATA_KEY,d=r.default(a.currentTarget).data(s);d||(d=new this.constructor(a.currentTarget,this._getDelegateConfig()),r.default(a.currentTarget).data(s,d)),d._activeTrigger.click=!d._activeTrigger.click,d._isWithActiveTrigger()?d._enter(null,d):d._leave(null,d)}else{if(r.default(this.getTipElement()).hasClass(yn)){this._leave(null,this);return}this._enter(null,this)}},h.dispose=function(){clearTimeout(this._timeout),r.default.removeData(this.element,this.constructor.DATA_KEY),r.default(this.element).off(this.constructor.EVENT_KEY),r.default(this.element).closest(".modal").off("hide.bs.modal",this._hideModalHandler),this.tip&&r.default(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},h.show=function(){var a=this;if(r.default(this.element).css("display")==="none")throw new Error("Please use show on visible elements");var s=r.default.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){r.default(this.element).trigger(s);var d=S.findShadowRoot(this.element),y=r.default.contains(d!==null?d:this.element.ownerDocument.documentElement,this.element);if(s.isDefaultPrevented()||!y)return;var w=this.getTipElement(),A=S.getUID(this.constructor.NAME);w.setAttribute("id",A),this.element.setAttribute("aria-describedby",A),this.setContent(),this.config.animation&&r.default(w).addClass(En);var R=typeof this.config.placement=="function"?this.config.placement.call(this,w,this.element):this.config.placement,V=this._getAttachment(R);this.addAttachmentClass(V);var W=this._getContainer();r.default(w).data(this.constructor.DATA_KEY,this),r.default.contains(this.element.ownerDocument.documentElement,this.tip)||r.default(w).appendTo(W),r.default(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new p.default(this.element,w,this._getPopperConfig(V)),r.default(w).addClass(yn),r.default(w).addClass(this.config.customClass),"ontouchstart"in document.documentElement&&r.default(document.body).children().on("mouseover",null,r.default.noop);var Z=function(){a.config.animation&&a._fixTransition();var rn=a._hoverState;a._hoverState=null,r.default(a.element).trigger(a.constructor.Event.SHOWN),rn===vt&&a._leave(null,a)};if(r.default(this.tip).hasClass(En)){var Ce=S.getTransitionDurationFromElement(this.tip);r.default(this.tip).one(S.TRANSITION_END,Z).emulateTransitionEnd(Ce)}else Z()}},h.hide=function(a){var s=this,d=this.getTipElement(),y=r.default.Event(this.constructor.Event.HIDE),w=function(){s._hoverState!==_n&&d.parentNode&&d.parentNode.removeChild(d),s._cleanTipClass(),s.element.removeAttribute("aria-describedby"),r.default(s.element).trigger(s.constructor.Event.HIDDEN),s._popper!==null&&s._popper.destroy(),a&&a()};if(r.default(this.element).trigger(y),!y.isDefaultPrevented()){if(r.default(d).removeClass(yn),"ontouchstart"in document.documentElement&&r.default(document.body).children().off("mouseover",null,r.default.noop),this._activeTrigger[li]=!1,this._activeTrigger[Et]=!1,this._activeTrigger[bn]=!1,r.default(this.tip).hasClass(En)){var A=S.getTransitionDurationFromElement(d);r.default(d).one(S.TRANSITION_END,w).emulateTransitionEnd(A)}else w();this._hoverState=""}},h.update=function(){this._popper!==null&&this._popper.scheduleUpdate()},h.isWithContent=function(){return!!this.getTitle()},h.addAttachmentClass=function(a){r.default(this.getTipElement()).addClass(Bt+"-"+a)},h.getTipElement=function(){return this.tip=this.tip||r.default(this.config.template)[0],this.tip},h.setContent=function(){var a=this.getTipElement();this.setElementContent(r.default(a.querySelectorAll(oi)),this.getTitle()),r.default(a).removeClass(En+" "+yn)},h.setElementContent=function(a,s){if(typeof s=="object"&&(s.nodeType||s.jquery)){this.config.html?r.default(s).parent().is(a)||a.empty().append(s):a.text(r.default(s).text());return}this.config.html?(this.config.sanitize&&(s=Ht(s,this.config.whiteList,this.config.sanitizeFn)),a.html(s)):a.text(s)},h.getTitle=function(){var a=this.element.getAttribute("data-original-title");return a||(a=typeof this.config.title=="function"?this.config.title.call(this.element):this.config.title),a},h._getPopperConfig=function(a){var s=this,d={placement:a,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:si},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(w){w.originalPlacement!==w.placement&&s._handlePopperPlacementChange(w)},onUpdate:function(w){return s._handlePopperPlacementChange(w)}};return _({},d,this.config.popperConfig)},h._getOffset=function(){var a=this,s={};return typeof this.config.offset=="function"?s.fn=function(d){return d.offsets=_({},d.offsets,a.config.offset(d.offsets,a.element)),d}:s.offset=this.config.offset,s},h._getContainer=function(){return this.config.container===!1?document.body:S.isElement(this.config.container)?r.default(this.config.container):r.default(document).find(this.config.container)},h._getAttachment=function(a){return ci[a.toUpperCase()]},h._setListeners=function(){var a=this,s=this.config.trigger.split(" ");s.forEach(function(d){if(d==="click")r.default(a.element).on(a.constructor.Event.CLICK,a.config.selector,function(A){return a.toggle(A)});else if(d!==ui){var y=d===bn?a.constructor.Event.MOUSEENTER:a.constructor.Event.FOCUSIN,w=d===bn?a.constructor.Event.MOUSELEAVE:a.constructor.Event.FOCUSOUT;r.default(a.element).on(y,a.config.selector,function(A){return a._enter(A)}).on(w,a.config.selector,function(A){return a._leave(A)})}}),this._hideModalHandler=function(){a.element&&a.hide()},r.default(this.element).closest(".modal").on("hide.bs.modal",this._hideModalHandler),this.config.selector?this.config=_({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},h._fixTitle=function(){var a=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||a!=="string")&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},h._enter=function(a,s){var d=this.constructor.DATA_KEY;if(s=s||r.default(a.currentTarget).data(d),s||(s=new this.constructor(a.currentTarget,this._getDelegateConfig()),r.default(a.currentTarget).data(d,s)),a&&(s._activeTrigger[a.type==="focusin"?Et:bn]=!0),r.default(s.getTipElement()).hasClass(yn)||s._hoverState===_n){s._hoverState=_n;return}if(clearTimeout(s._timeout),s._hoverState=_n,!s.config.delay||!s.config.delay.show){s.show();return}s._timeout=setTimeout(function(){s._hoverState===_n&&s.show()},s.config.delay.show)},h._leave=function(a,s){var d=this.constructor.DATA_KEY;if(s=s||r.default(a.currentTarget).data(d),s||(s=new this.constructor(a.currentTarget,this._getDelegateConfig()),r.default(a.currentTarget).data(d,s)),a&&(s._activeTrigger[a.type==="focusout"?Et:bn]=!1),!s._isWithActiveTrigger()){if(clearTimeout(s._timeout),s._hoverState=vt,!s.config.delay||!s.config.delay.hide){s.hide();return}s._timeout=setTimeout(function(){s._hoverState===vt&&s.hide()},s.config.delay.hide)}},h._isWithActiveTrigger=function(){for(var a in this._activeTrigger)if(this._activeTrigger[a])return!0;return!1},h._getConfig=function(a){var s=r.default(this.element).data();return Object.keys(s).forEach(function(d){ai.indexOf(d)!==-1&&delete s[d]}),a=_({},this.constructor.Default,s,typeof a=="object"&&a?a:{}),typeof a.delay=="number"&&(a.delay={show:a.delay,hide:a.delay}),typeof a.title=="number"&&(a.title=a.title.toString()),typeof a.content=="number"&&(a.content=a.content.toString()),S.typeCheckConfig(je,a,this.constructor.DefaultType),a.sanitize&&(a.template=Ht(a.template,a.whiteList,a.sanitizeFn)),a},h._getDelegateConfig=function(){var a={};if(this.config)for(var s in this.config)this.constructor.Default[s]!==this.config[s]&&(a[s]=this.config[s]);return a},h._cleanTipClass=function(){var a=r.default(this.getTipElement()),s=a.attr("class").match(ii);s!==null&&s.length&&a.removeClass(s.join(""))},h._handlePopperPlacementChange=function(a){this.tip=a.instance.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(a.placement))},h._fixTransition=function(){var a=this.getTipElement(),s=this.config.animation;a.getAttribute("x-placement")===null&&(r.default(a).removeClass(En),this.config.animation=!1,this.hide(),this.show(),this.config.animation=s)},E._jQueryInterface=function(a){return this.each(function(){var s=r.default(this),d=s.data(Bn),y=typeof a=="object"&&a;if(!(!d&&/dispose|hide/.test(a))&&(d||(d=new E(this,y),s.data(Bn,d)),typeof a=="string")){if(typeof d[a]>"u")throw new TypeError('No method named "'+a+'"');d[a]()}})},v(E,null,[{key:"VERSION",get:function(){return ti}},{key:"Default",get:function(){return di}},{key:"NAME",get:function(){return je}},{key:"DATA_KEY",get:function(){return Bn}},{key:"Event",get:function(){return hi}},{key:"EVENT_KEY",get:function(){return me}},{key:"DefaultType",get:function(){return fi}}]),E})();r.default.fn[je]=Ue._jQueryInterface,r.default.fn[je].Constructor=Ue,r.default.fn[je].noConflict=function(){return r.default.fn[je]=ri,Ue._jQueryInterface};var nn="popover",pi="4.6.2",jn="bs.popover",ge="."+jn,mi=r.default.fn[nn],jt="bs-popover",gi=new RegExp("(^|\\s)"+jt+"\\S+","g"),vi="fade",Ei="show",yi=".popover-header",_i=".popover-body",bi=_({},Ue.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),Ci=_({},Ue.DefaultType,{content:"(string|element|function)"}),wi={HIDE:"hide"+ge,HIDDEN:"hidden"+ge,SHOW:"show"+ge,SHOWN:"shown"+ge,INSERTED:"inserted"+ge,CLICK:"click"+ge,FOCUSIN:"focusin"+ge,FOCUSOUT:"focusout"+ge,MOUSEENTER:"mouseenter"+ge,MOUSELEAVE:"mouseleave"+ge},Un=(function(E){b(h,E);function h(){return E.apply(this,arguments)||this}var f=h.prototype;return f.isWithContent=function(){return this.getTitle()||this._getContent()},f.addAttachmentClass=function(s){r.default(this.getTipElement()).addClass(jt+"-"+s)},f.getTipElement=function(){return this.tip=this.tip||r.default(this.config.template)[0],this.tip},f.setContent=function(){var s=r.default(this.getTipElement());this.setElementContent(s.find(yi),this.getTitle());var d=this._getContent();typeof d=="function"&&(d=d.call(this.element)),this.setElementContent(s.find(_i),d),s.removeClass(vi+" "+Ei)},f._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},f._cleanTipClass=function(){var s=r.default(this.getTipElement()),d=s.attr("class").match(gi);d!==null&&d.length>0&&s.removeClass(d.join(""))},h._jQueryInterface=function(s){return this.each(function(){var d=r.default(this).data(jn),y=typeof s=="object"?s:null;if(!(!d&&/dispose|hide/.test(s))&&(d||(d=new h(this,y),r.default(this).data(jn,d)),typeof s=="string")){if(typeof d[s]>"u")throw new TypeError('No method named "'+s+'"');d[s]()}})},v(h,null,[{key:"VERSION",get:function(){return pi}},{key:"Default",get:function(){return bi}},{key:"NAME",get:function(){return nn}},{key:"DATA_KEY",get:function(){return jn}},{key:"Event",get:function(){return wi}},{key:"EVENT_KEY",get:function(){return ge}},{key:"DefaultType",get:function(){return Ci}}]),h})(Ue);r.default.fn[nn]=Un._jQueryInterface,r.default.fn[nn].Constructor=Un,r.default.fn[nn].noConflict=function(){return r.default.fn[nn]=mi,Un._jQueryInterface};var qe="scrollspy",Si="4.6.2",qn="bs.scrollspy",Vn="."+qn,Di=".data-api",Ai=r.default.fn[qe],Ti="dropdown-item",Ve="active",xi="activate"+Vn,$i="scroll"+Vn,Oi="load"+Vn+Di,Ii="offset",Ut="position",Ni='[data-spy="scroll"]',qt=".nav, .list-group",yt=".nav-link",Mi=".nav-item",Vt=".list-group-item",Li=".dropdown",ki=".dropdown-item",Ri=".dropdown-toggle",Wt={offset:10,method:"auto",target:""},Pi={offset:"number",method:"string",target:"(string|element)"},Cn=(function(){function E(f,a){var s=this;this._element=f,this._scrollElement=f.tagName==="BODY"?window:f,this._config=this._getConfig(a),this._selector=this._config.target+" "+yt+","+(this._config.target+" "+Vt+",")+(this._config.target+" "+ki),this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,r.default(this._scrollElement).on($i,function(d){return s._process(d)}),this.refresh(),this._process()}var h=E.prototype;return h.refresh=function(){var a=this,s=this._scrollElement===this._scrollElement.window?Ii:Ut,d=this._config.method==="auto"?s:this._config.method,y=d===Ut?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight();var w=[].slice.call(document.querySelectorAll(this._selector));w.map(function(A){var R,V=S.getSelectorFromElement(A);if(V&&(R=document.querySelector(V)),R){var W=R.getBoundingClientRect();if(W.width||W.height)return[r.default(R)[d]().top+y,V]}return null}).filter(Boolean).sort(function(A,R){return A[0]-R[0]}).forEach(function(A){a._offsets.push(A[0]),a._targets.push(A[1])})},h.dispose=function(){r.default.removeData(this._element,qn),r.default(this._scrollElement).off(Vn),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},h._getConfig=function(a){if(a=_({},Wt,typeof a=="object"&&a?a:{}),typeof a.target!="string"&&S.isElement(a.target)){var s=r.default(a.target).attr("id");s||(s=S.getUID(qe),r.default(a.target).attr("id",s)),a.target="#"+s}return S.typeCheckConfig(qe,a,Pi),a},h._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},h._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},h._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},h._process=function(){var a=this._getScrollTop()+this._config.offset,s=this._getScrollHeight(),d=this._config.offset+s-this._getOffsetHeight();if(this._scrollHeight!==s&&this.refresh(),a>=d){var y=this._targets[this._targets.length-1];this._activeTarget!==y&&this._activate(y);return}if(this._activeTarget&&a<this._offsets[0]&&this._offsets[0]>0){this._activeTarget=null,this._clear();return}for(var w=this._offsets.length;w--;){var A=this._activeTarget!==this._targets[w]&&a>=this._offsets[w]&&(typeof this._offsets[w+1]>"u"||a<this._offsets[w+1]);A&&this._activate(this._targets[w])}},h._activate=function(a){this._activeTarget=a,this._clear();var s=this._selector.split(",").map(function(y){return y+'[data-target="'+a+'"],'+y+'[href="'+a+'"]'}),d=r.default([].slice.call(document.querySelectorAll(s.join(","))));d.hasClass(Ti)?(d.closest(Li).find(Ri).addClass(Ve),d.addClass(Ve)):(d.addClass(Ve),d.parents(qt).prev(yt+", "+Vt).addClass(Ve),d.parents(qt).prev(Mi).children(yt).addClass(Ve)),r.default(this._scrollElement).trigger(xi,{relatedTarget:a})},h._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter(function(a){return a.classList.contains(Ve)}).forEach(function(a){return a.classList.remove(Ve)})},E._jQueryInterface=function(a){return this.each(function(){var s=r.default(this).data(qn),d=typeof a=="object"&&a;if(s||(s=new E(this,d),r.default(this).data(qn,s)),typeof a=="string"){if(typeof s[a]>"u")throw new TypeError('No method named "'+a+'"');s[a]()}})},v(E,null,[{key:"VERSION",get:function(){return Si}},{key:"Default",get:function(){return Wt}}]),E})();r.default(window).on(Oi,function(){for(var E=[].slice.call(document.querySelectorAll(Ni)),h=E.length,f=h;f--;){var a=r.default(E[f]);Cn._jQueryInterface.call(a,a.data())}}),r.default.fn[qe]=Cn._jQueryInterface,r.default.fn[qe].Constructor=Cn,r.default.fn[qe].noConflict=function(){return r.default.fn[qe]=Ai,Cn._jQueryInterface};var wn="tab",Fi="4.6.2",Wn="bs.tab",Sn="."+Wn,Hi=".data-api",Bi=r.default.fn[wn],ji="dropdown-menu",Dn="active",Ui="disabled",Yt="fade",zt="show",qi="hide"+Sn,Vi="hidden"+Sn,Wi="show"+Sn,Yi="shown"+Sn,zi="click"+Sn+Hi,Ki=".dropdown",Gi=".nav, .list-group",Kt=".active",Gt="> li > .active",Qi='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',Xi=".dropdown-toggle",Ji="> .dropdown-menu .active",An=(function(){function E(f){this._element=f}var h=E.prototype;return h.show=function(){var a=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&r.default(this._element).hasClass(Dn)||r.default(this._element).hasClass(Ui)||this._element.hasAttribute("disabled"))){var s,d,y=r.default(this._element).closest(Gi)[0],w=S.getSelectorFromElement(this._element);if(y){var A=y.nodeName==="UL"||y.nodeName==="OL"?Gt:Kt;d=r.default.makeArray(r.default(y).find(A)),d=d[d.length-1]}var R=r.default.Event(qi,{relatedTarget:this._element}),V=r.default.Event(Wi,{relatedTarget:d});if(d&&r.default(d).trigger(R),r.default(this._element).trigger(V),!(V.isDefaultPrevented()||R.isDefaultPrevented())){w&&(s=document.querySelector(w)),this._activate(this._element,y);var W=function(){var Ce=r.default.Event(Vi,{relatedTarget:a._element}),ve=r.default.Event(Yi,{relatedTarget:d});r.default(d).trigger(Ce),r.default(a._element).trigger(ve)};s?this._activate(s,s.parentNode,W):W()}}},h.dispose=function(){r.default.removeData(this._element,Wn),this._element=null},h._activate=function(a,s,d){var y=this,w=s&&(s.nodeName==="UL"||s.nodeName==="OL")?r.default(s).find(Gt):r.default(s).children(Kt),A=w[0],R=d&&A&&r.default(A).hasClass(Yt),V=function(){return y._transitionComplete(a,A,d)};if(A&&R){var W=S.getTransitionDurationFromElement(A);r.default(A).removeClass(zt).one(S.TRANSITION_END,V).emulateTransitionEnd(W)}else V()},h._transitionComplete=function(a,s,d){if(s){r.default(s).removeClass(Dn);var y=r.default(s.parentNode).find(Ji)[0];y&&r.default(y).removeClass(Dn),s.getAttribute("role")==="tab"&&s.setAttribute("aria-selected",!1)}r.default(a).addClass(Dn),a.getAttribute("role")==="tab"&&a.setAttribute("aria-selected",!0),S.reflow(a),a.classList.contains(Yt)&&a.classList.add(zt);var w=a.parentNode;if(w&&w.nodeName==="LI"&&(w=w.parentNode),w&&r.default(w).hasClass(ji)){var A=r.default(a).closest(Ki)[0];if(A){var R=[].slice.call(A.querySelectorAll(Xi));r.default(R).addClass(Dn)}a.setAttribute("aria-expanded",!0)}d&&d()},E._jQueryInterface=function(a){return this.each(function(){var s=r.default(this),d=s.data(Wn);if(d||(d=new E(this),s.data(Wn,d)),typeof a=="string"){if(typeof d[a]>"u")throw new TypeError('No method named "'+a+'"');d[a]()}})},v(E,null,[{key:"VERSION",get:function(){return Fi}}]),E})();r.default(document).on(zi,Qi,function(E){E.preventDefault(),An._jQueryInterface.call(r.default(this),"show")}),r.default.fn[wn]=An._jQueryInterface,r.default.fn[wn].Constructor=An,r.default.fn[wn].noConflict=function(){return r.default.fn[wn]=Bi,An._jQueryInterface};var tn="toast",Zi="4.6.2",Yn="bs.toast",Tn="."+Yn,ea=r.default.fn[tn],na="fade",Qt="hide",xn="show",Xt="showing",Jt="click.dismiss"+Tn,ta="hide"+Tn,ra="hidden"+Tn,ia="show"+Tn,aa="shown"+Tn,oa='[data-dismiss="toast"]',Zt={animation:!0,autohide:!0,delay:500},sa={animation:"boolean",autohide:"boolean",delay:"number"},zn=(function(){function E(f,a){this._element=f,this._config=this._getConfig(a),this._timeout=null,this._setListeners()}var h=E.prototype;return h.show=function(){var a=this,s=r.default.Event(ia);if(r.default(this._element).trigger(s),!s.isDefaultPrevented()){this._clearTimeout(),this._config.animation&&this._element.classList.add(na);var d=function(){a._element.classList.remove(Xt),a._element.classList.add(xn),r.default(a._element).trigger(aa),a._config.autohide&&(a._timeout=setTimeout(function(){a.hide()},a._config.delay))};if(this._element.classList.remove(Qt),S.reflow(this._element),this._element.classList.add(Xt),this._config.animation){var y=S.getTransitionDurationFromElement(this._element);r.default(this._element).one(S.TRANSITION_END,d).emulateTransitionEnd(y)}else d()}},h.hide=function(){if(this._element.classList.contains(xn)){var a=r.default.Event(ta);r.default(this._element).trigger(a),!a.isDefaultPrevented()&&this._close()}},h.dispose=function(){this._clearTimeout(),this._element.classList.contains(xn)&&this._element.classList.remove(xn),r.default(this._element).off(Jt),r.default.removeData(this._element,Yn),this._element=null,this._config=null},h._getConfig=function(a){return a=_({},Zt,r.default(this._element).data(),typeof a=="object"&&a?a:{}),S.typeCheckConfig(tn,a,this.constructor.DefaultType),a},h._setListeners=function(){var a=this;r.default(this._element).on(Jt,oa,function(){return a.hide()})},h._close=function(){var a=this,s=function(){a._element.classList.add(Qt),r.default(a._element).trigger(ra)};if(this._element.classList.remove(xn),this._config.animation){var d=S.getTransitionDurationFromElement(this._element);r.default(this._element).one(S.TRANSITION_END,s).emulateTransitionEnd(d)}else s()},h._clearTimeout=function(){clearTimeout(this._timeout),this._timeout=null},E._jQueryInterface=function(a){return this.each(function(){var s=r.default(this),d=s.data(Yn),y=typeof a=="object"&&a;if(d||(d=new E(this,y),s.data(Yn,d)),typeof a=="string"){if(typeof d[a]>"u")throw new TypeError('No method named "'+a+'"');d[a](this)}})},v(E,null,[{key:"VERSION",get:function(){return Zi}},{key:"DefaultType",get:function(){return sa}},{key:"Default",get:function(){return Zt}}]),E})();r.default.fn[tn]=zn._jQueryInterface,r.default.fn[tn].Constructor=zn,r.default.fn[tn].noConflict=function(){return r.default.fn[tn]=ea,zn._jQueryInterface},e.Alert=ue,e.Button=xe,e.Carousel=Ie,e.Collapse=hn,e.Dropdown=Me,e.Modal=vn,e.Popover=Un,e.Scrollspy=Cn,e.Tab=An,e.Toast=zn,e.Tooltip=Ue,e.Util=S,Object.defineProperty(e,"__esModule",{value:!0})}))})(bootstrap$1,bootstrap$1.exports)),bootstrap$1.exports}requireBootstrap();(function(){const htmx={onLoad:null,process:null,on:null,off:null,trigger:null,ajax:null,find:null,findAll:null,closest:null,values:function(n,t){return getInputValues(n,t||"post").values},remove:null,addClass:null,removeClass:null,toggleClass:null,takeClass:null,swap:null,defineExtension:null,removeExtension:null,logAll:null,logNone:null,logger:null,config:{historyEnabled:!0,historyCacheSize:10,refreshOnHistoryMiss:!1,defaultSwapStyle:"innerHTML",defaultSwapDelay:0,defaultSettleDelay:20,includeIndicatorStyles:!0,indicatorClass:"htmx-indicator",requestClass:"htmx-request",addedClass:"htmx-added",settlingClass:"htmx-settling",swappingClass:"htmx-swapping",allowEval:!0,allowScriptTags:!0,inlineScriptNonce:"",inlineStyleNonce:"",attributesToSettle:["class","style","width","height"],withCredentials:!1,timeout:0,wsReconnectDelay:"full-jitter",wsBinaryType:"blob",disableSelector:"[hx-disable], [data-hx-disable]",scrollBehavior:"instant",defaultFocusScroll:!1,getCacheBusterParam:!1,globalViewTransitions:!1,methodsThatUseUrlParams:["get","delete"],selfRequestsOnly:!0,ignoreTitle:!1,scrollIntoViewOnBoost:!0,triggerSpecsCache:null,disableInheritance:!1,responseHandling:[{code:"204",swap:!1},{code:"[23]..",swap:!0},{code:"[45]..",swap:!1,error:!0}],allowNestedOobSwaps:!0,historyRestoreAsHxRequest:!0,reportValidityOfForms:!1},parseInterval:null,location,_:null,version:"2.0.8"};htmx.onLoad=onLoadHelper,htmx.process=processNode,htmx.on=addEventListenerImpl,htmx.off=removeEventListenerImpl,htmx.trigger=triggerEvent,htmx.ajax=ajaxHelper,htmx.find=find,htmx.findAll=findAll,htmx.closest=closest,htmx.remove=removeElement,htmx.addClass=addClassToElement,htmx.removeClass=removeClassFromElement,htmx.toggleClass=toggleClassOnElement,htmx.takeClass=takeClassForElement,htmx.swap=swap,htmx.defineExtension=defineExtension,htmx.removeExtension=removeExtension,htmx.logAll=logAll,htmx.logNone=logNone,htmx.parseInterval=parseInterval,htmx._=internalEval;const internalAPI={addTriggerHandler,bodyContains,canAccessLocalStorage,findThisElement,filterValues,swap,hasAttribute,getAttributeValue,getClosestAttributeValue,getClosestMatch,getExpressionVars,getHeaders,getInputValues,getInternalData,getSwapSpecification,getTriggerSpecs,getTarget,makeFragment,mergeObjects,makeSettleInfo,oobSwap,querySelectorExt,settleImmediately,shouldCancel,triggerEvent,triggerErrorEvent,withExtensions},VERBS=["get","post","put","delete","patch"],VERB_SELECTOR=VERBS.map(function(n){return"[hx-"+n+"], [data-hx-"+n+"]"}).join(", ");function parseInterval(n){if(n==null)return;let t=NaN;return n.slice(-2)=="ms"?t=parseFloat(n.slice(0,-2)):n.slice(-1)=="s"?t=parseFloat(n.slice(0,-1))*1e3:n.slice(-1)=="m"?t=parseFloat(n.slice(0,-1))*1e3*60:t=parseFloat(n),isNaN(t)?void 0:t}function getRawAttribute(n,t){return n instanceof Element&&n.getAttribute(t)}function hasAttribute(n,t){return!!n.hasAttribute&&(n.hasAttribute(t)||n.hasAttribute("data-"+t))}function getAttributeValue(n,t){return getRawAttribute(n,t)||getRawAttribute(n,"data-"+t)}function parentElt(n){const t=n.parentElement;return!t&&n.parentNode instanceof ShadowRoot?n.parentNode:t}function getDocument(){return document}function getRootNode(n,t){return n.getRootNode?n.getRootNode({composed:t}):getDocument()}function getClosestMatch(n,t){for(;n&&!t(n);)n=parentElt(n);return n||null}function getAttributeValueWithDisinheritance(n,t,e){const i=getAttributeValue(t,e),o=getAttributeValue(t,"hx-disinherit");var l=getAttributeValue(t,"hx-inherit");if(n!==t){if(htmx.config.disableInheritance)return l&&(l==="*"||l.split(" ").indexOf(e)>=0)?i:null;if(o&&(o==="*"||o.split(" ").indexOf(e)>=0))return"unset"}return i}function getClosestAttributeValue(n,t){let e=null;if(getClosestMatch(n,function(i){return!!(e=getAttributeValueWithDisinheritance(n,asElement(i),t))}),e!=="unset")return e}function matches(n,t){return n instanceof Element&&n.matches(t)}function getStartTag(n){const e=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i.exec(n);return e?e[1].toLowerCase():""}function parseHTML(n){return"parseHTMLUnsafe"in Document?Document.parseHTMLUnsafe(n):new DOMParser().parseFromString(n,"text/html")}function takeChildrenFor(n,t){for(;t.childNodes.length>0;)n.append(t.childNodes[0])}function duplicateScript(n){const t=getDocument().createElement("script");return forEach(n.attributes,function(e){t.setAttribute(e.name,e.value)}),t.textContent=n.textContent,t.async=!1,htmx.config.inlineScriptNonce&&(t.nonce=htmx.config.inlineScriptNonce),t}function isJavaScriptScriptNode(n){return n.matches("script")&&(n.type==="text/javascript"||n.type==="module"||n.type==="")}function normalizeScriptTags(n){Array.from(n.querySelectorAll("script")).forEach(t=>{if(isJavaScriptScriptNode(t)){const e=duplicateScript(t),i=t.parentNode;try{i.insertBefore(e,t)}catch(o){logError(o)}finally{t.remove()}}})}function makeFragment(n){const t=n.replace(/<head(\s[^>]*)?>[\s\S]*?<\/head>/i,""),e=getStartTag(t);let i;if(e==="html"){i=new DocumentFragment;const l=parseHTML(n);takeChildrenFor(i,l.body),i.title=l.title}else if(e==="body"){i=new DocumentFragment;const l=parseHTML(t);takeChildrenFor(i,l.body),i.title=l.title}else{const l=parseHTML('<body><template class="internal-htmx-wrapper">'+t+"</template></body>");i=l.querySelector("template").content,i.title=l.title;var o=i.querySelector("title");o&&o.parentNode===i&&(o.remove(),i.title=o.innerText)}return i&&(htmx.config.allowScriptTags?normalizeScriptTags(i):i.querySelectorAll("script").forEach(l=>l.remove())),i}function maybeCall(n){n&&n()}function isType(n,t){return Object.prototype.toString.call(n)==="[object "+t+"]"}function isFunction(n){return typeof n=="function"}function isRawObject(n){return isType(n,"Object")}function getInternalData(n){const t="htmx-internal-data";let e=n[t];return e||(e=n[t]={}),e}function toArray(n){const t=[];if(n)for(let e=0;e<n.length;e++)t.push(n[e]);return t}function forEach(n,t){if(n)for(let e=0;e<n.length;e++)t(n[e])}function isScrolledIntoView(n){const t=n.getBoundingClientRect(),e=t.top,i=t.bottom;return e<window.innerHeight&&i>=0}function bodyContains(n){return n.getRootNode({composed:!0})===document}function splitOnWhitespace(n){return n.trim().split(/\s+/)}function mergeObjects(n,t){for(const e in t)t.hasOwnProperty(e)&&(n[e]=t[e]);return n}function parseJSON(n){try{return JSON.parse(n)}catch(t){return logError(t),null}}function canAccessLocalStorage(){const n="htmx:sessionStorageTest";try{return sessionStorage.setItem(n,n),sessionStorage.removeItem(n),!0}catch{return!1}}function normalizePath(n){const t=new URL(n,"http://x");return t&&(n=t.pathname+t.search),n!="/"&&(n=n.replace(/\/+$/,"")),n}function internalEval(str){return maybeEval(getDocument().body,function(){return eval(str)})}function onLoadHelper(n){return htmx.on("htmx:load",function(e){n(e.detail.elt)})}function logAll(){htmx.logger=function(n,t,e){console&&console.log(t,n,e)}}function logNone(){htmx.logger=null}function find(n,t){return typeof n!="string"?n.querySelector(t):find(getDocument(),n)}function findAll(n,t){return typeof n!="string"?n.querySelectorAll(t):findAll(getDocument(),n)}function getWindow(){return window}function removeElement(n,t){n=resolveTarget(n),t?getWindow().setTimeout(function(){removeElement(n),n=null},t):parentElt(n).removeChild(n)}function asElement(n){return n instanceof Element?n:null}function asHtmlElement(n){return n instanceof HTMLElement?n:null}function asString(n){return typeof n=="string"?n:null}function asParentNode(n){return n instanceof Element||n instanceof Document||n instanceof DocumentFragment?n:null}function addClassToElement(n,t,e){n=asElement(resolveTarget(n)),n&&(e?getWindow().setTimeout(function(){addClassToElement(n,t),n=null},e):n.classList&&n.classList.add(t))}function removeClassFromElement(n,t,e){let i=asElement(resolveTarget(n));i&&(e?getWindow().setTimeout(function(){removeClassFromElement(i,t),i=null},e):i.classList&&(i.classList.remove(t),i.classList.length===0&&i.removeAttribute("class")))}function toggleClassOnElement(n,t){n=resolveTarget(n),n.classList.toggle(t)}function takeClassForElement(n,t){n=resolveTarget(n),forEach(n.parentElement.children,function(e){removeClassFromElement(e,t)}),addClassToElement(asElement(n),t)}function closest(n,t){return n=asElement(resolveTarget(n)),n?n.closest(t):null}function startsWith(n,t){return n.substring(0,t.length)===t}function endsWith(n,t){return n.substring(n.length-t.length)===t}function normalizeSelector(n){const t=n.trim();return startsWith(t,"<")&&endsWith(t,"/>")?t.substring(1,t.length-2):t}function querySelectorAllExt(n,t,e){if(t.indexOf("global ")===0)return querySelectorAllExt(n,t.slice(7),!0);n=resolveTarget(n);const i=[];{let r=0,p=0;for(let m=0;m<t.length;m++){const v=t[m];if(v===","&&r===0){i.push(t.substring(p,m)),p=m+1;continue}v==="<"?r++:v==="/"&&m<t.length-1&&t[m+1]===">"&&r--}p<t.length&&i.push(t.substring(p))}const o=[],l=[];for(;i.length>0;){const r=normalizeSelector(i.shift());let p;r.indexOf("closest ")===0?p=closest(asElement(n),normalizeSelector(r.slice(8))):r.indexOf("find ")===0?p=find(asParentNode(n),normalizeSelector(r.slice(5))):r==="next"||r==="nextElementSibling"?p=asElement(n).nextElementSibling:r.indexOf("next ")===0?p=scanForwardQuery(n,normalizeSelector(r.slice(5)),!!e):r==="previous"||r==="previousElementSibling"?p=asElement(n).previousElementSibling:r.indexOf("previous ")===0?p=scanBackwardsQuery(n,normalizeSelector(r.slice(9)),!!e):r==="document"?p=document:r==="window"?p=window:r==="body"?p=document.body:r==="root"?p=getRootNode(n,!!e):r==="host"?p=n.getRootNode().host:l.push(r),p&&o.push(p)}if(l.length>0){const r=l.join(","),p=asParentNode(getRootNode(n,!!e));o.push(...toArray(p.querySelectorAll(r)))}return o}var scanForwardQuery=function(n,t,e){const i=asParentNode(getRootNode(n,e)).querySelectorAll(t);for(let o=0;o<i.length;o++){const l=i[o];if(l.compareDocumentPosition(n)===Node.DOCUMENT_POSITION_PRECEDING)return l}},scanBackwardsQuery=function(n,t,e){const i=asParentNode(getRootNode(n,e)).querySelectorAll(t);for(let o=i.length-1;o>=0;o--){const l=i[o];if(l.compareDocumentPosition(n)===Node.DOCUMENT_POSITION_FOLLOWING)return l}};function querySelectorExt(n,t){return typeof n!="string"?querySelectorAllExt(n,t)[0]:querySelectorAllExt(getDocument().body,n)[0]}function resolveTarget(n,t){return typeof n=="string"?find(asParentNode(t)||document,n):n}function processEventArgs(n,t,e,i){return isFunction(t)?{target:getDocument().body,event:asString(n),listener:t,options:e}:{target:resolveTarget(n),event:asString(t),listener:e,options:i}}function addEventListenerImpl(n,t,e,i){return ready(function(){const l=processEventArgs(n,t,e,i);l.target.addEventListener(l.event,l.listener,l.options)}),isFunction(t)?t:e}function removeEventListenerImpl(n,t,e){return ready(function(){const i=processEventArgs(n,t,e);i.target.removeEventListener(i.event,i.listener)}),isFunction(t)?t:e}const DUMMY_ELT=getDocument().createElement("output");function findAttributeTargets(n,t){const e=getClosestAttributeValue(n,t);if(e){if(e==="this")return[findThisElement(n,t)];{const i=querySelectorAllExt(n,e);if(/(^|,)(\s*)inherit(\s*)($|,)/.test(e)){const l=asElement(getClosestMatch(n,function(r){return r!==n&&hasAttribute(asElement(r),t)}));l&&i.push(...findAttributeTargets(l,t))}return i.length===0?(logError('The selector "'+e+'" on '+t+" returned no matches!"),[DUMMY_ELT]):i}}}function findThisElement(n,t){return asElement(getClosestMatch(n,function(e){return getAttributeValue(asElement(e),t)!=null}))}function getTarget(n){const t=getClosestAttributeValue(n,"hx-target");return t?t==="this"?findThisElement(n,"hx-target"):querySelectorExt(n,t):getInternalData(n).boosted?getDocument().body:n}function shouldSettleAttribute(n){return htmx.config.attributesToSettle.includes(n)}function cloneAttributes(n,t){forEach(Array.from(n.attributes),function(e){!t.hasAttribute(e.name)&&shouldSettleAttribute(e.name)&&n.removeAttribute(e.name)}),forEach(t.attributes,function(e){shouldSettleAttribute(e.name)&&n.setAttribute(e.name,e.value)})}function isInlineSwap(n,t){const e=getExtensions(t);for(let i=0;i<e.length;i++){const o=e[i];try{if(o.isInlineSwap(n))return!0}catch(l){logError(l)}}return n==="outerHTML"}function oobSwap(n,t,e,i){i=i||getDocument();let o="#"+CSS.escape(getRawAttribute(t,"id")),l="outerHTML";n==="true"||(n.indexOf(":")>0?(l=n.substring(0,n.indexOf(":")),o=n.substring(n.indexOf(":")+1)):l=n),t.removeAttribute("hx-swap-oob"),t.removeAttribute("data-hx-swap-oob");const r=querySelectorAllExt(i,o,!1);return r.length?(forEach(r,function(p){let m;const v=t.cloneNode(!0);m=getDocument().createDocumentFragment(),m.appendChild(v),isInlineSwap(l,p)||(m=asParentNode(v));const _={shouldSwap:!0,target:p,fragment:m};triggerEvent(p,"htmx:oobBeforeSwap",_)&&(p=_.target,_.shouldSwap&&(handlePreservedElements(m),swapWithStyle(l,p,p,m,e),restorePreservedElements()),forEach(e.elts,function(b){triggerEvent(b,"htmx:oobAfterSwap",_)}))}),t.parentNode.removeChild(t)):(t.parentNode.removeChild(t),triggerErrorEvent(getDocument().body,"htmx:oobErrorNoTarget",{content:t})),n}function restorePreservedElements(){const n=find("#--htmx-preserve-pantry--");if(n){for(const t of[...n.children]){const e=find("#"+t.id);e.parentNode.moveBefore(t,e),e.remove()}n.remove()}}function handlePreservedElements(n){forEach(findAll(n,"[hx-preserve], [data-hx-preserve]"),function(t){const e=getAttributeValue(t,"id"),i=getDocument().getElementById(e);if(i!=null)if(t.moveBefore){let o=find("#--htmx-preserve-pantry--");o==null&&(getDocument().body.insertAdjacentHTML("afterend","<div id='--htmx-preserve-pantry--'></div>"),o=find("#--htmx-preserve-pantry--")),o.moveBefore(i,null)}else t.parentNode.replaceChild(i,t)})}function handleAttributes(n,t,e){forEach(t.querySelectorAll("[id]"),function(i){const o=getRawAttribute(i,"id");if(o&&o.length>0){const l=o.replace("'","\\'"),r=i.tagName.replace(":","\\:"),p=asParentNode(n),m=p&&p.querySelector(r+"[id='"+l+"']");if(m&&m!==p){const v=i.cloneNode();cloneAttributes(i,m),e.tasks.push(function(){cloneAttributes(i,v)})}}})}function makeAjaxLoadTask(n){return function(){removeClassFromElement(n,htmx.config.addedClass),processNode(asElement(n)),processFocus(asParentNode(n)),triggerEvent(n,"htmx:load")}}function processFocus(n){const t="[autofocus]",e=asHtmlElement(matches(n,t)?n:n.querySelector(t));e?.focus()}function insertNodesBefore(n,t,e,i){for(handleAttributes(n,e,i);e.childNodes.length>0;){const o=e.firstChild;addClassToElement(asElement(o),htmx.config.addedClass),n.insertBefore(o,t),o.nodeType!==Node.TEXT_NODE&&o.nodeType!==Node.COMMENT_NODE&&i.tasks.push(makeAjaxLoadTask(o))}}function stringHash(n,t){let e=0;for(;e<n.length;)t=(t<<5)-t+n.charCodeAt(e++)|0;return t}function attributeHash(n){let t=0;for(let e=0;e<n.attributes.length;e++){const i=n.attributes[e];i.value&&(t=stringHash(i.name,t),t=stringHash(i.value,t))}return t}function deInitOnHandlers(n){const t=getInternalData(n);if(t.onHandlers){for(let e=0;e<t.onHandlers.length;e++){const i=t.onHandlers[e];removeEventListenerImpl(n,i.event,i.listener)}delete t.onHandlers}}function deInitNode(n){const t=getInternalData(n);t.timeout&&clearTimeout(t.timeout),t.listenerInfos&&forEach(t.listenerInfos,function(e){e.on&&removeEventListenerImpl(e.on,e.trigger,e.listener)}),deInitOnHandlers(n),forEach(Object.keys(t),function(e){e!=="firstInitCompleted"&&delete t[e]})}function cleanUpElement(n){triggerEvent(n,"htmx:beforeCleanupElement"),deInitNode(n),forEach(n.children,function(t){cleanUpElement(t)})}function swapOuterHTML(n,t,e){if(n.tagName==="BODY")return swapInnerHTML(n,t,e);let i;const o=n.previousSibling,l=parentElt(n);if(l){for(insertNodesBefore(l,n,t,e),o==null?i=l.firstChild:i=o.nextSibling,e.elts=e.elts.filter(function(r){return r!==n});i&&i!==n;)i instanceof Element&&e.elts.push(i),i=i.nextSibling;cleanUpElement(n),n.remove()}}function swapAfterBegin(n,t,e){return insertNodesBefore(n,n.firstChild,t,e)}function swapBeforeBegin(n,t,e){return insertNodesBefore(parentElt(n),n,t,e)}function swapBeforeEnd(n,t,e){return insertNodesBefore(n,null,t,e)}function swapAfterEnd(n,t,e){return insertNodesBefore(parentElt(n),n.nextSibling,t,e)}function swapDelete(n){cleanUpElement(n);const t=parentElt(n);if(t)return t.removeChild(n)}function swapInnerHTML(n,t,e){const i=n.firstChild;if(insertNodesBefore(n,i,t,e),i){for(;i.nextSibling;)cleanUpElement(i.nextSibling),n.removeChild(i.nextSibling);cleanUpElement(i),n.removeChild(i)}}function swapWithStyle(n,t,e,i,o){switch(n){case"none":return;case"outerHTML":swapOuterHTML(e,i,o);return;case"afterbegin":swapAfterBegin(e,i,o);return;case"beforebegin":swapBeforeBegin(e,i,o);return;case"beforeend":swapBeforeEnd(e,i,o);return;case"afterend":swapAfterEnd(e,i,o);return;case"delete":swapDelete(e);return;default:var l=getExtensions(t);for(let r=0;r<l.length;r++){const p=l[r];try{const m=p.handleSwap(n,e,i,o);if(m){if(Array.isArray(m))for(let v=0;v<m.length;v++){const _=m[v];_.nodeType!==Node.TEXT_NODE&&_.nodeType!==Node.COMMENT_NODE&&o.tasks.push(makeAjaxLoadTask(_))}return}}catch(m){logError(m)}}n==="innerHTML"?swapInnerHTML(e,i,o):swapWithStyle(htmx.config.defaultSwapStyle,t,e,i,o)}}function findAndSwapOobElements(n,t,e){var i=findAll(n,"[hx-swap-oob], [data-hx-swap-oob]");return forEach(i,function(o){if(htmx.config.allowNestedOobSwaps||o.parentElement===null){const l=getAttributeValue(o,"hx-swap-oob");l!=null&&oobSwap(l,o,t,e)}else o.removeAttribute("hx-swap-oob"),o.removeAttribute("data-hx-swap-oob")}),i.length>0}function swap(n,t,e,i){i||(i={});let o=null,l=null,r=function(){maybeCall(i.beforeSwapCallback),n=resolveTarget(n);const v=i.contextElement?getRootNode(i.contextElement,!1):getDocument(),_=document.activeElement;let b={};b={elt:_,start:_?_.selectionStart:null,end:_?_.selectionEnd:null};const D=makeSettleInfo(n);if(e.swapStyle==="textContent")n.textContent=t;else{let T=makeFragment(t);if(D.title=i.title||T.title,i.historyRequest&&(T=T.querySelector("[hx-history-elt],[data-hx-history-elt]")||T),i.selectOOB){const O=i.selectOOB.split(",");for(let P=0;P<O.length;P++){const Y=O[P].split(":",2);let B=Y[0].trim();B.indexOf("#")===0&&(B=B.substring(1));const j=Y[1]||"true",S=T.querySelector("#"+B);S&&oobSwap(j,S,D,v)}}if(findAndSwapOobElements(T,D,v),forEach(findAll(T,"template"),function(O){O.content&&findAndSwapOobElements(O.content,D,v)&&O.remove()}),i.select){const O=getDocument().createDocumentFragment();forEach(T.querySelectorAll(i.select),function(P){O.appendChild(P)}),T=O}handlePreservedElements(T),swapWithStyle(e.swapStyle,i.contextElement,n,T,D),restorePreservedElements()}if(b.elt&&!bodyContains(b.elt)&&getRawAttribute(b.elt,"id")){const T=document.getElementById(getRawAttribute(b.elt,"id")),O={preventScroll:e.focusScroll!==void 0?!e.focusScroll:!htmx.config.defaultFocusScroll};if(T){if(b.start&&T.setSelectionRange)try{T.setSelectionRange(b.start,b.end)}catch{}T.focus(O)}}n.classList.remove(htmx.config.swappingClass),forEach(D.elts,function(T){T.classList&&T.classList.add(htmx.config.settlingClass),triggerEvent(T,"htmx:afterSwap",i.eventInfo)}),maybeCall(i.afterSwapCallback),e.ignoreTitle||handleTitle(D.title);const I=function(){if(forEach(D.tasks,function(T){T.call()}),forEach(D.elts,function(T){T.classList&&T.classList.remove(htmx.config.settlingClass),triggerEvent(T,"htmx:afterSettle",i.eventInfo)}),i.anchor){const T=asElement(resolveTarget("#"+i.anchor));T&&T.scrollIntoView({block:"start",behavior:"auto"})}updateScrollState(D.elts,e),maybeCall(i.afterSettleCallback),maybeCall(o)};e.settleDelay>0?getWindow().setTimeout(I,e.settleDelay):I()},p=htmx.config.globalViewTransitions;e.hasOwnProperty("transition")&&(p=e.transition);const m=i.contextElement||getDocument();if(p&&triggerEvent(m,"htmx:beforeTransition",i.eventInfo)&&typeof Promise<"u"&&document.startViewTransition){const v=new Promise(function(b,D){o=b,l=D}),_=r;r=function(){document.startViewTransition(function(){return _(),v})}}try{e?.swapDelay&&e.swapDelay>0?getWindow().setTimeout(r,e.swapDelay):r()}catch(v){throw triggerErrorEvent(m,"htmx:swapError",i.eventInfo),maybeCall(l),v}}function handleTriggerHeader(n,t,e){const i=n.getResponseHeader(t);if(i.indexOf("{")===0){const o=parseJSON(i);for(const l in o)if(o.hasOwnProperty(l)){let r=o[l];isRawObject(r)?e=r.target!==void 0?r.target:e:r={value:r},triggerEvent(e,l,r)}}else{const o=i.split(",");for(let l=0;l<o.length;l++)triggerEvent(e,o[l].trim(),[])}}const WHITESPACE_OR_COMMA=/[\s,]/,SYMBOL_START=/[_$a-zA-Z]/,SYMBOL_CONT=/[_$a-zA-Z0-9]/,STRINGISH_START=['"',"'","/"],NOT_WHITESPACE=/[^\s]/,COMBINED_SELECTOR_START=/[{(]/,COMBINED_SELECTOR_END=/[})]/;function tokenizeString(n){const t=[];let e=0;for(;e<n.length;){if(SYMBOL_START.exec(n.charAt(e))){for(var i=e;SYMBOL_CONT.exec(n.charAt(e+1));)e++;t.push(n.substring(i,e+1))}else if(STRINGISH_START.indexOf(n.charAt(e))!==-1){const o=n.charAt(e);var i=e;for(e++;e<n.length&&n.charAt(e)!==o;)n.charAt(e)==="\\"&&e++,e++;t.push(n.substring(i,e+1))}else{const o=n.charAt(e);t.push(o)}e++}return t}function isPossibleRelativeReference(n,t,e){return SYMBOL_START.exec(n.charAt(0))&&n!=="true"&&n!=="false"&&n!=="this"&&n!==e&&t!=="."}function maybeGenerateConditional(n,t,e){if(t[0]==="["){t.shift();let i=1,o=" return (function("+e+"){ return (",l=null;for(;t.length>0;){const r=t[0];if(r==="]"){if(i--,i===0){l===null&&(o=o+"true"),t.shift(),o+=")})";try{const p=maybeEval(n,function(){return Function(o)()},function(){return!0});return p.source=o,p}catch(p){return triggerErrorEvent(getDocument().body,"htmx:syntax:error",{error:p,source:o}),null}}}else r==="["&&i++;isPossibleRelativeReference(r,l,e)?o+="(("+e+"."+r+") ? ("+e+"."+r+") : (window."+r+"))":o=o+r,l=t.shift()}}}function consumeUntil(n,t){let e="";for(;n.length>0&&!t.test(n[0]);)e+=n.shift();return e}function consumeCSSSelector(n){let t;return n.length>0&&COMBINED_SELECTOR_START.test(n[0])?(n.shift(),t=consumeUntil(n,COMBINED_SELECTOR_END).trim(),n.shift()):t=consumeUntil(n,WHITESPACE_OR_COMMA),t}const INPUT_SELECTOR="input, textarea, select";function parseAndCacheTrigger(n,t,e){const i=[],o=tokenizeString(t);do{consumeUntil(o,NOT_WHITESPACE);const p=o.length,m=consumeUntil(o,/[,\[\s]/);if(m!=="")if(m==="every"){const v={trigger:"every"};consumeUntil(o,NOT_WHITESPACE),v.pollInterval=parseInterval(consumeUntil(o,/[,\[\s]/)),consumeUntil(o,NOT_WHITESPACE);var l=maybeGenerateConditional(n,o,"event");l&&(v.eventFilter=l),i.push(v)}else{const v={trigger:m};var l=maybeGenerateConditional(n,o,"event");for(l&&(v.eventFilter=l),consumeUntil(o,NOT_WHITESPACE);o.length>0&&o[0]!==",";){const b=o.shift();if(b==="changed")v.changed=!0;else if(b==="once")v.once=!0;else if(b==="consume")v.consume=!0;else if(b==="delay"&&o[0]===":")o.shift(),v.delay=parseInterval(consumeUntil(o,WHITESPACE_OR_COMMA));else if(b==="from"&&o[0]===":"){if(o.shift(),COMBINED_SELECTOR_START.test(o[0]))var r=consumeCSSSelector(o);else{var r=consumeUntil(o,WHITESPACE_OR_COMMA);if(r==="closest"||r==="find"||r==="next"||r==="previous"){o.shift();const I=consumeCSSSelector(o);I.length>0&&(r+=" "+I)}}v.from=r}else b==="target"&&o[0]===":"?(o.shift(),v.target=consumeCSSSelector(o)):b==="throttle"&&o[0]===":"?(o.shift(),v.throttle=parseInterval(consumeUntil(o,WHITESPACE_OR_COMMA))):b==="queue"&&o[0]===":"?(o.shift(),v.queue=consumeUntil(o,WHITESPACE_OR_COMMA)):b==="root"&&o[0]===":"?(o.shift(),v[b]=consumeCSSSelector(o)):b==="threshold"&&o[0]===":"?(o.shift(),v[b]=consumeUntil(o,WHITESPACE_OR_COMMA)):triggerErrorEvent(n,"htmx:syntax:error",{token:o.shift()});consumeUntil(o,NOT_WHITESPACE)}i.push(v)}o.length===p&&triggerErrorEvent(n,"htmx:syntax:error",{token:o.shift()}),consumeUntil(o,NOT_WHITESPACE)}while(o[0]===","&&o.shift());return e&&(e[t]=i),i}function getTriggerSpecs(n){const t=getAttributeValue(n,"hx-trigger");let e=[];if(t){const i=htmx.config.triggerSpecsCache;e=i&&i[t]||parseAndCacheTrigger(n,t,i)}return e.length>0?e:matches(n,"form")?[{trigger:"submit"}]:matches(n,'input[type="button"], input[type="submit"]')?[{trigger:"click"}]:matches(n,INPUT_SELECTOR)?[{trigger:"change"}]:[{trigger:"click"}]}function cancelPolling(n){getInternalData(n).cancelled=!0}function processPolling(n,t,e){const i=getInternalData(n);i.timeout=getWindow().setTimeout(function(){bodyContains(n)&&i.cancelled!==!0&&(maybeFilterEvent(e,n,makeEvent("hx:poll:trigger",{triggerSpec:e,target:n}))||t(n),processPolling(n,t,e))},e.pollInterval)}function isLocalLink(n){return location.hostname===n.hostname&&getRawAttribute(n,"href")&&getRawAttribute(n,"href").indexOf("#")!==0}function eltIsDisabled(n){return closest(n,htmx.config.disableSelector)}function boostElement(n,t,e){if(n instanceof HTMLAnchorElement&&isLocalLink(n)&&(n.target===""||n.target==="_self")||n.tagName==="FORM"&&String(getRawAttribute(n,"method")).toLowerCase()!=="dialog"){t.boosted=!0;let i,o;if(n.tagName==="A")i="get",o=getRawAttribute(n,"href");else{const l=getRawAttribute(n,"method");i=l?l.toLowerCase():"get",o=getRawAttribute(n,"action"),(o==null||o==="")&&(o=location.href),i==="get"&&o.includes("?")&&(o=o.replace(/\?[^#]+/,""))}e.forEach(function(l){addEventListener(n,function(r,p){const m=asElement(r);if(eltIsDisabled(m)){cleanUpElement(m);return}issueAjaxRequest(i,o,m,p)},t,l,!0)})}}function shouldCancel(n,t){if(n.type==="submit"&&t.tagName==="FORM")return!0;if(n.type==="click"){const e=t.closest('input[type="submit"], button');if(e&&e.form&&e.type==="submit")return!0;const i=t.closest("a"),o=/^#.+/;if(i&&i.href&&!o.test(i.getAttribute("href")))return!0}return!1}function ignoreBoostedAnchorCtrlClick(n,t){return getInternalData(n).boosted&&n instanceof HTMLAnchorElement&&t.type==="click"&&(t.ctrlKey||t.metaKey)}function maybeFilterEvent(n,t,e){const i=n.eventFilter;if(i)try{return i.call(t,e)!==!0}catch(o){const l=i.source;return triggerErrorEvent(getDocument().body,"htmx:eventFilter:error",{error:o,source:l}),!0}return!1}function addEventListener(n,t,e,i,o){const l=getInternalData(n);let r;i.from?r=querySelectorAllExt(n,i.from):r=[n],i.changed&&("lastValue"in l||(l.lastValue=new WeakMap),r.forEach(function(p){l.lastValue.has(i)||l.lastValue.set(i,new WeakMap),l.lastValue.get(i).set(p,p.value)})),forEach(r,function(p){const m=function(v){if(!bodyContains(n)){p.removeEventListener(i.trigger,m);return}if(ignoreBoostedAnchorCtrlClick(n,v)||((o||shouldCancel(v,p))&&v.preventDefault(),maybeFilterEvent(i,n,v)))return;const _=getInternalData(v);if(_.triggerSpec=i,_.handledFor==null&&(_.handledFor=[]),_.handledFor.indexOf(n)<0){if(_.handledFor.push(n),i.consume&&v.stopPropagation(),i.target&&v.target&&!matches(asElement(v.target),i.target))return;if(i.once){if(l.triggeredOnce)return;l.triggeredOnce=!0}if(i.changed){const b=v.target,D=b.value,I=l.lastValue.get(i);if(I.has(b)&&I.get(b)===D)return;I.set(b,D)}if(l.delayed&&clearTimeout(l.delayed),l.throttle)return;i.throttle>0?l.throttle||(triggerEvent(n,"htmx:trigger"),t(n,v),l.throttle=getWindow().setTimeout(function(){l.throttle=null},i.throttle)):i.delay>0?l.delayed=getWindow().setTimeout(function(){triggerEvent(n,"htmx:trigger"),t(n,v)},i.delay):(triggerEvent(n,"htmx:trigger"),t(n,v))}};e.listenerInfos==null&&(e.listenerInfos=[]),e.listenerInfos.push({trigger:i.trigger,listener:m,on:p}),p.addEventListener(i.trigger,m)})}let windowIsScrolling=!1,scrollHandler=null;function initScrollHandler(){scrollHandler||(scrollHandler=function(){windowIsScrolling=!0},window.addEventListener("scroll",scrollHandler),window.addEventListener("resize",scrollHandler),setInterval(function(){windowIsScrolling&&(windowIsScrolling=!1,forEach(getDocument().querySelectorAll("[hx-trigger*='revealed'],[data-hx-trigger*='revealed']"),function(n){maybeReveal(n)}))},200))}function maybeReveal(n){!hasAttribute(n,"data-hx-revealed")&&isScrolledIntoView(n)&&(n.setAttribute("data-hx-revealed","true"),getInternalData(n).initHash?triggerEvent(n,"revealed"):n.addEventListener("htmx:afterProcessNode",function(){triggerEvent(n,"revealed")},{once:!0}))}function loadImmediately(n,t,e,i){const o=function(){e.loaded||(e.loaded=!0,triggerEvent(n,"htmx:trigger"),t(n))};i>0?getWindow().setTimeout(o,i):o()}function processVerbs(n,t,e){let i=!1;return forEach(VERBS,function(o){if(hasAttribute(n,"hx-"+o)){const l=getAttributeValue(n,"hx-"+o);i=!0,t.path=l,t.verb=o,e.forEach(function(r){addTriggerHandler(n,r,t,function(p,m){const v=asElement(p);if(eltIsDisabled(v)){cleanUpElement(v);return}issueAjaxRequest(o,l,v,m)})})}}),i}function addTriggerHandler(n,t,e,i){if(t.trigger==="revealed")initScrollHandler(),addEventListener(n,i,e,t),maybeReveal(asElement(n));else if(t.trigger==="intersect"){const o={};t.root&&(o.root=querySelectorExt(n,t.root)),t.threshold&&(o.threshold=parseFloat(t.threshold)),new IntersectionObserver(function(r){for(let p=0;p<r.length;p++)if(r[p].isIntersecting){triggerEvent(n,"intersect");break}},o).observe(asElement(n)),addEventListener(asElement(n),i,e,t)}else!e.firstInitCompleted&&t.trigger==="load"?maybeFilterEvent(t,n,makeEvent("load",{elt:n}))||loadImmediately(asElement(n),i,e,t.delay):t.pollInterval>0?(e.polling=!0,processPolling(asElement(n),i,t)):addEventListener(n,i,e,t)}function shouldProcessHxOn(n){const t=asElement(n);if(!t)return!1;const e=t.attributes;for(let i=0;i<e.length;i++){const o=e[i].name;if(startsWith(o,"hx-on:")||startsWith(o,"data-hx-on:")||startsWith(o,"hx-on-")||startsWith(o,"data-hx-on-"))return!0}return!1}const HX_ON_QUERY=new XPathEvaluator().createExpression('.//*[@*[ starts-with(name(), "hx-on:") or starts-with(name(), "data-hx-on:") or starts-with(name(), "hx-on-") or starts-with(name(), "data-hx-on-") ]]');function processHXOnRoot(n,t){shouldProcessHxOn(n)&&t.push(asElement(n));const e=HX_ON_QUERY.evaluate(n);let i=null;for(;i=e.iterateNext();)t.push(asElement(i))}function findHxOnWildcardElements(n){const t=[];if(n instanceof DocumentFragment)for(const e of n.childNodes)processHXOnRoot(e,t);else processHXOnRoot(n,t);return t}function findElementsToProcess(n){if(n.querySelectorAll){const e=", [hx-boost] a, [data-hx-boost] a, a[hx-boost], a[data-hx-boost]",i=[];for(const l in extensions){const r=extensions[l];if(r.getSelectors){var t=r.getSelectors();t&&i.push(t)}}return n.querySelectorAll(VERB_SELECTOR+e+", form, [type='submit'], [hx-ext], [data-hx-ext], [hx-trigger], [data-hx-trigger]"+i.flat().map(l=>", "+l).join(""))}else return[]}function maybeSetLastButtonClicked(n){const t=getTargetButton(n.target),e=getRelatedFormData(n);e&&(e.lastButtonClicked=t)}function maybeUnsetLastButtonClicked(n){const t=getRelatedFormData(n);t&&(t.lastButtonClicked=null)}function getTargetButton(n){return closest(asElement(n),"button, input[type='submit']")}function getRelatedForm(n){return n.form||closest(n,"form")}function getRelatedFormData(n){const t=getTargetButton(n.target);if(!t)return;const e=getRelatedForm(t);if(e)return getInternalData(e)}function initButtonTracking(n){n.addEventListener("click",maybeSetLastButtonClicked),n.addEventListener("focusin",maybeSetLastButtonClicked),n.addEventListener("focusout",maybeUnsetLastButtonClicked)}function addHxOnEventHandler(n,t,e){const i=getInternalData(n);Array.isArray(i.onHandlers)||(i.onHandlers=[]);let o;const l=function(r){maybeEval(n,function(){eltIsDisabled(n)||(o||(o=new Function("event",e)),o.call(n,r))})};n.addEventListener(t,l),i.onHandlers.push({event:t,listener:l})}function processHxOnWildcard(n){deInitOnHandlers(n);for(let t=0;t<n.attributes.length;t++){const e=n.attributes[t].name,i=n.attributes[t].value;if(startsWith(e,"hx-on")||startsWith(e,"data-hx-on")){const o=e.indexOf("-on")+3,l=e.slice(o,o+1);if(l==="-"||l===":"){let r=e.slice(o+1);startsWith(r,":")?r="htmx"+r:startsWith(r,"-")?r="htmx:"+r.slice(1):startsWith(r,"htmx-")&&(r="htmx:"+r.slice(5)),addHxOnEventHandler(n,r,i)}}}}function initNode(n){triggerEvent(n,"htmx:beforeProcessNode");const t=getInternalData(n),e=getTriggerSpecs(n);processVerbs(n,t,e)||(getClosestAttributeValue(n,"hx-boost")==="true"?boostElement(n,t,e):hasAttribute(n,"hx-trigger")&&e.forEach(function(o){addTriggerHandler(n,o,t,function(){})})),(n.tagName==="FORM"||getRawAttribute(n,"type")==="submit"&&hasAttribute(n,"form"))&&initButtonTracking(n),t.firstInitCompleted=!0,triggerEvent(n,"htmx:afterProcessNode")}function maybeDeInitAndHash(n){if(!(n instanceof Element))return!1;const t=getInternalData(n),e=attributeHash(n);return t.initHash!==e?(deInitNode(n),t.initHash=e,!0):!1}function processNode(n){if(n=resolveTarget(n),eltIsDisabled(n)){cleanUpElement(n);return}const t=[];maybeDeInitAndHash(n)&&t.push(n),forEach(findElementsToProcess(n),function(e){if(eltIsDisabled(e)){cleanUpElement(e);return}maybeDeInitAndHash(e)&&t.push(e)}),forEach(findHxOnWildcardElements(n),processHxOnWildcard),forEach(t,initNode)}function kebabEventName(n){return n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}function makeEvent(n,t){return new CustomEvent(n,{bubbles:!0,cancelable:!0,composed:!0,detail:t})}function triggerErrorEvent(n,t,e){triggerEvent(n,t,mergeObjects({error:t},e))}function ignoreEventForLogging(n){return n==="htmx:afterProcessNode"}function withExtensions(n,t,e){forEach(getExtensions(n,[],e),function(i){try{t(i)}catch(o){logError(o)}})}function logError(n){console.error(n)}function triggerEvent(n,t,e){n=resolveTarget(n),e==null&&(e={}),e.elt=n;const i=makeEvent(t,e);htmx.logger&&!ignoreEventForLogging(t)&&htmx.logger(n,t,e),e.error&&(logError(e.error),triggerEvent(n,"htmx:error",{errorInfo:e}));let o=n.dispatchEvent(i);const l=kebabEventName(t);if(o&&l!==t){const r=makeEvent(l,i.detail);o=o&&n.dispatchEvent(r)}return withExtensions(asElement(n),function(r){o=o&&r.onEvent(t,i)!==!1&&!i.defaultPrevented}),o}let currentPathForHistory;function setCurrentPathForHistory(n){currentPathForHistory=n,canAccessLocalStorage()&&sessionStorage.setItem("htmx-current-path-for-history",n)}setCurrentPathForHistory(location.pathname+location.search);function getHistoryElement(){return getDocument().querySelector("[hx-history-elt],[data-hx-history-elt]")||getDocument().body}function saveToHistoryCache(n,t){if(!canAccessLocalStorage())return;const e=cleanInnerHtmlForHistory(t),i=getDocument().title,o=window.scrollY;if(htmx.config.historyCacheSize<=0){sessionStorage.removeItem("htmx-history-cache");return}n=normalizePath(n);const l=parseJSON(sessionStorage.getItem("htmx-history-cache"))||[];for(let p=0;p<l.length;p++)if(l[p].url===n){l.splice(p,1);break}const r={url:n,content:e,title:i,scroll:o};for(triggerEvent(getDocument().body,"htmx:historyItemCreated",{item:r,cache:l}),l.push(r);l.length>htmx.config.historyCacheSize;)l.shift();for(;l.length>0;)try{sessionStorage.setItem("htmx-history-cache",JSON.stringify(l));break}catch(p){triggerErrorEvent(getDocument().body,"htmx:historyCacheError",{cause:p,cache:l}),l.shift()}}function getCachedHistory(n){if(!canAccessLocalStorage())return null;n=normalizePath(n);const t=parseJSON(sessionStorage.getItem("htmx-history-cache"))||[];for(let e=0;e<t.length;e++)if(t[e].url===n)return t[e];return null}function cleanInnerHtmlForHistory(n){const t=htmx.config.requestClass,e=n.cloneNode(!0);return forEach(findAll(e,"."+t),function(i){removeClassFromElement(i,t)}),forEach(findAll(e,"[data-disabled-by-htmx]"),function(i){i.removeAttribute("disabled")}),e.innerHTML}function saveCurrentPageToHistory(){const n=getHistoryElement();let t=currentPathForHistory;canAccessLocalStorage()&&(t=sessionStorage.getItem("htmx-current-path-for-history")),t=t||location.pathname+location.search,getDocument().querySelector('[hx-history="false" i],[data-hx-history="false" i]')||(triggerEvent(getDocument().body,"htmx:beforeHistorySave",{path:t,historyElt:n}),saveToHistoryCache(t,n)),htmx.config.historyEnabled&&history.replaceState({htmx:!0},getDocument().title,location.href)}function pushUrlIntoHistory(n){htmx.config.getCacheBusterParam&&(n=n.replace(/org\.htmx\.cache-buster=[^&]*&?/,""),(endsWith(n,"&")||endsWith(n,"?"))&&(n=n.slice(0,-1))),htmx.config.historyEnabled&&history.pushState({htmx:!0},"",n),setCurrentPathForHistory(n)}function replaceUrlInHistory(n){htmx.config.historyEnabled&&history.replaceState({htmx:!0},"",n),setCurrentPathForHistory(n)}function settleImmediately(n){forEach(n,function(t){t.call(void 0)})}function loadHistoryFromServer(n){const t=new XMLHttpRequest,e={swapStyle:"innerHTML",swapDelay:0,settleDelay:0},i={path:n,xhr:t,historyElt:getHistoryElement(),swapSpec:e};t.open("GET",n,!0),htmx.config.historyRestoreAsHxRequest&&t.setRequestHeader("HX-Request","true"),t.setRequestHeader("HX-History-Restore-Request","true"),t.setRequestHeader("HX-Current-URL",location.href),t.onload=function(){this.status>=200&&this.status<400?(i.response=this.response,triggerEvent(getDocument().body,"htmx:historyCacheMissLoad",i),swap(i.historyElt,i.response,e,{contextElement:i.historyElt,historyRequest:!0}),setCurrentPathForHistory(i.path),triggerEvent(getDocument().body,"htmx:historyRestore",{path:n,cacheMiss:!0,serverResponse:i.response})):triggerErrorEvent(getDocument().body,"htmx:historyCacheMissLoadError",i)},triggerEvent(getDocument().body,"htmx:historyCacheMiss",i)&&t.send()}function restoreHistory(n){saveCurrentPageToHistory(),n=n||location.pathname+location.search;const t=getCachedHistory(n);if(t){const e={swapStyle:"innerHTML",swapDelay:0,settleDelay:0,scroll:t.scroll},i={path:n,item:t,historyElt:getHistoryElement(),swapSpec:e};triggerEvent(getDocument().body,"htmx:historyCacheHit",i)&&(swap(i.historyElt,t.content,e,{contextElement:i.historyElt,title:t.title}),setCurrentPathForHistory(i.path),triggerEvent(getDocument().body,"htmx:historyRestore",i))}else htmx.config.refreshOnHistoryMiss?htmx.location.reload(!0):loadHistoryFromServer(n)}function addRequestIndicatorClasses(n){let t=findAttributeTargets(n,"hx-indicator");return t==null&&(t=[n]),forEach(t,function(e){const i=getInternalData(e);i.requestCount=(i.requestCount||0)+1,e.classList.add.call(e.classList,htmx.config.requestClass)}),t}function disableElements(n){let t=findAttributeTargets(n,"hx-disabled-elt");return t==null&&(t=[]),forEach(t,function(e){const i=getInternalData(e);i.requestCount=(i.requestCount||0)+1,e.setAttribute("disabled",""),e.setAttribute("data-disabled-by-htmx","")}),t}function removeRequestIndicators(n,t){forEach(n.concat(t),function(e){const i=getInternalData(e);i.requestCount=(i.requestCount||1)-1}),forEach(n,function(e){getInternalData(e).requestCount===0&&e.classList.remove.call(e.classList,htmx.config.requestClass)}),forEach(t,function(e){getInternalData(e).requestCount===0&&(e.removeAttribute("disabled"),e.removeAttribute("data-disabled-by-htmx"))})}function haveSeenNode(n,t){for(let e=0;e<n.length;e++)if(n[e].isSameNode(t))return!0;return!1}function shouldInclude(n){const t=n;return t.name===""||t.name==null||t.disabled||closest(t,"fieldset[disabled]")||t.type==="button"||t.type==="submit"||t.tagName==="image"||t.tagName==="reset"||t.tagName==="file"?!1:t.type==="checkbox"||t.type==="radio"?t.checked:!0}function addValueToFormData(n,t,e){n!=null&&t!=null&&(Array.isArray(t)?t.forEach(function(i){e.append(n,i)}):e.append(n,t))}function removeValueFromFormData(n,t,e){if(n!=null&&t!=null){let i=e.getAll(n);Array.isArray(t)?i=i.filter(o=>t.indexOf(o)<0):i=i.filter(o=>o!==t),e.delete(n),forEach(i,o=>e.append(n,o))}}function getValueFromInput(n){return n instanceof HTMLSelectElement&&n.multiple?toArray(n.querySelectorAll("option:checked")).map(function(t){return t.value}):n instanceof HTMLInputElement&&n.files?toArray(n.files):n.value}function processInputValue(n,t,e,i,o){if(!(i==null||haveSeenNode(n,i))){if(n.push(i),shouldInclude(i)){const l=getRawAttribute(i,"name");addValueToFormData(l,getValueFromInput(i),t),o&&validateElement(i,e)}i instanceof HTMLFormElement&&(forEach(i.elements,function(l){n.indexOf(l)>=0?removeValueFromFormData(l.name,getValueFromInput(l),t):n.push(l),o&&validateElement(l,e)}),new FormData(i).forEach(function(l,r){l instanceof File&&l.name===""||addValueToFormData(r,l,t)}))}}function validateElement(n,t){const e=n;e.willValidate&&(triggerEvent(e,"htmx:validation:validate"),e.checkValidity()||(triggerEvent(e,"htmx:validation:failed",{message:e.validationMessage,validity:e.validity})&&!t.length&&htmx.config.reportValidityOfForms&&e.reportValidity(),t.push({elt:e,message:e.validationMessage,validity:e.validity})))}function overrideFormData(n,t){for(const e of t.keys())n.delete(e);return t.forEach(function(e,i){n.append(i,e)}),n}function getInputValues(n,t){const e=[],i=new FormData,o=new FormData,l=[],r=getInternalData(n);r.lastButtonClicked&&!bodyContains(r.lastButtonClicked)&&(r.lastButtonClicked=null);let p=n instanceof HTMLFormElement&&n.noValidate!==!0||getAttributeValue(n,"hx-validate")==="true";if(r.lastButtonClicked&&(p=p&&r.lastButtonClicked.formNoValidate!==!0),t!=="get"&&processInputValue(e,o,l,getRelatedForm(n),p),processInputValue(e,i,l,n,p),r.lastButtonClicked||n.tagName==="BUTTON"||n.tagName==="INPUT"&&getRawAttribute(n,"type")==="submit"){const v=r.lastButtonClicked||n,_=getRawAttribute(v,"name");addValueToFormData(_,v.value,o)}const m=findAttributeTargets(n,"hx-include");return forEach(m,function(v){processInputValue(e,i,l,asElement(v),p),matches(v,"form")||forEach(asParentNode(v).querySelectorAll(INPUT_SELECTOR),function(_){processInputValue(e,i,l,_,p)})}),overrideFormData(i,o),{errors:l,formData:i,values:formDataProxy(i)}}function appendParam(n,t,e){n!==""&&(n+="&"),String(e)==="[object Object]"&&(e=JSON.stringify(e));const i=encodeURIComponent(e);return n+=encodeURIComponent(t)+"="+i,n}function urlEncode(n){n=formDataFromObject(n);let t="";return n.forEach(function(e,i){t=appendParam(t,i,e)}),t}function getHeaders(n,t,e){const i={"HX-Request":"true","HX-Trigger":getRawAttribute(n,"id"),"HX-Trigger-Name":getRawAttribute(n,"name"),"HX-Target":getAttributeValue(t,"id"),"HX-Current-URL":location.href};return getValuesForElement(n,"hx-headers",!1,i),e!==void 0&&(i["HX-Prompt"]=e),getInternalData(n).boosted&&(i["HX-Boosted"]="true"),i}function filterValues(n,t){const e=getClosestAttributeValue(t,"hx-params");if(e){if(e==="none")return new FormData;if(e==="*")return n;if(e.indexOf("not ")===0)return forEach(e.slice(4).split(","),function(i){i=i.trim(),n.delete(i)}),n;{const i=new FormData;return forEach(e.split(","),function(o){o=o.trim(),n.has(o)&&n.getAll(o).forEach(function(l){i.append(o,l)})}),i}}else return n}function isAnchorLink(n){return!!getRawAttribute(n,"href")&&getRawAttribute(n,"href").indexOf("#")>=0}function getSwapSpecification(n,t){const e=t||getClosestAttributeValue(n,"hx-swap"),i={swapStyle:getInternalData(n).boosted?"innerHTML":htmx.config.defaultSwapStyle,swapDelay:htmx.config.defaultSwapDelay,settleDelay:htmx.config.defaultSettleDelay};if(htmx.config.scrollIntoViewOnBoost&&getInternalData(n).boosted&&!isAnchorLink(n)&&(i.show="top"),e){const r=splitOnWhitespace(e);if(r.length>0)for(let p=0;p<r.length;p++){const m=r[p];if(m.indexOf("swap:")===0)i.swapDelay=parseInterval(m.slice(5));else if(m.indexOf("settle:")===0)i.settleDelay=parseInterval(m.slice(7));else if(m.indexOf("transition:")===0)i.transition=m.slice(11)==="true";else if(m.indexOf("ignoreTitle:")===0)i.ignoreTitle=m.slice(12)==="true";else if(m.indexOf("scroll:")===0){var o=m.slice(7).split(":");const _=o.pop();var l=o.length>0?o.join(":"):null;i.scroll=_,i.scrollTarget=l}else if(m.indexOf("show:")===0){var o=m.slice(5).split(":");const b=o.pop();var l=o.length>0?o.join(":"):null;i.show=b,i.showTarget=l}else if(m.indexOf("focus-scroll:")===0){const v=m.slice(13);i.focusScroll=v=="true"}else p==0?i.swapStyle=m:logError("Unknown modifier in hx-swap: "+m)}}return i}function usesFormData(n){return getClosestAttributeValue(n,"hx-encoding")==="multipart/form-data"||matches(n,"form")&&getRawAttribute(n,"enctype")==="multipart/form-data"}function encodeParamsForBody(n,t,e){let i=null;return withExtensions(t,function(o){i==null&&(i=o.encodeParameters(n,e,t))}),i??(usesFormData(t)?overrideFormData(new FormData,formDataFromObject(e)):urlEncode(e))}function makeSettleInfo(n){return{tasks:[],elts:[n]}}function updateScrollState(n,t){const e=n[0],i=n[n.length-1];if(t.scroll){var o=null;t.scrollTarget&&(o=asElement(querySelectorExt(e,t.scrollTarget))),t.scroll==="top"&&(e||o)&&(o=o||e,o.scrollTop=0),t.scroll==="bottom"&&(i||o)&&(o=o||i,o.scrollTop=o.scrollHeight),typeof t.scroll=="number"&&getWindow().setTimeout(function(){window.scrollTo(0,t.scroll)},0)}if(t.show){var o=null;if(t.showTarget){let r=t.showTarget;t.showTarget==="window"&&(r="body"),o=asElement(querySelectorExt(e,r))}t.show==="top"&&(e||o)&&(o=o||e,o.scrollIntoView({block:"start",behavior:htmx.config.scrollBehavior})),t.show==="bottom"&&(i||o)&&(o=o||i,o.scrollIntoView({block:"end",behavior:htmx.config.scrollBehavior}))}}function getValuesForElement(n,t,e,i,o){if(i==null&&(i={}),n==null)return i;const l=getAttributeValue(n,t);if(l){let r=l.trim(),p=e;if(r==="unset")return null;r.indexOf("javascript:")===0?(r=r.slice(11),p=!0):r.indexOf("js:")===0&&(r=r.slice(3),p=!0),r.indexOf("{")!==0&&(r="{"+r+"}");let m;p?m=maybeEval(n,function(){return o?Function("event","return ("+r+")").call(n,o):Function("return ("+r+")").call(n)},{}):m=parseJSON(r);for(const v in m)m.hasOwnProperty(v)&&i[v]==null&&(i[v]=m[v])}return getValuesForElement(asElement(parentElt(n)),t,e,i,o)}function maybeEval(n,t,e){return htmx.config.allowEval?t():(triggerErrorEvent(n,"htmx:evalDisallowedError"),e)}function getHXVarsForElement(n,t,e){return getValuesForElement(n,"hx-vars",!0,e,t)}function getHXValsForElement(n,t,e){return getValuesForElement(n,"hx-vals",!1,e,t)}function getExpressionVars(n,t){return mergeObjects(getHXVarsForElement(n,t),getHXValsForElement(n,t))}function safelySetHeaderValue(n,t,e){if(e!==null)try{n.setRequestHeader(t,e)}catch{n.setRequestHeader(t,encodeURIComponent(e)),n.setRequestHeader(t+"-URI-AutoEncoded","true")}}function getPathFromResponse(n){if(n.responseURL)try{const t=new URL(n.responseURL);return t.pathname+t.search}catch{triggerErrorEvent(getDocument().body,"htmx:badResponseUrl",{url:n.responseURL})}}function hasHeader(n,t){return t.test(n.getAllResponseHeaders())}function ajaxHelper(n,t,e){if(n=n.toLowerCase(),e){if(e instanceof Element||typeof e=="string")return issueAjaxRequest(n,t,null,null,{targetOverride:resolveTarget(e)||DUMMY_ELT,returnPromise:!0});{let i=resolveTarget(e.target);return(e.target&&!i||e.source&&!i&&!resolveTarget(e.source))&&(i=DUMMY_ELT),issueAjaxRequest(n,t,resolveTarget(e.source),e.event,{handler:e.handler,headers:e.headers,values:e.values,targetOverride:i,swapOverride:e.swap,select:e.select,returnPromise:!0,push:e.push,replace:e.replace,selectOOB:e.selectOOB})}}else return issueAjaxRequest(n,t,null,null,{returnPromise:!0})}function hierarchyForElt(n){const t=[];for(;n;)t.push(n),n=n.parentElement;return t}function verifyPath(n,t,e){const i=new URL(t,location.protocol!=="about:"?location.href:window.origin),l=(location.protocol!=="about:"?location.origin:window.origin)===i.origin;return htmx.config.selfRequestsOnly&&!l?!1:triggerEvent(n,"htmx:validateUrl",mergeObjects({url:i,sameHost:l},e))}function formDataFromObject(n){if(n instanceof FormData)return n;const t=new FormData;for(const e in n)n.hasOwnProperty(e)&&(n[e]&&typeof n[e].forEach=="function"?n[e].forEach(function(i){t.append(e,i)}):typeof n[e]=="object"&&!(n[e]instanceof Blob)?t.append(e,JSON.stringify(n[e])):t.append(e,n[e]));return t}function formDataArrayProxy(n,t,e){return new Proxy(e,{get:function(i,o){return typeof o=="number"?i[o]:o==="length"?i.length:o==="push"?function(l){i.push(l),n.append(t,l)}:typeof i[o]=="function"?function(){i[o].apply(i,arguments),n.delete(t),i.forEach(function(l){n.append(t,l)})}:i[o]&&i[o].length===1?i[o][0]:i[o]},set:function(i,o,l){return i[o]=l,n.delete(t),i.forEach(function(r){n.append(t,r)}),!0}})}function formDataProxy(n){return new Proxy(n,{get:function(t,e){if(typeof e=="symbol"){const o=Reflect.get(t,e);return typeof o=="function"?function(){return o.apply(n,arguments)}:o}if(e==="toJSON")return()=>Object.fromEntries(n);if(e in t&&typeof t[e]=="function")return function(){return n[e].apply(n,arguments)};const i=n.getAll(e);if(i.length!==0)return i.length===1?i[0]:formDataArrayProxy(t,e,i)},set:function(t,e,i){return typeof e!="string"?!1:(t.delete(e),i&&typeof i.forEach=="function"?i.forEach(function(o){t.append(e,o)}):typeof i=="object"&&!(i instanceof Blob)?t.append(e,JSON.stringify(i)):t.append(e,i),!0)},deleteProperty:function(t,e){return typeof e=="string"&&t.delete(e),!0},ownKeys:function(t){return Reflect.ownKeys(Object.fromEntries(t))},getOwnPropertyDescriptor:function(t,e){return Reflect.getOwnPropertyDescriptor(Object.fromEntries(t),e)}})}function issueAjaxRequest(n,t,e,i,o,l){let r=null,p=null;if(o=o??{},o.returnPromise&&typeof Promise<"u")var m=new Promise(function(U,z){r=U,p=z});e==null&&(e=getDocument().body);const v=o.handler||handleAjaxResponse,_=o.select||null;if(!bodyContains(e))return maybeCall(r),m;const b=o.targetOverride||asElement(getTarget(e));if(b==null||b==DUMMY_ELT)return triggerErrorEvent(e,"htmx:targetError",{target:getClosestAttributeValue(e,"hx-target")}),maybeCall(p),m;let D=getInternalData(e);const I=D.lastButtonClicked;if(I){const U=getRawAttribute(I,"formaction");U!=null&&(t=U);const z=getRawAttribute(I,"formmethod");if(z!=null)if(VERBS.includes(z.toLowerCase()))n=z;else return maybeCall(r),m}const T=getClosestAttributeValue(e,"hx-confirm");if(l===void 0&&triggerEvent(e,"htmx:confirm",{target:b,elt:e,path:t,verb:n,triggeringEvent:i,etc:o,issueRequest:function(X){return issueAjaxRequest(n,t,e,i,o,!!X)},question:T})===!1)return maybeCall(r),m;let O=e,P=getClosestAttributeValue(e,"hx-sync"),Y=null,B=!1;if(P){const U=P.split(":"),z=U[0].trim();if(z==="this"?O=findThisElement(e,"hx-sync"):O=asElement(querySelectorExt(e,z)),P=(U[1]||"drop").trim(),D=getInternalData(O),P==="drop"&&D.xhr&&D.abortable!==!0)return maybeCall(r),m;if(P==="abort"){if(D.xhr)return maybeCall(r),m;B=!0}else P==="replace"?triggerEvent(O,"htmx:abort"):P.indexOf("queue")===0&&(Y=(P.split(" ")[1]||"last").trim())}if(D.xhr)if(D.abortable)triggerEvent(O,"htmx:abort");else{if(Y==null){if(i){const U=getInternalData(i);U&&U.triggerSpec&&U.triggerSpec.queue&&(Y=U.triggerSpec.queue)}Y==null&&(Y="last")}return D.queuedRequests==null&&(D.queuedRequests=[]),Y==="first"&&D.queuedRequests.length===0?D.queuedRequests.push(function(){issueAjaxRequest(n,t,e,i,o)}):Y==="all"?D.queuedRequests.push(function(){issueAjaxRequest(n,t,e,i,o)}):Y==="last"&&(D.queuedRequests=[],D.queuedRequests.push(function(){issueAjaxRequest(n,t,e,i,o)})),maybeCall(r),m}const j=new XMLHttpRequest;D.xhr=j,D.abortable=B;const S=function(){D.xhr=null,D.abortable=!1,D.queuedRequests!=null&&D.queuedRequests.length>0&&D.queuedRequests.shift()()},ie=getClosestAttributeValue(e,"hx-prompt");if(ie){var oe=prompt(ie);if(oe===null||!triggerEvent(e,"htmx:prompt",{prompt:oe,target:b}))return maybeCall(r),S(),m}if(T&&!l&&!confirm(T))return maybeCall(r),S(),m;let Q=getHeaders(e,b,oe);n!=="get"&&!usesFormData(e)&&(Q["Content-Type"]="application/x-www-form-urlencoded"),o.headers&&(Q=mergeObjects(Q,o.headers));const se=getInputValues(e,n);let Ee=se.errors;const ye=se.formData;o.values&&overrideFormData(ye,formDataFromObject(o.values));const an=formDataFromObject(getExpressionVars(e,i)),_e=overrideFormData(ye,an);let re=filterValues(_e,e);htmx.config.getCacheBusterParam&&n==="get"&&re.set("org.htmx.cache-buster",getRawAttribute(b,"id")||"true"),(t==null||t==="")&&(t=location.href);const Le=getValuesForElement(e,"hx-request"),ke=getInternalData(e).boosted;let Ae=htmx.config.methodsThatUseUrlParams.indexOf(n)>=0;const ee={boosted:ke,useUrlParams:Ae,formData:re,parameters:formDataProxy(re),unfilteredFormData:_e,unfilteredParameters:formDataProxy(_e),headers:Q,elt:e,target:b,verb:n,errors:Ee,withCredentials:o.credentials||Le.credentials||htmx.config.withCredentials,timeout:o.timeout||Le.timeout||htmx.config.timeout,path:t,triggeringEvent:i};if(!triggerEvent(e,"htmx:configRequest",ee))return maybeCall(r),S(),m;if(t=ee.path,n=ee.verb,Q=ee.headers,re=formDataFromObject(ee.parameters),Ee=ee.errors,Ae=ee.useUrlParams,Ee&&Ee.length>0)return triggerEvent(e,"htmx:validation:halted",ee),maybeCall(r),S(),m;const ue=t.split("#"),be=ue[0],Re=ue[1];let J=t;if(Ae&&(J=be,!re.keys().next().done&&(J.indexOf("?")<0?J+="?":J+="&",J+=urlEncode(re),Re&&(J+="#"+Re))),!verifyPath(e,J,ee))return triggerErrorEvent(e,"htmx:invalidPath",ee),maybeCall(p),S(),m;if(j.open(n.toUpperCase(),J,!0),j.overrideMimeType("text/html"),j.withCredentials=ee.withCredentials,j.timeout=ee.timeout,!Le.noHeaders){for(const U in Q)if(Q.hasOwnProperty(U)){const z=Q[U];safelySetHeaderValue(j,U,z)}}const G={xhr:j,target:b,requestConfig:ee,etc:o,boosted:ke,select:_,pathInfo:{requestPath:t,finalRequestPath:J,responsePath:null,anchor:Re}};if(j.onload=function(){try{const U=hierarchyForElt(e);if(G.pathInfo.responsePath=getPathFromResponse(j),v(e,G),G.keepIndicators!==!0&&removeRequestIndicators(de,Te),triggerEvent(e,"htmx:afterRequest",G),triggerEvent(e,"htmx:afterOnLoad",G),!bodyContains(e)){let z=null;for(;U.length>0&&z==null;){const X=U.shift();bodyContains(X)&&(z=X)}z&&(triggerEvent(z,"htmx:afterRequest",G),triggerEvent(z,"htmx:afterOnLoad",G))}maybeCall(r)}catch(U){throw triggerErrorEvent(e,"htmx:onLoadError",mergeObjects({error:U},G)),U}finally{S()}},j.onerror=function(){removeRequestIndicators(de,Te),triggerErrorEvent(e,"htmx:afterRequest",G),triggerErrorEvent(e,"htmx:sendError",G),maybeCall(p),S()},j.onabort=function(){removeRequestIndicators(de,Te),triggerErrorEvent(e,"htmx:afterRequest",G),triggerErrorEvent(e,"htmx:sendAbort",G),maybeCall(p),S()},j.ontimeout=function(){removeRequestIndicators(de,Te),triggerErrorEvent(e,"htmx:afterRequest",G),triggerErrorEvent(e,"htmx:timeout",G),maybeCall(p),S()},!triggerEvent(e,"htmx:beforeRequest",G))return maybeCall(r),S(),m;var de=addRequestIndicatorClasses(e),Te=disableElements(e);forEach(["loadstart","loadend","progress","abort"],function(U){forEach([j,j.upload],function(z){z.addEventListener(U,function(X){triggerEvent(e,"htmx:xhr:"+U,{lengthComputable:X.lengthComputable,loaded:X.loaded,total:X.total})})})}),triggerEvent(e,"htmx:beforeSend",G);const ne=Ae?null:encodeParamsForBody(j,e,re);return j.send(ne),m}function determineHistoryUpdates(n,t){const e=t.xhr;let i=null,o=null;if(hasHeader(e,/HX-Push:/i)?(i=e.getResponseHeader("HX-Push"),o="push"):hasHeader(e,/HX-Push-Url:/i)?(i=e.getResponseHeader("HX-Push-Url"),o="push"):hasHeader(e,/HX-Replace-Url:/i)&&(i=e.getResponseHeader("HX-Replace-Url"),o="replace"),i)return i==="false"?{}:{type:o,path:i};const l=t.pathInfo.finalRequestPath,r=t.pathInfo.responsePath,p=t.etc.push||getClosestAttributeValue(n,"hx-push-url"),m=t.etc.replace||getClosestAttributeValue(n,"hx-replace-url"),v=getInternalData(n).boosted;let _=null,b=null;return p?(_="push",b=p):m?(_="replace",b=m):v&&(_="push",b=r||l),b?b==="false"?{}:(b==="true"&&(b=r||l),t.pathInfo.anchor&&b.indexOf("#")===-1&&(b=b+"#"+t.pathInfo.anchor),{type:_,path:b}):{}}function codeMatches(n,t){var e=new RegExp(n.code);return e.test(t.toString(10))}function resolveResponseHandling(n){for(var t=0;t<htmx.config.responseHandling.length;t++){var e=htmx.config.responseHandling[t];if(codeMatches(e,n.status))return e}return{swap:!1}}function handleTitle(n){if(n){const t=find("title");t?t.textContent=n:window.document.title=n}}function resolveRetarget(n,t){if(t==="this")return n;const e=asElement(querySelectorExt(n,t));if(e==null)throw triggerErrorEvent(n,"htmx:targetError",{target:t}),new Error(`Invalid re-target ${t}`);return e}function handleAjaxResponse(n,t){const e=t.xhr;let i=t.target;const o=t.etc,l=t.select;if(!triggerEvent(n,"htmx:beforeOnLoad",t))return;if(hasHeader(e,/HX-Trigger:/i)&&handleTriggerHeader(e,"HX-Trigger",n),hasHeader(e,/HX-Location:/i)){let B=e.getResponseHeader("HX-Location");var r={};B.indexOf("{")===0&&(r=parseJSON(B),B=r.path,delete r.path),r.push=r.push||"true",ajaxHelper("get",B,r);return}const p=hasHeader(e,/HX-Refresh:/i)&&e.getResponseHeader("HX-Refresh")==="true";if(hasHeader(e,/HX-Redirect:/i)){t.keepIndicators=!0,htmx.location.href=e.getResponseHeader("HX-Redirect"),p&&htmx.location.reload();return}if(p){t.keepIndicators=!0,htmx.location.reload();return}const m=determineHistoryUpdates(n,t),v=resolveResponseHandling(e),_=v.swap;let b=!!v.error,D=htmx.config.ignoreTitle||v.ignoreTitle,I=v.select;v.target&&(t.target=resolveRetarget(n,v.target));var T=o.swapOverride;T==null&&v.swapOverride&&(T=v.swapOverride),hasHeader(e,/HX-Retarget:/i)&&(t.target=resolveRetarget(n,e.getResponseHeader("HX-Retarget"))),hasHeader(e,/HX-Reswap:/i)&&(T=e.getResponseHeader("HX-Reswap"));var O=e.response,P=mergeObjects({shouldSwap:_,serverResponse:O,isError:b,ignoreTitle:D,selectOverride:I,swapOverride:T},t);if(!(v.event&&!triggerEvent(i,v.event,P))&&triggerEvent(i,"htmx:beforeSwap",P)){if(i=P.target,O=P.serverResponse,b=P.isError,D=P.ignoreTitle,I=P.selectOverride,T=P.swapOverride,t.target=i,t.failed=b,t.successful=!b,P.shouldSwap){e.status===286&&cancelPolling(n),withExtensions(n,function(S){O=S.transformResponse(O,e,n)}),m.type&&saveCurrentPageToHistory();var Y=getSwapSpecification(n,T);Y.hasOwnProperty("ignoreTitle")||(Y.ignoreTitle=D),i.classList.add(htmx.config.swappingClass),l&&(I=l),hasHeader(e,/HX-Reselect:/i)&&(I=e.getResponseHeader("HX-Reselect"));const B=o.selectOOB||getClosestAttributeValue(n,"hx-select-oob"),j=getClosestAttributeValue(n,"hx-select");swap(i,O,Y,{select:I==="unset"?null:I||j,selectOOB:B,eventInfo:t,anchor:t.pathInfo.anchor,contextElement:n,afterSwapCallback:function(){if(hasHeader(e,/HX-Trigger-After-Swap:/i)){let S=n;bodyContains(n)||(S=getDocument().body),handleTriggerHeader(e,"HX-Trigger-After-Swap",S)}},afterSettleCallback:function(){if(hasHeader(e,/HX-Trigger-After-Settle:/i)){let S=n;bodyContains(n)||(S=getDocument().body),handleTriggerHeader(e,"HX-Trigger-After-Settle",S)}},beforeSwapCallback:function(){m.type&&(triggerEvent(getDocument().body,"htmx:beforeHistoryUpdate",mergeObjects({history:m},t)),m.type==="push"?(pushUrlIntoHistory(m.path),triggerEvent(getDocument().body,"htmx:pushedIntoHistory",{path:m.path})):(replaceUrlInHistory(m.path),triggerEvent(getDocument().body,"htmx:replacedInHistory",{path:m.path})))}})}b&&triggerErrorEvent(n,"htmx:responseError",mergeObjects({error:"Response Status Error Code "+e.status+" from "+t.pathInfo.requestPath},t))}}const extensions={};function extensionBase(){return{init:function(n){return null},getSelectors:function(){return null},onEvent:function(n,t){return!0},transformResponse:function(n,t,e){return n},isInlineSwap:function(n){return!1},handleSwap:function(n,t,e,i){return!1},encodeParameters:function(n,t,e){return null}}}function defineExtension(n,t){t.init&&t.init(internalAPI),extensions[n]=mergeObjects(extensionBase(),t)}function removeExtension(n){delete extensions[n]}function getExtensions(n,t,e){if(t==null&&(t=[]),n==null)return t;e==null&&(e=[]);const i=getAttributeValue(n,"hx-ext");return i&&forEach(i.split(","),function(o){if(o=o.replace(/ /g,""),o.slice(0,7)=="ignore:"){e.push(o.slice(7));return}if(e.indexOf(o)<0){const l=extensions[o];l&&t.indexOf(l)<0&&t.push(l)}}),getExtensions(asElement(parentElt(n)),t,e)}var isReady=!1;getDocument().addEventListener("DOMContentLoaded",function(){isReady=!0});function ready(n){isReady||getDocument().readyState==="complete"?n():getDocument().addEventListener("DOMContentLoaded",n)}function insertIndicatorStyles(){if(htmx.config.includeIndicatorStyles!==!1){const n=htmx.config.inlineStyleNonce?` nonce="${htmx.config.inlineStyleNonce}"`:"",t=htmx.config.indicatorClass,e=htmx.config.requestClass;getDocument().head.insertAdjacentHTML("beforeend",`<style${n}>.${t}{opacity:0;visibility: hidden} .${e} .${t}, .${e}.${t}{opacity:1;visibility: visible;transition: opacity 200ms ease-in}</style>`)}}function getMetaConfig(){const n=getDocument().querySelector('meta[name="htmx-config"]');return n?parseJSON(n.content):null}function mergeMetaConfig(){const n=getMetaConfig();n&&(htmx.config=mergeObjects(htmx.config,n))}return ready(function(){mergeMetaConfig(),insertIndicatorStyles();let n=getDocument().body;processNode(n);const t=getDocument().querySelectorAll("[hx-trigger='restored'],[data-hx-trigger='restored']");n.addEventListener("htmx:abort",function(i){const o=i.detail.elt||i.target,l=getInternalData(o);l&&l.xhr&&l.xhr.abort()});const e=window.onpopstate?window.onpopstate.bind(window):null;window.onpopstate=function(i){i.state&&i.state.htmx?(restoreHistory(),forEach(t,function(o){triggerEvent(o,"htmx:restored",{document:getDocument(),triggerEvent})})):e&&e(i)},getWindow().setTimeout(function(){triggerEvent(n,"htmx:load",{}),n=null},0)}),htmx})();var HOOKS=["onChange","onClose","onDayCreate","onDestroy","onKeyDown","onMonthChange","onOpen","onParseConfig","onReady","onValueUpdate","onYearChange","onPreCalendarPosition"],defaults={_disable:[],allowInput:!1,allowInvalidPreload:!1,altFormat:"F j, Y",altInput:!1,altInputClass:"form-control input",animate:typeof window=="object"&&window.navigator.userAgent.indexOf("MSIE")===-1,ariaDateFormat:"F j, Y",autoFillDefaultTime:!0,clickOpens:!0,closeOnSelect:!0,conjunction:", ",dateFormat:"Y-m-d",defaultHour:12,defaultMinute:0,defaultSeconds:0,disable:[],disableMobile:!1,enableSeconds:!1,enableTime:!1,errorHandler:function(n){return typeof console<"u"&&console.warn(n)},getWeek:function(n){var t=new Date(n.getTime());t.setHours(0,0,0,0),t.setDate(t.getDate()+3-(t.getDay()+6)%7);var e=new Date(t.getFullYear(),0,4);return 1+Math.round(((t.getTime()-e.getTime())/864e5-3+(e.getDay()+6)%7)/7)},hourIncrement:1,ignoredFocusElements:[],inline:!1,locale:"default",minuteIncrement:5,mode:"single",monthSelectorType:"dropdown",nextArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",noCalendar:!1,now:new Date,onChange:[],onClose:[],onDayCreate:[],onDestroy:[],onKeyDown:[],onMonthChange:[],onOpen:[],onParseConfig:[],onReady:[],onValueUpdate:[],onYearChange:[],onPreCalendarPosition:[],plugins:[],position:"auto",positionElement:void 0,prevArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",shorthandCurrentMonth:!1,showMonths:1,static:!1,time_24hr:!1,weekNumbers:!1,wrap:!1},english={weekdays:{shorthand:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],longhand:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},months:{shorthand:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],longhand:["January","February","March","April","May","June","July","August","September","October","November","December"]},daysInMonth:[31,28,31,30,31,30,31,31,30,31,30,31],firstDayOfWeek:0,ordinal:function(n){var t=n%100;if(t>3&&t<21)return"th";switch(t%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}},rangeSeparator:" to ",weekAbbreviation:"Wk",scrollTitle:"Scroll to increment",toggleTitle:"Click to toggle",amPM:["AM","PM"],yearAriaLabel:"Year",monthAriaLabel:"Month",hourAriaLabel:"Hour",minuteAriaLabel:"Minute",time_24hr:!1},pad=function(n,t){return t===void 0&&(t=2),("000"+n).slice(t*-1)},int=function(n){return n===!0?1:0};function debounce(n,t){var e;return function(){var i=this,o=arguments;clearTimeout(e),e=setTimeout(function(){return n.apply(i,o)},t)}}var arrayify=function(n){return n instanceof Array?n:[n]};function toggleClass(n,t,e){if(e===!0)return n.classList.add(t);n.classList.remove(t)}function createElement(n,t,e){var i=window.document.createElement(n);return t=t||"",e=e||"",i.className=t,e!==void 0&&(i.textContent=e),i}function clearNode(n){for(;n.firstChild;)n.removeChild(n.firstChild)}function findParent(n,t){if(t(n))return n;if(n.parentNode)return findParent(n.parentNode,t)}function createNumberInput(n,t){var e=createElement("div","numInputWrapper"),i=createElement("input","numInput "+n),o=createElement("span","arrowUp"),l=createElement("span","arrowDown");if(navigator.userAgent.indexOf("MSIE 9.0")===-1?i.type="number":(i.type="text",i.pattern="\\d*"),t!==void 0)for(var r in t)i.setAttribute(r,t[r]);return e.appendChild(i),e.appendChild(o),e.appendChild(l),e}function getEventTarget(n){try{if(typeof n.composedPath=="function"){var t=n.composedPath();return t[0]}return n.target}catch{return n.target}}var doNothing=function(){},monthToStr=function(n,t,e){return e.months[t?"shorthand":"longhand"][n]},revFormat={D:doNothing,F:function(n,t,e){n.setMonth(e.months.longhand.indexOf(t))},G:function(n,t){n.setHours((n.getHours()>=12?12:0)+parseFloat(t))},H:function(n,t){n.setHours(parseFloat(t))},J:function(n,t){n.setDate(parseFloat(t))},K:function(n,t,e){n.setHours(n.getHours()%12+12*int(new RegExp(e.amPM[1],"i").test(t)))},M:function(n,t,e){n.setMonth(e.months.shorthand.indexOf(t))},S:function(n,t){n.setSeconds(parseFloat(t))},U:function(n,t){return new Date(parseFloat(t)*1e3)},W:function(n,t,e){var i=parseInt(t),o=new Date(n.getFullYear(),0,2+(i-1)*7,0,0,0,0);return o.setDate(o.getDate()-o.getDay()+e.firstDayOfWeek),o},Y:function(n,t){n.setFullYear(parseFloat(t))},Z:function(n,t){return new Date(t)},d:function(n,t){n.setDate(parseFloat(t))},h:function(n,t){n.setHours((n.getHours()>=12?12:0)+parseFloat(t))},i:function(n,t){n.setMinutes(parseFloat(t))},j:function(n,t){n.setDate(parseFloat(t))},l:doNothing,m:function(n,t){n.setMonth(parseFloat(t)-1)},n:function(n,t){n.setMonth(parseFloat(t)-1)},s:function(n,t){n.setSeconds(parseFloat(t))},u:function(n,t){return new Date(parseFloat(t))},w:doNothing,y:function(n,t){n.setFullYear(2e3+parseFloat(t))}},tokenRegex={D:"",F:"",G:"(\\d\\d|\\d)",H:"(\\d\\d|\\d)",J:"(\\d\\d|\\d)\\w+",K:"",M:"",S:"(\\d\\d|\\d)",U:"(.+)",W:"(\\d\\d|\\d)",Y:"(\\d{4})",Z:"(.+)",d:"(\\d\\d|\\d)",h:"(\\d\\d|\\d)",i:"(\\d\\d|\\d)",j:"(\\d\\d|\\d)",l:"",m:"(\\d\\d|\\d)",n:"(\\d\\d|\\d)",s:"(\\d\\d|\\d)",u:"(.+)",w:"(\\d\\d|\\d)",y:"(\\d{2})"},formats={Z:function(n){return n.toISOString()},D:function(n,t,e){return t.weekdays.shorthand[formats.w(n,t,e)]},F:function(n,t,e){return monthToStr(formats.n(n,t,e)-1,!1,t)},G:function(n,t,e){return pad(formats.h(n,t,e))},H:function(n){return pad(n.getHours())},J:function(n,t){return t.ordinal!==void 0?n.getDate()+t.ordinal(n.getDate()):n.getDate()},K:function(n,t){return t.amPM[int(n.getHours()>11)]},M:function(n,t){return monthToStr(n.getMonth(),!0,t)},S:function(n){return pad(n.getSeconds())},U:function(n){return n.getTime()/1e3},W:function(n,t,e){return e.getWeek(n)},Y:function(n){return pad(n.getFullYear(),4)},d:function(n){return pad(n.getDate())},h:function(n){return n.getHours()%12?n.getHours()%12:12},i:function(n){return pad(n.getMinutes())},j:function(n){return n.getDate()},l:function(n,t){return t.weekdays.longhand[n.getDay()]},m:function(n){return pad(n.getMonth()+1)},n:function(n){return n.getMonth()+1},s:function(n){return n.getSeconds()},u:function(n){return n.getTime()},w:function(n){return n.getDay()},y:function(n){return String(n.getFullYear()).substring(2)}},createDateFormatter=function(n){var t=n.config,e=t===void 0?defaults:t,i=n.l10n,o=i===void 0?english:i,l=n.isMobile,r=l===void 0?!1:l;return function(p,m,v){var _=v||o;return e.formatDate!==void 0&&!r?e.formatDate(p,m,_):m.split("").map(function(b,D,I){return formats[b]&&I[D-1]!=="\\"?formats[b](p,_,e):b!=="\\"?b:""}).join("")}},createDateParser=function(n){var t=n.config,e=t===void 0?defaults:t,i=n.l10n,o=i===void 0?english:i;return function(l,r,p,m){if(!(l!==0&&!l)){var v=m||o,_,b=l;if(l instanceof Date)_=new Date(l.getTime());else if(typeof l!="string"&&l.toFixed!==void 0)_=new Date(l);else if(typeof l=="string"){var D=r||(e||defaults).dateFormat,I=String(l).trim();if(I==="today")_=new Date,p=!0;else if(e&&e.parseDate)_=e.parseDate(l,D);else if(/Z$/.test(I)||/GMT$/.test(I))_=new Date(l);else{for(var T=void 0,O=[],P=0,Y=0,B="";P<D.length;P++){var j=D[P],S=j==="\\",ie=D[P-1]==="\\"||S;if(tokenRegex[j]&&!ie){B+=tokenRegex[j];var oe=new RegExp(B).exec(l);oe&&(T=!0)&&O[j!=="Y"?"push":"unshift"]({fn:revFormat[j],val:oe[++Y]})}else S||(B+=".")}_=!e||!e.noCalendar?new Date(new Date().getFullYear(),0,1,0,0,0,0):new Date(new Date().setHours(0,0,0,0)),O.forEach(function(Q){var se=Q.fn,Ee=Q.val;return _=se(_,Ee,v)||_}),_=T?_:void 0}}if(!(_ instanceof Date&&!isNaN(_.getTime()))){e.errorHandler(new Error("Invalid date provided: "+b));return}return p===!0&&_.setHours(0,0,0,0),_}}};function compareDates(n,t,e){return e===void 0&&(e=!0),e!==!1?new Date(n.getTime()).setHours(0,0,0,0)-new Date(t.getTime()).setHours(0,0,0,0):n.getTime()-t.getTime()}var isBetween=function(n,t,e){return n>Math.min(t,e)&&n<Math.max(t,e)},calculateSecondsSinceMidnight=function(n,t,e){return n*3600+t*60+e},parseSeconds=function(n){var t=Math.floor(n/3600),e=(n-t*3600)/60;return[t,e,n-t*3600-e*60]},duration={DAY:864e5};function getDefaultHours(n){var t=n.defaultHour,e=n.defaultMinute,i=n.defaultSeconds;if(n.minDate!==void 0){var o=n.minDate.getHours(),l=n.minDate.getMinutes(),r=n.minDate.getSeconds();t<o&&(t=o),t===o&&e<l&&(e=l),t===o&&e===l&&i<r&&(i=n.minDate.getSeconds())}if(n.maxDate!==void 0){var p=n.maxDate.getHours(),m=n.maxDate.getMinutes();t=Math.min(t,p),t===p&&(e=Math.min(m,e)),t===p&&e===m&&(i=n.maxDate.getSeconds())}return{hours:t,minutes:e,seconds:i}}typeof Object.assign!="function"&&(Object.assign=function(n){for(var t=[],e=1;e<arguments.length;e++)t[e-1]=arguments[e];if(!n)throw TypeError("Cannot convert undefined or null to object");for(var i=function(p){p&&Object.keys(p).forEach(function(m){return n[m]=p[m]})},o=0,l=t;o<l.length;o++){var r=l[o];i(r)}return n});var __assign=function(){return __assign=Object.assign||function(n){for(var t,e=1,i=arguments.length;e<i;e++){t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},__assign.apply(this,arguments)},__spreadArrays=function(){for(var n=0,t=0,e=arguments.length;t<e;t++)n+=arguments[t].length;for(var i=Array(n),o=0,t=0;t<e;t++)for(var l=arguments[t],r=0,p=l.length;r<p;r++,o++)i[o]=l[r];return i},DEBOUNCED_CHANGE_MS=300;function FlatpickrInstance(n,t){var e={config:__assign(__assign({},defaults),flatpickr.defaultConfig),l10n:english};e.parseDate=createDateParser({config:e.config,l10n:e.l10n}),e._handlers=[],e.pluginElements=[],e.loadedPlugins=[],e._bind=O,e._setHoursFromDate=D,e._positionCalendar=fe,e.changeMonth=J,e.changeYear=z,e.clear=G,e.close=de,e.onMouseOver=Ye,e._createElement=createElement,e.createDay=oe,e.destroy=Te,e.isEnabled=X,e.jumpToDate=B,e.updateValue=he,e.open=Qn,e.redraw=te,e.set=Zn,e.setDate=et,e.toggle=rt;function i(){e.utils={getDaysInMonth:function(u,c){return u===void 0&&(u=e.currentMonth),c===void 0&&(c=e.currentYear),u===1&&(c%4===0&&c%100!==0||c%400===0)?29:e.l10n.daysInMonth[u]}}}function o(){e.element=e.input=n,e.isOpen=!1,Xn(),xe(),nt(),we(),i(),e.isMobile||ie(),Y(),(e.selectedDates.length||e.config.noCalendar)&&(e.config.enableTime&&D(e.config.noCalendar?e.latestSelectedDateObj:void 0),he(!1)),p();var u=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);!e.isMobile&&u&&fe(),K("onReady")}function l(){var u;return((u=e.calendarContainer)===null||u===void 0?void 0:u.getRootNode()).activeElement||document.activeElement}function r(u){return u.bind(e)}function p(){var u=e.config;u.weekNumbers===!1&&u.showMonths===1||u.noCalendar!==!0&&window.requestAnimationFrame(function(){if(e.calendarContainer!==void 0&&(e.calendarContainer.style.visibility="hidden",e.calendarContainer.style.display="block"),e.daysContainer!==void 0){var c=(e.days.offsetWidth+1)*u.showMonths;e.daysContainer.style.width=c+"px",e.calendarContainer.style.width=c+(e.weekWrapper!==void 0?e.weekWrapper.offsetWidth:0)+"px",e.calendarContainer.style.removeProperty("visibility"),e.calendarContainer.style.removeProperty("display")}})}function m(u){if(e.selectedDates.length===0){var c=e.config.minDate===void 0||compareDates(new Date,e.config.minDate)>=0?new Date:new Date(e.config.minDate.getTime()),g=getDefaultHours(e.config);c.setHours(g.hours,g.minutes,g.seconds,c.getMilliseconds()),e.selectedDates=[c],e.latestSelectedDateObj=c}u!==void 0&&u.type!=="blur"&&it(u);var C=e._input.value;b(),he(),e._input.value!==C&&e._debouncedChange()}function v(u,c){return u%12+12*int(c===e.l10n.amPM[1])}function _(u){switch(u%24){case 0:case 12:return 12;default:return u%12}}function b(){if(!(e.hourElement===void 0||e.minuteElement===void 0)){var u=(parseInt(e.hourElement.value.slice(-2),10)||0)%24,c=(parseInt(e.minuteElement.value,10)||0)%60,g=e.secondElement!==void 0?(parseInt(e.secondElement.value,10)||0)%60:0;e.amPM!==void 0&&(u=v(u,e.amPM.textContent));var C=e.config.minTime!==void 0||e.config.minDate&&e.minDateHasTime&&e.latestSelectedDateObj&&compareDates(e.latestSelectedDateObj,e.config.minDate,!0)===0,x=e.config.maxTime!==void 0||e.config.maxDate&&e.maxDateHasTime&&e.latestSelectedDateObj&&compareDates(e.latestSelectedDateObj,e.config.maxDate,!0)===0;if(e.config.maxTime!==void 0&&e.config.minTime!==void 0&&e.config.minTime>e.config.maxTime){var N=calculateSecondsSinceMidnight(e.config.minTime.getHours(),e.config.minTime.getMinutes(),e.config.minTime.getSeconds()),F=calculateSecondsSinceMidnight(e.config.maxTime.getHours(),e.config.maxTime.getMinutes(),e.config.maxTime.getSeconds()),L=calculateSecondsSinceMidnight(u,c,g);if(L>F&&L<N){var H=parseSeconds(N);u=H[0],c=H[1],g=H[2]}}else{if(x){var M=e.config.maxTime!==void 0?e.config.maxTime:e.config.maxDate;u=Math.min(u,M.getHours()),u===M.getHours()&&(c=Math.min(c,M.getMinutes())),c===M.getMinutes()&&(g=Math.min(g,M.getSeconds()))}if(C){var k=e.config.minTime!==void 0?e.config.minTime:e.config.minDate;u=Math.max(u,k.getHours()),u===k.getHours()&&c<k.getMinutes()&&(c=k.getMinutes()),c===k.getMinutes()&&(g=Math.max(g,k.getSeconds()))}}I(u,c,g)}}function D(u){var c=u||e.latestSelectedDateObj;c&&c instanceof Date&&I(c.getHours(),c.getMinutes(),c.getSeconds())}function I(u,c,g){e.latestSelectedDateObj!==void 0&&e.latestSelectedDateObj.setHours(u%24,c,g||0,0),!(!e.hourElement||!e.minuteElement||e.isMobile)&&(e.hourElement.value=pad(e.config.time_24hr?u:(12+u)%12+12*int(u%12===0)),e.minuteElement.value=pad(c),e.amPM!==void 0&&(e.amPM.textContent=e.l10n.amPM[int(u>=12)]),e.secondElement!==void 0&&(e.secondElement.value=pad(g)))}function T(u){var c=getEventTarget(u),g=parseInt(c.value)+(u.delta||0);(g/1e3>1||u.key==="Enter"&&!/[^\d]/.test(g.toString()))&&z(g)}function O(u,c,g,C){if(c instanceof Array)return c.forEach(function(x){return O(u,x,g,C)});if(u instanceof Array)return u.forEach(function(x){return O(x,c,g,C)});u.addEventListener(c,g,C),e._handlers.push({remove:function(){return u.removeEventListener(c,g,C)}})}function P(){K("onChange")}function Y(){if(e.config.wrap&&["open","close","toggle","clear"].forEach(function(g){Array.prototype.forEach.call(e.element.querySelectorAll("[data-"+g+"]"),function(C){return O(C,"click",e[g])})}),e.isMobile){tt();return}var u=debounce(Gn,50);if(e._debouncedChange=debounce(P,DEBOUNCED_CHANGE_MS),e.daysContainer&&!/iPhone|iPad|iPod/i.test(navigator.userAgent)&&O(e.daysContainer,"mouseover",function(g){e.config.mode==="range"&&Ye(getEventTarget(g))}),O(e._input,"keydown",on),e.calendarContainer!==void 0&&O(e.calendarContainer,"keydown",on),!e.config.inline&&!e.config.static&&O(window,"resize",u),window.ontouchstart!==void 0?O(window.document,"touchstart",U):O(window.document,"mousedown",U),O(window.document,"focus",U,{capture:!0}),e.config.clickOpens===!0&&(O(e._input,"focus",e.open),O(e._input,"click",e.open)),e.daysContainer!==void 0&&(O(e.monthNav,"click",Mn),O(e.monthNav,["keyup","increment"],T),O(e.daysContainer,"click",$n)),e.timeContainer!==void 0&&e.minuteElement!==void 0&&e.hourElement!==void 0){var c=function(g){return getEventTarget(g).select()};O(e.timeContainer,["increment"],m),O(e.timeContainer,"blur",m,{capture:!0}),O(e.timeContainer,"click",j),O([e.hourElement,e.minuteElement],["focus","click"],c),e.secondElement!==void 0&&O(e.secondElement,"focus",function(){return e.secondElement&&e.secondElement.select()}),e.amPM!==void 0&&O(e.amPM,"click",function(g){m(g)})}e.config.allowInput&&O(e._input,"blur",Kn)}function B(u,c){var g=u!==void 0?e.parseDate(u):e.latestSelectedDateObj||(e.config.minDate&&e.config.minDate>e.now?e.config.minDate:e.config.maxDate&&e.config.maxDate<e.now?e.config.maxDate:e.now),C=e.currentYear,x=e.currentMonth;try{g!==void 0&&(e.currentYear=g.getFullYear(),e.currentMonth=g.getMonth())}catch(N){N.message="Invalid date supplied: "+g,e.config.errorHandler(N)}c&&e.currentYear!==C&&(K("onYearChange"),re()),c&&(e.currentYear!==C||e.currentMonth!==x)&&K("onMonthChange"),e.redraw()}function j(u){var c=getEventTarget(u);~c.className.indexOf("arrow")&&S(u,c.classList.contains("arrowUp")?1:-1)}function S(u,c,g){var C=u&&getEventTarget(u),x=g||C&&C.parentNode&&C.parentNode.firstChild,N=ln("increment");N.delta=c,x&&x.dispatchEvent(N)}function ie(){var u=window.document.createDocumentFragment();if(e.calendarContainer=createElement("div","flatpickr-calendar"),e.calendarContainer.tabIndex=-1,!e.config.noCalendar){if(u.appendChild(Ae()),e.innerContainer=createElement("div","flatpickr-innerContainer"),e.config.weekNumbers){var c=Re(),g=c.weekWrapper,C=c.weekNumbers;e.innerContainer.appendChild(g),e.weekNumbers=C,e.weekWrapper=g}e.rContainer=createElement("div","flatpickr-rContainer"),e.rContainer.appendChild(ue()),e.daysContainer||(e.daysContainer=createElement("div","flatpickr-days"),e.daysContainer.tabIndex=-1),_e(),e.rContainer.appendChild(e.daysContainer),e.innerContainer.appendChild(e.rContainer),u.appendChild(e.innerContainer)}e.config.enableTime&&u.appendChild(ee()),toggleClass(e.calendarContainer,"rangeMode",e.config.mode==="range"),toggleClass(e.calendarContainer,"animate",e.config.animate===!0),toggleClass(e.calendarContainer,"multiMonth",e.config.showMonths>1),e.calendarContainer.appendChild(u);var x=e.config.appendTo!==void 0&&e.config.appendTo.nodeType!==void 0;if((e.config.inline||e.config.static)&&(e.calendarContainer.classList.add(e.config.inline?"inline":"static"),e.config.inline&&(!x&&e.element.parentNode?e.element.parentNode.insertBefore(e.calendarContainer,e._input.nextSibling):e.config.appendTo!==void 0&&e.config.appendTo.appendChild(e.calendarContainer)),e.config.static)){var N=createElement("div","flatpickr-wrapper");e.element.parentNode&&e.element.parentNode.insertBefore(N,e.element),N.appendChild(e.element),e.altInput&&N.appendChild(e.altInput),N.appendChild(e.calendarContainer)}!e.config.static&&!e.config.inline&&(e.config.appendTo!==void 0?e.config.appendTo:window.document.body).appendChild(e.calendarContainer)}function oe(u,c,g,C){var x=X(c,!0),N=createElement("span",u,c.getDate().toString());return N.dateObj=c,N.$i=C,N.setAttribute("aria-label",e.formatDate(c,e.config.ariaDateFormat)),u.indexOf("hidden")===-1&&compareDates(c,e.now)===0&&(e.todayDateElem=N,N.classList.add("today"),N.setAttribute("aria-current","date")),x?(N.tabIndex=-1,$e(c)&&(N.classList.add("selected"),e.selectedDateElem=N,e.config.mode==="range"&&(toggleClass(N,"startRange",e.selectedDates[0]&&compareDates(c,e.selectedDates[0],!0)===0),toggleClass(N,"endRange",e.selectedDates[1]&&compareDates(c,e.selectedDates[1],!0)===0),u==="nextMonthDay"&&N.classList.add("inRange")))):N.classList.add("flatpickr-disabled"),e.config.mode==="range"&&Qe(c)&&!$e(c)&&N.classList.add("inRange"),e.weekNumbers&&e.config.showMonths===1&&u!=="prevMonthDay"&&C%7===6&&e.weekNumbers.insertAdjacentHTML("beforeend","<span class='flatpickr-day'>"+e.config.getWeek(c)+"</span>"),K("onDayCreate",N),N}function Q(u){u.focus(),e.config.mode==="range"&&Ye(u)}function se(u){for(var c=u>0?0:e.config.showMonths-1,g=u>0?e.config.showMonths:-1,C=c;C!=g;C+=u)for(var x=e.daysContainer.children[C],N=u>0?0:x.children.length-1,F=u>0?x.children.length:-1,L=N;L!=F;L+=u){var H=x.children[L];if(H.className.indexOf("hidden")===-1&&X(H.dateObj))return H}}function Ee(u,c){for(var g=u.className.indexOf("Month")===-1?u.dateObj.getMonth():e.currentMonth,C=c>0?e.config.showMonths:-1,x=c>0?1:-1,N=g-e.currentMonth;N!=C;N+=x)for(var F=e.daysContainer.children[N],L=g-e.currentMonth===N?u.$i+c:c<0?F.children.length-1:0,H=F.children.length,M=L;M>=0&&M<H&&M!=(c>0?H:-1);M+=x){var k=F.children[M];if(k.className.indexOf("hidden")===-1&&X(k.dateObj)&&Math.abs(u.$i-M)>=Math.abs(c))return Q(k)}e.changeMonth(x),ye(se(x),0)}function ye(u,c){var g=l(),C=We(g||document.body),x=u!==void 0?u:C?g:e.selectedDateElem!==void 0&&We(e.selectedDateElem)?e.selectedDateElem:e.todayDateElem!==void 0&&We(e.todayDateElem)?e.todayDateElem:se(c>0?1:-1);x===void 0?e._input.focus():C?Ee(x,c):Q(x)}function an(u,c){for(var g=(new Date(u,c,1).getDay()-e.l10n.firstDayOfWeek+7)%7,C=e.utils.getDaysInMonth((c-1+12)%12,u),x=e.utils.getDaysInMonth(c,u),N=window.document.createDocumentFragment(),F=e.config.showMonths>1,L=F?"prevMonthDay hidden":"prevMonthDay",H=F?"nextMonthDay hidden":"nextMonthDay",M=C+1-g,k=0;M<=C;M++,k++)N.appendChild(oe("flatpickr-day "+L,new Date(u,c-1,M),M,k));for(M=1;M<=x;M++,k++)N.appendChild(oe("flatpickr-day",new Date(u,c,M),M,k));for(var q=x+1;q<=42-g&&(e.config.showMonths===1||k%7!==0);q++,k++)N.appendChild(oe("flatpickr-day "+H,new Date(u,c+1,q%x),q,k));var ce=createElement("div","dayContainer");return ce.appendChild(N),ce}function _e(){if(e.daysContainer!==void 0){clearNode(e.daysContainer),e.weekNumbers&&clearNode(e.weekNumbers);for(var u=document.createDocumentFragment(),c=0;c<e.config.showMonths;c++){var g=new Date(e.currentYear,e.currentMonth,1);g.setMonth(e.currentMonth+c),u.appendChild(an(g.getFullYear(),g.getMonth()))}e.daysContainer.appendChild(u),e.days=e.daysContainer.firstChild,e.config.mode==="range"&&e.selectedDates.length===1&&Ye()}}function re(){if(!(e.config.showMonths>1||e.config.monthSelectorType!=="dropdown")){var u=function(C){return e.config.minDate!==void 0&&e.currentYear===e.config.minDate.getFullYear()&&C<e.config.minDate.getMonth()?!1:!(e.config.maxDate!==void 0&&e.currentYear===e.config.maxDate.getFullYear()&&C>e.config.maxDate.getMonth())};e.monthsDropdownContainer.tabIndex=-1,e.monthsDropdownContainer.innerHTML="";for(var c=0;c<12;c++)if(u(c)){var g=createElement("option","flatpickr-monthDropdown-month");g.value=new Date(e.currentYear,c).getMonth().toString(),g.textContent=monthToStr(c,e.config.shorthandCurrentMonth,e.l10n),g.tabIndex=-1,e.currentMonth===c&&(g.selected=!0),e.monthsDropdownContainer.appendChild(g)}}}function Le(){var u=createElement("div","flatpickr-month"),c=window.document.createDocumentFragment(),g;e.config.showMonths>1||e.config.monthSelectorType==="static"?g=createElement("span","cur-month"):(e.monthsDropdownContainer=createElement("select","flatpickr-monthDropdown-months"),e.monthsDropdownContainer.setAttribute("aria-label",e.l10n.monthAriaLabel),O(e.monthsDropdownContainer,"change",function(F){var L=getEventTarget(F),H=parseInt(L.value,10);e.changeMonth(H-e.currentMonth),K("onMonthChange")}),re(),g=e.monthsDropdownContainer);var C=createNumberInput("cur-year",{tabindex:"-1"}),x=C.getElementsByTagName("input")[0];x.setAttribute("aria-label",e.l10n.yearAriaLabel),e.config.minDate&&x.setAttribute("min",e.config.minDate.getFullYear().toString()),e.config.maxDate&&(x.setAttribute("max",e.config.maxDate.getFullYear().toString()),x.disabled=!!e.config.minDate&&e.config.minDate.getFullYear()===e.config.maxDate.getFullYear());var N=createElement("div","flatpickr-current-month");return N.appendChild(g),N.appendChild(C),c.appendChild(N),u.appendChild(c),{container:u,yearElement:x,monthElement:g}}function ke(){clearNode(e.monthNav),e.monthNav.appendChild(e.prevMonthNav),e.config.showMonths&&(e.yearElements=[],e.monthElements=[]);for(var u=e.config.showMonths;u--;){var c=Le();e.yearElements.push(c.yearElement),e.monthElements.push(c.monthElement),e.monthNav.appendChild(c.container)}e.monthNav.appendChild(e.nextMonthNav)}function Ae(){return e.monthNav=createElement("div","flatpickr-months"),e.yearElements=[],e.monthElements=[],e.prevMonthNav=createElement("span","flatpickr-prev-month"),e.prevMonthNav.innerHTML=e.config.prevArrow,e.nextMonthNav=createElement("span","flatpickr-next-month"),e.nextMonthNav.innerHTML=e.config.nextArrow,ke(),Object.defineProperty(e,"_hidePrevMonthArrow",{get:function(){return e.__hidePrevMonthArrow},set:function(u){e.__hidePrevMonthArrow!==u&&(toggleClass(e.prevMonthNav,"flatpickr-disabled",u),e.__hidePrevMonthArrow=u)}}),Object.defineProperty(e,"_hideNextMonthArrow",{get:function(){return e.__hideNextMonthArrow},set:function(u){e.__hideNextMonthArrow!==u&&(toggleClass(e.nextMonthNav,"flatpickr-disabled",u),e.__hideNextMonthArrow=u)}}),e.currentYearElement=e.yearElements[0],Xe(),e.monthNav}function ee(){e.calendarContainer.classList.add("hasTime"),e.config.noCalendar&&e.calendarContainer.classList.add("noCalendar");var u=getDefaultHours(e.config);e.timeContainer=createElement("div","flatpickr-time"),e.timeContainer.tabIndex=-1;var c=createElement("span","flatpickr-time-separator",":"),g=createNumberInput("flatpickr-hour",{"aria-label":e.l10n.hourAriaLabel});e.hourElement=g.getElementsByTagName("input")[0];var C=createNumberInput("flatpickr-minute",{"aria-label":e.l10n.minuteAriaLabel});if(e.minuteElement=C.getElementsByTagName("input")[0],e.hourElement.tabIndex=e.minuteElement.tabIndex=-1,e.hourElement.value=pad(e.latestSelectedDateObj?e.latestSelectedDateObj.getHours():e.config.time_24hr?u.hours:_(u.hours)),e.minuteElement.value=pad(e.latestSelectedDateObj?e.latestSelectedDateObj.getMinutes():u.minutes),e.hourElement.setAttribute("step",e.config.hourIncrement.toString()),e.minuteElement.setAttribute("step",e.config.minuteIncrement.toString()),e.hourElement.setAttribute("min",e.config.time_24hr?"0":"1"),e.hourElement.setAttribute("max",e.config.time_24hr?"23":"12"),e.hourElement.setAttribute("maxlength","2"),e.minuteElement.setAttribute("min","0"),e.minuteElement.setAttribute("max","59"),e.minuteElement.setAttribute("maxlength","2"),e.timeContainer.appendChild(g),e.timeContainer.appendChild(c),e.timeContainer.appendChild(C),e.config.time_24hr&&e.timeContainer.classList.add("time24hr"),e.config.enableSeconds){e.timeContainer.classList.add("hasSeconds");var x=createNumberInput("flatpickr-second");e.secondElement=x.getElementsByTagName("input")[0],e.secondElement.value=pad(e.latestSelectedDateObj?e.latestSelectedDateObj.getSeconds():u.seconds),e.secondElement.setAttribute("step",e.minuteElement.getAttribute("step")),e.secondElement.setAttribute("min","0"),e.secondElement.setAttribute("max","59"),e.secondElement.setAttribute("maxlength","2"),e.timeContainer.appendChild(createElement("span","flatpickr-time-separator",":")),e.timeContainer.appendChild(x)}return e.config.time_24hr||(e.amPM=createElement("span","flatpickr-am-pm",e.l10n.amPM[int((e.latestSelectedDateObj?e.hourElement.value:e.config.defaultHour)>11)]),e.amPM.title=e.l10n.toggleTitle,e.amPM.tabIndex=-1,e.timeContainer.appendChild(e.amPM)),e.timeContainer}function ue(){e.weekdayContainer?clearNode(e.weekdayContainer):e.weekdayContainer=createElement("div","flatpickr-weekdays");for(var u=e.config.showMonths;u--;){var c=createElement("div","flatpickr-weekdaycontainer");e.weekdayContainer.appendChild(c)}return be(),e.weekdayContainer}function be(){if(e.weekdayContainer){var u=e.l10n.firstDayOfWeek,c=__spreadArrays(e.l10n.weekdays.shorthand);u>0&&u<c.length&&(c=__spreadArrays(c.splice(u,c.length),c.splice(0,u)));for(var g=e.config.showMonths;g--;)e.weekdayContainer.children[g].innerHTML=`
      <span class='flatpickr-weekday'>
        `+c.join("</span><span class='flatpickr-weekday'>")+`
      </span>
      `}}function Re(){e.calendarContainer.classList.add("hasWeeks");var u=createElement("div","flatpickr-weekwrapper");u.appendChild(createElement("span","flatpickr-weekday",e.l10n.weekAbbreviation));var c=createElement("div","flatpickr-weeks");return u.appendChild(c),{weekWrapper:u,weekNumbers:c}}function J(u,c){c===void 0&&(c=!0);var g=c?u:u-e.currentMonth;g<0&&e._hidePrevMonthArrow===!0||g>0&&e._hideNextMonthArrow===!0||(e.currentMonth+=g,(e.currentMonth<0||e.currentMonth>11)&&(e.currentYear+=e.currentMonth>11?1:-1,e.currentMonth=(e.currentMonth+12)%12,K("onYearChange"),re()),_e(),K("onMonthChange"),Xe())}function G(u,c){if(u===void 0&&(u=!0),c===void 0&&(c=!0),e.input.value="",e.altInput!==void 0&&(e.altInput.value=""),e.mobileInput!==void 0&&(e.mobileInput.value=""),e.selectedDates=[],e.latestSelectedDateObj=void 0,c===!0&&(e.currentYear=e._initialDate.getFullYear(),e.currentMonth=e._initialDate.getMonth()),e.config.enableTime===!0){var g=getDefaultHours(e.config),C=g.hours,x=g.minutes,N=g.seconds;I(C,x,N)}e.redraw(),u&&K("onChange")}function de(){e.isOpen=!1,e.isMobile||(e.calendarContainer!==void 0&&e.calendarContainer.classList.remove("open"),e._input!==void 0&&e._input.classList.remove("active")),K("onClose")}function Te(){e.config!==void 0&&K("onDestroy");for(var u=e._handlers.length;u--;)e._handlers[u].remove();if(e._handlers=[],e.mobileInput)e.mobileInput.parentNode&&e.mobileInput.parentNode.removeChild(e.mobileInput),e.mobileInput=void 0;else if(e.calendarContainer&&e.calendarContainer.parentNode)if(e.config.static&&e.calendarContainer.parentNode){var c=e.calendarContainer.parentNode;if(c.lastChild&&c.removeChild(c.lastChild),c.parentNode){for(;c.firstChild;)c.parentNode.insertBefore(c.firstChild,c);c.parentNode.removeChild(c)}}else e.calendarContainer.parentNode.removeChild(e.calendarContainer);e.altInput&&(e.input.type="text",e.altInput.parentNode&&e.altInput.parentNode.removeChild(e.altInput),delete e.altInput),e.input&&(e.input.type=e.input._type,e.input.classList.remove("flatpickr-input"),e.input.removeAttribute("readonly")),["_showTimeInput","latestSelectedDateObj","_hideNextMonthArrow","_hidePrevMonthArrow","__hideNextMonthArrow","__hidePrevMonthArrow","isMobile","isOpen","selectedDateElem","minDateHasTime","maxDateHasTime","days","daysContainer","_input","_positionElement","innerContainer","rContainer","monthNav","todayDateElem","calendarContainer","weekdayContainer","prevMonthNav","nextMonthNav","monthsDropdownContainer","currentMonthElement","currentYearElement","navigationCurrentMonth","selectedDateElem","config"].forEach(function(g){try{delete e[g]}catch{}})}function ne(u){return e.calendarContainer.contains(u)}function U(u){if(e.isOpen&&!e.config.inline){var c=getEventTarget(u),g=ne(c),C=c===e.input||c===e.altInput||e.element.contains(c)||u.path&&u.path.indexOf&&(~u.path.indexOf(e.input)||~u.path.indexOf(e.altInput)),x=!C&&!g&&!ne(u.relatedTarget),N=!e.config.ignoredFocusElements.some(function(F){return F.contains(c)});x&&N&&(e.config.allowInput&&e.setDate(e._input.value,!1,e.config.altInput?e.config.altFormat:e.config.dateFormat),e.timeContainer!==void 0&&e.minuteElement!==void 0&&e.hourElement!==void 0&&e.input.value!==""&&e.input.value!==void 0&&m(),e.close(),e.config&&e.config.mode==="range"&&e.selectedDates.length===1&&e.clear(!1))}}function z(u){if(!(!u||e.config.minDate&&u<e.config.minDate.getFullYear()||e.config.maxDate&&u>e.config.maxDate.getFullYear())){var c=u,g=e.currentYear!==c;e.currentYear=c||e.currentYear,e.config.maxDate&&e.currentYear===e.config.maxDate.getFullYear()?e.currentMonth=Math.min(e.config.maxDate.getMonth(),e.currentMonth):e.config.minDate&&e.currentYear===e.config.minDate.getFullYear()&&(e.currentMonth=Math.max(e.config.minDate.getMonth(),e.currentMonth)),g&&(e.redraw(),K("onYearChange"),re())}}function X(u,c){var g;c===void 0&&(c=!0);var C=e.parseDate(u,void 0,c);if(e.config.minDate&&C&&compareDates(C,e.config.minDate,c!==void 0?c:!e.minDateHasTime)<0||e.config.maxDate&&C&&compareDates(C,e.config.maxDate,c!==void 0?c:!e.maxDateHasTime)>0)return!1;if(!e.config.enable&&e.config.disable.length===0)return!0;if(C===void 0)return!1;for(var x=!!e.config.enable,N=(g=e.config.enable)!==null&&g!==void 0?g:e.config.disable,F=0,L=void 0;F<N.length;F++){if(L=N[F],typeof L=="function"&&L(C))return x;if(L instanceof Date&&C!==void 0&&L.getTime()===C.getTime())return x;if(typeof L=="string"){var H=e.parseDate(L,void 0,!0);return H&&H.getTime()===C.getTime()?x:!x}else if(typeof L=="object"&&C!==void 0&&L.from&&L.to&&C.getTime()>=L.from.getTime()&&C.getTime()<=L.to.getTime())return x}return!x}function We(u){return e.daysContainer!==void 0?u.className.indexOf("hidden")===-1&&u.className.indexOf("flatpickr-disabled")===-1&&e.daysContainer.contains(u):!1}function Kn(u){var c=u.target===e._input,g=e._input.value.trimEnd()!==un();c&&g&&!(u.relatedTarget&&ne(u.relatedTarget))&&e.setDate(e._input.value,!0,u.target===e.altInput?e.config.altFormat:e.config.dateFormat)}function on(u){var c=getEventTarget(u),g=e.config.wrap?n.contains(c):c===e._input,C=e.config.allowInput,x=e.isOpen&&(!C||!g),N=e.config.inline&&g&&!C;if(u.keyCode===13&&g){if(C)return e.setDate(e._input.value,!0,c===e.altInput?e.config.altFormat:e.config.dateFormat),e.close(),c.blur();e.open()}else if(ne(c)||x||N){var F=!!e.timeContainer&&e.timeContainer.contains(c);switch(u.keyCode){case 13:F?(u.preventDefault(),m(),Ke()):$n(u);break;case 27:u.preventDefault(),Ke();break;case 8:case 46:g&&!e.config.allowInput&&(u.preventDefault(),e.clear());break;case 37:case 39:if(!F&&!g){u.preventDefault();var L=l();if(e.daysContainer!==void 0&&(C===!1||L&&We(L))){var H=u.keyCode===39?1:-1;u.ctrlKey?(u.stopPropagation(),J(H),ye(se(1),0)):ye(void 0,H)}}else e.hourElement&&e.hourElement.focus();break;case 38:case 40:u.preventDefault();var M=u.keyCode===40?1:-1;e.daysContainer&&c.$i!==void 0||c===e.input||c===e.altInput?u.ctrlKey?(u.stopPropagation(),z(e.currentYear-M),ye(se(1),0)):F||ye(void 0,M*7):c===e.currentYearElement?z(e.currentYear-M):e.config.enableTime&&(!F&&e.hourElement&&e.hourElement.focus(),m(u),e._debouncedChange());break;case 9:if(F){var k=[e.hourElement,e.minuteElement,e.secondElement,e.amPM].concat(e.pluginElements).filter(function(ae){return ae}),q=k.indexOf(c);if(q!==-1){var ce=k[q+(u.shiftKey?-1:1)];u.preventDefault(),(ce||e._input).focus()}}else!e.config.noCalendar&&e.daysContainer&&e.daysContainer.contains(c)&&u.shiftKey&&(u.preventDefault(),e._input.focus());break}}if(e.amPM!==void 0&&c===e.amPM)switch(u.key){case e.l10n.amPM[0].charAt(0):case e.l10n.amPM[0].charAt(0).toLowerCase():e.amPM.textContent=e.l10n.amPM[0],b(),he();break;case e.l10n.amPM[1].charAt(0):case e.l10n.amPM[1].charAt(0).toLowerCase():e.amPM.textContent=e.l10n.amPM[1],b(),he();break}(g||ne(c))&&K("onKeyDown",u)}function Ye(u,c){if(c===void 0&&(c="flatpickr-day"),!(e.selectedDates.length!==1||u&&(!u.classList.contains(c)||u.classList.contains("flatpickr-disabled")))){for(var g=u?u.dateObj.getTime():e.days.firstElementChild.dateObj.getTime(),C=e.parseDate(e.selectedDates[0],void 0,!0).getTime(),x=Math.min(g,e.selectedDates[0].getTime()),N=Math.max(g,e.selectedDates[0].getTime()),F=!1,L=0,H=0,M=x;M<N;M+=duration.DAY)X(new Date(M),!0)||(F=F||M>x&&M<N,M<C&&(!L||M>L)?L=M:M>C&&(!H||M<H)&&(H=M));var k=Array.from(e.rContainer.querySelectorAll("*:nth-child(-n+"+e.config.showMonths+") > ."+c));k.forEach(function(q){var ce=q.dateObj,ae=ce.getTime(),Fe=L>0&&ae<L||H>0&&ae>H;if(Fe){q.classList.add("notAllowed"),["inRange","startRange","endRange"].forEach(function(Oe){q.classList.remove(Oe)});return}else if(F&&!Fe)return;["startRange","inRange","endRange","notAllowed"].forEach(function(Oe){q.classList.remove(Oe)}),u!==void 0&&(u.classList.add(g<=e.selectedDates[0].getTime()?"startRange":"endRange"),C<g&&ae===C?q.classList.add("startRange"):C>g&&ae===C&&q.classList.add("endRange"),ae>=L&&(H===0||ae<=H)&&isBetween(ae,C,g)&&q.classList.add("inRange"))})}}function Gn(){e.isOpen&&!e.config.static&&!e.config.inline&&fe()}function Qn(u,c){if(c===void 0&&(c=e._positionElement),e.isMobile===!0){if(u){u.preventDefault();var g=getEventTarget(u);g&&g.blur()}e.mobileInput!==void 0&&(e.mobileInput.focus(),e.mobileInput.click()),K("onOpen");return}else if(e._input.disabled||e.config.inline)return;var C=e.isOpen;e.isOpen=!0,C||(e.calendarContainer.classList.add("open"),e._input.classList.add("active"),K("onOpen"),fe(c)),e.config.enableTime===!0&&e.config.noCalendar===!0&&e.config.allowInput===!1&&(u===void 0||!e.timeContainer.contains(u.relatedTarget))&&setTimeout(function(){return e.hourElement.select()},50)}function ze(u){return function(c){var g=e.config["_"+u+"Date"]=e.parseDate(c,e.config.dateFormat),C=e.config["_"+(u==="min"?"max":"min")+"Date"];g!==void 0&&(e[u==="min"?"minDateHasTime":"maxDateHasTime"]=g.getHours()>0||g.getMinutes()>0||g.getSeconds()>0),e.selectedDates&&(e.selectedDates=e.selectedDates.filter(function(x){return X(x)}),!e.selectedDates.length&&u==="min"&&D(g),he()),e.daysContainer&&(te(),g!==void 0?e.currentYearElement[u]=g.getFullYear().toString():e.currentYearElement.removeAttribute(u),e.currentYearElement.disabled=!!C&&g!==void 0&&C.getFullYear()===g.getFullYear())}}function Xn(){var u=["wrap","weekNumbers","allowInput","allowInvalidPreload","clickOpens","time_24hr","enableTime","noCalendar","altInput","shorthandCurrentMonth","inline","static","enableSeconds","disableMobile"],c=__assign(__assign({},JSON.parse(JSON.stringify(n.dataset||{}))),t),g={};e.config.parseDate=c.parseDate,e.config.formatDate=c.formatDate,Object.defineProperty(e.config,"enable",{get:function(){return e.config._enable},set:function(k){e.config._enable=In(k)}}),Object.defineProperty(e.config,"disable",{get:function(){return e.config._disable},set:function(k){e.config._disable=In(k)}});var C=c.mode==="time";if(!c.dateFormat&&(c.enableTime||C)){var x=flatpickr.defaultConfig.dateFormat||defaults.dateFormat;g.dateFormat=c.noCalendar||C?"H:i"+(c.enableSeconds?":S":""):x+" H:i"+(c.enableSeconds?":S":"")}if(c.altInput&&(c.enableTime||C)&&!c.altFormat){var N=flatpickr.defaultConfig.altFormat||defaults.altFormat;g.altFormat=c.noCalendar||C?"h:i"+(c.enableSeconds?":S K":" K"):N+(" h:i"+(c.enableSeconds?":S":"")+" K")}Object.defineProperty(e.config,"minDate",{get:function(){return e.config._minDate},set:ze("min")}),Object.defineProperty(e.config,"maxDate",{get:function(){return e.config._maxDate},set:ze("max")});var F=function(k){return function(q){e.config[k==="min"?"_minTime":"_maxTime"]=e.parseDate(q,"H:i:S")}};Object.defineProperty(e.config,"minTime",{get:function(){return e.config._minTime},set:F("min")}),Object.defineProperty(e.config,"maxTime",{get:function(){return e.config._maxTime},set:F("max")}),c.mode==="time"&&(e.config.noCalendar=!0,e.config.enableTime=!0),Object.assign(e.config,g,c);for(var L=0;L<u.length;L++)e.config[u[L]]=e.config[u[L]]===!0||e.config[u[L]]==="true";HOOKS.filter(function(k){return e.config[k]!==void 0}).forEach(function(k){e.config[k]=arrayify(e.config[k]||[]).map(r)}),e.isMobile=!e.config.disableMobile&&!e.config.inline&&e.config.mode==="single"&&!e.config.disable.length&&!e.config.enable&&!e.config.weekNumbers&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);for(var L=0;L<e.config.plugins.length;L++){var H=e.config.plugins[L](e)||{};for(var M in H)HOOKS.indexOf(M)>-1?e.config[M]=arrayify(H[M]).map(r).concat(e.config[M]):typeof c[M]>"u"&&(e.config[M]=H[M])}c.altInputClass||(e.config.altInputClass=sn().className+" "+e.config.altInputClass),K("onParseConfig")}function sn(){return e.config.wrap?n.querySelector("[data-input]"):n}function xe(){typeof e.config.locale!="object"&&typeof flatpickr.l10ns[e.config.locale]>"u"&&e.config.errorHandler(new Error("flatpickr: invalid locale "+e.config.locale)),e.l10n=__assign(__assign({},flatpickr.l10ns.default),typeof e.config.locale=="object"?e.config.locale:e.config.locale!=="default"?flatpickr.l10ns[e.config.locale]:void 0),tokenRegex.D="("+e.l10n.weekdays.shorthand.join("|")+")",tokenRegex.l="("+e.l10n.weekdays.longhand.join("|")+")",tokenRegex.M="("+e.l10n.months.shorthand.join("|")+")",tokenRegex.F="("+e.l10n.months.longhand.join("|")+")",tokenRegex.K="("+e.l10n.amPM[0]+"|"+e.l10n.amPM[1]+"|"+e.l10n.amPM[0].toLowerCase()+"|"+e.l10n.amPM[1].toLowerCase()+")";var u=__assign(__assign({},t),JSON.parse(JSON.stringify(n.dataset||{})));u.time_24hr===void 0&&flatpickr.defaultConfig.time_24hr===void 0&&(e.config.time_24hr=e.l10n.time_24hr),e.formatDate=createDateFormatter(e),e.parseDate=createDateParser({config:e.config,l10n:e.l10n})}function fe(u){if(typeof e.config.position=="function")return void e.config.position(e,u);if(e.calendarContainer!==void 0){K("onPreCalendarPosition");var c=u||e._positionElement,g=Array.prototype.reduce.call(e.calendarContainer.children,(function(Se,He){return Se+He.offsetHeight}),0),C=e.calendarContainer.offsetWidth,x=e.config.position.split(" "),N=x[0],F=x.length>1?x[1]:null,L=c.getBoundingClientRect(),H=window.innerHeight-L.bottom,M=N==="above"||N!=="below"&&H<g&&L.top>g,k=window.pageYOffset+L.top+(M?-g-2:c.offsetHeight+2);if(toggleClass(e.calendarContainer,"arrowTop",!M),toggleClass(e.calendarContainer,"arrowBottom",M),!e.config.inline){var q=window.pageXOffset+L.left,ce=!1,ae=!1;F==="center"?(q-=(C-L.width)/2,ce=!0):F==="right"&&(q-=C-L.width,ae=!0),toggleClass(e.calendarContainer,"arrowLeft",!ce&&!ae),toggleClass(e.calendarContainer,"arrowCenter",ce),toggleClass(e.calendarContainer,"arrowRight",ae);var Fe=window.document.body.offsetWidth-(window.pageXOffset+L.right),Oe=q+C>window.document.body.offsetWidth,at=Fe+C>window.document.body.offsetWidth;if(toggleClass(e.calendarContainer,"rightMost",Oe),!e.config.static)if(e.calendarContainer.style.top=k+"px",!Oe)e.calendarContainer.style.left=q+"px",e.calendarContainer.style.right="auto";else if(!at)e.calendarContainer.style.left="auto",e.calendarContainer.style.right=Fe+"px";else{var cn=Jn();if(cn===void 0)return;var dn=window.document.body.offsetWidth,ot=Math.max(0,dn/2-C/2),Ln=".flatpickr-calendar.centerMost:before",Ie=".flatpickr-calendar.centerMost:after",Ne=cn.cssRules.length,st="{left:"+L.left+"px;right:auto;}";toggleClass(e.calendarContainer,"rightMost",!1),toggleClass(e.calendarContainer,"centerMost",!0),cn.insertRule(Ln+","+Ie+st,Ne),e.calendarContainer.style.left=ot+"px",e.calendarContainer.style.right="auto"}}}}function Jn(){for(var u=null,c=0;c<document.styleSheets.length;c++){var g=document.styleSheets[c];if(g.cssRules){try{g.cssRules}catch{continue}u=g;break}}return u??Pe()}function Pe(){var u=document.createElement("style");return document.head.appendChild(u),u.sheet}function te(){e.config.noCalendar||e.isMobile||(re(),Xe(),_e())}function Ke(){e._input.focus(),window.navigator.userAgent.indexOf("MSIE")!==-1||navigator.msMaxTouchPoints!==void 0?setTimeout(e.close,0):e.close()}function $n(u){u.preventDefault(),u.stopPropagation();var c=function(k){return k.classList&&k.classList.contains("flatpickr-day")&&!k.classList.contains("flatpickr-disabled")&&!k.classList.contains("notAllowed")},g=findParent(getEventTarget(u),c);if(g!==void 0){var C=g,x=e.latestSelectedDateObj=new Date(C.dateObj.getTime()),N=(x.getMonth()<e.currentMonth||x.getMonth()>e.currentMonth+e.config.showMonths-1)&&e.config.mode!=="range";if(e.selectedDateElem=C,e.config.mode==="single")e.selectedDates=[x];else if(e.config.mode==="multiple"){var F=$e(x);F?e.selectedDates.splice(parseInt(F),1):e.selectedDates.push(x)}else e.config.mode==="range"&&(e.selectedDates.length===2&&e.clear(!1,!1),e.latestSelectedDateObj=x,e.selectedDates.push(x),compareDates(x,e.selectedDates[0],!0)!==0&&e.selectedDates.sort(function(k,q){return k.getTime()-q.getTime()}));if(b(),N){var L=e.currentYear!==x.getFullYear();e.currentYear=x.getFullYear(),e.currentMonth=x.getMonth(),L&&(K("onYearChange"),re()),K("onMonthChange")}if(Xe(),_e(),he(),!N&&e.config.mode!=="range"&&e.config.showMonths===1?Q(C):e.selectedDateElem!==void 0&&e.hourElement===void 0&&e.selectedDateElem&&e.selectedDateElem.focus(),e.hourElement!==void 0&&e.hourElement!==void 0&&e.hourElement.focus(),e.config.closeOnSelect){var H=e.config.mode==="single"&&!e.config.enableTime,M=e.config.mode==="range"&&e.selectedDates.length===2&&!e.config.enableTime;(H||M)&&Ke()}P()}}var Ge={locale:[xe,be],showMonths:[ke,p,ue],minDate:[B],maxDate:[B],positionElement:[Nn],clickOpens:[function(){e.config.clickOpens===!0?(O(e._input,"focus",e.open),O(e._input,"click",e.open)):(e._input.removeEventListener("focus",e.open),e._input.removeEventListener("click",e.open))}]};function Zn(u,c){if(u!==null&&typeof u=="object"){Object.assign(e.config,u);for(var g in u)Ge[g]!==void 0&&Ge[g].forEach(function(C){return C()})}else e.config[u]=c,Ge[u]!==void 0?Ge[u].forEach(function(C){return C()}):HOOKS.indexOf(u)>-1&&(e.config[u]=arrayify(c));e.redraw(),he(!0)}function On(u,c){var g=[];if(u instanceof Array)g=u.map(function(C){return e.parseDate(C,c)});else if(u instanceof Date||typeof u=="number")g=[e.parseDate(u,c)];else if(typeof u=="string")switch(e.config.mode){case"single":case"time":g=[e.parseDate(u,c)];break;case"multiple":g=u.split(e.config.conjunction).map(function(C){return e.parseDate(C,c)});break;case"range":g=u.split(e.l10n.rangeSeparator).map(function(C){return e.parseDate(C,c)});break}else e.config.errorHandler(new Error("Invalid date supplied: "+JSON.stringify(u)));e.selectedDates=e.config.allowInvalidPreload?g:g.filter(function(C){return C instanceof Date&&X(C,!1)}),e.config.mode==="range"&&e.selectedDates.sort(function(C,x){return C.getTime()-x.getTime()})}function et(u,c,g){if(c===void 0&&(c=!1),g===void 0&&(g=e.config.dateFormat),u!==0&&!u||u instanceof Array&&u.length===0)return e.clear(c);On(u,g),e.latestSelectedDateObj=e.selectedDates[e.selectedDates.length-1],e.redraw(),B(void 0,c),D(),e.selectedDates.length===0&&e.clear(!1),he(c),c&&K("onChange")}function In(u){return u.slice().map(function(c){return typeof c=="string"||typeof c=="number"||c instanceof Date?e.parseDate(c,void 0,!0):c&&typeof c=="object"&&c.from&&c.to?{from:e.parseDate(c.from,void 0),to:e.parseDate(c.to,void 0)}:c}).filter(function(c){return c})}function we(){e.selectedDates=[],e.now=e.parseDate(e.config.now)||new Date;var u=e.config.defaultDate||((e.input.nodeName==="INPUT"||e.input.nodeName==="TEXTAREA")&&e.input.placeholder&&e.input.value===e.input.placeholder?null:e.input.value);u&&On(u,e.config.dateFormat),e._initialDate=e.selectedDates.length>0?e.selectedDates[0]:e.config.minDate&&e.config.minDate.getTime()>e.now.getTime()?e.config.minDate:e.config.maxDate&&e.config.maxDate.getTime()<e.now.getTime()?e.config.maxDate:e.now,e.currentYear=e._initialDate.getFullYear(),e.currentMonth=e._initialDate.getMonth(),e.selectedDates.length>0&&(e.latestSelectedDateObj=e.selectedDates[0]),e.config.minTime!==void 0&&(e.config.minTime=e.parseDate(e.config.minTime,"H:i")),e.config.maxTime!==void 0&&(e.config.maxTime=e.parseDate(e.config.maxTime,"H:i")),e.minDateHasTime=!!e.config.minDate&&(e.config.minDate.getHours()>0||e.config.minDate.getMinutes()>0||e.config.minDate.getSeconds()>0),e.maxDateHasTime=!!e.config.maxDate&&(e.config.maxDate.getHours()>0||e.config.maxDate.getMinutes()>0||e.config.maxDate.getSeconds()>0)}function nt(){if(e.input=sn(),!e.input){e.config.errorHandler(new Error("Invalid input element specified"));return}e.input._type=e.input.type,e.input.type="text",e.input.classList.add("flatpickr-input"),e._input=e.input,e.config.altInput&&(e.altInput=createElement(e.input.nodeName,e.config.altInputClass),e._input=e.altInput,e.altInput.placeholder=e.input.placeholder,e.altInput.disabled=e.input.disabled,e.altInput.required=e.input.required,e.altInput.tabIndex=e.input.tabIndex,e.altInput.type="text",e.input.setAttribute("type","hidden"),!e.config.static&&e.input.parentNode&&e.input.parentNode.insertBefore(e.altInput,e.input.nextSibling)),e.config.allowInput||e._input.setAttribute("readonly","readonly"),Nn()}function Nn(){e._positionElement=e.config.positionElement||e._input}function tt(){var u=e.config.enableTime?e.config.noCalendar?"time":"datetime-local":"date";e.mobileInput=createElement("input",e.input.className+" flatpickr-mobile"),e.mobileInput.tabIndex=1,e.mobileInput.type=u,e.mobileInput.disabled=e.input.disabled,e.mobileInput.required=e.input.required,e.mobileInput.placeholder=e.input.placeholder,e.mobileFormatStr=u==="datetime-local"?"Y-m-d\\TH:i:S":u==="date"?"Y-m-d":"H:i:S",e.selectedDates.length>0&&(e.mobileInput.defaultValue=e.mobileInput.value=e.formatDate(e.selectedDates[0],e.mobileFormatStr)),e.config.minDate&&(e.mobileInput.min=e.formatDate(e.config.minDate,"Y-m-d")),e.config.maxDate&&(e.mobileInput.max=e.formatDate(e.config.maxDate,"Y-m-d")),e.input.getAttribute("step")&&(e.mobileInput.step=String(e.input.getAttribute("step"))),e.input.type="hidden",e.altInput!==void 0&&(e.altInput.type="hidden");try{e.input.parentNode&&e.input.parentNode.insertBefore(e.mobileInput,e.input.nextSibling)}catch{}O(e.mobileInput,"change",function(c){e.setDate(getEventTarget(c).value,!1,e.mobileFormatStr),K("onChange"),K("onClose")})}function rt(u){if(e.isOpen===!0)return e.close();e.open(u)}function K(u,c){if(e.config!==void 0){var g=e.config[u];if(g!==void 0&&g.length>0)for(var C=0;g[C]&&C<g.length;C++)g[C](e.selectedDates,e.input.value,e,c);u==="onChange"&&(e.input.dispatchEvent(ln("change")),e.input.dispatchEvent(ln("input")))}}function ln(u){var c=document.createEvent("Event");return c.initEvent(u,!0,!0),c}function $e(u){for(var c=0;c<e.selectedDates.length;c++){var g=e.selectedDates[c];if(g instanceof Date&&compareDates(g,u)===0)return""+c}return!1}function Qe(u){return e.config.mode!=="range"||e.selectedDates.length<2?!1:compareDates(u,e.selectedDates[0])>=0&&compareDates(u,e.selectedDates[1])<=0}function Xe(){e.config.noCalendar||e.isMobile||!e.monthNav||(e.yearElements.forEach(function(u,c){var g=new Date(e.currentYear,e.currentMonth,1);g.setMonth(e.currentMonth+c),e.config.showMonths>1||e.config.monthSelectorType==="static"?e.monthElements[c].textContent=monthToStr(g.getMonth(),e.config.shorthandCurrentMonth,e.l10n)+" ":e.monthsDropdownContainer.value=g.getMonth().toString(),u.value=g.getFullYear().toString()}),e._hidePrevMonthArrow=e.config.minDate!==void 0&&(e.currentYear===e.config.minDate.getFullYear()?e.currentMonth<=e.config.minDate.getMonth():e.currentYear<e.config.minDate.getFullYear()),e._hideNextMonthArrow=e.config.maxDate!==void 0&&(e.currentYear===e.config.maxDate.getFullYear()?e.currentMonth+1>e.config.maxDate.getMonth():e.currentYear>e.config.maxDate.getFullYear()))}function un(u){var c=u||(e.config.altInput?e.config.altFormat:e.config.dateFormat);return e.selectedDates.map(function(g){return e.formatDate(g,c)}).filter(function(g,C,x){return e.config.mode!=="range"||e.config.enableTime||x.indexOf(g)===C}).join(e.config.mode!=="range"?e.config.conjunction:e.l10n.rangeSeparator)}function he(u){u===void 0&&(u=!0),e.mobileInput!==void 0&&e.mobileFormatStr&&(e.mobileInput.value=e.latestSelectedDateObj!==void 0?e.formatDate(e.latestSelectedDateObj,e.mobileFormatStr):""),e.input.value=un(e.config.dateFormat),e.altInput!==void 0&&(e.altInput.value=un(e.config.altFormat)),u!==!1&&K("onValueUpdate")}function Mn(u){var c=getEventTarget(u),g=e.prevMonthNav.contains(c),C=e.nextMonthNav.contains(c);g||C?J(g?-1:1):e.yearElements.indexOf(c)>=0?c.select():c.classList.contains("arrowUp")?e.changeYear(e.currentYear+1):c.classList.contains("arrowDown")&&e.changeYear(e.currentYear-1)}function it(u){u.preventDefault();var c=u.type==="keydown",g=getEventTarget(u),C=g;e.amPM!==void 0&&g===e.amPM&&(e.amPM.textContent=e.l10n.amPM[int(e.amPM.textContent===e.l10n.amPM[0])]);var x=parseFloat(C.getAttribute("min")),N=parseFloat(C.getAttribute("max")),F=parseFloat(C.getAttribute("step")),L=parseInt(C.value,10),H=u.delta||(c?u.which===38?1:-1:0),M=L+F*H;if(typeof C.value<"u"&&C.value.length===2){var k=C===e.hourElement,q=C===e.minuteElement;M<x?(M=N+M+int(!k)+(int(k)&&int(!e.amPM)),q&&S(void 0,-1,e.hourElement)):M>N&&(M=C===e.hourElement?M-N-int(!e.amPM):x,q&&S(void 0,1,e.hourElement)),e.amPM&&k&&(F===1?M+L===23:Math.abs(M-L)>F)&&(e.amPM.textContent=e.l10n.amPM[int(e.amPM.textContent===e.l10n.amPM[0])]),C.value=pad(M)}}return o(),e}function _flatpickr(n,t){for(var e=Array.prototype.slice.call(n).filter(function(r){return r instanceof HTMLElement}),i=[],o=0;o<e.length;o++){var l=e[o];try{if(l.getAttribute("data-fp-omit")!==null)continue;l._flatpickr!==void 0&&(l._flatpickr.destroy(),l._flatpickr=void 0),l._flatpickr=FlatpickrInstance(l,t||{}),i.push(l._flatpickr)}catch(r){console.error(r)}}return i.length===1?i[0]:i}typeof HTMLElement<"u"&&typeof HTMLCollection<"u"&&typeof NodeList<"u"&&(HTMLCollection.prototype.flatpickr=NodeList.prototype.flatpickr=function(n){return _flatpickr(this,n)},HTMLElement.prototype.flatpickr=function(n){return _flatpickr([this],n)});var flatpickr=function(n,t){return typeof n=="string"?_flatpickr(window.document.querySelectorAll(n),t):n instanceof Node?_flatpickr([n],t):_flatpickr(n,t)};flatpickr.defaultConfig={};flatpickr.l10ns={en:__assign({},english),default:__assign({},english)};flatpickr.localize=function(n){flatpickr.l10ns.default=__assign(__assign({},flatpickr.l10ns.default),n)};flatpickr.setDefaults=function(n){flatpickr.defaultConfig=__assign(__assign({},flatpickr.defaultConfig),n)};flatpickr.parseDate=createDateParser({});flatpickr.formatDate=createDateFormatter({});flatpickr.compareDates=compareDates;typeof jQuery<"u"&&typeof jQuery.fn<"u"&&(jQuery.fn.flatpickr=function(n){return _flatpickr(this,n)});Date.prototype.fp_incr=function(n){return new Date(this.getFullYear(),this.getMonth(),this.getDate()+(typeof n=="string"?parseInt(n,10):n))};typeof window<"u"&&(window.flatpickr=flatpickr);function initDateSelector(){flatpickr(".datepicker",{allowInput:!0})}const src=`/*!
 * Select2 4.1.0-rc.0
 * https://select2.github.io
 *
 * Released under the MIT license
 * https://github.com/select2/select2/blob/master/LICENSE.md
 */
;(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node/CommonJS
    module.exports = function (root, jQuery) {
      if (jQuery === undefined) {
        // require('jQuery') returns a factory that requires window to
        // build a jQuery instance, we normalize how we use modules
        // that require this pattern but the window provided is a noop
        // if it's defined (how jquery works)
        if (typeof window !== 'undefined') {
          jQuery = require('jquery');
        }
        else {
          jQuery = require('jquery')(root);
        }
      }
      factory(jQuery);
      return jQuery;
    };
  } else {
    // Browser globals
    factory(jQuery);
  }
} (function (jQuery) {
  // This is needed so we can catch the AMD loader configuration and use it
  // The inner file should be wrapped (by \`banner.start.js\`) in a function that
  // returns the AMD loader references.
  var S2 =(function () {
  // Restore the Select2 AMD loader so it can be used
  // Needed mostly in the language files, where the loader is not inserted
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) {
    var S2 = jQuery.fn.select2.amd;
  }
var S2;(function () { if (!S2 || !S2.requirejs) {
if (!S2) { S2 = {}; } else { require = S2; }
/**
 * @license almond 0.3.3 Copyright jQuery Foundation and other contributors.
 * Released under MIT license, http://github.com/requirejs/almond/LICENSE
 */
//Going sloppy to avoid 'use strict' string cost, but strict practices should
//be followed.
/*global setTimeout: false */

var requirejs, require, define;
(function (undef) {
    var main, req, makeMap, handlers,
        defined = {},
        waiting = {},
        config = {},
        defining = {},
        hasOwn = Object.prototype.hasOwnProperty,
        aps = [].slice,
        jsSuffixRegExp = /\\.js$/;

    function hasProp(obj, prop) {
        return hasOwn.call(obj, prop);
    }

    /**
     * Given a relative module name, like ./something, normalize it to
     * a real name that can be mapped to a path.
     * @param {String} name the relative name
     * @param {String} baseName a real name that the name arg is relative
     * to.
     * @returns {String} normalized name
     */
    function normalize(name, baseName) {
        var nameParts, nameSegment, mapValue, foundMap, lastIndex,
            foundI, foundStarMap, starI, i, j, part, normalizedBaseParts,
            baseParts = baseName && baseName.split("/"),
            map = config.map,
            starMap = (map && map['*']) || {};

        //Adjust any relative paths.
        if (name) {
            name = name.split('/');
            lastIndex = name.length - 1;

            // If wanting node ID compatibility, strip .js from end
            // of IDs. Have to do this here, and not in nameToUrl
            // because node allows either .js or non .js to map
            // to same file.
            if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
                name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, '');
            }

            // Starts with a '.' so need the baseName
            if (name[0].charAt(0) === '.' && baseParts) {
                //Convert baseName to array, and lop off the last part,
                //so that . matches that 'directory' and not name of the baseName's
                //module. For instance, baseName of 'one/two/three', maps to
                //'one/two/three.js', but we want the directory, 'one/two' for
                //this normalization.
                normalizedBaseParts = baseParts.slice(0, baseParts.length - 1);
                name = normalizedBaseParts.concat(name);
            }

            //start trimDots
            for (i = 0; i < name.length; i++) {
                part = name[i];
                if (part === '.') {
                    name.splice(i, 1);
                    i -= 1;
                } else if (part === '..') {
                    // If at the start, or previous value is still ..,
                    // keep them so that when converted to a path it may
                    // still work when converted to a path, even though
                    // as an ID it is less than ideal. In larger point
                    // releases, may be better to just kick out an error.
                    if (i === 0 || (i === 1 && name[2] === '..') || name[i - 1] === '..') {
                        continue;
                    } else if (i > 0) {
                        name.splice(i - 1, 2);
                        i -= 2;
                    }
                }
            }
            //end trimDots

            name = name.join('/');
        }

        //Apply map config if available.
        if ((baseParts || starMap) && map) {
            nameParts = name.split('/');

            for (i = nameParts.length; i > 0; i -= 1) {
                nameSegment = nameParts.slice(0, i).join("/");

                if (baseParts) {
                    //Find the longest baseName segment match in the config.
                    //So, do joins on the biggest to smallest lengths of baseParts.
                    for (j = baseParts.length; j > 0; j -= 1) {
                        mapValue = map[baseParts.slice(0, j).join('/')];

                        //baseName segment has  config, find if it has one for
                        //this name.
                        if (mapValue) {
                            mapValue = mapValue[nameSegment];
                            if (mapValue) {
                                //Match, update name to the new value.
                                foundMap = mapValue;
                                foundI = i;
                                break;
                            }
                        }
                    }
                }

                if (foundMap) {
                    break;
                }

                //Check for a star map match, but just hold on to it,
                //if there is a shorter segment match later in a matching
                //config, then favor over this star map.
                if (!foundStarMap && starMap && starMap[nameSegment]) {
                    foundStarMap = starMap[nameSegment];
                    starI = i;
                }
            }

            if (!foundMap && foundStarMap) {
                foundMap = foundStarMap;
                foundI = starI;
            }

            if (foundMap) {
                nameParts.splice(0, foundI, foundMap);
                name = nameParts.join('/');
            }
        }

        return name;
    }

    function makeRequire(relName, forceSync) {
        return function () {
            //A version of a require function that passes a moduleName
            //value for items that may need to
            //look up paths relative to the moduleName
            var args = aps.call(arguments, 0);

            //If first arg is not require('string'), and there is only
            //one arg, it is the array form without a callback. Insert
            //a null so that the following concat is correct.
            if (typeof args[0] !== 'string' && args.length === 1) {
                args.push(null);
            }
            return req.apply(undef, args.concat([relName, forceSync]));
        };
    }

    function makeNormalize(relName) {
        return function (name) {
            return normalize(name, relName);
        };
    }

    function makeLoad(depName) {
        return function (value) {
            defined[depName] = value;
        };
    }

    function callDep(name) {
        if (hasProp(waiting, name)) {
            var args = waiting[name];
            delete waiting[name];
            defining[name] = true;
            main.apply(undef, args);
        }

        if (!hasProp(defined, name) && !hasProp(defining, name)) {
            throw new Error('No ' + name);
        }
        return defined[name];
    }

    //Turns a plugin!resource to [plugin, resource]
    //with the plugin being undefined if the name
    //did not have a plugin prefix.
    function splitPrefix(name) {
        var prefix,
            index = name ? name.indexOf('!') : -1;
        if (index > -1) {
            prefix = name.substring(0, index);
            name = name.substring(index + 1, name.length);
        }
        return [prefix, name];
    }

    //Creates a parts array for a relName where first part is plugin ID,
    //second part is resource ID. Assumes relName has already been normalized.
    function makeRelParts(relName) {
        return relName ? splitPrefix(relName) : [];
    }

    /**
     * Makes a name map, normalizing the name, and using a plugin
     * for normalization if necessary. Grabs a ref to plugin
     * too, as an optimization.
     */
    makeMap = function (name, relParts) {
        var plugin,
            parts = splitPrefix(name),
            prefix = parts[0],
            relResourceName = relParts[1];

        name = parts[1];

        if (prefix) {
            prefix = normalize(prefix, relResourceName);
            plugin = callDep(prefix);
        }

        //Normalize according
        if (prefix) {
            if (plugin && plugin.normalize) {
                name = plugin.normalize(name, makeNormalize(relResourceName));
            } else {
                name = normalize(name, relResourceName);
            }
        } else {
            name = normalize(name, relResourceName);
            parts = splitPrefix(name);
            prefix = parts[0];
            name = parts[1];
            if (prefix) {
                plugin = callDep(prefix);
            }
        }

        //Using ridiculous property names for space reasons
        return {
            f: prefix ? prefix + '!' + name : name, //fullName
            n: name,
            pr: prefix,
            p: plugin
        };
    };

    function makeConfig(name) {
        return function () {
            return (config && config.config && config.config[name]) || {};
        };
    }

    handlers = {
        require: function (name) {
            return makeRequire(name);
        },
        exports: function (name) {
            var e = defined[name];
            if (typeof e !== 'undefined') {
                return e;
            } else {
                return (defined[name] = {});
            }
        },
        module: function (name) {
            return {
                id: name,
                uri: '',
                exports: defined[name],
                config: makeConfig(name)
            };
        }
    };

    main = function (name, deps, callback, relName) {
        var cjsModule, depName, ret, map, i, relParts,
            args = [],
            callbackType = typeof callback,
            usingExports;

        //Use name if no relName
        relName = relName || name;
        relParts = makeRelParts(relName);

        //Call the callback to define the module, if necessary.
        if (callbackType === 'undefined' || callbackType === 'function') {
            //Pull out the defined dependencies and pass the ordered
            //values to the callback.
            //Default to [require, exports, module] if no deps
            deps = !deps.length && callback.length ? ['require', 'exports', 'module'] : deps;
            for (i = 0; i < deps.length; i += 1) {
                map = makeMap(deps[i], relParts);
                depName = map.f;

                //Fast path CommonJS standard dependencies.
                if (depName === "require") {
                    args[i] = handlers.require(name);
                } else if (depName === "exports") {
                    //CommonJS module spec 1.1
                    args[i] = handlers.exports(name);
                    usingExports = true;
                } else if (depName === "module") {
                    //CommonJS module spec 1.1
                    cjsModule = args[i] = handlers.module(name);
                } else if (hasProp(defined, depName) ||
                           hasProp(waiting, depName) ||
                           hasProp(defining, depName)) {
                    args[i] = callDep(depName);
                } else if (map.p) {
                    map.p.load(map.n, makeRequire(relName, true), makeLoad(depName), {});
                    args[i] = defined[depName];
                } else {
                    throw new Error(name + ' missing ' + depName);
                }
            }

            ret = callback ? callback.apply(defined[name], args) : undefined;

            if (name) {
                //If setting exports via "module" is in play,
                //favor that over return value and exports. After that,
                //favor a non-undefined return value over exports use.
                if (cjsModule && cjsModule.exports !== undef &&
                        cjsModule.exports !== defined[name]) {
                    defined[name] = cjsModule.exports;
                } else if (ret !== undef || !usingExports) {
                    //Use the return value from the function.
                    defined[name] = ret;
                }
            }
        } else if (name) {
            //May just be an object definition for the module. Only
            //worry about defining if have a module name.
            defined[name] = callback;
        }
    };

    requirejs = require = req = function (deps, callback, relName, forceSync, alt) {
        if (typeof deps === "string") {
            if (handlers[deps]) {
                //callback in this case is really relName
                return handlers[deps](callback);
            }
            //Just return the module wanted. In this scenario, the
            //deps arg is the module name, and second arg (if passed)
            //is just the relName.
            //Normalize module name, if it contains . or ..
            return callDep(makeMap(deps, makeRelParts(callback)).f);
        } else if (!deps.splice) {
            //deps is a config object, not an array.
            config = deps;
            if (config.deps) {
                req(config.deps, config.callback);
            }
            if (!callback) {
                return;
            }

            if (callback.splice) {
                //callback is an array, which means it is a dependency list.
                //Adjust args if there are dependencies
                deps = callback;
                callback = relName;
                relName = null;
            } else {
                deps = undef;
            }
        }

        //Support require(['a'])
        callback = callback || function () {};

        //If relName is a function, it is an errback handler,
        //so remove it.
        if (typeof relName === 'function') {
            relName = forceSync;
            forceSync = alt;
        }

        //Simulate async callback;
        if (forceSync) {
            main(undef, deps, callback, relName);
        } else {
            //Using a non-zero value because of concern for what old browsers
            //do, and latest browsers "upgrade" to 4 if lower value is used:
            //http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#dom-windowtimers-settimeout:
            //If want a value immediately, use require('id') instead -- something
            //that works in almond on the global level, but not guaranteed and
            //unlikely to work in other AMD implementations.
            setTimeout(function () {
                main(undef, deps, callback, relName);
            }, 4);
        }

        return req;
    };

    /**
     * Just drops the config on the floor, but returns req in case
     * the config return value is used.
     */
    req.config = function (cfg) {
        return req(cfg);
    };

    /**
     * Expose module registry for debugging and tooling
     */
    requirejs._defined = defined;

    define = function (name, deps, callback) {
        if (typeof name !== 'string') {
            throw new Error('See almond README: incorrect module build, no module name');
        }

        //This module may not have dependencies
        if (!deps.splice) {
            //deps is not an array, so probably means
            //an object literal or factory function for
            //the value. Adjust args.
            callback = deps;
            deps = [];
        }

        if (!hasProp(defined, name) && !hasProp(waiting, name)) {
            waiting[name] = [name, deps, callback];
        }
    };

    define.amd = {
        jQuery: true
    };
}());

S2.requirejs = requirejs;S2.require = require;S2.define = define;
}
}());
S2.define("almond", function(){});

/* global jQuery:false, $:false */
S2.define('jquery',[],function () {
  var _$ = jQuery || $;

  if (_$ == null && console && console.error) {
    console.error(
      'Select2: An instance of jQuery or a jQuery-compatible library was not ' +
      'found. Make sure that you are including jQuery before Select2 on your ' +
      'web page.'
    );
  }

  return _$;
});

S2.define('select2/utils',[
  'jquery'
], function ($) {
  var Utils = {};

  Utils.Extend = function (ChildClass, SuperClass) {
    var __hasProp = {}.hasOwnProperty;

    function BaseConstructor () {
      this.constructor = ChildClass;
    }

    for (var key in SuperClass) {
      if (__hasProp.call(SuperClass, key)) {
        ChildClass[key] = SuperClass[key];
      }
    }

    BaseConstructor.prototype = SuperClass.prototype;
    ChildClass.prototype = new BaseConstructor();
    ChildClass.__super__ = SuperClass.prototype;

    return ChildClass;
  };

  function getMethods (theClass) {
    var proto = theClass.prototype;

    var methods = [];

    for (var methodName in proto) {
      var m = proto[methodName];

      if (typeof m !== 'function') {
        continue;
      }

      if (methodName === 'constructor') {
        continue;
      }

      methods.push(methodName);
    }

    return methods;
  }

  Utils.Decorate = function (SuperClass, DecoratorClass) {
    var decoratedMethods = getMethods(DecoratorClass);
    var superMethods = getMethods(SuperClass);

    function DecoratedClass () {
      var unshift = Array.prototype.unshift;

      var argCount = DecoratorClass.prototype.constructor.length;

      var calledConstructor = SuperClass.prototype.constructor;

      if (argCount > 0) {
        unshift.call(arguments, SuperClass.prototype.constructor);

        calledConstructor = DecoratorClass.prototype.constructor;
      }

      calledConstructor.apply(this, arguments);
    }

    DecoratorClass.displayName = SuperClass.displayName;

    function ctr () {
      this.constructor = DecoratedClass;
    }

    DecoratedClass.prototype = new ctr();

    for (var m = 0; m < superMethods.length; m++) {
      var superMethod = superMethods[m];

      DecoratedClass.prototype[superMethod] =
        SuperClass.prototype[superMethod];
    }

    var calledMethod = function (methodName) {
      // Stub out the original method if it's not decorating an actual method
      var originalMethod = function () {};

      if (methodName in DecoratedClass.prototype) {
        originalMethod = DecoratedClass.prototype[methodName];
      }

      var decoratedMethod = DecoratorClass.prototype[methodName];

      return function () {
        var unshift = Array.prototype.unshift;

        unshift.call(arguments, originalMethod);

        return decoratedMethod.apply(this, arguments);
      };
    };

    for (var d = 0; d < decoratedMethods.length; d++) {
      var decoratedMethod = decoratedMethods[d];

      DecoratedClass.prototype[decoratedMethod] = calledMethod(decoratedMethod);
    }

    return DecoratedClass;
  };

  var Observable = function () {
    this.listeners = {};
  };

  Observable.prototype.on = function (event, callback) {
    this.listeners = this.listeners || {};

    if (event in this.listeners) {
      this.listeners[event].push(callback);
    } else {
      this.listeners[event] = [callback];
    }
  };

  Observable.prototype.trigger = function (event) {
    var slice = Array.prototype.slice;
    var params = slice.call(arguments, 1);

    this.listeners = this.listeners || {};

    // Params should always come in as an array
    if (params == null) {
      params = [];
    }

    // If there are no arguments to the event, use a temporary object
    if (params.length === 0) {
      params.push({});
    }

    // Set the \`_type\` of the first object to the event
    params[0]._type = event;

    if (event in this.listeners) {
      this.invoke(this.listeners[event], slice.call(arguments, 1));
    }

    if ('*' in this.listeners) {
      this.invoke(this.listeners['*'], arguments);
    }
  };

  Observable.prototype.invoke = function (listeners, params) {
    for (var i = 0, len = listeners.length; i < len; i++) {
      listeners[i].apply(this, params);
    }
  };

  Utils.Observable = Observable;

  Utils.generateChars = function (length) {
    var chars = '';

    for (var i = 0; i < length; i++) {
      var randomChar = Math.floor(Math.random() * 36);
      chars += randomChar.toString(36);
    }

    return chars;
  };

  Utils.bind = function (func, context) {
    return function () {
      func.apply(context, arguments);
    };
  };

  Utils._convertData = function (data) {
    for (var originalKey in data) {
      var keys = originalKey.split('-');

      var dataLevel = data;

      if (keys.length === 1) {
        continue;
      }

      for (var k = 0; k < keys.length; k++) {
        var key = keys[k];

        // Lowercase the first letter
        // By default, dash-separated becomes camelCase
        key = key.substring(0, 1).toLowerCase() + key.substring(1);

        if (!(key in dataLevel)) {
          dataLevel[key] = {};
        }

        if (k == keys.length - 1) {
          dataLevel[key] = data[originalKey];
        }

        dataLevel = dataLevel[key];
      }

      delete data[originalKey];
    }

    return data;
  };

  Utils.hasScroll = function (index, el) {
    // Adapted from the function created by @ShadowScripter
    // and adapted by @BillBarry on the Stack Exchange Code Review website.
    // The original code can be found at
    // http://codereview.stackexchange.com/q/13338
    // and was designed to be used with the Sizzle selector engine.

    var $el = $(el);
    var overflowX = el.style.overflowX;
    var overflowY = el.style.overflowY;

    //Check both x and y declarations
    if (overflowX === overflowY &&
        (overflowY === 'hidden' || overflowY === 'visible')) {
      return false;
    }

    if (overflowX === 'scroll' || overflowY === 'scroll') {
      return true;
    }

    return ($el.innerHeight() < el.scrollHeight ||
      $el.innerWidth() < el.scrollWidth);
  };

  Utils.escapeMarkup = function (markup) {
    var replaceMap = {
      '\\\\': '&#92;',
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      '\\'': '&#39;',
      '/': '&#47;'
    };

    // Do not try to escape the markup if it's not a string
    if (typeof markup !== 'string') {
      return markup;
    }

    return String(markup).replace(/[&<>"'\\/\\\\]/g, function (match) {
      return replaceMap[match];
    });
  };

  // Cache objects in Utils.__cache instead of $.data (see #4346)
  Utils.__cache = {};

  var id = 0;
  Utils.GetUniqueElementId = function (element) {
    // Get a unique element Id. If element has no id,
    // creates a new unique number, stores it in the id
    // attribute and returns the new id with a prefix.
    // If an id already exists, it simply returns it with a prefix.

    var select2Id = element.getAttribute('data-select2-id');

    if (select2Id != null) {
      return select2Id;
    }

    // If element has id, use it.
    if (element.id) {
      select2Id = 'select2-data-' + element.id;
    } else {
      select2Id = 'select2-data-' + (++id).toString() +
        '-' + Utils.generateChars(4);
    }

    element.setAttribute('data-select2-id', select2Id);

    return select2Id;
  };

  Utils.StoreData = function (element, name, value) {
    // Stores an item in the cache for a specified element.
    // name is the cache key.
    var id = Utils.GetUniqueElementId(element);
    if (!Utils.__cache[id]) {
      Utils.__cache[id] = {};
    }

    Utils.__cache[id][name] = value;
  };

  Utils.GetData = function (element, name) {
    // Retrieves a value from the cache by its key (name)
    // name is optional. If no name specified, return
    // all cache items for the specified element.
    // and for a specified element.
    var id = Utils.GetUniqueElementId(element);
    if (name) {
      if (Utils.__cache[id]) {
        if (Utils.__cache[id][name] != null) {
          return Utils.__cache[id][name];
        }
        return $(element).data(name); // Fallback to HTML5 data attribs.
      }
      return $(element).data(name); // Fallback to HTML5 data attribs.
    } else {
      return Utils.__cache[id];
    }
  };

  Utils.RemoveData = function (element) {
    // Removes all cached items for a specified element.
    var id = Utils.GetUniqueElementId(element);
    if (Utils.__cache[id] != null) {
      delete Utils.__cache[id];
    }

    element.removeAttribute('data-select2-id');
  };

  Utils.copyNonInternalCssClasses = function (dest, src) {
    var classes;

    var destinationClasses = dest.getAttribute('class').trim().split(/\\s+/);

    destinationClasses = destinationClasses.filter(function (clazz) {
      // Save all Select2 classes
      return clazz.indexOf('select2-') === 0;
    });

    var sourceClasses = src.getAttribute('class').trim().split(/\\s+/);

    sourceClasses = sourceClasses.filter(function (clazz) {
      // Only copy non-Select2 classes
      return clazz.indexOf('select2-') !== 0;
    });

    var replacements = destinationClasses.concat(sourceClasses);

    dest.setAttribute('class', replacements.join(' '));
  };

  return Utils;
});

S2.define('select2/results',[
  'jquery',
  './utils'
], function ($, Utils) {
  function Results ($element, options, dataAdapter) {
    this.$element = $element;
    this.data = dataAdapter;
    this.options = options;

    Results.__super__.constructor.call(this);
  }

  Utils.Extend(Results, Utils.Observable);

  Results.prototype.render = function () {
    var $results = $(
      '<ul class="select2-results__options" role="listbox"></ul>'
    );

    if (this.options.get('multiple')) {
      $results.attr('aria-multiselectable', 'true');
    }

    this.$results = $results;

    return $results;
  };

  Results.prototype.clear = function () {
    this.$results.empty();
  };

  Results.prototype.displayMessage = function (params) {
    var escapeMarkup = this.options.get('escapeMarkup');

    this.clear();
    this.hideLoading();

    var $message = $(
      '<li role="alert" aria-live="assertive"' +
      ' class="select2-results__option"></li>'
    );

    var message = this.options.get('translations').get(params.message);

    $message.append(
      escapeMarkup(
        message(params.args)
      )
    );

    $message[0].className += ' select2-results__message';

    this.$results.append($message);
  };

  Results.prototype.hideMessages = function () {
    this.$results.find('.select2-results__message').remove();
  };

  Results.prototype.append = function (data) {
    this.hideLoading();

    var $options = [];

    if (data.results == null || data.results.length === 0) {
      if (this.$results.children().length === 0) {
        this.trigger('results:message', {
          message: 'noResults'
        });
      }

      return;
    }

    data.results = this.sort(data.results);

    for (var d = 0; d < data.results.length; d++) {
      var item = data.results[d];

      var $option = this.option(item);

      $options.push($option);
    }

    this.$results.append($options);
  };

  Results.prototype.position = function ($results, $dropdown) {
    var $resultsContainer = $dropdown.find('.select2-results');
    $resultsContainer.append($results);
  };

  Results.prototype.sort = function (data) {
    var sorter = this.options.get('sorter');

    return sorter(data);
  };

  Results.prototype.highlightFirstItem = function () {
    var $options = this.$results
      .find('.select2-results__option--selectable');

    var $selected = $options.filter('.select2-results__option--selected');

    // Check if there are any selected options
    if ($selected.length > 0) {
      // If there are selected options, highlight the first
      $selected.first().trigger('mouseenter');
    } else {
      // If there are no selected options, highlight the first option
      // in the dropdown
      $options.first().trigger('mouseenter');
    }

    this.ensureHighlightVisible();
  };

  Results.prototype.setClasses = function () {
    var self = this;

    this.data.current(function (selected) {
      var selectedIds = selected.map(function (s) {
        return s.id.toString();
      });

      var $options = self.$results
        .find('.select2-results__option--selectable');

      $options.each(function () {
        var $option = $(this);

        var item = Utils.GetData(this, 'data');

        // id needs to be converted to a string when comparing
        var id = '' + item.id;

        if ((item.element != null && item.element.selected) ||
            (item.element == null && selectedIds.indexOf(id) > -1)) {
          this.classList.add('select2-results__option--selected');
          $option.attr('aria-selected', 'true');
        } else {
          this.classList.remove('select2-results__option--selected');
          $option.attr('aria-selected', 'false');
        }
      });

    });
  };

  Results.prototype.showLoading = function (params) {
    this.hideLoading();

    var loadingMore = this.options.get('translations').get('searching');

    var loading = {
      disabled: true,
      loading: true,
      text: loadingMore(params)
    };
    var $loading = this.option(loading);
    $loading.className += ' loading-results';

    this.$results.prepend($loading);
  };

  Results.prototype.hideLoading = function () {
    this.$results.find('.loading-results').remove();
  };

  Results.prototype.option = function (data) {
    var option = document.createElement('li');
    option.classList.add('select2-results__option');
    option.classList.add('select2-results__option--selectable');

    var attrs = {
      'role': 'option'
    };

    var matches = window.Element.prototype.matches ||
      window.Element.prototype.msMatchesSelector ||
      window.Element.prototype.webkitMatchesSelector;

    if ((data.element != null && matches.call(data.element, ':disabled')) ||
        (data.element == null && data.disabled)) {
      attrs['aria-disabled'] = 'true';

      option.classList.remove('select2-results__option--selectable');
      option.classList.add('select2-results__option--disabled');
    }

    if (data.id == null) {
      option.classList.remove('select2-results__option--selectable');
    }

    if (data._resultId != null) {
      option.id = data._resultId;
    }

    if (data.title) {
      option.title = data.title;
    }

    if (data.children) {
      attrs.role = 'group';
      attrs['aria-label'] = data.text;

      option.classList.remove('select2-results__option--selectable');
      option.classList.add('select2-results__option--group');
    }

    for (var attr in attrs) {
      var val = attrs[attr];

      option.setAttribute(attr, val);
    }

    if (data.children) {
      var $option = $(option);

      var label = document.createElement('strong');
      label.className = 'select2-results__group';

      this.template(data, label);

      var $children = [];

      for (var c = 0; c < data.children.length; c++) {
        var child = data.children[c];

        var $child = this.option(child);

        $children.push($child);
      }

      var $childrenContainer = $('<ul></ul>', {
        'class': 'select2-results__options select2-results__options--nested',
        'role': 'none'
      });

      $childrenContainer.append($children);

      $option.append(label);
      $option.append($childrenContainer);
    } else {
      this.template(data, option);
    }

    Utils.StoreData(option, 'data', data);

    return option;
  };

  Results.prototype.bind = function (container, $container) {
    var self = this;

    var id = container.id + '-results';

    this.$results.attr('id', id);

    container.on('results:all', function (params) {
      self.clear();
      self.append(params.data);

      if (container.isOpen()) {
        self.setClasses();
        self.highlightFirstItem();
      }
    });

    container.on('results:append', function (params) {
      self.append(params.data);

      if (container.isOpen()) {
        self.setClasses();
      }
    });

    container.on('query', function (params) {
      self.hideMessages();
      self.showLoading(params);
    });

    container.on('select', function () {
      if (!container.isOpen()) {
        return;
      }

      self.setClasses();

      if (self.options.get('scrollAfterSelect')) {
        self.highlightFirstItem();
      }
    });

    container.on('unselect', function () {
      if (!container.isOpen()) {
        return;
      }

      self.setClasses();

      if (self.options.get('scrollAfterSelect')) {
        self.highlightFirstItem();
      }
    });

    container.on('open', function () {
      // When the dropdown is open, aria-expended="true"
      self.$results.attr('aria-expanded', 'true');
      self.$results.attr('aria-hidden', 'false');

      self.setClasses();
      self.ensureHighlightVisible();
    });

    container.on('close', function () {
      // When the dropdown is closed, aria-expended="false"
      self.$results.attr('aria-expanded', 'false');
      self.$results.attr('aria-hidden', 'true');
      self.$results.removeAttr('aria-activedescendant');
    });

    container.on('results:toggle', function () {
      var $highlighted = self.getHighlightedResults();

      if ($highlighted.length === 0) {
        return;
      }

      $highlighted.trigger('mouseup');
    });

    container.on('results:select', function () {
      var $highlighted = self.getHighlightedResults();

      if ($highlighted.length === 0) {
        return;
      }

      var data = Utils.GetData($highlighted[0], 'data');

      if ($highlighted.hasClass('select2-results__option--selected')) {
        self.trigger('close', {});
      } else {
        self.trigger('select', {
          data: data
        });
      }
    });

    container.on('results:previous', function () {
      var $highlighted = self.getHighlightedResults();

      var $options = self.$results.find('.select2-results__option--selectable');

      var currentIndex = $options.index($highlighted);

      // If we are already at the top, don't move further
      // If no options, currentIndex will be -1
      if (currentIndex <= 0) {
        return;
      }

      var nextIndex = currentIndex - 1;

      // If none are highlighted, highlight the first
      if ($highlighted.length === 0) {
        nextIndex = 0;
      }

      var $next = $options.eq(nextIndex);

      $next.trigger('mouseenter');

      var currentOffset = self.$results.offset().top;
      var nextTop = $next.offset().top;
      var nextOffset = self.$results.scrollTop() + (nextTop - currentOffset);

      if (nextIndex === 0) {
        self.$results.scrollTop(0);
      } else if (nextTop - currentOffset < 0) {
        self.$results.scrollTop(nextOffset);
      }
    });

    container.on('results:next', function () {
      var $highlighted = self.getHighlightedResults();

      var $options = self.$results.find('.select2-results__option--selectable');

      var currentIndex = $options.index($highlighted);

      var nextIndex = currentIndex + 1;

      // If we are at the last option, stay there
      if (nextIndex >= $options.length) {
        return;
      }

      var $next = $options.eq(nextIndex);

      $next.trigger('mouseenter');

      var currentOffset = self.$results.offset().top +
        self.$results.outerHeight(false);
      var nextBottom = $next.offset().top + $next.outerHeight(false);
      var nextOffset = self.$results.scrollTop() + nextBottom - currentOffset;

      if (nextIndex === 0) {
        self.$results.scrollTop(0);
      } else if (nextBottom > currentOffset) {
        self.$results.scrollTop(nextOffset);
      }
    });

    container.on('results:focus', function (params) {
      params.element[0].classList.add('select2-results__option--highlighted');
      params.element[0].setAttribute('aria-selected', 'true');
    });

    container.on('results:message', function (params) {
      self.displayMessage(params);
    });

    if ($.fn.mousewheel) {
      this.$results.on('mousewheel', function (e) {
        var top = self.$results.scrollTop();

        var bottom = self.$results.get(0).scrollHeight - top + e.deltaY;

        var isAtTop = e.deltaY > 0 && top - e.deltaY <= 0;
        var isAtBottom = e.deltaY < 0 && bottom <= self.$results.height();

        if (isAtTop) {
          self.$results.scrollTop(0);

          e.preventDefault();
          e.stopPropagation();
        } else if (isAtBottom) {
          self.$results.scrollTop(
            self.$results.get(0).scrollHeight - self.$results.height()
          );

          e.preventDefault();
          e.stopPropagation();
        }
      });
    }

    this.$results.on('mouseup', '.select2-results__option--selectable',
      function (evt) {
      var $this = $(this);

      var data = Utils.GetData(this, 'data');

      if ($this.hasClass('select2-results__option--selected')) {
        if (self.options.get('multiple')) {
          self.trigger('unselect', {
            originalEvent: evt,
            data: data
          });
        } else {
          self.trigger('close', {});
        }

        return;
      }

      self.trigger('select', {
        originalEvent: evt,
        data: data
      });
    });

    this.$results.on('mouseenter', '.select2-results__option--selectable',
      function (evt) {
      var data = Utils.GetData(this, 'data');

      self.getHighlightedResults()
          .removeClass('select2-results__option--highlighted')
          .attr('aria-selected', 'false');

      self.trigger('results:focus', {
        data: data,
        element: $(this)
      });
    });
  };

  Results.prototype.getHighlightedResults = function () {
    var $highlighted = this.$results
    .find('.select2-results__option--highlighted');

    return $highlighted;
  };

  Results.prototype.destroy = function () {
    this.$results.remove();
  };

  Results.prototype.ensureHighlightVisible = function () {
    var $highlighted = this.getHighlightedResults();

    if ($highlighted.length === 0) {
      return;
    }

    var $options = this.$results.find('.select2-results__option--selectable');

    var currentIndex = $options.index($highlighted);

    var currentOffset = this.$results.offset().top;
    var nextTop = $highlighted.offset().top;
    var nextOffset = this.$results.scrollTop() + (nextTop - currentOffset);

    var offsetDelta = nextTop - currentOffset;
    nextOffset -= $highlighted.outerHeight(false) * 2;

    if (currentIndex <= 2) {
      this.$results.scrollTop(0);
    } else if (offsetDelta > this.$results.outerHeight() || offsetDelta < 0) {
      this.$results.scrollTop(nextOffset);
    }
  };

  Results.prototype.template = function (result, container) {
    var template = this.options.get('templateResult');
    var escapeMarkup = this.options.get('escapeMarkup');

    var content = template(result, container);

    if (content == null) {
      container.style.display = 'none';
    } else if (typeof content === 'string') {
      container.innerHTML = escapeMarkup(content);
    } else {
      $(container).append(content);
    }
  };

  return Results;
});

S2.define('select2/keys',[

], function () {
  var KEYS = {
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    ESC: 27,
    SPACE: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    DELETE: 46
  };

  return KEYS;
});

S2.define('select2/selection/base',[
  'jquery',
  '../utils',
  '../keys'
], function ($, Utils, KEYS) {
  function BaseSelection ($element, options) {
    this.$element = $element;
    this.options = options;

    BaseSelection.__super__.constructor.call(this);
  }

  Utils.Extend(BaseSelection, Utils.Observable);

  BaseSelection.prototype.render = function () {
    var $selection = $(
      '<span class="select2-selection" role="combobox" ' +
      ' aria-haspopup="true" aria-expanded="false">' +
      '</span>'
    );

    this._tabindex = 0;

    if (Utils.GetData(this.$element[0], 'old-tabindex') != null) {
      this._tabindex = Utils.GetData(this.$element[0], 'old-tabindex');
    } else if (this.$element.attr('tabindex') != null) {
      this._tabindex = this.$element.attr('tabindex');
    }

    $selection.attr('title', this.$element.attr('title'));
    $selection.attr('tabindex', this._tabindex);
    $selection.attr('aria-disabled', 'false');

    this.$selection = $selection;

    return $selection;
  };

  BaseSelection.prototype.bind = function (container, $container) {
    var self = this;

    var resultsId = container.id + '-results';

    this.container = container;

    this.$selection.on('focus', function (evt) {
      self.trigger('focus', evt);
    });

    this.$selection.on('blur', function (evt) {
      self._handleBlur(evt);
    });

    this.$selection.on('keydown', function (evt) {
      self.trigger('keypress', evt);

      if (evt.which === KEYS.SPACE) {
        evt.preventDefault();
      }
    });

    container.on('results:focus', function (params) {
      self.$selection.attr('aria-activedescendant', params.data._resultId);
    });

    container.on('selection:update', function (params) {
      self.update(params.data);
    });

    container.on('open', function () {
      // When the dropdown is open, aria-expanded="true"
      self.$selection.attr('aria-expanded', 'true');
      self.$selection.attr('aria-owns', resultsId);

      self._attachCloseHandler(container);
    });

    container.on('close', function () {
      // When the dropdown is closed, aria-expanded="false"
      self.$selection.attr('aria-expanded', 'false');
      self.$selection.removeAttr('aria-activedescendant');
      self.$selection.removeAttr('aria-owns');

      self.$selection.trigger('focus');

      self._detachCloseHandler(container);
    });

    container.on('enable', function () {
      self.$selection.attr('tabindex', self._tabindex);
      self.$selection.attr('aria-disabled', 'false');
    });

    container.on('disable', function () {
      self.$selection.attr('tabindex', '-1');
      self.$selection.attr('aria-disabled', 'true');
    });
  };

  BaseSelection.prototype._handleBlur = function (evt) {
    var self = this;

    // This needs to be delayed as the active element is the body when the tab
    // key is pressed, possibly along with others.
    window.setTimeout(function () {
      // Don't trigger \`blur\` if the focus is still in the selection
      if (
        (document.activeElement == self.$selection[0]) ||
        ($.contains(self.$selection[0], document.activeElement))
      ) {
        return;
      }

      self.trigger('blur', evt);
    }, 1);
  };

  BaseSelection.prototype._attachCloseHandler = function (container) {

    $(document.body).on('mousedown.select2.' + container.id, function (e) {
      var $target = $(e.target);

      var $select = $target.closest('.select2');

      var $all = $('.select2.select2-container--open');

      $all.each(function () {
        if (this == $select[0]) {
          return;
        }

        var $element = Utils.GetData(this, 'element');

        $element.select2('close');
      });
    });
  };

  BaseSelection.prototype._detachCloseHandler = function (container) {
    $(document.body).off('mousedown.select2.' + container.id);
  };

  BaseSelection.prototype.position = function ($selection, $container) {
    var $selectionContainer = $container.find('.selection');
    $selectionContainer.append($selection);
  };

  BaseSelection.prototype.destroy = function () {
    this._detachCloseHandler(this.container);
  };

  BaseSelection.prototype.update = function (data) {
    throw new Error('The \`update\` method must be defined in child classes.');
  };

  /**
   * Helper method to abstract the "enabled" (not "disabled") state of this
   * object.
   *
   * @return {true} if the instance is not disabled.
   * @return {false} if the instance is disabled.
   */
  BaseSelection.prototype.isEnabled = function () {
    return !this.isDisabled();
  };

  /**
   * Helper method to abstract the "disabled" state of this object.
   *
   * @return {true} if the disabled option is true.
   * @return {false} if the disabled option is false.
   */
  BaseSelection.prototype.isDisabled = function () {
    return this.options.get('disabled');
  };

  return BaseSelection;
});

S2.define('select2/selection/single',[
  'jquery',
  './base',
  '../utils',
  '../keys'
], function ($, BaseSelection, Utils, KEYS) {
  function SingleSelection () {
    SingleSelection.__super__.constructor.apply(this, arguments);
  }

  Utils.Extend(SingleSelection, BaseSelection);

  SingleSelection.prototype.render = function () {
    var $selection = SingleSelection.__super__.render.call(this);

    $selection[0].classList.add('select2-selection--single');

    $selection.html(
      '<span class="select2-selection__rendered"></span>' +
      '<span class="select2-selection__arrow" role="presentation">' +
        '<b role="presentation"></b>' +
      '</span>'
    );

    return $selection;
  };

  SingleSelection.prototype.bind = function (container, $container) {
    var self = this;

    SingleSelection.__super__.bind.apply(this, arguments);

    var id = container.id + '-container';

    this.$selection.find('.select2-selection__rendered')
      .attr('id', id)
      .attr('role', 'textbox')
      .attr('aria-readonly', 'true');
    this.$selection.attr('aria-labelledby', id);
    this.$selection.attr('aria-controls', id);

    this.$selection.on('mousedown', function (evt) {
      // Only respond to left clicks
      if (evt.which !== 1) {
        return;
      }

      self.trigger('toggle', {
        originalEvent: evt
      });
    });

    this.$selection.on('focus', function (evt) {
      // User focuses on the container
    });

    this.$selection.on('blur', function (evt) {
      // User exits the container
    });

    container.on('focus', function (evt) {
      if (!container.isOpen()) {
        self.$selection.trigger('focus');
      }
    });
  };

  SingleSelection.prototype.clear = function () {
    var $rendered = this.$selection.find('.select2-selection__rendered');
    $rendered.empty();
    $rendered.removeAttr('title'); // clear tooltip on empty
  };

  SingleSelection.prototype.display = function (data, container) {
    var template = this.options.get('templateSelection');
    var escapeMarkup = this.options.get('escapeMarkup');

    return escapeMarkup(template(data, container));
  };

  SingleSelection.prototype.selectionContainer = function () {
    return $('<span></span>');
  };

  SingleSelection.prototype.update = function (data) {
    if (data.length === 0) {
      this.clear();
      return;
    }

    var selection = data[0];

    var $rendered = this.$selection.find('.select2-selection__rendered');
    var formatted = this.display(selection, $rendered);

    $rendered.empty().append(formatted);

    var title = selection.title || selection.text;

    if (title) {
      $rendered.attr('title', title);
    } else {
      $rendered.removeAttr('title');
    }
  };

  return SingleSelection;
});

S2.define('select2/selection/multiple',[
  'jquery',
  './base',
  '../utils'
], function ($, BaseSelection, Utils) {
  function MultipleSelection ($element, options) {
    MultipleSelection.__super__.constructor.apply(this, arguments);
  }

  Utils.Extend(MultipleSelection, BaseSelection);

  MultipleSelection.prototype.render = function () {
    var $selection = MultipleSelection.__super__.render.call(this);

    $selection[0].classList.add('select2-selection--multiple');

    $selection.html(
      '<ul class="select2-selection__rendered"></ul>'
    );

    return $selection;
  };

  MultipleSelection.prototype.bind = function (container, $container) {
    var self = this;

    MultipleSelection.__super__.bind.apply(this, arguments);

    var id = container.id + '-container';
    this.$selection.find('.select2-selection__rendered').attr('id', id);

    this.$selection.on('click', function (evt) {
      self.trigger('toggle', {
        originalEvent: evt
      });
    });

    this.$selection.on(
      'click',
      '.select2-selection__choice__remove',
      function (evt) {
        // Ignore the event if it is disabled
        if (self.isDisabled()) {
          return;
        }

        var $remove = $(this);
        var $selection = $remove.parent();

        var data = Utils.GetData($selection[0], 'data');

        self.trigger('unselect', {
          originalEvent: evt,
          data: data
        });
      }
    );

    this.$selection.on(
      'keydown',
      '.select2-selection__choice__remove',
      function (evt) {
        // Ignore the event if it is disabled
        if (self.isDisabled()) {
          return;
        }

        evt.stopPropagation();
      }
    );
  };

  MultipleSelection.prototype.clear = function () {
    var $rendered = this.$selection.find('.select2-selection__rendered');
    $rendered.empty();
    $rendered.removeAttr('title');
  };

  MultipleSelection.prototype.display = function (data, container) {
    var template = this.options.get('templateSelection');
    var escapeMarkup = this.options.get('escapeMarkup');

    return escapeMarkup(template(data, container));
  };

  MultipleSelection.prototype.selectionContainer = function () {
    var $container = $(
      '<li class="select2-selection__choice">' +
        '<button type="button" class="select2-selection__choice__remove" ' +
        'tabindex="-1">' +
          '<span aria-hidden="true">&times;</span>' +
        '</button>' +
        '<span class="select2-selection__choice__display"></span>' +
      '</li>'
    );

    return $container;
  };

  MultipleSelection.prototype.update = function (data) {
    this.clear();

    if (data.length === 0) {
      return;
    }

    var $selections = [];

    var selectionIdPrefix = this.$selection.find('.select2-selection__rendered')
      .attr('id') + '-choice-';

    for (var d = 0; d < data.length; d++) {
      var selection = data[d];

      var $selection = this.selectionContainer();
      var formatted = this.display(selection, $selection);

      var selectionId = selectionIdPrefix + Utils.generateChars(4) + '-';

      if (selection.id) {
        selectionId += selection.id;
      } else {
        selectionId += Utils.generateChars(4);
      }

      $selection.find('.select2-selection__choice__display')
        .append(formatted)
        .attr('id', selectionId);

      var title = selection.title || selection.text;

      if (title) {
        $selection.attr('title', title);
      }

      var removeItem = this.options.get('translations').get('removeItem');

      var $remove = $selection.find('.select2-selection__choice__remove');

      $remove.attr('title', removeItem());
      $remove.attr('aria-label', removeItem());
      $remove.attr('aria-describedby', selectionId);

      Utils.StoreData($selection[0], 'data', selection);

      $selections.push($selection);
    }

    var $rendered = this.$selection.find('.select2-selection__rendered');

    $rendered.append($selections);
  };

  return MultipleSelection;
});

S2.define('select2/selection/placeholder',[

], function () {
  function Placeholder (decorated, $element, options) {
    this.placeholder = this.normalizePlaceholder(options.get('placeholder'));

    decorated.call(this, $element, options);
  }

  Placeholder.prototype.normalizePlaceholder = function (_, placeholder) {
    if (typeof placeholder === 'string') {
      placeholder = {
        id: '',
        text: placeholder
      };
    }

    return placeholder;
  };

  Placeholder.prototype.createPlaceholder = function (decorated, placeholder) {
    var $placeholder = this.selectionContainer();

    $placeholder.html(this.display(placeholder));
    $placeholder[0].classList.add('select2-selection__placeholder');
    $placeholder[0].classList.remove('select2-selection__choice');

    var placeholderTitle = placeholder.title ||
      placeholder.text ||
      $placeholder.text();

    this.$selection.find('.select2-selection__rendered').attr(
      'title',
      placeholderTitle
    );

    return $placeholder;
  };

  Placeholder.prototype.update = function (decorated, data) {
    var singlePlaceholder = (
      data.length == 1 && data[0].id != this.placeholder.id
    );
    var multipleSelections = data.length > 1;

    if (multipleSelections || singlePlaceholder) {
      return decorated.call(this, data);
    }

    this.clear();

    var $placeholder = this.createPlaceholder(this.placeholder);

    this.$selection.find('.select2-selection__rendered').append($placeholder);
  };

  return Placeholder;
});

S2.define('select2/selection/allowClear',[
  'jquery',
  '../keys',
  '../utils'
], function ($, KEYS, Utils) {
  function AllowClear () { }

  AllowClear.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    if (this.placeholder == null) {
      if (this.options.get('debug') && window.console && console.error) {
        console.error(
          'Select2: The \`allowClear\` option should be used in combination ' +
          'with the \`placeholder\` option.'
        );
      }
    }

    this.$selection.on('mousedown', '.select2-selection__clear',
      function (evt) {
        self._handleClear(evt);
    });

    container.on('keypress', function (evt) {
      self._handleKeyboardClear(evt, container);
    });
  };

  AllowClear.prototype._handleClear = function (_, evt) {
    // Ignore the event if it is disabled
    if (this.isDisabled()) {
      return;
    }

    var $clear = this.$selection.find('.select2-selection__clear');

    // Ignore the event if nothing has been selected
    if ($clear.length === 0) {
      return;
    }

    evt.stopPropagation();

    var data = Utils.GetData($clear[0], 'data');

    var previousVal = this.$element.val();
    this.$element.val(this.placeholder.id);

    var unselectData = {
      data: data
    };
    this.trigger('clear', unselectData);
    if (unselectData.prevented) {
      this.$element.val(previousVal);
      return;
    }

    for (var d = 0; d < data.length; d++) {
      unselectData = {
        data: data[d]
      };

      // Trigger the \`unselect\` event, so people can prevent it from being
      // cleared.
      this.trigger('unselect', unselectData);

      // If the event was prevented, don't clear it out.
      if (unselectData.prevented) {
        this.$element.val(previousVal);
        return;
      }
    }

    this.$element.trigger('input').trigger('change');

    this.trigger('toggle', {});
  };

  AllowClear.prototype._handleKeyboardClear = function (_, evt, container) {
    if (container.isOpen()) {
      return;
    }

    if (evt.which == KEYS.DELETE || evt.which == KEYS.BACKSPACE) {
      this._handleClear(evt);
    }
  };

  AllowClear.prototype.update = function (decorated, data) {
    decorated.call(this, data);

    this.$selection.find('.select2-selection__clear').remove();
    this.$selection[0].classList.remove('select2-selection--clearable');

    if (this.$selection.find('.select2-selection__placeholder').length > 0 ||
        data.length === 0) {
      return;
    }

    var selectionId = this.$selection.find('.select2-selection__rendered')
      .attr('id');

    var removeAll = this.options.get('translations').get('removeAllItems');

    var $remove = $(
      '<button type="button" class="select2-selection__clear" tabindex="-1">' +
        '<span aria-hidden="true">&times;</span>' +
      '</button>'
    );
    $remove.attr('title', removeAll());
    $remove.attr('aria-label', removeAll());
    $remove.attr('aria-describedby', selectionId);
    Utils.StoreData($remove[0], 'data', data);

    this.$selection.prepend($remove);
    this.$selection[0].classList.add('select2-selection--clearable');
  };

  return AllowClear;
});

S2.define('select2/selection/search',[
  'jquery',
  '../utils',
  '../keys'
], function ($, Utils, KEYS) {
  function Search (decorated, $element, options) {
    decorated.call(this, $element, options);
  }

  Search.prototype.render = function (decorated) {
    var searchLabel = this.options.get('translations').get('search');
    var $search = $(
      '<span class="select2-search select2-search--inline">' +
        '<textarea class="select2-search__field"'+
        ' type="search" tabindex="-1"' +
        ' autocorrect="off" autocapitalize="none"' +
        ' spellcheck="false" role="searchbox" aria-autocomplete="list" >' +
        '</textarea>' +
      '</span>'
    );

    this.$searchContainer = $search;
    this.$search = $search.find('textarea');

    this.$search.prop('autocomplete', this.options.get('autocomplete'));
    this.$search.attr('aria-label', searchLabel());

    var $rendered = decorated.call(this);

    this._transferTabIndex();
    $rendered.append(this.$searchContainer);

    return $rendered;
  };

  Search.prototype.bind = function (decorated, container, $container) {
    var self = this;

    var resultsId = container.id + '-results';
    var selectionId = container.id + '-container';

    decorated.call(this, container, $container);

    self.$search.attr('aria-describedby', selectionId);

    container.on('open', function () {
      self.$search.attr('aria-controls', resultsId);
      self.$search.trigger('focus');
    });

    container.on('close', function () {
      self.$search.val('');
      self.resizeSearch();
      self.$search.removeAttr('aria-controls');
      self.$search.removeAttr('aria-activedescendant');
      self.$search.trigger('focus');
    });

    container.on('enable', function () {
      self.$search.prop('disabled', false);

      self._transferTabIndex();
    });

    container.on('disable', function () {
      self.$search.prop('disabled', true);
    });

    container.on('focus', function (evt) {
      self.$search.trigger('focus');
    });

    container.on('results:focus', function (params) {
      if (params.data._resultId) {
        self.$search.attr('aria-activedescendant', params.data._resultId);
      } else {
        self.$search.removeAttr('aria-activedescendant');
      }
    });

    this.$selection.on('focusin', '.select2-search--inline', function (evt) {
      self.trigger('focus', evt);
    });

    this.$selection.on('focusout', '.select2-search--inline', function (evt) {
      self._handleBlur(evt);
    });

    this.$selection.on('keydown', '.select2-search--inline', function (evt) {
      evt.stopPropagation();

      self.trigger('keypress', evt);

      self._keyUpPrevented = evt.isDefaultPrevented();

      var key = evt.which;

      if (key === KEYS.BACKSPACE && self.$search.val() === '') {
        var $previousChoice = self.$selection
          .find('.select2-selection__choice').last();

        if ($previousChoice.length > 0) {
          var item = Utils.GetData($previousChoice[0], 'data');

          self.searchRemoveChoice(item);

          evt.preventDefault();
        }
      }
    });

    this.$selection.on('click', '.select2-search--inline', function (evt) {
      if (self.$search.val()) {
        evt.stopPropagation();
      }
    });

    // Try to detect the IE version should the \`documentMode\` property that
    // is stored on the document. This is only implemented in IE and is
    // slightly cleaner than doing a user agent check.
    // This property is not available in Edge, but Edge also doesn't have
    // this bug.
    var msie = document.documentMode;
    var disableInputEvents = msie && msie <= 11;

    // Workaround for browsers which do not support the \`input\` event
    // This will prevent double-triggering of events for browsers which support
    // both the \`keyup\` and \`input\` events.
    this.$selection.on(
      'input.searchcheck',
      '.select2-search--inline',
      function (evt) {
        // IE will trigger the \`input\` event when a placeholder is used on a
        // search box. To get around this issue, we are forced to ignore all
        // \`input\` events in IE and keep using \`keyup\`.
        if (disableInputEvents) {
          self.$selection.off('input.search input.searchcheck');
          return;
        }

        // Unbind the duplicated \`keyup\` event
        self.$selection.off('keyup.search');
      }
    );

    this.$selection.on(
      'keyup.search input.search',
      '.select2-search--inline',
      function (evt) {
        // IE will trigger the \`input\` event when a placeholder is used on a
        // search box. To get around this issue, we are forced to ignore all
        // \`input\` events in IE and keep using \`keyup\`.
        if (disableInputEvents && evt.type === 'input') {
          self.$selection.off('input.search input.searchcheck');
          return;
        }

        var key = evt.which;

        // We can freely ignore events from modifier keys
        if (key == KEYS.SHIFT || key == KEYS.CTRL || key == KEYS.ALT) {
          return;
        }

        // Tabbing will be handled during the \`keydown\` phase
        if (key == KEYS.TAB) {
          return;
        }

        self.handleSearch(evt);
      }
    );
  };

  /**
   * This method will transfer the tabindex attribute from the rendered
   * selection to the search box. This allows for the search box to be used as
   * the primary focus instead of the selection container.
   *
   * @private
   */
  Search.prototype._transferTabIndex = function (decorated) {
    this.$search.attr('tabindex', this.$selection.attr('tabindex'));
    this.$selection.attr('tabindex', '-1');
  };

  Search.prototype.createPlaceholder = function (decorated, placeholder) {
    this.$search.attr('placeholder', placeholder.text);
  };

  Search.prototype.update = function (decorated, data) {
    var searchHadFocus = this.$search[0] == document.activeElement;

    this.$search.attr('placeholder', '');

    decorated.call(this, data);

    this.resizeSearch();
    if (searchHadFocus) {
      this.$search.trigger('focus');
    }
  };

  Search.prototype.handleSearch = function () {
    this.resizeSearch();

    if (!this._keyUpPrevented) {
      var input = this.$search.val();

      this.trigger('query', {
        term: input
      });
    }

    this._keyUpPrevented = false;
  };

  Search.prototype.searchRemoveChoice = function (decorated, item) {
    this.trigger('unselect', {
      data: item
    });

    this.$search.val(item.text);
    this.handleSearch();
  };

  Search.prototype.resizeSearch = function () {
    this.$search.css('width', '25px');

    var width = '100%';

    if (this.$search.attr('placeholder') === '') {
      var minimumWidth = this.$search.val().length + 1;

      width = (minimumWidth * 0.75) + 'em';
    }

    this.$search.css('width', width);
  };

  return Search;
});

S2.define('select2/selection/selectionCss',[
  '../utils'
], function (Utils) {
  function SelectionCSS () { }

  SelectionCSS.prototype.render = function (decorated) {
    var $selection = decorated.call(this);

    var selectionCssClass = this.options.get('selectionCssClass') || '';

    if (selectionCssClass.indexOf(':all:') !== -1) {
      selectionCssClass = selectionCssClass.replace(':all:', '');

      Utils.copyNonInternalCssClasses($selection[0], this.$element[0]);
    }

    $selection.addClass(selectionCssClass);

    return $selection;
  };

  return SelectionCSS;
});

S2.define('select2/selection/eventRelay',[
  'jquery'
], function ($) {
  function EventRelay () { }

  EventRelay.prototype.bind = function (decorated, container, $container) {
    var self = this;
    var relayEvents = [
      'open', 'opening',
      'close', 'closing',
      'select', 'selecting',
      'unselect', 'unselecting',
      'clear', 'clearing'
    ];

    var preventableEvents = [
      'opening', 'closing', 'selecting', 'unselecting', 'clearing'
    ];

    decorated.call(this, container, $container);

    container.on('*', function (name, params) {
      // Ignore events that should not be relayed
      if (relayEvents.indexOf(name) === -1) {
        return;
      }

      // The parameters should always be an object
      params = params || {};

      // Generate the jQuery event for the Select2 event
      var evt = $.Event('select2:' + name, {
        params: params
      });

      self.$element.trigger(evt);

      // Only handle preventable events if it was one
      if (preventableEvents.indexOf(name) === -1) {
        return;
      }

      params.prevented = evt.isDefaultPrevented();
    });
  };

  return EventRelay;
});

S2.define('select2/translation',[
  'jquery',
  'require'
], function ($, require) {
  function Translation (dict) {
    this.dict = dict || {};
  }

  Translation.prototype.all = function () {
    return this.dict;
  };

  Translation.prototype.get = function (key) {
    return this.dict[key];
  };

  Translation.prototype.extend = function (translation) {
    this.dict = $.extend({}, translation.all(), this.dict);
  };

  // Static functions

  Translation._cache = {};

  Translation.loadPath = function (path) {
    if (!(path in Translation._cache)) {
      var translations = require(path);

      Translation._cache[path] = translations;
    }

    return new Translation(Translation._cache[path]);
  };

  return Translation;
});

S2.define('select2/diacritics',[

], function () {
  var diacritics = {
    '\\u24B6': 'A',
    '\\uFF21': 'A',
    '\\u00C0': 'A',
    '\\u00C1': 'A',
    '\\u00C2': 'A',
    '\\u1EA6': 'A',
    '\\u1EA4': 'A',
    '\\u1EAA': 'A',
    '\\u1EA8': 'A',
    '\\u00C3': 'A',
    '\\u0100': 'A',
    '\\u0102': 'A',
    '\\u1EB0': 'A',
    '\\u1EAE': 'A',
    '\\u1EB4': 'A',
    '\\u1EB2': 'A',
    '\\u0226': 'A',
    '\\u01E0': 'A',
    '\\u00C4': 'A',
    '\\u01DE': 'A',
    '\\u1EA2': 'A',
    '\\u00C5': 'A',
    '\\u01FA': 'A',
    '\\u01CD': 'A',
    '\\u0200': 'A',
    '\\u0202': 'A',
    '\\u1EA0': 'A',
    '\\u1EAC': 'A',
    '\\u1EB6': 'A',
    '\\u1E00': 'A',
    '\\u0104': 'A',
    '\\u023A': 'A',
    '\\u2C6F': 'A',
    '\\uA732': 'AA',
    '\\u00C6': 'AE',
    '\\u01FC': 'AE',
    '\\u01E2': 'AE',
    '\\uA734': 'AO',
    '\\uA736': 'AU',
    '\\uA738': 'AV',
    '\\uA73A': 'AV',
    '\\uA73C': 'AY',
    '\\u24B7': 'B',
    '\\uFF22': 'B',
    '\\u1E02': 'B',
    '\\u1E04': 'B',
    '\\u1E06': 'B',
    '\\u0243': 'B',
    '\\u0182': 'B',
    '\\u0181': 'B',
    '\\u24B8': 'C',
    '\\uFF23': 'C',
    '\\u0106': 'C',
    '\\u0108': 'C',
    '\\u010A': 'C',
    '\\u010C': 'C',
    '\\u00C7': 'C',
    '\\u1E08': 'C',
    '\\u0187': 'C',
    '\\u023B': 'C',
    '\\uA73E': 'C',
    '\\u24B9': 'D',
    '\\uFF24': 'D',
    '\\u1E0A': 'D',
    '\\u010E': 'D',
    '\\u1E0C': 'D',
    '\\u1E10': 'D',
    '\\u1E12': 'D',
    '\\u1E0E': 'D',
    '\\u0110': 'D',
    '\\u018B': 'D',
    '\\u018A': 'D',
    '\\u0189': 'D',
    '\\uA779': 'D',
    '\\u01F1': 'DZ',
    '\\u01C4': 'DZ',
    '\\u01F2': 'Dz',
    '\\u01C5': 'Dz',
    '\\u24BA': 'E',
    '\\uFF25': 'E',
    '\\u00C8': 'E',
    '\\u00C9': 'E',
    '\\u00CA': 'E',
    '\\u1EC0': 'E',
    '\\u1EBE': 'E',
    '\\u1EC4': 'E',
    '\\u1EC2': 'E',
    '\\u1EBC': 'E',
    '\\u0112': 'E',
    '\\u1E14': 'E',
    '\\u1E16': 'E',
    '\\u0114': 'E',
    '\\u0116': 'E',
    '\\u00CB': 'E',
    '\\u1EBA': 'E',
    '\\u011A': 'E',
    '\\u0204': 'E',
    '\\u0206': 'E',
    '\\u1EB8': 'E',
    '\\u1EC6': 'E',
    '\\u0228': 'E',
    '\\u1E1C': 'E',
    '\\u0118': 'E',
    '\\u1E18': 'E',
    '\\u1E1A': 'E',
    '\\u0190': 'E',
    '\\u018E': 'E',
    '\\u24BB': 'F',
    '\\uFF26': 'F',
    '\\u1E1E': 'F',
    '\\u0191': 'F',
    '\\uA77B': 'F',
    '\\u24BC': 'G',
    '\\uFF27': 'G',
    '\\u01F4': 'G',
    '\\u011C': 'G',
    '\\u1E20': 'G',
    '\\u011E': 'G',
    '\\u0120': 'G',
    '\\u01E6': 'G',
    '\\u0122': 'G',
    '\\u01E4': 'G',
    '\\u0193': 'G',
    '\\uA7A0': 'G',
    '\\uA77D': 'G',
    '\\uA77E': 'G',
    '\\u24BD': 'H',
    '\\uFF28': 'H',
    '\\u0124': 'H',
    '\\u1E22': 'H',
    '\\u1E26': 'H',
    '\\u021E': 'H',
    '\\u1E24': 'H',
    '\\u1E28': 'H',
    '\\u1E2A': 'H',
    '\\u0126': 'H',
    '\\u2C67': 'H',
    '\\u2C75': 'H',
    '\\uA78D': 'H',
    '\\u24BE': 'I',
    '\\uFF29': 'I',
    '\\u00CC': 'I',
    '\\u00CD': 'I',
    '\\u00CE': 'I',
    '\\u0128': 'I',
    '\\u012A': 'I',
    '\\u012C': 'I',
    '\\u0130': 'I',
    '\\u00CF': 'I',
    '\\u1E2E': 'I',
    '\\u1EC8': 'I',
    '\\u01CF': 'I',
    '\\u0208': 'I',
    '\\u020A': 'I',
    '\\u1ECA': 'I',
    '\\u012E': 'I',
    '\\u1E2C': 'I',
    '\\u0197': 'I',
    '\\u24BF': 'J',
    '\\uFF2A': 'J',
    '\\u0134': 'J',
    '\\u0248': 'J',
    '\\u24C0': 'K',
    '\\uFF2B': 'K',
    '\\u1E30': 'K',
    '\\u01E8': 'K',
    '\\u1E32': 'K',
    '\\u0136': 'K',
    '\\u1E34': 'K',
    '\\u0198': 'K',
    '\\u2C69': 'K',
    '\\uA740': 'K',
    '\\uA742': 'K',
    '\\uA744': 'K',
    '\\uA7A2': 'K',
    '\\u24C1': 'L',
    '\\uFF2C': 'L',
    '\\u013F': 'L',
    '\\u0139': 'L',
    '\\u013D': 'L',
    '\\u1E36': 'L',
    '\\u1E38': 'L',
    '\\u013B': 'L',
    '\\u1E3C': 'L',
    '\\u1E3A': 'L',
    '\\u0141': 'L',
    '\\u023D': 'L',
    '\\u2C62': 'L',
    '\\u2C60': 'L',
    '\\uA748': 'L',
    '\\uA746': 'L',
    '\\uA780': 'L',
    '\\u01C7': 'LJ',
    '\\u01C8': 'Lj',
    '\\u24C2': 'M',
    '\\uFF2D': 'M',
    '\\u1E3E': 'M',
    '\\u1E40': 'M',
    '\\u1E42': 'M',
    '\\u2C6E': 'M',
    '\\u019C': 'M',
    '\\u24C3': 'N',
    '\\uFF2E': 'N',
    '\\u01F8': 'N',
    '\\u0143': 'N',
    '\\u00D1': 'N',
    '\\u1E44': 'N',
    '\\u0147': 'N',
    '\\u1E46': 'N',
    '\\u0145': 'N',
    '\\u1E4A': 'N',
    '\\u1E48': 'N',
    '\\u0220': 'N',
    '\\u019D': 'N',
    '\\uA790': 'N',
    '\\uA7A4': 'N',
    '\\u01CA': 'NJ',
    '\\u01CB': 'Nj',
    '\\u24C4': 'O',
    '\\uFF2F': 'O',
    '\\u00D2': 'O',
    '\\u00D3': 'O',
    '\\u00D4': 'O',
    '\\u1ED2': 'O',
    '\\u1ED0': 'O',
    '\\u1ED6': 'O',
    '\\u1ED4': 'O',
    '\\u00D5': 'O',
    '\\u1E4C': 'O',
    '\\u022C': 'O',
    '\\u1E4E': 'O',
    '\\u014C': 'O',
    '\\u1E50': 'O',
    '\\u1E52': 'O',
    '\\u014E': 'O',
    '\\u022E': 'O',
    '\\u0230': 'O',
    '\\u00D6': 'O',
    '\\u022A': 'O',
    '\\u1ECE': 'O',
    '\\u0150': 'O',
    '\\u01D1': 'O',
    '\\u020C': 'O',
    '\\u020E': 'O',
    '\\u01A0': 'O',
    '\\u1EDC': 'O',
    '\\u1EDA': 'O',
    '\\u1EE0': 'O',
    '\\u1EDE': 'O',
    '\\u1EE2': 'O',
    '\\u1ECC': 'O',
    '\\u1ED8': 'O',
    '\\u01EA': 'O',
    '\\u01EC': 'O',
    '\\u00D8': 'O',
    '\\u01FE': 'O',
    '\\u0186': 'O',
    '\\u019F': 'O',
    '\\uA74A': 'O',
    '\\uA74C': 'O',
    '\\u0152': 'OE',
    '\\u01A2': 'OI',
    '\\uA74E': 'OO',
    '\\u0222': 'OU',
    '\\u24C5': 'P',
    '\\uFF30': 'P',
    '\\u1E54': 'P',
    '\\u1E56': 'P',
    '\\u01A4': 'P',
    '\\u2C63': 'P',
    '\\uA750': 'P',
    '\\uA752': 'P',
    '\\uA754': 'P',
    '\\u24C6': 'Q',
    '\\uFF31': 'Q',
    '\\uA756': 'Q',
    '\\uA758': 'Q',
    '\\u024A': 'Q',
    '\\u24C7': 'R',
    '\\uFF32': 'R',
    '\\u0154': 'R',
    '\\u1E58': 'R',
    '\\u0158': 'R',
    '\\u0210': 'R',
    '\\u0212': 'R',
    '\\u1E5A': 'R',
    '\\u1E5C': 'R',
    '\\u0156': 'R',
    '\\u1E5E': 'R',
    '\\u024C': 'R',
    '\\u2C64': 'R',
    '\\uA75A': 'R',
    '\\uA7A6': 'R',
    '\\uA782': 'R',
    '\\u24C8': 'S',
    '\\uFF33': 'S',
    '\\u1E9E': 'S',
    '\\u015A': 'S',
    '\\u1E64': 'S',
    '\\u015C': 'S',
    '\\u1E60': 'S',
    '\\u0160': 'S',
    '\\u1E66': 'S',
    '\\u1E62': 'S',
    '\\u1E68': 'S',
    '\\u0218': 'S',
    '\\u015E': 'S',
    '\\u2C7E': 'S',
    '\\uA7A8': 'S',
    '\\uA784': 'S',
    '\\u24C9': 'T',
    '\\uFF34': 'T',
    '\\u1E6A': 'T',
    '\\u0164': 'T',
    '\\u1E6C': 'T',
    '\\u021A': 'T',
    '\\u0162': 'T',
    '\\u1E70': 'T',
    '\\u1E6E': 'T',
    '\\u0166': 'T',
    '\\u01AC': 'T',
    '\\u01AE': 'T',
    '\\u023E': 'T',
    '\\uA786': 'T',
    '\\uA728': 'TZ',
    '\\u24CA': 'U',
    '\\uFF35': 'U',
    '\\u00D9': 'U',
    '\\u00DA': 'U',
    '\\u00DB': 'U',
    '\\u0168': 'U',
    '\\u1E78': 'U',
    '\\u016A': 'U',
    '\\u1E7A': 'U',
    '\\u016C': 'U',
    '\\u00DC': 'U',
    '\\u01DB': 'U',
    '\\u01D7': 'U',
    '\\u01D5': 'U',
    '\\u01D9': 'U',
    '\\u1EE6': 'U',
    '\\u016E': 'U',
    '\\u0170': 'U',
    '\\u01D3': 'U',
    '\\u0214': 'U',
    '\\u0216': 'U',
    '\\u01AF': 'U',
    '\\u1EEA': 'U',
    '\\u1EE8': 'U',
    '\\u1EEE': 'U',
    '\\u1EEC': 'U',
    '\\u1EF0': 'U',
    '\\u1EE4': 'U',
    '\\u1E72': 'U',
    '\\u0172': 'U',
    '\\u1E76': 'U',
    '\\u1E74': 'U',
    '\\u0244': 'U',
    '\\u24CB': 'V',
    '\\uFF36': 'V',
    '\\u1E7C': 'V',
    '\\u1E7E': 'V',
    '\\u01B2': 'V',
    '\\uA75E': 'V',
    '\\u0245': 'V',
    '\\uA760': 'VY',
    '\\u24CC': 'W',
    '\\uFF37': 'W',
    '\\u1E80': 'W',
    '\\u1E82': 'W',
    '\\u0174': 'W',
    '\\u1E86': 'W',
    '\\u1E84': 'W',
    '\\u1E88': 'W',
    '\\u2C72': 'W',
    '\\u24CD': 'X',
    '\\uFF38': 'X',
    '\\u1E8A': 'X',
    '\\u1E8C': 'X',
    '\\u24CE': 'Y',
    '\\uFF39': 'Y',
    '\\u1EF2': 'Y',
    '\\u00DD': 'Y',
    '\\u0176': 'Y',
    '\\u1EF8': 'Y',
    '\\u0232': 'Y',
    '\\u1E8E': 'Y',
    '\\u0178': 'Y',
    '\\u1EF6': 'Y',
    '\\u1EF4': 'Y',
    '\\u01B3': 'Y',
    '\\u024E': 'Y',
    '\\u1EFE': 'Y',
    '\\u24CF': 'Z',
    '\\uFF3A': 'Z',
    '\\u0179': 'Z',
    '\\u1E90': 'Z',
    '\\u017B': 'Z',
    '\\u017D': 'Z',
    '\\u1E92': 'Z',
    '\\u1E94': 'Z',
    '\\u01B5': 'Z',
    '\\u0224': 'Z',
    '\\u2C7F': 'Z',
    '\\u2C6B': 'Z',
    '\\uA762': 'Z',
    '\\u24D0': 'a',
    '\\uFF41': 'a',
    '\\u1E9A': 'a',
    '\\u00E0': 'a',
    '\\u00E1': 'a',
    '\\u00E2': 'a',
    '\\u1EA7': 'a',
    '\\u1EA5': 'a',
    '\\u1EAB': 'a',
    '\\u1EA9': 'a',
    '\\u00E3': 'a',
    '\\u0101': 'a',
    '\\u0103': 'a',
    '\\u1EB1': 'a',
    '\\u1EAF': 'a',
    '\\u1EB5': 'a',
    '\\u1EB3': 'a',
    '\\u0227': 'a',
    '\\u01E1': 'a',
    '\\u00E4': 'a',
    '\\u01DF': 'a',
    '\\u1EA3': 'a',
    '\\u00E5': 'a',
    '\\u01FB': 'a',
    '\\u01CE': 'a',
    '\\u0201': 'a',
    '\\u0203': 'a',
    '\\u1EA1': 'a',
    '\\u1EAD': 'a',
    '\\u1EB7': 'a',
    '\\u1E01': 'a',
    '\\u0105': 'a',
    '\\u2C65': 'a',
    '\\u0250': 'a',
    '\\uA733': 'aa',
    '\\u00E6': 'ae',
    '\\u01FD': 'ae',
    '\\u01E3': 'ae',
    '\\uA735': 'ao',
    '\\uA737': 'au',
    '\\uA739': 'av',
    '\\uA73B': 'av',
    '\\uA73D': 'ay',
    '\\u24D1': 'b',
    '\\uFF42': 'b',
    '\\u1E03': 'b',
    '\\u1E05': 'b',
    '\\u1E07': 'b',
    '\\u0180': 'b',
    '\\u0183': 'b',
    '\\u0253': 'b',
    '\\u24D2': 'c',
    '\\uFF43': 'c',
    '\\u0107': 'c',
    '\\u0109': 'c',
    '\\u010B': 'c',
    '\\u010D': 'c',
    '\\u00E7': 'c',
    '\\u1E09': 'c',
    '\\u0188': 'c',
    '\\u023C': 'c',
    '\\uA73F': 'c',
    '\\u2184': 'c',
    '\\u24D3': 'd',
    '\\uFF44': 'd',
    '\\u1E0B': 'd',
    '\\u010F': 'd',
    '\\u1E0D': 'd',
    '\\u1E11': 'd',
    '\\u1E13': 'd',
    '\\u1E0F': 'd',
    '\\u0111': 'd',
    '\\u018C': 'd',
    '\\u0256': 'd',
    '\\u0257': 'd',
    '\\uA77A': 'd',
    '\\u01F3': 'dz',
    '\\u01C6': 'dz',
    '\\u24D4': 'e',
    '\\uFF45': 'e',
    '\\u00E8': 'e',
    '\\u00E9': 'e',
    '\\u00EA': 'e',
    '\\u1EC1': 'e',
    '\\u1EBF': 'e',
    '\\u1EC5': 'e',
    '\\u1EC3': 'e',
    '\\u1EBD': 'e',
    '\\u0113': 'e',
    '\\u1E15': 'e',
    '\\u1E17': 'e',
    '\\u0115': 'e',
    '\\u0117': 'e',
    '\\u00EB': 'e',
    '\\u1EBB': 'e',
    '\\u011B': 'e',
    '\\u0205': 'e',
    '\\u0207': 'e',
    '\\u1EB9': 'e',
    '\\u1EC7': 'e',
    '\\u0229': 'e',
    '\\u1E1D': 'e',
    '\\u0119': 'e',
    '\\u1E19': 'e',
    '\\u1E1B': 'e',
    '\\u0247': 'e',
    '\\u025B': 'e',
    '\\u01DD': 'e',
    '\\u24D5': 'f',
    '\\uFF46': 'f',
    '\\u1E1F': 'f',
    '\\u0192': 'f',
    '\\uA77C': 'f',
    '\\u24D6': 'g',
    '\\uFF47': 'g',
    '\\u01F5': 'g',
    '\\u011D': 'g',
    '\\u1E21': 'g',
    '\\u011F': 'g',
    '\\u0121': 'g',
    '\\u01E7': 'g',
    '\\u0123': 'g',
    '\\u01E5': 'g',
    '\\u0260': 'g',
    '\\uA7A1': 'g',
    '\\u1D79': 'g',
    '\\uA77F': 'g',
    '\\u24D7': 'h',
    '\\uFF48': 'h',
    '\\u0125': 'h',
    '\\u1E23': 'h',
    '\\u1E27': 'h',
    '\\u021F': 'h',
    '\\u1E25': 'h',
    '\\u1E29': 'h',
    '\\u1E2B': 'h',
    '\\u1E96': 'h',
    '\\u0127': 'h',
    '\\u2C68': 'h',
    '\\u2C76': 'h',
    '\\u0265': 'h',
    '\\u0195': 'hv',
    '\\u24D8': 'i',
    '\\uFF49': 'i',
    '\\u00EC': 'i',
    '\\u00ED': 'i',
    '\\u00EE': 'i',
    '\\u0129': 'i',
    '\\u012B': 'i',
    '\\u012D': 'i',
    '\\u00EF': 'i',
    '\\u1E2F': 'i',
    '\\u1EC9': 'i',
    '\\u01D0': 'i',
    '\\u0209': 'i',
    '\\u020B': 'i',
    '\\u1ECB': 'i',
    '\\u012F': 'i',
    '\\u1E2D': 'i',
    '\\u0268': 'i',
    '\\u0131': 'i',
    '\\u24D9': 'j',
    '\\uFF4A': 'j',
    '\\u0135': 'j',
    '\\u01F0': 'j',
    '\\u0249': 'j',
    '\\u24DA': 'k',
    '\\uFF4B': 'k',
    '\\u1E31': 'k',
    '\\u01E9': 'k',
    '\\u1E33': 'k',
    '\\u0137': 'k',
    '\\u1E35': 'k',
    '\\u0199': 'k',
    '\\u2C6A': 'k',
    '\\uA741': 'k',
    '\\uA743': 'k',
    '\\uA745': 'k',
    '\\uA7A3': 'k',
    '\\u24DB': 'l',
    '\\uFF4C': 'l',
    '\\u0140': 'l',
    '\\u013A': 'l',
    '\\u013E': 'l',
    '\\u1E37': 'l',
    '\\u1E39': 'l',
    '\\u013C': 'l',
    '\\u1E3D': 'l',
    '\\u1E3B': 'l',
    '\\u017F': 'l',
    '\\u0142': 'l',
    '\\u019A': 'l',
    '\\u026B': 'l',
    '\\u2C61': 'l',
    '\\uA749': 'l',
    '\\uA781': 'l',
    '\\uA747': 'l',
    '\\u01C9': 'lj',
    '\\u24DC': 'm',
    '\\uFF4D': 'm',
    '\\u1E3F': 'm',
    '\\u1E41': 'm',
    '\\u1E43': 'm',
    '\\u0271': 'm',
    '\\u026F': 'm',
    '\\u24DD': 'n',
    '\\uFF4E': 'n',
    '\\u01F9': 'n',
    '\\u0144': 'n',
    '\\u00F1': 'n',
    '\\u1E45': 'n',
    '\\u0148': 'n',
    '\\u1E47': 'n',
    '\\u0146': 'n',
    '\\u1E4B': 'n',
    '\\u1E49': 'n',
    '\\u019E': 'n',
    '\\u0272': 'n',
    '\\u0149': 'n',
    '\\uA791': 'n',
    '\\uA7A5': 'n',
    '\\u01CC': 'nj',
    '\\u24DE': 'o',
    '\\uFF4F': 'o',
    '\\u00F2': 'o',
    '\\u00F3': 'o',
    '\\u00F4': 'o',
    '\\u1ED3': 'o',
    '\\u1ED1': 'o',
    '\\u1ED7': 'o',
    '\\u1ED5': 'o',
    '\\u00F5': 'o',
    '\\u1E4D': 'o',
    '\\u022D': 'o',
    '\\u1E4F': 'o',
    '\\u014D': 'o',
    '\\u1E51': 'o',
    '\\u1E53': 'o',
    '\\u014F': 'o',
    '\\u022F': 'o',
    '\\u0231': 'o',
    '\\u00F6': 'o',
    '\\u022B': 'o',
    '\\u1ECF': 'o',
    '\\u0151': 'o',
    '\\u01D2': 'o',
    '\\u020D': 'o',
    '\\u020F': 'o',
    '\\u01A1': 'o',
    '\\u1EDD': 'o',
    '\\u1EDB': 'o',
    '\\u1EE1': 'o',
    '\\u1EDF': 'o',
    '\\u1EE3': 'o',
    '\\u1ECD': 'o',
    '\\u1ED9': 'o',
    '\\u01EB': 'o',
    '\\u01ED': 'o',
    '\\u00F8': 'o',
    '\\u01FF': 'o',
    '\\u0254': 'o',
    '\\uA74B': 'o',
    '\\uA74D': 'o',
    '\\u0275': 'o',
    '\\u0153': 'oe',
    '\\u01A3': 'oi',
    '\\u0223': 'ou',
    '\\uA74F': 'oo',
    '\\u24DF': 'p',
    '\\uFF50': 'p',
    '\\u1E55': 'p',
    '\\u1E57': 'p',
    '\\u01A5': 'p',
    '\\u1D7D': 'p',
    '\\uA751': 'p',
    '\\uA753': 'p',
    '\\uA755': 'p',
    '\\u24E0': 'q',
    '\\uFF51': 'q',
    '\\u024B': 'q',
    '\\uA757': 'q',
    '\\uA759': 'q',
    '\\u24E1': 'r',
    '\\uFF52': 'r',
    '\\u0155': 'r',
    '\\u1E59': 'r',
    '\\u0159': 'r',
    '\\u0211': 'r',
    '\\u0213': 'r',
    '\\u1E5B': 'r',
    '\\u1E5D': 'r',
    '\\u0157': 'r',
    '\\u1E5F': 'r',
    '\\u024D': 'r',
    '\\u027D': 'r',
    '\\uA75B': 'r',
    '\\uA7A7': 'r',
    '\\uA783': 'r',
    '\\u24E2': 's',
    '\\uFF53': 's',
    '\\u00DF': 's',
    '\\u015B': 's',
    '\\u1E65': 's',
    '\\u015D': 's',
    '\\u1E61': 's',
    '\\u0161': 's',
    '\\u1E67': 's',
    '\\u1E63': 's',
    '\\u1E69': 's',
    '\\u0219': 's',
    '\\u015F': 's',
    '\\u023F': 's',
    '\\uA7A9': 's',
    '\\uA785': 's',
    '\\u1E9B': 's',
    '\\u24E3': 't',
    '\\uFF54': 't',
    '\\u1E6B': 't',
    '\\u1E97': 't',
    '\\u0165': 't',
    '\\u1E6D': 't',
    '\\u021B': 't',
    '\\u0163': 't',
    '\\u1E71': 't',
    '\\u1E6F': 't',
    '\\u0167': 't',
    '\\u01AD': 't',
    '\\u0288': 't',
    '\\u2C66': 't',
    '\\uA787': 't',
    '\\uA729': 'tz',
    '\\u24E4': 'u',
    '\\uFF55': 'u',
    '\\u00F9': 'u',
    '\\u00FA': 'u',
    '\\u00FB': 'u',
    '\\u0169': 'u',
    '\\u1E79': 'u',
    '\\u016B': 'u',
    '\\u1E7B': 'u',
    '\\u016D': 'u',
    '\\u00FC': 'u',
    '\\u01DC': 'u',
    '\\u01D8': 'u',
    '\\u01D6': 'u',
    '\\u01DA': 'u',
    '\\u1EE7': 'u',
    '\\u016F': 'u',
    '\\u0171': 'u',
    '\\u01D4': 'u',
    '\\u0215': 'u',
    '\\u0217': 'u',
    '\\u01B0': 'u',
    '\\u1EEB': 'u',
    '\\u1EE9': 'u',
    '\\u1EEF': 'u',
    '\\u1EED': 'u',
    '\\u1EF1': 'u',
    '\\u1EE5': 'u',
    '\\u1E73': 'u',
    '\\u0173': 'u',
    '\\u1E77': 'u',
    '\\u1E75': 'u',
    '\\u0289': 'u',
    '\\u24E5': 'v',
    '\\uFF56': 'v',
    '\\u1E7D': 'v',
    '\\u1E7F': 'v',
    '\\u028B': 'v',
    '\\uA75F': 'v',
    '\\u028C': 'v',
    '\\uA761': 'vy',
    '\\u24E6': 'w',
    '\\uFF57': 'w',
    '\\u1E81': 'w',
    '\\u1E83': 'w',
    '\\u0175': 'w',
    '\\u1E87': 'w',
    '\\u1E85': 'w',
    '\\u1E98': 'w',
    '\\u1E89': 'w',
    '\\u2C73': 'w',
    '\\u24E7': 'x',
    '\\uFF58': 'x',
    '\\u1E8B': 'x',
    '\\u1E8D': 'x',
    '\\u24E8': 'y',
    '\\uFF59': 'y',
    '\\u1EF3': 'y',
    '\\u00FD': 'y',
    '\\u0177': 'y',
    '\\u1EF9': 'y',
    '\\u0233': 'y',
    '\\u1E8F': 'y',
    '\\u00FF': 'y',
    '\\u1EF7': 'y',
    '\\u1E99': 'y',
    '\\u1EF5': 'y',
    '\\u01B4': 'y',
    '\\u024F': 'y',
    '\\u1EFF': 'y',
    '\\u24E9': 'z',
    '\\uFF5A': 'z',
    '\\u017A': 'z',
    '\\u1E91': 'z',
    '\\u017C': 'z',
    '\\u017E': 'z',
    '\\u1E93': 'z',
    '\\u1E95': 'z',
    '\\u01B6': 'z',
    '\\u0225': 'z',
    '\\u0240': 'z',
    '\\u2C6C': 'z',
    '\\uA763': 'z',
    '\\u0386': '\\u0391',
    '\\u0388': '\\u0395',
    '\\u0389': '\\u0397',
    '\\u038A': '\\u0399',
    '\\u03AA': '\\u0399',
    '\\u038C': '\\u039F',
    '\\u038E': '\\u03A5',
    '\\u03AB': '\\u03A5',
    '\\u038F': '\\u03A9',
    '\\u03AC': '\\u03B1',
    '\\u03AD': '\\u03B5',
    '\\u03AE': '\\u03B7',
    '\\u03AF': '\\u03B9',
    '\\u03CA': '\\u03B9',
    '\\u0390': '\\u03B9',
    '\\u03CC': '\\u03BF',
    '\\u03CD': '\\u03C5',
    '\\u03CB': '\\u03C5',
    '\\u03B0': '\\u03C5',
    '\\u03CE': '\\u03C9',
    '\\u03C2': '\\u03C3',
    '\\u2019': '\\''
  };

  return diacritics;
});

S2.define('select2/data/base',[
  '../utils'
], function (Utils) {
  function BaseAdapter ($element, options) {
    BaseAdapter.__super__.constructor.call(this);
  }

  Utils.Extend(BaseAdapter, Utils.Observable);

  BaseAdapter.prototype.current = function (callback) {
    throw new Error('The \`current\` method must be defined in child classes.');
  };

  BaseAdapter.prototype.query = function (params, callback) {
    throw new Error('The \`query\` method must be defined in child classes.');
  };

  BaseAdapter.prototype.bind = function (container, $container) {
    // Can be implemented in subclasses
  };

  BaseAdapter.prototype.destroy = function () {
    // Can be implemented in subclasses
  };

  BaseAdapter.prototype.generateResultId = function (container, data) {
    var id = container.id + '-result-';

    id += Utils.generateChars(4);

    if (data.id != null) {
      id += '-' + data.id.toString();
    } else {
      id += '-' + Utils.generateChars(4);
    }
    return id;
  };

  return BaseAdapter;
});

S2.define('select2/data/select',[
  './base',
  '../utils',
  'jquery'
], function (BaseAdapter, Utils, $) {
  function SelectAdapter ($element, options) {
    this.$element = $element;
    this.options = options;

    SelectAdapter.__super__.constructor.call(this);
  }

  Utils.Extend(SelectAdapter, BaseAdapter);

  SelectAdapter.prototype.current = function (callback) {
    var self = this;

    var data = Array.prototype.map.call(
      this.$element[0].querySelectorAll(':checked'),
      function (selectedElement) {
        return self.item($(selectedElement));
      }
    );

    callback(data);
  };

  SelectAdapter.prototype.select = function (data) {
    var self = this;

    data.selected = true;

    // If data.element is a DOM node, use it instead
    if (
      data.element != null && data.element.tagName.toLowerCase() === 'option'
    ) {
      data.element.selected = true;

      this.$element.trigger('input').trigger('change');

      return;
    }

    if (this.$element.prop('multiple')) {
      this.current(function (currentData) {
        var val = [];

        data = [data];
        data.push.apply(data, currentData);

        for (var d = 0; d < data.length; d++) {
          var id = data[d].id;

          if (val.indexOf(id) === -1) {
            val.push(id);
          }
        }

        self.$element.val(val);
        self.$element.trigger('input').trigger('change');
      });
    } else {
      var val = data.id;

      this.$element.val(val);
      this.$element.trigger('input').trigger('change');
    }
  };

  SelectAdapter.prototype.unselect = function (data) {
    var self = this;

    if (!this.$element.prop('multiple')) {
      return;
    }

    data.selected = false;

    if (
      data.element != null &&
      data.element.tagName.toLowerCase() === 'option'
    ) {
      data.element.selected = false;

      this.$element.trigger('input').trigger('change');

      return;
    }

    this.current(function (currentData) {
      var val = [];

      for (var d = 0; d < currentData.length; d++) {
        var id = currentData[d].id;

        if (id !== data.id && val.indexOf(id) === -1) {
          val.push(id);
        }
      }

      self.$element.val(val);

      self.$element.trigger('input').trigger('change');
    });
  };

  SelectAdapter.prototype.bind = function (container, $container) {
    var self = this;

    this.container = container;

    container.on('select', function (params) {
      self.select(params.data);
    });

    container.on('unselect', function (params) {
      self.unselect(params.data);
    });
  };

  SelectAdapter.prototype.destroy = function () {
    // Remove anything added to child elements
    this.$element.find('*').each(function () {
      // Remove any custom data set by Select2
      Utils.RemoveData(this);
    });
  };

  SelectAdapter.prototype.query = function (params, callback) {
    var data = [];
    var self = this;

    var $options = this.$element.children();

    $options.each(function () {
      if (
        this.tagName.toLowerCase() !== 'option' &&
        this.tagName.toLowerCase() !== 'optgroup'
      ) {
        return;
      }

      var $option = $(this);

      var option = self.item($option);

      var matches = self.matches(params, option);

      if (matches !== null) {
        data.push(matches);
      }
    });

    callback({
      results: data
    });
  };

  SelectAdapter.prototype.addOptions = function ($options) {
    this.$element.append($options);
  };

  SelectAdapter.prototype.option = function (data) {
    var option;

    if (data.children) {
      option = document.createElement('optgroup');
      option.label = data.text;
    } else {
      option = document.createElement('option');

      if (option.textContent !== undefined) {
        option.textContent = data.text;
      } else {
        option.innerText = data.text;
      }
    }

    if (data.id !== undefined) {
      option.value = data.id;
    }

    if (data.disabled) {
      option.disabled = true;
    }

    if (data.selected) {
      option.selected = true;
    }

    if (data.title) {
      option.title = data.title;
    }

    var normalizedData = this._normalizeItem(data);
    normalizedData.element = option;

    // Override the option's data with the combined data
    Utils.StoreData(option, 'data', normalizedData);

    return $(option);
  };

  SelectAdapter.prototype.item = function ($option) {
    var data = {};

    data = Utils.GetData($option[0], 'data');

    if (data != null) {
      return data;
    }

    var option = $option[0];

    if (option.tagName.toLowerCase() === 'option') {
      data = {
        id: $option.val(),
        text: $option.text(),
        disabled: $option.prop('disabled'),
        selected: $option.prop('selected'),
        title: $option.prop('title')
      };
    } else if (option.tagName.toLowerCase() === 'optgroup') {
      data = {
        text: $option.prop('label'),
        children: [],
        title: $option.prop('title')
      };

      var $children = $option.children('option');
      var children = [];

      for (var c = 0; c < $children.length; c++) {
        var $child = $($children[c]);

        var child = this.item($child);

        children.push(child);
      }

      data.children = children;
    }

    data = this._normalizeItem(data);
    data.element = $option[0];

    Utils.StoreData($option[0], 'data', data);

    return data;
  };

  SelectAdapter.prototype._normalizeItem = function (item) {
    if (item !== Object(item)) {
      item = {
        id: item,
        text: item
      };
    }

    item = $.extend({}, {
      text: ''
    }, item);

    var defaults = {
      selected: false,
      disabled: false
    };

    if (item.id != null) {
      item.id = item.id.toString();
    }

    if (item.text != null) {
      item.text = item.text.toString();
    }

    if (item._resultId == null && item.id && this.container != null) {
      item._resultId = this.generateResultId(this.container, item);
    }

    return $.extend({}, defaults, item);
  };

  SelectAdapter.prototype.matches = function (params, data) {
    var matcher = this.options.get('matcher');

    return matcher(params, data);
  };

  return SelectAdapter;
});

S2.define('select2/data/array',[
  './select',
  '../utils',
  'jquery'
], function (SelectAdapter, Utils, $) {
  function ArrayAdapter ($element, options) {
    this._dataToConvert = options.get('data') || [];

    ArrayAdapter.__super__.constructor.call(this, $element, options);
  }

  Utils.Extend(ArrayAdapter, SelectAdapter);

  ArrayAdapter.prototype.bind = function (container, $container) {
    ArrayAdapter.__super__.bind.call(this, container, $container);

    this.addOptions(this.convertToOptions(this._dataToConvert));
  };

  ArrayAdapter.prototype.select = function (data) {
    var $option = this.$element.find('option').filter(function (i, elm) {
      return elm.value == data.id.toString();
    });

    if ($option.length === 0) {
      $option = this.option(data);

      this.addOptions($option);
    }

    ArrayAdapter.__super__.select.call(this, data);
  };

  ArrayAdapter.prototype.convertToOptions = function (data) {
    var self = this;

    var $existing = this.$element.find('option');
    var existingIds = $existing.map(function () {
      return self.item($(this)).id;
    }).get();

    var $options = [];

    // Filter out all items except for the one passed in the argument
    function onlyItem (item) {
      return function () {
        return $(this).val() == item.id;
      };
    }

    for (var d = 0; d < data.length; d++) {
      var item = this._normalizeItem(data[d]);

      // Skip items which were pre-loaded, only merge the data
      if (existingIds.indexOf(item.id) >= 0) {
        var $existingOption = $existing.filter(onlyItem(item));

        var existingData = this.item($existingOption);
        var newData = $.extend(true, {}, item, existingData);

        var $newOption = this.option(newData);

        $existingOption.replaceWith($newOption);

        continue;
      }

      var $option = this.option(item);

      if (item.children) {
        var $children = this.convertToOptions(item.children);

        $option.append($children);
      }

      $options.push($option);
    }

    return $options;
  };

  return ArrayAdapter;
});

S2.define('select2/data/ajax',[
  './array',
  '../utils',
  'jquery'
], function (ArrayAdapter, Utils, $) {
  function AjaxAdapter ($element, options) {
    this.ajaxOptions = this._applyDefaults(options.get('ajax'));

    if (this.ajaxOptions.processResults != null) {
      this.processResults = this.ajaxOptions.processResults;
    }

    AjaxAdapter.__super__.constructor.call(this, $element, options);
  }

  Utils.Extend(AjaxAdapter, ArrayAdapter);

  AjaxAdapter.prototype._applyDefaults = function (options) {
    var defaults = {
      data: function (params) {
        return $.extend({}, params, {
          q: params.term
        });
      },
      transport: function (params, success, failure) {
        var $request = $.ajax(params);

        $request.then(success);
        $request.fail(failure);

        return $request;
      }
    };

    return $.extend({}, defaults, options, true);
  };

  AjaxAdapter.prototype.processResults = function (results) {
    return results;
  };

  AjaxAdapter.prototype.query = function (params, callback) {
    var matches = [];
    var self = this;

    if (this._request != null) {
      // JSONP requests cannot always be aborted
      if (typeof this._request.abort === 'function') {
        this._request.abort();
      }

      this._request = null;
    }

    var options = $.extend({
      type: 'GET'
    }, this.ajaxOptions);

    if (typeof options.url === 'function') {
      options.url = options.url.call(this.$element, params);
    }

    if (typeof options.data === 'function') {
      options.data = options.data.call(this.$element, params);
    }

    function request () {
      var $request = options.transport(options, function (data) {
        var results = self.processResults(data, params);

        if (self.options.get('debug') && window.console && console.error) {
          // Check to make sure that the response included a \`results\` key.
          if (!results || !results.results || !Array.isArray(results.results)) {
            console.error(
              'Select2: The AJAX results did not return an array in the ' +
              '\`results\` key of the response.'
            );
          }
        }

        callback(results);
      }, function () {
        // Attempt to detect if a request was aborted
        // Only works if the transport exposes a status property
        if ('status' in $request &&
            ($request.status === 0 || $request.status === '0')) {
          return;
        }

        self.trigger('results:message', {
          message: 'errorLoading'
        });
      });

      self._request = $request;
    }

    if (this.ajaxOptions.delay && params.term != null) {
      if (this._queryTimeout) {
        window.clearTimeout(this._queryTimeout);
      }

      this._queryTimeout = window.setTimeout(request, this.ajaxOptions.delay);
    } else {
      request();
    }
  };

  return AjaxAdapter;
});

S2.define('select2/data/tags',[
  'jquery'
], function ($) {
  function Tags (decorated, $element, options) {
    var tags = options.get('tags');

    var createTag = options.get('createTag');

    if (createTag !== undefined) {
      this.createTag = createTag;
    }

    var insertTag = options.get('insertTag');

    if (insertTag !== undefined) {
        this.insertTag = insertTag;
    }

    decorated.call(this, $element, options);

    if (Array.isArray(tags)) {
      for (var t = 0; t < tags.length; t++) {
        var tag = tags[t];
        var item = this._normalizeItem(tag);

        var $option = this.option(item);

        this.$element.append($option);
      }
    }
  }

  Tags.prototype.query = function (decorated, params, callback) {
    var self = this;

    this._removeOldTags();

    if (params.term == null || params.page != null) {
      decorated.call(this, params, callback);
      return;
    }

    function wrapper (obj, child) {
      var data = obj.results;

      for (var i = 0; i < data.length; i++) {
        var option = data[i];

        var checkChildren = (
          option.children != null &&
          !wrapper({
            results: option.children
          }, true)
        );

        var optionText = (option.text || '').toUpperCase();
        var paramsTerm = (params.term || '').toUpperCase();

        var checkText = optionText === paramsTerm;

        if (checkText || checkChildren) {
          if (child) {
            return false;
          }

          obj.data = data;
          callback(obj);

          return;
        }
      }

      if (child) {
        return true;
      }

      var tag = self.createTag(params);

      if (tag != null) {
        var $option = self.option(tag);
        $option.attr('data-select2-tag', 'true');

        self.addOptions([$option]);

        self.insertTag(data, tag);
      }

      obj.results = data;

      callback(obj);
    }

    decorated.call(this, params, wrapper);
  };

  Tags.prototype.createTag = function (decorated, params) {
    if (params.term == null) {
      return null;
    }

    var term = params.term.trim();

    if (term === '') {
      return null;
    }

    return {
      id: term,
      text: term
    };
  };

  Tags.prototype.insertTag = function (_, data, tag) {
    data.unshift(tag);
  };

  Tags.prototype._removeOldTags = function (_) {
    var $options = this.$element.find('option[data-select2-tag]');

    $options.each(function () {
      if (this.selected) {
        return;
      }

      $(this).remove();
    });
  };

  return Tags;
});

S2.define('select2/data/tokenizer',[
  'jquery'
], function ($) {
  function Tokenizer (decorated, $element, options) {
    var tokenizer = options.get('tokenizer');

    if (tokenizer !== undefined) {
      this.tokenizer = tokenizer;
    }

    decorated.call(this, $element, options);
  }

  Tokenizer.prototype.bind = function (decorated, container, $container) {
    decorated.call(this, container, $container);

    this.$search =  container.dropdown.$search || container.selection.$search ||
      $container.find('.select2-search__field');
  };

  Tokenizer.prototype.query = function (decorated, params, callback) {
    var self = this;

    function createAndSelect (data) {
      // Normalize the data object so we can use it for checks
      var item = self._normalizeItem(data);

      // Check if the data object already exists as a tag
      // Select it if it doesn't
      var $existingOptions = self.$element.find('option').filter(function () {
        return $(this).val() === item.id;
      });

      // If an existing option wasn't found for it, create the option
      if (!$existingOptions.length) {
        var $option = self.option(item);
        $option.attr('data-select2-tag', true);

        self._removeOldTags();
        self.addOptions([$option]);
      }

      // Select the item, now that we know there is an option for it
      select(item);
    }

    function select (data) {
      self.trigger('select', {
        data: data
      });
    }

    params.term = params.term || '';

    var tokenData = this.tokenizer(params, this.options, createAndSelect);

    if (tokenData.term !== params.term) {
      // Replace the search term if we have the search box
      if (this.$search.length) {
        this.$search.val(tokenData.term);
        this.$search.trigger('focus');
      }

      params.term = tokenData.term;
    }

    decorated.call(this, params, callback);
  };

  Tokenizer.prototype.tokenizer = function (_, params, options, callback) {
    var separators = options.get('tokenSeparators') || [];
    var term = params.term;
    var i = 0;

    var createTag = this.createTag || function (params) {
      return {
        id: params.term,
        text: params.term
      };
    };

    while (i < term.length) {
      var termChar = term[i];

      if (separators.indexOf(termChar) === -1) {
        i++;

        continue;
      }

      var part = term.substr(0, i);
      var partParams = $.extend({}, params, {
        term: part
      });

      var data = createTag(partParams);

      if (data == null) {
        i++;
        continue;
      }

      callback(data);

      // Reset the term to not include the tokenized portion
      term = term.substr(i + 1) || '';
      i = 0;
    }

    return {
      term: term
    };
  };

  return Tokenizer;
});

S2.define('select2/data/minimumInputLength',[

], function () {
  function MinimumInputLength (decorated, $e, options) {
    this.minimumInputLength = options.get('minimumInputLength');

    decorated.call(this, $e, options);
  }

  MinimumInputLength.prototype.query = function (decorated, params, callback) {
    params.term = params.term || '';

    if (params.term.length < this.minimumInputLength) {
      this.trigger('results:message', {
        message: 'inputTooShort',
        args: {
          minimum: this.minimumInputLength,
          input: params.term,
          params: params
        }
      });

      return;
    }

    decorated.call(this, params, callback);
  };

  return MinimumInputLength;
});

S2.define('select2/data/maximumInputLength',[

], function () {
  function MaximumInputLength (decorated, $e, options) {
    this.maximumInputLength = options.get('maximumInputLength');

    decorated.call(this, $e, options);
  }

  MaximumInputLength.prototype.query = function (decorated, params, callback) {
    params.term = params.term || '';

    if (this.maximumInputLength > 0 &&
        params.term.length > this.maximumInputLength) {
      this.trigger('results:message', {
        message: 'inputTooLong',
        args: {
          maximum: this.maximumInputLength,
          input: params.term,
          params: params
        }
      });

      return;
    }

    decorated.call(this, params, callback);
  };

  return MaximumInputLength;
});

S2.define('select2/data/maximumSelectionLength',[

], function (){
  function MaximumSelectionLength (decorated, $e, options) {
    this.maximumSelectionLength = options.get('maximumSelectionLength');

    decorated.call(this, $e, options);
  }

  MaximumSelectionLength.prototype.bind =
    function (decorated, container, $container) {
      var self = this;

      decorated.call(this, container, $container);

      container.on('select', function () {
        self._checkIfMaximumSelected();
      });
  };

  MaximumSelectionLength.prototype.query =
    function (decorated, params, callback) {
      var self = this;

      this._checkIfMaximumSelected(function () {
        decorated.call(self, params, callback);
      });
  };

  MaximumSelectionLength.prototype._checkIfMaximumSelected =
    function (_, successCallback) {
      var self = this;

      this.current(function (currentData) {
        var count = currentData != null ? currentData.length : 0;
        if (self.maximumSelectionLength > 0 &&
          count >= self.maximumSelectionLength) {
          self.trigger('results:message', {
            message: 'maximumSelected',
            args: {
              maximum: self.maximumSelectionLength
            }
          });
          return;
        }

        if (successCallback) {
          successCallback();
        }
      });
  };

  return MaximumSelectionLength;
});

S2.define('select2/dropdown',[
  'jquery',
  './utils'
], function ($, Utils) {
  function Dropdown ($element, options) {
    this.$element = $element;
    this.options = options;

    Dropdown.__super__.constructor.call(this);
  }

  Utils.Extend(Dropdown, Utils.Observable);

  Dropdown.prototype.render = function () {
    var $dropdown = $(
      '<span class="select2-dropdown">' +
        '<span class="select2-results"></span>' +
      '</span>'
    );

    $dropdown.attr('dir', this.options.get('dir'));

    this.$dropdown = $dropdown;

    return $dropdown;
  };

  Dropdown.prototype.bind = function () {
    // Should be implemented in subclasses
  };

  Dropdown.prototype.position = function ($dropdown, $container) {
    // Should be implemented in subclasses
  };

  Dropdown.prototype.destroy = function () {
    // Remove the dropdown from the DOM
    this.$dropdown.remove();
  };

  return Dropdown;
});

S2.define('select2/dropdown/search',[
  'jquery'
], function ($) {
  function Search () { }

  Search.prototype.render = function (decorated) {
    var $rendered = decorated.call(this);
    var searchLabel = this.options.get('translations').get('search');

    var $search = $(
      '<span class="select2-search select2-search--dropdown">' +
        '<input class="select2-search__field" type="search" tabindex="-1"' +
        ' autocorrect="off" autocapitalize="none"' +
        ' spellcheck="false" role="searchbox" aria-autocomplete="list" />' +
      '</span>'
    );

    this.$searchContainer = $search;
    this.$search = $search.find('input');

    this.$search.prop('autocomplete', this.options.get('autocomplete'));
    this.$search.attr('aria-label', searchLabel());

    $rendered.prepend($search);

    return $rendered;
  };

  Search.prototype.bind = function (decorated, container, $container) {
    var self = this;

    var resultsId = container.id + '-results';

    decorated.call(this, container, $container);

    this.$search.on('keydown', function (evt) {
      self.trigger('keypress', evt);

      self._keyUpPrevented = evt.isDefaultPrevented();
    });

    // Workaround for browsers which do not support the \`input\` event
    // This will prevent double-triggering of events for browsers which support
    // both the \`keyup\` and \`input\` events.
    this.$search.on('input', function (evt) {
      // Unbind the duplicated \`keyup\` event
      $(this).off('keyup');
    });

    this.$search.on('keyup input', function (evt) {
      self.handleSearch(evt);
    });

    container.on('open', function () {
      self.$search.attr('tabindex', 0);
      self.$search.attr('aria-controls', resultsId);

      self.$search.trigger('focus');

      window.setTimeout(function () {
        self.$search.trigger('focus');
      }, 0);
    });

    container.on('close', function () {
      self.$search.attr('tabindex', -1);
      self.$search.removeAttr('aria-controls');
      self.$search.removeAttr('aria-activedescendant');

      self.$search.val('');
      self.$search.trigger('blur');
    });

    container.on('focus', function () {
      if (!container.isOpen()) {
        self.$search.trigger('focus');
      }
    });

    container.on('results:all', function (params) {
      if (params.query.term == null || params.query.term === '') {
        var showSearch = self.showSearch(params);

        if (showSearch) {
          self.$searchContainer[0].classList.remove('select2-search--hide');
        } else {
          self.$searchContainer[0].classList.add('select2-search--hide');
        }
      }
    });

    container.on('results:focus', function (params) {
      if (params.data._resultId) {
        self.$search.attr('aria-activedescendant', params.data._resultId);
      } else {
        self.$search.removeAttr('aria-activedescendant');
      }
    });
  };

  Search.prototype.handleSearch = function (evt) {
    if (!this._keyUpPrevented) {
      var input = this.$search.val();

      this.trigger('query', {
        term: input
      });
    }

    this._keyUpPrevented = false;
  };

  Search.prototype.showSearch = function (_, params) {
    return true;
  };

  return Search;
});

S2.define('select2/dropdown/hidePlaceholder',[

], function () {
  function HidePlaceholder (decorated, $element, options, dataAdapter) {
    this.placeholder = this.normalizePlaceholder(options.get('placeholder'));

    decorated.call(this, $element, options, dataAdapter);
  }

  HidePlaceholder.prototype.append = function (decorated, data) {
    data.results = this.removePlaceholder(data.results);

    decorated.call(this, data);
  };

  HidePlaceholder.prototype.normalizePlaceholder = function (_, placeholder) {
    if (typeof placeholder === 'string') {
      placeholder = {
        id: '',
        text: placeholder
      };
    }

    return placeholder;
  };

  HidePlaceholder.prototype.removePlaceholder = function (_, data) {
    var modifiedData = data.slice(0);

    for (var d = data.length - 1; d >= 0; d--) {
      var item = data[d];

      if (this.placeholder.id === item.id) {
        modifiedData.splice(d, 1);
      }
    }

    return modifiedData;
  };

  return HidePlaceholder;
});

S2.define('select2/dropdown/infiniteScroll',[
  'jquery'
], function ($) {
  function InfiniteScroll (decorated, $element, options, dataAdapter) {
    this.lastParams = {};

    decorated.call(this, $element, options, dataAdapter);

    this.$loadingMore = this.createLoadingMore();
    this.loading = false;
  }

  InfiniteScroll.prototype.append = function (decorated, data) {
    this.$loadingMore.remove();
    this.loading = false;

    decorated.call(this, data);

    if (this.showLoadingMore(data)) {
      this.$results.append(this.$loadingMore);
      this.loadMoreIfNeeded();
    }
  };

  InfiniteScroll.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('query', function (params) {
      self.lastParams = params;
      self.loading = true;
    });

    container.on('query:append', function (params) {
      self.lastParams = params;
      self.loading = true;
    });

    this.$results.on('scroll', this.loadMoreIfNeeded.bind(this));
  };

  InfiniteScroll.prototype.loadMoreIfNeeded = function () {
    var isLoadMoreVisible = $.contains(
      document.documentElement,
      this.$loadingMore[0]
    );

    if (this.loading || !isLoadMoreVisible) {
      return;
    }

    var currentOffset = this.$results.offset().top +
      this.$results.outerHeight(false);
    var loadingMoreOffset = this.$loadingMore.offset().top +
      this.$loadingMore.outerHeight(false);

    if (currentOffset + 50 >= loadingMoreOffset) {
      this.loadMore();
    }
  };

  InfiniteScroll.prototype.loadMore = function () {
    this.loading = true;

    var params = $.extend({}, {page: 1}, this.lastParams);

    params.page++;

    this.trigger('query:append', params);
  };

  InfiniteScroll.prototype.showLoadingMore = function (_, data) {
    return data.pagination && data.pagination.more;
  };

  InfiniteScroll.prototype.createLoadingMore = function () {
    var $option = $(
      '<li ' +
      'class="select2-results__option select2-results__option--load-more"' +
      'role="option" aria-disabled="true"></li>'
    );

    var message = this.options.get('translations').get('loadingMore');

    $option.html(message(this.lastParams));

    return $option;
  };

  return InfiniteScroll;
});

S2.define('select2/dropdown/attachBody',[
  'jquery',
  '../utils'
], function ($, Utils) {
  function AttachBody (decorated, $element, options) {
    this.$dropdownParent = $(options.get('dropdownParent') || document.body);

    decorated.call(this, $element, options);
  }

  AttachBody.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('open', function () {
      self._showDropdown();
      self._attachPositioningHandler(container);

      // Must bind after the results handlers to ensure correct sizing
      self._bindContainerResultHandlers(container);
    });

    container.on('close', function () {
      self._hideDropdown();
      self._detachPositioningHandler(container);
    });

    this.$dropdownContainer.on('mousedown', function (evt) {
      evt.stopPropagation();
    });
  };

  AttachBody.prototype.destroy = function (decorated) {
    decorated.call(this);

    this.$dropdownContainer.remove();
  };

  AttachBody.prototype.position = function (decorated, $dropdown, $container) {
    // Clone all of the container classes
    $dropdown.attr('class', $container.attr('class'));

    $dropdown[0].classList.remove('select2');
    $dropdown[0].classList.add('select2-container--open');

    $dropdown.css({
      position: 'absolute',
      top: -999999
    });

    this.$container = $container;
  };

  AttachBody.prototype.render = function (decorated) {
    var $container = $('<span></span>');

    var $dropdown = decorated.call(this);
    $container.append($dropdown);

    this.$dropdownContainer = $container;

    return $container;
  };

  AttachBody.prototype._hideDropdown = function (decorated) {
    this.$dropdownContainer.detach();
  };

  AttachBody.prototype._bindContainerResultHandlers =
      function (decorated, container) {

    // These should only be bound once
    if (this._containerResultsHandlersBound) {
      return;
    }

    var self = this;

    container.on('results:all', function () {
      self._positionDropdown();
      self._resizeDropdown();
    });

    container.on('results:append', function () {
      self._positionDropdown();
      self._resizeDropdown();
    });

    container.on('results:message', function () {
      self._positionDropdown();
      self._resizeDropdown();
    });

    container.on('select', function () {
      self._positionDropdown();
      self._resizeDropdown();
    });

    container.on('unselect', function () {
      self._positionDropdown();
      self._resizeDropdown();
    });

    this._containerResultsHandlersBound = true;
  };

  AttachBody.prototype._attachPositioningHandler =
      function (decorated, container) {
    var self = this;

    var scrollEvent = 'scroll.select2.' + container.id;
    var resizeEvent = 'resize.select2.' + container.id;
    var orientationEvent = 'orientationchange.select2.' + container.id;

    var $watchers = this.$container.parents().filter(Utils.hasScroll);
    $watchers.each(function () {
      Utils.StoreData(this, 'select2-scroll-position', {
        x: $(this).scrollLeft(),
        y: $(this).scrollTop()
      });
    });

    $watchers.on(scrollEvent, function (ev) {
      var position = Utils.GetData(this, 'select2-scroll-position');
      $(this).scrollTop(position.y);
    });

    $(window).on(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent,
      function (e) {
      self._positionDropdown();
      self._resizeDropdown();
    });
  };

  AttachBody.prototype._detachPositioningHandler =
      function (decorated, container) {
    var scrollEvent = 'scroll.select2.' + container.id;
    var resizeEvent = 'resize.select2.' + container.id;
    var orientationEvent = 'orientationchange.select2.' + container.id;

    var $watchers = this.$container.parents().filter(Utils.hasScroll);
    $watchers.off(scrollEvent);

    $(window).off(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent);
  };

  AttachBody.prototype._positionDropdown = function () {
    var $window = $(window);

    var isCurrentlyAbove = this.$dropdown[0].classList
      .contains('select2-dropdown--above');
    var isCurrentlyBelow = this.$dropdown[0].classList
      .contains('select2-dropdown--below');

    var newDirection = null;

    var offset = this.$container.offset();

    offset.bottom = offset.top + this.$container.outerHeight(false);

    var container = {
      height: this.$container.outerHeight(false)
    };

    container.top = offset.top;
    container.bottom = offset.top + container.height;

    var dropdown = {
      height: this.$dropdown.outerHeight(false)
    };

    var viewport = {
      top: $window.scrollTop(),
      bottom: $window.scrollTop() + $window.height()
    };

    var enoughRoomAbove = viewport.top < (offset.top - dropdown.height);
    var enoughRoomBelow = viewport.bottom > (offset.bottom + dropdown.height);

    var css = {
      left: offset.left,
      top: container.bottom
    };

    // Determine what the parent element is to use for calculating the offset
    var $offsetParent = this.$dropdownParent;

    // For statically positioned elements, we need to get the element
    // that is determining the offset
    if ($offsetParent.css('position') === 'static') {
      $offsetParent = $offsetParent.offsetParent();
    }

    var parentOffset = {
      top: 0,
      left: 0
    };

    if (
      $.contains(document.body, $offsetParent[0]) ||
      $offsetParent[0].isConnected
      ) {
      parentOffset = $offsetParent.offset();
    }

    css.top -= parentOffset.top;
    css.left -= parentOffset.left;

    if (!isCurrentlyAbove && !isCurrentlyBelow) {
      newDirection = 'below';
    }

    if (!enoughRoomBelow && enoughRoomAbove && !isCurrentlyAbove) {
      newDirection = 'above';
    } else if (!enoughRoomAbove && enoughRoomBelow && isCurrentlyAbove) {
      newDirection = 'below';
    }

    if (newDirection == 'above' ||
      (isCurrentlyAbove && newDirection !== 'below')) {
      css.top = container.top - parentOffset.top - dropdown.height;
    }

    if (newDirection != null) {
      this.$dropdown[0].classList.remove('select2-dropdown--below');
      this.$dropdown[0].classList.remove('select2-dropdown--above');
      this.$dropdown[0].classList.add('select2-dropdown--' + newDirection);

      this.$container[0].classList.remove('select2-container--below');
      this.$container[0].classList.remove('select2-container--above');
      this.$container[0].classList.add('select2-container--' + newDirection);
    }

    this.$dropdownContainer.css(css);
  };

  AttachBody.prototype._resizeDropdown = function () {
    var css = {
      width: this.$container.outerWidth(false) + 'px'
    };

    if (this.options.get('dropdownAutoWidth')) {
      css.minWidth = css.width;
      css.position = 'relative';
      css.width = 'auto';
    }

    this.$dropdown.css(css);
  };

  AttachBody.prototype._showDropdown = function (decorated) {
    this.$dropdownContainer.appendTo(this.$dropdownParent);

    this._positionDropdown();
    this._resizeDropdown();
  };

  return AttachBody;
});

S2.define('select2/dropdown/minimumResultsForSearch',[

], function () {
  function countResults (data) {
    var count = 0;

    for (var d = 0; d < data.length; d++) {
      var item = data[d];

      if (item.children) {
        count += countResults(item.children);
      } else {
        count++;
      }
    }

    return count;
  }

  function MinimumResultsForSearch (decorated, $element, options, dataAdapter) {
    this.minimumResultsForSearch = options.get('minimumResultsForSearch');

    if (this.minimumResultsForSearch < 0) {
      this.minimumResultsForSearch = Infinity;
    }

    decorated.call(this, $element, options, dataAdapter);
  }

  MinimumResultsForSearch.prototype.showSearch = function (decorated, params) {
    if (countResults(params.data.results) < this.minimumResultsForSearch) {
      return false;
    }

    return decorated.call(this, params);
  };

  return MinimumResultsForSearch;
});

S2.define('select2/dropdown/selectOnClose',[
  '../utils'
], function (Utils) {
  function SelectOnClose () { }

  SelectOnClose.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('close', function (params) {
      self._handleSelectOnClose(params);
    });
  };

  SelectOnClose.prototype._handleSelectOnClose = function (_, params) {
    if (params && params.originalSelect2Event != null) {
      var event = params.originalSelect2Event;

      // Don't select an item if the close event was triggered from a select or
      // unselect event
      if (event._type === 'select' || event._type === 'unselect') {
        return;
      }
    }

    var $highlightedResults = this.getHighlightedResults();

    // Only select highlighted results
    if ($highlightedResults.length < 1) {
      return;
    }

    var data = Utils.GetData($highlightedResults[0], 'data');

    // Don't re-select already selected resulte
    if (
      (data.element != null && data.element.selected) ||
      (data.element == null && data.selected)
    ) {
      return;
    }

    this.trigger('select', {
        data: data
    });
  };

  return SelectOnClose;
});

S2.define('select2/dropdown/closeOnSelect',[

], function () {
  function CloseOnSelect () { }

  CloseOnSelect.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('select', function (evt) {
      self._selectTriggered(evt);
    });

    container.on('unselect', function (evt) {
      self._selectTriggered(evt);
    });
  };

  CloseOnSelect.prototype._selectTriggered = function (_, evt) {
    var originalEvent = evt.originalEvent;

    // Don't close if the control key is being held
    if (originalEvent && (originalEvent.ctrlKey || originalEvent.metaKey)) {
      return;
    }

    this.trigger('close', {
      originalEvent: originalEvent,
      originalSelect2Event: evt
    });
  };

  return CloseOnSelect;
});

S2.define('select2/dropdown/dropdownCss',[
  '../utils'
], function (Utils) {
  function DropdownCSS () { }

  DropdownCSS.prototype.render = function (decorated) {
    var $dropdown = decorated.call(this);

    var dropdownCssClass = this.options.get('dropdownCssClass') || '';

    if (dropdownCssClass.indexOf(':all:') !== -1) {
      dropdownCssClass = dropdownCssClass.replace(':all:', '');

      Utils.copyNonInternalCssClasses($dropdown[0], this.$element[0]);
    }

    $dropdown.addClass(dropdownCssClass);

    return $dropdown;
  };

  return DropdownCSS;
});

S2.define('select2/dropdown/tagsSearchHighlight',[
  '../utils'
], function (Utils) {
  function TagsSearchHighlight () { }

  TagsSearchHighlight.prototype.highlightFirstItem = function (decorated) {
    var $options = this.$results
    .find(
      '.select2-results__option--selectable' +
      ':not(.select2-results__option--selected)'
    );

    if ($options.length > 0) {
      var $firstOption = $options.first();
      var data = Utils.GetData($firstOption[0], 'data');
      var firstElement = data.element;

      if (firstElement && firstElement.getAttribute) {
        if (firstElement.getAttribute('data-select2-tag') === 'true') {
          $firstOption.trigger('mouseenter');

          return;
        }
      }
    }

    decorated.call(this);
  };

  return TagsSearchHighlight;
});

S2.define('select2/i18n/en',[],function () {
  // English
  return {
    errorLoading: function () {
      return 'The results could not be loaded.';
    },
    inputTooLong: function (args) {
      var overChars = args.input.length - args.maximum;

      var message = 'Please delete ' + overChars + ' character';

      if (overChars != 1) {
        message += 's';
      }

      return message;
    },
    inputTooShort: function (args) {
      var remainingChars = args.minimum - args.input.length;

      var message = 'Please enter ' + remainingChars + ' or more characters';

      return message;
    },
    loadingMore: function () {
      return 'Loading more results…';
    },
    maximumSelected: function (args) {
      var message = 'You can only select ' + args.maximum + ' item';

      if (args.maximum != 1) {
        message += 's';
      }

      return message;
    },
    noResults: function () {
      return 'No results found';
    },
    searching: function () {
      return 'Searching…';
    },
    removeAllItems: function () {
      return 'Remove all items';
    },
    removeItem: function () {
      return 'Remove item';
    },
    search: function() {
      return 'Search';
    }
  };
});

S2.define('select2/defaults',[
  'jquery',

  './results',

  './selection/single',
  './selection/multiple',
  './selection/placeholder',
  './selection/allowClear',
  './selection/search',
  './selection/selectionCss',
  './selection/eventRelay',

  './utils',
  './translation',
  './diacritics',

  './data/select',
  './data/array',
  './data/ajax',
  './data/tags',
  './data/tokenizer',
  './data/minimumInputLength',
  './data/maximumInputLength',
  './data/maximumSelectionLength',

  './dropdown',
  './dropdown/search',
  './dropdown/hidePlaceholder',
  './dropdown/infiniteScroll',
  './dropdown/attachBody',
  './dropdown/minimumResultsForSearch',
  './dropdown/selectOnClose',
  './dropdown/closeOnSelect',
  './dropdown/dropdownCss',
  './dropdown/tagsSearchHighlight',

  './i18n/en'
], function ($,

             ResultsList,

             SingleSelection, MultipleSelection, Placeholder, AllowClear,
             SelectionSearch, SelectionCSS, EventRelay,

             Utils, Translation, DIACRITICS,

             SelectData, ArrayData, AjaxData, Tags, Tokenizer,
             MinimumInputLength, MaximumInputLength, MaximumSelectionLength,

             Dropdown, DropdownSearch, HidePlaceholder, InfiniteScroll,
             AttachBody, MinimumResultsForSearch, SelectOnClose, CloseOnSelect,
             DropdownCSS, TagsSearchHighlight,

             EnglishTranslation) {
  function Defaults () {
    this.reset();
  }

  Defaults.prototype.apply = function (options) {
    options = $.extend(true, {}, this.defaults, options);

    if (options.dataAdapter == null) {
      if (options.ajax != null) {
        options.dataAdapter = AjaxData;
      } else if (options.data != null) {
        options.dataAdapter = ArrayData;
      } else {
        options.dataAdapter = SelectData;
      }

      if (options.minimumInputLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MinimumInputLength
        );
      }

      if (options.maximumInputLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MaximumInputLength
        );
      }

      if (options.maximumSelectionLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MaximumSelectionLength
        );
      }

      if (options.tags) {
        options.dataAdapter = Utils.Decorate(options.dataAdapter, Tags);
      }

      if (options.tokenSeparators != null || options.tokenizer != null) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          Tokenizer
        );
      }
    }

    if (options.resultsAdapter == null) {
      options.resultsAdapter = ResultsList;

      if (options.ajax != null) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          InfiniteScroll
        );
      }

      if (options.placeholder != null) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          HidePlaceholder
        );
      }

      if (options.selectOnClose) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          SelectOnClose
        );
      }

      if (options.tags) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          TagsSearchHighlight
        );
      }
    }

    if (options.dropdownAdapter == null) {
      if (options.multiple) {
        options.dropdownAdapter = Dropdown;
      } else {
        var SearchableDropdown = Utils.Decorate(Dropdown, DropdownSearch);

        options.dropdownAdapter = SearchableDropdown;
      }

      if (options.minimumResultsForSearch !== 0) {
        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          MinimumResultsForSearch
        );
      }

      if (options.closeOnSelect) {
        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          CloseOnSelect
        );
      }

      if (options.dropdownCssClass != null) {
        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          DropdownCSS
        );
      }

      options.dropdownAdapter = Utils.Decorate(
        options.dropdownAdapter,
        AttachBody
      );
    }

    if (options.selectionAdapter == null) {
      if (options.multiple) {
        options.selectionAdapter = MultipleSelection;
      } else {
        options.selectionAdapter = SingleSelection;
      }

      // Add the placeholder mixin if a placeholder was specified
      if (options.placeholder != null) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          Placeholder
        );
      }

      if (options.allowClear) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          AllowClear
        );
      }

      if (options.multiple) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          SelectionSearch
        );
      }

      if (options.selectionCssClass != null) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          SelectionCSS
        );
      }

      options.selectionAdapter = Utils.Decorate(
        options.selectionAdapter,
        EventRelay
      );
    }

    // If the defaults were not previously applied from an element, it is
    // possible for the language option to have not been resolved
    options.language = this._resolveLanguage(options.language);

    // Always fall back to English since it will always be complete
    options.language.push('en');

    var uniqueLanguages = [];

    for (var l = 0; l < options.language.length; l++) {
      var language = options.language[l];

      if (uniqueLanguages.indexOf(language) === -1) {
        uniqueLanguages.push(language);
      }
    }

    options.language = uniqueLanguages;

    options.translations = this._processTranslations(
      options.language,
      options.debug
    );

    return options;
  };

  Defaults.prototype.reset = function () {
    function stripDiacritics (text) {
      // Used 'uni range + named function' from http://jsperf.com/diacritics/18
      function match(a) {
        return DIACRITICS[a] || a;
      }

      return text.replace(/[^\\u0000-\\u007E]/g, match);
    }

    function matcher (params, data) {
      // Always return the object if there is nothing to compare
      if (params.term == null || params.term.trim() === '') {
        return data;
      }

      // Do a recursive check for options with children
      if (data.children && data.children.length > 0) {
        // Clone the data object if there are children
        // This is required as we modify the object to remove any non-matches
        var match = $.extend(true, {}, data);

        // Check each child of the option
        for (var c = data.children.length - 1; c >= 0; c--) {
          var child = data.children[c];

          var matches = matcher(params, child);

          // If there wasn't a match, remove the object in the array
          if (matches == null) {
            match.children.splice(c, 1);
          }
        }

        // If any children matched, return the new object
        if (match.children.length > 0) {
          return match;
        }

        // If there were no matching children, check just the plain object
        return matcher(params, match);
      }

      var original = stripDiacritics(data.text).toUpperCase();
      var term = stripDiacritics(params.term).toUpperCase();

      // Check if the text contains the term
      if (original.indexOf(term) > -1) {
        return data;
      }

      // If it doesn't contain the term, don't return anything
      return null;
    }

    this.defaults = {
      amdLanguageBase: './i18n/',
      autocomplete: 'off',
      closeOnSelect: true,
      debug: false,
      dropdownAutoWidth: false,
      escapeMarkup: Utils.escapeMarkup,
      language: {},
      matcher: matcher,
      minimumInputLength: 0,
      maximumInputLength: 0,
      maximumSelectionLength: 0,
      minimumResultsForSearch: 0,
      selectOnClose: false,
      scrollAfterSelect: false,
      sorter: function (data) {
        return data;
      },
      templateResult: function (result) {
        return result.text;
      },
      templateSelection: function (selection) {
        return selection.text;
      },
      theme: 'default',
      width: 'resolve'
    };
  };

  Defaults.prototype.applyFromElement = function (options, $element) {
    var optionLanguage = options.language;
    var defaultLanguage = this.defaults.language;
    var elementLanguage = $element.prop('lang');
    var parentLanguage = $element.closest('[lang]').prop('lang');

    var languages = Array.prototype.concat.call(
      this._resolveLanguage(elementLanguage),
      this._resolveLanguage(optionLanguage),
      this._resolveLanguage(defaultLanguage),
      this._resolveLanguage(parentLanguage)
    );

    options.language = languages;

    return options;
  };

  Defaults.prototype._resolveLanguage = function (language) {
    if (!language) {
      return [];
    }

    if ($.isEmptyObject(language)) {
      return [];
    }

    if ($.isPlainObject(language)) {
      return [language];
    }

    var languages;

    if (!Array.isArray(language)) {
      languages = [language];
    } else {
      languages = language;
    }

    var resolvedLanguages = [];

    for (var l = 0; l < languages.length; l++) {
      resolvedLanguages.push(languages[l]);

      if (typeof languages[l] === 'string' && languages[l].indexOf('-') > 0) {
        // Extract the region information if it is included
        var languageParts = languages[l].split('-');
        var baseLanguage = languageParts[0];

        resolvedLanguages.push(baseLanguage);
      }
    }

    return resolvedLanguages;
  };

  Defaults.prototype._processTranslations = function (languages, debug) {
    var translations = new Translation();

    for (var l = 0; l < languages.length; l++) {
      var languageData = new Translation();

      var language = languages[l];

      if (typeof language === 'string') {
        try {
          // Try to load it with the original name
          languageData = Translation.loadPath(language);
        } catch (e) {
          try {
            // If we couldn't load it, check if it wasn't the full path
            language = this.defaults.amdLanguageBase + language;
            languageData = Translation.loadPath(language);
          } catch (ex) {
            // The translation could not be loaded at all. Sometimes this is
            // because of a configuration problem, other times this can be
            // because of how Select2 helps load all possible translation files
            if (debug && window.console && console.warn) {
              console.warn(
                'Select2: The language file for "' + language + '" could ' +
                'not be automatically loaded. A fallback will be used instead.'
              );
            }
          }
        }
      } else if ($.isPlainObject(language)) {
        languageData = new Translation(language);
      } else {
        languageData = language;
      }

      translations.extend(languageData);
    }

    return translations;
  };

  Defaults.prototype.set = function (key, value) {
    var camelKey = $.camelCase(key);

    var data = {};
    data[camelKey] = value;

    var convertedData = Utils._convertData(data);

    $.extend(true, this.defaults, convertedData);
  };

  var defaults = new Defaults();

  return defaults;
});

S2.define('select2/options',[
  'jquery',
  './defaults',
  './utils'
], function ($, Defaults, Utils) {
  function Options (options, $element) {
    this.options = options;

    if ($element != null) {
      this.fromElement($element);
    }

    if ($element != null) {
      this.options = Defaults.applyFromElement(this.options, $element);
    }

    this.options = Defaults.apply(this.options);
  }

  Options.prototype.fromElement = function ($e) {
    var excludedData = ['select2'];

    if (this.options.multiple == null) {
      this.options.multiple = $e.prop('multiple');
    }

    if (this.options.disabled == null) {
      this.options.disabled = $e.prop('disabled');
    }

    if (this.options.autocomplete == null && $e.prop('autocomplete')) {
      this.options.autocomplete = $e.prop('autocomplete');
    }

    if (this.options.dir == null) {
      if ($e.prop('dir')) {
        this.options.dir = $e.prop('dir');
      } else if ($e.closest('[dir]').prop('dir')) {
        this.options.dir = $e.closest('[dir]').prop('dir');
      } else {
        this.options.dir = 'ltr';
      }
    }

    $e.prop('disabled', this.options.disabled);
    $e.prop('multiple', this.options.multiple);

    if (Utils.GetData($e[0], 'select2Tags')) {
      if (this.options.debug && window.console && console.warn) {
        console.warn(
          'Select2: The \`data-select2-tags\` attribute has been changed to ' +
          'use the \`data-data\` and \`data-tags="true"\` attributes and will be ' +
          'removed in future versions of Select2.'
        );
      }

      Utils.StoreData($e[0], 'data', Utils.GetData($e[0], 'select2Tags'));
      Utils.StoreData($e[0], 'tags', true);
    }

    if (Utils.GetData($e[0], 'ajaxUrl')) {
      if (this.options.debug && window.console && console.warn) {
        console.warn(
          'Select2: The \`data-ajax-url\` attribute has been changed to ' +
          '\`data-ajax--url\` and support for the old attribute will be removed' +
          ' in future versions of Select2.'
        );
      }

      $e.attr('ajax--url', Utils.GetData($e[0], 'ajaxUrl'));
      Utils.StoreData($e[0], 'ajax-Url', Utils.GetData($e[0], 'ajaxUrl'));
    }

    var dataset = {};

    function upperCaseLetter(_, letter) {
      return letter.toUpperCase();
    }

    // Pre-load all of the attributes which are prefixed with \`data-\`
    for (var attr = 0; attr < $e[0].attributes.length; attr++) {
      var attributeName = $e[0].attributes[attr].name;
      var prefix = 'data-';

      if (attributeName.substr(0, prefix.length) == prefix) {
        // Get the contents of the attribute after \`data-\`
        var dataName = attributeName.substring(prefix.length);

        // Get the data contents from the consistent source
        // This is more than likely the jQuery data helper
        var dataValue = Utils.GetData($e[0], dataName);

        // camelCase the attribute name to match the spec
        var camelDataName = dataName.replace(/-([a-z])/g, upperCaseLetter);

        // Store the data attribute contents into the dataset since
        dataset[camelDataName] = dataValue;
      }
    }

    // Prefer the element's \`dataset\` attribute if it exists
    // jQuery 1.x does not correctly handle data attributes with multiple dashes
    if ($.fn.jquery && $.fn.jquery.substr(0, 2) == '1.' && $e[0].dataset) {
      dataset = $.extend(true, {}, $e[0].dataset, dataset);
    }

    // Prefer our internal data cache if it exists
    var data = $.extend(true, {}, Utils.GetData($e[0]), dataset);

    data = Utils._convertData(data);

    for (var key in data) {
      if (excludedData.indexOf(key) > -1) {
        continue;
      }

      if ($.isPlainObject(this.options[key])) {
        $.extend(this.options[key], data[key]);
      } else {
        this.options[key] = data[key];
      }
    }

    return this;
  };

  Options.prototype.get = function (key) {
    return this.options[key];
  };

  Options.prototype.set = function (key, val) {
    this.options[key] = val;
  };

  return Options;
});

S2.define('select2/core',[
  'jquery',
  './options',
  './utils',
  './keys'
], function ($, Options, Utils, KEYS) {
  var Select2 = function ($element, options) {
    if (Utils.GetData($element[0], 'select2') != null) {
      Utils.GetData($element[0], 'select2').destroy();
    }

    this.$element = $element;

    this.id = this._generateId($element);

    options = options || {};

    this.options = new Options(options, $element);

    Select2.__super__.constructor.call(this);

    // Set up the tabindex

    var tabindex = $element.attr('tabindex') || 0;
    Utils.StoreData($element[0], 'old-tabindex', tabindex);
    $element.attr('tabindex', '-1');

    // Set up containers and adapters

    var DataAdapter = this.options.get('dataAdapter');
    this.dataAdapter = new DataAdapter($element, this.options);

    var $container = this.render();

    this._placeContainer($container);

    var SelectionAdapter = this.options.get('selectionAdapter');
    this.selection = new SelectionAdapter($element, this.options);
    this.$selection = this.selection.render();

    this.selection.position(this.$selection, $container);

    var DropdownAdapter = this.options.get('dropdownAdapter');
    this.dropdown = new DropdownAdapter($element, this.options);
    this.$dropdown = this.dropdown.render();

    this.dropdown.position(this.$dropdown, $container);

    var ResultsAdapter = this.options.get('resultsAdapter');
    this.results = new ResultsAdapter($element, this.options, this.dataAdapter);
    this.$results = this.results.render();

    this.results.position(this.$results, this.$dropdown);

    // Bind events

    var self = this;

    // Bind the container to all of the adapters
    this._bindAdapters();

    // Register any DOM event handlers
    this._registerDomEvents();

    // Register any internal event handlers
    this._registerDataEvents();
    this._registerSelectionEvents();
    this._registerDropdownEvents();
    this._registerResultsEvents();
    this._registerEvents();

    // Set the initial state
    this.dataAdapter.current(function (initialData) {
      self.trigger('selection:update', {
        data: initialData
      });
    });

    // Hide the original select
    $element[0].classList.add('select2-hidden-accessible');
    $element.attr('aria-hidden', 'true');

    // Synchronize any monitored attributes
    this._syncAttributes();

    Utils.StoreData($element[0], 'select2', this);

    // Ensure backwards compatibility with $element.data('select2').
    $element.data('select2', this);
  };

  Utils.Extend(Select2, Utils.Observable);

  Select2.prototype._generateId = function ($element) {
    var id = '';

    if ($element.attr('id') != null) {
      id = $element.attr('id');
    } else if ($element.attr('name') != null) {
      id = $element.attr('name') + '-' + Utils.generateChars(2);
    } else {
      id = Utils.generateChars(4);
    }

    id = id.replace(/(:|\\.|\\[|\\]|,)/g, '');
    id = 'select2-' + id;

    return id;
  };

  Select2.prototype._placeContainer = function ($container) {
    $container.insertAfter(this.$element);

    var width = this._resolveWidth(this.$element, this.options.get('width'));

    if (width != null) {
      $container.css('width', width);
    }
  };

  Select2.prototype._resolveWidth = function ($element, method) {
    var WIDTH = /^width:(([-+]?([0-9]*\\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;

    if (method == 'resolve') {
      var styleWidth = this._resolveWidth($element, 'style');

      if (styleWidth != null) {
        return styleWidth;
      }

      return this._resolveWidth($element, 'element');
    }

    if (method == 'element') {
      var elementWidth = $element.outerWidth(false);

      if (elementWidth <= 0) {
        return 'auto';
      }

      return elementWidth + 'px';
    }

    if (method == 'style') {
      var style = $element.attr('style');

      if (typeof(style) !== 'string') {
        return null;
      }

      var attrs = style.split(';');

      for (var i = 0, l = attrs.length; i < l; i = i + 1) {
        var attr = attrs[i].replace(/\\s/g, '');
        var matches = attr.match(WIDTH);

        if (matches !== null && matches.length >= 1) {
          return matches[1];
        }
      }

      return null;
    }

    if (method == 'computedstyle') {
      var computedStyle = window.getComputedStyle($element[0]);

      return computedStyle.width;
    }

    return method;
  };

  Select2.prototype._bindAdapters = function () {
    this.dataAdapter.bind(this, this.$container);
    this.selection.bind(this, this.$container);

    this.dropdown.bind(this, this.$container);
    this.results.bind(this, this.$container);
  };

  Select2.prototype._registerDomEvents = function () {
    var self = this;

    this.$element.on('change.select2', function () {
      self.dataAdapter.current(function (data) {
        self.trigger('selection:update', {
          data: data
        });
      });
    });

    this.$element.on('focus.select2', function (evt) {
      self.trigger('focus', evt);
    });

    this._syncA = Utils.bind(this._syncAttributes, this);
    this._syncS = Utils.bind(this._syncSubtree, this);

    this._observer = new window.MutationObserver(function (mutations) {
      self._syncA();
      self._syncS(mutations);
    });
    this._observer.observe(this.$element[0], {
      attributes: true,
      childList: true,
      subtree: false
    });
  };

  Select2.prototype._registerDataEvents = function () {
    var self = this;

    this.dataAdapter.on('*', function (name, params) {
      self.trigger(name, params);
    });
  };

  Select2.prototype._registerSelectionEvents = function () {
    var self = this;
    var nonRelayEvents = ['toggle', 'focus'];

    this.selection.on('toggle', function () {
      self.toggleDropdown();
    });

    this.selection.on('focus', function (params) {
      self.focus(params);
    });

    this.selection.on('*', function (name, params) {
      if (nonRelayEvents.indexOf(name) !== -1) {
        return;
      }

      self.trigger(name, params);
    });
  };

  Select2.prototype._registerDropdownEvents = function () {
    var self = this;

    this.dropdown.on('*', function (name, params) {
      self.trigger(name, params);
    });
  };

  Select2.prototype._registerResultsEvents = function () {
    var self = this;

    this.results.on('*', function (name, params) {
      self.trigger(name, params);
    });
  };

  Select2.prototype._registerEvents = function () {
    var self = this;

    this.on('open', function () {
      self.$container[0].classList.add('select2-container--open');
    });

    this.on('close', function () {
      self.$container[0].classList.remove('select2-container--open');
    });

    this.on('enable', function () {
      self.$container[0].classList.remove('select2-container--disabled');
    });

    this.on('disable', function () {
      self.$container[0].classList.add('select2-container--disabled');
    });

    this.on('blur', function () {
      self.$container[0].classList.remove('select2-container--focus');
    });

    this.on('query', function (params) {
      if (!self.isOpen()) {
        self.trigger('open', {});
      }

      this.dataAdapter.query(params, function (data) {
        self.trigger('results:all', {
          data: data,
          query: params
        });
      });
    });

    this.on('query:append', function (params) {
      this.dataAdapter.query(params, function (data) {
        self.trigger('results:append', {
          data: data,
          query: params
        });
      });
    });

    this.on('keypress', function (evt) {
      var key = evt.which;

      if (self.isOpen()) {
        if (key === KEYS.ESC || (key === KEYS.UP && evt.altKey)) {
          self.close(evt);

          evt.preventDefault();
        } else if (key === KEYS.ENTER || key === KEYS.TAB) {
          self.trigger('results:select', {});

          evt.preventDefault();
        } else if ((key === KEYS.SPACE && evt.ctrlKey)) {
          self.trigger('results:toggle', {});

          evt.preventDefault();
        } else if (key === KEYS.UP) {
          self.trigger('results:previous', {});

          evt.preventDefault();
        } else if (key === KEYS.DOWN) {
          self.trigger('results:next', {});

          evt.preventDefault();
        }
      } else {
        if (key === KEYS.ENTER || key === KEYS.SPACE ||
            (key === KEYS.DOWN && evt.altKey)) {
          self.open();

          evt.preventDefault();
        }
      }
    });
  };

  Select2.prototype._syncAttributes = function () {
    this.options.set('disabled', this.$element.prop('disabled'));

    if (this.isDisabled()) {
      if (this.isOpen()) {
        this.close();
      }

      this.trigger('disable', {});
    } else {
      this.trigger('enable', {});
    }
  };

  Select2.prototype._isChangeMutation = function (mutations) {
    var self = this;

    if (mutations.addedNodes && mutations.addedNodes.length > 0) {
      for (var n = 0; n < mutations.addedNodes.length; n++) {
        var node = mutations.addedNodes[n];

        if (node.selected) {
          return true;
        }
      }
    } else if (mutations.removedNodes && mutations.removedNodes.length > 0) {
      return true;
    } else if (Array.isArray(mutations)) {
      return mutations.some(function (mutation) {
        return self._isChangeMutation(mutation);
      });
    }

    return false;
  };

  Select2.prototype._syncSubtree = function (mutations) {
    var changed = this._isChangeMutation(mutations);
    var self = this;

    // Only re-pull the data if we think there is a change
    if (changed) {
      this.dataAdapter.current(function (currentData) {
        self.trigger('selection:update', {
          data: currentData
        });
      });
    }
  };

  /**
   * Override the trigger method to automatically trigger pre-events when
   * there are events that can be prevented.
   */
  Select2.prototype.trigger = function (name, args) {
    var actualTrigger = Select2.__super__.trigger;
    var preTriggerMap = {
      'open': 'opening',
      'close': 'closing',
      'select': 'selecting',
      'unselect': 'unselecting',
      'clear': 'clearing'
    };

    if (args === undefined) {
      args = {};
    }

    if (name in preTriggerMap) {
      var preTriggerName = preTriggerMap[name];
      var preTriggerArgs = {
        prevented: false,
        name: name,
        args: args
      };

      actualTrigger.call(this, preTriggerName, preTriggerArgs);

      if (preTriggerArgs.prevented) {
        args.prevented = true;

        return;
      }
    }

    actualTrigger.call(this, name, args);
  };

  Select2.prototype.toggleDropdown = function () {
    if (this.isDisabled()) {
      return;
    }

    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  };

  Select2.prototype.open = function () {
    if (this.isOpen()) {
      return;
    }

    if (this.isDisabled()) {
      return;
    }

    this.trigger('query', {});
  };

  Select2.prototype.close = function (evt) {
    if (!this.isOpen()) {
      return;
    }

    this.trigger('close', { originalEvent : evt });
  };

  /**
   * Helper method to abstract the "enabled" (not "disabled") state of this
   * object.
   *
   * @return {true} if the instance is not disabled.
   * @return {false} if the instance is disabled.
   */
  Select2.prototype.isEnabled = function () {
    return !this.isDisabled();
  };

  /**
   * Helper method to abstract the "disabled" state of this object.
   *
   * @return {true} if the disabled option is true.
   * @return {false} if the disabled option is false.
   */
  Select2.prototype.isDisabled = function () {
    return this.options.get('disabled');
  };

  Select2.prototype.isOpen = function () {
    return this.$container[0].classList.contains('select2-container--open');
  };

  Select2.prototype.hasFocus = function () {
    return this.$container[0].classList.contains('select2-container--focus');
  };

  Select2.prototype.focus = function (data) {
    // No need to re-trigger focus events if we are already focused
    if (this.hasFocus()) {
      return;
    }

    this.$container[0].classList.add('select2-container--focus');
    this.trigger('focus', {});
  };

  Select2.prototype.enable = function (args) {
    if (this.options.get('debug') && window.console && console.warn) {
      console.warn(
        'Select2: The \`select2("enable")\` method has been deprecated and will' +
        ' be removed in later Select2 versions. Use $element.prop("disabled")' +
        ' instead.'
      );
    }

    if (args == null || args.length === 0) {
      args = [true];
    }

    var disabled = !args[0];

    this.$element.prop('disabled', disabled);
  };

  Select2.prototype.data = function () {
    if (this.options.get('debug') &&
        arguments.length > 0 && window.console && console.warn) {
      console.warn(
        'Select2: Data can no longer be set using \`select2("data")\`. You ' +
        'should consider setting the value instead using \`$element.val()\`.'
      );
    }

    var data = [];

    this.dataAdapter.current(function (currentData) {
      data = currentData;
    });

    return data;
  };

  Select2.prototype.val = function (args) {
    if (this.options.get('debug') && window.console && console.warn) {
      console.warn(
        'Select2: The \`select2("val")\` method has been deprecated and will be' +
        ' removed in later Select2 versions. Use $element.val() instead.'
      );
    }

    if (args == null || args.length === 0) {
      return this.$element.val();
    }

    var newVal = args[0];

    if (Array.isArray(newVal)) {
      newVal = newVal.map(function (obj) {
        return obj.toString();
      });
    }

    this.$element.val(newVal).trigger('input').trigger('change');
  };

  Select2.prototype.destroy = function () {
    Utils.RemoveData(this.$container[0]);
    this.$container.remove();

    this._observer.disconnect();
    this._observer = null;

    this._syncA = null;
    this._syncS = null;

    this.$element.off('.select2');
    this.$element.attr('tabindex',
    Utils.GetData(this.$element[0], 'old-tabindex'));

    this.$element[0].classList.remove('select2-hidden-accessible');
    this.$element.attr('aria-hidden', 'false');
    Utils.RemoveData(this.$element[0]);
    this.$element.removeData('select2');

    this.dataAdapter.destroy();
    this.selection.destroy();
    this.dropdown.destroy();
    this.results.destroy();

    this.dataAdapter = null;
    this.selection = null;
    this.dropdown = null;
    this.results = null;
  };

  Select2.prototype.render = function () {
    var $container = $(
      '<span class="select2 select2-container">' +
        '<span class="selection"></span>' +
        '<span class="dropdown-wrapper" aria-hidden="true"></span>' +
      '</span>'
    );

    $container.attr('dir', this.options.get('dir'));

    this.$container = $container;

    this.$container[0].classList
      .add('select2-container--' + this.options.get('theme'));

    Utils.StoreData($container[0], 'element', this.$element);

    return $container;
  };

  return Select2;
});

S2.define('jquery-mousewheel',[
  'jquery'
], function ($) {
  // Used to shim jQuery.mousewheel for non-full builds.
  return $;
});

S2.define('jquery.select2',[
  'jquery',
  'jquery-mousewheel',

  './select2/core',
  './select2/defaults',
  './select2/utils'
], function ($, _, Select2, Defaults, Utils) {
  if ($.fn.select2 == null) {
    // All methods that should return the element
    var thisMethods = ['open', 'close', 'destroy'];

    $.fn.select2 = function (options) {
      options = options || {};

      if (typeof options === 'object') {
        this.each(function () {
          var instanceOptions = $.extend(true, {}, options);

          var instance = new Select2($(this), instanceOptions);
        });

        return this;
      } else if (typeof options === 'string') {
        var ret;
        var args = Array.prototype.slice.call(arguments, 1);

        this.each(function () {
          var instance = Utils.GetData(this, 'select2');

          if (instance == null && window.console && console.error) {
            console.error(
              'The select2(\\'' + options + '\\') method was called on an ' +
              'element that is not using Select2.'
            );
          }

          ret = instance[options].apply(instance, args);
        });

        // Check if we should be returning \`this\`
        if (thisMethods.indexOf(options) > -1) {
          return this;
        }

        return ret;
      } else {
        throw new Error('Invalid arguments for Select2: ' + options);
      }
    };
  }

  if ($.fn.select2.defaults == null) {
    $.fn.select2.defaults = Defaults;
  }

  return Select2;
});

  // Return the AMD loader configuration so it can be used outside of this file
  return {
    define: S2.define,
    require: S2.require
  };
}());

  // Autoload the jQuery bindings
  // We know that all of the modules exist above this, so we're safe
  var select2 = S2.require('jquery.select2');

  // Hold the AMD module references on the jQuery function that was just loaded
  // This allows Select2 to use the internal loader outside of this file, such
  // as in the language files.
  jQuery.fn.select2.amd = S2;

  // Return the Select2 instance for anyone who is importing it.
  return select2;
}));
`;new Function("module","require","window","jQuery",src)({},()=>$,window,$);function initSelect2(){$(".fos-select2").select2({placeholder:"Select a fos"})}function initForm(){$(document).on("click","#form_reset_button",function(){resetForm($("#filter_form"))}),$("#expand_button").click(function(){$("#collapseOne").collapse(),$("#plus_minus").toggleClass("fa-plus fa-minus")});const n=[["selectAll","attributeform-"],["selectAllAllocations","allocationform-"],["selectAll","userform-"],["selectAll","users"],["selectAll","noteform-"],["selectAll","grantform-"],["selectAll","pubform-"],["selectAll","grantdownloadform-"]];for(const t of n)$("#"+t[0]).click(function(){$("input[name^='"+t[1]+"']").prop("checked",$(this).prop("checked"))}),$("input[name^='"+t[1]+"']").click(function(){$(this).attr("id")!=t[0]&&$("#"+t[0]).prop("checked",!1)})}function resetForm(n){n.find("input:text, input:password, input:file, select, textarea").val(""),n.find("input:radio, input:checkbox").removeAttr("checked").removeAttr("selected")}function initDataTable(){const n=document.querySelectorAll("div.table-responsive > table.datatable");for(const e of n)e!==null&&new DataTable(e,{pageLength:10,orderClasses:!1,order:[[1,"desc"]]});const t=document.querySelectorAll("div.table-responsive > table.datatable-long");for(const e of t)e!==null&&new DataTable(e,{pageLength:50,orderClasses:!1,order:[[1,"desc"]]})}Object.assign(window,{getCookie:function(n){getCookie(n)},drawGauges:function(n){drawGauges(n)},$,jQuery:$});function initDocument(){for(const n of[initDateSelector,initSelect2,initForm,initDataTable])n()}document.readyState!=="loading"?initDocument():document.addEventListener("DOMContentLoaded",initDocument);
