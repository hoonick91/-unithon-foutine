#!/usr/bin/env bash

ZIPALIGN=/Users/jhoon/Library/Android/sdk/build-tools/26.0.2/zipalign
BUILDFILE=./platforms/android/app/build/outputs/apk/android-release-unsigned.apk

if [ "$1" = "" ]
then
    echo "NO Key Name"
else

    KEYFILE=$1

    echo "#### Start Build Android $KEYFILE.apk"

    #ionic build android

    ionic cordova build android --release ##--prod 

    if [ ! -f ./$KEYFILE.jks ]; then
        echo "### NO Keyfile!"
        echo "### Create new key file"
        keytool -genkey -v -keystore $KEYFILE.jks -alias $KEYFILE -keyalg RSA -keysize 2048 -validity 10000
    fi

    echo "#### Build APK"

    jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore $KEYFILE.jks $BUILDFILE $KEYFILE

    echo "#### Remove previous APK"
    rm $KEYFILE.apk

    echo "#### Generate Signed APK"

    $ZIPALIGN -v 4 $BUILDFILE $KEYFILE.apk
fi