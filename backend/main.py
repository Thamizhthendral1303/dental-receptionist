from fastapi import FastAPI
from basemodel import insertingbasemodel,updatebasemodel,checkbasemodel,loginbasemodel,userdatabasemodel,otpchkbasemodel,patientregisterbasemodel
from sqlquery import insertuser,updatepassword,checkuser,loginsql,userdatasql,sqlotpchk,patientregistersql,viewregistersql

from otpsent import otpgeneration

from fastapi.middleware.cors import CORSMiddleware

import random

import math

app=FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



@app.get("/")
def home():
    return {"message": "Backend Running"}




@app.post("/insertvalue")
def inserting(data: insertingbasemodel):
    try:
        print("Incoming data:", data)
        insertuser(data)
        return "Registered Successfully..."
    except Exception as e:
        print("ERROR:", e)
        return {"error": str(e)}
    
@app.put("/updatepassword")
def updating(data:updatebasemodel):
    updatepassword(data)
    return "update successfully"



@app.post("/usercheck")
def checkuserapp(data:checkbasemodel):
    # otpobj = otpgeneration(data)
    otpobj = {"otp": "1234"}
    # print(otpobj)
    chk = checkuser(otpobj,data)
    # return chk
    if(chk["status"] == "pass"):
        return (
            {
                "status":chk["status"],
                "user":chk["userid"],

            }
        )
    else:
        return (
            {
                "status":"failed"
            }
        )
    # return "Available"

@app.post("/otpcheck") 
def otpchk(data:otpchkbasemodel):
    return sqlotpchk(data)
    


@app.post("/login")
def loginfun(data:loginbasemodel):
    return loginsql(data)
    

@app.post("/userdata")
def userdata(data:userdatabasemodel):
    return userdatasql(data)


@app.post("/patientregister")
def patientregisterapi(data:patientregisterbasemodel):
    patientregistersql(data)
    return  "Inserted"

@app.get("/viewregister")
def viewregisterapi():
    return viewregistersql()