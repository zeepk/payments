# Generated by Django 3.0.4 on 2020-03-19 00:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('leads', '0005_remove_event_type'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='type',
            field=models.CharField(choices=[('MO', 'Monthly'), ('WE', 'Weekly'), ('BW', 'Biweekly')], default='MO', max_length=2),
        ),
    ]
