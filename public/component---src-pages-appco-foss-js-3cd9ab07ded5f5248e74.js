(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{186:function(e,a,n){"use strict";n.r(a),n.d(a,"query",function(){return c});var t=n(0),r=n.n(t),l=n(202),u=n(207),c="3927391864";a.default=function(e){var a=e.data;return r.a.createElement(u.a,null,r.a.createElement("h1",null,"All Open Source Blockstack Apps"),r.a.createElement("ul",null,r.a.createElement("li",null,"Total number: ",a.allApps.totalCount),r.a.createElement("li",null,"Total rewards: ",l.b.format(a.allApps.edges.reduce(function(e,a){return e+a.node.lifetimeEarnings},0)))),r.a.createElement("ul",null,a.allApps.edges.map(function(e,a){return r.a.createElement("li",{key:a},r.a.createElement(l.a,{data:e.node}))})))}},202:function(e,a,n){"use strict";n.d(a,"b",function(){return l});n(35);var t=n(0),r=n.n(t),l=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),u=new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long"});a.a=function(e){var a=e.data,n=e.hideRewards,t=e.hideDetailsLink,c=l.format(a.lifetimeEarnings),m="";if(a.openSourceUrl){var o=Date.parse(a.fields.lastCommit);m=isNaN(o)?a.fields.lastCommit:u.format(o)}return r.a.createElement(r.a.Fragment,null,!t&&r.a.createElement("a",{href:"/appco/"+a.appcoid},a.name),t&&r.a.createElement(r.a.Fragment,null,a.name),a.openSourceUrl&&r.a.createElement(r.a.Fragment,null," ","(",r.a.createElement("a",{href:a.openSourceUrl},a.openSourceUrl),")"),!n&&r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),"rewards: ",c," "),a.openSourceUrl&&r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),"last update: ",m),r.a.createElement("br",null),a.website&&a.website.length>0&&r.a.createElement("a",{href:a.website},"Launch app"))}}}]);
//# sourceMappingURL=component---src-pages-appco-foss-js-3cd9ab07ded5f5248e74.js.map