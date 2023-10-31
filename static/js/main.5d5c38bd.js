(()=>{"use strict";var e={3493:(e,t,n)=>{n.r(t),n.d(t,{default:()=>I});var o=n(5004),i=n(5705),r=n(6415),a=n(3889),s=n(5878),l=n(4486),u=n(3392),c=n(885),d=n(3235),f=n(6752),h=n(3718),g=n(4351),p=n(2629);const m=function(){var e=(0,o.useState)(""),t=(0,c.default)(e,2),n=t[0],i=t[1],r=(0,o.useState)(""),a=(0,c.default)(r,2),s=a[0],l=a[1];return(0,p.jsx)(d.View,{flex:1,alignItems:"center",justifyContent:"center",p:4,children:(0,p.jsxs)(d.View,{style:{width:"80%"},children:[(0,p.jsx)(f.default,{fontSize:"3xl",fontWeight:"bold",mb:4,children:"Login"}),(0,p.jsx)(h.Input,{placeholder:"Email",value:n,onChangeText:i,variant:"underlined",mb:4}),(0,p.jsx)(h.Input,{placeholder:"Password",value:s,onChangeText:l,variant:"underlined",type:"password",mb:4}),(0,p.jsx)(g.Button,{onPress:function(){},colorScheme:"primary",size:"lg",children:"Login"})]})})};const y=function(){var e=(0,o.useState)(""),t=(0,c.default)(e,2),n=t[0],i=t[1],r=(0,o.useState)(""),a=(0,c.default)(r,2),s=a[0],l=a[1];return(0,p.jsx)(d.View,{flex:1,alignItems:"center",justifyContent:"center",p:4,children:(0,p.jsxs)(d.View,{style:{width:"80%"},children:[(0,p.jsx)(f.default,{fontSize:"3xl",fontWeight:"bold",mb:4,children:"Sign Up"}),(0,p.jsx)(h.Input,{placeholder:"Email",value:n,onChangeText:i,variant:"underlined",mb:4}),(0,p.jsx)(h.Input,{placeholder:"Password",value:s,onChangeText:l,variant:"underlined",type:"password",mb:4}),(0,p.jsx)(g.Button,{onPress:function(){},colorScheme:"primary",size:"lg",children:"Sign Up"})]})})};var b=n(7135),v=n(171),x=n(2152);const j=n(6792).default.create({container:{padding:20},title:{fontSize:24,fontWeight:"bold",marginBottom:10},text:{fontSize:18,marginBottom:20},input:{width:"100%",height:40,borderWidth:1,margin:10,padding:10}});const w=function(e){var t=e.navigation,o="web"!==x.default.OS?"             ":"";return(0,p.jsxs)(b.default,{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"#f0f0f0",children:[(0,p.jsx)(v.default,{source:n(7270),alt:"Vita-Checks Logo",size:"xl",marginBottom:4}),(0,p.jsxs)(d.View,{style:j.container,alignItems:"center",children:[(0,p.jsx)(f.default,{fontSize:"4xl",fontWeight:"bold",color:"#333",marginBottom:4,textAlign:"center",children:"Welcome to Vita-Checks!"}),(0,p.jsx)(f.default,{fontSize:"lg",color:"#555",marginBottom:8,textAlign:"center",children:"Discover a world of healthy living and nutrition."}),(0,p.jsx)(g.Button,{onPress:function(){return t.navigate("About")},colorScheme:"primary",size:"lg",width:"70%",marginBottom:4,justifyContent:"center",children:"About-Us"+o}),(0,p.jsx)(g.Button,{onPress:function(){return t.navigate("Login")},colorScheme:"info",size:"lg",width:"70%",marginBottom:4,justifyContent:"center",children:"Login"+o}),(0,p.jsx)(g.Button,{onPress:function(){return t.navigate("SignUp")},textAlign:"center",colorScheme:"success",size:"lg",width:"70%",marginBottom:4,justifyContent:"center",children:"Sign-Up"+o})]})]})};var S=n(8441);const O=function(){var e={backgroundColor:"green",height:4,marginTop:4};return(0,p.jsxs)(S.ScrollView,{p:4,children:[(0,p.jsxs)(d.View,{mb:4,children:[(0,p.jsx)(f.default,{fontSize:"3xl",fontWeight:"bold",children:"Our Mission"}),(0,p.jsx)(d.View,{style:e}),(0,p.jsx)(f.default,{fontSize:"lg",children:'Our Mission is to offer users simple state-of-the-art tools to recognize possible nutrient deficiencies or excesses, helping them understand the correlation between illness and nutrient deficiencies. We aim to provide the Best Nutrition App as well as the Best Nutrients Tracker App. Our goal is to "Put Your Health Back in Your Hands" and "Fix Your Issue Before the Issue Becomes Your Illness." This also makes for the Best Healthy Gifts for Men.'})]}),(0,p.jsxs)(d.View,{mb:4,children:[(0,p.jsx)(f.default,{fontSize:"3xl",fontWeight:"bold",children:"Who We Are"}),(0,p.jsx)(d.View,{style:e}),(0,p.jsx)(f.default,{fontSize:"lg",children:"The Vita Checks App is an easy-to-use, Voice Input app that tracks your daily nutrient levels, alerts users when required amounts are not met, and offers food suggestions when needed to obtain your daily required vitamins. The most annoying part of any nutrition app is inputting your foods multiple times a day. Our cutting-edge voice technology makes it easy for you to quickly input your food and get the answers you need to balance your health. We are passionate about helping you find balance and providing individualized answers to your body's health."})]}),(0,p.jsxs)(d.View,{mb:4,children:[(0,p.jsx)(f.default,{fontSize:"3xl",fontWeight:"bold",children:"Why"}),(0,p.jsx)(d.View,{style:e}),(0,p.jsx)(f.default,{fontSize:"lg",children:"Numerous pollutants have negatively impacted the nutritional quality of foods. Understanding this and being able to obtain personal nutrient levels is urgently important for staying healthy. Have you ever thought, \"I want to Check My Vitamin Levels,\" but either you don't have health insurance or know that your doctor will never check all of your vitamins in one appointment? Now you can! You'll now know when you're not getting the necessary daily nutrients/vitamins and fix the issue that day before it turns into illness."})]})]})};var B=(0,r.default)(),z=(0,a.extendTheme)({colors:{primary:{500:"#000000"}}}),k=function(e){var t=e.icon,n=e.color,o=e.size;return(0,p.jsx)(l.FontAwesomeIcon,{icon:t,color:n,size:o})},C={Home:u.faHome,About:u.faInfo,Login:u.faUser,SignUp:u.faUserPlus};function I(){return(0,p.jsx)(s.NativeBaseProvider,{theme:z,children:(0,p.jsx)(i.default,{children:(0,p.jsx)(B.Navigator,{initialRouteName:"Home",screenOptions:{tabBarStyle:{backgroundColor:z.colors.primary[500]},tabBarActiveTintColor:"orange",tabBarInactiveTintColor:"gray"},children:Object.keys(C).map((function(e){return(0,p.jsx)(B.Screen,{name:e,component:"Home"===e?w:"About"===e?O:"Login"===e?m:y,options:{tabBarLabel:e,tabBarIcon:function(t){var n=t.color,o=t.size;return(0,p.jsx)(k,{icon:C[e],color:n,size:o})}}},e)}))})})})}},7270:(e,t,n)=>{e.exports=n.p+"static/media/icon.b840c45a9bda04d50771.png"}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={id:o,loaded:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}n.m=e,(()=>{var e=[];n.O=(t,o,i,r)=>{if(!o){var a=1/0;for(c=0;c<e.length;c++){for(var[o,i,r]=e[c],s=!0,l=0;l<o.length;l++)(!1&r||a>=r)&&Object.keys(n.O).every((e=>n.O[e](o[l])))?o.splice(l--,1):(s=!1,r<a&&(a=r));if(s){e.splice(c--,1);var u=i();void 0!==u&&(t=u)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[o,i,r]}})(),n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(o,i){if(1&i&&(o=this(o)),8&i)return o;if("object"===typeof o&&o){if(4&i&&o.__esModule)return o;if(16&i&&"function"===typeof o.then)return o}var r=Object.create(null);n.r(r);var a={};e=e||[null,t({}),t([]),t(t)];for(var s=2&i&&o;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>a[e]=()=>o[e]));return a.default=()=>o,n.d(r,a),r}})(),n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),n.p="/dev.github.io/expo-gh-pages/",(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,o)=>{var i,r,[a,s,l]=o,u=0;if(a.some((t=>0!==e[t]))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(l)var c=l(n)}for(t&&t(o);u<a.length;u++)r=a[u],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(c)},o=self.webpackChunkweb=self.webpackChunkweb||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=n.O(void 0,[87],(()=>n(5530)));o=n.O(o)})();
//# sourceMappingURL=main.5d5c38bd.js.map