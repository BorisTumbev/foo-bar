from rest_framework import serializers

from .models import Bar


class BarSerializer(serializers.ModelSerializer):
    rating = serializers.IntegerField(min_value=1, max_value=5)

    class Meta:
        model = Bar
        fields = ('id', 'name', 'rating')
