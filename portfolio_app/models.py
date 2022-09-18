from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=100, blank=True, null=True)
    last_name = models.CharField(max_length=100, blank=True, null=True,)
    date_of_birth = models.CharField( max_length=100, blank=True, null=True)
    bio = models.TextField(null=True, blank=True)
    gender = models.CharField(max_length=100, blank=True, null=True)
    nationality = models.CharField(max_length=100, blank=True, null=True)
    city = models.CharField(max_length=100, blank=True, null=True)
    language = models.CharField(max_length=100, blank=True, null=True)
    image = models.ImageField(upload_to = 'profile', null=True, blank=True)
    def __str__(self) -> str:
        return str(self.first_name)

    @property
    def imageurl(self):
        try:
            url = self.image.url
        except:
            url = []
        return url
    


class Skill(models.Model):
    title = models.CharField(max_length=100, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    
    def __str__(self) -> str:
        return str(self.title)

class Project(models.Model):
    title = models.CharField(max_length=100, null=True, blank=True)
    image = models.ImageField(upload_to = 'projects', null=True, blank=True)
    pending = models.BooleanField(default=False)
    
    @property
    def imageurl(self):
        try:
            url = self.image.url
        except:
            url = []
        return url
    def __str__(self) -> str:
        return str(self.title)
    
class ProjectDetails(models.Model):
    title = models.CharField(max_length=100, null=True, blank=True)
    project = models.ForeignKey(Project, on_delete=models.CASCADE, )
    image = models.ImageField(upload_to = 'projects', null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    difficulties = models.TextField(null=True, blank=True)
    technology = models.TextField(null=True, blank=True)
    order_of_display = models.PositiveIntegerField( blank=True, null=True)
    def __str__(self) -> str:
        return str(self.project)
   
    
    class Meta:
        verbose_name_plural = 'projectdetails'
    


class Social(models.Model):
    title = models.CharField(max_length=100, null=True, blank=True)
    links = models.URLField()
    
    def __str__(self) -> str:
        return str(self.title)
    
class Message(models.Model):
    title = models.CharField(max_length=100,)
    email = models.EmailField()
    body = models.TextField()
    
      
    def __str__(self) -> str:
        return str(self.title)
    
