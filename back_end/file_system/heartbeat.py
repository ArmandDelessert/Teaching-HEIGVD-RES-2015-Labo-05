import socket, time

SERVER_IP = '255.1.1.1'; SERVER_PORT = 4000; BEAT_PERIOD = 1

while True:
    hbSocket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    hbSocket.sendto('BACKEND', (SERVER_IP, SERVER_PORT))
    time.sleep(BEAT_PERIOD)