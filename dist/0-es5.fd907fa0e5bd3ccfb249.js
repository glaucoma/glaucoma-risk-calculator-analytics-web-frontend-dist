(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"21Lb":function(t,e,i){"use strict";i.d(e,"d",function(){return P}),i.d(e,"e",function(){return A}),i.d(e,"a",function(){return M}),i.d(e,"g",function(){return f}),i.d(e,"b",function(){return y}),i.d(e,"f",function(){return b}),i.d(e,"c",function(){return x});var n=i("mrSG"),r=i("CcnG"),a=i("OzfB"),o=i("K9Ia"),s=i("ny24"),l="inline",u=["row","column","row-reverse","column-reverse"];function c(t){var e=(t=t?t.toLowerCase():"").split(" "),i=e[0],n=e[1],r=e[2];return u.find(function(t){return t===i})||(i=u[0]),n===l&&(n=r!==l?r:"",r=l),[i,d(n),!!r]}function p(t){return c(t)[0].indexOf("row")>-1}function d(t){if(t)switch(t.toLowerCase()){case"reverse":case"wrap-reverse":case"reverse-wrap":t="wrap-reverse";break;case"no":case"none":case"nowrap":t="nowrap";break;default:t="wrap"}return t}var f=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(n.__extends)(e,t),e.prototype.buildStyles=function(t){return void 0===(e=(n=c(t))[1])&&(e=null),void 0===(i=n[2])&&(i=!1),{display:i?"inline-flex":"flex","box-sizing":"border-box","flex-direction":n[0],"flex-wrap":e||null};var e,i,n},e.ngInjectableDef=Object(r.Vb)({factory:function(){return new e},token:e,providedIn:"root"}),e}(a.i),h=["fxLayout","fxLayout.xs","fxLayout.sm","fxLayout.md","fxLayout.lg","fxLayout.xl","fxLayout.lt-sm","fxLayout.lt-md","fxLayout.lt-lg","fxLayout.lt-xl","fxLayout.gt-xs","fxLayout.gt-sm","fxLayout.gt-md","fxLayout.gt-lg"],y=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.inputs=h,e}return Object(n.__extends)(e,t),e}(function(t){function e(e,i,n,r){var a=t.call(this,e,n,i,r)||this;return a.elRef=e,a.styleUtils=i,a.styleBuilder=n,a.marshal=r,a.DIRECTIVE_KEY="layout",a.styleCache=m,a.init(),a}return Object(n.__extends)(e,t),e}(a.b)),m=new Map,v={"margin-left":null,"margin-right":null,"margin-top":null,"margin-bottom":null},b=function(t){function e(e){var i=t.call(this)||this;return i._styler=e,i}return Object(n.__extends)(e,t),e.prototype.buildStyles=function(t,e){return t.endsWith(j)?(i=t=t.slice(0,t.indexOf(j)),n="0px",r="0px","rtl"===e.directionality?r="-"+i:n="-"+i,{margin:"0px "+n+" -"+i+" "+r}):{};var i,n,r},e.prototype.sideEffect=function(t,e,i){var r,a,o,s=i.items;if(t.endsWith(j)){var l=(r=t=t.slice(0,t.indexOf(j)),a="0px",o="0px","rtl"===i.directionality?o=r:a=r,{padding:"0px "+a+" "+r+" "+o});this._styler.applyStyleToElements(l,i.items)}else{var u=s.pop(),c=function(t,e){var i=S(e.directionality,e.layout),r=Object(n.__assign)({},v);return r[i]=t,r}(t,i);this._styler.applyStyleToElements(c,s),this._styler.applyStyleToElements(v,[u])}},e.ngInjectableDef=Object(r.Vb)({factory:function(){return new e(Object(r.Wb)(a.j))},token:e,providedIn:"root"}),e}(a.i),g=["fxLayoutGap","fxLayoutGap.xs","fxLayoutGap.sm","fxLayoutGap.md","fxLayoutGap.lg","fxLayoutGap.xl","fxLayoutGap.lt-sm","fxLayoutGap.lt-md","fxLayoutGap.lt-lg","fxLayoutGap.lt-xl","fxLayoutGap.gt-xs","fxLayoutGap.gt-sm","fxLayoutGap.gt-md","fxLayoutGap.gt-lg"],x=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.inputs=g,e}return Object(n.__extends)(e,t),e}(function(t){function e(e,i,n,r,a,l){var u=t.call(this,e,a,r,l)||this;u.elRef=e,u.zone=i,u.directionality=n,u.styleUtils=r,u.styleBuilder=a,u.marshal=l,u.layout="row",u.DIRECTIVE_KEY="layout-gap",u.observerSubject=new o.a;var c=[u.directionality.change,u.observerSubject.asObservable()];return u.init(c),u.marshal.trackValue(u.nativeElement,"layout").pipe(Object(s.a)(u.destroySubject)).subscribe(u.onLayoutChange.bind(u)),u}return Object(n.__extends)(e,t),Object.defineProperty(e.prototype,"childrenNodes",{get:function(){for(var t=this.nativeElement.children,e=[],i=t.length;i--;)e[i]=t[i];return e},enumerable:!0,configurable:!0}),e.prototype.ngAfterContentInit=function(){this.buildChildObservable(),this.triggerUpdate()},e.prototype.ngOnDestroy=function(){t.prototype.ngOnDestroy.call(this),this.observer&&this.observer.disconnect()},e.prototype.onLayoutChange=function(t){var e=this,i=t.value.split(" ");this.layout=i[0],u.find(function(t){return t===e.layout})||(this.layout="row"),this.triggerUpdate()},e.prototype.updateWithValue=function(t){var e=this,i=this.childrenNodes.filter(function(t){return 1===t.nodeType&&e.willDisplay(t)}).sort(function(t,i){var n=+e.styler.lookupStyle(t,"order"),r=+e.styler.lookupStyle(i,"order");return isNaN(n)||isNaN(r)||n===r?0:n>r?1:-1});if(i.length>0){var n=this.directionality.value,r=this.layout;"row"===r&&"rtl"===n?this.styleCache=w:"row"===r&&"rtl"!==n?this.styleCache=O:"column"===r&&"rtl"===n?this.styleCache=E:"column"===r&&"rtl"!==n&&(this.styleCache=k),this.addStyles(t,{directionality:n,items:i,layout:r})}},e.prototype.clearStyles=function(){var e,i=Object.keys(this.mru).length>0,n=i?"padding":S(this.directionality.value,this.layout);i&&t.prototype.clearStyles.call(this),this.styleUtils.applyStyleToElements(((e={})[n]="",e),this.childrenNodes)},e.prototype.willDisplay=function(t){var e=this.marshal.getValue(t,"show-hide");return!0===e||void 0===e&&"none"!==this.styleUtils.lookupStyle(t,"display")},e.prototype.buildChildObservable=function(){var t=this;this.zone.runOutsideAngular(function(){"undefined"!=typeof MutationObserver&&(t.observer=new MutationObserver(function(e){e.some(function(t){return t.addedNodes&&t.addedNodes.length>0||t.removedNodes&&t.removedNodes.length>0})&&t.observerSubject.next()}),t.observer.observe(t.nativeElement,{childList:!0}))})},e}(a.b)),w=new Map,E=new Map,O=new Map,k=new Map,j=" grid";function S(t,e){switch(e){case"column":return"margin-bottom";case"column-reverse":return"margin-top";case"row":return"rtl"===t?"margin-left":"margin-right";case"row-reverse":return"rtl"===t?"margin-right":"margin-left";default:return"rtl"===t?"margin-left":"margin-right"}}function _(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];if(null==t)throw TypeError("Cannot convert undefined or null to object");for(var n=0,r=e;n<r.length;n++){var a=r[n];if(null!=a)for(var o in a)a.hasOwnProperty(o)&&(t[o]=a[o])}return t}var A=function(t){function e(e){var i=t.call(this)||this;return i.layoutConfig=e,i}return Object(n.__extends)(e,t),e.prototype.buildStyles=function(t,e){var i=t.split(" "),n=i[0],r=i[1],a=i.slice(2).join(" "),o=e.direction.indexOf("column")>-1?"column":"row",s=p(o)?"max-width":"max-height",l=p(o)?"min-width":"min-height",u=String(a).indexOf("calc")>-1,c=u||"auto"===a,d=String(a).indexOf("%")>-1&&!u,f=String(a).indexOf("px")>-1||String(a).indexOf("rem")>-1||String(a).indexOf("em")>-1||String(a).indexOf("vw")>-1||String(a).indexOf("vh")>-1,h=u||f;r="0"==r?0:r;var y=!(n="0"==n?0:n)&&!r,m={},v={"max-width":null,"max-height":null,"min-width":null,"min-height":null};switch(a||""){case"":a="row"===o?"0%":!1!==this.layoutConfig.useColumnBasisZero?"0.000000001px":"auto";break;case"initial":case"nogrow":n=0,a="auto";break;case"grow":a="100%";break;case"noshrink":r=0,a="auto";break;case"auto":break;case"none":n=0,r=0,a="auto";break;default:h||d||isNaN(a)||(a+="%"),"0%"===a&&(h=!0),"0px"===a&&(a="0%"),m=_(v,u?{"flex-grow":n,"flex-shrink":r,"flex-basis":h?a:"100%"}:{flex:n+" "+r+" "+(h?a:"100%")})}return m.flex||m["flex-grow"]||(m=_(v,u?{"flex-grow":n,"flex-shrink":r,"flex-basis":a}:{flex:n+" "+r+" "+a})),"0%"!==a&&"0px"!==a&&"0.000000001px"!==a&&"auto"!==a&&(m[l]=y||h&&n?a:null,m[s]=y||!c&&r?a:null),m[l]||m[s]?e.hasWrap&&(m[u?"flex-basis":"flex"]=m[s]?u?m[s]:n+" "+r+" "+m[s]:u?m[l]:n+" "+r+" "+m[l]):m=_(v,u?{"flex-grow":n,"flex-shrink":r,"flex-basis":a}:{flex:n+" "+r+" "+a}),_(m,{"box-sizing":"border-box"})},e.ngInjectableDef=Object(r.Vb)({factory:function(){return new e(Object(r.Wb)(a.e))},token:e,providedIn:"root"}),e}(a.i),B=["fxFlex","fxFlex.xs","fxFlex.sm","fxFlex.md","fxFlex.lg","fxFlex.xl","fxFlex.lt-sm","fxFlex.lt-md","fxFlex.lt-lg","fxFlex.lt-xl","fxFlex.gt-xs","fxFlex.gt-sm","fxFlex.gt-md","fxFlex.gt-lg"],M=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.inputs=B,e}return Object(n.__extends)(e,t),e}(function(t){function e(e,i,n,r,a){var o=t.call(this,e,r,i,a)||this;return o.elRef=e,o.styleUtils=i,o.layoutConfig=n,o.styleBuilder=r,o.marshal=a,o.DIRECTIVE_KEY="flex",o.direction="",o.wrap=!1,o.flexGrow="1",o.flexShrink="1",o.init(),o.parentElement&&(o.marshal.trackValue(o.parentElement,"layout").pipe(Object(s.a)(o.destroySubject)).subscribe(o.onLayoutChange.bind(o)),o.marshal.trackValue(o.nativeElement,"layout-align").pipe(Object(s.a)(o.destroySubject)).subscribe(o.triggerReflow.bind(o))),o}return Object(n.__extends)(e,t),Object.defineProperty(e.prototype,"shrink",{get:function(){return this.flexShrink},set:function(t){this.flexShrink=t||"1",this.triggerReflow()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"grow",{get:function(){return this.flexGrow},set:function(t){this.flexGrow=t||"1",this.triggerReflow()},enumerable:!0,configurable:!0}),e.prototype.onLayoutChange=function(t){var e=t.value.split(" ");this.direction=e[0],this.wrap=void 0!==e[1]&&"wrap"===e[1],this.triggerUpdate()},e.prototype.updateWithValue=function(t){this.direction||(this.direction=this.getFlexFlowDirection(this.parentElement,!1!==this.layoutConfig.addFlexToParent));var e=this.direction,i=e.startsWith("row"),n=this.wrap;i&&n?this.styleCache=I:i&&!n?this.styleCache=C:!i&&n?this.styleCache=T:i||n||(this.styleCache=L);var r=String(t).replace(";",""),o=Object(a.l)(r,this.flexGrow,this.flexShrink);this.addStyles(o.join(" "),{direction:e,hasWrap:n})},e.prototype.triggerReflow=function(){var t=this.activatedValue;if(void 0!==t){var e=Object(a.l)(t,this.flexGrow,this.flexShrink);this.marshal.updateElement(this.nativeElement,this.DIRECTIVE_KEY,e.join(" "))}},e}(a.b)),C=new Map,L=new Map,I=new Map,T=new Map,P=function(){return function(){}}()},"3pJQ":function(t,e,i){"use strict";i.d(e,"a",function(){return n}),i("mrSG"),i("CcnG"),i("OzfB"),i("n6gG");var n=function(){return function(){}}()},OzfB:function(t,e,i){"use strict";i.d(e,"c",function(){return x}),i.d(e,"k",function(){return b}),i.d(e,"d",function(){return O}),i.d(e,"e",function(){return k}),i.d(e,"h",function(){return j}),i.d(e,"a",function(){return S}),i.d(e,"b",function(){return M}),i.d(e,"g",function(){return q}),i.d(e,"j",function(){return J}),i.d(e,"i",function(){return X}),i.d(e,"l",function(){return tt}),i.d(e,"f",function(){return it});var n=i("CcnG"),r=i("Ip0R"),a=i("mrSG"),o=i("K9Ia"),s=i("26FU"),l=i("6blF"),u=i("p0ib"),c=i("KQya"),p=i("F/XL"),d=(i("bne5"),i("VnD/")),f=i("67Y/"),h=i("Gi3i"),y=i("15JJ"),m=i("ny24"),v=(i("t9fZ"),i("xMyE"));function b(t,e){return function(){if(Object(r.x)(e)){var i=Array.from(t.querySelectorAll("[class*="+g+"]")),n=/\bflex-layout-.+?\b/g;i.forEach(function(t){t.classList.contains(g+"ssr")&&t.parentNode?t.parentNode.removeChild(t):t.className.replace(n,"")})}}}var g="flex-layout-",x=function(){return function(){}}(),w=function(){function t(t,e,i,n,r){void 0===t&&(t=!1),void 0===e&&(e="all"),void 0===i&&(i=""),void 0===n&&(n=""),void 0===r&&(r=0),this.matches=t,this.mediaQuery=e,this.mqAlias=i,this.suffix=n,this.priority=r,this.property=""}return t.prototype.clone=function(){return new t(this.matches,this.mediaQuery,this.mqAlias,this.suffix)},t}(),E=function(){function t(){this.stylesheet=new Map}return t.prototype.addStyleToElement=function(t,e,i){var n=this.stylesheet.get(t);n?n.set(e,i):this.stylesheet.set(t,new Map([[e,i]]))},t.prototype.clearStyles=function(){this.stylesheet.clear()},t.prototype.getStyleForElement=function(t,e){var i=this.stylesheet.get(t),n="";if(i){var r=i.get(e);"number"!=typeof r&&"string"!=typeof r||(n=r+"")}return n},t.ngInjectableDef=Object(n.Vb)({factory:function(){return new t},token:t,providedIn:"root"}),t}(),O={addFlexToParent:!0,addOrientationBps:!1,disableDefaultBps:!1,disableVendorPrefixes:!1,serverLoaded:!1,useColumnBasisZero:!0,printWithBreakpoints:[],mediaTriggerAutoRestore:!0,ssrObserveBreakpoints:[]},k=new n.s("Flex Layout token, config options for the library",{providedIn:"root",factory:function(){return O}}),j=new n.s("FlexLayoutServerLoaded",{providedIn:"root",factory:function(){return!1}}),S=new n.s("Flex Layout token, collect all breakpoints into one provider",{providedIn:"root",factory:function(){return null}});function _(t,e){return t=t?t.clone():new w,e&&(t.mqAlias=e.alias,t.mediaQuery=e.mediaQuery,t.suffix=e.suffix,t.priority=e.priority),t}var A=["row","column","row-reverse","column-reverse"];function B(t){if(t)switch(t.toLowerCase()){case"reverse":case"wrap-reverse":case"reverse-wrap":t="wrap-reverse";break;case"no":case"none":case"nowrap":t="nowrap";break;default:t="wrap"}return t}var M=function(){function t(t,e,i,n){this.elementRef=t,this.styleBuilder=e,this.styler=i,this.marshal=n,this.DIRECTIVE_KEY="",this.inputs=[],this.mru={},this.destroySubject=new o.a,this.styleCache=new Map}return Object.defineProperty(t.prototype,"parentElement",{get:function(){return this.elementRef.nativeElement.parentElement},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"nativeElement",{get:function(){return this.elementRef.nativeElement},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"activatedValue",{get:function(){return this.marshal.getValue(this.nativeElement,this.DIRECTIVE_KEY)},set:function(t){this.marshal.setValue(this.nativeElement,this.DIRECTIVE_KEY,t,this.marshal.activatedAlias)},enumerable:!0,configurable:!0}),t.prototype.ngOnChanges=function(t){var e=this;Object.keys(t).forEach(function(i){if(-1!==e.inputs.indexOf(i)){var n=i.split(".").slice(1).join(".");e.setValue(t[i].currentValue,n)}})},t.prototype.ngOnDestroy=function(){this.destroySubject.next(),this.destroySubject.complete(),this.marshal.releaseElement(this.nativeElement)},t.prototype.init=function(t){void 0===t&&(t=[]),this.marshal.init(this.elementRef.nativeElement,this.DIRECTIVE_KEY,this.updateWithValue.bind(this),this.clearStyles.bind(this),t)},t.prototype.addStyles=function(t,e){var i=this.styleBuilder,n=i.shouldCache,r=this.styleCache.get(t);r&&n||(r=i.buildStyles(t,e),n&&this.styleCache.set(t,r)),this.mru=Object(a.__assign)({},r),this.applyStyleToElement(r),i.sideEffect(t,r,e)},t.prototype.clearStyles=function(){var t=this;Object.keys(this.mru).forEach(function(e){t.mru[e]=""}),this.applyStyleToElement(this.mru),this.mru={}},t.prototype.triggerUpdate=function(){this.marshal.triggerUpdate(this.nativeElement,this.DIRECTIVE_KEY)},t.prototype.getFlexFlowDirection=function(t,e){if(void 0===e&&(e=!1),t){var i=this.styler.getFlowDirection(t),n=i[0];if(!i[1]&&e){var r=function(t){var e,i,n=function(t){var e=(t=t?t.toLowerCase():"").split(" "),i=e[0],n=e[1],r=e[2];return A.find(function(t){return t===i})||(i=A[0]),"inline"===n&&(n="inline"!==r?r:"",r="inline"),[i,B(n),!!r]}(t);return void 0===(e=n[1])&&(e=null),void 0===(i=n[2])&&(i=!1),{display:i?"inline-flex":"flex","box-sizing":"border-box","flex-direction":n[0],"flex-wrap":e||null}}(n);this.styler.applyStyleToElements(r,[t])}return n.trim()}return"row"},t.prototype.applyStyleToElement=function(t,e,i){void 0===i&&(i=this.nativeElement),this.styler.applyStyleToElement(i,t,e)},t.prototype.setValue=function(t,e){this.marshal.setValue(this.nativeElement,this.DIRECTIVE_KEY,t,e)},t.prototype.updateWithValue=function(t){this.addStyles(t)},t}(),C=[{alias:"xs",mediaQuery:"screen and (min-width: 0px) and (max-width: 599.99px)",priority:1e3},{alias:"sm",mediaQuery:"screen and (min-width: 600px) and (max-width: 959.99px)",priority:900},{alias:"md",mediaQuery:"screen and (min-width: 960px) and (max-width: 1279.99px)",priority:800},{alias:"lg",mediaQuery:"screen and (min-width: 1280px) and (max-width: 1919.99px)",priority:700},{alias:"xl",mediaQuery:"screen and (min-width: 1920px) and (max-width: 4999.99px)",priority:600},{alias:"lt-sm",overlapping:!0,mediaQuery:"screen and (max-width: 599.99px)",priority:950},{alias:"lt-md",overlapping:!0,mediaQuery:"screen and (max-width: 959.99px)",priority:850},{alias:"lt-lg",overlapping:!0,mediaQuery:"screen and (max-width: 1279.99px)",priority:750},{alias:"lt-xl",overlapping:!0,priority:650,mediaQuery:"screen and (max-width: 1919.99px)"},{alias:"gt-xs",overlapping:!0,mediaQuery:"screen and (min-width: 600px)",priority:-950},{alias:"gt-sm",overlapping:!0,mediaQuery:"screen and (min-width: 960px)",priority:-850},{alias:"gt-md",overlapping:!0,mediaQuery:"screen and (min-width: 1280px)",priority:-750},{alias:"gt-lg",overlapping:!0,mediaQuery:"screen and (min-width: 1920px)",priority:-650}],L="(orientation: portrait) and (max-width: 599.99px)",I="(orientation: portrait) and (min-width: 600px) and (max-width: 839.99px)",T="(orientation: landscape) and (min-width: 960px) and (max-width: 1279.99px)",P="(orientation: portrait) and (min-width: 840px)",Q="(orientation: landscape) and (min-width: 1280px)",V={HANDSET:L+", (orientation: landscape) and (max-width: 959.99px)",TABLET:I+" , "+T,WEB:P+", "+Q+" ",HANDSET_PORTRAIT:""+L,TABLET_PORTRAIT:I+" ",WEB_PORTRAIT:""+P,HANDSET_LANDSCAPE:"(orientation: landscape) and (max-width: 959.99px)]",TABLET_LANDSCAPE:""+T,WEB_LANDSCAPE:""+Q},W=[{alias:"handset",priority:2e3,mediaQuery:V.HANDSET},{alias:"handset.landscape",priority:2e3,mediaQuery:V.HANDSET_LANDSCAPE},{alias:"handset.portrait",priority:2e3,mediaQuery:V.HANDSET_PORTRAIT},{alias:"tablet",priority:2100,mediaQuery:V.TABLET},{alias:"tablet.landscape",priority:2100,mediaQuery:V.TABLET},{alias:"tablet.portrait",priority:2100,mediaQuery:V.TABLET_PORTRAIT},{alias:"web",priority:2200,mediaQuery:V.WEB,overlapping:!0},{alias:"web.landscape",priority:2200,mediaQuery:V.WEB_LANDSCAPE,overlapping:!0},{alias:"web.portrait",priority:2200,mediaQuery:V.WEB_PORTRAIT,overlapping:!0}],D=/(\.|-|_)/g;function R(t){var e=t.length>0?t.charAt(0):"",i=t.length>1?t.slice(1):"";return e.toUpperCase()+i}var F=new n.s("Token (@angular/flex-layout) Breakpoints",{providedIn:"root",factory:function(){var t=Object(n.Z)(S),e=Object(n.Z)(k),i=[].concat.apply([],(t||[]).map(function(t){return Array.isArray(t)?t:[t]}));return function(t,e){void 0===e&&(e=[]);var i,n={};return t.forEach(function(t){n[t.alias]=t}),e.forEach(function(t){n[t.alias]?function(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];if(null==t)throw TypeError("Cannot convert undefined or null to object");for(var n=0,r=e;n<r.length;n++){var a=r[n];if(null!=a)for(var o in a)a.hasOwnProperty(o)&&(t[o]=a[o])}}(n[t.alias],t):n[t.alias]=t}),(i=Object.keys(n).map(function(t){return n[t]})).forEach(function(t){t.suffix||(t.suffix=t.alias.replace(D,"|").split("|").map(R).join(""),t.overlapping=!!t.overlapping)}),i}((e.disableDefaultBps?[]:C).concat(e.addOrientationBps?W:[]),i)}});function G(t,e){return(e&&e.priority||0)-(t&&t.priority||0)}function N(t,e){return(t.priority||0)-(e.priority||0)}var z=function(){function t(t){this.findByMap=new Map,this.items=t.slice().sort(N)}return t.prototype.findByAlias=function(t){return t?this.findWithPredicate(t,function(e){return e.alias==t}):null},t.prototype.findByQuery=function(t){return this.findWithPredicate(t,function(e){return e.mediaQuery==t})},Object.defineProperty(t.prototype,"overlappings",{get:function(){return this.items.filter(function(t){return 1==t.overlapping})},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"aliases",{get:function(){return this.items.map(function(t){return t.alias})},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"suffixes",{get:function(){return this.items.map(function(t){return t.suffix?t.suffix:""})},enumerable:!0,configurable:!0}),t.prototype.findWithPredicate=function(t,e){var i=this.findByMap.get(t);return i||(i=this.items.find(e)||null,this.findByMap.set(t,i)),i||null},t.ngInjectableDef=Object(n.Vb)({factory:function(){return new t(Object(n.Wb)(F))},token:t,providedIn:"root"}),t}(),K=function(){function t(t,e,i){this._zone=t,this._platformId=e,this._document=i,this.source=new s.a(new w(!0)),this.registry=new Map,this._observable$=this.source.asObservable()}return Object.defineProperty(t.prototype,"activations",{get:function(){var t=[];return this.registry.forEach(function(e,i){e.matches&&t.push(i)}),t},enumerable:!0,configurable:!0}),t.prototype.isActive=function(t){var e=this.registry.get(t);return!!e&&e.matches},t.prototype.observe=function(t,e){var i=this;if(void 0===e&&(e=!1),t&&t.length){var n=this._observable$.pipe(Object(d.a)(function(i){return!e||t.indexOf(i.mediaQuery)>-1})),r=new l.a(function(e){var n=i.registerQuery(t);if(n.length){var r=n.pop();n.forEach(function(t){e.next(t)}),i.source.next(r)}e.complete()});return Object(u.a)(r,n)}return this._observable$},t.prototype.registerQuery=function(t){var e=this,i=Array.isArray(t)?t:[t],n=[];return function(t,e){var i=t.filter(function(t){return!U[t]});if(i.length>0){var n=i.join(", ");try{var r=e.createElement("style");r.setAttribute("type","text/css"),r.styleSheet||r.appendChild(e.createTextNode("\n/*\n  @angular/flex-layout - workaround for possible browser quirk with mediaQuery listeners\n  see http://bit.ly/2sd4HMP\n*/\n@media "+n+" {.fx-query-test{ }}\n")),e.head.appendChild(r),i.forEach(function(t){return U[t]=r})}catch(a){console.error(a)}}}(i,this._document),i.forEach(function(t){var i=e.registry.get(t);i||((i=e.buildMQL(t)).addListener(function(i){e._zone.run(function(){return e.source.next(new w(i.matches,t))})}),e.registry.set(t,i)),i.matches&&n.push(new w(!0,t))}),n},t.prototype.buildMQL=function(t){return function(t,e){return e&&window.matchMedia("all").addListener?window.matchMedia(t):{matches:"all"===t||""===t,media:t,addListener:function(){},removeListener:function(){}}}(t,Object(r.x)(this._platformId))},t.ngInjectableDef=Object(n.Vb)({factory:function(){return new t(Object(n.Wb)(n.C),Object(n.Wb)(n.E),Object(n.Wb)(r.d))},token:t,providedIn:"root"}),t}(),U={},$={alias:"print",mediaQuery:"print",priority:1e3},H=function(){function t(t,e){this.breakpoints=t,this.layoutConfig=e,this.isPrinting=!1,this.queue=new Y,this.deactivations=[]}return t.prototype.withPrintQuery=function(t){return t.concat(["print"])},t.prototype.isPrintEvent=function(t){return t.mediaQuery.startsWith("print")},Object.defineProperty(t.prototype,"printAlias",{get:function(){return this.layoutConfig.printWithBreakpoints||[]},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"printBreakPoints",{get:function(){var t=this;return this.printAlias.map(function(e){return t.breakpoints.findByAlias(e)}).filter(function(t){return null!==t})},enumerable:!0,configurable:!0}),t.prototype.getEventBreakpoints=function(t){var e=this.breakpoints.findByQuery(t.mediaQuery);return(e?this.printBreakPoints.concat([e]):this.printBreakPoints).sort(G)},t.prototype.updateEvent=function(t){var e=this.breakpoints.findByQuery(t.mediaQuery);return this.isPrintEvent(t)&&(e=this.getEventBreakpoints(t)[0],t.mediaQuery=e?e.mediaQuery:""),_(t,e)},t.prototype.interceptEvents=function(t){var e=this;return function(i){e.isPrintEvent(i)?i.matches&&!e.isPrinting?(e.startPrinting(t,e.getEventBreakpoints(i)),t.updateStyles()):!i.matches&&e.isPrinting&&(e.stopPrinting(t),t.updateStyles()):e.collectActivations(i)}},t.prototype.blockPropagation=function(){var t=this;return function(e){return!(t.isPrinting||t.isPrintEvent(e))}},t.prototype.startPrinting=function(t,e){this.isPrinting=!0,t.activatedBreakpoints=this.queue.addPrintBreakpoints(e)},t.prototype.stopPrinting=function(t){t.activatedBreakpoints=this.deactivations,this.deactivations=[],this.queue.clear(),this.isPrinting=!1},t.prototype.collectActivations=function(t){if(!this.isPrinting)if(t.matches)this.deactivations=[];else{var e=this.breakpoints.findByQuery(t.mediaQuery);e&&(this.deactivations.push(e),this.deactivations.sort(G))}},t.ngInjectableDef=Object(n.Vb)({factory:function(){return new t(Object(n.Wb)(z),Object(n.Wb)(k))},token:t,providedIn:"root"}),t}(),Y=function(){function t(){this.printBreakpoints=[]}return t.prototype.addPrintBreakpoints=function(t){var e=this;return t.push($),t.sort(G),t.forEach(function(t){return e.addBreakpoint(t)}),this.printBreakpoints},t.prototype.addBreakpoint=function(t){t&&void 0===this.printBreakpoints.find(function(e){return e.mediaQuery===t.mediaQuery})&&(this.printBreakpoints=function(t){return!!t&&t.mediaQuery.startsWith("print")}(t)?[t].concat(this.printBreakpoints):this.printBreakpoints.concat([t]))},t.prototype.clear=function(){this.printBreakpoints=[]},t}(),q=function(){function t(t,e,i){this.breakpoints=t,this.matchMedia=e,this.hook=i,this.filterOverlaps=!1,this.destroyed$=new o.a,this._media$=this.watchActivations(),this.media$=this._media$.pipe(Object(d.a)(function(t){return t.length>0}),Object(f.a)(function(t){return t[0]}))}return t.prototype.ngOnDestroy=function(){this.destroyed$.next(),this.destroyed$.complete()},t.prototype.asObservable=function(){return this._media$},t.prototype.isActive=function(t){var e=this;return function(t){return Array.isArray(t)?t:[t]}(t).map(function(t){return t.split(",")}).reduce(function(t,e){return t.concat(e)}).map(function(t){return t.trim()}).some(function(t){var i=function(t,e){var i=e.findByAlias(t)||e.findByQuery(t);return i?i.mediaQuery:t}(t,e.breakpoints);return e.matchMedia.isActive(i)})},t.prototype.watchActivations=function(){var t=this.breakpoints.items.map(function(t){return t.mediaQuery});return this.buildObservable(t)},t.prototype.buildObservable=function(t){var e=this;return this.matchMedia.observe(this.hook.withPrintQuery(t)).pipe(Object(d.a)(function(t){return t.matches}),Object(h.a)(0,c.a),Object(y.a)(function(t){return Object(p.a)(e.findAllActivations())}),Object(f.a)(function(t){return e.filterOverlaps?t.filter(function(t){var i=e.breakpoints.findByQuery(t.mediaQuery);return!i||!i.overlapping}):t}),Object(d.a)(function(t){return t.filter(function(t){return t.mediaQuery.length>0}).length>0}),Object(m.a)(this.destroyed$))},t.prototype.findAllActivations=function(){var t=this;return this.matchMedia.activations.map(function(t){return new w(!0,t)}).map(function(e){return t.hook.isPrintEvent(e)?t.hook.updateEvent(e):e}).map(function(e){return _(e,t.breakpoints.findByQuery(e.mediaQuery))}).sort(G)},t.ngInjectableDef=Object(n.Vb)({factory:function(){return new t(Object(n.Wb)(z),Object(n.Wb)(K),Object(n.Wb)(H))},token:t,providedIn:"root"}),t}();function Z(t){for(var e in t){var i=t[e]||"";switch(e){case"display":t.display="flex"===i?["-webkit-flex","flex"]:"inline-flex"===i?["-webkit-inline-flex","inline-flex"]:i;break;case"align-items":case"align-self":case"align-content":case"flex":case"flex-basis":case"flex-flow":case"flex-grow":case"flex-shrink":case"flex-wrap":case"justify-content":t["-webkit-"+e]=i;break;case"flex-direction":t["-webkit-flex-direction"]=i=i||"row",t["flex-direction"]=i;break;case"order":t.order=t["-webkit-"+e]=isNaN(+i)?"0":i}}return t}var J=function(){function t(t,e,i,n){this._serverStylesheet=t,this._serverModuleLoaded=e,this._platformId=i,this.layoutConfig=n}return t.prototype.applyStyleToElement=function(t,e,i){void 0===i&&(i=null);var n={};"string"==typeof e&&(n[e]=i,e=n),n=this.layoutConfig.disableVendorPrefixes?e:Z(e),this._applyMultiValueStyleToElement(n,t)},t.prototype.applyStyleToElements=function(t,e){var i=this;void 0===e&&(e=[]);var n=this.layoutConfig.disableVendorPrefixes?t:Z(t);e.forEach(function(t){i._applyMultiValueStyleToElement(n,t)})},t.prototype.getFlowDirection=function(t){var e=this.lookupStyle(t,"flex-direction");return[e||"row",this.lookupInlineStyle(t,"flex-direction")||Object(r.y)(this._platformId)&&this._serverModuleLoaded?e:""]},t.prototype.lookupAttributeValue=function(t,e){return t.getAttribute(e)||""},t.prototype.lookupInlineStyle=function(t,e){return Object(r.x)(this._platformId)?t.style.getPropertyValue(e):this._getServerStyle(t,e)},t.prototype.lookupStyle=function(t,e,i){void 0===i&&(i=!1);var n="";return t&&((n=this.lookupInlineStyle(t,e))||(Object(r.x)(this._platformId)?i||(n=getComputedStyle(t).getPropertyValue(e)):this._serverModuleLoaded&&(n=this._serverStylesheet.getStyleForElement(t,e)))),n?n.trim():""},t.prototype._applyMultiValueStyleToElement=function(t,e){var i=this;Object.keys(t).sort().forEach(function(n){var a=t[n],o=Array.isArray(a)?a:[a];o.sort();for(var s=0,l=o;s<l.length;s++){var u=l[s];u=u?u+"":"",Object(r.x)(i._platformId)||!i._serverModuleLoaded?Object(r.x)(i._platformId)?e.style.setProperty(n,u):i._setServerStyle(e,n,u):i._serverStylesheet.addStyleToElement(e,n,u)}})},t.prototype._setServerStyle=function(t,e,i){e=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();var n=this._readStyleAttribute(t);n[e]=i||"",this._writeStyleAttribute(t,n)},t.prototype._getServerStyle=function(t,e){return this._readStyleAttribute(t)[e]||""},t.prototype._readStyleAttribute=function(t){var e={},i=t.getAttribute("style");if(i)for(var n=i.split(/;+/g),r=0;r<n.length;r++){var a=n[r].trim();if(a.length>0){var o=a.indexOf(":");if(-1===o)throw new Error("Invalid CSS style: "+a);e[a.substr(0,o).trim()]=a.substr(o+1).trim()}}return e},t.prototype._writeStyleAttribute=function(t,e){var i="";for(var n in e)e[n]&&(i+=n+":"+e[n]+";");t.setAttribute("style",i)},t.ngInjectableDef=Object(n.Vb)({factory:function(){return new t(Object(n.Wb)(E,8),Object(n.Wb)(j,8),Object(n.Wb)(n.E),Object(n.Wb)(k))},token:t,providedIn:"root"}),t}(),X=function(){function t(){this.shouldCache=!0}return t.prototype.sideEffect=function(t,e,i){},t}();function tt(t,e,i){void 0===e&&(e="1"),void 0===i&&(i="1");var n=[e,i,t],r=t.indexOf("calc");if(r>0)n[2]=et(t.substring(r).trim()),2==(a=t.substr(0,r).trim().split(" ")).length&&(n[0]=a[0],n[1]=a[1]);else if(0==r)n[2]=et(t.trim());else{var a;n=3===(a=t.split(" ")).length?a:[e,i,t]}return n}function et(t){return t.replace(/[\s]/g,"").replace(/[\/\*\+\-]/g," $& ")}var it=function(){function t(t,e,i){this.matchMedia=t,this.breakpoints=e,this.hook=i,this.activatedBreakpoints=[],this.elementMap=new Map,this.elementKeyMap=new WeakMap,this.watcherMap=new WeakMap,this.updateMap=new WeakMap,this.clearMap=new WeakMap,this.subject=new o.a,this.observeActivations()}return Object.defineProperty(t.prototype,"activatedAlias",{get:function(){return this.activatedBreakpoints[0]?this.activatedBreakpoints[0].alias:""},enumerable:!0,configurable:!0}),t.prototype.onMediaChange=function(t){var e=this.findByQuery(t.mediaQuery);e&&((t=_(t,e)).matches&&-1===this.activatedBreakpoints.indexOf(e)?(this.activatedBreakpoints.push(e),this.activatedBreakpoints.sort(G),this.updateStyles()):t.matches||-1===this.activatedBreakpoints.indexOf(e)||(this.activatedBreakpoints.splice(this.activatedBreakpoints.indexOf(e),1),this.activatedBreakpoints.sort(G),this.updateStyles()))},t.prototype.init=function(t,e,i,n,r){void 0===r&&(r=[]),nt(this.updateMap,t,e,i),nt(this.clearMap,t,e,n),this.buildElementKeyMap(t,e),this.watchExtraTriggers(t,e,r)},t.prototype.getValue=function(t,e,i){var n=this.elementMap.get(t);if(n){var r=void 0!==i?n.get(i):this.getActivatedValues(n,e);if(r)return r.get(e)}},t.prototype.hasValue=function(t,e){var i=this.elementMap.get(t);if(i){var n=this.getActivatedValues(i,e);if(n)return void 0!==n.get(e)||!1}return!1},t.prototype.setValue=function(t,e,i,n){var r=this.elementMap.get(t);if(r){var a=(r.get(n)||new Map).set(e,i);r.set(n,a),this.elementMap.set(t,r)}else r=(new Map).set(n,(new Map).set(e,i)),this.elementMap.set(t,r);var o=this.getValue(t,e);void 0!==o&&this.updateElement(t,e,o)},t.prototype.trackValue=function(t,e){return this.subject.asObservable().pipe(Object(d.a)(function(i){return i.element===t&&i.key===e}))},t.prototype.updateStyles=function(){var t=this;this.elementMap.forEach(function(e,i){var n=new Set(t.elementKeyMap.get(i)),r=t.getActivatedValues(e);r&&r.forEach(function(e,r){t.updateElement(i,r,e),n.delete(r)}),n.forEach(function(n){if(r=t.getActivatedValues(e,n)){var a=r.get(n);t.updateElement(i,n,a)}else t.clearElement(i,n)})})},t.prototype.clearElement=function(t,e){var i=this.clearMap.get(t);if(i){var n=i.get(e);n&&(n(),this.subject.next({element:t,key:e,value:""}))}},t.prototype.updateElement=function(t,e,i){var n=this.updateMap.get(t);if(n){var r=n.get(e);r&&(r(i),this.subject.next({element:t,key:e,value:i}))}},t.prototype.releaseElement=function(t){var e=this.watcherMap.get(t);e&&(e.forEach(function(t){return t.unsubscribe()}),this.watcherMap.delete(t));var i=this.elementMap.get(t);i&&(i.forEach(function(t,e){return i.delete(e)}),this.elementMap.delete(t))},t.prototype.triggerUpdate=function(t,e){var i=this,n=this.elementMap.get(t);if(n){var r=this.getActivatedValues(n,e);r&&(e?this.updateElement(t,e,r.get(e)):r.forEach(function(e,n){return i.updateElement(t,n,e)}))}},t.prototype.buildElementKeyMap=function(t,e){var i=this.elementKeyMap.get(t);i||(i=new Set,this.elementKeyMap.set(t,i)),i.add(e)},t.prototype.watchExtraTriggers=function(t,e,i){var n=this;if(i&&i.length){var r=this.watcherMap.get(t);if(r||(r=new Map,this.watcherMap.set(t,r)),!r.get(e)){var a=u.a.apply(void 0,i).subscribe(function(){var i=n.getValue(t,e);n.updateElement(t,e,i)});r.set(e,a)}}},t.prototype.findByQuery=function(t){return this.breakpoints.findByQuery(t)},t.prototype.getActivatedValues=function(t,e){for(var i=0;i<this.activatedBreakpoints.length;i++){var n=t.get(this.activatedBreakpoints[i].alias);if(n&&(void 0===e||n.has(e)))return n}var r=t.get("");return void 0===e||r&&r.has(e)?r:void 0},t.prototype.observeActivations=function(){var t=this.breakpoints.items.map(function(t){return t.mediaQuery});this.matchMedia.observe(this.hook.withPrintQuery(t)).pipe(Object(v.a)(this.hook.interceptEvents(this)),Object(d.a)(this.hook.blockPropagation())).subscribe(this.onMediaChange.bind(this))},t.ngInjectableDef=Object(n.Vb)({factory:function(){return new t(Object(n.Wb)(K),Object(n.Wb)(z),Object(n.Wb)(H))},token:t,providedIn:"root"}),t}();function nt(t,e,i,n){if(void 0!==n){var r=t.get(e);r||(r=new Map,t.set(e,r)),r.set(i,n)}}},"V9q+":function(t,e,i){"use strict";i.d(e,"a",function(){return o}),i("CcnG");var n=i("mrSG"),r=i("Ip0R"),a=i("OzfB"),o=function(){function t(t,e){Object(r.y)(e)&&!t&&console.warn("Warning: Flex Layout loaded on the server without FlexLayoutServerModule")}return t.withConfig=function(e,i){return void 0===i&&(i=[]),{ngModule:t,providers:e.serverLoaded?[{provide:a.e,useValue:Object(n.__assign)({},a.d,e)},{provide:a.a,useValue:i,multi:!0},{provide:a.h,useValue:!0}]:[{provide:a.e,useValue:Object(n.__assign)({},a.d,e)},{provide:a.a,useValue:i,multi:!0}]}},t}()},hUWP:function(t,e,i){"use strict";i.d(e,"a",function(){return n}),i("mrSG"),i("CcnG"),i("Ip0R"),i("OzfB"),i("n6gG"),i("ny24");var n=function(){return function(){}}()},lzlj:function(t,e,i){"use strict";i.d(e,"a",function(){return r}),i.d(e,"d",function(){return a}),i.d(e,"b",function(){return o}),i.d(e,"c",function(){return s});var n=i("CcnG"),r=(i("FVSy"),i("Fzqc"),i("Wf4p"),i("ZYjt"),i("wFw1"),n.ub({encapsulation:2,styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(.4,0,.2,1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}@media (-ms-high-contrast:active){.mat-card{outline:solid 1px}}.mat-card-actions,.mat-card-content,.mat-card-subtitle{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media (max-width:599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card-content>:first-child,.mat-card>:first-child{margin-top:0}.mat-card-content>:last-child:not(.mat-card-footer),.mat-card>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child{margin-left:0;margin-right:0}.mat-card-subtitle:not(:first-child),.mat-card-title:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}"],data:{}}));function a(t){return n.Rb(2,[n.Hb(null,0),n.Hb(null,1)],null,null)}var o=n.ub({encapsulation:2,styles:[],data:{}});function s(t){return n.Rb(2,[n.Hb(null,0),(t()(),n.wb(1,0,null,null,1,"div",[["class","mat-card-header-text"]],null,null,null,null,null)),n.Hb(null,1),n.Hb(null,2)],null,null)}}}]);