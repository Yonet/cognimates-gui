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
        ofColor color;
        ofImage image;
    
        void setup(float _x, float _y, float _z, string _type, int _imageIdx);
        void update();
        void draw(ofImage _image);
        void fillColor(string _type);
        void loadImage(int _imageIdx);
    
        Sample();
    private:
};

#endif /* Sample_hpp */
