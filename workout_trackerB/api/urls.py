from django.urls import path
from .views import WorkoutsView

urlpatterns = [
   #this is the endpoint, you can have multiple endpoints for the same path
    path('', WorkoutsView.as_view()),
]
