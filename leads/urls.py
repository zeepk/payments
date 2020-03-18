from rest_framework import routers
from .api import LeadViewSet, EventViewSet

router = routers.DefaultRouter()
router.register('api/leads', LeadViewSet, 'leads')
router.register('api/events', EventViewSet, 'events')

urlpatterns = router.urls