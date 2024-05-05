import network
import urequests
import ujson
import utime
from machine import Pin, PWM

wlan = network.WLAN(network.STA_IF)
wlan.active(True)

ssid = 'nomInternet'
password = 'motdepasse'
wlan.connect(ssid, password)

maisons = {
    " Gryffindor ": [35000,1,1],
    " Slytherin ": [1, 35000,1],
    " Hufflepuff ": [35000,35000,1],
    " Ravenclaw ":[1,1,35000]
    }
pwm_ledR = PWM(Pin(13, mode=Pin.OUT))
pwm_ledG = PWM(Pin(14, mode=Pin.OUT))
pwm_ledB = PWM(Pin(15, mode=Pin.OUT))
pwm_ledR.freq(1_000)
pwm_ledG.freq(1_000)
pwm_ledB.freq(1_000)

while not wlan.isconnected():
    print("not connected")
    utime.sleep(1)
    
while True:
    
    print("GET")
    url= "http://192.168.1.170:3000/iot/iot"
    print(url)
    response = urequests.get(url)
    print(response)
    
    house = response.json()["Iot"]
    response.close()
    
    print(house)
    utime.sleep(1)
    
    pwm_ledR.duty_u16(maisons[house][0])
    pwm_ledG.duty_u16(maisons[house][1])
    pwm_ledB.duty_u16(maisons[house][2])
    
    
               