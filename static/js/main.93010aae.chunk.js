(this.webpackJsonpreactfront=this.webpackJsonpreactfront||[]).push([[0],{30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),a=n(23),s=n.n(a),r=(n(30),n(16)),i=n(25),u=n(9),l=n(10),d=n(12),h=n(11),j=(n(31),n(32),n(2)),b=n(17),p=n(4),g=n.n(p),f=n(8),m=n(1),O=(o.a.Component,n(18)),x=n(15);function v(){return new Promise((function(e,t){window.FB.getLoginStatus((function(t){e(t)}))}))}function w(){return new Promise((function(e,t){window.FB?e():(!function(e,t,n){var c,o=e.getElementsByTagName(t)[0];e.getElementById(n)||((c=e.createElement(t)).id=n,c.src="//connect.facebook.net/en_US/sdk.js",o.parentNode.insertBefore(c,o))}(document,"script","facebook-jssdk"),window.fbAsyncInit=function(){window.FB.init({appId:0x661cee00f404d,cookie:!0,xfbml:!0,version:"v9.0"}),window.FB.AppEvents.logPageView(),console.log("fired"),e()})}))}function k(e){var t=this;return new Promise(function(){var n=Object(f.a)(g.a.mark((function n(c,o){return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:"unknown"===e.status||"not_authorized"===e.status?t.login().then((function(e){t.props.redirectPageLogout(!1),t.props.setAccess(e),localStorage.setItem("access",e),c(e)})):(t.props.redirectPageLogout(!1),t.props.setAccess(e.authResponse.accessToken),localStorage.setItem("access",e.authResponse.accessToken),c(e.authResponse.accessToken));case 1:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}())}function S(){return new Promise((function(e,t){window.FB.getLoginStatus((function(n){console.log(n),window.FB.api("/me/accounts?fields=id",{access_token:n.authResponse.accessToken},(function(n){console.log("RESPONSE",n),n?e():t()}))}))}))}var y=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var c=arguments.length,o=new Array(c),a=0;a<c;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={email:"",password:"",submitRedirectFb:!1,invalidLogin:!1,errorMsg:" ",hidden:!0},e.handleChange=function(t){e.setState(Object(O.a)({},t.target.id,t.target.value))},e.handleSubmit=function(){var t=e.state,n=t.email,c=t.password;t.invalidLogin;if(n.length>1&&c.length>1){e.setState({hidden:!1});var o={email:n,password:c};fetch("https://multer-test123.herokuapp.com/signin",{method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"application/json"}}).then((function(t){return console.log("res",t),200===t.status?(e.setState({invalidLogin:!1}),t.json()):(e.setState({invalidLogin:!0}),t.json())})).then(function(){var t=Object(f.a)(g.a.mark((function t(n){var c,o,a,s,r,i,u,l,d,h;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=n.Error,console.log(n,e.state.invalidLogin,c),!1!==e.state.invalidLogin||c){t.next=25;break}return"token",o=(new Date).getTime(),a=o+6e4,document.cookie="token="+n.token+";expires="+a+";path=/",s=document.cookie.match(new RegExp("(^| )token=([^;]+)")),r=s[0].split("="),i=r[1],console.log("bearer",i),u=new FormData,t.next=14,fetch("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png");case 14:return l=t.sent,t.next=17,l.blob();case 17:d=t.sent,h=new File([d],"test.jpg",{type:"image/jpeg"}),u.append("image",h),console.log("formData",u,h),new Promise((function(t,c){fetch("https://multer-test123.herokuapp.com/test",{method:"POST",body:u,headers:{Authorization:"Bearer ".concat(i)}}).then(function(){var o=Object(f.a)(g.a.mark((function o(a){return g.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(console.log("here",a),200!==a.status){o.next=5;break}t(),o.next=11;break;case 5:if(403!==a.status){o.next=10;break}return o.next=8,a.json();case 8:n=o.sent,e.setState({errorMsg:n.Error});case 10:c();case 11:case"end":return o.stop()}}),o)})));return function(e){return o.apply(this,arguments)}}()).catch((function(e){return console.log(e)}))})).then((function(){document.cookie.match(new RegExp("(^| )token=([^;]+)"))&&w().then((function(){v.bind(Object(x.a)(e))().then(function(){var t=Object(f.a)(g.a.mark((function t(n){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:k.bind(Object(x.a)(e))(n).then((function(t){console.log("a",t),t&&S().then((function(){e.props.accessToken.length>1&&setTimeout((function(){e.setState({submitRedirectFb:!0,hidden:!0})}),1e3)})).catch((function(e){return console.log("err with test call",e)}))})).catch((function(e){return console.log("err with status change",e)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(e){return console.log("err with check login",e)}))}))})),t.next=27;break;case 25:console.log("error"),e.setState({errorMsg:n.Error});case 27:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}else e.setState({errorMsg:"Please ensure both fields are entered correctly."})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.hidden,c=t.email,a=t.password,s=t.submitRedirectFb,r=t.invalidLogin,i=t.errorMsg;return Object(m.jsxs)(o.a.Fragment,{children:[!0===s&&!1===r?Object(m.jsx)(j.a,{to:"/dashboard"}):null,Object(m.jsx)("h1",{children:"Sign In"}),Object(m.jsx)("span",{className:"alert",children:i}),Object(m.jsx)("label",{children:"Email:"}),Object(m.jsx)("input",{id:"email",value:c,onChange:function(t){return e.handleChange(t)},className:"input"}),Object(m.jsx)("label",{children:"Password:"}),Object(m.jsx)("input",{id:"password",value:a,onChange:function(t){return e.handleChange(t)},className:"input"}),Object(m.jsxs)("div",{className:"btnContain",children:[Object(m.jsxs)("button",{onClick:this.handleSubmit,className:"btn login",children:[Object(m.jsxs)("div",{id:n?"hide":null,className:"lds-defaultTwo left",children:[Object(m.jsx)("div",{}),Object(m.jsx)("div",{}),Object(m.jsx)("div",{}),Object(m.jsx)("div",{}),Object(m.jsx)("div",{}),Object(m.jsx)("div",{}),Object(m.jsx)("div",{}),Object(m.jsx)("div",{}),Object(m.jsx)("div",{}),Object(m.jsx)("div",{}),Object(m.jsx)("div",{}),Object(m.jsx)("div",{})]}),Object(m.jsx)("span",{id:n?null:"hide",className:"loginTxt",children:"LOGIN"})]}),Object(m.jsx)("button",{className:"btn signup",children:Object(m.jsx)("span",{className:"signTxt",children:" SIGNUP "})})]})]})}}]),n}(o.a.Component),P=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{children:"Hi"})}}]),n}(o.a.Component),T=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var c=arguments.length,o=new Array(c),a=0;a<c;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={loggedIn:!1,accessToken:"",loggedOut:!1},e.redirectPage=function(t){e.setState({loggedIn:t})},e.redirectPageLogout=function(t){e.setState({loggedOut:t})},e.setAccess=function(t){e.setState({accessToken:t})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=(e.loggedIn,e.loggedOut),n=e.accessToken,c=document.cookie.match(new RegExp("(^| )token=([^;]+)")),o=function(e){var t=e.component,n=Object(i.a)(e,["component"]);return Object(m.jsx)(j.b,Object(r.a)(Object(r.a)({},n),{},{render:function(e){return c?Object(m.jsx)(t,Object(r.a)(Object(r.a)({},e),n)):Object(m.jsx)(j.a,{to:{pathname:"/",state:{from:e.location}}})}}))};return Object(m.jsx)(b.a,{basename:"/",children:Object(m.jsxs)(j.d,{children:[Object(m.jsx)(j.b,{exact:!0,path:"/",children:Object(m.jsx)("div",{className:"form",children:Object(m.jsx)("div",{className:"rowMine",children:Object(m.jsx)(y,{showBtn:this.showBtn})})})}),Object(m.jsx)(o,{component:P,path:"/dashboard",loggedOut:t,redirectPageLogout:this.redirectPageLogout,redirectPage:this.redirectPage,accessToken:n})]})})}}]),n}(o.a.Component);s.a.render(Object(m.jsx)(o.a.StrictMode,{children:Object(m.jsx)(T,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.93010aae.chunk.js.map