from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from app.models import *
from app.serializers import *
import json
from rest_framework.permissions import *
from rest_framework.decorators import api_view, permission_classes


@api_view(['GET', 'POST'])
@csrf_exempt
def category_list(request):
    if request.method == 'GET':

        categorys = Category.objects.all()
        serializer = CategorySerializer(categorys, many=True)
        return JsonResponse(serializer.data, safe=False, status=200)
    elif request.method == 'POST':
        if request.user.is_superuser:
            serializer = CategorySerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return JsonResponse(serializer.data)
            return JsonResponse(serializer.errors)
    return JsonResponse({'error': 'bad request'})


@api_view(['POST'])
@csrf_exempt
@permission_classes((IsAdminUser,))
def category_list_admin(request):
    if request.method == 'POST':

        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors)
    return JsonResponse({'error': 'bad request'})


@api_view(['GET', 'PUT', 'DELETE'])
@csrf_exempt
def category_detail(request, pk):
    try:
        category = Category.objects.get(id=pk)
    except Category.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, safe=False, status=404)
    if request.method == 'GET':
        serializer = CategorySerializer(category)
        return JsonResponse(serializer.data, status=200)


@api_view(['PUT', 'DELETE'])
@csrf_exempt
@permission_classes((IsAdminUser,))
def category_detail_admin(request, pk):
    try:
        category = Category.objects.get(id=pk)
    except Category.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, safe=False, status=404)
    if request.method == 'PUT':
        body = json.loads(request.body)
        serializer = CategorySerializer(instance=category, data=body)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors)

    elif request.method == 'DELETE':
        category.delete()
        return JsonResponse({})
    return JsonResponse({'error': 'bad request'})


@api_view(['GET', 'POST'])
@csrf_exempt
@permission_classes((IsAuthenticated,))
def comment_list(request, pk):
    try:
        section = Section.objects.get(id=pk)
    except Section.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, safe=False, status=404)

    if request.method == 'GET':
        comments = Comment.userComments.filter(section=section)
        serializer = CommentSerializer(comments, many=True)
        return JsonResponse(serializer.data, safe=False, status=200)
    elif request.method == 'POST':

        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(author=request.user, section=section)

            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors)
    return JsonResponse({'error': 'bad request'})


def category_image(request, pk):
    try:
        category = Category.objects.get(id=pk)
    except Category.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, safe=False, status=404)

    if request.method == 'GET':
        images = category.categoryPhotos.all()
        serializer = CategoryPhotoSerializer(images, many=True)
        return JsonResponse(serializer.data, safe=False, status=200)


def trainers(request, pk):
    try:
        section = Section.objects.get(id=pk)
    except Section.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, safe=False, status=404)

    if request.method == 'GET':
        trainers = Trainer.objects.filter(section=section)
        serializer = TrainerSerializer(trainers, many=True)
        return JsonResponse(serializer.data, safe=False, status=200)

    return JsonResponse({'error': 'bad request'})


@api_view(['POST'])
@csrf_exempt
@permission_classes((IsAdminUser,))
def trainers_admin(request, pk):
    try:
        section = Section.objects.get(id=pk)
    except Section.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, safe=False, status=404)
    if request.method == 'POST':
        serializer = TrainerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(owner=request.user, section=section)
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors)


@api_view(['GET', 'POST'])
@csrf_exempt
# @permission_classes((IsAuthenticated, ))
def trainercomment_list(request, pk):
    try:
        trainer = Trainer.objects.get(id=pk)
    except Trainer.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, safe=False, status=404)

    if request.method == 'GET':
        comments = TrainerComment.objects.filter(trainer=trainer)
        serializer = TrainerCommentSerializer(comments, many=True)
        return JsonResponse(serializer.data, safe=False, status=200)
    elif request.method == 'POST':

        serializer = TrainerCommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(author=request.user, trainer=trainer)
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors)
    return JsonResponse({'error': 'bad request'})

