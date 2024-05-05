import network   
import urequests	
import utime	
import ujson	
from machine import Pin, PWM
import random
wlan = network.WLAN(network.STA_IF) 
wlan.active(True) 

ip = wlan.ifconfig()[0]
print(ip)
ssid = 'Zen Ultra'
password = 'As@10142560.'
wlan.connect(ssid, password)
id_character = ['4c7e6819-a91a-45b2-a454-f931e4a7cce3', 'd5c4daa3-c726-426a-aa98-fb40f3fba816', '861c4cde-2f0f-4796-8d8f-9492e74b2573', '1cd6dc64-01a9-4379-9cfd-1a7167ba1bb1', '8f9aa40b-5d7c-441e-ad32-4564ecda3b70', 'af95bd8a-dfae-45bb-bc69-533860d34129', 'e32dd37c-91cd-4950-8ef2-e2ba1b87bd75','34eb6182-00cf-4c95-ae73-7d2f34066d18']

maisons = { "Gryffindor": [30000, 5, 5],
            "Slytherin": [5, 30000, 5],
            "Ravenclaw": [5, 5, 30000],
            "Hufflepuff": [30000, 30000, 5]
            }
pwm_ledR = PWM(Pin(13,mode=Pin.OUT)) 
pwm_ledR.freq(1_000)
pwm_ledG = PWM(Pin(14,mode=Pin.OUT)) 
pwm_ledG.freq(1_000)
pwm_ledB = PWM(Pin(15,mode=Pin.OUT))
pwm_ledB.freq(1_000)

while not wlan.isconnected():
    print("Aucune Connection")
    utime.sleep(1)
    pass


while(True):
    try:
        print("GET")
        url = "https://hp-api.onrender.com/api/character/" + id_character[random.randint(0, len(id_character) - 1)]
        r = urequests.get(url) 
        print(r.json()[0]["name"]) 
        maison = r.json()[0]["house"]
        r.close() 
        utime.sleep(1)
        pwm_ledR.duty_u16(maisons[maison][0])
        pwm_ledG.duty_u16(maisons[maison][1])
        pwm_ledB.duty_u16(maisons[maison][2])
        r.close() 
    except Exception as e:
        print(e)
    

