/**
 * @author mrdoob / http://mrdoob.com/
 * @author philogb / http://blog.thejit.org/
 * @author egraether / http://egraether.com/
 * @author zz85 / http://www.lab4games.net/zz85/blog
 */function Vector2(x,y){this.x=x||0;this.y=y||0;}Vector2.prototype={constructor:Vector2,isVector2:true,get width(){return this.x;},set width(value){this.x=value;},get height(){return this.y;},set height(value){this.y=value;},//
set:function set(x,y){this.x=x;this.y=y;return this;},setScalar:function setScalar(scalar){this.x=scalar;this.y=scalar;return this;},setX:function setX(x){this.x=x;return this;},setY:function setY(y){this.y=y;return this;},setComponent:function setComponent(index,value){switch(index){case 0:this.x=value;break;case 1:this.y=value;break;default:throw new Error('index is out of range: '+index);}},getComponent:function getComponent(index){switch(index){case 0:return this.x;case 1:return this.y;default:throw new Error('index is out of range: '+index);}},clone:function clone(){return new this.constructor(this.x,this.y);},copy:function copy(v){this.x=v.x;this.y=v.y;return this;},add:function add(v,w){if(w!==undefined){console.warn('THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead.');return this.addVectors(v,w);}this.x+=v.x;this.y+=v.y;return this;},addScalar:function addScalar(s){this.x+=s;this.y+=s;return this;},addVectors:function addVectors(a,b){this.x=a.x+b.x;this.y=a.y+b.y;return this;},addScaledVector:function addScaledVector(v,s){this.x+=v.x*s;this.y+=v.y*s;return this;},sub:function sub(v,w){if(w!==undefined){console.warn('THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.');return this.subVectors(v,w);}this.x-=v.x;this.y-=v.y;return this;},subScalar:function subScalar(s){this.x-=s;this.y-=s;return this;},subVectors:function subVectors(a,b){this.x=a.x-b.x;this.y=a.y-b.y;return this;},multiply:function multiply(v){this.x*=v.x;this.y*=v.y;return this;},multiplyScalar:function multiplyScalar(scalar){if(isFinite(scalar)){this.x*=scalar;this.y*=scalar;}else{this.x=0;this.y=0;}return this;},divide:function divide(v){this.x/=v.x;this.y/=v.y;return this;},divideScalar:function divideScalar(scalar){return this.multiplyScalar(1/scalar);},min:function min(v){this.x=Math.min(this.x,v.x);this.y=Math.min(this.y,v.y);return this;},max:function max(v){this.x=Math.max(this.x,v.x);this.y=Math.max(this.y,v.y);return this;},clamp:function clamp(min,max){// This function assumes min < max, if this assumption isn't true it will not operate correctly
this.x=Math.max(min.x,Math.min(max.x,this.x));this.y=Math.max(min.y,Math.min(max.y,this.y));return this;},clampScalar:function(){var min,max;return function clampScalar(minVal,maxVal){if(min===undefined){min=new Vector2();max=new Vector2();}min.set(minVal,minVal);max.set(maxVal,maxVal);return this.clamp(min,max);};}(),clampLength:function clampLength(min,max){var length=this.length();return this.multiplyScalar(Math.max(min,Math.min(max,length))/length);},floor:function floor(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this;},ceil:function ceil(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this;},round:function round(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this;},roundToZero:function roundToZero(){this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x);this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y);return this;},negate:function negate(){this.x=-this.x;this.y=-this.y;return this;},dot:function dot(v){return this.x*v.x+this.y*v.y;},lengthSq:function lengthSq(){return this.x*this.x+this.y*this.y;},length:function length(){return Math.sqrt(this.x*this.x+this.y*this.y);},lengthManhattan:function lengthManhattan(){return Math.abs(this.x)+Math.abs(this.y);},normalize:function normalize(){return this.divideScalar(this.length());},angle:function angle(){// computes the angle in radians with respect to the positive x-axis
var angle=Math.atan2(this.y,this.x);if(angle<0)angle+=2*Math.PI;return angle;},distanceTo:function distanceTo(v){return Math.sqrt(this.distanceToSquared(v));},distanceToSquared:function distanceToSquared(v){var dx=this.x-v.x,dy=this.y-v.y;return dx*dx+dy*dy;},distanceToManhattan:function distanceToManhattan(v){return Math.abs(this.x-v.x)+Math.abs(this.y-v.y);},setLength:function setLength(length){return this.multiplyScalar(length/this.length());},lerp:function lerp(v,alpha){this.x+=(v.x-this.x)*alpha;this.y+=(v.y-this.y)*alpha;return this;},lerpVectors:function lerpVectors(v1,v2,alpha){return this.subVectors(v2,v1).multiplyScalar(alpha).add(v1);},equals:function equals(v){return v.x===this.x&&v.y===this.y;},fromArray:function fromArray(array,offset){if(offset===undefined)offset=0;this.x=array[offset];this.y=array[offset+1];return this;},toArray:function toArray(array,offset){if(array===undefined)array=[];if(offset===undefined)offset=0;array[offset]=this.x;array[offset+1]=this.y;return array;},fromAttribute:function fromAttribute(attribute,index,offset){if(offset===undefined)offset=0;index=index*attribute.itemSize+offset;this.x=attribute.array[index];this.y=attribute.array[index+1];return this;},rotateAround:function rotateAround(center,angle){var c=Math.cos(angle),s=Math.sin(angle);var x=this.x-center.x;var y=this.y-center.y;this.x=x*c-y*s+center.x;this.y=x*s+y*c+center.y;return this;}};

