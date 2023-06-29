"""
URL configuration for marketplace project.

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
"""
from django.contrib import admin
from django.urls import path, include
from place.views import DoasViewSet
from rest_framework import routers
from django.conf import settings
from django.conf.urls.static import static

router = routers.DefaultRouter()        # é um objeto que vai gerenciar as rotas padrões
router.register(r'doar',DoasViewSet)    # é uma função que vai registrar uma rota Doas

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls))      # é a função q vai incluir as rotas que estão registradas no router
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
