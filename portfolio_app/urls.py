from django.urls import path
from .import views
urlpatterns = [
 path('', views.home, name='home'),   
 path('get_pro_data/<str:pk>/', views.get_project_details, name= 'get_pro_data'),
 path('contact/', views.contact, name='contact'),
]