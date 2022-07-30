from rest_framework import serializers
from .models import Workouts

class WorkoutsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Workouts
        fields = ('id','exercises','reps','sets', 'completed_on')