from django.urls import path

from .views import WorkoutsView
from .views import index

urlpatterns = [
    path('', index),
    # creates API endpoint that renders the view we gave it
    path('api/workouts', WorkoutsView.as_view({'get': 'list'})),
    path('create', index)
]
