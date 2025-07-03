from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProductViewSet, api_root

router = DefaultRouter()
router.register(r'products', ProductViewSet, basename='product')

urlpatterns = [
     path('', api_root),
    path('', include(router.urls))
]
