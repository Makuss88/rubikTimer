# Generated by Django 2.1.2 on 2020-07-19 20:54

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('timer', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='timer',
            name='data_make_solve',
        ),
        migrations.RemoveField(
            model_name='timer',
            name='title',
        ),
    ]