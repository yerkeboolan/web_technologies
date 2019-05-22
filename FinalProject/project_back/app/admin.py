from django.contrib import admin
from .models import *

admin.site.register(Category)
admin.site.register(Section)
admin.site.register(Trainer)
admin.site.register(TrainerComment)

admin.site.register(Comment)
admin.site.register(Article)

