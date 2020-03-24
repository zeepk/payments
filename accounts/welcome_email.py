from django.core.mail import send_mass_mail
from django.conf import settings

def send_welcome_email(username, email):
    user_message = 'Hey ' +  username + '! Thanks for signing up for notification emails from Bill Me Later.'
    user_email = ('Welcome to Bill Me Later!', user_message, settings.EMAIL_HOST_USER, [email])
    admin_message = ('A user has signed up for Bill Me Later! Username: ' + username +'; Email: ' + email)
    admin_email= ('User Sign-Up @ Bill Me Later', admin_message, settings.EMAIL_HOST_USER, ['mhughes.ipod@gmail.com'])
    send_mass_mail((user_email, admin_email), fail_silently=False)
