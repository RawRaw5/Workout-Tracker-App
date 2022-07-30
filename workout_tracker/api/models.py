from django.db import models

# Create your models here. Put more logic in models than views
class Workouts(models.Model):
    exercises = models.CharField(max_length=20, default='', unique=True)
    reps = models.IntegerField()
    sets = models.IntegerField()
    completed_on = models.DateTimeField(auto_now_add=True)