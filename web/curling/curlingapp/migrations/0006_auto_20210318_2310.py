# Generated by Django 3.1.7 on 2021-03-18 22:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('curlingapp', '0005_auto_20210318_2148'),
    ]

    operations = [
        migrations.RenameField(
            model_name='match',
            old_name='match',
            new_name='matchName',
        ),
    ]