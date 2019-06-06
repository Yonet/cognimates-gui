#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup(){
    ofBackground(0);
    
    bg.load("bg.png");
    yoursample.load("yoursample.png");
    
//    vidGrabber.setVerbose(true);
//    vidGrabber.setup(100,100);
//    vidGrabberCopy = vidGrabber;
    
//    colorImg.allocate(100,100);
    
    
    count = 0;
    
    types.push_back("0");
    types.push_back("1");
    types.push_back("2");
    types.push_back("3");
    types.push_back("4");
    types.push_back("5");
    types.push_back("6");
    types.push_back("7");
    types.push_back("8");
    types.push_back("9");
    types.push_back("n");
    

    
    //load local image
    ofLog() << "Gathering images...";
    ofDirectory dir;
    
//    int nFilesTest = dir.listDir(ofToDataPath("testimages/"));
//    string filePathTest = dir.getPath(0);
//    newSampleTest.load(filePathTest);
    
    
    int nFiles = dir.listDir(ofToDataPath("images/"));
    if(nFiles) {
        for(int i=0; i<dir.size(); i++) {
            if (i % 20 == 0)    ofLog() << " - loading image "<<i<<" / "<<dir.size();
            string filePath = dir.getPath(i);
            string fN = ofFilePath::getFileName(filePath);
            size_t lastindex = fN.find_last_of(".");
            string rawname = fN.substr(0, lastindex);
            
            //            ofLog() << " - image name "<<" / "<<rawname<<rawname[0];
            rawname = rawname[0];
            rawNames.push_back(rawname);
            
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
    
    //do tsne
    imageTsne();
    
    // setup gui
    gui.setup("GUI");
    gui.add(filled.set("Color Mode", false));
    gui.add(scale.set("Scale", 1,1,10));
//    gui.add(thres.set("Threshold", 100,1,500));
    
    
//    for (int i = 0; i < 500; i++){
//        Sample tempSample; tempSample.setup(ofRandom(ofGetWidth()),ofRandom(ofGetHeight()),ofRandom(-ofGetWidth()/2, ofGetWidth()/2),types[ofRandom(0, 3)]);
//        samples.push_back(tempSample);
//    }
}

void ofApp::imageTsne(){
    // run t-SNE and load image points to imagePoints
    ofLog() << "Run t-SNE on images";
    imagePoints = tsne.run(encodings, 3, 25, 0.1, true);
    
    // make the images the same size
    for (int i=0; i<images.size(); i++) {
        images[i].resize(100 * images[i].getWidth() / images[i].getHeight(), 100);
    }
}

//--------------------------------------------------------------
void ofApp::update(){
//    ofBackground(100,100,100);
    
//    bool bNewFrame = false;
//    vidGrabber.update();
//    vidGrabberCopy = vidGrabber;
//    bNewFrame = vidGrabber.isFrameNew();
//
//    if (bNewFrame){
//        colorImg.setFromPixels(vidGrabber.getPixels());
//        grayImage = colorImg;
//        if (bLearnBakground == true){
//            grayBg = grayImage;
//            grayBg.threshold(thres);
//            newSample.setFromPixels(grayBg.getPixels());// the = sign copys the pixels from grayImage into grayBg (operator overloading)
//            newSample.crop(110, 50, 100, 100);
//            int rOffset = (int)ofRandom(30,50);
//            rOffsets.push_back(rOffset);
//            rawNames.push_back("n");
//
////            images.push_back(newSampleTest);
////            newSampleCopy = newSample;
////            newSampleCopy.save("newSample.png");
//            images.push_back(newSample);
//
//            ofLog() << " - encoding new sample ";
////            vector<float> encoding = ccv.encode(newSampleTest, ccv.numLayers()-1);
//            vector<float> encoding = ccv.encode(newSample, ccv.numLayers()-1);
//            encodings.push_back(encoding);
//
//            imageTsne();
//            bLearnBakground = false;
//        }
//    }
    
//    if(loadedImages.size()>0){
//        newSample = loadedImages[0];
//        images.push_back(newSample);
//
//        int rOffset = (int)ofRandom(30,50);
//        rOffsets.push_back(rOffset);
//        rawNames.push_back("n");
//
//        ofLog() << " - encoding new sample ";
//        vector<float> encoding = ccv.encode(newSample, ccv.numLayers()-1);
//        encodings.push_back(encoding);
//
//        imageTsne();
////        bLearnBakground = false;
//    }

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
//    cam.enableMouseInput();
    if(cam.getDistance()>1500){
        cam.setDistance(1500);
    }
    if(cam.getDistance()<500){
        cam.setDistance(500);
    }
    
    ofSeedRandom(0);    // always pick the same random positions
    ofTranslate(-ofGetWidth()/2, -ofGetHeight()/2,-ofGetHeight()/2);
    for (int i = 0; i < imagePoints.size(); i++){
        float x = ofMap(imagePoints[i][0], 0, 1, 0, scale * ofGetWidth());
        float y = ofMap(imagePoints[i][1], 0, 1, 0, scale * ofGetHeight());
        float z = ofMap(imagePoints[i][2], 0, 1, 0, scale * ofGetHeight());
        
        if(count ==0){
            int rOffset = (int)ofRandom(30,50);
            rOffsets.push_back(rOffset);
        }
        
        int offset = count/rOffsets[i];
        if (offset%2 ==0){
            offset = rOffsets[i] - count%rOffsets[i];
        }else{
            offset = count%rOffsets[i];
        }
        
        offset = ofMap(offset, 0, 50, -25, 25);
        
        ofPoint pos(x, y+offset*0.2, z);
        
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
        tempSample.setup(0,0,0,rawNames[i],i,filled);
        std::printf("idx: %s\n", rawNames[i].c_str());
        tempSample.savePos(pos);
        tempSample.draw(images[i]);
        if (count==0){
            samples.push_back(tempSample);
        }else{
            samples[i].savePos(pos);
        }
//        ofDrawBox(0,0,0,50);
        ofPopMatrix();
    }
    count++;
//    std::printf("size: %f\n", samples.size());
    
    for(int i=0; i<samples.size();i++){
        for(int j=0; j<samples.size();j++){
            if(i!=j and ofDist(samples[i].absPos.x, samples[i].absPos.y, samples[i].absPos.z, samples[j].absPos.x, samples[j].absPos.y, samples[j].absPos.z)<120){
                samples[i].connect(samples[j]);
            }
        }
    }
    
    cam.end();
    ofDisableDepthTest();
    gui.draw();
    
    ofPushStyle();
    ofSetHexColor(0xffffff);
//    colorImg.draw(20,20);
//    grayImage.drawROI(110, 50, 100, 100);
//    vidGrabberCopy.getTexture().drawSubsection(0,200,320,240,110, 50, 100, 100);
//    grayBg.draw(20,280);
//    newSampleTest.draw(0,200);
    newSample.draw(10,500);
    yoursample.draw(10,500);
    
    ofPopStyle();
    
    
    if (!bLearnBakground){
        ofPushStyle();
        bg.draw(0,0);
//        ofSetColor(0, 0, 0);
//        ofDrawRectangle(0, 0, ofGetWidth(), ofGetHeight());
        ofPopStyle();
        

        
//        ofPushMatrix();
//        string scaleA = "SCALE ALIASED";
//        ofRectangle bounds = verdana14A.getStringBoundingBox(scaleA, 0, 0);
//
//        ofTranslate(500 + bounds.width/2, 530 + bounds.height / 2, 0);
//        ofScale(2.0 + cos(ofGetElapsedTimef()), 2.0 + cos(ofGetElapsedTimef()), 1.0);
//
//        verdana14A.drawString(scaleA, -bounds.width/2, bounds.height/2 );
//        ofPopMatrix();
    }
    
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
    switch (key){
        case ' ':
            bLearnBakground = false;
            break;
    }
}

//--------------------------------------------------------------
void ofApp::keyReleased(int key){
    if (key == ' '){
        //Open the Open File Dialog
        ofFileDialogResult openFileResult= ofSystemLoadDialog("Select a jpg or png");
        
        //Check if the user opened a file
        if (openFileResult.bSuccess){
            
            ofLogVerbose("User selected a file");
            
            //We have a file, check it and process it
            processOpenFileSelection(openFileResult);
            bLearnBakground = true;
            
        }else {
            ofLogVerbose("User hit cancel");
        }
    }
}

void ofApp::processOpenFileSelection(ofFileDialogResult openFileResult){
    
    ofLogVerbose("getName(): "  + openFileResult.getName());
    ofLogVerbose("getPath(): "  + openFileResult.getPath());
    
    ofFile file (openFileResult.getPath());
    
    if (file.exists()){
        //Limiting this example to one image so we delete previous ones
//        processedImages.clear();
        loadedImages.clear();
        
        ofLogVerbose("The file exists - now checking the type via file extension");
        string fileExtension = ofToUpper(file.getExtension());
        
        //We only want images
        if (fileExtension == "JPG" || fileExtension == "PNG") {
            
            //Save the file extension to use when we save out
            originalFileExtension = fileExtension;
            
            //Load the selected image
            ofImage image;
            image.load(openFileResult.getPath());
            if (image.getWidth()>ofGetWidth() || image.getHeight() > ofGetHeight())
            {
                image.resize(image.getWidth()/2, image.getHeight()/2);
            }
            loadedImages.push_back(image);
            
            newSample = loadedImages[0];
            images.push_back(newSample);
            
            int rOffset = (int)ofRandom(30,50);
            rOffsets.push_back(rOffset);
            rawNames.push_back("n");
            
            ofLog() << " - encoding new sample ";
            vector<float> encoding = ccv.encode(newSample, ccv.numLayers()-1);
            encodings.push_back(encoding);
            
            imageTsne();
            
            //Make some short variables
//            int w = image.getWidth();
//            int h = image.getHeight();
            
            //Make a new image to save manipulation by copying the source
//            ofImage processedImage = image;
            
//            //Walk through the pixels
//            for (int y = 0; y < h; y++){
//
//                //Create a vector to store and sort the colors
//                vector<ofColor> colorsToSort;
//
//                for (int x = 0; x < w; x++){
//
//                    //Capture the colors for the row
//                    ofColor color = image.getColor(x, y);
//                    colorsToSort.push_back(color);
//                }
//
//                //Sort the colors for the row
//                sort (colorsToSort.begin(), colorsToSort.end(), sortColorFunction);
//
//                for (int x = 0; x < w; x++)
//                {
//                    //Put the sorted colors back in the new image
//                    processedImage.setColor(x, y, colorsToSort[x]);
//                }
//            }
//            //Store the processed image
//            processedImages.push_back(processedImage);
        }
    }
    
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
