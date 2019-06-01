from rest_framework import serializers
from api.models import Product, UserProduct
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email',)

class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password')

class ProductSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    price  = serializers.IntegerField()
    quantity = serializers.IntegerField()
    created_by = UserSerializer(read_only=True)

    class Meta:
        model = Product
        fields = ['id', 'name', 'price', 'quantity', 'created_by', ]


class UserProductSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    product = ProductSerializer(read_only=True)
    class Meta:
        model = UserProduct
        fields = '__all__'