# Generated by Django 3.0.4 on 2020-03-18 23:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('leads', '0003_auto_20200318_1105'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='start_date',
            field=models.DateField(),
        ),
    ]
