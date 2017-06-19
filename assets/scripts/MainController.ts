const {ccclass, property} = cc._decorator;
import * as Global from './Global';
@ccclass
export default class MainController extends cc.Component {


    @property(cc.Node)
    grayLayer: cc.Node;
    @property(cc.Node)
    dialog: cc.Node;
    @property(cc.Node)
    yesBtn: cc.Node;
    @property(cc.Node)
    noBtn: cc.Node;
    @property(cc.Node)
    devilEffect: cc.Node;
    @property(cc.Node)
    angelEffect: cc.Node;
    @property(cc.Node)
    devilHurtPoint: cc.Node;
    @property(cc.Node)
    angelHurtPoint: cc.Node;

    @property(cc.Node)
    board: cc.Node;

    @property(cc.AudioClip)
    questionAudio: cc.AudioClip;

    @property(cc.AudioClip)
    devilAudio: cc.AudioClip;

    @property(cc.AudioClip)
    angelAudio1: cc.AudioClip;

    @property(cc.AudioClip)
    angelAudio2: cc.AudioClip;

    @property(cc.AudioClip)
    backgroundAudio: cc.AudioClip;

    @property(cc.Node)
    canvas: cc.Node;

    @property(cc.Node)
    lightNode: cc.Node;

    @property(cc.Node)
    bloodNode:cc.Node;

    private currentQuestionIndex: number = 0;
    private currentAngelIndex: number = 1;
    private currentDevilIndex: number = 1;


    private question: QuestionConfigData;

    execEffect(target,node,cb){
        node.position = node.parent.convertToNodeSpaceAR(target.convertToWorldSpaceAR(cc.v2(0,0)));
        setTimeout(()=>{
            node.active = false;
        },100);
        setTimeout(()=>{
            node.active = true;
        },200);
        setTimeout(()=>{
            node.active = false;
        },300);
        setTimeout(()=>{
            node.active = true;
        },400);
        setTimeout(()=>{
            node.active = false;
        },500);
        setTimeout(()=>{
            node.active = true;
        },600);
        setTimeout(()=>{
            node.position = cc.v2(10000,10000);
            cb();
        },700);
    }

    newTurn() {
        // let randomI: number = null;
        // if (Global.countConfigData.currentNum <= Global.countConfigData.totalNum) {
        //     randomI = Math.floor(cc.random0To1() * Global.countConfigData.totalNum);
        //     while (Global.questionConfigDataArray[randomI].isUsed) {
        //         randomI = (randomI + 1) % Global.countConfigData.totalNum;
        //     }
        //     for(let i = 0; i < 7; i++) {
        //         if(!Global.questionConfigDataArray[i].isUsed) {
        //             randomI = i;
        //             break;
        //         }
        //     }
        // }
        let randomI = this.currentQuestionIndex;
        this.currentQuestionIndex++;

        Global.countConfigData.currentNum++;
        Global.questionConfigDataArray[randomI].isUsed = true;
        let question = Global.questionConfigDataArray[randomI];
        this.question = question;
        this.showAll();
        this.showData(question);
        this.playQuestionAudio();
    }

    playQuestionAudio() {
        cc.audioEngine.play(this.questionAudio, false, 1);
    }

    onLoad() {

        cc.find('Canvas').opacity = 0;
        cc.find('Canvas').runAction(cc.fadeIn(1));
            //TODO 背景音
            Global.resetAudio();
            Global.audioConfigData.backgroundHandler = cc.audioEngine.play(this.backgroundAudio, true, 1);

            this.yesBtn.on('touchstart', this.onYesBtnStart, this);
            this.noBtn.on('touchend', this.onNoBtnStart, this);

            this.yesBtn.on("touchend", this.onYesBtn, this);
            this.noBtn.on("touchend", this.onNoBtn, this);

            this.newTurn();
    }



    onYesBtnStart() {
        this.yesBtn.color = cc.Color.GRAY;
    }

    onNoBtnStart() {
        this.noBtn.color = cc.Color.GRAY;
    }

    onYesBtn() {
        this.yesBtn.color = cc.Color.WHITE;
        Global.scoreConfigData.score += this.question.yesAttr;
        this.hideAll();
        //TODO 播放动画
        this.playAnim(this.question.yesAttr, () => {
            let isEnd = this.checkEnd();
            if (!isEnd) {
                this.newTurn();
            }
        });
    }

