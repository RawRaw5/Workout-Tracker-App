from xml.etree.ElementInclude import include
from django import views
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from frontend.views import WorkoutsView
from rest_framework import routers

route = routers.DefaultRouter()
route.register("", WorkoutsView, basename='workoutview')

urlpatterns = [
    path('admin/', admin.site.urls),
#this is part of the endpoint, doing (api/) would require that in the url
    path('api/', include('api.urls')),
    path('frontend/', include(route.urls)),
    path('', include('frontend.urls'))
]+static(settings.API_URL, document_root=settings.API_ROOT)
