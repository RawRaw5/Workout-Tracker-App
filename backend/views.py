# backend code
from django.shortcuts import render
from django.http import HttpResponse

def login(request):
    return HttpResponse('<h1>Hello Django</h1>')

def homepage(request):
    return HttpResponse('<h2>Welcome to the homepage</h2>')

def journal(request):
    return HttpResponse('<h3>Welcome to your personanlized journal</h3>')