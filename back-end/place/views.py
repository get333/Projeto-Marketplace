from django.shortcuts import render
from place.models import Doas
from place.serealizer import DoasSerializer
from rest_framework import viewsets

class DoasViewSet(viewsets.ModelViewSet):
    queryset = Doas.objects.all()       # ou seja, trás pra mim todos os alunos
    serializer_class = DoasSerializer