    onNoBtn() {
        this.noBtn.color = cc.Color.WHITE;
        Global.scoreConfigData.score += this.question.noAttr;
        this.hideAll();
        //TODO 播放动画
        this.playAnim(this.question.noAttr, () => {
            let isEnd = this.checkEnd();
            if (!isEnd) {
                this.newTurn();
            }
        });

    }

    playAnim(attr: number, cb: () => void) {

        if (attr < 0) {
            // let index = -1;
            // for (let i = 1; i < 7; i++) {
            //     if (!this.angelHurtPoint.getChildByName('angelHurtPoint' + i).active) {
            //         index = i;
            //         break;
            //     }
            // }
            let index = this.currentAngelIndex;
            this.currentAngelIndex++;

            cc.audioEngine.play(this.angelAudio1, false, 1);
            //TODO 随机

            this.angelHurtPoint.getChildByName('angelHurtPoint' + index).active = true;
            this.angelHurtPoint.getChildByName('angelHurtPoint' + index).opacity = 0;
            this.angelHurtPoint.getChildByName('angelHurtPoint' + index).runAction(cc.fadeIn(1));
            let target = this.angelHurtPoint.getChildByName('angelHurtPoint' + index);
            //console.log(`${index} 天使`);
            this.execEffect(target,this.bloodNode,()=>{
                //setTimeout(cb, 1000);
                cb();
            });

        } else {
            // let index = -1;
            // for (let i = 1; i < 7; i++) {
            //     if (this.devilHurtPoint.getChildByName('devilHurtPoint' + i).active) {
            //         index = i;
            //         break;
            //     }
            // }
            let index = this.currentDevilIndex;
            this.currentDevilIndex++;

            cc.audioEngine.play(this.devilAudio, false, 1);
            this.devilHurtPoint.getChildByName('devilHurtPoint' + index).active = true;
            this.devilHurtPoint.getChildByName('devilHurtPoint' + index).opacity = 255;
            let self = this;
            this.devilHurtPoint.getChildByName('devilHurtPoint' + index).runAction(cc.sequence(cc.fadeOut(1), cc.callFunc(() => {
                self.devilHurtPoint.getChildByName('devilHurtPoint' + index).active = false;
            })));
            //console.log(`${index} 恶魔`);
            let target = this.devilHurtPoint.getChildByName('devilHurtPoint' + index);
            this.execEffect(target,this.lightNode,()=>{
                //setTimeout(cb, 1000);
                cb();
            });
        }
    }

    checkEnd() {
        this.resetResultState();
        if (Global.countConfigData.currentNum >= Global.countConfigData.totalNum) {
            if (Global.scoreConfigData.score === 0) {
                //中立
                Global.resultState.normal = true;
                // cc.find('Canvas').runAction(cc.sequence(cc.fadeOut(1),cc.callFunc(()=>{
                //
                // })));
                cc.find('Canvas').runAction(cc.fadeOut(1));
                setTimeout(()=>{
                    cc.director.loadScene("end");
                },1500);


                return true;
            } else if (Global.scoreConfigData.score > 0) {
                //天使活
                Global.resultState.good = true;
                // cc.find('Canvas').runAction(cc.sequence(cc.fadeOut(1),cc.callFunc(()=>{
                //
                // })));
                cc.find('Canvas').runAction(cc.fadeOut(1));
                setTimeout(()=>{
                    cc.director.loadScene("end");
                },1500);
                return true;
            } else if (Global.scoreConfigData.score < 0) {
                //恶魔活
                Global.resultState.bad = true;
                // cc.find('Canvas').runAction(cc.sequence(cc.fadeOut(1),cc.callFunc(()=>{
                //
                // })));
                cc.find('Canvas').runAction(cc.fadeOut(1));
                setTimeout(()=>{
                    cc.director.loadScene("end");
                },1500);
                return true;
            }
        }
        return false;
    }

    resetResultState() {
        Global.resultState.good = false;
        Global.resultState.bad = false;
        Global.resultState.normal = false;
    }


    private hideAll() {
        this.grayLayer.active = false;
        this.dialog.active = false;
        this.yesBtn.active = false;
        this.noBtn.active = false;
        this.board.active = false;
    }

    private showAll() {
        this.grayLayer.active = true;
        this.dialog.active = true;
        this.yesBtn.active = true;
        this.noBtn.active = true;
        this.board.active = true;
    }

    private showData(data: QuestionConfigData) {

        this.dialog.getChildByName("content").getComponent<cc.Label>(cc.Label).string = data.content;
        this.dialog.getChildByName("title").getComponent<cc.Label>(cc.Label).string = data.name;

    }
}
