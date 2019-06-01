from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class ProductManager(models.Manager):
    def for_user(self, user):
        return self.filter(created_by=user)


class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.IntegerField()
    quantity = models.IntegerField()
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)

    objects = ProductManager()

    def __str__(self):
        return '{}: {}'.format(self.id, self.name)

class UserProduct(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='products')
    count = models.IntegerField(default=0)


