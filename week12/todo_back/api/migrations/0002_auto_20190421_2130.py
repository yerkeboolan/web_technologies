# Generated by Django 2.2 on 2019-04-21 15:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='task',
            name='owner',
        ),
        migrations.RemoveField(
            model_name='tasklist',
            name='owner',
        ),
    ]
