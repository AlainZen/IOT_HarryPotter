from machine import Pin, PWM
import time

led_pwm = PWM(Pin(17))
led_pwm.freq(1000)

def fade_led():
    for duty_cycle in range(0, 65535, 256):
        led_pwm.duty_u16(duty_cycle)
        time.sleep_ms(10)
        
    for duty_cycle in range(65535, 0, -256):
        led_pwm.duty_u16(duty_cycle)
        time.sleep_ms(10)
        
while True:
    fade_led()