from django.http import JsonResponse
from .models import Product, Category
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def product_delete(request, id):
    product = Product.objects.get(pk=id)
    product.delete()
    return JsonResponse({'success': True})



def product_list(request):
    products = Product.objects.all()
    data = []
    for product in products:
        data.append({
            'id': product.id,
            'name': product.name,
            'price': product.price,
            'description': product.description,
            'photo': product.photo,
            'rating': product.rating,
            'link': product.link,
            'categoryId': product.category.id,
            'likes': product.likes
        })
    return JsonResponse(data, safe=False)

def product_detail(request, id):
    product = Product.objects.get(pk=id)
    data = {
        'id': product.id,
        'name': product.name,
        'price': product.price,
        'description': product.description,
        'photo': product.photo,
        'rating': product.rating,
        'link': product.link,
        'categoryId': product.category.id,
        'likes': product.likes
    }
    return JsonResponse(data)


def category_list(request):
    categories = Category.objects.all()
    data = []
    for cat in categories:
        data.append({
            'id': cat.id,
            'name': cat.name
        })
    return JsonResponse(data, safe=False)

def category_detail(request, id):

    category = Category.objects.get(pk=id)
    data = {
        'id': category.id,
        'name': category.name
    }
    return JsonResponse(data)


def category_products(request, id):

    category = Category.objects.get(pk=id)
    products = category.products.all()
    data = []
    for product in products:
        data.append({
            'id': product.id,
            'name': product.name,
            'price': product.price,
            'description': product.description,
            'photo': product.photo,
            'rating': product.rating,
            'link': product.link,
            'categoryId': product.category.id,
            'likes': product.likes
        })
    return JsonResponse(data, safe=False)
