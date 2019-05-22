from django.http import Http404
from django.shortcuts import get_object_or_404
from django_filters.rest_framework import DjangoFilterBackend

from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from rest_framework.pagination import PageNumberPagination, LimitOffsetPagination

from app.models import *
from app.serializers import *
from rest_framework import filters




class SectionList(generics.ListCreateAPIView):
    serializer_class = SectionSerializer
    pagination_class = LimitOffsetPagination

    def get_queryset(self):
        try:
            category = Category.objects.get(id=self.kwargs.get('pk'))
        except Category.DoesNotExist:
            raise Http404
        queryset = category.sections.all()

        return queryset

class SectionSearchList(generics.ListCreateAPIView):
    serializer_class = SectionSerializer
    pagination_class = LimitOffsetPagination
    filter_backends = (
                       filters.SearchFilter,
                       filters.OrderingFilter)

    # TODO DjangoFilterBackend

    # filterset_fields = ('name', 'price')
    filter_backends= (filters.SearchFilter,)
    # TODO SearchFilter
    search_fields = ('name',)

    # TODO OrderingFilter
   # ordering_fields = ('name', 'price')

    ordering = ('name',)

    def get_queryset(self):

        queryset = Section.objects.all()


        return queryset