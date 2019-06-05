//
//  Sample.hpp
//  cognimates_Prototype
//
//  Created by Quinn on 2019/5/10.
//

#ifndef Sample_hpp
#define Sample_hpp

#include <stdio.h>
#include "ofMain.h"

class Sample{
    
    public:
        float size;
        int imageIdx;
        ofVec3f pos;
        ofVec3f absPos;
        ofVec3f vec;
        ofVec3f acc;
        ofColor color;
        ofImage image;
    
        void setup(float _x, float _y, float _z, string _type, int _imageIdx,bool _filled);
        void update();
        void draw(ofImage _image);
        void fillColor(string _type);
        void loadImage(int _imageIdx);
        void connect(Sample _other);
        void drift();
        void test();
        void savePos(ofPoint _pos);
    
        Sample();
    private:
};

#endif /* Sample_hpp */
