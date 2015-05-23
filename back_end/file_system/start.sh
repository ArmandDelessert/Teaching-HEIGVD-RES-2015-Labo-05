#!/bin/bash
pm2 start -x /back_end/bin/www --no-daemon
pm2 start -x /back_end/heartbeat.py --no-daemon