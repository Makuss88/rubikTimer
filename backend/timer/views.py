from rest_framework.generics import ListAPIView, RetrieveAPIView

from .models import Timer
from .serializers import TimerSerializer


class TimerViewSet(ListAPIView):
    queryset = Timer.objects.all()
    serializer_class = TimerSerializer


class TimerDetailSet(RetrieveAPIView):
    queryset = Timer.objects.all()
    serializer_class = TimerSerializer
