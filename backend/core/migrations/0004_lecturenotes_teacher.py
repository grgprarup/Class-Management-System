# Generated by Django 4.0.1 on 2022-02-12 10:00

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_alter_adminannouncement_type'),
    ]

    operations = [
        migrations.AddField(
            model_name='lecturenotes',
            name='teacher',
            field=models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, related_name='teachers_name', to='core.teacher'),
        ),
    ]
