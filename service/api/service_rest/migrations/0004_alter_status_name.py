# Generated by Django 4.0.3 on 2023-10-24 17:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0003_alter_appointment_technician'),
    ]

    operations = [
        migrations.AlterField(
            model_name='status',
            name='name',
            field=models.CharField(max_length=10, unique=True),
        ),
    ]
