#!/bin/bash

typings install
tsc
cp -r app/views dist
cp -r app/public dist