# Generated by Django 4.0.4 on 2022-09-13 04:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio_app', '0012_remove_projectdetails_technology_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='projectdetails',
            name='technology',
            field=models.TextField(blank=True, null=True),
        ),
    ]
