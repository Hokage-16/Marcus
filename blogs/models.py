from django.db import models
from ckeditor.fields import RichTextField


# Create your models here.

class blog(models.Model):
    title = models.CharField(max_length=200)
    publish_date = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to='blog_images/', null=True, blank=True)  # Agrega el campo 'image'
    description = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
        return self.title
    

class BlogContent(models.Model):
    blog = models.OneToOneField(blog, on_delete=models.CASCADE)
    content = RichTextField()
    tags = models.CharField(max_length=100)  # Agrega un campo para etiquetas o categorías

    def __str__(self):
        return self.blog.title

