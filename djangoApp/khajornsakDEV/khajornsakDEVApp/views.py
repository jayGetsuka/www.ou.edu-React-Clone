from django.shortcuts import render, redirect, reverse

from khajornsakDEVApp.models import *
import smtplib

# Create your views here.
def index(request):
    return render(request, 'index.html')

def about(request):
    return render(request, 'about.html')

def skills(request):
    program = Skill.objects.filter(type="Programming languages")
    framework = Skill.objects.filter(type="Framework")
    other = Skill.objects.filter(type="Other")
    return render(request, 'skills.html', {'program': program, 'framework': framework, 'other': other})

def contact(request):
    if request.method == "POST":
        sender = request.POST['email']
        receivers = ['jenoey20099@gmail.com']

        message = request.POST['msg']

        try:
            smtpObj = smtplib.SMTP('localhost')
            smtpObj.sendmail(sender, receivers, message)
            return render(request, 'contact.html',{'icon':'success', 'title':'Success', 'msg':'Successfully sent email'})
            
        except:
            return render(request, 'contact.html',{'icon':'error', 'title':'Error', 'msg':'Error: unable to send email'})
    else:
        return render(request, 'contact.html')