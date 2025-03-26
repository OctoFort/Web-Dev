from django.db import models

# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.FloatField()
    description = models.TextField()
    photo = models.URLField()
    rating = models.FloatField(default=0)
    link = models.URLField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products')
    likes = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.name