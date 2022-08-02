from django.shortcuts import render
from .models import Workouts
from .serializers import WorkoutsSerializer
from rest_framework import viewsets

# Create your views here.
class WorkoutsView(viewsets.ModelViewSet):
    queryset = Workouts.objects.all()
    serializer_class = WorkoutsSerializer

def index(request, *args,  **kwargs):
    return render(request, 'frontend/index.html')