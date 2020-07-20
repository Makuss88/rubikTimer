from django.urls import include, path
from rest_framework import routers
from timer import views

router = routers.DefaultRouter()
router.register('timer', views.TimerViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api/timer/', include('rest_framework.urls', namespace='rest_framework'))
]