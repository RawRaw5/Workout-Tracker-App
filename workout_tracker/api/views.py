from curses.ascii import HT
from django.shortcuts import render
from rest_framework import generics
from .models import Workouts
from .serializers import WorkoutsSerializer

# Create your views here.
class WorkoutsView(generics.CreateAPIView):
    queryset = Workouts.objects.all()
    serializer_class = WorkoutsSerializer
