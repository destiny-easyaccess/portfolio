from django.shortcuts import render, redirect
from .models import *
from django.core.mail import send_mail
from django.contrib import messages
from .serializers import *
from rest_framework.response import Response    
from rest_framework.decorators import api_view

@api_view(['GET'])
def get_project_details(request, pk):
    projects_obj = Project.objects.get(id=pk)
    project_details = projects_obj.projectdetails_set.all()
    
    return Response(ProjectDetailsSerializer(project_details, many=True, context={'request': request}).data)
   
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
