from pydantic import BaseModel

class insertingbasemodel(BaseModel):
        name:str
        username:str
        password:str
        address:str
        email:str
    
class updatebasemodel(BaseModel):
        userid:int
        newpassword:str
        confirmpassword:str

class checkbasemodel(BaseModel):
        email:str
        # email:str
        # password:str
        
class loginbasemodel(BaseModel):
        username:str
        password:str
        
class userdatabasemodel(BaseModel):
        userid:int
        
        
class otpchkbasemodel(BaseModel):
        userid:int
        

class patientregisterbasemodel(BaseModel):
        patientname:str
        patientage:int
        patientgender:str
        patientphno:int
        patientaddress:str
        patientstatus:str
        patientcheckup:str
        patientappointmentdate:str
        