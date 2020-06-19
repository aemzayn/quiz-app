(this.webpackJsonpquiz_app=this.webpackJsonpquiz_app||[]).push([[0],{35:function(e,t,a){e.exports=a(64)},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(32),c=a.n(s),l=a(12),o=a(13),m=a(16),i=a(15),u=a(11),h=a(1),f=a(8),d=a.n(f),p=a(20),E=a(14),b=a(10),g=a.n(b),v=function(e){var t=e.answers,a=e.checkAnswer;return r.a.createElement("div",{className:"answers-container cols-4 cols-md-2 cols-sm-1"},t?t.map((function(e){return r.a.createElement("div",{key:e,className:"answers"},r.a.createElement("button",{className:"answer-button",onClick:a},g.a.decode(e)))})):r.a.createElement("h4",{className:"center"},"Loading"))},y=function(){var e=[{no:9,name:"General Knowledge"},{no:10,name:"Entertainment: Books"},{no:11,name:"Entertainment: Film"},{no:12,name:"Entertainment: Music"},{no:14,name:"Entertainment: Television"},{no:15,name:"Entertainment: Video Games"},{no:16,name:"Entertainment: Board Games"},{no:17,name:"Science and Nature"},{no:18,name:"Science: Computers"},{no:20,name:"Mythology"},{no:21,name:"Sports"},{no:22,name:"Geography"},{no:23,name:"History"},{no:26,name:"Celebrities"},{no:27,name:"Animals"},{no:28,name:"Vehicles"},{no:31,name:"Entertainment: Japanese Anime and Manga"},{no:32,name:"Entertainment: Cartoon and Animations"}];return e?e.map((function(e){return r.a.createElement("option",{value:e.no,key:e.no},e.name)})):r.a.createElement("p",null,"Loading...")},w=a(33),S=a.n(w),O=function(){var e=Object(E.a)(d.a.mark((function e(t,a,n){var r,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.get("https://opentdb.com/api.php?amount=".concat(n,"&category=").concat(t,"&difficulty=").concat(a,"&type=multiple"));case 2:return r=e.sent,s=r.data.results,e.abrupt("return",s);case 5:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),N=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={category:9,numberOfQuestion:10,difficulty:"easy",questions:[],number:0,msg:"",score:0,isStarted:!1,gameOver:!1,allAnswers:[]},e.handleStart=Object(E.a)(d.a.mark((function t(){var a,n,r,s,c,l;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state,n=a.category,r=a.difficulty,s=a.numberOfQuestion,t.next=3,O(n,r,s);case 3:c=t.sent,e.setState({questions:c,gameOver:!1,allAnswers:[]}),e.setState({allAnswers:[].concat(Object(p.a)(e.state.questions[e.state.number].incorrect_answers),[e.state.questions[e.state.number].correct_answer])}),l=e.shuffleQuestion(),e.setState({allAnswers:l,isStarted:!0});case 8:case"end":return t.stop()}}),t)}))),e.handleRestart=function(){e.setState({category:9,numberOfQuestion:10,difficulty:"easy",questions:[],number:0,msg:"",score:0,isStarted:!1,gameOver:!1,allAnswers:[]})},e.shuffleQuestion=function(){var t=e.state.allAnswers;if(t){for(var a=t.length-1;a>0;a--){var n=Math.floor(Math.random()*(a+1)),r=t[a];t[a]=t[n],t[n]=r}return t}e.state.isStarted&&!t&&e.setState({gameOver:0})},e.checkAnswer=function(t){var a=t.target.textContent,n=e.state.questions[e.state.number].correct_answer;a===n?(t.target.classList.add("correct"),e.setState({score:e.state.score+1})):(t.target.classList.add("incorrect"),e.setState({msg:"True answer is: ".concat(n)})),setTimeout((function(){e.state.number!==e.state.questions.length-1?e.setState({allAnswers:[].concat(Object(p.a)(e.state.questions[e.state.number+1].incorrect_answers),[e.state.questions[e.state.number+1].correct_answer])}):e.setState({allAnswers:[]})}),700),setTimeout((function(){var t=e.shuffleQuestion();e.setState({allAnswers:t}),console.log("put back the answers")}),700),setTimeout((function(){e.setState({number:e.state.number+1,msg:""})}),700),e.state.number===e.state.questions.length-1&&setTimeout((function(){e.setState({gameOver:!0})}),700)},e.handleChange=function(t){switch(t.target.id){case"category":e.setState({category:t.target.value});break;case"difficulty":e.setState({difficulty:t.target.value});break;case"numberOfQuestion":e.setState({numberOfQuestion:t.target.value})}},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.setState({number:0,score:0,isStarted:!1,gameOver:!1,allAnswers:[]})}},{key:"render",value:function(){var e=this.state,t=e.questions,a=e.allAnswers,n=e.number,s=e.isStarted,c=e.gameOver,l=e.score,o=e.numberOfQuestion,m=!s&&r.a.createElement("div",null,r.a.createElement("h1",null,"Welcome to Quizes"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"category"},"Select Category: "),r.a.createElement("select",{onChange:this.handleChange,className:"form-control",name:"Category",id:"category"},r.a.createElement(y,null))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"difficulty"},"Select Difficulty: "),r.a.createElement("select",{onChange:this.handleChange,className:"form-control",name:"difficulty",id:"difficulty"},["easy","medium","hard"].map((function(e){return r.a.createElement("option",{key:e,value:e},e.toUpperCase())})))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"numberOfQuestions"},"Number of Questions"),r.a.createElement("input",{onChange:this.handleChange,value:o,className:"form-control",type:"number",max:"50",min:"1",id:"numberOfQuestion"})),r.a.createElement("button",{onClick:this.handleStart},"Start Game")),i=t.length>=0&&n<=t.length&&a.length&&r.a.createElement("div",{className:"question"},r.a.createElement("h4",null,"Question: ",n+1," of ",t.length),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h3",null,g.a.decode(t[n].question)),r.a.createElement(v,{checkAnswer:this.checkAnswer,answers:this.state.allAnswers})),this.state.msg&&r.a.createElement("h5",{className:"msg"},g.a.decode(this.state.msg)))),u=c&&n==t.length&&r.a.createElement("div",{className:"center"},r.a.createElement("h4",null,"Your score is: ",l),r.a.createElement("button",{onClick:this.handleRestart},"Restart"));return r.a.createElement("div",{className:"home"},m,i||null,u)}}]),a}(n.Component),A=function(){return r.a.createElement("div",{className:"container about"},r.a.createElement("h4",{className:"center"},"About"),r.a.createElement("p",null,"Created by  ",r.a.createElement("a",{href:"https://github.com/aemzayn"},"Ahmad Muslih Zain")),r.a.createElement("p",null,"API from ",r.a.createElement("a",{href:"https://opentdb.com/"},"https://opentdb.com/")),r.a.createElement("p",null,"Technology used:"),r.a.createElement("ul",{className:"tech"},r.a.createElement("li",null,r.a.createElement("a",{href:"https:/reactjs.org/"},"React Js")),r.a.createElement("li",null,r.a.createElement("a",{href:"https:/sass-lang.com/documentation/syntax"},"SCSS")),r.a.createElement("li",null,r.a.createElement("a",{href:"https:/github.com/mathiasbynens/he"},"HE"))))},k=Object(h.f)((function(){return r.a.createElement("div",{className:"nav-container"},r.a.createElement("nav",null,r.a.createElement("div",{className:"navbar-brand"},r.a.createElement(u.b,{to:"/"},"QUIZ")),r.a.createElement(u.c,{to:"/about"},"About")))})),C=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"center"},"404 Not found"),r.a.createElement("p",{style:{textAlign:"center"}},"You are nowhere"))},q=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(u.a,null,r.a.createElement("div",{className:"app"},r.a.createElement(k,null),r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",component:N}),r.a.createElement(h.a,{exact:!0,path:"/about",component:A}),r.a.createElement(h.a,{path:"*",component:C}))))}}]),a}(n.Component);a(63);c.a.render(r.a.createElement(q,null),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.cd27a51e.chunk.js.map