(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){},46:function(e,t,a){e.exports=a(82)},51:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},52:function(e,t,a){},78:function(e,t,a){e.exports=a.p+"static/media/0.984ceaec.jpg"},79:function(e,t,a){e.exports=a.p+"static/media/ETIL_logo.4033499e.png"},80:function(e,t,a){e.exports=a.p+"static/media/ETIL_logo2.4c3c8de2.png"},81:function(e,t,a){e.exports=a.p+"static/media/phone.58fa9c55.png"},82:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(11),r=a.n(c),i=(a(27),a(51),a(52),a(22)),o=a.n(i),s=a(45),m=a(38),u=a(14),p=a(15),d=a(17),h=a(16),E=a(18),g=a(12),f=a(23),b=a.n(f),k=a(39),y=a.n(k),w=a(2),v=a(13),N=a.n(v),x=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return l.a.createElement(w.e,null,l.a.createElement(w.c,{className:"card-image",style:{backgroundImage:'url("'.concat(this.props.image,'")'),backgroundRepeat:"no-repeat",backgroundSize:"cover",marginTop:"10px"}},l.a.createElement("div",{className:"text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4"},l.a.createElement("div",null,l.a.createElement("h5",{className:"pink-text"},l.a.createElement(w.i,{icon:"map-marker-alt"})," ",this.props.city),l.a.createElement(w.d,{tag:"h3",className:"pt-2"},l.a.createElement("strong",null,this.props.title)),l.a.createElement("p",null,this.props.body),l.a.createElement(w.b,{href:"http://167.71.71.230:8081/index.html",color:"pink"},l.a.createElement(w.i,{icon:"clone left"})," 360\xb0 View")))))}}]),t}(n.Component),O=function(){return l.a.createElement(w.h,{color:"blue lighten-2",className:"font-small pt-4 mt-4"},l.a.createElement(w.g,{fluid:!0,className:"text-center text-md-left"},l.a.createElement(w.p,null,l.a.createElement(w.e,{md:"6"},l.a.createElement("h5",{className:"title"},"Contact us"),l.a.createElement(w.e,null,l.a.createElement(w.p,null,"tel:"),l.a.createElement(w.p,null,"email:"),l.a.createElement(w.p,null,"Adresse:"))),l.a.createElement(w.e,{md:"6"},l.a.createElement("h5",{className:"title"},"Follow us"),l.a.createElement("a",{href:"https://www.facebook.com/Essaouira-Innovation-Lab-318585465708348/",className:"fb-ic mr-3"},l.a.createElement(w.i,{fab:!0,icon:"facebook-f"})),l.a.createElement("a",{href:"#!",className:"tw-ic mr-3"},l.a.createElement(w.i,{fab:!0,icon:"twitter"})),l.a.createElement("a",{href:"https://www.linkedin.com/company/essaouira-innovat",className:"li-ic mr-3"},l.a.createElement(w.i,{fab:!0,icon:"linkedin-in"})),l.a.createElement("a",{href:"#!",className:"ins-ic mr-3"},l.a.createElement(w.i,{fab:!0,icon:"instagram"})),l.a.createElement("a",{href:"#!",className:"yt-ic mr-3"},l.a.createElement(w.i,{fab:!0,icon:"youtube"}))))),l.a.createElement("div",{className:"footer-copyright text-center py-3"},l.a.createElement(w.g,{fluid:!0},"\xa9 ",(new Date).getFullYear()," Copyright:"," ",l.a.createElement("a",{href:"https://www.1337.ma"}," 1337 "))))},j=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).handleTogglerClick=function(){a.setState({collapsed:!a.state.collapsed})},a.state={PostsListOne:[],collapsed:!1},a}return Object(E.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;y.a.get("http://142.93.238.151/api/places").then(function(t){t.data.map(function(){var t=Object(m.a)(o.a.mark(function t(n){var l,c;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:l="http://142.93.238.151/public"+n.image,c={backgroundImage:l,category:n.city,categoryTheme:"Dark",author:n.author,authorAvatar:a(78),title:n.name,body:n.description,date:n.date,serie:"/EditPlace/"+n.serie},e.setState(function(e){return{PostsListOne:[c].concat(Object(s.a)(e.PostsListOne))}});case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}())})}},{key:"render",value:function(){var e=this.state.PostsListOne,t=l.a.createElement("div",{id:"sidenav-overlay",style:{backgroundColor:"transparent"},onClick:this.handleTogglerClick});return l.a.createElement("div",{id:"apppage"},l.a.createElement(g.a,null,l.a.createElement("div",null,l.a.createElement(w.l,{color:"white",light:!0,expand:"md",fixed:"top",scrolling:!0},l.a.createElement(w.g,null,l.a.createElement(w.m,null,l.a.createElement("div",{className:"d-table m-auto"},l.a.createElement("img",{id:"main-logo",className:"d-inline-block align-top mr-1",style:{maxWidth:"25px"},src:a(79),alt:"Shards Dashboard"}),l.a.createElement("span",{className:"d-none d-md-inline ml-1"}," ",l.a.createElement("img",{id:"main-logo",className:"d-inline-block align-top mr-1",style:{maxWidth:"80px"},src:a(80),alt:"Shards Dashboard"})))),l.a.createElement(w.o,{onClick:this.handleTogglerClick}),l.a.createElement(w.f,{isOpen:this.state.collapsed,navbar:!0},l.a.createElement(w.n,{left:!0},l.a.createElement(w.k,null,l.a.createElement(N.a,{offset:"400",className:"link",href:"#home"},"Home")),l.a.createElement(w.k,null,l.a.createElement(N.a,{offset:"60",className:"link",href:"#places"},"Places")),l.a.createElement(w.k,null,l.a.createElement(N.a,{className:"link",href:"#about"},"About")),l.a.createElement(w.k,null,l.a.createElement(N.a,{className:"link",href:"#contact"},"Contact"))),l.a.createElement(w.n,{right:!0},l.a.createElement(w.k,null))))),this.state.collapsed&&t)),l.a.createElement(w.q,{className:"bg"},l.a.createElement(w.j,{className:"d-flex justify-content-center align-items-center gradient"},l.a.createElement("section",{id:"home"},l.a.createElement(w.g,null,l.a.createElement(w.p,null,l.a.createElement(w.e,{md:"6",className:"white-text text-center text-md-left mt-xl-5 mb-5"},l.a.createElement(w.a,{type:"fadeInLeft",delay:".3s",style:{marginTop:"50px"}},l.a.createElement("h1",{className:"h1-responsive font-weight-bold mt-sm-5"},"Let us show you the world!"),l.a.createElement("hr",{className:"hr-light"}),l.a.createElement("h6",{className:"mb-4"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus quasi fuga nesciunt dolorum nulla magnam veniam sapiente, fugiat! Commodi sequi non animi ea dolor molestiae iste."),l.a.createElement(b.a,{store:"ios",url:"https://www.apple.com/ios/app-store/",linkProps:{title:"iOS Store Button"}}),l.a.createElement(b.a,{store:"android",url:"https://play.google.com/store/apps",linkProps:{title:"iOS Store Button"}}))),l.a.createElement(w.e,{md:"6",xl:"5",className:"mt-xl-5"},l.a.createElement(w.a,{type:"fadeInRight",delay:".3s"},l.a.createElement("img",{src:a(81),alt:"",className:"img-fluid"})))))))),l.a.createElement("section",{id:"places"},l.a.createElement(w.g,null,l.a.createElement("h1",{className:"h1-responsive font-weight-bold mt-sm-5"},"Places to visit"),l.a.createElement(w.p,{className:"py-5"},e.map(function(e,t){return l.a.createElement(x,{city:e.category,image:e.backgroundImage,title:e.title,body:e.body,key:t})})))),l.a.createElement("section",{id:"about"},l.a.createElement(w.g,{style:{height:500},className:"text-left mt-5 pt-5"},l.a.createElement("h1",{className:"h1-responsive font-weight-bold mt-sm-5"},"About us"),l.a.createElement("h5",null,"Essaouira Innovation Lab"),l.a.createElement("br",null),l.a.createElement("h6",{className:"mb-4"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus quasi fuga nesciunt dolorum nulla magnam veniam sapiente, fugiat! Commodi sequi non animi ea dolor molestiae iste."))),l.a.createElement("section",{id:"contact"},l.a.createElement(O,null)))}}]),t}(l.a.Component);var C=function(){return l.a.createElement(j,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[46,1,2]]]);
//# sourceMappingURL=main.0d87162a.chunk.js.map