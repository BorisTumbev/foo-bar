from django.db import models


class Bar(models.Model):
    name = models.CharField(max_length=255)
    rating = models.IntegerField(default=1)
