"""
WSGI config for leadmanager project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.0/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application



# project_home = u'/leadmanager'

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'leadmanager.settings')

application = get_wsgi_application()
