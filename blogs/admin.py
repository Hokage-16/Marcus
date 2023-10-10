
from django.contrib import admin
from .models import BlogContent, blog

admin.site.register(blog)
admin.site.register(BlogContent)