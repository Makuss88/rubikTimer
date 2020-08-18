from django.db import models


class Timer(models.Model):

    times = models.CharField(max_length=20)
    timer = models.CharField(max_length=8)

    def __str__ (self):
        return 'ułożenie numer' + self.title + ' to ' + self.timer
