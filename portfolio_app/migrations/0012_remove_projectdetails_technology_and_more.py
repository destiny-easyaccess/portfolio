# Generated by Django 4.0.4 on 2022-09-13 04:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio_app', '0011_remove_project_skill_projectdetails_technology'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='projectdetails',
            name='technology',
        ),
        migrations.AddField(
            model_name='projectdetails',
            name='technology',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
