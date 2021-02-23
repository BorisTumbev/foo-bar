from rest_framework import generics, permissions
from .models import Bar
from .serializers import BarSerializer


class BarList(generics.ListCreateAPIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = BarSerializer
    # queryset = Bar.objects.all()

    def get_queryset(self):
        rating = self.request.query_params.get('rating', 0)
        query_set = Bar.objects.filter(rating__gte=rating)

        return query_set


class BarDetails(generics.RetrieveDestroyAPIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = BarSerializer
    queryset = Bar.objects.all()
