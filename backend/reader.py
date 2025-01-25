#modules
import imaplib
import email
from bs4 import BeautifulSoup
from datetime import datetime
#credentials
username ="norisrivatsa501@gmail.com"

#generated app password
app_password= "dxvz ufsb nreh ztgo"

# https://www.systoolsgroup.com/imap/
gmail_host= 'imap.gmail.com'

#set connection
mail = imaplib.IMAP4_SSL(gmail_host)

#login
mail.login(username, app_password)

#select inbox
mail.select("INBOX")

#select specific mails
_, selected_mails = mail.search(None, '(FROM "alerts@hdfcbank.net")')

#total number of mails from specific user
print("Total Messages from noreply@kaggle.com:" , len(selected_mails[0].split()))

for num in selected_mails[0].split():
    _, data = mail.fetch(num , '(RFC822)')
    _, bytes_data = data[0]

    #convert the byte data to message
    email_message = email.message_from_bytes(bytes_data)
    print("\n===========================================")

    #access data
    date = email_message["date"]
    curren_time = datetime.datetime.now().date()
    datetime_object = datetime.strptime(date, '%m/%d/%y')
    if date > curren_time :
        for part in email_message.walk():
            print("Subject: ",email_message["subject"])
            print("To:", email_message["to"])
            print("From: ",email_message["from"])
            print("Date: ",email_message["date"])
            if part.get_content_type()=="text/plain" or part.get_content_type()=="text/html":
                message = part.get_payload(decode=True)
                # print("Message: \n", message.decode())
                html_email = message.decode()
                soup = BeautifulSoup(html_email, "html.parser")
                plain_email = soup.get_text()
                print(plain_email)
                print("==========================================\n")
                break
