# Generated by Django 4.0.4 on 2022-07-15 19:12

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0006_product_image'),
    ]

    operations = [
        migrations.RenameField(
            model_name='shippingaddress',
            old_name='adress',
            new_name='address',
        ),
    ]
