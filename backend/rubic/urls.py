from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('timer.urls')),
    path('api-rest/', include('rest_framework.urls')),
]
