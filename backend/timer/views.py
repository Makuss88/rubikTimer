from .models import Timer
from rest_framework import viewsets
from .serializers import TimerSerializer


class TimerViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Timer.objects.all()
    serializer_class = TimerSerializer
