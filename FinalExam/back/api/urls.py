from django.urls import path
from api import views

urlpatterns = [
    path('products/', views.ProductListGeneric.as_view()),
    path('user_products/', views.ProductList.as_view()),
    path('user_products/<int:pk>/', views.UserProductList.as_view()),

    path('register/', views.register),
    path('login/', views.login),
    path('logout/', views.logout)
]