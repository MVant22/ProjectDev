# from django.shortcuts import render
from rest_framework import viewsets
# show a welcome message or redirect when someone
from django.http import JsonResponse
from .models import Product
from .serializers import ProductSerializer

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

def api_root(request):
    return JsonResponse({"message": "Welcome to the Smart Inventory API!"})
