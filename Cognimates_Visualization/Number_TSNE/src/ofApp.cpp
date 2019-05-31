#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup(){
    ofBackground(0);
    
    types.push_back("paper");
    types.push_back("scissor");
    types.push_back("stone");
    
    // load all the images
    ofLog() << "Gathering images...";
    ofDirectory dir;
    int nFiles = dir.listDir(ofToDataPath("images/"));
    if(nFiles) {
        for(int i=0; i<dir.size(); i++) {
            if (i % 20 == 0)    ofLog() << " - loading image "<<i<<" / "<<dir.size();
            string filePath = dir.getPath(i);
            images.push_back(ofImage());
            images.back().load(filePath);
        }
    }
    
    // setup ofxCcv
    ccv.setup("image-net-2012.sqlite3");
    
    // encode all of the images with ofxCcv
    ofLog() << "Encoding images...";
    for (int i=0; i<images.size(); i++) {
        if (i % 20 == 0)    ofLog() << " - encoding image "<<i<<" / "<<images.size();
        ofLog() << "This Image:"<<i;
        vector<float> encoding = ccv.encode(images[i], ccv.numLayers()-1);
        encodings.push_back(encoding);
    }
    
    // run t-SNE and load image points to imagePoints
    ofLog() << "Run t-SNE on images";
    imagePoints = tsne.run(encodings, 3, 25, 0.1, true);
    
    // make the images the same size
    for (int i=0; i<images.size(); i++) {
        images[i].resize(100 * images[i].getWidth() / images[i].getHeight(), 100);
    }
    
    // setup gui
    gui.setup();
    gui.add(scale.set("scale", 1.0, 0.0, 10.0));
    
//    for (int i = 0; i < 500; i++){
//        Sample tempSample; tempSample.setup(ofRandom(ofGetWidth()),ofRandom(ofGetHeight()),ofRandom(-ofGetWidth()/2, ofGetWidth()/2),types[ofRandom(0, 3)]);
//        samples.push_back(tempSample);
//    }
}

//--------------------------------------------------------------
void ofApp::update(){

}

//--------------------------------------------------------------
void ofApp::draw(){
    
    glEnable(GL_DEPTH_TEST);
//    ofEnableLighting();
//    ofLight light;
//    light.setPosition(ofPoint(-200,0, -1000));
//    light.lookAt( ofPoint(-1000,0,0));
//    light.setDirectional();
//    light.enable();
    
    cam.begin();
    
    ofDrawAxis(100);
    
    ofSeedRandom(0);    // always pick the same random positions
    ofTranslate(-ofGetWidth()/2, -ofGetHeight()/2,-ofGetHeight()/2);
    for (int i = 0; i < imagePoints.size(); i++){
        float x = ofMap(imagePoints[i][0], 0, 1, 0, scale * ofGetWidth());
        float y = ofMap(imagePoints[i][1], 0, 1, 0, scale * ofGetHeight());
        float z = ofMap(imagePoints[i][2], 0, 1, 0, scale * ofGetHeight());
        
        ofPoint pos(x, y, z);
        
        ofNode posNode;
        posNode.setGlobalPosition(pos);
        posNode.lookAt(cam.getGlobalPosition(), cam.getUpDir());
        ofQuaternion posQuat = posNode.getGlobalOrientation();
        
        float ang = 0;
        ofPoint vec;
        posQuat.getRotate(ang, vec);
        
        ofPushMatrix();
        ofTranslate(pos);
        ofRotate(ang, vec.x, vec.y, vec.z);
//        ofRotate(30,  1,1,0);       // rotate alittle bit, so you can see the "box" of the object
        Sample tempSample;
        tempSample.setup(0,0,0,types[ofRandom(0, 3)],i);
        tempSample.draw(images[i]);
//        ofDrawBox(0,0,0,50);
        ofPopMatrix();
    }
    
    cam.end();
    gui.draw();
    
    
    
    
    
    
    
//    cam.begin();
//    if(cam.getDistance()>1500){
//        cam.setDistance(1500);
//    }
//    if(cam.getDistance()<500){
//        cam.setDistance(500);
//    }
//
//    ofTranslate(-ofGetWidth()/2, -ofGetHeight()/2,0);
//    for (int i =0; i<samples.size();i++){
//        samples[i].draw();
//    }
//    cam.end();
}

//--------------------------------------------------------------
void ofApp::keyPressed(int key){

}

//--------------------------------------------------------------
void ofApp::keyReleased(int key){

}

//--------------------------------------------------------------
void ofApp::mouseMoved(int x, int y ){

}

//--------------------------------------------------------------
void ofApp::mouseDragged(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mousePressed(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mouseReleased(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mouseEntered(int x, int y){

}

//--------------------------------------------------------------
void ofApp::mouseExited(int x, int y){

}

//--------------------------------------------------------------
void ofApp::windowResized(int w, int h){

}

//--------------------------------------------------------------
void ofApp::gotMessage(ofMessage msg){

}

//--------------------------------------------------------------
void ofApp::dragEvent(ofDragInfo dragInfo){ 

}
