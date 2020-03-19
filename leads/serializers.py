from rest_framework import serializers
from leads.models import Lead, Event


class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = '__all__'

class EventSerializer(serializers.ModelSerializer):
    # type = serializers.CharField(source='get_type_display')
    class Meta:
        model = Event
        fields = '__all__'
