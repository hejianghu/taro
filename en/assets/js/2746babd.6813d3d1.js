(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[82753],{22122:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},19756:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,{Z:function(){return r}})},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,v=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(v,l(l({ref:t},s),{},{components:n})):r.createElement(v,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58215:function(e,t,n){"use strict";var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},41395:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(67294),a=n(80944),o=n(86010),l="tabItem_1uMI",i="tabItemActive_2DSg";var c=37,u=39;var s=function(e){var t=e.lazy,n=e.block,s=e.defaultValue,p=e.values,m=e.groupId,d=e.className,v=(0,a.Z)(),b=v.tabGroupChoices,f=v.setTabGroupChoices,h=(0,r.useState)(s),k=h[0],g=h[1],y=r.Children.toArray(e.children),w=[];if(null!=m){var N=b[m];null!=N&&N!==k&&p.some((function(e){return e.value===N}))&&g(N)}var x=function(e){var t=e.currentTarget,n=w.indexOf(t),r=p[n].value;g(r),null!=m&&(f(m,r),setTimeout((function(){var e,n,r,a,o,l,c,u;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,l=window,c=l.innerHeight,u=l.innerWidth,n>=0&&o<=u&&a<=c&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i),setTimeout((function(){return t.classList.remove(i)}),2e3))}),150))},O=function(e){var t,n;switch(e.keyCode){case u:var r=w.indexOf(e.target)+1;n=w[r]||w[0];break;case c:var a=w.indexOf(e.target)-1;n=w[a]||w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},d)},p.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":k===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:O,onFocus:x,onClick:x},n)}))),t?(0,r.cloneElement)(y.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},79443:function(e,t,n){"use strict";var r=(0,n(67294).createContext)(void 0);t.Z=r},80944:function(e,t,n){"use strict";var r=n(67294),a=n(79443);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},19883:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return m}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),l=n(41395),i=n(58215),c={title:"MovableArea",sidebar_label:"MovableArea"},u={unversionedId:"components/viewContainer/movable-area",id:"version-3.x/components/viewContainer/movable-area",isDocsHomePage:!1,title:"MovableArea",description:"A movable area of the movable-view component.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/components/viewContainer/movable-area.md",sourceDirName:"components/viewContainer",slug:"/components/viewContainer/movable-area",permalink:"/taro/en/docs/components/viewContainer/movable-area",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/components/viewContainer/movable-area.md",version:"3.x",sidebar_label:"MovableArea",frontMatter:{title:"MovableArea",sidebar_label:"MovableArea"},sidebar:"version-3.x/components",previous:{title:"SwiperItem",permalink:"/taro/en/docs/components/viewContainer/swiper-item"},next:{title:"MovableView",permalink:"/taro/en/docs/components/viewContainer/movable-view"}},s=[{value:"Type",id:"type",children:[]},{value:"Examples",id:"examples",children:[]},{value:"MovableAreaProps",id:"movableareaprops",children:[{value:"Property Support",id:"property-support",children:[]}]},{value:"API Support",id:"api-support",children:[]}],p={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A movable area of the movable-view component."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/component/movable-area.html"},"Reference"))),(0,o.kt)("h2",{id:"type"},"Type"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"ComponentType<MovableAreaProps>\n")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)(l.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"React",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"class App extends Components {\n  render () {\n    return (\n      <MovableArea style='height: 200px; width: 200px; background: red;'>\n        <MovableView style='height: 50px; width: 50px; background: blue;' direction='all'>The meaning of travel</MovableView>\n      </MovableArea>\n    )\n  }\n}\n"))),(0,o.kt)(i.Z,{value:"Vue",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"  <movable-area style='height: 200px; width: 200px; background: red;'>\n    <movable-view style='height: 50px; width: 50px; background: blue;' direction='all'>On the road</movable-view>\n  </movable-area>\n")))),(0,o.kt)("h2",{id:"movableareaprops"},"MovableAreaProps"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Property"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",{style:{textAlign:"center"}},"Default"),(0,o.kt)("th",{style:{textAlign:"center"}},"Required"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"scaleArea"),(0,o.kt)("td",null,(0,o.kt)("code",null,"boolean")),(0,o.kt)("td",{style:{textAlign:"center"}},(0,o.kt)("code",null,"false")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"When the movable-view inside is set to support two-finger zoom, setting this value modifies the area where the zoom gesture takes effect to the entire movable-area.")))),(0,o.kt)("h3",{id:"property-support"},"Property Support"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Property"),(0,o.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"MovableAreaProps.scaleArea"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"})))),(0,o.kt)("h2",{id:"api-support"},"API Support"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"API"),(0,o.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"MovableArea"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}m.isMDXComponent=!0},86010:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);