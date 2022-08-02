from django.contrib import admin

from api.models import Workouts
from .models import Workouts 
# Register your models here.

admin.site.register(Workouts)