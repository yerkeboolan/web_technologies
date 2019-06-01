from django.contrib import admin
from api.models import UserProduct, Product

# Register your models here.

admin.site.register(Product)
admin.site.register(UserProduct)
