from django.urls import path
from . import views

urlpatterns = [
    path('login/', views.login),
    path('logout/', views.logout),
    path('register/', views.UserCreate.as_view()),
    path('sections/<int:pk>/trainers/',views.fbv.trainers),
    path('sections/',views.SectionSearchList.as_view()),
    path('categories/',views.category_list),
    path('categories_admin/',views.category_list_admin),
    path('categories/<int:pk>/',views.fbv.category_detail),
    path('categories/<int:pk>/images/',views.category_image),
    path('categories_admin/<int:pk>/', views.fbv.category_detail_admin),
    path('categories/<int:pk>/sections/',views.CategorySections.as_view()),
    path('categories/<int:pk>/sections_admin/', views.CategorySectionsAdmin.as_view()),
    path('sections/<int:pk>/',views.SectionDetail.as_view()),
    path('sections/<int:pk>/comments/',views.comment_list),
    path('sections/<int:pk>/trainers/',views.trainers),
    path('sections/<int:pk>/trainers_admin/', views.trainers_admin),
    path('trainers/<int:pk>/',views.TrainerDetail.as_view()),
    path('trainers_admin/<int:pk>/',views.TrainerDetailAdmin.as_view()),
    path('trainers/<int:pk>/comments/',views.trainercomment_list),
    path('trainercomments/<int:pk>',views.TrainerCommentDetail.as_view())
]