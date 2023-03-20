# Liquality-Unity-WebGL-Template
A template and scripts for use with Unity WebGL games that gives the developer easy access to the LiqualitySDK

To use this template:
1. download this repo and extract it into your project's ASSETS folder
2. open the LIQUALITY folder in vs code or open a terminal in the directory
3. install dependencies with npm i
   3.5. change the callToSdk() function with your google auth information
4. build the webpack with npm run build
5. in your scene, ensure there is a GameObject named "Liquality"
6. attach LiqualityHandler.cs to the GameObject

You will now be able to use all of the Liquality functions in C#! LiqualityHandler.cs imports the functions from Liquality.jslib. In this code, you will simply need to call any of the functions imported at the top of the file.
