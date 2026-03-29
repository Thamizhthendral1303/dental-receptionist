import mysql.connector
import os


# 🔗 DATABASE CONNECTION (Railway ENV)
def dbconn():
    return mysql.connector.connect(
        host=os.getenv("MYSQLHOST"),
        user=os.getenv("MYSQLUSER"),
        password=os.getenv("MYSQLPASSWORD"),
        database=os.getenv("MYSQLDATABASE"),
        port=int(os.getenv("MYSQLPORT"))
    )



def insertuser(data):
    conn = dbconn()
    cursor = conn.cursor()

    sql = "INSERT INTO userlist (name, username, password, address, email) VALUES (%s, %s, %s, %s, %s)"
    values = (data.name, data.username, data.password, data.address, data.email)

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
    try:
        conn = dbconn()
        cursor = conn.cursor()

        sqlselect = "SELECT id FROM userlist WHERE email = %s"
        cursor.execute(sqlselect, (data.email,))
        user = cursor.fetchone()

        if user:
            sqlinsert = "INSERT INTO userotplist (otp, userid) VALUES (%s, %s)"
            cursor.execute(sqlinsert, (otpobj["otp"], user[0]))

            conn.commit()
            conn.close()

            return {
                "status": "pass",
                "userid": user[0]
            }
        else:
            conn.close()
            return {"status": "fail"}

    except Exception as e:
        print("ERROR:", e)
        return {"status": "error", "message": str(e)}



def sqlotpchk(data):
    conn = dbconn()
    cursor = conn.cursor()

    sql = "SELECT otp FROM userotplist WHERE userid=%s ORDER BY id DESC LIMIT 1"
    cursor.execute(sql, (data.userid,))
    otpval = cursor.fetchone()

    conn.close()

    if otpval:
        return {
            "status": "otpcorrect",
            "otpval": otpval[0]
        }
    else:
        return {
            "status": "fail"
        }



def loginsql(data):
    conn = dbconn()
    cursor = conn.cursor()

    sql = "SELECT id FROM userlist WHERE username = %s AND password = %s"
    cursor.execute(sql, (data.username, data.password))
    user = cursor.fetchone()

    conn.close()

    if user:
        return {
            "status": "success",
            "userid": user[0]
        }
    else:
        return {
            "status": "failed"
        }



def userdatasql(data):
    conn = dbconn()
    cursor = conn.cursor()

    sql = "SELECT * FROM userlist WHERE id = %s"
    cursor.execute(sql, (data.userid,))
    user = cursor.fetchone()

    conn.close()

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

    sql = """
    INSERT INTO patientregister 
    (patientname, patientage, patientgender, patientphno, patientaddress, patientstatus, patientcheckup, patientappointmentdate) 
    VALUES (%s,%s,%s,%s,%s,%s,%s,%s)
    """

    values = (
        data.patientname,
        data.patientage,
        data.patientgender,
        data.patientphno,
        data.patientaddress,
        data.patientstatus,
        data.patientcheckup,
        data.patientappointmentdate
    )

    cursor.execute(sql, values)
    conn.commit()
    conn.close()

    return "Insert Successfully"



def viewregistersql():
    conn = dbconn()
    cursor = conn.cursor()

    sql = """
    SELECT patientname, patientage, patientgender, patientphno, 
           patientaddress, patientstatus, patientcheckup, patientappointmentdate 
    FROM patientregister
    """

    cursor.execute(sql)
    data = cursor.fetchall()

    conn.close()

    return data