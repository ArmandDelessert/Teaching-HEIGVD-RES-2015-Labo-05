import socket, time

ip_destination = '255.1.1.1'; 
port_destination = 8000; 
BEAT_PERIOD = 1

while True:
    hbSocket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    hbSocket.sendto('FRONTEND', (SERVER_IP, SERVER_PORT))
    time.sleep(BEAT_PERIOD)