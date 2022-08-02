from venv import create
from django.db import models

# Create your models here.
class Workouts(models.Model):
    exercises = models.CharField(max_length=20, default='', unique=True)
    reps = models.IntegerField()
    sets = models.IntegerField()
    completed_on = models.DateTimeField(auto_now_add=True) 

    def __str__(self):
        return self.exercises