function Box2(min,max){this.min=min!==undefined?min:new Vector2(+Infinity,+Infinity);this.max=max!==undefined?max:new Vector2(-Infinity,-Infinity);}Box2.prototype={constructor:Box2,set:function set(min,max){this.min.copy(min);this.max.copy(max);return this;},setFromPoints:function setFromPoints(points){this.makeEmpty();for(var i=0,il=points.length;i<il;i++){this.expandByPoint(points[i]);}return this;},setFromCenterAndSize:function(){var v1=new Vector2();return function setFromCenterAndSize(center,size){var halfSize=v1.copy(size).multiplyScalar(0.5);this.min.copy(center).sub(halfSize);this.max.copy(center).add(halfSize);return this;};}(),clone:function clone(){return new this.constructor().copy(this);},copy:function copy(box){this.min.copy(box.min);this.max.copy(box.max);return this;},makeEmpty:function makeEmpty(){this.min.x=this.min.y=+Infinity;this.max.x=this.max.y=-Infinity;return this;},isEmpty:function isEmpty(){// this is a more robust check for empty than ( volume <= 0 ) because volume can get positive with two negative axes
return this.max.x<this.min.x||this.max.y<this.min.y;},center:function center(optionalTarget){var result=optionalTarget||new Vector2();return result.addVectors(this.min,this.max).multiplyScalar(0.5);},size:function size(optionalTarget){var result=optionalTarget||new Vector2();return result.subVectors(this.max,this.min);},expandByPoint:function expandByPoint(point){this.min.min(point);this.max.max(point);return this;},expandByVector:function expandByVector(vector){this.min.sub(vector);this.max.add(vector);return this;},expandByScalar:function expandByScalar(scalar){this.min.addScalar(-scalar);this.max.addScalar(scalar);return this;},containsPoint:function containsPoint(point){if(point.x<this.min.x||point.x>this.max.x||point.y<this.min.y||point.y>this.max.y){return false;}return true;},containsBox:function containsBox(box){if(this.min.x<=box.min.x&&box.max.x<=this.max.x&&this.min.y<=box.min.y&&box.max.y<=this.max.y){return true;}return false;},getParameter:function getParameter(point,optionalTarget){// This can potentially have a divide by zero if the box
// has a size dimension of 0.
var result=optionalTarget||new Vector2();return result.set((point.x-this.min.x)/(this.max.x-this.min.x),(point.y-this.min.y)/(this.max.y-this.min.y));},intersectsBox:function intersectsBox(box){// using 6 splitting planes to rule out intersections.
if(box.max.x<this.min.x||box.min.x>this.max.x||box.max.y<this.min.y||box.min.y>this.max.y){return false;}return true;},clampPoint:function clampPoint(point,optionalTarget){var result=optionalTarget||new Vector2();return result.copy(point).clamp(this.min,this.max);},distanceToPoint:function(){var v1=new Vector2();return function distanceToPoint(point){var clampedPoint=v1.copy(point).clamp(this.min,this.max);return clampedPoint.sub(point).length();};}(),intersect:function intersect(box){this.min.max(box.min);this.max.min(box.max);return this;},union:function union(box){this.min.min(box.min);this.max.max(box.max);return this;},translate:function translate(offset){this.min.add(offset);this.max.add(offset);return this;},equals:function equals(box){return box.min.equals(this.min)&&box.max.equals(this.max);}};

/* eslint-env browser */var application_importSrcBox2 = function(){console.log('nothing to do with box 2');}

export default application_importSrcBox2;