from django.urls import path
from rest_framework.authtoken.views import ObtainAuthToken

from .api import BarList, BarDetails

urlpatterns = [
    path('api/login', ObtainAuthToken.as_view()),
    path('api/bars', BarList.as_view()),
    path('api/bars/<int:pk>', BarDetails.as_view())
]
