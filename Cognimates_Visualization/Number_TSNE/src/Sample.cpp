//
//  Sample.cpp
//  cognimates_Prototype
//
//  Created by Quinn on 2019/5/10.
//

#include "Sample.hpp"
#include "ofApp.h"

Sample::Sample(){
}

void Sample::setup(float _x, float _y, float _z, string _type, int _imageIdx){
    pos.set(_x,_y,_z);
    vec.set(0,0,0);
    acc.set(0,0,0);
    size = 5;
    fillColor(_type);
    loadImage(_imageIdx);
}

void Sample::update(){
    vec+=acc;
    pos+=vec;
    acc*=0;
}

void Sample::draw(ofImage _image){
    ofPushMatrix();
    ofPushStyle();
    ofTranslate(pos.x,pos.y,pos.z);
    ofScale(-1, 1,1);
    ofSetColor(color);
//    ofDrawSquare(-60,-60,0,120);
    _image.draw(-50,-50,0);
//    image.draw(0, 0, 0, 50, 50);
//    ofDrawSphere(size);
    ofPopStyle();
    ofPopMatrix();
}

void Sample::fillColor(string _type){
    if (_type == "0"){
        color.set(255, 0, 0);
    }else if (_type == "1"){
        color.set(255,255,0);
    }else if (_type == "2"){
        color.set(255, 255, 200);
    }else if (_type == "3"){
        color.set(0, 0, 255);
    }else if (_type == "4"){
        color.set(0, 255, 255);
    }else if (_type == "5"){
        color.set(200, 255, 255);
    }else if (_type == "6"){
        color.set(0, 255, 0);
    }else if (_type == "7"){
        color.set(100, 255, 100);
    }else if (_type == "8"){
        color.set(200, 255, 200);
    }else if (_type == "9"){
        color.set(200, 100, 255);
    }
}

void Sample::loadImage(int _imageIdx){
    imageIdx = _imageIdx;
}

void Sample::connect(Sample _other){
    ofPushMatrix();
    ofPushStyle();
    ofSetColor(255,255,255);
    ofSetLineWidth(1);
    ofDrawLine(absPos.x, absPos.y, absPos.z, _other.absPos.x, _other.absPos.y, _other.absPos.z);
    ofPopStyle();
    ofPopMatrix();
}

void Sample::test(){
    ofPushMatrix();
    ofPushStyle();
    ofTranslate(pos.x,pos.y,pos.z);
    ofSetColor(255,0,0);
    ofDrawSphere(size);
    ofPopStyle();
    ofPopMatrix();
}

void Sample::drift(){
    float offset = ofRandom(-10,10);
    pos.y+=offset;
}

void Sample::savePos(ofPoint _pos){
    absPos.x = _pos.x;
    absPos.y = _pos.y;
    absPos.z = _pos.z;
}
