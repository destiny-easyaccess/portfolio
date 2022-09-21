
from rest_framework import serializers
from .models import ProjectDetails

class ProjectDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectDetails
        fields = '__all__'