(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[691],{7228:function(t){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n},t.exports.default=t.exports,t.exports.__esModule=!0},2858:function(t){t.exports=function(t){if(Array.isArray(t))return t},t.exports.default=t.exports,t.exports.__esModule=!0},3646:function(t,e,r){var n=r(7228);t.exports=function(t){if(Array.isArray(t))return n(t)},t.exports.default=t.exports,t.exports.__esModule=!0},6860:function(t){t.exports=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},t.exports.default=t.exports,t.exports.__esModule=!0},3884:function(t){t.exports=function(t,e){var r=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null!=r){var n,o,a=[],i=!0,u=!1;try{for(r=r.call(t);!(i=(n=r.next()).done)&&(a.push(n.value),!e||a.length!==e);i=!0);}catch(c){u=!0,o=c}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}},t.exports.default=t.exports,t.exports.__esModule=!0},521:function(t){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.default=t.exports,t.exports.__esModule=!0},8206:function(t){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.default=t.exports,t.exports.__esModule=!0},3038:function(t,e,r){var n=r(2858),o=r(3884),a=r(379),i=r(521);t.exports=function(t,e){return n(t)||o(t,e)||a(t,e)||i()},t.exports.default=t.exports,t.exports.__esModule=!0},319:function(t,e,r){var n=r(3646),o=r(6860),a=r(379),i=r(8206);t.exports=function(t){return n(t)||o(t)||a(t)||i()},t.exports.default=t.exports,t.exports.__esModule=!0},379:function(t,e,r){var n=r(7228);t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}},t.exports.default=t.exports,t.exports.__esModule=!0},7091:function(t){"use strict";var e="%[a-f0-9]{2}",r=new RegExp(e,"gi"),n=new RegExp("("+e+")+","gi");function o(t,e){try{return decodeURIComponent(t.join(""))}catch(a){}if(1===t.length)return t;e=e||1;var r=t.slice(0,e),n=t.slice(e);return Array.prototype.concat.call([],o(r),o(n))}function a(t){try{return decodeURIComponent(t)}catch(a){for(var e=t.match(r),n=1;n<e.length;n++)e=(t=o(e,n).join("")).match(r);return t}}t.exports=function(t){if("string"!=typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(e){return function(t){for(var r={"%FE%FF":"��","%FF%FE":"��"},o=n.exec(t);o;){try{r[o[0]]=decodeURIComponent(o[0])}catch(e){var i=a(o[0]);i!==o[0]&&(r[o[0]]=i)}o=n.exec(t)}r["%C2"]="�";for(var u=Object.keys(r),c=0;c<u.length;c++){var s=u[c];t=t.replace(new RegExp(s,"g"),r[s])}return t}(t)}}},8616:function(t){"use strict";t.exports=function(t,e){for(var r={},n=Object.keys(t),o=Array.isArray(e),a=0;a<n.length;a++){var i=n[a],u=t[i];(o?-1!==e.indexOf(i):e(i,u,t))&&(r[i]=u)}return r}},2203:function(t,e,r){"use strict";var n=r(3038),o=r(319);function a(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return u=t.done,t},e:function(t){c=!0,a=t},f:function(){try{u||null==r.return||r.return()}finally{if(c)throw a}}}}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var u=r(8936),c=r(7091),s=r(4734),l=r(8616);function f(t){if("string"!=typeof t||1!==t.length)throw new TypeError("arrayFormatSeparator must be single character string")}function p(t,e){return e.encode?e.strict?u(t):encodeURIComponent(t):t}function d(t,e){return e.decode?c(t):t}function g(t){return Array.isArray(t)?t.sort():"object"==typeof t?g(Object.keys(t)).sort((function(t,e){return Number(t)-Number(e)})).map((function(e){return t[e]})):t}function m(t){var e=t.indexOf("#");return-1!==e&&(t=t.slice(0,e)),t}function y(t){var e=(t=m(t)).indexOf("?");return-1===e?"":t.slice(e+1)}function x(t,e){return e.parseNumbers&&!Number.isNaN(Number(t))&&"string"==typeof t&&""!==t.trim()?t=Number(t):!e.parseBooleans||null===t||"true"!==t.toLowerCase()&&"false"!==t.toLowerCase()||(t="true"===t.toLowerCase()),t}function v(t,e){f((e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},e)).arrayFormatSeparator);var r=function(t){var e;switch(t.arrayFormat){case"index":return function(t,r,n){e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),e?(void 0===n[t]&&(n[t]={}),n[t][e[1]]=r):n[t]=r};case"bracket":return function(t,r,n){e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0!==n[t]?n[t]=[].concat(n[t],r):n[t]=[r]:n[t]=r};case"comma":case"separator":return function(e,r,n){var o="string"==typeof r&&r.includes(t.arrayFormatSeparator),a="string"==typeof r&&!o&&d(r,t).includes(t.arrayFormatSeparator);r=a?d(r,t):r;var i=o||a?r.split(t.arrayFormatSeparator).map((function(e){return d(e,t)})):null===r?r:d(r,t);n[e]=i};case"bracket-separator":return function(e,r,n){var o=/(\[\])$/.test(e);if(e=e.replace(/\[\]$/,""),o){var a=null===r?[]:r.split(t.arrayFormatSeparator).map((function(e){return d(e,t)}));void 0!==n[e]?n[e]=[].concat(n[e],a):n[e]=a}else n[e]=r?d(r,t):r};default:return function(t,e,r){void 0!==r[t]?r[t]=[].concat(r[t],e):r[t]=e}}}(e),o=Object.create(null);if("string"!=typeof t)return o;if(!(t=t.trim().replace(/^[?#&]/,"")))return o;var i,u=a(t.split("&"));try{for(u.s();!(i=u.n()).done;){var c=i.value;if(""!==c){var l=s(e.decode?c.replace(/\+/g," "):c,"="),p=n(l,2),m=p[0],y=p[1];y=void 0===y?null:["comma","separator","bracket-separator"].includes(e.arrayFormat)?y:d(y,e),r(d(m,e),y,o)}}}catch(I){u.e(I)}finally{u.f()}for(var v=0,h=Object.keys(o);v<h.length;v++){var b=h[v],w=o[b];if("object"==typeof w&&null!==w)for(var k=0,j=Object.keys(w);k<j.length;k++){var Z=j[k];w[Z]=x(w[Z],e)}else o[b]=x(w,e)}return!1===e.sort?o:(!0===e.sort?Object.keys(o).sort():Object.keys(o).sort(e.sort)).reduce((function(t,e){var r=o[e];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?t[e]=g(r):t[e]=r,t}),Object.create(null))}e.extract=y,e.parse=v,e.stringify=function(t,e){if(!t)return"";f((e=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},e)).arrayFormatSeparator);for(var r=function(r){return e.skipNull&&null==t[r]||e.skipEmptyString&&""===t[r]},n=function(t){switch(t.arrayFormat){case"index":return function(e){return function(r,n){var a=r.length;return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(o(r),null===n?[[p(e,t),"[",a,"]"].join("")]:[[p(e,t),"[",p(a,t),"]=",p(n,t)].join("")])}};case"bracket":return function(e){return function(r,n){return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(o(r),null===n?[[p(e,t),"[]"].join("")]:[[p(e,t),"[]=",p(n,t)].join("")])}};case"comma":case"separator":case"bracket-separator":var e="bracket-separator"===t.arrayFormat?"[]=":"=";return function(r){return function(n,o){return void 0===o||t.skipNull&&null===o||t.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length?[[p(r,t),e,p(o,t)].join("")]:[[n,p(o,t)].join(t.arrayFormatSeparator)])}};default:return function(e){return function(r,n){return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(o(r),null===n?[p(e,t)]:[[p(e,t),"=",p(n,t)].join("")])}}}}(e),a={},i=0,u=Object.keys(t);i<u.length;i++){var c=u[i];r(c)||(a[c]=t[c])}var s=Object.keys(a);return!1!==e.sort&&s.sort(e.sort),s.map((function(r){var o=t[r];return void 0===o?"":null===o?p(r,e):Array.isArray(o)?0===o.length&&"bracket-separator"===e.arrayFormat?p(r,e)+"[]":o.reduce(n(r),[]).join("&"):p(r,e)+"="+p(o,e)})).filter((function(t){return t.length>0})).join("&")},e.parseUrl=function(t,e){e=Object.assign({decode:!0},e);var r=s(t,"#"),o=n(r,2),a=o[0],i=o[1];return Object.assign({url:a.split("?")[0]||"",query:v(y(t),e)},e&&e.parseFragmentIdentifier&&i?{fragmentIdentifier:d(i,e)}:{})},e.stringifyUrl=function(t,r){r=Object.assign({encode:!0,strict:!0},r);var n=m(t.url).split("?")[0]||"",o=e.extract(t.url),a=e.parse(o,{sort:!1}),i=Object.assign(a,t.query),u=e.stringify(i,r);u&&(u="?".concat(u));var c=function(t){var e="",r=t.indexOf("#");return-1!==r&&(e=t.slice(r)),e}(t.url);return t.fragmentIdentifier&&(c="#".concat(p(t.fragmentIdentifier,r))),"".concat(n).concat(u).concat(c)},e.pick=function(t,r,n){n=Object.assign({parseFragmentIdentifier:!0},n);var o=e.parseUrl(t,n),a=o.url,i=o.query,u=o.fragmentIdentifier;return e.stringifyUrl({url:a,query:l(i,r),fragmentIdentifier:u},n)},e.exclude=function(t,r,n){var o=Array.isArray(r)?function(t){return!r.includes(t)}:function(t,e){return!r(t,e)};return e.pick(t,o,n)}},4734:function(t){"use strict";t.exports=function(t,e){if("string"!=typeof t||"string"!=typeof e)throw new TypeError("Expected the arguments to be of type `string`");if(""===e)return[t];var r=t.indexOf(e);return-1===r?[t]:[t.slice(0,r),t.slice(r+e.length)]}},8936:function(t){"use strict";t.exports=function(t){return encodeURIComponent(t).replace(/[!'()*]/g,(function(t){return"%".concat(t.charCodeAt(0).toString(16).toUpperCase())}))}},1812:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return M}});var n=r(6771),o=r(7294),a=r(1496),i=r(3431);var u=(0,n.Z)(a.Z,{target:"e1n1u3tj0"})({name:"1on2x4e",styles:"width:120px;height:120px;margin-bottom:30px;border-radius:50%;@media (max-width: 768px){width:80px;height:80px;}"}),c=function(t){var e=t.profileImage;return(0,i.tZ)(u,{fluid:e,alt:"Profile Image"})};var s=(0,n.Z)("div",{target:"e160b013"})({name:"1u7ncg7",styles:"width:100%;background-image:linear-gradient(60deg, #29323c 0%, #485563 100%);color:#ffffff"}),l=(0,n.Z)("div",{target:"e160b012"})({name:"1kisa53",styles:"display:flex;flex-direction:column;justify-content:center;align-items:flex-start;width:768px;height:400px;margin:0 auto;@media (max-width: 768px){width:100%;height:300px;padding:0 20px;}"}),f=(0,n.Z)("div",{target:"e160b011"})({name:"1h8u8jj",styles:"font-size:20px;font-weight:400;@media (max-width: 768px){font-size:15px;}"}),p=(0,n.Z)("div",{target:"e160b010"})({name:"1mgdphf",styles:"margin-top:5px;font-size:35px;font-weight:700;@media (max-width: 768px){font-size:25px;}"}),d=function(t){var e=t.profileImage;return(0,i.tZ)(s,null,(0,i.tZ)(l,null,(0,i.tZ)(c,{profileImage:e}),(0,i.tZ)("div",null,(0,i.tZ)(f,null,"Nice To meet you"),(0,i.tZ)(p,null,"I'm Junior Frontend Developer."))))},g=r(2122);var m=r(5444),y=["active","to"];var x=(0,n.Z)("div",{target:"e1kn8q5k1"})({name:"12y958w",styles:"display:flex;flex-wrap:wrap;width:768px;margin:100px auto 0;@media (max-width: 768px){width:100%;height:50px;padding:0 20px;}"}),v=(0,n.Z)((function(t){t.active;var e=t.to,r=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,y);return(0,i.tZ)(m.rU,(0,g.Z)({to:e},r))}),{target:"e1kn8q5k0"})("margin-right:20px;padding:5px 0;font-size:18px;font-weight:",(function(t){return t.active?"800":"400"}),";cursor:pointer;&:last-of-type{margin-right:0;}@media (max-width: 768px){font-size:15px;}"),h=function(t){var e=t.selectedCategory,r=t.categoryList;return(0,i.tZ)(x,null,Object.entries(r).map((function(t){var r=t[0],n=t[1];return(0,i.tZ)(v,{to:"/?category="+r,active:r===e,key:r},"#",r,"(",n,")")})))};var b=(0,n.Z)(m.rU,{target:"e1eg5kak7"})({name:"166cp14",styles:"display:flex;flex-direction:column;border-radius:10px;box-shadow:0 0 8px rbga(0,0,0,0.15);transition:0.3s box-shadow;cursor:pointer;&:hover{box-shadow:0 0 10px rgba(0,0,0,0.3);}"}),w=(0,n.Z)(a.Z,{target:"e1eg5kak6"})({name:"pxpl23",styles:"width:100%;height:200px;border-radius:10px 10px 0 0;object-fit:cover"}),k=(0,n.Z)("div",{target:"e1eg5kak5"})({name:"1do7u82",styles:"flex:1;display:flex;flex-direction:column;padding:15px"}),j=(0,n.Z)("div",{target:"e1eg5kak4"})({name:"kw2b4d",styles:"display:-webkit-box;overflow:hidden;margin-bottom:3px;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:20px;font-weight:700"}),Z=(0,n.Z)("div",{target:"e1eg5kak3"})({name:"xm5j9w",styles:"font-size:14px;font-weight:400;opacity:0.7"}),I=(0,n.Z)("div",{target:"e1eg5kak2"})({name:"1bobky6",styles:"display:flex;flex-wrap:wrap;margin-top:10px;margin:10px -5px"}),S=(0,n.Z)("div",{target:"e1eg5kak1"})({name:"1bzcbme",styles:"margin:2.5px 5px;padding:3px 5px;border-radius:3px;background:black;font-size:14px;font-weight:700;color:white"}),A=(0,n.Z)("div",{target:"e1eg5kak0"})({name:"1wehmme",styles:"display:-webkit-box;overflow:hidden;margin-top:auto;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:16px;opacity:0.8"}),O=function(t){var e=t.title,r=t.date,n=t.categories,o=t.summary,a=t.thumbnail.childImageSharp.fluid,u=t.link;return(0,i.tZ)(b,{to:u},(0,i.tZ)(w,{fluid:a,alt:"Post Item Image"}),(0,i.tZ)(k,null,(0,i.tZ)(j,null,e),(0,i.tZ)(Z,null,r),(0,i.tZ)(I,null,n.map((function(t){return(0,i.tZ)(S,{key:t},t)}))),(0,i.tZ)(A,null,o)))},F=function(t,e){var r=(0,o.useRef)(null),n=(0,o.useState)(1),a=n[0],i=n[1],u=(0,o.useMemo)((function(){return e.filter((function(e){var r=e.node.frontmatter.categories;return"All"===t||r.includes(t)}))}),[t]),c=new IntersectionObserver((function(t,e){t[0].isIntersecting&&(i((function(t){return t+1})),e.disconnect())}));return(0,o.useEffect)((function(){return i(1)}),[t]),(0,o.useEffect)((function(){10*a>=u.length||null===r.current||0===r.current.children.length||c.observe(r.current.children[r.current.children.length-1])}),[a,t]),{containerRef:r,postList:u.slice(0,10*a)}};var _=(0,n.Z)("div",{target:"es8e92y0"})({name:"11grurp",styles:"display:grid;grid-template-columns:1fr 1fr;grid-gap:20px;width:768px;margin:0 auto;padding:50px 0 100px;@media (max-width: 768px){grid-template-columns:1fr;width:100%;padding:50px 20px;}"}),E=function(t){var e=t.selectedCategory,r=t.posts,n=F(e,r),o=n.containerRef;n.postList;return(0,i.tZ)(_,{ref:o},r.map((function(t){var e=t.node,r=e.id,n=e.fields.slug,o=e.frontmatter;return(0,i.tZ)(O,(0,g.Z)({},o,{link:n,key:r}))})))},C=r(2203),U=r(8440);(0,n.Z)("div",{target:"ewcmato0"})({name:"13ku56z",styles:"display:flex;flex-direction:column;height:100%"});var M=function(t){var e=t.location.search,r=t.data,n=r.allMarkdownRemark.edges,a=r.file.childImageSharp.fluid,u=C.parse(e),c="String"==typeof u.category&&u.category?u.category:"All",s=(0,o.useMemo)((function(){return n.reduce((function(t,e){return e.node.frontmatter.categories.forEach((function(e){void 0===t[e]?t[e]=1:t[e]++})),t.All++,t}),{All:0})}),[]);return(0,i.tZ)(U.Z,null,(0,i.tZ)(d,{profileImage:a}),(0,i.tZ)(h,{selectedCategory:c,categoryList:s}),(0,i.tZ)(E,{selectedCategory:c,posts:n}))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-b78f4021b352833d3ecf.js.map