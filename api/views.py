from curses.ascii import HT
from django.shortcuts import render
from rest_framework import generics, status
from .models import Workouts
from .serializers import WorkoutsSerializer, CreateWorkoutSerializer
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.
class WorkoutsView(generics.CreateAPIView):
    queryset = Workouts.objects.all()
    serializer_class = WorkoutsSerializer

class CreateWorkoutsView(APIView):
    serializer_class = CreateWorkoutSerializer

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            exercises = serializer.data.exercises
            reps = serializer.data.reps
            sets = serializer.data.sets

        return Response(WorkoutsSerializer(Workouts).data, status=status.HTTP_204)