(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},28:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(18),r=c.n(s),i=(c(25),c(26),c(8)),j=c.n(i),m=c(10),h=c(11),l=c(2),o=c(4),d=(c(28),c(0)),u=function(e){var t=e.teamName,c=e.match;if(!c)return null;var a=c.team1===t?c.team2:c.team1,n=t===c.winner,s="/teams/".concat(a);return Object(d.jsxs)("div",{className:n?"MatchDetailCard won-card":"MatchDetailCard lost-card",children:[Object(d.jsxs)("div",{className:"first-section",children:[Object(d.jsx)("span",{className:"vs",children:"vs"}),Object(d.jsx)("h1",{children:Object(d.jsx)(o.b,{to:s,children:a})}),Object(d.jsx)("h3",{className:"match-date",children:c.date}),Object(d.jsx)("h3",{className:"match-venue",children:c.venue}),Object(d.jsxs)("h5",{className:"match-result",children:[c.winner," won by ",c.resultMargin," ",c.result]})]}),Object(d.jsxs)("div",{className:"second-section",children:[Object(d.jsx)("h3",{children:"First Inning"}),Object(d.jsx)("p",{children:c.team1}),Object(d.jsx)("h3",{children:"Second Inning"}),Object(d.jsx)("p",{children:c.team2}),Object(d.jsx)("h3",{children:"Man of the Match"}),Object(d.jsx)("p",{children:c.playerOfMatch}),Object(d.jsx)("h3",{children:"Umpires"}),Object(d.jsxs)("p",{children:[c.umpire1,", ",c.umpire2]})]})]})},b=(c(35),function(e){var t=e.teamName,c=e.match;if(!c)return null;var a=c.team1===t?c.team2:c.team1,n="/teams/".concat(a),s=t===c.winner;return Object(d.jsxs)("div",{className:s?"MatchSmallCard won-card":"MatchSmallCard lost-card",children:[Object(d.jsx)("span",{className:"vs",children:"vs"}),Object(d.jsx)("h1",{children:Object(d.jsx)(o.b,{to:n,children:a})}),Object(d.jsxs)("p",{className:"match-result",children:[c.winner," won by ",c.resultMargin," ",c.result]})]})}),O=(c(36),c(20)),x=function(){var e=Object(a.useState)({matches:[]}),t=Object(h.a)(e,2),c=t[0],n=t[1],s=Object(l.f)().teamName;return Object(a.useEffect)((function(){(function(){var e=Object(m.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("","/team/").concat(s));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]),c&&c.matches?Object(d.jsxs)("div",{className:"TeamPage",children:[Object(d.jsx)("div",{className:"team-name-section",children:Object(d.jsx)("h1",{className:"team-name",children:c.teamName})}),Object(d.jsxs)("div",{className:"win-loss-section",children:["Wins / Losses",Object(d.jsx)(O.PieChart,{data:[{title:"Losses",value:c.teamMataches-c.teamWins,color:"#a34d5d"},{title:"Wins",value:c.teamWins,color:"#4da375"}]})]}),Object(d.jsxs)("div",{className:"match-detail-section",children:[Object(d.jsx)("h3",{children:"Latest Matches"}),Object(d.jsx)(u,{teamName:c.teamName,match:c.matches[0]})]}),c.matches.slice(1).map((function(e){return Object(d.jsx)(b,{teamName:c.teamName,match:e},e.id)})),Object(d.jsx)("div",{className:"more-link",children:Object(d.jsxs)(o.b,{to:"/teams/".concat(s,"/matches/").concat("2020"),children:["More ",">"]})})]}):Object(d.jsx)("h1",{children:"Team Not Found"})},f=(c(37),c(38),function(e){for(var t=e.teamName,c=[],a="2008";a<="2020";a++)c.push(a);return Object(d.jsx)("ol",{className:"YearSelector",children:c.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(o.b,{to:"/teams/".concat(t,"/matches/").concat(e),children:e})},e)}))})}),v=function(){var e=Object(a.useState)([]),t=Object(h.a)(e,2),c=t[0],n=t[1],s=Object(l.f)(),r=s.teamName,i=s.year;return Object(a.useEffect)((function(){(function(){var e=Object(m.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("","/team/").concat(r,"/matches?year=").concat(i));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r,i]),Object(d.jsxs)("div",{className:"MatchPage",children:[Object(d.jsxs)("div",{className:"year-selector",children:[Object(d.jsx)("h3",{children:" Select Year "}),Object(d.jsx)(f,{teamName:r})]}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("h1",{className:"title-match-page",children:[r," matches in ",i]}),c.map((function(e){return Object(d.jsx)(u,{teamName:r,match:e},e.id)}))]})]})},p=(c(39),c(40),function(e){var t=e.teamName;return Object(d.jsx)("div",{className:"TeamTile",children:Object(d.jsx)("h1",{children:Object(d.jsx)(o.b,{to:"/teams/".concat(t),children:t})})})}),N=function(){var e=Object(a.useState)([]),t=Object(h.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){(function(){var e=Object(m.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("","/team"));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(d.jsxs)("div",{className:"HomePage",children:[Object(d.jsx)("div",{className:"header-section",children:Object(d.jsx)("h1",{className:"app-name",children:"Uday Pratap Singh's IPL DashBoard"})}),Object(d.jsx)("div",{className:"team-grid",children:c.map((function(e){return Object(d.jsx)(p,{teamName:e.teamName},e.teamName)}))})]})};var w=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(o.a,{children:Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{path:"/teams/:teamName/matches/:year",children:Object(d.jsx)(v,{})}),Object(d.jsx)(l.a,{path:"/teams/:teamName",children:Object(d.jsx)(x,{})}),Object(d.jsx)(l.a,{path:"/",children:Object(d.jsx)(N,{})})]})})})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,42)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(w,{})}),document.getElementById("root")),g()}},[[41,1,2]]]);
//# sourceMappingURL=main.6585326d.chunk.js.map