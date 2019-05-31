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
    size = 5;
    fillColor(_type);
    loadImage(_imageIdx);
}

void Sample::update(){
    
}

void Sample::draw(ofImage _image){
    ofPushMatrix();
    ofPushStyle();
    ofTranslate(pos.x,pos.y,pos.z);
//    ofSetColor(color);
    ofScale(-1, 1,1);
    _image.draw(0,0,0);
//    image.draw(0, 0, 0, 50, 50);
//    ofDrawSphere(size);
    ofPopStyle();
    ofPopMatrix();
}

void Sample::fillColor(string _type){
    if (_type == "paper"){
        color.set(255, 0, 0);
    }else if (_type == "scissor"){
        color.set(0,255,0);
    }else if (_type == "stone"){
        color.set(0, 0, 255);
    }
}

void Sample::loadImage(int _imageIdx){
    imageIdx = _imageIdx;
}
