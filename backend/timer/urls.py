from django.urls import include, path
from rest_framework import routers
from .views import TimerViewSet, TimerDetailSet

router = routers.DefaultRouter()
router.register('timer', TimerViewSet)

urlpatterns = [
    # path('', include(router.urls)),
    path('', TimerViewSet.as_view()),
    path('<pk>', TimerDetailSet.as_view()),
]