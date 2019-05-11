from django.db import models
from django.contrib.auth.models import User

# Create your models here


class UserProfile(models.Model):
    user = models.OneToOneField(User)
    avatar = models.ImageField()


class Category(models.Model):
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=500)


class Section(models.Model):
    name = models.CharField(max_length=200)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='sections')


class Comment(models.Model):
    section = models.ForeignKey(Section, on_delete=models.CASCADE, related_name='commentss')