gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.GDPlayer1Objects1= [];
gdjs.Untitled_32sceneCode.GDPlayer1Objects2= [];
gdjs.Untitled_32sceneCode.GDGroundObjects1= [];
gdjs.Untitled_32sceneCode.GDGroundObjects2= [];
gdjs.Untitled_32sceneCode.GDLightObjects1= [];
gdjs.Untitled_32sceneCode.GDLightObjects2= [];
gdjs.Untitled_32sceneCode.GDKillbrikcObjects1= [];
gdjs.Untitled_32sceneCode.GDKillbrikcObjects2= [];
gdjs.Untitled_32sceneCode.GDcheckpoint1Objects1= [];
gdjs.Untitled_32sceneCode.GDcheckpoint1Objects2= [];
gdjs.Untitled_32sceneCode.GDbackgroundObjects1= [];
gdjs.Untitled_32sceneCode.GDbackgroundObjects2= [];
gdjs.Untitled_32sceneCode.GDcheckpoint2Objects1= [];
gdjs.Untitled_32sceneCode.GDcheckpoint2Objects2= [];


gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPlayer1Objects1Objects = Hashtable.newFrom({"Player1": gdjs.Untitled_32sceneCode.GDPlayer1Objects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDKillbrikcObjects1Objects = Hashtable.newFrom({"Killbrikc": gdjs.Untitled_32sceneCode.GDKillbrikcObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPlayer1Objects1Objects = Hashtable.newFrom({"Player1": gdjs.Untitled_32sceneCode.GDPlayer1Objects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDcheckpoint1Objects1Objects = Hashtable.newFrom({"checkpoint1": gdjs.Untitled_32sceneCode.GDcheckpoint1Objects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPlayer1Objects1Objects = Hashtable.newFrom({"Player1": gdjs.Untitled_32sceneCode.GDPlayer1Objects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDcheckpoint2Objects1Objects = Hashtable.newFrom({"checkpoint2": gdjs.Untitled_32sceneCode.GDcheckpoint2Objects1});
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(166);
}{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(958);
}{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(1);
}}

}


};gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.Untitled_32sceneCode.GDPlayer1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayer1Objects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlayer1Objects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlayer1Objects1[k] = gdjs.Untitled_32sceneCode.GDPlayer1Objects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayer1Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPlayer1Objects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayer1Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayer1Objects1[i].getBehavior("Animation").setAnimationName("walk");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Killbrikc"), gdjs.Untitled_32sceneCode.GDKillbrikcObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.Untitled_32sceneCode.GDPlayer1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPlayer1Objects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDKillbrikcObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPlayer1Objects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayer1Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayer1Objects1[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber(),runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.Untitled_32sceneCode.GDPlayer1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayer1Objects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlayer1Objects1[i].getBehavior("IdleTracker").IsIdle((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlayer1Objects1[k] = gdjs.Untitled_32sceneCode.GDPlayer1Objects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayer1Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPlayer1Objects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayer1Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayer1Objects1[i].getBehavior("Animation").setAnimationName("idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.Untitled_32sceneCode.GDPlayer1Objects1);
gdjs.copyArray(runtimeScene.getObjects("checkpoint1"), gdjs.Untitled_32sceneCode.GDcheckpoint1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPlayer1Objects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDcheckpoint1Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(882);
}{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(915);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.Untitled_32sceneCode.GDPlayer1Objects1);
gdjs.copyArray(runtimeScene.getObjects("checkpoint2"), gdjs.Untitled_32sceneCode.GDcheckpoint2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPlayer1Objects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDcheckpoint2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1836);
}{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(918);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 0);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDPlayer1Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlayer1Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDGroundObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGroundObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDLightObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDLightObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDKillbrikcObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDKillbrikcObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDcheckpoint1Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDcheckpoint1Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDbackgroundObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDbackgroundObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDcheckpoint2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDcheckpoint2Objects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);
gdjs.Untitled_32sceneCode.GDPlayer1Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlayer1Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDGroundObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGroundObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDLightObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDLightObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDKillbrikcObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDKillbrikcObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDcheckpoint1Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDcheckpoint1Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDbackgroundObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDbackgroundObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDcheckpoint2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDcheckpoint2Objects2.length = 0;


return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
