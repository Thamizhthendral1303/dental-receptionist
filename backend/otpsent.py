import random

import smtplib

from email.message import EmailMessage


def otpgeneration(data):
    otp = random.randint(1000,9999)
      
    server = smtplib.SMTP("smtp.gmail.com",587)
    server.starttls()

    from_mail = "bossman22220000@gmail.com"

    server.login(from_mail,'efcz eruo rvkp ngys')


    to_mail = data.email

    msg = EmailMessage()
    msg["Subject"] = "OTP VERIFICATION"
    msg["From"] = from_mail
    msg["To"] = to_mail

    msg.set_content("your OTP is : " + str(otp))

    server.send_message(msg)
    return {
        "otp" : otp,
        "status" : "OTP was Sented"
    }


