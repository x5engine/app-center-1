(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{155:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return c});var n=a(0),r=a.n(n),l=a(173),i=a(171),c="2451943709";t.default=function(e){var t=e.data,a=t.lastmonth.edges.filter(function(e){return 0===t.thismonth.edges.filter(function(t){return t.node.appcoid===e.node.appcoid}).length}).map(function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(l.a,{data:e.node,hideRewards:!0,hideDetailsLink:!0}))});return r.a.createElement(i.a,null,r.a.createElement("h1",null,"Retired Blockstack Apps (June 2019)"),r.a.createElement("ul",null,r.a.createElement("li",null,"Total number: ",a.length)),r.a.createElement("ul",null,a))}},164:function(e,t,a){"use strict";a.d(t,"b",function(){return s});var n=a(0),r=a.n(n),l=a(4),i=a.n(l),c=a(33),u=a.n(c);a.d(t,"a",function(){return u.a}),a.d(t,"c",function(){return c.navigate});a(165);var o=r.a.createContext({}),s=function(e){return r.a.createElement(o.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},165:function(e,t,a){var n;e.exports=(n=a(170))&&n.default||n},169:function(e){e.exports={data:{site:{siteMetadata:{title:"OI App Center"}}}}},170:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),l=a(4),i=a.n(l),c=a(55),u=a(2),o=function(e){var t=e.location,a=u.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};o.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=o},171:function(e,t,a){"use strict";var n=a(169),r=a(0),l=a.n(r),i=a(4),c=a.n(i),u=a(164),o=function(e){var t=e.siteTitle;return l.a.createElement("div",{style:{background:"#5DBCD2",marginBottom:"1.45rem"}},l.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},l.a.createElement("h1",{style:{margin:0}},l.a.createElement(u.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};o.propTypes={siteTitle:c.a.string},o.defaultProps={siteTitle:""};var s=o,m=(a(177),function(e){var t=e.children;return l.a.createElement(u.b,{query:"755544856",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,{siteTitle:e.site.siteMetadata.title}),l.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t,l.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",l.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")," and"," ",l.a.createElement("a",{href:"https://blockstack.org"},"Blockstack"),"."," ","You can"," ",l.a.createElement("a",{href:"https://gitlab.com/friedger/app-center"},"view the source here"))))},data:n})});m.propTypes={children:c.a.node.isRequired};t.a=m},172:function(e,t,a){var n=a(25).f,r=Function.prototype,l=/^\s*function ([^ (]*)/;"name"in r||a(18)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(e){return""}}})},173:function(e,t,a){"use strict";a.d(t,"b",function(){return l});a(172);var n=a(0),r=a.n(n),l=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),i=new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long"});t.a=function(e){var t=e.data,a=e.hideRewards,n=e.hideDetailsLink,c=l.format(t.lifetimeEarnings),u="";if(t.openSourceUrl){var o=Date.parse(t.fields.lastCommit);u=isNaN(o)?t.fields.lastCommit:i.format(o)}return r.a.createElement(r.a.Fragment,null,!n&&r.a.createElement("a",{href:"/appco/"+t.appcoid},t.name),n&&r.a.createElement(r.a.Fragment,null,t.name),t.openSourceUrl&&r.a.createElement(r.a.Fragment,null," ","(",r.a.createElement("a",{href:t.openSourceUrl},t.openSourceUrl),")"),!a&&r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),"rewards: ",c," "),t.openSourceUrl&&r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),"last update: ",u),r.a.createElement("br",null),t.website&&t.website.length>0&&r.a.createElement("a",{href:t.website},"Launch app"))}}}]);
//# sourceMappingURL=component---src-pages-2019-06-appco-out-js-19049b82c825b7ff37bf.js.map