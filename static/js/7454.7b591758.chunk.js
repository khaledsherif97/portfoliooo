"use strict";(self.webpackChunkportfoliooo=self.webpackChunkportfoliooo||[]).push([[7454],{7454:(t,o,e)=>{e.d(o,{Bouncer:()=>v});var n=e(4409);const i=2,s=.5,c=Math.PI*s,a=2,r=10;function l(t,o,e,s,a){const r=t.particles.quadTree.query(s,a);for(const l of r)s instanceof n.jl?(0,n.pE)((0,n.Tg)(l),{position:o,radius:e,mass:e**i*c,velocity:n.Mi.origin,factor:n.Mi.origin}):s instanceof n.M_&&(0,n.jo)(l,(0,n.AE)(o,e))}function f(t,o,e,i){(0,n.U6)(e,o,((o,e)=>function(t,o,e,i){const c=document.querySelectorAll(o);c.length&&c.forEach((o=>{const c=o,l=t.retina.pixelRatio,f={x:(c.offsetLeft+c.offsetWidth*s)*l,y:(c.offsetTop+c.offsetHeight*s)*l},u=c.offsetWidth*s*l,d=r*l,v="circle"===e.type?new n.jl(f.x,f.y,u+d):new n.M_(c.offsetLeft*l-d,c.offsetTop*l-d,c.offsetWidth*l+d*a,c.offsetHeight*l+d*a);i(f,u,v)}))}(t,o,e,((o,e,n)=>l(t,o,e,n,i)))))}class u{constructor(){this.distance=200}load(t){t&&void 0!==t.distance&&(this.distance=t.distance)}}const d="bounce";class v extends n.sJ{constructor(t){super(t)}clear(){}init(){const t=this.container,o=t.actualOptions.interactivity.modes.bounce;o&&(t.retina.bounceModeDistance=o.distance*t.retina.pixelRatio)}interact(){const t=this.container,o=t.actualOptions.interactivity.events,e=t.interactivity.status===n.Rb,i=o.onHover.enable,s=o.onHover.mode,c=o.onDiv;e&&i&&(0,n.hn)(d,s)?function(t,o){const e=t.retina.pixelRatio,i=r*e,s=t.interactivity.mouse.position,c=t.retina.bounceModeDistance;!c||c<0||!s||l(t,s,c,new n.jl(s.x,s.y,c+i),o)}(this.container,(t=>this.isEnabled(t))):f(this.container,c,d,(t=>this.isEnabled(t)))}isEnabled(t){var o;const e=this.container,i=e.actualOptions,s=e.interactivity.mouse,c=(null!==(o=null===t||void 0===t?void 0:t.interactivity)&&void 0!==o?o:i.interactivity).events,a=c.onDiv;return!!s.position&&c.onHover.enable&&(0,n.hn)(d,c.onHover.mode)||(0,n.iK)(d,a)}loadModeOptions(t){t.bounce||(t.bounce=new u);for(var o=arguments.length,e=new Array(o>1?o-1:0),n=1;n<o;n++)e[n-1]=arguments[n];for(const i of e)t.bounce.load(null===i||void 0===i?void 0:i.bounce)}reset(){}}}}]);
//# sourceMappingURL=7454.7b591758.chunk.js.map