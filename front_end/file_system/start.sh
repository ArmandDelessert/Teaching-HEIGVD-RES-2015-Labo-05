#!/bin/bash
pm2 start -x /front_end/bin/www --no-daemon
pm2 start -x /front_end/heartbeat.py --no-daemon