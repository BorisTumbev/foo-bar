from django.http import JsonResponse
from rest_framework import generics
from .models import Bar
from .serializers import BarSerializer


class BarList(generics.ListCreateAPIView):
    serializer_class = BarSerializer

    def get_queryset(self):
        rating = self.request.query_params.get('rating', 0)
        query_set = Bar.objects.filter(rating__gte=rating)

        return query_set


class BarDetails(generics.RetrieveDestroyAPIView):
    serializer_class = BarSerializer
    queryset = Bar.objects.all()


class Logout(generics.GenericAPIView):

    def post(self, request):
        request.user.auth_token.delete()

        return JsonResponse({'msg': 'logout successful'})
