import socket, time

SERVER_IP = '255.1.1.1'; SERVER_PORT = 8000; BEAT_PERIOD = 1

print ('Sending heartbeat to IP %s , port %d\n'
    'press Ctrl-C to stop\n') % (SERVER_IP, SERVER_PORT)
while True:
    hbSocket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    hbSocket.sendto('FRONTEND', (SERVER_IP, SERVER_PORT))
    if __debug__: print 'Time: %s' % time.ctime()
    time.sleep(BEAT_PERIOD)