require=function r(s,h,c){function d(i,t){if(!h[i]){if(!s[i]){var e="function"==typeof require&&require;if(!t&&e)return e(i,!0);if(l)return l(i,!0);var o=new Error("Cannot find module '"+i+"'");throw o.code="MODULE_NOT_FOUND",o}var n=h[i]={exports:{}};s[i][0].call(n.exports,function(t){var e=s[i][1][t];return d(e||t)},n,n.exports,r,s,h,c)}return h[i].exports}for(var l="function"==typeof require&&require,t=0;t<c.length;t++)d(c[t]);return d}({Helloworld:[function(t,e,i){"use strict";cc._RF.push(e,"e1b90/rohdEk4SdmmEZANaD","Helloworld"),Object.defineProperty(i,"__esModule",{value:!0});var o=t("./item"),n=cc._decorator,r=n.ccclass,s=n.property,h=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.width=0,t.heigth=0,t.allItem=[],t.mineConut=10,t.gameover=null,t.itemNode=null,t.enemyPool=null,t.sf=[],t.wEditbox=null,t.hEditbox=null,t.MEditbox=null,t.settingResult=null,t.settingBtn=null,t.replayBtn=null,t.reTryBtn=null,t.time=null,t.settingPanel=null,t.resulttips=null,t.timer=0,t.isCustom=!1,t.canClick=!0,t.isValidCount=0,t.gameOverTips=null,t}return __extends(t,e),t.prototype.start=function(){this.enemyPool=new cc.NodePool,this.play()},t.prototype.play=function(){for(var t=0;t<this.allItem.length;t++)this.allItem[t].reset(),this.enemyPool.put(this.allItem[t].node);this.unschedule(this.setTimer),this.timer=0,this.canClick=!0,this.isValidCount=0,this.schedule(this.setTimer,1),this.allItem=[];var s=new Array;for(t=0;t<this.width*this.heigth;t++)s.push(t);s=this.getArrayItems(s,this.mineConut);var h=this,c=0,d=720/h.width;960<d*h.heigth&&(d=960/h.width);var l=d/16;for(t=0;t<this.width;t++)for(var e=0;e<this.heigth;e++)if(0<this.enemyPool.size()){var i=this.enemyPool.get(),o=Math.floor(c/h.width),n=c%h.width,r=i.getComponent("item");h.allItem.push(r),i.parent=h.itemNode,i.setScale(cc.p(l,l)),i.setPosition(cc.p(n*d-360+d/2,(h.heigth-1)*d/2-o*d)),r.ismine=h.checkMinebyIndex(c,s),r.index=c,r.indexX=Math.floor(c/h.width),r.indexY=c%h.width,r.hello=h,c++}else cc.loader.loadRes("item",function(t,e){var i=Math.floor(c/h.width),o=c%h.width,n=cc.instantiate(e),r=n.getComponent("item");h.allItem.push(r),n.parent=h.itemNode,n.setScale(cc.p(l,l)),n.setPosition(cc.p(o*d-360+d/2,(h.heigth-1)*d/2-i*d)),r.ismine=h.checkMinebyIndex(c,s),r.index=c,r.indexX=Math.floor(c/h.width),r.indexY=c%h.width,r.hello=h,c++})},t.prototype.onclick=function(t){if(0!=this.canClick)return t.ismine?(t.boom(),this.canClick=!1,this.gameOverTips.string="挑战失败,游戏结束",void(this.gameover.active=!0)):void this.check(t)},t.prototype.check=function(t){if(!t.ismine&&!t.isvisited){var e=this.checkMineCount(t);if(t.setCount(e),!(0<e)){var i=this.getIndex(t.indexX-1,t.indexY-1),o=this.getIndex(t.indexX-1,t.indexY),n=this.getIndex(t.indexX-1,t.indexY+1),r=this.getIndex(t.indexX,t.indexY-1),s=this.getIndex(t.indexX,t.indexY+1),h=this.getIndex(t.indexX+1,t.indexY-1),c=this.getIndex(t.indexX+1,t.indexY),d=this.getIndex(t.indexX+1,t.indexY+1);this.checkOneItemBy(i),this.checkOneItemBy(o),this.checkOneItemBy(n),this.checkOneItemBy(r),this.checkOneItemBy(s),this.checkOneItemBy(h),this.checkOneItemBy(c),this.checkOneItemBy(d)}}},t.prototype.checkMineCount=function(t){t.isvisited=!0,this.isValidCount++,this.isValidCount>=this.width*this.heigth-this.mineConut&&(this.canClick=!1,this.gameOverTips.string="挑战成功,游戏结束",this.gameover.active=!0,this.unschedule(this.setTimer));var e=0,i=this.getIndex(t.indexX-1,t.indexY-1),o=this.getIndex(t.indexX-1,t.indexY),n=this.getIndex(t.indexX-1,t.indexY+1),r=this.getIndex(t.indexX,t.indexY-1),s=this.getIndex(t.indexX,t.indexY+1),h=this.getIndex(t.indexX+1,t.indexY-1),c=this.getIndex(t.indexX+1,t.indexY),d=this.getIndex(t.indexX+1,t.indexY+1);return e+=this.checkOneItem(i),e+=this.checkOneItem(o),e+=this.checkOneItem(n),e+=this.checkOneItem(r),e+=this.checkOneItem(s),e+=this.checkOneItem(h),e+=this.checkOneItem(c),e+=this.checkOneItem(d)},t.prototype.checkOneItem=function(t){return 0<=t&&t<this.width*this.heigth&&this.allItem[t].ismine?1:0},t.prototype.checkOneItemBy=function(t){0<=t&&t<this.width*this.heigth&&this.check(this.allItem[t])},t.prototype.getIndex=function(t,e){return t<0||t>=this.heigth||e<0||e>=this.width?-1:t*this.width+e},t.prototype.getArrayItems=function(t,e){var i=new Array;for(var o in t)i.push(t[o]);for(var n=new Array,r=0;r<e&&0<i.length;r++){var s=Math.floor(Math.random()*i.length);n[r]=i[s],i.splice(s,1)}return n},t.prototype.checkMinebyIndex=function(t,e){for(var i in e)if(t==e[i])return!0;return!1},t.prototype.setOneItem=function(){},t.prototype.retry=function(){this.gameover.active=!1,this.play()},t.prototype.setting=function(){this.canClick=!1,this.settingPanel.active=!0,this.toggle1()},t.prototype.settingresult=function(){if(this.isCustom){var t=parseInt(""==this.wEditbox.string?this.wEditbox.placeholder:this.wEditbox.string),e=parseInt(""==this.hEditbox.string?this.hEditbox.placeholder:this.hEditbox.string),i=parseInt(""==this.MEditbox.string?this.MEditbox.placeholder:this.MEditbox.string);if(this.width=t,this.heigth=e,this.mineConut=i,30<t||t<9)return void(this.resulttips.string="格子宽度不在9-24之间");if(24<e||e<9)return void(this.resulttips.string="格子高度不在9-30之间");if(i<10||t*e<i)return void(this.resulttips.string="累的数量不在10-格子最大数之间");this.isCustom=!1}this.settingPanel.active=!1,this.play()},t.prototype.toggle1=function(){this.width=9,this.heigth=9,this.mineConut=10},t.prototype.toggle2=function(){this.width=16,this.heigth=16,this.mineConut=40},t.prototype.toggle3=function(){this.width=30,this.heigth=16,this.mineConut=99},t.prototype.toggle4=function(){this.isCustom=!0},t.prototype.setTimer=function(){this.timer++;var t=Math.floor(this.timer/3600),e=Math.floor(this.timer%3600/60),i=Math.floor(this.timer%3600%60);this.time.string=t+":"+e+":"+i},__decorate([s(cc.Integer)],t.prototype,"width",void 0),__decorate([s(cc.Integer)],t.prototype,"heigth",void 0),__decorate([s([o.default])],t.prototype,"allItem",void 0),__decorate([s(cc.Integer)],t.prototype,"mineConut",void 0),__decorate([s(cc.Node)],t.prototype,"gameover",void 0),__decorate([s(cc.Node)],t.prototype,"itemNode",void 0),__decorate([s(cc.NodePool)],t.prototype,"enemyPool",void 0),__decorate([s([cc.SpriteFrame])],t.prototype,"sf",void 0),__decorate([s(cc.EditBox)],t.prototype,"wEditbox",void 0),__decorate([s(cc.EditBox)],t.prototype,"hEditbox",void 0),__decorate([s(cc.EditBox)],t.prototype,"MEditbox",void 0),__decorate([s(cc.Button)],t.prototype,"settingResult",void 0),__decorate([s(cc.Button)],t.prototype,"settingBtn",void 0),__decorate([s(cc.Button)],t.prototype,"replayBtn",void 0),__decorate([s(cc.Button)],t.prototype,"reTryBtn",void 0),__decorate([s(cc.Label)],t.prototype,"time",void 0),__decorate([s(cc.Node)],t.prototype,"settingPanel",void 0),__decorate([s(cc.Label)],t.prototype,"resulttips",void 0),__decorate([s(cc.Label)],t.prototype,"gameOverTips",void 0),t=__decorate([r],t)}(cc.Component);i.default=h,cc._RF.pop()},{"./item":"item"}],item:[function(t,e,i){"use strict";cc._RF.push(e,"85d52BSmlZJcJUQXCFgzVlz","item"),Object.defineProperty(i,"__esModule",{value:!0});var o=t("./Helloworld"),n=cc._decorator,r=n.ccclass,s=n.property,h=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.sprite=null,t.ismine=!1,t.indexX=0,t.indexY=0,t.index=0,t.hello=null,t.isvisited=!1,t.thisItem=null,t}return __extends(t,e),(i=t).prototype.onLoad=function(){},t.prototype.onClick=function(){this.hello.onclick(this.thisItem)},t.prototype.setCount=function(t){this.sprite.spriteFrame=this.hello.sf[t+1]},t.prototype.showMine=function(){this.ismine&&(this.sprite.spriteFrame=this.hello.sf[8])},t.prototype.reset=function(){this.sprite.spriteFrame=this.hello.sf[0],this.isvisited=!1,this.indexX=0,this.indexY=0,this.index=0,this.ismine=!1},t.prototype.boom=function(){this.sprite.spriteFrame=this.hello.sf[10]},__decorate([s(cc.Sprite)],t.prototype,"sprite",void 0),__decorate([s(o.default)],t.prototype,"hello",void 0),__decorate([s(i)],t.prototype,"thisItem",void 0),t=i=__decorate([r],t);var i}(cc.Component);i.default=h,cc._RF.pop()},{"./Helloworld":"Helloworld"}]},{},["Helloworld","item"]);