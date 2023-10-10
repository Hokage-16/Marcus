from django.http import HttpResponse
from django.shortcuts import get_object_or_404, render
from .models import blog

# Create your views here.
def blogs(request):
    blogs = blog.objects.all()
    return render(request, 'blogs.html', {
        'blog' : blogs
    })