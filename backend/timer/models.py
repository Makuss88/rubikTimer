from django.db import models


class Timer(models.Model):
    title = models.CharField(max_length=35)
    times = models.CharField(max_length=20)

    def __str__(self):
        return 'ułożenie nr {} i w czasie {}'.format(self.title, self.times)
