from django.http import Http404
from django.shortcuts import get_object_or_404
from django_filters.rest_framework import DjangoFilterBackend

from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework import filters

from api.models import Product
from api.serializers import ProductSerializer
from api.filters import ProductFilter

class ProductListGeneric(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = (DjangoFilterBackend,
                       filters.SearchFilter)
    filter_class = ProductFilter
    search_fields = ('name', )


#class ProductDetailGenericAPIView(generics.RetrieveUpdateDestroyAPIView):
 #   queryset = Product.objects.all()
  #  serializer_class = ProductSerializer
   # permission_classes = (IsAuthenticated, )