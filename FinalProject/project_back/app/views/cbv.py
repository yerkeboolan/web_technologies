from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from ..models import *
from ..serializers import *
from rest_framework.permissions import *

class CategorySections(APIView):

    def get_object(self, pk):
        try:
            return Category.objects.get(id=pk)
        except Category.DoesNotExist:
            raise Http404
    def get(self, request,pk):
        category = self.get_object(pk)
        sections = Section.objects.filter(category=category)
        serializer = SectionSerializer( sections, many=True)
        return Response(serializer.data)


class CategorySectionsAdmin(APIView):
    permission_classes = (IsAdminUser,)
    def get_object(self, pk):
        try:
            return Category.objects.get(id=pk)
        except Category.DoesNotExist:
            raise Http404
    def post(self, request,pk):
        category = self.get_object(pk)
        serializer = SectionSerializer(data=request.data)
        print(request.data)
        if serializer.is_valid():
            serializer.save(category=category)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class SectionDetail(APIView):

    def get_object(self, pk):
        try:
            return Section.objects.get(id=pk)
        except Section.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        section = self.get_object(pk)
        serializer = SectionSerializer(section)
        return Response(serializer.data)

    def put(self, request, pk):
        section = self.get_object(pk)
        serializer = SectionSerializer(instance=section, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        section = self.get_object(pk)
        section.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class TrainerDetail(APIView):

    def get_object(self, pk):
        try:
            return Trainer.objects.get(id=pk)
        except Trainer.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        trainer = self.get_object(pk)
        serializer = TrainerSerializer(trainer)
        return Response(serializer.data)




class TrainerDetailAdmin(APIView):
    permission_classes = (IsAdminUser,)
    def get_object(self, pk):
        try:
            return Trainer.objects.get(id=pk)
        except Trainer.DoesNotExist:
            raise Http404


    def put(self, request, pk):
        trainer = self.get_object(pk)
        serializer = TrainerSerializer(instance=trainer, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        trainer = self.get_object(pk)
        trainer.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)



class TrainerCommentDetail(APIView):
    permission_classes = (IsAuthenticated,)
    def get_object(self, pk):
        try:
            return TrainerComment.objects.get(id=pk)
        except TrainerComment.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        trainercomment = self.get_object(pk)
        serializer = TrainerCommentSerializer(trainercomment)
        return Response(serializer.data)

    def put(self, request, pk):
        trainercomment = self.get_object(pk)
        serializer = TrainerCommentSerializer(instance=trainercomment, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        trainercomment = self.get_object(pk)
        trainercomment.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
