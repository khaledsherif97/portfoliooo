"use strict";(self.webpackChunkportfoliooo=self.webpackChunkportfoliooo||[]).push([[2279],{2279:(e,i,t)=>{t.d(i,{Bubbler:()=>s});var o=t(4409),b=t(8342);function l(e,i,t,b){if(i>=t){const l=e+(i-t)*b;return(0,o.qE)(l,e,i)}if(i<t){const l=e-(t-i)*b;return(0,o.qE)(l,i,e)}}const n="bubble";class s extends o.sJ{constructor(e){super(e),this._clickBubble=()=>{const e=this.container,i=e.actualOptions,t=e.interactivity.mouse.clickPosition,b=i.interactivity.modes.bubble;if(!b||!t)return;e.bubble||(e.bubble={});const l=e.retina.bubbleModeDistance;if(!l||l<0)return;const n=e.particles.quadTree.queryCircle(t,l,(e=>this.isEnabled(e))),{bubble:s}=e;for(const c of n){var u,a,r;if(!s.clicking)continue;c.bubble.inRange=!s.durationEnd;const i=c.getPosition(),n=(0,o.Yf)(i,t),d=((new Date).getTime()-(null!==(u=e.interactivity.mouse.clickTime)&&void 0!==u?u:0))/o.Xu;d>b.duration&&(s.durationEnd=!0),d>2*b.duration&&(s.clicking=!1,s.durationEnd=!1);const v={bubbleObj:{optValue:e.retina.bubbleModeSize,value:c.bubble.radius},particlesObj:{optValue:(0,o.W9)(c.options.size.value)*e.retina.pixelRatio,value:c.size.value},type:"size"};this._process(c,n,d,v);const p={bubbleObj:{optValue:b.opacity,value:c.bubble.opacity},particlesObj:{optValue:(0,o.W9)(c.options.opacity.value),value:null!==(a=null===(r=c.opacity)||void 0===r?void 0:r.value)&&void 0!==a?a:1},type:"opacity"};this._process(c,n,d,p),!s.durationEnd&&n<=l?this._hoverBubbleColor(c,n):delete c.bubble.color}},this._hoverBubble=()=>{const e=this.container,i=e.interactivity.mouse.position,t=e.retina.bubbleModeDistance;if(!t||t<0||!i)return;const b=e.particles.quadTree.queryCircle(i,t,(e=>this.isEnabled(e)));for(const l of b){l.bubble.inRange=!0;const b=l.getPosition(),n=(0,o.Yf)(b,i),s=1-n/t;n<=t?s>=0&&e.interactivity.status===o.Rb&&(this._hoverBubbleSize(l,s),this._hoverBubbleOpacity(l,s),this._hoverBubbleColor(l,s)):this.reset(l),e.interactivity.status===o.Z0&&this.reset(l)}},this._hoverBubbleColor=(e,i,t)=>{const b=this.container.actualOptions,l=null!==t&&void 0!==t?t:b.interactivity.modes.bubble;if(l){if(!e.bubble.finalColor){const i=l.color;if(!i)return;const t=(0,o.TA)(i);e.bubble.finalColor=(0,o.R5)(t)}if(e.bubble.finalColor)if(l.mix){e.bubble.color=void 0;const t=e.getFillColor();e.bubble.color=t?(0,o.K6)((0,o.EY)(t,e.bubble.finalColor,1-i,i)):e.bubble.finalColor}else e.bubble.color=e.bubble.finalColor}},this._hoverBubbleOpacity=(e,i,t)=>{var b,n,s,u;const a=this.container.actualOptions,r=null!==(b=null===t||void 0===t?void 0:t.opacity)&&void 0!==b?b:null===(n=a.interactivity.modes.bubble)||void 0===n?void 0:n.opacity;if(!r)return;const c=e.options.opacity.value,d=l(null!==(s=null===(u=e.opacity)||void 0===u?void 0:u.value)&&void 0!==s?s:1,r,(0,o.W9)(c),i);void 0!==d&&(e.bubble.opacity=d)},this._hoverBubbleSize=(e,i,t)=>{const b=this.container,n=null!==t&&void 0!==t&&t.size?t.size*b.retina.pixelRatio:b.retina.bubbleModeSize;if(void 0===n)return;const s=(0,o.W9)(e.options.size.value)*b.retina.pixelRatio,u=l(e.size.value,n,s,i);void 0!==u&&(e.bubble.radius=u)},this._process=(e,i,t,o)=>{var b;const l=this.container,n=o.bubbleObj.optValue,s=l.actualOptions.interactivity.modes.bubble;if(!s||void 0===n)return;const u=s.duration,a=l.retina.bubbleModeDistance,r=o.particlesObj.optValue,c=o.bubbleObj.value,d=null!==(b=o.particlesObj.value)&&void 0!==b?b:0,v=o.type;if(a&&!(a<0)&&n!==r)if(l.bubble||(l.bubble={}),l.bubble.durationEnd)c&&("size"===v&&delete e.bubble.radius,"opacity"===v&&delete e.bubble.opacity);else if(i<=a){if((null!==c&&void 0!==c?c:d)!==n){const i=d-t*(d-n)/u;"size"===v&&(e.bubble.radius=i),"opacity"===v&&(e.bubble.opacity=i)}}else"size"===v&&delete e.bubble.radius,"opacity"===v&&delete e.bubble.opacity},this._singleSelectorHover=(e,i,t)=>{const b=this.container,l=document.querySelectorAll(i),n=b.actualOptions.interactivity.modes.bubble;n&&l.length&&l.forEach((i=>{const l=i,s=b.retina.pixelRatio,u={x:(l.offsetLeft+.5*l.offsetWidth)*s,y:(l.offsetTop+.5*l.offsetHeight)*s},a=.5*l.offsetWidth*s,r="circle"===t.type?new o.jl(u.x,u.y,a):new o.M_(l.offsetLeft*s,l.offsetTop*s,l.offsetWidth*s,l.offsetHeight*s),c=b.particles.quadTree.query(r,(e=>this.isEnabled(e)));for(const t of c){if(!r.contains(t.getPosition()))continue;t.bubble.inRange=!0;const i=n.divs,b=(0,o.NV)(i,l);t.bubble.div&&t.bubble.div===l||(this.clear(t,e,!0),t.bubble.div=l),this._hoverBubbleSize(t,1,b),this._hoverBubbleOpacity(t,1,b),this._hoverBubbleColor(t,1,b)}}))},e.bubble||(e.bubble={}),this.handleClickMode=i=>{i===n&&(e.bubble||(e.bubble={}),e.bubble.clicking=!0)}}clear(e,i,t){e.bubble.inRange&&!t||(delete e.bubble.div,delete e.bubble.opacity,delete e.bubble.radius,delete e.bubble.color)}init(){const e=this.container,i=e.actualOptions.interactivity.modes.bubble;i&&(e.retina.bubbleModeDistance=i.distance*e.retina.pixelRatio,void 0!==i.size&&(e.retina.bubbleModeSize=i.size*e.retina.pixelRatio))}interact(e){const i=this.container.actualOptions.interactivity.events,t=i.onHover,b=i.onClick,l=t.enable,s=t.mode,u=b.enable,a=b.mode,r=i.onDiv;l&&(0,o.hn)(n,s)?this._hoverBubble():u&&(0,o.hn)(n,a)?this._clickBubble():(0,o.U6)(n,r,((i,t)=>this._singleSelectorHover(e,i,t)))}isEnabled(e){var i;const t=this.container,b=t.actualOptions,l=t.interactivity.mouse,s=(null!==(i=null===e||void 0===e?void 0:e.interactivity)&&void 0!==i?i:b.interactivity).events,{onClick:u,onDiv:a,onHover:r}=s,c=(0,o.iK)(n,a);return!!(c||r.enable&&l.position||u.enable&&l.clickPosition)&&((0,o.hn)(n,r.mode)||(0,o.hn)(n,u.mode)||c)}loadModeOptions(e){e.bubble||(e.bubble=new b.Z);for(var i=arguments.length,t=new Array(i>1?i-1:0),o=1;o<i;o++)t[o-1]=arguments[o];for(const b of t)e.bubble.load(null===b||void 0===b?void 0:b.bubble)}reset(e){e.bubble.inRange=!1}}}}]);
//# sourceMappingURL=2279.e2e48d28.chunk.js.map