from .models import Event
from django.core.mail import send_mass_mail, send_mail
from datetime import datetime, timedelta, date

# def email_sender():
    # if (it is payday):

def getComingEvents():
    start_range = date.today()
    end_range = date.today() + timedelta(days=14)
    print(start_range)
    print(end_range)
    comingEvents = []
    for event in Event.objects.all():
        charge_date = event.start_date
        while(charge_date < start_range):
            charge_date += + timedelta(days=7)
        charge_event = (event.name, charge_date)
        comingEvents.append(charge_event)
        charge_event = (event.name, charge_date + timedelta(days=7))
        comingEvents.append(charge_event)
        # comingEvents.append(charge_date + timedelta(days=7))

    print(comingEvents)