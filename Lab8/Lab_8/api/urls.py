
from django.urls import path
from .views import (
    product_list, product_detail, product_delete,
    category_list, category_detail, category_products
)

urlpatterns = [
    path('products/', product_list, name='product_list'),
    path('products/<int:id>/', product_detail, name='product_detail'),
    path('categories/', category_list, name='category_list'),
    path('categories/<int:id>/', category_detail, name='category_detail'),
    path('categories/<int:id>/products/', category_products, name='category_products'),
    path('products/<int:id>/delete/', product_delete, name='product_delete')
]