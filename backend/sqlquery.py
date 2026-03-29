import mysql.connector


def dbconn():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="",
        db="logintaskdb"
    )


def insertuser(data):
    conn = dbconn()
    cursor = conn.cursor()
    sql = "INSERT INTO userlist (name,username,password,address,email) VALUES (%s,%s,%s,%s,%s)"
    values = (data.name, data.username,
              data.password, data.address, data.email)
    cursor.execute(sql, values)
    conn.commit()
    conn.close()


def updatepassword(data):
    conn = dbconn()
    cursor = conn.cursor()
    sql = "UPDATE userlist SET password = %s WHERE id = %s"
    values = (data.confirmpassword, data.userid)
    cursor.execute(sql, values)
    conn.commit()
    conn.close()


def checkuser(otpobj, data):
    conn = dbconn()
    cursor = conn.cursor()

    sqlselect = "SELECT id FROM userlist WHERE email = %s"
    value = (data.email,)
    cursor.execute(sqlselect, value)
    user = cursor.fetchone()

    # print(user[0])
    sqlinsert = "INSERT INTO userotplist (otp,userid) VALUES (%s,%s)"
    values = (otpobj["otp"], user[0])
    cursor.execute(sqlinsert, values)

    conn.commit()
    conn.close()
    # return "otp was sented"
    if (user):
        return ({
            "status": "pass",
            "userid": user,
        })
    else:
        return ({
            "status": "fail"
        })


def sqlotpchk(data):
    conn = dbconn()
    cursor = conn.cursor()
    sqlgetotp = "SELECT otp FROM userotplist WHERE userid=%s ORDER BY id DESC LIMIT 1;"
    otpvalues = (data.userid,)
    cursor.execute(sqlgetotp, otpvalues)
    otpval = cursor.fetchone()
    if (otpval):
        return ({
            "status": "otpcorrect",
            "otpval": otpval,
        })
    else:
        return ({
            "status": "fail"
        })


# SELECT otp FROM `userotplist` WHERE userid=1 ORDER BY id DESC LIMIT 1;

def loginsql(data):
    conn = dbconn()
    cursor = conn.cursor()
    sql = "SELECT id FROM userlist WHERE username = %s AND password = %s"
    value = (data.username, data.password)
    cursor.execute(sql, value)

    user = cursor.fetchone()
    if user:
        return {
            "status": "success",
            "userid": user
        }
    else:
        return {
            "status": "failed",
        }


def userdatasql(data):
    conn = dbconn()
    cursor = conn.cursor()
    sql = "SELECT * FROM userlist WHERE id = %s"
    value = (data.userid,)
    cursor.execute(sql, value)
    user = cursor.fetchone()
    # print(user)
    if user:
        return {
            "status": "success",
            "userid": user[0],
            "name": user[1],
            "username": user[2],
            "address": user[4]
        }
    else:
        return {
            "status": "failed"
        }


def patientregistersql(data):
    conn = dbconn()
    cursor = conn.cursor()
    sql = "INSERT INTO patientregister (patientname,patientage,patientgender,patientphno,patientaddress,patientstatus,patientcheckup,patientappointmentdate) VALUES (%s,%s,%s,%s,%s,%s,%s,%s)"
    values = (data.patientname, data.patientage, data.patientgender, data.patientgender,
              data.patientaddress, data.patientstatus, data.patientcheckup, data.patientappointmentdate)
    cursor.execute(sql, values)
    conn.commit()
    conn.close()
    return "Insert Successfully...."


def viewregistersql():
    conn = dbconn()
    cursor = conn.cursor()
    sql = "SELECT patientname,patientage,patientgender,patientgender,patientaddress,patientstatus,patientcheckup,patientappointmentdate FROM patientregister"
    cursor.execute(sql)
    data = cursor.fetchall()
    return data
    