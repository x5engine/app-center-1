(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{179:function(e,a,t){"use strict";t.r(a),t.d(a,"query",function(){return r});var n=t(237),r="1326131683";a.default=Object(n.a)({month:"April 2019"})},207:function(e,a,t){"use strict";var n=t(16);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),l=(0,n(t(203)).default)(r.default.createElement("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"}),"Launch");a.default=l},208:function(e,a,t){"use strict";t.d(a,"b",function(){return y});t(35),t(214);var n=t(0),r=t.n(n),l=t(202),o=t(979),i=t(232),c=t(982),s=t(228),d=t(981),m=t(233),u=t(227),p=t(209),h=t.n(p),f=t(207),v=t.n(f),b=t(222),g=t.n(b),y=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),E=new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long"});a.a=function(e){var a=e.data,t=e.hideRewards,n=e.showSourceLink,p=y.format(a.lifetimeEarnings),f="";if(a.openSourceUrl){var b=Date.parse(a.fields.lastCommit);f=isNaN(b)?a.fields.lastCommit:E.format(b)}return r.a.createElement(o.a,{dense:!0,alignItems:"flex-start",button:!a.hideDetailsLink,onClick:function(){a.hideDetailsLink||Object(l.c)("/appco/"+a.appcoid)}},a.localFile&&a.localFile.childImageSharp&&r.a.createElement(i.a,null,r.a.createElement(c.a,null,r.a.createElement(g.a,{fixed:a.localFile.childImageSharp.fixed}))),(!a.localFile||!a.localFile.childImageSharp)&&r.a.createElement(i.a,null,r.a.createElement(c.a,null,r.a.createElement(h.a,null))),r.a.createElement(s.a,{primary:r.a.createElement("b",null,a.name),secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{component:"span",variant:"body2",color:"textPrimary"},n&&a.openSourceUrl&&r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{href:a.openSourceUrl},a.openSourceUrl),r.a.createElement("br",null)),a.description),r.a.createElement(d.a,{component:"span",variant:"body2"},!t&&r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),"rewards: ",p," "),n&&a.openSourceUrl&&r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),"last update: ",f)))}),!a.hideDetailsLink&&a.website&&a.website.length>0&&r.a.createElement(m.a,null,r.a.createElement(u.a,{edge:"end","aria-label":"Launch"},r.a.createElement("a",{href:a.website},r.a.createElement(v.a,null)))))}},209:function(e,a,t){"use strict";var n=t(16);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),l=(0,n(t(203)).default)(r.default.createElement("path",{d:"M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"}),"Apps");a.default=l},227:function(e,a,t){"use strict";var n=t(116),r=t.n(n),l=t(192),o=t.n(l),i=t(0),c=t.n(i),s=(t(193),t(194)),d=t(195),m=t(215),u=t(994),p=t(205),h=c.a.forwardRef(function(e,a){var t=e.edge,n=void 0!==t&&t,l=e.children,i=e.classes,d=e.className,m=e.color,h=void 0===m?"default":m,f=e.disabled,v=void 0!==f&&f,b=e.disableFocusRipple,g=void 0!==b&&b,y=e.size,E=void 0===y?"medium":y,S=o()(e,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return c.a.createElement(u.a,r()({className:Object(s.a)(i.root,d,"default"!==h&&i["color".concat(Object(p.a)(h))],v&&i.disabled,"small"===E&&i["size".concat(Object(p.a)(E))],"start"===n&&i.edgeStart,"end"===n&&i.edgeEnd),centerRipple:!0,focusRipple:!g,disabled:v,ref:a},S),c.a.createElement("span",{className:i.label},l))});a.a=Object(d.a)(function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:Object(m.c)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(m.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(m.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:e.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}},{name:"MuiIconButton"})(h)},228:function(e,a,t){"use strict";var n=t(116),r=t.n(n),l=t(192),o=t.n(l),i=t(0),c=t.n(i),s=(t(193),t(194)),d=t(195),m=t(981),u=t(204),p=c.a.forwardRef(function(e,a){var t=e.children,n=e.classes,l=e.className,i=e.disableTypography,d=void 0!==i&&i,p=e.inset,h=void 0!==p&&p,f=e.primary,v=e.primaryTypographyProps,b=e.secondary,g=e.secondaryTypographyProps,y=o()(e,["children","classes","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"]),E=c.a.useContext(u.a).dense,S=null!=f?f:t;null==S||S.type===m.a||d||(S=c.a.createElement(m.a,r()({variant:E?"body2":"body1",className:n.primary,component:"span"},v),S));var w=b;return null==w||w.type===m.a||d||(w=c.a.createElement(m.a,r()({variant:"body2",className:n.secondary,color:"textSecondary"},g),w)),c.a.createElement("div",r()({className:Object(s.a)(n.root,l,E&&n.dense,h&&n.inset,S&&w&&n.multiline),ref:a},y),S,w)});a.a=Object(d.a)({root:{flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},multiline:{marginTop:6,marginBottom:6},dense:{},inset:{paddingLeft:56},primary:{},secondary:{}},{name:"MuiListItemText"})(p)},232:function(e,a,t){"use strict";var n=t(116),r=t.n(n),l=t(192),o=t.n(l),i=t(0),c=t.n(i),s=(t(193),t(194)),d=t(195),m=t(204),u=c.a.forwardRef(function(e,a){var t=e.classes,n=e.className,l=o()(e,["classes","className"]),i=c.a.useContext(m.a);return c.a.createElement("div",r()({className:Object(s.a)(t.root,n,"flex-start"===i.alignItems&&t.alignItemsFlexStart),ref:a},l))});a.a=Object(d.a)({root:{minWidth:56,flexShrink:0},alignItemsFlexStart:{marginTop:8}},{name:"MuiListItemAvatar"})(u)},233:function(e,a,t){"use strict";var n=t(116),r=t.n(n),l=t(192),o=t.n(l),i=t(0),c=t.n(i),s=(t(193),t(194)),d=t(195),m=c.a.forwardRef(function(e,a){var t=e.classes,n=e.className,l=o()(e,["classes","className"]);return c.a.createElement("div",r()({className:Object(s.a)(t.root,n),ref:a},l))});m.muiName="ListItemSecondaryAction",a.a=Object(d.a)({root:{position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"}},{name:"MuiListItemSecondaryAction"})(m)},237:function(e,a,t){"use strict";t(17);var n=t(0),r=t.n(n),l=t(208),o=t(216),i=t(981),c=t(977);a.a=function(e){var a=e.month;return function(e){var t,n=e.data,s=n.thismonth.edges.map(function(e){t=parseInt(e.node.appcoid);var a=n.allApps.edges.filter(function(e){return e.node.appcoid===t}),o=a.length>0?Object.assign({lifetimeEarnings:0,website:a.length>0?a[0].node.website:null},a[0].node,e.node):Object.assign({lifetimeEarnings:0},e.node);return r.a.createElement(l.a,{key:o.appcoid,data:o,hideRewards:!0})});return r.a.createElement(o.a,null,r.a.createElement(i.a,{variant:"h4"},"New Blockstack Apps (",a,")"),r.a.createElement(i.a,null,"Total number: ",n.thismonth.totalCount),r.a.createElement(c.a,null,s))}}}}]);
//# sourceMappingURL=component---src-pages-2019-04-appco-new-js-c15c5931e19137daf3b7.js.map