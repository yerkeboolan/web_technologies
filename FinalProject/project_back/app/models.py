from django.db import models
from django.contrib.auth.models import User


class Category(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    image = models.CharField(max_length=200,
                             default="https://www.thoughtco.com/thmb/mW9npPfUuPgFtul963LFN2ORoH4=/2206x3000/filters:fill(auto,1)/185337034-56a2eac73df78cf7727b3057.jpg")
    image = models.CharField(max_length=500, default="")


class Section(models.Model):
    name = models.CharField(max_length=100)
    image = models.CharField(max_length=1000)
    description = models.CharField(max_length=4000)
    address = models.CharField(max_length=200)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='sections')


class Trainer(models.Model):
    name = models.CharField(max_length=100)
    image = models.CharField(max_length=1000)
    description = models.CharField(max_length=4000)

    rating = models.IntegerField(default=0)

    section = models.ForeignKey(Section, on_delete=models.CASCADE, related_name='trainers')


class CommentManager(models.Manager):

    def for_user(self, user):
        return self.filter(author=user)


class Comment(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='comments')
    section = models.ForeignKey(Section, on_delete=models.CASCADE, related_name='comments')
    date = models.DateTimeField()
    content = models.CharField(max_length=500)
    userComments = CommentManager()


class Article(models.Model):
    title = models.CharField(max_length=2000)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='articles')
    section = models.ForeignKey(Section, on_delete=models.CASCADE, related_name='articles')
    image = models.CharField(max_length=1000)
    content = models.CharField(max_length=4000)


class CategoryPhoto(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='categoryPhotos')
    image = models.CharField(max_length=1000)


class TrainerComment(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='trainerComments')
    date = models.DateTimeField(auto_now=True)
    trainer = models.ForeignKey(Trainer, on_delete=models.CASCADE, related_name='trainerComments')
    content = models.CharField(max_length=500)







