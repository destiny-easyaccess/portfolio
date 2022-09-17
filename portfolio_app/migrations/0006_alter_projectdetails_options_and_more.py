# Generated by Django 4.0.4 on 2022-09-11 15:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio_app', '0005_projectdetails_description_and_more'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='projectdetails',
            options={'verbose_name_plural': 'projectdetails'},
        ),
        migrations.AlterField(
            model_name='projectdetails',
            name='description',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='projectdetails',
            name='difficulties',
            field=models.TextField(blank=True, null=True),
        ),
    ]
