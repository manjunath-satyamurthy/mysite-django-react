# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-08-16 15:42
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0004_auto_20170816_1536'),
    ]

    operations = [
        migrations.AddField(
            model_name='workhistory',
            name='company_website',
            field=models.CharField(default='http://dhilipsiva.com', max_length=250),
            preserve_default=False,
        ),
    ]
