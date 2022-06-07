#!/bin/bash

app_name="thinkst_canary_app"
sb_name="thinkst-canary-app"

sb_version=$(grep 'version =' "../${app_name}/default/app.conf" | awk '{print $3}' | sed 's/\.//g')

xattr -rc ../${app_name}

gtar -czf "../${sb_name}_${sb_version}.tgz" ../${app_name} --strip-components=1
