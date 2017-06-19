const {ccclass, property} = cc._decorator;
import * as Global from "./Global"
@ccclass
export default class End extends cc.Component {
    @property(cc.Node)
    angel: cc.Node;
    @property(cc.Node)
    devil: cc.Node;
    @property(cc.Node)
    normal: cc.Node;

    @property(cc.AudioClip)
    goodAudio: cc.AudioClip;

    @property(cc.AudioClip)
    badAudio: cc.AudioClip;

    @property(cc.AudioClip)
    normalAudio: cc.AudioClip;

    onLoad(){
        cc.find('Canvas').opacity = 0;
        cc.find('Canvas').runAction(cc.fadeIn(1));
        debugger;
        Global.resetAudio();
        if(Global.resultState.good) {
            this.angel.active = true;
            Global.audioConfigData.goodHandler = cc.audioEngine.play(this.goodAudio,true,1);
        } else if(Global.resultState.bad) {
            this.devil.active = true;
            Global.audioConfigData.badHandler = cc.audioEngine.play(this.badAudio,true,1);
        } else if(Global.resultState.normal) {
            this.normal.active = true;
            Global.audioConfigData.normalHandler =  cc.audioEngine.play(this.normalAudio,true,1);
        }
    }


}
