# Generated by Django 4.0.4 on 2022-09-11 16:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio_app', '0008_project_images'),
    ]

    operations = [
        migrations.RenameField(
            model_name='project',
            old_name='images',
            new_name='image',
        ),
        migrations.RenameField(
            model_name='projectdetails',
            old_name='images',
            new_name='image',
        ),
    ]
