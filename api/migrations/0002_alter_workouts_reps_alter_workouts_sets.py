# Generated by Django 4.0.6 on 2022-07-29 22:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='workouts',
            name='reps',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='workouts',
            name='sets',
            field=models.IntegerField(),
        ),
    ]