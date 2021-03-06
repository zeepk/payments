from django.db import models
from django.contrib.auth.models import User


class Lead(models.Model):
    name = models.CharField(max_length=100)
    message = models.CharField(max_length=100, blank=True)
    email = models.EmailField(max_length=100, unique=True)
    owner = models.ForeignKey(
        User, related_name="leads", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

class Event(models.Model):
    name = models.CharField(max_length=100)
    type = models.CharField(max_length=100)
    start_date = models.DateField()
    owner = models.ForeignKey(
        User, related_name="events", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
