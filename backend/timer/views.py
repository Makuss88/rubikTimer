from rest_framework import viewsets

from .models import Timer
from .serializers import TimerSerializer


class TimerViewSet(viewsets.ModelViewSet):
    serializer_class = TimerSerializer
    queryset = Timer.objects.all()
