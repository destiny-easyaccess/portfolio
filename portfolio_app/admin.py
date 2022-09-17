from django.contrib import admin

# Register your models here.
from .models import *

admin.site.register(Profile)
admin.site.register(Skill)
admin.site.register(Project)
admin.site.register(Social)
admin.site.register(ProjectDetails)
admin.site.register(Message)