# Generated by Django 4.2.2 on 2023-06-29 14:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('place', '0005_doas_img'),
    ]

    operations = [
        migrations.AlterField(
            model_name='doas',
            name='id',
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
    ]
