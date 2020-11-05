from .views import TimerViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('', TimerViewSet)

urlpatterns = router.urls
