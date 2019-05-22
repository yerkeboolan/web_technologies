from rest_framework import serializers
from app.models import *
from django.contrib.auth.models import User
from rest_framework.validators import UniqueValidator


class UserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
        required=True,
        validators=[UniqueValidator(queryset=User.objects.all())]
    )
    username = serializers.CharField(
        validators=[UniqueValidator(queryset=User.objects.all())]
    )
    password = serializers.CharField()

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], validated_data['email'],
                                        validated_data['password'])
        return user

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')


class CategorySerializer(serializers.ModelSerializer):
    name = serializers.CharField()
    description = serializers.CharField()

    class Meta:
        model = Category
        fields = '__all__'


class SectionSerializer(serializers.ModelSerializer):
    name = serializers.CharField()
    image = serializers.CharField()
    description = serializers.CharField()
    address = serializers.CharField()
    category = CategorySerializer(read_only=True)

    class Meta:
        model = Section
        fields = '__all__'


class TrainerSerializer(serializers.ModelSerializer):
    name = serializers.CharField()
    image = serializers.CharField()
    description = serializers.CharField()
    rating = serializers.IntegerField(default=0)
    section = SectionSerializer(read_only=True)

    class Meta:
        model = Trainer
        fields = '__all__'


class CommentSerializer(serializers.Serializer):
    author = UserSerializer(read_only=True)
    section = SectionSerializer(read_only=True)
    date = serializers.DateTimeField(read_only=True)
    content = serializers.CharField()

    def create(self, validated_data):
        comment = Comment(**validated_data)
        comment.save()
        return comment

    def update(self, instance, validated_data):
        instance.content = validated_data.get('content', instance.content)
        instance.save()
        return instance


class TrainerCommentSerializer(serializers.Serializer):
    author = UserSerializer(read_only=True)
    trainer = TrainerSerializer(read_only=True)
    date = serializers.DateTimeField(read_only=True)
    content = serializers.CharField()

    def create(self, validated_data):
        trainerComment = TrainerComment(**validated_data)
        trainerComment.save()
        return trainerComment

    def update(self, instance, validated_data):
        instance.content = validated_data.get('content', instance.content)
        instance.save()
        return instance


class ArticleSerializer(serializers.ModelSerializer):
    title = serializers.CharField(read_only=True)
    author = UserSerializer(read_only=True)
    section = SectionSerializer(read_only=True)
    image = serializers.CharField()
    content = serializers.CharField(read_only=True)

    class Meta:
        model = Article
        fields = '__all__'


class CategoryPhotoSerializer(serializers.ModelSerializer):
    # ssection=SectionSerializer(read_only=True)
    category = CategorySerializer(read_only=True)
    image = serializers.CharField()

    class Meta:
        model = CategoryPhoto
        fields = '__all__'






