# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2018-03-23 07:55
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0009_auto_20180323_0712'),
    ]

    operations = [
        migrations.AddField(
            model_name='rootuser',
            name='profile_photo_url',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
    ]
