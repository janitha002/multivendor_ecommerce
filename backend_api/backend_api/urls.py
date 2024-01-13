"""
URL configuration for backend_api project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))

    http post http://127.0.0.1:8000/api/token/ username=admin password=admin    MEKEN TOKEN EKA GNNE access EKAI refresh EKAI

    http http://127.0.0.1:8000/api/vendors/ "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk5OTQ3MjkxLCJpYXQiOjE2OTk5NDY5OTEsImp0aSI6IjRlNjM4MzA5NjAwYTRhYmZhZWM0ODQyMGU1NWE3MWZkIiwidXNlcl9pZCI6MX0.WRxg-fO3SXRDxIEm199-9S62VvR8hg98lXp5Xdo_H-c"
    MEKA COMMEND EKE GAHNNA EPA WADA KARAN NA. POWERSHELL EKE GAHANN ETHAKOTA DATA ENNE.



"""
from django.contrib import admin
from django.urls import path,include
from rest_framework import views as jwt_views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView



urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/',include('main.urls')),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api-auth/',include('rest_framework.urls')),
]
