"use strict";(self.webpackChunk_freecodecamp_client=self.webpackChunk_freecodecamp_client||[]).push([[7528],{37392:function(e,t,n){var l=n(27378),a=n(89172);function o(e){return l.createElement("div",{className:"challenge-instructions"+(e.block?" "+e.block:"")},e.description&&l.createElement(a.Z,{text:e.description}),e.instructions&&l.createElement(l.Fragment,null,l.createElement("hr",null),l.createElement(a.Z,{text:e.instructions})),l.createElement("hr",null))}o.displayName="ChallengeDescription",t.Z=o},79028:function(e,t,n){n.r(t);var l=n(77266),a=n.n(l),o=n(25499),c=n.n(o),i=(n(51116),n(54404)),r=n.n(i),u=n(77529),p=n.n(u),h=n(82200),s=n.n(h),d=n(27378),m=n(47326),g=n(86295),f=n(8736),C=n(33140),E=n(81897),b=n(9905),Z=n(91794),k=n(37392),y=n(1972),M=n(54318),v=n(31940),N=n(18920),T=n(44657),x=n(70628),P=n(34016),S=n(92336),j=n(71813),_=(0,E.P1)(x.jJ,(function(e){return{isChallengeCompleted:e}})),F=function(e){function t(t){var n;return(n=e.call(this,t)||this)._container=null,n.handleSubmit=n.handleSubmit.bind(a()(n)),n}c()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e,t=this.props,n=t.challengeMounted,l=t.data.challengeNode.challenge,a=l.title,o=l.challengeType,c=l.helpCategory,i=t.pageContext.challengeMeta;(0,t.updateChallengeMeta)(Object.assign({},i,{title:a,challengeType:o,helpCategory:c})),n(i.id),null===(e=this._container)||void 0===e||e.focus()},n.componentDidUpdate=function(e){var t=e.data.challengeNode.challenge.title,n=this.props,l=n.challengeMounted,a=n.data.challengeNode.challenge,o=a.title,c=a.challengeType,i=a.helpCategory,r=n.pageContext.challengeMeta,u=n.updateChallengeMeta;t!==o&&(u(Object.assign({},r,{title:o,challengeType:c,helpCategory:i})),l(r.id))},n.handleSubmit=function(e){e.showCompletionModal&&this.props.openCompletionModal()},n.render=function(){var e=this,t=this.props,n=t.data.challengeNode.challenge,l=n.challengeType,a=n.fields.blockName,o=n.forumTopicId,c=n.title,i=n.description,u=n.instructions,h=n.superBlock,g=n.certification,f=n.block,C=n.translationPending,E=t.isChallengeCompleted,T=t.pageContext.challengeMeta,x=T.nextChallengePath,_=T.prevChallengePath,F=t.t,D=t.updateSolutionFormValues,O=F("intro:"+h+".blocks."+f+".title")+" - "+c;return d.createElement(y.Z,{innerRef:function(t){return e._container=t},nextChallengePath:x,prevChallengePath:_},d.createElement(Z.Z,null,d.createElement(m.Z,{title:O+" | "+F("learn.learn")+" | freeCodeCamp.org"}),d.createElement(r(),null,d.createElement(s(),null,d.createElement(p(),{md:8,mdOffset:2,sm:10,smOffset:1,xs:12},d.createElement(b.Z,null),d.createElement(M.Z,{isCompleted:E,translationPending:C},c),d.createElement(k.Z,{description:i,instructions:u}),d.createElement(S.Z,{challengeType:l,description:i,onSubmit:this.handleSubmit,updateSolutionForm:D}),d.createElement(j.Z,{guideUrl:(0,P.jN)({forumTopicId:o,title:c})}),d.createElement("br",null),d.createElement(b.Z,null)),d.createElement(v.Z,{block:f,blockName:a,certification:g,superBlock:h}),d.createElement(N.Z,{challengeTitle:c,challengeBlock:a})))))},t}(d.Component);F.displayName="Project",t.default=(0,f.$j)(_,(function(e){return(0,C.DE)({updateChallengeMeta:T.Fl,challengeMounted:T.qj,updateSolutionFormValues:T.i1,openCompletionModal:function(){return(0,T.h7)("completion")}},e)}))((0,g.Z)()(F))}}]);
//# sourceMappingURL=component---src-templates-challenges-projects-frontend-show-tsx-f9e615f13e4d379d0a24.js.map