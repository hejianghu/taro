(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[7542],{22122:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},19756:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,{Z:function(){return r}})},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(n),k=a,m=s["".concat(i,".").concat(k)]||s[k]||d[k]||o;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=s;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},69064:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return i},default:function(){return c}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),l={title:"Taro.onPageNotFound(callback)",sidebar_label:"onPageNotFound"},p={unversionedId:"apis/base/weapp/app-event/onPageNotFound",id:"version-2.x/apis/base/weapp/app-event/onPageNotFound",isDocsHomePage:!1,title:"Taro.onPageNotFound(callback)",description:"\u76d1\u542c\u5c0f\u7a0b\u5e8f\u8981\u6253\u5f00\u7684\u9875\u9762\u4e0d\u5b58\u5728\u4e8b\u4ef6\u3002\u8be5\u4e8b\u4ef6\u4e0e App.onPageNotFound \u7684\u56de\u8c03\u65f6\u673a\u4e00\u81f4\u3002",source:"@site/versioned_docs/version-2.x/apis/base/weapp/app-event/onPageNotFound.md",sourceDirName:"apis/base/weapp/app-event",slug:"/apis/base/weapp/app-event/onPageNotFound",permalink:"/taro/en/docs/2.x/apis/base/weapp/app-event/onPageNotFound",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/base/weapp/app-event/onPageNotFound.md",version:"2.x",sidebar_label:"onPageNotFound",frontMatter:{title:"Taro.onPageNotFound(callback)",sidebar_label:"onPageNotFound"},sidebar:"version-2.x/API",previous:{title:"Taro.getLaunchOptionsSync()",permalink:"/taro/en/docs/2.x/apis/base/weapp/life-cycle/getLaunchOptionsSync"},next:{title:"Taro.onError(callback)",permalink:"/taro/en/docs/2.x/apis/base/weapp/app-event/onError"}},i=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Result",id:"result",children:[]},{value:"Callback",id:"callback",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],u={toc:i};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u76d1\u542c\u5c0f\u7a0b\u5e8f\u8981\u6253\u5f00\u7684\u9875\u9762\u4e0d\u5b58\u5728\u4e8b\u4ef6\u3002\u8be5\u4e8b\u4ef6\u4e0e ",(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html#onpagenotfoundobject-object"},(0,o.kt)("inlineCode",{parentName:"a"},"App.onPageNotFound"))," \u7684\u56de\u8c03\u65f6\u673a\u4e00\u81f4\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6ce8\u610f")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u8005\u53ef\u4ee5\u5728\u56de\u8c03\u4e2d\u8fdb\u884c\u9875\u9762\u91cd\u5b9a\u5411\uff0c\u4f46\u5fc5\u987b\u5728\u56de\u8c03\u4e2d",(0,o.kt)("strong",{parentName:"li"},"\u540c\u6b65"),"\u5904\u7406\uff0c\u5f02\u6b65\u5904\u7406\uff08\u4f8b\u5982 ",(0,o.kt)("inlineCode",{parentName:"li"},"setTimeout")," \u5f02\u6b65\u6267\u884c\uff09\u65e0\u6548\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u82e5\u5f00\u53d1\u8005\u6ca1\u6709\u8c03\u7528 ",(0,o.kt)("a",{parentName:"li",href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onPageNotFound.html"},"Taro.onPageNotFound")," \u7ed1\u5b9a\u76d1\u542c\uff0c\u4e5f\u6ca1\u6709\u58f0\u660e ",(0,o.kt)("inlineCode",{parentName:"li"},"App.onPageNotFound"),"\uff0c\u5f53\u8df3\u8f6c\u9875\u9762\u4e0d\u5b58\u5728\u65f6\uff0c\u5c06\u63a8\u5165\u5fae\u4fe1\u5ba2\u6237\u7aef\u539f\u751f\u7684\u9875\u9762\u4e0d\u5b58\u5728\u63d0\u793a\u9875\u9762\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5982\u679c\u56de\u8c03\u4e2d\u53c8\u91cd\u5b9a\u5411\u5230\u53e6\u4e00\u4e2a\u4e0d\u5b58\u5728\u7684\u9875\u9762\uff0c\u5c06\u63a8\u5165\u5fae\u4fe1\u5ba2\u6237\u7aef\u539f\u751f\u7684\u9875\u9762\u4e0d\u5b58\u5728\u63d0\u793a\u9875\u9762\uff0c\u5e76\u4e14\u4e0d\u518d\u7b2c\u4e8c\u6b21\u56de\u8c03\u3002")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onPageNotFound.html"},"\u53c2\u8003\u6587\u6863"))),(0,o.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: Callback) => void\n")),(0,o.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,o.kt)("h3",{id:"result"},"Result"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"\u53c2\u6570"),(0,o.kt)("th",null,"\u7c7b\u578b"),(0,o.kt)("th",null,"\u8bf4\u660e"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"isEntryPage"),(0,o.kt)("td",null,(0,o.kt)("code",null,"boolean")),(0,o.kt)("td",null,"\u662f\u5426\u672c\u6b21\u542f\u52a8\u7684\u9996\u4e2a\u9875\u9762\uff08\u4f8b\u5982\u4ece\u5206\u4eab\u7b49\u5165\u53e3\u8fdb\u6765\uff0c\u9996\u4e2a\u9875\u9762\u662f\u5f00\u53d1\u8005\u914d\u7f6e\u7684\u5206\u4eab\u9875\u9762\uff09")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"path"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,"\u4e0d\u5b58\u5728\u9875\u9762\u7684\u8def\u5f84")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"query"),(0,o.kt)("td",null,(0,o.kt)("code",null,"Record<string, any>")),(0,o.kt)("td",null,"\u6253\u5f00\u4e0d\u5b58\u5728\u9875\u9762\u7684 query \u53c2\u6570")))),(0,o.kt)("h3",{id:"callback"},"Callback"),(0,o.kt)("p",null,"\u5c0f\u7a0b\u5e8f\u8981\u6253\u5f00\u7684\u9875\u9762\u4e0d\u5b58\u5728\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"(res: Result) => void\n")),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"\u53c2\u6570"),(0,o.kt)("th",null,"\u7c7b\u578b"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"res"),(0,o.kt)("td",null,(0,o.kt)("code",null,"Result"))))),(0,o.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"API"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Taro.onPageNotFound"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"})))))}c.isMDXComponent=!0}}]);