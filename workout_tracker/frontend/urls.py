from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('workouts', index),
    path('create', index)
]
