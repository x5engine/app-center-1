(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{180:function(e,a,t){"use strict";t.r(a),t.d(a,"query",function(){return r});var n=t(240),r="1326131683";a.default=Object(n.a)({month:"April 2019"})},206:function(e,a,t){"use strict";t.d(a,"c",function(){return y}),t.d(a,"a",function(){return w});t(35),t(214);var n=t(0),r=t.n(n),l=t(203),o=t(1e3),i=t(998),c=t(229),s=t(1001),d=t(231),m=t(235),u=t(228),p=t(207),h=t.n(p),f=t(208),v=t.n(f),b=t(220),g=t.n(b),y=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),E=new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long"}),w=function(e){var a=e.description,t=e.lifetimeEarnings,n=e.lastCommit,l=e.openSourceUrl,i=e.showSourceLink,c=e.hideRewards,s=y.format(t),d="";if(l){var m=Date.parse(n);d=isNaN(m)?n:E.format(m)}return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{component:"span",variant:"body2",color:"textPrimary"},a,i&&l&&r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement("a",{href:l},l))),r.a.createElement(o.a,{component:"span",variant:"body2"},!c&&r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),"rewards: ",s," "),i&&l&&r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),"last update: ",d)))};a.b=function(e){var a=e.data,t=e.hideRewards,n=e.showSourceLink;return r.a.createElement(i.a,{dense:!0,alignItems:"flex-start",button:!a.hideDetailsLink,onClick:function(){a.hideDetailsLink||Object(l.c)("/appco/"+a.appcoid)}},a.localFile&&a.localFile.childImageSharp&&r.a.createElement(c.a,null,r.a.createElement(s.a,null,r.a.createElement(g.a,{fixed:a.localFile.childImageSharp.fixed}))),(!a.localFile||!a.localFile.childImageSharp)&&r.a.createElement(c.a,null,r.a.createElement(s.a,null,r.a.createElement(h.a,null))),r.a.createElement(d.a,{primary:r.a.createElement("b",null,a.name),secondary:w({description:a.description,lifetimeEarnings:a.lifetimeEarnings,lastCommit:a.fields.lastCommit,openSourceUrl:a.openSourceUrl,hideRewards:t,showSourceLink:n})}),!a.hideDetailsLink&&a.website&&a.website.length>0&&r.a.createElement(m.a,null,r.a.createElement(u.a,{edge:"end","aria-label":"Launch"},r.a.createElement("a",{href:a.website},r.a.createElement(v.a,null)))))}},207:function(e,a,t){"use strict";var n=t(16);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),l=(0,n(t(204)).default)(r.default.createElement("path",{d:"M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"}),"Apps");a.default=l},208:function(e,a,t){"use strict";var n=t(16);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),l=(0,n(t(204)).default)(r.default.createElement("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"}),"Launch");a.default=l},228:function(e,a,t){"use strict";var n=t(116),r=t.n(n),l=t(193),o=t.n(l),i=t(0),c=t.n(i),s=(t(194),t(195)),d=t(196),m=t(217),u=t(1015),p=t(210),h=c.a.forwardRef(function(e,a){var t=e.edge,n=void 0!==t&&t,l=e.children,i=e.classes,d=e.className,m=e.color,h=void 0===m?"default":m,f=e.disabled,v=void 0!==f&&f,b=e.disableFocusRipple,g=void 0!==b&&b,y=e.size,E=void 0===y?"medium":y,w=o()(e,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return c.a.createElement(u.a,r()({className:Object(s.a)(i.root,d,"default"!==h&&i["color".concat(Object(p.a)(h))],v&&i.disabled,"small"===E&&i["size".concat(Object(p.a)(E))],"start"===n&&i.edgeStart,"end"===n&&i.edgeEnd),centerRipple:!0,focusRipple:!g,disabled:v,ref:a},w),c.a.createElement("span",{className:i.label},l))});a.a=Object(d.a)(function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:Object(m.d)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(m.d)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(m.d)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:e.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}},{name:"MuiIconButton"})(h)},229:function(e,a,t){"use strict";var n=t(116),r=t.n(n),l=t(193),o=t.n(l),i=t(0),c=t.n(i),s=(t(194),t(195)),d=t(196),m=t(205),u=c.a.forwardRef(function(e,a){var t=e.classes,n=e.className,l=o()(e,["classes","className"]),i=c.a.useContext(m.a);return c.a.createElement("div",r()({className:Object(s.a)(t.root,n,"flex-start"===i.alignItems&&t.alignItemsFlexStart),ref:a},l))});a.a=Object(d.a)({root:{minWidth:56,flexShrink:0},alignItemsFlexStart:{marginTop:8}},{name:"MuiListItemAvatar"})(u)},231:function(e,a,t){"use strict";var n=t(116),r=t.n(n),l=t(193),o=t.n(l),i=t(0),c=t.n(i),s=(t(194),t(195)),d=t(196),m=t(1e3),u=t(205),p=c.a.forwardRef(function(e,a){var t=e.children,n=e.classes,l=e.className,i=e.disableTypography,d=void 0!==i&&i,p=e.inset,h=void 0!==p&&p,f=e.primary,v=e.primaryTypographyProps,b=e.secondary,g=e.secondaryTypographyProps,y=o()(e,["children","classes","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"]),E=c.a.useContext(u.a).dense,w=null!=f?f:t;null==w||w.type===m.a||d||(w=c.a.createElement(m.a,r()({variant:E?"body2":"body1",className:n.primary,component:"span"},v),w));var S=b;return null==S||S.type===m.a||d||(S=c.a.createElement(m.a,r()({variant:"body2",className:n.secondary,color:"textSecondary"},g),S)),c.a.createElement("div",r()({className:Object(s.a)(n.root,l,E&&n.dense,h&&n.inset,w&&S&&n.multiline),ref:a},y),w,S)});a.a=Object(d.a)({root:{flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},multiline:{marginTop:6,marginBottom:6},dense:{},inset:{paddingLeft:56},primary:{},secondary:{}},{name:"MuiListItemText"})(p)},235:function(e,a,t){"use strict";var n=t(116),r=t.n(n),l=t(193),o=t.n(l),i=t(0),c=t.n(i),s=(t(194),t(195)),d=t(196),m=c.a.forwardRef(function(e,a){var t=e.classes,n=e.className,l=o()(e,["classes","className"]);return c.a.createElement("div",r()({className:Object(s.a)(t.root,n),ref:a},l))});m.muiName="ListItemSecondaryAction",a.a=Object(d.a)({root:{position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"}},{name:"MuiListItemSecondaryAction"})(m)},240:function(e,a,t){"use strict";t(17);var n=t(0),r=t.n(n),l=t(206),o=t(218),i=t(1e3),c=t(995);a.a=function(e){var a=e.month;return function(e){var t,n=e.data,s=n.thismonth.edges.map(function(e){t=parseInt(e.node.appcoid);var a=n.allApps.edges.filter(function(e){return e.node.appcoid===t}),o=a.length>0?Object.assign({lifetimeEarnings:0,website:a.length>0?a[0].node.website:null},a[0].node,e.node):Object.assign({lifetimeEarnings:0},e.node);return r.a.createElement(l.b,{key:o.appcoid,data:o,hideRewards:!0})});return r.a.createElement(o.a,null,r.a.createElement(i.a,{variant:"h4"},"New Blockstack Apps (",a,")"),r.a.createElement(i.a,null,"Total number: ",n.thismonth.totalCount),r.a.createElement(c.a,null,s))}}}}]);
//# sourceMappingURL=component---src-pages-2019-04-appco-new-js-eeb4495415da8c011955.js.map