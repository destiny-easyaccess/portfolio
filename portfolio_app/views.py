from django.shortcuts import render, redirect
from django.http import JsonResponse
from django.core import serializers
from .models import *
from django.core.mail import send_mail
from django.contrib import messages
from django.conf import settings
# Create your views here.

def home(request):
    profiles = Profile.objects.all()
    skills = Skill.objects.all()
    projects = Project.objects.all()
    context = {
        'profiles':profiles,
        'skills':skills,
        'projects':projects,
    }
    return render(request, 'portfolio_app/index.html', context)

def get_project_details(request, pk):
    
    projects_obj = Project.objects.get(id=pk)
    project_details = projects_obj.projectdetails_set.all()
    data = serializers.serialize('json', project_details)
    return JsonResponse({'data':data}, safe=False)

def contact(request):    
    
    sender_name = request.POST['fullname']
    sender_email = request.POST['email']
    sender_message = request.POST['body']   
    
    if request.method == 'POST':
       form = Message.objects.create(
            title = sender_name,
            email = sender_email,
            body = sender_message
        )
       form.save()
    return render(request, 'portfolio_app/index.html')