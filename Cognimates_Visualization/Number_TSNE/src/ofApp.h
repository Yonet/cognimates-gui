#pragma once

#include "ofMain.h"
#include "ofxCcv.h"
#include "ofxTSNE.h"
#include "ofxGui.h"
#include "ofxOpenCv.h"
#include "Sample.hpp"

class ofApp : public ofBaseApp{

	public:
        vector<ofImage> images;
        vector<vector<double> > imagePoints;
        vector<vector<float> > encodings;
    
        vector <Sample> samples;
        vector <string> types;
        vector <string> rawNames;
        vector <int> rOffsets;
    
        int count;
    
        ofEasyCam cam;
        ofxCcv ccv;
        ofxTSNE tsne;
        ofxPanel gui;
        ofParameter<bool> filled;
        ofParameter<float> scale;
        ofParameter<float> thres;
    
        ofVideoGrabber vidGrabber;
        ofVideoGrabber vidGrabberCopy;
        ofxCvColorImage colorImg;
        ofxCvGrayscaleImage grayImage;
        ofxCvGrayscaleImage cropGrayImage;
        ofxCvGrayscaleImage grayBg;
        ofImage newSample;
        ofImage newSampleCopy;
        ofImage newSampleTest;
    
        bool bLearnBakground;
    
		void setup();
		void update();
		void draw();
        void imageTsne();

		void keyPressed(int key);
		void keyReleased(int key);
		void mouseMoved(int x, int y );
		void mouseDragged(int x, int y, int button);
		void mousePressed(int x, int y, int button);
		void mouseReleased(int x, int y, int button);
		void mouseEntered(int x, int y);
		void mouseExited(int x, int y);
		void windowResized(int w, int h);
		void dragEvent(ofDragInfo dragInfo);
		void gotMessage(ofMessage msg);
		
};
