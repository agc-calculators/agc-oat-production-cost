/*! Built with http://stenciljs.com */
AgcOatProductionCost.loadBundle("2vx5xlfd",["exports","./chunk-d3b984d1.js"],function(t,e){var s=window.AgcOatProductionCost.h,a=function(){function t(){this.socket="",this.ready=!1}return t.prototype.render=function(){var t=this;return s("section",{"data-wizard-results":!0,ref:function(e){return t.section=e}},s("div",{style:{display:this.ready?"none":"block"}},s("slot",{name:"empty"})),s("div",{style:{display:this.ready?"block":"none"}},this.data&&s("ul",{class:"agc-results"},s("li",null,s("h2",{"data-i18n":"results.market-price"},"Estimated Market Price"),s("span",{class:"agc-results__value"},"$",e.parseMoney(this.data.marketPrice).dollars),s("sub",null,s("strong",null,".",e.parseMoney(this.data.marketPrice).cents))),s("li",null,s("h2",{"data-i18n":"results.planted-acres-"+this.data.units.land},"Planted Acres"),s("span",{class:"agc-results__value"},this.data.plantedAcres),s("sub",null,this.data.units.land)),s("li",null,s("h2",{"data-i18n":"results.expectedYield"},"Expected Yield"),s("span",{class:"agc-results__value"},this.data.expectedYield),s("sub",null,this.data.units.yield)),s("li",null,s("h2",{"data-i18n":"results.variable-costs."+this.data.units.land},"Variable Cost per Acre"),s("span",{class:"agc-results__value"},"$",e.parseMoney(this.data.variableCosts).dollars),s("sub",null,s("strong",null,".",e.parseMoney(this.data.variableCosts).cents))))))},t.prototype.handleResults=function(t){t.detail.socket===this.socket&&(this.data=Object.assign({},t.detail.results),this.ready=!0)},t.prototype.componentDidLoad=function(){this.socket&&window.document.addEventListener("agcCalculated",this.handleResults.bind(this))},t.prototype.componentDidUnload=function(){window.document.removeEventListener("agcCalculated",this.handleResults)},Object.defineProperty(t,"is",{get:function(){return"agc-oat-production-cost-inputs"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{data:{state:!0},ready:{state:!0},socket:{type:String,attr:"socket"}}},enumerable:!0,configurable:!0}),t}();t.AgcOatProductionCostInputs=a,Object.defineProperty(t,"__esModule",{value:!0})});