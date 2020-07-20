from django.db import models


class Timer(models.Model):

    times = models.CharField(max_length=20)
