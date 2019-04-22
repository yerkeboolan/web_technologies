from django.urls import path
from api import views

urlpatterns = [
    path('task_lists/', views.TaskListList.as_view(), name='task_lists'),
    path('task_lists/<int:pk>/', views.task_list_detail),
    path('task_lists/<int:pk>/tasks/', views.TasksList.as_view(), name='tasks_list'),
    path('tasks/<int:pk>/', views.task_detail)
]