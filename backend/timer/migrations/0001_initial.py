# Generated by Django 2.1.2 on 2020-07-16 22:19

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Timer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=64)),
                ('times', models.CharField(max_length=20)),
                ('data_make_solve', models.DateField(auto_now_add=True)),
            ],
        ),
    ]
